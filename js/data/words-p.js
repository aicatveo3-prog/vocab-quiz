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
    ex:[{ s:"A {{}} was struck at the crossing.", f:"pedestrian", ko:"한 보행자가 횡단보도에서 치였다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "above all others": "다른 무엇보다 위인",
  "academic article": "학술 글",
  "alike in form": "꼴이 비슷한",
  "art of instruction": "가르치는 기술",
  "ashen": "핏기 없는",
  "be a party to": "~에 한편으로 끼다",
  "being a father": "아버지라는 처지",
  "bequeath": "물려주다",
  "blind alarm": "앞뒤 없는 놀람",
  "block of text": "글의 한 덩이",
  "breathe hard": "숨을 거칠게 쉬다",
  "brief halt": "잠깐의 멈춤",
  "bygone days": "지나간 날들",
  "call on someone": "누군가를 찾아가다",
  "carry forward to others": "남들에게 이어 주다",
  "church leader": "교회의 지도자",
  "close likeness": "가까운 닮음",
  "coming from parents": "어버이에게서 나온",
  "congressional": "국회에 관한",
  "country laborer": "시골 일꾼",
  "cover with stone": "돌로 덮다",
  "covering only some": "일부만 아우르는",
  "done with great care": "아주 조심스레 한",
  "drained of color": "빛깔이 빠진",
  "drop in on": "~에 들르다",
  "excerpt from a text": "글에서 따온 대목",
  "exclusive right to an invention": "발명에 대한 독점 권리",
  "fatherhood": "아버지 됨",
  "feeding on another": "남을 먹고 사는",
  "final reward": "끝에 받는 보답",
  "fix with adhesive": "접착제로 고정하다",
  "flat of the hand": "손의 평평한 면",
  "former times": "옛 시절",
  "framework of thought": "생각의 뼈대",
  "freeloader": "공짜로 얻어먹는 이",
  "full of feeling": "감정이 가득한",
  "get involved in": "~에 발을 담그다",
  "give a soft touch": "부드럽게 손을 대다",
  "global outbreak": "지구 규모의 발생",
  "go to see": "보러 가다",
  "going along with": "그대로 따라가는",
  "grassy field": "풀이 자란 들",
  "grazing land": "풀 뜯기는 땅",
  "group of sentences": "문장 묶음",
  "hand on to the next": "다음 사람에게 넘기다",
  "handing over of money": "돈을 건넴",
  "have a part in": "~에 한몫 있다",
  "hawk goods": "물건을 외치며 팔다",
  "heathen": "이교의",
  "highest point": "가장 높은 지점",
  "hollow of the hand": "손의 오목한 곳",
  "house of lawmakers": "입법자들의 모임",
  "hush money": "입막음 돈",
  "idol-worshipping": "우상을 섬기는",
  "incomplete": "온전하지 않은",
  "inner hand": "손의 안쪽",
  "invention statute": "발명 관련 법령",
  "join in": "끼어 들다",
  "join in with others": "남들과 어울려 하다",
  "law on inventions": "발명에 관한 법",
  "lawmaking": "법을 만드는",
  "lay paving on": "~에 포장재를 깔다",
  "legislative body": "법을 만드는 기구",
  "living on a host": "숙주에 붙어 사는",
  "loyal to one party": "한 정당에만 충성하는",
  "made-up road": "다져 만든 길",
  "make powerless": "힘을 못 쓰게 하다",
  "member of an activity": "활동의 구성원",
  "minister of a church": "교회를 맡은 이",
  "minute fragment": "몹시 작은 부스러기",
  "mocking imitation": "비웃으며 흉내 냄",
  "model case": "본보기가 되는 사례",
  "monthly pay": "달마다 받는 돈",
  "motherly and fatherly": "어머니 아버지의",
  "moving to pity": "안타깝게 만드는",
  "not acting": "나서지 않는",
  "of a mother or father": "어버이의",
  "of first importance": "첫째로 중요한",
  "of the legislature": "입법 기관의",
  "official document": "공식 문서",
  "on the far side of": "~의 저쪽에",
  "one certain": "어느 하나의",
  "one going by foot": "걸어서 가는 이",
  "one taking part": "한몫 맡은 이",
  "one who gives support": "도움을 주는 이",
  "one who joins in": "끼어든 사람",
  "one-eyed in politics": "정치에서 한쪽만 보는",
  "organism living off another": "남에게 붙어 사는 생물",
  "out of the common run": "흔하지 않은",
  "outside the church": "교회 밖의",
  "pallid": "해쓱한",
  "paved surface": "포장된 바닥",
  "person on foot": "걸어 다니는 사람",
  "piece sewn on": "덧대어 박은 천",
  "pitiable": "딱한",
  "play a part": "한 구실을 하다",
  "political group": "정치 집단",
  "puff for air": "숨을 몰아쉬다",
  "put out to graze": "풀 뜯게 내놓다",
  "registered claim": "등록된 권리 주장",
  "regular customer": "단골손님",
  "remittance": "송금",
  "resemblance": "서로 닮음",
  "rob of movement": "움직임을 앗다",
  "ruddy": "혈색이 좋은",
  "rules for patents": "특허를 다루는 규정",
  "salary payment": "봉급 지급",
  "science of teaching": "가르치는 것에 관한 학문",
  "section of writing": "글의 한 부분",
  "self-defeating statement": "스스로를 뒤집는 말",
  "sell door to door": "집집이 팔러 다니다",
  "send-up": "놀리는 흉내",
  "settling of a bill": "셈을 치름",
  "share in": "~을 나누어 갖다",
  "shepherd of a flock": "양 떼를 이끄는 이",
  "short break": "짧은 쉼",
  "side in a dispute": "다툼의 한쪽",
  "side-by-side": "나란한",
  "sidewalk": "인도",
  "siding with a faction": "한 파에 붙는",
  "single fix for everything": "하나로 다 해결하는 것",
  "singled out": "따로 집어낸",
  "slapdash": "엉성한",
  "small area": "좁은 구역",
  "speck of matter": "물질의 티끌",
  "sponger": "빌붙어 사는 이",
  "sponging off others": "남에게 빌붙는",
  "spoof": "우스꽝스러운 흉내",
  "spot of ground": "땅의 한 자리",
  "stick on": "달라붙게 하다",
  "stroke gently": "살살 어루만지다",
  "sudden terror": "갑작스러운 무서움",
  "supreme": "더없이 높은",
  "surface a road": "길에 바닥을 깔다",
  "sweeping disease": "휩쓸고 지나가는 병",
  "take part": "한몫 맡다",
  "tap lightly": "가볍게 두드리다",
  "teaching method": "가르치는 방식",
  "tenant farmer": "남의 땅을 부치는 농부",
  "the father's line": "아버지 쪽 핏줄",
  "throw oneself into": "~에 몸을 던지다",
  "times gone by": "흘러간 시절",
  "tiny bit": "아주 작은 조각",
  "topmost level": "맨 위 수준",
  "tout wares": "물건을 권하며 팔다",
  "trough": "바닥, 골",
  "typical pattern": "전형적인 틀",
  "universal remedy": "두루 듣는 약",
  "unlike any other": "다른 무엇과도 다른",
  "unresisting": "맞서지 않는",
  "wage packet": "급료 봉투",
  "walker": "걷는 이",
  "way through": "지나가는 길",
  "worldwide epidemic": "전 세계에 퍼진 유행병",
  "wrapped goods": "싸 놓은 물건",
  "written study": "글로 쓴 연구"
});
