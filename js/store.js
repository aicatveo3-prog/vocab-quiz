/**
 * store.js — localStorage 기반 학습 기록 저장소
 *
 * 저장 항목
 *   words[word]  : { seen: 노출 횟수, ok: 정답 수, ng: 오답 수,
 *                    lastWrong: 타임스탬프|null, wn: 오답 노트 차수 0~3,
 *                    bm: true(북마크가 오답 노트에 넣은 단어일 때만),
 *                    wx: 오답 노트에서 뺀 시각, at: 마지막 수정 시각 }
 *   saved[word]  : { at: 시각, on: true|false }  저장(북마크)한 단어
 *   days[YYYY-MM-DD] : 그날 푼 문제 수
 *   streak       : 연속 학습일
 *   lastDay      : 마지막 학습 날짜
 *
 * ── 오답 노트 3차 구조 ──────────────────────────
 * wn은 "그 단어가 도달한 최고 차수"다. 목록은 이렇게 나온다.
 *
 *   1차 목록 = wn >= 1      ← 2차·3차 단어도 여기 모두 포함된다
 *   2차 목록 = wn >= 2      ← 3차 단어도 여기 포함된다
 *   3차 목록 = wn >= 3
 *
 * 그래서 "2차로 복사된다"는 규칙이 wn을 2로 올리는 것 하나로 표현된다.
 * 데이터가 중복되지 않으면서 1차·2차 양쪽 목록에 자동으로 나타난다.
 *
 * 승급은 "복습에서도 또 틀렸다"만 센다.
 *   일반 연습에서 틀림  → 아직 없으면 1차. 이미 1차 이상이면 그대로
 *   1차 복습에서 틀림   → 2차   /   2차 복습에서 틀림 → 3차   /   3차는 최고
 *   맞힘                → 아무 일도 없다. 목록에서 사라지지 않는다
 *
 * 맞혀서 빠지는 길은 없다. 예전에는 숙련도가 최고치에 닿으면 자동으로 빠졌지만,
 * 숙련도 시스템 자체를 없애면서 그 출구도 함께 없어졌다. 나가는 길은 둘이다.
 *
 *   ✕(removeWrong)      직접 뺀다. 어떤 단어든 언제든 된다
 *   북마크 해제           북마크가 넣은 단어(bm)를 다시 뺀다. 넣은 행동을 되돌리는 것
 *
 * bm은 "이 단어를 오답 노트에 넣은 것이 북마크다"라는 표시다. 이게 있어야
 * 북마크 해제가 무엇을 되돌려도 되는지 알 수 있다. 틀려서 들어온 단어에는
 * bm이 없으므로 북마크를 해제해도 오답 노트에 그대로 남는다. 북마크로 들어온
 * 뒤에 실제로 틀렸다면 record()가 bm을 지운다 — 그때부터는 제 실력으로
 * 오답 노트에 있는 것이라 북마크 해제와 무관해진다.
 *
 * at(마지막 수정 시각)은 기기 간 병합의 기준이다. mergeData()가 단어 하나하나에
 * 대해 at이 더 새로운 쪽을 택하기 때문에, 폰과 PC에서 서로 다른 단어를 공부해도
 * 양쪽이 모두 살아남는다. 기록 전체를 통째로 덮어쓰면 한쪽 공부가 사라진다.
 *
 * at이 없는 레코드(이 필드가 생기기 전에 만들어진 것)는 0으로 취급한다.
 * rec()은 기존 레코드에 필드를 덧붙이지 않으므로 읽는 쪽에서 방어해야 한다.
 */
window.Store = (function () {
  var KEY = 'vocabQuiz.v1';
  var MAX_TIER = 3;          // 오답 노트 차수 (1차·2차·3차)

  var state = load();

  /* 새 항목은 반드시 최상위에 둔다. load()가 최상위 키만 defaults로 메워주므로
     이 자리에 추가하면 기존 사용자 데이터가 깨지지 않는다. */
  function defaults() {
    return { words: {}, saved: {}, days: {}, streak: 0, lastDay: null, totalAnswered: 0 };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      var parsed = JSON.parse(raw);
      var base = defaults();
      Object.keys(base).forEach(function (k) {
        if (parsed[k] === undefined) parsed[k] = base[k];
      });
      return parsed;
    } catch (e) {
      return defaults();
    }
  }

  /* 기록이 바뀔 때마다 알린다. 동기화 계층이 이걸 듣고 "보낼 것이 있다"고
     표시한다. 호출부(record·toggleSaved·removeWrong…)마다 알림을 흩뿌리지 않고
     save() 한 곳에 두면 빠뜨리는 경로가 생기지 않는다. */
  var changeHooks = [];

  function onChange(fn) {
    if (typeof fn === 'function') changeHooks.push(fn);
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* 저장 실패(용량 초과 등)는 학습 진행을 막지 않는다 */
    }
    // 알림이 실패해도 저장은 이미 끝났으므로 학습을 막지 않는다
    changeHooks.forEach(function (fn) {
      try { fn(); } catch (e) { /* noop */ }
    });
  }

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function dayKey(offsetDays) {
    var d = new Date();
    d.setDate(d.getDate() - offsetDays);
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function rec(word) {
    if (!state.words[word]) {
      state.words[word] = { seen: 0, ok: 0, ng: 0, lastWrong: null, wn: 0, at: 0 };
    }
    return state.words[word];
  }

  /**
   * 정답/오답 1건 기록
   * @param reviewTier 오답 노트 복습 중이면 그 차수(1~3), 일반 연습이면 없음.
   *   승급 규칙이 이 값에 달려 있다 — 어느 차수에서 틀렸는지 알아야
   *   다음 차수로 올릴 수 있다.
   */
  function record(word, correct, reviewTier) {
    var r = rec(word);
    r.seen++;
    if (correct) {
      r.ok++;
      // 맞혀도 오답 노트에서 빼지 않는다. 한 번 맞힌 것은 운일 수 있다.
    } else {
      r.ng++;
      r.lastWrong = Date.now();
      /* 실제로 틀렸다 → 이제 북마크가 아니라 제 실력으로 오답 노트에 있다.
         표시를 지워야 나중에 북마크를 해제해도 함께 빠지지 않는다. */
      if (r.bm) delete r.bm;
      var cur = tierOf(r);
      if (!reviewTier) {
        /* 일반 연습(정복·개별 연습)에서 틀렸다.
           아직 오답 노트에 없을 때만 1차로 넣는다. 이미 1차 이상이면 그대로 둔다 —
           개별 연습은 630단어를 통째로 풀어 같은 단어를 자주 만나므로, 여기서도
           승급시키면 며칠 만에 거의 다 3차가 되어 차수의 의미가 사라진다. */
        if (cur === 0) r.wn = 1;
      } else {
        // 복습에서 틀렸다 → 그 차수의 다음 단계로. 이미 더 높으면 유지.
        r.wn = Math.max(cur, Math.min(reviewTier + 1, MAX_TIER));
      }
    }
    r.at = Date.now();      // 병합 기준 — 이 단어를 마지막으로 만진 시각
    touchDay();
    state.totalAnswered++;
    save();
  }

  /** 짝 맞추기에서 마지막 남은 쌍처럼 정오 판정 없이 노출만 기록할 때 */
  function recordExposureOnly(word) {
    var r = rec(word);
    r.seen++;
    r.at = Date.now();
    save();
  }

  function touchDay() {
    var t = today();
    state.days[t] = (state.days[t] || 0) + 1;
    if (state.lastDay !== t) {
      var yesterday = dayKey(1);
      state.streak = state.lastDay === yesterday ? state.streak + 1 : 1;
      state.lastDay = t;
    }
  }

  function info(word) {
    return state.words[word] ||
      { seen: 0, ok: 0, ng: 0, lastWrong: null, wn: 0, at: 0 };
  }

  /* ── 오답 노트 차수 ─────────────────────────── */

  /**
   * 레코드가 도달한 오답 노트 차수 (0 = 목록에 없음).
   * wn이 없는 레코드는 이 필드가 생기기 전에 만들어진 것이다.
   * 틀린 적이 있으면(lastWrong) 1차로 본다 — 기존 사용자의 오답 노트가
   * 그대로 1차에서 이어진다.
   */
  function tierOf(r) {
    if (!r) return 0;
    if (typeof r.wn === 'number') return r.wn;
    return r.lastWrong ? 1 : 0;
  }

  /** 단어의 차수 (0~3) */
  function tier(word) {
    return tierOf(state.words[word]);
  }

  /** 정렬 기준 — 오답으로 들어온 시각이 없으면(북마크로 편입) 수정 시각을 쓴다 */
  function wrongAt(r) {
    return (r && (r.lastWrong || r.at)) || 0;
  }

  /**
   * 오답 노트 목록 (최근 것 우선)
   * @param minTier 1이면 1차 목록(2·3차 포함), 2면 2차 이상, 3이면 3차만. 기본 1.
   */
  function wrongList(minTier) {
    var min = minTier || 1;
    return Object.keys(state.words)
      .filter(function (w) { return tierOf(state.words[w]) >= min; })
      .sort(function (a, b) {
        return wrongAt(state.words[b]) - wrongAt(state.words[a]);
      });
  }

  /** 차수별 개수 — 홈 카드와 차수 칩에 쓴다 */
  function wrongCounts() {
    var c = [0, 0, 0, 0];    // [미사용, 1차, 2차, 3차]
    Object.keys(state.words).forEach(function (w) {
      var t = tierOf(state.words[w]);
      for (var i = 1; i <= t && i <= MAX_TIER; i++) c[i]++;
    });
    return { 1: c[1], 2: c[2], 3: c[3] };
  }

  /**
   * 오답 노트에서 빼는 실제 동작. removeWrong(✕)과 북마크 해제가 공유한다.
   * lastWrong까지 지워야 한다 — 안 지우면 tierOf의 하위 호환 경로
   * (lastWrong이 있으면 1차)로 되살아난다.
   *
   * wx는 "이 시각에 뺐다"는 기록이다. 병합할 때 다른 기기에 남아 있던 차수가
   * max 규칙에 얹혀 단어를 되살리는 것을 막는다. 뺀 것이 그 차수보다 나중이면
   * 뺀 상태가 이긴다.
   */
  function exitWrong(r) {
    r.wn = 0;
    r.lastWrong = null;
    if (r.bm) delete r.bm;
    r.wx = Date.now();
    r.at = r.wx;
  }

  /** 오답 노트에서 완전히 뺀다 (✕ 버튼) */
  function removeWrong(word) {
    var r = state.words[word];
    if (!r) return;
    exitWrong(r);
    save();
  }

  /**
   * 이 단어가 "북마크 때문에" 오답 노트에 있는가.
   * 참이면 북마크를 해제하는 순간 오답 노트에서도 빠진다. 버튼 설명을
   * 상황에 맞게 쓰기 위해 UI가 물어본다.
   */
  function noteFromBookmark(word) {
    var r = state.words[word];
    return !!(r && r.bm && tierOf(r) === 1);
  }

  /* ── 저장(북마크)한 단어 ───────────────────────
     오답 노트는 틀리면 자동으로 들어가지만, 이건 직접 골라 담는 목록이다.

     해제할 때 항목을 지우지 않고 on:false로 남긴다. 지워 버리면 다른 기기의
     기록과 병합할 때 "이 기기엔 없다"와 "저기서 해제했다"를 구별할 수 없어
     해제한 단어가 되살아난다. */

  function isSaved(word) {
    var s = state.saved[word];
    return !!(s && s.on);
  }

  function setSaved(word, on) {
    state.saved[word] = { at: Date.now(), on: !!on };
    if (on) {
      /* 북마크하면 1차 오답 노트에 자동으로 넣는다.
         "이 단어 더 연습하고 싶다"는 뜻이므로 복습 대상에 올리는 것이 자연스럽다.
         이미 1차 이상이면 차수를 내리지 않고, 넣은 것이 북마크라고 표시해 둔다. */
      var r = rec(word);
      if (tierOf(r) === 0) { r.wn = 1; r.bm = true; r.at = Date.now(); }
    } else {
      /* 해제 = 넣었던 행동을 되돌린다. 북마크가 넣은 단어만 되돌린다. */
      var cur = state.words[word];
      if (cur && cur.bm) {
        if (tierOf(cur) === 1) {
          exitWrong(cur);
        } else {
          /* 2차 이상 — 복습에서 또 틀려 올라간 단어다(다른 기기에서 올라간 차수가
             병합돼 온 경우). 북마크 해제로 지울 성격이 아니므로 표시만 뗀다. */
          delete cur.bm;
          cur.at = Date.now();
        }
      }
    }
    save();
  }

  /** 저장 상태를 뒤집고 결과를 돌려준다 */
  function toggleSaved(word) {
    var on = !isSaved(word);
    setSaved(word, on);
    return on;
  }

  /** 저장한 단어 목록 (최근 저장 우선) */
  function savedList() {
    return Object.keys(state.saved)
      .filter(function (w) { return state.saved[w].on; })
      .sort(function (a, b) { return (state.saved[b].at || 0) - (state.saved[a].at || 0); });
  }

  /** 오늘 푼 문제 수 */
  function todayCount() {
    return state.days[today()] || 0;
  }

  /** 최근 n일 학습량 (히트맵용, 오래된 날짜부터) */
  function recentDays(n) {
    var out = [];
    for (var i = n - 1; i >= 0; i--) {
      var k = dayKey(i);
      out.push({ date: k, count: state.days[k] || 0 });
    }
    return out;
  }

  /** 전체 진척도 요약.
     @param scope 있으면 그 단어 이름 집합({word:true}) 안에서만 학습 수를 센다.
       버전별 진척도(공무원 184단어 중 몇 개 학습)를 위해 넘긴다. 없으면 전체. */
  function summary(totalWords, scope) {
    var studied = 0;
    Object.keys(state.words).forEach(function (w) {
      if (state.words[w].seen > 0 && (!scope || scope[w])) studied++;
    });
    return {
      total: totalWords,
      studied: studied,
      streak: state.streak,
      today: todayCount(),
      totalAnswered: state.totalAnswered
    };
  }

  /* ── 이 기기에서 기록 지우기 · 소유자 표시 ──────────
     localStorage 는 브라우저 하나에 하나뿐이고 "누구의 기록인가" 를 모른다.
     한 컴퓨터를 여러 사람이 쓰면 그 사실이 두 가지 사고가 된다.

       ① 로그아웃해도 기록이 남아 다음 사람이 앞사람의 기록을 본다
       ② 남아 있던 기록이 다음 사람이 로그인할 때 그 사람 계정으로 올라간다
          (Sync.pullThenPush 가 로컬을 기준으로 합친 뒤 서버에 되밀기 때문)
          그 사람이 다른 기기에서 로그인하면 또 퍼진다 — 계정 사이로 번진다

     그래서 소유자(uid)를 함께 적어 두고, 로그아웃할 때 지운다.
     tools/sync-account-check.js 가 이 동작을 검사한다. */

  var KEY_OWNER = 'vocabQuiz.owner';

  /** 이어풀기 스냅샷(vocabQuiz.sess.*)을 전부 지운다 */
  function clearAllSessions() {
    try {
      var kill = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(SESS_PREFIX) === 0) kill.push(k);
      }
      kill.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) { /* noop */ }
  }

  /* 기록과 이어풀기를 함께 비운다. 둘 다 "이 기기에 남은 학습 흔적" 이라
     하나만 지우면 이어풀기가 지운 기록을 되살린다. */
  function wipeLocal() {
    state = defaults();
    clearAllSessions();
    save();
  }

  function reset() {
    wipeLocal();
  }

  /** 로그아웃용 — 기록·이어풀기에 소유자 표시까지 지운다 */
  function resetLocal() {
    wipeLocal();
    try { localStorage.removeItem(KEY_OWNER); } catch (e) { /* noop */ }
  }

  function ownerUid() {
    try { return localStorage.getItem(KEY_OWNER); } catch (e) { return null; }
  }

  /**
   * 로그인할 때 "이 기기에 남은 기록을 이 계정 것으로 봐도 되는가" 를 정한다.
   * 봐도 되면 true — 서버와 합쳐 올린다(같은 사람의 다른 기기, 또는 로그인 없이
   * 쓰다가 처음 로그인하는 경우).
   * 다른 계정의 것이면 남은 기록을 지우고 false — 서버 것만 받아 쓴다.
   */
  function claimOwner(uid) {
    if (!uid) return true;
    var prev = ownerUid();
    var mine = (!prev || prev === uid);
    if (!mine) wipeLocal();       // 앞사람 기록을 이 계정으로 올리지 않는다
    try { localStorage.setItem(KEY_OWNER, uid); } catch (e) { /* noop */ }
    return mine;
  }

  /* ── 내보내기 / 가져오기 · 병합 ──────────────────
     기기 간 기록을 합치는 로직. 지금은 파일로 주고받지만,
     서버 동기화를 붙일 때도 전송 방식만 바뀌고 mergeData는 그대로 쓴다.

     ⚠️ 전체를 통째로 덮어쓰면 안 된다.
     폰에서 30분 공부하고 PC를 열면, PC의 옛 기록이 폰 기록을 지워 버린다.
     단어 레코드는 서로 독립적이므로 단어 하나하나에 대해 at을 비교해
     새로운 쪽을 택하면 양쪽 공부가 모두 남는다. */

  var FORMAT = 1;

  function exportData() {
    return {
      format: FORMAT,
      exportedAt: Date.now(),
      data: JSON.parse(JSON.stringify(state))
    };
  }

  function atOf(r) {
    // at이 생기기 전 레코드는 0으로 본다 (있는 쪽이 항상 이긴다)
    return (r && typeof r.at === 'number') ? r.at : 0;
  }

  /** 오답 노트에서 뺀 시각. 한 번도 뺀 적 없으면 0 */
  function wxOf(r) {
    return (r && typeof r.wx === 'number') ? r.wx : 0;
  }

  /**
   * 두 기록을 합친 새 객체를 돌려준다. 원본은 건드리지 않는다.
   * @param base    기준 기록 (보통 이 기기의 것)
   * @param incoming 합칠 기록 (파일이나 서버에서 온 것)
   */
  function mergeData(base, incoming) {
    var out = JSON.parse(JSON.stringify(base));
    if (!incoming || typeof incoming !== 'object') return out;

    /* 단어별 — at이 더 새로운 쪽을 통째로 택한다.
       내게 없는 단어는 무조건 받는다. at이 없는(0인) 오래된 레코드도
       받아야 하므로 `!mine` 조건이 필요하다 — 이게 없으면 이 필드가 생기기
       전에 만들어진 기록이 새 기기로 넘어오지 못한다. */
    var inWords = incoming.words || {};
    Object.keys(inWords).forEach(function (w) {
      var mine = out.words[w], theirs = inWords[w];
      if (!mine || atOf(theirs) > atOf(mine)) out.words[w] = theirs;

      /* 오답 노트 차수는 후퇴하면 안 된다.
         오프라인이던 기기가 나중에 그 단어를 건드리면 레코드가 더 새로워지는데,
         그 기기는 다른 기기에서 올라간 차수를 모른다. 통째로 교체하면 3차가
         1차로 되돌아간다. 그래서 차수만 따로 max를 취한다.

         단, 직접 뺀 것(✕·북마크 해제)은 예외다. max만 보면 다른 기기에 남아 있던
         차수가 방금 뺀 단어를 되살려 버린다. 그래서 퇴출 시각(wx)이 차수를 들고
         있는 쪽의 수정 시각보다 나중이면 뺀 상태를 지킨다. 그 반대라면 뺀 뒤에
         다시 틀린 것이므로 차수가 이긴다. */
      var tm = tierOf(mine), tt = tierOf(theirs);
      var top = Math.max(tm, tt);
      if (top > 0 && out.words[w]) {
        var holderAt = tm === tt
          ? Math.max(atOf(mine), atOf(theirs))
          : (tm > tt ? atOf(mine) : atOf(theirs));
        var wx = Math.max(wxOf(mine), wxOf(theirs));
        if (wx >= holderAt) {
          out.words[w].wn = 0;
          out.words[w].lastWrong = null;
          out.words[w].wx = wx;
          if (out.words[w].bm) delete out.words[w].bm;
        } else {
          out.words[w].wn = top;
        }
      }
    });

    // 저장 목록 — 해제(on:false)도 시각으로 판정해야 되살아나지 않는다
    var inSaved = incoming.saved || {};
    Object.keys(inSaved).forEach(function (w) {
      if (atOf(inSaved[w]) > atOf(out.saved[w])) out.saved[w] = inSaved[w];
    });

    /* 날짜별 학습량 — 합산이 아니라 큰 쪽을 택한다.
       합산하면 같은 파일을 두 번 가져올 때 숫자가 부풀고, 히트맵과 연속일수는
       "그날 공부했는가"만 보므로 큰 쪽으로 충분하다. */
    var inDays = incoming.days || {};
    Object.keys(inDays).forEach(function (d) {
      out.days[d] = Math.max(out.days[d] || 0, inDays[d] || 0);
    });

    // 연속 학습일 — 마지막 학습이 더 최근인 쪽의 값을 따른다
    if ((incoming.lastDay || '') > (out.lastDay || '')) {
      out.lastDay = incoming.lastDay;
      out.streak = incoming.streak || 0;
    } else if (incoming.lastDay === out.lastDay) {
      out.streak = Math.max(out.streak || 0, incoming.streak || 0);
    }

    out.totalAnswered = Math.max(out.totalAnswered || 0, incoming.totalAnswered || 0);
    return out;
  }

  /**
   * 내보낸 기록을 현재 기록에 합친다.
   * @return { ok, merged, added, updated, reason }
   */
  function importData(payload) {
    var incoming;
    try {
      var obj = typeof payload === 'string' ? JSON.parse(payload) : payload;
      // exportData() 형태와 기록 자체(data) 형태를 모두 받는다
      incoming = obj && obj.data ? obj.data : obj;
      if (!incoming || typeof incoming.words !== 'object') {
        return { ok: false, reason: '학습 기록 파일이 아닙니다.' };
      }
    } catch (e) {
      return { ok: false, reason: '파일을 읽을 수 없습니다.' };
    }

    var before = state;
    var added = 0, updated = 0;
    Object.keys(incoming.words || {}).forEach(function (w) {
      if (!before.words[w]) added++;
      else if (atOf(incoming.words[w]) > atOf(before.words[w])) updated++;
    });

    var savedBefore = savedList().length;
    state = mergeData(before, incoming);
    save();
    return {
      ok: true,
      added: added,
      updated: updated,
      total: Object.keys(state.words).length,
      // 저장 목록만 담긴 파일을 가져왔을 때 "아무 일도 안 했다"로 보이지 않게 함께 알린다
      savedDelta: savedList().length - savedBefore,
      savedTotal: savedList().length
    };
  }

  /* ── 세션 진행 상태 저장/복원 ─────────────────
     문제를 풀다 새로고침하거나 나갔다 돌아와도 이어서 풀 수 있도록
     커서 위치 + 각 슬라이드의 답변 상태를 localStorage에 보관한다.
     문제 자체(선택지·정답)는 순서가 고정이라 재생성하므로 저장하지 않는다. */

  var SESS_PREFIX = 'vocabQuiz.sess.';

  /** 세션 키를 만든다. 개별 연습은 모드+세트, 정복은 세트+챕터.
     버전(에디션)이 종합이 아니면 접두사를 붙여 진행을 분리한다. 공무원 A세트와
     종합 A세트는 출제 대상이 다르므로 이어풀기도 섞이면 안 된다. 종합('all')은
     접두사를 붙이지 않아 기존 사용자의 이어풀기 스냅샷을 그대로 잇는다. */
  function editionPrefix() {
    var ed = (window.Edition && window.Edition.get) ? window.Edition.get() : null;
    return (ed && ed !== 'all') ? ed + '_' : '';
  }
  function sessionKey(flow, modeId, setName, chapterIndex) {
    var pfx = editionPrefix();
    if (flow === 'conquer') return SESS_PREFIX + pfx + 'conq_' + setName + '_' + chapterIndex;
    return SESS_PREFIX + pfx + 'prac_' + modeId + '_' + setName;
  }

  /* ── 없어진 모드의 이어풀기 스냅샷 청소 ──────────
     '연어 고르기'를 없애면서 vocabQuiz.sess.prac_colloc_* 가 기존 사용자
     기기에 영구히 남는다. 읽는 코드가 없어 오작동은 안 하지만, 스냅샷 하나가
     수십~수백 KB라 localStorage 한도를 잡아먹는다. 한 번만 지우면 된다.
     서버와 무관하다 — 이어풀기 스냅샷은 동기화 대상이 아니다(sync.js 참고). */
  function dropRetiredSessions() {
    try {
      var kill = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(SESS_PREFIX + 'prac_colloc_') === 0) kill.push(k);
      }
      kill.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) { /* 저장소를 못 읽어도 학습을 막지 않는다 */ }
  }
  dropRetiredSessions();

  /**
   * 저장된 세션의 진행 상황. 없으면 null.
   * 문제를 다시 만들지 않고도 "몇 개까지 풀었나"를 알 수 있어야 세트 목록에서
   * 진행률과 '처음부터' 버튼을 보여줄 수 있다. answers는 슬라이드마다 한 칸씩
   * (안 푼 칸은 null) 들어 있으므로 길이가 곧 전체 문제 수다.
   */
  function sessionProgress(key) {
    var s = loadSession(key);
    if (!s || !s.answers) return null;
    var done = 0;
    s.answers.forEach(function (a) { if (a && a.a) done++; });
    return { done: done, total: s.answers.length, cursor: s.cursor || 0 };
  }

  /** 세션 상태를 저장한다. 문제를 풀 때마다 호출. */
  function saveSession(key, cursor, slides) {
    try {
      var correct = 0;
      var wrong = [];
      var answers = [];

      slides.forEach(function (s) {
        if (!s.answered) { answers.push(null); return; }
        answers.push({
          a: true,
          ch: s.chosen || null,
          ok: !!s.correct,
          bs: s.boardStats ? { m: s.boardStats.mistakes, c: !!s.boardStats.correct } : null
        });
        if (s.boardStats) {
          if (s.boardStats.correct) correct++;
          (s.boardStats.wrongWords || []).forEach(function (w) {
            if (wrong.indexOf(w) === -1) wrong.push(w);
          });
        } else {
          if (s.correct) correct++;
          else if (s.word && wrong.indexOf(s.word) === -1) wrong.push(s.word);
        }
      });

      localStorage.setItem(key, JSON.stringify({
        cursor: cursor,
        correct: correct,
        wrongWords: wrong,
        answers: answers
      }));
    } catch (e) { /* 용량 초과 등 무시 */ }
  }

  /** 저장된 세션 상태를 불러온다. 없으면 null. */
  function loadSession(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
  }

  /** 세션 상태를 slides 배열에 복원한다. */
  function restoreSession(saved, slides) {
    if (!saved || !saved.answers) return false;
    var restored = false;
    var len = Math.min(saved.answers.length, slides.length);
    for (var i = 0; i < len; i++) {
      var ans = saved.answers[i];
      if (!ans || !ans.a) continue;
      slides[i].answered = true;
      slides[i].chosen = ans.ch;
      slides[i].correct = ans.ok;
      if (ans.bs) {
        slides[i].boardStats = {
          mistakes: ans.bs.m,
          correct: ans.bs.c,
          wrongWords: []
        };
      }
      restored = true;
    }
    return restored;
  }

  /** 세션 저장을 삭제한다 (완료 후 정리). */
  function clearSession(key) {
    try { localStorage.removeItem(key); } catch (e) { /* noop */ }
  }

  return {
    MAX_TIER: MAX_TIER,
    record: record,
    recordExposureOnly: recordExposureOnly,
    info: info,
    tier: tier,
    wrongList: wrongList,
    wrongCounts: wrongCounts,
    removeWrong: removeWrong,
    noteFromBookmark: noteFromBookmark,
    isSaved: isSaved,
    toggleSaved: toggleSaved,
    setSaved: setSaved,
    savedList: savedList,
    exportData: exportData,
    importData: importData,
    mergeData: mergeData,
    onChange: onChange,
    /** 서버에서 받은 기록을 합쳐 넣는다 (동기화 계층이 사용) */
    applyRemote: function (remote) {
      state = mergeData(state, remote);
      save();
      return exportData().data;
    },
    todayCount: todayCount,
    recentDays: recentDays,
    summary: summary,
    reset: reset,
    /* 계정 경계용 — Sync 가 로그아웃·로그인에서 쓴다 */
    resetLocal: resetLocal,
    claimOwner: claimOwner,
    ownerUid: ownerUid,
    sessionKey: sessionKey,
    saveSession: saveSession,
    loadSession: loadSession,
    sessionProgress: sessionProgress,
    restoreSession: restoreSession,
    clearSession: clearSession
  };
})();
