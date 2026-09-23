/**
 * 단어 데이터 — 수능 보카 I 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 A~H 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 이 세트의 승격 (GLOSS 에 있던 단어를 표제어로 올리는 일) ──
 *
 * 110개가 이미 유의어 사전에 있었다. G(37개)·H(43개)의 두 배가 넘는다.
 * include·increase·influence·impact 같은 기본 낱말이 오래전부터 다른 문제의
 * 유의어·반의어로 쓰여 왔기 때문이다. 그 단어를 참조하는 기존 문제가 160곳이라,
 * 뜻을 잘못 건드리면 A~H 세트 화면이 조용히 바뀐다. 그래서 승격할 때마다
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다 (기존 문제를 지킨다)
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다 (참조가 그 갈래를 쓰는 경우가 있다)
 * 판단 근거는 해당 단어 주석에 적는다.
 *
 * ── 뜻이 겹쳐 갈라 쓴 것 ──
 *
 * 원본 목록에 첫 뜻이 똑같은 묶음이 9개 있었다. 그대로 두면 짝 맞추기에서
 * 둘 다 정답이 되는 자리가 생기므로 갈래를 나눴다.
 *   immediate 즉각적인 / instant 즉석의 / instantaneous 순간적인
 *   illegal 불법의 / illicit 부정한 · imminent 임박한 / impending 곧 닥칠
 *   include 포함하다 / incorporate 통합하다 / involve 수반하다
 *   indispensable 없어서는 안 될 / integral 필수적인
 *   infiltrate 침투하다 / invade 침략하다 · inner 내면의 / internal 내부의
 *   in compliance with 준수하여 / in conformity with 일치하여 / in line with 부합하여
 * in one sense 는 in a sense 와 가를 방법이 없어 목록에서 뺐다 (311단어).
 */
window.VOCAB_I = [
  /* ── 챕터 1 ─────────────────────────────── */

  { word:"icon", pron:"아이칸", pos:"n", level:"B2", meanings:["우상","아이콘"],
    syn:["idol","emblem","figurehead"],
    ex:[{ s:"She remains a cultural {{}} decades after her final film.", f:"icon", ko:"그녀는 마지막 영화 이후 수십 년이 지나도 문화적 우상으로 남아 있다." }] },

  /* icon 과 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"iconic", pron:"아이카닉", pos:"adj", level:"B2", meanings:["상징이 되는","우상의"],
    syn:["emblematic","symbolic","legendary"],
    ex:[{ s:"The Eiffel Tower is an {{}} landmark of Paris.", f:"iconic", ko:"에펠탑은 파리의 상징이 되는 명소다." }] },

  { word:"ideal", pron:"아이디얼", pos:"adj", level:"B1", meanings:["이상적인","완벽한"],
    syn:["optimal","exemplary","perfect"], ant:["flawed"],
    ex:[{ s:"This quiet valley is an {{}} spot for camping.", f:"ideal", ko:"이 조용한 골짜기는 캠핑하기에 이상적인 장소다." }] },

  /* 승격 ① — GLOSS '이상주의' 와 같은 갈래다. cynicism 의 반의어로 쓰인다.
     '관념론' 은 원본에만 있던 갈래로 뒤에 붙였다. */
  { word:"idealism", pron:"아이디얼리즘", pos:"n", level:"C1", meanings:["이상주의","관념론"],
    syn:["utopianism","romanticism","perfectionism"], ant:["cynicism"],
    ex:[{ s:"Youthful {{}} often gives way to pragmatism with age.", f:"idealism", ko:"젊은 시절의 이상주의는 나이가 들며 실용주의에 자리를 내주곤 한다." }] },

  /* 원본은 '이상적으로, 완벽하게; 원칙적으로' 로 세 갈래다. meanings 는 2개까지라
     '원칙적으로' 를 뺐다 — 앞 두 갈래와 달리 부사 용법이 크게 다르다. */
  { word:"ideally", pron:"아이디얼리", pos:"adv", level:"B2", meanings:["이상적으로","완벽하게"],
    syn:["optimally","perfectly","preferably"],
    ex:[{ s:"The hall is {{}} suited for small chamber concerts.", f:"ideally", ko:"그 강당은 소규모 실내악 공연에 이상적으로 적합하다." }] },

  /* 승격 ① — GLOSS '똑같은, 동일한' 과 글자까지 같다.
     converse(ant)·equal(syn)·even(syn)·homogeneous(syn) 네 문제가 이 뜻을 쓴다. */
  { word:"identical", pron:"아이덴티컬", pos:"adj", level:"B2", meanings:["똑같은","동일한"],
    syn:["indistinguishable","equivalent","matching"], ant:["different"],
    ex:[{ s:"The twins wore {{}} outfits to the ceremony.", f:"identical", ko:"그 쌍둥이는 식에 똑같은 옷을 입고 왔다." }] },

  { word:"identifiable", pron:"아이덴터파이어블", pos:"adj", level:"C1", meanings:["인식 가능한","알아볼 수 있는"],
    syn:["recognizable","distinguishable","discernible"], ant:["indistinct"],
    ex:[{ s:"The suspect was clearly {{}} from the security footage.", f:"identifiable", ko:"용의자는 보안 영상에서 분명히 알아볼 수 있었다." }] },

  /* 승격 ② — GLOSS '식별, 신원 확인' 이다. 두 갈래가 다 살아 있어 순서만
     원본에 맞췄다. diagnosis(syn) 가 쓰는 갈래는 '식별' 이라 뒤에 지켰다.
     원본 '신분증' 은 셋째 갈래라 meanings 2개 제한에 걸려 뺐다. */
  { word:"identification", pron:"아이덴터피케이션", pos:"n", level:"B2", meanings:["신원 확인","식별"],
    syn:["recognition","detection","verification"],
    ex:[{ s:"Positive {{}} of the species required DNA analysis.", f:"identification", ko:"그 종의 확실한 식별에는 DNA 분석이 필요했다." }] },

  /* 승격 ② — GLOSS '알아보다, 확인하다' 다. diagnose(syn) 가 쓰는 갈래는
     '확인하다' 라서 둘째 자리에 지켰다. 원본 '동일시하다' 는 셋째 갈래라 뺐다. */
  { word:"identify", pron:"아이덴터파이", pos:"v", level:"B1", meanings:["식별하다","확인하다"],
    syn:["recognize","pinpoint","detect"],
    ex:[{ s:"Researchers were able to {{}} the virus within days.", f:"identify", ko:"연구자들은 며칠 안에 그 바이러스를 식별할 수 있었다." }] },

  { word:"identity", pron:"아이덴터티", pos:"n", level:"B1", meanings:["동일함","신원"],
    syn:["sameness","selfhood","individuality"],
    ex:[{ s:"The thief stole her {{}} and opened several credit accounts.", f:"identity", ko:"그 도둑은 그녀의 신원을 훔쳐 여러 신용 계좌를 개설했다." }] },

  { word:"ideological", pron:"아이디얼라지컬", pos:"adj", level:"C1", meanings:["이념적인","이데올로기의"],
    syn:["doctrinal","dogmatic","partisan"],
    ex:[{ s:"The party split along {{}} lines after the election.", f:"ideological", ko:"그 정당은 선거 후 이념적 노선에 따라 분열했다." }] },

  /* ideological 과 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"ideology", pron:"아이디알러지", pos:"n", level:"C1", meanings:["이데올로기","이념"],
    syn:["doctrine","creed","dogma"],
    ex:[{ s:"The movement was driven by a rigid political {{}}.", f:"ideology", ko:"그 운동은 경직된 정치 이데올로기에 의해 추동되었다." }] },

  /* 승격 ① — GLOSS '무지' 와 같은 갈래다. awareness 의 반의어로 쓰인다.
     '무식' 은 원본에만 있던 갈래로 뒤에 붙였다. */
  { word:"ignorance", pron:"이그너런스", pos:"n", level:"B2", meanings:["무지","무식"],
    syn:["unawareness","inexperience","naivety"], ant:["knowledge"],
    ex:[{ s:"His {{}} of basic geography surprised the interviewer.", f:"ignorance", ko:"기본 지리에 대한 그의 무지는 면접관을 놀라게 했다." }] },

  /* 승격 ① — GLOSS '무시하다' 와 글자까지 같다. 참조가 7곳(act on·address·
     be concerned about·be glued to·beware·deal with·disregard)으로 이 세트에서
     가장 많다. 갈래를 늘리면 그 7곳 화면이 다 바뀌므로 한 갈래로 두었다. */
  { word:"ignore", pron:"이그노", pos:"v", level:"B1", meanings:["무시하다"],
    syn:["disregard","overlook","neglect"], ant:["heed"],
    ex:[{ s:"Drivers who {{}} speed limits face heavy fines.", f:"ignore", ko:"제한 속도를 무시하는 운전자는 무거운 벌금을 물게 된다." }] },

  /* 원본 첫 뜻 '불법의' 는 illicit 과 같았다. illicit 을 '부정한' 으로 돌려
     이쪽이 '불법의' 를 가져갔다. */
  { word:"illegal", pron:"일리걸", pos:"adj", level:"B1", meanings:["불법의","위법의"],
    syn:["unlawful","criminal","prohibited"], ant:["legal"],
    ex:[{ s:"It is {{}} to park in front of a fire hydrant.", f:"illegal", ko:"소화전 앞에 주차하는 것은 불법이다." }] },

  { word:"illegible", pron:"일레저블", pos:"adj", level:"C1", meanings:["읽기 어려운","알아보기 힘든"],
    syn:["unreadable","indecipherable","scrawled"], ant:["legible"],
    ex:[{ s:"The doctor's handwriting was almost {{}}.", f:"illegible", ko:"그 의사의 필체는 거의 읽기 어려웠다." }] },

  /* 원본 첫 뜻은 '불법의' 로 illegal 과 같았다. illegal 이 '불법의' 를 가져가고
     이쪽은 '부정한' 으로 돌렸다. illicit 은 도덕적 부정 쪽 어감이 강하다. */
  { word:"illicit", pron:"일리싯", pos:"adj", level:"C1", meanings:["부정한","무허가의"],
    syn:["illegal","unauthorized","forbidden"], ant:["lawful"],
    ex:[{ s:"Investigators uncovered an {{}} trade in protected species.", f:"illicit", ko:"조사관들은 보호종의 부정한 거래를 적발했다." }] },

  /* syn·ant 를 모두 비워 두었다. '문맹' 을 바꿔 쓸 수 있는 낱말이 영어에 셋이 없다
     (illiterateness·analphabetism 은 수능 수준을 크게 벗어난다). ignorance 류로
     채우면 '무지' 를 '문맹' 이라 가르치는 셈이라 넣지 않았다.
     ant 만 남기는 것도 안 된다 — '아닌 것 고르기' 는 syn 이 3개 이상일 때만
     만들어지므로, syn 이 없으면 ant 는 화면에 뜰 자리가 없는 죽은 데이터가 된다
     (pron-audit 이 '유령 발음' 으로 잡아낸다).
     이 단어는 4지선다·문장빈칸·짝맞추기 세 모드로만 출제된다. */
  { word:"illiteracy", pron:"일리터러시", pos:"n", level:"C1", meanings:["문맹","무학"],
    ex:[{ s:"The campaign aimed to reduce adult {{}} in rural areas.", f:"illiteracy", ko:"그 운동은 농촌 지역의 성인 문맹을 줄이는 것을 목표로 했다." }] },

  /* illiteracy 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"illiterate", pron:"일리터럿", pos:"adj", level:"C1", meanings:["글자를 모르는","무식한"],
    syn:["unlettered","unschooled","uneducated"], ant:["literate"],
    ex:[{ s:"Nearly a fifth of the adult population remained {{}}.", f:"illiterate", ko:"성인 인구의 거의 5분의 1이 글자를 모르는 상태였다." }] },

  { word:"illogical", pron:"일라지컬", pos:"adj", level:"B2", meanings:["비논리적인","불합리한"],
    syn:["unreasonable","absurd","fallacious"], ant:["logical"],
    ex:[{ s:"His argument was {{}} from start to finish.", f:"illogical", ko:"그의 논증은 처음부터 끝까지 비논리적이었다." }] },

  /* ── 챕터 2 ─────────────────────────────── */

  /* 승격 ① — GLOSS '비추다, 밝히다' 와 같은 갈래다. 참조하는 기존 문제는 없어
     원본 뜻을 그대로 썼다. PRON 에는 없었다. */
  { word:"illuminate", pron:"일루머네이트", pos:"v", level:"B2", meanings:["조명하다","밝게 하다"],
    syn:["brighten","light up","lighten"], ant:["darken"],
    ex:[{ s:"Floodlights {{}} the stadium during night matches.", f:"illuminate", ko:"야간 경기 중 투광 조명이 경기장을 밝게 비춘다." }] },

  /* 승격 ② — GLOSS '착각, 환상' 이다. delusion(syn)·fantasy(syn) 두 문제가 쓴다.
     두 갈래가 다 살아 있어 원본 순서('환상' 먼저)로 맞췄다.
     원본 '오해' 는 셋째 갈래라 meanings 2개 제한에 걸려 뺐다. */
  { word:"illusion", pron:"일루전", pos:"n", level:"B2", meanings:["환상","착각"],
    syn:["delusion","hallucination","mirage"],
    ex:[{ s:"The mirror creates the {{}} of a much larger room.", f:"illusion", ko:"그 거울은 방이 훨씬 더 커 보이는 착각을 만든다." }] },

  /* 승격 ② — GLOSS '예시하다, 분명히 보여 주다' 다. exemplify(syn) 가 쓰는
     갈래가 '예시하다' 라서 둘째 자리에 지켰다. demonstrate(syn) 도 참조한다. */
  { word:"illustrate", pron:"일러스트레이트", pos:"v", level:"B2", meanings:["설명하다","예시하다"],
    syn:["demonstrate","exemplify","depict"],
    ex:[{ s:"The chart {{}} how rapidly the population grew.", f:"illustrates", ko:"그 도표는 인구가 얼마나 빠르게 늘었는지 설명한다." }] },

  /* 승격 ② — GLOSS '삽화; 설명' 이다. cartooning(syn) 이 쓰는 갈래가 '삽화' 라서
     첫 자리에 지켰다. 원본 '설명' 은 셋째 갈래라 뺐다.
     illustrate 와 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"illustration", pron:"일러스트레이션", pos:"n", level:"B2", meanings:["삽화","실례"],
    syn:["drawing","diagram","cartooning"],
    ex:[{ s:"The book contains a detailed {{}} of the human eye.", f:"illustration", ko:"그 책에는 사람 눈의 상세한 삽화가 실려 있다." }] },

  /* 원본은 '이미지, 형상화; 심상' 으로 세 갈래다. '심상' 을 뺐다 — 앞 두 갈래와
     묶여 한 덩어리로 읽히는 쪽을 택했다. */
  { word:"imagery", pron:"이머저리", pos:"n", level:"C1", meanings:["이미지","형상화"],
    syn:["symbolism","metaphor","figuration"],
    ex:[{ s:"The poem is rich in nature {{}}.", f:"imagery", ko:"그 시는 자연 이미지가 풍부하다." }] },

  { word:"imaginary", pron:"이매저네리", pos:"adj", level:"B2", meanings:["상상의","가상의"],
    syn:["fictional","hypothetical","make-believe"], ant:["real"],
    ex:[{ s:"The child invented an {{}} friend to play with.", f:"imaginary", ko:"그 아이는 함께 놀 상상의 친구를 만들어 냈다." }] },

  /* imaginary 와 어근·품사가 다 같아 같은 보드에 올 수 있다. 다만 뜻이
     '상상의' 와 '상상력이 풍부한' 으로 뚜렷이 갈려 짝을 고르는 데 무리가 없다. */
  { word:"imaginative", pron:"이매저너티브", pos:"adj", level:"B2", meanings:["상상력이 풍부한","창의적인"],
    syn:["inventive","creative","resourceful"], ant:["unimaginative"],
    ex:[{ s:"Her {{}} storytelling captivated the whole class.", f:"imaginative", ko:"그녀의 상상력이 풍부한 이야기가 반 전체를 사로잡았다." }] },

  /* 승격 ① — GLOSS '모방하다, 본뜨다' 를 글자까지 지켰다. emulate(syn) 가 쓴다.
     원본 둘째 갈래 '흉내 내다' 대신 사전 쪽 '본뜨다' 를 남겨 기존 화면을 보존했다. */
  { word:"imitate", pron:"이머테이트", pos:"v", level:"B2", meanings:["모방하다","본뜨다"],
    syn:["emulate","mimic","copy"],
    ex:[{ s:"Young children naturally {{}} the speech of adults.", f:"imitate", ko:"어린 아이들은 자연스럽게 어른의 말을 모방한다." }] },

  { word:"immature", pron:"이머추어", pos:"adj", level:"B2", meanings:["미숙한","미완성의"],
    syn:["childish","undeveloped","juvenile"], ant:["mature"],
    ex:[{ s:"His {{}} response to criticism cost him the promotion.", f:"immature", ko:"비판에 대한 그의 미숙한 반응이 승진을 놓치게 했다." }] },

  /* 원본 '헤아릴 수 없는' 하나뿐이다. 둘째 갈래로 '막대한' 을 붙이면 뒤에 올
     immense('막대한, 광대한')와 겹치므로 '측정할 수 없는' 을 택했다. */
  { word:"immeasurable", pron:"이메저러블", pos:"adj", level:"C1", meanings:["헤아릴 수 없는","측정할 수 없는"],
    syn:["incalculable","boundless","limitless"], ant:["finite"],
    ex:[{ s:"Her contribution to modern medicine was {{}}.", f:"immeasurable", ko:"현대 의학에 대한 그녀의 기여는 헤아릴 수 없었다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 (세트 파일에 PRON
   블록을 두는 선례가 없다. pron.js 가 이 파일보다 뒤에 로드되므로 여기서
   Object.assign(window.PRON, ...) 을 하면 pron.js 쪽 값에 덮인다). */
Object.assign(window.GLOSS, {
  "creative": "창의적인",
  "childish": "어린애 같은",
  "detection":"탐지, 발견",
  "different":"다른",
  "distinguishable":"구별할 수 있는",
  "doctrinal":"교리상의",
  "dogmatic":"독단적인",
  "emblematic":"상징적인",
  "figuration": "형상화",
  "fallacious": "오류가 있는",
  "figurehead":"명목상의 대표",
  "flawed":"결함이 있는",
  "hypothetical": "가상의, 가설의",
  "hallucination": "환각",
  "idol":"우상, 숭배 대상",
  "indecipherable": "판독할 수 없는",
  "incalculable": "헤아릴 수 없이 큰",
  "indistinguishable":"구별할 수 없는",
  "individuality":"개성, 특성",
  "inexperience":"미숙, 경험 부족",
  "juvenile": "유치한, 청소년의",
  "inventive": "창의력이 뛰어난",
  "knowledge":"지식",
  "lawful": "합법적인",
  "legendary":"전설적인",
  "mirage": "신기루",
  "metaphor": "은유, 비유",
  "make-believe": "가상의, 거짓의",
  "literate": "글을 읽고 쓸 수 있는",
  "light up": "환하게 밝히다",
  "legible": "읽기 쉬운",
  "naivety":"순진함",
  "optimal":"최적의",
  "optimally":"최적으로",
  "partisan":"당파적인",
  "perfectionism":"완벽주의",
  "perfectly":"완벽하게",
  "preferably":"되도록",
  "resourceful": "기지가 뛰어난",
  "romanticism":"낭만주의",
  "sameness":"동일성, 똑같음",
  "scrawled": "갈겨쓴",
  "selfhood":"자아, 개체성",
  "unauthorized": "무단의, 승인받지 않은",
  "symbolism": "상징, 상징주의",
  "unawareness":"알지 못함",
  "unimaginative": "상상력이 없는",
  "uneducated": "교육받지 못한",
  "undeveloped": "발달하지 않은",
  "unlawful":"위법의",
  "unschooled": "학교 교육을 받지 않은",
  "unreasonable": "불합리한, 터무니없는",
  "unreadable": "읽을 수 없는",
  "unlettered": "무학의",
  "utopianism":"유토피아주의",
  "verification":"입증, 검증"
});
