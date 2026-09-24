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
    ex:[{ s:"The thorn can {{}} a thick glove.", f:"pierce", ko:"그 가시는 두터운 장갑도 찌를 수 있다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "above all others": "다른 무엇보다 위인",
  "academic article": "학술 글",
  "alike in form": "꼴이 비슷한",
  "angle of view": "보는 각도",
  "art of instruction": "가르치는 기술",
  "art of the camera": "사진기의 예술",
  "ashen": "핏기 없는",
  "at regular intervals": "일정한 사이를 두고",
  "be a party to": "~에 한편으로 끼다",
  "be destroyed": "무너져 없어지다",
  "bearing on the matter": "그 일과 맞닿은",
  "become aware of": "~을 알아차리게 되다",
  "being a father": "아버지라는 처지",
  "bequeath": "물려주다",
  "blind alarm": "앞뒤 없는 놀람",
  "block of text": "글의 한 덩이",
  "bloom leaf": "꽃을 이루는 잎",
  "body damp": "몸의 습기",
  "break into a sweat": "땀이 나기 시작하다",
  "breathe hard": "숨을 거칠게 쉬다",
  "brief halt": "잠깐의 멈춤",
  "bygone days": "지나간 날들",
  "call on someone": "누군가를 찾아가다",
  "camera work": "사진기를 다루는 일",
  "cape-like landmass": "곶처럼 뻗은 땅덩이",
  "carry forward to others": "남들에게 이어 주다",
  "carry on without end": "그침 없이 이어 가다",
  "carrying out of a task": "맡은 일을 해냄",
  "carrying weight": "무게가 실린",
  "chemical for killing pests": "해충을 죽이는 약품",
  "chemist's shop": "약 파는 가게",
  "child health specialist": "아이 건강 전문가",
  "children's doctor": "아이를 보는 의사",
  "church leader": "교회의 지도자",
  "circle graph": "동그란 그래프",
  "close likeness": "가까운 닮음",
  "coming back each year": "해마다 다시 오는",
  "coming from parents": "어버이에게서 나온",
  "congressional": "국회에 관한",
  "country laborer": "시골 일꾼",
  "cover with stone": "돌로 덮다",
  "covering only some": "일부만 아우르는",
  "crop spray": "작물에 뿌리는 약",
  "crude oil": "정제하지 않은 기름",
  "deep-seated horror": "뿌리 깊은 무서움",
  "die out": "차츰 사라지다",
  "direct between users": "쓰는 이들 사이를 바로 잇는",
  "doctor for infants": "갓난아이를 보는 의사",
  "doctor of medicine": "의학을 다루는 의사",
  "dogged effort": "질기게 들이는 노력",
  "done with great care": "아주 조심스레 한",
  "drained of color": "빛깔이 빠진",
  "dread of something": "무엇을 몹시 두려워함",
  "drop in on": "~에 들르다",
  "drug-making": "약을 만드는",
  "drugstore": "약방",
  "duplicate sheet": "똑같이 떠낸 장",
  "equal in standing": "처지가 대등한 이",
  "ethnic groups": "여러 종족 집단",
  "every so often": "이따금씩",
  "excerpt from a text": "글에서 따온 대목",
  "exclusive right to an invention": "발명에 대한 독점 권리",
  "expecting the worst": "가장 나쁜 쪽을 내다보는",
  "fatherhood": "아버지 됨",
  "fearing the worst": "가장 나쁜 일을 겁내는",
  "feeding on another": "남을 먹고 사는",
  "final reward": "끝에 받는 보답",
  "five-cornered shape": "모가 다섯인 꼴",
  "five-sided figure": "다섯 변을 가진 도형",
  "fix with adhesive": "접착제로 고정하다",
  "flat of the hand": "손의 평평한 면",
  "flower blade": "꽃의 얇은 잎",
  "formal request to authority": "관청에 내는 정식 요청",
  "former times": "옛 시절",
  "found everywhere": "어디서나 보이는",
  "framework of thought": "생각의 뼈대",
  "freeloader": "공짜로 얻어먹는 이",
  "from time to time in a cycle": "돌아가며 때때로",
  "full of feeling": "감정이 가득한",
  "germane": "들어맞는",
  "get involved in": "~에 발을 담그다",
  "give a soft touch": "부드럽게 손을 대다",
  "give off moisture": "물기를 내보내다",
  "global outbreak": "지구 규모의 발생",
  "gloomy outlook": "어두운 시각",
  "go to see": "보러 가다",
  "going along with": "그대로 따라가는",
  "good at winning people over": "사람을 잘 돌려세우는",
  "grasp of the senses": "감각으로 붙잡음",
  "grassy field": "풀이 자란 들",
  "grave danger": "엄중한 위태로움",
  "grazing land": "풀 뜯기는 땅",
  "group of sentences": "문장 묶음",
  "hand on to the next": "다음 사람에게 넘기다",
  "handing over of money": "돈을 건넴",
  "harry without let-up": "쉼 없이 괴롭히다",
  "hasty glance": "서둘러 본 것",
  "have a part in": "~에 한몫 있다",
  "hawk goods": "물건을 외치며 팔다",
  "heathen": "이교의",
  "highest point": "가장 높은 지점",
  "hollow of the hand": "손의 오목한 곳",
  "hound for beliefs": "믿음 때문에 몰아세우다",
  "house of lawmakers": "입법자들의 모임",
  "human-resources office": "사람을 맡아 보는 부서",
  "hush money": "입막음 돈",
  "idol-worshipping": "우상을 섬기는",
  "inborn nature": "타고난 바탕",
  "incomplete": "온전하지 않은",
  "inner hand": "손의 안쪽",
  "invention statute": "발명 관련 법령",
  "it may be that": "~일 수도 있다",
  "join in": "끼어 들다",
  "join in with others": "남들과 어울려 하다",
  "journal": "학술지",
  "keep going for ever": "끝없이 이어 가다",
  "keep on regardless": "아랑곳없이 이어 가다",
  "land jutting into the sea": "바다로 튀어나온 땅",
  "lasting for good": "영영 이어지는",
  "lasting many years": "여러 해를 버티는",
  "law on inventions": "발명에 관한 법",
  "lawmaking": "법을 만드는",
  "lay paving on": "~에 포장재를 깔다",
  "leaf of a flower": "꽃의 잎",
  "legislative body": "법을 만드는 기구",
  "living on a host": "숙주에 붙어 사는",
  "looking on the dark side": "어두운 쪽만 보는",
  "love of knowledge": "앎을 사랑함",
  "loyal to one party": "한 정당에만 충성하는",
  "machine copy": "기계로 뜬 사본",
  "made-up road": "다져 만든 길",
  "magazine issued regularly": "때맞춰 나오는 잡지",
  "make a hole in": "~에 구멍을 내다",
  "make it one's own": "제 것으로 만들다",
  "make last endlessly": "끝없이 가게 만들다",
  "make powerless": "힘을 못 쓰게 하다",
  "make-up of a person": "사람을 이루는 바탕",
  "material rather than mental": "마음이 아니라 물질의",
  "maybe": "어쩌면",
  "medical practitioner": "의료를 하는 사람",
  "medicine-related": "의약에 얽힌",
  "member of an activity": "활동의 구성원",
  "mineral oil": "광물에서 얻은 기름",
  "minister of a church": "교회를 맡은 이",
  "minute fragment": "몹시 작은 부스러기",
  "mocking imitation": "비웃으며 흉내 냄",
  "model case": "본보기가 되는 사례",
  "moisture from the skin": "살갗에서 나는 물기",
  "money forfeit": "물어야 하는 돈",
  "money paid after work ends": "일을 그친 뒤 받는 돈",
  "monthly pay": "달마다 받는 돈",
  "morbid fear": "병적인 두려움",
  "motherly and fatherly": "어머니 아버지의",
  "moving to pity": "안타깝게 만드는",
  "nations": "여러 나라",
  "neck of land": "좁고 긴 땅",
  "never wearing off": "가시지 않는",
  "never-ending": "끝날 줄 모르는",
  "non-surgical doctor": "수술을 하지 않는 의사",
  "not acting": "나서지 않는",
  "not what it claims": "내세우는 것과 다른",
  "observed event": "관찰된 일",
  "of a mother or father": "어버이의",
  "of first importance": "첫째로 중요한",
  "of lesser weight": "무게가 덜한",
  "of little account": "따질 값이 없는",
  "of perceiving": "알아차리는 것의",
  "of the body": "몸에 속한",
  "of the legislature": "입법 기관의",
  "official document": "공식 문서",
  "old-age allowance": "노년에 주는 수당",
  "on the far side of": "~의 저쪽에",
  "on the outer edge": "바깥 가장자리에 있는",
  "one certain": "어느 하나의",
  "one going by foot": "걸어서 가는 이",
  "one of the same age": "나이가 같은 이",
  "one taking part": "한몫 맡은 이",
  "one who gives support": "도움을 주는 이",
  "one who joins in": "끼어든 사람",
  "one-eyed in politics": "정치에서 한쪽만 보는",
  "oppress cruelly": "모질게 억누르다",
  "organism living off another": "남에게 붙어 사는 생물",
  "out of the common run": "흔하지 않은",
  "outside the church": "교회 밖의",
  "pallid": "해쓱한",
  "pare": "깎아 내다",
  "pass right through": "곧장 뚫고 지나가다",
  "paved surface": "포장된 바닥",
  "peep in": "들여다보다",
  "period of change": "바뀌어 가는 시기",
  "person on foot": "걸어 다니는 사람",
  "piece sewn on": "덧대어 박은 천",
  "pitiable": "딱한",
  "play a part": "한 구실을 하다",
  "plea in writing": "글로 올리는 호소",
  "political group": "정치 집단",
  "possibly": "혹시",
  "present in every corner": "구석마다 있는",
  "proportion out of a hundred": "백을 기준으로 한 몫",
  "puff for air": "숨을 몰아쉬다",
  "puncture": "구멍을 뚫다",
  "put on for show": "보이기 위해 꾸민",
  "put out to graze": "풀 뜯게 내놓다",
  "quick look": "얼른 봄",
  "races of the world": "세상의 여러 인종",
  "rate per hundred": "백에 대한 비",
  "refusal to quit": "그만두지 않으려는 마음",
  "refuse to give up": "물러서지 않다",
  "registered claim": "등록된 권리 주장",
  "regular customer": "단골손님",
  "remittance": "송금",
  "reproduced page": "다시 찍어 낸 면",
  "resemblance": "서로 닮음",
  "retirement pay": "은퇴 뒤 받는 돈",
  "rob of movement": "움직임을 앗다",
  "rock oil": "암석에서 나는 기름",
  "round diagram": "둥근 도표",
  "ruddy": "혈색이 좋은",
  "rules for patents": "특허를 다루는 규정",
  "run through": "꿰어 지나가다",
  "salary payment": "봉급 지급",
  "science of living processes": "살아가는 과정의 학문",
  "science of teaching": "가르치는 것에 관한 학문",
  "section of writing": "글의 한 부분",
  "seep into every part": "구석구석 스미다",
  "self-defeating statement": "스스로를 뒤집는 말",
  "sell door to door": "집집이 팔러 다니다",
  "send-up": "놀리는 흉내",
  "sense-based": "감각에 바탕한",
  "serial publication": "차례로 내는 간행물",
  "settling of a bill": "셈을 치름",
  "shape with five edges": "변이 다섯인 모양",
  "share expressed in hundredths": "백분으로 나타낸 몫",
  "share in": "~을 나누어 갖다",
  "shepherd of a flock": "양 떼를 이끄는 이",
  "short break": "짧은 쉼",
  "show before an audience": "관객 앞에서 하는 공연",
  "side in a dispute": "다툼의 한쪽",
  "side-by-side": "나란한",
  "sidewalk": "인도",
  "siding with a faction": "한 파에 붙는",
  "signed appeal": "이름을 적어 올리는 호소",
  "single fix for everything": "하나로 다 해결하는 것",
  "singled out": "따로 집어낸",
  "slapdash": "엉성한",
  "small area": "좁은 구역",
  "small-scale": "작은 규모의",
  "soak through": "속까지 젖어들다",
  "speck of matter": "물질의 티끌",
  "sponger": "빌붙어 사는 이",
  "sponging off others": "남에게 빌붙는",
  "spoof": "우스꽝스러운 흉내",
  "spot of ground": "땅의 한 자리",
  "spread all through": "온통 퍼지다",
  "spread right through": "속속까지 퍼진",
  "staff of a firm": "회사의 일꾼들",
  "stage in a process": "과정의 한 대목",
  "staged act": "무대에 올린 연기",
  "step along the way": "거쳐 가는 한 걸음",
  "stick on": "달라붙게 하다",
  "strip the skin from": "~의 껍질을 벗겨 내다",
  "stroke gently": "살살 어루만지다",
  "study of body function": "몸의 작용을 다루는 학문",
  "study of medicines": "약을 다루는 학문",
  "study of wisdom": "지혜를 따지는 학문",
  "sudden terror": "갑작스러운 무서움",
  "sum charged for breaking a rule": "규칙을 어겨 물리는 금액",
  "supreme": "더없이 높은",
  "surface a road": "길에 바닥을 깔다",
  "sweat": "땀",
  "sweat heavily": "땀을 많이 흘리다",
  "sweeping disease": "휩쓸고 지나가는 병",
  "system of thought": "생각의 체계",
  "tailor to one person": "한 사람에게 맞추다",
  "take a quick look": "얼른 한번 보다",
  "take part": "한몫 맡다",
  "take the rind off": "껍데기를 떼다",
  "taking of pictures": "그림을 담아냄",
  "tap lightly": "가볍게 두드리다",
  "teaching method": "가르치는 방식",
  "tenant farmer": "남의 땅을 부치는 농부",
  "the father's line": "아버지 쪽 핏줄",
  "thing that occurs": "일어나는 일",
  "threat to life": "목숨을 위협하는 것",
  "throw oneself into": "~에 몸을 던지다",
  "thrown into confusion": "헷갈려 버린",
  "times gone by": "흘러간 시절",
  "tiny bit": "아주 작은 조각",
  "to do with medicines": "약에 관한",
  "to do with the senses": "감각에 관한",
  "to the point": "요점에 닿은",
  "topmost level": "맨 위 수준",
  "tout wares": "물건을 권하며 팔다",
  "trivial in scale": "규모가 자잘한",
  "trough": "바닥, 골",
  "typical pattern": "전형적인 틀",
  "unable to make sense of it": "갈피를 못 잡는",
  "unconvincing": "믿음이 안 가는",
  "universal remedy": "두루 듣는 약",
  "unlike any other": "다른 무엇과도 다른",
  "unresisting": "맞서지 않는",
  "user-to-user": "쓰는 이끼리의",
  "wage packet": "급료 봉투",
  "walker": "걷는 이",
  "way of looking at it": "그것을 보는 방식",
  "way of seeing": "보는 방식",
  "way through": "지나가는 길",
  "wheel chart": "바퀴 모양 도표",
  "without a middle server": "중간 서버를 두지 않는",
  "work into": "~ 속으로 파고들다",
  "workforce": "일하는 사람들",
  "workings of the body": "몸이 돌아가는 원리",
  "worldwide epidemic": "전 세계에 퍼진 유행병",
  "wrapped goods": "싸 놓은 물건",
  "written study": "글로 쓴 연구"
});
