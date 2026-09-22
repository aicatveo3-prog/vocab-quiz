/**
 * sync-account-check.js — 계정 경계 검사
 *
 *   node tools/sync-account-check.js
 *
 * 확인하는 것: 한 기기를 여러 사람이 쓸 때 기록이 섞이지 않는가.
 *
 * localStorage 는 브라우저 하나에 하나뿐이고 "누구의 기록인가" 를 모른다.
 * 그래서 로그아웃·계정 전환에서 두 가지가 깨질 수 있다.
 *
 *   ① 로그아웃해도 이 기기에 기록이 남는다
 *      → 공용 컴퓨터에서 다음 사람이 앞사람의 학습 기록을 그대로 본다
 *
 *   ② 남아 있던 기록이 다음 사람 계정으로 올라간다
 *      → pullThenPush 는 로컬을 기준(base)으로 합친 뒤 그 결과를 서버에 쓴다.
 *        로컬에 앞사람 기록이 남아 있으면 그것이 뒷사람 문서로 복사된다.
 *        뒷사람이 다른 기기에서 로그인하면 또 퍼진다 — 기록이 계정 사이로 번진다
 *
 * 검사 4종을 모의 전송(transport)으로 돌린다. Firebase 는 쓰지 않는다.
 */

/* ── localStorage 대역 ───────────────────────── */
function makeStorage() {
  var map = {};
  return {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(map, k) ? map[k] : null; },
    setItem: function (k, v) { map[k] = String(v); },
    removeItem: function (k) { delete map[k]; },
    key: function (i) { return Object.keys(map)[i]; },
    get length() { return Object.keys(map).length; },
    _dump: function () { return map; }
  };
}

var fs = require('fs'), path = require('path');
var ROOT = path.join(__dirname, '..');

/* 검사마다 store/sync 를 새로 읽어 상태를 완전히 초기화한다 */
function freshApp(serverDocs) {
  var storage = makeStorage();
  global.localStorage = storage;
  var window = { localStorage: storage };
  global.window = window;

  ['js/store.js', 'js/sync.js'].forEach(function (rel) {
    (new Function('window', fs.readFileSync(path.join(ROOT, rel), 'utf8')))(window);
  });

  var docs = serverDocs || {};
  var transport = {
    load: function (uid) { return Promise.resolve(docs[uid] || null); },
    save: function (uid, data) { docs[uid] = JSON.parse(JSON.stringify(data)); return Promise.resolve(); }
  };
  window.Sync.start({ transport: transport, skipExitFlush: true, debounceMs: 999999 });
  return { S: window.Store, Y: window.Sync, docs: docs, storage: storage };
}

/* 그 기기(localStorage)에 기록이 있는 단어 목록 */
function localWords(S) { return Object.keys(S.exportData().data.words || {}); }
/* 서버 문서에 기록이 있는 단어 목록 */
function docWords(doc) { return Object.keys((doc && doc.words) || {}); }

var fails = [];
function check(name, ok, detail) {
  console.log('  ' + (ok ? '✅' : '❌') + '  ' + name);
  if (detail) console.log('        ' + detail);
  if (!ok) fails.push(name);
}

/* A 가 이미 쓰던 계정이라고 가정 — 서버에 apple 기록이 있다 */
function serverWith(word) {
  var w = {}; w[word] = { seen: 3, ok: 2, ng: 1, wn: 1, at: 1000 };
  return { words: w, saved: {}, days: {}, streak: 1, lastDay: '2026-01-01', totalAnswered: 3 };
}

console.log('── 계정 경계 검사 ───────────────────────────\n');

/* ── 시나리오 1 : 로그인 → 공부 → 로그아웃 ────── */
console.log('시나리오 1  새 컴퓨터에서 A 가 로그인·공부·로그아웃');
var app1 = freshApp({ userA: serverWith('apple') });
app1.Y._test.setUser({ uid: 'userA', name: 'A', email: 'a@x.com' })
  .then(function () {
    app1.S.record('banana', false);          // A 가 banana 를 틀렸다
    return app1.Y.flush('manual');
  })
  .then(function () {
    return app1.Y._test.setUser(null);       // 로그아웃 (onAuthStateChanged(null))
  })
  .then(function () {
    var left = localWords(app1.S);
    check('로그아웃하면 이 기기에 기록이 남지 않는다',
      left.length === 0,
      left.length ? '남은 단어: ' + left.join(', ') : '');

    /* ── 시나리오 2 : 같은 기기에서 B 가 로그인 ── */
    console.log('\n시나리오 2  같은 기기에서 B 가 로그인 (A 는 로그아웃한 상태)');
    return app1.Y._test.setUser({ uid: 'userB', name: 'B', email: 'b@x.com' });
  })
  .then(function () {
    return app1.Y.flush('manual');
  })
  .then(function () {
    var b = docWords(app1.docs.userB);
    var stolen = b.filter(function (w) { return w === 'apple' || w === 'banana'; });
    check('B 의 서버 기록에 A 의 단어가 섞이지 않는다',
      stolen.length === 0,
      stolen.length ? 'B 문서에 들어간 A 의 단어: ' + stolen.join(', ') : 'B 문서: ' + (b.join(', ') || '(빈 상태)'));

    var seen = localWords(app1.S).filter(function (w) { return w === 'apple' || w === 'banana'; });
    check('B 화면에 A 의 단어가 보이지 않는다',
      seen.length === 0,
      seen.length ? '보이는 A 의 단어: ' + seen.join(', ') : '');

    /* ── 시나리오 3 : 로그아웃 없이 브라우저만 닫은 경우 ── */
    console.log('\n시나리오 3  A 가 로그아웃하지 않고 브라우저만 닫은 뒤 B 가 로그인');
    var app3 = freshApp({ userA: serverWith('apple'), userB: serverWith('cherry') });
    return app3.Y._test.setUser({ uid: 'userA', name: 'A', email: 'a@x.com' })
      .then(function () {
        /* 로그아웃 절차 없이 곧바로 다른 계정으로 로그인한다.
           브라우저를 닫았다 열면 localStorage 는 그대로 남아 있으므로 같은 상황이다. */
        return app3.Y._test.setUser({ uid: 'userB', name: 'B', email: 'b@x.com' });
      })
      .then(function () { return app3.Y.flush('manual'); })
      .then(function () {
        var b3 = docWords(app3.docs.userB);
        var stolen3 = b3.filter(function (w) { return w === 'apple'; });
        check('로그아웃을 안 했어도 A 의 기록이 B 계정으로 올라가지 않는다',
          stolen3.length === 0,
          stolen3.length ? 'B 문서에 들어간 A 의 단어: ' + stolen3.join(', ') : 'B 문서: ' + (b3.join(', ') || '(빈 상태)'));

        /* A 의 서버 기록은 그대로 있어야 한다 — 지우는 것은 이 기기의 사본뿐이다 */
        var a3 = docWords(app3.docs.userA);
        check('A 의 서버 기록은 그대로 남아 있다',
          a3.indexOf('apple') !== -1,
          'A 문서: ' + (a3.join(', ') || '(빈 상태)'));
      });
  })
  /* ── 시나리오 4 : 로그인 없이 쓰다가 처음 로그인 ──
     이건 깨져서는 안 되는 기능이다. "로그인하면 기존 기록이 계정에 올라간다" 는
     약속이므로, 계정 경계를 세우면서 이것까지 막아 버리면 고친 것이 아니다. */
  .then(function () {
    console.log('\n시나리오 4  로그인 없이 공부하다가 처음 로그인 (기록이 올라가야 한다)');
    var app4 = freshApp({});                 // 서버는 비어 있다
    app4.S.record('durian', false);          // 로그인 전에 공부
    app4.S.record('elderberry', true);
    return app4.Y._test.setUser({ uid: 'userC', name: 'C', email: 'c@x.com' })
      .then(function () { return app4.Y.flush('manual'); })
      .then(function () {
        var c = docWords(app4.docs.userC);
        check('로그인 전에 쌓은 기록이 내 계정으로 올라간다',
          c.indexOf('durian') !== -1 && c.indexOf('elderberry') !== -1,
          'C 문서: ' + (c.join(', ') || '(빈 상태)'));
      });
  })

  /* ── 시나리오 5 : 같은 사람이 두 기기에서 ──────
     폰과 PC 에서 서로 다른 단어를 공부하면 양쪽이 모두 남아야 한다. */
  .then(function () {
    console.log('\n시나리오 5  같은 사람이 기기 두 대에서 공부 (양쪽이 합쳐져야 한다)');
    var shared = {};                          // 두 기기가 같은 서버를 본다
    var phone = freshApp(shared);
    var pc = freshApp(shared);
    var me = { uid: 'userD', name: 'D', email: 'd@x.com' };

    return phone.Y._test.setUser(me)
      .then(function () {
        phone.S.record('fig', false);         // 폰에서 fig
        return phone.Y.flush('manual');
      })
      .then(function () { return pc.Y._test.setUser(me); })
      .then(function () {
        pc.S.record('grape', false);          // PC 에서 grape
        return pc.Y.flush('manual');
      })
      .then(function () {
        var d = docWords(shared.userD);
        check('두 기기에서 공부한 단어가 모두 남는다',
          d.indexOf('fig') !== -1 && d.indexOf('grape') !== -1,
          'D 문서: ' + (d.join(', ') || '(빈 상태)'));

        var onPc = localWords(pc.S);
        check('PC 화면에 폰에서 공부한 단어도 보인다',
          onPc.indexOf('fig') !== -1,
          'PC 로컬: ' + (onPc.join(', ') || '(빈 상태)'));
      });
  })

  /* ── 시나리오 6 : 로그아웃했다가 같은 사람이 다시 로그인 ──
     로그아웃 때 이 기기 사본을 지웠으니, 다시 로그인하면 서버에서 되받아야 한다. */
  .then(function () {
    console.log('\n시나리오 6  로그아웃했다가 같은 사람이 다시 로그인 (되받아야 한다)');
    var app6 = freshApp({ userE: serverWith('honeydew') });
    var me = { uid: 'userE', name: 'E', email: 'e@x.com' };
    return app6.Y._test.setUser(me)
      .then(function () { return app6.Y._test.setUser(null); })   // 로그아웃
      .then(function () {
        check('로그아웃 직후에는 이 기기에 기록이 없다',
          localWords(app6.S).length === 0);
        return app6.Y._test.setUser(me);                          // 다시 로그인
      })
      .then(function () {
        var back = localWords(app6.S);
        check('다시 로그인하면 내 기록이 서버에서 돌아온다',
          back.indexOf('honeydew') !== -1,
          '로컬: ' + (back.join(', ') || '(빈 상태)'));
      });
  })

  .then(function () {
    console.log('');
    if (fails.length) {
      console.log('❌ 검사 실패 ' + fails.length + '건');
      fails.forEach(function (f) { console.log('  · ' + f); });
      process.exit(1);
    }
    console.log('✅ 검사 통과 — 기기를 여러 사람이 써도 기록이 섞이지 않는다');
    /* 디바운스 타이머가 남아 있어 그냥 두면 프로세스가 끝나지 않는다 */
    process.exit(0);
  })
  .catch(function (e) {
    console.log('\n❌ 검사 도중 오류: ' + (e && e.stack || e));
    process.exit(1);
  });
