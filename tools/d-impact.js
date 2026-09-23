/**
 * D 세트 추가가 기존 A/B/C 문제에 주는 영향을 측정한다.
 *
 *   node tools/d-impact.js            현재 상태 리포트
 *   node tools/d-impact.js > before.txt   변경 전에 찍어 두고 나중에 diff
 *
 * 왜 필요한가 — quizgen.js는 오답 후보와 짝 맞추기 동료를 전 세트 합집합(ALL)에서
 * 뽑는다. 세트를 추가하면 기존 세트 문제의 "보기"가 달라진다. 의도된 설계지만
 * 얼마나 달라지는지는 수치로 봐야 안다.
 */
var fs = require('fs'), path = require('path');
var ROOT = path.join(__dirname, '..');
var window = {}; global.window = window;
function load(rel) {
  var p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return false;
  (new Function('window', fs.readFileSync(p, 'utf8')))(window);
  return true;
}
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js',
 'js/data/words-d.js', 'js/data/words-e.js', 'js/data/words-f.js', 'js/data/words-g.js', 'js/data/words-h.js', 'js/data/gloss.js', 'js/data/pron.js'].forEach(load);

var SETS = [
  ['A', window.VOCAB || []],
  ['B', window.VOCAB_B || []],
  ['C', window.VOCAB_C || []],
  ['D', window.VOCAB_D || []],
  ['E', window.VOCAB_E || []],
  ['F', window.VOCAB_F || []],
  ['G', window.VOCAB_G || []],
  ['H', window.VOCAB_H || []]
];
var ALL = SETS.reduce(function (a, s) { return a.concat(s[1]); }, []);
var GLOSS = window.GLOSS || {};
var byWord = {}; ALL.forEach(function (w) { byWord[w.word.toLowerCase()] = w; });

/* ── quizgen.js의 후보 판정을 그대로 옮긴다 ──────────── */
var LEVELS = { B1: 0, B2: 1, C1: 2, C2: 3 };
function levelIdx(w) { return LEVELS[w.level] === undefined ? 1 : LEVELS[w.level]; }
function levelGap(a, b) { return Math.abs(levelIdx(a) - levelIdx(b)); }
function norm(s) { return String(s).replace(/\s+/g, ''); }
function meaningsOverlap(a, b) {
  var A = (a.meanings || []).map(norm), B = (b.meanings || []).map(norm);
  for (var i = 0; i < A.length; i++) for (var j = 0; j < B.length; j++) {
    if (A[i] === B[j]) return true;
    if (A[i].length >= 3 && B[j].length >= 3 &&
        (A[i].indexOf(B[j]) !== -1 || B[j].indexOf(A[i]) !== -1)) return true;
  }
  return false;
}
function areSynonyms(a, b) {
  var as = (a.syn || []).map(function (s) { return s.toLowerCase(); });
  var bs = (b.syn || []).map(function (s) { return s.toLowerCase(); });
  return as.indexOf(b.word.toLowerCase()) !== -1 || bs.indexOf(a.word.toLowerCase()) !== -1;
}
function poolSize(answer) {
  return ALL.filter(function (w) {
    return w.word !== answer.word && w.pos === answer.pos &&
      levelGap(w, answer) <= 1 && !meaningsOverlap(w, answer) && !areSynonyms(w, answer);
  }).length;
}

/* ── ① 모드별 출제 가능 단어 수 ─────────────────────
   오답 후보가 3개 미만이면 그 단어는 그 모드에서 조용히 빠진다. */
console.log('── 모드별 출제 가능 단어 수 ────────────────');
console.log('세트  단어   4지선다  아닌것  문장빈칸  어법   후보3미달');
SETS.forEach(function (s) {
  var v = s[1]; if (!v.length) return;
  var mcq = 0, not = 0, cloze = 0, gov = 0, thin = 0;
  v.forEach(function (w) {
    var p = poolSize(w);
    if (p < 3) thin++;
    if (p >= 3) mcq++;
    if (w.syn && w.syn.length >= 3) not++;
    if (w.ex && w.ex.length && p >= 3) cloze++;
    if (w.gov) gov++;
  });
  console.log('  ' + s[0] + '  ' + String(v.length).padStart(4) + '   ' +
    String(mcq).padStart(6) + '  ' + String(not).padStart(5) + '  ' +
    String(cloze).padStart(7) + '  ' + String(gov).padStart(4) + '   ' +
    String(thin).padStart(6));
});

/* ── ② 짝 맞추기 보드 구성 지문 ─────────────────────
   makeMatch는 ALL을 알파벳 정렬해 동료를 고르므로 결과가 결정적이다.
   D를 넣으면 d로 시작하는 단어가 끼어들어 보드가 바뀐다. */
function matchBoard(seed) {
  var pool = ALL.filter(function (w) {
    return w.word !== seed.word && w.pos === seed.pos && levelGap(w, seed) <= 1;
  }).sort(function (a, b) { return a.word.toLowerCase().localeCompare(b.word.toLowerCase()); });
  var chosen = [seed];
  pool.forEach(function (cand) {
    if (chosen.length >= 5) return;
    var clash = chosen.some(function (c) { return meaningsOverlap(c, cand) || areSynonyms(c, cand); });
    if (!clash) chosen.push(cand);
  });
  return chosen.length < 4 ? null : chosen.map(function (w) { return w.word; });
}
console.log('');
console.log('── 짝 맞추기 보드 지문 (A/B/C 전체) ──────────');
var boards = [];
SETS.slice(0, 3).forEach(function (s) {
  s[1].forEach(function (w) {
    var b = matchBoard(w);
    if (b) boards.push(s[0] + ' ' + w.word + ' :: ' + b.join(',')); 
  });
});
console.log('보드 수 : ' + boards.length);
var fp = require('crypto').createHash('sha1').update(boards.join('\n')).digest('hex').slice(0, 12);
console.log('전체 지문(sha1) : ' + fp);
console.log('처음 3개:');
boards.slice(0, 3).forEach(function (b) { console.log('  ' + b); });

/* ── ③ '아닌 것 고르기' 뜻 표시 출처 ────────────────
   D 단어가 표제어가 되면 GLOSS 한 줄 → 정식 meanings 로 바뀐다. */
console.log('');
console.log('── 선택지 뜻이 어디서 오는가 (A/B/C 문제) ─────');
var fromHead = 0, fromGloss = 0, none = 0;
SETS.slice(0, 3).forEach(function (s) {
  s[1].forEach(function (w) {
    if (!w.syn || w.syn.length < 3) return;
    (w.syn || []).concat(w.ant || []).forEach(function (o) {
      var l = String(o).toLowerCase();
      if (byWord[l]) fromHead++;
      else if (GLOSS[l]) fromGloss++;
      else none++;
    });
  });
});
console.log('표제어에서 : ' + fromHead + '개 자리');
console.log('GLOSS에서  : ' + fromGloss + '개 자리');
console.log('뜻 없음    : ' + none + '개 자리');
console.log('');
console.log('총 표제어 수 : ' + ALL.length);
