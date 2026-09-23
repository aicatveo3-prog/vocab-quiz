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
    ex:[{ s:"It is {{}} to park in front of a fire hydrant.", f:"illegal", ko:"소화전 앞에 주차하는 것은 불법이다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 (세트 파일에 PRON
   블록을 두는 선례가 없다. pron.js 가 이 파일보다 뒤에 로드되므로 여기서
   Object.assign(window.PRON, ...) 을 하면 pron.js 쪽 값에 덮인다). */
Object.assign(window.GLOSS, {
  "detection":"탐지, 발견",
  "different":"다른",
  "distinguishable":"구별할 수 있는",
  "doctrinal":"교리상의",
  "dogmatic":"독단적인",
  "emblematic":"상징적인",
  "figurehead":"명목상의 대표",
  "flawed":"결함이 있는",
  "idol":"우상, 숭배 대상",
  "indistinguishable":"구별할 수 없는",
  "individuality":"개성, 특성",
  "inexperience":"미숙, 경험 부족",
  "knowledge":"지식",
  "legendary":"전설적인",
  "naivety":"순진함",
  "optimal":"최적의",
  "optimally":"최적으로",
  "partisan":"당파적인",
  "perfectionism":"완벽주의",
  "perfectly":"완벽하게",
  "preferably":"되도록",
  "romanticism":"낭만주의",
  "sameness":"동일성, 똑같음",
  "selfhood":"자아, 개체성",
  "unawareness":"알지 못함",
  "unlawful":"위법의",
  "utopianism":"유토피아주의",
  "verification":"입증, 검증"
});
