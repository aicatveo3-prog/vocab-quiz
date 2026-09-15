/**
 * app.js — 화면 라우팅과 세션 진행
 *
 * 피드백 원칙: 정답은 빠르게(자동 넘김), 오답은 느리게(확인 버튼을 눌러야 넘어감).
 * 오답에서 잠깐 멈춰 세우는 그 1초가 실제로 학습이 일어나는 지점이다.
 */
(function () {
  var COUNT_OPTIONS = [10, 15, 20];
  var MATCH_BOARDS = { 10: 3, 15: 4, 20: 5 };

  var BLOCK_OPTIONS = [4, 5, 6];

  var state = {
    flow: 'practice',      // 'practice' | 'conquer'
    count: 10,
    blockSize: 5,
    block: null,
    session: null,
    modeId: null,
    restrictTo: null,
    slides: [],            // 지금까지 본 문제들 (이전/다음 이동용)
    cursor: -1,
    correct: 0,
    wrongWords: [],
    wordFilter: { status: 'all', level: 'all' }
  };

  var WORD_INDEX = {};
  window.VOCAB.forEach(function (w) { WORD_INDEX[w.word] = w; });

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function modeById(id) {
    return window.Quiz.MODES.filter(function (m) { return m.id === id; })[0];
  }

  /* ── 화면 전환 ─────────────────────────────── */
  function go(name) {
    ['home', 'quiz', 'result', 'wrong', 'words', 'block'].forEach(function (n) {
      $('screen-' + n).classList.toggle('is-active', n === name);
    });
    if (name !== 'quiz') $('conquer-grid').innerHTML = '';
    window.scrollTo(0, 0);
    if (name === 'home') renderHome();
    if (name === 'wrong') renderWrong();
    if (name === 'words') renderWords();
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-go]');
    if (t) go(t.getAttribute('data-go'));
  });

  /* ── 홈 ───────────────────────────────────── */
  function renderHome() {
    var s = window.Store.summary(window.VOCAB.length);

    // 오늘 현황 — 한 줄로 압축
    var line = $('today-line');
    line.innerHTML = '';
    line.appendChild(el('b', 'tnum', String(s.today)));
    line.appendChild(document.createTextNode('문제 · 연속 '));
    line.appendChild(el('b', 'tnum', String(s.streak)));
    line.appendChild(document.createTextNode('일'));

    // 진척도 — 바 하나 + 숫자 하나
    $('stat-mastered').textContent = s.mastered;
    $('stat-total').textContent = '/ ' + s.total;
    $('stat-studied').textContent = s.studied;
    $('bar-mastered').style.width = (s.mastered / s.total) * 100 + '%';
    $('bar-studied').style.width =
      Math.max(0, (s.studied - s.mastered) / s.total) * 100 + '%';

    // 개별 연습 — 아이콘 없는 목록형 행
    var list = $('mode-list');
    list.innerHTML = '';
    window.Quiz.MODES.forEach(function (m) {
      var row = el('button', 'row-btn');
      row.type = 'button';
      var main = el('span', 'row-main');
      main.appendChild(el('b', null, m.label));
      main.appendChild(el('span', null, m.sub));
      row.appendChild(main);
      row.appendChild(el('span', 'row-n', window.Quiz.availableCount(m.id) + '단어'));
      row.addEventListener('click', function () { startSession(m.id, null); });
      list.appendChild(row);
    });

    // 정복 모드 (코스)
    $('conquer-n').textContent = state.blockSize + '단어';
    var bp = $('block-picker');
    bp.innerHTML = '';
    BLOCK_OPTIONS.forEach(function (n) {
      var chip = el('button', 'chip' + (state.blockSize === n ? ' is-on' : ''), n + '단어');
      chip.type = 'button';
      chip.addEventListener('click', function () { state.blockSize = n; renderHome(); });
      bp.appendChild(chip);
    });

    // 문제 수
    var picker = $('count-picker');
    picker.innerHTML = '';
    COUNT_OPTIONS.forEach(function (c) {
      var chip = el('button', 'chip' + (state.count === c ? ' is-on' : ''), c + '문제');
      chip.type = 'button';
      chip.addEventListener('click', function () { state.count = c; renderHome(); });
      picker.appendChild(chip);
    });

    var wrongN = window.Store.wrongList().length;
    var badge = $('wrong-badge');
    badge.textContent = wrongN;
    badge.classList.toggle('is-zero', wrongN === 0);
  }

  // 기록 초기화는 홈에 있을 이유가 없어 단어장 화면 맨 아래로 옮겼다
  $('btn-reset').addEventListener('click', function () {
    if (confirm('학습 기록(숙련도·오답 노트·연속 학습일)을 모두 삭제할까요?')) {
      window.Store.reset();
      renderWords();
    }
  });

  /** 최근 2주 히트맵 — 매번 볼 정보가 아니라 단어장 화면에 둔다 */
  function renderHeatmap() {
    var hm = $('heatmap');
    hm.innerHTML = '';
    window.Store.recentDays(14).forEach(function (d) {
      var lv = d.count === 0 ? 0 : d.count <= 5 ? 1 : d.count <= 15 ? 2 : d.count <= 30 ? 3 : 4;
      var i = el('i');
      i.setAttribute('data-lv', lv);
      i.title = d.date + ' · ' + d.count + '문제';
      hm.appendChild(i);
    });
  }

  /* ── 세션 시작 ─────────────────────────────── */
  function startSession(modeId, restrictTo) {
    var count = modeId === 'match' ? MATCH_BOARDS[state.count] : state.count;
    var session = window.Quiz.buildSession(modeId, count, restrictTo);
    if (!session.length) {
      alert('출제할 수 있는 문제가 없습니다.');
      return;
    }
    state.flow = 'practice';
    state.block = null;
    state.session = session;
    state.modeId = modeId;
    state.restrictTo = restrictTo;
    state.slides = [];
    state.cursor = -1;
    state.correct = 0;
    state.wrongWords = [];
    go('quiz');
    advanceLive();
  }

  $('btn-quit').addEventListener('click', function () {
    var msg = state.flow === 'conquer'
      ? '묶음을 그만두고 홈으로 갈까요? 지금까지의 숙련도는 저장됩니다.'
      : '세션을 그만두고 홈으로 갈까요? 지금까지의 기록은 저장됩니다.';
    if (confirm(msg)) {
      state.block = null;
      state.flow = 'practice';
      go('home');
    }
  });

  /* ══════════ 문제 이동 ══════════
     답한 문제는 슬라이드로 쌓아 두고 이전/다음으로 오갈 수 있게 한다.
     시간에 쫓기지 않도록 자동으로 넘어가는 동작은 어디에도 두지 않는다.
     지난 문제는 읽기 전용이라 숙련도가 다시 기록되지 않는다. */

  function pushSlide(q) {
    state.slides.push({
      q: q, answered: false, chosen: null, correct: null,
      headline: null, boardStats: null
    });
    state.cursor = state.slides.length - 1;
  }

  function currentSlide() {
    return state.slides[state.cursor] || null;
  }

  function renderSlide() {
    var slide = currentSlide();
    if (!slide) return;
    $('quiz-feedback').innerHTML = '';
    updateHead();

    var body = $('quiz-body');
    if (slide.q.mode === 'match') {
      if (slide.answered) {
        renderBoardSummary(slide, body);
      } else {
        window.Modes.match.render(slide.q, body, {
          boardDone: function (stats) { onBoardAnswer(slide, stats); }
        });
      }
    } else if (slide.answered) {
      window.Modes[slide.q.mode].render(slide.q, body, { review: { chosen: slide.chosen } });
      showFeedbackBox(slide);
    } else {
      window.Modes[slide.q.mode].render(slide.q, body, {
        resolve: function (correct, q, chosen) { onChoiceAnswer(slide, correct, chosen); }
      });
    }
    renderNav();
    window.scrollTo(0, 0);
  }

  /* 선택형 응답 */
  function onChoiceAnswer(slide, correct, chosen) {
    slide.answered = true;
    slide.chosen = chosen;
    slide.correct = correct;

    if (state.flow === 'conquer') {
      var res = state.block.onAnswer(correct);
      if (correct && res && res.done) slide.headline = '정답 — ' + res.word + ' 정복!';
      else if (!correct && res && res.demoted) slide.headline = '오답 — 한 단계 내려갑니다';
      else if (!correct && res && !res.filler) slide.headline = '오답 — 이 단계를 다시 봅니다';
      updateHead();
    } else {
      var q = slide.q;
      window.Store.record(q.word, correct);
      if (correct) state.correct++;
      else if (state.wrongWords.indexOf(q.word) === -1) state.wrongWords.push(q.word);
      if (correct && state.restrictTo) window.Store.clearWrong(q.word);
    }
    showFeedbackBox(slide);
    renderNav();
  }

  /* 짝 맞추기 보드 응답 (숙련도는 modes.js에서 쌍별로 이미 기록됨) */
  function onBoardAnswer(slide, stats) {
    slide.answered = true;
    slide.boardStats = stats;

    if (state.flow === 'conquer') {
      state.block.onBoardDone();
      updateHead();
    } else {
      if (stats.correct) state.correct++;
      stats.wrongWords.forEach(function (w) {
        if (state.wrongWords.indexOf(w) === -1) state.wrongWords.push(w);
      });
    }
    showBoardFeedback(slide);
    renderNav();
  }

  function showFeedbackBox(slide) {
    var q = slide.q;
    var fb = $('quiz-feedback');
    fb.innerHTML = '';
    var box = el('div', 'fb ' + (slide.correct ? 'ok' : 'ng'));
    box.appendChild(el('div', 'fb-t',
      slide.headline || (slide.correct ? '정답' : '오답 — 정답: ' + q.answer)));
    if (!slide.correct && slide.headline) {
      box.appendChild(el('div', 'fb-note', '정답: ' + q.answer));
    }
    if (q.note) box.appendChild(el('div', 'fb-note', q.note));
    if (q.ko) box.appendChild(el('div', 'fb-ko', q.ko));
    fb.appendChild(box);
  }

  function showBoardFeedback(slide) {
    var st = slide.boardStats;
    var fb = $('quiz-feedback');
    fb.innerHTML = '';
    var box = el('div', 'fb ' + (st.correct ? 'ok' : 'ng'));
    box.appendChild(el('div', 'fb-t', st.correct
      ? '완벽 클리어! 실수 0'
      : '보드 클리어 · 실수 ' + st.mistakes + '회'));
    if (!st.correct && st.wrongWords.length) {
      box.appendChild(el('div', 'fb-note', '틀린 단어: ' + st.wrongWords.join(', ')));
    }
    fb.appendChild(box);
  }

  /** 이미 클리어한 보드는 다시 풀 수 없으므로 요약만 보여준다 */
  function renderBoardSummary(slide, body) {
    body.innerHTML = '';
    body.appendChild(el('div', 'review-note', '지난 보드 — 다시 풀 수 없습니다'));
    var st = slide.boardStats;
    var box = el('div', 'board-summary');
    box.appendChild(el('b', null, slide.q.pairs.length + '쌍 완료'));
    box.appendChild(el('span', null,
      st.mistakes ? '실수 ' + st.mistakes + '회' : '실수 없음'));
    body.appendChild(box);
    showBoardFeedback(slide);
  }

  /* ── 이전 / 다음 ─────────────────────────── */
  function renderNav() {
    var slide = currentSlide();
    var isLast = state.cursor >= state.slides.length - 1;
    $('quiz-nav').style.display = '';
    $('nav-prev').disabled = state.cursor <= 0;
    // 아직 답하지 않은 문제에서는 넘어갈 수 없다 (건너뛰기 방지)
    $('nav-next').disabled = isLast && (!slide || !slide.answered);
    $('nav-mid').textContent = isLast
      ? '' : '지난 문제 ' + (state.cursor + 1) + ' / ' + state.slides.length;
  }

  function hideNav() { $('quiz-nav').style.display = 'none'; }

  $('nav-prev').addEventListener('click', function () {
    if (state.cursor > 0) { state.cursor--; renderSlide(); }
  });

  $('nav-next').addEventListener('click', function () {
    if (state.cursor < state.slides.length - 1) { state.cursor++; renderSlide(); }
    else advanceLive();
  });

  /** 새 문제로 진행 */
  function advanceLive() {
    if (state.flow === 'conquer') { renderConquerStep(); return; }
    if (state.slides.length >= state.session.length) { renderResult(); return; }
    pushSlide(state.session[state.slides.length]);
    renderSlide();
  }

  function updateHead() {
    if (state.flow === 'conquer') { updateConquerHead(); return; }
    var mode = modeById(state.modeId);
    var unit = state.modeId === 'match' ? '보드' : '문제';
    $('quiz-mode-name').textContent = mode.label;
    $('quiz-progress').textContent =
      (state.cursor + 1) + ' / ' + state.session.length + ' ' + unit;
    $('quiz-bar-wrap').style.display = '';
    $('quiz-bar').style.width =
      ((state.cursor + 1) / state.session.length) * 100 + '%';
  }

  /* ══════════ 정복 모드 ══════════ */

  $('conquer-card').addEventListener('click', function () { startConquer(); });
  $('btn-next-block').addEventListener('click', function () { startConquer(); });

  function startConquer() {
    var block = window.Conquer.createBlock(state.blockSize);
    if (!block) {
      alert('묶음을 구성할 수 없습니다.');
      return;
    }
    state.flow = 'conquer';
    state.block = block;
    state.session = null;
    state.slides = [];
    state.cursor = -1;
    go('quiz');
    renderConquerStep();
  }

  /** 진행 현황 — 단어 이름은 정복한 뒤에만 공개한다 */
  function renderConquerGrid() {
    var g = $('conquer-grid');
    g.innerHTML = '';
    if (state.flow !== 'conquer' || !state.block) return;

    state.block.grid().forEach(function (s) {
      var slot = el('span', 'cslot' + (s.done ? ' is-done' : ''));
      slot.appendChild(el('span', 'cn', s.done ? s.word : String(s.n)));
      var dots = el('span', 'cdots');
      for (var i = 0; i < s.total; i++) {
        dots.appendChild(el('b', i < s.skipped ? 'skip' : (i < s.passed ? 'on' : '')));
      }
      slot.appendChild(dots);
      g.appendChild(slot);
    });

    // 진행 숫자를 그리드 오른쪽 끝에 붙인다.
    // 진행 바까지 함께 두면 같은 정보가 세 번 나온다.
    g.appendChild(el('span', 'cgrid-count',
      state.block.passedStages() + ' / ' + state.block.totalStages()));
  }

  function updateConquerHead() {
    $('quiz-mode-name').textContent = '정복 모드';
    $('quiz-progress').textContent = '';
    $('quiz-bar-wrap').style.display = 'none';   // 그리드가 진행도를 대신한다
    renderConquerGrid();
  }

  function renderConquerStep() {
    var step = state.block.next();
    $('quiz-feedback').innerHTML = '';
    updateConquerHead();

    if (step.type === 'preview') { renderPreview(step); return; }
    if (step.type === 'done') { renderBlockComplete(step.stats); return; }

    if (step.type === 'board') step.q.boardTitle = '마지막 관문 — 짝 맞추기';
    pushSlide(step.q);
    renderSlide();
  }

  /** 묶음 미리보기 — 다 읽을 때까지 기다린다. 자동으로 넘어가지 않는다. */
  function renderPreview(step) {
    var body = $('quiz-body');
    body.innerHTML = '';
    hideNav();

    var head = el('div', 'preview-head');
    head.appendChild(el('b', null, '이번 묶음 ' + step.words.length + '단어'));
    head.appendChild(el('span', null, '충분히 훑어본 뒤 시작하세요'));
    body.appendChild(head);

    var card = el('div', 'panel');
    step.words.forEach(function (w) {
      var row = el('div', 'pv-item');
      var left = el('div');
      left.appendChild(el('b', null, w.word));
      left.appendChild(el('span', 'pv-tag', w.pos + ' · ' + w.level));
      row.appendChild(left);
      row.appendChild(el('div', 'pv-mean', w.meanings.join(', ')));
      card.appendChild(row);
    });
    body.appendChild(card);

    var btn = el('button', 'btn btn-primary pv-start', '시작하기');
    btn.type = 'button';
    btn.addEventListener('click', function () {
      state.block.startDrill();
      renderConquerStep();
    });
    body.appendChild(btn);
  }

  function renderBlockComplete(stats) {
    var all = stats.conquered === stats.size;
    var passed = state.block.passedStages();
    var total = state.block.totalStages();

    var badge = $('block-badge');
    badge.textContent = stats.conquered + ' / ' + stats.size;
    badge.classList.toggle('is-ok', all);
    $('block-title').textContent = all ? '묶음 정복!' : '묶음 종료';
    $('block-sub').textContent = '문제 ' + stats.asked + '개 · 단계 ' + passed + '/' + total +
      ' 통과' + (stats.demotions ? ' · 강등 ' + stats.demotions + '회' : '');

    var box = $('block-words');
    box.innerHTML = '';
    box.appendChild(el('div', 'section-title', '묶음 단어'));
    stats.words.forEach(function (w) {
      var row = el('div', 'bw-item');
      row.appendChild(el('span', 'bw-mark ' + (w.done ? 'ok' : 'ng'), w.done ? '✓' : '·'));
      var bodyEl = el('div', 'bw-body');
      bodyEl.appendChild(el('b', null, w.word));
      bodyEl.appendChild(el('div', 'bw-mean', w.meanings.join(', ')));
      row.appendChild(bodyEl);
      var side = w.done ? '정복' : '진행 중';
      if (w.skipped) side += ' · ' + w.skipped + '단계 생략';
      if (w.wrong) side += ' · 강등 ' + w.wrong;
      row.appendChild(el('div', 'bw-side', side));
      box.appendChild(row);
    });
    if (!all) {
      box.appendChild(el('div', 'site-sub',
        '정복하지 못한 단어는 숙련도가 남아 다음 묶음에서 이어집니다.'));
    }
    go('block');
  }

  /* ── 결과 ─────────────────────────────────── */
  function renderResult() {
    var total = state.session.length;
    var pct = Math.round((state.correct / total) * 100);
    var unit = state.modeId === 'match' ? '보드' : '문제';

    $('score-pct').textContent = pct + '%';
    var ring = $('score-ring');
    ring.classList.toggle('is-ok', pct >= 80);
    ring.classList.toggle('is-ng', pct < 50);
    $('result-title').textContent = modeById(state.modeId).label + ' 완료';
    $('result-sub').textContent =
      total + unit + ' 중 ' + state.correct + unit + ' 정답 · 연속 ' +
      window.Store.summary(window.VOCAB.length).streak + '일';

    var box = $('result-wrong');
    box.innerHTML = '';
    if (!state.wrongWords.length) {
      box.appendChild(el('div', 'empty', '틀린 단어가 없습니다. 완벽합니다.'));
    } else {
      box.appendChild(el('div', 'section-title', '틀린 단어 ' + state.wrongWords.length + '개'));
      state.wrongWords.forEach(function (w) {
        var word = WORD_INDEX[w];
        var row = el('div', 'rw-item');
        row.appendChild(el('b', null, w));
        row.appendChild(el('span', null, word ? word.meanings.join(', ') : ''));
        box.appendChild(row);
      });
    }
    go('result');
  }

  $('btn-again').addEventListener('click', function () {
    startSession(state.modeId, state.restrictTo);
  });

  /* ── 오답 노트 ─────────────────────────────── */
  function renderWrong() {
    var wrong = window.Store.wrongList();
    var chips = $('wrong-modes');
    chips.innerHTML = '';

    if (!wrong.length) {
      $('wrong-list').innerHTML = '';
      $('wrong-list').appendChild(el('div', 'empty', '오답 노트가 비어 있습니다.'));
      return;
    }

    window.Quiz.MODES.forEach(function (m) {
      var eligibleWrong = window.Quiz.eligible(m.id)
        .filter(function (w) { return wrong.indexOf(w.word) !== -1; });
      if (!eligibleWrong.length) return;
      var chip = el('button', 'chip', m.label + ' ' + eligibleWrong.length);
      chip.type = 'button';
      chip.addEventListener('click', function () {
        startSession(m.id, wrong);
      });
      chips.appendChild(chip);
    });

    var list = $('wrong-list');
    list.innerHTML = '';
    wrong.forEach(function (w) {
      list.appendChild(wordRow(WORD_INDEX[w], true));
    });
  }

  /* ── 단어장 ───────────────────────────────── */
  function renderWords() {
    renderHeatmap();
    var f = $('word-filters');
    f.innerHTML = '';

    var statuses = [
      { id: 'all', label: '전체' },
      { id: 'new', label: '미학습' },
      { id: 'learning', label: '학습 중' },
      { id: 'mastered', label: '마스터' }
    ];
    statuses.forEach(function (s) {
      var c = el('button', 'chip' + (state.wordFilter.status === s.id ? ' is-on' : ''), s.label);
      c.type = 'button';
      c.addEventListener('click', function () {
        state.wordFilter.status = s.id; renderWords();
      });
      f.appendChild(c);
    });

    var spacer = el('div');
    spacer.style.flexBasis = '100%';
    spacer.style.height = '2px';
    f.appendChild(spacer);

    ['all', 'B2', 'C1', 'C2'].forEach(function (lv) {
      var c = el('button', 'chip' + (state.wordFilter.level === lv ? ' is-on' : ''),
        lv === 'all' ? '전 레벨' : lv);
      c.type = 'button';
      c.addEventListener('click', function () {
        state.wordFilter.level = lv; renderWords();
      });
      f.appendChild(c);
    });

    var items = window.VOCAB.filter(function (w) {
      var info = window.Store.info(w.word);
      var st = state.wordFilter.status;
      if (st === 'new' && info.seen > 0) return false;
      if (st === 'learning' && !(info.seen > 0 && info.m < window.Store.MAX_MASTERY)) return false;
      if (st === 'mastered' && info.m < window.Store.MAX_MASTERY) return false;
      if (state.wordFilter.level !== 'all' && w.level !== state.wordFilter.level) return false;
      return true;
    });

    $('word-count').textContent = items.length + '개 단어';
    var list = $('word-list');
    list.innerHTML = '';
    if (!items.length) {
      list.appendChild(el('div', 'empty', '해당하는 단어가 없습니다.'));
      return;
    }
    items.forEach(function (w) { list.appendChild(wordRow(w, false)); });
  }

  function wordRow(w, showSyn) {
    if (!w) return el('div');
    var info = window.Store.info(w.word);
    var row = el('div', 'li');

    var top = el('div', 'li-top');
    top.appendChild(el('b', null, w.word));
    top.appendChild(el('span', 'li-tag', w.pos + ' · ' + w.level));
    var dots = el('span', 'li-m');
    for (var i = 0; i < window.Store.MAX_MASTERY; i++) {
      dots.appendChild(el('i', i < info.m ? 'on' : ''));
    }
    top.appendChild(dots);
    row.appendChild(top);

    row.appendChild(el('div', 'li-mean', w.meanings.join(', ')));
    if (showSyn && w.syn) {
      row.appendChild(el('div', 'li-syn', '유의어: ' + w.syn.slice(0, 3).join(', ')));
    }
    return row;
  }

  /* ── 서비스 워커 (오프라인 사용) ──────────────── */
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* 무시 */ });
    });
  }

  renderHome();
})();
