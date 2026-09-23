/**
 * tools/size-projection.js — 1만 단어로 늘렸을 때 용량 추정
 *
 * 세 가지를 따로 본다. 성격이 완전히 달라서 하나로 뭉치면 판단을 못 한다.
 *   ① 내려받는 용량   — 첫 방문 속도. gzip 기준으로 봐야 한다
 *   ② 기기에 남는 용량 — PWA 캐시. iOS 한도가 낮다
 *   ③ 진도 저장 용량   — localStorage. 여기에 진짜 병목이 있다
 *
 * 실행: env -u NODE_OPTIONS node tools/size-projection.js
 */
'use strict';

var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
var ROOT = path.join(__dirname, '..');

function sizes(rel) {
  var buf = fs.readFileSync(path.join(ROOT, rel));
  return {
    raw: buf.length,
    gz: zlib.gzipSync(buf, { level: 9 }).length,
    br: zlib.brotliCompressSync(buf).length
  };
}
function sum(list) {
  return list.reduce(function (a, r) {
    return { raw: a.raw + r.raw, gz: a.gz + r.gz, br: a.br + r.br };
  }, { raw: 0, gz: 0, br: 0 });
}
function kb(n) { return (n / 1024).toFixed(0) + 'KB'; }
function mb(n) { return (n / 1048576).toFixed(2) + 'MB'; }
function show(n) { return n < 1048576 ? kb(n) : mb(n); }

/* ── 현재 ────────────────────────────────── */
var DATA = ['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js',
  'js/data/words-d.js', 'js/data/words-e.js', 'js/data/words-f.js', 'js/data/words-g.js', 'js/data/words-h.js', 'js/data/words-i.js', 'js/data/gloss.js', 'js/data/pron.js'];
var CODE = ['js/app.js', 'js/quizgen.js', 'js/modes.js', 'js/conquer.js',
  'js/store.js', 'js/sync.js', 'js/firebase-config.js',
  'css/style.css', 'index.html', 'sw.js', 'manifest.json', 'icon.svg'];

var data = sum(DATA.map(sizes));
var code = sum(CODE.map(sizes));

/* 단어 수를 실제로 센다.
   DATA 에는 gloss.js·pron.js 도 들어 있는데 그 둘은 표제어를 만들지 않으므로
   words*.js 만 골라 읽는다. 예전에는 slice(0, 4) 로 앞 네 개만 읽어서 세트를
   늘릴 때마다 조용히 빠졌다 — 파일 이름으로 고르면 다음 세트도 저절로 잡힌다. */
global.window = global;
DATA.filter(function (rel) { return /\/words(-[a-z])?\.js$/.test(rel); })
  .forEach(function (rel) {
    new Function(fs.readFileSync(path.join(ROOT, rel), 'utf8')).call(global);
  });
var WORDS = (global.VOCAB || []).concat(global.VOCAB_B || [])
  .concat(global.VOCAB_C || []).concat(global.VOCAB_D || [])
  .concat(global.VOCAB_E || []).concat(global.VOCAB_F || [])
  .concat(global.VOCAB_G || [])
  .concat(global.VOCAB_H || [])
  .concat(global.VOCAB_I || []);
var N = WORDS.length;

console.log('── 지금 (' + N + '단어) ──────────────────────');
console.log('데이터  원본 ' + show(data.raw).padStart(7) + '  gzip ' + show(data.gz).padStart(7) + '  brotli ' + show(data.br).padStart(7));
console.log('코드    원본 ' + show(code.raw).padStart(7) + '  gzip ' + show(code.gz).padStart(7) + '  brotli ' + show(code.br).padStart(7));
console.log('합계    원본 ' + show(data.raw + code.raw).padStart(7) + '  gzip ' + show(data.gz + code.gz).padStart(7) + '  brotli ' + show(data.br + code.br).padStart(7));
console.log('');
console.log('단어 1개당  원본 ' + (data.raw / N).toFixed(0) + 'B  gzip ' +
  (data.gz / N).toFixed(0) + 'B  brotli ' + (data.br / N).toFixed(0) + 'B');
console.log('');

/* ── 1만 단어 추정 ───────────────────────── */
console.log('── 1만 단어로 늘리면 ─────────────────────');
[3000, 5300, 10000].forEach(function (target) {
  var k = target / N;
  var raw = data.raw * k + code.raw;
  var gz = data.gz * k + code.gz;
  var br = data.br * k + code.br;
  console.log(String(target).padStart(6) + '단어  원본 ' + show(raw).padStart(7) +
    '  gzip ' + show(gz).padStart(7) + '  brotli ' + show(br).padStart(7));
});
console.log('');
console.log('* 코드(' + show(code.gz) + ' gzip)는 단어가 늘어도 그대로다');
console.log('* GitHub Pages 는 gzip 을 준다. brotli 는 기대하지 않는 게 안전하다');
console.log('');

/* ── 필드별로 어디서 용량이 나오나 ──────────── */
console.log('── 필드별 비중 (원본 기준) ────────────────');
var fields = ['word', 'pron', 'pos', 'level', 'meanings', 'syn', 'ex', 'ant', 'gov'];
var totalField = 0;
var each = fields.map(function (f) {
  var b = WORDS.reduce(function (a, w) {
    return a + (w[f] === undefined ? 0 : Buffer.byteLength(JSON.stringify(w[f])));
  }, 0);
  totalField += b;
  return { f: f, b: b };
});
each.sort(function (a, b) { return b.b - a.b; }).forEach(function (x) {
  console.log('  ' + x.f.padEnd(10) + show(x.b).padStart(8) +
    '  ' + (x.b / totalField * 100).toFixed(1) + '%' +
    '  → 1만단어 ' + show(x.b / N * 10000));
});
console.log('');

/* ── 얇은 색인만 만들면 (오답 후보용 최소 정보) ── */
var slim = WORDS.map(function (w) {
  return [w.word, w.pos, w.level, (w.meanings || [])[0]];
});
var slimJson = Buffer.from(JSON.stringify(slim));
console.log('── 얇은 색인 (word·pos·level·첫뜻만) ──────');
console.log('지금 ' + show(slimJson.length) + ' (gzip ' + show(zlib.gzipSync(slimJson, { level: 9 }).length) + ')');
console.log('1만단어 추정 ' + show(slimJson.length / N * 10000) + ' (gzip ' +
  show(zlib.gzipSync(slimJson, { level: 9 }).length / N * 10000) + ')');
console.log('→ 오답 후보·단어 조회는 이것만으로 된다. 예문·유의어는 필요할 때 불러오면 된다');
console.log('');

/* ── 진도 저장 (localStorage) ─────────────── */
console.log('── 진도 저장 localStorage ────────────────');
function fakeState(n) {
  var words = {};
  for (var i = 0; i < n; i++) {
    // 실제 rec() 모양 + 학습이 진행된 상태
    words[WORDS[i % N].word + (i >= N ? '_x' + i : '')] = {
      seen: 7, ok: 5, ng: 2, lastWrong: 1758300000000, wn: 2, at: 1758300000000
    };
  }
  return { words: words, saved: {}, days: {}, streak: 12, lastDay: '2026-09-20', totalAnswered: 9000 };
}
[1429, 5300, 10000].forEach(function (n) {
  var json = JSON.stringify(fakeState(n));
  var bytes = Buffer.byteLength(json);
  // localStorage 는 UTF-16 으로 세는 브라우저가 많다 — 최악을 가정한다
  var t0 = process.hrtime.bigint();
  for (var i = 0; i < 20; i++) JSON.stringify(fakeState(n));
  var t1 = process.hrtime.bigint();
  console.log(String(n).padStart(6) + '단어  ' + show(bytes).padStart(8) +
    '  (UTF-16 최악 ' + show(json.length * 2).padStart(8) + ')' +
    '  stringify ' + (Number(t1 - t0) / 20 / 1e6).toFixed(1) + 'ms');
});
console.log('');
console.log('* localStorage 한도는 출처당 5MB 가 일반적이다');
console.log('* store.js save() 는 record() 마다 state 전체를 stringify 한다');
console.log('  → 문제 하나 풀 때마다 위 시간이 통째로 든다 (Node 기준, 폰은 3~5배)');
