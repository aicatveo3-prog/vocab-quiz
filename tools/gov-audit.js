/**
 * gov-audit.js — 어법(지배) 데이터 검사와 전치사 문항 전량 출력
 *
 *   node tools/gov-audit.js            검사 + 생성되는 문항 전부
 *   node tools/gov-audit.js --quiet    검사 결과만
 *
 * 왜 세트별 audit 이 아니라 전 세트 도구인가 —
 * gov 데이터는 A·B·C 세트에 있고, 그 세 세트에는 세트별 audit 이 없다
 * (words-d/e/f-audit 만 있다). F 세트 작업에서 기존 A/B/C 결함 3건이
 * 뒤늦게 발견된 것도 같은 이유였다. 어법 데이터는 전 세트를 한 번에 본다.
 *
 * ★ 이 도구가 검사할 수 없는 것
 *   "prep 목록이 빠짐없는가" 는 기계로 알 수 없다. compare 에 to 를 빼먹으면
 *   "to 를 쓸 수 없는 것은? → compare" 라는 틀린 문항이 조용히 생성되는데,
 *   여기서는 통과한다. 그래서 아래 문항 목록을 사람이 읽어야 한다.
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
 'js/data/words-d.js', 'js/data/words-e.js', 'js/data/words-f.js',
 'js/data/gloss.js', 'js/data/pron.js'].forEach(load);

/* Store 스텁 — quizgen 이 우선순위 계산에 쓴다 */
window.Store = {
  info: function () { return { seen: 0, ok: 0, ng: 0, lastWrong: null }; },
  tier: function () { return 0; }
};
load('js/quizgen.js');

var SETS = [['A', window.VOCAB], ['B', window.VOCAB_B], ['C', window.VOCAB_C],
            ['D', window.VOCAB_D], ['E', window.VOCAB_E], ['F', window.VOCAB_F]];
var ALL = [];
SETS.forEach(function (s) { (s[1] || []).forEach(function (w) {
  w._set = s[0]; ALL.push(w);
}); });

var errors = [], warns = [];
var withGov = ALL.filter(function (w) { return w.gov; });

/* ── ① 스키마 ──────────────────────────────── */
withGov.forEach(function (w) {
  var at = '[' + w._set + ' ' + w.word + ']';
  var g = w.gov;
  if (!g.usage) errors.push(at + ' gov.usage 가 없다 — 해설이 없으면 넣을 이유가 없다');

  if (g.prep === undefined || g.prep === null) {
    // 전치사 지배가 아닌 어법(win acclaim). pat 도 없어야 한다.
    if (g.pat) errors.push(at + ' prep 없이 pat 만 있다 — 전치사 문항에 쓸 수 없다');
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
  if (!g.pat) return errors.push(at + ' gov.pat 이 없다');
  if ((g.pat.match(/\{\{\}\}/g) || []).length !== 1) {
    errors.push(at + ' gov.pat 에 {{}} 가 정확히 1개여야 한다');
  }
  /* pat 은 뒤에 명사구가 와야 한다. 빈칸이 맨 끝이면 to-부정사로 읽힌다. */
  if (/\{\{\}\}\s*$/.test(g.pat)) {
    errors.push(at + ' gov.pat 의 빈칸이 맨 끝이다 — 뒤에 명사구를 두어야 to-부정사로 읽히지 않는다');
  }
  /* usage 는 대표 전치사를 언급해야 한다 — 데이터 입력 불일치를 잡는다 */
  var p0 = g.prep[0];
  if (!new RegExp('(^|[^a-z])' + p0 + '([^a-z]|$)').test(g.usage)) {
    errors.push(at + ' gov.usage 에 대표 전치사 "' + p0 + '" 가 안 보인다: ' + g.usage);
  }
});

/* ── ② 예문과의 일관성 ─────────────────────── */
withGov.forEach(function (w) {
  var g = w.gov;
  if (!g.prep || !w.ex || !w.ex.length) return;
  var joined = w.ex.map(function (e) { return e.s; }).join(' ');
  var hit = g.prep.some(function (p) {
    return new RegExp('(^|[^A-Za-z])' + p + '([^A-Za-z]|$)', 'i').test(joined);
  });
  if (!hit) {
    warns.push('[' + w._set + ' ' + w.word + '] 예문에 지배 전치사(' +
               g.prep.join('/') + ')가 없다 — 문장 빈칸에서 어법이 노출되지 않는다');
  }
});

/* ── ③ 문항 생성 전량 ──────────────────────── */
var made = [], none = [];
ALL.forEach(function (w) {
  if (!w.gov || !w.gov.prep || !w.gov.pat) return;
  var q = null;
  for (var i = 0; i < 12 && !q; i++) q = window.Quiz.build.gov(w);
  if (q) made.push({ w: w, q: q }); else none.push(w.word);
});

/* 생성된 문항을 되짚어 검증 — 정답이 그 전치사를 받을 수 있으면 틀린 문항이다 */
var byWord = {};
ALL.forEach(function (w) { byWord[w.word] = w; });
made.forEach(function (m) {
  var P = m.q.prompt;
  var ansPrep = m.w.gov.prep;
  if (ansPrep.indexOf(P) !== -1) {
    errors.push('[' + m.w.word + '] 정답인데 "' + P + '" 를 받을 수 있다 — 문항이 틀렸다');
  }
  m.q.rows.forEach(function (r) {
    if (r.opt === m.q.answer) return;
    if (r.prep !== P) {
      errors.push('[' + m.w.word + '] 오답 "' + r.opt + '" 의 대표 전치사가 ' +
                  r.prep + ' 인데 문제문은 ' + P + ' 다');
    }
  });
  if (m.q.options.length !== 4) {
    errors.push('[' + m.w.word + '] 선택지가 4개가 아니다: ' + m.q.options.length);
  }
});

/* ── 출력 ──────────────────────────────────── */
console.log('── 어법(gov) 데이터 ───────────────────────');
console.log('gov 보유        : ' + withGov.length + '단어');
console.log('  전치사 지배   : ' + withGov.filter(function (w) { return w.gov.prep; }).length);
console.log('  그 외 어법    : ' + withGov.filter(function (w) { return !w.gov.prep; }).length +
            ' (' + withGov.filter(function (w) { return !w.gov.prep; })
              .map(function (w) { return w.word; }).join(', ') + ')');
var pd = {};
made.forEach(function (m) { pd[m.q.prompt] = (pd[m.q.prompt] || 0) + 1; });
console.log('전치사 문항     : ' + made.length + '문항  (' +
  Object.keys(pd).sort(function (a, b) { return pd[b] - pd[a]; })
    .map(function (k) { return k + ' ' + pd[k]; }).join(' · ') + ')');
console.log('문항 안 나오는 단어 : ' + none.length + (none.length ? ' (' + none.join(', ') + ')' : ''));

if (warns.length) {
  console.log('\n⚠️  경고 ' + warns.length + '건');
  warns.forEach(function (w) { console.log('  ' + w); });
}

if (process.argv.indexOf('--quiet') === -1) {
  console.log('\n════ 생성되는 전치사 문항 전량 (사람이 읽어야 하는 부분) ════');
  made.sort(function (a, b) { return a.w.word.localeCompare(b.w.word); })
    .forEach(function (m, i) {
      console.log('\n' + (i + 1) + '. 빈칸에 "' + m.q.prompt + '" 를 쓸 수 없는 것은?   [' +
                  m.w._set + ' · ' + m.w.pos + ' · ' + m.w.level + ']');
      m.q.options.forEach(function (o) {
        var r = null;
        m.q.rows.forEach(function (x) { if (x.opt === o) r = x; });
        console.log('   ' + (o === m.q.answer ? '★' : ' ') + ' ' + o +
                    '   (' + r.prep + ')');
      });
    });
}

console.log('');
if (errors.length) {
  console.log('❌ 오류 ' + errors.length + '건');
  errors.forEach(function (e) { console.log('  ' + e); });
  process.exit(1);
}
console.log('✅ 검사 통과');
