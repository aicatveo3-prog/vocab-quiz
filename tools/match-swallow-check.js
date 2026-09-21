/**
 * tools/match-swallow-check.js — 짝 맞추기에서 탭이 삼켜지는지 본다
 *
 * "틀리게 눌렀는데 오답이 아니라 정답으로 떴다"를 재현한다. 판정 코드는
 * _key 로만 비교하므로 틀린 짝이 초록으로 바뀌는 일은 없다. 대신 오답을
 * 낸 탭 자체가 없어지면 실수가 0으로 남고, 보드를 다 맞춘 뒤 화면에
 * '완벽 클리어! 실수 0' 이 뜬다 — 사용자에게는 이게 "정답으로 떴다"다.
 *
 * 실제 js/modes.js 를 DOM 껍데기 위에서 돌려 확인한다.
 * 실행: env -u NODE_OPTIONS node tools/match-swallow-check.js
 */
'use strict';

function createElement(tag) {
  var set = {};
  var node = {
    tagName: tag, children: [], _handlers: {}, className: '',
    textContent: '', disabled: false
  };
  node.classList = {
    add: function () { for (var i = 0; i < arguments.length; i++) set[arguments[i]] = true; },
    remove: function () { for (var i = 0; i < arguments.length; i++) delete set[arguments[i]]; },
    contains: function (c) { return !!set[c]; }
  };
  node.appendChild = function (c) { node.children.push(c); return c; };
  node.addEventListener = function (e, fn) { (node._handlers[e] = node._handlers[e] || []).push(fn); };
  node.click = function () { (node._handlers.click || []).forEach(function (fn) { fn(); }); };
  Object.defineProperty(node, 'innerHTML', {
    get: function () { return ''; }, set: function () { node.children.length = 0; }
  });
  return node;
}

global.window = global;
global.document = { createElement: createElement };

/* 타이머를 손으로 돌린다. 아무것도 흘리지 않으면 "빠르게 연달아 탭"이 된다. */
var timers = [];
var seq = 0;
global.setTimeout = function (fn, ms) { timers.push({ id: ++seq, fn: fn, ms: ms }); return seq; };
global.clearTimeout = function (id) {
  timers = timers.filter(function (t) { return t.id !== id; });
};
function flush() {
  var guard = 0;
  while (timers.length && guard++ < 200) { var t = timers.shift(); t.fn(); }
}

global.window.Store = {
  record: function () {}, recordExposureOnly: function () {},
  info: function () { return { tier: 'new' }; }, tier: function () { return 'new'; }
};

var fs = require('fs');
var path = require('path');
var ROOT = path.join(__dirname, '..');
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js', 'js/data/words-d.js', 'js/data/words-e.js',
  'js/data/gloss.js', 'js/data/pron.js', 'js/quizgen.js', 'js/conquer.js',
  'js/modes.js'].forEach(function (rel) {
    new Function(fs.readFileSync(path.join(ROOT, rel), 'utf8')).call(global);
  });

var Quiz = global.window.Quiz;
var Conquer = global.window.Conquer;
var Modes = global.window.Modes;

/* 검사용 보드 하나 — 정복 A 챕터1 첫 보드 */
var sess = Conquer.createChapterSession('A', 0);
var q = null;
sess.slides.forEach(function (s) { if (!q && s.q && s.q.mode === 'match') q = s.q; });

function render() {
  timers = [];
  var body = createElement('div');
  var done = null;
  Modes.match.render(q, body, {
    boardDone: function (r) { done = r; }, reviewTier: null
  });
  var grid = body.children[body.children.length - 1];
  var head = body.children[body.children.length - 2];
  return {
    L: grid.children[0].children,
    R: grid.children[1].children,
    sub: function () { return head.children[1].textContent; },
    done: function () { return done; }
  };
}

/* 왼쪽 li 의 진짜 짝인 오른쪽 칸 번호 */
function partner(v, li) {
  for (var r = 0; r < v.R.length; r++) if (v.R[r]._key === v.L[li]._key) return r;
  return -1;
}

var fails = [];

/* ── 시나리오 1 — 틀린 탭 직후 바로 다음 탭 (타이머 안 흘림) ──────
   오답 애니메이션 340ms 안에 계속 누르면서 나머지를 다 맞춘다.
   실수가 1로 남아야 한다. */
(function () {
  var v = render();
  var n = v.L.length;
  // 일부러 틀린 짝: L0 × (L0의 짝이 아닌 오른쪽 칸)
  var wrongR = -1;
  for (var r = 0; r < n; r++) if (v.R[r]._key !== v.L[0]._key) { wrongR = r; break; }
  v.R[wrongR].click();   // 오른쪽 먼저
  v.L[0].click();        // 그 다음 왼쪽 → 오답
  var afterWrong = v.sub();

  // 흔들림이 끝나기를 기다리지 않고 바로 전부 맞춘다
  for (var i = 0; i < n; i++) {
    var p = partner(v, i);
    v.L[i].click();
    v.R[p].click();
  }
  flush();
  var st = v.done();
  if (!st) {
    fails.push('시나리오1: 보드가 끝나지 않았다 (탭이 삼켜졌다) — ' + v.sub());
  } else if (st.mistakes !== 1 || st.correct !== false) {
    fails.push('시나리오1: 실수 1회여야 하는데 mistakes=' + st.mistakes +
      ', correct=' + st.correct + ' → 화면에 "' +
      (st.correct ? '완벽 클리어! 실수 0' : '보드 클리어 · 실수 ' + st.mistakes + '회') + '"');
  }
  console.log('시나리오1 오답 직후 헤더: ' + afterWrong);
})();

/* ── 시나리오 2 — 오답 흔들림 중에 다음 짝을 두 번 탭 ──────
   L×R 오답 → 잠긴 사이에 L1, R(L1의 짝) 을 연달아 탭.
   두 탭 중 하나라도 버려지면 짝이 맞춰지지 않는다. */
(function () {
  var v = render();
  var n = v.L.length;
  var wrongR = -1;
  for (var r = 0; r < n; r++) if (v.R[r]._key !== v.L[0]._key) { wrongR = r; break; }
  v.L[0].click();
  v.R[wrongR].click();          // 오답 → 잠김
  v.L[1].click();               // 잠긴 사이 탭 1
  v.R[partner(v, 1)].click();   // 잠긴 사이 탭 2
  flush();
  if (!v.L[1].classList.contains('is-done')) {
    fails.push('시나리오2: 잠긴 사이 연달아 누른 정답 짝이 처리되지 않았다 — ' + v.sub());
  }
})();

/* ── 시나리오 3 — 오답을 연달아 두 번 ────────────────
   서로 다른 틀린 짝을 쉬지 않고 두 번 시도하면 실수 2회여야 한다. */
(function () {
  var v = render();
  var n = v.L.length;
  function wrongFor(li) {
    for (var r = 0; r < n; r++) if (v.R[r]._key !== v.L[li]._key) return r;
    return -1;
  }
  v.R[wrongFor(0)].click(); v.L[0].click();   // 오답 1
  v.R[wrongFor(1)].click(); v.L[1].click();   // 오답 2 (잠긴 사이)
  flush();
  if (!/실수 2/.test(v.sub())) {
    fails.push('시나리오3: 오답 2회여야 하는데 헤더가 "' + v.sub() + '"');
  }
})();

console.log('');
if (fails.length) {
  console.log('재현됨 — ' + fails.length + '건');
  fails.forEach(function (f) { console.log('  · ' + f); });
  process.exit(1);
}
console.log('삼켜지는 탭 없음');
process.exit(0);
