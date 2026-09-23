/**
 * 발음 사전(PRON) 감사 스크립트 — 매 차수마다 돌린다.
 *
 *   node tools/pron-audit.js          현황 요약
 *   node tools/pron-audit.js --next N 아직 발음 없는 단어 N개를 알파벳 순으로 출력
 *
 * 검사 항목
 *   1) PRON 키가 전부 '아닌 것 고르기'에 실제로 등장하는 단어인가 (유령 키 차단)
 *   2) 중복 키 없는가
 *   3) 값이 한글·공백·하이픈·중점만 쓰는가 (영문 오타 혼입 차단)
 *   4) 커버리지 — 채운 개수 / 남은 개수
 */
var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');

/* ── 데이터 로드 ──────────────────────────────
   브라우저 전역(window)을 흉내내어 데이터 파일을 그대로 평가한다.
   파일 형식을 정규식으로 긁지 않으므로 스키마가 바뀌어도 따라간다. */
var window = {};
global.window = window;
function load(rel) {
  var src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  (new Function('window', src))(window);
}
load('js/data/words.js');
load('js/data/words-b.js');
load('js/data/words-c.js');
load('js/data/words-d.js');
load('js/data/words-e.js');
load('js/data/words-f.js');
load('js/data/words-g.js');
load('js/data/words-h.js');
load('js/data/words-i.js');
load('js/data/words-j.js');
load('js/data/words-k.js');
load('js/data/words-l.js');   /* load 는 인자를 하나만 받는다 — 한 줄에 몰아 쓰면 조용히 무시된다 */
load('js/data/gloss.js');

var hasPronFile = fs.existsSync(path.join(ROOT, 'js/data/pron.js'));
if (hasPronFile) load('js/data/pron.js');

var VOCAB = (window.VOCAB || [])
  .concat(window.VOCAB_B || [])
  .concat(window.VOCAB_C || [])
  .concat(window.VOCAB_D || [])
  .concat(window.VOCAB_E || []).concat(window.VOCAB_F || [])
  .concat(window.VOCAB_G || [])
  .concat(window.VOCAB_H || [])
  .concat(window.VOCAB_I || [])
  .concat(window.VOCAB_J || [])
  .concat(window.VOCAB_K || [])
  .concat(window.VOCAB_L || []);
var GLOSS = window.GLOSS || {};
var PRON = window.PRON || {};

/* ── '아닌 것 고르기'에 등장할 수 있는 단어 전체 ──
   quizgen.js makeNot() 기준:
     · 출제 대상은 syn 3개 이상인 표제어
     · 선택지 = syn 중 3개(무작위 → 전부 등장 가능) + 정답 1개
     · 정답은 ant[0] 우선, 없으면 오답 후보 풀(표제어)에서 뽑는다 */
var headword = {};
VOCAB.forEach(function (w) { headword[w.word.toLowerCase()] = w; });

var direct = {};           // syn/ant 로 직접 등장하는 단어
var quizzable = 0;

VOCAB.forEach(function (w) {
  if (!w.syn || w.syn.length < 3) return;
  quizzable++;
  w.syn.forEach(function (s) { direct[String(s).toLowerCase()] = true; });
  (w.ant || []).forEach(function (a) { direct[String(a).toLowerCase()] = true; });
});

/* 반의어가 없는 표제어는 오답을 표제어 풀에서 뽑으므로 표제어도 전부 후보다.
   늘어나는 단어는 모두 표제어(pron 보유)라서 '써야 할 개수'는 변하지 않는다. */
var appears = {};
Object.keys(direct).forEach(function (k) { appears[k] = true; });
VOCAB.forEach(function (w) { appears[w.word.toLowerCase()] = true; });

var appearKeys = Object.keys(appears).sort();
var directKeys = Object.keys(direct).sort();

/* ── 발음 출처 판정 ───────────────────────────
   표제어는 words.js의 pron을 이미 쓴다(modes.js 201행과 동일한 경로).
   나머지는 PRON 사전에서 찾는다. */
function pronOf(lower) {
  var hw = headword[lower];
  if (hw && hw.pron) return { src: 'vocab', val: hw.pron };
  if (PRON[lower]) return { src: 'pron', val: PRON[lower] };
  return null;
}

var haveVocab = [], havePron = [], missing = [];
appearKeys.forEach(function (k) {
  var p = pronOf(k);
  if (!p) missing.push(k);
  else if (p.src === 'vocab') haveVocab.push(k);
  else havePron.push(k);
});

/* ── 검사 ─────────────────────────────────── */
var errors = [];

// 1) 유령 키
var ghost = Object.keys(PRON).filter(function (k) { return !appears[k]; });
if (ghost.length) {
  errors.push('등장하지 않는 단어에 발음이 달렸다 (' + ghost.length + '개): ' +
    ghost.slice(0, 15).join(', '));
}

// 1b) 표제어와 중복 — words.js pron이 이미 있으면 PRON은 무시되므로 군더더기
var shadow = Object.keys(PRON).filter(function (k) {
  return headword[k] && headword[k].pron;
});
if (shadow.length) {
  errors.push('표제어가 이미 pron을 가진 단어에 중복 등록 (' + shadow.length + '개): ' +
    shadow.slice(0, 15).join(', '));
}

// 2) 중복 키 — 객체 리터럴은 조용히 덮어쓰므로 원본에서 직접 센다
if (hasPronFile) {
  var raw = fs.readFileSync(path.join(ROOT, 'js/data/pron.js'), 'utf8');
  var seen = {}, dups = [];
  var re = /^\s*"([^"]+)"\s*:/gm, m;
  while ((m = re.exec(raw))) {
    if (seen[m[1]]) dups.push(m[1]);
    seen[m[1]] = true;
  }
  if (dups.length) errors.push('중복 키 (' + dups.length + '개): ' + dups.join(', '));
}

// 3) 값 문자 검사 — 한글 완성형·공백·하이픈·중점만 허용
var badChar = [];
Object.keys(PRON).forEach(function (k) {
  if (!/^[가-힣\s·\-]+$/.test(PRON[k])) badChar.push(k + ' → ' + PRON[k]);
  if (/^\s|\s$/.test(PRON[k])) badChar.push(k + ' → 앞뒤 공백');
});
if (badChar.length) {
  errors.push('값에 한글 아닌 문자 (' + badChar.length + '개): ' +
    badChar.slice(0, 15).join(' | '));
}

/* ── 5) 표기 규칙 일관성 ───────────────────────
   차수를 나눠 작업하면 1차의 규칙이 5차에서 흔들리기 쉽다.
   접미사별로 끝 글자가 규칙과 맞는지 기계적으로 확인한다.
   영어 발음 자체가 예외인 단어가 있으므로 경고로만 보고한다. */
/* except: 철자는 접미사처럼 보이지만 실제 접미사가 아닌 경우를 걸러낸다.
   예외를 단어 목록으로 넣으면 검사가 둔해지므로, 철자 규칙으로 좁힌다.
     -stion 은 /stʃən/ 이라 '션'이 아니다        question → 퀘스천
     모음 뒤 ize 는 접미사가 아니다               seize → 시즈 (≠ -ize) */
var RULES = [
  { name: '-tion → 션',   test: /tion$/, except: /stion$/, expect: /션$/ },
  { name: '-sion → 전/션', test: /sion$/,       expect: /[전션]$/ },
  { name: '-ture → 처',   test: /ture$/,        expect: /처$/ },
  { name: '-ment → 먼트',  test: /ment$/,       expect: /먼트$/ },
  { name: '-ness → 니스',  test: /ness$/,       expect: /니스$/ },
  { name: '-able/-ible → 블', test: /[ai]ble$/, expect: /블$/ },
  { name: '-ful → 풀',    test: /ful$/,         expect: /풀$/ },
  { name: '-less → 리스',  test: /less$/,       expect: /리스$/ },
  { name: '-ity/-ety → 티', test: /[ie]ty$/,    expect: /티$/ },
  { name: '-ous → 스',    test: /ous$/,         expect: /스$/ },
  { name: '-ship → 십',   test: /ship$/,        expect: /십$/ },
  { name: '-ism → 즘',    test: /ism$/,         expect: /즘$/ },
  { name: '-ize → 이즈',   test: /ize$/, except: /[aeiou]ize$/, expect: /이즈$/ }
];

/* -ing 은 "받침이 ㅇ인가"를 봐야 하므로 정규식으로 안 된다.
   한글 음절 = 0xAC00 + (초성*21 + 중성)*28 + 종성.  종성 ㅇ의 번호는 21. */
function endsWithIeung(s) {
  var c = s.charCodeAt(s.length - 1) - 0xAC00;
  if (c < 0 || c > 11171) return false;
  return c % 28 === 21;
}

var ruleWarn = [];
var ruleHits = {};                        // 규칙마다 몇 개를 실제로 검사했는가
RULES.concat([{ name: '-ing → ㅇ받침' }]).forEach(function (r) { ruleHits[r.name] = 0; });

Object.keys(PRON).forEach(function (k) {
  var last = k.split(' ').pop();          // 구·숙어는 마지막 낱말로 판단
  var val = PRON[k].split(' ').pop();
  RULES.forEach(function (r) {
    if (!r.test.test(last)) return;
    if (r.except && r.except.test(last)) return;
    ruleHits[r.name]++;
    if (!r.expect.test(val)) ruleWarn.push(r.name + ' 위반: ' + k + ' → ' + PRON[k]);
  });
  if (/ing$/.test(last)) {
    ruleHits['-ing → ㅇ받침']++;
    if (!endsWithIeung(val)) ruleWarn.push('-ing → ㅇ받침 위반: ' + k + ' → ' + PRON[k]);
  }
});

/* 적용 0건인 규칙은 통과한 게 아니라 아무것도 안 한 것이다.
   규칙을 새로 넣었을 때 정규식이 틀려 늘 통과하는 사고를 막는다. */
var deadRules = Object.keys(ruleHits).filter(function (n) { return ruleHits[n] === 0; });

/* ── --next: 다음 차수 작업 목록 ──────────────── */
var nextArg = process.argv.indexOf('--next');
if (nextArg !== -1) {
  var n = parseInt(process.argv[nextArg + 1], 10) || 200;
  console.log('# 발음 없는 단어 ' + Math.min(n, missing.length) + '개 (알파벳 순)');
  missing.slice(0, n).forEach(function (k) {
    console.log('"' + k + '": ""    // ' + (GLOSS[k] || (headword[k] ? headword[k].meanings.join(', ') : '?')));
  });
  process.exit(0);
}

/* ── 요약 출력 ────────────────────────────── */
var dHaveVocab = directKeys.filter(function (k) { var p = pronOf(k); return p && p.src === 'vocab'; });
var dHavePron = directKeys.filter(function (k) { var p = pronOf(k); return p && p.src === 'pron'; });
var dMissing = directKeys.filter(function (k) { return !pronOf(k); });

var dTotal = directKeys.length;
function dPct(x) { return (x / dTotal * 100).toFixed(1) + '%'; }

console.log('── 아닌 것 고르기 발음 커버리지 ──────────────');
console.log('출제 가능 표제어(syn 3개 이상) : ' + quizzable + '개');
console.log('');
console.log('[유의어·반의어로 등장하는 고유 단어] ' + dTotal + '개');
console.log('  ├ 표제어 pron 보유 : ' + dHaveVocab.length + '개 (' + dPct(dHaveVocab.length) + ')');
console.log('  ├ PRON 사전 보유   : ' + dHavePron.length + '개 (' + dPct(dHavePron.length) + ')');
console.log('  └ 발음 없음        : ' + dMissing.length + '개 (' + dPct(dMissing.length) + ')');
console.log('  커버리지 : ' + (dHaveVocab.length + dHavePron.length) + ' / ' + dTotal +
  ' (' + dPct(dHaveVocab.length + dHavePron.length) + ')');
console.log('');
console.log('[+ 오답 풀 표제어까지] ' + appearKeys.length + '개');
console.log('  └ 발음 없음        : ' + missing.length + '개');
console.log('     (늘어난 단어는 전부 표제어라 써야 할 개수는 같다)');
console.log('');
console.log('참고 — GLOSS 항목 수 : ' + Object.keys(GLOSS).length + '개' +
  ' (words.js+b+c+gloss.js Object.assign 누적)');
console.log('       PRON 항목 수  : ' + Object.keys(PRON).length + '개' + (hasPronFile ? '' : ' (파일 없음)'));

/* 발음 없는 단어 중 뜻조차 없는 것 — 화면에 관계만 나오는 단어 */
var noGloss = missing.filter(function (k) { return !GLOSS[k] && !headword[k]; });
console.log('       발음·뜻 모두 없음 : ' + noGloss.length + '개');

var checked = Object.keys(ruleHits).reduce(function (s, n) { return s + ruleHits[n]; }, 0);
if (ruleWarn.length) {
  console.log('\n⚠️  표기 규칙 확인 필요 ' + ruleWarn.length + '건 / ' + checked + '건 검사');
  console.log('    (영어 발음 자체가 예외인 단어일 수 있다. 눈으로 판단한다)');
  ruleWarn.forEach(function (w) { console.log('  · ' + w); });
} else {
  console.log('\n✅ 표기 규칙 일관성 — ' + checked + '건 검사, 위반 0건');
}
if (deadRules.length) {
  errors.push('적용 0건인 규칙이 있다 (정규식이 틀렸을 수 있다): ' + deadRules.join(', '));
}
if (process.argv.indexOf('--rules') !== -1) {
  console.log('\n규칙별 검사 건수');
  Object.keys(ruleHits).forEach(function (n) {
    console.log('  ' + n + ' : ' + ruleHits[n] + '개');
  });
}

if (errors.length) {
  console.log('\n❌ 검사 실패');
  errors.forEach(function (e) { console.log('  · ' + e); });
  process.exit(1);
}
console.log('✅ 검사 통과');
