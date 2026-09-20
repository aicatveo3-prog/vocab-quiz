/**
 * '아닌 것 고르기' 피드백의 렌더 결과를 문자열로 재현해 눈으로 확인한다.
 * modes.js와 같은 조회 순서를 그대로 계산하므로, 실제 화면과 같은 글자가 나온다.
 *
 *   node tools/pron-render-check.js            예시 10개 (알파벳 전 구간 균등)
 *   node tools/pron-render-check.js 20         예시 20개
 *   node tools/pron-render-check.js --word X   특정 표제어의 문제만
 */
var fs = require('fs'), path = require('path');
var ROOT = path.join(__dirname, '..');
var window = {}; global.window = window;
function load(rel) { (new Function('window', fs.readFileSync(path.join(ROOT, rel), 'utf8')))(window); }
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js', 'js/data/words-d.js',
 'js/data/gloss.js', 'js/data/pron.js'].forEach(load);

var ALL = (window.VOCAB || []).concat(window.VOCAB_B || [])
  .concat(window.VOCAB_C || []).concat(window.VOCAB_D || []);
var GLOSS = window.GLOSS || {}, PRON = window.PRON || {};
var byWord = {};
ALL.forEach(function (w) { byWord[w.word.toLowerCase()] = w; });
function findWord(l) { return byWord[l] || null; }

/* modes.js 'not' 블록과 동일한 계산 */
function detailOf(mainObj, optValue) {
  var syns = (mainObj.syn || []).map(function (s) { return s.toLowerCase(); });
  var val = String(optValue).toLowerCase();
  var isSyn = syns.indexOf(val) !== -1;
  var obj = findWord(val);
  var gloss = obj ? obj.meanings.join(', ') : GLOSS[val] || null;
  var pron = (obj && obj.pron) || PRON[val] || null;
  var mark = isSyn ? '= ' : '≠ ';
  var tail = gloss || (isSyn ? mainObj.word + '와 바꿔 쓸 수 있는 말' : '반의어');
  return mark + (pron ? tail + ' · ' + pron : tail);
}

function optionsOf(w) {
  return w.syn.slice(0, 3).concat((w.ant || []).slice(0, 1));
}

function printQuestion(w) {
  console.log('[' + w.word + '] ' + w.meanings.join(', '));
  optionsOf(w).forEach(function (o) {
    var pad = o + '                        '.slice(0, Math.max(1, 24 - o.length));
    console.log('   ' + pad + detailOf(w, o));
  });
  console.log('');
}

/* --all: 전수 점검.
   출제 가능한 모든 문제의 모든 선택지를 실제 렌더 경로로 계산해,
   발음이나 뜻이 빠지는 자리가 하나라도 있는지 확인한다.
   커버리지 집계(pron-audit)와 달리 '화면에 실제로 찍히는 값'을 본다. */
if (process.argv.indexOf('--all') !== -1) {
  var quizzable = ALL.filter(function (w) { return w.syn && w.syn.length >= 3; });
  var noPron = [], noGloss = [], slots = 0, questions = 0;

  quizzable.forEach(function (w) {
    /* 선택지는 syn 중 3개를 무작위로 뽑으므로, syn 전체 + 반의어 전체가
       언젠가는 화면에 뜬다. 한 번이라도 뜰 수 있는 자리를 모두 본다. */
    var pool = (w.syn || []).concat(w.ant || []);
    questions++;
    pool.forEach(function (o) {
      slots++;
      var val = String(o).toLowerCase();
      var obj = findWord(val);
      var pron = (obj && obj.pron) || PRON[val] || null;
      var gloss = obj ? obj.meanings.join(', ') : GLOSS[val] || null;
      if (!pron) noPron.push(w.word + ' → ' + o);
      if (!gloss) noGloss.push(w.word + ' → ' + o);
    });
  });

  console.log('── 전수 점검 (실제 렌더 경로) ──────────────');
  console.log('출제 가능 문제      : ' + questions + '개');
  console.log('검사한 선택지 자리  : ' + slots + '개 (중복 포함)');
  console.log('');
  console.log('발음이 비는 자리    : ' + noPron.length + '개');
  if (noPron.length) noPron.slice(0, 20).forEach(function (x) { console.log('  · ' + x); });
  console.log('뜻이 비는 자리      : ' + noGloss.length + '개');
  if (noGloss.length) noGloss.slice(0, 20).forEach(function (x) { console.log('  · ' + x); });
  console.log('');
  console.log(noPron.length === 0 && noGloss.length === 0
    ? '✅ 모든 선택지가 발음과 뜻을 갖는다'
    : '❌ 비는 자리가 있다');
  process.exit(noPron.length === 0 && noGloss.length === 0 ? 0 : 1);
}

/* --word 지정 모드 */
var wArg = process.argv.indexOf('--word');
if (wArg !== -1) {
  var target = findWord(String(process.argv[wArg + 1]).toLowerCase());
  if (!target) { console.log('표제어를 찾을 수 없다'); process.exit(1); }
  if (!target.syn || target.syn.length < 3) { console.log('syn이 3개 미만이라 출제되지 않는다'); process.exit(1); }
  printQuestion(target);
  process.exit(0);
}

var LIMIT = parseInt(process.argv[2], 10) || 10;

/* PRON(이번 작업물)이 실제로 뜨는 문제를 모두 모은 뒤 균등 간격으로 뽑는다.
   앞에서부터 세면 a~b 단어만 나와 최근 차수를 확인할 수 없다. */
var candidates = ALL.filter(function (w) {
  if (!w.syn || w.syn.length < 3) return false;
  return optionsOf(w).some(function (o) { return PRON[String(o).toLowerCase()]; });
});

console.log('══ PRON 발음이 표시되는 문제 ' + candidates.length + '개 중 ' +
  Math.min(LIMIT, candidates.length) + '개 (알파벳 균등) ══\n');
for (var i = 0; i < LIMIT && i < candidates.length; i++) {
  printQuestion(candidates[Math.floor(candidates.length * i / LIMIT)]);
}

/* 발음 있는 것과 없는 것이 한 문제에 섞였을 때 — 뜻만 나오는지 확인 */
var mixed = ALL.filter(function (w) {
  if (!w.syn || w.syn.length < 3) return false;
  var o = optionsOf(w);
  var n = o.filter(function (x) {
    var l = String(x).toLowerCase(); var hw = findWord(l);
    return (hw && hw.pron) || PRON[l];
  }).length;
  return n > 0 && n < o.length;
});
console.log('══ 발음 있는 단어와 없는 단어가 섞인 문제 ' + mixed.length + '개 중 3개 ══\n');
for (var j = 0; j < 3 && j < mixed.length; j++) {
  printQuestion(mixed[Math.floor(mixed.length * j / 3)]);
}
