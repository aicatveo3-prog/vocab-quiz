/**
 * tools/match-order-check.js — 짝 맞추기 클릭 순서 검증
 *
 * "오른쪽을 먼저 누르고 왼쪽을 누르면 틀린 짝이 정답으로 처리된다"는
 * 제보를 재현하기 위한 도구다. 추측이나 재구현으로는 확인이 안 되므로
 * DOM 껍데기를 만들어 실제 js/modes.js 의 renderMatch 를 그대로 돌린다.
 *
 * 하는 일
 *   ① 실제 출제 경로로 모든 보드를 만든다 (개별 연습 + 정복 모드 전 챕터)
 *   ② 보드마다 같은 _key 가 두 번 들어갔는지 검사한다
 *      — 같은 단어가 두 줄에 있으면 눈으로는 틀린 짝인데 코드는 정답으로 본다
 *   ③ 보드마다 뜻 문자열이 겹치는지 검사한다
 *   ④ 모든 틀린 조합을 왼→오, 오→왼 두 순서로 실제 클릭해 결과를 비교한다
 *
 * 실행: env -u NODE_OPTIONS node tools/match-order-check.js
 */
'use strict';

/* ── 최소 DOM 껍데기 ───────────────────────────
   renderMatch 가 쓰는 것만 만든다: createElement / className / textContent /
   appendChild / classList / addEventListener / children / disabled / innerHTML */
function makeClassList(node) {
  var set = {};
  return {
    add: function () {
      for (var i = 0; i < arguments.length; i++) set[arguments[i]] = true;
      sync();
    },
    remove: function () {
      for (var i = 0; i < arguments.length; i++) delete set[arguments[i]];
      sync();
    },
    contains: function (c) { return !!set[c]; },
    _all: function () { return Object.keys(set); }
  };
  function sync() { node._classes = Object.keys(set); }
}

function createElement(tag) {
  var node = {
    tagName: tag,
    children: [],
    _handlers: {},
    _classes: [],
    className: '',
    textContent: '',
    disabled: false
  };
  node.classList = makeClassList(node);
  node.appendChild = function (c) { node.children.push(c); return c; };
  node.addEventListener = function (evt, fn) {
    (node._handlers[evt] = node._handlers[evt] || []).push(fn);
  };
  node.click = function () {
    (node._handlers.click || []).forEach(function (fn) { fn(); });
  };
  Object.defineProperty(node, 'innerHTML', {
    get: function () { return ''; },
    set: function () { node.children.length = 0; }
  });
  return node;
}

global.window = global;
global.document = { createElement: createElement };

/* setTimeout 을 직접 돌린다. 오답 흔들림 340ms, 보드 완료 380ms 를
   실제로 기다리지 않고 원하는 시점에 흘려보낸다. */
var timers = [];
var realSetTimeout = global.setTimeout;
var tid = 0;
global.setTimeout = function (fn, ms) {
  timers.push({ id: ++tid, fn: fn, ms: ms });
  return tid;
};
global.clearTimeout = function (id) {
  timers = timers.filter(function (t) { return t.id !== id; });
};
function runTimers() {
  var guard = 0;
  while (timers.length && guard++ < 100) {
    var t = timers.shift();
    t.fn();
  }
}

/* ── Store 껍데기 ───────────────────────────── */
var recorded = [];
global.window.Store = {
  record: function (w, ok, tier) { recorded.push({ w: w, ok: ok, tier: tier }); },
  recordExposureOnly: function (w) { recorded.push({ w: w, ok: 'exposure' }); },
  info: function () { return { tier: 'new', correct: 0, wrong: 0, seen: 0 }; },
  tier: function () { return 'new'; }
};

/* ── 실제 코드 로드 ────────────────────────────── */
var fs = require('fs');
var path = require('path');
var ROOT = path.join(__dirname, '..');
function load(rel) {
  var code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  // 최상위 this/window 를 global 로 두고 평가한다
  new Function(code).call(global);
}
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js',
  'js/data/words-d.js', 'js/data/words-e.js', 'js/data/words-f.js', 'js/data/gloss.js', 'js/data/pron.js',
  'js/quizgen.js', 'js/conquer.js', 'js/modes.js'].forEach(load);

var Quiz = global.window.Quiz;
var Conquer = global.window.Conquer;
var Modes = global.window.Modes;

/* ── 보드 수집 ─────────────────────────────── */
var boards = [];

Conquer.SETS.forEach(function (set) {
  // 개별 연습 — 세트 전체 짝 맞추기
  var practice = Quiz.buildSession('match', 9999, null, true, set.words);
  (practice || []).forEach(function (q, i) {
    boards.push({ where: '연습 ' + set.id + ' 보드' + (i + 1), q: q });
  });

  // 정복 모드 — 전 챕터
  var chapters = Conquer.buildChapters(set);
  chapters.forEach(function (ch, ci) {
    var sess = Conquer.createChapterSession(set.id, ci);
    if (!sess) return;
    sess.slides.forEach(function (sl, si) {
      if (sl.q && sl.q.mode === 'match') {
        boards.push({ where: '정복 ' + set.id + ' ch' + (ci + 1) + ' 슬라이드' + (si + 1), q: sl.q });
      }
    });
  });
});

// 오답 복습 — 전용 경로(buildMatchReview)를 쓰므로 따로 확인한다.
// 여러 크기로 돌려 채움(filler)이 끼는 경우까지 본다.
Conquer.SETS.forEach(function (set) {
  [3, 4, 7, 12, 23].forEach(function (n) {
    var targets = set.words.slice(0, n).map(function (w) { return w.word; });
    (Quiz.buildSession('match', 9999, targets, true, set.words) || [])
      .forEach(function (q, i) {
        boards.push({ where: '복습 ' + set.id + '/' + n + ' 보드' + (i + 1), q: q });
      });
  });
});

console.log('수집한 짝 맞추기 보드: ' + boards.length + '개');

// 세트를 넘어 같은 표제어가 두 번 들어 있으면 한 보드에 같은 단어가
// 두 줄로 뜰 수 있다. 그러면 눈으로는 틀린 짝인데 코드는 정답으로 본다.
var headDup = [];
var seenHead = {};
Quiz.ALL.forEach(function (w) {
  if (seenHead[w.word]) headDup.push(w.word);
  seenHead[w.word] = true;
});

/* ── ② ③ 보드 자체 검사 ─────────────────────── */
var dupKey = [];
var dupMeaning = [];
boards.forEach(function (b) {
  var seenW = {}, seenM = {};
  b.q.pairs.forEach(function (p) {
    if (seenW[p.word]) dupKey.push(b.where + ' : ' + p.word);
    seenW[p.word] = true;
    var m = String(p.meaning).replace(/\s+/g, '');
    if (seenM[m]) dupMeaning.push(b.where + ' : ' + p.meaning);
    seenM[m] = true;
  });
});

/* ── ④ 실제 renderMatch 로 클릭 순서 검증 ──────── */
function render(q) {
  var body = createElement('div');
  var done = null;
  timers = [];
  recorded.length = 0;
  Modes.match.render(q, body, {
    boardDone: function (r) { done = r; },
    reviewTier: null
  });
  // body: [head, grid]
  var grid = body.children[body.children.length - 1];
  return {
    body: body,
    L: grid.children[0].children,
    R: grid.children[1].children,
    result: function () { return done; }
  };
}

/**
 * 한 보드에서 (왼쪽 li, 오른쪽 ri) 를 주어진 순서로 클릭하고
 * 실수 횟수와 is-done 여부를 돌려준다.
 */
function trial(q, li, ri, rightFirst) {
  var v = render(q);
  var l = v.L[li], r = v.R[ri];
  if (rightFirst) { r.click(); l.click(); } else { l.click(); r.click(); }
  var head = v.body.children[v.body.children.length - 2];
  var sub = head.children[1].textContent;
  runTimers();
  return {
    sub: sub,
    lDone: l.classList.contains('is-done'),
    rDone: r.classList.contains('is-done'),
    recorded: recorded.slice()
  };
}

var asym = [];
var wrongAsCorrect = [];

boards.forEach(function (b) {
  var q = b.q;
  var n = q.pairs.length;
  // 화면에 그려진 순서를 알아야 하므로 한 번 렌더해서 _key 를 읽는다
  var v = render(q);
  for (var li = 0; li < n; li++) {
    for (var ri = 0; ri < n; ri++) {
      var isPair = v.L[li]._key === v.R[ri]._key;
      var a = trial(q, li, ri, false);
      var c = trial(q, li, ri, true);
      var aWrong = /실수 [1-9]/.test(a.sub);
      var cWrong = /실수 [1-9]/.test(c.sub);
      if (aWrong !== cWrong || a.lDone !== c.lDone || a.rDone !== c.rDone) {
        asym.push(b.where + ' L' + li + '(' + v.L[li]._key + ') × R' + ri +
          '(' + v.R[ri]._key + ') 왼먼저=' + a.sub + ' / 오른먼저=' + c.sub);
      }
      // 눈으로 틀린 짝인데 정답 처리되는가
      if (!isPair && (a.lDone || c.lDone)) {
        wrongAsCorrect.push(b.where + ' L' + li + '(' + v.L[li]._key + ') × R' + ri +
          '(' + v.R[ri]._key + ')');
      }
    }
  }
});

/* ── 보고 ─────────────────────────────────── */
function report(title, list) {
  if (!list.length) { console.log('OK  ' + title); return 0; }
  console.log('FAIL ' + title + ' — ' + list.length + '건');
  list.slice(0, 20).forEach(function (s) { console.log('     ' + s); });
  if (list.length > 20) console.log('     ... 외 ' + (list.length - 20) + '건');
  return 1;
}

var bad = 0;
bad += report('전 세트에 같은 표제어 중복 없음', headDup);
bad += report('한 보드에 같은 단어 중복 없음', dupKey);
bad += report('한 보드에 같은 뜻 중복 없음', dupMeaning);
bad += report('클릭 순서 대칭 (왼→오 = 오→왼)', asym);
bad += report('틀린 짝이 정답 처리되지 않음', wrongAsCorrect);

console.log(bad ? '\n문제 발견' : '\n전부 통과');
process.exit(bad ? 1 : 0);
