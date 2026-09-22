/**
 * sync.js — 계정 로그인과 기록 동기화
 *
 * 설계 원칙
 *   1) localStorage가 정답이다. 서버는 백업·공유 채널일 뿐이다.
 *      오프라인이거나 무료 한도를 넘겨도 앱은 그대로 작동하고 동기화만 멈춘다.
 *   2) 매 문제 서버에 쓰지 않는다. 로컬 저장은 매 문제 즉시 하고(Store가 이미 함),
 *      서버 전송은 60초 디바운스 + 화면을 벗어날 때 강제 flush로 묶는다.
 *      Firestore는 문서 쓰기 1회당 과금하므로 이 차이가 25배다.
 *        매 문제 저장  1,000명 × 200문제 = 200,000 쓰기/일  →  무료 한도의 10배
 *        디바운스      1,000명 × 8      =   8,000 쓰기/일  →  무료 한도의 40%
 *   3) 덮어쓰지 않고 합친다. Store.mergeData가 단어별로 최신을 택하므로
 *      폰과 PC에서 서로 다른 단어를 공부해도 양쪽이 모두 남는다.
 *   4) 이어풀기 스냅샷(vocabQuiz.sess.*)은 동기화하지 않는다. 약 207KB이고
 *      "이 기기에서 어디까지 풀었나"라서 기기별로 다른 것이 자연스럽다.
 *
 * 전송 계층(transport)을 분리해 두었다. Firebase 코드는 firebaseTransport()
 * 하나에만 있고, 나머지 로직은 모의 전송으로 검증할 수 있다.
 */
window.Sync = (function () {
  var DEBOUNCE_MS = 60000;   // 마지막 변경 후 이 시간이 지나면 보낸다
  var RETRY_MS = 30000;      // 전송 실패 시 다시 시도할 때까지

  var transport = null;      // { load(uid) → Promise<data|null>, save(uid, data) → Promise }
  var user = null;           // { uid, name, email } | null
  var dirty = false;         // 보낼 변경이 쌓였는가
  var sending = false;       // 전송 중복 방지
  var timer = null;
  var lastSyncedAt = null;
  var lastError = null;
  var listeners = [];
  var available = false;     // SDK가 실제로 로드됐는가

  /* ── 상태 알림 ─────────────────────────────── */

  function snapshot() {
    return {
      available: available,
      user: user,
      dirty: dirty,
      sending: sending,
      lastSyncedAt: lastSyncedAt,
      lastError: lastError
    };
  }

  function emit() {
    listeners.forEach(function (fn) {
      try { fn(snapshot()); } catch (e) { /* UI 오류가 동기화를 막지 않게 */ }
    });
  }

  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
  }

  /* ── 디바운스 ──────────────────────────────── */

  function clearTimer() {
    if (timer) { clearTimeout(timer); timer = null; }
  }

  function scheduleFlush(ms) {
    clearTimer();
    timer = setTimeout(function () { flush('timer'); },
      ms === undefined ? DEBOUNCE_MS : ms);
  }

  /** 기록이 바뀌었다고 표시한다. Store.onChange가 매 문제 이걸 부른다. */
  function markDirty() {
    if (!user) return;          // 로그인 전에는 쌓을 필요가 없다
    dirty = true;
    scheduleFlush();
    emit();
  }

  /** 서버에 올릴 형태로 다듬는다. 전송 방식과 무관하게 같은 모양이 나가야 한다.
      이어풀기 스냅샷(vocabQuiz.sess.*)은 여기에 담지 않는다. */
  function buildPayload(data) {
    return {
      words: data.words || {},
      saved: data.saved || {},
      days: data.days || {},
      streak: data.streak || 0,
      lastDay: data.lastDay || null,
      totalAnswered: data.totalAnswered || 0,
      updatedAt: Date.now()
    };
  }

  /**
   * 쌓인 변경을 지금 보낸다.
   * @param reason 기록용 ('debounce' | 'exit' | 'manual' | 'signin')
   * @return Promise<boolean> 보냈는지
   */
  function flush(reason) {
    clearTimer();
    if (!user || !transport || !dirty) return Promise.resolve(false);

    /* 이미 보내는 중이면 끼어들지 않고 예약만 해 둔다.
       예약하지 않으면 전송이 끝난 뒤 아무도 다시 보내지 않아, 전송 중에 생긴
       변경이 다음 변경이나 앱 이탈 때까지 서버에 올라가지 않는다. */
    if (sending) {
      scheduleFlush();
      return Promise.resolve(false);
    }

    sending = true;
    lastError = null;
    emit();

    var payload = buildPayload(window.Store.exportData().data);
    // 보내기 시작한 시점에 dirty를 내린다. 전송 중에 생긴 변경은
    // 다시 dirty를 올리므로 아래에서 이어서 보낸다.
    dirty = false;

    return transport.save(user.uid, payload).then(function () {
      sending = false;
      lastSyncedAt = Date.now();
      emit();
      if (dirty) scheduleFlush();   // 전송 중에 쌓인 변경을 이어서 보낸다
      return true;
    }).catch(function (err) {
      sending = false;
      dirty = true;                 // 실패했으니 다시 보낼 것으로 남긴다
      lastError = errorText(err);
      emit();
      // 잠시 뒤 재시도. 앱 동작은 막지 않는다.
      scheduleFlush(RETRY_MS);
      return false;
    });
  }

  /* ── 로그인 / 로그아웃 ────────────────────────
     ⚠️ 계정이 바뀔 때 이 기기에 남은 기록을 정리하지 않으면 두 가지가 깨진다.
        localStorage 는 브라우저 하나에 하나뿐이고 "누구의 기록인가" 를 모르기 때문이다.

       ① 로그아웃해도 기록이 남아, 공용 컴퓨터에서 다음 사람이 앞사람 기록을 본다
       ② 남아 있던 기록이 다음 사람 계정으로 올라간다 — pullThenPush 가 로컬을
          기준(base)으로 합친 뒤 그 결과를 서버에 되밀기 때문이다. 그 사람이 다른
          기기에서 로그인하면 또 퍼져서, 기록이 계정 사이로 번진다

     그래서 로그인·로그아웃을 이 두 함수로 모으고, 여기서만 기기 정리를 한다.
     tools/sync-account-check.js 가 네 가지 시나리오로 검사한다. */

  function handleSignedIn(u) {
    user = u;
    /* 이 기기에 남은 기록이 다른 계정의 것이면 Store 가 지운다.
       지우지 않으면 아래 pullThenPush 가 그것을 이 계정 문서로 올려 버린다.
       같은 사람의 다른 기기이거나, 로그인 없이 쓰다가 처음 로그인하는 경우에는
       그대로 두고 합친다 — 그게 "로그인하면 기록이 합쳐진다" 는 약속이다. */
    window.Store.claimOwner(u.uid);
    emit();
    return pullThenPush();
  }

  function handleSignedOut() {
    user = null;
    dirty = false;
    clearTimer();
    /* 서버에는 signOut()이 나가기 전에 flush 로 올려 두었으므로 잃는 것은 없다.
       여기서 지우는 것은 이 기기에 남은 사본뿐이다. */
    window.Store.resetLocal();
    emit();
  }

  /**
   * 로그인 직후 양방향으로 합친다.
   *   서버 → 로컬 : Store.mergeData (단어별 최신 우선)
   *   로컬 → 서버 : 합친 결과를 되밀어 서버도 최신으로 만든다
   * 서버가 비어 있으면(첫 로그인) 로컬을 그대로 올린다.
   */
  function pullThenPush() {
    if (!user || !transport) return Promise.resolve();
    return transport.load(user.uid).then(function (remote) {
      var merged = window.Store.applyRemote(remote || {});
      return transport.save(user.uid, buildPayload(merged));
    }).then(function () {
      dirty = false;
      lastSyncedAt = Date.now();
      lastError = null;
      emit();
    }).catch(function (err) {
      lastError = errorText(err);
      dirty = true;
      emit();
    });
  }

  function errorText(err) {
    if (!err) return '알 수 없는 오류';
    var code = err.code || '';
    if (code === 'auth/popup-blocked') return '팝업이 차단되었습니다. 브라우저에서 팝업을 허용해 주세요.';
    if (code === 'auth/popup-closed-by-user') return '로그인 창이 닫혔습니다.';
    if (code === 'auth/cancelled-popup-request') return '로그인이 취소되었습니다.';
    if (code === 'auth/unauthorized-domain') {
      return '이 도메인이 Firebase에 등록되지 않았습니다. ' +
        'Firebase 콘솔 → Authentication → 설정 → 승인된 도메인에 이 사이트 주소를 추가해 주세요.';
    }
    if (code === 'auth/network-request-failed') return '네트워크에 연결할 수 없습니다.';
    if (code === 'permission-denied') return '권한이 없습니다. Firestore 보안 규칙을 확인해 주세요.';
    if (code === 'unavailable') return '서버에 연결할 수 없습니다. 잠시 뒤 다시 시도합니다.';
    return err.message || String(err);
  }

  /* ── Firebase 전송 계층 (여기에만 Firebase 코드가 있다) ── */

  function firebaseTransport(db) {
    return {
      load: function (uid) {
        return db.collection('users').doc(uid).get().then(function (snap) {
          return snap.exists ? snap.data() : null;
        });
      },
      save: function (uid, data) {
        // 문서 하나에 기록 전체를 담는다. 단어별로 문서를 나누면
        // 한 세션에 200번 쓰기가 되어 무료 한도를 바로 넘긴다.
        // 담을 내용은 buildPayload가 이미 다듬어 두었다.
        return db.collection('users').doc(uid).set(data);
      }
    };
  }

  var auth = null;

  /** Firebase SDK가 로드된 뒤 호출된다. 실패해도 앱은 그대로 돌아간다. */
  function initFirebase() {
    var cfg = window.FIREBASE;
    if (!window.firebase || !cfg || !cfg.config || !cfg.config.apiKey) {
      available = false;
      lastError = 'Firebase SDK를 불러오지 못했습니다. ' +
        'js/firebase-config.js의 sdkVersion(' + ((cfg && cfg.sdkVersion) || '?') +
        ')이 실제 존재하는 버전인지 확인해 주세요.';
      emit();
      return;
    }
    try {
      window.firebase.initializeApp(cfg.config);
      auth = window.firebase.auth();
      transport = firebaseTransport(window.firebase.firestore());
      available = true;

      auth.onAuthStateChanged(function (u) {
        if (u) handleSignedIn({ uid: u.uid, name: u.displayName || '', email: u.email || '' });
        else handleSignedOut();
      });
      emit();
    } catch (e) {
      available = false;
      lastError = errorText(e);
      emit();
    }
  }

  function signIn() {
    if (!available || !auth) {
      lastError = lastError || 'Firebase를 사용할 수 없습니다.';
      emit();
      return Promise.resolve(false);
    }
    var provider = new window.firebase.auth.GoogleAuthProvider();
    // 팝업을 쓴다. 이 앱은 authDomain과 다른 도메인(GitHub Pages)에서 돌기 때문에
    // 리다이렉트 방식은 최신 브라우저의 서드파티 저장소 격리에 걸릴 수 있다.
    return auth.signInWithPopup(provider).then(function () {
      return true;
    }).catch(function (err) {
      lastError = errorText(err);
      emit();
      return false;
    });
  }

  function signOut() {
    if (!auth) return Promise.resolve();
    // 나가기 전에 쌓인 변경을 마지막으로 올린다
    return flush('signout').then(function () {
      return auth.signOut();
    }).catch(function () {
      return auth.signOut();
    });
  }

  /* ── 이탈 시 강제 flush ─────────────────────────
     디바운스를 60초로 길게 잡아도 유실이 없는 이유가 이것이다.
     앱을 덮거나 탭을 옮기거나 브라우저를 닫는 순간 즉시 보낸다.
     pagehide는 모바일 사파리에서 unload가 안 불리는 것을 보완한다. */

  function bindExitFlush(target) {
    var t = target || window;
    t.addEventListener('visibilitychange', function () {
      if (t.document && t.document.visibilityState === 'hidden') flush('exit');
    });
    t.addEventListener('pagehide', function () { flush('exit'); });
    t.addEventListener('beforeunload', function () { flush('exit'); });
  }

  /* ── 초기화 ────────────────────────────────── */

  function start(opts) {
    opts = opts || {};
    if (opts.transport) {            // 테스트용 모의 전송
      transport = opts.transport;
      available = true;
    }
    if (opts.debounceMs) DEBOUNCE_MS = opts.debounceMs;
    if (opts.retryMs) RETRY_MS = opts.retryMs;

    // 기록이 바뀌면 자동으로 보낼 것이 있다고 표시된다
    window.Store.onChange(markDirty);
    if (!opts.skipExitFlush) bindExitFlush(opts.window);
    return snapshot();
  }

  /** 테스트에서 로그인 상태를 흉내내기 위한 진입점.
      실제 경로와 같은 함수를 타야 검사가 뜻이 있으므로 handleSignedIn/Out 을 쓴다. */
  function setUserForTest(u) {
    if (u) return handleSignedIn(u);
    handleSignedOut();
    return Promise.resolve();
  }

  return {
    start: start,
    initFirebase: initFirebase,
    signIn: signIn,
    signOut: signOut,
    flush: flush,
    markDirty: markDirty,
    onChange: onChange,
    status: snapshot,
    _test: { setUser: setUserForTest }
  };
})();
