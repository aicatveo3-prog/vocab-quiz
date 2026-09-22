/**
 * tools/g-plan.js — G 세트 작업 규모 산정
 *
 * f-plan.js 가 답한 질문에 ⑨⑩ 을 더한다.
 *   ① 몇 단어인가, 몇 챕터인가, 몇 차에 나눠야 하나
 *   ② 이미 있는 표제어와 겹치는 것이 있나
 *   ③ 이미 GLOSS·PRON 에 있는 것은 몇 개인가 (표제어가 되면 사전에서 지워야 한다)
 *   ④ 새로 써야 할 사전 항목은 대략 몇 개인가
 *   ⑤ 원본 목록에서 손봐야 할 자리는 어디인가
 *   ⑥ 짝 맞추기 보드가 어근 충돌 없이 갈라지는가
 *   ⑦ 4지선다에 철자 쌍둥이가 같이 뜰 위험이 있는가
 *   ⑧ 승격 영향 — 이 단어를 유의어로 쓰던 기존 표제어가 있는가
 *   ⑨ 원본 안에서 뜻이 겹치는 쌍이 있는가                    ★ G 에서 추가
 *   ⑩ gov(전치사 지배) 후보는 몇 개인가                      ★ G 에서 추가
 *
 * ⑨ 를 새로 넣은 이유:
 *   G 원본에 geographic / geographical 이 둘 다 '지리적인; 지리학의' 로,
 *   go broke / go out of business 가 둘 다 '파산하다' 로 들어 있었다.
 *   뜻 문자열이 같은 두 표제어는 4지선다에서 정답이 둘이 되고 짝 맞추기
 *   보드에서 소거법을 무너뜨린다. F 때는 사람이 눈으로 찾았고 세 쌍 중
 *   하나를 놓칠 뻔했다. 기계가 먼저 찾게 한다.
 *
 * ⑩ 을 새로 넣은 이유:
 *   G 는 전치사를 고정으로 받는 동사가 유난히 많다 (gaze at, glance at,
 *   grieve over, grumble about …). gov 를 채우면 '전치사 구별' 문항이 늘지만,
 *   정답이 "그 전치사를 쓰지 않는다"는 부정 명제라 prep 목록이 빠짐없어야
 *   한다. 후보를 먼저 세어 두면 작업량과 위험을 같이 가늠할 수 있다.
 *
 * f-plan.js 와 달라진 것 — 원본을 탭으로 가른다.
 *   f-source.txt 는 '영문 공백 한글' 이어서 'furnish A with B' 처럼 뜻이
 *   영문 대문자로 시작하면 경계를 기계가 못 찾았고, EXPLICIT 배열에 손으로
 *   적어 두어야 했다. g-source.txt 는 탭으로 갈라 그 우회가 아예 없다.
 *
 * 실행: env -u NODE_OPTIONS node tools/g-plan.js
 */
'use strict';

global.window = global;
global.window.Store = {
  record: function () {}, recordExposureOnly: function () {},
  info: function () { return { tier: 'new', seen: 0 }; }, tier: function () { return 'new'; }
};

var fs = require('fs');
var path = require('path');
var ROOT = path.join(__dirname, '..');
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js', 'js/data/words-d.js',
  'js/data/words-e.js', 'js/data/words-f.js', 'js/data/gloss.js', 'js/data/pron.js',
  'js/quizgen.js', 'js/conquer.js'].forEach(function (rel) {
    new Function(fs.readFileSync(path.join(ROOT, rel), 'utf8')).call(global);
  });

var GLOSS = global.window.GLOSS || {};
var PRON = global.window.PRON || {};

var SETS = [
  ['A', global.window.VOCAB], ['B', global.window.VOCAB_B], ['C', global.window.VOCAB_C],
  ['D', global.window.VOCAB_D], ['E', global.window.VOCAB_E], ['F', global.window.VOCAB_F],
  ['G', global.window.VOCAB_G || []]
];
var EXISTING = [];
var HEAD = {};
SETS.forEach(function (s) {
  (s[1] || []).forEach(function (w) {
    w._set = s[0]; EXISTING.push(w); HEAD[w.word.toLowerCase()] = w;
  });
});

/* ── 원본 파싱 (탭 구분) ───────────────────── */
var items = fs.readFileSync(path.join(__dirname, 'g-source.txt'), 'utf8')
  .split('\n')
  .filter(function (l) { return l.trim() && l.charAt(0) !== '#'; })
  .map(function (l) {
    var p = l.split('\t');
    return { word: (p[0] || '').trim(), ko: (p[1] || '').trim() };
  });

var bad = items.filter(function (it) { return !it.word || !it.ko; });
if (bad.length) {
  console.log('❌ 파싱 실패 ' + bad.length + '줄');
  bad.forEach(function (b) { console.log('   ' + JSON.stringify(b)); });
  process.exit(1);
}

function pad(s, n) { s = String(s); while (s.length < n) s += ' '; return s; }
function firstKo(ko) { return ko.split(';')[0].split(',')[0].trim(); }
var CH = 20;

/* ── ① 규모 ────────────────────────────────── */
console.log('── ① 규모 ─────────────────────────────────');
console.log('G 단어        : ' + items.length);
console.log('챕터          : ' + Math.ceil(items.length / CH) + '개 (' +
  Math.floor(items.length / CH) + '×' + CH +
  (items.length % CH ? ' + ' + (items.length % CH) : '') + ')');
var before = EXISTING.filter(function (w) { return w._set !== 'G'; }).length;
console.log('추가 전/후    : ' + before + ' → ' + (before + items.length) + '단어');
console.log('권장 PR 수    : ' + (Math.ceil(items.length / CH) + 2) +
  '개 (0차 도구 + ' + Math.ceil(items.length / CH) + '차 + 마무리)');

/* ── ② 표제어 충돌 ─────────────────────────── */
var clash = items.filter(function (it) {
  var h = HEAD[it.word.toLowerCase()];
  return h && h._set !== 'G';
});
console.log('\n── ② 기존 표제어와 충돌 ────────────────────');
console.log(clash.length
  ? '❌ ' + clash.length + '건 : ' + clash.map(function (it) {
      return it.word + '(' + HEAD[it.word.toLowerCase()]._set + ')'; }).join(', ')
  : '✅ 없음');

/* ── ③ 사전에 이미 있는 것 ─────────────────── */
var inGloss = items.filter(function (it) { return GLOSS[it.word.toLowerCase()]; });
var inPron = items.filter(function (it) { return PRON[it.word.toLowerCase()]; });
console.log('\n── ③ 사전에 이미 있음 (표제어가 되면 지워야 한다) ──');
console.log('GLOSS : ' + inGloss.length + '개');
inGloss.forEach(function (it) {
  console.log('   ' + pad(it.word, 22) + pad(GLOSS[it.word.toLowerCase()], 26) + '| ' + it.ko);
});
console.log('PRON  : ' + inPron.length + '개 → ' +
  inPron.map(function (it) { return it.word; }).join(', '));

/* ── ④ 새로 쓸 사전 항목 추정 ──────────────── */
console.log('\n── ④ 새로 쓸 사전 항목 추정 ────────────────');
var fSet = global.window.VOCAB_F || [];
var fSyn = 0, fEx = 0;
fSet.forEach(function (w) { fSyn += (w.syn || []).length; fEx += (w.ex || []).length; });
if (fSet.length) {
  var r = items.length / fSet.length;
  console.log('F 실적  : ' + fSet.length + '단어 · 유의어 ' + fSyn + ' · 예문 ' + fEx);
  console.log('G 예상  : 유의어 ' + Math.round(fSyn * r) + ' · 예문 ' + Math.round(fEx * r));
  console.log('  그중 사전 신규 등록 ' + Math.round(fSyn * r * 0.55) + '~' +
    Math.round(fSyn * r * 0.65) + '개 (F 실측 55~65%)');
}
var phr = items.filter(function (it) { return it.word.indexOf(' ') !== -1; });
console.log('구·표현 : ' + phr.length + '개 (' +
  (phr.length / items.length * 100).toFixed(0) + '%) — pos:phr, 예문 없음');
console.log('  → 문장 빈칸 가능 최대 ' + (items.length - phr.length) + '개');

/* ── ⑤ 손봐야 할 자리 ──────────────────────── */
console.log('\n── ⑤ 손봐야 할 자리 ───────────────────────');
var multi = items.filter(function (it) { return it.ko.indexOf(';') !== -1; });
var paren = items.filter(function (it) { return /[(（〈\[]/.test(it.ko); });
var headOdd = items.filter(function (it) { return /[()\[\]]/.test(it.word); });
var tooLong = items.filter(function (it) { return it.word.length > 23; });
console.log('뜻이 두 갈래 이상(;) : ' + multi.length + '개 → 대표 2개로 줄여야 한다');
console.log('괄호 설명 포함        : ' + paren.length + '개 → 첫 뜻에는 괄호를 넣지 않는다');
console.log('표제어에 괄호         : ' + (headOdd.length ? '❌ ' +
  headOdd.map(function (i) { return i.word; }).join(', ') : '✅ 없음 (전례 0건)'));
console.log('표제어 23자 초과      : ' + (tooLong.length ? '❌ ' +
  tooLong.map(function (i) { return i.word + '(' + i.word.length + '자)'; }).join(', ')
  : '✅ 없음 (기존 최장 23자)'));

/* ── ⑥ 어근 가족 ───────────────────────────── */
console.log('\n── ⑥ 같은 어근 가족 (짝 맞추기 보드에서 갈라야 한다) ──');
var fam = {};
items.forEach(function (it) {
  if (it.word.indexOf(' ') !== -1 || it.word.length < 6) return;
  var stem = it.word.slice(0, 6).toLowerCase();
  (fam[stem] = fam[stem] || []).push(it.word);
});
var famKeys = Object.keys(fam).filter(function (k) { return fam[k].length > 1; });
famKeys.forEach(function (k) { console.log('   ' + pad(k, 9) + fam[k].join(', ')); });
console.log('   가족 ' + famKeys.length + '개 — 품사나 레벨 차 2 이상으로 갈라 놓는다');

/* ── ⑦ 철자 쌍둥이 ─────────────────────────── */
console.log('\n── ⑦ 철자 쌍둥이 (한→영·문장 빈칸에서 같이 뜨면 좋다) ──');
console.log('   ' + famKeys.length + '개 가족이 그대로 쌍둥이 후보다');

/* ── ⑧ 승격 영향 ───────────────────────────── */
console.log('\n── ⑧ 승격 영향 (이 단어를 유의어로 쓰던 기존 문제) ──');
var refs = {};
EXISTING.forEach(function (w) {
  if (w._set === 'G') return;
  (w.syn || []).forEach(function (s) {
    var k = s.toLowerCase();
    (refs[k] = refs[k] || []).push(w.word);
  });
});
var affected = 0, affWords = 0;
inGloss.forEach(function (it) {
  var r = refs[it.word.toLowerCase()];
  if (!r) return;
  affected += r.length; affWords++;
  console.log('   ' + pad(it.word, 20) + pad(r.length + '곳', 5) + r.join(', '));
});
console.log('   ' + affWords + '개 단어 · ' + affected + '곳');
console.log('   → 기존 뜻을 보존하면 화면이 안 바뀐다. 불가능하면 뜻을 갈라 쓰거나');
console.log('     품사를 좁힌다. tools/pron-render-check.js --word <표제어> 로 대조한다.');

/* ── ⑨ 원본 안에서 뜻이 겹치는 쌍 ──────────── */
console.log('\n── ⑨ 뜻이 겹치는 쌍 (복수 정답이 된다) ────');
var byWhole = {}, byFirst = {};
items.forEach(function (it) {
  (byWhole[it.ko] = byWhole[it.ko] || []).push(it.word);
  (byFirst[firstKo(it.ko)] = byFirst[firstKo(it.ko)] || []).push(it.word);
});
var dupWhole = Object.keys(byWhole).filter(function (k) { return byWhole[k].length > 1; });
var dupFirst = Object.keys(byFirst).filter(function (k) { return byFirst[k].length > 1; });
console.log('뜻 전체가 같음 : ' + (dupWhole.length ? '❌ ' + dupWhole.map(function (k) {
  return byWhole[k].join(' = ') + ' ("' + k + '")'; }).join(' / ') : '✅ 없음'));
console.log('첫 뜻이 같음   : ' + (dupFirst.length ? '⚠️  ' + dupFirst.map(function (k) {
  return byFirst[k].join(' = ') + ' ("' + k + '")'; }).join(' / ') : '✅ 없음'));

/* 기존 표제어와 첫 뜻이 같은 것 */
var exFirst = {};
EXISTING.forEach(function (w) {
  if (w._set === 'G') return;
  (exFirst[w.meanings[0].trim()] = exFirst[w.meanings[0].trim()] || [])
    .push(w.word + '(' + w.pos + ')');
});
var hitEx = items.filter(function (it) { return exFirst[firstKo(it.ko)]; });
console.log('기존 표제어와 첫 뜻이 같음 : ' + hitEx.length + '개');
hitEx.forEach(function (it) {
  console.log('   ' + pad(it.word, 22) + '"' + firstKo(it.ko) + '" ← ' +
    exFirst[firstKo(it.ko)].join(', '));
});

/* ── ⑩ gov 후보 ────────────────────────────── */
console.log('\n── ⑩ gov(전치사 지배) 후보 ────────────────');
var GOV_HINT = {
  gamble: 'on', gasp: 'at', gather: 'around', gaze: 'at', generous: 'with',
  genuine: 'about', glance: 'at', glow: 'with', glue: 'to', govern: 'by',
  grab: 'at', gracious: 'to', grant: 'to', grasp: 'at', gratify: 'with',
  gratitude: 'to', graze: 'on', greedy: 'for', grieve: 'over', grind: 'into',
  groan: 'about', grudge: 'against', grumble: 'about', guarantee: 'against',
  guilty: 'of'
};
var govHit = items.filter(function (it) { return GOV_HINT[it.word]; });
console.log(govHit.length + '개 후보');
console.log('   ' + govHit.map(function (it) {
  return it.word + ' ' + GOV_HINT[it.word]; }).join(' · '));
var cur = 0;
EXISTING.forEach(function (w) { if (w.gov && w.gov.prep) cur++; });
console.log('현재 gov 보유 : ' + cur + '개 → G 를 채우면 ' + (cur + govHit.length) + '개');
console.log('⚠️  정답이 "그 전치사를 쓰지 않는다"는 부정 명제다. prep 목록이');
console.log('    빠짐없어야 한다. 넉넉히 적으면 문항이 줄고, 부족하면 틀린 문항이 난다.');
console.log('    tools/gov-audit.js 가 문항 전량을 출력하니 사람이 읽어야 한다.');

console.log('');
