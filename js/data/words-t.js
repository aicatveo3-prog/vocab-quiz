/**
 * 단어 데이터 — 수능 보카 T 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 200단어 · 10챕터 (1차부터 열 차수에 걸쳐 붙인다) ──
 *
 * 승격이 90개(45%), 참조가 135곳이다. 확정한 뜻·품사·레벨은 tools/t-source.txt
 * 에 남겨 두었다. 원본(교재) 212단어에서 열둘을 빼고 뜻 오류 셋을 고친 결과다.
 *
 * ── 이 세트에서 가장 조심해야 하는 것 ─────────────────────
 * 이 구간의 사전값에는 **동사와 명사를 쌍반점으로 붙여 둔 낱말**이 특히 많다
 * (tie 묶다;유대 · torment 괴롭히다;고통 · trace 추적하다;흔적 · treasure
 * 소중히 하다;보물 · trigger 촉발하다;방아쇠 …). 승격할 때 한쪽을 골라야 하는데,
 * 그 낱말을 유의어로 쓰고 있는 기존 표제어가 버린 쪽 뜻을 노린 자리이면 화면이
 * 어긋난다. 감사 도구는 이것을 잡지 못한다 — 선택지에 품사 정보가 없기 때문이다.
 *
 * 그래서 차수를 시작하기 전에 200단어를 통째로 훑어 손질할 자리 여덟 곳을 미리
 * 뽑아 두었다. 각 자리에는 해당 표제어 위에 ★ 주석으로 이유를 남긴다.
 *
 * 또 하나. 뜻이 겹치는데 갈라 쓸 수 없으면 **글자를 똑같이 맞춘다.** quizgen 의
 * meaningsOverlap 이 글자가 같은 두 낱말을 서로의 오답에서 자동으로 뺀다.
 * 어설프게 다르게 적는 것이 가장 위험하다 — 앱이 둘을 다른 뜻으로 보고 같은
 * 문제에 나란히 내놓는다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 T 세트가 뜨지 않는다.
 */
window.VOCAB_T = [
  { word:"taxonomist", exams:["공무원"], pron:"택소노미스트", pos:"n", level:"C2", meanings:["분류학자"], ex:[{ s:"{{}} recognize about 1.5 million living species.", f:"Taxonomists", ko:"분류학자들은 약 150만 종의 생물을 인정한다." }] },
  { word:"template", exams:["공무원"], pron:"템플릿", pos:"n", level:"C1", meanings:["본보기","견본","템플릿"], syn:["model","pattern","guide"], ex:[{ s:"It could act as a {{}} for the whole discipline.", f:"template", ko:"그것은 그 분야 전체의 본보기가 될 수 있다." }] },
  { word:"tense", exams:["공무원"], pron:"텐스", pos:"v", level:"B2", meanings:["긴장시키다","긴장한"], syn:["tighten","stiffen","strain"], ant:["relax"], ex:[{ s:"Adrenaline {{}} the muscles for action.", f:"tenses", ko:"아드레날린은 행동을 위해 근육을 긴장시킨다." }] },
  { word:"tentatively", exams:["공무원"], pron:"텐터티블리", pos:"adv", level:"C1", meanings:["잠정적으로","머뭇거리며"], syn:["provisionally","hesitantly","cautiously"], ant:["definitely"], ex:[{ s:"He answered {{}}, unsure of the facts.", f:"tentatively", ko:"그는 사실을 확신하지 못한 채 머뭇거리며 답했다." }] },
  { word:"thoroughly", exams:["공무원"], pron:"써로울리", pos:"adv", level:"B2", meanings:["철저히","완전히"], syn:["completely","fully","exhaustively"], ex:[{ s:"He knows the city {{}}.", f:"thoroughly", ko:"그는 그 도시를 철저히 안다." }] },
  { word:"thrilled", exams:["공무원"], pron:"쓰릴드", pos:"adj", level:"B2", meanings:["아주 신이 난","짜릿한"], syn:["excited","delighted","exhilarated"], ant:["bored"], ex:[{ s:"He felt {{}} and excited by the discovery.", f:"thrilled", ko:"그는 그 발견에 아주 신이 나고 들떴다." }] },
  { word:"tolerable", exams:["공무원"], pron:"탈러러블", pos:"adj", level:"C1", meanings:["견딜 만한"], syn:["bearable","endurable","acceptable"], ant:["intolerable"], ex:[{ s:"Sustained g-force is more {{}} when lying down.", f:"tolerable", ko:"누워 있으면 지속적인 중력이 더 견딜 만하다." }] },
  { word:"tragedy", exams:["공무원"], pron:"트래저디", pos:"n", level:"B2", meanings:["비극"], syn:["catastrophe","disaster","calamity"], ant:["comedy"], ex:[{ s:"Oedipus the King is a classical {{}}.", f:"tragedy", ko:"'오이디푸스 왕'은 고전 비극이다." }] },
  { word:"tribal", exams:["공무원"], pron:"트라이벌", pos:"adj", level:"C1", meanings:["부족의"], syn:["ethnic","clan","native"], ex:[{ s:"{{}} oral history suggests a mudslide occurred.", f:"Tribal", ko:"부족의 구전 역사는 진흙 사태가 있었음을 시사한다." }] },
  { word:"tribute", exams:["공무원"], pron:"트리뷰트", pos:"n", level:"C1", meanings:["헌사","경의"], syn:["homage","respect","honor"], ex:[{ s:"They made attempts to pay {{}} to the team.", f:"tribute", ko:"그들은 팀에 경의를 표하려 애썼다." }] },
  { word:"trove", exams:["공무원"], pron:"트로브", pos:"n", level:"C2", meanings:["귀중한 발견물","수집물"], syn:["hoard","cache","collection"], ex:[{ s:"Evans found a {{}} of artifacts from the Minoan age.", f:"trove", ko:"에번스는 미노아 시대 유물의 보고를 발견했다." }] },
  { word:"thereby", exams:["공무원"], pron:"데어바이", pos:"adv", level:"C1", meanings:["그렇게 함으로써","그것에 의해"], syn:["thus","thereupon","consequently"], ex:[{ s:"We pollute the oceans, {{}} harming ourselves.", f:"thereby", ko:"우리는 바다를 오염시켜, 그렇게 함으로써 우리 자신을 해친다." }] },
  { word:"takeaway", exams:["공무원"], pron:"테이크어웨이", pos:"n", level:"B2", meanings:["포장 음식","테이크아웃"], syn:["takeout","fast food"], ex:[{ s:"Target the {{}} items that end up in the ocean.", f:"takeaway", ko:"바다로 흘러드는 포장 음식 용기를 겨냥하라." }] },
  { word:"talent", exams:["공무원"], pron:"탤런트", pos:"n", level:"B1", meanings:["재능","인재"], syn:["ability","gift","skill"], ex:[{ s:"A system that rewards {{}} is more productive.", f:"talent", ko:"재능을 보상하는 체계가 더 생산적이다." }] },
  { word:"treat", exams:["공무원"], pron:"트릿", pos:"v", level:"B1", meanings:["치료하다","다루다","대하다"], syn:["handle","cure","deal with"], ex:[{ s:"The program will inspect and {{}} disease vectors.", f:"treat", ko:"그 프로그램은 질병 매개체를 점검하고 처리할 것이다." }] },
  { word:"treatment", exams:["공무원"], pron:"트릿먼트", pos:"n", level:"B1", meanings:["치료","처리","대우"], syn:["therapy","care","handling"], ex:[{ s:"You will receive one recommended {{}} each month.", f:"treatment", ko:"당신은 매달 권장 처리 한 번을 받게 된다." }] },
  { word:"task", exams:["공무원"], pron:"태스크", pos:"n", level:"B1", meanings:["과제","업무"], syn:["assignment","duty","chore"], ex:[{ s:"When you focus on a single {{}}, many brain regions work together.", f:"task", ko:"한 가지 과제에 집중하면 뇌의 여러 영역이 함께 일한다." }] },
  { word:"telling", exams:["공무원"], pron:"텔링", pos:"adj", level:"C1", meanings:["의미심장한","효과적인"], syn:["revealing","significant","striking"], ex:[{ s:"The most {{}} trend is the practice of avoiding management roles.", f:"telling", ko:"가장 의미심장한 추세는 관리직을 피하는 관행이다." }] },
  { word:"testament", exams:["공무원"], pron:"테스터먼트", pos:"n", level:"C1", meanings:["증거","유언"], syn:["proof","evidence","testimony"], ex:[{ s:"Its high price tag is {{}} to how costly it is to produce.", f:"testament", ko:"비싼 가격표는 그것을 생산하는 데 비용이 얼마나 드는지 보여 주는 증거다." }], gov:{ prep:["to"], usage:"(a) testament to ~ : ~의 증거" } },
  { word:"tether", exams:["공무원"], pron:"테더", pos:"v", level:"C2", meanings:["밧줄로 묶다","얽매다"], syn:["fasten","bind","chain"], ex:[{ s:"Workers {{}} the robot to the ship with a cable.", f:"tether", ko:"작업자들은 케이블로 로봇을 배에 묶어 둔다." }], gov:{ prep:["to"], usage:"tether A to B : A를 B에 묶어 두다" } },
  { word:"to date", exams:["공무원"], pron:"투 데이트", pos:"phr", level:"B2", meanings:["지금까지","현재까지"], syn:["so far","up to now","thus far"] },
  { word:"target", exams:["공무원"], pron:"타깃", pos:"v", level:"B1", meanings:["겨냥하다","목표로 삼다"], syn:["aim at","single out","focus on"], ex:[{ s:"The scam {{}} people who own cars.", f:"targets", ko:"그 사기는 차를 가진 사람들을 노린다." }] },
  { word:"technique", exams:["공무원"], pron:"테크닉", pos:"n", level:"B1", meanings:["기법","기술"], syn:["method","procedure","skill"], ex:[{ s:"Cooling your hands is a simple {{}} for beating the heat.", f:"technique", ko:"손을 식히는 것은 더위를 이기는 간단한 기법이다." }] },
  { word:"thus", exams:["공무원"], pron:"더스", pos:"adv", level:"B2", meanings:["따라서","그러므로"], syn:["therefore","hence","consequently"], ex:[{ s:"Sunlight blocks the harm of blue light; {{}}, children should play outside.", f:"thus", ko:"햇빛은 블루라이트의 해를 막아 준다. 따라서 아이들은 밖에서 놀아야 한다." }] },
  { word:"timeline", exams:["공무원"], pron:"타임라인", pos:"n", level:"B2", meanings:["일정","연표"], syn:["schedule","chronology","timetable"], ex:[{ s:"Could you share your decision {{}} with me?", f:"timeline", ko:"결정 일정을 알려 주실 수 있을까요?" }] },
  { word:"toddler", exams:["공무원"], pron:"타들러", pos:"n", level:"B2", meanings:["걸음마 하는 아기","유아"], ex:[{ s:"My two-year-old {{}} is learning to walk.", f:"toddler", ko:"우리 두 살배기 아기는 걸음마를 배우고 있다." }] },

  /* ── 챕터 1 ────────────────────────────────────── */
  /* 스물 중 열여덟이 'take ~' 로 시작하는 구·표현이다. 구·표현에는 예문을 두지
     않으므로(빈칸 문제로 만들기 어렵다) 이 챕터는 문장빈칸이 거의 없다. 대신
     짝맞추기와 아닌 것 고르기로 채워진다.

     'take ~' 가 몰린 만큼 뜻이 서로 닿는 자리가 많았다. 이렇게 갈랐다.
       take charge  책임을 지다        ← '떠맡다' 를 버렸다
       take on      떠맡다, 고용하다    ← 사전값. shoulder(S 떠맡다) 와 맞물려 배제
       take up      차지하다, 받아들이다 (챕터 2)
     take back(취소하다) 은 cancel·revoke·annul·call off 와, take place(벌어지다) 는
     come about(일어나다) 와 각각 글자가 맞물려 자동 배제된다.

     ★ avail oneself of(A) 를 손질했다. 사전이 make use of 와 take advantage of 에
     똑같이 '~을 이용하다' 를 적어 두어 그 syn 목록에 설명이 완전히 같은 선택지가
     둘 있었다. take advantage of 가 표제어가 되면서 글자가 확정되므로 갈았다. */

  { word:"taboo", pron:"터부", pos:"n", level:"B2", meanings:["금기","금단"],
    syn:["forbidden thing","what must not be done","social ban"],
    ex:[{ s:"The subject was a strict {{}} there.", f:"taboo", ko:"그곳에서 그 주제는 엄한 금기였다." }] },

  /* 교재가 앞세운 '꾀' 는 드문 쪽이라 순서를 바꿨다. strategy(전략 · S) 와는
     '전술' 로 갈린다. */
  { word:"tactic", pron:"택틱", pos:"n", level:"B2", meanings:["전술","꾀"],
    syn:["scheme","plan of attack","move to win"],
    ex:[{ s:"They changed their {{}} at halftime.", f:"tactic", ko:"그들은 전반이 끝나고 전술을 바꿨다." }] },

  { word:"tactically", pron:"택티컬리", pos:"adv", level:"C1", meanings:["전술적으로"],
    syn:["in terms of tactics","with a plan in mind","by a shrewd move"],
    ex:[{ s:"The move was {{}} sound.", f:"tactically", ko:"그 조치는 전술적으로 타당했다." }] },

  /* 구·표현이라 예문은 두지 않는다. 사전의 'take for granted' 는 따로 남는
     선택지다 — 표제어와 열쇠가 달라 부딪히지 않는다. */
  { word:"take ~ for granted", pron:"테이크 포 그랜티드", pos:"phr", level:"B2", meanings:["당연하게 여기다","대수롭지 않게 여기다"],
    syn:["assume without asking","think it is owed","fail to value"] },

  /* 교재 '위험을 무릅쓰고 시도하다' 를 줄였다. */
  { word:"take a risk", pron:"테이크 어 리스크", pos:"phr", level:"B1", meanings:["위험을 무릅쓰다"],
    syn:["chance it","act despite danger","put oneself in danger"] },

  { word:"take a stand", pron:"테이크 어 스탠드", pos:"phr", level:"B2", meanings:["태도를 정하다","입장을 취하다"],
    syn:["declare one's position","come out for a side","make one's view plain"] },

  { word:"take action", pron:"테이크 액션", pos:"phr", level:"B1", meanings:["조치를 취하다"],
    syn:["do something about it","move to act","step in"] },

  /* 승격 ① — 사전 글자 유지. 참조 avail oneself of(A)·benefit from(B)·exploit(E)
     세 곳의 화면은 바뀌지 않는다. 교재의 '이용하다' 는 harness 자리다. */
  { word:"take advantage of", pron:"테이크 어드밴티지 오브", pos:"phr", level:"B1", meanings:["~을 이용하다"],
    syn:["avail oneself of","benefit from","exploit"] },

  { word:"take apart", pron:"테이크 어파트", pos:"phr", level:"B2", meanings:["분해하다"],
    syn:["dismantle","pull to pieces","break into parts"] },

  { word:"take back", pron:"테이크 백", pos:"phr", level:"B2", meanings:["취소하다","반품하다"],
    syn:["retract","return for a refund","withdraw what one said"] },

  /* '떠맡다' 는 아래 take on 자리라 버렸다. */
  { word:"take charge", pron:"테이크 차지", pos:"phr", level:"B2", meanings:["책임을 지다"],
    syn:["take the lead","assume control","be answerable for"] },

  { word:"take credit for", pron:"테이크 크레딧 포", pos:"phr", level:"C1", meanings:["~의 공을 인정받다"],
    syn:["claim the merit of","be praised for","accept the honour of"] },

  { word:"take exception to", pron:"테이크 익셉션 투", pos:"phr", level:"C1", meanings:["~에 반대하다"],
    syn:["object to","raise a protest at","refuse to accept"] },

  /* 교재 'take heart (from)' 의 괄호를 걷었다. */
  { word:"take heart", pron:"테이크 하트", pos:"phr", level:"C1", meanings:["용기를 내다","자신감을 갖다"],
    syn:["cheer up","gain courage","feel encouraged"] },

  /* 승격 ② — 사전 글자 유지(참조 factor in). 교재의 '계산에 넣다' 는 버렸다. */
  { word:"take into account", pron:"테이크 인투 어카운트", pos:"phr", level:"B2", meanings:["고려하다","참작하다"],
    syn:["factor in","allow for","weigh in the decision"] },

  /* 승격 ③ — 사전의 쌍반점만 쉼표로 갈랐다(참조 assume). shoulder(S 떠맡다) 와
     글자가 맞물려 자동 배제된다. 교재의 '태우다' 는 버렸다. */
  { word:"take on", pron:"테이크 온", pos:"phr", level:"B2", meanings:["떠맡다","고용하다"],
    syn:["assume","hire","agree to do"] },

  /* 승격 ④ — 사전 단일값 유지(참조 extract). 교재의 세 갈래 중 하나만 남겼다. */
  { word:"take out", pron:"테이크 아웃", pos:"phr", level:"B1", meanings:["꺼내다"],
    syn:["extract","draw out","pull from inside"] },

  /* 승격 ⑤ — 사전 단일값 유지(참조 inherit). 교재 '인수하다, 인계하다' 버림. */
  { word:"take over", pron:"테이크 오버", pos:"phr", level:"B2", meanings:["넘겨받다"],
    syn:["inherit","step into the role of","assume from another"] },

  /* 승격 ⑥ — 사전 글자 유지(참조 be engaged in). */
  { word:"take part in", pron:"테이크 파트 인", pos:"phr", level:"B1", meanings:["~에 참여하다"],
    syn:["be engaged in","join in","have a hand in"] },

  /* 승격 ⑦ — 사전 단일값 유지(참조 occur). 교재의 '일어나다' 는 come about
     자리여서 버렸고, 그 come about 을 선택지로 썼다. */
  { word:"take place", exams:["공무원"], pron:"테이크 플레이스", pos:"phr", level:"B1", meanings:["벌어지다"],
    syn:["occur","come about","happen as planned"] },

  /* ── 챕터 2 ────────────────────────────────────── */
  /* ★ tame 을 형용사로 세웠다. 사전은 '길들이다; 온순한' 으로 동사를 앞세웠지만
     그 '길들이다' 는 참조 domesticate(길들이다, 사육하다) 자신의 뜻을 베낀 것이다
     — S 세트의 embed/set in 과 같은 꼴이다. 교재도 형용사를 앞세웠고 다른 참조
     docile(고분고분한, 순한) 도 형용사여서 형용사로 세우고 domesticate(D) 의
     그 자리를 'make docile' 로 갈았다.

     take up 은 사전('받아들이다; 시작하다') 과 교재('차지하다') 가 어긋났는데
     참조가 둘로 갈렸다 — occupy(차지하다)·adopt(채택하다). 둘 다 정당한 뜻이라
     '차지하다, 받아들이다' 로 둘을 다 살렸다. 사전의 '시작하다' 만 버렸다.

     temper(성질, 기질) 와 temperament(기질) 는 같은 챕터에 있다. temperament 의
     사전값이 '기질' 단일이어서 두 낱말의 '기질' 이 글자까지 맞물린다 — 서로의
     오답에서 자동으로 빠진다. */

  { word:"take pride in", pron:"테이크 프라이드 인", pos:"phr", level:"B1", meanings:["~을 자랑하다"],
    syn:["be proud of","boast about","hold in high regard"] },

  /* 승격 ⑧ — ⚠ 참조가 갈렸다. occupy(차지하다)·adopt(채택하다) 를 둘 다 살려
     그 두 곳의 설명이 '받아들이다; 시작하다' 에서 '차지하다, 받아들이다' 가 된다.
     occupy 와 '차지하다' 가 글자까지 같아 자동 배제된다. */
  { word:"take up", pron:"테이크 업", pos:"phr", level:"B2", meanings:["차지하다","받아들이다"],
    syn:["occupy","adopt","begin to follow"] },

  /* 승격 ⑨ — ★ 형용사로 세웠다. 참조 docile(D) 은 그대로 맞고, 동사 쪽을 쓰던
     domesticate(D) 한 곳을 'make docile' 로 갈았다. */
  { word:"tame", pron:"테임", pos:"adj", level:"B2", meanings:["유순한","사람을 잘 따르는"],
    syn:["docile","gentle with people","easily handled"], ant:["wild"],
    ex:[{ s:"The deer here are quite {{}}.", f:"tame", ko:"이곳 사슴은 꽤 유순하다." }] },

  /* 승격 ⑩ — 사전 글자 유지. 참조 concrete(C)·nonmaterial(N) 두 곳의 화면은
     바뀌지 않는다. concrete(구체적인, 실체가 있는) 와 맞물려 배제된다. */
  { word:"tangible", pron:"탠저블", pos:"adj", level:"B2", meanings:["실체가 있는","만질 수 있는"],
    syn:["concrete","able to be touched","real to the hand"], ant:["nonmaterial"],
    ex:[{ s:"They wanted a {{}} result.", f:"tangible", ko:"그들은 실체가 있는 성과를 원했다." }] },

  { word:"targeted", pron:"타깃팃", pos:"adj", level:"B2", meanings:["표적화된","겨냥된"],
    syn:["aimed at one group","picked out as a mark","directed at a set goal"],
    ex:[{ s:"The city ran a {{}} campaign.", f:"targeted", ko:"그 도시는 표적화된 운동을 벌였다." }] },

  { word:"tariff", pron:"태리프", pos:"n", level:"B2", meanings:["관세"],
    syn:["tax on imports","duty at the border","charge on goods brought in"],
    ex:[{ s:"The new {{}} raised prices.", f:"tariff", ko:"새 관세가 값을 올렸다." }] },

  { word:"tax", pron:"택스", pos:"n", level:"B1", meanings:["세금"],
    syn:["money paid to the state","public levy","sum owed to government"],
    ex:[{ s:"Everyone must pay this {{}}.", f:"tax", ko:"모두가 이 세금을 내야 한다." }] },

  /* 교재 '세금 징수원, 세무서 직원' 에서 둘째는 설명이라 걷었다. */
  { word:"tax collector", pron:"택스 컬렉터", pos:"phr", level:"B2", meanings:["세금 징수원"],
    syn:["one who gathers taxes","revenue officer","official who takes tax"] },

  { word:"tax-deductible", pron:"택스 디덕터블", pos:"adj", level:"C1", meanings:["세금 공제가 되는"],
    syn:["able to be taken off tax","allowed against tax","cutting one's taxable sum"],
    ex:[{ s:"The gift is fully {{}}.", f:"tax-deductible", ko:"그 기부는 전액 세금 공제가 된다." }] },

  /* 승격 ⑪ — 사전 글자 유지(참조 demolish). 교재 '파괴하다, 해체하다' 버림. */
  { word:"tear down", pron:"테어 다운", pos:"phr", level:"B2", meanings:["허물다","뜯어내다"],
    syn:["demolish","pull down","level to the ground"] },

  /* ridicule(조롱하다, 놀리다) 와 '놀리다' 로 맞물려 배제된다. */
  { word:"tease", pron:"티즈", pos:"v", level:"B2", meanings:["놀리다","괴롭히다"],
    syn:["make fun of","poke fun at","needle in jest"],
    ex:[{ s:"Do not {{}} your little brother.", f:"tease", ko:"동생을 놀리지 마라." }] },

  { word:"technical", exams:["공무원"], pron:"테크니컬", pos:"adj", level:"B1", meanings:["기술적인","전문의"],
    syn:["to do with technique","of applied science","needing special skill"],
    ex:[{ s:"The report is too {{}} for me.", f:"technical", ko:"그 보고서는 내게 너무 기술적이다." }] },

  { word:"technician", exams:["공무원"], pron:"테크니션", pos:"n", level:"B2", meanings:["기술자"],
    syn:["skilled worker","one trained in a craft","hands-on expert"],
    ex:[{ s:"A {{}} came to fix the line.", f:"technician", ko:"기술자가 선로를 고치러 왔다." }] },

  /* 승격 ⑫ — 사전 단일값 유지. 참조 dull(D)·monotonous(M) 두 곳의 화면은
     바뀌지 않는다. 교재의 '따분한' 은 dull 자리다. */
  { word:"tedious", pron:"티디어스", pos:"adj", level:"C1", meanings:["지루하고 성가신"],
    syn:["dull","monotonous","dragging on and on"],
    ex:[{ s:"The work was slow and {{}}.", f:"tedious", ko:"그 일은 느리고 지루하고 성가셨다." }] },

  /* 괄호 '(은행의)' 걷음. */
  { word:"teller", pron:"텔러", pos:"n", level:"B2", meanings:["금전 출납원"],
    syn:["bank clerk at a window","one who counts cash","cashier in a bank"],
    ex:[{ s:"The {{}} counted the notes twice.", f:"teller", ko:"그 금전 출납원은 지폐를 두 번 셌다." }] },

  /* 아래 temperament(기질) 와 '기질' 이 글자까지 맞물려 자동 배제된다.
     교재의 동사 갈래('완화시키다') 는 버렸다. */
  { word:"temper", pron:"템퍼", pos:"n", level:"B2", meanings:["성질","기질"],
    syn:["turn of mind","state of feeling","cast of character"],
    ex:[{ s:"He lost his {{}} at once.", f:"temper", ko:"그는 단번에 성질을 부렸다." }] },

  /* 승격 ⑬ — 사전 단일값 유지(참조 nature). 위 temper 와 맞물려 배제된다. */
  { word:"temperament", pron:"템퍼러먼트", pos:"n", level:"C1", meanings:["기질"],
    syn:["nature","inborn make-up","bent of mind"],
    ex:[{ s:"She has a calm {{}}.", f:"temperament", ko:"그녀는 차분한 기질을 지녔다." }] },

  /* 승격 ⑭ — 교재의 '온대성의' 를 '온화한' 으로 앞세우고 사전값 '절제된' 을
     둘째로 살렸다. 참조 moderate(M) 의 설명이 '절제된' 에서 '온화한, 절제된' 으로
     늘어난다. */
  { word:"temperate", pron:"템퍼릿", pos:"adj", level:"B2", meanings:["온화한","절제된"],
    syn:["moderate","mild in climate","keeping within limits"],
    ex:[{ s:"The island has a {{}} climate.", f:"temperate", ko:"그 섬은 온화한 기후를 지녔다." }] },

  { word:"temperature", pron:"템퍼러처", pos:"n", level:"B1", meanings:["기온","온도"],
    syn:["degree of heat","reading on a thermometer","how hot or cold it is"],
    ex:[{ s:"The {{}} fell below zero.", f:"temperature", ko:"기온이 영도 아래로 떨어졌다." }] },

  /* 교재 '신전, 성당, 절' 세 갈래 → 둘. */
  { word:"temple", pron:"템플", pos:"n", level:"B1", meanings:["신전","절"],
    syn:["house of worship","shrine building","place for prayer"],
    ex:[{ s:"They walked up to the old {{}}.", f:"temple", ko:"그들은 오래된 절까지 걸어 올라갔다." }] },

  /* ── 챕터 3 ────────────────────────────────────── */
  /* 승격이 열둘인데 사전 글자를 그대로 쓸 수 있는 자리가 많다. 손질은 한 곳이다.
       incurable(I) syn "terminal" → beyond cure
     terminal 의 사전값은 '종착역, 터미널'(명사) 이고 교재는 '말기의, 말단의;
     끝, 종점' 으로 형용사를 앞세웠다. 참조가 depot(차고, 창고 · 명사) 와
     incurable(치유할 수 없는 · 형용사) 로 갈렸는데, 사전이 명사였으므로 명사로
     세우고 형용사 쪽을 쓰던 한 곳을 갈았다. 외래어 '터미널' 은 '종점' 으로 바꿨다.

     tension 은 사전값이 '팽팽함' 단일이었다. 수능에 훨씬 자주 나오는 교재의
     '긴장' 을 앞세우고 사전값을 둘째로 살렸다 — 참조 nerve(신경, 긴장) 의 설명이
     짧아지지 않고 늘어난다. 교재의 '갈등' 은 conflict·friction 자리라 버렸다.
     term(용어, 기간) 은 jargon(용어)·duration·length·span(기간) 과 두 갈래 모두
     글자가 맞물려 자동 배제된다. */

  /* rate(속도, 비율 · R) 와 글자를 맞춰 자동 배제시켰다. 괄호 걷음. */
  { word:"tempo", pron:"템포", pos:"n", level:"B2", meanings:["속도"],
    syn:["pace of movement","rate of action","speed of a piece"],
    ex:[{ s:"The band raised the {{}}.", f:"tempo", ko:"그 악단이 속도를 올렸다." }] },

  /* 교재가 앞세운 '속세의' 는 드문 쪽이라 순서를 바꿨다. */
  { word:"temporal", pron:"템퍼럴", pos:"adj", level:"C1", meanings:["시간의","속세의"],
    syn:["to do with time","bound by time","of this world"],
    ex:[{ s:"The study looks at {{}} change.", f:"temporal", ko:"그 연구는 시간의 변화를 살핀다." }] },

  /* 승격 ⑮ — 사전 단일값 유지. 참조 eternal(E)·makeshift(M)·permanent(P)
     세 곳의 화면은 바뀌지 않는다. transient(오래 가지 않는 · 챕터 8) 와 갈랐다. */
  { word:"temporary", exams:["공무원"], pron:"템퍼러리", pos:"adj", level:"B1", meanings:["일시적인"],
    syn:["makeshift","lasting a short while","not meant to stay"], ant:["permanent","eternal"],
    ex:[{ s:"They found a {{}} home.", f:"temporary", ko:"그들은 일시적인 집을 구했다." }] },

  /* 승격 ⑯ — 사전 단일값 유지. 참조 lure(L)·seduce(S) 두 곳의 화면은 바뀌지
     않는다. 교재의 '유혹하다' 는 그 두 낱말 자리다. */
  { word:"tempt", pron:"템트", pos:"v", level:"B2", meanings:["마음을 끌다"],
    syn:["lure","seduce","draw with an offer"],
    ex:[{ s:"Low prices {{}} shoppers.", f:"tempt", ko:"싼 값이 손님의 마음을 끈다." }] },

  { word:"temptation", pron:"템테이션", pos:"n", level:"B2", meanings:["유혹"],
    syn:["pull toward wrong","enticing thing","urge one should resist"],
    ex:[{ s:"She resisted the {{}}.", f:"temptation", ko:"그녀는 그 유혹을 물리쳤다." }] },

  /* 교재 세 갈래 → 둘. '고집스러운' 은 stubborn(S) 자리다. obstinate(고집 센,
     완강한) 와 '완강한' 이 맞물려 자동 배제된다. */
  { word:"tenacious", pron:"터네이셔스", pos:"adj", level:"C2", meanings:["집요한","완강한"],
    syn:["holding on hard","refusing to let go","dogged"],
    ex:[{ s:"He kept a {{}} grip on the rope.", f:"tenacious", ko:"그는 줄을 집요하게 붙잡고 있었다." }] },

  /* 승격 ⑰ — 사전 단일값 유지(참조 landlord). */
  { word:"tenant", pron:"테넌트", pos:"n", level:"B2", meanings:["세입자"],
    syn:["one who rents","renter of a home","occupier paying rent"], ant:["landlord"],
    ex:[{ s:"The new {{}} moved in on Friday.", f:"tenant", ko:"새 세입자가 금요일에 들어왔다." }] },

  /* 괄호 걷음. attend to(처리하다, 돌보다) 와 '돌보다' 가 맞물려 배제된다. */
  { word:"tend", exams:["공무원"], pron:"텐드", pos:"v", level:"B1", meanings:["경향이 있다","돌보다"],
    syn:["be inclined to","look after","attend to"],
    ex:[{ s:"Prices {{}} to rise in winter.", f:"tend", ko:"값은 겨울에 오르는 경향이 있다." }] },

  /* 승격 ⑱ — 사전 단일값 유지. 참조 inclination(I) 의 화면은 바뀌지 않는다.
     교재의 '경향' 은 inclination 자리다. */
  { word:"tendency", exams:["공무원"], pron:"텐던시", pos:"n", level:"B2", meanings:["성향"],
    syn:["inclination","predisposition","leaning one way"],
    ex:[{ s:"He has a {{}} to talk too fast.", f:"tendency", ko:"그는 너무 빨리 말하는 성향이 있다." }] },

  /* 승격 ⑲ — 교재의 '긴장' 을 앞세우고 사전값 '팽팽함' 을 둘째로 살렸다.
     참조 nerve(N) 의 설명이 '팽팽함' 에서 '긴장, 팽팽함' 으로 늘어난다.
     nerve(신경, 긴장)·strain(S 긴장, 압박) 과 '긴장' 이 맞물려 배제된다.
     교재의 '갈등' 은 conflict·friction 자리라 버렸다. */
  { word:"tension", pron:"텐션", pos:"n", level:"B1", meanings:["긴장","팽팽함"],
    syn:["nerve","strain","tightness in the air"],
    ex:[{ s:"You could feel the {{}} in the room.", f:"tension", ko:"방 안의 긴장이 느껴졌다." }] },

  /* 승격 ⑳ — 사전 글자 유지(참조 definitive). 교재의 '머뭇거리는' 은 버렸다. */
  { word:"tentative", pron:"텐터티브", pos:"adj", level:"B2", meanings:["잠정적인","임시의"],
    syn:["not yet settled","open to change","put forward for now"], ant:["definitive"],
    ex:[{ s:"They set a {{}} date.", f:"tentative", ko:"그들은 잠정적인 날짜를 정했다." }] },

  /* 교재 네 갈래 → 둘. */
  { word:"tenure", pron:"테뉴어", pos:"n", level:"C2", meanings:["재임 기간","사용권"],
    syn:["term in a post","right to hold","period of office"],
    ex:[{ s:"Her {{}} lasted six years.", f:"tenure", ko:"그녀의 재임 기간은 육 년이었다." }] },

  /* jargon(용어)·duration·length·span(기간) 과 두 갈래 모두 맞물려 배제된다. */
  { word:"term", exams:["공무원"], pron:"텀", pos:"n", level:"B1", meanings:["용어","기간"],
    syn:["jargon","word for a thing","set period"],
    ex:[{ s:"Explain that {{}} in plain words.", f:"term", ko:"그 용어를 쉬운 말로 풀어 주세요." }] },

  /* 승격 ㉑ — ★ 사전이 명사('종착역, 터미널') 였다. 참조가 depot(n)·
     incurable(adj) 로 갈렸는데 사전을 따라 명사로 세우고, 형용사 쪽을 쓰던
     incurable(I) 한 곳을 'beyond cure' 로 갈았다. 외래어 '터미널' 은 '종점' 으로. */
  { word:"terminal", pron:"터미널", pos:"n", level:"B2", meanings:["종착역","종점"],
    syn:["depot","end of the line","last stop"],
    ex:[{ s:"The bus waits at the {{}}.", f:"terminal", ko:"그 버스는 종착역에서 기다린다." }] },

  /* 승격 ㉒ — 사전 글자 유지(참조 come to an end). */
  { word:"terminate", pron:"터머네이트", pos:"v", level:"B2", meanings:["끝내다","종료하다"],
    syn:["come to an end","bring to a close","wind up"],
    ex:[{ s:"They may {{}} the contract early.", f:"terminate", ko:"그들은 계약을 일찍 끝낼 수도 있다." }] },

  /* 승격 ㉓ — 사전 단일값 유지(참조 jargon). 교재의 '전문 용어' 는 jargon 자리다. */
  { word:"terminology", pron:"터머날러지", pos:"n", level:"C1", meanings:["전문어 체계"],
    syn:["set of special words","words of a field","naming system of a trade"],
    ex:[{ s:"Legal {{}} takes time to learn.", f:"terminology", ko:"법률 전문어 체계는 익히는 데 시간이 걸린다." }] },

  /* 승격 ㉔ — 사전 글자 유지(참조 geography). geography(지리, 지형) 와 '지형' 이
     맞물려 배제된다. */
  { word:"terrain", pron:"터레인", pos:"n", level:"C1", meanings:["지형","지대"],
    syn:["geography","lie of the land","ground and its shape"],
    ex:[{ s:"The {{}} grew rocky ahead.", f:"terrain", ko:"앞쪽 지형이 바위투성이가 되었다." }] },

  { word:"terribly", pron:"테러블리", pos:"adv", level:"B2", meanings:["대단히","몹시"],
    syn:["very much indeed","to a great degree","awfully"],
    ex:[{ s:"I am {{}} sorry about that.", f:"terribly", ko:"그 일은 대단히 미안합니다." }] },

  /* 승격 ㉕ — 사전 글자 유지(참조 fabulous). 교재의 '아주 좋은' 은 버렸다. */
  { word:"terrific", pron:"터리픽", pos:"adj", level:"B2", meanings:["멋진","대단한"],
    syn:["fabulous","really good","splendid to see"],
    ex:[{ s:"That was a {{}} idea.", f:"terrific", ko:"그것은 멋진 생각이었다." }] },

  /* 승격 ㉖ — 사전 단일값 유지(참조 frighten). */
  { word:"terrify", pron:"테러파이", pos:"v", level:"B2", meanings:["몹시 두렵게 하다"],
    syn:["frighten","fill with dread","scare badly"],
    ex:[{ s:"Loud noises {{}} the dog.", f:"terrify", ko:"큰 소리가 그 개를 몹시 두렵게 한다." }] },

  /* ── 챕터 4 ────────────────────────────────────── */
  /* 승격 여섯이 모두 사전 글자를 그대로 쓴다 — 기존 화면이 한 곳도 바뀌지 않는
     챕터다. 손질할 참조도 없다.

     ★ territory 가 이 챕터에서 가장 조심한 자리다. 교재는 '영역, 구역; 영토,
     영지; 분야' 로 '영역' 을 앞세웠는데, '영역' 은 이미 네 낱말이 쓰고 있다 —
     spectrum(영역 · S 단일값!) · sphere(영역, 범위 · S) · domain(영역, 분야) ·
     realm(영역, 왕국). 특히 spectrum 이 '영역' 한 갈래뿐이라 territory 를 거기
     끼우면 한→영 문제에서 프롬프트가 완전히 같아진다. 사전값 '영토, 구역' 을
     지켜 그 덩어리를 비켜 갔다 — 참조 colony·continent·habitat 도 모두 그쪽이다.

     theme 은 외래어 '테마' 를 걷고 '주제' 한 갈래로 두었다. subject(주제, 대상 ·
     S) 와 글자가 맞물려 자동 배제된다.
     testify(증언하다, 증명하다) 는 attest(증명하다, 증언하다) 와 두 갈래가 앞뒤로
     맞물린다 — 어느 쪽으로 견주어도 자동 배제된다. */

  { word:"territorial", pron:"테러토리얼", pos:"adj", level:"C1", meanings:["영토의","세력권을 주장하는"],
    syn:["of a land's borders","guarding one's ground","to do with territory"],
    ex:[{ s:"The birds are highly {{}}.", f:"territorial", ko:"그 새들은 세력권을 강하게 주장한다." }] },

  /* 승격 ㉗ — ★ 사전 글자 유지(참조 colony·continent·habitat 세 곳). 교재가
     앞세운 '영역' 은 spectrum·sphere·domain·realm 자리라 쓰지 않았다. */
  { word:"territory", exams:["공무원"], pron:"테러토리", pos:"n", level:"B1", meanings:["영토","구역"],
    syn:["colony","continent","habitat"],
    ex:[{ s:"The tribe defended its {{}}.", f:"territory", ko:"그 부족은 자기 영토를 지켰다." }] },

  /* '간단한' 은 brief(잠시 동안의, 간단한) 자리라 버렸다. */
  { word:"terse", pron:"터스", pos:"adj", level:"C2", meanings:["간결한","군더더기 없는"],
    syn:["short and to the point","said in few words","clipped in style"],
    ex:[{ s:"He gave a {{}} reply.", f:"terse", ko:"그는 간결한 답을 했다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"test tube", pron:"테스트 튜브", pos:"phr", level:"B2", meanings:["시험관"],
    syn:["glass tube for tests","lab tube","thin vessel for samples"] },

  /* attest(증명하다, 증언하다) 와 두 갈래가 앞뒤로 맞물려 자동 배제된다. */
  { word:"testify", pron:"테스터파이", pos:"v", level:"B2", meanings:["증언하다","증명하다"],
    syn:["attest","give evidence","state under oath"],
    ex:[{ s:"She agreed to {{}} at the trial.", f:"testify", ko:"그녀는 재판에서 증언하기로 했다." }] },

  /* 교재 '증거; 추천서; 기념물' 세 갈래 → 하나. '증거' 는 evidence 자리다. */
  { word:"testimonial", pron:"테스터모니얼", pos:"n", level:"C2", meanings:["추천서"],
    syn:["letter of praise","written reference","note vouching for one"],
    ex:[{ s:"He brought a {{}} from his last boss.", f:"testimonial", ko:"그는 전 상사의 추천서를 가져왔다." }] },

  /* 승격 ㉘ — 사전 단일값 유지(참조 evidence). evidence(증거, 증언) 와 '증언' 이
     맞물려 자동 배제된다. */
  { word:"testimony", pron:"테스터모니", pos:"n", level:"B2", meanings:["증언"],
    syn:["evidence","words given in court","sworn account"],
    ex:[{ s:"Her {{}} changed the case.", f:"testimony", ko:"그녀의 증언이 그 사건을 바꿨다." }] },

  /* 승격 ㉙ — 사전 글자 유지(참조 fabric). fabric(직물, 천) 과 '직물' 이 맞물려
     자동 배제된다. */
  { word:"textile", pron:"텍스타일", pos:"n", level:"B2", meanings:["직물","섬유 제품"],
    syn:["fabric","woven cloth","made-up cloth goods"],
    ex:[{ s:"The town lived on {{}} work.", f:"textile", ko:"그 고을은 직물 일로 살았다." }] },

  { word:"texture", pron:"텍스처", pos:"n", level:"B1", meanings:["질감"],
    syn:["feel of a surface","how it feels to touch","grain of a material"],
    ex:[{ s:"The cloth has a rough {{}}.", f:"texture", ko:"그 천은 거친 질감을 지녔다." }] },

  /* conversely(거꾸로, 반대로) 와 글자를 통째로 맞춰 자동 배제시켰다.
     구·표현이라 예문은 두지 않는다. */
  { word:"the other way around", pron:"디 아더 웨이 어라운드", pos:"phr", level:"B2", meanings:["거꾸로","반대로"],
    syn:["conversely","in reverse","the opposite way"] },

  { word:"theatrical", pron:"시애트리컬", pos:"adj", level:"C1", meanings:["연극의","극장의"],
    syn:["of the stage","to do with plays","done for show"],
    ex:[{ s:"She has a {{}} background.", f:"theatrical", ko:"그녀는 연극 쪽 배경을 지녔다." }] },

  { word:"theft", pron:"세프트", pos:"n", level:"B2", meanings:["절도","도난"],
    syn:["act of stealing","taking what is not one's own","larceny"],
    ex:[{ s:"The shop reported a {{}}.", f:"theft", ko:"그 가게는 절도를 신고했다." }] },

  /* ★ 외래어 '테마' 를 걷었다. subject(주제, 대상 · S) 와 글자가 맞물려 자동
     배제된다. */
  { word:"theme", pron:"씸", pos:"n", level:"B1", meanings:["주제"],
    syn:["subject","main idea","thread running through"],
    ex:[{ s:"Water is the {{}} of the show.", f:"theme", ko:"물이 그 전시의 주제다." }] },

  { word:"theology", pron:"씨알러지", pos:"n", level:"C1", meanings:["신학"],
    syn:["study of religion","learning about god","doctrine of faith"],
    ex:[{ s:"He studied {{}} for four years.", f:"theology", ko:"그는 사 년 동안 신학을 공부했다." }] },

  /* 승격 ㉚ — 사전 단일값 유지. 참조 abstract(A)·empirical(E) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"theoretical", pron:"시어레티컬", pos:"adj", level:"B2", meanings:["이론적인"],
    syn:["abstract","based on theory","not yet tried out"], ant:["empirical"],
    ex:[{ s:"The gain is purely {{}} so far.", f:"theoretical", ko:"지금까지 그 이득은 순전히 이론적이다." }] },

  /* 승격 ㉛ — 사전 단일값 유지(참조 hypothesis). 교재의 '학설, 추측' 은 버렸다. */
  { word:"theory", pron:"씨어리", pos:"n", level:"B1", meanings:["이론"],
    syn:["hypothesis","set of ideas to explain","reasoned account"],
    ex:[{ s:"The {{}} fits the data well.", f:"theory", ko:"그 이론은 자료에 잘 맞는다." }] },

  /* 교재 '치료상의, 치료법의' 는 같은 말이라 다듬었다. */
  { word:"therapeutic", pron:"세러퓨틱", pos:"adj", level:"C1", meanings:["치료의","병을 다스리는"],
    syn:["healing in effect","good for the body","serving to cure"],
    ex:[{ s:"Warm baths have a {{}} effect.", f:"therapeutic", ko:"따뜻한 목욕은 치료의 효과가 있다." }] },

  /* 승격 ㉜ — 사전 글자 유지. 참조 acupuncture(A)·chemotherapy(C) 두 곳의
     화면은 바뀌지 않는다. 교재의 '치료법' 은 remedy 자리다. */
  { word:"therapy", exams:["공무원"], pron:"세러피", pos:"n", level:"B1", meanings:["치료","요법"],
    syn:["acupuncture","chemotherapy","course of treatment"],
    ex:[{ s:"She began {{}} last spring.", f:"therapy", ko:"그녀는 지난봄에 치료를 시작했다." }] },

  { word:"thereafter", pron:"데어애프터", pos:"adv", level:"C1", meanings:["그 후"],
    syn:["from then on","after that time","following that"],
    ex:[{ s:"{{}} the rule was never used.", f:"Thereafter", ko:"그 후 그 규칙은 한 번도 쓰이지 않았다." }] },

  { word:"thermometer", pron:"서마미터", pos:"n", level:"B2", meanings:["온도계"],
    syn:["heat gauge","tool for measuring warmth","glass with a scale"],
    ex:[{ s:"The {{}} showed thirty degrees.", f:"thermometer", ko:"온도계가 삼십 도를 가리켰다." }] },

  /* ── 챕터 5 ────────────────────────────────────── */
  /* 손질이 둘 있는 챕터다. 둘 다 사전이 품사를 반대로 잡아 둔 자리다.
       pulse(P/n) syn "throb" → beating in the veins
         사전은 throb 을 명사 '두근거림' 으로 적어 두었다. 교재는 동사였고 게다가
         '고통치다' 라는 오타였다(고동치다). 동사로 세우고 이 한 곳을 갈았다.
       bind(B/v) syn "tie" → fasten with rope
         tie 는 참조 셋 중 bond(유대감)·link(연결) 가 명사여서 명사 '유대, 매듭'
         으로 세웠다. 동사 '묶다' 는 같은 세트의 tie up(챕터 6) 이 받는다.

     ★ thrust·tread(챕터 9)·treasure(챕터 9) 는 반대로 사전이 맞는 쪽이었다.
     thrust 의 사전값은 명사 '밀어붙이는 힘' 이고 참조 momentum(기세, 탄력) 도
     명사다. 교재의 동사 '밀다, 찌르다' 를 버리고 사전값을 지켰다. */

  /* paper(논문, 서류) 와 '논문' 이 겹쳐 자동 배제된다 — treatise(논문 · 챕터 9)
     와도 맞물린다. */
  { word:"thesis", pron:"씨시스", pos:"n", level:"B2", meanings:["학위 논문","논제"],
    syn:["long written study","paper for a degree","point one argues"],
    ex:[{ s:"She finished her {{}} in May.", f:"thesis", ko:"그녀는 오월에 학위 논문을 마쳤다." }] },

  /* 승격 ㉝ — 사전 글자 유지. 참조 comprehensive(C)·intensive(I)·painstaking(P)
     세 곳의 화면은 바뀌지 않는다. rigorous(엄격한, 철저한) 와 맞물려 배제된다. */
  { word:"thorough", pron:"서로", pos:"adj", level:"B2", meanings:["철저한","완전한"],
    syn:["comprehensive","intensive","painstaking"],
    ex:[{ s:"They ran a {{}} check on the wiring.", f:"thorough", ko:"그들은 배선을 철저히 점검했다." }] },

  /* 승격 ㉞ — 사전 단일값 유지(참조 considerate). considerate(사려 깊은, 인정이
     있는) 와 맞물려 배제된다. 교재의 '배려심 있는, 친절한' 은 같은 자리라 버렸다. */
  { word:"thoughtful", pron:"소트풀", pos:"adj", level:"B1", meanings:["사려 깊은"],
    syn:["considerate","mindful of others","given to reflection"],
    ex:[{ s:"That was a {{}} gift.", f:"thoughtful", ko:"그것은 사려 깊은 선물이었다." }] },

  { word:"threat", pron:"쓰렛", pos:"n", level:"B1", meanings:["위협","협박"],
    syn:["sign of harm to come","warning of danger","menacing word"],
    ex:[{ s:"The letter was a clear {{}}.", f:"threat", ko:"그 편지는 분명한 협박이었다." }] },

  /* 승격 ㉟ — 사전 단일값 유지. 참조 jeopardize(J)·menace(M) 두 곳의 화면은
     바뀌지 않는다. endanger·intimidate 까지 넷과 '위협하다' 가 맞물려 배제된다. */
  { word:"threaten", pron:"쓰레튼", pos:"v", level:"B1", meanings:["위협하다"],
    syn:["jeopardize","menace","put in danger"],
    ex:[{ s:"Rising seas {{}} the village.", f:"threaten", ko:"높아지는 바다가 그 마을을 위협한다." }] },

  /* 승격 ㊱ — 사전의 쌍반점만 쉼표로 갈랐다(참조 brink). 교재의 '입구' 는
     portal(입구, 관문) 자리라 버렸다. */
  { word:"threshold", pron:"스레숄드", pos:"n", level:"C1", meanings:["문턱","시작점"],
    syn:["brink","door sill","point of beginning"],
    ex:[{ s:"He paused at the {{}}.", f:"threshold", ko:"그는 문턱에서 멈췄다." }] },

  /* 승격 ㊲ — 사전 글자 유지. 참조 economical(E)·extravagant(E)·frugal(F)
     세 곳의 화면은 바뀌지 않는다. */
  { word:"thrifty", pron:"스리프티", pos:"adj", level:"C1", meanings:["알뜰한","돈을 아끼는"],
    syn:["economical","frugal","careful with money"], ant:["extravagant"],
    ex:[{ s:"She is {{}} but never mean.", f:"thrifty", ko:"그녀는 알뜰하지만 인색하지는 않다." }] },

  /* 교재 [v+n] → 동사. 참조는 없다. */
  { word:"thrill", pron:"스릴", pos:"v", level:"B2", meanings:["열광시키다"],
    syn:["excite greatly","set the heart racing","stir with delight"],
    ex:[{ s:"The ending will {{}} readers.", f:"thrill", ko:"그 결말은 독자를 열광시킬 것이다." }] },

  /* 승격 ㊳ — 사전 글자 유지. 참조 desolate(D)·luxuriant(L) 두 곳의 화면은
     바뀌지 않는다. luxuriant(무성한, 잘 자라는) 와 맞물려 배제된다. */
  { word:"thriving", pron:"스라이빙", pos:"adj", level:"C1", meanings:["번성하는","잘 자라는"],
    syn:["luxuriant","doing very well","growing strongly"], ant:["desolate"],
    ex:[{ s:"The port became a {{}} town.", f:"thriving", ko:"그 항구는 번성하는 고을이 되었다." }] },

  /* 승격 ㊴ — ★ 교재 '고통치다' 는 '고동치다' 의 오타다. 사전은 명사 '두근거림'
     이었으나 교재가 동사여서 동사로 세우고, 명사 쪽을 쓰던 pulse(P) 한 곳을
     'beating in the veins' 로 갈았다. */
  { word:"throb", pron:"스랍", pos:"v", level:"B2", meanings:["고동치다","맥박이 뛰다"],
    syn:["beat steadily","pound with each beat","pulse in and out"],
    ex:[{ s:"My head began to {{}}.", f:"throb", ko:"머리가 고동치기 시작했다." }] },

  { word:"throne", pron:"쓰론", pos:"n", level:"C1", meanings:["왕위","왕권"],
    syn:["royal seat","kingly power","right to rule as king"],
    ex:[{ s:"He came to the {{}} at nine.", f:"throne", ko:"그는 아홉 살에 왕위에 올랐다." }] },

  /* 승격 ㊵ — 사전 단일값 유지(참조 mob). 교재의 동사 갈래('몰려들다') 는 버렸고
     '군중' 은 multitude(다수, 군중) 자리라 쓰지 않았다. */
  { word:"throng", pron:"쓰롱", pos:"n", level:"C1", meanings:["인파"],
    syn:["mob","dense crowd","press of people"],
    ex:[{ s:"A {{}} filled the square.", f:"throng", ko:"인파가 광장을 메웠다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"throughout", pron:"쓰루아웃", pos:"phr", level:"B1", meanings:["~동안 내내","처음부터 끝까지"],
    syn:["all the way through","from start to finish","for the whole time"] },

  /* abandon·discard·forsake·scrap 과 '버리다' 가, do away with·eliminate·
     get rid of·put an end to 와 '없애다' 가 각각 맞물려 배제된다. */
  { word:"throw ~ away", pron:"스로 어웨이", pos:"phr", level:"B1", meanings:["버리다","없애다"],
    syn:["discard","get rid of","toss out"] },

  { word:"throw up", pron:"스로 업", pos:"phr", level:"B2", meanings:["토하다"],
    syn:["bring up what one ate","be sick","vomit"] },

  /* 승격 ㊶ — ★ 사전 단일값이 명사여서 명사로 세웠다(참조 momentum 도 명사다).
     교재의 동사 '밀다, 밀치다, 찌르다' 를 버린 아까운 자리다. */
  { word:"thrust", pron:"쓰러스트", pos:"n", level:"C1", meanings:["밀어붙이는 힘"],
    syn:["momentum","driving force","push forward"],
    ex:[{ s:"The engine lost {{}}.", f:"thrust", ko:"엔진이 밀어붙이는 힘을 잃었다." }] },

  { word:"thumb", pron:"썸", pos:"n", level:"B1", meanings:["엄지손가락"],
    syn:["first and thickest finger","short broad digit","finger set apart"],
    ex:[{ s:"He hurt his {{}} on the door.", f:"thumb", ko:"그는 문에 엄지손가락을 다쳤다." }] },

  /* 교재 '간지럼 태우다, 간지럽히다' 는 같은 말이라 하나로 줄였다. */
  { word:"tickle", pron:"티클", pos:"v", level:"B2", meanings:["간지럽히다"],
    syn:["touch to make one laugh","brush lightly on the skin","cause a ticklish feel"],
    ex:[{ s:"Do not {{}} the baby's feet.", f:"tickle", ko:"아기의 발을 간지럽히지 마라." }] },

  /* 승격 ㊷ — 사전 글자 유지(참조 current). current(흐름, 현재의) 와 '흐름' 이
     맞물려 배제된다. */
  { word:"tide", pron:"타이드", pos:"n", level:"B1", meanings:["조류","흐름"],
    syn:["current","rise and fall of the sea","flow of water"],
    ex:[{ s:"The {{}} turned at noon.", f:"tide", ko:"정오에 조류가 바뀌었다." }] },

  /* 승격 ㊸ — ★ 명사로 세웠다. 참조 셋 중 bond(유대감, 결합)·link(연결, 관련) 가
     명사여서다. 동사 쪽을 쓰던 bind(B) 한 곳을 'fasten with rope' 로 갈았고,
     동사 '묶다' 는 다음 챕터의 tie up 이 받는다. */
  { word:"tie", pron:"타이", pos:"n", level:"B1", meanings:["유대","매듭"],
    syn:["bond","link","knot that fastens"],
    ex:[{ s:"Family {{}} kept them together.", f:"ties", ko:"가족의 유대가 그들을 붙들었다." }] },

  /* ── 챕터 6 ────────────────────────────────────── */
  /* ★ torment 이 이 챕터의 고비였다. 참조가 다섯인데 품사가 갈렸다 —
     afflict(괴롭히다)·haunt(머릿속을 떠나지 않다) 가 동사이고 agony(극도의 고통)·
     anguish(고뇌)·distress(고통) 셋이 명사다. 다수를 따라 명사로 세우고 동사 쪽
     두 곳을 갈았다.
       afflict(A) torment → cause suffering to
       haunt(H)   torment → weigh on the mind of
     그러면 다음 챕터의 torture(고문하다, 괴롭히다 · 동사) 와 품사로 완전히
     갈린다 — 교재에서 둘이 '괴롭히다' 로 겹쳐 있던 것을 푼 것이다.

     ★ till 은 교재와 사전이 아예 다른 자리였다. 교재는 '토지를 갈다, 경작하다'
     인데 사전은 '금전 등록기; ~까지' 다. 참조가 cash register(계산대, 금전 등록기)
     하나뿐이고 그쪽을 가리키므로 사전 첫 갈래를 따랐다.

     '정도' 를 나타내는 구가 셋 있다. 이렇게 갈랐다.
       to a large extent 상당히, 크게    ← pretty(꽤, 상당히) 와 맞물려 배제
       to some degree    어느 정도       ← '약간' 은 slightly(S) 자리
       up to a point     어느 선까지는 (U 세트)
     교재의 to an extent·to advantage·to the point of 는 이 덩어리가 이미 빽빽해서
     아예 뺐다. */

  { word:"tie the knot", pron:"타이 더 낫", pos:"phr", level:"C1", meanings:["결혼하다"],
    syn:["get married","wed at last","become husband and wife"] },

  /* 앞 챕터의 tie(유대, 매듭) 가 넘긴 동사 '묶다' 를 이 낱말이 받는다.
     bind(묶다, 의무를 지우다) 와 글자가 맞물려 자동 배제된다. */
  { word:"tie up", pron:"타이 업", pos:"phr", level:"B1", meanings:["묶다","단단히 동여매다"],
    syn:["bind","lash together","fasten tightly"] },

  /* 승격 ㊹ — ★ 사전 첫 갈래를 따랐다(참조 cash register). 교재의 '토지를 갈다,
     경작하다' 와 '~까지' 는 버렸다. */
  { word:"till", pron:"틸", pos:"n", level:"B2", meanings:["금전 등록기"],
    syn:["cash register","money drawer","box for takings"],
    ex:[{ s:"She counted the {{}} at closing.", f:"till", ko:"그녀는 문 닫을 때 금전 등록기를 셌다." }] },

  /* 승격 ㊺ — 사전 단일값 유지. 참조 incline(I)·lean(L) 두 곳의 화면은 바뀌지
     않는다. incline(기울다, 기울이다) 과 맞물려 배제된다. */
  { word:"tilt", pron:"틸트", pos:"v", level:"B2", meanings:["기울이다"],
    syn:["incline","lean","slant to one side"],
    ex:[{ s:"Do not {{}} the glass.", f:"tilt", ko:"그 잔을 기울이지 마라." }] },

  { word:"timber", exams:["공무원"], pron:"팀버", pos:"n", level:"B2", meanings:["목재","재목"],
    syn:["cut wood for building","wood as material","sawn wood"],
    ex:[{ s:"The roof is made of {{}}.", f:"timber", ko:"그 지붕은 목재로 만들어졌다." }] },

  { word:"timely", pron:"타임리", pos:"adj", level:"B2", meanings:["시기적절한","때맞춘"],
    syn:["coming at the right moment","well timed","not too late"],
    ex:[{ s:"It was a {{}} warning.", f:"timely", ko:"그것은 시기적절한 경고였다." }] },

  /* 승격 ㊻ — 사전 글자 유지. 참조 assertive(A)·bold(B)·cowardly(C) 세 곳의
     화면은 바뀌지 않는다. */
  { word:"timid", pron:"티미드", pos:"adj", level:"B2", meanings:["겁 많은","소심한"],
    syn:["cowardly","shy of risk","easily frightened"], ant:["assertive","bold"],
    ex:[{ s:"The new pupil was {{}} at first.", f:"timid", ko:"새 학생은 처음에 겁이 많았다." }] },

  /* 교재 '주석; 통조림; 깡통' 세 갈래 → 둘. */
  { word:"tin", pron:"틴", pos:"n", level:"B2", meanings:["주석","깡통"],
    syn:["soft white metal","metal can","container of metal"],
    ex:[{ s:"The box is lined with {{}}.", f:"tin", ko:"그 상자는 주석으로 안을 댔다." }] },

  /* 교재 네 갈래 → 둘. 동사 갈래는 버렸다. */
  { word:"tint", pron:"틴트", pos:"n", level:"C1", meanings:["엷은 색","색조"],
    syn:["faint shade","light tone of colour","touch of colour"],
    ex:[{ s:"The sky had a pink {{}}.", f:"tint", ko:"하늘에 분홍빛 색조가 있었다." }] },

  /* 승격 ㊼ — 사전 단일값 유지(참조 muscle). 괄호 '(생물)' 걷음.
     organization(조직) 과 글자가 맞물려 배제된다. */
  { word:"tissue", pron:"티슈", pos:"n", level:"B1", meanings:["조직"],
    syn:["muscle","cells of one kind","body material"],
    ex:[{ s:"The scan shows healthy {{}}.", f:"tissue", ko:"그 영상은 건강한 조직을 보여 준다." }] },

  /* pretty(꽤, 상당히) 와 '상당히' 가 맞물려 배제된다. 교재 세 갈래 → 둘.
     구·표현이라 예문은 두지 않는다. */
  { word:"to a large extent", pron:"투 어 라지 익스텐트", pos:"phr", level:"B2", meanings:["상당히","크게"],
    syn:["in good part","for the most part","to a high degree"] },

  /* 승격 ㊽ — 사전 단일값 유지(참조 in the first place). */
  { word:"to begin with", pron:"투 비긴 위드", pos:"phr", level:"B1", meanings:["먼저"],
    syn:["in the first place","first of all","at the outset"] },

  /* '약간' 은 slightly(약간, 조금 · S) 자리라 버렸다. U 세트의 up to a point
     (어느 선까지는) 와 갈랐다. */
  { word:"to some degree", pron:"투 섬 디그리", pos:"phr", level:"B1", meanings:["어느 정도"],
    syn:["to an extent","in part","somewhat so"] },

  /* 승격 ㊾ — 사전 단일값 유지(참조 literally). */
  { word:"to the letter", pron:"투 더 레터", pos:"phr", level:"C2", meanings:["한 글자도 틀리지 않게"],
    syn:["literally","exactly as written","word for word"] },

  /* 승격 50 — 사전 단일값 유지(참조 intolerance). 교재의 '내성, 저항력' 은
     버렸다. */
  { word:"tolerance", pron:"탈러런스", pos:"n", level:"B2", meanings:["관용"],
    syn:["willingness to allow","open mind toward others","putting up with difference"],
    ex:[{ s:"The city is known for its {{}}.", f:"tolerance", ko:"그 도시는 관용으로 알려져 있다." }] },

  /* 승격 51 — 사전 글자 유지. 참조 bear(B)·crack down on(C) 두 곳의 화면은
     바뀌지 않는다. endure(견디다, 참다) 와 '참다' 가 맞물려 배제된다. */
  { word:"tolerate", pron:"탈러레이트", pos:"v", level:"B2", meanings:["용인하다","참다"],
    syn:["bear","put up with","let pass"], ant:["crack down on"],
    ex:[{ s:"The school will not {{}} bullying.", f:"tolerate", ko:"그 학교는 괴롭힘을 용인하지 않는다." }] },

  /* desperately(필사적으로) 와 맞물려 배제된다. */
  { word:"tooth and nail", pron:"투스 앤드 네일", pos:"phr", level:"C2", meanings:["전력을 다하여","필사적으로"],
    syn:["with all one's might","fighting hard","to the last breath"] },

  /* 승격 52 — 사전 단일값 유지(참조 first-rate). 교재의 '최고의, 최상의' 는
     superb(훌륭한, 최고의 · S) 자리라 버렸다. */
  { word:"top-notch", pron:"탑 나치", pos:"adj", level:"B2", meanings:["최고 수준의"],
    syn:["first-rate","of the highest grade","as good as it gets"],
    ex:[{ s:"They hired a {{}} designer.", f:"top-notch", ko:"그들은 최고 수준의 설계자를 뽑았다." }] },

  /* 승격 53 — ★ 명사로 세웠다. 참조 다섯 중 agony(A)·anguish(A)·distress(D) 셋이
     명사여서다. 동사 쪽을 쓰던 afflict(A)·haunt(H) 두 곳을 갈았다.
     다음 챕터의 torture(고문하다, 괴롭히다 · 동사) 와 품사로 갈린다. */
  { word:"torment", pron:"토멘트", pos:"n", level:"C1", meanings:["고통","고뇌"],
    syn:["agony","anguish","distress"],
    ex:[{ s:"He lived in daily {{}}.", f:"torment", ko:"그는 날마다 고통 속에 살았다." }] },

  /* 승격 54 — 사전의 쌍반점만 쉼표로 갈랐다(참조 deluge). */
  { word:"torrent", pron:"토런트", pos:"n", level:"C1", meanings:["급류","빗발"],
    syn:["deluge","rushing stream","heavy downpour"],
    ex:[{ s:"A {{}} swept down the valley.", f:"torrent", ko:"급류가 골짜기를 휩쓸고 내려갔다." }] },

  /* ══ 7차 · torture ~ transcendence (20단어) ══════════════════════════════
     승격 6(toxic·trace·track·trade·trail·trait) · 신규 14

     ★ 이 챕터의 고비는 '거래' 덩어리 넷이다. trade(거래, 무역)·tradeoff(교환,
     주고받기)·transact(거래하다)·transaction(거래, 처리) 가 한 챕터에 모여 있다.
     trade·transaction 은 첫 뜻이 '거래' 로 글자가 같고, transact 의 '거래하다' 는
     그 둘을 안에 품는다. meaningsOverlap 이 셋을 서로의 오답에서 자동으로 빼므로
     같은 문제에 나란히 뜨지 않는다 — 일부러 글자를 맞춰 둔 것이다. tradeoff 만
     '교환, 주고받기' 로 완전히 갈라 세웠다('거래' 는 trade 자리).
     transact 는 deal in(거래하다, 취급하다 · D) 과도 맞물려 배제된다.

     ★ trace 와 track 을 품사로 갈랐다. 사전은 둘 다 '추적하다' 를 첫 갈래로
     갖고 있었다(trace 추적하다; 흔적 / track 추적하다; 경로). 그대로 두면 한
     챕터 안에서 정답이 둘인 문제가 나온다. 확정은 이렇게 했다.
       trace  n  흔적, 극미량      ← 교재가 쓰는 갈래
       track  v  추적하다, 뒤쫓다   ← 사전 첫 갈래
     두 낱말은 참조가 chase down(C) 한 곳에서 겹쳤다. trace 가 명사로 서면
     동사구의 유의어 자리에 명사가 놓이므로 그 한 곳을 갈았다.
       chase down(C) trace → hunt down step by step
     같은 자리의 track 은 동사로 세워 그대로 맞는다. trail 도 사전값 그대로
     동사('뒤처져 따라가다') 라서 셋이 서로 다른 자리에 선다.

     ★ 앞 챕터의 torment 를 명사로 세운 덕에 torture 가 동사 '고문하다,
     괴롭히다' 를 온전히 받는다. 교재에서 둘이 '괴롭히다' 로 겹쳐 있던 것이
     이렇게 풀렸다.

     ★ tranquil·tranquility 는 S 세트와 글자를 맞춰 배제시켰다.
       tranquil     고요한, 평화로운  = serene(S) 와 글자가 통째로 같다
       tranquility  평온, 고요        ↔ stillness(S 고요, 평온) 와 앞뒤만 다르다
     어설프게 다르게 적으면 앱이 둘을 다른 뜻으로 보고 같은 문제에 나란히
     내놓는다. 똑같이 맞추는 것이 안전하다.

     ★ transcendence 는 교재가 '초월, 탁월' 로 적었는데 '탁월' 은 transcend 에
     없는 뜻이다. '초월, 뛰어넘음' 으로 바로잡았다.

     trail 은 교재의 '오솔길, 흔적' 을 버렸다. '흔적' 은 바로 위 trace 자리이고,
     참조 fall behind(F)·lag behind(L) 두 곳이 모두 동사 쪽을 가리킨다.
     trample 은 교재 두 갈래('짓밟다, 밟아 뭉개다') 가 같은 말이어서 하나로 줄였다. */

  /* 앞 챕터 torment(고통, 고뇌 · 명사) 와 품사로 갈렸다. */
  { word:"torture", pron:"토처", pos:"v", level:"B2", meanings:["고문하다","괴롭히다"],
    syn:["inflict pain on","put to the rack","torment cruelly"],
    ex:[{ s:"The guards used to {{}} their prisoners.", f:"torture", ko:"그 경비들은 죄수들을 고문하곤 했다." }] },

  { word:"toss and turn", pron:"토스 앤드 턴", pos:"phr", level:"B2", meanings:["뒤척이다"],
    syn:["roll about in bed","sleep badly","keep turning over"] },

  { word:"tourist destination", pron:"투어리스트 데스터네이션", pos:"phr", level:"B1", meanings:["관광지"],
    syn:["place travellers go","spot for sightseeing","holiday point"] },

  /* 승격 55 — 사전 단일값 유지. 참조 hazardous(H) 한 곳의 화면은 바뀌지 않는다. */
  { word:"toxic", pron:"톡식", pos:"adj", level:"B2", meanings:["유독한"],
    syn:["hazardous","full of poison","harmful to life"],
    ex:[{ s:"The fumes from the pit were {{}}.", f:"toxic", ko:"그 구덩이에서 나온 연기는 유독했다." }] },

  { word:"toxin", pron:"톡신", pos:"n", level:"B2", meanings:["독소"],
    syn:["poison from a living thing","harmful substance in the body","venom"],
    ex:[{ s:"The liver breaks down each {{}}.", f:"toxin", ko:"간은 각 독소를 분해한다." }] },

  /* 승격 56 — ★ 사전의 '추적하다; 흔적' 에서 명사 쪽만 세웠다. 아래 track 이
     동사 '추적하다' 를 받는다. 참조 chase down(C) 한 곳을 갈았다. */
  { word:"trace", pron:"트레이스", pos:"n", level:"B1", meanings:["흔적","극미량"],
    syn:["mark left behind","tiny amount","faint sign"],
    ex:[{ s:"There was not a {{}} of dust on the shelf.", f:"trace", ko:"선반에는 먼지의 흔적조차 없었다." }] },

  /* 승격 57 — 사전 첫 갈래를 세웠다(참조 chase down 유지). '경로' 는 위 trace 의
     '흔적' 과 가까워 버렸다. pursue(추구하다, 뒤쫓다) 와 '뒤쫓다' 가 맞물려
     배제된다. */
  { word:"track", pron:"트랙", pos:"v", level:"B1", meanings:["추적하다","뒤쫓다"],
    syn:["chase down","pursue","follow the trail of"],
    ex:[{ s:"The dogs can {{}} a deer for miles.", f:"track", ko:"그 개들은 사슴을 몇 마일이나 추적할 수 있다." }] },

  /* 승격 58 — 사전 글자 유지. 참조 barter(B)·commerce(C)·craft(C)·industry(I)·
     occupation(O) 다섯 곳의 화면은 바뀌지 않는다. commerce(무역, 상거래) 와
     '무역' 이 맞물려 배제된다. */
  { word:"trade", pron:"트레이드", pos:"n", level:"B1", meanings:["거래","무역"],
    syn:["commerce","industry","buying and selling"],
    ex:[{ s:"The {{}} between the two ports grew fast.", f:"trade", ko:"두 항구 사이의 거래가 빠르게 늘었다." }] },

  /* '거래' 는 위 trade 자리라 쓰지 않았다. */
  { word:"tradeoff", pron:"트레이드오프", pos:"n", level:"C1", meanings:["교환","주고받기"],
    syn:["giving up one for another","balance of gains and losses","swap of benefits"],
    ex:[{ s:"Speed and safety always involve a {{}}.", f:"tradeoff", ko:"속도와 안전은 늘 교환 관계에 있다." }] },

  { word:"tragic", pron:"트래직", pos:"adj", level:"B2", meanings:["비극의","비참한"],
    syn:["of a sad ending","deeply sorrowful","ending in disaster"],
    ex:[{ s:"The play has a {{}} ending.", f:"tragic", ko:"그 연극은 비극의 결말을 지녔다." }] },

  /* 승격 59 — 사전 단일값 유지. 참조 fall behind(F)·lag behind(L) 두 곳의 화면은
     바뀌지 않는다. 교재의 '오솔길, 흔적' 은 위 trace 자리라 버렸다. */
  { word:"trail", pron:"트레일", pos:"v", level:"C1", meanings:["뒤처져 따라가다"],
    syn:["fall behind","lag behind","follow at a distance"],
    ex:[{ s:"The youngest runner began to {{}}.", f:"trail", ko:"가장 어린 주자가 뒤처져 따라가기 시작했다." }] },

  /* 승격 60 — 사전 글자 유지. 참조 characteristic(C)·feature(F) 두 곳의 화면은
     바뀌지 않는다. characteristic(특성, 특유의) 과 '특성' 이 맞물려 배제된다. */
  { word:"trait", pron:"트레이트", pos:"n", level:"B1", meanings:["특성","특질"],
    syn:["characteristic","feature","mark of one's nature"],
    ex:[{ s:"Patience is her strongest {{}}.", f:"trait", ko:"인내는 그녀의 가장 두드러진 특성이다." }] },

  { word:"traitor", pron:"트레이터", pos:"n", level:"C1", meanings:["배반자","반역자"],
    syn:["one who betrays","turncoat","rebel against one's own"],
    ex:[{ s:"History has named him a {{}}.", f:"traitor", ko:"역사는 그를 배반자로 불러 왔다." }] },

  /* 교재의 '짓밟다, 밟아 뭉개다' 두 갈래가 같은 말이어서 하나로 줄였다. */
  { word:"trample", pron:"트램플", pos:"v", level:"C1", meanings:["짓밟다"],
    syn:["tread heavily on","crush underfoot","stamp down on"],
    ex:[{ s:"Do not {{}} the young plants.", f:"trample", ko:"어린 식물을 짓밟지 마라." }] },

  /* serene(고요한, 평화로운 · S) 과 글자를 통째로 맞춰 자동 배제시켰다. */
  { word:"tranquil", pron:"트랭퀼", pos:"adj", level:"C1", meanings:["고요한","평화로운"],
    syn:["calm and quiet","free of trouble","at peace"],
    ex:[{ s:"The lake was {{}} at dawn.", f:"tranquil", ko:"그 호수는 새벽에 고요했다." }] },

  /* stillness(고요, 평온 · S) 와 앞뒤만 다르게 두어 자동 배제시켰다. */
  { word:"tranquility", pron:"트랭퀼러티", pos:"n", level:"C1", meanings:["평온","고요"],
    syn:["state of calm","absence of noise","quiet of mind"],
    ex:[{ s:"She longed for the {{}} of her old home.", f:"tranquility", ko:"그녀는 옛집의 평온을 그리워했다." }] },

  /* deal in(거래하다, 취급하다 · D) 과 맞물려 배제된다. */
  { word:"transact", pron:"트랜잭트", pos:"v", level:"C1", meanings:["거래하다"],
    syn:["deal in","do business","carry out a deal"],
    ex:[{ s:"The two firms {{}} in metals.", f:"transact", ko:"두 회사는 금속을 거래한다." }] },

  /* 위 trade(거래, 무역) 와 '거래' 가 맞물려 배제된다 — 일부러 글자를 맞췄다. */
  { word:"transaction", pron:"트랜잭션", pos:"n", level:"B2", meanings:["거래","처리"],
    syn:["piece of business","deal carried out","exchange of money"],
    ex:[{ s:"Every {{}} is recorded in the ledger.", f:"transaction", ko:"모든 거래가 장부에 기록된다." }] },

  { word:"transcend", pron:"트랜센드", pos:"v", level:"C1", meanings:["초월하다"],
    syn:["rise above","go past the limit of","surpass all bounds"],
    ex:[{ s:"Great music can {{}} language.", f:"transcend", ko:"위대한 음악은 언어를 초월할 수 있다." }] },

  /* ★ 교재의 '탁월' 은 transcend 에 없는 뜻이라 버리고 '뛰어넘음' 으로 바로잡았다. */
  { word:"transcendence", pron:"트랜센던스", pos:"n", level:"C2", meanings:["초월","뛰어넘음"],
    syn:["going beyond limits","state of rising above","passing all bounds"],
    ex:[{ s:"The poem speaks of {{}}.", f:"transcendence", ko:"그 시는 초월을 말한다." }] },

  /* ══ 8차 · transcribe ~ treacherous (20단어) ═════════════════════════════
     승격 7(transform·transient·transmit·transparent·trap·trash·treacherous) · 신규 13

     ★ 이 챕터는 T 세트에서 가장 위험했다. trans- 로 시작하는 낱말이 열셋이나
     한자리에 모여 '옮김·보냄' 을 저마다 조금씩 다르게 말한다. 게다가 앱의
     4지선다는 한→영에서 **철자가 닮은 낱말을 오답으로 먼저 고른다**(quizgen 의
     spellingScore). 즉 이 열셋은 서로의 오답으로 뜨는 것이 기본값이다.

     짝 맞추기 보드는 공통 접두사 6글자 이상을 같은 어근으로 보고 가른다. 그래서
     transmit↔transmission(7) · transport↔transportation(9) · transit↔transition(7) ·
     transcribe↔transcript(8) · transfer↔transfuse(6) 는 자동으로 갈린다. 그런데
     'trans' 다섯 글자만 같은 짝은 걸리지 않는다. 남는 위험이 둘이었다.

       ① transfer(v 옮기다, 이동하다) ↔ transport(v 수송하다, 이동시키다)
          '이동하다' 와 '이동시키다' 는 글자가 달라 자동 배제가 안 된다.
          → transport 를 '수송하다, 실어 옮기다' 로 고쳤다. '실어 옮기다' 가
            transfer 의 '옮기다' 를 글자째 품으므로 meaningsOverlap 이 둘을
            서로의 오답에서 자동으로 뺀다. relocate(이전하다, 옮기다 · R) 와도
            같은 이유로 갈린다.

       ② transit(n 수송, 환승) ↔ transportation(n 교통, 운송)
          '수송' 과 '운송' 은 사실상 같은 말인데 글자가 달라 그냥 통과한다.
          → transportation 을 '교통, 수송' 으로 고쳤다. '수송' 을 글자까지
            맞추니 자동 배제된다.

     밖에서 걸어 들어오는 함정도 셋 있었다.
       ③ traumatic  대단히 충격적인 → **정신적 외상의, 충격적인**
          horrendous(충격적인 · C1/adj) 와 outrageous(너무나 충격적인 · C1/adj) 가
          이미 그 자리를 쓰고 있었다. '대단히 충격적인' 은 셋 다 글자가 달라
          하나도 배제되지 않는다. '충격적인' 으로 맞추니 둘 다 자동 배제된다.
       ④ treacherous  믿을 수 없는 → **배신하는, 믿을 수 없는**
          한국어 '믿을 수 없는' 은 '신뢰할 수 없는' 과 '믿기 어려운' 두 쪽으로
          읽힌다. incredible(믿기 어려운, 놀라운 · B2/adj) 와 레벨 차가 1이어서
          한 문제에 같이 뜨는데, 한→영에서 '믿을 수 없는' 을 물으면 incredible
          도 맞는 답이 되어 버린다.
          ★ 여기서 quizgen 을 다시 읽고 알아낸 것이 하나 있다. **영→한 4지선다는
          선택지에 첫 뜻만 쓴다**(makeMcq 의 en-ko 갈래가 meanings[0] 만 모은다).
          그래서 갈래를 더하는 것만으로는 부족하고 **첫 자리에 놓아야** 갈린다.
          '배신하는' 을 앞으로 올렸다. ★ insidious(I) 의 화면이 한 줄 늘어난다.
       ⑦ transition  전이, 이행 → **이행, 전이**
          같은 이유다. 첫 뜻 '전이' 는 같은 챕터 transmission(전송) 과 눈으로
          갈리지 않는다. 둘은 품사·레벨이 같고 접두사가 다섯 글자('trans') 만
          겹쳐 어근 검사(여섯 글자)에도 안 걸린다. '이행' 을 앞으로 올렸다.
       ⑤ transcribe  복사하다, 베끼다 → **베끼다, 옮겨 적다**
          duplicate(복제하다, 되풀이하다 · C1/v) 와 레벨·품사가 같은데 '복사하다'
          와 '복제하다' 는 글자가 달라 배제되지 않는다. transcribe 는 말을 글로
          옮기는 쪽이므로 '옮겨 적다' 로 갈랐다.
       ⑥ trash(폐기물) ↔ rubbish(잡쓰레기 · B2/n)
          뜻을 가를 수가 없어서 rubbish 를 trash 의 유의어로 등록했다. 앱은
          유의어 관계인 두 낱말을 서로의 오답으로 쓰지 않는다. rubbish 자신의
          화면은 바뀌지 않는다.

     나머지는 손대지 않아도 자동으로 갈린다.
       transform  ← convert·alter·switch 가 모두 '바꾸다' 를 써서 맞물린다
       transient  ← momentary 와 유의어 관계 · temporary 는 레벨 차 2
       transmit   ← convey·deliver·relay·impart 가 '전달하다' 로 맞물린다
       transparent ← crystal-clear(아주 투명한) 가 '투명한' 을 품는다
       transnational ← multinational(다국적의) 와 글자가 같다
       transfuse  ← indoctrinate(사상을 주입하다) 가 '주입하다' 를 품는다
       trap       ← imprison(투옥하다, 가두다) 와 '가두다' 가 같다 · confine 은 레벨 차 2 */

  /* ★ duplicate(복제하다 · C1/v) 를 피해 '복사하다' 를 '옮겨 적다' 로 갈랐다. */
  { word:"transcribe", pron:"트랜스크라이브", pos:"v", level:"C1", meanings:["베끼다","옮겨 적다"],
    syn:["copy out by hand","write out word for word","put speech into writing"],
    ex:[{ s:"She had to {{}} the whole interview.", f:"transcribe", ko:"그녀는 면담 전체를 옮겨 적어야 했다." }] },

  { word:"transcript", pron:"트랜스크립트", pos:"n", level:"B2", meanings:["성적 증명서","필기록"],
    syn:["record of marks","written copy of speech","official school record"],
    ex:[{ s:"The college asked for her {{}}.", f:"transcript", ko:"그 대학은 그녀의 성적 증명서를 요구했다." }] },

  /* relocate(이전하다, 옮기다 · R) 와 '옮기다' 가 맞물려 배제된다. 아래 transport
     도 '실어 옮기다' 로 두어 이 낱말과 갈렸다. */
  { word:"transfer", exams:["공무원"], pron:"트랜스퍼", pos:"v", level:"B1", meanings:["옮기다","이동하다"],
    syn:["relocate","move to another place","shift across"],
    ex:[{ s:"They will {{}} him to another branch.", f:"transfer", ko:"그들은 그를 다른 지점으로 옮길 것이다." }] },

  /* 승격 61 — 사전 글자 유지(참조 convert). 교재의 '변형시키다' 는
     deform(변형시키다, 기형으로 만들다 · D) 자리라 버렸다. convert·alter·switch
     가 모두 '바꾸다' 를 써서 맞물려 배제된다. */
  { word:"transform", pron:"트랜스폼", pos:"v", level:"B1", meanings:["변환하다","바꾸다"],
    syn:["convert","make over into","change the form of"],
    ex:[{ s:"Rain can {{}} the whole valley.", f:"transform", ko:"비는 골짜기 전체를 바꿔 놓을 수 있다." }] },

  { word:"transfuse", pron:"트랜스퓨즈", pos:"v", level:"C2", meanings:["수혈하다","주입하다"],
    syn:["put blood into","pour in from outside","feed in slowly"],
    ex:[{ s:"The doctors had to {{}} blood at once.", f:"transfuse", ko:"의사들은 즉시 수혈해야 했다." }] },

  /* 승격 62 — 사전 단일값 유지. 참조 momentary(M) 한 곳의 화면은 바뀌지 않는다.
     '일시적인' 은 temporary(일시적인 · T… 아닌 B1 표제어) 자리라 쓰지 않았다. */
  { word:"transient", pron:"트랜지언트", pos:"adj", level:"C1", meanings:["오래 가지 않는"],
    syn:["momentary","lasting a short while","soon gone"],
    ex:[{ s:"Fame of that kind is {{}}.", f:"transient", ko:"그런 종류의 명성은 오래 가지 않는다." }] },

  /* 교재 네 갈래 → 둘. 아래 transportation 을 '교통, 수송' 으로 맞춰 이 낱말의
     '수송' 과 자동 배제되게 했다. */
  { word:"transit", pron:"트랜싯", pos:"n", level:"B2", meanings:["수송","환승"],
    syn:["carriage of goods","change of trains","passage from place to place"],
    ex:[{ s:"The goods were damaged in {{}}.", f:"transit", ko:"그 물품은 수송 중에 손상되었다." }] },

  { word:"transition", exams:["공무원"], pron:"트랜지션", pos:"n", level:"B2", meanings:["이행","전이"],
    syn:["move from one state to another","passing over","change of stage"],
    ex:[{ s:"The {{}} to the new system took a year.", f:"transition", ko:"새 체계로의 이행은 일 년이 걸렸다." }] },

  { word:"transmission", pron:"트랜스미션", pos:"n", level:"B2", meanings:["전송"],
    syn:["sending out","relay of a signal","spread from one to another"],
    ex:[{ s:"The {{}} was cut off by the storm.", f:"transmission", ko:"그 전송은 폭풍으로 끊겼다." }] },

  /* 승격 63 — 사전 글자 유지. 참조 broadcast(B)·dispatch(D) 두 곳의 화면은
     바뀌지 않는다. convey·deliver·relay·impart 가 모두 '전달하다' 를 써서
     맞물려 배제된다. */
  { word:"transmit", exams:["공무원"], pron:"트랜스미트", pos:"v", level:"B2", meanings:["전달하다","전송하다"],
    syn:["broadcast","dispatch","send out over a distance"],
    ex:[{ s:"The station will {{}} the match live.", f:"transmit", ko:"그 방송국은 경기를 생중계로 전달할 것이다." }] },

  /* multinational(다국적의 · M) 과 글자가 같아 자동 배제된다. */
  { word:"transnational", pron:"트랜스내셔널", pos:"adj", level:"C1", meanings:["다국적의","초국가적인"],
    syn:["multinational","across many states","beyond one country"],
    ex:[{ s:"It grew into a {{}} firm.", f:"transnational", ko:"그것은 다국적 회사로 커졌다." }] },

  /* 승격 64 — 사전 단일값 유지. 참조 crystal-clear(C) 한 곳의 화면은 바뀌지
     않는다. 교재의 '명백한' 은 U 세트 자리라 버렸다. */
  { word:"transparent", pron:"트랜스패런트", pos:"adj", level:"B2", meanings:["투명한"],
    syn:["crystal-clear","able to be seen through","letting light pass"],
    ex:[{ s:"The wings are almost {{}}.", f:"transparent", ko:"그 날개는 거의 투명하다." }] },

  /* 교재는 [v+n] 이지만 동사 쪽만 세웠다. */
  { word:"transplant", exams:["공무원"], pron:"트랜스플랜트", pos:"v", level:"B2", meanings:["이식하다"],
    syn:["move to another body","graft into place","set in a new spot"],
    ex:[{ s:"Surgeons can {{}} a kidney.", f:"transplant", ko:"외과의는 콩팥을 이식할 수 있다." }] },

  /* ★ '이동시키다' 를 '실어 옮기다' 로 고쳤다. 위 transfer 의 '옮기다' 를
     글자째 품어 자동 배제된다. 아래 transportation(명사) 과는 품사로 갈렸다. */
  { word:"transport", pron:"트랜스포트", pos:"v", level:"B1", meanings:["수송하다","실어 옮기다"],
    syn:["carry goods across","haul from place to place","ship out"],
    ex:[{ s:"Lorries {{}} the grain to the port.", f:"transport", ko:"트럭들이 곡물을 항구로 수송한다." }] },

  /* ★ '운송' 을 '수송' 으로 고쳤다. 위 transit(수송, 환승) 과 글자를 맞춰
     자동 배제시킨 것이다 — 둘은 사실상 같은 말이어서 갈라 쓸 수 없었다. */
  { word:"transportation", exams:["공무원"], pron:"트랜스포테이션", pos:"n", level:"B1", meanings:["교통","수송"],
    syn:["means of getting about","carriage of people","public means of travel"],
    ex:[{ s:"Public {{}} is cheap here.", f:"transportation", ko:"이곳은 대중 교통이 싸다." }] },

  /* 승격 65 — 사전 글자 유지. 참조 entangle(E) 한 곳의 화면은 바뀌지 않는다.
     imprison(투옥하다, 가두다) 과 '가두다' 가 맞물려 배제되고, confine 은
     레벨 차가 2여서 애초에 같은 문제에 오지 않는다. */
  { word:"trap", pron:"트랩", pos:"v", level:"B1", meanings:["가두다","덫에 빠뜨리다"],
    syn:["entangle","catch in a snare","shut in with no way out"],
    ex:[{ s:"The flood may {{}} them in the cellar.", f:"trap", ko:"홍수가 그들을 지하실에 가둘 수 있다." }] },

  /* 승격 66 — 사전 단일값 유지. 참조 litter(L) 한 곳의 화면은 바뀌지 않는다.
     ★ rubbish(잡쓰레기 · B2/n) 는 뜻을 가를 수가 없어 유의어로 등록했다 —
     앱은 유의어 관계인 두 낱말을 서로의 오답으로 쓰지 않는다. '쓰레기' 는
     filth(오물, 쓰레기 · C1) 자리라 쓰지 않았다. */
  { word:"trash", pron:"트래시", pos:"n", level:"B1", meanings:["폐기물"],
    syn:["litter","rubbish","waste thrown away"],
    ex:[{ s:"The yard was full of {{}}.", f:"trash", ko:"그 마당은 폐기물로 가득했다." }] },

  /* ★ '대단히 충격적인' 을 '충격적인' 으로 맞췄다. horrendous(충격적인)·
     outrageous(너무나 충격적인) 둘이 이렇게 해야 자동 배제된다. */
  { word:"traumatic", pron:"트로매틱", pos:"adj", level:"C1", meanings:["정신적 외상의","충격적인"],
    syn:["leaving a deep wound in the mind","hard to get over","scarring"],
    ex:[{ s:"The crash was {{}} for the whole crew.", f:"traumatic", ko:"그 충돌은 승무원 전체에게 정신적 외상을 남겼다." }] },

  /* 교재의 명사 갈래('가로지름') 는 버렸다. */
  { word:"traverse", pron:"트래버스", pos:"v", level:"C2", meanings:["가로지르다","횡단하다"],
    syn:["cut right across","go from side to side","travel over"],
    ex:[{ s:"They had to {{}} the frozen lake.", f:"traverse", ko:"그들은 얼어붙은 호수를 가로질러야 했다." }] },

  /* 승격 67 — ★ 사전 단일값에 '배신하는' 을 더했다. '믿을 수 없는' 혼자로는
     incredible(믿기 어려운, 놀라운 · B2/adj) 과 구별되지 않는다. 참조
     insidious(I) 의 화면이 한 줄 늘어난다. 교재의 '기만적인' 은
     deceptive(기만적인 · C1) 자리라 쓰지 않았다. */
  { word:"treacherous", pron:"트레처러스", pos:"adj", level:"C1", meanings:["배신하는","믿을 수 없는"],
    syn:["insidious","ready to betray","not to be trusted"],
    ex:[{ s:"His closest ally proved {{}}.", f:"treacherous", ko:"그의 가장 가까운 동맹은 믿을 수 없는 자로 드러났다." }] },

  /* ══ 9차 · tread ~ trivia (20단어) ═══════════════════════════════════════
     승격 12 · 신규 8

     이 챕터는 사전 쪽이 이미 잘 갈라 둔 자리가 많아 손볼 곳이 하나뿐이었다.
     앞 차수에서 알아낸 '첫 뜻만 선택지에 뜬다' 는 규칙으로 T9~U4 를 미리
     훑었는데(first-scan.js) 이 챕터에서 걸린 것은 trendy 하나다.

       ★ trendy  최신 유행의 → **유행을 따르는, 최신 유행의**
         state-of-the-art(최신의 · C1/adj) 와 레벨 차가 1이어서 한 문제에
         같이 뜬다. 그런데 '최신 유행의' 와 '최신의' 는 글자가 달라 자동
         배제가 안 되고, 눈으로도 갈리지 않는다. 첫 자리를 '유행을 따르는'
         으로 바꿔 갈랐다. 교재의 '최신 유행의' 는 둘째 갈래로 살려 두었다.

     ★ tremble 은 사전값 '부들부들 떨다' 를 글자까지 지켰다. '떨다' 로 줄이면
     shiver(S) 의 유의어 목록 안에서 quiver(떨다) 와 설명이 똑같아진다. 지금
     글자로는 quiver 의 '떨다' 를 통째로 품어 오답 자리에서도 자동 배제된다.

     ★ 동음이의 두 자리가 스스로 풀렸다. 한국어로 적으면 글자가 같아지는 덕에
     meaningsOverlap 이 알아서 갈라 준다.
       tribe(부족)     ↔ shortage(부족, 품귀 · B1/n) · clan(씨족, 부족 · C1/n)
       trickery(속임수, 사기) ↔ morale(사기, 의욕 · C1/n) · fraud(사기꾼, 사기 · C1/n)

     품사로 가른 자리가 둘이다.
       trick(v 속이다)    ↔ trickery(n 속임수, 사기)   — 사전이 '속이다; 속임수' 였다
       tread(n 발걸음)    — 교재 동사 갈래를 버렸다(참조 footstep 이 명사다)
     trigger 도 사전 첫 갈래만 세우고 명사 '방아쇠' 를 버렸다.

     ★ trigger 의 유의어에 provoke 를 넣었다. provoke(자극하다, 유발하다 ·
     B2/v) 는 '촉발하다' 와 글자가 달라 자동 배제가 안 되는데 뜻은 거의
     같다. 유의어로 등록하면 앱이 둘을 서로의 오답으로 쓰지 않는다.

     treasure·tread 는 '아까운 자리' 다. 교재의 '보물' 과 '밟다' 를 버렸는데,
     참조 cherish(동사)·footstep(명사) 가 각각 반대 품사를 가리키기 때문이다. */

  /* 승격 68 — 사전 단일값 유지. 참조 footstep(F) 한 곳의 화면은 바뀌지 않는다.
     교재의 동사 갈래('밟다') 는 버렸다 — 아까운 자리다. */
  { word:"tread", pron:"트레드", pos:"n", level:"C1", meanings:["발걸음"],
    syn:["footstep","sound of walking","step of the foot"],
    ex:[{ s:"We heard the heavy {{}} of boots.", f:"tread", ko:"우리는 장화의 무거운 발걸음을 들었다." }] },

  /* 승격 69 — ★ 사전 첫 갈래만 세웠다. 참조 cherish(C) 가 동사여서다. 교재의
     '보물' 을 버린 아까운 자리다. cherish(소중히 하다, 아끼다) 와 글자가
     맞물려 배제된다. */
  { word:"treasure", exams:["공무원"], pron:"트레저", pos:"v", level:"B1", meanings:["소중히 하다"],
    syn:["cherish","hold dear","set great store by"],
    ex:[{ s:"She will always {{}} that letter.", f:"treasure", ko:"그녀는 그 편지를 늘 소중히 할 것이다." }] },

  /* paper(논문, 서류 · B1/n) 와 글자가 맞물려 배제된다. thesis(학위 논문 ·
     B2/n) 와는 레벨 차가 2여서 애초에 같은 문제에 오지 않는다. */
  { word:"treatise", pron:"트리티스", pos:"n", level:"C2", meanings:["논문"],
    syn:["long written study","formal piece of writing","scholarly work"],
    ex:[{ s:"He wrote a long {{}} on light.", f:"treatise", ko:"그는 빛에 관한 긴 논문을 썼다." }] },

  { word:"treaty", pron:"트리티", pos:"n", level:"B2", meanings:["조약","협정"],
    syn:["formal pact between states","signed agreement","accord between nations"],
    ex:[{ s:"The two states signed a {{}}.", f:"treaty", ko:"두 나라가 조약에 서명했다." }] },

  /* 승격 70 — ★ 사전 글자를 그대로 지켰다. '떨다' 로 줄이면 shiver(S) 의
     유의어 목록 안에서 quiver(떨다) 와 설명이 똑같아진다. 지금 글자는
     quiver 를 통째로 품어 오답 자리에서도 자동 배제된다. */
  { word:"tremble", pron:"트렘블", pos:"v", level:"B1", meanings:["부들부들 떨다"],
    syn:["shiver","shake all over","quake with fear"],
    ex:[{ s:"Her hands began to {{}}.", f:"tremble", ko:"그녀의 손이 부들부들 떨리기 시작했다." }] },

  /* enormous·massive·monumental 이 '거대한' 을, fabulous·marvelous·amazing·
     awesome 이 '굉장한' 을 써서 일곱 곳이 모두 맞물려 배제된다. */
  { word:"tremendous", pron:"트리멘더스", pos:"adj", level:"B2", meanings:["거대한","굉장한"],
    syn:["enormous","of great size","strikingly great"],
    ex:[{ s:"The bridge bears a {{}} weight.", f:"tremendous", ko:"그 다리는 거대한 무게를 견딘다." }] },

  /* 승격 71 — 사전 글자 유지. 참조 craze(C)·fad(F) 두 곳의 화면은 바뀌지
     않는다. 교재의 '경향' 은 inclination(경향, 성향) 자리라 버렸다. */
  { word:"trend", exams:["공무원"], pron:"트렌드", pos:"n", level:"B1", meanings:["추세","유행"],
    syn:["craze","fad","general direction of change"],
    ex:[{ s:"There is a clear {{}} toward smaller homes.", f:"trend", ko:"더 작은 집을 향한 분명한 추세가 있다." }] },

  /* ★ 첫 뜻을 '유행을 따르는' 으로 갈랐다. '최신 유행의' 를 앞에 두면
     state-of-the-art(최신의 · C1/adj) 와 눈으로 갈리지 않는다 — 영→한
     선택지에는 첫 뜻만 뜨기 때문이다. 교재 명사 갈래는 버렸다. */
  { word:"trendy", pron:"트렌디", pos:"adj", level:"B2", meanings:["유행을 따르는","최신 유행의"],
    syn:["in the latest style","following the fashion","up with the times"],
    ex:[{ s:"The café is very {{}} this year.", f:"trendy", ko:"그 카페는 올해 매우 유행을 따른다." }] },

  /* 승격 72 — 사전 단일값 유지(참조 intrude). */
  { word:"trespass", pron:"트레스퍼스", pos:"v", level:"C1", meanings:["무단으로 들어가다"],
    syn:["intrude","enter without leave","go in where one may not"],
    ex:[{ s:"Do not {{}} on private land.", f:"trespass", ko:"사유지에 무단으로 들어가지 마라." }] },

  /* 교재 세 갈래 → 둘. */
  { word:"trial", pron:"트라이얼", pos:"n", level:"B1", meanings:["재판","시도"],
    syn:["hearing in court","test run","trying something out"],
    ex:[{ s:"The {{}} lasted three weeks.", f:"trial", ko:"그 재판은 삼 주간 이어졌다." }] },

  { word:"trial and error", exams:["공무원"], pron:"트라이얼 앤드 에러", pos:"phr", level:"B2", meanings:["시행착오"],
    syn:["learning by mistakes","trying until it works","feeling one's way"] },

  /* 승격 73 — 사전 단일값 유지(참조 clan). ★ 한국어로 적으면 shortage(부족,
     품귀 · B1/n) 와 글자가 같아진다. 동음이의가 오히려 도움이 되어
     meaningsOverlap 이 둘을 서로의 오답에서 자동으로 뺀다. */
  { word:"tribe", pron:"트라이브", pos:"n", level:"B1", meanings:["부족"],
    syn:["clan","people of one stock","group under one chief"],
    ex:[{ s:"The {{}} moved with the rains.", f:"tribe", ko:"그 부족은 비를 따라 움직였다." }] },

  /* 승격 74 — 사전 첫 갈래만 세웠다(참조 deceive). 명사 '속임수' 는 바로
     아래 trickery 자리다. deceive(속이다, 기만하다) 와 글자가 맞물려 배제된다. */
  { word:"trick", pron:"트릭", pos:"v", level:"B1", meanings:["속이다"],
    syn:["deceive","take in by a ruse","play a trick on"],
    ex:[{ s:"They tried to {{}} the old man.", f:"trick", ko:"그들은 그 노인을 속이려 했다." }] },

  /* 승격 75 — 사전 글자 유지(참조 deceit). 위 trick(동사) 과 품사로 갈렸다.
     ★ '사기' 가 morale(사기, 의욕 · C1/n)·fraud(사기꾼, 사기 · C1/n) 와
     글자가 같아 셋이 서로의 오답에서 자동으로 빠진다. */
  { word:"trickery", pron:"트리커리", pos:"n", level:"C1", meanings:["속임수","사기"],
    syn:["deceit","use of tricks","sly dealing"],
    ex:[{ s:"He won by sheer {{}}.", f:"trickery", ko:"그는 순전히 속임수로 이겼다." }] },

  /* 승격 76 — 사전 단일값 유지(참조 negligible). '하찮은' 은 아래 trivia 와
     다음 챕터 trivial 자리라 쓰지 않았다. */
  { word:"trifling", pron:"트라이플링", pos:"adj", level:"C2", meanings:["대수롭지 않은"],
    syn:["negligible","of no weight","hardly worth naming"],
    ex:[{ s:"It was a {{}} sum.", f:"trifling", ko:"그것은 대수롭지 않은 금액이었다." }] },

  /* 승격 77 — 사전 첫 갈래만 세웠다(참조 activate). 명사 '방아쇠' 는 버렸다.
     ★ provoke(자극하다, 유발하다 · B2/v) 를 유의어로 넣었다 — '촉발하다' 와
     글자가 달라 자동 배제가 안 되는데 뜻은 거의 같기 때문이다. */
  { word:"trigger", pron:"트리거", pos:"v", level:"B2", meanings:["촉발하다"],
    syn:["activate","provoke","set off at once"],
    ex:[{ s:"Dust can {{}} an attack.", f:"trigger", ko:"먼지가 발작을 촉발할 수 있다." }] },

  /* 승격 78 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 curtail(C)·cut back on(C)
     두 곳의 화면은 바뀌지 않는다. curtail·lessen·reduce·mitigate 가 '줄이다'
     를, polish·pat 이 '다듬다' 를 써서 여섯 곳이 맞물려 배제된다. */
  { word:"trim", pron:"트림", pos:"v", level:"B2", meanings:["줄이다","다듬다"],
    syn:["curtail","cut back on","cut neat at the edges"],
    ex:[{ s:"The firm had to {{}} its costs.", f:"trim", ko:"그 회사는 비용을 줄여야 했다." }] },

  { word:"triple", pron:"트리플", pos:"adj", level:"B2", meanings:["3중의","3배의"],
    syn:["three times as much","in three layers","threefold"],
    ex:[{ s:"They asked for a {{}} lock.", f:"triple", ko:"그들은 3중 잠금장치를 요구했다." }] },

  /* 승격 79 — 사전 글자 유지(참조 catastrophe 가 반의어). */
  { word:"triumph", pron:"트라이엄프", pos:"n", level:"B2", meanings:["승리","대성공"],
    syn:["great win","crowning success","victory at last"], ant:["catastrophe"],
    ex:[{ s:"The night ended in {{}}.", f:"triumph", ko:"그 밤은 승리로 끝났다." }] },

  /* 위 trifling(대수롭지 않은) 과 다음 챕터 trivial(사소한) 과 갈랐다. */
  { word:"trivia", pron:"트리비아", pos:"n", level:"C1", meanings:["하찮은 정보","일반 상식"],
    syn:["odd bits of knowledge","small facts of little weight","general knowledge titbits"],
    ex:[{ s:"His head is full of {{}}.", f:"trivia", ko:"그의 머리는 하찮은 정보로 가득하다." }] },

  /* ══ 10차 · trivial ~ tyranny (20단어) — T 세트 마지막 ════════════════════
     승격 11 · 신규 9

     손볼 자리가 하나였다.
       ★ turn in  돌려주다, 반납하다 → **반납하다, 돌려주다**
         같은 챕터에 turn over(돌려 뒤집다) 가 있어 둘 다 '돌려' 로 시작한다.
         영→한 선택지에는 첫 뜻만 뜨니 나란히 놓이면 갈리지 않는다. turn in 은
         참조가 없는 신규라 순서를 바꾸는 것이 공짜다 — turn over 는 참조
         flip(F) 이 있어 사전값을 지켰다. 두 갈래가 다 살아 있으므로
         restore(돌려주다, 복원하다 · B1/v) 와 맞물리는 것도 그대로다.

     turn 으로 시작하는 구가 다섯에 명사 turnover 까지 여섯이 한자리에 있다.
     다행히 다섯 구가 모두 참조를 하나씩 끼고 있어 사전값을 지키면 서로
     갈린다. turnover 는 명사라 품사로 떨어진다.
       turn down  물리치다              ← reject      · drive off(물리치다) 와 맞물림
       turn in    반납하다, 돌려주다     ← (신규)      · restore 와 맞물림
       turn out   결과적으로 ~이 되다    ← end up
       turn over  돌려 뒤집다           ← flip
       turn to    ~에 도움을 청하다      ← fall back on
       turnover   이직률, 거래액         ← (신규)

     나머지는 손대지 않아도 자동으로 갈린다.
       trivial         ← minor(사소한, 작은) 와 글자가 같다
       trunk           ← chest(가슴, 상자) 와 '상자' 가 같다
       trustworthiness ← reliability(신뢰성) 와 '신뢰성' 이 같다
       trustworthy     ← reliable 과 유의어 관계다
       turmoil         ← disruption(중단, 혼란)·anarchy(무정부 상태, 혼란) 와 '혼란' 이 같다
       twofold         ← dual 과 유의어 관계다
       tyranny         ← autocracy 와 유의어 관계다

     tuition(수업료) 은 lesson(교훈, 수업) 과 '수업' 을 나눠 쓰지만 두 글자라
     자동 배제가 안 된다. 다만 첫 뜻이 '수업료' 와 '교훈' 이어서 화면에서는
     확실히 갈린다. tutor(가정교사, 강사) 와 tutoring(과외 지도) 은 공통
     접두사가 다섯 글자('tutor') 여서 어근 검사(여섯 글자)에 안 걸리는데,
     첫 뜻이 '가정교사' 와 '과외 지도' 로 분명히 달라 그대로 두었다.

     ★ typical 은 교재와 사전이 갈렸다(교재 '전형적인' / 사전 '으레 그런').
     교재 쪽을 앞세우고 사전값을 둘째 갈래로 살렸다. 참조는 odd(O) 의 반의어
     한 곳뿐이고, 그 화면은 '으레 그런' → '전형적인, 으레 그런' 으로 한 줄
     늘어난다. */

  /* 승격 80 — 사전 단일값 유지. 참조 다섯 곳(minor 유의어, considerable·
     critical·grave·momentous 반의어) 의 화면은 바뀌지 않는다. minor(사소한,
     작은) 와 글자가 맞물려 배제된다. */
  { word:"trivial", exams:["공무원"], pron:"트리비얼", pos:"adj", level:"B1", meanings:["사소한"],
    syn:["minor","of little weight","not worth troubling over"], ant:["considerable","momentous"],
    ex:[{ s:"Do not fuss over a {{}} slip.", f:"trivial", ko:"사소한 실수로 법석 떨지 마라." }] },

  { word:"tropical", pron:"트라피컬", pos:"adj", level:"B1", meanings:["열대의","열대성의"],
    syn:["of the hot zone","found near the equator","of steamy climates"],
    ex:[{ s:"The island has a {{}} climate.", f:"tropical", ko:"그 섬은 열대 기후를 지녔다." }] },

  /* 승격 81 — 사전의 쌍반점만 쉼표로 갈랐다(참조 chest). 교재의 '줄기' 는
     stem(줄기 · S) 자리라 버렸다. chest(가슴, 상자) 와 '상자' 가 맞물려
     배제된다. */
  { word:"trunk", pron:"트렁크", pos:"n", level:"B1", meanings:["몸통","상자"],
    syn:["chest","main body of a thing","big travelling case"],
    ex:[{ s:"The {{}} of the statue is broken.", f:"trunk", ko:"그 조상의 몸통이 깨졌다." }] },

  /* reliability(신뢰성 · B2/n) 와 글자가 맞물려 배제된다. */
  { word:"trustworthiness", pron:"트러스트워디니스", pos:"n", level:"C1", meanings:["신뢰성","신용"],
    syn:["reliability","being worthy of trust","soundness of character"],
    ex:[{ s:"The bank checked his {{}} first.", f:"trustworthiness", ko:"그 은행은 그의 신용을 먼저 살폈다." }] },

  /* 승격 82 — 사전 단일값 유지(참조 reliable). */
  { word:"trustworthy", pron:"트러스트워디", pos:"adj", level:"B2", meanings:["믿음이 가는"],
    syn:["reliable","safe to trust","true to one's word"],
    ex:[{ s:"He is a {{}} witness.", f:"trustworthy", ko:"그는 믿음이 가는 증인이다." }] },

  /* '수업' 은 lesson(교훈, 수업 · B1/n) 자리라 쓰지 않았다. 첫 뜻이 '수업료'
     와 '교훈' 이어서 화면에서 확실히 갈린다. */
  { word:"tuition", pron:"투이션", pos:"n", level:"B2", meanings:["수업료"],
    syn:["fee for teaching","charge for a course","money paid to study"],
    ex:[{ s:"The {{}} went up again.", f:"tuition", ko:"그 수업료가 또 올랐다." }] },

  { word:"tumble", pron:"텀블", pos:"v", level:"B2", meanings:["굴러 떨어지다"],
    syn:["fall head over heels","come down in a heap","roll down"],
    ex:[{ s:"The boxes began to {{}}.", f:"tumble", ko:"그 상자들이 굴러 떨어지기 시작했다." }] },

  /* ★ 교재의 '종기' 는 boil 의 뜻이어서 버렸다. */
  { word:"tumor", pron:"투머", pos:"n", level:"B2", meanings:["종양"],
    syn:["lump of bad growth","swelling of cells","growth in the body"],
    ex:[{ s:"The scan found a small {{}}.", f:"tumor", ko:"그 영상이 작은 종양을 찾아냈다." }] },

  /* 승격 83 — 사전 글자 유지. 참조 chaos(C)·disruption(D) 두 곳의 화면은
     바뀌지 않는다. disruption(중단, 혼란)·anarchy(무정부 상태, 혼란) 와
     '혼란' 이 맞물려 배제된다. */
  { word:"turmoil", pron:"터모일", pos:"n", level:"C1", meanings:["혼란","소동"],
    syn:["chaos","disruption","wild commotion"],
    ex:[{ s:"The city was in {{}} all week.", f:"turmoil", ko:"그 도시는 한 주 내내 혼란에 빠져 있었다." }] },

  /* 승격 84 — 사전 단일값 유지(참조 reject). '거절하다' 는 reject(거절하다,
     배척하다) 자리다. drive off(쫓아버리다, 물리치다 · C1/phr) 와 '물리치다'
     가 맞물려 배제된다. */
  { word:"turn down", pron:"턴 다운", pos:"phr", level:"B1", meanings:["물리치다"],
    syn:["reject","say no to","refuse outright"] },

  /* ★ 첫 뜻을 '반납하다' 로 올렸다. 같은 챕터 turn over(돌려 뒤집다) 와 둘 다
     '돌려' 로 시작하면 영→한 선택지에서 갈리지 않는다. 둘째 갈래 '돌려주다'
     는 그대로 살아 있어 restore(돌려주다, 복원하다 · B1/v) 와 맞물린다. */
  { word:"turn in", pron:"턴 인", pos:"phr", level:"B1", meanings:["반납하다","돌려주다"],
    syn:["hand back","give up what was lent","return to the owner"] },

  /* 승격 85 — 사전 단일값 유지(참조 end up). */
  { word:"turn out", pron:"턴 아웃", pos:"phr", level:"B1", meanings:["결과적으로 ~이 되다"],
    syn:["end up","prove to be so","come out in the end"] },

  /* 승격 86 — 사전 단일값 유지(참조 flip). */
  { word:"turn over", pron:"턴 오버", pos:"phr", level:"B1", meanings:["돌려 뒤집다"],
    syn:["flip","turn the other side up","roll onto the back"] },

  /* 승격 87 — 사전 단일값 유지. '~에 의지하다' 는 fall back on 자리다. */
  { word:"turn to", pron:"턴 투", pos:"phr", level:"B1", meanings:["~에 도움을 청하다"],
    syn:["fall back on","go to for help","look to in need"] },

  /* 교재 네 갈래 → 둘. 위 turn over(구) 와 품사로 갈렸다. */
  { word:"turnover", pron:"턴오버", pos:"n", level:"C1", meanings:["이직률","거래액"],
    syn:["rate of staff leaving","total of sales","amount of business done"],
    ex:[{ s:"Staff {{}} is high in that trade.", f:"turnover", ko:"그 업종은 이직률이 높다." }] },

  { word:"tutor", pron:"튜터", pos:"n", level:"B2", meanings:["가정교사","강사"],
    syn:["private teacher","one who coaches a pupil","teacher for a few"],
    ex:[{ s:"They hired a {{}} for the boy.", f:"tutor", ko:"그들은 그 아이에게 가정교사를 붙였다." }] },

  /* 교재 두 갈래('과외 지도, 개인 교습') 가 같은 말이어서 하나로 줄였다. */
  { word:"tutoring", pron:"튜터링", pos:"n", level:"B2", meanings:["과외 지도"],
    syn:["teaching outside class","coaching one to one","extra lessons given"],
    ex:[{ s:"She earns a little by {{}}.", f:"tutoring", ko:"그녀는 과외 지도로 조금 번다." }] },

  /* 승격 88 — 사전 글자 유지(참조 dual). '이중의' 는 dual(이중의, 둘의) 자리다. */
  { word:"twofold", pron:"투폴드", pos:"adj", level:"C1", meanings:["두 겹의","두 배의"],
    syn:["dual","in two layers","twice as much"],
    ex:[{ s:"The gain was {{}}.", f:"twofold", ko:"그 이득은 두 배였다." }] },

  /* 승격 89 — ★ 교재의 '전형적인' 을 앞세우고 사전값 '으레 그런' 을 둘째
     갈래로 살렸다. 참조 odd(O) 의 반의어 화면이 한 줄 늘어난다. */
  { word:"typical", exams:["공무원"], pron:"티피컬", pos:"adj", level:"B1", meanings:["전형적인","으레 그런"],
    syn:["standing for the whole kind","just as one would expect","true to type"], ant:["odd"],
    ex:[{ s:"That is a {{}} winter here.", f:"typical", ko:"그것이 이곳의 전형적인 겨울이다." }] },

  /* 승격 90 — 사전 글자 유지. 참조 autocracy(A)·democracy(D) 두 곳의 화면은
     바뀌지 않는다. '전제 정치' 는 autocracy(독재 정치, 절대 권력) 자리다. */
  { word:"tyranny", pron:"티러니", pos:"n", level:"C1", meanings:["폭정","독재"],
    syn:["autocracy","rule by one hard hand","cruel government"], ant:["democracy"],
    ex:[{ s:"The people rose against the {{}}.", f:"tyranny", ko:"백성이 그 폭정에 맞서 일어섰다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "able to be seen through": "속이 들여다보이는",
  "able to be taken off tax": "세금에서 덜 수 있는",
  "able to be touched": "손에 닿을 수 있는",
  "absence of noise": "소리가 없음",
  "accept the honour of": "~의 명예를 받아들이다",
  "accord between nations": "나라 사이의 협약",
  "across many states": "여러 나라에 걸친",
  "act despite danger": "위험을 안고 움직이다",
  "act of stealing": "훔치는 짓",
  "after that time": "그때 뒤에",
  "agree to do": "하기로 응하다",
  "aim at": "~을 겨누다",
  "aimed at one group": "한 무리를 겨눈",
  "all the way through": "처음부터 줄곧",
  "allowed against tax": "세금에 맞서 인정되는",
  "amount of business done": "해낸 장사의 크기",
  "as good as it gets": "더 나을 수 없는",
  "assume control": "통제를 맡다",
  "assume from another": "남에게서 맡아 오다",
  "assume without asking": "묻지 않고 그러리라 여기다",
  "at peace": "평화로이 있는",
  "awfully": "무척",
  "balance of gains and losses": "얻는 것과 잃는 것의 균형",
  "bank clerk at a window": "창구에 앉은 은행 직원",
  "based on theory": "이론에 바탕을 둔",
  "be answerable for": "~에 답할 처지가 되다",
  "be praised for": "~로 칭찬을 받다",
  "be proud of": "~을 뿌듯해하다",
  "be sick": "속을 쏟다",
  "bearable": "참을 만한",
  "beat steadily": "고르게 뛰다",
  "beating in the veins": "핏줄에서 뛰는 것",
  "become husband and wife": "부부가 되다",
  "begin to follow": "따르기 시작하다",
  "being worthy of trust": "믿고 맡길 만함",
  "bent of mind": "마음이 쏠리는 쪽",
  "beyond cure": "손쓸 수 없는",
  "beyond one country": "한 나라를 넘어선",
  "big travelling case": "여행용 큰 궤",
  "boast about": "~을 내세우다",
  "body material": "몸을 이루는 바탕",
  "bored": "지루해하는",
  "bound by time": "시간에 묶인",
  "box for takings": "받은 돈을 담는 함",
  "break into parts": "여러 부분으로 나누다",
  "bring up what one ate": "먹은 것을 올리다",
  "brush lightly on the skin": "살갗을 가볍게 스치다",
  "buying and selling": "사고파는 일",
  "by a shrewd move": "약삭빠른 수로",
  "calm and quiet": "차분하고 조용한",
  "carriage of goods": "물건을 실어 나름",
  "carriage of people": "사람을 실어 나름",
  "carry goods across": "물건을 실어 건네다",
  "carry out a deal": "매매를 해내다",
  "cashier in a bank": "은행의 계산 담당자",
  "cast of character": "타고난 성품의 틀",
  "catch in a snare": "올가미로 잡다",
  "cause a ticklish feel": "간지러운 느낌을 일으키다",
  "cause suffering to": "~에게 괴로움을 안기다",
  "cells of one kind": "같은 갈래의 세포",
  "chain": "사슬로 묶다",
  "chance it": "운에 맡기고 해 보다",
  "change of stage": "단계가 달라짐",
  "change of trains": "열차를 갈아탐",
  "change the form of": "~의 모양을 바꾸다",
  "charge for a course": "한 과정에 드는 돈",
  "charge on goods brought in": "들여온 물품에 붙는 값",
  "cheer up": "기운을 차리다",
  "claim the merit of": "~의 공을 제 것이라 하다",
  "clipped in style": "말투가 짧게 끊기는",
  "coaching one to one": "한 사람씩 붙어 가르침",
  "come down in a heap": "한 무더기로 쏟아지다",
  "come out for a side": "한쪽 편을 드러내다",
  "come out in the end": "끝에 가서 그리 되다",
  "comedy": "희극",
  "coming at the right moment": "알맞은 때에 오는",
  "container of metal": "금속으로 된 그릇",
  "copy out by hand": "손으로 베껴 쓰다",
  "course of treatment": "치료를 이어 가는 과정",
  "crowning success": "더할 나위 없는 성공",
  "cruel government": "모진 통치",
  "crush underfoot": "발로 으깨다",
  "cut neat at the edges": "가를 반듯하게 자르다",
  "cut right across": "곧장 가로질러 가다",
  "cut wood for building": "집 지으려 잘라 둔 나무",
  "cutting one's taxable sum": "과세 대상 액수를 줄이는",
  "deal carried out": "이루어진 매매",
  "declare one's position": "제 입장을 밝히다",
  "deeply sorrowful": "몹시 애달픈",
  "definitely": "분명히, 확실히",
  "degree of heat": "더운 정도",
  "dense crowd": "빽빽한 무리",
  "directed at a set goal": "정해진 목표로 향한",
  "do business": "사업을 하다",
  "do something about it": "그것에 대해 손을 쓰다",
  "doctrine of faith": "믿음의 가르침",
  "dogged": "악착같은",
  "doing very well": "아주 잘되고 있는",
  "done for show": "보이기 위해 하는",
  "door sill": "문 아래 턱",
  "dragging on and on": "끝없이 늘어지는",
  "draw with an offer": "제안으로 끌어당기다",
  "duty at the border": "국경에서 매기는 부과금",
  "easily frightened": "쉽게 놀라는",
  "easily handled": "다루기 쉬운",
  "end of the line": "선로의 끝",
  "ending in disaster": "참사로 끝나는",
  "endurable": "견딜 수 있는",
  "enter without leave": "허락 없이 들어가다",
  "enticing thing": "구미를 당기는 것",
  "exactly as written": "적힌 대로 고스란히",
  "exchange of money": "돈이 오가는 일",
  "excite greatly": "크게 들뜨게 하다",
  "exhaustively": "철저하게, 남김없이",
  "exhilarated": "들뜬, 아주 신나는",
  "extra lessons given": "따로 더 해 주는 가르침",
  "fail to value": "값지게 보지 못하다",
  "faint shade": "희미한 빛깔",
  "faint sign": "희미한 낌새",
  "fall head over heels": "곤두박질치다",
  "fasten tightly": "빈틈없이 조여 매다",
  "fasten with rope": "밧줄로 묶다",
  "fee for teaching": "가르침에 매긴 값",
  "feed in slowly": "천천히 흘려 넣다",
  "feel encouraged": "힘이 나다",
  "feel of a surface": "표면이 주는 느낌",
  "feeling one's way": "더듬어 가며 나아감",
  "fighting hard": "힘껏 싸우며",
  "fill with dread": "두려움으로 채우다",
  "finger set apart": "따로 벌어진 손가락",
  "first and thickest finger": "첫째이고 가장 굵은 손가락",
  "first of all": "무엇보다 먼저",
  "flow of water": "물이 흐르는 것",
  "focus on": "~에 집중하다",
  "follow at a distance": "거리를 두고 따라가다",
  "follow the trail of": "~가 남긴 자취를 따라가다",
  "following that": "그에 이어",
  "following the fashion": "유행을 좇는",
  "for the most part": "대체로",
  "for the whole time": "그 시간 전부에 걸쳐",
  "forbidden thing": "해서는 안 되는 것",
  "formal pact between states": "나라끼리 맺은 약속",
  "formal piece of writing": "격식을 갖춘 글",
  "found near the equator": "적도 가까이에 있는",
  "free of trouble": "어지러움이 없는",
  "from start to finish": "시작에서 끝까지",
  "from then on": "그때부터",
  "full of poison": "독이 가득한",
  "gain courage": "용기를 얻다",
  "general direction of change": "바뀌어 가는 큰 방향",
  "general knowledge titbits": "두루 아는 토막 지식",
  "gentle with people": "사람에게 순한",
  "get married": "혼인을 맺다",
  "give evidence": "증거를 대다",
  "give up what was lent": "빌린 것을 내놓다",
  "given to reflection": "곱씹어 보는",
  "giving up one for another": "하나를 내주고 다른 것을 얻음",
  "glass tube for tests": "실험에 쓰는 유리관",
  "glass with a scale": "눈금이 있는 유리 기구",
  "go from side to side": "이쪽에서 저쪽으로 가다",
  "go in where one may not": "들어가서는 안 될 곳에 들다",
  "go past the limit of": "~의 한계를 넘어가다",
  "go to for help": "도움을 받으러 가다",
  "going beyond limits": "한계를 넘어감",
  "good for the body": "몸에 좋은",
  "graft into place": "접붙여 자리잡게 하다",
  "grain of a material": "재료의 결",
  "great win": "큰 이김",
  "ground and its shape": "땅과 그 생김새",
  "group under one chief": "한 우두머리 아래의 무리",
  "growing strongly": "힘차게 자라는",
  "growth in the body": "몸 안에 자란 것",
  "guarding one's ground": "제 터를 지키는",
  "hand back": "손에 되돌려 주다",
  "hands-on expert": "손수 다루는 전문가",
  "happen as planned": "예정대로 일어나다",
  "hard to get over": "좀처럼 헤어나기 어려운",
  "hardly worth naming": "입에 올릴 것도 없는",
  "harmful substance in the body": "몸속의 해로운 물질",
  "harmful to life": "생명에 해로운",
  "haul from place to place": "여기서 저기로 끌어 나르다",
  "healing in effect": "낫게 하는 효과가 있는",
  "hearing in court": "법정에서의 심리",
  "heat gauge": "더운 정도를 재는 기구",
  "heavy downpour": "쏟아지는 큰비",
  "hold dear": "귀하게 여기다",
  "holding on hard": "끈덕지게 붙드는",
  "holiday point": "휴가로 찾는 곳",
  "house of worship": "예배를 드리는 집",
  "how hot or cold it is": "덥거나 찬 정도",
  "how it feels to touch": "만졌을 때의 느낌",
  "hunt down step by step": "한 걸음씩 뒤를 쫓다",
  "in good part": "꽤 많은 부분에서",
  "in part": "일부는",
  "in reverse": "뒤에서 앞으로",
  "in terms of tactics": "전술로 보아",
  "in the latest style": "가장 새 모양새의",
  "in three layers": "세 겹으로 된",
  "in two layers": "두 층으로 된",
  "inborn make-up": "타고난 됨됨이",
  "inflict pain on": "고통을 주다",
  "just as one would expect": "으레 그럴 줄 아는",
  "keep turning over": "계속 몸을 뒤집다",
  "keeping within limits": "선을 넘지 않는",
  "kingly power": "임금의 권세",
  "knot that fastens": "묶어 주는 매듭",
  "lab tube": "실험실용 관",
  "larceny": "재물을 훔침",
  "lash together": "한데 얽어 매다",
  "last stop": "마지막 정차지",
  "lasting a short while": "잠깐만 가는",
  "leaning one way": "한쪽으로 기우는 결",
  "learning about god": "신에 대한 배움",
  "learning by mistakes": "틀려 가며 익힘",
  "leaving a deep wound in the mind": "마음에 깊은 상처를 남기는",
  "let pass": "그냥 지나가게 두다",
  "letter of praise": "칭찬을 적은 편지",
  "letting light pass": "빛을 지나게 하는",
  "level to the ground": "땅바닥까지 밀다",
  "lie of the land": "땅이 놓인 모양",
  "light tone of colour": "연한 색의 결",
  "long written study": "길게 써 낸 연구",
  "look to in need": "궁할 때 기대다",
  "lump of bad growth": "나쁘게 자란 덩이",
  "made-up cloth goods": "천으로 만든 물품",
  "main body of a thing": "물건의 중심 덩어리",
  "make docile": "길들여 순하게 하다",
  "make one's view plain": "제 견해를 분명히 하다",
  "make over into": "~로 고쳐 만들다",
  "mark left behind": "남겨진 자국",
  "mark of one's nature": "타고난 성질의 표시",
  "means of getting about": "다니는 수단",
  "menacing word": "으르는 말",
  "metal can": "쇠로 만든 통",
  "mild in climate": "기후가 순한",
  "money drawer": "돈을 넣는 서랍",
  "money paid to study": "배우려고 내는 돈",
  "money paid to the state": "나라에 내는 돈",
  "move from one state to another": "한 상태에서 다른 상태로 옮겨감",
  "move to act": "행동에 나서다",
  "move to another body": "다른 몸으로 옮기다",
  "move to another place": "다른 곳으로 움직이다",
  "move to win": "이기려는 수",
  "naming system of a trade": "업계의 이름 붙이는 체계",
  "needing special skill": "특별한 솜씨가 필요한",
  "needle in jest": "장난으로 콕콕 찌르다",
  "not meant to stay": "머물 뜻이 없는",
  "not to be trusted": "맡길 수 없는",
  "not too late": "늦지 않은",
  "not worth troubling over": "신경 쓸 값도 없는",
  "not yet settled": "아직 정해지지 않은",
  "not yet tried out": "아직 해 보지 않은",
  "note vouching for one": "사람을 보증해 주는 글",
  "occupier paying rent": "셋돈을 내고 사는 사람",
  "odd bits of knowledge": "자잘한 앎의 조각",
  "of a land's borders": "나라 경계에 관한",
  "of a sad ending": "끝이 슬픈",
  "of applied science": "응용 학문에 속한",
  "of great size": "덩치가 아주 큰",
  "of little weight": "무게가 실리지 않는",
  "of no weight": "무게가 없는",
  "of steamy climates": "무덥고 습한 기후의",
  "of the highest grade": "등급이 가장 높은",
  "of the hot zone": "더운 지대의",
  "of the stage": "무대에 속한",
  "official school record": "학교가 낸 공식 기록",
  "official who takes tax": "세금을 받는 관리",
  "one trained in a craft": "한 기예를 배운 사람",
  "one who betrays": "배신하는 사람",
  "one who coaches a pupil": "한 학생을 붙들고 가르치는 이",
  "one who counts cash": "현금을 세는 사람",
  "one who gathers taxes": "세금을 걷는 사람",
  "one who rents": "빌려 쓰는 사람",
  "open mind toward others": "남을 향해 열린 마음",
  "open to change": "바뀔 여지가 있는",
  "pace of movement": "움직임의 빠르기",
  "paper for a degree": "학위를 위한 글",
  "passage from place to place": "한 곳에서 다른 곳으로 지나감",
  "passing all bounds": "모든 한계를 지나침",
  "passing over": "건너 넘어감",
  "people of one stock": "한 핏줄의 사람들",
  "period of office": "직무를 보는 기간",
  "picked out as a mark": "표적으로 골라진",
  "piece of business": "한 건의 사업",
  "place for prayer": "기도하는 자리",
  "place travellers go": "여행자가 찾아가는 곳",
  "plan of attack": "밀어붙일 계획",
  "play a trick on": "장난을 걸어 골리다",
  "point of beginning": "처음 딛는 지점",
  "point one argues": "내세워 다투는 주장",
  "poison from a living thing": "생물이 내는 독",
  "poke fun at": "~을 두고 농을 걸다",
  "pound with each beat": "박자마다 쿵쿵거리다",
  "pour in from outside": "밖에서 부어 넣다",
  "press of people": "밀려드는 사람들",
  "private teacher": "개인이 붙이는 선생",
  "prove to be so": "그런 것으로 드러나다",
  "public levy": "공공이 걷는 부과금",
  "public means of travel": "여럿이 함께 타는 수단",
  "pull down": "끌어내려 무너뜨리다",
  "pull from inside": "안에서 끌어내다",
  "pull to pieces": "조각으로 뜯어내다",
  "pull toward wrong": "잘못된 쪽으로 끄는 힘",
  "pulse in and out": "들고 나며 뛰다",
  "put blood into": "피를 넣어 주다",
  "put forward for now": "우선 내놓은",
  "put in danger": "위험에 놓다",
  "put oneself in danger": "스스로를 위험에 두다",
  "put speech into writing": "말을 글로 바꾸어 놓다",
  "put to the rack": "모질게 괴롭히다",
  "put to use": "써서 쓸모를 내다",
  "putting up with difference": "다름을 참아 주는 일",
  "quake with fear": "무서워 벌벌거리다",
  "quiet of mind": "마음의 조용함",
  "raise a protest at": "~에 항의를 내다",
  "rate of action": "일이 돌아가는 빠르기",
  "rate of staff leaving": "일꾼이 그만두는 비율",
  "reading on a thermometer": "온도계가 가리키는 값",
  "ready to betray": "언제든 등을 돌릴",
  "real to the hand": "손으로 느껴지는",
  "really good": "참으로 좋은",
  "reasoned account": "따져서 세운 설명",
  "rebel against one's own": "제 편에 맞서 일어서는 사람",
  "record of marks": "점수를 적어 둔 기록",
  "refuse outright": "딱 잘라 마다하다",
  "refuse to accept": "받아들이기를 거부하다",
  "refusing to let go": "놓기를 마다하는",
  "relay of a signal": "신호의 중계",
  "renter of a home": "집을 빌린 사람",
  "return for a refund": "환불을 받으려 돌려주다",
  "return to the owner": "임자에게 되보내다",
  "revealing": "많은 것을 드러내는",
  "revenue officer": "세입을 맡은 공무원",
  "right to hold": "가지고 있을 권리",
  "right to rule as king": "임금으로 다스릴 권리",
  "rise above": "위로 넘어서다",
  "rise and fall of the sea": "바다가 오르고 내림",
  "roll about in bed": "잠자리에서 이리저리 구르다",
  "roll down": "아래로 구르다",
  "roll onto the back": "등이 위로 오게 굴리다",
  "royal seat": "임금이 앉는 자리",
  "rule by one hard hand": "한 사람의 억센 손이 지배함",
  "rushing stream": "세차게 흐르는 물줄기",
  "safe to trust": "맡겨도 안심인",
  "said in few words": "몇 마디로 말한",
  "sawn wood": "톱으로 켠 나무",
  "say no to": "~에 아니라고 하다",
  "scare badly": "몹시 겁주다",
  "scarring": "흉을 남기는",
  "scholarly work": "학문으로 이룬 저술",
  "send out over a distance": "먼 곳까지 내보내다",
  "sending out": "밖으로 내보냄",
  "serving to cure": "낫게 하는 데 쓰이는",
  "set great store by": "크게 값을 두다",
  "set in a new spot": "새 자리에 앉히다",
  "set of ideas to explain": "설명하려고 세운 생각의 묶음",
  "set of special words": "특별한 말들의 묶음",
  "set off at once": "대번에 터뜨리다",
  "set period": "정해진 기간",
  "set the heart racing": "가슴을 뛰게 하다",
  "shake all over": "온몸이 흔들리다",
  "shift across": "가로질러 넘기다",
  "short and to the point": "짧고 요점만 있는",
  "short broad digit": "짧고 넓은 손가락",
  "shrine building": "신을 모신 건물",
  "shut in with no way out": "나갈 길 없이 막아 두다",
  "shy of risk": "위험을 꺼리는",
  "sign of harm to come": "해가 올 조짐",
  "signed agreement": "서명해 굳힌 합의",
  "skilled worker": "솜씨를 익힌 일꾼",
  "slant to one side": "한쪽으로 비스듬히 하다",
  "sleep badly": "잠을 설치다",
  "sly dealing": "교활한 수작",
  "small facts of little weight": "가벼운 잔 사실들",
  "social ban": "사회가 금하는 것",
  "soft white metal": "부드러운 흰 금속",
  "somewhat so": "다소 그러한",
  "soon gone": "금세 사라지는",
  "soundness of character": "사람됨이 단단함",
  "speed of a piece": "곡이 흐르는 빠르기",
  "splendid to see": "보기에 훌륭한",
  "spot for sightseeing": "구경하러 가는 자리",
  "spread from one to another": "하나에서 다른 하나로 퍼짐",
  "stamp down on": "발로 내리찧다",
  "standing for the whole kind": "그 갈래 전체를 대신하는",
  "state of calm": "차분한 상태",
  "state of feeling": "감정의 상태",
  "state of rising above": "위로 넘어선 상태",
  "state under oath": "선서하고 말하다",
  "step into the role of": "~의 자리를 이어받다",
  "step of the foot": "발을 딛는 걸음",
  "stir with delight": "기쁨으로 흔들다",
  "strikingly great": "눈에 띄게 대단한",
  "study of religion": "종교를 다루는 학문",
  "sum owed to government": "정부에 내야 할 몫",
  "surpass all bounds": "모든 한계를 넘어서다",
  "swap of benefits": "이득을 서로 바꿈",
  "swelling of cells": "세포가 부풀어 난 것",
  "sworn account": "선서한 진술",
  "take in by a ruse": "꾀를 써서 홀리다",
  "take the lead": "앞장서다",
  "taking what is not one's own": "남의 것을 가져감",
  "tax on imports": "들여오는 물건에 매기는 세금",
  "teacher for a few": "몇 사람만 가르치는 선생",
  "teaching outside class": "수업 밖에서 가르침",
  "term in a post": "자리를 맡는 기간",
  "test run": "미리 해 보는 시험",
  "the opposite way": "맞은 쪽으로",
  "thin vessel for samples": "시료를 담는 가는 그릇",
  "think it is owed": "받아야 할 것이라 여기다",
  "thread running through": "전체를 꿰는 실마리",
  "three times as much": "세 배만큼의",
  "threefold": "세 배의",
  "thus far": "지금까지는",
  "tightness in the air": "공기가 팽팽한 느낌",
  "timetable": "시간표",
  "to a great degree": "큰 정도로",
  "to a high degree": "높은 정도로",
  "to an extent": "얼마쯤은",
  "to do with plays": "연극에 관한",
  "to do with technique": "기법에 관한",
  "to do with territory": "영토에 관한",
  "to do with time": "시간에 관한",
  "to the last breath": "마지막 숨까지",
  "tool for measuring warmth": "따뜻함을 재는 도구",
  "torment cruelly": "잔혹하게 괴롭히다",
  "toss out": "내던져 버리다",
  "total of sales": "판 것의 총액",
  "touch of colour": "살짝 든 빛깔",
  "touch to make one laugh": "웃게 하려고 건드리다",
  "travel over": "넘어서 지나가다",
  "tread heavily on": "무겁게 밟다",
  "true to one's word": "말을 지키는",
  "true to type": "본래 꼴에 들어맞는",
  "trying something out": "한번 해 보기",
  "trying until it works": "될 때까지 해 보기",
  "turn of mind": "마음이 기우는 결",
  "turn the other side up": "반대쪽을 위로 두다",
  "turncoat": "변절자",
  "twice as much": "두 배만큼의",
  "up with the times": "시류에 뒤지지 않는",
  "urge one should resist": "물리쳐야 할 충동",
  "use of tricks": "꾀를 부리는 짓",
  "very much indeed": "참으로 많이",
  "victory at last": "끝내 얻은 이김",
  "warning of danger": "위험을 알리는 말",
  "waste thrown away": "내버린 찌꺼기",
  "wed at last": "드디어 짝을 이루다",
  "weigh in the decision": "결정에 견주어 넣다",
  "weigh on the mind of": "~의 마음을 무겁게 하다",
  "well timed": "때를 잘 맞춘",
  "what must not be done": "하지 말아야 할 일",
  "wild commotion": "거친 법석",
  "willingness to allow": "허용하려는 마음",
  "with a plan in mind": "계획을 두고",
  "with all one's might": "있는 힘을 다해",
  "withdraw what one said": "한 말을 거두어들이다",
  "wood as material": "재료로 쓰는 나무",
  "word for a thing": "사물을 가리키는 말",
  "words given in court": "법정에서 한 말",
  "words of a field": "한 분야의 말들",
  "woven cloth": "짜서 만든 천",
  "write out word for word": "한 마디씩 그대로 써 내려가다",
  "written copy of speech": "말을 글로 옮긴 사본",
  "written reference": "글로 써 준 신원 보증"
});
