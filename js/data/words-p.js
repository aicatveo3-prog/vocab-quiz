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
    ex:[{ s:"The trip needs {{}} consent.", f:"parental", ko:"그 여행은 부모의 동의가 필요하다." }] },

  /* ── 챕터 2 ─────────────────────────────────────── */
  /* 'parti-' 어근이 여섯 개 붙는다(partial·participant·participate·particle·
     particular·partisan). 품사와 뜻을 갈라 두어 같은 보드에서 구별된다.
     partake·participate·participate in 은 원본이 모두 '참여하다' 로 3중으로
     물렸다 — '함께하다' / '참여하다' / '~에 가담하다' 로 갈랐다.               */

  /* 승격 ⑧ — 사전은 '의회' 한 갈래였다. 원본의 '국회' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(congress, C). */
  { word:"parliament", pron:"팔러먼트", pos:"n", level:"B2", meanings:["의회","국회"],
    syn:["congress","legislative body","house of lawmakers"],
    ex:[{ s:"The bill passed {{}} last week.", f:"parliament", ko:"그 법안은 지난주 의회를 통과했다." }] },

  { word:"parliamentary", pron:"팔러멘터리", pos:"adj", level:"C1", meanings:["의회의"],
    syn:["of the legislature","lawmaking","congressional"],
    ex:[{ s:"A {{}} committee will review the case.", f:"parliamentary", ko:"의회의 위원회가 그 사안을 살필 것이다." }] },

  /* 원본의 '패러디' 는 외래어를 그대로 옮긴 것이어서 뺐다. */
  { word:"parody", pron:"패러디", pos:"n", level:"C1", meanings:["풍자적 모방","흉내내기"],
    syn:["mocking imitation","send-up","spoof"],
    ex:[{ s:"The sketch was a {{}} of the evening news.", f:"parody", ko:"그 촌극은 저녁 뉴스의 풍자적 모방이었다." }] },

  /* partake 는 원본이 '참여하다, 함께하다' 였다. 같은 챕터의 participate 와
     물리므로 '함께하다' 를 앞세웠다. */
  { word:"partake", pron:"파테이크", pos:"v", level:"C1", meanings:["함께하다","나누다"],
    syn:["share in","join in with others","have a part in"],
    ex:[{ s:"Guests may {{}} of the meal at noon.", f:"partake", ko:"손님들은 정오에 식사를 함께할 수 있다." }] },

  /* 승격 ⑨ — 사전 표현 '부분적인, 편향된' 을 글자까지 지켰다
     (biased, B · comprehensive 반의어, C · entire 반의어, E — 세 곳).
     원본의 '불완전한; 편파적인' 대신 사전 쪽을 남겼다. */
  { word:"partial", pron:"파셜", pos:"adj", level:"B2", meanings:["부분적인","편향된"],
    syn:["biased","incomplete","covering only some"], ant:["entire"],
    ex:[{ s:"We received only a {{}} refund.", f:"partial", ko:"우리는 부분적인 환불만 받았다." }] },

  /* 승격 ⑩ — 사전 표현 '참가자, 당사자' 를 글자까지 지켰다(bystander 반의어, B). */
  { word:"participant", pron:"파티서펀트", pos:"n", level:"B2", meanings:["참가자","당사자"],
    syn:["one taking part","one who joins in","member of an activity"], ant:["bystander"],
    ex:[{ s:"Each {{}} received a badge.", f:"participant", ko:"참가자마다 표찰을 받았다." }] },

  /* 승격 ⑪ — 사전 표현 '참여하다' 를 첫 자리에 지키고 '참가하다' 를 붙였다
     (발음이 없던 항목이다). */
  { word:"participate", pron:"파티서페이트", pos:"v", level:"B1", meanings:["참여하다","참가하다"],
    syn:["take part","join in","play a part"],
    ex:[{ s:"All students must {{}} in the drill.", f:"participate", ko:"모든 학생은 그 훈련에 참여해야 한다." }] },

  /* participate in 은 원본이 '~에 참여하다' 로 participate 와 그대로 물렸다.
     '~에 가담하다' 로 갈랐다. 구·표현이라 ex 는 넣지 않는다. */
  { word:"participate in", pron:"파티서페이트 인", pos:"phr", level:"B1", meanings:["~에 가담하다"],
    syn:["get involved in","be a party to","throw oneself into"] },

  /* 승격 ⑫ — 사전값이 '아주 작은 알' 이라 표제어 뜻으로는 어색했다. 원본의
     '입자' 를 첫 자리에 두고 '미립자' 를 붙였다(괄호는 걷었다).
     molecule(M) 의 화면 글자가 함께 바뀐다. */
  { word:"particle", pron:"파티클", pos:"n", level:"B2", meanings:["입자","미립자"],
    syn:["tiny bit","speck of matter","minute fragment"],
    ex:[{ s:"Dust {{}} floated in the sunbeam.", f:"particle", ko:"먼지 입자가 햇살 속에 떠 있었다." }] },

  /* 승격 ⑬ — 사전이 '특정한; 까다로운' 이었다. 첫 뜻 '특정한' 을 지키고
     원본의 '특별한' 을 붙였다(detail, D). */
  { word:"particular", pron:"퍼티큘러", pos:"adj", level:"B1", meanings:["특정한","특별한"],
    syn:["specific","singled out","one certain"],
    ex:[{ s:"Is there a {{}} book you are looking for?", f:"particular", ko:"찾으시는 특정한 책이 있나요?" }] },

  /* 승격 ⑭ — 사전 표현 '당파적인' 을 글자까지 지켰다(ideological, I ·
     neutral 반의어, N). 원본은 '일당, 당원, 당파심이 강한' 으로 명사와 형용사가
     섞여 있었는데 참조 둘이 모두 형용사여서 형용사로 세웠다. */
  { word:"partisan", pron:"파터전", pos:"adj", level:"C1", meanings:["당파적인"],
    syn:["one-eyed in politics","siding with a faction","loyal to one party"], ant:["neutral"],
    ex:[{ s:"The debate grew openly {{}}.", f:"partisan", ko:"그 토론은 드러내어 당파적으로 흘렀다." }] },

  { word:"party", pron:"파티", pos:"n", level:"B1", meanings:["정당","한쪽 편"],
    syn:["political group","side in a dispute","faction"],
    ex:[{ s:"The ruling {{}} lost twelve seats.", f:"party", ko:"집권 정당은 열두 석을 잃었다." }] },

  { word:"pass down", pron:"패스 다운", pos:"phr", level:"B2", meanings:["전수하다","전해 주다"],
    syn:["hand on to the next","bequeath","carry forward to others"] },

  /* 승격 ⑮ — 사전이 '통로; 구절' 이었다. 구분 기호만 쉼표로 바꿨다.
     참조 네 곳(aisle·channel·corridor·hallway) 이 모두 통로 뜻을 쓴다.
     원본의 '(시간의) 흐름' 갈래는 버렸다. */
  { word:"passage", pron:"패시지", pos:"n", level:"B2", meanings:["통로","구절"],
    syn:["corridor","way through","excerpt from a text"],
    ex:[{ s:"A narrow {{}} led to the courtyard.", f:"passage", ko:"좁은 통로가 안마당으로 이어졌다." }] },

  /* 승격 ⑯ — 사전은 '열정적인' 한 갈래였다. 원본의 '열렬한' 을 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(ardent, A). 원본 첫 뜻 '열렬한' 을 그대로 쓰면
     ardent 와 첫 글자가 같아진다. */
  { word:"passionate", pron:"패셔닛", pos:"adj", level:"B2", meanings:["열정적인","열렬한"],
    syn:["ardent","fervent","full of feeling"], ant:["indifferent"],
    ex:[{ s:"He is {{}} about old films.", f:"passionate", ko:"그는 옛 영화에 열정적이다." }] },

  /* 승격 ⑰ — 사전은 '수동적인' 한 갈래였다. 원본의 '소극적인' 을 뒤에 붙였다
     (active·aggressive 반의어 자리). 원본의 '수동의' 는 '수동적인' 과 겹쳐 버렸다. */
  { word:"passive", pron:"패시브", pos:"adj", level:"B2", meanings:["수동적인","소극적인"],
    syn:["unresisting","going along with","not acting"], ant:["active"],
    ex:[{ s:"She played a {{}} role in the talks.", f:"passive", ko:"그녀는 회담에서 수동적인 역할을 했다." }] },

  /* 승격 ⑱ — 사전이 '~을 지나서; 과거' 로 전치사 갈래와 명사 갈래가 섞여 있었다.
     참조는 beyond(B, adv) 하나뿐인데 그쪽이 쓰는 갈래는 '~을 지나서' 다.
     그래도 수능에서 명사 '과거' 가 압도적으로 흔하므로 명사로 세우고 beyond 쪽
     유의어를 'on the far side of' 로 바꿨다(words-b.js) — M 세트 mold, O 세트
     object 와 같은 판단이다. */
  { word:"past", pron:"패스트", pos:"n", level:"B1", meanings:["과거","지난날"],
    syn:["bygone days","times gone by","former times"], ant:["future"],
    ex:[{ s:"She rarely talks about her {{}}.", f:"past", ko:"그녀는 자기 과거를 좀처럼 말하지 않는다." }] },

  /* 승격 ⑲ — 사전 표현 '풀로 붙이다' 를 글자까지 지켰다(glue, G).
     원본의 명사 '반죽, 연고' 갈래는 버렸다. */
  { word:"paste", pron:"페이스트", pos:"v", level:"B1", meanings:["풀로 붙이다"],
    syn:["glue","stick on","fix with adhesive"],
    ex:[{ s:"{{}} the photo into the album.", f:"Paste", ko:"그 사진을 앨범에 풀로 붙이세요." }] },

  { word:"pastor", pron:"패스터", pos:"n", level:"B2", meanings:["목사"],
    syn:["minister of a church","church leader","shepherd of a flock"],
    ex:[{ s:"The {{}} greeted every family at the door.", f:"pastor", ko:"그 목사는 문에서 모든 가족을 맞았다." }] },

  /* 승격 ⑳ — 사전값은 동사 '방목하다' 인데 원본은 명사다. 참조도 갈렸다 —
     meadow(M) 는 명사, graze(G) 는 동사였다. 수능에서 명사가 흔하므로 명사로
     세우고 graze 쪽 유의어를 'put out to graze' 로 바꿨다(words-g.js). */
  { word:"pasture", pron:"패스처", pos:"n", level:"B2", meanings:["목초","목장"],
    syn:["meadow","grazing land","grassy field"],
    ex:[{ s:"The cows were moved to a fresh {{}}.", f:"pasture", ko:"소들은 새 목초지로 옮겨졌다." }] },

  /* ── 챕터 3 ─────────────────────────────────────── */
  /* 'pay-' 로 시작하는 셋(paycheck·payment·payoff) 이 붙는다. 원본에서
     paycheck '월급, 급여' 와 payment '지급, 지불; 보답; 급여' 가 '급여' 로
     물렸다 — paycheck 을 '월급, 봉급' 으로, payment 는 사전값 '지불, 납부' 로
     갈랐다.                                                                */

  { word:"pat", pron:"팻", pos:"v", level:"B1", meanings:["쓰다듬다"],
    syn:["stroke gently","tap lightly","give a soft touch"],
    ex:[{ s:"She stopped to {{}} the dog.", f:"pat", ko:"그녀는 멈춰서 개를 쓰다듬었다." }] },

  { word:"patch", pron:"패치", pos:"n", level:"B1", meanings:["작은 부분","조각"],
    syn:["small area","piece sewn on","spot of ground"],
    ex:[{ s:"A {{}} of blue showed through the clouds.", f:"patch", ko:"구름 사이로 파란 부분이 드러났다." }] },

  /* 승격 21 — 사전이 '특허; 명백한' 으로 명사와 형용사가 섞여 있었다.
     copyright(C) 가 명사여서 명사로 세우고 원본의 '특허권' 을 붙였다. */
  { word:"patent", pron:"패턴트", pos:"n", level:"B2", meanings:["특허","특허권"],
    syn:["copyright","exclusive right to an invention","registered claim"],
    ex:[{ s:"They filed a {{}} for the new battery.", f:"patent", ko:"그들은 새 전지에 대한 특허를 냈다." }] },

  { word:"patent law", pron:"패턴트 로", pos:"phr", level:"C1", meanings:["특허법"],
    syn:["law on inventions","rules for patents","invention statute"] },

  { word:"paternity", pron:"퍼터너티", pos:"n", level:"C1", meanings:["부성","부계"],
    syn:["fatherhood","being a father","the father's line"],
    ex:[{ s:"The court ordered a {{}} test.", f:"paternity", ko:"법원은 부성 검사를 명령했다." }] },

  { word:"pathetic", pron:"퍼쎄틱", pos:"adj", level:"B2", meanings:["애처로운","가엾은"],
    syn:["pitiable","moving to pity","forlorn"],
    ex:[{ s:"The kitten gave a {{}} cry.", f:"pathetic", ko:"그 새끼 고양이가 애처로운 울음을 냈다." }] },

  /* 승격 22 — 사전이 '후원자; 고객' 이었다. 구분 기호만 쉼표로 바꿨다
     (benefactor, B · client, C). 원본의 '홍보 대사' 갈래는 버렸다. */
  { word:"patron", pron:"페이트런", pos:"n", level:"B2", meanings:["후원자","고객"],
    syn:["benefactor","regular customer","one who gives support"],
    ex:[{ s:"A wealthy {{}} paid for the whole library.", f:"patron", ko:"부유한 후원자가 도서관 전체 비용을 냈다." }] },

  /* 승격 23 — 사전값은 명사 '잠깐 멈춤' 인데 원본은 동사 '중단하다' 다.
     참조 intermission(I) 이 명사여서 사전값을 그대로 지켰다. 수능에서는 동사도
     흔하지만 참조를 보존하는 쪽을 택했다. */
  { word:"pause", pron:"포즈", pos:"n", level:"B2", meanings:["잠깐 멈춤"],
    syn:["intermission","short break","brief halt"],
    ex:[{ s:"After a long {{}} he answered.", f:"pause", ko:"긴 잠깐 멈춤 뒤에 그가 답했다." }] },

  /* 원본은 '(도로를) 포장하다' 였다. 괄호를 걷고 '길을 깔다' 를 붙였다. */
  { word:"pave", pron:"페이브", pos:"v", level:"B2", meanings:["포장하다","길을 깔다"],
    syn:["surface a road","lay paving on","cover with stone"],
    ex:[{ s:"The city will {{}} the alley next spring.", f:"pave", ko:"시는 다음 봄에 그 골목을 포장할 것이다." }] },

  { word:"pavement", pron:"페이브먼트", pos:"n", level:"B2", meanings:["포장도로"],
    syn:["paved surface","sidewalk","made-up road"],
    ex:[{ s:"Rain pooled on the cracked {{}}.", f:"pavement", ko:"비가 갈라진 포장도로에 고였다." }] },

  { word:"pay a visit", pron:"페이 어 비지트", pos:"phr", level:"B1", meanings:["방문하다"],
    syn:["call on someone","drop in on","go to see"] },

  /* paycheck 은 원본이 '월급, 급여' 였다. '급여' 가 같은 챕터 payment 와 물려서
     '봉급' 으로 갈랐다. */
  { word:"paycheck", pron:"페이첵", pos:"n", level:"B2", meanings:["월급","봉급"],
    syn:["monthly pay","wage packet","salary payment"],
    ex:[{ s:"His first {{}} arrived on Friday.", f:"paycheck", ko:"그의 첫 월급이 금요일에 들어왔다." }] },

  /* 승격 24 — 사전 표현 '지불, 납부' 를 글자까지 지켰다(expense, E · fee, F).
     원본의 '지급, 지불; 보답; 급여' 네 갈래 중 사전 쪽을 남겼다. */
  { word:"payment", pron:"페이먼트", pos:"n", level:"B1", meanings:["지불","납부"],
    syn:["settling of a bill","handing over of money","remittance"],
    ex:[{ s:"We accept {{}} by card only.", f:"payment", ko:"우리는 카드 지불만 받는다." }] },

  /* 승격 25 — 사전이 '뇌물; 성과' 였다. 구분 기호만 쉼표로 바꿨다(bribe, B).
     원본의 '급료 지불(일); 청산, 보복' 은 괄호와 갈래가 많아 사전 쪽을 남겼다. */
  { word:"payoff", pron:"페이오프", pos:"n", level:"C1", meanings:["뇌물","성과"],
    syn:["bribe","hush money","final reward"],
    ex:[{ s:"The scandal began with a small {{}}.", f:"payoff", ko:"그 추문은 작은 뇌물에서 시작됐다." }] },

  /* 승격 26 — 사전이 '절정; 정상' 이었다. 구분 기호만 쉼표로 바꿨다(culminate, C). */
  { word:"peak", pron:"피크", pos:"n", level:"B1", meanings:["절정","정상"],
    syn:["highest point","summit","topmost level"], ant:["trough"],
    ex:[{ s:"Sales reached their {{}} in December.", f:"peak", ko:"판매가 십이월에 절정에 이르렀다." }] },

  /* 승격 27 — 사전 표현 '농민, 소작농' 을 글자까지 지켰다(commoner, C).
     원본의 '소작농, 소농, 영세 농민' 세 갈래 중 사전 쪽을 남겼다. */
  { word:"peasant", pron:"페전트", pos:"n", level:"B2", meanings:["농민","소작농"],
    syn:["commoner","tenant farmer","country laborer"],
    ex:[{ s:"The land was worked by a single {{}} family.", f:"peasant", ko:"그 땅은 한 농민 가족이 부쳐 먹었다." }] },

  /* 승격 28 — 사전 표현 '독특한, 특이한' 을 글자까지 지켰다
     (bizarre, B · eccentric, E). 원본의 '이상한' 을 쓰면 bizarre·odd(O) 의
     첫 뜻과 같아진다. */
  { word:"peculiar", pron:"퍼큘리어", pos:"adj", level:"B2", meanings:["독특한","특이한"],
    syn:["bizarre","out of the common run","unlike any other"],
    ex:[{ s:"The soup had a {{}} aftertaste.", f:"peculiar", ko:"그 국은 독특한 뒷맛이 있었다." }] },

  /* 승격 29 — 사전은 '교육학' 한 갈래였다(발음이 없었다).
     원본의 '교수법' 을 뒤에 붙였다. */
  { word:"pedagogy", pron:"페더고지", pos:"n", level:"C2", meanings:["교육학","교수법"],
    syn:["science of teaching","art of instruction","teaching method"],
    ex:[{ s:"She studies {{}} at the graduate school.", f:"pedagogy", ko:"그녀는 대학원에서 교육학을 공부한다." }] },

  /* 원본은 '행상하다, (물건을) 팔러 다니다; 퍼뜨리다' 세 갈래였다.
     괄호를 걷고 앞 두 갈래만 남겼다. */
  { word:"peddle", pron:"페들", pos:"v", level:"C1", meanings:["행상하다","팔러 다니다"],
    syn:["hawk goods","sell door to door","tout wares"],
    ex:[{ s:"He used to {{}} brushes in the village.", f:"peddle", ko:"그는 마을에서 빗자루를 행상했다." }] },

  /* 원본은 '보행자; 도보의, 보행의' 로 명사와 형용사가 섞여 있었다.
     참조가 없어 수능에서 흔한 명사로 세웠다. */
  { word:"pedestrian", pron:"퍼데스트리언", pos:"n", level:"B2", meanings:["보행자"],
    syn:["person on foot","walker","one going by foot"],
    ex:[{ s:"A {{}} was struck at the crossing.", f:"pedestrian", ko:"한 보행자가 횡단보도에서 치였다." }] },

  /* ── 챕터 4 ─────────────────────────────────────── */
  /* 'perce-' 어근 넷(perceive·percentage·perception·perceptual) 이 붙는다.
     품사가 v/n/adj 로 갈려 같은 보드에서 헷갈리지 않는다.                    */

  { word:"pediatrician", pron:"피디어트리션", pos:"n", level:"C1", meanings:["소아과 의사"],
    syn:["children's doctor","child health specialist","doctor for infants"],
    ex:[{ s:"The {{}} weighed the baby.", f:"pediatrician", ko:"소아과 의사가 아기의 무게를 재었다." }] },

  /* 승격 30 — ★원본의 뜻이 틀렸다. '(법 등을) 개정하다' 는 amend 의 뜻이다.
     사전 표현 '살짝 들여다보다' 를 글자까지 지켰다. 참조는 둘인데 품사가 갈렸다 —
     glance(G) 는 동사, glimpse(G) 는 명사다. 사전값이 동사여서 동사로 세우고
     glimpse 쪽 유의어를 'quick look' 으로 바꿨다(words-g.js). */
  { word:"peek", pron:"피크", pos:"v", level:"B2", meanings:["살짝 들여다보다"],
    syn:["glance","take a quick look","peep in"],
    ex:[{ s:"Do not {{}} at the answers.", f:"peek", ko:"답을 살짝 들여다보지 마라." }] },

  /* 원본은 '껍질; 껍질을 벗기다' 로 명사와 동사가 섞여 있었다.
     참조가 없어 동사로 세웠다 — 명사 '껍질' 은 skin 쪽 뜻이다. */
  { word:"peel", pron:"필", pos:"v", level:"B1", meanings:["껍질을 벗기다"],
    syn:["strip the skin from","pare","take the rind off"],
    ex:[{ s:"Please {{}} the potatoes before boiling.", f:"peel", ko:"끓이기 전에 감자 껍질을 벗겨 주세요." }] },

  /* 승격 31 — 사전이 '또래; 동료' 였다. 구분 기호만 쉼표로 바꿨다
     (colleague, C · counterpart, C). */
  { word:"peer", pron:"피어", pos:"n", level:"B2", meanings:["또래","동료"],
    syn:["colleague","one of the same age","equal in standing"],
    ex:[{ s:"Teenagers care what their {{}} think.", f:"peer", ko:"십대는 또래가 어떻게 생각하는지를 신경 쓴다." }] },

  /* 원본은 '사용자간 직접 접속(P2P)' 였다. 약어 괄호를 걷고 띄어쓰기를 바로잡았다. */
  { word:"peer-to-peer", pron:"피어 투 피어", pos:"adj", level:"C1", meanings:["사용자 간 직접 접속의"],
    syn:["user-to-user","without a middle server","direct between users"],
    ex:[{ s:"The app uses a {{}} network.", f:"peer-to-peer", ko:"그 앱은 사용자 간 직접 접속 망을 쓴다." }] },

  /* 승격 32 — 사전값 '벌, 처벌' 의 첫 뜻이 한 글자여서 선택지에서 뜻으로 읽기
     빠듯했다. 원본의 '벌금' 을 첫 자리에 두고, 챕터 17 의 punishment(처벌, 형벌)
     와 물리지 않게 '과태료' 를 붙였다. fine(F) 의 화면 글자가 함께 바뀐다. */
  { word:"penalty", pron:"페널티", pos:"n", level:"B2", meanings:["벌금","과태료"],
    syn:["fine","money forfeit","sum charged for breaking a rule"],
    ex:[{ s:"There is a {{}} for late filing.", f:"penalty", ko:"늦게 내면 벌금이 있다." }] },

  /* 승격 33 — 사전 표현과 글자까지 같다(infiltrate, I).
     챕터 6 의 pierce 를 '찌르다' 로 갈라 두어 겹치지 않는다. */
  { word:"penetrate", pron:"페너트레이트", pos:"v", level:"B2", meanings:["꿰뚫다","침투하다"],
    syn:["infiltrate","pass right through","work into"],
    ex:[{ s:"Sunlight cannot {{}} the thick canopy.", f:"penetrate", ko:"햇빛은 두터운 숲 천장을 꿰뚫지 못한다." }] },

  { word:"peninsula", pron:"퍼닌설라", pos:"n", level:"B2", meanings:["반도"],
    syn:["land jutting into the sea","cape-like landmass","neck of land"],
    ex:[{ s:"The {{}} is surrounded by water on three sides.", f:"peninsula", ko:"그 반도는 세 면이 물로 둘러싸여 있다." }] },

  /* 승격 34 — 사전에 뜻만 있고 발음이 없던 항목이다. 표현을 글자까지 지켰다. */
  { word:"pension", pron:"펜션", pos:"n", level:"B2", meanings:["연금"],
    syn:["retirement pay","money paid after work ends","old-age allowance"],
    ex:[{ s:"He lives on a small {{}}.", f:"pension", ko:"그는 적은 연금으로 산다." }] },

  { word:"pentagon", pron:"펜터곤", pos:"n", level:"C1", meanings:["오각형"],
    syn:["five-sided figure","five-cornered shape","shape with five edges"],
    ex:[{ s:"Draw a {{}} inside the circle.", f:"pentagon", ko:"원 안에 오각형을 그리세요." }] },

  /* peoples 는 복수형이 따로 뜻을 갖는 낱말이다 — people(사람들) 과 달리
     '여러 민족' 을 가리킨다. 그래서 단수형과 별개 표제어로 두었다. */
  { word:"peoples", pron:"피플즈", pos:"n", level:"B2", meanings:["민족들","여러 겨레"],
    syn:["nations","ethnic groups","races of the world"],
    ex:[{ s:"The museum shows the art of many {{}}.", f:"peoples", ko:"그 박물관은 여러 민족의 예술을 보여 준다." }] },

  /* 승격 35 — 사전 표현과 글자까지 같다(discern, D). */
  { word:"perceive", pron:"퍼시브", pos:"v", level:"B2", meanings:["인지하다","감지하다"],
    syn:["discern","become aware of","make out"],
    ex:[{ s:"Babies {{}} faces from a very early age.", f:"perceive", ko:"아기는 아주 어릴 때부터 얼굴을 인지한다." }] },

  /* 원본은 '백분율, 퍼센트; 비율; 배당, 몫' 으로 네 갈래였다.
     '퍼센트' 는 외래어여서 빼고 두 갈래로 줄였다. */
  { word:"percentage", pron:"퍼센티지", pos:"n", level:"B1", meanings:["백분율","비율"],
    syn:["rate per hundred","proportion out of a hundred","share expressed in hundredths"],
    ex:[{ s:"What {{}} of students passed?", f:"percentage", ko:"학생의 몇 백분율이 통과했나요?" }] },

  /* 승격 36 — 사전 표현 '인식, 지각' 을 글자까지 지켰다
     (consciousness, C · insight, I). 원본의 다섯 갈래 중 사전 쪽을 남겼다. */
  { word:"perception", pron:"퍼셉션", pos:"n", level:"B2", meanings:["인식","지각"],
    syn:["consciousness","way of seeing","grasp of the senses"],
    ex:[{ s:"Colour {{}} differs from person to person.", f:"perception", ko:"색 인식은 사람마다 다르다." }] },

  { word:"perceptual", pron:"퍼셉추얼", pos:"adj", level:"C1", meanings:["지각의","감각의"],
    syn:["to do with the senses","of perceiving","sense-based"],
    ex:[{ s:"The test measures {{}} speed.", f:"perceptual", ko:"그 검사는 지각의 속도를 잰다." }] },

  /* 승격 37 — 사전이 '다년생의; 끊임없는' 이었다. 구분 기호만 쉼표로 바꿨다
     (annual 의 반의어 자리, A). 원본의 '연중 끊이지 않는' 대신 사전 쪽을 남겼다. */
  { word:"perennial", pron:"퍼레니얼", pos:"adj", level:"C1", meanings:["다년생의","끊임없는"],
    syn:["lasting many years","coming back each year","never-ending"],
    ex:[{ s:"Traffic is a {{}} problem in this city.", f:"perennial", ko:"교통은 이 도시의 끊임없는 문제다." }] },

  /* 원본은 '연주, 공연, 실행, 수행' 네 갈래였다. 두 갈래로 줄였다. */
  { word:"performance", pron:"퍼포먼스", pos:"n", level:"B1", meanings:["공연","수행"],
    syn:["show before an audience","carrying out of a task","staged act"],
    ex:[{ s:"The evening {{}} sold out.", f:"performance", ko:"저녁 공연은 매진되었다." }] },

  { word:"perhaps", pron:"퍼햅스", pos:"adv", level:"B1", meanings:["아마도"],
    syn:["maybe","possibly","it may be that"],
    ex:[{ s:"{{}} we should wait until morning.", f:"Perhaps", ko:"아마도 우리는 아침까지 기다려야 한다." }] },

  /* 승격 38 — 사전 표현 '큰 위험' 을 글자까지 지켰다(hazard, H · jeopardy, J).
     원본의 '위험' 을 쓰면 그 둘의 첫 뜻과 같아지고, '모험' 은 뜻이 멀어 버렸다. */
  { word:"peril", pron:"페릴", pos:"n", level:"C1", meanings:["큰 위험"],
    syn:["hazard","grave danger","threat to life"], ant:["safety"],
    ex:[{ s:"The crew was in real {{}}.", f:"peril", ko:"그 선원들은 진짜 큰 위험에 놓여 있었다." }] },

  /* 원본은 '주기적인, 정기적인, 정기간행물' 로 형용사와 명사가 섞여 있었다.
     참조가 없어 명사로 세웠다 — 형용사 갈래는 같은 세트의 periodically(부사) 와
     뜻이 겹쳐서 명사 쪽이 쓸모가 크다. */
  { word:"periodical", pron:"피리아디컬", pos:"n", level:"C1", meanings:["정기간행물"],
    syn:["magazine issued regularly","journal","serial publication"],
    ex:[{ s:"The library keeps every {{}} for ten years.", f:"periodical", ko:"그 도서관은 모든 정기간행물을 십 년간 보관한다." }] },

  /* ── 챕터 5 ─────────────────────────────────────── */
  /* 'pers-' 어근이 여덟 개 붙는다(persecute·persist·persistence·personality·
     personalize·personnel·perspective·perspiration·perspire·persuasive).
     품사와 뜻이 서로 달라 같은 보드에서 헷갈리지 않는다.                      */

  { word:"periodically", pron:"피리아디컬리", pos:"adv", level:"B2", meanings:["정기적으로","주기적으로"],
    syn:["at regular intervals","from time to time in a cycle","every so often"],
    ex:[{ s:"The alarm is tested {{}}.", f:"periodically", ko:"그 경보기는 정기적으로 점검된다." }] },

  /* 승격 39 — 사전 표현 '주변의, 부차적인' 을 글자까지 지켰다
     (central 반의어, C · marginal, M). 원본은 '주변적인, 지엽적인; 주변 장치' 로
     형용사와 명사가 섞여 있었는데 참조 둘이 모두 형용사여서 형용사로 세웠다. */
  { word:"peripheral", pron:"퍼리퍼럴", pos:"adj", level:"C1", meanings:["주변의","부차적인"],
    syn:["marginal","on the outer edge","of lesser weight"], ant:["central"],
    ex:[{ s:"That issue is {{}} to the main debate.", f:"peripheral", ko:"그 사안은 주된 논쟁에 부차적이다." }] },

  { word:"perish", pron:"페리시", pos:"v", level:"C1", meanings:["죽다","소멸하다"],
    syn:["die out","be destroyed","come to an end"], ant:["survive"],
    ex:[{ s:"Many crops {{}} in a long drought.", f:"perish", ko:"많은 작물이 긴 가뭄에 죽는다." }] },

  /* 승격 40 — 사전은 '영구적인' 한 갈래였다. 원본의 '영속적인' 을 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(irreversible, I · makeshift 반의어, M). */
  { word:"permanent", pron:"퍼머넌트", pos:"adj", level:"B1", meanings:["영구적인","영속적인"],
    syn:["irreversible","lasting for good","never wearing off"], ant:["temporary"],
    ex:[{ s:"The injury left a {{}} scar.", f:"permanent", ko:"그 부상은 영구적인 흉터를 남겼다." }] },

  /* 승격 41 — 사전은 '배어들다' 한 갈래였다. 원본의 '스며들다' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(infiltrate, I). */
  { word:"permeate", pron:"퍼미에이트", pos:"v", level:"C1", meanings:["배어들다","스며들다"],
    syn:["soak through","spread all through","seep into every part"],
    ex:[{ s:"The smell of bread began to {{}} the house.", f:"permeate", ko:"빵 냄새가 집 안에 배어들기 시작했다." }] },

  /* 승격 42 — 사전에 뜻만 있고 발음이 없던 항목이다. 표현을 글자까지 지켰다.
     원본의 '영구화하다' 는 '영속시키다' 와 뜻이 같아 버렸다. */
  { word:"perpetuate", pron:"퍼페추에이트", pos:"v", level:"C2", meanings:["영속시키다"],
    syn:["keep going for ever","make last endlessly","carry on without end"],
    ex:[{ s:"Such jokes only {{}} old prejudices.", f:"perpetuate", ko:"그런 농담은 낡은 편견을 영속시킬 뿐이다." }] },

  /* 승격 43 — 사전 표현 '당혹한, 어리둥절한' 을 글자까지 지켰다(at a loss, A). */
  { word:"perplexed", pron:"퍼플렉스트", pos:"adj", level:"C1", meanings:["당혹한","어리둥절한"],
    syn:["at a loss","unable to make sense of it","thrown into confusion"],
    ex:[{ s:"He looked {{}} by the question.", f:"perplexed", ko:"그는 그 질문에 당혹한 듯 보였다." }] },

  /* 승격 44 — 사전에 뜻만 있고 발음이 없던 항목이다. '박해하다' 를 첫 자리에
     지키고 원본의 '학대하다' 를 '못살게 굴다' 로 다듬어 붙였다 —
     '학대하다' 는 M 세트 mistreat 의 뜻이다. */
  { word:"persecute", pron:"퍼서큐트", pos:"v", level:"C1", meanings:["박해하다","못살게 굴다"],
    syn:["hound for beliefs","oppress cruelly","harry without let-up"],
    ex:[{ s:"The regime began to {{}} its critics.", f:"persecute", ko:"그 정권은 비판자들을 박해하기 시작했다." }] },

  /* 승격 45 — 사전이 '지속하다; 고집하다' 였다. 구분 기호만 쉼표로 바꿨다
     (linger, L). 원본의 '집요하게 계속하다' 대신 사전 쪽을 남겼다. */
  { word:"persist", pron:"퍼시스트", pos:"v", level:"B2", meanings:["지속하다","고집하다"],
    syn:["linger","keep on regardless","refuse to give up"],
    ex:[{ s:"The fog will {{}} until noon.", f:"persist", ko:"안개는 정오까지 지속될 것이다." }] },

  /* 승격 46 — 사전 표현 '끈기, 고집' 을 글자까지 지켰다(determination, D).
     원본의 '고집, 지속됨' 은 순서가 거꾸로였다. */
  { word:"persistence", pron:"퍼시스턴스", pos:"n", level:"B2", meanings:["끈기","고집"],
    syn:["determination","refusal to quit","dogged effort"],
    ex:[{ s:"Her {{}} finally won the case.", f:"persistence", ko:"그녀의 끈기가 마침내 그 사건을 이겼다." }] },

  /* 승격 47 — 사전이 '성격; 유명인' 이었다. 참조 둘 중 character(C) 가 '성격' 을
     쓰므로 그 갈래를 첫 자리에 지키고 원본의 '개성' 을 붙였다. '유명인' 갈래는
     celebrity(C) 가 쓰던 쪽인데, 그 화면 글자는 '성격, 개성' 으로 바뀐다. */
  { word:"personality", pron:"퍼서낼러티", pos:"n", level:"B1", meanings:["성격","개성"],
    syn:["character","make-up of a person","inborn nature"],
    ex:[{ s:"She has a warm {{}}.", f:"personality", ko:"그녀는 따뜻한 성격을 가졌다." }] },

  /* 승격 48 — 사전은 '맞춤화하다' 한 갈래였다. 원본의 '개인화하다' 를 뒤에 붙였다
     (괄호는 걷었다). 첫 뜻은 사전값을 지켰다(customize, C). */
  { word:"personalize", pron:"퍼서널라이즈", pos:"v", level:"C1", meanings:["맞춤화하다","개인화하다"],
    syn:["customize","tailor to one person","make it one's own"],
    ex:[{ s:"You can {{}} the cover with your name.", f:"personalize", ko:"표지를 이름으로 맞춤화할 수 있다." }] },

  { word:"personnel", pron:"퍼서넬", pos:"n", level:"B2", meanings:["직원","인사과"],
    syn:["staff of a firm","workforce","human-resources office"],
    ex:[{ s:"All {{}} must wear a badge.", f:"personnel", ko:"모든 직원은 표찰을 달아야 한다." }] },

  /* 승격 49 — 사전에 뜻만 있고 발음이 없던 항목이다. 표현을 글자까지 지켰다.
     원본의 '원근법' 갈래는 버렸다. */
  { word:"perspective", pron:"퍼스펙티브", pos:"n", level:"B2", meanings:["관점","시각"],
    syn:["standpoint","angle of view","way of looking at it"],
    ex:[{ s:"The book offers a fresh {{}} on the war.", f:"perspective", ko:"그 책은 그 전쟁에 새로운 관점을 준다." }] },

  { word:"perspiration", pron:"퍼스퍼레이션", pos:"n", level:"C1", meanings:["땀","발한"],
    syn:["sweat","moisture from the skin","body damp"],
    ex:[{ s:"{{}} ran down his forehead.", f:"Perspiration", ko:"땀이 그의 이마를 타고 흘렀다." }] },

  { word:"perspire", pron:"퍼스파이어", pos:"v", level:"C1", meanings:["땀을 흘리다"],
    syn:["sweat heavily","give off moisture","break into a sweat"],
    ex:[{ s:"Runners {{}} even in cold weather.", f:"perspire", ko:"달리는 사람은 추운 날씨에도 땀을 흘린다." }] },

  /* 승격 50 — 사전 표현과 글자까지 같다. 이 챕터에서 참조가 가장 많다(3곳) —
     compelling(C)·convincing(C)·eloquent(E). */
  { word:"persuasive", pron:"퍼스웨이시브", pos:"adj", level:"B2", meanings:["설득력 있는"],
    syn:["compelling","carrying weight","good at winning people over"], ant:["unconvincing"],
    ex:[{ s:"He made a {{}} case for the plan.", f:"persuasive", ko:"그는 그 계획에 설득력 있는 주장을 펼쳤다." }] },

  /* 원본은 '관계있는, 타당한, 적절한' 세 갈래였다. '타당한' 은 plausible(타당한,
     그럴 듯한) 과, '적절한' 은 proper(적절한, 올바른) 와 부딪히므로 둘을 버리고
     '딱 맞는' 을 붙였다. */
  { word:"pertinent", pron:"퍼터넌트", pos:"adj", level:"C1", meanings:["관계있는","딱 맞는"],
    syn:["bearing on the matter","to the point","germane"], ant:["irrelevant"],
    ex:[{ s:"Please keep your questions {{}}.", f:"pertinent", ko:"질문을 관계있는 것으로 지켜 주세요." }] },

  { word:"pervasive", pron:"퍼베이시브", pos:"adj", level:"C1", meanings:["만연한","스며드는"],
    syn:["found everywhere","spread right through","present in every corner"],
    ex:[{ s:"Plastic waste is {{}} in the ocean.", f:"pervasive", ko:"플라스틱 쓰레기는 바다에 만연하다." }] },

  /* 승격 51 — 사전은 '비관주의' 한 갈래였다. 원본의 '비관론' 을 첫 자리로 올릴 수도
     있었지만 cynicism(C)·optimism(ant, O) 두 곳을 보존하려고 사전값을 앞에 두었다.
     O 세트 optimism(낙관론, 낙천주의) 과는 뜻이 반대여서 겹치지 않는다. */
  { word:"pessimism", pron:"페시미즘", pos:"n", level:"B2", meanings:["비관주의","비관론"],
    syn:["cynicism","gloomy outlook","expecting the worst"], ant:["optimism"],
    ex:[{ s:"A mood of {{}} settled over the team.", f:"pessimism", ko:"비관주의 분위기가 팀에 내려앉았다." }] },

  /* ── 챕터 6 ─────────────────────────────────────── */
  /* 'ph-' 로 시작하는 낱말이 여덟 개 이어진다(pharmaceutical·pharmacy·phase·
     phenomenon·philosophy·phobia·phony·photocopy·photography). 뜻이 서로 멀다.  */

  /* 승격 52 — 사전 표현과 글자까지 같다(negative, N · optimistic 반의어, O). */
  { word:"pessimistic", pron:"페서미스틱", pos:"adj", level:"B2", meanings:["비관적인"],
    syn:["negative","looking on the dark side","fearing the worst"], ant:["optimistic"],
    ex:[{ s:"He is {{}} about next year's harvest.", f:"pessimistic", ko:"그는 내년 수확에 비관적이다." }] },

  /* 승격 53 — 사전은 '농약' 한 갈래였다. 원본의 '살충제' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(insecticide, I). */
  { word:"pesticide", pron:"페스터사이드", pos:"n", level:"B2", meanings:["농약","살충제"],
    syn:["insecticide","chemical for killing pests","crop spray"],
    ex:[{ s:"The farm stopped using that {{}}.", f:"pesticide", ko:"그 농장은 그 농약 쓰기를 그쳤다." }] },

  { word:"petal", pron:"페털", pos:"n", level:"B1", meanings:["꽃잎"],
    syn:["leaf of a flower","bloom leaf","flower blade"],
    ex:[{ s:"A single {{}} fell on the table.", f:"petal", ko:"꽃잎 하나가 탁자에 떨어졌다." }] },

  /* 승격 54 — 사전에 뜻만 있고 발음이 없던 항목이다. 표현을 글자까지 지켰다. */
  { word:"petition", pron:"퍼티션", pos:"n", level:"B2", meanings:["청원","탄원"],
    syn:["formal request to authority","signed appeal","plea in writing"],
    ex:[{ s:"They handed in a {{}} with ten thousand names.", f:"petition", ko:"그들은 만 명의 이름이 담긴 청원을 냈다." }] },

  { word:"petroleum", pron:"퍼트롤리엄", pos:"n", level:"B2", meanings:["석유"],
    syn:["crude oil","rock oil","mineral oil"],
    ex:[{ s:"The country exports {{}} and gas.", f:"petroleum", ko:"그 나라는 석유와 가스를 수출한다." }] },

  /* 원본은 '사소한, 하찮은 (= minor)' 이었다. "=" 표기를 걷고, M 세트
     minor(사소한, 작은) 와 첫 뜻이 겹치지 않게 '하찮은' 을 앞세웠다. */
  { word:"petty", pron:"페티", pos:"adj", level:"B2", meanings:["하찮은","자잘한"],
    syn:["of little account","trivial in scale","small-scale"], ant:["weighty"],
    ex:[{ s:"They argued over {{}} details.", f:"petty", ko:"그들은 하찮은 세부 사항을 두고 다퉜다." }] },

  { word:"pharmaceutical", pron:"파머슈티컬", pos:"adj", level:"C1", meanings:["제약의","약학의"],
    syn:["drug-making","to do with medicines","medicine-related"],
    ex:[{ s:"She works for a {{}} company.", f:"pharmaceutical", ko:"그녀는 제약 회사에서 일한다." }] },

  { word:"pharmacy", pron:"파머시", pos:"n", level:"B1", meanings:["약국","약학"],
    syn:["chemist's shop","drugstore","study of medicines"],
    ex:[{ s:"The {{}} closes at nine.", f:"pharmacy", ko:"그 약국은 아홉 시에 닫는다." }] },

  { word:"phase", pron:"페이즈", pos:"n", level:"B1", meanings:["단계","국면"],
    syn:["stage in a process","step along the way","period of change"],
    ex:[{ s:"The project entered its final {{}}.", f:"phase", ko:"그 사업은 마지막 단계에 들어섰다." }] },

  /* 승격 55 — 사전 표현과 글자까지 같다(marvel, M). */
  { word:"phenomenon", pron:"퍼나머넌", pos:"n", level:"B2", meanings:["현상"],
    syn:["marvel","observed event","thing that occurs"],
    ex:[{ s:"The northern lights are a striking {{}}.", f:"phenomenon", ko:"북극광은 눈에 띄는 현상이다." }] },

  { word:"philosophy", pron:"펄라서피", pos:"n", level:"B1", meanings:["철학"],
    syn:["study of wisdom","system of thought","love of knowledge"],
    ex:[{ s:"He teaches {{}} at the college.", f:"philosophy", ko:"그는 그 대학에서 철학을 가르친다." }] },

  { word:"phobia", pron:"포비어", pos:"n", level:"C1", meanings:["공포증","혐오증"],
    syn:["dread of something","morbid fear","deep-seated horror"],
    ex:[{ s:"She has a {{}} about heights.", f:"phobia", ko:"그녀는 높은 곳에 공포증이 있다." }] },

  /* 승격 56 — 사전 표현 '허위의, 사이비의' 를 글자까지 지켰다(fake, F).
     원본은 '가짜의, 허위의; 겉치레의; 사기꾼, 가짜' 로 형용사와 명사가 섞여 있었고
     갈래도 넷이었다. '가짜의' 는 fake(가짜의) 의 첫 뜻과 같아서 사전 쪽이 낫다. */
  { word:"phony", pron:"포니", pos:"adj", level:"C1", meanings:["허위의","사이비의"],
    syn:["fake","put on for show","not what it claims"], ant:["genuine"],
    ex:[{ s:"He used a {{}} name at the desk.", f:"phony", ko:"그는 창구에서 허위의 이름을 썼다." }] },

  /* 원본은 '복사; 복사하다' 로 명사와 동사가 섞여 있었다. 참조가 없어 명사로
     세웠다. '복사물' 을 붙여 뜻이 또렷해지게 했다. */
  { word:"photocopy", pron:"포토카피", pos:"n", level:"B1", meanings:["복사","복사물"],
    syn:["duplicate sheet","machine copy","reproduced page"],
    ex:[{ s:"Please bring a {{}} of your passport.", f:"photocopy", ko:"여권 복사물을 가져오세요." }] },

  /* 원본은 '사진 촬영(기술)' 이었다. 괄호를 걷고 '사진술' 로 풀어 붙였다. */
  { word:"photography", pron:"퍼타그러피", pos:"n", level:"B1", meanings:["사진 촬영","사진술"],
    syn:["taking of pictures","camera work","art of the camera"],
    ex:[{ s:"She took up {{}} after retiring.", f:"photography", ko:"그녀는 은퇴 뒤 사진 촬영을 시작했다." }] },

  /* 승격 57 — 사전이 '신체의; 물리적인' 이었다. 구분 기호만 쉼표로 바꿨다
     (corporal, C · mental 반의어, M). 원본의 '육체의, 물질의, 물리학의' 세 갈래
     중 사전 쪽을 남겼다 — '육체의' 는 corporal 의 첫 뜻과 같다. */
  { word:"physical", pron:"피지컬", pos:"adj", level:"B1", meanings:["신체의","물리적인"],
    syn:["corporal","of the body","material rather than mental"], ant:["mental"],
    ex:[{ s:"The job needs real {{}} strength.", f:"physical", ko:"그 일은 진짜 신체의 힘이 필요하다." }] },

  { word:"physician", pron:"퍼지션", pos:"n", level:"B2", meanings:["내과 의사"],
    syn:["doctor of medicine","medical practitioner","non-surgical doctor"],
    ex:[{ s:"Her {{}} advised more rest.", f:"physician", ko:"그녀의 내과 의사는 더 쉬라고 권했다." }] },

  /* 승격 58 — 사전값은 '생리학, 해부학' 인데 '해부학' 은 anatomy 의 뜻이어서
     정확하지 않다. '생리학' 한 갈래로 좁혔다 — anatomy(A) 의 화면 글자가 바뀐다.
     사전값을 버린 두 번째 경우다(앞서 particle 이 있었다). */
  { word:"physiology", pron:"피지알러지", pos:"n", level:"C1", meanings:["생리학"],
    syn:["study of body function","science of living processes","workings of the body"],
    ex:[{ s:"He lectures on plant {{}}.", f:"physiology", ko:"그는 식물 생리학을 강의한다." }] },

  { word:"pie chart", pron:"파이 차트", pos:"phr", level:"B1", meanings:["원 그래프"],
    syn:["circle graph","round diagram","wheel chart"] },

  /* 챕터 4 의 penetrate(꿰뚫다, 침투하다) 와 물리지 않게 '찌르다' 를 앞세웠다.
     원본은 '꿰뚫다, 관통하다' 였다. */
  { word:"pierce", pron:"피어스", pos:"v", level:"B2", meanings:["찌르다","관통하다"],
    syn:["make a hole in","run through","puncture"],
    ex:[{ s:"The thorn can {{}} a thick glove.", f:"pierce", ko:"그 가시는 두터운 장갑도 찌를 수 있다." }] },

  /* ── 챕터 7 ─────────────────────────────────────── */
  /* 'pl-' 로 시작하는 낱말이 아홉 개 이어진다(place·placebo·plague·plain·
     planetwide·plant·plausible·play a role in·playful·playwright·plead).
     품사와 뜻이 서로 달라 같은 보드에서 헷갈리지 않는다.                       */

  /* 원본은 '쌓다; 더미' 로 동사와 명사가 섞여 있었다. 참조가 없어 수능에서 흔한
     명사('a pile of ~') 로 세웠다. */
  { word:"pile", pron:"파일", pos:"n", level:"B1", meanings:["더미","무더기"],
    syn:["heap","stack","mound"],
    ex:[{ s:"A {{}} of books sat on the desk.", f:"pile", ko:"책 더미가 책상에 놓여 있었다." }] },

  { word:"pilgrim", pron:"필그럼", pos:"n", level:"B2", meanings:["순례자"],
    syn:["holy traveler","one on a religious journey","wayfarer to a shrine"],
    ex:[{ s:"Every {{}} walked the last mile barefoot.", f:"pilgrim", ko:"순례자마다 마지막 1마일을 맨발로 걸었다." }] },

  /* ★원본의 '주석, 중추' 에서 '주석' 은 '주축' 의 오타로 보인다. 수능에서 더 흔한
     '기둥' 을 첫 자리에 두고 '중추' 를 남겼다. */
  { word:"pillar", pron:"필러", pos:"n", level:"B2", meanings:["기둥","중추"],
    syn:["column","upright support","mainstay"],
    ex:[{ s:"A stone {{}} held up the roof.", f:"pillar", ko:"돌 기둥이 지붕을 받쳤다." }] },

  { word:"pimple", pron:"핌플", pos:"n", level:"B1", meanings:["여드름","뾰루지"],
    syn:["spot on the skin","small swelling","blemish"],
    ex:[{ s:"A {{}} appeared on his chin.", f:"pimple", ko:"그의 턱에 여드름이 하나 났다." }] },

  /* 승격 59 — 사전이 '개척자; 개척하다' 로 명사와 동사가 섞여 있었다. 참조 셋이
     갈렸다 — frontiersman(F) 은 명사, innovate(I)·break new ground(B) 는 동사 쪽이다.
     사전의 첫 갈래가 명사여서 명사로 세우고, 동사 자리 두 곳의 유의어를
     'lead the way'·'strike out anew' 로 바꿨다(words-i.js·words-b.js). */
  { word:"pioneer", pron:"파이어니어", pos:"n", level:"B2", meanings:["개척자","선구자"],
    syn:["frontiersman","trailblazer","first to go in"],
    ex:[{ s:"She was a {{}} of heart surgery.", f:"pioneer", ko:"그녀는 심장 수술의 개척자였다." }] },

  { word:"pious", pron:"파이어스", pos:"adj", level:"C1", meanings:["신앙심이 깊은","독실한"],
    syn:["devout","deeply religious","reverent"], ant:["irreverent"],
    ex:[{ s:"His {{}} habits never changed.", f:"pious", ko:"그의 신앙심이 깊은 습관은 바뀌지 않았다." }] },

  /* 승격 60 — 사전 표현과 글자까지 같다(crater, C).
     원본의 '구멍, 패인 곳, 구덩이' 세 갈래 중 사전 쪽을 남겼다. */
  { word:"pit", pron:"핏", pos:"n", level:"B1", meanings:["구덩이","움푹한 곳"],
    syn:["crater","deep hole","hollow in the ground"],
    ex:[{ s:"They dug a {{}} for the rubbish.", f:"pit", ko:"그들은 쓰레기를 묻을 구덩이를 팠다." }] },

  /* 원본은 '정도, 정점; 음높이; 힘껏 내던지다' 로 세 갈래에 명사와 동사가 섞여
     있었다. 참조가 없어 '음높이' 갈래로 세웠다 — '정도' 는 degree(정도, D) 의
     첫 뜻과 같아진다. */
  { word:"pitch", pron:"피치", pos:"n", level:"B2", meanings:["음높이","가락"],
    syn:["tone level","highness of a sound","note level"],
    ex:[{ s:"She sang at a higher {{}} than before.", f:"pitch", ko:"그녀는 전보다 높은 음높이로 노래했다." }] },

  { word:"pitiful", pron:"피티풀", pos:"adj", level:"B2", meanings:["측은한","초라한"],
    syn:["arousing pity","wretchedly poor","sorry-looking"],
    ex:[{ s:"The shed was a {{}} sight.", f:"pitiful", ko:"그 헛간은 초라한 광경이었다." }] },

  /* 승격 61 — 사전이 '배치하다; 장소' 로 동사와 명사가 섞여 있었다.
     lay(L) 가 동사여서 동사로 세우고 사전의 첫 갈래 '배치하다' 를 지켰다.
     원본 첫 뜻은 명사 '장소' 였지만 참조를 보존하는 쪽을 택했다 —
     '장소' 는 location(장소, 위치, L) 의 첫 뜻과도 같아진다. */
  { word:"place", pron:"플레이스", pos:"v", level:"B1", meanings:["배치하다","놓다"],
    syn:["lay","set down","stand in position"],
    ex:[{ s:"Please {{}} the vase on the shelf.", f:"place", ko:"그 꽃병을 선반에 놓아 주세요." }] },

  { word:"placebo", pron:"플러시보", pos:"n", level:"C1", meanings:["가짜 약","위약"],
    syn:["dummy pill","sham medicine","inactive treatment"],
    ex:[{ s:"Half the group received a {{}}.", f:"placebo", ko:"그 집단의 절반은 가짜 약을 받았다." }] },

  /* 승격 62 — 사전이 '괴롭히다; 역병' 으로 동사와 명사가 섞여 있었다.
     참조 둘(afflict, A · haunt, H) 이 모두 동사여서 동사로 세웠다.
     원본 첫 뜻은 명사 '전염병' 이었지만 참조 둘을 보존하는 쪽을 택했다. */
  { word:"plague", pron:"플레이그", pos:"v", level:"C1", meanings:["괴롭히다","들볶다"],
    syn:["afflict","hound without let-up","give no peace to"],
    ex:[{ s:"Doubts continued to {{}} him.", f:"plague", ko:"의심이 계속 그를 괴롭혔다." }] },

  /* 승격 63 — 사전이 '평범한; 명백한' 이었다. 구분 기호만 쉼표로 바꿨다
     (comprehensible, C · luxurious 반의어, L · ornate 반의어, O — 세 곳).
     원본은 '분명한, 꾸밈없는; 검소한, 평범한; 평지, 벌판' 으로 형용사와 명사가
     섞인 다섯 갈래였다. */
  { word:"plain", pron:"플레인", pos:"adj", level:"B1", meanings:["평범한","명백한"],
    syn:["comprehensible","unadorned","easy to grasp"], ant:["ornate"],
    ex:[{ s:"She wore a {{}} grey coat.", f:"plain", ko:"그녀는 평범한 회색 외투를 입었다." }] },

  /* 원본은 '지구적 규모의, 지구 전체에 미치는(= worldwide)' 였다.
     "=" 표기를 걷고 한 갈래로 정리했다. */
  { word:"planetwide", pron:"플래닛와이드", pos:"adj", level:"C2", meanings:["지구적 규모의"],
    syn:["across the whole planet","global in reach","earth-wide"],
    ex:[{ s:"The study found a {{}} pattern.", f:"planetwide", ko:"그 연구는 지구적 규모의 양상을 찾아냈다." }] },

  /* 승격 64 — 사전이 '식물; 심다' 로 명사와 동사가 섞여 있었다(발음이 없었다).
     참조가 없어 사전의 첫 갈래 '식물' 을 지키고 원본의 '공장' 을 붙였다. */
  { word:"plant", pron:"플랜트", pos:"n", level:"B1", meanings:["식물","공장"],
    syn:["living growth","vegetation","factory building"],
    ex:[{ s:"This {{}} needs very little water.", f:"plant", ko:"이 식물은 물이 아주 적게 필요하다." }] },

  /* 승격 65 — 사전 표현과 글자까지 같다(convincing, C).
     원본의 '타당한, 그럴 듯한' 중 '타당한' 은 pertinent 쪽으로 넘겼다. */
  { word:"plausible", pron:"플로저블", pos:"adj", level:"B2", meanings:["그럴듯한","설득력 있는"],
    syn:["convincing","believable","ringing true"], ant:["far-fetched"],
    ex:[{ s:"He gave a {{}} excuse.", f:"plausible", ko:"그는 그럴듯한 변명을 했다." }] },

  { word:"play a role in", pron:"플레이 어 롤 인", pos:"phr", level:"B1", meanings:["~에서 역할을 하다"],
    syn:["have a hand in","help shape","contribute to"] },

  { word:"playful", pron:"플레이풀", pos:"adj", level:"B1", meanings:["놀기 좋아하는","장난기 많은"],
    syn:["full of fun","frolicsome","given to play"], ant:["solemn"],
    ex:[{ s:"The puppy is {{}} all day.", f:"playful", ko:"그 강아지는 온종일 놀기 좋아한다." }] },

  /* 원본은 '각본가, 극작가, 각색자' 세 갈래였다. 두 갈래로 줄였다. */
  { word:"playwright", pron:"플레이라이트", pos:"n", level:"C1", meanings:["극작가","각본가"],
    syn:["writer of plays","dramatist","stage author"],
    ex:[{ s:"The {{}} rewrote the last act.", f:"playwright", ko:"그 극작가는 마지막 막을 다시 썼다." }] },

  /* 승격 66 — 사전 표현과 글자까지 같다(appeal, A · implore, I).
     원본의 '간청하다' 는 implore 쪽 뜻이어서 사전 쪽을 남겼다. */
  { word:"plead", pron:"플리드", pos:"v", level:"B2", meanings:["탄원하다","변호하다"],
    syn:["appeal","beg earnestly","speak in defense of"],
    ex:[{ s:"She came to {{}} for her brother.", f:"plead", ko:"그녀는 오라비를 위해 탄원하러 왔다." }] },

  /* ── 챕터 8 ─────────────────────────────────────── */
  /* 'po-' 로 시작하는 낱말이 여덟 개 이어진다(podium·point·point of view·
     point out·poke·polarity·pole·policy·polish). point 계열 셋은 원본에서
     '가리키다' 로 물려 있었다 — point '요점, 점수' / point out '지적하다' 로 갈랐다. */

  /* 승격 67 — 사전 표현과 글자까지 같다. 이 챕터에서 참조가 가장 많다(4곳) —
     contented(C)·delighted(D) 가 유의어, annoyed(A)·disappointed(D) 가 반의어다. */
  { word:"pleased", pron:"플리즈드", pos:"adj", level:"B1", meanings:["기쁜","만족한"],
    syn:["contented","glad at heart","well satisfied"], ant:["annoyed"],
    ex:[{ s:"She was {{}} with the result.", f:"pleased", ko:"그녀는 결과에 만족했다." }] },

  { word:"pleasurable", pron:"플레저러블", pos:"adj", level:"B2", meanings:["즐거운"],
    syn:["giving enjoyment","agreeable to do","a joy to have"],
    ex:[{ s:"It was a {{}} afternoon by the lake.", f:"pleasurable", ko:"호수 옆에서 즐거운 오후였다." }] },

  /* 승격 68 — 사전 표현 '서약, 약속' 을 글자까지 지켰다. 참조 둘이 갈렸다 —
     commitment(C) 는 명사, guarantee(G) 는 동사다. 사전값이 명사여서 명사로 세우고
     guarantee 쪽 유의어를 'give one's word' 로 바꿨다(words-g.js). */
  { word:"pledge", pron:"플레지", pos:"n", level:"B2", meanings:["서약","약속"],
    syn:["commitment","solemn undertaking","word of honor"],
    ex:[{ s:"They signed a {{}} to cut waste.", f:"pledge", ko:"그들은 쓰레기를 줄이겠다는 서약에 서명했다." }] },

  /* 원본은 '역경, 곤경; 맹세하다, 약혼시키다' 로 명사와 동사가 섞여 있었다.
     참조가 없어 명사로 세웠고, '역경' 은 adversity(역경, A) 의 첫 뜻과 같아서
     '곤경' 을 앞세웠다. */
  { word:"plight", pron:"플라이트", pos:"n", level:"C1", meanings:["곤경","딱한 처지"],
    syn:["sorry state","tight corner","bad fix"],
    ex:[{ s:"The film shows the {{}} of refugees.", f:"plight", ko:"그 영화는 난민의 곤경을 보여 준다." }] },

  /* 승격 69 — 사전이 '음모; 줄거리; 구획' 으로 세 갈래였고 참조 넷이 갈렸다 —
     conspiracy(C)·lot(L) 은 명사, conspire(C)·contrive(C) 는 동사다.
     명사가 사전의 첫 갈래이고 수능에서도 흔하므로 명사로 세우고, 동사 자리 두 곳의
     유의어를 'hatch a scheme'·'work out a ruse' 로 바꿨다(words-c.js). */
  { word:"plot", pron:"플롯", pos:"n", level:"B2", meanings:["음모","줄거리"],
    syn:["conspiracy","secret scheme","story line"],
    ex:[{ s:"The {{}} was uncovered before it began.", f:"plot", ko:"그 음모는 시작되기 전에 드러났다." }] },

  { word:"plumber", pron:"플러머", pos:"n", level:"B1", meanings:["배관공"],
    syn:["pipe fitter","water-pipe worker","one who mends pipes"],
    ex:[{ s:"We called a {{}} about the leak.", f:"plumber", ko:"우리는 물이 새는 것 때문에 배관공을 불렀다." }] },

  /* 승격 70 — 사전은 '통통한' 한 갈래였다. 원본의 '포동포동한' 을 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(chubby, C). */
  { word:"plump", pron:"플럼프", pos:"adj", level:"B2", meanings:["통통한","포동포동한"],
    syn:["chubby","rounded and full","well-padded"], ant:["skinny"],
    ex:[{ s:"The baby had {{}} cheeks.", f:"plump", ko:"그 아기는 통통한 볼을 가졌다." }] },

  /* 승격 71 — 사전에 뜻만 있고 발음이 없던 항목이다. 표현을 글자까지 지켰다.
     원본의 명사 '약탈, 강탈' 갈래는 버렸다. */
  { word:"plunder", pron:"플런더", pos:"v", level:"C1", meanings:["약탈하다"],
    syn:["loot","strip of goods by force","carry off spoils"],
    ex:[{ s:"Raiders came to {{}} the coastal towns.", f:"plunder", ko:"침입자들이 해안 도시를 약탈하러 왔다." }] },

  /* 승격 72 — ★원본의 '거꾸로지다' 는 오타다. 사전이 '뛰어들다; 급락' 으로 동사와
     명사가 섞여 있었는데 immerse(I) 가 동사여서 동사로 세우고, 사전의 첫 갈래
     '뛰어들다' 를 지키고 원본의 '급락하다' 를 동사로 다듬어 붙였다. */
  { word:"plunge", pron:"플런지", pos:"v", level:"B2", meanings:["뛰어들다","급락하다"],
    syn:["immerse","dive headlong","drop steeply"],
    ex:[{ s:"Prices could {{}} after the harvest.", f:"plunge", ko:"수확 뒤에 값이 급락할 수 있다." }] },

  /* 원본은 '복수의; 다종교의; 다인종의' 세 갈래였다. 뒤 둘은 M 세트
     multiracial(여러 인종의)·multicultural(다문화의) 쪽 뜻이어서 버리고
     '여러 갈래의' 를 붙였다. */
  { word:"plural", pron:"플루럴", pos:"adj", level:"B2", meanings:["복수의","여러 갈래의"],
    syn:["more than one","of several kinds","not single"], ant:["singular"],
    ex:[{ s:"Add an s to make the {{}} form.", f:"plural", ko:"s 를 붙여 복수의 꼴을 만드세요." }] },

  { word:"pneumonia", pron:"뉴모니어", pos:"n", level:"C1", meanings:["폐렴"],
    syn:["lung infection","inflamed lungs","chest illness"],
    ex:[{ s:"He was hospitalized with {{}}.", f:"pneumonia", ko:"그는 폐렴으로 입원했다." }] },

  { word:"podium", pron:"포디엄", pos:"n", level:"B2", meanings:["연단","지휘대"],
    syn:["raised platform","speaker's stand","rostrum"],
    ex:[{ s:"She stepped onto the {{}} to speak.", f:"podium", ko:"그녀는 말하려고 연단에 올랐다." }] },

  /* 승격 73 — 사전이 '요점; 가리키다' 로 명사와 동사가 섞여 있었다(발음이 없었다).
     원본은 '맨 끝, 뾰족한 끝; 시점, 순간; 점수; 가리키다' 로 네 갈래였다.
     사전의 첫 갈래 '요점' 을 지키고 원본의 '점수' 를 붙였다 — '가리키다' 갈래는
     같은 챕터의 point out 에 넘겼다. */
  { word:"point", pron:"포인트", pos:"n", level:"B1", meanings:["요점","점수"],
    syn:["main idea","gist","score in a game"],
    ex:[{ s:"You have missed the {{}} of the story.", f:"point", ko:"당신은 그 이야기의 요점을 놓쳤다." }] },

  /* 승격 74 — 사전값 '바라보는 자리' 는 O 세트 outlook 을 위해 내가 만든 표현이다.
     원본의 '관점, 견해' 가 훨씬 또렷해서 그쪽을 썼다 — outlook(O) 의 화면 글자가
     바뀐다. "(=viewpoint)" 표기는 걷었다. */
  { word:"point of view", pron:"포인트 오브 뷰", pos:"phr", level:"B1", meanings:["관점","견해"],
    syn:["standpoint","angle one sees from","personal take"] },

  /* 승격 75 — 사전값 '집어서 말하다' 를 둘째 자리로 살리고 원본의 '지적하다' 를
     앞세웠다. 같은 챕터 point(요점, 점수) 와 갈라 두었다. note(N) 의 화면 글자가
     바뀐다. */
  { word:"point out", pron:"포인트 아웃", pos:"phr", level:"B1", meanings:["지적하다","집어서 말하다"],
    syn:["draw attention to","single out for notice","call attention to"] },

  { word:"poke", pron:"포크", pos:"v", level:"B1", meanings:["구멍을 내다","찌르다"],
    syn:["jab at","prod with a finger","push a hole through"],
    ex:[{ s:"Do not {{}} the fire with that stick.", f:"poke", ko:"그 막대로 불을 찌르지 마라." }] },

  { word:"polarity", pron:"폴래러티", pos:"n", level:"C2", meanings:["양극성","완전히 다름"],
    syn:["having two opposite poles","sharp opposition","two-way split"],
    ex:[{ s:"The magnet's {{}} can be reversed.", f:"polarity", ko:"그 자석의 양극성은 뒤바꿀 수 있다." }] },

  { word:"pole", pron:"폴", pos:"n", level:"B2", meanings:["극","극지"],
    syn:["end of the earth's axis","far northern or southern point","polar region"],
    ex:[{ s:"Ice at the south {{}} is melting.", f:"pole", ko:"남극의 얼음이 녹고 있다." }] },

  /* 승격 76 — 사전값은 '보험 증권' 한 갈래뿐이었다. 원본의 '정책' 이 수능에서
     압도적으로 흔하므로 첫 자리에 두고 사전값을 둘째로 살렸다 —
     insurance(I) 의 화면 글자가 바뀐다. '방책' 갈래는 버렸다. */
  { word:"policy", pron:"팔러시", pos:"n", level:"B1", meanings:["정책","보험 증권"],
    syn:["course of action","official line","insurance contract"],
    ex:[{ s:"The new {{}} takes effect in May.", f:"policy", ko:"새 정책은 오월에 시행된다." }] },

  /* 원본은 '(광이 나도록) 닦다, 다듬다' 였다. 괄호를 걷었다. */
  { word:"polish", pron:"팔리시", pos:"v", level:"B1", meanings:["닦다","다듬다"],
    syn:["rub to a shine","buff up","smooth and refine"],
    ex:[{ s:"He stopped to {{}} his shoes.", f:"polish", ko:"그는 멈춰서 구두를 닦았다." }] },

  /* ── 챕터 9 ─────────────────────────────────────── */
  /* 'poll-' 넷(pollen·pollinate·pollutant·pollute) 과 'port-' 넷(portable·portal·
     portion·portrait·portray) 이 붙는다. 품사와 뜻이 서로 달라 구별된다.        */

  /* 승격 77 — 사전은 '예의 바른' 한 갈래였다. 원본의 '공손한' 을 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(courteous, C · impertinent 반의어, I).
     원본의 '교양 있는, 세련된' 갈래는 버렸다. */
  { word:"polite", pron:"펄라이트", pos:"adj", level:"B1", meanings:["예의 바른","공손한"],
    syn:["courteous","well-mannered","showing good manners"], ant:["impertinent"],
    ex:[{ s:"He gave a {{}} nod and left.", f:"polite", ko:"그는 예의 바른 목례를 하고 떠났다." }] },

  { word:"political", pron:"펄리티컬", pos:"adj", level:"B1", meanings:["정치적인"],
    syn:["to do with government","of state affairs","party-related"],
    ex:[{ s:"The song carried a {{}} message.", f:"political", ko:"그 노래는 정치적인 메시지를 담았다." }] },

  { word:"politics", pron:"팔러틱스", pos:"n", level:"B1", meanings:["정치","정치학"],
    syn:["running of a state","public affairs","science of government"],
    ex:[{ s:"She left {{}} after two terms.", f:"politics", ko:"그녀는 두 차례 임기 뒤 정치를 떠났다." }] },

  /* 승격 78 — 사전이 '여론 조사; 투표' 였다. 구분 기호만 쉼표로 바꿨다
     (ballot, B · election, E). 원본의 '득표 집계' 대신 사전 쪽을 남겼다. */
  { word:"poll", pron:"폴", pos:"n", level:"B2", meanings:["여론 조사","투표"],
    syn:["ballot","survey of opinion","count of votes"],
    ex:[{ s:"The latest {{}} shows a close race.", f:"poll", ko:"가장 최근 여론 조사는 팽팽한 경쟁을 보여 준다." }] },

  { word:"pollen", pron:"팔런", pos:"n", level:"B2", meanings:["꽃가루"],
    syn:["flower dust","powder from blossoms","male plant cells"],
    ex:[{ s:"{{}} counts rise every spring.", f:"Pollen", ko:"꽃가루 수치는 봄마다 오른다." }] },

  /* 승격 79 — 사전 표현과 글자까지 같다(fertilize, F).
     원본의 '수분하다' 는 자동사처럼 읽혀 사전 쪽이 낫다. */
  { word:"pollinate", pron:"팔러네이트", pos:"v", level:"B2", meanings:["수분시키다"],
    syn:["fertilize","carry pollen to","dust with pollen"],
    ex:[{ s:"Bees {{}} most of the orchard.", f:"pollinate", ko:"벌이 그 과수원의 대부분을 수분시킨다." }] },

  { word:"pollutant", pron:"펄루턴트", pos:"n", level:"B2", meanings:["오염 물질","오염원"],
    syn:["fouling substance","dirtying agent","source of contamination"],
    ex:[{ s:"Soot is a common urban {{}}.", f:"pollutant", ko:"검댕은 흔한 도시 오염 물질이다." }] },

  /* 승격 80 — 사전 표현과 글자까지 같다(contaminate, C). */
  { word:"pollute", pron:"펄루트", pos:"v", level:"B1", meanings:["오염시키다"],
    syn:["contaminate","foul up","make impure"], ant:["purify"],
    ex:[{ s:"Factories used to {{}} the river freely.", f:"pollute", ko:"공장들은 예전에 강을 마음대로 오염시켰다." }] },

  /* 승격 81 — 사전은 '숙고하다' 한 갈래였다. 원본의 '곰곰이 생각하다' 를 뒤에
     붙였다(원본에 있던 "(= consider)" 표기는 걷었다). 첫 뜻은 사전값을 지켰다
     (contemplate, C). */
  { word:"ponder", pron:"판더", pos:"v", level:"B2", meanings:["숙고하다","곰곰이 생각하다"],
    syn:["contemplate","turn over in the mind","mull over"],
    ex:[{ s:"He sat down to {{}} the offer.", f:"ponder", ko:"그는 앉아서 그 제안을 숙고했다." }] },

  { word:"popularity", pron:"파퓰래러티", pos:"n", level:"B1", meanings:["인기","평판"],
    syn:["wide liking","public favor","being well liked"],
    ex:[{ s:"The show's {{}} grew each season.", f:"popularity", ko:"그 프로의 인기는 시즌마다 자랐다." }] },

  /* 승격 82 — 사전 표현과 글자까지 같다(community, C). */
  { word:"population", pron:"파퓰레이션", pos:"n", level:"B1", meanings:["인구","주민"],
    syn:["community","number of inhabitants","people of a place"],
    ex:[{ s:"The village has a {{}} of forty.", f:"population", ko:"그 마을은 인구가 마흔이다." }] },

  /* 승격 83 — 사전은 '휴대하기 좋은' 한 갈래였다. 원본의 '휴대용의' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(lightweight, L · mobile, M). */
  { word:"portable", pron:"포터블", pos:"adj", level:"B1", meanings:["휴대하기 좋은","휴대용의"],
    syn:["lightweight","easy to carry","made to be moved"],
    ex:[{ s:"She brought a {{}} stove.", f:"portable", ko:"그녀는 휴대용 난로를 가져왔다." }] },

  /* 원본의 '포털(사이트)' 은 외래어여서 뺐다. */
  { word:"portal", pron:"포털", pos:"n", level:"B2", meanings:["입구","관문"],
    syn:["grand doorway","gateway","way in"],
    ex:[{ s:"A stone {{}} led into the garden.", f:"portal", ko:"돌 입구가 정원으로 이어졌다." }] },

  /* 승격 84 — 사전 표현과 글자까지 같다(dose, D · fraction, F).
     원본의 '한 조각, 일부' 대신 사전 쪽을 남겼다. */
  { word:"portion", pron:"포션", pos:"n", level:"B1", meanings:["부분","몫"],
    syn:["fraction","share given out","helping"],
    ex:[{ s:"A large {{}} of the land is wooded.", f:"portion", ko:"그 땅의 큰 부분이 숲이다." }] },

  { word:"portrait", pron:"포트릿", pos:"n", level:"B1", meanings:["초상화","인물화"],
    syn:["likeness of a person","painted figure","picture of a face"],
    ex:[{ s:"A {{}} of the founder hangs in the hall.", f:"portrait", ko:"설립자의 초상화가 회관에 걸려 있다." }] },

  /* 승격 85 — 사전 표현과 글자까지 같다(depict, D · describe, D).
     원본의 '묘사하다' 한 갈래보다 사전 쪽이 갈래가 둘이어서 낫다. */
  { word:"portray", pron:"포트레이", pos:"v", level:"B2", meanings:["묘사하다","그리다"],
    syn:["depict","represent in words","paint a picture of"],
    ex:[{ s:"The novel tries to {{}} village life.", f:"portray", ko:"그 소설은 마을 삶을 묘사하려 한다." }] },

  /* 원본의 '자세(포즈)를 취하다' 에서 외래어 괄호를 걷었다. */
  { word:"pose", pron:"포즈", pos:"v", level:"B1", meanings:["자세를 취하다"],
    syn:["strike an attitude","hold a stance","sit for a picture"],
    ex:[{ s:"The team lined up to {{}} for the camera.", f:"pose", ko:"그 팀은 사진기를 향해 자세를 취하려고 줄을 섰다." }] },

  /* 승격 86 — 사전이 '배치하다; 위치' 로 동사와 명사가 섞여 있었고 참조도 갈렸다 —
     deploy(D) 는 동사, location(L) 은 명사다. 원본 첫 뜻이 명사이고 수능에서도
     명사가 압도적이므로 명사로 세우고 deploy 쪽 유의어를 'put in place' 로
     바꿨다(words-d.js). */
  { word:"position", pron:"퍼지션", pos:"n", level:"B1", meanings:["위치","자리"],
    syn:["location","spot where a thing stands","place taken up"],
    ex:[{ s:"Mark the {{}} of each plant on the map.", f:"position", ko:"지도에 각 식물의 위치를 표시하세요." }] },

  /* 승격 87 — 사전이 '확신하는; 긍정적인' 이었다. 구분 기호만 쉼표로 바꿔 두 갈래를
     그대로 살렸다 — certain(C) 이 '확신하는' 을, affirmative(A) 가 '긍정적인' 을
     쓰기 때문이다. 원본은 '긍정적인' 한 갈래였다. */
  { word:"positive", pron:"파지티브", pos:"adj", level:"B1", meanings:["확신하는","긍정적인"],
    syn:["certain","sure beyond doubt","hopeful in outlook"], ant:["negative"],
    ex:[{ s:"I am {{}} that I locked the door.", f:"positive", ko:"나는 문을 잠갔다고 확신한다." }] },

  { word:"possess", pron:"퍼제스", pos:"v", level:"B1", meanings:["소유하다","지니다"],
    syn:["own","have as one's own","hold title to"],
    ex:[{ s:"Few families {{}} land here.", f:"possess", ko:"이곳에서 땅을 소유하는 가족은 드물다." }] },

  /* ── 챕터 10 ────────────────────────────────────── */
  /* 원본에서 이 챕터가 가장 심하게 물렸다 — 네 번이다.
       potential ↔ potentiality            ("잠재력")
       practicable ↔ practical ↔ pragmatic  ("실용적인" 3중)
     이렇게 갈라 0으로 줄였다.
       potential 잠재적인(adj) / potentiality 잠재력(n)      ← 품사로 갈랐다
       practicable 실행에 옮길 수 있는 / practical 실용적인 / pragmatic 현실적인
     'post-' 어근 넷(posterior·posterity·posthumous·postpone·postscript·postulate·
     posture) 도 함께 붙는다.                                                  */

  /* 승격 88 — 사전 표현과 글자까지 같다(발음이 없던 항목이다).
     원본은 '소유' 한 갈래였다. */
  { word:"possession", pron:"퍼제션", pos:"n", level:"B1", meanings:["소유","소유물"],
    syn:["ownership","thing owned","holding"],
    ex:[{ s:"The land came into his {{}} last year.", f:"possession", ko:"그 땅은 지난해 그의 소유가 되었다." }] },

  { word:"possessive", pron:"퍼제시브", pos:"adj", level:"B2", meanings:["소유욕이 강한","소유의"],
    syn:["unwilling to share","clinging","jealous of what one has"],
    ex:[{ s:"The child is {{}} about his toys.", f:"possessive", ko:"그 아이는 자기 장난감에 소유욕이 강하다." }] },

  { word:"possible", pron:"파서블", pos:"adj", level:"B1", meanings:["가능한","있음직한"],
    syn:["able to happen","within reach","that might be"], ant:["impossible"],
    ex:[{ s:"Is it {{}} to finish by Friday?", f:"possible", ko:"금요일까지 끝내는 것이 가능한가요?" }] },

  /* 승격 89 — 사전 표현과 글자까지 같다(anterior 반의어, A). */
  { word:"posterior", pron:"파스티리어", pos:"adj", level:"C2", meanings:["뒤쪽의"],
    syn:["at the back","hinder","rear-facing"], ant:["anterior"],
    ex:[{ s:"The {{}} wall was still standing.", f:"posterior", ko:"뒤쪽의 벽은 아직 서 있었다." }] },

  /* 원본은 '자손, 후세' 였다. '자손' 은 descendant(자손, D) 의 첫 뜻과 같아서
     '후세' 를 앞세웠다. */
  { word:"posterity", pron:"파스테러티", pos:"n", level:"C1", meanings:["후세","후손"],
    syn:["future generations","those who come after","coming ages"], ant:["forebears"],
    ex:[{ s:"The letters were kept for {{}}.", f:"posterity", ko:"그 편지들은 후세를 위해 보관되었다." }] },

  { word:"posthumous", pron:"파스추머스", pos:"adj", level:"C2", meanings:["죽은 뒤의","사후의"],
    syn:["after one's death","granted once dead","published after dying"],
    ex:[{ s:"He received a {{}} award.", f:"posthumous", ko:"그는 죽은 뒤의 상을 받았다." }] },

  /* 승격 90 — 사전 표현과 글자까지 같다(defer, D). 원본은 순서가 거꾸로였다 —
     '미루다' 를 앞세우면 챕터 14 의 procrastinate 와 부딪힌다. */
  { word:"postpone", pron:"포스트폰", pos:"v", level:"B1", meanings:["연기하다","미루다"],
    syn:["defer","put off to later","hold over"],
    ex:[{ s:"They had to {{}} the match.", f:"postpone", ko:"그들은 경기를 연기해야 했다." }] },

  /* 원본은 '(편지의) 추신, (책의) 발문, 후기' 로 괄호가 둘이고 갈래가 셋이었다.
     괄호를 걷고 두 갈래로 줄였다. */
  { word:"postscript", pron:"포스트스크립트", pos:"n", level:"C1", meanings:["추신","후기"],
    syn:["note added at the end","afterword","added remark"],
    ex:[{ s:"She added a short {{}} to the letter.", f:"postscript", ko:"그녀는 편지에 짧은 추신을 덧붙였다." }] },

  /* 승격 91 — 사전은 '상정하다' 한 갈래였다. 원본의 긴 괄호 설명과 "(=posit)" 표기를
     걷고 '가정하다' 를 붙였다. 첫 뜻은 사전값을 지켰다(hypothesize, H). */
  { word:"postulate", pron:"파스출레이트", pos:"v", level:"C2", meanings:["상정하다","가정하다"],
    syn:["hypothesize","take as given","set down as true"],
    ex:[{ s:"The theory must {{}} a starting force.", f:"postulate", ko:"그 이론은 출발이 되는 힘을 상정해야 한다." }] },

  { word:"posture", pron:"파스처", pos:"n", level:"B2", meanings:["자세","몸가짐"],
    syn:["way of holding the body","bearing","carriage"],
    ex:[{ s:"Good {{}} eases back pain.", f:"posture", ko:"좋은 자세는 허리 통증을 덜어 준다." }] },

  /* 승격 92 — 사전은 '강력한' 한 갈래였다. 그대로 두면 compelling(C)·mighty(M) 의
     첫 뜻과 같아지지만 mighty 는 참조 관계라 문제가 없다. 원본의 '효과적인' 을
     '효력이 센' 으로 다듬어 붙였다 — '힘센' 은 mighty 쪽 뜻이다. */
  { word:"potent", pron:"포턴트", pos:"adj", level:"C1", meanings:["강력한","효력이 센"],
    syn:["mighty","working powerfully","of great effect"], ant:["feeble"],
    ex:[{ s:"The drug is {{}} even in small doses.", f:"potent", ko:"그 약은 적은 양에도 강력하다." }] },

  /* 원본은 '잠재적인; 가능성, 잠재력' 으로 형용사와 명사가 섞여 있었다.
     참조가 없어 형용사로 세웠고, 명사 갈래는 바로 다음의 potentiality 가 담는다 —
     그래야 둘이 '잠재력' 으로 물리지 않는다. */
  { word:"potential", pron:"퍼텐셜", pos:"adj", level:"B1", meanings:["잠재적인","될 성이 있는"],
    syn:["possible in future","latent","waiting to develop"],
    ex:[{ s:"We found three {{}} buyers.", f:"potential", ko:"우리는 잠재적인 구매자 셋을 찾았다." }] },

  { word:"potentiality", pron:"퍼텐시앨러티", pos:"n", level:"C2", meanings:["잠재력","될 성"],
    syn:["hidden capacity","undeveloped power","what could come of it"],
    ex:[{ s:"The site has real {{}} for farming.", f:"potentiality", ko:"그 땅은 농사에 진짜 잠재력이 있다." }] },

  /* 원본은 '깊은 구멍, 둥근 웅덩이' 였다. 챕터 7 의 pit(구덩이, 움푹한 곳) 과
     물리지 않게 '움푹 팬 구멍' 한 갈래로 좁혔다. */
  { word:"pothole", pron:"팟홀", pos:"n", level:"B2", meanings:["움푹 팬 구멍"],
    syn:["hole in a road","sunken dip","worn-out hollow"],
    ex:[{ s:"The car hit a deep {{}}.", f:"pothole", ko:"그 차는 깊이 움푹 팬 구멍에 부딪혔다." }] },

  /* 승격 93 — 사전 표현과 글자까지 같다(ceramic, C). */
  { word:"pottery", pron:"파터리", pos:"n", level:"B2", meanings:["도자기","도기"],
    syn:["ceramic","fired clayware","earthenware"],
    ex:[{ s:"The museum shows Joseon {{}}.", f:"pottery", ko:"그 박물관은 조선 도자기를 보여 준다." }] },

  /* 원본은 '가금(닭, 오리 등), 가금류의 고기' 였다. 괄호를 걷었다. */
  { word:"poultry", pron:"포울트리", pos:"n", level:"B2", meanings:["가금","가금류 고기"],
    syn:["farm birds","fowl kept for food","chicken and duck meat"],
    ex:[{ s:"The farm raises {{}} for eggs.", f:"poultry", ko:"그 농장은 달걀을 얻으려 가금을 기른다." }] },

  /* 승격 94 — 사전 표현 '실행에 옮길 수 있는' 을 글자까지 지켰다(feasible, F).
     원본은 '실용적인, 실리적인' 이었는데 그러면 practical·pragmatic 과 3중으로
     물린다. 사전값이 마침 잘 갈라 주었다. */
  { word:"practicable", pron:"프랙티커블", pos:"adj", level:"C1", meanings:["실행에 옮길 수 있는"],
    syn:["feasible","able to be carried out","workable in practice"],
    ex:[{ s:"Is the plan {{}} on this budget?", f:"practicable", ko:"이 예산으로 그 계획이 실행에 옮길 수 있나요?" }] },

  /* 승격 95 — 사전은 '실용적인' 한 갈래였다. 원본의 '실제적인' 을 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(commonsense, C · functional, F · impractical 반의어, I
     — 세 곳). 원본의 '타당한' 갈래는 pertinent 쪽으로 넘겼다. */
  { word:"practical", pron:"프랙티컬", pos:"adj", level:"B1", meanings:["실용적인","실제적인"],
    syn:["functional","useful in real life","down-to-earth"], ant:["impractical"],
    ex:[{ s:"She gave some {{}} advice.", f:"practical", ko:"그녀는 몇 가지 실용적인 조언을 했다." }] },

  /* 원본은 '현실적인; 실용적인' 이었다. '실용적인' 은 practical 의 첫 뜻이라
     '실리를 따지는' 으로 갈랐다. */
  { word:"pragmatic", pron:"프래그매틱", pos:"adj", level:"C1", meanings:["현실적인","실리를 따지는"],
    syn:["dealing with facts not theory","matter-of-fact","result-minded"], ant:["idealistic"],
    ex:[{ s:"He took a {{}} view of the problem.", f:"pragmatic", ko:"그는 그 문제를 현실적인 시각으로 보았다." }] },

  { word:"pray", pron:"프레이", pos:"v", level:"B1", meanings:["기도하다"],
    /* 'call on God' 을 쓰려다 말았다 — GLOSS·PRON 조회가 toLowerCase() 로
       이뤄져서 대문자가 든 낱말은 키가 어긋나기 쉽다. */
    syn:["say a prayer","worship in words","offer up a plea"],
    ex:[{ s:"They knelt down to {{}}.", f:"pray", ko:"그들은 기도하려고 무릎을 꿇었다." }] },

  /* ── 챕터 11 ────────────────────────────────────── */
  /* 'pre-' 어근이 스무 자리 가운데 열아홉을 차지한다. 어근이 같으면 철자가
     닮아 선택지가 서로를 흐린다. 그래서 이 챕터는 뜻을 가르는 데 특히 공을
     들였다.

     ① 원본 오류 하나를 고쳤다 — predator 의 뜻 끝에 쉼표가 달려 있었다.
     ② 뒤 챕터를 내다보고 미리 갈라 둔 자리가 셋이다.
          precaution  예방책        ↔ 챕터 13 prevention 예방, 방지
                      레벨을 C1 으로 두어 B1 인 prevention 과 두 칸 벌렸다.
                      quizgen 은 레벨 차가 1을 넘으면 오답 후보에서 뺀다.
          precondition 선행 조건    ↔ 챕터 12 prerequisite 전제 조건
          prediction   예측         ↔ 챕터 16 prophecy 예언 (원본의 '예보' 는
                      forecast(F) 의 뜻과 통째로 같아 버렸다)
     ③ predator 의 반의어로 prey 를 썼다. prey 는 챕터 13 표제어라서 지금은
        사전에만 넣어 두고, 그때 승격시키며 사전에서 뺀다. */

  { word:"preach", pron:"프리치", pos:"v", level:"B2", meanings:["설교하다","전도하다"],
    syn:["give a sermon","spread the faith","hold forth on belief"],
    ex:[{ s:"The young monk began to {{}} in the square.", f:"preach", ko:"젊은 수도승이 광장에서 설교하기 시작했다." }] },

  /* 원본은 '예방책, 예방 조치' 로 같은 말을 두 번 적은 셈이었다. 둘째 갈래를
     '조심' 으로 바꿨다 — take precautions 의 그 뜻이다. */
  { word:"precaution", pron:"프리코션", pos:"n", level:"C1", meanings:["예방책","조심"],
    syn:["step taken in advance","care taken beforehand","guard against trouble"],
    ex:[{ s:"They took every {{}} against fire.", f:"precaution", ko:"그들은 화재에 대한 예방책을 모두 취했다." }] },

  { word:"precede", pron:"프리시드", pos:"v", level:"C1", meanings:["~보다 앞서다","먼저 오다"],
    syn:["come before","go ahead of","lead up to"], ant:["follow"],
    ex:[{ s:"A short speech will {{}} the meal.", f:"precede", ko:"짧은 연설이 식사보다 앞설 것이다." }] },

  /* 승격 96 — 사전 표현과 글자까지 같다(invaluable, I). */
  { word:"precious", pron:"프레셔스", pos:"adj", level:"B1", meanings:["소중한","귀중한"],
    syn:["of great worth","dear to one","treasured"], ant:["worthless"],
    ex:[{ s:"Water is {{}} in the desert.", f:"precious", ko:"사막에서 물은 소중하다." }] },

  { word:"precipitation", pron:"프리시피테이션", pos:"n", level:"C1", meanings:["강수량"],
    syn:["rain and snow","fallen moisture","water from the sky"],
    ex:[{ s:"Yearly {{}} has dropped since 2010.", f:"precipitation", ko:"연간 강수량은 2010년 이후 줄었다." }] },

  /* 승격 97 — 사전 표현과 글자까지 같다(accurate, A). */
  { word:"precise", pron:"프리사이스", pos:"adj", level:"B2", meanings:["정밀한","정확한"],
    syn:["exact","right to the detail","carefully stated"], ant:["vague"],
    ex:[{ s:"Give me the {{}} time of arrival.", f:"precise", ko:"도착 시각을 정확히 알려 주세요." }] },

  /* 승격 98 — 사전 표현과 글자까지 같다(clarity, C). */
  { word:"precision", pron:"프리시전", pos:"n", level:"C1", meanings:["정밀함","정확성"],
    syn:["exactness","fine accuracy","being right to the detail"],
    ex:[{ s:"The parts are cut with great {{}}.", f:"precision", ko:"그 부품들은 아주 정밀하게 절단된다." }] },

  /* 원본은 '미리 갖춰야 할 조건' 이었다. 챕터 12 의 prerequisite(전제 조건) 와
     갈라야 해서 '선행 조건' 으로 세웠다. */
  { word:"precondition", pron:"프리컨디션", pos:"n", level:"C1", meanings:["선행 조건"],
    syn:["what must come first","condition set in advance","thing required beforehand"],
    ex:[{ s:"Peace was a {{}} for the talks.", f:"precondition", ko:"평화가 그 회담의 선행 조건이었다." }] },

  /* 원본은 '~보다 먼저 있었다' 로 시제가 박힌 풀이였다. 뜻풀이는 시제를 담지
     않는 편이 낫다. 둘째 갈래를 바로 앞 precede 의 첫 뜻과 글자까지 같게 두어
     둘이 서로의 오답으로 뽑히지 않게 했다 — 뜻이 너무 가까워서다. */
  { word:"pre-date", pron:"프리데이트", pos:"v", level:"C1", meanings:["~보다 먼저 생기다","~보다 앞서다"],
    syn:["come earlier than","exist before","be older than"],
    ex:[{ s:"These walls {{}} the church itself.", f:"pre-date", ko:"이 벽들은 교회 자체보다 먼저 생겼다." }] },

  /* 원본은 '포식 동물, 약탈자,' 로 끝에 쉼표가 달려 있었다 — 고쳤다. */
  { word:"predator", pron:"프레더터", pos:"n", level:"B2", meanings:["포식 동물","약탈자"],
    syn:["hunting animal","beast of prey","one that preys"], ant:["prey"],
    ex:[{ s:"The wolf is the main {{}} here.", f:"predator", ko:"이곳의 주된 포식 동물은 늑대다." }] },

  /* 승격 99 — 사전 표현과 글자까지 같다(ancestor, A · antecedent, A — 두 곳). */
  { word:"predecessor", pron:"프레더세서", pos:"n", level:"C1", meanings:["전임자","이전 것"],
    syn:["one who came before","former holder of the post","earlier model"], ant:["successor"],
    ex:[{ s:"Her {{}} left the office in 2019.", f:"predecessor", ko:"그녀의 전임자는 2019년에 그 자리를 떠났다." }] },

  { word:"predetermine", pron:"프리디터민", pos:"v", level:"C2", meanings:["미리 결정하다"],
    syn:["settle in advance","fix beforehand","decide ahead of time"],
    ex:[{ s:"Genes do not {{}} everything.", f:"predetermine", ko:"유전자가 모든 것을 미리 결정하지는 않는다." }] },

  /* 승격 100 — 사전 표현과 글자까지 같다(foregone, F). foregone 의 첫 뜻도
     '미리 정해진' 이라 글자까지 같아지는데, 이 둘은 서로 유의어로 묶여 있고
     뜻도 겹치므로 quizgen 이 서로를 오답 후보에서 뺀다. */
  { word:"predetermined", pron:"프리디터민드", pos:"adj", level:"C2", meanings:["미리 정해진"],
    syn:["fixed beforehand","set in advance","decided already"],
    ex:[{ s:"The route was {{}} by the guide.", f:"predetermined", ko:"그 경로는 안내인이 미리 정해 둔 것이었다." }] },

  /* 승격 101 — 사전 표현과 글자까지 같다(anticipate, A · expect, E · foresee, F
     — 세 곳). 원본도 한 갈래여서 그대로 지켰다. */
  { word:"predict", pron:"프리딕트", pos:"v", level:"B1", meanings:["예측하다"],
    syn:["foretell","say what will come","call the outcome"],
    ex:[{ s:"No one can {{}} the market.", f:"predict", ko:"아무도 시장을 예측할 수 없다." }] },

  /* 승격 102 — 사전은 '예측' 한 갈래였다. 원본의 '예측, 예보' 를 그대로 쓰면
     forecast(예측, 예보 · F) 와 글자까지 통째로 같아진다. 사전값을 지켰다. */
  { word:"prediction", pron:"프리딕션", pos:"n", level:"B2", meanings:["예측"],
    syn:["forecast","what one expects to happen","guess about the future"],
    ex:[{ s:"His {{}} turned out to be right.", f:"prediction", ko:"그의 예측은 옳았던 것으로 드러났다." }] },

  /* 원본은 '성향, 경향' 으로 inclination(경향, 성향 · I) 과 글자만 순서가 다른
     꼴이었다. 첫 뜻을 '성향' 한 낱말로 두어 inclination 과 글자까지 같게 맞췄다
     — 그러면 quizgen 이 둘을 서로의 오답에서 뺀다. 둘째 갈래로는 이 낱말의
     고유한 쓰임(병에 걸리기 쉬운 체질)을 세웠다. */
  { word:"predisposition", pron:"프리디스퍼지션", pos:"n", level:"C2", meanings:["성향","걸리기 쉬운 성질"],
    syn:["inborn tendency","leaning one is born with","proneness"],
    ex:[{ s:"She has a {{}} to allergies.", f:"predisposition", ko:"그녀는 알레르기에 걸리기 쉬운 성질이 있다." }] },

  /* 승격 103 — 사전 표현과 글자까지 같다(dominant, D). */
  { word:"predominant", pron:"프리다머넌트", pos:"adj", level:"C1", meanings:["두드러진","우세한"],
    syn:["main","most noticeable","holding the upper hand"], ant:["secondary"],
    ex:[{ s:"Rice is the {{}} crop in this region.", f:"predominant", ko:"쌀은 이 지역에서 두드러진 작물이다." }] },

  { word:"pre-existing", pron:"프리이그지스팅", pos:"adj", level:"C1", meanings:["이전부터 있던"],
    syn:["there from before","already in place","present beforehand"],
    ex:[{ s:"The insurer asked about {{}} illness.", f:"pre-existing", ko:"보험사는 이전부터 있던 병을 물었다." }] },

  { word:"preface", pron:"프레피스", pos:"n", level:"B2", meanings:["서문","머리말"],
    syn:["foreword","opening words","note at the front"],
    ex:[{ s:"The author thanks her editor in the {{}}.", f:"preface", ko:"지은이는 서문에서 편집자에게 고마움을 전한다." }] },

  /* 승격 104 — 사전 표현과 글자까지 같다(desirable, D). */
  { word:"preferable", pron:"프리퍼러블", pos:"adj", level:"B2", meanings:["더 나은","선호되는"],
    syn:["better to choose","more to be wished","worth picking first"],
    ex:[{ s:"Walking is {{}} to driving here.", f:"preferable", ko:"이곳에서는 걷는 것이 운전보다 더 낫다." }] },

  /* ── 챕터 12 ────────────────────────────────────── */
  /* 이 챕터에는 손이 많이 가는 자리가 둘 있었다.

     ① present — 사전에 '제시하다; 현재의' 로 품사가 섞여 있었고, 참조가 둘인데
        서로 다른 갈래를 쓰고 있었다.
             display(syn, D) → 제시하다 (동사)
             absent(ant, 기본 세트) → 출석한 (형용사)
        원본도 '제시하다, 주다' 로 동사다. 그래서 동사로 세우고, 어긋난 쪽인
        absent 의 반의어를 in attendance 로 고쳤다 (words.js). 사전에만 있던
        동안에도 absent 의 반의어가 '제시하다; 현재의' 로 떠서 이미 틀려 있던
        자리다 — 이번에 바로잡았다.
     ② 사전값이 한 갈래뿐이라 그대로 지킨 자리가 둘이다. 둘째 갈래를 붙여도
        첫 갈래와 같은 말을 되풀이하는 셈이어서 화면을 건드릴 값이 없었다.
             prejudice 편견   (원본 '편견, 선입견')
             premium   최고급의 (원본과 같고, high-end 의 '최고가인' 과 겹친다)

     prerequisite(전제 조건) 는 챕터 11 의 precondition(선행 조건) 과 이미
     갈라 두었다. prerogative(고유 권한) 는 authority(권한, 당국 · B2) 와
     레벨을 두 칸 벌려(C2) 오답 후보에서 빠지게 했다. */

  { word:"preference", pron:"프레퍼런스", pos:"n", level:"B2", meanings:["선호","애호"],
    syn:["what one likes better","liking for one over another","choice made by taste"],
    ex:[{ s:"Do you have a {{}} for tea or coffee?", f:"preference", ko:"차와 커피 가운데 선호가 있으신가요?" }] },

  { word:"prefix", pron:"프리픽스", pos:"n", level:"B2", meanings:["접두사"],
    syn:["letters put in front","word part at the start","front element"], ant:["suffix"],
    ex:[{ s:"Add the {{}} 'un-' to the word.", f:"prefix", ko:"그 낱말에 접두사 'un-' 을 붙여라." }] },

  { word:"pregnancy", pron:"프레그넌시", pos:"n", level:"B2", meanings:["임신"],
    syn:["being with child","carrying a baby","months before birth"],
    ex:[{ s:"She kept working through her {{}}.", f:"pregnancy", ko:"그녀는 임신 기간에도 계속 일했다." }] },

  { word:"prehistoric", pron:"프리히스토릭", pos:"adj", level:"B2", meanings:["선사 시대의"],
    syn:["before written records","of the earliest ages","from long before history"],
    ex:[{ s:"The cave holds {{}} paintings.", f:"prehistoric", ko:"그 굴에는 선사 시대의 그림이 있다." }] },

  /* 승격 105 — 사전은 '편견' 한 갈래였다. 원본의 '선입견' 은 '편견' 과 같은 말을
     되풀이하는 셈이라 붙이지 않았다 (discrimination, D · intolerance, I — 두 곳의
     화면이 그대로 남는다). */
  { word:"prejudice", pron:"프레저디스", pos:"n", level:"B2", meanings:["편견"],
    syn:["unfair view held in advance","bias against others","settled dislike"],
    ex:[{ s:"The report found {{}} in the hiring panel.", f:"prejudice", ko:"그 보고서는 채용 심사단에 편견이 있음을 밝혔다." }] },

  /* 승격 106 — 사전 표현과 글자까지 같다(initial, I). */
  { word:"preliminary", pron:"프릴리머네리", pos:"adj", level:"B2", meanings:["예비의","사전의"],
    syn:["coming first","done to prepare","ahead of the main part"],
    ex:[{ s:"The {{}} results look promising.", f:"preliminary", ko:"예비 결과는 기대할 만해 보인다." }] },

  /* 원본은 '서곡, 전주곡' 으로 같은 말이 두 번이었다. 둘째를 '전조' 로 바꿨다 —
     a prelude to war 의 그 뜻이다. */
  { word:"prelude", pron:"프렐류드", pos:"n", level:"C1", meanings:["서곡","전조"],
    syn:["opening piece","music at the start","sign of what follows"],
    ex:[{ s:"The talks were a {{}} to peace.", f:"prelude", ko:"그 회담은 평화의 전조였다." }] },

  /* 승격 107 — 사전 표현과 글자까지 같다(발음이 없던 항목이다). */
  { word:"premature", pron:"프리머추어", pos:"adj", level:"B2", meanings:["시기상조의","조숙한"],
    syn:["too early","before the right time","born before term"],
    ex:[{ s:"The move proved {{}}.", f:"premature", ko:"그 조치는 시기상조로 드러났다." }] },

  /* 승격 108 — 사전 표현과 글자까지 같다(assumption, A · hypothesis, H — 두 곳). */
  { word:"premise", pron:"프레미스", pos:"n", level:"B2", meanings:["전제","가정"],
    syn:["assumption","starting belief","what an argument rests on"],
    ex:[{ s:"His argument starts from a shaky {{}}.", f:"premise", ko:"그의 주장은 허술한 전제에서 출발한다." }] },

  /* 승격 109 — 사전 표현과 글자까지 같다(high-end, H). 원본도 '최고급의' 한
     갈래다. high-end 의 둘째 뜻 '최고가인' 과 겹치지만 첫 뜻이 서로 같아
     quizgen 이 둘을 오답 후보에서 뺀다. 명사 갈래(할증금, 보험료)는 버렸다 —
     참조가 쓰는 갈래를 남기는 것이 이 세트의 규칙이다. */
  { word:"premium", pron:"프리미엄", pos:"adj", level:"B2", meanings:["최고급의"],
    syn:["top-grade","of the best kind","costing more for quality"], ant:["low-grade"],
    ex:[{ s:"They sell {{}} coffee beans.", f:"premium", ko:"그들은 최고급 커피콩을 판다." }] },

  /* 승격 110 — 사전 표현과 글자까지 같다(absorbed, A). */
  { word:"preoccupied", pron:"프리아큐파이드", pos:"adj", level:"B2", meanings:["몰두한","정신이 팔린"],
    syn:["lost in thought","taken up with one thing","absorbed"],
    ex:[{ s:"He was too {{}} to notice us.", f:"preoccupied", ko:"그는 너무 몰두해서 우리를 알아보지 못했다." }] },

  { word:"preprint", pron:"프리프린트", pos:"n", level:"C2", meanings:["견본 인쇄","사전 배포본"],
    syn:["copy printed early","paper shared before publication","advance copy"],
    ex:[{ s:"The study circulated as a {{}}.", f:"preprint", ko:"그 연구는 사전 배포본으로 돌았다." }] },

  /* 승격 111 — 사전 표현과 글자까지 같다(발음이 없던 항목이다).
     챕터 11 의 precondition 은 '선행 조건' 으로 갈라 두었다. */
  { word:"prerequisite", pron:"프리레커지트", pos:"n", level:"C1", meanings:["전제 조건"],
    syn:["required beforehand","needed first of all","course one must take first"],
    ex:[{ s:"Trust is a {{}} for teamwork.", f:"prerequisite", ko:"신뢰는 협업의 전제 조건이다." }] },

  /* authority(권한, 당국 · n · B2) 와 뜻이 가깝다. 레벨을 C2 로 두어 두 칸
     벌렸다 — quizgen 은 레벨 차가 1을 넘으면 오답 후보에서 뺀다.
     '특권' 은 챕터 14 privilege 몫으로 남기고 '특혜' 를 썼다. */
  { word:"prerogative", pron:"프리라거티브", pos:"n", level:"C2", meanings:["고유 권한","특혜"],
    syn:["right held by one alone","special power of office","privilege of rank"],
    ex:[{ s:"Naming the ship is the captain's {{}}.", f:"prerogative", ko:"배에 이름을 붙이는 것은 선장의 고유 권한이다." }] },

  /* 승격 112 — 사전은 '처방하다; 규정하다' 로 쌍반점을 쓰고 있었다. 뜻을 두
     갈래로 나눠 담으면서 쉼표로 바뀐다 — dictate(D) 한 곳의 구두점이 달라진다. */
  { word:"prescribe", pron:"프리스크라이브", pos:"v", level:"B2", meanings:["처방하다","규정하다"],
    syn:["order as treatment","lay down as a rule","write out a remedy"],
    ex:[{ s:"The doctor will {{}} something for the pain.", f:"prescribe", ko:"의사가 통증에 쓸 것을 처방해 줄 것이다." }] },

  { word:"prescription", pron:"프리스크립션", pos:"n", level:"B2", meanings:["처방전","처방약"],
    syn:["doctor's written order","paper for medicine","medicine so ordered"],
    ex:[{ s:"Take this {{}} to the pharmacy.", f:"prescription", ko:"이 처방전을 약국에 가져가세요." }] },

  { word:"preselected", pron:"프리셀렉티드", pos:"adj", level:"C1", meanings:["미리 골라 둔"],
    syn:["chosen in advance","picked beforehand","settled on earlier"],
    ex:[{ s:"The winners were {{}} by the panel.", f:"preselected", ko:"수상자들은 심사단이 미리 골라 두었다." }] },

  /* 승격 113 — 사전 표현과 글자까지 같다(attendance, A). 둘째 뜻 '존재' 는
     existence(존재 · E) 와 글자까지 같아 서로 오답에서 빠진다. */
  { word:"presence", pron:"프레즌스", pos:"n", level:"B2", meanings:["출석","존재"],
    syn:["attendance","being there","the fact of being on the spot"], ant:["absence"],
    ex:[{ s:"Her {{}} at the meeting was noted.", f:"presence", ko:"그녀의 회의 출석이 기록되었다." }] },

  /* 승격 114 — 사전은 '제시하다; 현재의' 로 품사가 섞여 있었다. 원본과 참조
     display(D) 를 따라 동사로 세웠다. 어긋나 있던 absent 의 반의어는
     in attendance 로 고쳤다 (words.js). */
  { word:"present", pron:"프리젠트", pos:"v", level:"B2", meanings:["제시하다","주다"],
    syn:["put forward","hand over","offer for notice"],
    ex:[{ s:"She will {{}} the findings tomorrow.", f:"present", ko:"그녀는 내일 그 결과를 제시할 것이다." }] },

  { word:"presentation", pron:"프레즌테이션", pos:"n", level:"B2", meanings:["발표","제시"],
    syn:["talk given to an audience","showing of one's work","act of putting forward"],
    ex:[{ s:"Her {{}} lasted twenty minutes.", f:"presentation", ko:"그녀의 발표는 20분 동안 이어졌다." }] },

  /* ── 챕터 13 ────────────────────────────────────── */
  /* 승격이 열셋으로 한 챕터 최다다. 사전에 품사가 섞인 항목이 넷이나 있었다.
       preserve  보존하다; 보호 구역  → 보존하다, 보호하다 (동사로 세웠다)
       pressure  압력; 압박하다       → 압력, 압박         (명사로 세웠다)
       prevail   만연하다; 이기다     → 만연하다, 이기다   (둘 다 동사였다)
       primary   주요한; 초등의       → 주요한, 최초의
     preserve 는 참조가 다섯 곳(adapt·alter·annihilate·decompose 의 반의어,
     conserve 의 유의어)이라 이 차수에서 화면이 가장 많이 바뀐 자리다. 쌍반점이
     쉼표로 바뀌고 '보호 구역'(명사) 이 '보호하다'(동사) 로 제자리를 찾는다.

     prevail 세 갈래를 이렇게 갈랐다 — 원본은 prevailing 과 prevalent 이
     '우세한/널리 퍼진' 으로 서로 스몄다.
       prevail    만연하다, 이기다          (동사)
       prevailing 우세한, 지배적인          ← dominant(D) 와 글자가 같아 서로
                                             오답에서 빠진다
       prevalent  널리 퍼진, 흔한           ← pervasive(만연한 · 챕터 6) 를
                                             유의어로 걸어 오답에서 빠지게 했다
     prevention 은 레벨을 B1 으로 두었다 — 챕터 11 의 precaution(예방책 · C1) 과
     두 칸 벌려야 서로 오답 후보에서 빠진다. */

  /* 승격 115 — 사전은 '보존하다; 보호 구역' 으로 품사가 섞여 있었다. 원본과
     참조 다섯 곳이 모두 동사 쪽이라 동사로 세웠다. */
  { word:"preserve", pron:"프리저브", pos:"v", level:"B1", meanings:["보존하다","보호하다"],
    syn:["conserve","keep from harm","keep as it is"],
    ex:[{ s:"The town works to {{}} its old walls.", f:"preserve", ko:"그 고을은 오래된 성벽을 보존하려 애쓴다." }] },

  { word:"pressing", pron:"프레싱", pos:"adj", level:"C1", meanings:["긴급한","절박한"],
    syn:["needing action now","not able to wait","calling for haste"],
    ex:[{ s:"We have a {{}} problem to solve.", f:"pressing", ko:"우리에게는 풀어야 할 긴급한 문제가 있다." }] },

  /* 승격 116 — 사전은 '압력; 압박하다' 로 명사와 동사가 섞여 있었다. 참조가
     없어 원본대로 명사로 세웠다. */
  { word:"pressure", pron:"프레셔", pos:"n", level:"B1", meanings:["압력","압박"],
    syn:["force pushing down","weight of demands","strain put on one"],
    ex:[{ s:"The {{}} in the pipe rose fast.", f:"pressure", ko:"관 속의 압력이 빠르게 올랐다." }] },

  { word:"prestige", pron:"프레스티지", pos:"n", level:"C1", meanings:["위신","명망"],
    syn:["standing in others' eyes","high repute","name that draws respect"],
    ex:[{ s:"The award added to her {{}}.", f:"prestige", ko:"그 상은 그녀의 위신을 더해 주었다." }] },

  /* 승격 117 — 사전은 '명성 있는' 한 갈래였고 참조가 없어 '이름난' 을 붙였다. */
  { word:"prestigious", pron:"프레스티저스", pos:"adj", level:"B2", meanings:["명성 있는","이름난"],
    syn:["held in high regard","carrying honor","widely respected"],
    ex:[{ s:"She won a {{}} scholarship.", f:"prestigious", ko:"그녀는 명성 있는 장학금을 받았다." }] },

  /* 승격 118 — 사전 표현과 글자까지 같다(assume, A). 첫 뜻 '추정하다' 는
     assume·estimate(E) 와, 둘째 '가정하다' 는 챕터 10 postulate 와 글자가 같아
     세 낱말 모두 서로의 오답에서 빠진다. */
  { word:"presume", pron:"프리줌", pos:"v", level:"B2", meanings:["추정하다","가정하다"],
    syn:["assume","take for granted","suppose to be so"],
    ex:[{ s:"I {{}} you have read the notice.", f:"presume", ko:"공지를 읽으셨으리라 추정합니다." }] },

  { word:"pretty", pron:"프리티", pos:"adv", level:"B1", meanings:["꽤","상당히"],
    /* 형용사 '예쁜' 이 아니라 부사 갈래다 — 원본이 고른 쪽이고, 수능에서도
       pretty hard 꼴로 더 자주 나온다. */
    syn:["to a good degree","more than a little","somewhat more than usual"],
    ex:[{ s:"The test was {{}} hard.", f:"pretty", ko:"그 시험은 꽤 어려웠다." }] },

  /* 승격 119 — 사전은 '만연하다; 이기다' 로 쌍반점을 쓰고 있었다. 둘 다 동사라
     갈래만 쉼표로 갈랐다. 참조는 없다. */
  { word:"prevail", pron:"프리베일", pos:"v", level:"C1", meanings:["만연하다","이기다"],
    syn:["be widespread","win out in the end","hold sway"],
    ex:[{ s:"Calm will {{}} once the news sinks in.", f:"prevail", ko:"소식이 가라앉으면 평온이 이길 것이다." }] },

  /* 승격 120 — 사전은 '우세한, 널리 퍼진' 이었다. '널리 퍼진' 은 바로 아래
     prevalent 의 첫 뜻이라 '지배적인' 으로 바꿨다. dominant(지배적인, 우세한 · D)
     와 글자가 통째로 같아지지만 둘은 서로 유의어이자 뜻이 겹쳐 오답에서 빠진다.
     dominant 한 곳의 화면이 바뀐다. */
  { word:"prevailing", pron:"프리베일링", pos:"adj", level:"C1", meanings:["우세한","지배적인"],
    syn:["dominant","most common at the time","holding sway"],
    ex:[{ s:"The {{}} wind comes from the west.", f:"prevailing", ko:"우세한 바람은 서쪽에서 온다." }] },

  /* 승격 121 — 사전은 '널리 퍼진, 유행하는' 이었다. 참조가 없어 원본의
     '널리 퍼진, 흔한' 을 썼다. pervasive(만연한, 스며드는 · 챕터 6) 와 뜻이
     너무 가까워 유의어로 걸었다 — quizgen 은 유의어를 오답 후보에서 뺀다. */
  { word:"prevalent", pron:"프레벌런트", pos:"adj", level:"C1", meanings:["널리 퍼진","흔한"],
    syn:["pervasive","found far and wide","met with often"],
    ex:[{ s:"The habit is {{}} among students.", f:"prevalent", ko:"그 습관은 학생들 사이에 널리 퍼져 있다." }] },

  /* 승격 122 — 사전 표현과 글자까지 같다(avert, A · bring about 반의어, B). */
  { word:"prevent", pron:"프리벤트", pos:"v", level:"B1", meanings:["방지하다","막다"],
    syn:["keep from happening","head off","stop in advance"], ant:["bring about"],
    ex:[{ s:"Simple steps can {{}} most fires.", f:"prevent", ko:"간단한 조치로 대부분의 화재를 방지할 수 있다." }] },

  /* 레벨을 B1 으로 두었다 — 챕터 11 의 precaution(예방책 · C1) 과 두 칸 벌려야
     서로 오답 후보에서 빠진다. */
  { word:"prevention", pron:"프리벤션", pos:"n", level:"B1", meanings:["예방","방지"],
    syn:["keeping it from happening","act of heading off","stopping before it starts"],
    ex:[{ s:"Fire {{}} saves lives.", f:"prevention", ko:"화재 예방은 목숨을 구한다." }] },

  { word:"preview", pron:"프리뷰", pos:"n", level:"B2", meanings:["예고편","시사회"],
    syn:["showing beforehand","advance look","clip shown ahead"],
    ex:[{ s:"The {{}} runs for two minutes.", f:"preview", ko:"그 예고편은 2분 동안 나온다." }] },

  /* 승격 123 — 사전 표현과 글자까지 같다(former, F). 첫 뜻 '앞의' 는 챕터 14 의
     prior(앞의, 사전의) 와 글자가 같아 서로 오답에서 빠진다. */
  { word:"previous", pron:"프리비어스", pos:"adj", level:"B1", meanings:["앞의","먼저의"],
    syn:["former","coming before","earlier in order"],
    ex:[{ s:"See the {{}} page for details.", f:"previous", ko:"자세한 내용은 앞의 면을 보라." }] },

  /* 승격 124 — 챕터 11 에서 predator 의 반의어로 쓰려고 사전에 넣어 둔 항목이다.
     이제 표제어로 올리고 사전에서 뺐다. 값은 '먹이' 그대로여서 predator 의
     화면은 바뀌지 않는다. 이번에는 거꾸로 predator 를 prey 의 반의어로 걸었다. */
  { word:"prey", pron:"프레이", pos:"n", level:"B2", meanings:["먹이"],
    syn:["hunted animal","what a hunter eats","quarry"], ant:["predator"],
    ex:[{ s:"The hawk spotted its {{}}.", f:"prey", ko:"그 매는 먹이를 발견했다." }] },

  /* 승격 125 — 사전 표현과 글자까지 같다(invaluable, I). invaluable 의 둘째 뜻과
     글자가 같아 서로 오답에서 빠진다. */
  { word:"priceless", pron:"프라이스리스", pos:"adj", level:"B2", meanings:["값을 헤아릴 수 없는"],
    syn:["beyond price","worth more than money","too rare to price"],
    ex:[{ s:"The vase is {{}}.", f:"priceless", ko:"그 꽃병은 값을 헤아릴 수 없다." }] },

  /* '신부' 는 bride(신부) 와 글자가 같다 — 한자가 다른 동음이의어다(神父/新婦).
     글자가 같으니 quizgen 이 둘을 서로의 오답에서 빼 준다. */
  { word:"priest", pron:"프리스트", pos:"n", level:"B2", meanings:["사제","신부"],
    syn:["one who leads worship","holy office holder","man of the cloth"],
    ex:[{ s:"The {{}} blessed the crowd.", f:"priest", ko:"그 사제는 군중을 축복했다." }] },

  /* 승격 126 — 사전은 '주요한; 초등의' 였다. 원본의 '주요한, 최초의' 를 썼다.
     '주요한' 은 foremost(F)·챕터 14 principal 과, '최초의' 는 initial(I) 과
     글자가 같아 넷이 서로의 오답에서 빠진다. 참조는 없다. */
  { word:"primary", pron:"프라이머리", pos:"adj", level:"B1", meanings:["주요한","최초의"],
    syn:["first in rank","most important of all","coming at the start"],
    ex:[{ s:"Safety is our {{}} concern.", f:"primary", ko:"안전이 우리의 주요한 관심사다." }] },

  { word:"primate", pron:"프라이메이트", pos:"n", level:"C1", meanings:["영장류"],
    syn:["ape or monkey","hand-using mammal","member of the highest mammal order"],
    ex:[{ s:"The {{}} uses tools to crack nuts.", f:"primate", ko:"그 영장류는 도구로 열매를 깬다." }] },

  /* 승격 127 — 사전은 '원시적인' 한 갈래였다. 원본의 '원시의' 는 같은 말을
     되풀이하는 셈이라 붙이지 않았다. */
  { word:"primitive", pron:"프리머티브", pos:"adj", level:"B2", meanings:["원시적인"],
    syn:["of early times","rough and simple","not yet developed"],
    ex:[{ s:"They used {{}} tools.", f:"primitive", ko:"그들은 원시적인 도구를 썼다." }] },

  /* ── 챕터 14 ────────────────────────────────────── */
  /* 이 챕터가 P 세트에서 가장 무겁다 — 스무 자리 가운데 열여섯이 승격이고,
     사전에 품사가 섞인 항목이 넷이나 된다.

     ★ 원본에서 두 낱말의 뜻이 서로 뒤바뀌어 있던 자리를 바로잡았다.
          product     생산(수단)  → 제품, 산물
          production  생산물      → 생산, 생산량
       product 는 '만들어진 것', production 은 '만드는 일' 이다. 원본은 이 둘을
       거꾸로 적었다. 사전값이 마침 옳은 쪽이어서 글자까지 그대로 지켰고,
       그래서 commodity·creation·consumption 세 곳의 화면은 바뀌지 않는다.

     ★ 다른 세트의 유의어 자리 셋을 손질했다. 여기 오르는 낱말이 그 자리에서
       엉뚱한 뜻으로 뜨기 때문이다.
          dean(D)    syn head·principal → head of a college · one leading a faculty
          inquiry(I) syn probe          → search for facts

     품사가 섞여 있던 사전 항목 넷.
          principal 주요한; 교장      → 주요한, 으뜸의   (형용사로 세웠다)
          private   사적인; 민간의    → 사적인, 민간의   (쌍반점만 걷었다)
          probe     조사하다; 탐침    → 조사하다, 캐다   (동사로 세웠다)
          process   과정; 처리하다    → 과정, 경과       (명사로 세웠다) */

  /* 승격 128 — 사전은 '주요한; 교장' 으로 형용사와 명사가 섞여 있었다. 참조 셋 가운데
     둘(cardinal, C · foremost, F)이 형용사를 쓰고 하나(dean, D)가 명사를 썼다.
     원본이 형용사여서 형용사로 세우고 dean 쪽을 고쳤다.
     '주요한' 은 primary(챕터 13)·foremost 와, '으뜸의' 는 paramount(챕터 2) 와
     글자가 같아 넷이 서로의 오답에서 빠진다. */
  { word:"principal", pron:"프린서펄", pos:"adj", level:"B2", meanings:["주요한","으뜸의"],
    syn:["main in rank","first in importance","greatest in weight"],
    ex:[{ s:"Cost was the {{}} reason for the delay.", f:"principal", ko:"비용이 그 지연의 주요한 이유였다." }] },

  /* 승격 129 — 사전 표현과 글자까지 같다(conscience, C). principal 과 발음이
     같은 낱말이다 — 그래서 둘을 나란히 세워 두었다. */
  { word:"principle", pron:"프린서펄", pos:"n", level:"B1", meanings:["원칙","원리"],
    syn:["rule one lives by","basic truth","standard of conduct"],
    ex:[{ s:"He refused on {{}}.", f:"principle", ko:"그는 원칙에 따라 거절했다." }] },

  /* 첫 뜻 '앞의' 는 챕터 13 previous 와 글자가 같아 서로 오답에서 빠진다. */
  { word:"prior", pron:"프라이어", pos:"adj", level:"B2", meanings:["앞의","사전의"],
    syn:["earlier than this","coming ahead in time","done beforehand"],
    ex:[{ s:"No {{}} notice was given.", f:"prior", ko:"사전의 통보는 없었다." }] },

  /* 승격 130 — 사전은 '우선 사항' 한 갈래였고 참조가 없어 '우선순위' 를 붙였다. */
  { word:"priority", pron:"프라이오러티", pos:"n", level:"B1", meanings:["우선 사항","우선순위"],
    syn:["what comes first","matter to handle first","order of importance"],
    ex:[{ s:"Safety is our top {{}}.", f:"priority", ko:"안전이 우리의 가장 높은 우선 사항이다." }] },

  /* 승격 131 — 사전은 '사적인; 민간의' 로 쌍반점을 쓰고 있었다. 둘 다 형용사라
     갈래만 쉼표로 갈랐다 (civic 반의어, C · confidential 유의어, C — 두 곳의
     구두점이 달라진다). */
  { word:"private", pron:"프라이빗", pos:"adj", level:"B1", meanings:["사적인","민간의"],
    syn:["confidential","not open to all","one's own"], ant:["public"],
    ex:[{ s:"This is a {{}} matter.", f:"private", ko:"이것은 사적인 일이다." }] },

  /* 승격 132 — 사전은 '특권' 한 갈래였다. '명예' 는 it is a privilege to ~ 의
     그 뜻이라 갈래가 달라 붙였다 (duty 반의어, D 한 곳이 바뀐다).
     레벨을 B2 로 두어 챕터 12 prerogative(고유 권한 · C2) 와 두 칸 벌렸다. */
  { word:"privilege", pron:"프리벌리지", pos:"n", level:"B2", meanings:["특권","명예"],
    syn:["special right","favor granted to few","honor given"], ant:["duty"],
    ex:[{ s:"Free parking is a {{}} here.", f:"privilege", ko:"이곳에서 무료 주차는 특권이다." }] },

  { word:"probability", pron:"프라버빌러티", pos:"n", level:"B2", meanings:["확률","개연성"],
    syn:["odds","chance of happening","how likely it is"],
    ex:[{ s:"The {{}} of rain is low.", f:"probability", ko:"비가 올 확률은 낮다." }] },

  /* 승격 133 — 사전 표현과 글자까지 같다(likely, L). */
  { word:"probable", pron:"프라버블", pos:"adj", level:"B2", meanings:["있을 법한"],
    syn:["likely","to be expected","more than possible"],
    ex:[{ s:"A {{}} cause was the heat.", f:"probable", ko:"있을 법한 원인은 더위였다." }] },

  /* 승격 134 — 사전은 '조사하다; 탐침' 으로 동사와 명사가 섞여 있었다. 참조 둘
     가운데 investigate(I) 가 동사를 쓰고 inquiry(I) 가 명사를 썼다. 원본이
     동사여서 동사로 세우고 inquiry 쪽을 고쳤다. '조사하다' 는 examine(E)·
     investigate 와 글자가 같아 셋이 서로의 오답에서 빠진다. */
  { word:"probe", pron:"프로브", pos:"v", level:"C1", meanings:["조사하다","캐다"],
    syn:["investigate","look into closely","dig for facts"],
    ex:[{ s:"Reporters began to {{}} the deal.", f:"probe", ko:"기자들이 그 거래를 조사하기 시작했다." }] },

  /* 승격 135 — 사전은 '절차' 한 갈래였다. 갈래가 다른 '순서' 를 붙였다
     (method 유의어, M 한 곳이 바뀐다). */
  { word:"procedure", pron:"프러시저", pos:"n", level:"B1", meanings:["절차","순서"],
    syn:["set way of doing","steps to follow","course of action"],
    ex:[{ s:"Follow the safety {{}}.", f:"procedure", ko:"안전 절차를 따르라." }] },

  /* 승격 136 — 사전은 '과정; 처리하다' 로 명사와 동사가 섞여 있었다. 참조가
     없어 원본대로 명사로 세웠다. */
  { word:"process", pron:"프라세스", pos:"n", level:"B1", meanings:["과정","경과"],
    syn:["series of steps","way things go along","course of change"],
    ex:[{ s:"Learning is a slow {{}}.", f:"process", ko:"배움은 느린 과정이다." }] },

  /* 승격 137 — 사전 표현과 글자까지 같다(announce, A · declare, D — 두 곳).
     '선언하다' 는 declare 의 첫 뜻과 같지만 둘은 서로 유의어라 오답에서 빠진다. */
  { word:"proclaim", pron:"프러클레임", pos:"v", level:"C1", meanings:["선언하다","공포하다"],
    syn:["declare","announce openly","make known to all"],
    ex:[{ s:"The king will {{}} a holiday.", f:"proclaim", ko:"왕이 휴일을 선언할 것이다." }] },

  /* 챕터 10 의 postpone(연기하다, 미루다) 과 '미루다' 로 글자가 같다 — 그래서
     서로의 오답에서 빠진다. postpone 의 갈래 순서를 그때 되돌려 둔 이유다. */
  { word:"procrastinate", pron:"프러크래스티네이트", pos:"v", level:"C1", meanings:["늑장 부리다","미루다"],
    syn:["put off doing","drag one's feet","delay without reason"],
    ex:[{ s:"Students often {{}} before exams.", f:"procrastinate", ko:"학생들은 시험 앞두고 흔히 늑장 부린다." }] },

  /* 승격 138 — 사전은 '생산하다' 한 갈래였고 참조가 넷(bring about·generate·
     manufacture 유의어, consume 반의어) 이다. 원본의 '만들어 내다' 는 generate 의
     첫 뜻과 글자까지 같아 붙이지 않았다 — 네 곳의 화면이 그대로 남는다. */
  { word:"produce", pron:"프러두스", pos:"v", level:"B1", meanings:["생산하다"],
    syn:["generate","manufacture","bring into being"],
    ex:[{ s:"The farm can {{}} enough rice.", f:"produce", ko:"그 농장은 쌀을 넉넉히 생산할 수 있다." }] },

  /* 승격 139 — ★ 원본이 production 과 뜻을 맞바꿔 적어 둔 자리다. 원본은
     '생산(수단)' 이었는데 그것은 production 쪽 뜻이다. product 는 '만들어진 것' 이다.
     사전값이 옳은 쪽이어서 글자까지 지켰다 (commodity·creation, C — 두 곳 보존). */
  { word:"product", pron:"프라덕트", pos:"n", level:"B1", meanings:["제품","산물"],
    syn:["goods","thing made for sale","what comes out of work"],
    ex:[{ s:"The new {{}} sells well.", f:"product", ko:"그 새 제품은 잘 팔린다." }] },

  /* 승격 140 — ★ 원본이 product 와 뜻을 맞바꿔 적어 둔 자리다. 원본은 '생산물'
     이었는데 그것은 product 쪽 뜻이다. production 은 '만드는 일' 이다.
     사전값이 옳은 쪽이어서 글자까지 지켰다 (consumption, C 한 곳 보존).
     '생산량' 은 output(생산량, 산출 · B2) 과 글자가 같아 둘이 서로 오답에서 빠진다. */
  { word:"production", pron:"프러덕션", pos:"n", level:"B1", meanings:["생산","생산량"],
    syn:["output","act of making","amount turned out"], ant:["consumption"],
    ex:[{ s:"Steel {{}} fell last year.", f:"production", ko:"철강 생산이 지난해 줄었다." }] },

  /* 승격 141 — 사전 표현과 글자까지 같다(efficiency, E). */
  { word:"productivity", pron:"프로덕티버티", pos:"n", level:"B2", meanings:["생산성"],
    syn:["rate of output","how much is produced","working efficiency"],
    ex:[{ s:"New tools raised {{}}.", f:"productivity", ko:"새 도구가 생산성을 높였다." }] },

  /* 승격 142 — 사전 표현과 글자까지 같다(career, C). '직업' 은 occupation(직업,
     점령 · O) 과 글자가 같아 둘이 서로 오답에서 빠진다. */
  { word:"profession", pron:"프러페션", pos:"n", level:"B1", meanings:["직업","전문직"],
    syn:["occupation","line of work","calling that needs training"],
    ex:[{ s:"Teaching is a respected {{}}.", f:"profession", ko:"교직은 존중받는 직업이다." }] },

  { word:"professional", pron:"프러페셔널", pos:"adj", level:"B1", meanings:["전문적인","전문가의"],
    syn:["done for a living","trained and skilled","of an expert"], ant:["amateur"],
    ex:[{ s:"She gave {{}} advice.", f:"professional", ko:"그녀는 전문적인 조언을 해 주었다." }] },

  /* 승격 143 — 사전 표현과 글자까지 같다(competence, C). '능숙함' 은 competence 의
     첫 뜻과 같지만 둘은 서로 유의어라 오답에서 빠진다. */
  { word:"proficiency", pron:"프러피션시", pos:"n", level:"C1", meanings:["숙달","능숙함"],
    syn:["competence","skill from practice","being good at it"],
    ex:[{ s:"He showed great {{}} in Korean.", f:"proficiency", ko:"그는 한국어에 큰 숙달을 보였다." }] },

  /* ── 챕터 15 ────────────────────────────────────── */
  /* 챕터 14 에 이어 또 승격이 열여섯이다. 이번에는 쌍반점으로 두 갈래를 적어 둔
     사전 항목이 여섯이었다 — 그 가운데 prompt 만 품사가 갈렸다.

     ★ 다른 세트의 유의어 자리 셋을 손질했다.
          cue(C)     syn prompt   → reminder to act
          induce(I)  syn prompt   → spur into action
            prompt 을 형용사(즉각적인) 로 세우면 '신호'(명사)와 '설득하다'(동사)
            자리에 형용사 뜻이 뜬다. 사전값은 '즉각적인; 촉구하다' 였다.
          account(기본) syn profile → user identity
            profile 을 '약력, 인물 소개' 로 세우면 '계좌, 계정' 의 유의어가
            '약력' 이 되어 버린다. 그 자리가 노린 것은 계정 쪽 뜻이었다.

     ★ 외래어를 걷었다.
          profile   프로필, 약력  → 약력, 인물 소개
          promoter  (프로모터 를 쓰지 않고) 기획자, 옹호자

     사전값이 한 갈래여서 그대로 지킨 자리가 넷이다. 원본의 둘째 갈래가 이미
     다른 표제어의 뜻과 글자까지 같거나 첫 갈래를 되풀이하는 셈이었다.
          proficient 능숙한   (원본 '잘하는' — adept 와 첫 뜻이 같다)
          prohibit   금지하다 (원본 '못하게 하다' 는 forbid 의 둘째 뜻과 똑같다)
          prolong    오래 끌다 (원본 '연장하다' 는 extend 의 둘째 뜻)
          propel     나아가게 하다 (원본 '추진하다' 는 impel 의 첫 뜻) */

  /* 승격 144 — 사전은 '능숙한' 한 갈래였다(adept, A · competent, C — 두 곳). */
  { word:"proficient", pron:"프러피션트", pos:"adj", level:"B2", meanings:["능숙한"],
    syn:["adept","good at a skill","having a sure hand"],
    ex:[{ s:"She is {{}} in three languages.", f:"proficient", ko:"그녀는 세 언어에 능숙하다." }] },

  /* 승격 145 — 사전은 '프로필, 약력' 로 외래어가 앞에 있었다. 원본의
     '약력, 인물 소개' 로 세웠다 (account 는 뜻이 맞지 않아 손질했고,
     biography, B 한 곳은 뜻이 잘 맞아 그대로 둔다). */
  { word:"profile", pron:"프로파일", pos:"n", level:"B2", meanings:["약력","인물 소개"],
    syn:["short life account","sketch of a person","outline of one's career"],
    ex:[{ s:"The magazine ran a {{}} of the mayor.", f:"profile", ko:"그 잡지는 시장의 약력을 실었다." }] },

  /* 승격 146 — 사전은 '수익성 있는' 한 갈래였다. '유익한' 은 돈이 아닌 쪽 갈래라
     붙였다 (commercial, C 한 곳이 바뀐다). beneficial·fruitful·instructive 의
     '유익한' 과 글자가 같아 넷이 서로의 오답에서 빠진다. */
  { word:"profitable", pron:"프라피터블", pos:"adj", level:"B2", meanings:["수익성 있는","유익한"],
    syn:["bringing in money","paying well","worth the effort"],
    ex:[{ s:"The shop is finally {{}}.", f:"profitable", ko:"그 가게는 마침내 수익성이 있다." }] },

  /* 승격 147 — 사전은 '심오한; 깊은' 으로 쌍반점을 쓰고 있었다. 둘 다 형용사라
     갈래만 쉼표로 갈랐다. 참조는 없다. */
  { word:"profound", pron:"프러파운드", pos:"adj", level:"C1", meanings:["심오한","깊은"],
    syn:["very deep in meaning","far-reaching","going to the bottom of things"],
    ex:[{ s:"The book had a {{}} effect on me.", f:"profound", ko:"그 책은 내게 심오한 영향을 주었다." }] },

  /* 승격 148 — 사전은 '점차 진행되는' 한 갈래였다. liberal(후한, 진보적인 · L) 이
     이 낱말을 '진보적인' 뜻으로 참조하고 있어서 그 갈래를 붙였다 — 글자가 같아
     둘은 서로의 오답에서 빠진다 (gradual, G · liberal 두 곳이 바뀐다). */
  { word:"progressive", pron:"프로그레시브", pos:"adj", level:"B2", meanings:["점차 진행되는","진보적인"],
    syn:["gradual","step by step","open to reform"],
    ex:[{ s:"The illness is slow and {{}}.", f:"progressive", ko:"그 병은 느리고 점차 진행된다." }] },

  /* 승격 149 — 사전은 '금지하다' 한 갈래였다. 원본의 '못하게 하다' 는 forbid(F) 의
     둘째 뜻과 글자까지 같아 붙이지 않았다 (ban, B · forbid 두 곳 보존). */
  { word:"prohibit", pron:"프러히빗", pos:"v", level:"B2", meanings:["금지하다"],
    syn:["ban","forbid","rule out by law"],
    ex:[{ s:"The law will {{}} smoking here.", f:"prohibit", ko:"그 법은 이곳에서 흡연을 금지할 것이다." }] },

  { word:"proliferation", pron:"프러리퍼레이션", pos:"n", level:"C1", meanings:["급증","확산"],
    syn:["rapid rise in number","spreading wide","fast growth"],
    ex:[{ s:"The {{}} of small shops changed the street.", f:"proliferation", ko:"작은 가게의 급증이 그 거리를 바꿨다." }] },

  /* 승격 150 — 사전은 '오래 끌다' 한 갈래였다. 원본의 '연장하다' 는 extend(E) 의
     둘째 뜻과 글자까지 같아 붙이지 않았다 — extend 한 곳이 그대로 남는다. */
  { word:"prolong", pron:"프럴롱", pos:"v", level:"B2", meanings:["오래 끌다"],
    syn:["extend","drag out","make last longer"],
    ex:[{ s:"Do not {{}} the meeting.", f:"prolong", ko:"회의를 오래 끌지 마라." }] },

  /* 승격 151 — 사전은 '저명한; 두드러진' 으로 쌍반점을 쓰고 있었다. 둘 다 형용사라
     갈래만 쉼표로 갈랐다 (conspicuous, C 한 곳의 구두점이 달라진다).
     '저명한' 은 distinguished(D)·eminent(E)·celebrated 와, '두드러진' 은
     챕터 11 predominant·conspicuous·outstanding 과 글자가 같다. */
  { word:"prominent", pron:"프라머넌트", pos:"adj", level:"B2", meanings:["저명한","두드러진"],
    syn:["well known","standing out","in the public eye"],
    ex:[{ s:"He is a {{}} scholar.", f:"prominent", ko:"그는 저명한 학자다." }] },

  /* 승격 152 — 사전은 '촉진하다; 승진시키다' 로 쌍반점을 쓰고 있었다. 둘 다
     동사라 갈래만 쉼표로 갈랐다 (advertise, A · elevate, E — 두 곳). */
  { word:"promote", pron:"프러모트", pos:"v", level:"B2", meanings:["촉진하다","승진시키다"],
    syn:["help along","push forward","raise to a higher post"],
    ex:[{ s:"The campaign will {{}} healthy eating.", f:"promote", ko:"그 운동은 건강한 식생활을 촉진할 것이다." }] },

  /* 외래어 '프로모터' 를 쓰지 않고 '기획자, 옹호자' 로 세웠다. */
  { word:"promoter", pron:"프러모터", pos:"n", level:"C1", meanings:["기획자","옹호자"],
    syn:["one who puts on an event","backer of a cause","person pushing a plan"],
    ex:[{ s:"The {{}} booked the hall.", f:"promoter", ko:"그 기획자가 공연장을 예약했다." }] },

  /* 승격 153 — 사전은 '즉각적인; 촉구하다' 로 형용사와 동사가 섞여 있었다.
     참조 넷 가운데 둘(belated 반의어, B · immediate 유의어, I)이 형용사를,
     둘(cue, C · induce, I)이 동사를 쓰고 있었다. 원본이 형용사여서 형용사로
     세우고 cue·induce 쪽을 고쳤다. '즉각적인' 은 immediate 의 첫 뜻과 같지만
     둘은 서로 유의어라 오답에서 빠진다. */
  { word:"prompt", pron:"프람프트", pos:"adj", level:"B2", meanings:["즉각적인"],
    syn:["immediate","done at once","quick to act"], ant:["belated"],
    ex:[{ s:"Thank you for your {{}} reply.", f:"prompt", ko:"즉각적인 답신에 감사드립니다." }] },

  /* 승격 154 — 사전 표현과 글자까지 같다(evidence, E). */
  { word:"proof", pron:"프루프", pos:"n", level:"B2", meanings:["증명","입증"],
    syn:["evidence","what shows it is true","grounds beyond doubt"],
    ex:[{ s:"There is no {{}} of his claim.", f:"proof", ko:"그의 주장에 대한 증명은 없다." }] },

  /* 승격 155 — 사전 표현과 글자까지 같다(발음이 없던 항목이다).
     '선전' 은 advertisement(광고, 선전) 와 글자가 같아 둘이 서로 오답에서 빠진다. */
  { word:"propaganda", pron:"프라퍼갠더", pos:"n", level:"C1", meanings:["선전","홍보"],
    syn:["one-sided message","spread to sway people","words to win support"],
    ex:[{ s:"Wartime {{}} filled the papers.", f:"propaganda", ko:"전시의 선전이 신문을 채웠다." }] },

  /* 승격 156 — 사전은 '나아가게 하다' 한 갈래였다. 원본의 '추진하다' 는 impel(I) 의
     첫 뜻과 글자까지 같아 붙이지 않았다 — impel 한 곳이 그대로 남는다. */
  { word:"propel", pron:"프러펠", pos:"v", level:"C1", meanings:["나아가게 하다"],
    syn:["impel","drive forward","send ahead"],
    ex:[{ s:"Steam can {{}} a ship.", f:"propel", ko:"증기는 배를 나아가게 할 수 있다." }] },

  /* 승격 157 — 사전은 '적절한; 올바른' 으로 쌍반점을 쓰고 있었다. 참조가 다섯 곳
     (appropriate·correct·decent·formal 유의어, improper 반의어) 이라 이 차수에서
     화면이 가장 많이 바뀌는 자리다 — 구두점만 달라진다. */
  { word:"proper", pron:"프라퍼", pos:"adj", level:"B1", meanings:["적절한","올바른"],
    syn:["appropriate","right for the case","as it should be"], ant:["improper"],
    ex:[{ s:"Wear {{}} shoes for the hike.", f:"proper", ko:"산행에는 적절한 신을 신어라." }] },

  /* 승격 158 — 사전은 '재산; 특성' 으로 쌍반점을 쓰고 있었다. 둘 다 명사라 갈래만
     쉼표로 갈랐다 (estate, E 한 곳). '재산' 은 estate 의 둘째 뜻과, '특성' 은
     characteristic 의 첫 뜻과 글자가 같다. */
  { word:"property", pron:"프라퍼티", pos:"n", level:"B1", meanings:["재산","특성"],
    syn:["estate","what one owns","trait of a thing"],
    ex:[{ s:"The {{}} was sold last year.", f:"property", ko:"그 재산은 지난해 팔렸다." }] },

  /* 챕터 11 에서 prediction 에게 넘기지 않고 남겨 둔 '예언' 이 이 자리다. */
  { word:"prophecy", pron:"프라퍼시", pos:"n", level:"C1", meanings:["예언"],
    syn:["foretelling","words about what will come","prediction of fate"],
    ex:[{ s:"The old {{}} came true.", f:"prophecy", ko:"그 오래된 예언이 이루어졌다." }] },

  /* 승격 159 — 사전 표현과 글자까지 같다(발음이 없던 항목이다). '비율' 은
     percentage(백분율, 비율) 와 글자가 같아 둘이 서로 오답에서 빠진다. */
  { word:"proportion", pron:"프러포션", pos:"n", level:"B2", meanings:["비율","비례"],
    syn:["share of the whole","relation in size","part measured against all"],
    ex:[{ s:"A large {{}} of the class passed.", f:"proportion", ko:"그 학급의 큰 비율이 통과했다." }] },

  { word:"proposition", pron:"프라퍼지션", pos:"n", level:"C1", meanings:["제안","진술"],
    syn:["offer put forward","statement to be judged","plan laid out"],
    ex:[{ s:"They turned down his {{}}.", f:"proposition", ko:"그들은 그의 제안을 거절했다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "a joy to have": "누리기에 기쁜",
  "able to be carried out": "해낼 수 있는",
  "able to happen": "일어날 수 있는",
  "above all others": "다른 무엇보다 위인",
  "academic article": "학술 글",
  "across the whole planet": "지구 전체에 걸친",
  "act of heading off": "미리 가로막는 일",
  "act of making": "만드는 일",
  "act of putting forward": "내놓는 일",
  "added remark": "덧붙인 말",
  "advance copy": "앞서 내주는 판",
  "advance look": "앞서 보는 것",
  "after one's death": "죽은 다음의",
  "agreeable to do": "하기에 좋은",
  "ahead of the main part": "본격적인 것 앞의",
  "alike in form": "꼴이 비슷한",
  "already in place": "이미 갖춰져 있는",
  "amount turned out": "만들어 낸 양",
  "angle of view": "보는 각도",
  "angle one sees from": "보는 쪽의 각도",
  "announce openly": "드러내어 알리다",
  "ape or monkey": "유인원이나 원숭이",
  "arousing pity": "안타깝게 하는",
  "art of instruction": "가르치는 기술",
  "art of the camera": "사진기의 예술",
  "as it should be": "마땅히 그래야 하는",
  "ashen": "핏기 없는",
  "at regular intervals": "일정한 사이를 두고",
  "at the back": "뒤에 있는",
  "backer of a cause": "뜻하는 일을 밀어 주는 이",
  "bad fix": "난처한 처지",
  "basic truth": "바탕이 되는 참",
  "be a party to": "~에 한편으로 끼다",
  "be destroyed": "무너져 없어지다",
  "be older than": "~보다 오래되다",
  "be widespread": "널리 퍼져 있다",
  "bearing on the matter": "그 일과 맞닿은",
  "beast of prey": "육식 맹수",
  "become aware of": "~을 알아차리게 되다",
  "before the right time": "때가 되기 전의",
  "before written records": "글로 남기기 전의",
  "beg earnestly": "간절히 빌다",
  "being a father": "아버지라는 처지",
  "being good at it": "잘하게 됨",
  "being right to the detail": "세부까지 맞음",
  "being there": "그 자리에 있음",
  "being well liked": "사랑받는 상태",
  "being with child": "아이를 가진 상태",
  "believable": "믿을 만한",
  "bequeath": "물려주다",
  "better to choose": "고르기에 더 나은",
  "bias against others": "남을 향한 치우침",
  "blind alarm": "앞뒤 없는 놀람",
  "block of text": "글의 한 덩이",
  "bloom leaf": "꽃을 이루는 잎",
  "body damp": "몸의 습기",
  "born before term": "달이 차기 전에 난",
  "break into a sweat": "땀이 나기 시작하다",
  "breathe hard": "숨을 거칠게 쉬다",
  "brief halt": "잠깐의 멈춤",
  "bringing in money": "돈을 벌어 주는",
  "buff up": "문질러 반들거리게 하다",
  "bygone days": "지나간 날들",
  "call attention to": "~을 짚어 알리다",
  "call on someone": "누군가를 찾아가다",
  "call the outcome": "결과를 짚어 말하다",
  "calling for haste": "서둘러야 하는",
  "calling that needs training": "익혀야 할 것이 있는 일",
  "camera work": "사진기를 다루는 일",
  "cape-like landmass": "곶처럼 뻗은 땅덩이",
  "care taken beforehand": "미리 들이는 주의",
  "carefully stated": "꼼꼼히 밝힌",
  "carriage": "몸가짐새",
  "carry forward to others": "남들에게 이어 주다",
  "carry off spoils": "빼앗은 것을 들고 가다",
  "carry on without end": "그침 없이 이어 가다",
  "carry pollen to": "~에 꽃가루를 옮기다",
  "carrying a baby": "배 속에 아기를 지님",
  "carrying honor": "명예가 따르는",
  "carrying out of a task": "맡은 일을 해냄",
  "carrying weight": "무게가 실린",
  "chance of happening": "일어날 가망",
  "chemical for killing pests": "해충을 죽이는 약품",
  "chemist's shop": "약 파는 가게",
  "chest illness": "가슴에 생긴 병",
  "chicken and duck meat": "닭과 오리 고기",
  "child health specialist": "아이 건강 전문가",
  "children's doctor": "아이를 보는 의사",
  "choice made by taste": "취향에 따른 고름",
  "chosen in advance": "미리 뽑힌",
  "church leader": "교회의 지도자",
  "circle graph": "동그란 그래프",
  "clinging": "붙잡고 놓지 않는",
  "clip shown ahead": "앞서 내보이는 조각",
  "close likeness": "가까운 닮음",
  "come before": "앞에 오다",
  "come earlier than": "~보다 이르게 오다",
  "coming ages": "앞으로 올 시대",
  "coming ahead in time": "때가 앞서 오는",
  "coming at the start": "맨 처음에 오는",
  "coming back each year": "해마다 다시 오는",
  "coming before": "앞서 오는",
  "coming first": "먼저 오는",
  "coming from parents": "어버이에게서 나온",
  "condition set in advance": "미리 정해 둔 조건",
  "congressional": "국회에 관한",
  "contribute to": "~에 이바지하다",
  "copy printed early": "미리 찍어 낸 것",
  "costing more for quality": "질 때문에 값이 더 나가는",
  "count of votes": "표를 셈",
  "country laborer": "시골 일꾼",
  "course of action": "나아갈 방향",
  "course of change": "변해 가는 흐름",
  "course one must take first": "먼저 들어야 하는 과목",
  "cover with stone": "돌로 덮다",
  "covering only some": "일부만 아우르는",
  "crop spray": "작물에 뿌리는 약",
  "crude oil": "정제하지 않은 기름",
  "dealing with facts not theory": "이론보다 사실을 다루는",
  "dear to one": "마음에 아끼는",
  "decide ahead of time": "때가 오기 전에 정하다",
  "decided already": "이미 정해진",
  "deep hole": "깊은 구멍",
  "deep-seated horror": "뿌리 깊은 무서움",
  "deeply religious": "신앙이 깊은",
  "delay without reason": "까닭 없이 늦추다",
  "devout": "믿음이 굳은",
  "die out": "차츰 사라지다",
  "dig for facts": "사실을 캐내다",
  "direct between users": "쓰는 이들 사이를 바로 잇는",
  "dirtying agent": "오염을 일으키는 것",
  "dive headlong": "곤두박이로 뛰어들다",
  "doctor for infants": "갓난아이를 보는 의사",
  "doctor of medicine": "의학을 다루는 의사",
  "doctor's written order": "의사가 적어 준 지시",
  "dogged effort": "질기게 들이는 노력",
  "done at once": "곧바로 이뤄지는",
  "done beforehand": "미리 해 둔",
  "done for a living": "먹고살려고 하는",
  "done to prepare": "준비로 하는",
  "done with great care": "아주 조심스레 한",
  "down-to-earth": "발이 땅에 붙은",
  "drag one's feet": "발을 끌며 늑장 부리다",
  "drag out": "질질 끌다",
  "drained of color": "빛깔이 빠진",
  "dramatist": "희곡 작가",
  "draw attention to": "~에 눈길을 끌다",
  "dread of something": "무엇을 몹시 두려워함",
  "drive forward": "앞으로 밀다",
  "drop in on": "~에 들르다",
  "drop steeply": "급하게 떨어지다",
  "drug-making": "약을 만드는",
  "drugstore": "약방",
  "dummy pill": "약 성분이 없는 알약",
  "duplicate sheet": "똑같이 떠낸 장",
  "dust with pollen": "꽃가루를 묻히다",
  "earlier in order": "차례가 앞선",
  "earlier model": "앞서 나온 것",
  "earlier than this": "이보다 이른",
  "earth-wide": "지구 전역의",
  "easy to grasp": "알아듣기 쉬운",
  "end of the earth's axis": "지구 축의 끝",
  "equal in standing": "처지가 대등한 이",
  "ethnic groups": "여러 종족 집단",
  "every so often": "이따금씩",
  "exactness": "어긋남 없음",
  "excerpt from a text": "글에서 따온 대목",
  "exclusive right to an invention": "발명에 대한 독점 권리",
  "exist before": "앞서 있다",
  "expecting the worst": "가장 나쁜 쪽을 내다보는",
  "factory building": "공장 건물",
  "fallen moisture": "떨어진 물기",
  "far northern or southern point": "멀리 북쪽이나 남쪽 끝",
  "far-fetched": "억지스러운",
  "farm birds": "농장에서 기르는 새",
  "fast growth": "빠른 자람",
  "fatherhood": "아버지 됨",
  "favor granted to few": "몇몇에게만 주는 혜택",
  "fearing the worst": "가장 나쁜 일을 겁내는",
  "feeding on another": "남을 먹고 사는",
  "final reward": "끝에 받는 보답",
  "fine accuracy": "결 고운 정확함",
  "fired clayware": "구워 낸 흙그릇",
  "first in importance": "중요함에서 첫째인",
  "first in rank": "자리가 으뜸인",
  "first to go in": "맨 먼저 들어간 이",
  "five-cornered shape": "모가 다섯인 꼴",
  "five-sided figure": "다섯 변을 가진 도형",
  "fix beforehand": "미리 굳혀 두다",
  "fix with adhesive": "접착제로 고정하다",
  "fixed beforehand": "미리 굳혀 둔",
  "flat of the hand": "손의 평평한 면",
  "flower blade": "꽃의 얇은 잎",
  "flower dust": "꽃의 가루",
  "force pushing down": "내리누르는 힘",
  "forebears": "앞선 조상",
  "foretell": "앞일을 미리 알리다",
  "foretelling": "앞일을 미리 말함",
  "foreword": "책 앞에 붙인 글",
  "formal request to authority": "관청에 내는 정식 요청",
  "former holder of the post": "앞서 그 자리를 맡은 이",
  "former times": "옛 시절",
  "foul up": "더럽게 만들다",
  "fouling substance": "더럽히는 물질",
  "found everywhere": "어디서나 보이는",
  "found far and wide": "멀리까지 보이는",
  "fowl kept for food": "먹으려 기르는 새",
  "framework of thought": "생각의 뼈대",
  "freeloader": "공짜로 얻어먹는 이",
  "frolicsome": "뛰놀기 좋아하는",
  "from long before history": "역사보다 훨씬 앞선",
  "from time to time in a cycle": "돌아가며 때때로",
  "front element": "앞에 오는 요소",
  "full of feeling": "감정이 가득한",
  "full of fun": "재미가 가득한",
  "future generations": "다음 세대들",
  "gateway": "드나드는 문",
  "germane": "들어맞는",
  "get involved in": "~에 발을 담그다",
  "give a sermon": "설교를 하다",
  "give a soft touch": "부드럽게 손을 대다",
  "give no peace to": "~을 가만두지 않다",
  "give off moisture": "물기를 내보내다",
  "give one's word": "약속을 하다",
  "given to play": "놀이에 잘 빠지는",
  "giving enjoyment": "즐거움을 주는",
  "glad at heart": "마음이 흐뭇한",
  "global in reach": "미치는 범위가 전 세계인",
  "global outbreak": "지구 규모의 발생",
  "gloomy outlook": "어두운 시각",
  "go ahead of": "~보다 앞서 가다",
  "go to see": "보러 가다",
  "going along with": "그대로 따라가는",
  "going to the bottom of things": "밑바닥까지 파고드는",
  "good at a skill": "솜씨가 좋은",
  "good at winning people over": "사람을 잘 돌려세우는",
  "grand doorway": "큼직한 문간",
  "granted once dead": "죽은 뒤에 주어진",
  "grasp of the senses": "감각으로 붙잡음",
  "grassy field": "풀이 자란 들",
  "grave danger": "엄중한 위태로움",
  "grazing land": "풀 뜯기는 땅",
  "greatest in weight": "무게가 가장 큰",
  "grounds beyond doubt": "의심할 수 없는 근거",
  "group of sentences": "문장 묶음",
  "guard against trouble": "화를 막을 대비",
  "guess about the future": "앞일에 대한 짐작",
  "hand on to the next": "다음 사람에게 넘기다",
  "hand-using mammal": "손을 쓰는 젖먹이동물",
  "handing over of money": "돈을 건넴",
  "harry without let-up": "쉼 없이 괴롭히다",
  "hasty glance": "서둘러 본 것",
  "hatch a scheme": "꾀를 꾸미다",
  "have a hand in": "~에 손을 대다",
  "have a part in": "~에 한몫 있다",
  "have as one's own": "자기 것으로 두다",
  "having a sure hand": "손끝이 여문",
  "having two opposite poles": "맞선 두 극을 가짐",
  "hawk goods": "물건을 외치며 팔다",
  "head of a college": "대학의 우두머리",
  "head off": "미리 가로막다",
  "heap": "쌓아 올린 것",
  "heathen": "이교의",
  "held in high regard": "높이 받들어지는",
  "help along": "되어 가도록 돕다",
  "help shape": "꼴을 잡는 데 힘이 되다",
  "helping": "한 사람 몫",
  "hidden capacity": "숨은 그릇",
  "high repute": "높은 평판",
  "highest point": "가장 높은 지점",
  "highness of a sound": "소리가 높은 정도",
  "hold a stance": "자세를 유지하다",
  "hold forth on belief": "신앙을 두고 늘어놓다",
  "hold over": "다음으로 넘기다",
  "hold sway": "세력을 떨치다",
  "hold title to": "~의 권리를 갖다",
  "holding sway": "세력을 떨치는",
  "holding the upper hand": "윗자리를 쥔",
  "hole in a road": "길에 난 구멍",
  "hollow in the ground": "땅의 움푹한 곳",
  "hollow of the hand": "손의 오목한 곳",
  "holy office holder": "거룩한 직을 맡은 이",
  "holy traveler": "거룩한 길을 가는 이",
  "honor given": "주어진 영광",
  "hopeful in outlook": "앞을 밝게 보는",
  "hound for beliefs": "믿음 때문에 몰아세우다",
  "hound without let-up": "쉼 없이 몰아대다",
  "house of lawmakers": "입법자들의 모임",
  "how likely it is": "얼마나 그럴듯한지",
  "how much is produced": "얼마나 만들어지는지",
  "human-resources office": "사람을 맡아 보는 부서",
  "hunted animal": "사냥당하는 짐승",
  "hunting animal": "사냥하는 짐승",
  "hush money": "입막음 돈",
  "idol-worshipping": "우상을 섬기는",
  "in attendance": "자리에 나온",
  "in the public eye": "뭇 사람의 눈에 든",
  "inactive treatment": "효과 없는 처치",
  "inborn nature": "타고난 바탕",
  "inborn tendency": "타고난 경향",
  "incomplete": "온전하지 않은",
  "inflamed lungs": "염증이 생긴 허파",
  "inner hand": "손의 안쪽",
  "insurance contract": "보험 계약서",
  "invention statute": "발명 관련 법령",
  "irreverent": "경건하지 않은",
  "it may be that": "~일 수도 있다",
  "jab at": "~을 쿡 찌르다",
  "jealous of what one has": "가진 것을 지키려는",
  "join in": "끼어 들다",
  "join in with others": "남들과 어울려 하다",
  "journal": "학술지",
  "keep as it is": "있는 그대로 두다",
  "keep from happening": "일어나지 않게 하다",
  "keep from harm": "다치지 않게 지키다",
  "keep going for ever": "끝없이 이어 가다",
  "keep on regardless": "아랑곳없이 이어 가다",
  "keeping it from happening": "일어나지 않게 함",
  "land jutting into the sea": "바다로 튀어나온 땅",
  "lasting for good": "영영 이어지는",
  "lasting many years": "여러 해를 버티는",
  "law on inventions": "발명에 관한 법",
  "lawmaking": "법을 만드는",
  "lay down as a rule": "규칙으로 정해 두다",
  "lay paving on": "~에 포장재를 깔다",
  "lead the way": "앞장서 나아가다",
  "lead up to": "~로 이어지며 앞서다",
  "leaf of a flower": "꽃의 잎",
  "leaning one is born with": "나면서 지닌 쏠림",
  "legislative body": "법을 만드는 기구",
  "letters put in front": "앞에 붙는 글자",
  "likeness of a person": "사람을 닮게 그린 것",
  "liking for one over another": "하나를 더 좋아함",
  "living growth": "살아서 자라는 것",
  "living on a host": "숙주에 붙어 사는",
  "look into closely": "자세히 들여다보다",
  "looking on the dark side": "어두운 쪽만 보는",
  "lost in thought": "생각에 빠진",
  "love of knowledge": "앎을 사랑함",
  "low-grade": "질이 낮은",
  "loyal to one party": "한 정당에만 충성하는",
  "lung infection": "허파에 생긴 감염",
  "machine copy": "기계로 뜬 사본",
  "made to be moved": "옮기도록 만든",
  "made-up road": "다져 만든 길",
  "magazine issued regularly": "때맞춰 나오는 잡지",
  "main idea": "중심 생각",
  "main in rank": "등급이 첫째인",
  "mainstay": "버팀목",
  "make a hole in": "~에 구멍을 내다",
  "make impure": "깨끗하지 않게 하다",
  "make it one's own": "제 것으로 만들다",
  "make known to all": "모두에게 알리다",
  "make last endlessly": "끝없이 가게 만들다",
  "make last longer": "더 오래가게 하다",
  "make powerless": "힘을 못 쓰게 하다",
  "make-up of a person": "사람을 이루는 바탕",
  "male plant cells": "식물의 수컷 세포",
  "man of the cloth": "성직에 있는 사람",
  "material rather than mental": "마음이 아니라 물질의",
  "matter to handle first": "먼저 다뤄야 할 일",
  "matter-of-fact": "있는 대로 따지는",
  "maybe": "어쩌면",
  "medical practitioner": "의료를 하는 사람",
  "medicine so ordered": "그렇게 지시된 약",
  "medicine-related": "의약에 얽힌",
  "member of an activity": "활동의 구성원",
  "member of the highest mammal order": "젖먹이동물 가운데 으뜸 갈래",
  "met with often": "자주 마주치는",
  "mineral oil": "광물에서 얻은 기름",
  "minister of a church": "교회를 맡은 이",
  "minute fragment": "몹시 작은 부스러기",
  "mocking imitation": "비웃으며 흉내 냄",
  "model case": "본보기가 되는 사례",
  "moisture from the skin": "살갗에서 나는 물기",
  "money forfeit": "물어야 하는 돈",
  "money paid after work ends": "일을 그친 뒤 받는 돈",
  "monthly pay": "달마다 받는 돈",
  "months before birth": "낳기 전의 달들",
  "morbid fear": "병적인 두려움",
  "more than a little": "적잖이",
  "more than one": "하나보다 많은",
  "more than possible": "가능한 정도를 넘는",
  "more to be wished": "더 바랄 만한",
  "most common at the time": "그때 가장 흔한",
  "most important of all": "무엇보다 중요한",
  "most noticeable": "가장 눈에 띄는",
  "motherly and fatherly": "어머니 아버지의",
  "moving to pity": "안타깝게 만드는",
  "mull over": "곱씹어 생각하다",
  "music at the start": "맨 앞에 나오는 음악",
  "name that draws respect": "존중을 끌어오는 이름",
  "nations": "여러 나라",
  "neck of land": "좁고 긴 땅",
  "needed first of all": "무엇보다 먼저 있어야 하는",
  "needing action now": "지금 손써야 하는",
  "never wearing off": "가시지 않는",
  "never-ending": "끝날 줄 모르는",
  "non-surgical doctor": "수술을 하지 않는 의사",
  "not able to wait": "기다릴 수 없는",
  "not acting": "나서지 않는",
  "not open to all": "누구에게나 열려 있지 않은",
  "not single": "하나가 아닌",
  "not what it claims": "내세우는 것과 다른",
  "not yet developed": "아직 발달하지 않은",
  "note added at the end": "끝에 덧붙인 글",
  "note at the front": "앞머리에 붙인 글",
  "note level": "음의 자리",
  "number of inhabitants": "사는 사람의 수",
  "observed event": "관찰된 일",
  "of a mother or father": "어버이의",
  "of an expert": "전문가다운",
  "of early times": "이른 시대의",
  "of first importance": "첫째로 중요한",
  "of great effect": "효과가 큰",
  "of great worth": "값이 큰",
  "of lesser weight": "무게가 덜한",
  "of little account": "따질 값이 없는",
  "of perceiving": "알아차리는 것의",
  "of several kinds": "여러 종류의",
  "of state affairs": "나라 일의",
  "of the best kind": "가장 좋은 종류의",
  "of the body": "몸에 속한",
  "of the earliest ages": "가장 오랜 시대의",
  "of the legislature": "입법 기관의",
  "offer for notice": "보아 달라고 내놓다",
  "offer put forward": "내놓은 제의",
  "offer up a plea": "간구를 올리다",
  "official document": "공식 문서",
  "official line": "공식으로 정한 방향",
  "old-age allowance": "노년에 주는 수당",
  "on the far side of": "~의 저쪽에",
  "on the outer edge": "바깥 가장자리에 있는",
  "one certain": "어느 하나의",
  "one going by foot": "걸어서 가는 이",
  "one leading a faculty": "학부를 이끄는 이",
  "one of the same age": "나이가 같은 이",
  "one on a religious journey": "신앙의 길을 떠난 이",
  "one taking part": "한몫 맡은 이",
  "one that preys": "잡아먹는 쪽",
  "one who came before": "먼저 온 사람",
  "one who gives support": "도움을 주는 이",
  "one who joins in": "끼어든 사람",
  "one who leads worship": "예배를 이끄는 이",
  "one who mends pipes": "관을 고치는 이",
  "one who puts on an event": "행사를 차리는 이",
  "one's own": "자기만의",
  "one-eyed in politics": "정치에서 한쪽만 보는",
  "one-sided message": "한쪽으로 치우친 말",
  "open to reform": "고쳐 나가려는",
  "opening piece": "여는 곡",
  "opening words": "여는 말",
  "oppress cruelly": "모질게 억누르다",
  "order as treatment": "치료로 지시하다",
  "order of importance": "중요한 차례",
  "organism living off another": "남에게 붙어 사는 생물",
  "out of the common run": "흔하지 않은",
  "outline of one's career": "지나온 일의 줄거리",
  "outside the church": "교회 밖의",
  "own": "제 것으로 가지다",
  "paint a picture of": "~을 그림으로 담다",
  "painted figure": "그려 놓은 인물",
  "pallid": "해쓱한",
  "paper for medicine": "약을 받는 종이",
  "paper shared before publication": "정식으로 내기 전에 돌리는 글",
  "pare": "깎아 내다",
  "part measured against all": "전체에 대어 잰 부분",
  "party-related": "정당에 얽힌",
  "pass right through": "곧장 뚫고 지나가다",
  "paved surface": "포장된 바닥",
  "paying well": "벌이가 좋은",
  "peep in": "들여다보다",
  "people of a place": "그곳에 사는 사람들",
  "period of change": "바뀌어 가는 시기",
  "person on foot": "걸어 다니는 사람",
  "person pushing a plan": "계획을 밀고 가는 사람",
  "personal take": "개인이 보는 바",
  "picked beforehand": "앞서 골라 둔",
  "picture of a face": "얼굴을 담은 그림",
  "piece sewn on": "덧대어 박은 천",
  "pipe fitter": "관을 잇는 일꾼",
  "pitiable": "딱한",
  "place taken up": "차지하고 있는 자리",
  "plan laid out": "펼쳐 놓은 계획",
  "play a part": "한 구실을 하다",
  "plea in writing": "글로 올리는 호소",
  "polar region": "극 지대",
  "political group": "정치 집단",
  "possible in future": "앞으로 그럴 수 있는",
  "possibly": "혹시",
  "powder from blossoms": "꽃에서 나는 가루",
  "prediction of fate": "운명에 대한 예측",
  "present beforehand": "앞서부터 있는",
  "present in every corner": "구석마다 있는",
  "privilege of rank": "지위에 따른 특별 대우",
  "prod with a finger": "손가락으로 쿡 찌르다",
  "proneness": "쉽게 그리 되는 성질",
  "proportion out of a hundred": "백을 기준으로 한 몫",
  "public affairs": "공적인 일",
  "public favor": "대중의 호감",
  "published after dying": "죽은 뒤 나온",
  "puff for air": "숨을 몰아쉬다",
  "puncture": "구멍을 뚫다",
  "push a hole through": "뚫어 구멍을 내다",
  "push forward": "밀고 나아가게 하다",
  "put off doing": "하기를 뒤로 미루다",
  "put off to later": "뒤로 물리다",
  "put on for show": "보이기 위해 꾸민",
  "put out to graze": "풀 뜯게 내놓다",
  "quarry": "쫓기는 짐승",
  "quick look": "얼른 봄",
  "quick to act": "움직임이 빠른",
  "races of the world": "세상의 여러 인종",
  "rain and snow": "비와 눈",
  "raise to a higher post": "더 높은 자리로 올리다",
  "raised platform": "높인 단",
  "rapid rise in number": "수가 빠르게 늘어남",
  "rate of output": "산출이 나는 비율",
  "rate per hundred": "백에 대한 비",
  "rear-facing": "뒤를 향한",
  "refusal to quit": "그만두지 않으려는 마음",
  "refuse to give up": "물러서지 않다",
  "registered claim": "등록된 권리 주장",
  "regular customer": "단골손님",
  "relation in size": "크기의 견줌",
  "reminder to act": "하라고 일러 줌",
  "remittance": "송금",
  "represent in words": "말로 그려 내다",
  "reproduced page": "다시 찍어 낸 면",
  "required beforehand": "미리 요구되는",
  "resemblance": "서로 닮음",
  "result-minded": "결과를 먼저 보는",
  "retirement pay": "은퇴 뒤 받는 돈",
  "reverent": "경건한",
  "right for the case": "그 경우에 맞는",
  "right held by one alone": "한 사람만 쥔 권리",
  "right to the detail": "세부까지 맞는",
  "ringing true": "참말로 들리는",
  "rob of movement": "움직임을 앗다",
  "rock oil": "암석에서 나는 기름",
  "rostrum": "강단",
  "rough and simple": "거칠고 단순한",
  "round diagram": "둥근 도표",
  "rounded and full": "둥그스름하게 찬",
  "rub to a shine": "문질러 윤을 내다",
  "ruddy": "혈색이 좋은",
  "rule one lives by": "살면서 따르는 규칙",
  "rule out by law": "법으로 못 하게 하다",
  "rules for patents": "특허를 다루는 규정",
  "run through": "꿰어 지나가다",
  "running of a state": "나라를 꾸리는 일",
  "salary payment": "봉급 지급",
  "say a prayer": "기도를 올리다",
  "say what will come": "올 일을 말하다",
  "science of government": "다스림을 다루는 학문",
  "science of living processes": "살아가는 과정의 학문",
  "science of teaching": "가르치는 것에 관한 학문",
  "score in a game": "경기에서 얻는 점",
  "search for facts": "사실을 찾는 일",
  "secret scheme": "몰래 꾸민 꾀",
  "section of writing": "글의 한 부분",
  "seep into every part": "구석구석 스미다",
  "self-defeating statement": "스스로를 뒤집는 말",
  "sell door to door": "집집이 팔러 다니다",
  "send ahead": "앞으로 내보내다",
  "send-up": "놀리는 흉내",
  "sense-based": "감각에 바탕한",
  "serial publication": "차례로 내는 간행물",
  "series of steps": "잇따른 단계",
  "set down as true": "참이라고 두다",
  "set in advance": "미리 잡아 둔",
  "set way of doing": "정해진 하는 방식",
  "settle in advance": "미리 정해 두다",
  "settled dislike": "굳어 버린 싫음",
  "settled on earlier": "먼저 정해 둔",
  "settling of a bill": "셈을 치름",
  "sham medicine": "약인 척하는 것",
  "shape with five edges": "변이 다섯인 모양",
  "share expressed in hundredths": "백분으로 나타낸 몫",
  "share given out": "나누어 준 몫",
  "share in": "~을 나누어 갖다",
  "share of the whole": "전체에서 차지하는 몫",
  "sharp opposition": "날카롭게 맞섬",
  "shepherd of a flock": "양 떼를 이끄는 이",
  "short break": "짧은 쉼",
  "short life account": "짧게 적은 살아온 이야기",
  "show before an audience": "관객 앞에서 하는 공연",
  "showing beforehand": "미리 보여 줌",
  "showing good manners": "예절을 갖춘",
  "showing of one's work": "자기 작업을 보임",
  "side in a dispute": "다툼의 한쪽",
  "side-by-side": "나란한",
  "sidewalk": "인도",
  "siding with a faction": "한 파에 붙는",
  "sign of what follows": "뒤에 올 일의 낌새",
  "signed appeal": "이름을 적어 올리는 호소",
  "single fix for everything": "하나로 다 해결하는 것",
  "single out for notice": "따로 집어 알리다",
  "singled out": "따로 집어낸",
  "singular": "하나뿐인",
  "sit for a picture": "그림을 위해 앉아 있다",
  "sketch of a person": "사람을 간추린 글",
  "skill from practice": "익혀서 얻은 솜씨",
  "slapdash": "엉성한",
  "small area": "좁은 구역",
  "small swelling": "작게 부은 것",
  "small-scale": "작은 규모의",
  "smooth and refine": "매끄럽게 다듬다",
  "soak through": "속까지 젖어들다",
  "solemn undertaking": "엄숙히 다짐한 일",
  "somewhat more than usual": "여느 때보다 좀 더",
  "sorry state": "딱한 상태",
  "sorry-looking": "보기에 딱한",
  "source of contamination": "오염의 근원",
  "speak in defense of": "~을 변호하여 말하다",
  "speaker's stand": "말하는 이가 서는 자리",
  "special power of office": "그 직책에 딸린 특별한 힘",
  "special right": "특별한 권리",
  "speck of matter": "물질의 티끌",
  "sponger": "빌붙어 사는 이",
  "sponging off others": "남에게 빌붙는",
  "spoof": "우스꽝스러운 흉내",
  "spot of ground": "땅의 한 자리",
  "spot on the skin": "살갗에 난 점",
  "spot where a thing stands": "물건이 놓인 지점",
  "spread all through": "온통 퍼지다",
  "spread right through": "속속까지 퍼진",
  "spread the faith": "믿음을 널리 펴다",
  "spread to sway people": "사람을 움직이려 퍼뜨리는 것",
  "spreading wide": "널리 퍼짐",
  "spur into action": "움직이도록 몰아붙이다",
  "staff of a firm": "회사의 일꾼들",
  "stage author": "무대 글을 짓는 이",
  "stage in a process": "과정의 한 대목",
  "staged act": "무대에 올린 연기",
  "stand in position": "자리에 세우다",
  "standard of conduct": "행동의 기준",
  "standing in others' eyes": "남의 눈에 비치는 지위",
  "starting belief": "출발이 되는 믿음",
  "statement to be judged": "참 거짓을 따질 말",
  "step along the way": "거쳐 가는 한 걸음",
  "step taken in advance": "미리 밟아 두는 조치",
  "steps to follow": "따라야 할 단계",
  "stick on": "달라붙게 하다",
  "stop in advance": "미리 멈춰 세우다",
  "stopping before it starts": "시작되기 전에 멈춤",
  "story line": "이야기 줄기",
  "strain put on one": "사람에게 걸리는 부담",
  "strike an attitude": "몸짓을 꾸며 잡다",
  "strike out anew": "새로 길을 내다",
  "strip of goods by force": "힘으로 물건을 빼앗다",
  "strip the skin from": "~의 껍질을 벗겨 내다",
  "stroke gently": "살살 어루만지다",
  "study of body function": "몸의 작용을 다루는 학문",
  "study of medicines": "약을 다루는 학문",
  "study of wisdom": "지혜를 따지는 학문",
  "sudden terror": "갑작스러운 무서움",
  "suffix": "접미사",
  "sum charged for breaking a rule": "규칙을 어겨 물리는 금액",
  "sunken dip": "내려앉은 자리",
  "suppose to be so": "그러리라 여기다",
  "supreme": "더없이 높은",
  "sure beyond doubt": "의심 없이 확실한",
  "surface a road": "길에 바닥을 깔다",
  "survey of opinion": "의견을 묻는 조사",
  "sweat": "땀",
  "sweat heavily": "땀을 많이 흘리다",
  "sweeping disease": "휩쓸고 지나가는 병",
  "system of thought": "생각의 체계",
  "tailor to one person": "한 사람에게 맞추다",
  "take a quick look": "얼른 한번 보다",
  "take as given": "주어진 것으로 삼다",
  "take for granted": "당연하게 여기다",
  "take part": "한몫 맡다",
  "take the rind off": "껍데기를 떼다",
  "taken up with one thing": "한 가지에 붙들린",
  "taking of pictures": "그림을 담아냄",
  "talk given to an audience": "사람들 앞에서 하는 말",
  "tap lightly": "가볍게 두드리다",
  "teaching method": "가르치는 방식",
  "tenant farmer": "남의 땅을 부치는 농부",
  "that might be": "그럴 수도 있는",
  "the fact of being on the spot": "그 자리를 채우고 있음",
  "the father's line": "아버지 쪽 핏줄",
  "there from before": "전부터 거기 있던",
  "thing made for sale": "팔려고 만든 것",
  "thing owned": "가진 물건",
  "thing required beforehand": "갖춰 두어야 하는 것",
  "thing that occurs": "일어나는 일",
  "those who come after": "뒤에 오는 이들",
  "threat to life": "목숨을 위협하는 것",
  "throw oneself into": "~에 몸을 던지다",
  "thrown into confusion": "헷갈려 버린",
  "tight corner": "빠져나가기 힘든 자리",
  "times gone by": "흘러간 시절",
  "tiny bit": "아주 작은 조각",
  "to a good degree": "어지간한 정도로",
  "to be expected": "예상되는",
  "to do with government": "정부에 관한",
  "to do with medicines": "약에 관한",
  "to do with the senses": "감각에 관한",
  "to the point": "요점에 닿은",
  "tone level": "소리의 높낮이",
  "too early": "너무 이른",
  "too rare to price": "값을 붙일 수 없을 만큼 드문",
  "top-grade": "최상급인",
  "topmost level": "맨 위 수준",
  "tout wares": "물건을 권하며 팔다",
  "trained and skilled": "익히고 능한",
  "trait of a thing": "사물이 지닌 결",
  "treasured": "보물처럼 여기는",
  "trivial in scale": "규모가 자잘한",
  "trough": "바닥, 골",
  "turn over in the mind": "마음속에서 되뇌다",
  "two-way split": "둘로 갈림",
  "typical pattern": "전형적인 틀",
  "unable to make sense of it": "갈피를 못 잡는",
  "unadorned": "꾸미지 않은",
  "unconvincing": "믿음이 안 가는",
  "undeveloped power": "아직 펼치지 않은 힘",
  "unfair view held in advance": "미리 지닌 치우친 생각",
  "universal remedy": "두루 듣는 약",
  "unlike any other": "다른 무엇과도 다른",
  "unresisting": "맞서지 않는",
  "unwilling to share": "나누려 하지 않는",
  "upright support": "곧게 선 받침",
  "useful in real life": "실생활에 쓸모 있는",
  "user identity": "쓰는 이의 신분",
  "user-to-user": "쓰는 이끼리의",
  "vegetation": "초목",
  "very deep in meaning": "뜻이 매우 깊은",
  "wage packet": "급료 봉투",
  "waiting to develop": "펼쳐지기를 기다리는",
  "walker": "걷는 이",
  "water from the sky": "하늘에서 내린 물",
  "water-pipe worker": "물관을 다루는 사람",
  "way in": "들어가는 길",
  "way of holding the body": "몸을 가누는 방식",
  "way of looking at it": "그것을 보는 방식",
  "way of seeing": "보는 방식",
  "way things go along": "일이 흘러가는 모양",
  "way through": "지나가는 길",
  "wayfarer to a shrine": "성지로 가는 나그네",
  "weight of demands": "요구가 주는 무게",
  "well known": "널리 알려진",
  "well satisfied": "넉넉히 흡족한",
  "well-mannered": "몸가짐이 바른",
  "well-padded": "살이 두둑한",
  "what a hunter eats": "사냥꾼이 먹는 것",
  "what an argument rests on": "주장이 기대는 바",
  "what comes first": "먼저 오는 것",
  "what comes out of work": "일해서 나온 것",
  "what could come of it": "거기서 나올 수 있는 것",
  "what must come first": "먼저 있어야 할 것",
  "what one expects to happen": "일어날 것이라 보는 바",
  "what one likes better": "더 좋아하는 쪽",
  "what one owns": "가진 것",
  "what shows it is true": "참임을 보여 주는 것",
  "wheel chart": "바퀴 모양 도표",
  "wide liking": "널리 좋아함",
  "widely respected": "널리 존중받는",
  "win out in the end": "끝내 이겨 내다",
  "within reach": "손이 닿는",
  "without a middle server": "중간 서버를 두지 않는",
  "word of honor": "명예를 걸고 한 말",
  "word part at the start": "낱말 앞머리 조각",
  "words about what will come": "올 일을 두고 하는 말",
  "words to win support": "지지를 얻으려는 말",
  "work into": "~ 속으로 파고들다",
  "work out a ruse": "속임수를 짜내다",
  "workable in practice": "실제로 돌아가는",
  "workforce": "일하는 사람들",
  "working efficiency": "일의 능률",
  "working powerfully": "세게 듣는",
  "workings of the body": "몸이 돌아가는 원리",
  "worldwide epidemic": "전 세계에 퍼진 유행병",
  "worn-out hollow": "닳아서 움푹해진 곳",
  "worship in words": "말로 경배하다",
  "worth more than money": "돈보다 값진",
  "worth picking first": "먼저 고를 만한",
  "worth the effort": "힘들인 값이 있는",
  "worthless": "값이 없는",
  "wrapped goods": "싸 놓은 물건",
  "wretchedly poor": "몹시 딱하게 가난한",
  "write out a remedy": "쓸 약을 적어 주다",
  "writer of plays": "희곡을 쓰는 이",
  "written study": "글로 쓴 연구"
});
