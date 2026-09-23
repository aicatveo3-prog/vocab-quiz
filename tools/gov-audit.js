/**
 * gov-audit.js — 어법(gov) 데이터 검사
 *
 *   node tools/gov-audit.js            전체 검사 + 어법 줄 전량
 *   node tools/gov-audit.js --quiet    검사 결과만
 *
 * gov 는 문항을 만들지 않는다. 노출에만 쓴다.
 *   usage    4지선다·아닌것·문장빈칸의 정답 화면에 한 줄로 뜬다
 *   prep[0]  짝 맞추기 카드 라벨에 붙는다 (absent → absent from)
 * prep[1..] 와 pat 은 지금 읽는 코드가 없다. 전치사 문항을 걷어낼 때
 * 남겨 두었다 — 검증된 언어 사실이고, usage 가 대표 전치사를 제대로
 * 가리키는지 확인하는 근거로 쓴다.
 *
 * 왜 세트별 audit 이 아니라 전 세트 도구인가 —
 * gov 데이터는 A·B·C·G 세트에 흩어져 있고, A·B·C 에는 세트별 audit 이 없다
 * (words-d/e/f/g-audit 만 있다). F 세트 작업에서 기존 A/B/C 결함 3건이,
 * G 세트 작업에서 aerial 결함 1건이 뒤늦게 발견된 것도 같은 이유였다.
 */
var fs = require('fs'), path = require('path');
var ROOT = path.join(__dirname, '..');
var window = {}; global.window = window;
global.document = { createElement: function () { return {}; } };

function load(rel) {
  var p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return false;
  (new Function('window', fs.readFileSync(p, 'utf8')))(window);
  return true;
}
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js',
 'js/data/words-d.js', 'js/data/words-e.js', 'js/data/words-f.js', 'js/data/words-g.js', 'js/data/words-h.js', 'js/data/words-i.js', 'js/data/words-j.js', 'js/data/words-k.js', 'js/data/words-l.js',
 'js/data/gloss.js', 'js/data/pron.js'].forEach(load);

var SETS = [['A', window.VOCAB], ['B', window.VOCAB_B], ['C', window.VOCAB_C],
            ['D', window.VOCAB_D], ['E', window.VOCAB_E], ['F', window.VOCAB_F],
            ['G', window.VOCAB_G],
            ['H', window.VOCAB_H], ['I', window.VOCAB_I || []],
            ['J', window.VOCAB_J || []], ['K', window.VOCAB_K || []],
            ['L', window.VOCAB_L || []]];
var ALL = [];
SETS.forEach(function (s) { (s[1] || []).forEach(function (w) {
  w._set = s[0]; ALL.push(w);
}); });

var errors = [], warns = [];
var withGov = ALL.filter(function (w) { return w.gov; });
function pad(s, n) { s = String(s); while (s.length < n) s += ' '; return s; }

/* ── ① 스키마 ──────────────────────────────── */
withGov.forEach(function (w) {
  var at = '[' + w._set + ' ' + w.word + ']';
  var g = w.gov;
  if (!g.usage) errors.push(at + ' gov.usage 가 없다 — 어법 줄이 없으면 넣을 이유가 없다');

  if (g.prep === undefined || g.prep === null) {
    /* 전치사 지배가 아닌 어법(win acclaim). 카드 라벨에는 붙지 않는다. */
    return;
  }
  if (!Array.isArray(g.prep) || !g.prep.length) {
    return errors.push(at + ' gov.prep 가 빈 배열이다');
  }
  g.prep.forEach(function (p) {
    if (typeof p !== 'string' || !/^[a-z]+$/.test(p)) {
      errors.push(at + ' gov.prep 항목이 소문자 전치사가 아니다: ' + p);
    }
  });
  var uniq = {};
  g.prep.forEach(function (p) {
    if (uniq[p]) errors.push(at + ' gov.prep 에 중복: ' + p);
    uniq[p] = true;
  });
  /* usage 는 대표 전치사를 언급해야 한다 — 카드 라벨과 어긋나면 안 된다.
     카드에는 prep[0] 이 붙는데 usage 가 다른 전치사를 설명하면 화면이 모순된다. */
  var p0 = g.prep[0];
  if (!new RegExp('(^|[^a-z])' + p0 + '([^a-z]|$)').test(g.usage)) {
    errors.push(at + ' gov.usage 에 대표 전치사 "' + p0 + '" 가 안 보인다: ' + g.usage);
  }
  if (g.pat && (g.pat.match(/\{\{\}\}/g) || []).length !== 1) {
    errors.push(at + ' gov.pat 에 {{}} 가 정확히 1개여야 한다');
  }
});

/* ── ② 카드 라벨 길이 ──────────────────────── */
var maxLen = ALL.reduce(function (m, w) { return Math.max(m, w.word.length); }, 0);
withGov.forEach(function (w) {
  if (!w.gov.prep) return;
  var label = w.word + ' ' + w.gov.prep[0];
  if (label.length > maxLen) {
    warns.push('[' + w._set + ' ' + w.word + '] 카드 라벨 "' + label + '" 이 ' +
      label.length + '자로 최장 표제어(' + maxLen + '자)를 넘는다');
  }
});

/* ── ③ 예문과의 일관성 ─────────────────────── */
withGov.forEach(function (w) {
  var g = w.gov;
  if (!g.prep || !w.ex || !w.ex.length) return;
  var joined = w.ex.map(function (e) { return e.s; }).join(' ');
  var hit = g.prep.some(function (p) {
    return new RegExp('(^|[^A-Za-z])' + p + '([^A-Za-z]|$)', 'i').test(joined);
  });
  if (!hit) {
    warns.push('[' + w._set + ' ' + w.word + '] 예문에 지배 전치사(' +
               g.prep.join('/') + ')가 없다 — 문장 빈칸에서 소거 단서로 쓰이지 않는다');
  }
});

/* ── 출력 ──────────────────────────────────── */
console.log('── 어법(gov) 데이터 ───────────────────────');
console.log('gov 보유        : ' + withGov.length + '단어');
console.log('  전치사 지배   : ' + withGov.filter(function (w) { return w.gov.prep; }).length +
            '  → 짝 맞추기 카드에 전치사가 붙는다');
var noPrep = withGov.filter(function (w) { return !w.gov.prep; });
console.log('  그 외 어법    : ' + noPrep.length +
            (noPrep.length ? ' (' + noPrep.map(function (w) { return w.word; }).join(', ') + ')' : ''));
var bySet = {};
withGov.forEach(function (w) { bySet[w._set] = (bySet[w._set] || 0) + 1; });
console.log('세트별          : ' + Object.keys(bySet).sort().map(function (k) {
  return k + ' ' + bySet[k]; }).join(' · '));
var byPrep = {};
withGov.forEach(function (w) { if (w.gov.prep) byPrep[w.gov.prep[0]] = (byPrep[w.gov.prep[0]] || 0) + 1; });
console.log('대표 전치사     : ' + Object.keys(byPrep).sort(function (a, b) {
  return byPrep[b] - byPrep[a]; }).map(function (k) { return k + ' ' + byPrep[k]; }).join(' · '));

var exposed = withGov.filter(function (w) { return w.ex && w.ex.length; }).length;
console.log('\n노출 경로');
console.log('  usage 한 줄   : ' + withGov.length + '단어 — 4지선다·아닌것·문장빈칸 정답 화면');
console.log('  카드 라벨     : ' + withGov.filter(function (w) { return w.gov.prep; }).length + '단어 — 짝 맞추기');
console.log('  예문 속 단서  : ' + exposed + '단어가 예문을 가진다');

if (warns.length) {
  console.log('\n⚠️  경고 ' + warns.length + '건');
  warns.forEach(function (w) { console.log('  ' + w); });
}

if (process.argv.indexOf('--quiet') === -1) {
  console.log('\n════ 어법 줄 전량 ════');
  withGov.slice().sort(function (a, b) { return a.word.localeCompare(b.word); })
    .forEach(function (w, i) {
      var label = w.gov.prep ? w.word + ' ' + w.gov.prep[0] : w.word;
      console.log(' ' + pad(i + 1, 4) + pad('[' + w._set + ']', 5) +
        pad(label, 24) + w.gov.usage);
    });
}

console.log('');
if (errors.length) {
  console.log('❌ 오류 ' + errors.length + '건');
  errors.forEach(function (e) { console.log('  ' + e); });
  process.exit(1);
}
console.log('✅ 검사 통과');
