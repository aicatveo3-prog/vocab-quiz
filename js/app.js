/**
 * app.js — 화면 라우팅과 세션 진행
 *
 * 피드백 원칙: 정답은 빠르게(자동 넘김), 오답은 느리게(확인 버튼을 눌러야 넘어감).
 * 오답에서 잠깐 멈춰 세우는 그 1초가 실제로 학습이 일어나는 지점이다.
 */
(function () {

  var state = {
    flow: 'practice',      // 'practice' | 'conquer'
    session: null,
    modeId: null,
    restrictTo: null,
    setName: 'A',
    conquerSetId: 'A',
    conquerSession: null,
    slides: [],
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

  /* ── 화면 전환 — go()는 정복 모드 섹션에서 정의 ── */

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-go]');
    if (t) {
      var target = t.getAttribute('data-go');
      if (target === 'sets') { renderSets(); return; }
      go(target);
    }
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

    $('conquer-n').textContent = window.Conquer.buildChapters(window.Conquer.getSet('A')).length + '챕터';

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

  /* ── 세션 시작 (개별 연습) ─────────────────────
     세트 전체를 한 번에 출제한다. 모든 문제를 미리 만들어 두어야
     진행 바 드래그로 아무 문제로나 자유롭게 이동할 수 있다. */
  function startSession(modeId, restrictTo) {
    var avail = window.Quiz.availableCount(modeId);
    var count = modeId === 'match' ? Math.ceil(avail / 5) : avail;
    var session = window.Quiz.buildSession(modeId, count, restrictTo, !restrictTo);
    if (!session.length) {
      alert('출제할 수 있는 문제가 없습니다.');
      return;
    }
    state.flow = 'practice';
    state.session = session;
    state.modeId = modeId;
    state.restrictTo = restrictTo;
    state.setName = restrictTo ? '오답' : 'A';
    state.correct = 0;
    state.wrongWords = [];
    state.slides = session.map(function (q) {
      return { q: q, word: q.word || null, answered: false, chosen: null, correct: null,
        headline: null, boardStats: null };
    });
    state.cursor = 0;

    // 저장된 세션이 있으면 복원
    state.sessionKey = window.Store.sessionKey('practice', modeId, state.setName, null);
    var saved = window.Store.loadSession(state.sessionKey);
    if (saved && !restrictTo) {
      window.Store.restoreSession(saved, state.slides);
      state.correct = saved.correct || 0;
      state.wrongWords = saved.wrongWords || [];
      state.cursor = Math.min(saved.cursor || 0, state.slides.length - 1);
    }

    go('quiz');
    if (!saved || !restrictTo) persistSession();   // 초기 세션을 저장
    renderSlide();
  }

  // 확인창 없이 바로 홈으로.
  $('btn-quit').addEventListener('click', function () {
    state.flow = 'practice';
    go('home');
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
    persistCursor();   // 커서 이동 + 답변 상태를 저장

    var body = $('quiz-body');
    if (slide.q.mode === 'match') {
      if (slide.answered) {
        // 완료한 보드는 단어·뜻을 그대로 보여주고 클릭만 막는다
        window.Modes.match.render(slide.q, body, {
          review: { stats: slide.boardStats || {} }
        });
        showBoardFeedback(slide);
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
      // 정복 모드: 강등 없이 그냥 기록만
      var q = slide.q;
      window.Store.record(q.word, correct);
      if (correct) state.correct++;
      else if (state.wrongWords.indexOf(q.word) === -1) state.wrongWords.push(q.word);
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
    persistSession();
  }

  /* 짝 맞추기 보드 응답 (숙련도는 modes.js에서 쌍별로 이미 기록됨) */
  function onBoardAnswer(slide, stats) {
    slide.answered = true;
    slide.boardStats = stats;

    if (state.flow === 'conquer') {
      if (stats.correct) state.correct++;
      stats.wrongWords.forEach(function (w) {
        if (state.wrongWords.indexOf(w) === -1) state.wrongWords.push(w);
      });
      updateHead();
    } else {
      if (stats.correct) state.correct++;
      stats.wrongWords.forEach(function (w) {
        if (state.wrongWords.indexOf(w) === -1) state.wrongWords.push(w);
      });
    }
    showBoardFeedback(slide);
    renderNav();
    persistSession();
  }

  /** 현재 세션 상태를 localStorage에 저장한다 */
  function persistSession() {
    if (!state.sessionKey) return;
    window.Store.saveSession(state.sessionKey, state.cursor, state.slides);
  }

  /** 커서 위치만 빠르게 업데이트 (답변 데이터는 건드리지 않음) */
  function persistCursor() {
    if (!state.sessionKey) return;
    try {
      var raw = localStorage.getItem(state.sessionKey);
      if (raw) {
        var data = JSON.parse(raw);
        data.cursor = state.cursor;
        localStorage.setItem(state.sessionKey, JSON.stringify(data));
      }
    } catch (e) { /* noop */ }
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

    // 한글 발음 표시
    var wordObj = WORD_INDEX[q.word];
    if (wordObj && wordObj.pron) {
      box.appendChild(el('div', 'fb-pron', '🔊 ' + wordObj.pron));
    }

    if (q.ko) box.appendChild(el('div', 'fb-ko', q.ko));

    // 4지선다·아닌 것 고르기: 정답 단어의 예문이 있으면 피드백에 표시
    if (q.mode === 'mcq' || q.mode === 'not') {
      if (wordObj && wordObj.ex && wordObj.ex.length) {
        var e = wordObj.ex[0];
        var sentence = e.s.replace('{{}}', e.f);
        box.appendChild(el('div', 'fb-ex', sentence));
        if (e.ko) box.appendChild(el('div', 'fb-ko', e.ko));
      }
    }

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

    // 보드의 각 단어에 대해 발음·뜻·예문을 목록으로 보여준다
    var pairs = slide.q.pairs || [];
    if (pairs.length) {
      var list = el('div', 'board-words');
      pairs.forEach(function (p) {
        var w = WORD_INDEX[p.word];
        if (!w) return;
        var row = el('div', 'bwd');

        var head = el('div', 'bwd-head');
        head.appendChild(el('b', 'bwd-word', w.word));
        if (w.pron) head.appendChild(el('span', 'bwd-pron', '🔊 ' + w.pron));
        row.appendChild(head);

        row.appendChild(el('div', 'bwd-mean', w.meanings.join(', ')));

        if (w.ex && w.ex.length) {
          var e = w.ex[0];
          row.appendChild(el('div', 'bwd-ex', e.s.replace('{{}}', e.f)));
          if (e.ko) row.appendChild(el('div', 'bwd-ko', e.ko));
        }
        list.appendChild(row);
      });
      if (list.children.length) fb.appendChild(list);
    }
  }

  /* ── 이전 / 다음 ─────────────────────────── */
  function countAnswered() {
    return state.slides.filter(function (s) { return s.answered; }).length;
  }

  function renderNav() {
    $('quiz-nav').style.display = '';
    var last = state.slides.length - 1;

    // 정복 모드와 개별 연습 모두 자유 이동
    $('nav-prev').disabled = state.cursor <= 0;
    $('nav-next').disabled = false;
    $('nav-next').textContent = state.cursor >= last ? '결과 보기' : '다음 문제 ›';
    $('nav-mid').textContent = '푼 문제 ' + countAnswered() + ' / ' + state.slides.length;
  }

  function hideNav() { $('quiz-nav').style.display = 'none'; }

  $('nav-prev').addEventListener('click', function () {
    if (state.cursor > 0) { state.cursor--; renderSlide(); }
  });

  $('nav-next').addEventListener('click', function () {
    if (state.cursor < state.slides.length - 1) { state.cursor++; renderSlide(); }
    else advanceLive();
  });

  /* ── 진행 바 드래그 스크러버 (개별 연습 전용) ──────
     396문제를 한 줄에 담으면 한 칸이 1px 남짓이라 정밀 조작이 어렵다.
     드래그하는 동안 대상 번호 주변을 확대한 돋보기를 띄워 정확히 고르게 한다. */
  var barWrap = $('quiz-bar-wrap');
  var scrubbing = false;

  function scrubIndex(clientX) {
    var rect = barWrap.getBoundingClientRect();
    var frac = (clientX - rect.left) / rect.width;
    frac = Math.max(0, Math.min(1, frac));
    return Math.round(frac * (state.slides.length - 1));
  }

  function slideWordLabel(i) {
    var q = state.slides[i] && state.slides[i].q;
    if (!q) return '';
    return q.mode === 'match' ? '짝 맞추기 보드' : q.word;
  }

  function showMagnifier(idx) {
    var last = state.slides.length - 1;
    $('quiz-bar').style.width = (last ? (idx / last) * 100 : 0) + '%';
    $('scrub-num').textContent = (idx + 1) + ' / ' + state.slides.length;
    $('scrub-word').textContent = slideWordLabel(idx);
    var ruler = $('scrub-ruler');
    ruler.innerHTML = '';
    for (var j = idx - 7; j <= idx + 7; j++) {
      var tick = el('i');
      if (j < 0 || j > last) { tick.style.visibility = 'hidden'; }
      else if (j === idx) tick.className = 'here';
      else if (state.slides[j].answered) tick.className = 'done';
      ruler.appendChild(tick);
    }
    $('scrub-mag').style.display = 'block';
  }

  function hideMagnifier() { $('scrub-mag').style.display = 'none'; }

  barWrap.addEventListener('pointerdown', function (e) {
    if (state.flow !== 'practice' && state.flow !== 'conquer') return;
    if (state.cursor < 0) return;   // 미리보기 중에는 스크러빙 비활성
    scrubbing = true;
    try { barWrap.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
    showMagnifier(scrubIndex(e.clientX));
    e.preventDefault();
  });
  barWrap.addEventListener('pointermove', function (e) {
    if (!scrubbing) return;
    showMagnifier(scrubIndex(e.clientX));
  });
  function endScrub(e) {
    if (!scrubbing) return;
    scrubbing = false;
    hideMagnifier();
    state.cursor = scrubIndex(e.clientX);
    renderSlide();
  }
  barWrap.addEventListener('pointerup', endScrub);
  barWrap.addEventListener('pointercancel', function () {
    if (!scrubbing) return;
    scrubbing = false;
    hideMagnifier();
    renderSlide();   // 취소되면 이동 없이 현재 화면 복원
  });

  /** 새 문제로 진행 */
  function advanceLive() {
    if (state.flow === 'conquer') {
      // 정복 모드: 마지막 슬라이드에서 다음 → 결과
      renderChapterComplete();
      return;
    }
    if (state.cursor >= state.slides.length - 1) { renderResult(); return; }
    state.cursor++;
    renderSlide();
  }

  function updateHead() {
    if (state.flow === 'conquer') { updateConquerHead(); return; }
    var mode = modeById(state.modeId);
    var unit = state.modeId === 'match' ? '보드' : '문제';
    var last = state.slides.length - 1;
    $('quiz-mode-name').textContent = mode.label;
    $('quiz-progress').textContent =
      state.setName + ' · ' + (state.cursor + 1) + ' / ' + state.slides.length + ' ' + unit;
    var bar = $('quiz-bar-wrap');
    bar.style.display = '';
    bar.classList.add('scrubbable');   // 개별 연습은 진행 바가 스크러버
    $('quiz-bar').style.width = (last ? (state.cursor / last) * 100 : 0) + '%';
  }

  /* ══════════ 정복 모드 (챕터 기반) ══════════ */

  function go(name) {
    ['home', 'quiz', 'result', 'wrong', 'words', 'block', 'sets', 'chapters'].forEach(function (n) {
      $('screen-' + n).classList.toggle('is-active', n === name);
    });
    if (name !== 'quiz') $('conquer-grid').innerHTML = '';
    window.scrollTo(0, 0);
    if (name === 'home') renderHome();
    if (name === 'wrong') renderWrong();
    if (name === 'words') renderWords();
  }

  // 세트 목록
  function renderSets() {
    var list = $('set-list');
    list.innerHTML = '';
    window.Conquer.SETS.forEach(function (s) {
      var chs = window.Conquer.buildChapters(s);
      var btn = el('button', 'row-btn');
      btn.type = 'button';
      var main = el('span', 'row-main');
      main.appendChild(el('b', null, s.label + ' 세트'));
      main.appendChild(el('span', null, s.words.length + '단어 · ' + chs.length + '챕터'));
      btn.appendChild(main);
      btn.appendChild(el('span', 'row-n', '›'));
      btn.addEventListener('click', function () { state.conquerSetId = s.id; renderChapters(s.id); });
      list.appendChild(btn);
    });
    go('sets');
  }

  // 챕터 목록
  function renderChapters(setId) {
    var s = window.Conquer.getSet(setId);
    var chs = window.Conquer.buildChapters(s);
    $('chapters-title').textContent = s.label + ' 세트';
    var list = $('chapter-list');
    list.innerHTML = '';
    chs.forEach(function (ch) {
      var btn = el('button', 'row-btn');
      btn.type = 'button';
      var main = el('span', 'row-main');
      main.appendChild(el('b', null, '챕터 ' + ch.label));
      main.appendChild(el('span', null, ch.from + ' ~ ' + ch.to + '  (' + ch.rangeText + ')'));
      btn.appendChild(main);
      btn.appendChild(el('span', 'row-n', ch.words.length + '단어'));
      btn.addEventListener('click', function () { startConquerChapter(setId, ch.index); });
      list.appendChild(btn);
    });
    go('chapters');
  }

  $('btn-back-sets').addEventListener('click', function () { renderSets(); });

  // 챕터 드릴 시작
  function startConquerChapter(setId, chapterIndex) {
    var sess = window.Conquer.createChapterSession(setId, chapterIndex);
    if (!sess || !sess.slides.length) {
      alert('문제를 만들 수 없습니다.');
      return;
    }
    state.flow = 'conquer';
    state.session = null;
    state.modeId = null;
    state.conquerSession = sess;
    state.slides = sess.slides;
    state.cursor = -1;   // 미리보기부터 시작
    state.correct = 0;
    state.wrongWords = [];

    // 저장된 세션이 있으면 복원
    state.sessionKey = window.Store.sessionKey('conquer', null, setId, chapterIndex);
    var saved = window.Store.loadSession(state.sessionKey);
    if (saved) {
      window.Store.restoreSession(saved, state.slides);
      state.correct = saved.correct || 0;
      state.wrongWords = saved.wrongWords || [];
      var savedCursor = saved.cursor;
      if (typeof savedCursor === 'number' && savedCursor >= 0) {
        state.cursor = Math.min(savedCursor, state.slides.length - 1);
        go('quiz');
        renderSlide();
        return;
      }
    }

    go('quiz');
    renderConquerPreview(sess);
  }

  // 미리보기
  function renderConquerPreview(sess) {
    var body = $('quiz-body');
    body.innerHTML = '';
    $('quiz-feedback').innerHTML = '';
    hideNav();
    $('conquer-grid').innerHTML = '';
    $('quiz-mode-name').textContent = '정복 · 챕터 ' + sess.chapter.label;
    $('quiz-progress').textContent = sess.chapter.words.length + '단어';
    $('quiz-bar-wrap').style.display = 'none';

    var head = el('div', 'preview-head');
    head.appendChild(el('b', null, '챕터 ' + sess.chapter.label + ' · ' + sess.chapter.words.length + '단어'));
    head.appendChild(el('span', null, '충분히 훑어본 뒤 시작하세요'));
    body.appendChild(head);

    var card = el('div', 'panel');
    sess.previewWords.forEach(function (w) {
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
      state.cursor = 0;
      renderSlide();
    });
    body.appendChild(btn);
  }

  function updateConquerHead() {
    var sess = state.conquerSession;
    $('quiz-mode-name').textContent = '정복 · 챕터 ' + sess.chapter.label;
    $('quiz-progress').textContent = (state.cursor + 1) + ' / ' + state.slides.length;
    var bar = $('quiz-bar-wrap');
    bar.style.display = '';
    bar.classList.add('scrubbable');
    var last = state.slides.length - 1;
    $('quiz-bar').style.width = (last ? (state.cursor / last) * 100 : 0) + '%';
    $('conquer-grid').innerHTML = '';
  }

  // 정복 모드 결과 → 챕터 완료 화면 (기존 block 화면 재활용)
  function renderChapterComplete() {
    var answered = countAnswered();
    var pct = answered ? Math.round((state.correct / answered) * 100) : 0;
    var sess = state.conquerSession;

    var badge = $('block-badge');
    badge.textContent = pct + '%';
    badge.classList.toggle('is-ok', pct >= 80);
    badge.classList.toggle('is-ng', pct < 50);
    $('block-title').textContent = '챕터 ' + sess.chapter.label + ' 완료';
    $('block-sub').textContent =
      answered + '문제 중 ' + state.correct + '문제 정답';

    var box = $('block-words');
    box.innerHTML = '';
    if (state.wrongWords.length) {
      box.appendChild(el('div', 'section-title', '틀린 단어 ' + state.wrongWords.length + '개'));
      state.wrongWords.forEach(function (w) {
        var word = WORD_INDEX[w];
        var row = el('div', 'rw-item');
        row.appendChild(el('b', null, w));
        row.appendChild(el('span', null, word ? word.meanings.join(', ') : ''));
        box.appendChild(row);
      });
    } else {
      box.appendChild(el('div', 'empty', '틀린 단어가 없습니다!'));
    }
    $('btn-next-block').textContent = '챕터 목록으로';
    go('block');
  }

  $('btn-next-block').addEventListener('click', function () {
    if (state.conquerSession) {
      renderChapters(state.conquerSession.setId);
    } else {
      go('home');
    }
  });

  /* ── 결과 ─────────────────────────────────── */
  function renderResult() {
    var answered = countAnswered();
    var unit = state.modeId === 'match' ? '보드' : '문제';
    var pct = answered ? Math.round((state.correct / answered) * 100) : 0;

    $('score-pct').textContent = pct + '%';
    var ring = $('score-ring');
    ring.classList.toggle('is-ok', answered > 0 && pct >= 80);
    ring.classList.toggle('is-ng', answered > 0 && pct < 50);
    $('result-title').textContent = modeById(state.modeId).label + ' · ' + state.setName + ' 세트';
    $('result-sub').textContent = answered
      ? (answered + unit + ' 중 ' + state.correct + ' 정답 · 전체 ' + state.slides.length + unit +
        ' · 연속 ' + window.Store.summary(window.VOCAB.length).streak + '일')
      : '아직 푼 문제가 없습니다.';

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

    ['all', 'B1', 'B2', 'C1', 'C2'].forEach(function (lv) {
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
