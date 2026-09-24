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
  { word:"take place", pron:"테이크 플레이스", pos:"phr", level:"B1", meanings:["벌어지다"],
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

  { word:"technical", pron:"테크니컬", pos:"adj", level:"B1", meanings:["기술적인","전문의"],
    syn:["to do with technique","of applied science","needing special skill"],
    ex:[{ s:"The report is too {{}} for me.", f:"technical", ko:"그 보고서는 내게 너무 기술적이다." }] },

  { word:"technician", pron:"테크니션", pos:"n", level:"B2", meanings:["기술자"],
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
    ex:[{ s:"They walked up to the old {{}}.", f:"temple", ko:"그들은 오래된 절까지 걸어 올라갔다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "able to be taken off tax": "세금에서 덜 수 있는",
  "able to be touched": "손에 닿을 수 있는",
  "accept the honour of": "~의 명예를 받아들이다",
  "act despite danger": "위험을 안고 움직이다",
  "agree to do": "하기로 응하다",
  "aimed at one group": "한 무리를 겨눈",
  "allowed against tax": "세금에 맞서 인정되는",
  "assume control": "통제를 맡다",
  "assume from another": "남에게서 맡아 오다",
  "assume without asking": "묻지 않고 그러리라 여기다",
  "bank clerk at a window": "창구에 앉은 은행 직원",
  "be answerable for": "~에 답할 처지가 되다",
  "be praised for": "~로 칭찬을 받다",
  "be proud of": "~을 뿌듯해하다",
  "begin to follow": "따르기 시작하다",
  "bent of mind": "마음이 쏠리는 쪽",
  "boast about": "~을 내세우다",
  "break into parts": "여러 부분으로 나누다",
  "by a shrewd move": "약삭빠른 수로",
  "cashier in a bank": "은행의 계산 담당자",
  "cast of character": "타고난 성품의 틀",
  "chance it": "운에 맡기고 해 보다",
  "charge on goods brought in": "들여온 물품에 붙는 값",
  "cheer up": "기운을 차리다",
  "claim the merit of": "~의 공을 제 것이라 하다",
  "come out for a side": "한쪽 편을 드러내다",
  "cutting one's taxable sum": "과세 대상 액수를 줄이는",
  "declare one's position": "제 입장을 밝히다",
  "degree of heat": "더운 정도",
  "directed at a set goal": "정해진 목표로 향한",
  "do something about it": "그것에 대해 손을 쓰다",
  "dragging on and on": "끝없이 늘어지는",
  "duty at the border": "국경에서 매기는 부과금",
  "easily handled": "다루기 쉬운",
  "fail to value": "값지게 보지 못하다",
  "feel encouraged": "힘이 나다",
  "forbidden thing": "해서는 안 되는 것",
  "gain courage": "용기를 얻다",
  "gentle with people": "사람에게 순한",
  "hands-on expert": "손수 다루는 전문가",
  "happen as planned": "예정대로 일어나다",
  "house of worship": "예배를 드리는 집",
  "how hot or cold it is": "덥거나 찬 정도",
  "in terms of tactics": "전술로 보아",
  "inborn make-up": "타고난 됨됨이",
  "keeping within limits": "선을 넘지 않는",
  "level to the ground": "땅바닥까지 밀다",
  "make docile": "길들여 순하게 하다",
  "make one's view plain": "제 견해를 분명히 하다",
  "mild in climate": "기후가 순한",
  "money paid to the state": "나라에 내는 돈",
  "move to act": "행동에 나서다",
  "move to win": "이기려는 수",
  "needing special skill": "특별한 솜씨가 필요한",
  "needle in jest": "장난으로 콕콕 찌르다",
  "of applied science": "응용 학문에 속한",
  "official who takes tax": "세금을 받는 관리",
  "one trained in a craft": "한 기예를 배운 사람",
  "one who counts cash": "현금을 세는 사람",
  "one who gathers taxes": "세금을 걷는 사람",
  "picked out as a mark": "표적으로 골라진",
  "place for prayer": "기도하는 자리",
  "plan of attack": "밀어붙일 계획",
  "poke fun at": "~을 두고 농을 걸다",
  "public levy": "공공이 걷는 부과금",
  "pull down": "끌어내려 무너뜨리다",
  "pull from inside": "안에서 끌어내다",
  "pull to pieces": "조각으로 뜯어내다",
  "put oneself in danger": "스스로를 위험에 두다",
  "put to use": "써서 쓸모를 내다",
  "raise a protest at": "~에 항의를 내다",
  "reading on a thermometer": "온도계가 가리키는 값",
  "real to the hand": "손으로 느껴지는",
  "refuse to accept": "받아들이기를 거부하다",
  "return for a refund": "환불을 받으려 돌려주다",
  "revenue officer": "세입을 맡은 공무원",
  "shrine building": "신을 모신 건물",
  "skilled worker": "솜씨를 익힌 일꾼",
  "social ban": "사회가 금하는 것",
  "state of feeling": "감정의 상태",
  "step into the role of": "~의 자리를 이어받다",
  "sum owed to government": "정부에 내야 할 몫",
  "take the lead": "앞장서다",
  "tax on imports": "들여오는 물건에 매기는 세금",
  "think it is owed": "받아야 할 것이라 여기다",
  "to do with technique": "기법에 관한",
  "turn of mind": "마음이 기우는 결",
  "weigh in the decision": "결정에 견주어 넣다",
  "what must not be done": "하지 말아야 할 일",
  "with a plan in mind": "계획을 두고",
  "withdraw what one said": "한 말을 거두어들이다"
});
