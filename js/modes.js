/**
 * modes.js — 모드별 화면 렌더러 (모두 클릭 전용, 타이핑 없음)
 *
 * 각 렌더러는 ctx를 통해 결과를 app.js에 알린다.
 *   ctx.resolve(correct, payload)  선택형 4개 모드 — 한 문제 종료
 *   ctx.boardDone(stats)           짝 맞추기 — 보드 클리어
 */
window.Modes = (function () {
  var KEYS = ['A', 'B', 'C', 'D'];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  /* ── 문항 지시문 / 프롬프트 ───────────────────── */
  function buildPrompt(q) {
    var wrap = el('div');

    if (q.mode === 'mcq' && q.dir === 'en-ko') {
      wrap.appendChild(instruct('뜻을 고르세요'));
      var p = el('div', 'q-prompt');
      p.appendChild(el('div', 'q-word', q.prompt));
      p.appendChild(el('div', 'q-sub', q.promptSub));
      wrap.appendChild(p);

    } else if (q.mode === 'mcq') {
      wrap.appendChild(instruct('알맞은 단어를 고르세요'));
      var p2 = el('div', 'q-prompt');
      p2.appendChild(el('div', 'q-ko', q.prompt));
      p2.appendChild(el('div', 'q-sub', q.promptSub));
      wrap.appendChild(p2);

    } else if (q.mode === 'not') {
      var ins = el('div', 'q-instruct');
      ins.appendChild(document.createTextNode('다음 중 '));
      ins.appendChild(el('b', null, '바꿔 쓸 수 없는'));
      ins.appendChild(document.createTextNode(' 것을 고르세요'));
      wrap.appendChild(ins);
      var p3 = el('div', 'q-prompt');
      p3.appendChild(el('div', 'q-word', q.prompt));
      p3.appendChild(el('div', 'q-sub', q.promptSub));
      wrap.appendChild(p3);

    } else if (q.mode === 'cloze') {
      wrap.appendChild(instruct('빈칸에 알맞은 단어를 고르세요'));
      wrap.appendChild(sentenceNode(q.sentence, 'q-sentence'));

    } else if (q.mode === 'colloc') {
      wrap.appendChild(instruct('자연스러운 조합을 고르세요'));
      wrap.appendChild(sentenceNode(q.pattern, 'q-pattern'));
      wrap.appendChild(el('div', 'q-sub', q.promptSub));
    }
    return wrap;
  }

  function instruct(text) {
    return el('div', 'q-instruct', text);
  }

  /** "{{}}"를 빈칸 span으로 바꾼 문장 노드 */
  function sentenceNode(tpl, cls) {
    var node = el('div', cls);
    var parts = tpl.split('{{}}');
    node.appendChild(document.createTextNode(parts[0]));
    var blank = el('span', 'blank');
    node.appendChild(blank);
    node.appendChild(document.createTextNode(parts[1] || ''));
    node._blank = blank;
    return node;
  }

  /* ── 선택형 4개 모드 공통 렌더러 ─────────────── */
  function renderChoice(q, body, ctx) {
    body.innerHTML = '';
    var promptWrap = buildPrompt(q);
    body.appendChild(promptWrap);

    var blank = promptWrap.querySelector('.blank');
    var opts = el('div', 'opts');
    var buttons = [];

    q.options.forEach(function (text, i) {
      var b = el('button', 'opt');
      b.type = 'button';
      b.appendChild(el('span', 'k', KEYS[i]));
      b.appendChild(el('span', 'v', text));
      b.addEventListener('click', function () { choose(text, b); });
      buttons.push(b);
      opts.appendChild(b);
    });
    body.appendChild(opts);

    function choose(text, btn) {
      var correct = text === q.answer;
      buttons.forEach(function (b) {
        b.disabled = true;
        var v = b.querySelector('.v').textContent;
        if (v === q.answer) b.classList.add('is-ok');
        else if (b === btn) b.classList.add('is-ng');
        else b.classList.add('is-mute');
      });
      if (blank) {
        blank.textContent = q.answer;
        blank.classList.add('filled');
      }
      ctx.resolve(correct, q);
    }
  }

  /* ── ⑤ 짝 맞추기 ─────────────────────────── */
  function renderMatch(q, body, ctx) {
    body.innerHTML = '';
    var total = q.pairs.length;
    var remaining = total;
    var mistakes = 0;
    var wrongWords = [];

    var head = el('div', 'match-head');
    var title = el('b', null, total + '쌍을 모두 연결하세요');
    var sub = el('span');
    head.appendChild(title);
    head.appendChild(sub);
    body.appendChild(head);

    function updateHead() {
      sub.textContent = '남은 쌍 ' + remaining + ' · 실수 ' + mistakes;
    }
    updateHead();

    var grid = el('div', 'match-grid');
    var colL = el('div', 'match-col');
    var colR = el('div', 'match-col');
    grid.appendChild(colL);
    grid.appendChild(colR);
    body.appendChild(grid);

    var selL = null, selR = null, locked = false;

    function makeItem(label, key, side) {
      var b = el('button', 'mitem', label);
      b.type = 'button';
      b._key = key;
      b._side = side;
      b.addEventListener('click', function () { pick(b); });
      return b;
    }

    window.Quiz.shuffle(q.pairs).forEach(function (p) {
      colL.appendChild(makeItem(p.word, p.word, 'L'));
    });
    window.Quiz.shuffle(q.pairs).forEach(function (p) {
      colR.appendChild(makeItem(p.meaning, p.word, 'R'));
    });

    function clearSel() {
      if (selL) selL.classList.remove('is-sel');
      if (selR) selR.classList.remove('is-sel');
      selL = null; selR = null;
    }

    function pick(btn) {
      if (locked || btn.classList.contains('is-done')) return;
      if (btn._side === 'L') {
        if (selL) selL.classList.remove('is-sel');
        selL = (selL === btn) ? null : btn;
      } else {
        if (selR) selR.classList.remove('is-sel');
        selR = (selR === btn) ? null : btn;
      }
      if (selL) selL.classList.add('is-sel');
      if (selR) selR.classList.add('is-sel');
      if (selL && selR) evaluate();
    }

    function evaluate() {
      var a = selL, b = selR;
      locked = true;
      if (a._key === b._key) {
        // 마지막 남은 한 쌍은 소거법으로 자동 정답이 되므로 숙련도를 올리지 않는다
        if (remaining === 1) window.Store.recordExposureOnly(a._key);
        else window.Store.record(a._key, true);
        a.classList.add('is-done');
        b.classList.add('is-done');
        clearSel();
        remaining--;
        updateHead();
        locked = false;
        if (remaining === 0) {
          setTimeout(function () {
            ctx.boardDone({
              total: total, mistakes: mistakes,
              correct: mistakes === 0, wrongWords: wrongWords
            });
          }, 380);
        }
      } else {
        mistakes++;
        if (wrongWords.indexOf(a._key) === -1) wrongWords.push(a._key);
        window.Store.record(a._key, false);
        a.classList.add('is-bad');
        b.classList.add('is-bad');
        updateHead();
        setTimeout(function () {
          a.classList.remove('is-bad', 'is-sel');
          b.classList.remove('is-bad', 'is-sel');
          clearSel();
          locked = false;
        }, 340);
      }
    }
  }

  return {
    mcq:    { render: renderChoice },
    not:    { render: renderChoice },
    cloze:  { render: renderChoice },
    colloc: { render: renderChoice },
    match:  { render: renderMatch }
  };
})();
