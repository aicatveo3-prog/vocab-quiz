/**
 * app.js — 화면 라우팅과 세션 진행
 *
 * 피드백 원칙: 정답은 빠르게(자동 넘김), 오답은 느리게(확인 버튼을 눌러야 넘어감).
 * 오답에서 잠깐 멈춰 세우는 그 1초가 실제로 학습이 일어나는 지점이다.
 */
(function () {
  var COUNT_OPTIONS = [10, 15, 20];
  var MATCH_BOARDS = { 10: 3, 15: 4, 20: 5 };
  var AUTO_NEXT_MS = 620;

  var state = {
    count: 10,
    session: null,
    modeId: null,
    restrictTo: null,
    index: 0,
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
    ['home', 'quiz', 'result', 'wrong', 'words'].forEach(function (n) {
      $('screen-' + n).classList.toggle('is-active', n === name);
    });
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
    $('stat-streak').textContent = s.streak;
    $('stat-today').textContent = s.today;
    $('stat-mastered').textContent = s.mastered;
    $('stat-studied').textContent = s.studied;
    $('stat-total').textContent = s.total;

    var mPct = (s.mastered / s.total) * 100;
    var sPct = Math.max(0, (s.studied - s.mastered) / s.total) * 100;
    $('bar-mastered').style.width = mPct + '%';
    $('bar-studied').style.width = sPct + '%';

    // 최근 2주 히트맵
    var hm = $('heatmap');
    hm.innerHTML = '';
    window.Store.recentDays(14).forEach(function (d) {
      var lv = d.count === 0 ? 0 : d.count <= 5 ? 1 : d.count <= 15 ? 2 : d.count <= 30 ? 3 : 4;
      var i = el('i');
      i.setAttribute('data-lv', lv);
      i.title = d.date + ' · ' + d.count + '문제';
      hm.appendChild(i);
    });

    // 모드 카드
    var list = $('mode-list');
    list.innerHTML = '';
    window.Quiz.MODES.forEach(function (m) {
      var card = el('button', 'mode-card');
      card.type = 'button';
      card.appendChild(el('span', 'mode-ico', m.icon));
      var txt = el('span', 'mode-txt');
      txt.appendChild(el('b', null, m.label));
      txt.appendChild(el('span', null, m.sub));
      card.appendChild(txt);
      card.appendChild(el('span', 'mode-n', window.Quiz.availableCount(m.id) + '단어'));
      card.addEventListener('click', function () { startSession(m.id, null); });
      list.appendChild(card);
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

  $('btn-reset').addEventListener('click', function () {
    if (confirm('학습 기록(숙련도·오답 노트·연속 학습일)을 모두 삭제할까요?')) {
      window.Store.reset();
      renderHome();
    }
  });

  /* ── 세션 시작 ─────────────────────────────── */
  function startSession(modeId, restrictTo) {
    var count = modeId === 'match' ? MATCH_BOARDS[state.count] : state.count;
    var session = window.Quiz.buildSession(modeId, count, restrictTo);
    if (!session.length) {
      alert('출제할 수 있는 문제가 없습니다.');
      return;
    }
    state.session = session;
    state.modeId = modeId;
    state.restrictTo = restrictTo;
    state.index = 0;
    state.correct = 0;
    state.wrongWords = [];
    go('quiz');
    renderQuestion();
  }

  $('btn-quit').addEventListener('click', function () {
    if (confirm('세션을 그만두고 홈으로 갈까요? 지금까지의 기록은 저장됩니다.')) go('home');
  });

  /* ── 문제 렌더 ─────────────────────────────── */
  function renderQuestion() {
    var q = state.session[state.index];
    var mode = modeById(state.modeId);
    var unit = state.modeId === 'match' ? '보드' : '문제';

    $('quiz-mode-name').textContent = mode.label;
    $('quiz-progress').textContent = (state.index + 1) + ' / ' + state.session.length + ' ' + unit;
    $('quiz-bar').style.width = (state.index / state.session.length) * 100 + '%';
    $('quiz-feedback').innerHTML = '';

    window.Modes[q.mode].render(q, $('quiz-body'), {
      resolve: onResolve,
      boardDone: onBoardDone
    });
  }

  /* 선택형 모드 결과 */
  function onResolve(correct, q) {
    window.Store.record(q.word, correct);
    if (correct) state.correct++;
    else if (state.wrongWords.indexOf(q.word) === -1) state.wrongWords.push(q.word);
    if (correct && state.restrictTo) window.Store.clearWrong(q.word);
    showFeedback(correct, q);
  }

  /* 짝 맞추기 보드 결과 (숙련도는 modes.js에서 쌍별로 이미 기록됨) */
  function onBoardDone(stats) {
    if (stats.correct) state.correct++;
    stats.wrongWords.forEach(function (w) {
      if (state.wrongWords.indexOf(w) === -1) state.wrongWords.push(w);
    });
    var fb = $('quiz-feedback');
    fb.innerHTML = '';
    var box = el('div', 'fb ' + (stats.correct ? 'ok' : 'ng'));
    box.appendChild(el('div', 'fb-t', stats.correct
      ? '완벽 클리어! 실수 0'
      : '보드 클리어 · 실수 ' + stats.mistakes + '회'));
    if (!stats.correct) {
      box.appendChild(el('div', 'fb-note',
        '틀린 단어: ' + stats.wrongWords.join(', ')));
    }
    fb.appendChild(box);
    setTimeout(next, stats.correct ? AUTO_NEXT_MS : 1400);
  }

  /* ── 피드백: 정답은 빠르게, 오답은 확인을 눌러야 넘어감 ── */
  function showFeedback(correct, q) {
    var fb = $('quiz-feedback');
    fb.innerHTML = '';
    var box = el('div', 'fb ' + (correct ? 'ok' : 'ng'));

    box.appendChild(el('div', 'fb-t', correct ? '정답' : '오답 — 정답: ' + q.answer));
    if (q.note) box.appendChild(el('div', 'fb-note', q.note));
    if (q.ko) box.appendChild(el('div', 'fb-ko', q.ko));

    fb.appendChild(box);

    if (correct) {
      setTimeout(next, AUTO_NEXT_MS);
    } else {
      var btn = el('button', 'btn btn-ghost', '확인');
      btn.type = 'button';
      btn.addEventListener('click', next);
      box.appendChild(btn);
      // 작은 화면에서 확인 버튼이 접히지 않도록 피드백을 보이는 위치로 끌어온다
      if (box.scrollIntoView) box.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }

  function next() {
    state.index++;
    if (state.index >= state.session.length) renderResult();
    else renderQuestion();
  }

  /* ── 결과 ─────────────────────────────────── */
  function renderResult() {
    var total = state.session.length;
    var pct = Math.round((state.correct / total) * 100);
    var unit = state.modeId === 'match' ? '보드' : '문제';

    $('score-pct').textContent = pct + '%';
    $('score-ring').style.borderColor =
      pct >= 80 ? 'var(--ok)' : pct >= 50 ? 'var(--accent)' : 'var(--ng)';
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
