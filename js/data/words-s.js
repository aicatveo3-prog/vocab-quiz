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
    ex:[{ s:"The {{}} sends weather data every hour.", f:"satellite", ko:"그 위성은 매시간 기상 자료를 보낸다." }] },

  /* ── 챕터 2 ────────────────────────────────────── */
  /* 승격이 열 개인 챕터다. 사전에 쌍반점으로 붙어 있던 것을 쉼표로 가른 자리가
     넷(savage·scatter·scent·scar) 이고, 사전 뜻 하나를 덜어 낸 자리가 하나다.
       scan  훑어보다; 스캔하다 → 훑어보다
     외래어 '스캔하다' 를 걷은 것이다. 이 낱말은 같은 세트 skim(챕터 9) 과
     '훑어보다' 를 글자까지 똑같이 맞춰 두었다 — meaningsOverlap 이 둘을
     서로의 오답에서 자동으로 뺀다. 어설프게 다르게 적으면 앱이 둘을 다른
     뜻으로 보고 같은 문제에 나란히 내놓는다.

     scale 은 '음계·저울' 을 버렸다. 참조 extent(E)·magnitude(M) 가 모두 '규모'
     쪽이어서다.
     savor 는 원본의 '만끽하다' 를 버리고 사전의 명사 '풍미' 를 지켰다 —
     참조 flavor(F) 가 명사다.
     saw 는 원본이 [v+n] 이었다. see 의 과거형과 헷갈리지 않게 명사 '톱' 으로만
     세우고 예문도 톱 뜻으로 두었다.
     scared(무서워하는) 와 scary(무서운) 는 일부러 나란히 두었다 — 겪는 쪽과
     만드는 쪽의 차이를 가리는 자리다. */

  { word:"satiate", pron:"세이시에이트", pos:"v", level:"C2", meanings:["충분히 만족시키다"],
    syn:["satisfy","glut","fill fully"],
    ex:[{ s:"A small meal will not {{}} him.", f:"satiate", ko:"적은 식사로는 그를 충분히 만족시키지 못한다." }] },

  { word:"satire", pron:"새타이어", pos:"n", level:"C1", meanings:["풍자","비꼼"],
    syn:["mockery","irony","witty attack in writing"],
    ex:[{ s:"The play is a sharp {{}} on politics.", f:"satire", ko:"그 연극은 정치에 대한 날카로운 풍자다." }] },

  { word:"satirical", pron:"서티리컬", pos:"adj", level:"C1", meanings:["풍자적인"],
    syn:["mocking","using ridicule","ironic in tone"],
    ex:[{ s:"He writes {{}} essays for the paper.", f:"satirical", ko:"그는 신문에 풍자적인 글을 쓴다." }] },

  { word:"satisfying", pron:"새티스파잉", pos:"adj", level:"B1", meanings:["만족스러운"],
    syn:["pleasing","fulfilling","giving contentment"], ant:["disappointing"],
    ex:[{ s:"The long walk was deeply {{}}.", f:"satisfying", ko:"그 긴 산책은 아주 만족스러웠다." }] },

  /* 승격 ⑨ — 사전 글자를 그대로 지켰다. 참조 drench(D) 의 화면은 바뀌지 않는다. */
  { word:"saturate", pron:"새처레이트", pos:"v", level:"C1", meanings:["적시다","포화시키다"],
    syn:["drench","soak through","fill to the limit"],
    ex:[{ s:"Heavy rain will {{}} the soil.", f:"saturate", ko:"폭우가 흙을 적실 것이다." }] },

  { word:"saturation", pron:"새처레이션", pos:"n", level:"C1", meanings:["포화 상태"],
    syn:["state of being full","point of no more","complete soaking"],
    ex:[{ s:"The market has reached {{}}.", f:"saturation", ko:"그 시장은 포화 상태에 이르렀다." }] },

  /* 승격 ⑩ — 사전의 쌍반점만 쉼표로 갈랐다. 참조 barbaric(B)·cruel(C)·
     fierce(F) 세 곳의 설명이 '야만적인; 잔인한' 에서 '야만적인, 잔인한' 이 된다. */
  { word:"savage", pron:"새비지", pos:"adj", level:"C1", meanings:["야만적인","잔인한"],
    syn:["barbaric","cruel","fierce"], ant:["gentle"],
    ex:[{ s:"The village faced a {{}} raid.", f:"savage", ko:"그 마을은 야만적인 습격을 당했다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"save face", pron:"세이브 페이스", pos:"phr", level:"C1", meanings:["체면을 세우다"],
    syn:["keep one's dignity","avoid looking bad","protect one's honor"] },

  /* 승격 ⑪ — 사전 단일값이 명사다. 참조 flavor(F) 의 화면은 바뀌지 않는다. */
  { word:"savor", pron:"세이버", pos:"n", level:"C1", meanings:["풍미"],
    syn:["flavor","taste one enjoys","rich tang"],
    ex:[{ s:"The stew has a rich {{}}.", f:"savor", ko:"그 스튜는 풍미가 진하다." }] },

  { word:"saw", pron:"소", pos:"n", level:"B1", meanings:["톱"],
    syn:["cutting tool with teeth","toothed blade","handsaw"],
    ex:[{ s:"He cut the plank with a {{}}.", f:"saw", ko:"그는 톱으로 판자를 잘랐다." }] },

  /* 승격 ⑫ — 사전 글자를 그대로 지켰다. 참조 extent(E)·magnitude(M) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"scale", pron:"스케일", pos:"n", level:"B1", meanings:["규모","정도"],
    syn:["extent","magnitude","size of a thing"],
    ex:[{ s:"The project grew in {{}} every year.", f:"scale", ko:"그 사업은 해마다 규모가 커졌다." }] },

  /* 승격 ⑬ — 사전에서 외래어 '스캔하다' 를 걷었다. 참조 browse(B)·glance(G)
     두 곳의 설명이 '훑어보다; 스캔하다' 에서 '훑어보다' 로 짧아진다. */
  { word:"scan", pron:"스캔", pos:"v", level:"B2", meanings:["훑어보다"],
    syn:["browse","glance","look over quickly"],
    ex:[{ s:"She began to {{}} the headlines.", f:"scan", ko:"그녀는 표제들을 훑어보기 시작했다." }] },

  /* 승격 ⑭ — 사전 단일값 유지(insufficient, I). scarce(부족한, 드문) 와
     '빈약한' 한 갈래로 갈랐다. */
  { word:"scanty", pron:"스캔티", pos:"adj", level:"C1", meanings:["빈약한"],
    syn:["insufficient","barely enough","thin in amount"],
    ex:[{ s:"The report gave only {{}} detail.", f:"scanty", ko:"그 보고서는 빈약한 세부 내용만 담았다." }] },

  /* 승격 ⑮ — 사전은 '흉터' 한 갈래였다. 참조가 없어 원본대로 두 갈래로 넓혔다. */
  { word:"scar", pron:"스카", pos:"n", level:"B2", meanings:["흉터","상처"],
    syn:["mark left by a wound","blemish","healed cut"],
    ex:[{ s:"The burn left a small {{}} on his arm.", f:"scar", ko:"그 화상은 그의 팔에 작은 흉터를 남겼다." }] },

  /* 승격 ⑯ — 사전 글자를 그대로 지켰다. 참조 abundant(A)·numerous(N) 두 곳의
     화면은 바뀌지 않는다. 원본의 부사 갈래 '거의 ~않다' 는 scarcely 자리다. */
  { word:"scarce", pron:"스케어스", pos:"adj", level:"B2", meanings:["부족한","드문"],
    syn:["in short supply","hard to come by","thin on the ground"], ant:["abundant","numerous"],
    ex:[{ s:"Clean water became {{}} that summer.", f:"scarce", ko:"그해 여름 깨끗한 물이 부족해졌다." }] },

  { word:"scared", pron:"스케어드", pos:"adj", level:"B1", meanings:["무서워하는","겁먹은"],
    syn:["frightened","afraid","filled with fear"], ant:["fearless"],
    ex:[{ s:"The child was {{}} of the dark.", f:"scared", ko:"그 아이는 어둠을 무서워했다." }] },

  { word:"scary", pron:"스케어리", pos:"adj", level:"B1", meanings:["무서운","두려운"],
    syn:["frightening","causing fear","spooky"],
    ex:[{ s:"They watched a {{}} film last night.", f:"scary", ko:"그들은 어젯밤 무서운 영화를 보았다." }] },

  /* 승격 ⑰ — 사전의 쌍반점만 쉼표로 갈랐다. 참조 네 곳(chase away·compile·
     diffuse·disperse) 의 설명이 '흩뿌리다; 분산하다' 에서 '흩뿌리다, 분산하다'
     가 된다. */
  { word:"scatter", pron:"스캐터", pos:"v", level:"B2", meanings:["흩뿌리다","분산하다"],
    syn:["disperse","diffuse","chase away"], ant:["gather"],
    ex:[{ s:"The wind will {{}} the seeds.", f:"scatter", ko:"바람이 씨앗을 흩뿌릴 것이다." }] },

  { word:"scenery", pron:"시너리", pos:"n", level:"B1", meanings:["풍경","경치"],
    syn:["landscape","view of the land","natural setting"],
    ex:[{ s:"The mountain {{}} draws many walkers.", f:"scenery", ko:"그 산의 풍경은 많은 등산객을 끈다." }] },

  /* 승격 ⑱ — 사전의 쌍반점만 쉼표로 갈랐다. 참조 aroma(A)·fragrance(F)·
     odor(O) 세 곳의 설명이 '향기; 냄새' 에서 '향기, 냄새' 가 된다. */
  { word:"scent", pron:"센트", pos:"n", level:"B2", meanings:["향기","냄새"],
    syn:["aroma","fragrance","odor"],
    ex:[{ s:"The {{}} of roses filled the room.", f:"scent", ko:"장미의 향기가 방을 채웠다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "afraid": "두려워하는",
  "avoid looking bad": "모양이 나빠지지 않게 하다",
  "barely enough": "겨우 될 만한",
  "body circling a planet": "행성을 도는 천체",
  "bring up from water": "물에서 끌어올리다",
  "causing fear": "두려움을 일으키는",
  "cheer": "기운을 북돋우다",
  "clean and free of germs": "균이 없이 깨끗한",
  "clear judgment": "맑은 판단력",
  "complete soaking": "속까지 다 젖음",
  "cutting tool with teeth": "이가 난 자르는 도구",
  "damage on purpose": "고의로 해를 입히다",
  "deliverance": "해방, 벗어남",
  "disappointing": "실망스러운",
  "drains and clean water": "배수와 깨끗한 물",
  "fill fully": "가득 채우다",
  "fill to the limit": "한도까지 채우다",
  "filled with fear": "두려움에 찬",
  "fluid in the mouth": "입안의 액체",
  "formal permission": "정식 허가",
  "free from harm": "해를 입지 않는",
  "frightened": "놀라 떠는",
  "frightening": "놀라게 하는",
  "fulfilling": "보람 있는",
  "full of salt": "소금기가 많은",
  "giving contentment": "흐뭇함을 주는",
  "giving up of something": "무언가를 내놓음",
  "glut": "실컷 채우다",
  "greet with respect": "예를 갖춰 맞이하다",
  "guide on avoiding danger": "위험을 피하는 안내",
  "handsaw": "손톱질 도구",
  "hard to come by": "구하기 어려운",
  "haven": "안식처",
  "healed cut": "아문 베인 자리",
  "hygienic": "위생적인",
  "in short supply": "공급이 모자란",
  "ironic in a cutting way": "날카롭게 비꼬는",
  "ironic in tone": "말투가 반어적인",
  "keep one's dignity": "품위를 지키다",
  "leaf through": "책장을 넘겨 가며 보다",
  "look over quickly": "빠르게 눈으로 지나가다",
  "loss for a cause": "대의를 위한 손실",
  "madness": "광기",
  "make sorrowful": "애석하게 만들다",
  "mark left by a wound": "상처가 남긴 자리",
  "mental health": "정신 건강",
  "natural setting": "자연 그대로의 자리",
  "of sound mind": "정신이 온전한",
  "official approval": "공식 승인",
  "orbiting station": "궤도 위의 기지",
  "out of danger": "위험에서 벗어난",
  "pay tribute to": "~에게 찬사를 보내다",
  "pleasing": "즐거움을 주는",
  "point of no more": "더 못 받는 지점",
  "protect one's honor": "명예를 지키다",
  "recover from wreck": "난파선에서 되찾다",
  "redemption": "속죄, 되찾음",
  "rich tang": "짙은 맛깔",
  "rules for staying safe": "안전하게 지내는 규칙",
  "run one's eye over": "눈으로 쭉 지나가다",
  "safe place for animals": "동물이 지내는 안전한 곳",
  "safety lesson": "안전 수업",
  "salt-laden": "소금이 섞인",
  "salty": "짠",
  "saving from sin": "죄에서 건져 냄",
  "set apart for god": "신에게 바쳐진",
  "size of a thing": "사물의 크기",
  "sneering": "코웃음 치는",
  "soundness of mind": "정신의 온전함",
  "spacecraft in orbit": "궤도를 도는 비행체",
  "spit": "뱉는 침",
  "spittle": "입에서 나온 침",
  "spooky": "으스스한",
  "standing out most": "가장 도드라지는",
  "state of being full": "가득 찬 상태",
  "taste one enjoys": "즐기는 맛",
  "thin in amount": "양이 얇은",
  "to do with hygiene": "위생에 관한",
  "toothed blade": "이가 난 날",
  "using ridicule": "조롱을 써서",
  "view of the land": "땅이 보이는 모습",
  "ward off": "막아 내다",
  "waste disposal system": "오물 처리 체계",
  "witty attack in writing": "글로 재치 있게 찌름"
});
