/**
 * modes.js — 모드별 화면 렌더러 (모두 클릭 전용, 타이핑 없음)
 *
 * 각 렌더러는 ctx를 통해 결과를 app.js에 알린다.
 *   ctx.resolve(correct, payload)  선택형 4개 모드 — 한 문제 종료
 *   ctx.boardDone(stats)           짝 맞추기 — 보드 클리어
 *   ctx.reviewTier                 오답 노트 복습 차수(1~3). 쌍별 오답을 기록할 때
 *                                  넘겨야 다음 차수로 승급된다.
 *   ctx.review.onRetry             이미 답한 문제를 그 자리에서 다시 풀겠다는 요청
 */
window.Modes = (function () {
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  /**
   * 이미 답한 문제·보드 위에 붙는 안내.
   * ctx.review.onRetry를 주면 "다시 풀기" 버튼을 함께 낸다. 안내와 그 해결책이
   * 같은 자리에 있어야 막다른 길처럼 보이지 않는다.
   */
  function reviewNote(onRetry, doneText, lockText, btnLabel) {
    var note = el('div', 'review-note' + (onRetry ? ' has-retry' : ''));
    note.appendChild(el('span', 'rn-text', onRetry ? doneText : lockText));
    if (typeof onRetry === 'function') {
      var b = el('button', 'rn-retry', btnLabel);
      b.type = 'button';
      b.addEventListener('click', onRetry);
      note.appendChild(b);
    }
    return note;
  }

  /* ── 문항 지시문 / 프롬프트 ───────────────────── */

  /**
   * 문항 위의 한 줄. 단계 칩과 지시문은 같은 것을 두 번 말하는 셈이므로
   * 하나만 낸다. 정복 모드에서는 단계 칩이 지시문 역할을 겸한다.
   * 단, '아닌 것 고르기'의 지시문은 문제 자체이므로 항상 남긴다.
   */
  function buildLead(q) {
    var lead = el('div', 'q-lead');

    if (q.mode === 'not') {
      var ins = el('span', 'q-instruct');
      ins.appendChild(document.createTextNode('다음 중 '));
      ins.appendChild(el('b', null, '바꿔 쓸 수 없는'));
      ins.appendChild(document.createTextNode(' 것을 고르세요'));
      lead.appendChild(ins);
      return lead;
    }
    if (q.stageLabel) {
      lead.appendChild(el('span', 'q-stage', q.stageLabel));
      return lead;
    }

    var text = q.mode === 'cloze' ? '빈칸에 알맞은 단어를 고르세요'
      : q.mode === 'gov' ? '어법이 다른 하나를 고르세요'
      : q.dir === 'en-ko' ? '뜻을 고르세요'
      : '알맞은 단어를 고르세요';
    lead.appendChild(el('span', 'q-instruct', text));
    return lead;
  }

  function buildPrompt(q) {
    var wrap = el('div');
    wrap.appendChild(buildLead(q));

    if (q.mode === 'cloze') {
      wrap.appendChild(sentenceNode(q.sentence, 'q-sentence'));
      // 문제를 보는 순간부터 한국어 해석을 보여준다 (정답 단어 포함)
      if (q.ko) wrap.appendChild(el('div', 'q-ko-hint', q.ko));
      return wrap;
    }
    /* 전치사 구별 — 프롬프트는 전치사 하나다.
       "빈칸에 to 가 들어갈 수 없는 것은?" 처럼 전치사를 문제문에 박아 두면
       넷 중 하나만 알아도 답이 나온다. 선택지에 전치사를 보여주고 고르게 하면
       네 개를 모두 알아야 해서 부분 지식이 보상받지 못한다. */
    if (q.mode === 'gov') {
      var gp = el('div', 'q-prompt');
      var line = el('div', 'q-gov');
      line.appendChild(document.createTextNode('빈칸에 '));
      line.appendChild(el('b', 'q-gov-prep', q.prompt));
      line.appendChild(document.createTextNode(' 를 쓸 수 없는 것은?'));
      gp.appendChild(line);
      gp.appendChild(el('div', 'q-sub', q.promptSub));
      wrap.appendChild(gp);
      return wrap;
    }

    // mcq(양방향) · not — 프롬프트가 영단어인지 한국어 뜻인지만 다르다
    var isKoPrompt = q.mode === 'mcq' && q.dir === 'ko-en';
    var p = el('div', 'q-prompt');
    p.appendChild(el('div', isKoPrompt ? 'q-ko' : 'q-word', q.prompt));
    p.appendChild(el('div', 'q-sub', q.promptSub));
    wrap.appendChild(p);
    return wrap;
  }

  /**
   * 선택지 텍스트로 VOCAB 단어를 찾는다.
   * 문장 빈칸은 선택지가 변화형(abandoned, accommodations)일 수 있으므로
   * 원형으로 되돌려 가며 매칭한다.
   */
  function findVocabByForm(form) {
    var all = window.Quiz.ALL;
    var v = String(form).toLowerCase();
    var i;
    // 1) 그대로 일치
    for (i = 0; i < all.length; i++) {
      if (all[i].word.toLowerCase() === v) return all[i];
    }
    // 2) 어형 변화를 되돌려 본다
    var stems = [];
    if (/ies$/.test(v)) stems.push(v.replace(/ies$/, 'y'));
    if (/ied$/.test(v)) stems.push(v.replace(/ied$/, 'y'));
    if (/es$/.test(v)) stems.push(v.replace(/es$/, ''), v.replace(/es$/, 'e'));
    if (/s$/.test(v)) stems.push(v.replace(/s$/, ''));
    if (/ed$/.test(v)) stems.push(v.replace(/ed$/, ''), v.replace(/ed$/, 'e'));
    if (/d$/.test(v)) stems.push(v.replace(/d$/, ''));
    if (/ing$/.test(v)) stems.push(v.replace(/ing$/, ''), v.replace(/ing$/, 'e'));
    for (var s = 0; s < stems.length; s++) {
      for (i = 0; i < all.length; i++) {
        if (all[i].word.toLowerCase() === stems[s]) return all[i];
      }
    }
    return null;
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

  /* ── 선택형 4개 모드 공통 렌더러 ───────────────
     ctx.review = { chosen } 을 넘기면 이미 답한 상태로 그리고 클릭을 받지 않는다.
     지난 문제를 다시 볼 때 쓰며, 숙련도가 다시 기록되지 않는다. */
  function renderChoice(q, body, ctx) {
    body.innerHTML = '';
    var review = ctx.review;

    if (review) {
      body.appendChild(reviewNote(review.onRetry,
        '이미 답한 문제입니다', '지난 문제 — 다시 답할 수 없습니다', '다시 풀기'));
    }

    var promptWrap = buildPrompt(q);
    body.appendChild(promptWrap);

    var blank = promptWrap.querySelector('.blank');
    var opts = el('div', 'opts');
    var buttons = [];

    q.options.forEach(function (text) {
      var b = el('button', 'opt');
      b.type = 'button';
      b.appendChild(el('span', 'v', text));
      b._value = text;
      if (!review) {
        b.addEventListener('click', function () {
          settle(text);
          ctx.resolve(text === q.answer, q, text);
        });
      }
      buttons.push(b);
      opts.appendChild(b);
    });
    body.appendChild(opts);

    /** 선택 결과를 화면에 반영한다 (기록은 하지 않는다) */
    function settle(chosen) {
      buttons.forEach(function (b) {
        b.disabled = true;
        if (b._value === q.answer) b.classList.add('is-ok');
        else if (b._value === chosen) b.classList.add('is-ng');
        else b.classList.add('is-mute');
      });
      if (blank) {
        blank.textContent = q.answer;
        blank.classList.add('filled');
      }
      // 문장 빈칸: 답을 고르면 문장 바로 아래에 한국어 번역을 보여준다.
      // 단, q-ko-hint가 이미 있으면(문장 빈칸은 처음부터 표시) 중복 삽입하지 않는다.
      if (q.ko && !body.querySelector('.q-ko-inline') && !body.querySelector('.q-ko-hint')) {
        var koNode = el('div', 'q-ko-inline', q.ko);
        var sentence = body.querySelector('.q-sentence') || body.querySelector('.q-pattern');
        if (sentence && sentence.parentNode) {
          sentence.parentNode.insertBefore(koNode, sentence.nextSibling);
        }
      }

      /* 전치사 구별: 답을 고르면 네 선택지의 어법을 각각 보여준다.
         한 문항이 어법 네 개를 가르친다. 옛 '연어 고르기'는 한 문항에
         하나였다 — 같은 데이터로 노출이 네 배가 된다. */
      if (q.mode === 'gov' && q.rows) {
        var byOpt = {};
        q.rows.forEach(function (r) { byOpt[r.opt] = r; });
        buttons.forEach(function (b) {
          var r = byOpt[b._value];
          if (!r) return;
          var d = el('div', 'opt-detail');
          d.appendChild(el('b', 'opt-prep', r.prep));
          d.appendChild(document.createTextNode(' · ' + r.usage));
          b.classList.add('has-detail');
          b.appendChild(d);
        });
      }

      // 선택지가 영단어인 모드(한→영 4지선다·문장 빈칸)는 답을 고른 뒤
      // 각 선택지에 뜻과 발음을 표시한다. 오답으로 나온 단어도 함께 익힐 수 있다.
      var showsWordOptions =
        (q.mode === 'mcq' && q.dir === 'ko-en') || q.mode === 'cloze';
      if (showsWordOptions) {
        buttons.forEach(function (b) {
          var obj = findVocabByForm(b._value);
          if (!obj) return;
          var detail = el('div', 'opt-detail');
          detail.appendChild(document.createTextNode(obj.meanings.join(', ')));
          if (obj.pron) detail.appendChild(el('span', 'opt-pron', ' 🔊 ' + obj.pron));
          b.classList.add('has-detail');
          b.appendChild(detail);
        });
      }

      /* 아닌 것 고르기: 답을 고른 뒤 각 선택지에 유의어/반의어 여부를 표시.
       *
       * ⚠️ 유의어 칸에 표제어의 뜻을 찍으면 안 된다.
       * calamity 문제에서 misfortune·disaster·catastrophe가 모두 "= 재난"이 되어
       * 세 줄이 똑같아진다. 반복이 지저분한 것보다 나쁜 문제가 있다 —
       * misfortune은 '불운'이고 catastrophe는 '대참사'다. 서로 다른 뜻을 가진
       * 단어들을 같은 말이라고 가르치는 셈이 된다.
       *
       * 그래서 유의어도 "그 단어 자신의 뜻"을 보여준다. 단어장에 없는 유의어는
       * 한국어 뜻을 가진 데가 없으므로, 뜻을 지어내지 않고 관계만 밝힌다. */
      if (q.mode === 'not') {
        var allWords = window.Quiz.ALL;
        var findWord = function (lower) {
          for (var i = 0; i < allWords.length; i++) {
            if (allWords[i].word.toLowerCase() === lower) return allWords[i];
          }
          return null;
        };
        var mainObj = findWord(String(q.word).toLowerCase());
        if (mainObj) {
          var syns = (mainObj.syn || []).map(function (s) { return s.toLowerCase(); });
          buttons.forEach(function (b) {
            var val = b._value.toLowerCase();
            var isSyn = syns.indexOf(val) !== -1;
            /* 뜻은 두 곳에서 찾는다 — 표제어면 단어장, 아니면 GLOSS 사전.
               유의어든 반의어든 같은 순서로 찾으므로 한쪽만 뜻이 뜨는 일이 없다. */
            var obj = findWord(val);
            var gloss = obj ? obj.meanings.join(', ')
              : (window.GLOSS && window.GLOSS[val]) || null;
            /* 발음도 뜻과 같은 순서로 찾는다 — 표제어면 그 pron, 아니면 PRON 사전.
               아직 발음이 없는 단어는 뜻만 보여준다. 지어내지 않는다. */
            var pron = (obj && obj.pron) || (window.PRON && window.PRON[val]) || null;
            var detail = el('div', 'opt-detail');
            /* 단어 이름은 버튼 왼쪽에 이미 있으므로 여기서 반복하지 않는다. */
            var mark = isSyn ? '= ' : '≠ ';
            var tail = gloss
              || (isSyn ? mainObj.word + '와 바꿔 쓸 수 있는 말' : '반의어');
            /* 뜻을 먼저, 발음을 뒤에 둔다.   = 토착의; 원주민 · 네이티브 */
            detail.appendChild(document.createTextNode(mark + tail));
            if (pron) {
              detail.appendChild(document.createTextNode(' · '));
              detail.appendChild(el('span', 'opt-pron', pron));
            }
            b.classList.add('has-detail');
            b.appendChild(detail);
          });
        }
      }
    }

    if (review) settle(review.chosen);
  }

  /* ── ⑤ 짝 맞추기 ───────────────────────────
     ctx.review = { stats } 를 넘기면 이미 클리어한 상태로 그린다.
     단어와 뜻이 그대로 보이고 클릭만 받지 않는다. */
  function renderMatch(q, body, ctx) {
    body.innerHTML = '';
    var review = ctx.review;
    var total = q.pairs.length;
    var remaining = total;
    var mistakes = review && review.stats ? (review.stats.mistakes || 0) : 0;
    var wrongWords = [];

    // 도입 보드는 뜻을 처음 보여주는 자리이므로 숙련도를 올리지 않는다
    var noRecord = q.recordMode === 'none';

    if (review) {
      body.appendChild(reviewNote(review.onRetry,
        '이미 클리어한 보드입니다', '지난 보드 — 다시 풀 수 없습니다', '이 보드 다시 풀기'));
    }

    var head = el('div', 'match-head');
    var title = el('b', null, q.boardTitle || (total + '쌍을 모두 연결하세요'));
    var sub = el('span');
    head.appendChild(title);
    head.appendChild(sub);
    body.appendChild(head);

    function updateHead() {
      sub.textContent = review
        ? (total + '쌍 완료 · ' + (mistakes ? '실수 ' + mistakes + '회' : '실수 없음'))
        : ('남은 쌍 ' + remaining + ' · 실수 ' + mistakes);
    }
    updateHead();

    var grid = el('div', 'match-grid');
    var colL = el('div', 'match-col');
    var colR = el('div', 'match-col');
    grid.appendChild(colL);
    grid.appendChild(colR);
    body.appendChild(grid);

    /* 판을 잠그지 않는다.
       예전에는 오답 흔들림(340ms) 동안 locked 로 판을 막고, 그 사이에 누른
       탭은 마지막 하나만 기억해 두고 나중에 대신 처리했다. 그런데 그 방식은
       탭을 버린다. 340ms 안에 두 번 누르면 앞의 것이 사라지므로
         · 오답을 연달아 두 번 내면 두 번째가 실수로 집계되지 않는다
         · 오답 직후 다음 짝을 연달아 누르면 그 짝이 맞춰지지 않는다
       둘 다 "눌렀는데 반응이 없다 / 틀렸는데 오답이 안 된다"로 느껴진다.
       tools/match-swallow-check.js 가 이 세 경우를 재현한다.

       그래서 잠그는 대신, 새 탭이 들어오면 흔들리고 있던 오답 표시를 그 자리에서
       걷어내고 탭을 바로 처리한다. 버려지는 탭이 없으니 누른 순서도 결과에
       영향을 주지 않는다. finished 는 보드가 끝난 뒤(380ms) 들어오는 탭만 막는다. */
    var selL = null, selR = null, finished = false;
    var badPair = null, badTimer = null;

    function makeItem(label, key, side) {
      var b = el('button', 'mitem', label);
      b.type = 'button';
      b._key = key;
      b._side = side;
      b.addEventListener('click', function () { pick(b); });
      return b;
    }

    // 순서를 고정한다. 왼쪽은 알파벳순, 오른쪽은 같은 목록을 일정 칸수만큼
    // 회전시켜 배치한다. 랜덤이 아니므로 매번 같은 화면이 나오고,
    // 같은 행끼리 짝이 되지 않아 문제로서의 의미도 유지된다.
    var ordered = q.pairs.slice().sort(function (a, b) {
      return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
    });
    var shift = Math.max(1, Math.floor(ordered.length / 2));
    var rotated = ordered.slice(shift).concat(ordered.slice(0, shift));

    ordered.forEach(function (p) {
      // label 은 화면에 찍히는 글자(지배 전치사 포함), 두 번째 인자는 기록 키
      colL.appendChild(makeItem(p.label || p.word, p.word, 'L'));
    });
    rotated.forEach(function (p) {
      colR.appendChild(makeItem(p.meaning, p.word, 'R'));
    });

    // 복습 모드: 모두 맞춘 상태로 표시하고 클릭을 받지 않는다
    if (review) {
      remaining = 0;
      updateHead();
      [].concat(
        Array.prototype.slice.call(colL.children),
        Array.prototype.slice.call(colR.children)
      ).forEach(function (b) {
        b.disabled = true;
        b.classList.add('is-done');
      });
      return;
    }

    function clearSel() {
      if (selL) selL.classList.remove('is-sel');
      if (selR) selR.classList.remove('is-sel');
      selL = null; selR = null;
    }

    /* 흔들리고 있던 오답 표시를 걷어낸다. 340ms 타이머가 남아 있으면 취소한다. */
    function clearBad() {
      if (!badPair) return;
      if (badTimer) { clearTimeout(badTimer); badTimer = null; }
      badPair.forEach(function (n) { n.classList.remove('is-bad', 'is-sel'); });
      badPair = null;
    }

    function pick(btn) {
      if (finished) return;
      if (btn.classList.contains('is-done')) return;
      clearBad();
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
      if (a._key === b._key) {
        // 도입 보드는 노출만, 마지막 남은 한 쌍은 소거법으로 자동 정답이 되므로
        // 두 경우 모두 숙련도를 올리지 않는다
        if (noRecord || remaining === 1) window.Store.recordExposureOnly(a._key);
        else window.Store.record(a._key, true);
        a.classList.add('is-done');
        b.classList.add('is-done');
        clearSel();
        remaining--;
        updateHead();
        if (remaining === 0) {
          finished = true;
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
        // 도입 보드에서 틀린 것은 아직 배우지 않은 상태이므로 벌점을 주지 않는다
        if (!noRecord) window.Store.record(a._key, false, ctx.reviewTier);
        a.classList.add('is-bad');
        b.classList.add('is-bad');
        updateHead();
        /* 선택 상태는 즉시 비운다. 다음 탭이 곧바로 새 선택이 되게 하려는 것이다.
           빨간 표시(is-bad·is-sel)는 badPair 가 들고 있다가 340ms 뒤에,
           또는 그 전에 다음 탭이 들어오면 clearBad 가 걷어낸다. */
        selL = null;
        selR = null;
        badPair = [a, b];
        badTimer = setTimeout(function () {
          badTimer = null;
          clearBad();
        }, 340);
      }
    }
  }

  return {
    mcq:    { render: renderChoice },
    not:    { render: renderChoice },
    /* 전치사 구별은 '아닌 것 고르기'의 두 번째 갈래다. 개별 연습 형식 목록에는
       따로 나오지 않고(Quiz.MODES 에 없다) not 세션 안에 섞여 나온다.
       선택지 네 개를 누르는 구조가 같으므로 renderChoice 를 그대로 쓴다. */
    gov:    { render: renderChoice },
    cloze:  { render: renderChoice },
    match:  { render: renderMatch }
  };
})();
