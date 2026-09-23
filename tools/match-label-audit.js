/**
 * tools/match-label-audit.js — 짝 맞추기 보드에 뜬 뜻이 읽을 만한가
 *
 * 코드는 _key(단어)로만 정답을 판정하므로 틀린 짝이 정답이 되는 일은 구조상
 * 없다(tools/match-order-check.js 가 573보드 전수로 확인한다). 그렇다면
 * "틀린 것 같은데 정답으로 떴다"는 제보는 화면에 뜬 뜻이 그 단어의 뜻으로
 * 안 보였다는 뜻이다. 그런 자리를 찾는다.
 *
 *   ① 첫 뜻이 아닌 뜻이 뜬 칸 — boardPairs 가 뜻 충돌을 피해 2·3번째 뜻을 쓴다
 *   ② '뜻 (품사)' 로 도망간 칸 — 가진 뜻이 전부 이미 쓰인 경우
 *   ③ 같은 보드의 다른 단어에도 통하는 뜻 — 어느 쪽에 걸어도 뜻으로는 맞다
 *
 * 실행: env -u NODE_OPTIONS node tools/match-label-audit.js
 */
'use strict';

global.window = global;
global.document = { createElement: function () { return { classList: { add: function () {}, remove: function () {}, contains: function () { return false; } }, appendChild: function () {}, addEventListener: function () {} }; } };
global.window.Store = {
  record: function () {}, recordExposureOnly: function () {},
  info: function () { return { tier: 'new' }; }, tier: function () { return 'new'; }
};

var fs = require('fs');
var path = require('path');
var ROOT = path.join(__dirname, '..');
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js',
  'js/data/words-d.js', 'js/data/words-e.js', 'js/data/words-f.js', 'js/data/words-g.js', 'js/data/words-h.js', 'js/data/gloss.js', 'js/data/pron.js',
  'js/quizgen.js', 'js/conquer.js'].forEach(function (rel) {
    new Function(fs.readFileSync(path.join(ROOT, rel), 'utf8')).call(global);
  });

var Quiz = global.window.Quiz;
var Conquer = global.window.Conquer;

var INDEX = {};
Quiz.ALL.forEach(function (w) { if (!INDEX[w.word]) INDEX[w.word] = w; });

function norm(s) { return String(s).replace(/\s+/g, '').replace(/[·,;]/g, ''); }

/* 보드 수집 — match-order-check.js 와 같은 경로 */
var boards = [];
Conquer.SETS.forEach(function (set) {
  (Quiz.buildSession('match', 9999, null, true, set.words) || []).forEach(function (q, i) {
    boards.push({ where: '연습 ' + set.id + ' 보드' + (i + 1), q: q });
  });
  Conquer.buildChapters(set).forEach(function (ch, ci) {
    var sess = Conquer.createChapterSession(set.id, ci);
    if (!sess) return;
    sess.slides.forEach(function (sl, si) {
      if (sl.q && sl.q.mode === 'match') {
        boards.push({ where: '정복 ' + set.id + ' ch' + (ci + 1) + '-' + (si + 1), q: sl.q });
      }
    });
  });
});

var notFirst = [], posFallback = [], ambiguous = [];

boards.forEach(function (b) {
  var pairs = b.q.pairs;
  pairs.forEach(function (p) {
    var w = INDEX[p.word];
    if (!w) return;
    var ms = w.meanings || [];
    var idx = -1;
    for (var k = 0; k < ms.length; k++) if (norm(ms[k]) === norm(p.meaning)) { idx = k; break; }
    if (idx === -1) posFallback.push(b.where + ' : ' + p.word + ' → "' + p.meaning + '"');
    else if (idx > 0) {
      notFirst.push(b.where + ' : ' + p.word + ' → ' + (idx + 1) + '번째 뜻 "' +
        p.meaning + '" (1번째는 "' + ms[0] + '")');
    }

    // ③ 이 뜻이 같은 보드의 다른 단어에도 통하는가
    pairs.forEach(function (o) {
      if (o.word === p.word) return;
      var ow = INDEX[o.word];
      if (!ow) return;
      (ow.meanings || []).forEach(function (om) {
        if (norm(om) === norm(p.meaning)) {
          ambiguous.push(b.where + ' : "' + p.meaning + '" 가 ' + p.word +
            ' 와 ' + o.word + ' 둘 다의 뜻');
        }
      });
    });
  });
});

function report(title, list) {
  console.log((list.length ? 'FAIL ' : 'OK   ') + title + ' — ' + list.length + '건');
  list.slice(0, 25).forEach(function (s) { console.log('     ' + s); });
  if (list.length > 25) console.log('     ... 외 ' + (list.length - 25) + '건');
  return list.length ? 1 : 0;
}

console.log('보드 ' + boards.length + '개 · 칸 ' +
  boards.reduce(function (a, b) { return a + b.q.pairs.length; }, 0) + '개\n');
var bad = 0;
bad += report('첫 뜻이 아닌 뜻이 뜬 칸', notFirst);
bad += report("'뜻 (품사)' 로 도망간 칸", posFallback);
bad += report('같은 보드의 다른 단어에도 통하는 뜻', ambiguous);
process.exit(0);
