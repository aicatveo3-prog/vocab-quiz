/**
 * words-q.js 검사 — 매 차수마다 돌린다.
 *
 *   node tools/words-q-audit.js           전체 검사
 *   node tools/words-q-audit.js --rules   규칙별 검사 건수 (죽은 검사 탐지)
 *
 * 검사 6종
 *   ① 스키마        필수 필드 / meanings 개수 / pron 한글 / 표제어 중복
 *   ② 예문          {{}} 1개 / f 가 규칙 변화인지 / 문장에 답이 노출됐는지
 *   ④ 유의어·반의어  개수 / 자기 참조 / syn·ant 교차 / 뜻이 통째로 같은지 /
 *                   모든 선택지가 뜻과 발음을 갖는지
 *   ⑤ 출제 시뮬레이션  quizgen 의 실제 빌더로 5개 모드를 만들어 본다  ★ 핵심
 *   ⑥ 분포          품사·레벨 분포 (한쪽에 몰리면 오답 후보가 마른다)
 *
 * ⑤가 핵심이다. 스키마가 맞아도 문제가 안 만들어질 수 있다. quizgen 은 오답
 * 후보가 3개 미만이면 null 을 반환하고 조용히 넘어간다. 화면에 아무 표시도
 * 없으므로 여기서 잡지 않으면 아무도 모른다.
 */
var fs = require('fs'), path = require('path');
var ROOT = path.join(__dirname, '..');
var window = {}; global.window = window;

/* quizgen 은 rankByPriority 에서만 Store 를 쓴다. 그 함수는 호출하지 않으므로
   깨지지 않을 최소한의 껍데기만 둔다. */
window.Store = { info: function () { return {}; }, tier: function () { return 0; } };

function load(rel) {
  var p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return false;
  (new Function('window', fs.readFileSync(p, 'utf8')))(window);
  return true;
}
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js', 'js/data/words-d.js',
 'js/data/words-e.js', 'js/data/words-f.js', 'js/data/words-g.js', 'js/data/words-h.js', 'js/data/words-i.js', 'js/data/words-j.js', 'js/data/words-k.js', 'js/data/words-l.js', 'js/data/words-m.js', 'js/data/words-n.js', 'js/data/words-o.js', 'js/data/words-p.js', 'js/data/words-q.js', 'js/data/words-r.js', 'js/data/words-s.js', 'js/data/words-t.js', 'js/data/words-u.js', 'js/data/gloss.js', 'js/data/pron.js',
 'js/quizgen.js'].forEach(load);

var SET = window.VOCAB_Q || [];
var ALL = window.Quiz.ALL;
var GLOSS = window.GLOSS || {}, PRON = window.PRON || {};
var Q = window.Quiz;
var IN = Q._internals;

var byWord = {}; ALL.forEach(function (w) { byWord[w.word.toLowerCase()] = w; });
var errors = [], warns = [];
var checks = {};           // 검사별 실제 수행 건수 — 0이면 그 검사는 무의미하다
function did(name, n) { checks[name] = (checks[name] || 0) + (n === undefined ? 1 : n); }

/* ── ① 스키마 ───────────────────────────────── */
var POS = { v: 1, n: 1, adj: 1, adv: 1, phr: 1 };
var LEVEL = { B1: 1, B2: 1, C1: 1, C2: 1 };
var seen = {};
SET.forEach(function (x) {
  var at = '[' + (x.word || '?') + ']';
  did('스키마');
  if (!x.word) return errors.push(at + ' word 없음');
  if (!POS[x.pos]) errors.push(at + ' pos 가 v/n/adj/adv/phr 가 아니다: ' + x.pos);
  if (!LEVEL[x.level]) errors.push(at + ' level 이 B1~C2 가 아니다: ' + x.level);
  if (!x.meanings || !x.meanings.length) errors.push(at + ' meanings 없음');
  else if (x.meanings.length > 2) errors.push(at + ' meanings 가 ' + x.meanings.length + '개 — 2개까지만');
  else if (/[(（]/.test(x.meanings[0])) warns.push(at + ' 첫 뜻에 괄호 설명이 있다: ' + x.meanings[0]);
  if (!x.pron) errors.push(at + ' pron 없음');
  else if (!/^[가-힣\s·\-]+$/.test(x.pron)) errors.push(at + ' pron 에 한글 아닌 문자: ' + x.pron);

  var l = x.word.toLowerCase();
  if (seen[l]) errors.push(at + ' P 세트 안에서 표제어 중복');
  seen[l] = 1;
  var other = ALL.filter(function (w) { return w.word.toLowerCase() === l; });
  if (other.length > 1) errors.push(at + ' 다른 세트와 표제어 중복');

  /* 표제어가 pron 을 가지면 사전의 같은 항목은 군더더기 */
  if (x.pron && PRON[l]) errors.push(at + ' PRON 사전에 중복 — 제거해야 한다');
  if (GLOSS[l]) errors.push(at + ' GLOSS 사전에 중복 — 제거해야 한다');
});

/* ── ② 예문 ────────────────────────────────── */
SET.forEach(function (x) {
  var at = '[' + x.word + ']';
  if (x.pos === 'phr' && x.ex) warns.push(at + ' 구·표현에 ex 가 있다 (빈칸 문제로 만들기 어렵다)');
  (x.ex || []).forEach(function (e) {
    did('예문');
    var holes = (e.s.match(/\{\{\}\}/g) || []).length;
    if (holes !== 1) errors.push(at + ' 예문에 {{}} 가 ' + holes + '개 — 1개여야 한다');
    if (!e.f) return errors.push(at + ' 예문에 f(실제 어형) 없음');
    if (!e.ko) errors.push(at + ' 예문에 ko(번역) 없음');

    /* ★ 핵심 검사 — f 가 규칙 변화가 아니면 오답이 원형으로 남아 정답이 튄다 */
    var kind = IN.detectInflection(x.word, e.f);
    if (kind === null) {
      errors.push(at + ' 예문 어형 "' + e.f + '" 이 불규칙 변화다 — 오답이 원형으로 남아 ' +
        '뜻을 몰라도 정답이 보인다. 원형이나 -ing 으로 바꿀 것');
    }
    /* 빈칸을 뺀 문장에 정답이 그대로 노출되면 문제가 성립하지 않는다 */
    var bare = e.s.replace(/\{\{\}\}/g, ' ');
    if (new RegExp('\\b' + e.f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(bare)) {
      errors.push(at + ' 예문에 정답 "' + e.f + '" 이 노출돼 있다');
    }
  });
});

/* ── ④ 유의어·반의어 ────────────────────────── */
SET.forEach(function (x) {
  var at = '[' + x.word + ']';
  var syn = (x.syn || []).map(function (s) { return String(s).toLowerCase(); });
  var ant = (x.ant || []).map(function (s) { return String(s).toLowerCase(); });
  var self = x.word.toLowerCase();

  if (syn.length && syn.length < 3) {
    errors.push(at + ' syn 이 ' + syn.length + '개 — 3개 이상이거나 아예 비워야 한다 ' +
      '(3개 미만이면 아닌 것 고르기가 출제되지 않으면서 데이터만 남는다)');
  }
  if (syn.indexOf(self) !== -1) errors.push(at + ' syn 에 자기 자신이 있다');
  if (ant.indexOf(self) !== -1) errors.push(at + ' ant 에 자기 자신이 있다');
  syn.forEach(function (s) {
    if (ant.indexOf(s) !== -1) errors.push(at + ' "' + s + '" 이 syn 과 ant 에 모두 있다');
  });

  /* 선택지로 뜨는 모든 낱말은 뜻과 발음을 가져야 한다 */
  syn.concat(ant).forEach(function (s) {
    did('선택지 뜻·발음');
    var hw = byWord[s];
    var gloss = hw ? (hw.meanings || []).join(', ') : GLOSS[s];
    var pron = hw ? hw.pron : PRON[s];
    if (!gloss) errors.push(at + ' 선택지 "' + s + '" 의 뜻이 없다 (GLOSS 에 추가)');
    if (!pron) errors.push(at + ' 선택지 "' + s + '" 의 발음이 없다 (PRON 에 추가)');
  });

  /* 유의어끼리 뜻이 글자까지 똑같으면 피드백 세 줄이 같아진다.
     비슷한 것은 당연하므로(유의어니까) 완전히 동일한 경우만 잡는다. */
  var texts = {};
  syn.forEach(function (s) {
    var hw = byWord[s];
    var g = hw ? (hw.meanings || []).join(', ') : GLOSS[s];
    if (!g) return;
    did('유의어 뜻 중복');
    if (texts[g]) errors.push(at + ' 유의어 "' + texts[g] + '" 와 "' + s + '" 의 뜻이 완전히 같다: ' + g);
    texts[g] = s;
  });
});

/* ── ⑤ 출제 시뮬레이션 ──────────────────────── */
var sim = { mcq: 0, not: 0, cloze: 0, match: 0 };
var simFail = [];
SET.forEach(function (x) {
  did('출제 시뮬레이션');
  var want = {
    mcq: true,
    not: !!(x.syn && x.syn.length >= 3),
    cloze: !!(x.ex && x.ex.length),
    match: true
  };
  Object.keys(want).forEach(function (m) {
    if (!want[m]) return;
    /* 무작위 요소가 있으므로 여러 번 시도해 본다 (quizgen 자신도 tryBuild 로 재시도한다) */
    var ok = false;
    for (var i = 0; i < 12 && !ok; i++) {
      var q = m === 'mcq' ? Q.build.mcq(x, 'en-ko', []) : Q.build[m](x, []);
      if (q) ok = true;
    }
    if (ok) sim[m]++;
    else simFail.push('[' + x.word + '] ' + m + ' 모드가 만들어지지 않는다 ' +
      '(오답 후보 부족이거나 보기가 겹친다)');
  });
});
simFail.forEach(function (f) { errors.push(f); });

/* ── ⑥ 분포 ────────────────────────────────── */
function tally(key) {
  var t = {};
  SET.forEach(function (x) { t[x[key]] = (t[x[key]] || 0) + 1; });
  return Object.keys(t).sort().map(function (k) { return k + ' ' + t[k]; }).join('  ');
}

/* ── 출력 ─────────────────────────────────── */
console.log('── words-q.js 검사 ─────────────────────────');
console.log('표제어 : ' + SET.length + '개');
console.log('품사   : ' + tally('pos'));
console.log('레벨   : ' + tally('level'));
console.log('');
console.log('출제 시뮬레이션 (quizgen 실제 빌더)');
console.log('  4지선다    ' + sim.mcq + ' / ' + SET.length);
console.log('  아닌것     ' + sim.not + ' / ' + SET.filter(function (x) { return x.syn && x.syn.length >= 3; }).length);
console.log('  문장빈칸   ' + sim.cloze + ' / ' + SET.filter(function (x) { return x.ex && x.ex.length; }).length);
console.log('  짝맞추기   ' + sim.match + ' / ' + SET.length);
console.log('');
console.log('syn 을 비워 둔 단어 : ' + SET.filter(function (x) { return !x.syn || !x.syn.length; })
  .map(function (x) { return x.word; }).join(', ') || '없음');

if (process.argv.indexOf('--rules') !== -1) {
  console.log('');
  console.log('검사별 수행 건수');
  Object.keys(checks).forEach(function (k) { console.log('  ' + k + ' : ' + checks[k] + '건'); });
}

var dead = Object.keys(checks).filter(function (k) { return checks[k] === 0; });
if (dead.length) errors.push('수행 0건인 검사가 있다: ' + dead.join(', '));

if (warns.length) {
  console.log('');
  console.log('⚠️  경고 ' + warns.length + '건');
  warns.forEach(function (x) { console.log('  · ' + x); });
}
if (errors.length) {
  console.log('');
  console.log('❌ 오류 ' + errors.length + '건');
  errors.forEach(function (x) { console.log('  · ' + x); });
  process.exit(1);
}
console.log('');
console.log('✅ 검사 통과');
