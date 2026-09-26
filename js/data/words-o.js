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
  { word:"obsession", exams:["공무원"], pron:"옵세션", pos:"n", level:"B2", meanings:["집착","강박"], syn:["fixation","preoccupation","compulsion"], ex:[{ s:"For many people, work has become an {{}}.", f:"obsession", ko:"많은 사람에게 일은 집착이 되었다." }] },
  { word:"occasionally", exams:["공무원"], pron:"어케이저널리", pos:"adv", level:"B2", meanings:["가끔","때때로"], syn:["sometimes","now and then","periodically"], ant:["frequently"], ex:[{ s:"They speak only {{}} while playing on their own.", f:"occasionally", ko:"그들은 혼자 놀면서 가끔씩만 말한다." }] },
  { word:"oddity", exams:["공무원"], pron:"아디티", pos:"n", level:"C1", meanings:["특이한 것","기이함"], syn:["peculiarity","curiosity","anomaly"], ex:[{ s:"Archives hold oddities such as peddler licenses.", f:"oddities", ko:"기록보관소에는 행상 면허 같은 특이한 것들이 있다." }] },
  { word:"opulent", exams:["공무원"], pron:"아퓰런트", pos:"adj", level:"C2", meanings:["호화로운","부유한"], syn:["luxurious","lavish","sumptuous"], ant:["modest"], ex:[{ s:"Their house seemed unnecessarily {{}}.", f:"opulent", ko:"그들의 집은 불필요하게 호화로워 보였다." }] },
  { word:"otherworldly", exams:["공무원"], pron:"아더월들리", pos:"adj", level:"C2", meanings:["초현실적인","이 세상 것 같지 않은"], syn:["unearthly","surreal","ethereal"], ex:[{ s:"The driest deserts are harsh and {{}}.", f:"otherworldly", ko:"가장 건조한 사막은 혹독하고 초현실적이다." }] },
  { word:"opt", exams:["공무원"], pron:"옵트", pos:"v", level:"C1", meanings:["선택하다"], syn:["choose","select","decide"], ex:[{ s:"They {{}} for reusable containers instead.", f:"opt", ko:"그들은 대신 재사용 용기를 선택한다." }], gov:{ prep:["for"], usage:"opt for ~ : ~을 선택하다 / opt out : 빠지다" } },
  { word:"overspend", exams:["공무원"], pron:"오버스펜드", pos:"v", level:"C1", meanings:["과소비하다","초과 지출하다"], syn:["splurge","overpay","squander"], ant:["save"], ex:[{ s:"The season can be a time you {{}} on gifts.", f:"overspend", ko:"그 시즌은 선물에 과소비하는 때가 될 수 있다." }] },
  { word:"observer", exams:["공무원"], pron:"업저버", pos:"n", level:"B2", meanings:["관찰자","참관인"], syn:["onlooker","spectator","witness"], ant:["participant"], ex:[{ s:"Humans are allowed, but only as {{}}.", f:"observers", ko:"인간은 허용되지만 오직 참관인으로만 가능하다." }] },
  { word:"ordinary", exams:["공무원"], pron:"오디너리", pos:"adj", level:"B1", meanings:["평범한","보통의"], syn:["common","usual","normal"], ant:["extraordinary"], ex:[{ s:"Do not throw it out with {{}} trash.", f:"ordinary", ko:"그것을 일반 쓰레기와 함께 버리지 마라." }] },
  { word:"outwardly", exams:["공무원"], pron:"아웃워들리", pos:"adv", level:"C1", meanings:["겉으로는","외관상"], syn:["externally","apparently","seemingly"], ant:["inwardly"], ex:[{ s:"He remained {{}} calm during the crisis.", f:"outwardly", ko:"그는 위기 동안 겉으로는 침착함을 유지했다." }] },
  { word:"overconsumption", exams:["공무원"], pron:"오버컨섬션", pos:"n", level:"C1", meanings:["과소비","과잉 섭취"], syn:["overuse","excess","overindulgence"], ant:["moderation"], ex:[{ s:"Children's health is declining due to {{}} of fast food.", f:"overconsumption", ko:"패스트푸드의 과잉 섭취로 아이들의 건강이 나빠지고 있다." }] },
  { word:"overgrown", exams:["공무원"], pron:"오버그로운", pos:"adj", level:"C1", meanings:["웃자란","무성한"], syn:["unkempt","weedy","overrun"], ant:["trimmed"], ex:[{ s:"The program requires no {{}} yards.", f:"overgrown", ko:"그 프로그램은 웃자란 마당이 없을 것을 요구한다." }] },
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
  { word:"objective", exams:["공무원"], pron:"업젝티브", pos:"adj", level:"B2", meanings:["객관적인","사실에 근거한"],
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
  { word:"obligatory", pron:"어블리거토리", pos:"adj", level:"C1", meanings:["의무로 정해진","꼭 해야 하는"],
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

  { word:"observation", exams:["공무원"], pron:"압저베이션", pos:"n", level:"B2", meanings:["관찰","논평"],
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
  { word:"occasional", exams:["공무원"], pron:"어케이저널", pos:"adj", level:"B2", meanings:["때때로의","간간이 있는"],
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

  { word:"operate", exams:["공무원"], pron:"아퍼레이트", pos:"v", level:"B1", meanings:["경영하다","가동하다"],
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

  { word:"opportunity", exams:["공무원"], pron:"아퍼투너티", pos:"n", level:"B1", meanings:["기회"],
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
  { word:"opposition", exams:["공무원"], pron:"아퍼지션", pos:"n", level:"B2", meanings:["반대","저항"],
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
    ex:[{ s:"The course ends with an {{}} exam.", f:"oral", ko:"그 과정은 구술의 시험으로 끝난다." }] },

  /* ── 챕터 5 ─────────────────────────────────────── */
  /* 'organ-' 어근이 여섯 개(organ·organic·organism·organization·organizational·
     organize), 'orient-' 가 셋, 'origin-' 이 둘, 'orphan-' 이 둘 붙는다.
     품사가 n/adj/v 로 갈리고 뜻도 서로 달라 같은 보드에서 헷갈리지 않는다.     */

  { word:"orator", pron:"오레이터", pos:"n", level:"C1", meanings:["연설자","강연자"],
    syn:["public speaker","speech-maker","one who addresses a crowd"],
    ex:[{ s:"The crowd fell silent as the {{}} began.", f:"orator", ko:"연설자가 시작하자 군중이 조용해졌다." }] },

  /* 원본은 '궤도; 궤도를 돌다' 로 명사와 동사가 섞여 있었다. 참조가 없어
     자유롭게 고를 수 있었고 명사 한 갈래로 정리했다. */
  { word:"orbit", exams:["공무원"], pron:"오빗", pos:"n", level:"B2", meanings:["궤도"],
    syn:["circling path","course around a body","revolution track"],
    ex:[{ s:"The satellite entered a low {{}}.", f:"orbit", ko:"그 위성은 낮은 궤도에 들어섰다." }] },

  { word:"orchard", pron:"오처드", pos:"n", level:"B2", meanings:["과수원"],
    syn:["fruit garden","grove of fruit trees","plantation of fruit"],
    ex:[{ s:"Their {{}} yields apples every autumn.", f:"orchard", ko:"그들의 과수원은 가을마다 사과를 낸다." }] },

  /* 원본의 '(신체) 장기, 기관' 괄호를 걷었다. 같은 챕터 organization 을
     '조직, 단체' 로 갈라 '기관' 이 서로 물리지 않게 했다. */
  { word:"organ", pron:"오건", pos:"n", level:"B2", meanings:["장기","기관"],
    syn:["body part","internal structure","working unit of the body"],
    ex:[{ s:"The liver is the largest internal {{}}.", f:"organ", ko:"간은 가장 큰 내부 장기다." }] },

  /* 승격 47 — 사전 표현 '유기적인, 유기농의' 를 글자까지 지켰다(biological, B).
     원본의 '화학 비료를 쓰지 않는' 은 서술이 길어서 버렸다. */
  { word:"organic", pron:"오개닉", pos:"adj", level:"B2", meanings:["유기적인","유기농의"],
    syn:["biological","chemical-free","naturally grown"], ant:["synthetic"],
    ex:[{ s:"The farm sells only {{}} vegetables.", f:"organic", ko:"그 농장은 유기농의 채소만 판다." }] },

  { word:"organism", exams:["공무원"], pron:"오거니즘", pos:"n", level:"B2", meanings:["유기체"],
    syn:["living thing","life form","biological entity"],
    ex:[{ s:"Every {{}} needs water to survive.", f:"organism", ko:"모든 유기체는 살아남으려면 물이 필요하다." }] },

  /* 승격 48 — 사전은 '조직, 기관' 이었다. '기관' 을 그대로 두면 같은 챕터의
     organ(장기, 기관) 과 물리므로 원본의 '단체' 로 갈랐다.
     association(A)·institution(I) 두 곳의 화면 글자가 함께 바뀐다. */
  { word:"organization", exams:["공무원"], pron:"오거니제이션", pos:"n", level:"B1", meanings:["조직","단체"],
    syn:["association","institution","body of members"],
    ex:[{ s:"She founded an {{}} for street children.", f:"organization", ko:"그녀는 거리 아이들을 위한 단체를 세웠다." }] },

  /* 승격 49 — ★원본의 '구조적인' 은 structural 의 뜻이다. 사전은 '조직의' 한
     갈래였고, 거기에 원본의 '조직적인' 을 붙였다. 첫 뜻은 사전값을 지켰다
     (administrative, A). */
  { word:"organizational", pron:"오거니제이셔널", pos:"adj", level:"C1", meanings:["조직의","조직적인"],
    syn:["administrative","to do with running a group","managerial"],
    ex:[{ s:"The delay was an {{}} failure, not a technical one.", f:"organizational", ko:"그 지연은 기술이 아니라 조직의 실패였다." }] },

  /* 승격 50 — 사전 표현 '조직하다, 정리하다' 를 글자까지 지켰다
     (arrange, A · coordinate, C). 원본의 '체계화하다' 대신 사전 쪽을 남겼다. */
  { word:"organize", exams:["공무원"], pron:"오거나이즈", pos:"v", level:"B1", meanings:["조직하다","정리하다"],
    syn:["arrange","put in order","set up"],
    ex:[{ s:"Volunteers helped {{}} the book sale.", f:"organize", ko:"자원봉사자들이 책 판매 행사를 조직하는 것을 도왔다." }] },

  /* 승격 51 — 사전에 뜻만 있고 발음이 없던 항목이다. 사전값 '방향을 잡다' 를
     첫 자리에 두고 원본의 '~에 맞추다' 를 붙였다(원본의 '(특정 목적에)' 괄호는 걷었다). */
  { word:"orient", pron:"오리엔트", pos:"v", level:"C1", meanings:["방향을 잡다","~에 맞추다"],
    syn:["find one's bearings","point in a direction","adapt to a purpose"],
    ex:[{ s:"Use the map to {{}} yourself before setting off.", f:"orient", ko:"떠나기 전에 지도로 방향을 잡으세요." }] },

  /* 원본의 '동양 (문명)의' 괄호를 걷었다. 유의어는 모두 소문자로 등록했다 —
     GLOSS·PRON 조회가 toLowerCase() 로 이뤄지므로 대문자 키는 뜻이 비어 보인다. */
  { word:"oriental", pron:"오리엔털", pos:"adj", level:"C1", meanings:["동양의"],
    syn:["eastern","of the east","far-eastern"], ant:["western"],
    ex:[{ s:"The museum holds a fine {{}} collection.", f:"oriental", ko:"그 박물관은 훌륭한 동양의 소장품을 갖고 있다." }] },

  /* 원본의 '오리엔테이션' 은 외래어를 그대로 옮긴 것이어서 뺐다 —
     M 세트 multimedia 의 '멀티미디어' 와 같은 처리다. */
  { word:"orientation", pron:"오리엔테이션", pos:"n", level:"B2", meanings:["예비 교육","방향"],
    syn:["introductory training","sense of direction","initial briefing"],
    ex:[{ s:"New staff attend a two-day {{}}.", f:"orientation", ko:"새 직원은 이틀간의 예비 교육에 참석한다." }] },

  /* 승격 52 — 사전 표현 '독창성' 을 글자까지 지켰다(creativity, C).
     원본의 '독창력, 독창성' 중 앞 갈래는 뜻이 거의 같아 버렸다. */
  { word:"originality", pron:"어리저낼러티", pos:"n", level:"C1", meanings:["독창성"],
    syn:["creativity","inventiveness","freshness of thought"],
    ex:[{ s:"The judges praised the {{}} of her design.", f:"originality", ko:"심사위원들은 그녀 설계의 독창성을 칭찬했다." }] },

  /* 승격 53 — 사전 표현 '유래하다, 시작되다' 를 글자까지 지켰다
     (come into existence, C). 원본의 '고안하다' 갈래는 버렸다. */
  { word:"originate", pron:"어리저네이트", pos:"v", level:"B2", meanings:["유래하다","시작되다"],
    syn:["come into existence","arise from","have its source in"],
    ex:[{ s:"The custom may {{}} in a harvest festival.", f:"originate", ko:"그 관습은 추수 축제에서 유래할지도 모른다." }] },

  /* 승격 54 — 사전이 '장식하다; 장식품' 으로 동사와 명사가 섞여 있었다.
     decoration(D) 은 명사, adorn(A) 은 동사였다. 원본이 명사뿐이어서 명사로
     세우고 adorn 쪽 유의어를 'deck out' 으로 바꿨다(words.js).
     decoration 의 첫 뜻도 '장식' 이지만 둘은 서로 유의어다. */
  { word:"ornament", pron:"오너먼트", pos:"n", level:"B2", meanings:["장식","장신구"],
    syn:["decoration","trinket","decorative piece"],
    ex:[{ s:"A small glass {{}} hung from the branch.", f:"ornament", ko:"작은 유리 장식이 가지에 걸려 있었다." }] },

  /* 원본은 '화려한, 정교한' 이었다. '화려한' 은 gorgeous(화려한, 호화스러운, G) 의
     첫 뜻과 같아서 순서를 바꾸고 '정교하게 꾸민' 을 앞세웠다. */
  { word:"ornate", pron:"오네이트", pos:"adj", level:"C1", meanings:["정교하게 꾸민","화려한"],
    syn:["elaborately decorated","richly adorned","full of fine detail"], ant:["plain"],
    ex:[{ s:"The hall had an {{}} ceiling.", f:"ornate", ko:"그 회관에는 정교하게 꾸민 천장이 있었다." }] },

  /* 원본은 '고아로 만들다; 고아' 로 동사와 명사가 섞여 있었다. 참조가 없어
     자유롭게 고를 수 있었고, 수능에서 흔한 명사로 세웠다. */
  { word:"orphan", pron:"오펀", pos:"n", level:"B2", meanings:["고아"],
    syn:["parentless child","child left without parents","foundling"],
    ex:[{ s:"The war left him an {{}} at the age of six.", f:"orphan", ko:"전쟁은 그를 여섯 살에 고아로 남겼다." }] },

  /* 승격 55 — 사전에 뜻만 있고 발음이 없던 항목이다. 표현을 글자까지 지켰다.
     원본의 '고아원, 보육원' 중 '보육원' 은 뜻이 달라져서 버렸다. */
  { word:"orphanage", pron:"오퍼니지", pos:"n", level:"B2", meanings:["고아원"],
    syn:["children's home","shelter for orphans","care home for children"],
    ex:[{ s:"She grew up in a small {{}} near the river.", f:"orphanage", ko:"그녀는 강 근처의 작은 고아원에서 자랐다." }] },

  /* 승격 56 — 사전 표현과 글자까지 같다(conventional, C). */
  { word:"orthodox", pron:"오서닥스", pos:"adj", level:"C1", meanings:["정통의","전통적인"],
    syn:["conventional","accepted as standard","going by the book"], ant:["unorthodox"],
    ex:[{ s:"He prefers {{}} treatment to new remedies.", f:"orthodox", ko:"그는 새 치료법보다 정통의 치료를 좋아한다." }] },

  /* osteoporosis 는 전문어이고 22자다. 유의어 셋을 세울 수 있어 비우지 않았다. */
  { word:"osteoporosis", pron:"아스티오퍼로시스", pos:"n", level:"C2", meanings:["골다공증"],
    syn:["bone-thinning disease","brittle-bone condition","loss of bone density"],
    ex:[{ s:"Calcium helps guard against {{}}.", f:"osteoporosis", ko:"칼슘은 골다공증을 막는 데 도움이 된다." }] },

  /* ── 챕터 6 ─────────────────────────────────────── */
  /* 'out of ~' 구가 일곱 개 붙는다. 그중 out of date·out of fashion 은 원본이
     둘 다 '시대에 뒤진, 구식인' 으로 똑같았고, 같은 챕터의 outdated 까지 합쳐
     셋이 물렸다. 이렇게 갈랐다.
       out of date '시대에 뒤진'  out of fashion '유행이 지난'  outdated '구식의, 낡은'
     챕터 1 의 obsolete 는 '한물간, 더 이상 쓰이지 않는' 으로 따로 세워 두었다.  */

  { word:"out of context", pron:"아웃 오브 칸텍스트", pos:"phr", level:"B2", meanings:["전후 관계를 무시하고"],
    syn:["torn from its setting","stripped of background","without the surrounding words"] },

  { word:"out of control", pron:"아웃 오브 컨트롤", pos:"phr", level:"B1", meanings:["통제할 수 없는"],
    syn:["beyond restraint","running wild","no longer manageable"] },

  { word:"out of date", pron:"아웃 오브 데이트", pos:"phr", level:"B2", meanings:["시대에 뒤진"],
    syn:["behind the times","no longer current","past its day"] },

  { word:"out of fashion", pron:"아웃 오브 패션", pos:"phr", level:"B2", meanings:["유행이 지난"],
    syn:["no longer in style","out of vogue","gone out of favor"] },

  { word:"out of order", pron:"아웃 오브 오더", pos:"phr", level:"B1", meanings:["고장 난"],
    syn:["not working","broken down","out of action"] },

  /* 원본은 '부적절한; 제자리에 있지 않은' 이었다. '부적절한' 은 improper(I)·
     misplaced(M) 의 첫 뜻과 같아서 뒤 갈래를 앞세웠다. */
  { word:"out of place", pron:"아웃 오브 플레이스", pos:"phr", level:"B2", meanings:["제자리에 있지 않은"],
    syn:["in the wrong spot","not where it belongs","badly positioned"] },

  { word:"out of sync", pron:"아웃 오브 싱크", pos:"phr", level:"B2", meanings:["서로 맞지 않는"],
    syn:["not matching up","off the beat","failing to line up"] },

  /* 원본은 '(미개척의) 오지, 오지의' 였다. 괄호를 걷고 명사 한 갈래로 정리했다. */
  { word:"outback", pron:"아웃백", pos:"n", level:"C1", meanings:["오지"],
    syn:["remote interior","far inland country","back country"],
    ex:[{ s:"They drove for days across the {{}}.", f:"outback", ko:"그들은 며칠을 오지를 가로질러 달렸다." }] },

  /* 승격 57 — 사전 표현 '발발, 발생' 을 글자까지 지켰다(epidemic, E).
     원본의 '발발, 급증' 대신 사전 쪽을 남겼다. */
  { word:"outbreak", pron:"아웃브레이크", pos:"n", level:"B2", meanings:["발발","발생"],
    syn:["epidemic","sudden spread","flare-up"],
    ex:[{ s:"An {{}} of flu closed two schools.", f:"outbreak", ko:"독감 발생으로 학교 둘이 문을 닫았다." }] },

  /* 승격 58 — 사전 표현 '터져 나옴, 분출' 을 글자까지 지켰다(eruption, E).
     원본의 '폭발' 을 쓰면 eruption·explosion(둘 다 E) 의 첫 뜻과 같아진다. */
  { word:"outburst", pron:"아웃버스트", pos:"n", level:"B2", meanings:["터져 나옴","분출"],
    syn:["eruption","sudden rush","explosion of feeling"],
    ex:[{ s:"His angry {{}} shocked the room.", f:"outburst", ko:"그의 성난 터져 나옴이 방을 놀라게 했다." }] },

  { word:"outcast", pron:"아웃캐스트", pos:"n", level:"C1", meanings:["따돌림 당하는 사람"],
    syn:["rejected person","one pushed out","pariah"],
    ex:[{ s:"He lived as an {{}} after the trial.", f:"outcast", ko:"그는 재판 뒤 따돌림 당하는 사람으로 살았다." }] },

  /* 승격 59 — ★원본의 '결과, 과정' 에서 '과정' 은 '성과' 의 오타로 보인다.
     사전의 '결과' 를 첫 자리에 두고 '성과' 를 붙였다(consequence, C).
     consequence 의 첫 뜻도 '결과' 지만 둘은 서로 유의어다. */
  { word:"outcome", pron:"아웃컴", pos:"n", level:"B1", meanings:["결과","성과"],
    syn:["consequence","end result","upshot"],
    ex:[{ s:"Nobody could predict the {{}} of the vote.", f:"outcome", ko:"아무도 그 투표의 결과를 내다볼 수 없었다." }] },

  /* 승격 60 — 사전 표현 '구식의, 낡은' 을 글자까지 지켰다(발음이 없던 항목이다).
     원본의 '구식의, 시대에 뒤진, 진부한' 중 '시대에 뒤진' 은 out of date 에 넘겼다. */
  { word:"outdated", pron:"아웃데이팃", pos:"adj", level:"B2", meanings:["구식의","낡은"],
    syn:["antiquated","no longer up to date","left behind"], ant:["up-to-date"],
    ex:[{ s:"The software is badly {{}}.", f:"outdated", ko:"그 소프트웨어는 몹시 구식이다." }] },

  /* 승격 61 — 사전 표현 '장비 한 벌' 을 글자까지 지켰다(gear, G).
     원본의 '장비, 의복' 을 쓰면 equipment·gear 의 첫 뜻 '장비' 와 같아진다. */
  { word:"outfit", pron:"아웃핏", pos:"n", level:"B2", meanings:["장비 한 벌"],
    syn:["gear","kit","full set of clothes"],
    ex:[{ s:"She bought a climbing {{}} for the trip.", f:"outfit", ko:"그녀는 여행을 위해 등반 장비 한 벌을 샀다." }] },

  /* 승격 62 — 사전 표현 '외향적인, 사교적인' 을 글자까지 지켰다
     (gregarious, G · introverted 의 반의어, I). 원본의 '떠나는' 갈래는 버렸다. */
  { word:"outgoing", exams:["공무원"], pron:"아웃고잉", pos:"adj", level:"B2", meanings:["외향적인","사교적인"],
    /* sociable 은 사전 뜻이 gregarious(표제어) 와 똑같이 '사교적인' 이라 검사가
       잡았다 — 'fond of company' 로 바꿨다. */
    syn:["gregarious","fond of company","easy with people"], ant:["introverted"],
    ex:[{ s:"Her {{}} manner won over the class.", f:"outgoing", ko:"그녀의 외향적인 태도가 반 전체를 사로잡았다." }] },

  { word:"outgrow", pron:"아웃그로우", pos:"v", level:"B2", meanings:["~보다 더 커지다","맞지 않게 되다"],
    syn:["grow too big for","become too large for","leave behind with age"],
    ex:[{ s:"Children {{}} their shoes within months.", f:"outgrow", ko:"아이들은 몇 달 안에 신발이 맞지 않게 된다." }] },

  /* 승격 63 — 사전 표현 '나들이' 를 글자까지 지켰다(excursion, E).
     원본의 '소풍' 을 쓰면 excursion(소풍, 유람) 의 첫 뜻과 같아진다. */
  { word:"outing", pron:"아우팅", pos:"n", level:"B2", meanings:["나들이"],
    syn:["excursion","jaunt","short pleasure trip"],
    ex:[{ s:"The class went on a river {{}}.", f:"outing", ko:"그 반은 강 나들이를 갔다." }] },

  /* 승격 64 — 사전이 '금지하다; 무법자' 로 동사와 명사가 섞여 있었다.
     ban(B)·forbid(F) 둘 다 동사여서 동사로 세우고, 사전의 첫 갈래 '금지하다' 를
     그대로 첫 자리에 남겼다. 원본의 '무법자, 불량배' 갈래는 버렸다. */
  { word:"outlaw", pron:"아웃로", pos:"v", level:"C1", meanings:["금지하다","비합법화하다"],
    syn:["ban","forbid","make illegal"], ant:["legalize"],
    ex:[{ s:"The city voted to {{}} single-use plastics.", f:"outlaw", ko:"그 도시는 일회용 플라스틱을 금지하기로 표결했다." }] },

  { word:"outlet", pron:"아웃렛", pos:"n", level:"B2", meanings:["출구","소매점"],
    syn:["way out","retail shop","release point"],
    ex:[{ s:"The lake has only one {{}} to the sea.", f:"outlet", ko:"그 호수는 바다로 가는 출구가 하나뿐이다." }] },

  { word:"outlive", pron:"아웃리브", pos:"v", level:"B2", meanings:["~보다 더 오래 살다"],
    syn:["survive longer than","outlast","live on after"],
    ex:[{ s:"She would {{}} both her brothers.", f:"outlive", ko:"그녀는 두 오라비보다 더 오래 살게 된다." }] },

  /* ── 챕터 7 ─────────────────────────────────────── */
  /* 'over-' 로 시작하는 낱말이 이 챕터 뒤쪽부터 챕터 8 끝까지 스물넷 이어진다.
     저장소에서 한 어근이 이렇게 길게 붙는 것은 처음이다. 품사가 adj/n/v 로
     갈리고 뜻도 서로 멀어 같은 보드에서 헷갈리지 않는다.                       */

  /* 승격 65 — 사전이 '전망; 관점' 이었다. 구분 기호만 쉼표로 바꿨다
     (attitude, A · forecast, F · mindset, M — 세 곳). */
  { word:"outlook", pron:"아웃룩", pos:"n", level:"B2", meanings:["전망","관점"],
    syn:["forecast","point of view","way of seeing things"],
    ex:[{ s:"The economic {{}} has brightened.", f:"outlook", ko:"경제 전망이 밝아졌다." }] },

  { word:"outnumber", pron:"아웃넘버", pos:"v", level:"B2", meanings:["~보다 수가 더 많다"],
    syn:["exceed in number","be more numerous than","have the greater count"],
    ex:[{ s:"Cyclists now {{}} cars on this street.", f:"outnumber", ko:"이 거리에서는 이제 자전거가 차보다 수가 더 많다." }] },

  /* 승격 66 — 사전 표현 '더 나은 성과를 내다' 를 글자까지 지켰다(excel, E).
     원본의 '능가하다' 를 쓰면 같은 챕터의 outstrip 과 부딪힌다. */
  { word:"outperform", pron:"아웃퍼폼", pos:"v", level:"C1", meanings:["더 나은 성과를 내다"],
    syn:["excel","do better than","surpass in results"],
    ex:[{ s:"Small firms often {{}} large ones in service.", f:"outperform", ko:"작은 회사가 서비스에서 큰 회사보다 더 나은 성과를 내는 일이 많다." }] },

  /* 승격 67 — 사전 표현 '생산량, 산출' 을 글자까지 지켰다(발음이 없던 항목이다).
     원본은 '산출, 생산, 결과; 산출하다, 출력하다' 로 명사와 동사가 섞여 있었다.
     참조가 없어 자유롭게 고를 수 있었고 명사로 정리했다. */
  { word:"output", pron:"아웃풋", pos:"n", level:"B2", meanings:["생산량","산출"],
    /* Y 세트에서 yield 를 동사로 세웠다. 명사 표제어의 유의어 칸에 동사가
       설 수 없으므로 풀어 쓴 말로 갈았다. harvest(H) 도 같이 손질했다.
       ⚠️ 처음에 'amount turned out' 을 넣었더니 바로 옆 'amount produced'
       (만들어 낸 양) 와 설명이 글자까지 같아져 감사에 걸렸다. 한 유의어 목록
       안에서 설명 두 줄이 같으면 학생에게는 정답이 둘로 보인다. */
    syn:["production total","amount produced","what a plant puts out"],
    ex:[{ s:"Factory {{}} fell for three months.", f:"output", ko:"공장 생산량이 석 달 동안 떨어졌다." }] },

  /* 승격 68 — 사전 표현 '격분, 분노' 를 글자까지 지켰다(발음이 없던 항목이다).
     원본은 '몹시 화나게 하다; 분노, 격분' 으로 동사와 명사가 섞여 있었다.
     참조가 없어 명사로 정리했다. */
  { word:"outrage", pron:"아웃레이지", pos:"n", level:"B2", meanings:["격분","분노"],
    syn:["fury","indignation","burning anger"],
    ex:[{ s:"The decision caused public {{}}.", f:"outrage", ko:"그 결정은 대중의 격분을 불렀다." }] },

  { word:"outrageous", pron:"아웃레이저스", pos:"adj", level:"C1", meanings:["너무나 충격적인","터무니없는"],
    syn:["shocking","beyond all reason","scandalous"],
    ex:[{ s:"The price was simply {{}}.", f:"outrageous", ko:"그 값은 그저 터무니없었다." }] },

  /* 승격 69 — 사전 표현 '완전한, 노골적인' 을 글자까지 지켰다(발음이 없던 항목이다).
     원본의 '전면적인; 직접적인' 대신 사전 쪽을 남겼다. */
  { word:"outright", pron:"아웃라이트", pos:"adj", level:"C1", meanings:["완전한","노골적인"],
    syn:["undisguised","with nothing held back","downright"],
    ex:[{ s:"It was an {{}} refusal, with no excuses.", f:"outright", ko:"그것은 변명 없는 완전한 거절이었다." }] },

  /* 승격 70 — 사전이 '뛰어난; 미해결의' 였다. 두 갈래가 뜻이 너무 멀어
     원본의 '두드러진' 을 뒤에 붙였다. 첫 뜻은 사전값을 지켰다
     (brilliant, B · eminent, E). */
  { word:"outstanding", pron:"아웃스탠딩", pos:"adj", level:"B2", meanings:["뛰어난","두드러진"],
    syn:["brilliant","exceptional","head and shoulders above"], ant:["mediocre"],
    ex:[{ s:"Her essay was {{}} among fifty entries.", f:"outstanding", ko:"그녀의 글은 오십 편 가운데 뛰어났다." }] },

  /* 원본은 '초과하다, 능가하다, 벗어나다' 세 갈래였다. '능가하다' 는 같은 챕터의
     outperform 과 부딪히므로 '앞지르다, 웃돌다' 로 갈랐다. */
  { word:"outstrip", pron:"아웃스트립", pos:"v", level:"C1", meanings:["앞지르다","웃돌다"],
    syn:["overtake in progress","go beyond","leave behind in a race"],
    ex:[{ s:"Demand began to {{}} supply.", f:"outstrip", ko:"수요가 공급을 웃돌기 시작했다." }] },

  { word:"outward", pron:"아웃워드", pos:"adj", level:"B2", meanings:["겉보기의","표면상의"],
    syn:["on the surface","visible from outside","apparent to the eye"], ant:["inward"],
    ex:[{ s:"His calm was only {{}}.", f:"outward", ko:"그의 침착함은 겉보기의 것일 뿐이었다." }] },

  /* 승격 71 — 사전은 '타원형의' 한 갈래였다. 원본의 '달걀 모양의' 를 첫 자리에
     두었다 — elliptical(타원형의, 생략된, E) 과 첫 뜻을 갈라 두는 편이 낫다.
     그 화면의 글자가 함께 바뀐다. 원본의 명사 '달걀 모양, 타원' 갈래는 버렸다. */
  { word:"oval", pron:"오벌", pos:"adj", level:"B2", meanings:["달걀 모양의","타원형의"],
    syn:["elliptical","egg-shaped","rounded and long"],
    ex:[{ s:"The table had an {{}} top.", f:"oval", ko:"그 탁자는 달걀 모양의 상판을 가졌다." }] },

  { word:"ovation", pron:"오베이션", pos:"n", level:"C1", meanings:["박수","갈채"],
    syn:["burst of applause","loud clapping","standing cheer"],
    ex:[{ s:"The singer received a long {{}}.", f:"ovation", ko:"그 가수는 긴 박수를 받았다." }] },

  /* 승격 72 — 사전 표현 '전반적인, 종합적인' 을 글자까지 지켰다
     (as a whole, A · general, G · gross, G — 세 곳).
     원본은 '종합적인; 전반적으로' 로 형용사와 부사가 섞여 있었다. 참조 셋 중
     둘이 형용사여서 형용사로 세웠고, 사전값이 마침 형용사 쪽이었다. */
  { word:"overall", pron:"오버올", pos:"adj", level:"B2", meanings:["전반적인","종합적인"],
    syn:["general","taken as a whole","across the board"],
    ex:[{ s:"The {{}} cost came to eight million won.", f:"overall", ko:"전반적인 비용은 팔백만 원에 이르렀다." }] },

  { word:"overanxious", pron:"오버앵셔스", pos:"adj", level:"C1", meanings:["지나치게 걱정하는"],
    syn:["worrying too much","overly fretful","needlessly alarmed"],
    ex:[{ s:"Do not be {{}} about the exam.", f:"overanxious", ko:"시험에 지나치게 걱정하지 마라." }] },

  /* overbear 는 매우 드문 낱말이다. 같은 세트의 overwhelm(압도하다, 당황하게 하다)·
     overpower(제압하다, 힘으로 누르다) 와 물리지 않게 '억누르다, 짓누르다' 로 갈랐다. */
  { word:"overbear", pron:"오버베어", pos:"v", level:"C2", meanings:["억누르다","짓누르다"],
    syn:["bear down on","weigh heavily upon","press down hard"],
    ex:[{ s:"He tried to {{}} every objection in the room.", f:"overbear", ko:"그는 방 안의 모든 이의를 억누르려 했다." }] },

  /* 원본은 '과다 복용; 과다 복용하다' 로 명사와 동사가 섞여 있었다.
     참조가 없어 명사 한 갈래로 정리했다. */
  { word:"overdose", pron:"오버도스", pos:"n", level:"B2", meanings:["과다 복용"],
    syn:["too large a dose","excessive amount taken","dangerous quantity"],
    ex:[{ s:"An {{}} of the drug can stop the heart.", f:"overdose", ko:"그 약의 과다 복용은 심장을 멈출 수 있다." }] },

  { word:"overdrawn", pron:"오버드론", pos:"adj", level:"C1", meanings:["초과 인출된"],
    syn:["in the red","drawn beyond the balance","overspent on an account"],
    ex:[{ s:"His account has been {{}} since May.", f:"overdrawn", ko:"그의 계좌는 오월부터 초과 인출된 상태다." }] },

  /* 승격 73 — 사전 표현 '기한이 지난, 뒤늦은' 을 글자까지 지켰다(belated, B).
     원본의 '기한이 지난, 밀린' 대신 사전 쪽을 남겼다. */
  { word:"overdue", pron:"오버두", pos:"adj", level:"B2", meanings:["기한이 지난","뒤늦은"],
    syn:["belated","past the due date","long-awaited"],
    ex:[{ s:"The library book is two weeks {{}}.", f:"overdue", ko:"그 도서관 책은 두 주 기한이 지났다." }] },

  { word:"overeat", pron:"오버이트", pos:"v", level:"B2", meanings:["과식하다"],
    syn:["eat too much","stuff oneself","take more food than needed"],
    ex:[{ s:"It is easy to {{}} at a buffet.", f:"overeat", ko:"뷔페에서는 과식하기 쉽다." }] },

  { word:"overenthusiastic", pron:"오버인쑤지애스틱", pos:"adj", level:"C1", meanings:["과도하게 열중한"],
    syn:["too keen","carried away by zeal","excessively eager"],
    ex:[{ s:"The guide was a little {{}} about the ruins.", f:"overenthusiastic", ko:"그 안내인은 그 폐허에 조금 과도하게 열중했다." }] },

  /* ── 챕터 8 (마지막) ──────────────────────────────── */
  /* 18단어. MIN_TAIL(4) 이상이라 독립 챕터로 둔다.
     'over-' 어근이 열일곱, 그리고 마지막이 owe 다.
     압도 계열 셋을 이렇게 갈랐다 —
       overpower '제압하다, 힘으로 누르다'   overwhelm '압도하다, 당황하게 하다'
       overbear(챕터 7) '억누르다, 짓누르다'                                     */

  { word:"overestimate", pron:"오버에스터메이트", pos:"v", level:"B2", meanings:["과대평가하다"],
    syn:["rate too highly","think better of than is true","put too high a value on"],
    ex:[{ s:"Do not {{}} how much time you have.", f:"overestimate", ko:"시간이 얼마나 있는지 과대평가하지 마라." }] },

  { word:"overhear", pron:"오버히어", pos:"v", level:"B2", meanings:["엿듣다"],
    syn:["catch by chance","hear without meaning to","listen in on"],
    ex:[{ s:"I happened to {{}} their quarrel.", f:"overhear", ko:"나는 우연히 그들의 말다툼을 엿들었다." }] },

  { word:"overindulge", pron:"오버인덜지", pos:"v", level:"C1", meanings:["탐닉하다","지나치게 빠지다"],
    syn:["give in to excess","enjoy far too much","let oneself go too far"],
    ex:[{ s:"It is easy to {{}} during the holidays.", f:"overindulge", ko:"연휴에는 탐닉하기 쉽다." }] },

  /* 승격 74 — 사전이 '겹치다; 중복' 으로 동사와 명사가 섞여 있었다.
     coincide(C)·commonality(C) 중 coincide 가 동사 갈래를 쓴다. 원본대로 동사로
     세우고 사전의 첫 갈래 '겹치다' 를 그대로 남겼다. */
  { word:"overlap", pron:"오버랩", pos:"v", level:"B2", meanings:["겹치다","중복되다"],
    syn:["coincide","cover part of each other","run into each other"],
    ex:[{ s:"The two shifts {{}} by one hour.", f:"overlap", ko:"두 근무조는 한 시간 겹친다." }] },

  { word:"overload", pron:"오버로드", pos:"v", level:"B2", meanings:["지나치게 많이 싣다"],
    syn:["load beyond capacity","pile on too much","burden past the limit"],
    ex:[{ s:"Do not {{}} the small trailer.", f:"overload", ko:"그 작은 트레일러에 지나치게 많이 싣지 마라." }] },

  /* 승격 75 — 사전 표현 '간과하다; 내려다보다' 의 두 갈래를 그대로 살렸다.
     구분 기호만 쉼표로 바꿨다. 이 세트에서 참조가 가장 많은 낱말이다(5곳) —
     condone·disregard·ignore 가 유의어, anticipate·detect 가 반의어다. */
  { word:"overlook", pron:"오버룩", pos:"v", level:"B2", meanings:["간과하다","내려다보다"],
    syn:["disregard","fail to notice","pass over"],
    ex:[{ s:"It is easy to {{}} a small error in the total.", f:"overlook", ko:"합계의 작은 오류는 간과하기 쉽다." }] },

  { word:"overnight", pron:"오버나이트", pos:"adv", level:"B1", meanings:["하룻밤 사이에"],
    syn:["in a single night","between dusk and dawn","very suddenly"],
    ex:[{ s:"The snow melted {{}}.", f:"overnight", ko:"눈이 하룻밤 사이에 녹았다." }] },

  /* 승격 76 — ★원본의 뜻이 틀렸다. '견줄 데 없는' 은 unrivaled 의 뜻이다.
     사전은 '압도하다, 제압하다' 였는데 '압도하다' 를 그대로 두면 같은 챕터의
     overwhelm 과 물리므로 '제압하다' 를 첫 자리에 두고 '힘으로 누르다' 를 붙였다.
     참조 drown out(D, 소리를 덮어 버리다) 은 힘으로 누르는 뜻을 쓴다. */
  { word:"overpower", pron:"오버파워", pos:"v", level:"C1", meanings:["제압하다","힘으로 누르다"],
    syn:["subdue by force","get the better of","overcome by strength"],
    ex:[{ s:"Three guards had to {{}} the intruder.", f:"overpower", ko:"경비 셋이 그 침입자를 제압해야 했다." }] },

  { word:"overrule", pron:"오버룰", pos:"v", level:"C1", meanings:["기각하다"],
    syn:["reject a ruling","set aside a decision","rule against"],
    ex:[{ s:"The judge chose to {{}} the objection.", f:"overrule", ko:"판사는 그 이의를 기각하기로 했다." }] },

  /* 승격 77 — 사전은 '감독하다' 한 갈래였다. 원본의 '감시하다' 를 뒤에 붙였다.
     첫 뜻은 사전값을 지켰다(administer, A). 원본은 순서가 거꾸로였다. */
  { word:"oversee", pron:"오버시", pos:"v", level:"B2", meanings:["감독하다","감시하다"],
    syn:["supervise","keep watch over","be in charge of"],
    ex:[{ s:"She was asked to {{}} the whole project.", f:"oversee", ko:"그녀는 사업 전체를 감독하도록 요청받았다." }] },

  /* 승격 78 — 사전 표현 '과장해 말하다' 를 글자까지 지켰다
     (dramatize, D · exaggerate, E). 원본의 '과장하다' 를 쓰면 exaggerate(과장하다,
     부풀리다) 의 첫 뜻과 같아진다. */
  { word:"overstate", pron:"오버스테이트", pos:"v", level:"C1", meanings:["과장해 말하다"],
    syn:["exaggerate","make more of than is true","blow up in the telling"], ant:["understate"],
    ex:[{ s:"Reports may {{}} the size of the crowd.", f:"overstate", ko:"보도는 군중의 규모를 과장해 말할 수 있다." }] },

  /* overstructure 는 사전에도 거의 없는 드문 낱말이다. 유의어 셋을 세울 수 있어
     비우지 않았다. */
  { word:"overstructure", pron:"오버스트럭처", pos:"v", level:"C2", meanings:["지나치게 구조화하다"],
    syn:["impose too much structure on","over-organize","hem in with rules"],
    ex:[{ s:"Teachers should not {{}} every lesson.", f:"overstructure", ko:"교사가 수업마다 지나치게 구조화해서는 안 된다." }] },

  /* 승격 79 — 사전 표현 '추월하다, 따라잡다' 를 글자까지 지켰다
     (befall, B · catch up with, C). 원본의 '~을 따라잡다, (다른 차를) 추월하다'
     에서 괄호와 조사를 걷은 셈이다. */
  { word:"overtake", pron:"오버테이크", pos:"v", level:"B2", meanings:["추월하다","따라잡다"],
    syn:["catch up with","pass on the road","draw level and go by"],
    ex:[{ s:"Do not {{}} on a blind bend.", f:"overtake", ko:"앞이 안 보이는 굽이에서 추월하지 마라." }] },

  /* 승격 80 — 사전 표현 '뒤집다, 뒤엎다' 를 글자까지 지켰다(capsize, C).
     원본의 '뒤집히다, 뒤집다; 번복시키다' 는 자동사와 타동사가 섞여 있었다. */
  { word:"overturn", pron:"오버턴", pos:"v", level:"B2", meanings:["뒤집다","뒤엎다"],
    syn:["capsize","turn upside down","knock over"],
    ex:[{ s:"A gust of wind could {{}} the canoe.", f:"overturn", ko:"한 줄기 돌풍이 그 카누를 뒤집을 수 있었다." }] },

  /* 원본은 '비만의, 과체중의; 중량 초과의' 였다. 챕터 1 의 obese(고도 비만인)·
     obesity(비만) 와 겹치지 않게 '과체중의' 를 첫 자리에 두었다. */
  { word:"overweight", pron:"오버웨이트", pos:"adj", level:"B2", meanings:["과체중의","중량 초과의"],
    syn:["heavier than is healthy","above the weight limit","carrying extra weight"], ant:["underweight"],
    ex:[{ s:"The suitcase was {{}} by two kilos.", f:"overweight", ko:"그 여행가방은 두 킬로 중량 초과였다." }] },

  /* 승격 81 — 사전은 '압도하다' 한 갈래였고 발음이 없었다. 원본의 '당황하게 하다'
     를 뒤에 붙였다. 같은 챕터 overpower 를 '제압하다' 로 갈라 두었으므로 이쪽이
     '압도하다' 를 가져간다. 원본의 '제압하다' 갈래는 overpower 에 넘겼다. */
  { word:"overwhelm", pron:"오버웰름", pos:"v", level:"B2", meanings:["압도하다","당황하게 하다"],
    syn:["sweep over","leave at a loss","bear down upon"],
    ex:[{ s:"The number of requests began to {{}} the small team.", f:"overwhelm", ko:"요청의 수가 그 작은 팀을 압도하기 시작했다." }] },

  /* 승격 82 (마지막) — 사전 표현 '압도적인, 너무도 강력한' 을 글자까지 지켰다
     (daunting, D · insurmountable, I). 원본의 '저항하기 힘든' 대신 사전 쪽을 남겼다. */
  { word:"overwhelming", pron:"오버웰밍", pos:"adj", level:"B2", meanings:["압도적인","너무도 강력한"],
    syn:["daunting","too strong to resist","crushing in scale"],
    ex:[{ s:"The response was {{}}.", f:"overwhelming", ko:"반응은 압도적이었다." }] },

  { word:"owe", pron:"오우", pos:"v", level:"B1", meanings:["빚지다","~ 덕분이다"],
    syn:["be in debt for","have to pay back","be indebted to"],
    ex:[{ s:"I still {{}} her for the tickets.", f:"owe", ko:"나는 아직 그녀에게 표값을 빚지고 있다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "abide by": "~을 지키다",
  "about to": "이제 곧 ~할",
  "above the weight limit": "무게 한도를 넘은",
  "accepted as standard": "표준으로 받아들여진",
  "across the board": "어느 쪽이나 다",
  "adapt to a purpose": "쓸 목적에 맞추다",
  "almost recalled": "거의 떠오른",
  "amount produced": "만들어 낸 양",
  "antiquated": "케묶은",
  "apparent to the eye": "눈에 드러나는",
  "applied without exception": "예외 없이 적용되는",
  "arise from": "~에서 생겨나다",
  "as a representative of": "~의 대표로서",
  "astronomy lab": "천문 연구실",
  "at the brink of": "~의 문턱에서",
  "attacking": "몰아붙이는",
  "auspicious": "좋은 일을 알리는",
  "back country": "뒤쪽 벽지",
  "backstage": "무대 뒤의",
  "badly positioned": "자리가 잘못 잡힌",
  "balance out": "서로 맞춰 없애다",
  "be in debt for": "~때문에 빚이 있다",
  "be indebted to": "~에게 신세를 지다",
  "be more numerous than": "~보다 많다",
  "bear down on": "~을 눌러 덮치다",
  "bear down upon": "~을 밀어붙이다",
  "become too large for": "~에 들어가지 않게 되다",
  "before the audience": "관객 앞에서 하는",
  "beginning of an illness": "병이 시작됨",
  "behind the times": "시절에 뒤처진",
  "best possible state": "가능한 가장 좋은 상태",
  "best suited": "가장 알맞은",
  "betting ratio": "도박에서 매기는 비율",
  "between dusk and dawn": "해 진 뒤 동틀 때까지",
  "beyond all reason": "말도 안 되게 지나친",
  "beyond restraint": "억누를 수 없는",
  "bind by duty": "본분으로 묶다",
  "binding vow": "묶어 두는 다짐",
  "biological entity": "생물학적 개체",
  "block up": "틀어막다",
  "blow up in the telling": "말하면서 부풀리다",
  "boding ill": "나쁜 일을 알리는",
  "body of members": "구성원의 모임",
  "body part": "몸의 한 부분",
  "bone-thinning disease": "뼈가 얇아지는 병",
  "breach of law": "법을 어김",
  "bright view": "밝게 보는 태도",
  "brittle-bone condition": "뼈가 잘 부러지는 상태",
  "broken down": "망가져 버린",
  "burden past the limit": "한계를 넘겨 짐을 얹다",
  "burning anger": "타오르는 노여움",
  "burst of applause": "터져 나오는 손뼉",
  "by word of mouth": "입으로 전하는",
  "cancel out": "서로 지워 버리다",
  "care home for children": "아이를 보살피는 시설",
  "careful noting": "꼼꼼히 적어 둠",
  "carried away by zeal": "열의에 휩쓸린",
  "carrying extra weight": "살이 더 붙은",
  "carrying far too much fat": "지방이 너무 많은",
  "catch by chance": "우연히 듣다",
  "chances": "될 성",
  "chemical-free": "화학 약품을 쓰지 않은",
  "child left without parents": "어버이를 잃은 아이",
  "children's home": "아이들이 지내는 집",
  "circling path": "돌아가는 길",
  "close to the start of": "~이 시작될 즈음에",
  "close watching": "가까이 지켜봄",
  "come by": "어렵게 구하다",
  "completed": "다 끝난",
  "conclusively": "결말이 나게",
  "corpulence": "살집이 두둑함",
  "corpulent": "살집이 두둑한",
  "counter-argument": "맞서 내는 주장",
  "course around a body": "천체를 도는 길",
  "cover part of each other": "서로 일부를 덮다",
  "crushing": "짓누르는",
  "crushing in scale": "규모로 짓누르는",
  "curtain-raiser": "막을 올리는 순서",
  "dangerous quantity": "위험한 양",
  "deck out": "차려 꾸미다",
  "decorative piece": "꾸미는 물건",
  "do better than": "~보다 잘하다",
  "doing as told": "말하는 대로 하는",
  "done then and there": "그 자리에서 해내는",
  "downright": "에누리 없는",
  "draw level and go by": "나란히 붙었다가 지나가다",
  "drawn beyond the balance": "잔고보다 많이 빼낸",
  "drop from a list": "목록에서 빼다",
  "dutiful": "본분을 다하는",
  "earliest": "맨 처음의",
  "eastern": "동쪽의",
  "easy with people": "사람을 편히 대하는",
  "eat too much": "너무 많이 먹다",
  "elaborately decorated": "공들여 꾸민",
  "end result": "끝에 나온 것",
  "enjoy far too much": "너무 많이 즐기다",
  "erase all trace of": "~의 흔적을 다 지우다",
  "exceed in number": "수에서 넘어서다",
  "excess body fat": "넘치는 몸의 지방",
  "excessive amount taken": "지나치게 많이 먹은 양",
  "excessively eager": "지나치게 들뜬",
  "expecting the best": "잘될 것으로 보는",
  "explosion of feeling": "감정이 터져 나옴",
  "extreme overweight": "심한 과체중",
  "facing": "마주 보는",
  "fact-based": "사실에 바탕한",
  "fail to notice": "알아채지 못하다",
  "failing to line up": "줄이 맞지 않는",
  "far from it": "그렇기는커녕",
  "far inland country": "한참 안쪽 땅",
  "far-eastern": "극동의",
  "favorable moment": "알맞은 때",
  "find one's bearings": "자기 위치를 가늠하다",
  "first appearance": "처음 나타남",
  "first part": "앞부분",
  "flare-up": "확 번짐",
  "follow orders": "명령을 좇다",
  "fond of company": "어울리기를 좋아하는",
  "for good": "아주 영영",
  "foundling": "버려진 채 발견된 아이",
  "free of opinion": "의견이 섞이지 않은",
  "free of prejudice": "선입견이 없는",
  "freshness of thought": "생각이 새로움",
  "from another view": "다른 쪽에서 보면",
  "fruit garden": "과일을 기르는 밭",
  "full of fine detail": "잔 무늬가 가득한",
  "full set of clothes": "옷 한 벌 전체",
  "get hold of": "손에 넣다",
  "get the better of": "~을 눌러 이기다",
  "give in to excess": "지나침에 무너지다",
  "give offence to": "~에게 언짢음을 주다",
  "going by": "~을 따라 판단하여",
  "going by the book": "규정을 그대로 따르는",
  "gone out of favor": "사랑을 잃은",
  "grossly overweight": "지나치게 체중이 많은",
  "grounded on": "~에 발판을 둔",
  "grove of fruit trees": "과일나무 숲",
  "grow too big for": "~에 비해 너무 커지다",
  "happening": "일이 벌어짐",
  "happening now": "지금 벌어지는",
  "hard to make out": "알아보기 어려운",
  "have its source in": "~에 뿌리를 두다",
  "have the greater count": "더 큰 수를 차지하다",
  "have to pay back": "갚아야 하다",
  "head and shoulders above": "한참 위에 있는",
  "healing cream": "상처에 바르는 크림",
  "hear without meaning to": "뜻하지 않게 듣다",
  "heavier than is healthy": "건강에 좋을 무게보다 무거운",
  "heavy-handed": "함부로 세게 다루는",
  "hem in with rules": "규칙으로 옥죄다",
  "hide from view": "보이지 않게 가리다",
  "hold by force": "힘으로 붙들다",
  "hold out": "내밀어 주다",
  "hopeful outlook": "희망을 품은 시각",
  "hurdle": "넘어야 할 벽",
  "hurt the feelings of": "~의 마음을 아프게 하다",
  "ideal point": "가장 알맞은 지점",
  "ill at ease": "마음이 편치 않은",
  "immediate at the scene": "현장에서 곧바로 하는",
  "impose too much structure on": "~에 틀을 너무 씌우다",
  "in a single night": "하루 밤 만에",
  "in place of": "~을 갈음하여",
  "in the world": "세상에",
  "in the wrong spot": "엉뚱한 자리에 있는",
  "in view of the crowd": "사람들 눈에 보이는",
  "indignation": "분개",
  "infrequent": "드문드문한",
  "initial briefing": "첫 설명 자리",
  "initial stage": "첫 단계",
  "instead of that": "그 대신에",
  "insulting": "모욕하는",
  "internal structure": "몸속 구조물",
  "introductory training": "처음 받는 교육",
  "jaunt": "짧은 유람",
  "jumpy": "움찔거리는",
  "just out of reach": "손에 닿을 듯 안 닿는",
  "just short of": "~에 조금 못 미쳐",
  "keep in action": "움직이게 유지하다",
  "keep to": "~에서 벗어나지 않다",
  "keep to the rules": "규칙을 지키다",
  "keep watch over": "~을 지켜 살피다",
  "kept off the books": "기록에 남기지 않는",
  "keyed up": "바짝 긴장한",
  "kit": "한 벌 도구",
  "knock over": "쳐서 넘어뜨리다",
  "leave at a loss": "어쩔 줄 모르게 하다",
  "leave behind in a race": "겨루기에서 뒤에 두다",
  "leave behind with age": "나이가 들며 벗어나다",
  "leave no choice for": "~에게 선택을 남기지 않다",
  "left behind": "뒤에 남겨진",
  "left behind by progress": "발전에 뒤처진",
  "legalize": "법으로 허용하다",
  "let oneself go too far": "자신을 너무 놓아 버리다",
  "liberating": "놓여나게 하는",
  "life form": "생명 형태",
  "line of work": "일하는 분야",
  "listen in on": "~을 몰래 듣다",
  "little known": "거의 알려지지 않은",
  "live on after": "~뒤에도 살아가다",
  "living thing": "살아 있는 것",
  "load beyond capacity": "실을 수 있는 양을 넘겨 싣다",
  "long-awaited": "오래 기다려 온",
  "looking on the bright side": "밝은 쪽을 보는",
  "loss of bone density": "뼈 밀도가 줄어듦",
  "loud clapping": "큰 손뼉 소리",
  "make duty-bound": "할 수밖에 없게 만들다",
  "make illegal": "법으로 못하게 하다",
  "make more of than is true": "사실보다 크게 말하다",
  "make unclear": "불분명하게 만들다",
  "medicated balm": "약을 넣은 바름약",
  "moment": "그 순간",
  "most favorable": "가장 유리한",
  "move into": "들어가 자리 잡다",
  "naturally grown": "자연스레 기른",
  "nearly remembered": "떠오를 듯한",
  "needlessly alarmed": "까닭 없이 놀란",
  "no longer current": "지금 것이 아닌",
  "no longer in style": "더는 멋으로 안 여겨지는",
  "no longer in use": "더 이상 쓰이지 않는",
  "no longer manageable": "더는 다룰 수 없는",
  "no longer up to date": "더는 요즘 것이 아닌",
  "not for publication": "실으면 안 되는",
  "not matching up": "서로 들어맞지 않는",
  "not optional": "고를 수 없는",
  "not where it belongs": "있어야 할 곳이 아닌",
  "not working": "돌아가지 않는",
  "now-and-then": "이따금 있는",
  "object to": "~에 반대하다",
  "of all things": "하필이면",
  "of the east": "동방에 속한",
  "off the beat": "박자가 어긋난",
  "on the boards": "무대에 올라 있는",
  "on the facts alone": "사실만을 근거로",
  "on the other side": "건너편의",
  "on the point of": "~하려는 순간에",
  "on the surface": "겉으로는",
  "on-the-record": "공개를 전제로 한",
  "one after another": "잇달아",
  "one pushed out": "밀려난 이",
  "one such case": "그런 한 가지",
  "one such instance": "그런 한 차례",
  "one who addresses a crowd": "군중에게 말하는 사람",
  "one who fights against": "맞서 싸우는 이",
  "opening for action": "움직일 틈",
  "out of action": "쓸 수 없는",
  "out of the ordinary": "보통과 다른",
  "out of vogue": "인기가 식은",
  "outlast": "~보다 오래 버티다",
  "over-organize": "지나치게 짜 맞추다",
  "overcome by strength": "힘으로 이겨 내다",
  "overly fretful": "지나치게 안절부절하는",
  "overspent on an account": "계좌에서 넘겨 쓴",
  "overtake in progress": "나아가며 앞질러 가다",
  "parentless child": "어버이 없는 아이",
  "pariah": "천대받는 사람",
  "particular time": "특정한 시점",
  "pass on the road": "길에서 앞질러 가다",
  "pass over": "그냥 넘기다",
  "past its day": "한창때가 지난",
  "past the due date": "기한 날짜를 넘긴",
  "peak condition": "가장 좋은 조건",
  "person looking on": "옆에서 보는 사람",
  "physical body": "형체를 가진 몸",
  "physics of lenses": "렌즈의 물리",
  "pile on too much": "너무 많이 쌓다",
  "place under obligation": "의무 아래 두다",
  "plain to see": "보면 바로 아는",
  "plantation of fruit": "과일 농장",
  "point in a direction": "어느 쪽으로 향하게 하다",
  "positive thinking": "긍정으로 생각하기",
  "present for acceptance": "받아 달라고 내놓다",
  "presently arising": "지금 생겨나는",
  "press down hard": "세게 내리누르다",
  "production total": "생산 합계",
  "progeny": "낳은 자손",
  "public speaker": "사람들 앞에서 말하는 이",
  "pushback": "되밀어 내는 움직임",
  "put in order": "가지런히 하다",
  "put on the table": "논의 자리에 내놓다",
  "put too high a value on": "~에 지나친 값을 두다",
  "quite the opposite": "오히려 거꾸로",
  "rate too highly": "너무 높이 매기다",
  "reject a ruling": "판단을 물리다",
  "rejected person": "내쳐진 사람",
  "release point": "내보내는 지점",
  "remote interior": "멀리 떨어진 내륙",
  "resting upon": "~에 기대어",
  "retail shop": "소매로 파는 가게",
  "revolution track": "회전하는 자취",
  "richly adorned": "푸짐하게 꾸민",
  "right before": "바로 앞에",
  "rounded and long": "둥글고 길쭉한",
  "rule against": "~에 불리하게 판단하다",
  "run a business": "사업을 꾸리다",
  "run into each other": "서로 걸쳐 들다",
  "running of a machine": "기계가 돌아감",
  "running wild": "마구 날뛰는",
  "said aloud": "소리 내어 말한",
  "said unofficially": "비공식으로 한 말의",
  "salve": "바르는 약",
  "sanctioned": "허락을 받은",
  "scandalous": "말썽거리가 될 만한",
  "science of light": "빛을 다루는 학문",
  "sense of direction": "방향을 아는 감각",
  "set aside a decision": "결정을 무르다",
  "set in one's ways": "제 방식만 지키는",
  "settled for ever": "다시 뒤집히지 않게",
  "shelter for orphans": "고아를 돌보는 곳",
  "shocking": "충격을 주는",
  "short pleasure trip": "가벼운 놀이 여행",
  "singly": "하나씩",
  "skip over": "건너뛰다",
  "sky-viewing post": "하늘을 보는 자리",
  "slanted": "한쪽으로 기울어진",
  "solemn promise": "엄숙한 약속",
  "solid thing": "단단한 것",
  "speak against": "반대하는 말을 하다",
  "speaking for": "~을 대변하여",
  "speech-maker": "연설을 하는 이",
  "spoken remark": "입으로 낸 말",
  "stand in the way of": "~의 앞을 가로막다",
  "stand up to": "~에 맞서다",
  "standard for all cases": "모든 경우에 같은",
  "standing cheer": "일어서서 보내는 환호",
  "star-watching station": "별을 살피는 시설",
  "still under way": "아직 끝나지 않은",
  "stripped of background": "배경을 걷어 낸",
  "study of vision": "보는 원리 연구",
  "stuff oneself": "배불리 채워 먹다",
  "subdue by force": "힘으로 눌러 가라앉히다",
  "sudden rush": "갑작스레 몰려나옴",
  "sudden spread": "갑작스레 퍼짐",
  "superseded": "다른 것에 밀려난",
  "surpass in results": "성과에서 앞서다",
  "survive longer than": "~보다 오래 살아남다",
  "sweep over": "휩쓸어 덮치다",
  "sworn word": "맹세한 말",
  "take more food than needed": "필요보다 많이 먹다",
  "taken as a whole": "전체로 보아",
  "taking up of space": "자리를 차지함",
  "tenancy": "빌려 씀",
  "then again": "그러고 보면 또",
  "thing in the way": "길을 막는 것",
  "think better of than is true": "실제보다 좋게 여기다",
  "to do with running a group": "집단을 꾸리는 일의",
  "too keen": "너무 열을 올리는",
  "too large a dose": "너무 많은 약 양",
  "too strong to resist": "버틸 수 없이 센",
  "torn from its setting": "놓인 자리에서 떼어 낸",
  "trinket": "자잘한 장신구",
  "turn upside down": "위아래를 뒤바꾸다",
  "tyrannical": "폭압을 휘두르는",
  "under way at present": "지금 진행 중인",
  "underweight": "몸무게가 모자란",
  "undisguised": "감추지 않은",
  "unfair to one side": "한편에 불리한",
  "unfinished": "마무리되지 않은",
  "uniform for everyone": "모두에게 똑같은",
  "unlawful act": "법에 어긋난 짓",
  "unofficial": "공식이 아닌",
  "unorthodox": "정통이 아닌",
  "up-to-date": "요즘 것에 맞는",
  "upshot": "귀결",
  "use of a place": "장소를 씀",
  "very suddenly": "아주 갑작스레",
  "visible from outside": "바깥에서 보이는",
  "voiced disagreement": "소리 내어 밝힌 반대",
  "warning of trouble": "말썽을 알리는",
  "watch closely": "가까이 지켜보다",
  "watcher": "지켜보는 이",
  "way of seeing things": "사물을 보는 방식",
  "way open to one": "택할 수 있는 길",
  "way out": "빠져나가는 길",
  "weigh heavily upon": "~을 무겁게 짓누르다",
  "western": "서쪽의",
  "what a plant puts out": "공장이 내놓는 양",
  "whatever for": "무엇 때문에",
  "whiff": "살짝 스치는 냄새",
  "willing to listen": "귀를 기울이려는",
  "with nothing held back": "숨김 하나 없는",
  "without bias": "치우침 없이",
  "without delay": "늦추지 않고 하는",
  "without the surrounding words": "앞뒤 말을 빼고",
  "work a machine": "기계를 다루다",
  "working order": "제대로 돌아가는 상태",
  "working unit of the body": "몸에서 일하는 단위",
  "worrying too much": "너무 걱정하는",
  "young of a creature": "짐승의 새끼"
});
