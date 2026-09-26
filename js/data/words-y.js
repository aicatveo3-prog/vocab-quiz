/**
 * 단어 데이터 — 수능 보카 Y 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 5단어 · 1챕터 ──
 *
 * 가장 작은 세트다. K(8단어)·J(14단어) 처럼 글자마다 한 세트를 두는 규칙을
 * 따랐다. 확정한 뜻·품사·레벨은 tools/y-source.txt 에 남겨 두었다.
 *
 * ★ yield 가 이 세트에서 가장 까다로웠다. 참조가 여섯 곳인데 품사가 셋으로
 * 갈린다 — bring in·cave in(phr) · concede·generate(v) · harvest·output(n).
 * 사전 첫 갈래가 동사('산출하다') 이고 concede·generate 가 동사여서 동사로
 * 세웠다. 그 대신 명사 쪽 둘의 유의어 칸을 손질했다.
 *   harvest(H · n 추수, 수확) yield → what is gathered in
 *   output(O · n 생산량, 산출) yield → amount turned out
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 Y 세트가 뜨지 않는다.
 */
window.VOCAB_Y = [

  /* ══ 1차 · yearn ~ yolk (5단어) — Y 세트 전부 ═════════════════════════════
     승격 2 · 신규 3

     ★ yield 가 이 세트에서 가장 까다로웠다. 참조가 **여섯 곳**인데 품사가
     셋으로 갈린다.
       bring in(phr) · cave in(phr)      구·표현
       concede(v) · generate(v)          동사
       harvest(n) · output(n)            명사
     사전 첫 갈래가 동사('산출하다') 이고 concede·generate 가 동사여서 동사로
     세웠다. 그러면 구·표현 둘은 유의어 칸에 그대로 두어도 어색하지 않지만
     (구가 동사를 대신할 수 있다) 명사 둘은 어긋난다. 그 두 곳을 손질했다.
       harvest(H · n 추수, 수확)   yield → what is gathered in
       output(O · n 생산량, 산출)  yield → amount turned out
     calculate(계산하다, 산출하다) 와 '산출하다' 가, concede(시인하다,
     양보하다) 와 '양보하다' 가 맞물려 배제된다.

     year-round 는 '계속되는' 을 글자째 품어 continuous(계속되는, 끊이지 않는)·
     ongoing·uninterrupted 셋과 맞물려 배제된다. round-the-clock(24시간 계속되는)
     과는 '연중' 과 '24시간' 이 갈래를 못 박아 갈린다.

     yolk 는 교재 괄호('(달걀의)') 를 걷었다. */

  /* 승격 ① — 사전 글자 유지. 참조 세 곳(aspire·crave·long) 의 화면은 바뀌지
     않는다. crave(갈망하다, 열망하다)·long(애타게 바라다, 갈망하다) 와
     '갈망하다' 가 맞물려 배제된다. */
  { word:"yearn", pron:"연", pos:"v", level:"C1", meanings:["갈망하다","동경하다"],
    syn:["aspire","crave","long"],
    ex:[{ s:"They {{}} for a quiet life.", f:"yearn", ko:"그들은 조용한 삶을 갈망한다." }] },

  /* '계속되는' 을 품어 continuous·ongoing·uninterrupted 셋과 맞물려 배제된다. */
  { word:"year-round", exams:["공무원"], pron:"이어 라운드", pos:"adj", level:"B2", meanings:["연중 계속되는"],
    syn:["going on all year","lasting the whole year","through every season"],
    ex:[{ s:"It is a {{}} resort.", f:"year-round", ko:"그곳은 연중 계속되는 휴양지다." }] },

  /* 교재의 '잇따라' 는 부사여서 버렸다. */
  { word:"yet another", pron:"옛 어나더", pos:"phr", level:"B2", meanings:["또 하나의"],
    syn:["one more on top","still another","adding to those before"] },

  /* 승격 ② — ★사전 첫 갈래(동사) 를 따랐다. 참조 여섯 곳의 품사가 phr 2 · v 2 ·
     n 2 로 갈렸는데 concede·generate 가 동사다. 명사 쪽 둘을 손질했다.
     ★ harvest(H) yield → what is gathered in
     ★ output(O)  yield → amount turned out
     교재의 명사 갈래('생산, 산출') 는 production(생산, 생산량)·output(생산량,
     산출) 자리라 버렸다. */
  { word:"yield", pron:"일드", pos:"v", level:"B2", meanings:["산출하다","양보하다"],
    syn:["generate","concede","bring forth a crop"],
    ex:[{ s:"The field will {{}} more this year.", f:"yield", ko:"그 밭은 올해 더 산출할 것이다." }] },

  /* 교재 괄호('(달걀의)') 를 걷었다. */
  { word:"yolk", pron:"요크", pos:"n", level:"B2", meanings:["노른자"],
    syn:["yellow part of an egg","the golden middle","centre of an egg"],
    ex:[{ s:"Separate the {{}} from the white.", f:"yolk", ko:"노른자를 흰자에서 갈라내라." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "adding to those before": "앞의 것에 더해",
  "bring forth a crop": "거둘 것을 내놓다",
  "bring into close view": "바로 앞에 보이게 하다",
  "burning keenness": "타오르는 열심",
  "centre of an egg": "달걀의 속",
  "draw slowly closer on": "천천히 가까이 당기다",
  "full of keen spirit": "열띤 기운이 가득한",
  "going on all year": "한 해 내내 이어지는",
  "lasting the whole year": "온 해를 두고 가는",
  "make larger bit by bit": "조금씩 크게 하다",
  "one more on top": "그 위에 또 하나",
  "still another": "거기다 또",
  "the golden middle": "누런 가운데",
  "through every season": "철마다 빠짐없이",
  "what is gathered in": "거두어들인 것",
  "yellow part of an egg": "달걀의 누런 부분"
});
