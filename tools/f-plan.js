/**
 * tools/f-plan.js — F 세트 작업 규모 산정
 *
 * e-plan.js 와 같은 질문에 답한다.
 *   ① 몇 단어인가, 몇 챕터인가, 몇 차에 나눠야 하나
 *   ② 이미 있는 표제어와 겹치는 것이 있나 (겹치면 세트가 갈라져 문제가 된다)
 *   ③ 이미 GLOSS·PRON 에 있는 것은 몇 개인가 (표제어가 되면 사전에서 지워야 한다)
 *   ④ 새로 써야 할 사전 항목은 대략 몇 개인가
 *   ⑤ 원본 목록에서 손봐야 할 자리는 어디인가
 *   ⑥ 짝 맞추기 보드가 어근 충돌 없이 갈라지는가
 *   ⑦ 4지선다에 철자 쌍둥이가 같이 뜰 위험이 있는가
 *   ⑧ 승격 영향 — 이 단어를 유의어로 쓰던 기존 표제어가 있는가   ★ F 에서 추가
 *
 * ⑧ 을 새로 넣은 이유:
 *   E 세트에서 border·margin·wipe out 이 이 함정에 빠졌다. 사전(GLOSS)에 있던
 *   단어를 표제어로 올리면, 그 단어를 유의어로 쓰던 기존 문제의 설명이
 *   사전 뜻에서 표제어 뜻으로 바뀐다. 뜻갈래가 다르면 기존 문제가 조용히
 *   틀린 문제가 된다. E 때는 사람이 눈으로 찾았지만 F 는 기계가 먼저 찾는다.
 *
 * 실행: env -u NODE_OPTIONS node tools/f-plan.js
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
  'js/data/words-e.js', 'js/data/gloss.js', 'js/data/pron.js',
  'js/quizgen.js', 'js/conquer.js'].forEach(function (rel) {
    new Function(fs.readFileSync(path.join(ROOT, rel), 'utf8')).call(global);
  });

var Quiz = global.window.Quiz;
var GLOSS = global.window.GLOSS || {};
var PRON = global.window.PRON || {};

/* ── 원본 파싱 ─────────────────────────────────
   보통은 '영문 + 공백 + 한글' 로 가를 수 있다. 그런데
   'furnish A with B   A에게 B를 제공하다' 처럼 뜻이 영문 대문자로 시작하면
   어디까지가 표제어인지 기계가 알 수 없다. 그런 표제어만 여기에 적어 둔다. */
var EXPLICIT = ['furnish A with B'];

var lines = fs.readFileSync(path.join(__dirname, 'f-source.txt'), 'utf8')
  .split('\n').map(function (s) { return s.trim(); }).filter(Boolean);

var items = lines.map(function (line) {
  for (var i = 0; i < EXPLICIT.length; i++) {
    if (line.indexOf(EXPLICIT[i] + ' ') === 0) {
      return { raw: line, word: EXPLICIT[i], ko: line.slice(EXPLICIT[i].length).trim() };
    }
  }
  var m = line.match(/^([a-zA-Z][a-zA-Z' -]*?)\s+([가-힣(~].*)$/);
  if (!m) return { raw: line, word: null };
  return { raw: line, word: m[1].trim(), ko: m[2].trim() };
});

var bad = items.filter(function (i) { return !i.word; });
console.log('── 원본 ──────────────────────────────────');
console.log('줄 수 ' + lines.length + ' · 파싱 성공 ' + (items.length - bad.length));
if (bad.length) bad.forEach(function (b) { console.log('  ⚠️ 파싱 실패: ' + b.raw); });

var words = items.filter(function (i) { return i.word; });

/* ── ① 규모 ───────────────────────────────── */
var CHAPTER = 20;
console.log('');
console.log('── ① 규모 ────────────────────────────────');
console.log('F 단어 ' + words.length + '개 → ' + Math.ceil(words.length / CHAPTER) + '챕터 ' +
  '(마지막 챕터 ' + (words.length % CHAPTER || CHAPTER) + '단어)');
console.log('현재 전체 ' + Quiz.ALL.length + '단어 → 추가 후 ' + (Quiz.ALL.length + words.length) + '단어');
var totalCh = 0;
global.window.Conquer.SETS.forEach(function (s) { totalCh += Math.ceil(s.words.length / CHAPTER); });
console.log('현재 ' + totalCh + '챕터 → 추가 후 ' + (totalCh + Math.ceil(words.length / CHAPTER)) + '챕터');
console.log('20개씩(= CHAPTER_SIZE) 나누면 ' + Math.ceil(words.length / CHAPTER) + '차');
console.log('  → 1차 = 1챕터 로 맞추면 앞 챕터가 흔들리지 않는다 (E 세트와 같은 방식)');
console.log('');

/* ── ② 표제어 충돌 ─────────────────────────── */
var have = {};
Quiz.ALL.forEach(function (w) { have[w.word.toLowerCase()] = w; });
var clash = words.filter(function (i) { return have[i.word.toLowerCase()]; });
console.log('── ② 기존 표제어와 겹침 ───────────────────');
if (clash.length) {
  console.log('⚠️ ' + clash.length + '개 — 같은 단어가 두 세트에 생긴다. 반드시 빼야 한다');
  clash.forEach(function (c) { console.log('   ' + c.word); });
} else {
  console.log('없음 — 그대로 추가 가능');
}
// F 목록 내부 중복도 본다
var seenF = {}, dupF = [];
words.forEach(function (i) {
  var k = i.word.toLowerCase();
  if (seenF[k]) dupF.push(i.word); else seenF[k] = 1;
});
console.log('F 목록 내부 중복 : ' + (dupF.length ? '⚠️ ' + dupF.join(', ') : '없음'));
console.log('');

/* ── ③ 사전에 이미 있는 것 ─────────────────── */
var inGloss = words.filter(function (i) { return GLOSS[i.word.toLowerCase()] !== undefined; });
var inPron = words.filter(function (i) { return PRON[i.word.toLowerCase()] !== undefined; });
console.log('── ③ 사전에 이미 있는 것 ──────────────────');
console.log('GLOSS 에 있음 : ' + inGloss.length + '개 → 표제어가 되면 GLOSS 항목은 지워야 한다');
console.log('PRON  에 있음 : ' + inPron.length + '개 → 표제어 pron 을 넣으면 PRON 항목은 지워야 한다');
console.log('  (D 93개 · E 92개가 이 경우였다. audit 이 중복을 오류로 잡는다)');
console.log('');

/* ── ④ 새로 써야 할 사전 항목 추정 ───────────
   E 세트 실측을 기준으로 쓴다. D(333단어)·E(250단어) 모두 단어당 고유
   유의어·반의어 참조가 3.01개로 일치해서, 이 비율은 믿을 만하다. */
console.log('── ④ 새로 써야 할 사전 항목 (추정) ────────');
var eWords = global.window.VOCAB_E || [];
var seenRef = {};
eWords.forEach(function (w) {
  (w.syn || []).concat(w.ant || []).forEach(function (s) { seenRef[String(s).toLowerCase()] = 1; });
});
var perWord = Object.keys(seenRef).length / eWords.length;
console.log('E 세트 실적: ' + eWords.length + '단어에 고유 유의어·반의어 참조 ' +
  Object.keys(seenRef).length + '개 (단어당 ' + perWord.toFixed(2) + '개)');
var refEst = Math.round(perWord * words.length);
console.log('→ F ' + words.length + '단어면 약 ' + refEst + '개');
console.log('이 중 상당수는 이미 GLOSS 에 있다. 새로 쓸 것은 대략 ' +
  Math.round(refEst * 0.55) + '~' + Math.round(refEst * 0.75) + '개');
var exRatio = eWords.filter(function (w) { return w.ex && w.ex.length; }).length / eWords.length;
var synRatio = eWords.filter(function (w) { return w.syn && w.syn.length >= 3; }).length / eWords.length;
console.log('예문(ex) 은 약 ' + Math.round(exRatio * words.length) + '개, ' +
  '유의어 3개 세트는 약 ' + Math.round(synRatio * words.length) + '개 써야 한다');
console.log('');

/* ── ⑤ 원본 점검 ──────────────────────────── */
console.log('── ⑤ 원본 점검 ───────────────────────────');

// 뜻 갈래 — meanings 는 2개까지만 쓴다는 규약. ';' 와 ',' 를 모두 센다
function senseCount(ko) {
  var n = 0;
  ko.split(/[;；]/).forEach(function (p) { n += p.split(',').length; });
  return n;
}
var manySense = words.filter(function (i) { return senseCount(i.ko) >= 3; });
console.log('뜻 갈래가 3개 이상 : ' + manySense.length + '개 (meanings 2개로 줄여야 함)');
manySense.slice(0, 20).forEach(function (i) { console.log('   ' + i.word.padEnd(20) + i.ko); });
if (manySense.length > 20) console.log('   ... 외 ' + (manySense.length - 20) + '개');
console.log('');

// 첫 뜻에 괄호 — audit 이 경고한다
var paren = words.filter(function (i) { return /[(（]/.test(i.ko.split(/[;；]/)[0]); });
console.log('첫 뜻에 괄호 : ' + paren.length + '개 (괄호 없는 대표 뜻으로 바꿔야 함)');
paren.forEach(function (i) { console.log('   ' + i.word.padEnd(20) + i.ko); });
console.log('');

// 품사가 섞인 것 — pos 는 하나만 고를 수 있다
var mixed = words.filter(function (i) {
  return /(하다|시키다|되다|오다)[^;]*;[^;]*(적인|한|는|의)$/.test(i.ko) ||
    /(적인|한|는|의)[^;]*;[^;]*(하다|시키다|되다)/.test(i.ko);
});
console.log('품사가 섞여 보이는 단어 : ' + mixed.length + '개 (pos 를 하나로 정해야 함)');
mixed.forEach(function (i) { console.log('   ' + i.word.padEnd(20) + i.ko); });
console.log('');

// 공백·하이픈 포함 — pos:"phr" 또는 합성어 판단 필요
var multi = words.filter(function (i) { return /[ -]/.test(i.word); });
console.log('공백·하이픈 포함 : ' + multi.length + '개 (phr 인지 합성어인지 판단)');
multi.forEach(function (i) { console.log('   ' + i.word.padEnd(20) + i.ko); });
console.log('');

// 같은 어근끼리 — separateClashes 가 6글자 공통 접두사를 본다
var stems = {};
words.forEach(function (i) {
  var k = i.word.toLowerCase().replace(/[^a-z]/g, '').slice(0, 6);
  if (k.length < 6) return;
  (stems[k] = stems[k] || []).push(i.word);
});
var fam = Object.keys(stems).filter(function (k) { return stems[k].length >= 2; }).sort();
console.log('앞 6글자가 같은 가족 : ' + fam.length + '묶음 (' +
  fam.reduce(function (a, k) { return a + stems[k].length; }, 0) + '단어)');
fam.forEach(function (k) { console.log('   ' + stems[k].join(', ')); });
console.log('');

/* ── ⑥ 보드가 실제로 만들어지는지 미리 확인 ──────
   separateClashes 는 어근이 같은 단어를 같은 보드에 두지 않으려고 보드끼리
   단어를 교환한다. 한 챕터(20단어·4~5보드) 안에 같은 가족이 보드 수보다 많으면
   가를 자리가 없다. 데이터를 다 쓴 뒤에 알면 늦으므로 가짜 데이터로 먼저 돌린다.
   뜻은 서로 다르게 채워서 어근 충돌만 남긴다. */
console.log('── ⑥ 보드 분리 예비 검사 (가짜 데이터) ────');

var fake = words.map(function (i, n) {
  return { word: i.word, pron: '.', pos: 'n', level: 'B2', meanings: ['뜻' + n], syn: [], ant: [] };
});

function stem6(a, b) {
  var x = a.toLowerCase(), y = b.toLowerCase(), n = 0;
  while (n < x.length && n < y.length && x[n] === y[n]) n++;
  return n >= 6;
}

var sorted = fake.slice().sort(function (a, b) {
  return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
});
var worst = 0, worstWhere = '';
for (var s = 0; s < sorted.length; s += CHAPTER) {
  var chap = sorted.slice(s, s + CHAPTER);
  var chNo = s / CHAPTER + 1;
  chap.forEach(function (w) {
    var n = chap.filter(function (v) { return stem6(w.word, v.word); }).length;
    if (n > worst) { worst = n; worstWhere = w.word + ' (챕터 ' + chNo + ')'; }
  });
}
console.log('한 챕터 안 최대 어근 가족 크기 : ' + worst + '  ← ' + worstWhere);
console.log('한 챕터의 보드 수 : 4~5개');
console.log(worst <= 4
  ? '→ 가족 크기가 보드 수 이하다. 갈라 놓을 자리가 있다'
  : '⚠️ 가족이 보드 수보다 크다. 같은 보드에 어근이 겹치는 단어가 남는다');

var groups = Quiz.separateClashes(Quiz.dealEven(sorted, 5));
var leftover = 0;
groups.forEach(function (g) {
  g.forEach(function (a) {
    g.forEach(function (b) { if (a !== b && stem6(a.word, b.word)) leftover++; });
  });
});
console.log('전 세트 ' + groups.length + '보드 중 어근이 겹쳐 남은 짝 : ' + (leftover / 2) + '건');
console.log(leftover === 0
  ? '→ 깨끗하게 갈라진다. 이 목록 그대로 진행 가능'
  : '→ 남는 짝이 있다. 뜻이 뚜렷이 다르면 풀 수 있으나 기록해 둘 것');
console.log('');

/* ── ⑦ 4지선다 철자 쌍둥이 ───────────────────
   distractorPool 은 품사·레벨·뜻겹침·유의어만 본다. 어근은 보지 않는다.
   그래서 '같은 품사 + 앞 6글자 같음 + 뜻 안 겹침' 인 짝은 한 문제의 보기로
   같이 뜰 수 있고, 오타처럼 보인다. 짝 맞추기는 separateClashes 가 막아
   주지만 4지선다에는 그 장치가 없다.
   F 는 아직 pos 가 없으므로 '같은 품사' 는 판정할 수 없다. 대신
   (가) F 내부 6글자 가족과 (나) 기존 표제어와 6글자를 공유하는 F 단어를
   뽑아 둔다. pos·level 을 정할 때 이 목록을 보고 갈라놓는다. */
console.log('── ⑦ 4지선다 철자 쌍둥이 위험 목록 ────────');
console.log('(가) F 내부 — 위 ⑤ 의 ' + fam.length + '묶음이 그대로 후보다');
console.log('     pos 가 같아지면 한 문제에 같이 뜰 수 있다. 레벨을 두 단계 벌리거나');
console.log('     뜻 표현을 달리해서 갈라놓는다');
console.log('');
var crossPairs = [];
words.forEach(function (i) {
  Quiz.ALL.forEach(function (w) {
    if (stem6(i.word, w.word)) {
      crossPairs.push(i.word + ' (F) / ' + w.word + ' (' + w.pos + '·' + w.level + ') ' +
        (w.meanings || [])[0]);
    }
  });
});
console.log('(나) 기존 표제어와 앞 6글자 공유 : ' + crossPairs.length + '쌍');
crossPairs.forEach(function (s) { console.log('   ' + s); });
console.log('');

/* ── ⑧ 승격 영향 ─────────────────────────────
   GLOSS 에 있던 단어를 표제어로 올리면, 그 단어를 유의어·반의어로 쓰던
   기존 표제어의 선택지 설명이 '사전 뜻' 에서 '표제어 뜻' 으로 바뀐다.
   뜻갈래가 다르면 기존 문제가 조용히 틀린 문제가 된다.
   E 세트의 border·margin·wipe out 이 이 경우였다. */
console.log('── ⑧ 승격 영향 (★ 기존 문제가 바뀔 수 있는 자리) ──');
var refMap = {};
words.forEach(function (i) { refMap[i.word.toLowerCase()] = { item: i, by: [] }; });
Quiz.ALL.forEach(function (w) {
  (w.syn || []).forEach(function (s) {
    var e = refMap[String(s).toLowerCase()];
    if (e) e.by.push(w.word + '(syn)');
  });
  (w.ant || []).forEach(function (s) {
    var e = refMap[String(s).toLowerCase()];
    if (e) e.by.push(w.word + '(ant)');
  });
});
var affected = Object.keys(refMap).filter(function (k) { return refMap[k].by.length; }).sort();
console.log('F 단어를 유의어·반의어로 쓰는 기존 표제어가 있는 단어 : ' + affected.length + '개');
console.log('');

/* 판정을 두 갈래로 나눈다. 뜻이 '표현만 다른 것'(연회/축제)까지 전부 경고하면
   목록이 길어져 정작 중요한 것을 놓친다.
     · 품사 어긋남 — 한쪽은 동사(…하다/되다)인데 다른 쪽은 명사인 경우.
       #116 에서 실제로 고친 버그 갈래다. 선택지 설명의 품사가 어긋나 보인다.
     · 뜻갈래 어긋남 — 두 글자 이상 겹치는 대목이 전혀 없는 경우.
       fare(요리/음식 ↔ 요금) 처럼 아예 다른 뜻일 때 걸린다. */
/* 한국어 뜻은 용언이면 갈래마다 '…다' 로 끝난다(하다·되다·구부리다·끌다…).
   어미 몇 개만 나열하면 '흥미를 끌다' 를 명사로 잘못 본다. 갈래를 쪼갠 뒤
   하나라도 '다' 로 끝나면 용언으로 센다. */
function segs(s) {
  return s.split(/[,;；·]/).map(function (t) { return t.trim(); }).filter(Boolean);
}
function isVerbish(s) {
  return segs(s).some(function (t) { return /다$/.test(t); });
}
function twoGrams(s) {
  var t = s.replace(/[^가-힣]/g, ''), out = {};
  for (var i = 0; i + 2 <= t.length; i++) out[t.substr(i, 2)] = 1;
  return out;
}
/* '적' 처럼 한 글자 뜻은 2-gram 이 아예 안 만들어진다. 그때는 부분 문자열로 견준다. */
function shares2gram(a, b) {
  var ga = twoGrams(a), gb = twoGrams(b);
  var ka = Object.keys(ga), kb = Object.keys(gb);
  if (!ka.length || !kb.length) {
    var pa = a.replace(/[^가-힣]/g, ''), pb = b.replace(/[^가-힣]/g, '');
    return !!pa && !!pb && (pa.indexOf(pb) >= 0 || pb.indexOf(pa) >= 0);
  }
  return ka.some(function (k) { return gb[k]; });
}

var posBad = [], senseBad = [], fine = [];
affected.forEach(function (k) {
  var e = refMap[k];
  var g = GLOSS[k];
  var srcFirst = e.item.ko.split(/[;；]/)[0].trim();
  var row = k.padEnd(16) + 'GLOSS "' + (g || '-') + '"  /  원본 "' + srcFirst + '"\n' +
    ' '.repeat(19) + '← ' + e.by.join(', ');
  if (!g) { fine.push(row); return; }
  var gFirst = g.split(/[;；]/)[0].trim();
  if (isVerbish(gFirst) !== isVerbish(srcFirst)) posBad.push(row);
  else if (!shares2gram(g, srcFirst)) senseBad.push(row);
  else fine.push(row);
});

console.log('◆ 품사 어긋남 의심 : ' + posBad.length + '개');
console.log('  사전 뜻과 원본 뜻의 품사가 다르다. 표제어 pos 와 첫 뜻을 어느 쪽에');
console.log('  맞출지 정해야 한다 (#116 이 이 갈래의 버그였다).');
posBad.forEach(function (s) { console.log('   ⚠️ ' + s); });
console.log('');
console.log('◆ 뜻갈래 어긋남 의심 : ' + senseBad.length + '개');
console.log('  두 글자 이상 겹치는 대목이 없다. 아예 다른 뜻일 수 있다.');
senseBad.forEach(function (s) { console.log('   ⚠️ ' + s); });
console.log('');
console.log('◆ 표현만 다름 (그대로 진행 가능) : ' + fine.length + '개');
console.log('');
console.log('위 ⚠️ ' + (posBad.length + senseBad.length) + '개는 표제어로 올리기 전에');
console.log('  node tools/pron-render-check.js --word <참조표제어>');
console.log('로 기존 문제가 어떻게 보이는지 먼저 확인하고, 수정 뒤 다시 돌려 견줄 것.');
