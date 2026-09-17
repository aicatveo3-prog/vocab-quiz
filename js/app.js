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
    // 오답 복습 세션인지. true면 맞힌 단어를 오답 노트에서 지운다.
    isReview: false,
    wordFilter: { status: 'all', level: 'all' }
  };

  /* 오답 노트·피드백·복습 세션은 세트를 가리지 않으므로 전 세트 합집합으로 만든다.
     세트별로 나눠야 하는 것은 "무엇을 출제할지"뿐이다. */
  var ALL_WORDS = window.Quiz.ALL;

  var WORD_INDEX = {};
  ALL_WORDS.forEach(function (w) { WORD_INDEX[w.word] = w; });

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
    var s = window.Store.summary(ALL_WORDS.length);

    // 부제 — 세트가 늘어나도 문구를 손으로 고치지 않도록 SETS에서 만든다
    $('head-sub').textContent = '수능 보카 · ' + window.Conquer.SETS
      .filter(function (set) { return set.words.length; })
      .map(function (set) { return set.label + ' 섹션 ' + set.words.length + '단어'; })
      .join(' + ');

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

    // 개별 연습 — 세트마다 목록을 하나씩 낸다 (A 5줄 + B 5줄)
    var practice = $('practice-sets');
    practice.innerHTML = '';
    window.Conquer.SETS.forEach(function (set) {
      if (!set.words.length) return;   // 단어가 아직 없는 세트는 내보내지 않는다
      renderModeList(practice, set);
    });

    // 정복 모드 카드 — 전 세트 챕터를 합산한다
    var totalChapters = window.Conquer.SETS.reduce(function (n, set) {
      return n + window.Conquer.buildChapters(set).length;
    }, 0);
    $('conquer-n').textContent = totalChapters + '챕터';

    var wrongN = window.Store.wrongList().length;
    var badge = $('wrong-badge');
    badge.textContent = wrongN;
    badge.classList.toggle('is-zero', wrongN === 0);

    // 오답 노트 카드 — 틀린 것이 있을 때만 내보낸다
    var card = $('wrong-card');
    card.style.display = wrongN ? '' : 'none';
    $('wrong-card-n').textContent = wrongN + '단어';
  }

  /** 개별 연습 — 세트 하나의 "제목 + 모드 5줄 + 안내문" 블록을 만든다.
      세트를 늘리면 Conquer.SETS만 보고 자동으로 블록이 하나 더 생긴다. */
  function renderModeList(host, set) {
    host.appendChild(el('h2', 'section-title', '개별 연습 · ' + set.label + ' 세트'));

    var list = el('div', 'rows');
    window.Quiz.MODES.forEach(function (m) {
      var row = el('button', 'row-btn');
      row.type = 'button';
      var main = el('span', 'row-main');
      main.appendChild(el('b', null, m.label));
      main.appendChild(el('span', null, m.sub));
      row.appendChild(main);
      // 출제 가능 단어 수는 세트 기준으로 센다
      row.appendChild(el('span', 'row-n',
        window.Quiz.availableCount(m.id, set.words) + '단어'));
      row.addEventListener('click', function () { startSession(m.id, null, set.id); });
      list.appendChild(row);
    });
    host.appendChild(list);

    host.appendChild(el('p', 'set-note',
      set.label + ' 세트 ' + set.words.length + '단어를 통째로 풀며, ' +
      '진행 바를 드래그해 원하는 문제로 이동할 수 있습니다.'));
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
  function startSession(modeId, restrictTo, setId) {
    var review = !!(restrictTo && restrictTo.length);

    // 오답 복습은 세트를 가리지 않는다 — 틀린 단어가 여러 세트에 걸쳐 있다.
    // 일반 연습만 세트로 출제 범위를 좁힌다. 오답 후보는 어느 쪽이든 전 세트에서 뽑는다.
    var set = review ? null : window.Conquer.getSet(setId);
    if (!review && !set) return;
    var setWords = set ? set.words : null;

    // 복습 세션은 문제 수를 "대상 단어 수"에 맞춘다.
    // 전체 단어 수로 계산하면 오답 3개를 복습하려는데 80보드가 만들어진다.
    var avail = window.Quiz.eligible(modeId, setWords).length;
    if (review) {
      var allow = {};
      restrictTo.forEach(function (w) { allow[w] = true; });
      avail = window.Quiz.eligible(modeId, setWords).filter(function (w) {
        return allow[w.word];
      }).length;
      if (!avail) {
        alert('이 형식으로 출제할 수 있는 오답 단어가 없습니다.');
        return;
      }
    }
    var count = modeId === 'match' ? Math.max(1, Math.ceil(avail / 5)) : avail;

    var session = window.Quiz.buildSession(modeId, count, restrictTo, true, setWords);
    if (!session.length) {
      alert('출제할 수 있는 문제가 없습니다.');
      return;
    }
    state.flow = 'practice';
    state.session = session;
    state.modeId = modeId;
    state.restrictTo = restrictTo;
    state.isReview = review;
    // 세션 키에 그대로 들어간다. A는 'A'를 유지해야 기존 저장 세션이 이어진다.
    state.setName = review ? '오답' : set.id;
    state.correct = 0;
    state.wrongWords = [];
    state.slides = session.map(function (q) {
      return { q: q, word: q.word || null, answered: false, chosen: null, correct: null,
        headline: null, boardStats: null };
    });
    state.cursor = 0;

    // 저장된 세션이 있으면 복원.
    // 복습 세션은 맞힐 때마다 대상 목록이 줄어들어 저장해 두면 어긋나므로 저장하지 않는다.
    var saved = null;
    if (review) {
      state.sessionKey = null;
    } else {
      state.sessionKey = window.Store.sessionKey('practice', modeId, state.setName, null);
      saved = window.Store.loadSession(state.sessionKey);
      if (saved) {
        window.Store.restoreSession(saved, state.slides);
        state.correct = saved.correct || 0;
        state.wrongWords = saved.wrongWords || [];
        state.cursor = Math.min(saved.cursor || 0, state.slides.length - 1);
      }
    }

    go('quiz');
    if (!saved) persistSession();   // 초기 세션을 저장 (복습은 sessionKey가 없어 무시됨)
    renderSlide();
  }

  /* ── 오답 복습 세션 (정복 방식 · 5개 모드 혼합) ──────
     결과 화면·챕터 목록·오답 노트에서 공통으로 쓴다.
     @param words 복습할 단어 이름 배열
     @param title 화면에 표시할 이름
     @param back  완료 후 돌아갈 화면을 여는 함수 */
  function startReviewSession(words, title, back) {
    var objs = (words || []).map(function (w) { return WORD_INDEX[w]; }).filter(Boolean);
    if (!objs.length) {
      alert('복습할 오답이 없습니다.');
      return;
    }
    var sess = window.Conquer.createReviewSession(objs, title);
    if (!sess || !sess.slides.length) {
      alert('복습 문제를 만들 수 없습니다.');
      return;
    }
    sess.back = back || function () { go('home'); };

    state.flow = 'conquer';
    state.session = null;
    state.modeId = null;
    state.restrictTo = sess.reviewWords;
    state.isReview = true;
    state.conquerSession = sess;
    state.slides = sess.slides;
    state.cursor = -1;          // 미리보기부터
    state.correct = 0;
    state.wrongWords = [];
    state.sessionKey = null;    // 복습 세션은 저장하지 않는다

    go('quiz');
    renderConquerPreview(sess);
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

    var q = slide.q;
    window.Store.record(q.word, correct);
    if (correct) state.correct++;
    else if (state.wrongWords.indexOf(q.word) === -1) state.wrongWords.push(q.word);

    // 오답 복습에서 맞히면 오답 노트에서 지운다 (개별 연습·정복 복습 공통).
    // 일반 연습에서 맞힌 것만으로는 지우지 않는다 — 복습으로 확인해야 비워진다.
    if (correct && state.isReview) window.Store.clearWrong(q.word);

    if (state.flow === 'conquer') updateHead();   // 정복 모드는 강등 없이 기록만
    showFeedbackBox(slide);
    renderNav();
    persistSession();
  }

  /* 짝 맞추기 보드 응답 (숙련도는 modes.js에서 쌍별로 이미 기록됨) */
  function onBoardAnswer(slide, stats) {
    slide.answered = true;
    slide.boardStats = stats;

    if (stats.correct) state.correct++;
    stats.wrongWords.forEach(function (w) {
      if (state.wrongWords.indexOf(w) === -1) state.wrongWords.push(w);
    });

    // 오답 복습에서는 한 번도 틀리지 않고 맞춘 쌍만 오답 노트에서 지운다.
    // 보드 단위가 아니라 단어 단위로 판정해야 한 단어 실수로 나머지가 남지 않는다.
    if (state.isReview) {
      var missed = stats.wrongWords || [];
      (slide.q.words || []).forEach(function (w) {
        if (missed.indexOf(w) === -1) window.Store.clearWrong(w);
      });
    }

    if (state.flow === 'conquer') updateHead();
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

    // 오답 노트는 출처와 무관하게 한 곳에 모이므로,
    // "챕터 단어 ∩ 오답 노트" 교집합만 구하면 챕터별 오답이 그대로 나온다.
    // 단, 그 교집합을 아직 풀지 않은 챕터에까지 보여주면 안 된다 (아래 played 참고).
    var wrongSet = {};
    window.Store.wrongList().forEach(function (w) { wrongSet[w] = true; });

    var setWrong = [];
    var back = function () { renderChapters(setId); };

    var list = $('chapter-list');
    list.innerHTML = '';

    chs.forEach(function (ch) {
      var chWrong = ch.words
        .filter(function (w) { return wrongSet[w.word]; })
        .map(function (w) { return w.word; });
      chWrong.forEach(function (w) {
        if (setWrong.indexOf(w) === -1) setWrong.push(w);
      });

      /* 아직 풀지 않은 챕터에는 오답을 내보내지 않는다.
         오답 노트는 출처를 가리지 않으므로, 개별 연습(396단어 통째로)이나
         짝 맞추기에서 틀린 단어가 한 번도 열어보지 않은 챕터에까지 빨간 숫자로
         붙는다. 그러면 목록만 보고는 내가 푼 챕터인지 알 수 없다.
         이어풀기 스냅샷은 문제를 하나라도 풀어야 생기므로(미리보기만 보고
         나가면 생기지 않는다) 별도 기록 없이 "푼 챕터" 표시로 그대로 쓴다.
         → 빨간 숫자가 있는 챕터 = 내가 정복 모드로 풀어본 챕터. */
      var played = !!window.Store.loadSession(
        window.Store.sessionKey('conquer', null, setId, ch.index));
      var showWrong = played && chWrong.length > 0;

      var pair = el('div', 'row-pair');

      var btn = el('button', 'row-btn');
      btn.type = 'button';
      var main = el('span', 'row-main');
      main.appendChild(el('b', null, '챕터 ' + ch.label));
      main.appendChild(el('span', null, ch.from + ' ~ ' + ch.to + '  (' + ch.rangeText + ')'));
      btn.appendChild(main);
      var n = el('span', 'row-n', ch.words.length + '단어');
      if (showWrong) {
        n.appendChild(el('span', 'row-wrong', ' · 오답 ' + chWrong.length));
      }
      btn.appendChild(n);
      btn.addEventListener('click', function () { startConquerChapter(setId, ch.index); });
      pair.appendChild(btn);

      // 오답이 없는 챕터에도 같은 폭의 빈 슬롯을 둔다.
      // 그래야 행마다 '20단어'가 같은 위치에서 끝나 목록이 흔들리지 않는다.
      var side = el('button', 'row-side' + (showWrong ? '' : ' is-empty'), '복습');
      side.type = 'button';
      if (showWrong) {
        side.title = '챕터 ' + ch.label + '의 오답 ' + chWrong.length + '단어만 다시 풀기';
        side.setAttribute('aria-label', side.title);
        side.addEventListener('click', function () {
          startReviewSession(chWrong, '챕터 ' + ch.label, back);
        });
      } else {
        side.disabled = true;
        side.setAttribute('aria-hidden', 'true');
      }
      pair.appendChild(side);

      list.appendChild(pair);
    });

    // 세트 단위 오답 복습 — 챕터를 넘나들며 틀린 것을 한 번에
    var setBtn = $('btn-set-review');
    if (setWrong.length) {
      setBtn.style.display = '';
      setBtn.textContent = s.label + ' 세트 오답 ' + setWrong.length + '단어 다시 풀기';
      setBtn.onclick = function () {
        startReviewSession(setWrong, s.label + ' 세트', back);
      };
    } else {
      setBtn.style.display = 'none';
    }

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
    sess.back = function () { renderChapters(setId); };

    state.flow = 'conquer';
    state.session = null;
    state.modeId = null;
    state.restrictTo = null;
    state.isReview = false;
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
    $('quiz-mode-name').textContent = sess.headTitle || ('정복 · 챕터 ' + sess.chapter.label);
    $('quiz-progress').textContent = sess.chapter.words.length + '단어';
    $('quiz-bar-wrap').style.display = 'none';

    var head = el('div', 'preview-head');
    head.appendChild(el('b', null, sess.previewTitle ||
      ('챕터 ' + sess.chapter.label + ' · ' + sess.chapter.words.length + '단어')));
    head.appendChild(el('span', null, sess.previewNote || '충분히 훑어본 뒤 시작하세요'));
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
    $('quiz-mode-name').textContent = sess.headTitle || ('정복 · 챕터 ' + sess.chapter.label);
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
    $('block-title').textContent = sess.resultTitle || ('챕터 ' + sess.chapter.label + ' 완료');
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

    // 방금 틀린 단어만 정복 방식(5개 모드 혼합)으로 다시 출제
    setRetryButton('btn-retry-block',
      sess.isReview ? sess.chapter.label : '챕터 ' + sess.chapter.label, sess.back);

    $('btn-next-block').textContent = sess.isReview ? '돌아가기' : '챕터 목록으로';
    go('block');
  }

  $('btn-next-block').addEventListener('click', function () {
    var sess = state.conquerSession;
    if (sess && typeof sess.back === 'function') sess.back();
    else if (sess && sess.setId) renderChapters(sess.setId);
    else go('home');
  });

  /** 결과·완료 화면의 "틀린 N단어 다시 풀기" 버튼을 상황에 맞게 설정한다 */
  function setRetryButton(btnId, title, back) {
    var btn = $(btnId);
    if (!btn) return;
    var words = state.wrongWords.slice();   // 세션이 초기화되기 전에 복사해 둔다
    if (!words.length) {
      btn.style.display = 'none';
      return;
    }
    btn.style.display = '';
    btn.textContent = '틀린 ' + words.length + '단어 다시 풀기';
    btn.onclick = function () { startReviewSession(words, title, back); };
  }

  /* ── 결과 ─────────────────────────────────── */
  function renderResult() {
    var answered = countAnswered();
    var unit = state.modeId === 'match' ? '보드' : '문제';
    var pct = answered ? Math.round((state.correct / answered) * 100) : 0;

    $('score-pct').textContent = pct + '%';
    var ring = $('score-ring');
    ring.classList.toggle('is-ok', answered > 0 && pct >= 80);
    ring.classList.toggle('is-ng', answered > 0 && pct < 50);
    $('result-title').textContent = state.isReview
      ? modeById(state.modeId).label + ' · 오답 복습'
      : modeById(state.modeId).label + ' · ' + state.setName + ' 세트';
    $('result-sub').textContent = answered
      ? (answered + unit + ' 중 ' + state.correct + ' 정답 · 전체 ' + state.slides.length + unit +
        ' · 연속 ' + window.Store.summary(ALL_WORDS.length).streak + '일')
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

    // 개별 연습 결과는 "같은 형식으로" 틀린 것만 다시 푼다.
    // 방금 4지선다에서 틀렸으면 4지선다로 확인 사살하는 흐름이 자연스럽다.
    var retry = $('btn-retry-result');
    var wrongCopy = state.wrongWords.slice();
    var retryMode = state.modeId;
    if (!wrongCopy.length) {
      retry.style.display = 'none';
    } else {
      retry.style.display = '';
      retry.textContent = '틀린 ' + wrongCopy.length +
        (retryMode === 'match' ? '단어' : '문제') + ' 다시 풀기';
      retry.onclick = function () { startSession(retryMode, wrongCopy); };
    }

    $('btn-again').textContent = state.isReview
      ? '오답 노트 전체 다시 풀기' : '같은 모드로 한 번 더';

    go('result');
  }

  $('btn-again').addEventListener('click', function () {
    if (!state.isReview) { startSession(state.modeId, null, state.setName); return; }
    // 복습 세션의 "한 번 더"는 남아 있는 오답 전체를 뜻한다.
    // 빈 배열을 넘기면 세트 전체(396문제)가 시작되므로 반드시 걸러낸다.
    var remain = window.Store.wrongList();
    if (!remain.length) {
      alert('오답 노트가 비었습니다. 완벽합니다!');
      go('home');
      return;
    }
    startSession(state.modeId, remain);
  });

  /* ── 오답 노트 ─────────────────────────────── */
  function renderWrong() {
    var wrong = window.Store.wrongList();
    var chips = $('wrong-modes');
    chips.innerHTML = '';
    $('wrong-count').textContent = wrong.length + '단어';

    var mixed = $('btn-wrong-mixed');
    if (!wrong.length) {
      mixed.style.display = 'none';
      $('wrong-modes-label').style.display = 'none';
      $('wrong-list').innerHTML = '';
      $('wrong-list').appendChild(el('div', 'empty',
        '오답 노트가 비어 있습니다. 틀린 단어는 여기에 모입니다.'));
      return;
    }

    // 기본 = 정복 방식 혼합 복습. 한 단어를 여러 각도로 물어 확실히 굳힌다.
    mixed.style.display = '';
    mixed.textContent = '섞어서 복습 · ' + wrong.length + '단어';
    mixed.onclick = function () {
      startReviewSession(wrong, '오답 노트', function () { go('wrong'); });
    };

    $('wrong-modes-label').style.display = '';
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

    var items = ALL_WORDS.filter(function (w) {
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
