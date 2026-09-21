/**
 * tools/e-plan.js — E 세트 작업 규모 산정
 *
 * D 세트를 넣을 때와 같은 질문에 답한다.
 *   ① 몇 단어인가, 몇 챕터인가, 몇 차에 나눠야 하나
 *   ② 이미 있는 표제어와 겹치는 것이 있나 (겹치면 세트가 갈라져 문제가 된다)
 *   ③ 이미 GLOSS·PRON 에 있는 것은 몇 개인가 (그만큼 사전 작업이 줄어든다)
 *   ④ 새로 써야 할 사전 항목은 대략 몇 개인가
 *   ⑤ 원본 목록에서 손봐야 할 자리는 어디인가
 *
 * 실행: env -u NODE_OPTIONS node tools/e-plan.js
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
  'js/data/gloss.js', 'js/data/pron.js', 'js/quizgen.js', 'js/conquer.js'].forEach(function (rel) {
    new Function(fs.readFileSync(path.join(ROOT, rel), 'utf8')).call(global);
  });

var Quiz = global.window.Quiz;
var GLOSS = global.window.GLOSS || {};
var PRON = global.window.PRON || {};

/* ── 원본 파싱 ─────────────────────────────── */
var lines = fs.readFileSync(path.join(__dirname, 'e-source.txt'), 'utf8')
  .split('\n').map(function (s) { return s.trim(); }).filter(Boolean);

var items = lines.map(function (line) {
  // 표제어는 맨 앞의 영문(공백·하이픈 포함) 덩어리
  var m = line.match(/^([a-zA-Z][a-zA-Z' -]*?)\s+([가-힣(~].*)$/);
  if (!m) return { raw: line, word: null };
  return { raw: line, word: m[1].trim(), ko: m[2].trim() };
});

var bad = items.filter(function (i) { return !i.word; });
console.log('── 원본 ──────────────────────────────────');
console.log('줄 수 ' + lines.length + ' · 파싱 성공 ' + (items.length - bad.length));
if (bad.length) bad.forEach(function (b) { console.log('  파싱 실패: ' + b.raw); });

var words = items.filter(function (i) { return i.word; });

/* ── ① 규모 ───────────────────────────────── */
var CHAPTER = 20;
console.log('');
console.log('── ① 규모 ────────────────────────────────');
console.log('E 단어 ' + words.length + '개 → ' + Math.ceil(words.length / CHAPTER) + '챕터');
console.log('현재 전체 ' + Quiz.ALL.length + '단어 → 추가 후 ' + (Quiz.ALL.length + words.length) + '단어');
var totalCh = 0;
global.window.Conquer.SETS.forEach(function (s) { totalCh += Math.ceil(s.words.length / CHAPTER); });
console.log('현재 ' + totalCh + '챕터 → 추가 후 ' + (totalCh + Math.ceil(words.length / CHAPTER)) + '챕터');
// D 는 38개씩 9차였다. 같은 크기로 나눈다.
var PER = 38;
console.log('38개씩 나누면 ' + Math.ceil(words.length / PER) + '차');
console.log('');

/* ── ② 표제어 충돌 ─────────────────────────── */
var have = {};
Quiz.ALL.forEach(function (w) { have[w.word] = true; });
var clash = words.filter(function (i) { return have[i.word]; });
console.log('── ② 기존 표제어와 겹침 ───────────────────');
if (clash.length) {
  console.log('⚠️ ' + clash.length + '개 — 같은 단어가 두 세트에 생긴다. 반드시 빼야 한다');
  clash.forEach(function (c) { console.log('   ' + c.word); });
} else {
  console.log('없음 — 그대로 추가 가능');
}
console.log('');

/* ── ③ 사전에 이미 있는 것 ─────────────────── */
var inGloss = words.filter(function (i) { return GLOSS[i.word] !== undefined; });
var inPron = words.filter(function (i) { return PRON[i.word] !== undefined; });
console.log('── ③ 사전에 이미 있는 것 ──────────────────');
console.log('GLOSS 에 있음 : ' + inGloss.length + '개 → 표제어가 되면 GLOSS 항목은 지워야 한다');
console.log('PRON  에 있음 : ' + inPron.length + '개 → 표제어 pron 을 넣으면 PRON 항목은 지워야 한다');
console.log('  (D 세트에서 93개가 이 경우였다. audit 이 중복을 오류로 잡는다)');
console.log('');

/* ── ④ 새로 써야 할 사전 항목 추정 ─────────── */
console.log('── ④ 새로 써야 할 사전 항목 (추정) ────────');
// D 세트 실측: 단어당 유의어 2.95 + 반의어 0.59. 그 중 사전에 없는 것만 새로 쓴다.
var dWords = global.window.VOCAB_D || [];
var refs = 0, refsNew = 0;
var seenRef = {};
dWords.forEach(function (w) {
  (w.syn || []).concat(w.ant || []).forEach(function (s) {
    refs++;
    if (!seenRef[s]) { seenRef[s] = true; if (!GLOSS[s]) refsNew++; }
  });
});
console.log('D 세트 실적: 333단어에 유의어·반의어 참조 ' + refs + '건, 고유 ' +
  Object.keys(seenRef).length + '개');
var perWord = Object.keys(seenRef).length / dWords.length;
console.log('단어당 고유 참조 ' + perWord.toFixed(2) + '개 → E ' + words.length +
  '단어면 약 ' + Math.round(perWord * words.length) + '개');
console.log('이 중 상당수는 이미 GLOSS 에 있다. 새로 쓸 것은 대략 ' +
  Math.round(perWord * words.length * 0.55) + '~' + Math.round(perWord * words.length * 0.75) + '개');
console.log('발음(PRON)도 같은 수만큼 필요하다 — 표제어 ' + words.length +
  '개 + 참조 신규분');
console.log('');

/* ── ⑤ 원본 점검 ──────────────────────────── */
console.log('── ⑤ 원본 점검 ───────────────────────────');

// 뜻 갈래 수 (; 로 나뉜 것) — meanings 는 2개까지만 쓴다는 규약
var manySense = words.filter(function (i) { return i.ko.split(';').length >= 3; });
console.log('뜻 갈래가 3개 이상인 단어 : ' + manySense.length + '개 (meanings 2개로 줄여야 함)');
manySense.forEach(function (i) { console.log('   ' + i.word.padEnd(22) + i.ko); });
console.log('');

// 여러 품사가 섞인 것
var mixed = words.filter(function (i) {
  return /(하다|시키다|되다).*[;,].*(적인|한|는)$/.test(i.ko) ||
    /(적인|한|는).*;.*(하다|시키다)/.test(i.ko);
});
console.log('품사가 섞여 보이는 단어 : ' + mixed.length + '개 (pos 를 하나로 정해야 함)');
mixed.forEach(function (i) { console.log('   ' + i.word.padEnd(22) + i.ko); });
console.log('');

// 공백·하이픈 포함 — pos:"phr" 또는 합성어 판단 필요
var multi = words.filter(function (i) { return /[ -]/.test(i.word); });
console.log('공백·하이픈 포함 : ' + multi.length + '개');
multi.forEach(function (i) { console.log('   ' + i.word.padEnd(26) + i.ko); });
console.log('');

// 같은 어근끼리 — separateClashes 가 6글자 공통 접두사를 본다
var stems = {};
words.forEach(function (i) {
  var k = i.word.toLowerCase().slice(0, 6);
  (stems[k] = stems[k] || []).push(i.word);
});
var fam = Object.keys(stems).filter(function (k) { return stems[k].length >= 2; });
console.log('앞 6글자가 같은 가족 : ' + fam.length + '묶음 (' +
  fam.reduce(function (a, k) { return a + stems[k].length; }, 0) + '단어)');
console.log('  → separateClashes 가 같은 보드에 안 두려고 교환한다. 보드가 부족하면 실패할 수 있다');
fam.slice(0, 12).forEach(function (k) { console.log('   ' + stems[k].join(', ')); });
if (fam.length > 12) console.log('   ... 외 ' + (fam.length - 12) + '묶음');
console.log('');

// 불규칙 동사 후보 — ex.f 를 규칙 변화로만 써야 한다
var IRREG = ['forsake', 'undergo', 'overcome', 'withdraw', 'foresee', 'arise'];
console.log('── 불규칙 변화 주의 (ex.f 규칙형만) ───────');
console.log('E 목록에는 불규칙 동사가 거의 없다. 다만 다음은 확인 필요:');
console.log('   even/except 처럼 품사가 특이한 것, end up(구동사) 은 ex 를 생략할지 판단');


/* ── ⑥ 보드가 실제로 만들어지는지 미리 확인 ──────
   E 는 앞 6글자가 같은 가족이 78단어다. separateClashes 는 그런 단어를 같은
   보드에 두지 않으려고 보드끼리 단어를 교환하는데, 한 챕터(20단어·4보드) 안에
   같은 가족이 5개 있으면 가를 자리가 없다. 데이터를 다 쓴 뒤에 알면 늦으므로
   가짜 데이터로 먼저 돌려 본다. 뜻·유의어는 판정에 쓰이지 않는 자리만 채운다. */
console.log('');
console.log('── ⑥ 보드 분리 예비 검사 (가짜 데이터) ────');

var fake = words.map(function (i, n) {
  return {
    word: i.word,
    pron: '.',
    pos: 'n',
    level: 'B2',
    meanings: ['뜻' + n],      // 서로 겹치지 않게 해서 어근 충돌만 남긴다
    syn: [], ant: []
  };
});
global.window.VOCAB_E = fake;

// quizgen·conquer 를 새 세트가 보이도록 다시 읽는다
var g2 = {};
Object.keys(global).forEach(function (k) { g2[k] = global[k]; });
new Function(fs.readFileSync(path.join(ROOT, 'js/quizgen.js'), 'utf8') +
  '\nwindow.__ALL2 = window.Quiz.ALL;').call(global);

function stem6(a, b) {
  var x = a.toLowerCase(), y = b.toLowerCase(), n = 0;
  while (n < x.length && n < y.length && x[n] === y[n]) n++;
  return n >= 6;
}

// 정복 모드와 같은 방식으로 챕터를 자른 뒤, 챕터별 최대 가족 크기를 본다
var sorted = fake.slice().sort(function (a, b) {
  return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
});
var worst = 0, worstWhere = '';
for (var s = 0; s < sorted.length; s += CHAPTER) {
  var chap = sorted.slice(s, s + CHAPTER);
  var boards = Math.min(6, Math.max(4, Math.ceil(chap.length / 4)));
  // 이 챕터 안에서 가장 큰 어근 가족
  chap.forEach(function (w) {
    var n = chap.filter(function (v) { return stem6(w.word, v.word); }).length;
    if (n > worst) { worst = n; worstWhere = w.word + ' (챕터 ' + (s / CHAPTER + 1) + ')'; }
  });
}
console.log('한 챕터 안 최대 어근 가족 크기 : ' + worst + '  ← ' + worstWhere);
console.log('한 챕터의 보드 수 : 4~5개');
console.log(worst <= 4
  ? '→ 가족 크기가 보드 수 이하다. 갈라 놓을 자리가 있다'
  : '⚠️ 가족이 보드 수보다 크다. 같은 보드에 어근이 겹치는 단어가 남는다');

// 실제로 보드를 만들어 어근 충돌이 남는지 센다
var Quiz2 = global.window.Quiz;
var groups = Quiz2.separateClashes(Quiz2.dealEven(sorted, 5));
var leftover = 0;
groups.forEach(function (g) {
  g.forEach(function (a) {
    g.forEach(function (b) { if (a !== b && stem6(a.word, b.word)) leftover++; });
  });
});
console.log('전 세트 ' + groups.length + '보드 중 어근이 겹쳐 남은 짝 : ' + (leftover / 2) + '건');
console.log(leftover === 0
  ? '→ 깨끗하게 갈라진다. 이 목록 그대로 진행 가능'
  : '→ 남는 짝이 있다. 치명적이진 않지만(뜻이 다르면 풀 수 있다) 기록해 둘 것');


/* ── ⑦ 4지선다에 철자 쌍둥이가 같이 뜨는가 ────────
   distractorPool 은 품사·레벨·뜻겹침·유의어만 본다. 어근은 보지 않는다.
   그래서 element(요소) 와 elements(악천후) 처럼 '같은 품사 + 앞 6글자 같음 +
   뜻은 안 겹침' 인 짝은 한 문제의 보기로 같이 뜰 수 있다. 오타처럼 보인다.
   짝 맞추기는 separateClashes 가 막아 주지만 4지선다에는 그 장치가 없다.

   E 를 넣기 전에도 이런 짝이 있었나(기존 문제인가), E 가 몇 개를 더하나를 센다. */
console.log('');
console.log('── ⑦ 4지선다 철자 쌍둥이 (어근 6글자 + 같은 품사) ──');

function twins(list, label) {
  var out = [];
  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
      var a = list[i], b = list[j];
      if (a.pos !== b.pos) continue;
      if (!stem6(a.word, b.word)) continue;
      // 뜻이 겹치면 distractorPool 이 이미 걸러낸다
      var overlap = (a.meanings || []).some(function (m) {
        return (b.meanings || []).some(function (n2) {
          return m.replace(/\s/g, '') === n2.replace(/\s/g, '');
        });
      });
      if (overlap) continue;
      out.push(a.word + ' / ' + b.word + '  (' + a.pos + ')  ' +
        (a.meanings || [])[0] + ' vs ' + (b.meanings || [])[0]);
    }
  }
  console.log(label + ' : ' + out.length + '쌍');
  out.slice(0, 14).forEach(function (s) { console.log('   ' + s); });
  if (out.length > 14) console.log('   ... 외 ' + (out.length - 14) + '쌍');
  return out.length;
}

var nowTwins = twins(global.window.__ALL2.filter(function (w) {
  return !fake.some(function (f) { return f.word === w.word; });
}), '지금 1429단어');
console.log('');
console.log('* E 는 가짜 데이터(뜻이 전부 달라서) 라 여기서 세면 과대추정된다.');
console.log('  눈으로 확인한 위험 짝은 아래 4개다 — 품사를 정할 때 갈라놓아야 한다.');
console.log('   element / elements      요소·성분 vs 악천후        ← s 하나 차이');
console.log('   emergence / emergency   출현 vs 비상 사태          ← 한 글자 차이');
console.log('   execution / executive   처형 vs 경영진');
console.log('   election / electorate   선거 vs 유권자');
