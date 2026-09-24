/**
 * 단어 데이터 — 수능 보카 S 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 439단어 · 22챕터 (1차부터 스물두 차수에 걸쳐 붙인다) ──
 *
 * C(466) 에 이어 두 번째로 큰 세트다. 승격이 240개(55%), 참조가 383곳으로
 * 저장소 최다다 — separate·specific 이 각 6곳, seek·seize·smooth·span·substance·
 * suppress 가 각 5곳이다.
 *
 * 확정한 뜻·품사·레벨은 tools/s-source.txt 에 남겨 두었다. 원본(교재) 444단어에서
 * 다섯을 빼고(sub-hourly·stage-set·seed improvement·school calendar·single issue)
 * 뜻 오류 여섯을 고친 결과다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 S 세트가 뜨지 않는다.
 */
window.VOCAB_S = [

  /* ── 챕터 1 ────────────────────────────────────── */
  /* 이 챕터에서 갈라야 했던 자리는 셋이다.
       ① salvage ↔ salvation  — 원본이 둘 다 '구조' 를 갖고 있었다.
          salvage   인양하다, 건져 내다   ← 물건을 건지는 쪽
          salvation 구원, 구제           ← 사람을 건지는 쪽
       ② sane ↔ sensible(챕터 12)  — '분별 있는' 이 겹친다. sane 의 사전값
          '제정신의, 분별 있는' 을 글자까지 지켰다. sensible 의 첫 뜻이
          '분별 있는' 이므로 meaningsOverlap 이 서로를 오답에서 자동 배제한다.
       ③ safe 는 '금고' 를 버렸다. 명사로 세우면 secure(챕터 3) 와 '안전' 자리가
          맞물려 둘 다 흐려진다.

     sabotage 는 원본이 '모방하다, 흉내 내다' 로 적혀 있었다. emulate 의 뜻이
     잘못 끼어든 것이라 '고의로 파괴하다, 방해하다' 로 고쳤다. */

  /* 신규. 참조는 없다. */
  { word:"sabotage", pron:"새버타지", pos:"v", level:"C1", meanings:["고의로 파괴하다","방해하다"],
    syn:["undermine","wreck","damage on purpose"],
    ex:[{ s:"Rebels tried to {{}} the railway line.", f:"sabotage", ko:"반란군은 철도 노선을 고의로 파괴하려 했다." }] },

  /* 승격 ① — 사전 단일값을 글자까지 지켰다. 참조 divine(D)·holy(H) 두 곳의
     화면은 뜻도 발음도 그대로다. */
  { word:"sacred", pron:"세이크리드", pos:"adj", level:"B2", meanings:["신성한"],
    syn:["holy","divine","set apart for god"],
    ex:[{ s:"The temple is a {{}} place to them.", f:"sacred", ko:"그 신전은 그들에게 신성한 장소다." }] },

  /* 승격 ② — 사전은 '희생; 제물' 이었다. 원본도 명사와 동사가 섞여 있었다.
     참조가 없어 명사 '희생' 한 갈래로 세웠다 — 화면이 바뀌는 곳은 없다. */
  { word:"sacrifice", pron:"새크러파이스", pos:"n", level:"B1", meanings:["희생"],
    syn:["offering","giving up of something","loss for a cause"],
    ex:[{ s:"Her success came at great {{}}.", f:"sacrifice", ko:"그녀의 성공은 큰 희생을 치르고 얻은 것이다." }] },

  { word:"sadden", pron:"새든", pos:"v", level:"B2", meanings:["슬프게 하다"],
    syn:["upset","grieve","make sorrowful"], ant:["cheer"],
    ex:[{ s:"The news will {{}} everyone here.", f:"sadden", ko:"그 소식은 이곳의 모두를 슬프게 할 것이다." }] },

  /* 승격 ③ — 사전 단일값 유지. 참조 hazardous(H) 의 화면은 그대로다. */
  { word:"safe", pron:"세이프", pos:"adj", level:"B1", meanings:["안전한"],
    syn:["protected","free from harm","out of danger"], ant:["hazardous"],
    ex:[{ s:"The old bridge is still {{}} to cross.", f:"safe", ko:"그 낡은 다리는 아직 건너기에 안전하다." }] },

  /* 원본은 'safetyinstruction' 으로 붙어 있었다. 구·표현이라 예문은 두지 않는다. */
  { word:"safety instruction", pron:"세이프티 인스트럭션", pos:"phr", level:"B1", meanings:["안전 교육"],
    syn:["safety lesson","rules for staying safe","guide on avoiding danger"] },

  /* 원본의 '중요한' 은 significant 자리라 버렸다. */
  { word:"salient", pron:"세일리언트", pos:"adj", level:"C2", meanings:["가장 두드러진","눈에 먼저 드는"],
    syn:["prominent","noticeable","standing out most"], ant:["inconspicuous"],
    ex:[{ s:"She made the most {{}} point in the debate.", f:"salient", ko:"그녀는 토론에서 가장 두드러진 지적을 했다." }] },

  { word:"saline", pron:"세일라인", pos:"adj", level:"C2", meanings:["염분이 든"],
    syn:["salty","salt-laden","full of salt"],
    ex:[{ s:"The lake water is too {{}} to drink.", f:"saline", ko:"그 호수 물은 염분이 들어 마시기 어렵다." }] },

  { word:"saliva", pron:"설라이버", pos:"n", level:"B2", meanings:["침"],
    syn:["spit","spittle","fluid in the mouth"],
    ex:[{ s:"Dogs produce {{}} when they smell food.", f:"saliva", ko:"개는 음식 냄새를 맡으면 침을 낸다." }] },

  /* 승격 ④ — 사전 단일값 유지(hail, H). 원본 '경례하다' 는 군대 쪽으로만 좁아
     버렸다. */
  { word:"salute", pron:"설루트", pos:"v", level:"B2", meanings:["경의를 표하다"],
    syn:["hail","greet with respect","pay tribute to"],
    ex:[{ s:"The crowd rose to {{}} the champion.", f:"salute", ko:"군중은 일어나 챔피언에게 경의를 표했다." }] },

  /* ①의 앞쪽 — 물건을 건지는 쪽만 맡는다. */
  { word:"salvage", pron:"샐비지", pos:"v", level:"C1", meanings:["인양하다","건져 내다"],
    syn:["rescue","recover from wreck","bring up from water"],
    ex:[{ s:"Divers tried to {{}} the sunken ship.", f:"salvage", ko:"잠수부들은 가라앉은 배를 인양하려 했다." }] },

  /* ①의 뒤쪽 — 사람을 건지는 쪽을 맡는다. */
  { word:"salvation", pron:"샐베이션", pos:"n", level:"C1", meanings:["구원","구제"],
    syn:["redemption","deliverance","saving from sin"],
    ex:[{ s:"He sought {{}} through prayer and fasting.", f:"salvation", ko:"그는 기도와 금식을 통해 구원을 찾았다." }] },

  /* 승격 ⑤ — 사전은 '제재; 인가하다' 로 명사와 동사가 섞여 있었다. 참조
     approval(A) 이 명사여서 명사로 세우고 쌍반점을 쉼표로 갈랐다. 그 한 곳의
     설명이 '제재; 인가하다' 에서 '제재, 인가' 로 바뀐다 — 발음은 그대로다. */
  { word:"sanction", pron:"생션", pos:"n", level:"C1", meanings:["제재","인가"],
    syn:["penalty","official approval","formal permission"],
    ex:[{ s:"The council imposed a {{}} on the firm.", f:"sanction", ko:"위원회는 그 회사에 제재를 가했다." }] },

  /* 승격 ⑥ — 사전의 쌍반점만 쉼표로 갈랐다. 참조 altar(A)·chapel(C) 두 곳의
     설명이 '보호구역; 성소' 에서 '보호구역, 성소' 로 바뀐다. */
  { word:"sanctuary", pron:"생추에리", pos:"n", level:"C1", meanings:["보호구역","성소"],
    syn:["refuge","haven","safe place for animals"],
    ex:[{ s:"The island is a bird {{}}.", f:"sanctuary", ko:"그 섬은 새 보호구역이다." }] },

  /* 승격 ⑦ — ②의 앞쪽. 사전 글자를 그대로 지켰으므로 참조 deranged(D)·
     insane(I) 두 곳의 화면은 바뀌지 않는다. */
  { word:"sane", pron:"세인", pos:"adj", level:"C1", meanings:["제정신의","분별 있는"],
    syn:["rational","of sound mind","clear-headed"], ant:["insane","deranged"],
    ex:[{ s:"The doctor judged him fully {{}}.", f:"sane", ko:"의사는 그가 완전히 제정신이라고 판단했다." }] },

  /* 원본 '위생적인' 은 같은 말이라 '위생의' 로 줄였다. */
  { word:"sanitary", pron:"새니터리", pos:"adj", level:"C1", meanings:["위생의"],
    syn:["hygienic","clean and free of germs","to do with hygiene"],
    ex:[{ s:"The kitchen met every {{}} standard.", f:"sanitary", ko:"그 주방은 모든 위생 기준을 충족했다." }] },

  /* 승격 ⑧ — 사전 단일값 유지(hygiene, H). hygiene(위생) 을 syn 에 넣어 두면
     areSynonyms 가 둘을 서로의 오답에서 뺀다 — '위생' 과 '위생 시설' 이 같은
     문제에 나란히 뜨는 것을 막는 장치다. */
  { word:"sanitation", pron:"새니테이션", pos:"n", level:"C1", meanings:["위생 시설"],
    syn:["hygiene","drains and clean water","waste disposal system"],
    ex:[{ s:"The town lacks proper {{}}.", f:"sanitation", ko:"그 마을은 제대로 된 위생 시설이 없다." }] },

  /* sane(adj) 과 품사로 갈린다. */
  { word:"sanity", pron:"새니티", pos:"n", level:"C1", meanings:["온전한 정신","분별력"],
    syn:["soundness of mind","clear judgment","mental health"], ant:["madness"],
    ex:[{ s:"He began to question her {{}}.", f:"sanity", ko:"그는 그녀의 정신이 온전한지 의심하기 시작했다." }] },

  { word:"sarcastic", pron:"사캐스틱", pos:"adj", level:"C1", meanings:["비꼬는","빈정거리는"],
    syn:["mocking","ironic in a cutting way","sneering"],
    ex:[{ s:"His {{}} remark hurt her deeply.", f:"sarcastic", ko:"그의 비꼬는 말이 그녀를 깊이 아프게 했다." }] },

  /* 원본의 괄호 '(인공)' 은 걷었다 — 첫 뜻의 괄호는 감사가 경고로 잡는다. */
  { word:"satellite", pron:"새털라이트", pos:"n", level:"B2", meanings:["위성"],
    syn:["spacecraft in orbit","body circling a planet","orbiting station"],
    ex:[{ s:"The {{}} sends weather data every hour.", f:"satellite", ko:"그 위성은 매시간 기상 자료를 보낸다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "body circling a planet": "행성을 도는 천체",
  "bring up from water": "물에서 끌어올리다",
  "cheer": "기운을 북돋우다",
  "clean and free of germs": "균이 없이 깨끗한",
  "clear judgment": "맑은 판단력",
  "damage on purpose": "고의로 해를 입히다",
  "deliverance": "해방, 벗어남",
  "drains and clean water": "배수와 깨끗한 물",
  "fluid in the mouth": "입안의 액체",
  "formal permission": "정식 허가",
  "free from harm": "해를 입지 않는",
  "full of salt": "소금기가 많은",
  "giving up of something": "무언가를 내놓음",
  "greet with respect": "예를 갖춰 맞이하다",
  "guide on avoiding danger": "위험을 피하는 안내",
  "haven": "안식처",
  "hygienic": "위생적인",
  "ironic in a cutting way": "날카롭게 비꼬는",
  "loss for a cause": "대의를 위한 손실",
  "madness": "광기",
  "make sorrowful": "애석하게 만들다",
  "mental health": "정신 건강",
  "of sound mind": "정신이 온전한",
  "official approval": "공식 승인",
  "orbiting station": "궤도 위의 기지",
  "out of danger": "위험에서 벗어난",
  "pay tribute to": "~에게 찬사를 보내다",
  "recover from wreck": "난파선에서 되찾다",
  "redemption": "속죄, 되찾음",
  "rules for staying safe": "안전하게 지내는 규칙",
  "safe place for animals": "동물이 지내는 안전한 곳",
  "safety lesson": "안전 수업",
  "salt-laden": "소금이 섞인",
  "salty": "짠",
  "saving from sin": "죄에서 건져 냄",
  "set apart for god": "신에게 바쳐진",
  "sneering": "코웃음 치는",
  "soundness of mind": "정신의 온전함",
  "spacecraft in orbit": "궤도를 도는 비행체",
  "spit": "뱉는 침",
  "spittle": "입에서 나온 침",
  "standing out most": "가장 도드라지는",
  "to do with hygiene": "위생에 관한",
  "waste disposal system": "오물 처리 체계"
});
