/**
 * 단어 데이터 — 수능 보카 Q 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 20단어 · 1챕터 ──
 *
 * 저장소에서 가장 작은 세트 가운데 하나다(J 14 · K 8 다음). q 로 시작하는 낱말
 * 자체가 적다. 그런데도 승격이 13개(65%)로 비율은 가장 높다 — quantity·quarrel·
 * quest 처럼 다른 낱말의 유의어로 먼저 쓰이던 것이 많았다.
 *
 * 원칙은 A~P 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 *   ④ 한 표제어에 두 품사를 섞지 않는다 — 참조가 쓰는 갈래를 남긴다
 *   ⑤ 뜻은 두 갈래까지만 담는다
 *
 * 이 세트에서 특별히 신경 쓴 세 자리
 *
 *   quite    ★ pretty(P 세트 '꽤, 상당히') 와 첫 뜻을 일부러 '꽤' 로 맞췄다.
 *              quizgen 의 meaningsOverlap 이 뜻이 글자까지 같은 짝을 서로의 오답
 *              후보에서 빼 주기 때문이다. 원본의 '상당히' 는 pretty 몫으로 두고,
 *              '오히려, 차라리' 는 R 세트 rather 가 받는다. 부사 셋이 서로를
 *              흐리지 않게 갈라 둔 것이다.
 *   quota    할당량 한 갈래로 두고 레벨을 B2 로 잡았다. quotient(몫 · C2) 와
 *              두 칸 벌려야 오답 후보에서 서로 빠진다.
 *   queer    '이상한' 은 bizarre·odd 의 첫 뜻과 글자가 같아 서로 오답에서 빠진다.
 *              이 낱말은 사람을 가리키는 다른 뜻으로 더 자주 쓰이므로 예문은
 *              사물(소리)에 붙였다.
 */
window.VOCAB_Q = [

  /* ── 챕터 1 ────────────────────────────────────── */

  /* 원본은 '4배가 되다, 4배로 만들다, 4배의' 로 동사와 형용사가 섞여 있었다.
     참조가 없어 원본이 앞세운 동사로 세웠다. */
  { word:"quadruple", pron:"쿼드루플", pos:"v", level:"C1", meanings:["4배가 되다","4배로 만들다"],
    syn:["become four times as much","multiply by four","grow fourfold"],
    ex:[{ s:"Sales may {{}} by next year.", f:"quadruple", ko:"판매가 내년까지 4배가 될 수도 있다." }] },

  /* 원본의 괄호 설명 "(구식이어서)" 를 걷고 뜻에 녹였다. */
  { word:"quaint", pron:"퀘인트", pos:"adj", level:"C2", meanings:["예스럽고 아담한","별스러운"],
    syn:["oddly charming","old-fashioned in a nice way","curious and pleasing"],
    ex:[{ s:"They stayed in a {{}} village inn.", f:"quaint", ko:"그들은 예스럽고 아담한 시골 여관에 묵었다." }] },

  /* 승격 ① — 사전 표현과 글자까지 같다(competent, C · eligible, E — 두 곳). */
  { word:"qualified", pron:"콸리파이드", pos:"adj", level:"B2", meanings:["자격 있는"],
    syn:["competent","eligible","having the right training"],
    ex:[{ s:"She is {{}} to teach physics.", f:"qualified", ko:"그녀는 물리를 가르칠 자격이 있다." }] },

  /* 승격 ② — 사전 표현과 글자까지 같다(disqualify 반의어, D · entitle, E). */
  { word:"qualify", pron:"콸러파이", pos:"v", level:"B2", meanings:["자격을 얻다","자격을 주다"],
    syn:["entitle","meet the standard","earn the right"], ant:["disqualify"],
    ex:[{ s:"Two wins {{}} the team for the final.", f:"qualify", ko:"두 번의 승리가 그 팀에 결승 진출 자격을 준다." }] },

  /* 승격 ③ — 사전은 '정량화하다' 였고 원본은 '수량화하다' 였다. 같은 말이라
     사전값을 지켜 measure(M) 한 곳의 화면을 보존했다. */
  { word:"quantify", pron:"콴터파이", pos:"v", level:"C1", meanings:["정량화하다"],
    syn:["measure","put a number on","state as an amount"],
    ex:[{ s:"It is hard to {{}} the damage.", f:"quantify", ko:"피해를 정량화하기는 어렵다." }] },

  /* 승격 ④ — 사전 표현과 글자까지 같다(amount, A · mass, M). 원본의 '다량' 은
     '양' 과 같은 자리라 붙이지 않았다. */
  { word:"quantity", pron:"콴터티", pos:"n", level:"B1", meanings:["양","분량"],
    syn:["amount","how much there is","measured portion"],
    ex:[{ s:"A large {{}} of rice was stored.", f:"quantity", ko:"많은 양의 쌀이 저장되었다." }] },

  /* 승격 ⑤ — 원본은 '언쟁, 싸움; 다투다, 싸우다' 로 명사와 동사가 섞여 있었다.
     참조 controversy(C)·dispute(D) 가 모두 명사여서 명사로 세우고 사전 표현을
     글자까지 지켰다. */
  { word:"quarrel", pron:"코럴", pos:"n", level:"B2", meanings:["말다툼","논쟁"],
    syn:["dispute","angry exchange","falling-out"],
    ex:[{ s:"The {{}} lasted all evening.", f:"quarrel", ko:"그 말다툼은 저녁 내내 이어졌다." }] },

  /* 승격 ⑥ — 사전은 '4분의 1; 숙소' 로 쌍반점을 쓰고 있었다. 둘 다 명사라
     갈래만 쉼표로 갈랐다. 원본의 '4분의 1의'(형용사) 는 버렸다. 참조는 없다. */
  { word:"quarter", pron:"쿼터", pos:"n", level:"B1", meanings:["4분의 1","숙소"],
    syn:["one of four parts","fourth part","lodging"],
    ex:[{ s:"Only a {{}} of the class passed.", f:"quarter", ko:"학급의 4분의 1만 통과했다." }] },

  /* '이상한' 은 bizarre(B)·odd(O) 의 첫 뜻과 글자가 같아 셋이 서로의 오답에서
     빠진다. 예문은 사람이 아니라 소리에 붙였다 — 이 낱말은 사람을 가리키는
     다른 뜻으로 더 자주 쓰인다. */
  { word:"queer", pron:"퀴어", pos:"adj", level:"C1", meanings:["이상한","기묘한"],
    syn:["out of the ordinary","hard to explain","oddly unfamiliar"],
    ex:[{ s:"A {{}} sound came from the attic.", f:"queer", ko:"다락에서 이상한 소리가 났다." }] },

  /* 승격 ⑦ — 사전 표현과 글자까지 같다(adventure, A · expedition, E).
     '탐사' 는 exploration(E) 의 첫 뜻이라 사전의 '탐구' 를 그대로 두었다. */
  { word:"quest", pron:"퀘스트", pos:"n", level:"B2", meanings:["탐구","모험"],
    syn:["adventure","long search","pursuit of something"],
    ex:[{ s:"His {{}} for truth took years.", f:"quest", ko:"진리를 향한 그의 탐구는 여러 해가 걸렸다." }] },

  /* 승격 ⑧ — 사전은 '설문지' 한 갈래였고 참조가 없어 '질문서' 를 붙였다. */
  { word:"questionnaire", pron:"퀘스처네어", pos:"n", level:"B2", meanings:["설문지","질문서"],
    syn:["sheet of questions","survey form","list of queries"],
    ex:[{ s:"Please fill in the {{}}.", f:"questionnaire", ko:"설문지를 작성해 주세요." }] },

  /* 원본은 '줄, 대기 행렬; 줄서서 기다리다' 로 명사와 동사가 섞여 있었다.
     명사로 세우고, 첫 뜻은 R 세트의 rank(등급, 계급)·row(열, 좌석의 줄) 와
     겹치지 않게 '대기 행렬' 로 잡았다. */
  { word:"queue", pron:"큐", pos:"n", level:"B2", meanings:["대기 행렬","차례를 기다리는 줄"],
    syn:["line of waiting people","waiting line","file of people"],
    ex:[{ s:"A long {{}} formed at the gate.", f:"queue", ko:"문 앞에 긴 대기 행렬이 생겼다." }] },

  /* 원본은 '조용한; 고요' 로 형용사와 명사가 섞여 있었다. 형용사로 세웠다. */
  { word:"quiet", pron:"콰이엇", pos:"adj", level:"B1", meanings:["조용한","고요한"],
    syn:["making little noise","hushed","still and calm"], ant:["noisy"],
    ex:[{ s:"The library was very {{}}.", f:"quiet", ko:"도서관은 아주 조용했다." }] },

  /* 승격 ⑨ — 사전 표현과 글자까지 같다(call it a day, C · drop out, D). */
  { word:"quit", pron:"퀴트", pos:"v", level:"B1", meanings:["그만두다"],
    syn:["drop out","call it a day","give up doing"],
    ex:[{ s:"He decided to {{}} his job.", f:"quit", ko:"그는 일을 그만두기로 했다." }] },

  /* ★ pretty(P 세트 '꽤, 상당히') 와 첫 뜻을 일부러 맞췄다 — 글자가 같으면
     quizgen 이 둘을 서로의 오답 후보에서 빼 준다. 원본의 '상당히' 는 pretty 몫,
     '오히려, 차라리' 는 R 세트 rather 몫으로 갈랐다. */
  { word:"quite", pron:"콰이트", pos:"adv", level:"B1", meanings:["꽤","전적으로"],
    syn:["to a fair degree","more than a bit","altogether"],
    ex:[{ s:"The film was {{}} good.", f:"quite", ko:"그 영화는 꽤 좋았다." }] },

  /* 승격 ⑩ — 사전은 '떨다' 한 갈래였다. 원본의 '떨리다' 는 같은 말이라
     붙이지 않았다(flutter, F 한 곳 보존). */
  { word:"quiver", pron:"퀴버", pos:"v", level:"C1", meanings:["떨다"],
    syn:["flutter","tremble slightly","shake a little"],
    ex:[{ s:"Her voice began to {{}}.", f:"quiver", ko:"그녀의 목소리가 떨리기 시작했다." }] },

  /* 승격 ⑪ — 사전의 '할당량' 한 갈래를 지켰다. 레벨을 B2 로 잡아 바로 아래
     quotient(몫 · C2) 와 두 칸 벌렸다 — quizgen 은 레벨 차가 1을 넘으면 오답
     후보에서 뺀다. 원본의 '몫' 은 quotient 에 넘겼다. */
  { word:"quota", pron:"쿼타", pos:"n", level:"B2", meanings:["할당량"],
    syn:["set share","fixed amount allowed","assigned number"],
    ex:[{ s:"The factory met its monthly {{}}.", f:"quota", ko:"그 공장은 월 할당량을 채웠다." }] },

  /* 승격 ⑫ — 사전은 '인용문' 한 갈래였고 참조가 없어 '인용구' 를 붙였다. */
  { word:"quotation", pron:"쿼테이션", pos:"n", level:"B2", meanings:["인용문","인용구"],
    syn:["passage quoted","words taken from a text","cited line"],
    ex:[{ s:"The essay opens with a {{}}.", f:"quotation", ko:"그 글은 인용문으로 시작한다." }] },

  /* 승격 ⑬ — 사전은 '인용하다; 견적' 으로 동사와 명사가 섞여 있었다. 원본대로
     동사 한 갈래로 세웠다(cite, C 한 곳의 표기가 달라진다). '인용하다' 는 cite 의
     첫 뜻과 같지만 둘은 서로 유의어라 오답에서 빠진다. */
  { word:"quote", pron:"쿼트", pos:"v", level:"B1", meanings:["인용하다"],
    syn:["cite","repeat someone's words","give as a source"],
    ex:[{ s:"He likes to {{}} old proverbs.", f:"quote", ko:"그는 옛 속담을 인용하기를 좋아한다." }] },

  /* ★ 원본은 '지수, 몫' 으로 순서가 거꾸로였다 — 본뜻은 나눗셈의 '몫' 이고
     '지수' 는 intelligence quotient 같은 합성어 쓰임이다. 순서를 바로잡았다.
     '몫' 은 portion(P) 의 둘째 뜻과 글자가 같아 서로 오답에서 빠진다. */
  { word:"quotient", pron:"쿼션트", pos:"n", level:"C2", meanings:["몫","지수"],
    syn:["answer in division","number after dividing","measured index"],
    ex:[{ s:"Divide and write the {{}}.", f:"quotient", ko:"나누어서 몫을 적어라." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "angry exchange": "성난 말다툼",
  "answer in division": "나누어 얻은 답",
  "assigned number": "정해 준 수",
  "become four times as much": "네 곱이 되다",
  "cited line": "따온 한 줄",
  "curious and pleasing": "묘하게 마음에 드는",
  "earn the right": "권리를 얻다",
  "falling-out": "틀어짐",
  "file of people": "사람들이 늘어선 줄",
  "fixed amount allowed": "허락된 정해진 양",
  "fourth part": "넷으로 나눈 한 부분",
  "give as a source": "출처로 들다",
  "give up doing": "하던 것을 놓다",
  "grow fourfold": "네 배로 늘다",
  "hard to explain": "설명하기 어려운",
  "having the right training": "제대로 익힌",
  "how much there is": "얼마나 있는지",
  "hushed": "소리를 죽인",
  "line of waiting people": "기다리는 사람들의 줄",
  "list of queries": "물음을 적은 목록",
  "long search": "오랜 찾기",
  "making little noise": "소리를 거의 내지 않는",
  "measured index": "재어서 나타낸 값",
  "measured portion": "재어 나눈 몫",
  "meet the standard": "기준에 닿다",
  "more than a bit": "조금보다는 많이",
  "multiply by four": "넷을 곱하다",
  "noisy": "시끄러운",
  "number after dividing": "나눈 뒤 남는 수",
  "oddly charming": "묘하게 멋스러운",
  "oddly unfamiliar": "낯설고 묘한",
  "old-fashioned in a nice way": "낡았어도 정겨운",
  "one of four parts": "넷 가운데 하나",
  "passage quoted": "따온 대목",
  "pursuit of something": "무엇을 좇음",
  "put a number on": "수로 매기다",
  "repeat someone's words": "남의 말을 그대로 옮기다",
  "set share": "정해진 몫",
  "shake a little": "조금 흔들리다",
  "sheet of questions": "물음을 적은 장",
  "state as an amount": "양으로 밝히다",
  "still and calm": "잠잠하고 차분한",
  "survey form": "조사에 쓰는 서식",
  "to a fair degree": "어지간히",
  "tremble slightly": "가늘게 떨리다",
  "waiting line": "기다리는 줄",
  "words taken from a text": "글에서 따온 말"
});
