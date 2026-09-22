/**
 * tools/inventory.js — 현재 단어 자산이 어떤 모양인지 한눈에 본다
 *
 * 분류 체계를 다시 설계하려면 지금 뭘 가지고 있는지부터 알아야 한다.
 * 세트별 개수, 레벨(CEFR) 분포, 모드별 출제 가능 여부를 센다.
 *
 * 실행: env -u NODE_OPTIONS node tools/inventory.js
 */
'use strict';

global.window = global;
global.document = { createElement: function () { return { classList: { add: function () {}, remove: function () {}, contains: function () { return false; } }, appendChild: function () {}, addEventListener: function () {} }; } };
global.window.Store = {
  record: function () {}, recordExposureOnly: function () {},
  info: function () { return { tier: 'new', seen: 0 }; }, tier: function () { return 'new'; }
};

var fs = require('fs');
var path = require('path');
var ROOT = path.join(__dirname, '..');
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js', 'js/data/words-d.js', 'js/data/words-e.js', 'js/data/words-f.js',
  'js/data/gloss.js', 'js/data/pron.js', 'js/quizgen.js', 'js/conquer.js'].forEach(function (rel) {
    new Function(fs.readFileSync(path.join(ROOT, rel), 'utf8')).call(global);
  });

var Quiz = global.window.Quiz;
var Conquer = global.window.Conquer;

function tally(list, fn) {
  var t = {};
  list.forEach(function (x) { var k = fn(x); t[k] = (t[k] || 0) + 1; });
  return t;
}
function fmt(t) {
  return Object.keys(t).sort().map(function (k) { return k + ' ' + t[k]; }).join('  ');
}
function pct(a, b) { return (a / b * 100).toFixed(1) + '%'; }

var ALL = Quiz.ALL;
console.log('── 전체 ' + ALL.length + '단어 ──────────────────────');
console.log('레벨 : ' + fmt(tally(ALL, function (w) { return w.level; })));
console.log('품사 : ' + fmt(tally(ALL, function (w) { return w.pos; })));
console.log('');

console.log('── 세트별 ────────────────────────────────');
Conquer.SETS.forEach(function (s) {
  var ws = s.words;
  console.log(s.id + ' : ' + String(ws.length).padStart(4) + '단어  ' +
    String(Math.ceil(ws.length / Conquer.CHAPTER_SIZE)).padStart(3) + '챕터  |  ' +
    fmt(tally(ws, function (w) { return w.level; })));
});
console.log('');

console.log('── 모드별 출제 가능 ───────────────────────');
[['아닌것 (syn 3개 필요)', function (w) { return w.syn && w.syn.length >= 3; }],
 ['문장빈칸 (ex 필요)', function (w) { return w.ex && w.ex.length > 0; }],
 ['연어 (col 필요)', function (w) { return w.col && w.col.length > 0; }]
].forEach(function (p) {
  var n = ALL.filter(p[1]).length;
  console.log(p[0] + ' : ' + n + '개 (' + pct(n, ALL.length) + ')');
});
console.log('');

console.log('── 단어당 부가 정보 평균 ──────────────────');
function avg(fn) {
  return (ALL.reduce(function (a, w) { return a + fn(w); }, 0) / ALL.length).toFixed(2);
}
console.log('뜻 ' + avg(function (w) { return (w.meanings || []).length; }) +
  ' · 유의어 ' + avg(function (w) { return (w.syn || []).length; }) +
  ' · 예문 ' + avg(function (w) { return (w.ex || []).length; }) +
  ' · 연어 ' + avg(function (w) { return (w.col || []).length; }));
console.log('');

console.log('── 단어 객체가 실제로 가진 키 ─────────────');
var keys = {};
ALL.forEach(function (w) { Object.keys(w).forEach(function (k) { keys[k] = (keys[k] || 0) + 1; }); });
Object.keys(keys).sort(function (a, b) { return keys[b] - keys[a]; }).forEach(function (k) {
  console.log('  ' + k.padEnd(10) + keys[k] + '개 (' + pct(keys[k], ALL.length) + ')');
});
console.log('');

/* ── a~z 까지 채우면 몇 단어가 되나 ───────────────
   글자당 평균으로 곱하면 안 된다. a·c 는 영어 표제어가 몰려 있는 글자라
   지금 4글자의 평균이 전체 평균보다 높다(그래서 26배 하면 과대추정된다).
   영어 표제어의 첫 글자 분포(대략적인 비율)로 나눠 추정한다. */
var LETTER_SHARE = {
  a: 6.6, b: 5.0, c: 9.4, d: 6.0, e: 4.4, f: 4.3, g: 2.7, h: 3.0, i: 4.7,
  j: 0.6, k: 0.7, l: 2.4, m: 3.9, n: 1.7, o: 2.4, p: 7.8, q: 0.4, r: 4.2,
  s: 10.5, t: 4.3, u: 1.5, v: 1.2, w: 1.8, x: 0.05, y: 0.3, z: 0.2
};
console.log('── a~z 로 늘리면 ─────────────────────────');
var haveShare = Conquer.SETS.reduce(function (a, s) {
  return a + (LETTER_SHARE[s.id.toLowerCase()] || 0);
}, 0);
var total = ALL.length / (haveShare / 100);
console.log('지금 가진 글자(' + Conquer.SETS.map(function (s) { return s.id; }).join('') +
  ') = 영어 표제어의 약 ' + haveShare.toFixed(0) + '%');
console.log('→ 전체 추정 ' + Math.round(total / 100) * 100 + '단어 내외, ' +
  Math.round(total / Conquer.CHAPTER_SIZE) + '챕터');
console.log('   (20단어 챕터를 하루 한 개씩 풀면 ' +
  (Math.round(total / Conquer.CHAPTER_SIZE) / 30).toFixed(1) + '개월 · 오답 복습 제외)');
