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
    ex:[{ s:"He was too {{}} to admit the mistake.", f:"obstinate", ko:"그는 잘못을 인정하기에 너무 고집이 셌다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "abide by": "~을 지키다",
  "astronomy lab": "천문 연구실",
  "bind by duty": "본분으로 묶다",
  "binding vow": "묶어 두는 다짐",
  "careful noting": "꼼꼼히 적어 둠",
  "carrying far too much fat": "지방이 너무 많은",
  "close watching": "가까이 지켜봄",
  "corpulence": "살집이 두둑함",
  "corpulent": "살집이 두둑한",
  "counter-argument": "맞서 내는 주장",
  "doing as told": "말하는 대로 하는",
  "dutiful": "본분을 다하는",
  "erase all trace of": "~의 흔적을 다 지우다",
  "excess body fat": "넘치는 몸의 지방",
  "extreme overweight": "심한 과체중",
  "fact-based": "사실에 바탕한",
  "follow orders": "명령을 좇다",
  "free of opinion": "의견이 섞이지 않은",
  "grossly overweight": "지나치게 체중이 많은",
  "hard to make out": "알아보기 어려운",
  "hide from view": "보이지 않게 가리다",
  "hurdle": "넘어야 할 벽",
  "keep to": "~에서 벗어나지 않다",
  "keep to the rules": "규칙을 지키다",
  "leave no choice for": "~에게 선택을 남기지 않다",
  "left behind by progress": "발전에 뒤처진",
  "little known": "거의 알려지지 않은",
  "make duty-bound": "할 수밖에 없게 만들다",
  "make unclear": "불분명하게 만들다",
  "no longer in use": "더 이상 쓰이지 않는",
  "not optional": "고를 수 없는",
  "object to": "~에 반대하다",
  "on the facts alone": "사실만을 근거로",
  "physical body": "형체를 가진 몸",
  "place under obligation": "의무 아래 두다",
  "set in one's ways": "제 방식만 지키는",
  "sky-viewing post": "하늘을 보는 자리",
  "solemn promise": "엄숙한 약속",
  "solid thing": "단단한 것",
  "spoken remark": "입으로 낸 말",
  "star-watching station": "별을 살피는 시설",
  "superseded": "다른 것에 밀려난",
  "sworn word": "맹세한 말",
  "thing in the way": "길을 막는 것",
  "voiced disagreement": "소리 내어 밝힌 반대",
  "voluntary": "스스로 하는",
  "watch closely": "가까이 지켜보다",
  "without bias": "치우침 없이",
});
