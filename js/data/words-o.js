/**
 * 단어 데이터 — 수능 보카 O 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *    ⚠️ 또 gloss.js 에 같은 키가 있는지 먼저 확인할 것 — gloss.js 가 이 파일보다
 *    뒤에 로드되므로 여기 넣은 값이 조용히 덮인다.
 *
 * ── 이 세트의 승격: 158단어 중 82개(52%) ──
 *
 * 저장소에서 승격 비율이 가장 높은 세트다. obvious·obtain·object·offer·observe
 * 처럼 기본적인 낱말이 많아 오래전부터 유의어·반의어로 동원돼 왔다.
 * 참조는 모두 132곳으로 이것도 가장 많다.
 *   object 5곳 · obscure 5곳 · offset 5곳 · overlook 5곳
 *   obey 4곳 · obstruct 4곳 · opponent 4곳
 *
 * 원칙은 A~N 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 *   ④ 한 표제어에 두 품사를 섞지 않는다 — 참조가 쓰는 갈래를 남긴다
 *
 * ── 원본의 뜻 오류를 고친 것 ──
 *   offset          '능숙함, 능숙도' → '상쇄하다, 벌충하다'
 *                   competence(능숙함, 능력) 의 뜻이 들어와 있었다. 참조 5곳
 *                   (compensate·compensate for·counteract·counterbalance·make up for)
 *                   이 전부 상쇄 뜻을 쓴다.
 *   overpower       '견줄 데 없는' → '제압하다, 힘으로 누르다'
 *                   unrivaled 의 뜻이다. 참조 drown out(D) 은 제압 뜻을 쓴다.
 *   oblige          '주장하다, 강요하다' → '~하게 만들다, 강요하다'
 *                   '주장하다' 는 allege·argue 의 뜻이다. 참조 compel(C).
 *   opening         '공식, 개방' → '시작, 개막'
 *                   '공석' 의 오타로 보인다. 그대로 두면 formula(공식, F) 와 첫 뜻이
 *                   겹친다. 참조 initial(I)·conclusion(ant, C) 이 시작 뜻을 쓴다.
 *   outcome         '결과, 과정' → '결과, 성과'   ('성과' 의 오타로 보인다)
 *   organizational  '구조적인, 조직적인; 구조의' → '조직의, 조직적인'
 *                   '구조적인' 은 structural 의 뜻이다.
 *   occasional      '때때로; 임시의, 우연의' → '때때로의, 간간이 있는'
 *                   '때때로' 는 부사다. 형용사 자리이고 참조 ceaseless(ant, C) 도 형용사다.
 *
 * ── 겹침을 가른 것 ──
 *   objection '이의, 반감' / oppose '~에 반대하다' / opposite '반대편의, 맞은편의'(adj)
 *     / opposition '반대, 저항'    ↑ 네 낱말이 모두 '반대' 로 시작하고 있었다
 *   obligate '의무를 지우다' / obligatory '의무적인, 필수의' / oblige '~하게 만들다'
 *   optimal '최적의, 최선의' / optimum '최적 조건'(n)
 *   out of date '시대에 뒤진' / out of fashion '유행이 지난' / outdated '구식의, 낡은'
 *   outperform '더 나은 성과를 내다' / outstrip '앞지르다, 웃돌다'
 *   overpower '제압하다' / overwhelm '압도하다, 당황하게 하다' / overbear '억누르다'
 *   occupancy '점유, 사용' / occupation '직업, 점령'
 *   onset '개시, 발병' / opening '시작, 개막'
 *   organ '장기, 기관' / organization '조직, 단체'
 *   obvious '명백한, 뻔한'            ← apparent(분명한, A) 와 첫 뜻을 갈랐다
 *   ornate '정교하게 꾸민, 화려한'      ← gorgeous(화려한, G) 와 첫 뜻을 갈랐다
 *   occurrence '일어남, 사례'          ← incidence(발생, I) 와 갈랐다
 *   once and for all '최종적으로, 단번에' ← altogether(완전히, A) 와 갈랐다
 *   out of place '제자리에 있지 않은'    ← improper·misplaced(부적절한) 와 갈랐다
 *
 * ── 품사를 하나로 정리한 것 (참조가 쓰는 갈래를 남겼다) ──
 *   objective  adj 객관적인       impartial(I) 이 형용사 갈래를 쓴다. '목적, 목표' 는 버렸다.
 *   opposite   adj 반대편의       converse(C)·inverse(I) 둘 다 형용사. '반대'(n) 를 버리자
 *                                objection·opposition 과의 겹침도 함께 풀렸다.
 *   official   adj 공식적인       authoritative(A)·formal(F)
 *   offer      v   제안하다       demand(ant, D) 가 동사
 *   outlaw     v   비합법화하다    ban(B)·forbid(F) 둘 다 동사
 *   oval       adj 달걀 모양의     elliptical(E). 첫 뜻을 '달걀 모양의' 로 두어
 *                                elliptical(타원형의) 과 갈랐다.
 *   overall    adj 전반적인       general(G)·gross(G)
 *   occasional adj 때때로의       ceaseless(ant, C)
 *   obscure    adj 분명하지 않은   참조 다섯 중 셋이 형용사(apparent·celebrated·distinguished).
 *                                동사 자리였던 clarify(C)·block out(B) 쪽을 각각
 *                                'make unclear'·'hide from view' 로 바꿨다.
 *   observe    v   관찰하다, 준수하다  comply(C) 가 '준수하다' 를 쓴다. comment(C) 는
 *                                '논평하다' 갈래를 쓰고 있어서 그쪽 유의어를 N 세트의
 *                                'note' 로 바꿨다(words-c.js).
 *   object     n   물건, 물체     참조가 명사 2곳(artifact·item)·동사 3곳으로 갈렸다.
 *                                수능에서 명사가 압도적이고 '반대하다' 는 같은 세트의
 *                                oppose·objection 이 담으므로 명사로 세우고, 동사 참조
 *                                3곳(complain·disagree·disapprove) 의 유의어를
 *                                'object to' 로 바꿨다.
 *   ornament   n   장식, 장신구    decoration(D) 은 명사, adorn(A) 은 동사였다. 원본이
 *                                명사뿐이어서 명사로 세우고 adorn 쪽을 'deck out' 으로 바꿨다.
 *   optimum    n   최적 조건      참조가 없어 자유롭게 골랐다. 명사로 두니 optimal 과의
 *                                겹침이 저절로 풀렸다.
 *   orbit·orphan·outback·output·outrage·overdose·onstage  참조가 없어 한 갈래로 정리했다.
 */

window.VOCAB_O = [
  /* ── 챕터 1 ─────────────────────────────────────── */

  /* 승격 ① — 사전 표현 '맹세, 서약' 을 글자까지 지켰다(curse, C).
     원본의 '법정의 선서' 는 길어서 버렸다. */
  { word:"oath", pron:"오스", pos:"n", level:"B2", meanings:["맹세","서약"],
    syn:["solemn promise","sworn word","binding vow"],
    ex:[{ s:"The witness took an {{}} before speaking.", f:"oath", ko:"증인은 말하기 전에 맹세를 했다." }] },

  /* 승격 ② — 사전 표현을 글자까지 지켰다(compliant, C · docile, D). */
  { word:"obedient", pron:"오비디언트", pos:"adj", level:"B2", meanings:["순종하는","고분고분한"],
    syn:["compliant","dutiful","doing as told"], ant:["defiant"],
    ex:[{ s:"The {{}} dog waited at the gate.", f:"obedient", ko:"순종하는 개가 문에서 기다렸다." }] },

  { word:"obese", pron:"오비스", pos:"adj", level:"B2", meanings:["고도 비만인","매우 뚱뚱한"],
    syn:["grossly overweight","corpulent","carrying far too much fat"],
    ex:[{ s:"The clinic treats {{}} patients with diet plans.", f:"obese", ko:"그 진료소는 고도 비만인 환자를 식단으로 치료한다." }] },

  { word:"obesity", pron:"오비서티", pos:"n", level:"B2", meanings:["비만"],
    syn:["extreme overweight","excess body fat","corpulence"],
    ex:[{ s:"Childhood {{}} has risen for a decade.", f:"obesity", ko:"어린이 비만이 십 년째 늘고 있다." }] },

  /* 승격 ③ — 사전 표현 '따르다, 복종하다' 를 글자까지 지켰다.
     참조 네 곳(comply·conform 유의어, contravene·defy 반의어) 이 그대로 유지된다.
     conform 의 첫 뜻도 '따르다' 지만 둘은 서로 유의어여서 문제가 없다 —
     meaningsOverlap 은 오답 자리와 짝 맞추기 보드에서만 걸러 낸다. */
  { word:"obey", pron:"오베이", pos:"v", level:"B1", meanings:["따르다","복종하다"],
    syn:["comply","follow orders","keep to the rules"], ant:["defy"],
    ex:[{ s:"Drivers must {{}} the speed limit.", f:"obey", ko:"운전자는 제한 속도를 따라야 한다." }] },

  /* 승격 ④ — 사전이 '반대하다; 물체' 로 동사와 명사가 섞여 있었다.
     참조 다섯이 명사 2곳(artifact·item)·동사 3곳(complain·disagree·disapprove) 으로
     갈렸다. 수능에서 명사가 압도적이고 '반대하다' 뜻은 같은 챕터의 objection 과
     챕터 4 의 oppose 가 담으므로 명사로 세웠다. 동사 자리 세 곳의 유의어는
     'object to' 로 바꿨다 — 동사 자리에 동사구가 온다. */
  { word:"object", pron:"어브젝트", pos:"n", level:"B1", meanings:["물건","물체"],
    syn:["item","physical body","solid thing"],
    ex:[{ s:"A small metal {{}} lay on the floor.", f:"object", ko:"작은 금속 물체가 바닥에 놓여 있었다." }] },

  /* 승격 ⑤ — 사전은 '반대, 이의' 였다. '반대' 를 그대로 두면 dissent(반대, 이견, D)
     와 첫 뜻이 같고, 챕터 4 의 opposition·opposite 와도 줄줄이 물린다.
     순서를 뒤집어 '이의' 를 앞세우고 원본의 '반감' 을 붙였다. */
  { word:"objection", pron:"어브젝션", pos:"n", level:"B2", meanings:["이의","반감"],
    syn:["dissent","counter-argument","voiced disagreement"], ant:["assent"],
    ex:[{ s:"She raised no {{}} to the new rule.", f:"objection", ko:"그녀는 새 규칙에 아무 이의도 내지 않았다." }] },

  /* 승격 ⑥ — 사전이 '객관적인, 목표' 로 형용사와 명사가 섞여 있었다.
     impartial(I) 이 형용사 갈래를 쓰므로 형용사로 세우고 '목적, 목표' 는 버렸다.
     아까운 자리지만 참조를 보존하는 규칙을 따랐다. */
  { word:"objective", pron:"업젝티브", pos:"adj", level:"B2", meanings:["객관적인","사실에 근거한"],
    syn:["unbiased","fact-based","free of opinion"], ant:["subjective"],
    ex:[{ s:"The report gives an {{}} account of the fire.", f:"objective", ko:"그 보고서는 화재를 객관적인 서술로 담았다." }] },

  /* 승격 ⑦ — 사전 표현과 글자까지 같다(impartially, I). */
  { word:"objectively", pron:"업젝티블리", pos:"adv", level:"B2", meanings:["객관적으로"],
    syn:["impartially","without bias","on the facts alone"],
    ex:[{ s:"Judges must weigh the evidence {{}}.", f:"objectively", ko:"심사위원은 증거를 객관적으로 따져야 한다." }] },

  /* obligate 의 원본 뜻은 '강요하다; 의무를 지우다' 였다. '강요하다' 는
     compel(C) 의 첫 뜻이고 같은 챕터의 oblige 와도 부딪히므로 '의무를 지우다'
     한 갈래로 좁혔다. */
  { word:"obligate", pron:"아블러게이트", pos:"v", level:"C1", meanings:["의무를 지우다"],
    syn:["bind by duty","place under obligation","make duty-bound"],
    ex:[{ s:"The contract will {{}} both sides to share costs.", f:"obligate", ko:"그 계약은 양측에 비용을 나눌 의무를 지울 것이다." }] },

  /* 승격 ⑧ — 사전 표현 '의무적인, 필수의' 를 글자까지 지켰다.
     compulsory(C)·mandatory(M) 와 첫 뜻이 같지만 셋은 서로 유의어다. */
  { word:"obligatory", pron:"어블리거토리", pos:"adj", level:"C1", meanings:["의무적인","필수의"],
    syn:["compulsory","mandatory","not optional"], ant:["voluntary"],
    ex:[{ s:"Attendance at the drill is {{}}.", f:"obligatory", ko:"훈련 참석은 의무적이다." }] },

  /* 승격 ⑨ — ★원본의 뜻이 틀렸다. '주장하다' 는 allege·argue 의 뜻이다.
     사전 표현 '~하게 만들다' 를 첫 자리에 두고 '강요하다' 를 붙였다(compel, C).
     사전의 '의무를 지우다' 갈래는 obligate 에 넘겼다. */
  { word:"oblige", pron:"어블라이지", pos:"v", level:"B2", meanings:["~하게 만들다","강요하다"],
    syn:["compel","force","leave no choice for"],
    ex:[{ s:"Bad weather may {{}} us to cancel.", f:"oblige", ko:"나쁜 날씨가 우리를 취소하게 만들 수도 있다." }] },

  /* 승격 ⑩ — 사전은 '완전히 파괴하다' 한 갈래였다. 원본의 '흔적 없이 지우다' 를
     뒤에 붙였다. 첫 뜻은 사전값을 지켰다(annihilate, A · efface, E).
     원본 첫 뜻 '부수다' 는 break(B) 와 같아서 쓰지 않았다. */
  { word:"obliterate", pron:"어블리터레이트", pos:"v", level:"C1", meanings:["완전히 파괴하다","흔적 없이 지우다"],
    syn:["annihilate","wipe out","erase all trace of"],
    ex:[{ s:"The flood threatened to {{}} the village.", f:"obliterate", ko:"홍수가 그 마을을 완전히 파괴할 듯했다." }] },

  /* 승격 ⑪ — 사전이 '잘 알려지지 않은; 모호하게 하다' 로 형용사와 동사가 섞여
     있었다. 참조 다섯 중 셋이 형용사(apparent·celebrated·distinguished 의 반의어)
     여서 형용사로 세웠다. 동사 자리였던 clarify(C) 의 반의어는 'make unclear',
     block out(B) 의 유의어는 'hide from view' 로 바꿨다.
     원본의 '어두운' 은 버렸다 — 빛 이야기가 아니라 뜻이 흐릿하다는 말이다. */
  { word:"obscure", pron:"업스큐어", pos:"adj", level:"C1", meanings:["분명하지 않은","모호한"],
    syn:["unclear","hard to make out","little known"], ant:["apparent"],
    ex:[{ s:"The origin of the custom is {{}}.", f:"obscure", ko:"그 관습의 기원은 분명하지 않다." }] },

  { word:"observation", pron:"압저베이션", pos:"n", level:"B2", meanings:["관찰","논평"],
    syn:["close watching","careful noting","spoken remark"],
    ex:[{ s:"Years of {{}} led to the discovery.", f:"observation", ko:"여러 해의 관찰이 그 발견으로 이어졌다." }] },

  { word:"observatory", pron:"업저버토리", pos:"n", level:"C1", meanings:["관측소","천문대"],
    syn:["star-watching station","sky-viewing post","astronomy lab"],
    ex:[{ s:"The {{}} sits on top of the mountain.", f:"observatory", ko:"그 관측소는 산 정상에 있다." }] },

  /* 승격 ⑫ — 사전 표현 '관찰하다; 준수하다' 의 두 갈래를 그대로 살렸다.
     comply(C) 가 '준수하다' 갈래를 쓴다. comment(C) 는 '논평하다' 갈래를 쓰고
     있었는데 N 세트에서 그쪽 유의어를 note 로 옮겨 두었다.
     원본의 '목격하다' 는 witness 쪽 뜻이어서 버렸다. */
  { word:"observe", pron:"업저브", pos:"v", level:"B1", meanings:["관찰하다","준수하다"],
    syn:["watch closely","abide by","keep to"],
    ex:[{ s:"Scientists {{}} the birds from a hidden blind.", f:"observe", ko:"과학자들은 숨은 가림막에서 그 새들을 관찰한다." }] },

  /* 승격 ⑬ — 사전은 '구식의, 쓸모없는' 이었고 발음이 없었다. 참조가 없어
     원본의 '한물간, 더 이상 쓰이지 않는' 을 썼다. 챕터 6 의 outdated(구식의, 낡은)
     와 첫 뜻을 갈라 두는 편이 낫다. */
  { word:"obsolete", pron:"압설리트", pos:"adj", level:"C1", meanings:["한물간","더 이상 쓰이지 않는"],
    syn:["no longer in use","superseded","left behind by progress"], ant:["current"],
    ex:[{ s:"Fax machines are now largely {{}}.", f:"obsolete", ko:"팩스 기계는 이제 대체로 한물갔다." }] },

  /* 승격 ⑭ — 사전은 '장애물' 한 갈래였다. 원본의 '장애' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(barrier, B · challenge, C · deterrent, D). */
  { word:"obstacle", pron:"압스터클", pos:"n", level:"B1", meanings:["장애물","장애"],
    syn:["barrier","hurdle","thing in the way"],
    ex:[{ s:"Cost is the main {{}} to the plan.", f:"obstacle", ko:"비용이 그 계획의 주된 장애물이다." }] },

  /* 원본의 '처리하기 힘든' 갈래는 버렸다 — 사람의 성격을 가리키는 갈래만 남겼다. */
  { word:"obstinate", pron:"압스터닛", pos:"adj", level:"C1", meanings:["고집 센","완강한"],
    syn:["stubborn","unyielding","set in one's ways"], ant:["yielding"],
    ex:[{ s:"He was too {{}} to admit the mistake.", f:"obstinate", ko:"그는 잘못을 인정하기에 너무 고집이 셌다." }] },

  /* ── 챕터 2 ─────────────────────────────────────── */
  /* 이 챕터는 승격이 15개로 가장 많다. 사전 표현이 원본과 같은 갈래인 경우가
     많아 대부분 글자까지 그대로 지켰다 — 기존 화면이 안 바뀐다.
     ⑤ 스캔이 '기존 표제어와 첫 뜻이 같다' 고 알린 것들(obtain←acquire,
     obvious←apparent, offensive←disagreeable 등) 은 실제로 서로 유의어로
     등록된 관계여서 그대로 두었다. meaningsOverlap 은 오답 자리와 짝 맞추기
     보드에서만 걸러 내므로 정답이 둘 되는 일은 없다.                        */

  /* 승격 ⑮ — 사전 표현을 글자까지 지켰다(참조 4곳). */
  { word:"obstruct", pron:"업스트럭트", pos:"v", level:"B2", meanings:["방해하다","막다"],
    syn:["hinder","block up","stand in the way of"], ant:["cooperate"],
    ex:[{ s:"Fallen rocks {{}} the mountain road.", f:"obstruct", ko:"떨어진 바위가 산길을 막는다." }] },

  /* 승격 ⑯ — 사전 표현을 글자까지 지켰다(acquire, A · derive, D). */
  { word:"obtain", pron:"업테인", pos:"v", level:"B2", meanings:["얻다","획득하다"],
    syn:["acquire","get hold of","come by"],
    ex:[{ s:"You must {{}} a permit before digging.", f:"obtain", ko:"파기 전에 허가를 얻어야 한다." }] },

  /* 승격 ⑰ — 사전 표현 '분명한, 명백한' 을 글자까지 지켰다(참조 3곳).
     apparent 와 첫 뜻이 겹치지만 둘은 서로 유의어로 등록된 관계다. */
  { word:"obvious", pron:"압비어스", pos:"adj", level:"B1", meanings:["분명한","명백한"],
    syn:["apparent","plain to see","unmistakable"],
    ex:[{ s:"The answer was {{}} once she explained it.", f:"obvious", ko:"그녀가 설명하자 답은 분명했다." }] },

  /* 원본의 '행사' 갈래는 버렸다 — '때, 경우' 와 품사는 같지만 뜻이 멀다. */
  { word:"occasion", pron:"어케이전", pos:"n", level:"B1", meanings:["때","경우"],
    syn:["moment","particular time","one such instance"],
    ex:[{ s:"On one {{}} the train left early.", f:"occasion", ko:"어떤 때에는 기차가 일찍 떠났다." }] },

  /* 승격 ⑱ — ★원본의 '때때로' 는 부사다. 형용사 자리이고 참조 ceaseless(ant, C)
     도 형용사여서 사전 표현 '때때로의, 간간이 있는' 을 글자까지 지켰다. */
  { word:"occasional", pron:"어케이저널", pos:"adj", level:"B2", meanings:["때때로의","간간이 있는"],
    syn:["now-and-then","infrequent","sporadic"], ant:["ceaseless"],
    ex:[{ s:"There were {{}} showers all afternoon.", f:"occasional", ko:"오후 내내 때때로의 소나기가 있었다." }] },

  /* 원본은 '점유, 점령' 이었다. '점령' 을 그대로 두면 같은 챕터의 occupation
     (직업, 점령) 과 물리므로 '사용' 으로 갈랐다. */
  { word:"occupancy", pron:"아큐펀시", pos:"n", level:"C1", meanings:["점유","사용"],
    syn:["taking up of space","tenancy","use of a place"],
    ex:[{ s:"The hotel reported full {{}} in August.", f:"occupancy", ko:"그 호텔은 팔월에 만실 점유를 알렸다." }] },

  /* 승격 ⑲ — 사전이 '직업; 점령' 이었다. 구분 기호만 쉼표로 바꿨다(career, C). */
  { word:"occupation", pron:"아큐페이션", pos:"n", level:"B1", meanings:["직업","점령"],
    syn:["career","line of work","trade"],
    ex:[{ s:"Please state your {{}} on the form.", f:"occupation", ko:"양식에 직업을 적어 주세요." }] },

  /* 승격 ⑳ — 사전은 '차지하다' 한 갈래였다. 원본의 셋 중 '점령하다' 를 붙였다
     (뜻은 두 개까지만 담는다 — '종사하다' 는 occupation 쪽에 있다).
     첫 뜻은 사전값을 지켰다(inhabit, I). */
  { word:"occupy", pron:"아큐파이", pos:"v", level:"B2", meanings:["차지하다","점령하다"],
    syn:["take up","hold by force","move into"],
    ex:[{ s:"Boxes {{}} most of the hallway.", f:"occupy", ko:"상자들이 복도의 대부분을 차지한다." }] },

  /* 승격 21 — 사전이 '발생하다; 떠오르다' 였다. 구분 기호만 바꿨다.
     참조 셋 중 come to mind(C) 가 '떠오르다' 갈래를 쓴다. */
  { word:"occur", pron:"어커", pos:"v", level:"B1", meanings:["발생하다","떠오르다"],
    syn:["arise","come about","take place"],
    ex:[{ s:"Such storms {{}} only once a decade.", f:"occur", ko:"그런 폭풍은 십 년에 한 번만 발생한다." }] },

  /* 승격 22 — 사전 표현 '일어남, 사례' 를 글자까지 지켰다. 원본의 '발생' 을
     쓰면 incidence(발생, 출현, I) 와 첫 뜻이 같아진다. */
  { word:"occurrence", pron:"어커런스", pos:"n", level:"B2", meanings:["일어남","사례"],
    syn:["incidence","happening","one such case"],
    ex:[{ s:"Frost in May is a rare {{}}.", f:"occurrence", ko:"오월의 서리는 드문 일어남이다." }] },

  /* occurrent 는 원본 뜻에 '(= current)', '(= incidental)' 표기가 남아 있었다.
     표기를 걷고 '현재 일어나고 있는' 한 갈래로 정리했다. 매우 드문 낱말이지만
     유의어 셋을 세울 수 있어 비우지 않았다. */
  { word:"occurrent", pron:"어커런트", pos:"adj", level:"C2", meanings:["현재 일어나고 있는"],
    syn:["happening now","under way at present","presently arising"],
    ex:[{ s:"The study tracks {{}} changes, not past ones.", f:"occurrent", ko:"그 연구는 지난 변화가 아니라 현재 일어나고 있는 변화를 살핀다." }] },

  /* 승격 23 — 사전 표현 '이상한, 색다른' 을 글자까지 지켰다(eccentric, E).
     원본의 '홀수의' 갈래는 버렸다 — 한 표제어에 수학 뜻까지 담지 않는다. */
  { word:"odd", pron:"아드", pos:"adj", level:"B2", meanings:["이상한","색다른"],
    syn:["eccentric","out of the ordinary","curious"], ant:["typical"],
    ex:[{ s:"There was an {{}} smell in the kitchen.", f:"odd", ko:"부엌에서 이상한 냄새가 났다." }] },

  { word:"odds", pron:"아즈", pos:"n", level:"B2", meanings:["가능성","확률"],
    syn:["likelihood","chances","betting ratio"],
    ex:[{ s:"The {{}} of rain today are low.", f:"odds", ko:"오늘 비 올 가능성은 낮다." }] },

  { word:"odor", pron:"오더", pos:"n", level:"B2", meanings:["냄새","향기"],
    syn:["smell","scent","whiff"],
    ex:[{ s:"A faint {{}} of smoke hung in the air.", f:"odor", ko:"희미한 연기 냄새가 공기에 걸려 있었다." }] },

  /* 승격 24 — 사전은 '위법 행동' 한 갈래였다. 원본의 '범죄' 를 붙였다.
     원본에 남아 있던 '(=offense)' 표기는 걷었다. 첫 뜻은 사전값을 지켰다(misdeed, M). */
  { word:"offence", pron:"어펜스", pos:"n", level:"B2", meanings:["위법 행동","범죄"],
    syn:["misdeed","breach of law","unlawful act"],
    ex:[{ s:"Parking there is a minor {{}}.", f:"offence", ko:"거기에 주차하는 것은 가벼운 위법 행동이다." }] },

  /* 승격 25 — 사전 표현을 글자까지 지켰다(antagonize, A · insult, I).
     원본의 '불쾌하게 하다' 대신 사전 쪽을 남겼다. */
  { word:"offend", pron:"어펜드", pos:"v", level:"B2", meanings:["기분을 상하게 하다"],
    syn:["antagonize","hurt the feelings of","give offence to"], ant:["please"],
    ex:[{ s:"He did not mean to {{}} anyone.", f:"offend", ko:"그는 누구의 기분을 상하게 할 뜻이 없었다." }] },

  /* 승격 26 — 사전 표현 '불쾌한, 공격적인' 을 글자까지 지켰다.
     disagreeable·distasteful(둘 다 D) 과 첫 뜻이 겹치지만 서로 유의어다. */
  { word:"offensive", pron:"어펜시브", pos:"adj", level:"B2", meanings:["불쾌한","공격적인"],
    syn:["disagreeable","insulting","attacking"], ant:["inoffensive"],
    ex:[{ s:"The joke was {{}} to many listeners.", f:"offensive", ko:"그 농담은 많은 듣는 이에게 불쾌했다." }] },

  /* 승격 27 — 사전이 '제공하다; 제안' 으로 동사와 명사가 섞여 있었다.
     demand(ant, D) 가 동사여서 동사로 세우고, 사전의 첫 갈래 '제공하다' 를
     그대로 첫 자리에 남겼다. 원본의 명사 '제안, 제의' 갈래는 버렸다. */
  { word:"offer", pron:"오퍼", pos:"v", level:"B1", meanings:["제공하다","제안하다"],
    syn:["hold out","present for acceptance","put on the table"], ant:["demand"],
    ex:[{ s:"The shop will {{}} a discount to members.", f:"offer", ko:"그 가게는 회원에게 할인을 제공할 것이다." }] },

  /* 승격 28 — 사전이 '공식적인; 공무원' 으로 형용사와 명사가 섞여 있었다.
     authoritative(A)·formal(F) 둘 다 형용사여서 형용사로 세우고 '관리' 는 버렸다. */
  { word:"official", pron:"어피셜", pos:"adj", level:"B2", meanings:["공식적인","공무상의"],
    syn:["authoritative","formal","sanctioned"], ant:["unofficial"],
    ex:[{ s:"We are waiting for the {{}} result.", f:"official", ko:"우리는 공식적인 결과를 기다리고 있다." }] },

  /* 승격 29 — ★원본의 뜻이 틀렸다. '능숙함, 능숙도' 는 competence(능숙함, 능력) 의
     뜻이다. 참조 다섯 곳(compensate·compensate for·counteract·counterbalance·
     make up for) 이 전부 상쇄 뜻을 쓰고 있어 오류가 분명했다.
     사전 표현 '상쇄하다, 보충하다' 를 글자까지 지켜 다섯 화면을 그대로 두었다. */
  { word:"offset", pron:"오프셋", pos:"v", level:"C1", meanings:["상쇄하다","보충하다"],
    syn:["counteract","balance out","cancel out"],
    ex:[{ s:"Tree planting can {{}} some carbon emissions.", f:"offset", ko:"나무 심기는 얼마간의 탄소 배출을 상쇄할 수 있다." }] },

  /* ── 챕터 3 ─────────────────────────────────────── */
  /* 'on ~' 으로 시작하는 구가 줄줄이 붙어 구·표현이 열한 개다. 저장소 관례대로
     phr 에는 ex 를 넣지 않는다(기존 phr 261개 중 ex 가 있는 것 0개).            */

  /* 승격 30 — 사전 표현 '자식, 자손' 을 글자까지 지켰다(descendant, D).
     원본의 '(동물의) 새끼' 괄호는 걷었다. */
  { word:"offspring", pron:"오프스프링", pos:"n", level:"B2", meanings:["자식","자손"],
    syn:["descendant","progeny","young of a creature"],
    ex:[{ s:"Salmon return upstream to leave their {{}}.", f:"offspring", ko:"연어는 자손을 남기려고 강을 거슬러 돌아온다." }] },

  { word:"off-the-record", pron:"오프 더 레코드", pos:"adj", level:"C1", meanings:["비공개의","비공식의"],
    syn:["not for publication","said unofficially","kept off the books"], ant:["on-the-record"],
    ex:[{ s:"The remark was strictly {{}}.", f:"off-the-record", ko:"그 말은 철저히 비공개의 것이었다." }] },

  { word:"ointment", pron:"오인트먼트", pos:"n", level:"B2", meanings:["연고"],
    syn:["healing cream","salve","medicated balm"],
    ex:[{ s:"Rub the {{}} gently into the burn.", f:"ointment", ko:"연고를 화상에 살살 바르세요." }] },

  { word:"ominous", pron:"아머너스", pos:"adj", level:"C1", meanings:["불길한","심상치 않은"],
    syn:["boding ill","sinister","warning of trouble"], ant:["auspicious"],
    ex:[{ s:"An {{}} silence fell over the room.", f:"ominous", ko:"불길한 침묵이 방에 내렸다." }] },

  /* 승격 31 — 사전은 '빠뜨리다' 한 갈래였다. 원본의 '생략하다' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(leave out, L). */
  { word:"omit", pron:"오밋", pos:"v", level:"B2", meanings:["빠뜨리다","생략하다"],
    syn:["leave out","skip over","drop from a list"], ant:["include"],
    ex:[{ s:"Do not {{}} your phone number on the form.", f:"omit", ko:"양식에 전화번호를 빠뜨리지 마세요." }] },

  /* 승격 32 — 사전 표현 '~을 대신하여' 를 글자까지 지켰다(for one's sake, F). */
  { word:"on behalf of", pron:"온 비해프 오브", pos:"phr", level:"B2", meanings:["~을 대신하여"],
    syn:["in place of","as a representative of","speaking for"] },

  { word:"on earth", pron:"온 어쓰", pos:"phr", level:"B2", meanings:["도대체"],
    syn:["in the world","of all things","whatever for"] },

  /* 원본은 '안절부절못하여, 안달하는, 못견뎌하는' 세 갈래였다.
     한 갈래로 좁혀 형용사구답게 '안절부절못하는' 으로 두었다. */
  { word:"on edge", pron:"온 에지", pos:"phr", level:"B2", meanings:["안절부절못하는"],
    syn:["jumpy","ill at ease","keyed up"] },

  { word:"on the basis of", pron:"온 더 베이시스 오브", pos:"phr", level:"B2", meanings:["~을 기반으로","~에 근거하여"],
    syn:["grounded on","going by","resting upon"] },

  /* 승격 33 — 사전에 뜻만 있고 발음이 없던 항목이다. 표현을 글자까지 지켰다. */
  { word:"on the contrary", pron:"온 더 칸트레리", pos:"phr", level:"B2", meanings:["그와 반대로"],
    syn:["quite the opposite","far from it","instead of that"] },

  { word:"on the edge of", pron:"온 디 에지 오브", pos:"phr", level:"C1", meanings:["막 ~하려는 참에"],
    syn:["about to","on the point of","just short of"] },

  /* 승격 34 — 사전 표현 '반면에, 한편' 을 글자까지 지켰다(by contrast, B).
     원본의 '다른 관점에서' 대신 사전 쪽을 남겼다. */
  { word:"on the other hand", pron:"온 디 어더 핸드", pos:"phr", level:"B1", meanings:["반면에","한편"],
    syn:["by contrast","then again","from another view"] },

  /* 원본은 'on the tip of my tongue' 이었다. 저장소의 구 표제어는 사람을
     가리키지 않고 one's 를 쓴다 — be beyond one's control · clear one's throat ·
     for one's sake · lose one's temper 가 그렇다. 관례에 맞춰 바꿨다.
     25자로 기존 최장(23자) 을 넘지만 match-label-audit 이 통과했다. */
  { word:"on the tip of one's tongue", pron:"온 더 팁 오브 원스 텅", pos:"phr", level:"C1",
    meanings:["생각이 날 듯 말 듯하다"],
    syn:["almost recalled","nearly remembered","just out of reach"] },

  { word:"on the verge of", pron:"온 더 버지 오브", pos:"phr", level:"C1", meanings:["~의 직전에"],
    syn:["right before","close to the start of","at the brink of"] },

  /* 원본은 '완전히, 최종적으로' 였다. '완전히' 는 altogether(완전히, 전적으로, A) 의
     첫 뜻과 같아서 순서를 바꾸고 '단번에' 를 넣었다. */
  { word:"once and for all", pron:"원스 앤드 포 올", pos:"phr", level:"B2", meanings:["최종적으로","단번에"],
    syn:["for good","conclusively","settled for ever"] },

  { word:"one by one", pron:"원 바이 원", pos:"phr", level:"B1", meanings:["차례로"],
    syn:["in turn","singly","one after another"] },

  /* 승격 35 — 사전 표현 '일방적인, 편파적인' 을 글자까지 지켰다.
     원본은 순서가 '편파적인, 일방적인' 이었지만 biased(B)·mutual(ant, M) 두 곳을
     보존하려고 사전 쪽을 남겼다. */
  { word:"one-sided", pron:"원 사이디드", pos:"adj", level:"B2", meanings:["일방적인","편파적인"],
    syn:["biased","slanted","unfair to one side"], ant:["even-handed"],
    ex:[{ s:"The match was {{}} from the first minute.", f:"one-sided", ko:"그 경기는 첫 분부터 일방적이었다." }] },

  { word:"one-size-fits-all", pron:"원 사이즈 핏츠 올", pos:"adj", level:"C1", meanings:["두루 적용되는"],
    syn:["uniform for everyone","standard for all cases","applied without exception"],
    ex:[{ s:"A {{}} rule rarely suits every school.", f:"one-size-fits-all", ko:"두루 적용되는 규칙이 모든 학교에 맞는 일은 드물다." }] },

  /* 승격 36 — 사전 표현 '진행 중인, 계속되는' 을 글자까지 지켰다
     (continuous, C · in progress, I). in progress 와 첫 뜻이 같지만 서로 유의어다. */
  { word:"ongoing", pron:"온고잉", pos:"adj", level:"B2", meanings:["진행 중인","계속되는"],
    syn:["continuous","still under way","unfinished"], ant:["completed"],
    ex:[{ s:"Repairs to the bridge are {{}}.", f:"ongoing", ko:"그 다리 보수는 진행 중이다." }] },

  /* 승격 37 — 사전 표현 '구경꾼, 방관자' 를 글자까지 지켰다(bystander, B).
     원본은 순서가 '방관자, 구경꾼' 이었지만 사전 쪽을 남겼다. */
  { word:"onlooker", pron:"온루커", pos:"n", level:"B2", meanings:["구경꾼","방관자"],
    syn:["bystander","watcher","person looking on"],
    ex:[{ s:"An {{}} called the fire brigade.", f:"onlooker", ko:"한 구경꾼이 소방대를 불렀다." }] },

  /* ── 챕터 4 ─────────────────────────────────────── */
  /* 'op-' 로 시작하는 낱말이 열세 개나 이어 붙는다. opponent·opportunity·oppose·
     opposite·opposition 다섯이 한 덩어리이고, optics·optimal·optimism·optimistic·
     optimum·option 여섯이 또 한 덩어리다. 품사와 뜻을 서로 갈라 두었다.        */

  /* 승격 38 — 사전은 '시작, 발병' 이었다. '시작' 을 그대로 두면 같은 챕터의
     opening(시작, 개막) 과 물리므로 '개시' 로 갈랐다. advent(A) 의 화면 글자가
     함께 바뀐다. */
  { word:"onset", pron:"온셋", pos:"n", level:"B2", meanings:["개시","발병"],
    syn:["first appearance","beginning of an illness","initial stage"],
    ex:[{ s:"The {{}} of the fever was sudden.", f:"onset", ko:"열의 발병은 갑작스러웠다." }] },

  { word:"onstage", pron:"온스테이지", pos:"adj", level:"B2", meanings:["무대 위의"],
    syn:["before the audience","on the boards","in view of the crowd"], ant:["backstage"],
    ex:[{ s:"Her {{}} presence filled the hall.", f:"onstage", ko:"그녀의 무대 위의 존재감이 회관을 채웠다." }] },

  /* 승격 39 — 사전 표현을 글자까지 지켰다(instant, I). 원본의 '현장의, 즉석의'
     대신 사전 쪽을 남겼다. */
  { word:"on-the-spot", pron:"온 더 스팟", pos:"adj", level:"B2", meanings:["현장에서 바로 하는"],
    syn:["done then and there","immediate at the scene","without delay"],
    ex:[{ s:"Police made an {{}} check of the vehicle.", f:"on-the-spot", ko:"경찰이 그 차량을 현장에서 바로 확인했다." }] },

  /* 승격 40 — ★원본의 뜻이 틀렸다. '공식, 개방' 의 '공식' 은 '공석' 의 오타로 보인다.
     그대로 두면 formula(공식, 방법, F) 와 첫 뜻이 겹친다. 참조 conclusion(ant, C)·
     initial(syn, I) 이 모두 시작 뜻을 쓰므로 사전 표현 '시작, 개막' 을 글자까지
     지켰다. 다만 initial 은 형용사여서 그쪽 유의어를 'earliest' 로 바꿨다. */
  { word:"opening", pron:"오프닝", pos:"n", level:"B2", meanings:["시작","개막"],
    syn:["first part","curtain-raiser","commencement"], ant:["conclusion"],
    ex:[{ s:"The {{}} of the play drew loud applause.", f:"opening", ko:"그 연극의 개막은 큰 박수를 받았다." }] },

  { word:"open-minded", pron:"오픈 마인디드", pos:"adj", level:"B2", meanings:["마음이 열린"],
    syn:["receptive","willing to listen","free of prejudice"], ant:["narrow-minded"],
    ex:[{ s:"A good judge stays {{}} until all evidence is in.", f:"open-minded", ko:"좋은 심판은 증거가 다 나올 때까지 마음이 열린 상태를 지킨다." }] },

  { word:"operate", pron:"아퍼레이트", pos:"v", level:"B1", meanings:["경영하다","가동하다"],
    syn:["run a business","work a machine","keep in action"],
    ex:[{ s:"They {{}} three bakeries in the city.", f:"operate", ko:"그들은 그 도시에서 빵집 셋을 경영한다." }] },

  { word:"operation", pron:"아퍼레이션", pos:"n", level:"B1", meanings:["수술","가동"],
    syn:["surgery","running of a machine","working order"],
    ex:[{ s:"She needs an {{}} on her knee.", f:"operation", ko:"그녀는 무릎 수술이 필요하다." }] },

  /* 승격 41 — 사전 표현 '상대, 적수' 를 글자까지 지켰다(참조 4곳).
     원본의 '상대방, 적수' 대신 사전 쪽을 남겼다. */
  { word:"opponent", pron:"어포넌트", pos:"n", level:"B2", meanings:["상대","적수"],
    syn:["adversary","enemy","one who fights against"], ant:["ally"],
    ex:[{ s:"He shook hands with his {{}} after the game.", f:"opponent", ko:"그는 경기 뒤 상대와 악수했다." }] },

  { word:"opportunity", pron:"아퍼투너티", pos:"n", level:"B1", meanings:["기회"],
    syn:["chance","opening for action","favorable moment"],
    ex:[{ s:"This is a rare {{}} to study abroad.", f:"opportunity", ko:"이것은 해외에서 공부할 드문 기회다." }] },

  /* 승격 42 — 사전은 '반대하다' 한 갈래였다. 원본은 '~에 반대하다' 였지만
     참조 셋(advocate·endorse 반의어, contradict 유의어) 을 보존하려고 사전값을
     첫 자리에 남기고 '맞서다' 를 붙였다. */
  { word:"oppose", pron:"어포즈", pos:"v", level:"B2", meanings:["반대하다","맞서다"],
    syn:["contradict","speak against","stand up to"], ant:["endorse"],
    ex:[{ s:"Residents will {{}} the new landfill.", f:"oppose", ko:"주민들은 새 매립지에 반대할 것이다." }] },

  /* 승격 43 — 사전이 '반대의; 맞은편' 으로 형용사와 명사가 섞여 있었다.
     converse(C)·inverse(I) 둘 다 형용사여서 형용사로 세웠다. 원본 첫 뜻 '반대'(n)
     를 버리자 같은 챕터의 opposition·objection(챕터 1) 과의 겹침도 함께 풀렸다. */
  { word:"opposite", pron:"아퍼짓", pos:"adj", level:"C1", meanings:["반대편의","맞은편의"],
    syn:["converse","facing","on the other side"],
    ex:[{ s:"The bakery is on the {{}} corner.", f:"opposite", ko:"그 빵집은 맞은편 모서리에 있다." }] },

  /* 승격 44 — 사전 표현 '반대, 저항' 을 글자까지 지켰다(dissent, D).
     원본의 '반대, 상대; 경쟁자' 중 '상대' 는 같은 챕터 opponent 쪽 뜻이다. */
  { word:"opposition", pron:"아퍼지션", pos:"n", level:"B2", meanings:["반대","저항"],
    syn:["dissent","resistance","pushback"], ant:["support"],
    ex:[{ s:"The bill met strong {{}} in the assembly.", f:"opposition", ko:"그 법안은 의회에서 강한 반대를 만났다." }] },

  { word:"oppressive", pron:"어프레시브", pos:"adj", level:"C1", meanings:["압제적인","압박적인"],
    syn:["tyrannical","crushing","heavy-handed"], ant:["liberating"],
    ex:[{ s:"The regime grew more {{}} each year.", f:"oppressive", ko:"그 정권은 해마다 더 압제적이 되었다." }] },

  /* optics 는 전문어다. 유의어 셋을 세울 수 있어 비우지 않았다. */
  { word:"optics", pron:"압틱스", pos:"n", level:"C2", meanings:["광학"],
    syn:["science of light","study of vision","physics of lenses"],
    ex:[{ s:"He studies {{}} at the institute.", f:"optics", ko:"그는 그 연구소에서 광학을 공부한다." }] },

  /* 승격 45 — 사전은 '최적의' 한 갈래였다. 원본의 '최선의' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(ideal, I). 같은 챕터의 optimum 을 명사로 세워
     겹침을 피했다. */
  { word:"optimal", pron:"압터멀", pos:"adj", level:"C1", meanings:["최적의","최선의"],
    syn:["ideal","best suited","most favorable"],
    ex:[{ s:"Store the film at the {{}} temperature.", f:"optimal", ko:"그 필름을 최적의 온도에 보관하세요." }] },

  { word:"optimism", pron:"압터미즘", pos:"n", level:"B2", meanings:["낙관론","낙천주의"],
    syn:["hopeful outlook","bright view","positive thinking"], ant:["pessimism"],
    ex:[{ s:"His {{}} kept the team going.", f:"optimism", ko:"그의 낙관론이 팀을 버티게 했다." }] },

  /* 원본에 남아 있던 '낙천적인; 낙관하는' 의 구분 기호를 쉼표로 바꿨다 —
     두 갈래가 모두 형용사여서 섞임이 아니다. */
  { word:"optimistic", pron:"압터미스틱", pos:"adj", level:"B2", meanings:["낙천적인","낙관하는"],
    syn:["hopeful","looking on the bright side","expecting the best"], ant:["pessimistic"],
    ex:[{ s:"She stayed {{}} despite the delays.", f:"optimistic", ko:"그녀는 지연에도 낙천적인 태도를 지켰다." }] },

  /* 원본은 '최고의, 최적의; 최적 조건' 으로 형용사와 명사가 섞여 있었다.
     참조가 없어 자유롭게 고를 수 있었고, 명사 '최적 조건' 으로 세우니 같은 챕터
     optimal(최적의, 최선의) 과의 겹침이 저절로 풀렸다. */
  { word:"optimum", pron:"압터멈", pos:"n", level:"C1", meanings:["최적 조건"],
    syn:["best possible state","ideal point","peak condition"],
    ex:[{ s:"The plant grows fastest at its {{}}.", f:"optimum", ko:"그 식물은 최적 조건에서 가장 빨리 자란다." }] },

  /* 승격 46 — 사전 표현 '선택, 대안' 을 글자까지 지켰다(alternative, A).
     원본의 '선택, 선택권' 대신 사전 쪽을 남겼다. */
  { word:"option", pron:"압션", pos:"n", level:"B1", meanings:["선택","대안"],
    syn:["alternative","choice","way open to one"],
    ex:[{ s:"Walking was the only {{}} left.", f:"option", ko:"걷는 것이 남은 유일한 선택이었다." }] },

  { word:"oral", pron:"오럴", pos:"adj", level:"B2", meanings:["구술의","구두의"],
    syn:["spoken","by word of mouth","said aloud"], ant:["written"],
    ex:[{ s:"The course ends with an {{}} exam.", f:"oral", ko:"그 과정은 구술의 시험으로 끝난다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "abide by": "~을 지키다",
  "about to": "이제 곧 ~할",
  "almost recalled": "거의 떠오른",
  "applied without exception": "예외 없이 적용되는",
  "as a representative of": "~의 대표로서",
  "astronomy lab": "천문 연구실",
  "at the brink of": "~의 문턱에서",
  "attacking": "몰아붙이는",
  "auspicious": "좋은 일을 알리는",
  "backstage": "무대 뒤의",
  "balance out": "서로 맞춰 없애다",
  "before the audience": "관객 앞에서 하는",
  "beginning of an illness": "병이 시작됨",
  "best possible state": "가능한 가장 좋은 상태",
  "best suited": "가장 알맞은",
  "betting ratio": "도박에서 매기는 비율",
  "bind by duty": "본분으로 묶다",
  "binding vow": "묶어 두는 다짐",
  "block up": "틀어막다",
  "boding ill": "나쁜 일을 알리는",
  "breach of law": "법을 어김",
  "bright view": "밝게 보는 태도",
  "by word of mouth": "입으로 전하는",
  "cancel out": "서로 지워 버리다",
  "careful noting": "꼼꼼히 적어 둠",
  "carrying far too much fat": "지방이 너무 많은",
  "chances": "될 성",
  "close to the start of": "~이 시작될 즈음에",
  "close watching": "가까이 지켜봄",
  "come by": "어렵게 구하다",
  "completed": "다 끝난",
  "conclusively": "결말이 나게",
  "corpulence": "살집이 두둑함",
  "corpulent": "살집이 두둑한",
  "counter-argument": "맞서 내는 주장",
  "crushing": "짓누르는",
  "curtain-raiser": "막을 올리는 순서",
  "doing as told": "말하는 대로 하는",
  "done then and there": "그 자리에서 해내는",
  "drop from a list": "목록에서 빼다",
  "dutiful": "본분을 다하는",
  "earliest": "맨 처음의",
  "erase all trace of": "~의 흔적을 다 지우다",
  "excess body fat": "넘치는 몸의 지방",
  "expecting the best": "잘될 것으로 보는",
  "extreme overweight": "심한 과체중",
  "facing": "마주 보는",
  "fact-based": "사실에 바탕한",
  "far from it": "그렇기는커녕",
  "favorable moment": "알맞은 때",
  "first appearance": "처음 나타남",
  "first part": "앞부분",
  "follow orders": "명령을 좇다",
  "for good": "아주 영영",
  "free of opinion": "의견이 섞이지 않은",
  "free of prejudice": "선입견이 없는",
  "from another view": "다른 쪽에서 보면",
  "get hold of": "손에 넣다",
  "give offence to": "~에게 언짢음을 주다",
  "going by": "~을 따라 판단하여",
  "grossly overweight": "지나치게 체중이 많은",
  "grounded on": "~에 발판을 둔",
  "happening": "일이 벌어짐",
  "happening now": "지금 벌어지는",
  "hard to make out": "알아보기 어려운",
  "healing cream": "상처에 바르는 크림",
  "heavy-handed": "함부로 세게 다루는",
  "hide from view": "보이지 않게 가리다",
  "hold by force": "힘으로 붙들다",
  "hold out": "내밀어 주다",
  "hopeful outlook": "희망을 품은 시각",
  "hurdle": "넘어야 할 벽",
  "hurt the feelings of": "~의 마음을 아프게 하다",
  "ideal point": "가장 알맞은 지점",
  "ill at ease": "마음이 편치 않은",
  "immediate at the scene": "현장에서 곧바로 하는",
  "in place of": "~을 갈음하여",
  "in the world": "세상에",
  "in view of the crowd": "사람들 눈에 보이는",
  "infrequent": "드문드문한",
  "initial stage": "첫 단계",
  "instead of that": "그 대신에",
  "insulting": "모욕하는",
  "jumpy": "움찔거리는",
  "just out of reach": "손에 닿을 듯 안 닿는",
  "just short of": "~에 조금 못 미쳐",
  "keep in action": "움직이게 유지하다",
  "keep to": "~에서 벗어나지 않다",
  "keep to the rules": "규칙을 지키다",
  "kept off the books": "기록에 남기지 않는",
  "keyed up": "바짝 긴장한",
  "leave no choice for": "~에게 선택을 남기지 않다",
  "left behind by progress": "발전에 뒤처진",
  "liberating": "놓여나게 하는",
  "line of work": "일하는 분야",
  "little known": "거의 알려지지 않은",
  "looking on the bright side": "밝은 쪽을 보는",
  "make duty-bound": "할 수밖에 없게 만들다",
  "make unclear": "불분명하게 만들다",
  "medicated balm": "약을 넣은 바름약",
  "moment": "그 순간",
  "most favorable": "가장 유리한",
  "move into": "들어가 자리 잡다",
  "nearly remembered": "떠오를 듯한",
  "no longer in use": "더 이상 쓰이지 않는",
  "not for publication": "실으면 안 되는",
  "not optional": "고를 수 없는",
  "now-and-then": "이따금 있는",
  "object to": "~에 반대하다",
  "of all things": "하필이면",
  "on the boards": "무대에 올라 있는",
  "on the facts alone": "사실만을 근거로",
  "on the other side": "건너편의",
  "on the point of": "~하려는 순간에",
  "on-the-record": "공개를 전제로 한",
  "one after another": "잇달아",
  "one such case": "그런 한 가지",
  "one such instance": "그런 한 차례",
  "one who fights against": "맞서 싸우는 이",
  "opening for action": "움직일 틈",
  "out of the ordinary": "보통과 다른",
  "particular time": "특정한 시점",
  "peak condition": "가장 좋은 조건",
  "person looking on": "옆에서 보는 사람",
  "physical body": "형체를 가진 몸",
  "physics of lenses": "렌즈의 물리",
  "place under obligation": "의무 아래 두다",
  "plain to see": "보면 바로 아는",
  "positive thinking": "긍정으로 생각하기",
  "present for acceptance": "받아 달라고 내놓다",
  "presently arising": "지금 생겨나는",
  "progeny": "낳은 자손",
  "pushback": "되밀어 내는 움직임",
  "put on the table": "논의 자리에 내놓다",
  "quite the opposite": "오히려 거꾸로",
  "receptive": "받아들일 자세가 된",
  "resting upon": "~에 기대어",
  "right before": "바로 앞에",
  "run a business": "사업을 꾸리다",
  "running of a machine": "기계가 돌아감",
  "said aloud": "소리 내어 말한",
  "said unofficially": "비공식으로 한 말의",
  "salve": "바르는 약",
  "sanctioned": "허락을 받은",
  "science of light": "빛을 다루는 학문",
  "set in one's ways": "제 방식만 지키는",
  "settled for ever": "다시 뒤집히지 않게",
  "singly": "하나씩",
  "sinister": "음험한",
  "skip over": "건너뛰다",
  "sky-viewing post": "하늘을 보는 자리",
  "slanted": "한쪽으로 기울어진",
  "solemn promise": "엄숙한 약속",
  "solid thing": "단단한 것",
  "speak against": "반대하는 말을 하다",
  "speaking for": "~을 대변하여",
  "spoken remark": "입으로 낸 말",
  "stand in the way of": "~의 앞을 가로막다",
  "stand up to": "~에 맞서다",
  "standard for all cases": "모든 경우에 같은",
  "star-watching station": "별을 살피는 시설",
  "still under way": "아직 끝나지 않은",
  "study of vision": "보는 원리 연구",
  "superseded": "다른 것에 밀려난",
  "surgery": "외과 처치",
  "sworn word": "맹세한 말",
  "take place": "벌어지다",
  "taking up of space": "자리를 차지함",
  "tenancy": "빌려 씀",
  "then again": "그러고 보면 또",
  "thing in the way": "길을 막는 것",
  "typical": "으레 그런",
  "tyrannical": "폭압을 휘두르는",
  "under way at present": "지금 진행 중인",
  "unfair to one side": "한편에 불리한",
  "unfinished": "마무리되지 않은",
  "uniform for everyone": "모두에게 똑같은",
  "unlawful act": "법에 어긋난 짓",
  "unofficial": "공식이 아닌",
  "use of a place": "장소를 씀",
  "voiced disagreement": "소리 내어 밝힌 반대",
  "voluntary": "스스로 하는",
  "warning of trouble": "말썽을 알리는",
  "watch closely": "가까이 지켜보다",
  "watcher": "지켜보는 이",
  "way open to one": "택할 수 있는 길",
  "whatever for": "무엇 때문에",
  "whiff": "살짝 스치는 냄새",
  "willing to listen": "귀를 기울이려는",
  "without bias": "치우침 없이",
  "without delay": "늦추지 않고 하는",
  "work a machine": "기계를 다루다",
  "working order": "제대로 돌아가는 상태",
  "young of a creature": "짐승의 새끼"
});
