/**
 * 단어 데이터 — 수능 보카 P 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *    ⚠️ 또 다른 파일에 같은 키가 있는지 먼저 확인할 것 — gloss.js 에 있으면 여기
 *    넣은 값이 죽고(gloss.js 가 뒤에 로드된다), 앞선 세트 파일에 있으면 여기 값이
 *    그쪽을 덮어 기존 문제의 화면이 바뀐다.
 *
 * ── 이 세트는 한 번에 붙인 것 중 가장 크다: 343단어 · 17챕터 ──
 *
 * 승격이 178개(52%)로 O 세트와 같은 비율이지만 절대 수가 두 배 넘는다.
 * 참조는 239곳으로 저장소 최다다 — O 세트(132곳) 의 거의 두 배다.
 * p 로 시작하는 낱말에 proper·preserve·produce·prompt·plain·predict 같은
 * 기본 낱말이 몰려 있어서다.
 *
 *   preserve 5곳(adapt·alter·annihilate 반의어, conserve, decompose 반의어)
 *   proper   5곳(appropriate·correct·decent·formal, improper 반의어)
 *   parallel 4곳 · passage 4곳 · pleased 4곳 · plot 4곳
 *   produce  4곳 · prompt  4곳 · provoke 4곳
 *
 * 원칙은 A~O 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 *   ④ 한 표제어에 두 품사를 섞지 않는다 — 참조가 쓰는 갈래를 남긴다
 *   ⑤ 뜻은 두 갈래까지만 담는다
 *
 * ── 원본의 뜻 오류를 고친 것 (6건) ──
 *   peek        '(법 등을) 개정하다' → '살짝 들여다보다'
 *               amend 의 뜻이 들어와 있었다. 참조 glance·glimpse 가 '흘끗 보다' 다.
 *   product     '생산(수단)' → '제품, 산물'
 *   production  '생산물' → '생산, 생산량'
 *               ↑ 이 둘은 서로 뜻이 바뀌어 있었다. 사전값과 참조가 모두 그렇게 말한다
 *                 (product ← commodity·creation, production ← consumption 반의어).
 *   pillar      '주석, 중추' → '기둥, 중추'   ('주석' 은 '주축' 의 오타로 보인다)
 *   plunge      '거꾸로지다, 급락하다' → '뛰어들다, 급락하다'   (오타 + 사전값)
 *   predator    '포식 동물, 약탈자,' → 끝에 남은 쉼표를 걷었다
 *
 * ── 형식을 다듬은 것 ──
 *   괄호 34곳, "=" 표기 5곳(petty·planetwide·point of view·ponder·postulate),
 *   뜻이 3갈래 이상인 86개를 두 갈래로 줄였다.
 *   외래어를 그대로 옮긴 것은 뺐다 — paradigm '패러다임' · portal '포털' ·
 *   profile '프로필' · promoter '프로모터' (M 세트 multimedia 와 같은 처리다).
 *
 * ── 겹침을 가른 것 ──
 *   partake 함께하다 / participate 참여하다 / participate in ~에 가담하다   ← 3중
 *   practicable 실행에 옮길 수 있는 / practical 실용적인 / pragmatic 현실적인  ← 3중
 *   potential 잠재적인(adj) / potentiality 잠재력(n)
 *   procedure 절차, 순서 / process 과정, 경과
 *   point 요점, 점수 / point out 지적하다
 *   parasite 기생충 / parasitic 기생성의
 *   paycheck 월급, 봉급 / payment 지불, 납부
 *   prevailing 우세한, 지배적인 / prevalent 널리 퍼진, 흔한
 *   penalty 벌금, 과태료 / punishment 처벌, 형벌
 *   precondition 미리 갖춰야 할 조건 / prerequisite 전제 조건
 *   predetermined 미리 정해진 / preselected 미리 골라 둔
 *   prerogative 고유 권한 / privilege 특권, 명예
 *   penetrate 꿰뚫다 / pierce 찌르다
 *   기존 표제어와 갈라 둔 것 — paramount(cardinal·foremost) · peculiar(bizarre·odd) ·
 *   peril(hazard·jeopardy) · petty(minor) · plight(adversity) · pitch(degree) ·
 *   posterity(descendant) · postpone·procrastinate(defer) · precise(accurate) ·
 *   predominant(dominant) · prevent(avert) · previous(former) · priceless(invaluable) ·
 *   priest(clergy) · proclaim(declare)
 */

window.VOCAB_P = [
  /* ── 챕터 1 ─────────────────────────────────────── */
  /* 'para-' 어근이 일곱 개 붙는다(paradigm·paradox·paragraph·parallel·paralyze·
     paramount·parasite·parasitic). 뜻이 서로 멀어 같은 보드에서 헷갈리지 않는다. */

  /* Pacific 은 고유명사다. 바꿔 쓸 낱말이 마땅치 않아 유의어를 비웠다 —
     '아닌 것 고르기' 에서만 빠지고 나머지 세 모드는 출제된다.
     M 세트 Mars·Mediterranean, N 세트 neutron 과 같은 처리다.
     원본은 '태평양, 태평양의' 로 명사와 형용사가 섞여 있었다. */
  { word:"Pacific", pron:"퍼시픽", pos:"n", level:"B2", meanings:["태평양"],
    ex:[{ s:"The {{}} is the largest ocean on Earth.", f:"Pacific", ko:"태평양은 지구에서 가장 큰 바다다." }] },

  /* 원본은 '이교도의, 이교도' 로 형용사와 명사가 섞여 있었다. 참조가 없어
     원본의 첫 갈래인 형용사로 세웠다. */
  { word:"pagan", pron:"페이건", pos:"adj", level:"C1", meanings:["이교도의"],
    /* 유의어는 모두 소문자로 골랐다 — GLOSS·PRON 조회가 toLowerCase() 로
       이뤄져서 'non-Christian' 처럼 대문자가 든 낱말은 키가 어긋나기 쉽다.
       M 세트에서 Gothic·SI-based 로 겪은 함정이다. */
    syn:["heathen","outside the church","idol-worshipping"],
    ex:[{ s:"The festival has {{}} roots.", f:"pagan", ko:"그 축제는 이교도의 뿌리를 갖고 있다." }] },

  /* 승격 ① — 사전 표현 '공들인, 꼼꼼한' 을 글자까지 지켰다
     (elaborate, E · laborious, L). 원본의 '매우 공들인' 대신 사전 쪽을 남겼다.
     elaborate 의 첫 뜻도 '공들인' 이지만 둘은 서로 유의어다. */
  { word:"painstaking", pron:"페인스테이킹", pos:"adj", level:"C1", meanings:["공들인","꼼꼼한"],
    syn:["elaborate","thorough","done with great care"], ant:["slapdash"],
    ex:[{ s:"The restoration was {{}} work.", f:"painstaking", ko:"그 복원은 공들인 작업이었다." }] },

  /* 원본은 '창백한, 핼쑥한; 엷은, 연한; 창백해지다' 로 세 갈래였다.
     뜻은 두 갈래까지만 담으므로 형용사 앞 갈래만 남겼다. */
  { word:"pale", pron:"페일", pos:"adj", level:"B1", meanings:["창백한","핼쑥한"],
    syn:["ashen","pallid","drained of color"], ant:["ruddy"],
    ex:[{ s:"She looked {{}} after the long flight.", f:"pale", ko:"그녀는 긴 비행 뒤에 창백해 보였다." }] },

  { word:"palm", pron:"팜", pos:"n", level:"B1", meanings:["손바닥"],
    syn:["inner hand","flat of the hand","hollow of the hand"],
    ex:[{ s:"He held the coin in his {{}}.", f:"palm", ko:"그는 동전을 손바닥에 쥐었다." }] },

  /* 승격 ② — 사전 표현과 글자까지 같다(cure-all, C). */
  { word:"panacea", pron:"패너시어", pos:"n", level:"C2", meanings:["만병통치약"],
    syn:["cure-all","universal remedy","single fix for everything"],
    ex:[{ s:"Technology is no {{}} for poverty.", f:"panacea", ko:"기술은 가난의 만병통치약이 아니다." }] },

  { word:"pandemic", pron:"팬데믹", pos:"n", level:"B2", meanings:["전염병","대유행병"],
    syn:["worldwide epidemic","global outbreak","sweeping disease"],
    ex:[{ s:"The {{}} closed borders for months.", f:"pandemic", ko:"그 전염병은 여러 달 국경을 닫게 했다." }] },

  /* 승격 ③ — 사전 표현 '공포, 공황' 을 글자까지 지켰다(발음이 없던 항목이다).
     원본은 '공포에 질리다; 허둥대다; 공황상태' 로 동사와 명사가 섞여 있었다. */
  { word:"panic", pron:"패닉", pos:"n", level:"B1", meanings:["공포","공황"],
    syn:["fright","sudden terror","blind alarm"], ant:["composure"],
    ex:[{ s:"There was no {{}} when the lights went out.", f:"panic", ko:"불이 꺼졌을 때 공포는 없었다." }] },

  /* 승격 ④ — 사전은 '숨을 헐떡이다' 한 갈래였다. 원본의 '숨차다' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(gasp, G). */
  { word:"pant", pron:"팬트", pos:"v", level:"B2", meanings:["숨을 헐떡이다","숨차다"],
    syn:["gasp","breathe hard","puff for air"],
    ex:[{ s:"The dog began to {{}} in the heat.", f:"pant", ko:"그 개는 더위에 숨을 헐떡이기 시작했다." }] },

  { word:"paper", pron:"페이퍼", pos:"n", level:"B1", meanings:["논문","서류"],
    syn:["written study","academic article","official document"],
    ex:[{ s:"She published a {{}} on bird migration.", f:"paper", ko:"그녀는 새의 이동에 관한 논문을 실었다." }] },

  /* 원본의 '패러다임' 은 외래어를 그대로 옮긴 것이어서 뺐다 —
     M 세트 multimedia 의 '멀티미디어' 와 같은 처리다. */
  { word:"paradigm", pron:"패러다임", pos:"n", level:"C1", meanings:["전형적인 예","틀"],
    syn:["model case","typical pattern","framework of thought"],
    ex:[{ s:"His study became a {{}} for later work.", f:"paradigm", ko:"그의 연구는 뒷날 작업의 전형적인 예가 되었다." }] },

  /* 승격 ⑤ — 사전 표현 '역설, 모순' 을 글자까지 지켰다
     (contradiction, C · irony, I). 원본의 '모순된 말' 대신 사전 쪽을 남겼다. */
  { word:"paradox", pron:"패러독스", pos:"n", level:"C1", meanings:["역설","모순"],
    syn:["contradiction","irony","self-defeating statement"],
    ex:[{ s:"It is a {{}} that the busiest people find time to read.", f:"paradox", ko:"가장 바쁜 사람이 읽을 시간을 낸다는 것은 역설이다." }] },

  { word:"paragraph", pron:"패러그래프", pos:"n", level:"B1", meanings:["단락","문단"],
    syn:["block of text","section of writing","group of sentences"],
    ex:[{ s:"Start a new {{}} for each idea.", f:"paragraph", ko:"생각마다 새 단락을 시작하세요." }] },

  /* 승격 ⑥ — 사전 표현 '평행한, 유사한' 을 글자까지 지켰다. 이 챕터에서 참조가
     가장 많다(4곳). 원본은 '평행한; 위도선, 평행선' 으로 형용사와 명사가 섞여
     있었고 참조도 갈렸다 — comparative(C)·corresponding(C)·counter(ant, C) 는
     형용사, analogy(A) 만 명사였다. 셋을 따라 형용사로 세우고 analogy 쪽 유의어를
     'close likeness' 로 바꿨다(words.js). */
  { word:"parallel", pron:"패럴렐", pos:"adj", level:"B2", meanings:["평행한","유사한"],
    syn:["corresponding","side-by-side","alike in form"],
    ex:[{ s:"The two roads run {{}} for a mile.", f:"parallel", ko:"두 길은 1마일 동안 평행하게 뻗는다." }] },

  /* 승격 ⑦ — 사전 표현과 글자까지 같다(cripple, C). */
  { word:"paralyze", pron:"패럴라이즈", pos:"v", level:"B2", meanings:["마비시키다"],
    syn:["cripple","make powerless","rob of movement"],
    ex:[{ s:"The strike could {{}} the whole port.", f:"paralyze", ko:"그 파업은 항구 전체를 마비시킬 수 있었다." }] },

  /* paramount 의 원본 뜻 '가장 중요한' 은 cardinal(C)·foremost(F) 의 첫 뜻과
     같아서 '무엇보다 중요한' 으로 갈랐다. */
  { word:"paramount", pron:"패러마운트", pos:"adj", level:"C1", meanings:["무엇보다 중요한","으뜸의"],
    syn:["supreme","above all others","of first importance"],
    ex:[{ s:"Safety is {{}} on a building site.", f:"paramount", ko:"공사장에서 안전은 무엇보다 중요하다." }] },

  { word:"parasite", pron:"패러사이트", pos:"n", level:"B2", meanings:["기생충"],
    syn:["organism living off another","sponger","freeloader"],
    ex:[{ s:"The fish carried a tiny {{}} on its gills.", f:"parasite", ko:"그 물고기는 아가미에 작은 기생충을 달고 있었다." }] },

  /* 원본은 '(질병 등이) 기생충에 의한' 이었다. 괄호를 걷고, 같은 챕터의
     parasite(기생충) 와 물리지 않게 '기생성의' 로 갈랐다. */
  { word:"parasitic", pron:"패러시틱", pos:"adj", level:"C1", meanings:["기생성의","기생하는"],
    syn:["living on a host","sponging off others","feeding on another"],
    ex:[{ s:"The plant has a {{}} habit.", f:"parasitic", ko:"그 식물은 기생하는 습성을 갖는다." }] },

  { word:"parcel", pron:"파슬", pos:"n", level:"B1", meanings:["꾸러미","소포"],
    syn:["package","bundle","wrapped goods"],
    ex:[{ s:"A {{}} arrived for you this morning.", f:"parcel", ko:"오늘 아침 당신에게 소포가 왔다." }] },

  { word:"parental", pron:"퍼렌털", pos:"adj", level:"B2", meanings:["부모의"],
    syn:["of a mother or father","motherly and fatherly","coming from parents"],
    ex:[{ s:"The trip needs {{}} consent.", f:"parental", ko:"그 여행은 부모의 동의가 필요하다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "above all others": "다른 무엇보다 위인",
  "academic article": "학술 글",
  "alike in form": "꼴이 비슷한",
  "ashen": "핏기 없는",
  "blind alarm": "앞뒤 없는 놀람",
  "block of text": "글의 한 덩이",
  "breathe hard": "숨을 거칠게 쉬다",
  "close likeness": "가까운 닮음",
  "coming from parents": "어버이에게서 나온",
  "done with great care": "아주 조심스레 한",
  "drained of color": "빛깔이 빠진",
  "feeding on another": "남을 먹고 사는",
  "flat of the hand": "손의 평평한 면",
  "framework of thought": "생각의 뼈대",
  "freeloader": "공짜로 얻어먹는 이",
  "global outbreak": "지구 규모의 발생",
  "group of sentences": "문장 묶음",
  "heathen": "이교의",
  "hollow of the hand": "손의 오목한 곳",
  "idol-worshipping": "우상을 섬기는",
  "inner hand": "손의 안쪽",
  "living on a host": "숙주에 붙어 사는",
  "make powerless": "힘을 못 쓰게 하다",
  "model case": "본보기가 되는 사례",
  "motherly and fatherly": "어머니 아버지의",
  "of a mother or father": "어버이의",
  "of first importance": "첫째로 중요한",
  "official document": "공식 문서",
  "organism living off another": "남에게 붙어 사는 생물",
  "outside the church": "교회 밖의",
  "pallid": "해쓱한",
  "puff for air": "숨을 몰아쉬다",
  "resemblance": "서로 닮음",
  "rob of movement": "움직임을 앗다",
  "ruddy": "혈색이 좋은",
  "section of writing": "글의 한 부분",
  "self-defeating statement": "스스로를 뒤집는 말",
  "side-by-side": "나란한",
  "single fix for everything": "하나로 다 해결하는 것",
  "slapdash": "엉성한",
  "sponger": "빌붙어 사는 이",
  "sponging off others": "남에게 빌붙는",
  "sudden terror": "갑작스러운 무서움",
  "supreme": "더없이 높은",
  "sweeping disease": "휩쓸고 지나가는 병",
  "typical pattern": "전형적인 틀",
  "universal remedy": "두루 듣는 약",
  "worldwide epidemic": "전 세계에 퍼진 유행병",
  "wrapped goods": "싸 놓은 물건",
  "written study": "글로 쓴 연구"
});
