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
    /* 오답 노트 복습 중이면 그 차수(1~3), 아니면 null.
       boolean으로 두면 "몇 차 복습인가"를 알 수 없어 승급이 불가능하다. */
    reviewTier: null,
    wrongTier: 1,          // 오답 노트 화면에서 보고 있는 차수
    wordFilter: { status: 'all', level: 'all' }
  };

  /* 오답 노트·피드백·복습 세션은 세트를 가리지 않으므로 전 세트 합집합으로 만든다.
     세트별로 나눠야 하는 것은 "무엇을 출제할지"뿐이다. */
  var ALL_WORDS = window.Quiz.ALL;

  var WORD_INDEX = {};
  ALL_WORDS.forEach(function (w) { WORD_INDEX[w.word] = w; });

  /* ── 버전(에디션) 필터 ────────────────────────
     고른 버전에 속한 단어만 남긴다. 종합·미선택이면 전체를 그대로 돌려준다.
     오답 후보·단어 조회(WORD_INDEX)는 버전을 가리지 않으므로 여기서 거르지 않는다. */
  function edFilter(words) {
    return window.Edition ? window.Edition.filter(words) : words;
  }
  /** 현재 버전에 속한 단어 이름 집합. 종합·미선택이면 null(=진척도 전체 집계). */
  function edScopeSet() {
    var ed = window.Edition && window.Edition.get();
    if (!ed || ed === 'all') return null;
    var set = {};
    edFilter(ALL_WORDS).forEach(function (w) { set[w.word] = true; });
    return set;
  }

  /* ── 오답 노트의 버전별 표시 ────────────────────
     오답 기록은 버전을 가리지 않고 하나로 쌓인다(store.js). 다만 "공무원 오답
     노트"는 전체 오답 중 공무원 단어만 보여야 하므로, 표시 단계에서 현재 버전
     단어로 거른다. 종합·미선택이면 전체를 그대로 보여준다. */
  function edWrongList(tier) {
    var scope = edScopeSet();
    var list = window.Store.wrongList(tier);
    return scope ? list.filter(function (w) { return scope[w]; }) : list;
  }
  /** 버전으로 거른 차수별 오답 개수 {1,2,3}. 종합·미선택이면 전체 집계. */
  function edWrongCounts() {
    var scope = edScopeSet();
    if (!scope) return window.Store.wrongCounts();
    var c = { 1: 0, 2: 0, 3: 0 };
    window.Store.wrongList(1).forEach(function (w) {
      if (!scope[w]) return;
      var t = window.Store.tier(w);
      for (var i = 1; i <= t && i <= window.Store.MAX_TIER; i++) c[i]++;
    });
    return c;
  }

  function $(id) { return document.getElementById(id); }

  /* ── 버전 칩 · 선택 화면 ──────────────────────
     홈의 미니 칩은 현재 버전을 보여주고, 누르면 선택 화면을 연다.
     선택 화면은 첫 진입 때(되돌아갈 홈이 아직 없음) 되돌아가기를 숨긴다.
     아직 태그된 단어가 없는 버전(count 0)은 '준비중'으로 잠근다. */
  function renderEditionChip() {
    var chip = $('ed-chip');
    if (!chip || !window.Edition) return;
    var ed = window.Edition.byId(window.Edition.get()) || window.Edition.byId('all');
    $('ed-chip-emoji').textContent = ed.emoji;
    $('ed-chip-label').textContent = ed.label;
  }

  function openEdition(hasBack) {
    var grid = $('picker-grid');
    grid.innerHTML = '';
    var currentId = window.Edition.get();
    window.Edition.EDITIONS.forEach(function (ed) {
      var n = window.Edition.count(ed.id);
      var ready = n > 0;
      var card = el('button', 'pick' +
        (ed.id === currentId ? ' is-on' : '') + (ready ? '' : ' is-soon'));
      card.type = 'button';
      card.appendChild(el('span', 'pick-emoji', ed.emoji));
      card.appendChild(el('b', null, ed.label));
      card.appendChild(el('span', null, ready ? n.toLocaleString() + '단어' : '준비중'));
      if (ready) {
        card.addEventListener('click', function () { chooseEdition(ed.id); });
      } else {
        card.disabled = true;
        card.title = ed.label + ' 버전은 기출이 반영되면 열립니다';
      }
      grid.appendChild(card);
    });
    $('ed-back').style.display = hasBack ? '' : 'none';
    go('edition');
  }

  function chooseEdition(id) {
    window.Edition.set(id);
    renderHome();     // 새 버전 기준으로 진척도·목록을 다시 채운다
    go('home');
  }
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
    renderEditionChip();
    var s = window.Store.summary(window.Edition.count(), edScopeSet());

    // 오늘 현황 — 한 줄로 압축
    var line = $('today-line');
    line.innerHTML = '';
    line.appendChild(el('b', 'tnum', String(s.today)));
    line.appendChild(document.createTextNode('문제 · 연속 '));
    line.appendChild(el('b', 'tnum', String(s.streak)));
    line.appendChild(document.createTextNode('일'));

    /* 진척도 — 한 번이라도 푼 단어 비율.
       예전에는 숙련도(0~5)로 '마스터'를 셌지만, 오답 노트가 3차 구조로
       "얼마나 안 외워지는가"를 표현하게 되어 숙련도와 역할이 겹쳤다.
       두 체계가 같은 것을 다르게 말하면 헷갈리므로 숙련도를 없앴다. */
    $('stat-studied-n').textContent = s.studied;
    $('stat-total').textContent = '/ ' + s.total;
    $('bar-studied').style.width = (s.studied / s.total) * 100 + '%';

    renderModeList();
    renderHomeAccount(window.Sync.status());

    // 정복 모드 카드 — 전 세트 챕터를 합산한다
    var totalChapters = window.Conquer.SETS.reduce(function (n, set) {
      return n + window.Conquer.buildChapters(set).length;
    }, 0);
    $('conquer-n').textContent = totalChapters + '챕터';

    var wc = edWrongCounts();
    var wrongN = wc[1];
    var badge = $('wrong-badge');
    badge.textContent = wrongN;
    badge.classList.toggle('is-zero', wrongN === 0);

    // 오답 노트 카드 — 차수별 개수를 한눈에. 2·3차는 있을 때만 덧붙인다.
    var card = $('wrong-card');
    card.style.display = wrongN ? '' : 'none';
    var parts = ['1차 ' + wc[1]];
    if (wc[2]) parts.push('2차 ' + wc[2]);
    if (wc[3]) parts.push('3차 ' + wc[3]);
    $('wrong-card-n').textContent = parts.join(' · ');
  }

  /** 단어가 들어 있는 세트만 — 아직 비어 있는 세트는 내보내지 않는다 */
  function practiceSets() {
    return window.Conquer.SETS.filter(function (set) { return edFilter(set.words).length; });
  }

  /* ── 개별 연습 (형식 → 세트 2단) ────────────────
     홈의 형식 목록 → 그 형식의 세트 목록 → 퀴즈.
     세트를 늘리면 Conquer.SETS만 보고 세트 목록에 한 줄이 자동으로 늘어난다. */

  // 1단: 홈의 형식 목록 — 단어 수는 전 세트를 합산해 보여준다
  function renderModeList() {
    var list = $('mode-list');
    list.innerHTML = '';
    window.Quiz.MODES.forEach(function (m) {
      var row = el('button', 'row-btn');
      row.type = 'button';
      var main = el('span', 'row-main');
      main.appendChild(el('b', null, m.label));
      main.appendChild(el('span', null, m.sub));
      row.appendChild(main);
      row.appendChild(el('span', 'row-n', window.Quiz.availableCount(m.id, edFilter(ALL_WORDS)) + '단어'));
      row.addEventListener('click', function () { renderModeSets(m.id); });
      list.appendChild(row);
    });
  }

  // 2단: 고른 형식의 세트 목록 — 여기서 고른 세트만 출제된다
  function renderModeSets(modeId) {
    var mode = modeById(modeId);
    if (!mode) return;
    $('mode-sets-title').textContent = mode.label;
    $('mode-sets-n').textContent = mode.sub;
    // 조사가 형식 이름마다 달라지므로(4지선다로 / 문장 빈칸으로) 이름을 문장에 넣지 않는다
    $('mode-sets-note').textContent = '세트를 골라 통째로 풉니다.';

    var list = $('mode-set-list');
    list.innerHTML = '';
    practiceSets().forEach(function (set) {
      // 이 형식으로 출제 가능한 단어 수는 세트마다 다르다
      // (예: 구·표현에는 예문이 없어 문장 빈칸에서 빠진다)
      var setWords = edFilter(set.words);        // 현재 버전에 속한 이 세트의 단어
      var n = window.Quiz.availableCount(modeId, setWords);
      var key = window.Store.sessionKey('practice', modeId, set.id, null);
      var prog = n ? window.Store.sessionProgress(key) : null;
      var unit = modeId === 'match' ? '보드' : '문제';

      var btn = el('button', 'row-btn');
      btn.type = 'button';
      var main = el('span', 'row-main');
      main.appendChild(el('b', null, set.label + ' 세트'));
      // 이 형식으로 못 내는 단어가 있을 때만 전체 수를 덧붙인다 (356단어 / 전체 396)
      var sub = n === setWords.length ? n + '단어' : n + '단어 / 전체 ' + setWords.length;
      /* 진행 상황을 여기서 보여준다. 다 푼 세트인지 모르고 들어가면
         전부 읽기 전용으로 열려 이유를 알 수 없다. */
      if (prog && prog.done) {
        sub += ' · ' + (prog.done >= prog.total
          ? prog.total + unit + ' 완료'
          : prog.done + '/' + prog.total + unit + ' 진행 중');
      }
      main.appendChild(el('span', null, sub));
      btn.appendChild(main);
      if (n) {
        btn.appendChild(el('span', 'row-n', '›'));
        btn.addEventListener('click', function () { startSession(modeId, null, set.id); });
      } else {
        // 이 형식으로 낼 수 있는 단어가 없는 세트는 눌러도 막다른 길이다
        btn.appendChild(el('span', 'row-n', '출제 불가'));
        btn.disabled = true;
      }

      // 손댄 세트에만 '처음부터'를 붙인다. 아직 안 푼 세트에는 되돌릴 것이 없다.
      if (prog && prog.done) {
        var pair = el('div', 'row-pair');
        pair.appendChild(btn);
        var side = el('button', 'row-side is-restart', '처음부터');
        side.type = 'button';
        side.title = set.label + ' 세트를 처음부터 다시 풀기';
        side.setAttribute('aria-label', side.title);
        side.addEventListener('click', function () {
          var msg = prog.done >= prog.total
            ? set.label + ' 세트를 처음부터 다시 풉니다.'
            : set.label + ' 세트의 진행(' + prog.done + '/' + prog.total + ')을 지우고 처음부터 다시 풉니다.';
          // 지워지는 것은 진행 상황뿐이다. 오답 노트와 학습 기록은 그대로 남는다.
          if (!confirm(msg + '\n오답 노트와 학습 기록은 그대로 남습니다.')) return;
          window.Store.clearSession(key);
          startSession(modeId, null, set.id);
        });
        pair.appendChild(side);
        list.appendChild(pair);
      } else {
        list.appendChild(btn);
      }
    });
    go('mode-sets');
  }

  /* ── 계정 · 동기화 ────────────────────────────
     로그인은 선택이다. 안 해도 앱은 지금까지처럼 완전히 동작한다.
     동기화 실패를 사용자에게 알리기만 하고 학습을 막지는 않는다. */

  function timeAgo(ts) {
    if (!ts) return '';
    var s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return '방금';
    if (s < 3600) return Math.floor(s / 60) + '분 전';
    if (s < 86400) return Math.floor(s / 3600) + '시간 전';
    return Math.floor(s / 86400) + '일 전';
  }

  /** 홈 헤더의 계정 버튼 — 한 줄로 상태를 요약한다.
      단어장의 자세한 계정 칸과 같은 상태를 쓰되 표시만 짧게 줄인다. */
  function renderHomeAccount(st) {
    var b = $('home-acct');
    if (!b) return;
    b.className = 'head-acct';
    if (!st.available) {
      // 동기화를 쓸 수 없으면 홈에서는 아예 감춘다.
      // 학습에 지장이 없는 일로 홈을 어지럽힐 이유가 없다.
      b.classList.add('is-off');
      return;
    }
    if (!st.user) {
      b.textContent = '로그인';
      return;
    }
    if (st.lastError) {
      b.textContent = '동기화 오류';
      b.classList.add('is-bad');
      return;
    }
    if (st.sending) { b.textContent = '동기화 중…'; return; }
    if (st.dirty) { b.textContent = '저장 대기'; return; }
    b.textContent = st.user.email || st.user.name || '로그인됨';
    b.classList.add('is-on');
  }

  function renderAccount(st) {
    renderHomeAccount(st);

    var who = $('acct-who');
    var btn = $('btn-signin');
    var note = $('acct-note');
    note.classList.remove('is-bad');

    if (!st.available) {
      who.textContent = '동기화를 쓸 수 없음';
      btn.style.display = 'none';
      note.textContent = st.lastError || 'Firebase에 연결할 수 없습니다. 기록은 이 기기에 그대로 저장됩니다.';
      note.classList.add('is-bad');
      return;
    }

    btn.style.display = '';
    if (!st.user) {
      who.textContent = '로그인하지 않음';
      btn.textContent = 'Google로 로그인';
      note.textContent = st.lastError || '로그인하면 폰과 PC의 기록이 자동으로 합쳐집니다.';
      if (st.lastError) note.classList.add('is-bad');
      return;
    }

    who.textContent = st.user.email || st.user.name || '로그인됨';
    btn.textContent = '로그아웃';

    if (st.lastError) {
      note.textContent = st.lastError + ' (기록은 이 기기에 안전하게 있습니다)';
      note.classList.add('is-bad');
    } else if (st.sending) {
      note.textContent = '동기화 중…';
    } else if (st.dirty) {
      note.textContent = '변경된 내용이 있습니다. 잠시 뒤 또는 앱을 벗어날 때 저장됩니다.';
    } else if (st.lastSyncedAt) {
      note.textContent = '동기화됨 · ' + timeAgo(st.lastSyncedAt);
    } else {
      note.textContent = '로그인됨.';
    }
  }

  function toggleAccount() {
    var st = window.Sync.status();
    if (st.user) window.Sync.signOut();
    else window.Sync.signIn();
  }

  $('btn-signin').addEventListener('click', toggleAccount);

  /* 홈의 계정 버튼 — 로그인 전이면 한 번 눌러 바로 로그인,
     이미 로그인했으면 설정 화면으로 보낸다.
     예전에는 단어장으로 보냈는데 계정 칸이 단어 목록(최대 1889행) 아래에
     있어서, 이메일이 찍힌 버튼을 눌렀는데 단어장이 나오고 로그아웃하려면
     끝까지 스크롤해야 했다. 버튼에 이메일이 보이면 계정 화면이 나와야 한다. */
  $('home-acct').addEventListener('click', function () {
    if (window.Sync.status().user) go('settings');
    else toggleAccount();
  });

  // 버전 미니 칩 → 선택 화면(되돌아가기 있음) · 선택 화면의 뒤로 → 홈
  $('ed-chip').addEventListener('click', function () { openEdition(true); });
  $('ed-back').addEventListener('click', function () { go('home'); });

  /* 계정이 바뀌면 화면의 기록도 다시 그린다.
     로그아웃하면 Sync 가 이 기기에 남은 기록을 지운다(계정 경계). 그런데 화면을
     그대로 두면 이미 지워진 기록이 숫자로 계속 보여서, 쓰는 사람은 "로그아웃했는데
     기록이 남아 있다" 고 느낀다. 로그인할 때도 서버에서 받은 기록이 바로 보여야 한다.

     동기화 상태(dirty·sending·lastSyncedAt)는 초 단위로 바뀌므로 그때마다 단어
     목록을 다시 그리면 낭비다. 계정이 실제로 달라졌을 때만 다시 그린다. */
  var lastAcctUid = null;

  window.Sync.onChange(function (st) {
    renderAccount(st);
    var uid = st.user ? st.user.uid : null;
    if (uid === lastAcctUid) return;
    lastAcctUid = uid;
    renderHome();                                       // 오늘 현황·진척도
    if ($('screen-words').classList.contains('is-active')) renderWords();
    if ($('screen-wrong').classList.contains('is-active')) renderWrong();
  });

  /* ── 기록 백업 (내보내기 / 가져오기) ──────────────
     로그인 없이 기록 유실을 막는 장치. 직렬화·병합은 Store가 담당하고
     여기서는 파일 입출력만 한다. 나중에 서버 동기화를 붙일 때도
     Store.exportData / mergeData를 그대로 쓴다. */

  function backupNote(msg, bad) {
    var p = $('backup-note');
    p.textContent = msg;
    p.classList.toggle('is-bad', !!bad);
  }

  $('btn-export').addEventListener('click', function () {
    try {
      var payload = JSON.stringify(window.Store.exportData(), null, 2);
      var blob = new Blob([payload], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      var d = new Date();
      var stamp = d.getFullYear() +
        String(d.getMonth() + 1).padStart(2, '0') +
        String(d.getDate()).padStart(2, '0');
      a.href = url;
      a.download = 'vocab-quiz-기록-' + stamp + '.json';
      a.click();
      URL.revokeObjectURL(url);
      backupNote('내보냈습니다. 이 파일을 다른 기기에서 가져오면 기록이 합쳐집니다.');
    } catch (e) {
      backupNote('내보내기에 실패했습니다.', true);
    }
  });

  $('btn-import').addEventListener('click', function () { $('import-file').click(); });

  $('import-file').addEventListener('change', function (e) {
    var file = e.target.files && e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var res = window.Store.importData(String(reader.result));
      if (!res.ok) {
        backupNote(res.reason, true);
      } else {
        var parts = ['새 단어 ' + res.added + '개', '갱신 ' + res.updated + '개'];
        if (res.savedDelta) parts.push('저장 +' + res.savedDelta + '개');
        backupNote('합쳤습니다 — ' + parts.join(', ') +
          '. 현재 학습 기록 ' + res.total + '개 단어, 저장 ' + res.savedTotal + '개.');
        renderWords();     // 목록·필터를 새 기록으로 다시 그린다
      }
    };
    reader.onerror = function () { backupNote('파일을 읽을 수 없습니다.', true); };
    reader.readAsText(file);
    e.target.value = '';   // 같은 파일을 연달아 고를 수 있게 비운다
  });

  // 기록 초기화는 설정 화면에 둔다 (예전에는 단어장 맨 아래였다)
  $('btn-reset').addEventListener('click', function () {
    if (confirm('학습 기록(오답 노트·연속 학습일·학습 진척도)을 모두 삭제할까요?')) {
      window.Store.reset();
      /* 지금 보고 있는 화면은 설정이므로 홈 숫자를 다시 그려 둔다.
         뒤로 나갔을 때 이미 지워진 기록이 남아 보이면 안 지워진 것처럼 느낀다.
         단어장은 go('words')가 들어갈 때마다 다시 그리므로 여기서 손댈 필요가 없다. */
      renderHome();
      renderAccount(window.Sync.status());
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
  /**
   * @param tier 오답 노트 복습이면 그 차수(1~3). 승급 판정에 쓰인다.
   *   넘기지 않으면 1차로 본다.
   */
  function startSession(modeId, restrictTo, setId, tier) {
    var review = !!(restrictTo && restrictTo.length);

    // 오답 복습은 세트를 가리지 않는다 — 틀린 단어가 여러 세트에 걸쳐 있다.
    // 일반 연습만 세트로 출제 범위를 좁힌다. 오답 후보는 어느 쪽이든 전 세트에서 뽑는다.
    var set = review ? null : window.Conquer.getSet(setId);
    if (!review && !set) return;
    // 일반 연습은 현재 버전에 속한 세트 단어만 출제한다. 복습은 세트를 가리지 않는다.
    var setWords = set ? edFilter(set.words) : null;

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
    state.reviewTier = review ? (tier || 1) : null;
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
  /**
   * @param tier 오답 노트 복습이면 그 차수(1~3). 챕터·결과 화면에서 불릴 때는
   *   1차로 본다 (그 단어들은 방금 일반 연습에서 틀린 것이므로).
   */
  function startReviewSession(words, title, back, tier) {
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
    state.reviewTier = tier || 1;
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
        // 완료한 보드는 단어·뜻을 그대로 보여주고 클릭만 막는다.
        // 대신 '다시 풀기'로 이 보드만 되돌려 새로 풀 수 있다.
        window.Modes.match.render(slide.q, body, {
          review: {
            stats: slide.boardStats || {},
            onRetry: function () { retrySlide(slide); }
          }
        });
        showBoardFeedback(slide);
      } else {
        window.Modes.match.render(slide.q, body, {
          // 쌍별 기록은 modes.js가 한다. 승급 판정을 위해 차수를 넘긴다.
          reviewTier: state.reviewTier,
          boardDone: function (stats) { onBoardAnswer(slide, stats); }
        });
      }
    } else if (slide.answered) {
      window.Modes[slide.q.mode].render(slide.q, body, {
        review: {
          chosen: slide.chosen,
          onRetry: function () { retrySlide(slide); }
        }
      });
      showFeedbackBox(slide);
    } else {
      window.Modes[slide.q.mode].render(slide.q, body, {
        resolve: function (correct, q, chosen) { onChoiceAnswer(slide, correct, chosen); }
      });
    }
    renderNav();
    window.scrollTo(0, 0);
  }

  /* ── 이미 푼 문제를 다시 풀기 ────────────────────
     한 번 답하면 그 슬라이드는 읽기 전용이 된다. 복습에는 맞지만, 세트를 다 푼
     뒤에는 어디를 눌러도 읽기 전용뿐이어서 막다른 길처럼 느껴진다.
     그래서 슬라이드 하나를 "안 푼 상태"로 되돌리는 길을 둔다.

     되돌릴 때 세션 집계(정답 수·틀린 단어)에서 그 슬라이드의 몫을 빼야 한다.
     안 빼면 79문제를 다 맞힌 뒤 하나를 다시 맞히는 순간 정답이 80이 되어
     정답률이 100%를 넘는다.

     Store에 이미 쌓인 학습 기록(seen·ok·ng·오답 노트)은 건드리지 않는다.
     실제로 그때 그렇게 답한 것은 사실이고, 다시 풀면 그것도 그대로 기록된다. */

  /** 이 단어를 틀린 다른 슬라이드가 아직 남아 있는가.
      집계에 넣을 때(onChoiceAnswer)와 같은 q.word를 봐야 짝이 맞는다. */
  function wrongElsewhere(word) {
    return state.slides.some(function (s) {
      if (!s.answered) return false;
      if (s.boardStats) return (s.boardStats.wrongWords || []).indexOf(word) !== -1;
      return !s.correct && s.q.word === word;
    });
  }

  /** 슬라이드를 안 푼 상태로 되돌리고 세션 집계를 원상 복구한다 */
  function unanswerSlide(slide) {
    if (!slide.answered) return;

    var undoWrong = [];
    if (slide.boardStats) {
      if (slide.boardStats.correct) state.correct--;
      undoWrong = (slide.boardStats.wrongWords || []).slice();
    } else {
      if (slide.correct) state.correct--;
      else if (slide.q.word) undoWrong = [slide.q.word];
    }
    if (state.correct < 0) state.correct = 0;

    slide.answered = false;
    slide.chosen = null;
    slide.correct = null;
    slide.headline = null;
    slide.boardStats = null;

    /* 같은 단어를 다른 슬라이드에서도 틀렸다면 목록에 남겨 둔다.
       이 슬라이드는 위에서 answered를 내렸으므로 검사에서 저절로 빠진다. */
    undoWrong.forEach(function (w) {
      if (wrongElsewhere(w)) return;
      var i = state.wrongWords.indexOf(w);
      if (i !== -1) state.wrongWords.splice(i, 1);
    });
  }

  function retrySlide(slide) {
    unanswerSlide(slide);
    persistSession();     // 되돌린 상태를 저장해야 새로고침해도 유지된다
    renderSlide();        // answered가 내려갔으니 이번엔 풀 수 있게 그려진다
  }

  /* 선택형 응답 */
  function onChoiceAnswer(slide, correct, chosen) {
    slide.answered = true;
    slide.chosen = chosen;
    slide.correct = correct;

    var q = slide.q;
    /* 차수를 함께 넘긴다. 복습에서 틀렸으면 Store가 다음 차수로 올린다.
       맞힌 경우에는 아무 일도 일어나지 않는다 — 오답 노트에서 사라지지 않는다. */
    window.Store.record(q.word, correct, state.reviewTier);
    if (correct) state.correct++;
    else if (state.wrongWords.indexOf(q.word) === -1) state.wrongWords.push(q.word);

    if (state.flow === 'conquer') updateHead();
    showFeedbackBox(slide);
    renderNav();
    persistSession();
  }

  /* 짝 맞추기 보드 응답 (쌍별 기록은 modes.js에서 이미 했다) */
  function onBoardAnswer(slide, stats) {
    slide.answered = true;
    slide.boardStats = stats;

    if (stats.correct) state.correct++;
    stats.wrongWords.forEach(function (w) {
      if (state.wrongWords.indexOf(w) === -1) state.wrongWords.push(w);
    });

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
    /* 어법 한 줄 — 모드를 가리지 않는다. 예전에는 '연어 고르기' 모드를
       일부러 골라야 보였고, D·E·F 세트에는 그 모드 자체가 출제 불가였다. */
    if (q.usage) box.appendChild(el('div', 'fb-usage', q.usage));

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

    // 저장 토글 — 방금 만난 단어를 따로 담아 둘 수 있게
    if (q.word) box.appendChild(saveToggle(q.word));

    fb.appendChild(box);
  }

  /** 오답 노트 차수 배지. 차수가 0이면 빈 칸으로 자리만 잡는다. */
  function tierBadge(word) {
    var t = window.Store.tier(word);
    var b = el('span', 'li-tier');
    if (t) {
      b.className = 'li-tier is-t' + t;
      b.textContent = t + '차';
      b.title = t + '차 오답 노트에 있습니다';
    }
    return b;
  }

  /**
   * 단어 저장(북마크) 토글 버튼. 누르면 즉시 상태가 바뀐다.
   * 저장하면 1차 오답 노트에 들어가고 해제하면 다시 빠지므로, 옆에 붙은 차수
   * 배지를 같이 새로 그려야 한다. 그래서 토글 뒤에 부를 콜백을 받는다.
   */
  function saveToggle(word, onToggle) {
    var btn = el('button', 'save-btn');
    btn.type = 'button';
    function paint() {
      var on = window.Store.isSaved(word);
      btn.classList.toggle('is-on', on);
      btn.textContent = on ? '★ 저장됨' : '☆ 저장';
      // 해제했을 때 오답 노트에서도 빠지는지는 단어마다 다르다. 그대로 알려준다.
      btn.title = on
        ? (window.Store.noteFromBookmark(word)
          ? word + ' 저장 해제 — 1차 오답 노트에서도 함께 빠집니다'
          : word + ' 저장 해제 (틀려서 들어간 단어라 오답 노트에는 남습니다)')
        : word + ' 저장 — 1차 오답 노트에도 들어갑니다';
    }
    paint();
    btn.addEventListener('click', function (e) {
      e.stopPropagation();          // 단어장 행 클릭과 겹치지 않게
      window.Store.toggleSaved(word);
      paint();
      if (onToggle) onToggle();
    });
    return btn;
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

    /* 보드의 각 단어에 대해 발음·뜻·예문을 목록으로 보여준다.
       여기가 짝 맞추기에서 단어를 제대로 들여다보는 유일한 자리라,
       "이건 더 연습해야겠다" 싶은 단어를 바로 담을 수 있어야 한다. */
    var pairs = slide.q.pairs || [];
    var missed = st.wrongWords || [];
    if (pairs.length) {
      var list = el('div', 'board-words');
      pairs.forEach(function (p) {
        var w = WORD_INDEX[p.word];
        if (!w) return;
        // 이 보드에서 틀린 단어는 눈에 띄게 — 위쪽 목록과 대조하지 않아도 되게
        var row = el('div', 'bwd' + (missed.indexOf(w.word) !== -1 ? ' is-missed' : ''));

        var head = el('div', 'bwd-head');
        head.appendChild(el('b', 'bwd-word', w.word));
        if (w.pron) head.appendChild(el('span', 'bwd-pron', '🔊 ' + w.pron));
        var badge = tierBadge(w.word);
        head.appendChild(badge);
        head.appendChild(saveToggle(w.word, function () {
          var fresh = tierBadge(w.word);
          badge.className = fresh.className;
          badge.textContent = fresh.textContent;
        }));
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
    ['home', 'quiz', 'result', 'wrong', 'words', 'block',
      'sets', 'chapters', 'mode-sets', 'settings', 'edition'].forEach(function (n) {
      $('screen-' + n).classList.toggle('is-active', n === name);
    });
    if (name !== 'quiz') $('conquer-grid').innerHTML = '';
    window.scrollTo(0, 0);
    if (name === 'home') renderHome();
    if (name === 'wrong') renderWrong();
    if (name === 'words') renderWords();
    if (name === 'settings') renderAccount(window.Sync.status());
  }

  // 세트 목록
  function renderSets() {
    var list = $('set-list');
    list.innerHTML = '';
    /* 아직 단어를 붙이지 않은 세트는 목록에 내지 않는다. 새 세트를 미리 배선해
       두어도 "R 세트 0단어 · 0챕터" 같은 빈 줄이 뜨지 않게 한다. */
    window.Conquer.SETS.filter(function (s) { return edFilter(s.words).length; }).forEach(function (s) {
      var chs = window.Conquer.buildChapters(s);
      var btn = el('button', 'row-btn');
      btn.type = 'button';
      var main = el('span', 'row-main');
      main.appendChild(el('b', null, s.label + ' 세트'));
      main.appendChild(el('span', null, edFilter(s.words).length + '단어 · ' + chs.length + '챕터'));
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
    state.reviewTier = null;      // 정복 챕터는 복습이 아니다
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
    $('result-title').textContent = state.reviewTier
      ? modeById(state.modeId).label + ' · ' + state.reviewTier + '차 오답 복습'
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

    $('btn-again').textContent = state.reviewTier
      ? state.reviewTier + '차 오답 전체 다시 풀기' : '같은 모드로 한 번 더';

    go('result');
  }

  $('btn-again').addEventListener('click', function () {
    if (!state.reviewTier) {
      /* 저장된 진행을 먼저 지운다. 안 지우면 startSession이 방금 끝낸 세션을
         그대로 복원해 모든 문제가 읽기 전용으로 열린다 — "한 번 더"가
         아무 일도 하지 않는 것처럼 보이던 원인이다. */
      if (state.sessionKey) window.Store.clearSession(state.sessionKey);
      startSession(state.modeId, null, state.setName);
      return;
    }
    // 복습 세션의 "한 번 더"는 그 차수에 남아 있는 오답 전체를 뜻한다.
    // 빈 배열을 넘기면 세트 전체(396문제)가 시작되므로 반드시 걸러낸다.
    // 현재 버전의 오답만 다시 푼다 (공무원 복습은 공무원 오답만).
    var tier = state.reviewTier;
    var remain = edWrongList(tier);
    if (!remain.length) {
      alert(tier + '차 오답 노트가 비었습니다.');
      go('wrong');
      return;
    }
    startSession(state.modeId, remain, null, tier);
  });

  /* ── 오답 노트 ─────────────────────────────── */
  function renderWrong() {
    var counts = edWrongCounts();
    var tier = state.wrongTier;
    var wrong = edWrongList(tier);

    // 오답 노트 헤더에 현재 버전을 표시한다 (종합이면 생략)
    var edId = window.Edition && window.Edition.get();
    var edLabel = (edId && edId !== 'all') ? window.Edition.label(edId) : '';
    $('wrong-ed').textContent = edLabel;
    $('wrong-ed').style.display = edLabel ? '' : 'none';

    // 차수 전환 칩 — 1차는 2·3차 단어를 모두 포함한다
    var tiers = $('wrong-tiers');
    tiers.innerHTML = '';
    for (var t = 1; t <= window.Store.MAX_TIER; t++) {
      (function (n) {
        var chip = el('button', 'chip' + (tier === n ? ' is-on' : ''),
          n + '차 ' + counts[n]);
        chip.type = 'button';
        chip.title = n === 1
          ? '틀린 단어 전체 (2·3차 포함)'
          : n + '차 — ' + (n - 1) + '차 복습에서 또 틀린 단어';
        chip.addEventListener('click', function () {
          state.wrongTier = n;
          renderWrong();
        });
        tiers.appendChild(chip);
      })(t);
    }

    var chips = $('wrong-modes');
    chips.innerHTML = '';
    $('wrong-count').textContent = tier + '차 · ' + wrong.length + '단어';

    var mixed = $('btn-wrong-mixed');
    if (!wrong.length) {
      mixed.style.display = 'none';
      $('wrong-modes-label').style.display = 'none';
      $('wrong-list').innerHTML = '';
      $('wrong-list').appendChild(el('div', 'empty', tier === 1
        ? '오답 노트가 비어 있습니다. 틀린 단어와 저장한 단어가 여기에 모입니다.'
        : tier + '차가 비어 있습니다. ' + (tier - 1) + '차 복습에서 또 틀리면 여기로 올라옵니다.'));
      return;
    }

    // 기본 = 정복 방식 혼합 복습. 한 단어를 여러 각도로 물어 확실히 굳힌다.
    mixed.style.display = '';
    mixed.textContent = tier + '차 섞어서 복습 · ' + wrong.length + '단어';
    mixed.onclick = function () {
      startReviewSession(wrong, tier + '차 오답', function () { go('wrong'); }, tier);
    };

    $('wrong-modes-label').style.display = '';
    window.Quiz.MODES.forEach(function (m) {
      var eligibleWrong = window.Quiz.eligible(m.id)
        .filter(function (w) { return wrong.indexOf(w.word) !== -1; });
      if (!eligibleWrong.length) return;
      var chip = el('button', 'chip', m.label + ' ' + eligibleWrong.length);
      chip.type = 'button';
      chip.addEventListener('click', function () {
        startSession(m.id, wrong, null, tier);
      });
      chips.appendChild(chip);
    });

    var list = $('wrong-list');
    list.innerHTML = '';
    wrong.forEach(function (w) {
      list.appendChild(wrongRow(w));
    });
  }

  /** 오답 노트 한 줄 — 단어 정보 + ✕ 삭제.
      맞혀도 자동으로 빠지지 않으므로 직접 뺄 수단이 필요하다.
      북마크로 들어온 단어는 저장을 해제하면 이 줄이 사라지므로 목록을 다시 그린다. */
  function wrongRow(word) {
    var row = wordRow(WORD_INDEX[word], true, function () {
      if (window.Store.tier(word) < 1) renderWrong();
    });
    var del = el('button', 'row-del', '✕');
    del.type = 'button';
    del.title = word + '을(를) 오답 노트에서 빼기';
    del.setAttribute('aria-label', del.title);
    del.addEventListener('click', function (e) {
      e.stopPropagation();
      window.Store.removeWrong(word);
      renderWrong();
    });
    // 첫 줄(단어 · 차수 · 저장) 오른쪽 끝에 붙인다
    if (row.children[0]) row.children[0].appendChild(del);
    return row;
  }

  /* ── 단어장 ───────────────────────────────── */
  function renderWords() {
    renderHeatmap();
    /* 계정 칸은 설정 화면으로 옮겼다. 홈 헤더의 계정 버튼은
       Sync.onChange 가 갱신하므로 여기서 renderAccount 를 부를 필요가 없다. */
    var f = $('word-filters');
    f.innerHTML = '';

    var savedN = window.Store.savedList().length;
    var wc = window.Store.wrongCounts();
    // 숙련도를 없앴으므로 '학습 중'·'마스터' 대신 오답 차수로 가른다
    var statuses = [
      { id: 'all', label: '전체' },
      { id: 'new', label: '미학습' },
      { id: 'studied', label: '학습함' },
      { id: 'wrong', label: '오답' + (wc[1] ? ' ' + wc[1] : '') },
      { id: 'saved', label: '★ 저장' + (savedN ? ' ' + savedN : '') }
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
      if (st === 'studied' && !(info.seen > 0)) return false;
      if (st === 'wrong' && window.Store.tier(w.word) < 1) return false;
      if (st === 'saved' && !window.Store.isSaved(w.word)) return false;
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

  /**
   * 단어 한 줄.
   * @param onSave 저장 토글 뒤에 부를 콜백. 오답 노트처럼 목록 자체가
   *   저장 상태에 따라 달라지는 화면이 다시 그리기 위해 넘긴다.
   */
  function wordRow(w, showSyn, onSave) {
    if (!w) return el('div');
    var info = window.Store.info(w.word);
    var row = el('div', 'li');

    var top = el('div', 'li-top');
    top.appendChild(el('b', null, w.word));
    top.appendChild(el('span', 'li-tag', w.pos + ' · ' + w.level));
    // 숙련도 점 5개를 없애고, 대신 오답 노트 차수를 보여준다
    var badge = tierBadge(w.word);
    top.appendChild(badge);
    top.appendChild(saveToggle(w.word, function () {
      // 저장하면 1차에 들어가고 해제하면 빠질 수 있으므로 배지를 갱신한다
      var fresh = tierBadge(w.word);
      badge.className = fresh.className;
      badge.textContent = fresh.textContent;
      if (onSave) onSave();
    }));
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

  /* ── 동기화 시작 ──────────────────────────────
     Store 변경 알림을 걸고, 이탈 시 flush를 등록한다. 이 시점에는 아직
     Firebase SDK가 없을 수 있다(defer로 늦게 온다). SDK가 준비되면
     initFirebase()가 전송 계층을 붙인다. 실패해도 앱은 그대로 돌아간다. */
  window.Sync.start();

  function bootFirebase() {
    window.Sync.initFirebase();
    renderAccount(window.Sync.status());
  }
  if (window.firebase) bootFirebase();
  else window.addEventListener('load', bootFirebase);

  // 홈은 미리 채워 둔다(버전을 고르면 바로 보이게). 아직 버전을 고르지 않았으면
  // 선택 화면을 전면에 띄운다 — 첫 진입이라 되돌아갈 곳이 없으므로 뒤로가기는 숨긴다.
  renderHome();
  if (!window.Edition.isChosen()) openEdition(false);
})();
