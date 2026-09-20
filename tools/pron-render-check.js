/* modes.js의 'not' 피드백 렌더 결과를 문자열로 재현해 눈으로 확인한다 (일회성) */
var fs = require('fs'), path = require('path');
var ROOT = path.join(__dirname, '..');
var window = {}; global.window = window;
function load(rel) { (new Function('window', fs.readFileSync(path.join(ROOT, rel), 'utf8')))(window); }
['js/data/words.js', 'js/data/words-b.js', 'js/data/words-c.js',
 'js/data/gloss.js', 'js/data/pron.js'].forEach(load);

var ALL = (window.VOCAB || []).concat(window.VOCAB_B || []).concat(window.VOCAB_C || []);
var GLOSS = window.GLOSS, PRON = window.PRON;
function findWord(l) { for (var i = 0; i < ALL.length; i++) if (ALL[i].word.toLowerCase() === l) return ALL[i]; return null; }

/* modes.js와 같은 계산 */
function detailOf(mainObj, optValue) {
  var syns = (mainObj.syn || []).map(function (s) { return s.toLowerCase(); });
  var val = optValue.toLowerCase();
  var isSyn = syns.indexOf(val) !== -1;
  var obj = findWord(val);
  var gloss = obj ? obj.meanings.join(', ') : (GLOSS && GLOSS[val]) || null;
  var pron = (obj && obj.pron) || (PRON && PRON[val]) || null;
  var mark = isSyn ? '= ' : '≠ ';
  var tail = gloss || (isSyn ? mainObj.word + '와 바꿔 쓸 수 있는 말' : '반의어');
  return mark + (pron ? pron + ' · ' + tail : tail);
}

/* 1차에서 채운 단어가 실제로 뜨는 문제를 골라 보여준다 */
var filled = Object.keys(PRON);
var shown = 0;
console.log('══ 1차 발음이 실제로 표시되는 문제 예시 ══\n');
for (var i = 0; i < ALL.length && shown < 8; i++) {
  var w = ALL[i];
  if (!w.syn || w.syn.length < 3) continue;
  var opts = w.syn.slice(0, 3).concat((w.ant || []).slice(0, 1));
  var hit = opts.some(function (o) { return PRON[String(o).toLowerCase()]; });
  if (!hit) continue;
  console.log('[' + w.word + '] ' + w.meanings.join(', '));
  opts.forEach(function (o) {
    var pad = o + '                    '.slice(0, Math.max(1, 20 - o.length));
    console.log('   ' + pad + detailOf(w, o));
  });
  console.log('');
  shown++;
}

/* 발음 있는 것과 없는 것이 한 문제에 섞였을 때 */
console.log('══ 발음 없는 단어는 뜻만 나오는지 ══\n');
var mixed = 0;
for (var j = 0; j < ALL.length && mixed < 3; j++) {
  var v = ALL[j];
  if (!v.syn || v.syn.length < 3) continue;
  var o2 = v.syn.slice(0, 3).concat((v.ant || []).slice(0, 1));
  var some = o2.filter(function (o) { var l = String(o).toLowerCase(); var hw = findWord(l); return (hw && hw.pron) || PRON[l]; });
  if (some.length === 0 || some.length === o2.length) continue;
  console.log('[' + v.word + ']');
  o2.forEach(function (o) {
    var pad = o + '                    '.slice(0, Math.max(1, 20 - o.length));
    console.log('   ' + pad + detailOf(v, o));
  });
  console.log('');
  mixed++;
}
