/**
 * 단어 데이터 — 수능 보카 S 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 439단어 · 22챕터 (완성) ──
 *   품사  adj 122 · adv 8 · n 154 · phr 31 · v 124
 *   레벨  B1 110 · B2 189 · C1 109 · C2 31
 *
 * C(466) 에 이어 두 번째로 큰 세트다. 승격이 240개(55%), 참조가 383곳으로
 * 저장소 최다다 — separate·specific 이 각 6곳, seek·seize·smooth·span·substance·
 * suppress 가 각 5곳이다.
 *
 * 확정한 뜻·품사·레벨은 tools/s-source.txt 에 남겨 두었다. 원본(교재) 444단어에서
 * 다섯을 빼고(sub-hourly·stage-set·seed improvement·school calendar·single issue)
 * 뜻 오류 여섯을 고친 결과다.
 *
 * ── 이 세트를 붙이며 배운 것 ─────────────────────────
 * 이 구간의 사전값에는 **동사와 명사가 쌍반점으로 붙어 있는 낱말**이 특히 많았다
 * (shed 흘리다;헛간 · slope 비탈지다 · stock 재고;저장하다 …). 승격할 때 한쪽을
 * 골라야 하는데, 그 낱말을 유의어로 쓰고 있는 기존 표제어가 버린 쪽 뜻을 노린
 * 자리이면 화면이 어긋난다. 감사 도구는 이것을 잡지 못한다 — 선택지에 품사
 * 정보가 없기 때문이다.
 *
 * 그래서 차수마다 '참조의 품사' 를 하나씩 확인하고, 다수 쪽을 따라 품사를 정한 뒤
 * 소수 쪽 참조 한 곳만 다른 표현으로 갈았다. 모두 서른 곳이다. 각 자리에는
 * 해당 표제어 위에 ★ 주석으로 이유를 남겨 두었다.
 *
 * 또 하나. 뜻이 겹치는데 갈라 쓸 수 없으면 **글자를 똑같이 맞춘다.**
 * quizgen 의 meaningsOverlap 이 글자가 같은 두 낱말을 서로의 오답에서 자동으로
 * 빼기 때문이다. 어설프게 다르게 적는 것이 가장 위험하다 — 앱이 둘을 다른 뜻으로
 * 보고 같은 문제에 나란히 내놓는다. stubborn 의 '고집센' → '고집 센' 처럼
 * 빈칸 하나로 승부가 갈리는 자리도 있었다.
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
    ex:[{ s:"The {{}} of roses filled the room.", f:"scent", ko:"장미의 향기가 방을 채웠다." }] },

  /* ── 챕터 3 ────────────────────────────────────── */
  /* 일부러 글자를 맞춰 서로를 배제시킨 자리가 둘이다.
       scope   범위          ← range(범위, 다양함 · R) · extent(범위, 정도 · E)
       seclude 격리하다, 고립시키다 ← isolate(고립시키다, 격리하다 · I) 와 앞뒤만 다르다
     둘 다 첫 낱말이 상대의 갈래와 글자가 같아 meaningsOverlap 이 자동으로 뺀다.

     scribble 은 원본이 '몰래 살짝 보다' 로 적혀 있었다. peek 의 뜻이 잘못
     끼어든 것이라 '갈겨쓰다, 낙서하다' 로 고쳤다.
     seasoned 는 원본의 '양념을 한' 을 버렸다 — 바로 앞 season(양념하다) 과
     같은 자리다. 사람을 가리키는 '경험이 많은, 노련한' 만 남겼다.
     seal 은 원본이 [v+n] 이었다. 참조가 없어 동사로만 세웠다('물개' 는 버렸다). */

  /* 승격 ⑲ — 사전의 쌍반점만 쉼표로 갈랐다. 참조 conspiracy(C)·conspire(C)
     두 곳의 설명이 '계획; 음모' 에서 '계획, 음모' 가 된다. */
  { word:"scheme", pron:"스킴", pos:"n", level:"B2", meanings:["계획","음모"],
    syn:["conspiracy","plot","secret plan"],
    ex:[{ s:"They devised a {{}} to raise funds.", f:"scheme", ko:"그들은 자금을 모을 계획을 짜냈다." }] },

  /* 승격 ⑳ — 사전 단일값 유지. 참조 intellectual(I)·learned(L) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"scholarly", pron:"스칼러리", pos:"adj", level:"B2", meanings:["학문적인"],
    syn:["academic","learned","intellectual"],
    ex:[{ s:"He wrote a {{}} article on the topic.", f:"scholarly", ko:"그는 그 주제로 학문적인 논문을 썼다." }] },

  { word:"scholarship", pron:"스칼러십", pos:"n", level:"B1", meanings:["장학금"],
    syn:["grant for study","study award","money for tuition"],
    ex:[{ s:"She won a full {{}} to the college.", f:"scholarship", ko:"그녀는 그 대학의 전액 장학금을 받았다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"scoop up", pron:"스쿱 업", pos:"phr", level:"B2", meanings:["퍼 올리다"],
    syn:["lift with a scoop","gather up in one go","dig out and raise"] },

  /* 승격 ㉑ — 사전 단일값 유지. 참조 coverage(C)·extent(E) 두 곳의 화면은
     바뀌지 않는다. '범위' 한 갈래로 둔 것이 range·extent 와 맞물려 배제되는
     장치다. */
  { word:"scope", pron:"스코프", pos:"n", level:"B2", meanings:["범위"],
    syn:["coverage","extent","area covered"],
    ex:[{ s:"The {{}} of the study was too narrow.", f:"scope", ko:"그 연구의 범위는 너무 좁았다." }] },

  /* 승격 ㉒ — 사전 단일값 유지. 참조 mocking(M) 의 화면은 바뀌지 않는다. */
  { word:"scornful", pron:"스콘풀", pos:"adj", level:"C1", meanings:["멸시하는"],
    syn:["contemptuous","disdainful","looking down on"],
    ex:[{ s:"She gave him a {{}} look.", f:"scornful", ko:"그녀는 그를 멸시하는 눈으로 보았다." }] },

  /* 승격 ㉓ — 사전은 '서두르다; 다투다' 였다. 참조가 없어 원본의 두 갈래를
     그대로 살렸다 — 화면이 바뀌는 곳은 없다. */
  { word:"scramble", pron:"스크램블", pos:"v", level:"B2", meanings:["재빨리 움직이다","앞다투다"],
    syn:["rush about","vie with others","move fast in haste"],
    ex:[{ s:"Fans began to {{}} for the last tickets.", f:"scramble", ko:"팬들은 남은 표를 앞다투어 잡으려 했다." }] },

  /* 승격 ㉔ — 사전은 '폐기하다; 조각' 으로 동사와 명사가 섞여 있었다. 참조
     셋 중 call off(C)·do away with(D) 가 동사여서 동사로 세웠다. 그 두 곳의
     설명이 '폐기하다; 조각' 에서 '폐기하다, 버리다' 가 된다.
     나머지 한 곳 junk(J) 는 명사라 그 자리만 rubbish 로 갈아 두었다. */
  { word:"scrap", pron:"스크랩", pos:"v", level:"B2", meanings:["폐기하다","버리다"],
    syn:["discard","do away with","throw out as useless"],
    ex:[{ s:"The city will {{}} the old plan.", f:"scrap", ko:"시는 낡은 계획을 폐기할 것이다." }] },

  { word:"scratch", pron:"스크래치", pos:"v", level:"B1", meanings:["긁다","긁어서 내다"],
    syn:["claw at","rub with nails","make a mark by rubbing"],
    ex:[{ s:"Do not {{}} the fresh paint.", f:"scratch", ko:"갓 칠한 페인트를 긁지 마라." }] },

  /* 승격 ㉕ — 사전 단일값 유지(filter, F). 구·표현이라 예문은 두지 않는다. */
  { word:"screen out", pron:"스크린 아웃", pos:"phr", level:"B2", meanings:["걸러 내어 막다"],
    syn:["filter","sift out","block by sorting"] },

  /* ★ 원본은 '몰래 살짝 보다' 였다 — peek 의 뜻이 끼어든 것이라 고쳤다. */
  { word:"scribble", pron:"스크리블", pos:"v", level:"C1", meanings:["갈겨쓰다","낙서하다"],
    syn:["scrawl","write in a hurry","jot down roughly"],
    ex:[{ s:"He began to {{}} notes in the margin.", f:"scribble", ko:"그는 여백에 메모를 갈겨쓰기 시작했다." }] },

  { word:"scrub", pron:"스크럽", pos:"v", level:"B2", meanings:["북북 문지르다"],
    syn:["rub hard","clean by rubbing","scour with a brush"],
    ex:[{ s:"She had to {{}} the kitchen floor.", f:"scrub", ko:"그녀는 주방 바닥을 북북 문질러야 했다." }] },

  { word:"scrutinize", pron:"스크루터나이즈", pos:"v", level:"C2", meanings:["세심히 살피다"],
    syn:["inspect","examine closely","look at in fine detail"],
    ex:[{ s:"The board will {{}} every figure.", f:"scrutinize", ko:"이사회는 모든 수치를 세심히 살필 것이다." }] },

  /* scrutinize(v) 와 품사로 갈린다. */
  { word:"scrutiny", pron:"스크루터니", pos:"n", level:"C2", meanings:["자세한 조사"],
    syn:["close look","careful check","close examination"],
    ex:[{ s:"The report came under close {{}}.", f:"scrutiny", ko:"그 보고서는 자세한 조사를 받았다." }] },

  { word:"seal", pron:"실", pos:"v", level:"B2", meanings:["봉인하다"],
    syn:["close tight","fasten shut","shut with wax"],
    ex:[{ s:"Please {{}} the envelope before posting.", f:"seal", ko:"보내기 전에 봉투를 봉인해 주세요." }] },

  { word:"seaport", pron:"시포트", pos:"n", level:"B2", meanings:["항구 도시"],
    syn:["port city","town with a harbor","coastal trading town"],
    ex:[{ s:"Busan is a busy {{}}.", f:"seaport", ko:"부산은 분주한 항구 도시다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"search for", pron:"서치 포", pos:"phr", level:"B1", meanings:["~을 찾다"],
    syn:["look for","hunt for","try to find"] },

  { word:"season", pron:"시즌", pos:"v", level:"B2", meanings:["양념하다"],
    syn:["add salt and spice","flavor with spice","give taste to"],
    ex:[{ s:"Remember to {{}} the soup lightly.", f:"season", ko:"수프에 가볍게 양념하는 것을 잊지 마라." }] },

  /* 원본의 '양념을 한' 은 바로 위 season 과 같은 자리라 버렸다. */
  { word:"seasoned", pron:"시즌드", pos:"adj", level:"C1", meanings:["경험이 많은","노련한"],
    syn:["experienced","veteran","long in practice"],
    ex:[{ s:"She is a {{}} teacher of twenty years.", f:"seasoned", ko:"그녀는 이십 년 경력의 경험이 많은 교사다." }] },

  /* isolate(고립시키다, 격리하다 · I) 와 앞뒤만 다르게 두어 자동 배제시켰다.
     원본의 '분리하다' 는 segregate·separate 자리라 버렸다. */
  { word:"seclude", pron:"시클루드", pos:"v", level:"C2", meanings:["격리하다","고립시키다"],
    syn:["isolate","shut away","keep apart from others"],
    ex:[{ s:"The monks {{}} themselves from the world.", f:"seclude", ko:"그 수도자들은 세상에서 스스로를 격리한다." }] },

  /* ── 챕터 4 ────────────────────────────────────── */
  /* '부분' 자리가 셋이나 몰린 챕터다. 이렇게 갈랐다.
       section 부분, 구역     ← 사전값. 참조 compartment(C)·department(D)
       sector  분야, 부문     ← 사전값. '구역' 은 section 에 넘겼다
       segment 부분, 한 조각   ← 첫 갈래를 section 과 맞춰 자동 배제시켰다
     segment 는 참조가 없어 원본의 뜻을 살릴 수 있었다. 첫 갈래 '부분' 이
     section 과 글자가 같으므로 둘은 같은 문제에 나란히 뜨지 않는다.

     ★ section 은 원본이 '절단; 단면; 구분' 으로 세 갈래였다. 참조 둘이 모두
     '칸·부서' 쪽이라 사전값 '부분, 구역' 으로 바로잡았다.

     secure 는 사전이 '확보하다; 안전한' 으로 동사와 형용사가 섞여 있었다.
     참조 bind(B)·dangle(D) 이 둘 다 동사여서 동사 '확보하다' 만 남겼다 —
     '안전한' 은 챕터 1 의 safe 가 맡는다. */

  { word:"seclusion", pron:"시클루전", pos:"n", level:"C2", meanings:["호젓함","외딴 곳"],
    syn:["privacy away from all","quiet spot far off","state of being shut away"],
    ex:[{ s:"They live in complete {{}} on the hill.", f:"seclusion", ko:"그들은 언덕에서 완전히 호젓하게 산다." }] },

  { word:"second-hand", pron:"세컨드 핸드", pos:"adj", level:"B2", meanings:["중고의"],
    syn:["used","pre-owned","not new"], ant:["brand-new"],
    ex:[{ s:"He bought a {{}} bicycle.", f:"second-hand", ko:"그는 중고 자전거를 샀다." }] },

  /* 원본은 '비서; 서기; 장관' 세 갈래였다. 둘로 줄이고 '비서' 를 앞세웠다. */
  { word:"secretary", pron:"세크러테리", pos:"n", level:"B1", meanings:["비서","장관"],
    syn:["office assistant","one who keeps records","head of a department"],
    ex:[{ s:"The {{}} booked the meeting room.", f:"secretary", ko:"그 비서가 회의실을 예약했다." }] },

  /* 원본의 '숨김, 은닉' 은 버렸다 — secrecy 자리다. */
  { word:"secretion", pron:"시크리션", pos:"n", level:"C1", meanings:["분비","분비물"],
    syn:["fluid given off","discharge from a gland","oozing out"],
    ex:[{ s:"The gland controls this {{}}.", f:"secretion", ko:"그 샘이 이 분비를 조절한다." }] },

  /* 승격 ㉖ — ★ 원본 '절단; 단면; 구분' 을 사전값 '부분, 구역' 으로 바로잡았다.
     사전 글자를 그대로 지켰으므로 참조 compartment(C)·department(D) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"section", pron:"섹션", pos:"n", level:"B1", meanings:["부분","구역"],
    syn:["compartment","department","part cut off"],
    ex:[{ s:"Read the last {{}} of the report.", f:"section", ko:"보고서의 마지막 부분을 읽어라." }] },

  /* 승격 ㉗ — 사전 글자 유지. 참조는 없다. '구역' 은 section 에 넘겼다. */
  { word:"sector", pron:"섹터", pos:"n", level:"B2", meanings:["분야","부문"],
    syn:["field of work","branch of industry","part of the economy"],
    ex:[{ s:"The public {{}} added many jobs.", f:"sector", ko:"공공 분야가 많은 일자리를 늘렸다." }] },

  /* 원본의 둘째 갈래는 뜻이 아니라 설명이라 버렸다. ant 는 챕터 1 의 sacred 다. */
  { word:"secular", pron:"세큘러", pos:"adj", level:"C2", meanings:["세속적인"],
    syn:["worldly","not religious","of this world"], ant:["sacred"],
    ex:[{ s:"The school follows a {{}} calendar.", f:"secular", ko:"그 학교는 세속적인 일정을 따른다." }] },

  /* 승격 ㉘ — 사전은 '확보하다; 안전한' 이었다. 참조 bind(B)·dangle(D) 이 둘 다
     동사여서 동사 한 갈래로 좁혔다. 그 두 곳의 설명이 '확보하다; 안전한' 에서
     '확보하다' 로 짧아진다. */
  { word:"secure", pron:"시큐어", pos:"v", level:"B2", meanings:["확보하다"],
    syn:["bind","get hold of","make sure of"],
    ex:[{ s:"She managed to {{}} a seat at the front.", f:"secure", ko:"그녀는 앞자리를 확보해 냈다." }] },

  { word:"seduce", pron:"시듀스", pos:"v", level:"C1", meanings:["부추기다","유혹하다"],
    syn:["tempt","lure","win over by charm"],
    ex:[{ s:"Cheap prices {{}} shoppers into buying more.", f:"seduce", ko:"싼 값이 손님들을 더 사도록 부추긴다." }] },

  /* 승격 ㉙ — 사전 글자를 그대로 지켰다. 참조가 다섯 곳(apply for·aspire·
     come across·compete for·go after) 인데 하나도 바뀌지 않는다. */
  { word:"seek", pron:"시크", pos:"v", level:"B1", meanings:["찾다","추구하다"],
    syn:["look for","go after","try to get"],
    ex:[{ s:"Many young people {{}} work in the city.", f:"seek", ko:"많은 젊은이가 도시에서 일자리를 찾는다." }] },

  { word:"seemingly", pron:"시밍리", pos:"adv", level:"B2", meanings:["겉보기에는"],
    syn:["apparently","on the face of it","to all appearances"],
    ex:[{ s:"The task was {{}} simple.", f:"seemingly", ko:"그 일은 겉보기에는 단순했다." }] },

  /* 승격 ㉚ — 사전은 '구분, 부분' 이었다. 참조가 없어 원본대로 '부분, 한 조각'
     으로 두었다. 첫 갈래 '부분' 이 section 과 글자가 같아 자동 배제된다. */
  { word:"segment", pron:"세그먼트", pos:"n", level:"B2", meanings:["부분","한 조각"],
    syn:["part cut from a whole","slice","one division"],
    ex:[{ s:"Cut the orange into each {{}}.", f:"segment", ko:"오렌지를 한 조각씩 자르라." }] },

  /* 승격 ㉛ — 사전 단일값 유지. 참조 isolate(I) 의 화면은 바뀌지 않는다. */
  { word:"segregate", pron:"세그러게이트", pos:"v", level:"C1", meanings:["따로 떼어 놓다"],
    syn:["isolate","set apart by group","keep races or sexes apart"],
    ex:[{ s:"The old law used to {{}} students by sex.", f:"segregate", ko:"그 낡은 법은 학생을 성별로 따로 떼어 놓았다." }] },

  /* 승격 ㉜ — 사전 글자 유지. 참조 assimilation(A) 의 화면은 바뀌지 않는다. */
  { word:"segregation", pron:"세그리게이션", pos:"n", level:"C1", meanings:["분리","격리"],
    syn:["keeping groups apart","forced separation","division by race"], ant:["assimilation"],
    ex:[{ s:"The city ended school {{}} in the sixties.", f:"segregation", ko:"그 도시는 육십 년대에 학교 분리를 끝냈다." }] },

  /* 승격 ㉝ — 사전의 쌍반점만 쉼표로 갈랐다. 참조 다섯 곳(apprehend·capture·
     commandeer·confiscate·grab) 의 설명이 '붙잡다; 압수하다' 에서
     '붙잡다, 압수하다' 가 된다. */
  { word:"seize", pron:"시즈", pos:"v", level:"B2", meanings:["붙잡다","압수하다"],
    syn:["grab","capture","take by force"],
    ex:[{ s:"Police will {{}} the goods at the border.", f:"seize", ko:"경찰이 국경에서 그 물품을 압수할 것이다." }] },

  { word:"seldom", pron:"셀덤", pos:"adv", level:"B1", meanings:["거의 ~ 않는"],
    syn:["rarely","hardly ever","not often"],
    ex:[{ s:"He {{}} speaks in meetings.", f:"seldom", ko:"그는 회의에서 거의 말하지 않는다." }] },

  /* 승격 ㉞ — 사전 글자 유지. 참조 adoption(A) 의 화면은 바뀌지 않는다. */
  { word:"selection", pron:"실렉션", pos:"n", level:"B1", meanings:["선발","선택"],
    syn:["adoption","act of picking out","choice made"],
    ex:[{ s:"The team announced its final {{}}.", f:"selection", ko:"그 팀은 최종 선발을 발표했다." }] },

  /* 승격 ㉟ — 사전 단일값 유지. 참조 indiscriminate(I) 의 화면은 바뀌지 않는다. */
  { word:"selective", pron:"설렉티브", pos:"adj", level:"B2", meanings:["가려서 하는"],
    syn:["picky","choosing with care","not taking all"], ant:["indiscriminate"],
    ex:[{ s:"The college is highly {{}}.", f:"selective", ko:"그 대학은 매우 가려서 뽑는다." }] },

  { word:"self-appointed", pron:"셀프 어포인티드", pos:"adj", level:"C2", meanings:["자칭의"],
    syn:["self-styled","named by oneself","claiming the role oneself"],
    ex:[{ s:"He is the {{}} leader of the group.", f:"self-appointed", ko:"그는 그 모임의 자칭 지도자다." }] },

  { word:"self-consciousness", pron:"셀프 칸셔스니스", pos:"n", level:"C1", meanings:["자의식"],
    syn:["awareness of oneself","unease at being watched","shyness before others"],
    ex:[{ s:"Her {{}} faded as she spoke.", f:"self-consciousness", ko:"말을 이어가며 그녀의 자의식이 옅어졌다." }] },

  /* ── 챕터 5 ────────────────────────────────────── */
  /* '느낌' 갈래가 넷 몰린 챕터다.
       sensibility 감수성        ← 느낌을 받아들이는 결
       sensitive   느낌이 예민한   ← 사전 단일값
       sensory     감각의        ← 신경으로 오는 쪽
       sentiment   정서, 감상     ← 원본의 '감정' 은 sensibility 와 갈라 버렸다
     sensible(분별 있는, 합리적인) 은 이 넷과 뜻이 아예 다르다 — 철자만 닮았다.
     챕터 1 의 sane(제정신의, 분별 있는) 과는 '분별 있는' 이 글자까지 같아
     서로의 오답에서 자동으로 빠진다.

     ★ sensation 은 원본이 '감동, 대사건' 이었다. 참조 marvel(경이, 놀라운 일)
     과 어긋나므로 사전값 '큰 화제' 를 지켰다.
     sentence 는 사전이 '형벌; 문장' 이었다. 참조가 없어 원본 순서대로
     '문장, 판결' 로 두고 동사 갈래는 버렸다.
     semester(학기) 와 session(회기 · 챕터 6) 을 갈라 두었다. */

  { word:"self-contained", pron:"셀프 컨테인드", pos:"adj", level:"C1", meanings:["자족적인","독립적인"],
    syn:["complete in itself","needing nothing outside","standing alone"],
    ex:[{ s:"Each flat is fully {{}}.", f:"self-contained", ko:"각 세대는 완전히 독립적이다." }] },

  { word:"self-defense", pron:"셀프 디펜스", pos:"n", level:"B2", meanings:["자기 방어"],
    syn:["guarding oneself","protection of one's own body","act of fending off attack"],
    ex:[{ s:"She acted purely in {{}}.", f:"self-defense", ko:"그녀는 순전히 자기 방어로 행동했다." }] },

  { word:"self-employed", pron:"셀프 임플로이드", pos:"adj", level:"B2", meanings:["자영업의"],
    syn:["working for oneself","running one's own trade","not on a payroll"],
    ex:[{ s:"He has been {{}} for ten years.", f:"self-employed", ko:"그는 십 년째 자영업을 해 왔다." }] },

  /* 승격 ㊱ — 사전 단일값 유지. 참조 altruistic(A)·greedy(G) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"selfless", pron:"셀플리스", pos:"adj", level:"C1", meanings:["이타적인"],
    syn:["altruistic","putting others first","free of self-interest"], ant:["greedy"],
    ex:[{ s:"Her {{}} work saved many lives.", f:"selfless", ko:"그녀의 이타적인 활동이 많은 목숨을 살렸다." }] },

  { word:"semester", pron:"시메스터", pos:"n", level:"B1", meanings:["학기"],
    syn:["half of a school year","term of study","one of two school terms"],
    ex:[{ s:"The new {{}} starts in March.", f:"semester", ko:"새 학기는 삼월에 시작한다." }] },

  { word:"semicircle", pron:"세미서클", pos:"n", level:"B2", meanings:["반원"],
    syn:["half circle","half of a round shape","arc of half a turn"],
    ex:[{ s:"The children sat in a {{}}.", f:"semicircle", ko:"아이들이 반원으로 앉았다." }] },

  { word:"senator", pron:"세너터", pos:"n", level:"B2", meanings:["상원 의원"],
    syn:["member of the senate","upper-house lawmaker","elected upper chamber member"],
    ex:[{ s:"The {{}} voted against the bill.", f:"senator", ko:"그 상원 의원은 그 법안에 반대표를 던졌다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"senior citizen", pron:"시니어 시티즌", pos:"phr", level:"B1", meanings:["노인","고령자"],
    syn:["elderly person","one of advanced years","older member of society"] },

  /* 승격 ㊲ — ★ 원본 '감동, 대사건' 은 뜻이 어긋난다. 참조 marvel(M) 과 맞는
     사전값 '큰 화제' 를 지켰다 — 그 한 곳의 화면은 바뀌지 않는다. */
  { word:"sensation", pron:"센세이션", pos:"n", level:"B2", meanings:["큰 화제"],
    syn:["marvel","talk of the town","thing everyone speaks of"],
    ex:[{ s:"Her first novel became a {{}}.", f:"sensation", ko:"그녀의 첫 소설은 큰 화제가 되었다." }] },

  { word:"sensational", pron:"센세이셔널", pos:"adj", level:"B2", meanings:["선풍적인","아주 멋진"],
    syn:["causing a stir","hugely exciting","dazzling to see"],
    ex:[{ s:"The team made a {{}} comeback.", f:"sensational", ko:"그 팀은 선풍적인 역전을 이뤄 냈다." }] },

  /* 원본의 '감정' 은 아래 sentiment 와 갈라 버렸다. */
  { word:"sensibility", pron:"센서빌리티", pos:"n", level:"C1", meanings:["감수성"],
    syn:["fineness of feeling","openness to beauty","delicacy of response"],
    ex:[{ s:"The poem shows a rare {{}}.", f:"sensibility", ko:"그 시는 드문 감수성을 보여 준다." }] },

  /* 승격 ㊳ — 사전 글자를 그대로 지켰다. 참조 absurd(A)·commonsense(C)·
     level-headed(L) 세 곳의 화면은 바뀌지 않는다. 첫 갈래 '분별 있는' 이
     챕터 1 의 sane 과 글자가 같아 서로의 오답에서 자동으로 빠진다. */
  { word:"sensible", pron:"센서블", pos:"adj", level:"B1", meanings:["분별 있는","합리적인"],
    syn:["commonsense","level-headed","showing good judgment"], ant:["absurd"],
    ex:[{ s:"That was a {{}} choice.", f:"sensible", ko:"그것은 분별 있는 선택이었다." }] },

  /* 승격 ㊴ — 사전 단일값 유지. 참조 numb(N) 의 화면은 바뀌지 않는다.
     원본의 '민감한' 은 같은 말이라 사전 표현을 남겼다. */
  { word:"sensitive", pron:"센서티브", pos:"adj", level:"B1", meanings:["느낌이 예민한"],
    syn:["quick to feel","easily affected","responsive to touch"], ant:["numb"],
    ex:[{ s:"His skin is very {{}} to the sun.", f:"sensitive", ko:"그의 피부는 햇볕에 아주 예민하다." }] },

  { word:"sensory", pron:"센서리", pos:"adj", level:"C1", meanings:["감각의"],
    syn:["of the senses","to do with feeling","carried by nerves"],
    ex:[{ s:"The test measures {{}} response.", f:"sensory", ko:"그 검사는 감각의 반응을 잰다." }] },

  { word:"sensual", pron:"센슈얼", pos:"adj", level:"C2", meanings:["관능적인"],
    syn:["pleasing to the body","of bodily pleasure","stirring the senses"],
    ex:[{ s:"The music had a {{}} rhythm.", f:"sensual", ko:"그 음악은 관능적인 가락을 지녔다." }] },

  /* 승격 ㊵ — 사전은 '형벌; 문장' 이었다. 참조가 없어 원본 순서대로 두고
     동사 갈래('선고하다') 는 버렸다 — 화면이 바뀌는 곳은 없다. */
  { word:"sentence", pron:"센턴스", pos:"n", level:"B1", meanings:["문장","판결"],
    syn:["string of words","court ruling","words making a full thought"],
    ex:[{ s:"Write one more {{}} here.", f:"sentence", ko:"여기에 문장 하나를 더 쓰라." }] },

  /* 위 sensibility(감수성) 와 갈랐다 — 원본의 '감정' 은 이 둘이 나눠 가졌다. */
  { word:"sentiment", pron:"센티먼트", pos:"n", level:"C1", meanings:["정서","감상"],
    syn:["feeling held","tender mood","view coloured by feeling"],
    ex:[{ s:"Public {{}} turned against the plan.", f:"sentiment", ko:"대중의 정서가 그 계획에 등을 돌렸다." }] },

  /* 승격 ㊶ — 사전은 '분리하다; 별개의' 로 동사와 형용사가 섞여 있었다. 참조
     여섯 곳이 모두 동사여서 동사로 세웠다. 그 여섯 곳(adjoin·blend·combine·
     detach·diverge·merge) 의 설명이 '분리하다; 별개의' 에서 '분리하다, 나누다'
     가 된다 — 저장소에서 한 낱말이 가진 참조 중 가장 많은 자리다. */
  { word:"separate", pron:"세퍼레이트", pos:"v", level:"B1", meanings:["분리하다","나누다"],
    syn:["detach","diverge","set apart"], ant:["combine","merge"],
    ex:[{ s:"Please {{}} the paper from the plastic.", f:"separate", ko:"종이를 플라스틱에서 분리해 주세요." }] },

  /* 승격 ㊷ — 사전 글자 유지. 참조 combination(C)·division(D) 두 곳의 화면은
     바뀌지 않는다. 챕터 4 의 segregation(분리, 격리) 과 첫 갈래가 같아 자동
     배제된다. */
  { word:"separation", pron:"세퍼레이션", pos:"n", level:"B2", meanings:["분리","분할"],
    syn:["division","act of parting","split into parts"], ant:["combination"],
    ex:[{ s:"The {{}} of the two wings took a week.", f:"separation", ko:"두 날개의 분리에 일주일이 걸렸다." }] },

  /* 승격 ㊸ — 사전 글자 유지. 참조 chronology(C) 의 화면은 바뀌지 않는다. */
  { word:"sequence", pron:"시퀀스", pos:"n", level:"B2", meanings:["연속","순서"],
    syn:["chronology","one after another","set order"],
    ex:[{ s:"Keep the pages in the right {{}}.", f:"sequence", ko:"쪽들을 맞는 순서로 두어라." }] },

  /* ── 챕터 6 ────────────────────────────────────── */
  /* ⚠ 사전값이 아예 틀려서 참조를 손질한 자리가 둘이다.
       embed(E)  syn "set in" → "bed into place"
         사전이 set in 의 뜻을 '끼워 넣다, 박아 넣다' 로 적어 두고 있었다.
         embed 자신의 뜻을 그대로 베낀 것이다. set in 의 실제 뜻은
         '시작되다, 자리 잡다' 라서 그대로 승격할 수 없었다.
       darken(D) syn "shade" → "cast a shadow on"
         shade 는 원본이 명사 쪽이고 사전은 동사가 앞이었다. 명사로 세우면
         동사 목록에 명사가 끼게 되므로 그 자리를 동사 표현으로 갈았다.

     severe(심각한, 엄격한) 는 둘째 갈래를 strict(엄격한 · 챕터 17)·
     stern(엄격한, 단호한 · 챕터 16) 과 글자까지 맞춰 두었다 — 셋이 서로의
     오답에서 자동으로 빠진다.
     shallow(얕은, 피상적인) 도 superficial(피상적인 · 챕터 20) 과 같은 방식이다.
     session(회기, 개정 기간) 은 챕터 5 의 semester(학기) 와 갈랐다. */

  /* 승격 ㊹ — 사전 글자 유지. 참조 contented(C) 의 화면은 바뀌지 않는다.
     '고요한' 은 still(여전히 · 챕터 16) 과 갈라 둔 자리다. */
  { word:"serene", pron:"서린", pos:"adj", level:"C1", meanings:["고요한","평화로운"],
    syn:["contented","calm and untroubled","free of stir"],
    ex:[{ s:"The lake looked {{}} at dawn.", f:"serene", ko:"그 호수는 새벽에 고요해 보였다." }] },

  /* 원본은 '하사관; 경사; 병장' 세 갈래였다. 하나로 줄였다. */
  { word:"sergeant", pron:"사전트", pos:"n", level:"C1", meanings:["하사관"],
    syn:["army officer of low rank","non-commissioned officer","squad leader"],
    ex:[{ s:"The {{}} called the roll.", f:"sergeant", ko:"그 하사관이 점호를 했다." }] },

  { word:"sermon", pron:"서먼", pos:"n", level:"C1", meanings:["설교","잔소리"],
    syn:["church talk","moral lecture","long telling-off"],
    ex:[{ s:"The priest gave a short {{}}.", f:"sermon", ko:"그 사제는 짧은 설교를 했다." }] },

  /* 승격 ㊺ — 사전은 '하인, 종' 이었다. 참조가 없어 원본대로 '하인, 고용인'
     으로 두었다 — 화면이 바뀌는 곳은 없다. */
  { word:"servant", pron:"서번트", pos:"n", level:"B1", meanings:["하인","고용인"],
    syn:["household helper","one who waits on others","hired hand"],
    ex:[{ s:"The old house kept one {{}}.", f:"servant", ko:"그 낡은 집은 하인 한 명을 두었다." }] },

  /* 챕터 5 의 semester(학기) 와 갈랐다 — 원본의 '학기' 는 그쪽 자리다. */
  { word:"session", pron:"세션", pos:"n", level:"B2", meanings:["회기","개정 기간"],
    syn:["sitting of a body","period of meeting","time a court is open"],
    ex:[{ s:"Parliament opens a new {{}} today.", f:"session", ko:"의회는 오늘 새 회기를 연다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"set ~ in motion", pron:"셋 인 모션", pos:"phr", level:"C1", meanings:["~을 움직이게 하다"],
    syn:["start ~ going","get ~ under way","put ~ into action"] },

  /* put aside(제쳐놓다 · P) 와는 다르다 — 이쪽은 자리를 옮겨 두는 쪽이다. */
  { word:"set aside", pron:"셋 어사이드", pos:"phr", level:"B2", meanings:["한쪽으로 치워 두다"],
    syn:["put to one side","keep out of the way","lay by for later"] },

  { word:"set back", pron:"셋 백", pos:"phr", level:"B2", meanings:["방해하다","지연시키다"],
    syn:["hold up","delay the progress of","push behind schedule"] },

  /* 승격 ㊻ — ⚠ 사전값 '끼워 넣다, 박아 넣다' 는 뜻이 아예 달랐다(embed 의 뜻을
     베낀 것이다). 실제 뜻으로 세우고 참조 embed(E) 한 곳을 손질했다. */
  { word:"set in", pron:"셋 인", pos:"phr", level:"B2", meanings:["시작되다","자리 잡다"],
    syn:["begin and stay","take hold","settle in for a while"] },

  /* 승격 ㊼ — 사전 글자 유지. 참조 embark(E) 의 화면은 바뀌지 않는다. */
  { word:"set out", pron:"셋 아웃", pos:"phr", level:"B1", meanings:["출발하다","착수하다"],
    syn:["embark","start a journey","begin a task"] },

  /* 승격 ㊽ — 사전 글자 유지. 참조 context(C)·environment(E) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"setting", pron:"세팅", pos:"n", level:"B2", meanings:["환경","배경"],
    syn:["context","environment","surroundings of a scene"],
    ex:[{ s:"The novel has a rural {{}}.", f:"setting", ko:"그 소설은 시골을 배경으로 한다." }] },

  /* 승격 ㊾ — 사전의 쌍반점만 쉼표로 갈랐다. 참조는 없다. */
  { word:"settle", pron:"세틀", pos:"v", level:"B1", meanings:["정착하다","해결하다"],
    syn:["make one's home","put an end to a dispute","come to rest"],
    ex:[{ s:"They chose to {{}} near the river.", f:"settle", ko:"그들은 강 가까이에 정착하기로 했다." }] },

  /* 승격 ㊿ — 사전의 쌍반점만 쉼표로 갈랐다. 참조 colony(C)·compromise(C)·
     immigration(I) 세 곳의 설명이 '정착지; 합의' 에서 '정착지, 합의' 가 된다. */
  { word:"settlement", pron:"세틀먼트", pos:"n", level:"B2", meanings:["정착지","합의"],
    syn:["colony","compromise","place newly lived in"],
    ex:[{ s:"A small {{}} grew by the port.", f:"settlement", ko:"항구 옆에 작은 정착지가 자랐다." }] },

  { word:"several", pron:"세버럴", pos:"adj", level:"B1", meanings:["몇몇의"],
    syn:["a few","more than two","some in number"],
    ex:[{ s:"{{}} people asked the same question.", f:"Several", ko:"몇몇 사람이 같은 질문을 했다." }] },

  /* 승격 51 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 acute(A)·harsh(H)·
     intense(I) 세 곳의 설명이 '심각한; 엄격한' 에서 '심각한, 엄격한' 이 된다.
     둘째 갈래는 strict(챕터 17)·stern(챕터 16) 과 글자를 맞춰 두었다. */
  { word:"severe", pron:"서비어", pos:"adj", level:"B1", meanings:["심각한","엄격한"],
    syn:["acute","harsh","intense"],
    ex:[{ s:"The region faced a {{}} drought.", f:"severe", ko:"그 지역은 심각한 가뭄을 겪었다." }] },

  { word:"sewage", pron:"수이지", pos:"n", level:"C1", meanings:["하수"],
    syn:["waste water","drain water","dirty water from homes"],
    ex:[{ s:"The plant treats city {{}}.", f:"sewage", ko:"그 시설은 도시 하수를 처리한다." }] },

  { word:"shabby", pron:"섀비", pos:"adj", level:"C1", meanings:["초라한","누추한"],
    syn:["worn and poor","run-down","looking uncared for"],
    ex:[{ s:"He wore a {{}} old coat.", f:"shabby", ko:"그는 초라한 낡은 외투를 입었다." }] },

  /* 승격 52 — 사전은 '그늘지게 하다; 그늘' 로 동사가 앞이었다. 원본이 명사
     쪽이어서 명사로 세우고, 유일한 참조 darken(D) 의 그 자리를 동사 표현
     'cast a shadow on' 으로 갈았다. */
  { word:"shade", pron:"셰이드", pos:"n", level:"B1", meanings:["그늘","빛 가리개"],
    syn:["shelter from sun","screen against light","cool dark spot"],
    ex:[{ s:"We sat in the {{}} of a tree.", f:"shade", ko:"우리는 나무 그늘에 앉았다." }] },

  /* superficial(피상적인 · 챕터 20) 과 둘째 갈래를 글자까지 맞춰 두었다. */
  { word:"shallow", pron:"섈로", pos:"adj", level:"B1", meanings:["얕은","피상적인"],
    syn:["not deep","barely below the top","lacking depth"], ant:["profound"],
    ex:[{ s:"The stream is {{}} here.", f:"shallow", ko:"그 개울은 여기가 얕다." }] },

  /* 승격 53 — 사전 단일값 유지. 참조 impudent(I) 의 화면은 바뀌지 않는다. */
  { word:"shameless", pron:"셰임리스", pos:"adj", level:"C1", meanings:["부끄러움을 모르는"],
    syn:["impudent","without shame","brazen"],
    ex:[{ s:"It was a {{}} lie.", f:"shameless", ko:"그것은 부끄러움을 모르는 거짓말이었다." }] },

  /* ── 챕터 7 ────────────────────────────────────── */
  /* 사전이 두 품사를 쌍반점으로 붙여 놓은 낱말이 몰린 챕터다. 참조의 품사를
     보고 한쪽만 남겼고, 참조 쪽이 버린 갈래를 쓰고 있으면 그 자리를 갈았다.
       shed    흘리다; 헛간     → 흘리다     barn(n) 의 syn 을 farm hut 으로
       shoot   싹; 쏘다        → 쏘다       bud(n) 의 syn 을 young growth 로
       shelter 피난처; 보호하다  → 피난처     harbor(v) 의 syn 을 take in and hide 로
       shield  보호하다; 방패    → 보호하다    insulate(v) 는 그대로 맞는다
       shift   변화; 교대      → 변화, 교대  참조 없음

     ★ share 는 '공유하다' 를 버렸다. 수능에 자주 나오는 뜻이라 아까운 자리지만
     참조 dividend(배당금)·have ~ in common 이 둘 다 명사 쪽이어서, 사전값
     '배당, 몫' 을 지키는 쪽을 골랐다. 참조를 손질하면 두 곳을 건드려야 한다.

     shiver(몸을 떨다) 는 shudder(챕터 16) 와 첫 뜻을 글자까지 맞춰 두었다.
     shipwreck 은 '난파' 만 남겼다 — '난파선' 은 바로 아래 shipwrecked 와
     맞물려 흐려진다. */

  /* 승격 54 — 사전 글자 유지. 참조 dividend(D)·have ~ in common(H) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"share", pron:"셰어", pos:"n", level:"B1", meanings:["배당","몫"],
    syn:["dividend","portion due","part one gets"],
    ex:[{ s:"Each partner takes a {{}} of the profit.", f:"share", ko:"각 동업자가 이익의 몫을 가진다." }] },

  /* 승격 55 — 사전 글자 유지. 참조 acute(A)·blunt(B)·blurry(B) 세 곳의 화면은
     바뀌지 않는다. */
  { word:"sharp", pron:"샤프", pos:"adj", level:"B1", meanings:["날카로운","선명한"],
    syn:["acute","keen-edged","clear in outline"], ant:["blunt","blurry"],
    ex:[{ s:"He drew a {{}} line across the page.", f:"sharp", ko:"그는 쪽 위로 선명한 선을 그었다." }] },

  /* 승격 56 — 사전 글자 유지. 참조 abruptly(A)·dramatically(D) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"sharply", pron:"샤플리", pos:"adv", level:"B2", meanings:["급격히","날카롭게"],
    syn:["abruptly","dramatically","with a keen edge"],
    ex:[{ s:"Prices rose {{}} last month.", f:"sharply", ko:"지난달 값이 급격히 올랐다." }] },

  /* 승격 57 — 사전 단일값 유지. 참조 break(B)·fracture(F) 두 곳의 화면은
     바뀌지 않는다. smash(부수다 · 챕터 10) 와는 '산산이' 로 갈랐다. */
  { word:"shatter", pron:"섀터", pos:"v", level:"B2", meanings:["산산이 부수다"],
    syn:["break","fracture","smash into bits"],
    ex:[{ s:"One stone can {{}} the whole pane.", f:"shatter", ko:"돌 하나가 창유리 전체를 산산이 부술 수 있다." }] },

  /* 승격 58 — 사전 첫 갈래만 남겼다. '헛간' 을 쓰고 있던 barn(B) 의 그 자리를
     'farm hut' 으로 갈았다. 원본의 세 갈래와 괄호도 걷었다. */
  { word:"shed", pron:"셰드", pos:"v", level:"B2", meanings:["흘리다"],
    syn:["let fall","pour out","drop away"],
    ex:[{ s:"She did not {{}} a single tear.", f:"shed", ko:"그녀는 눈물 한 방울도 흘리지 않았다." }] },

  { word:"sheer", pron:"시어", pos:"adj", level:"C1", meanings:["완전한","순전한"],
    syn:["utter","nothing but","pure and simple"],
    ex:[{ s:"It was {{}} luck that saved them.", f:"sheer", ko:"그들을 살린 것은 순전한 운이었다." }] },

  /* 승격 59 — 원본이 [n+v] 였고 사전도 섞여 있었다. 명사로 세우고, 동사 쪽을
     쓰던 harbor(H) 의 그 자리를 'take in and hide' 로 갈았다.
     refuge(피난처 · R) 와 글자가 같아 서로의 오답에서 자동으로 빠진다. */
  { word:"shelter", pron:"셸터", pos:"n", level:"B2", meanings:["피난처"],
    syn:["place of safety","cover from danger","roof over one's head"],
    ex:[{ s:"They ran to a {{}} when the storm hit.", f:"shelter", ko:"폭풍이 닥치자 그들은 피난처로 달려갔다." }] },

  /* 승격 60 — 사전 첫 갈래만 남겼다. 참조 insulate(I) 가 동사라 그대로 맞는다.
     protect(보호하다) 와 글자가 같아 서로의 오답에서 자동으로 빠진다 —
     그래서 protect 를 syn 에 넣지 않았다(설명이 똑같아지기 때문이다).
     defend(D) 의 syn 에서 이 낱말을 뺀 것은 챕터 2 에서 미리 해 두었다. */
  { word:"shield", pron:"실드", pos:"v", level:"B2", meanings:["보호하다"],
    syn:["keep from harm","screen from danger","guard with a cover"],
    ex:[{ s:"A thick wall will {{}} the house from noise.", f:"shield", ko:"두꺼운 벽이 그 집을 소음에서 보호할 것이다." }] },

  /* 승격 61 — 사전의 쌍반점만 쉼표로 갈랐다. 참조는 없다. */
  { word:"shift", pron:"시프트", pos:"n", level:"B2", meanings:["변화","교대"],
    syn:["change of position","turn of duty","move to another state"],
    ex:[{ s:"There was a clear {{}} in opinion.", f:"shift", ko:"여론에 뚜렷한 변화가 있었다." }] },

  /* '난파선' 은 아래 shipwrecked 와 맞물려 버렸다. */
  { word:"shipwreck", pron:"십렉", pos:"n", level:"B2", meanings:["난파"],
    syn:["loss of a ship at sea","sinking of a vessel","wreck on the rocks"],
    ex:[{ s:"The {{}} killed most of the crew.", f:"shipwreck", ko:"그 난파로 선원 대부분이 죽었다." }] },

  { word:"shipwrecked", pron:"십렉트", pos:"adj", level:"C1", meanings:["난파된"],
    syn:["stranded after a sinking","cast ashore from a wreck","left adrift at sea"],
    ex:[{ s:"The {{}} sailors waited for help.", f:"shipwrecked", ko:"난파된 선원들이 도움을 기다렸다." }] },

  /* shudder(챕터 16) 와 첫 뜻을 글자까지 맞춰 서로 배제되게 두었다. */
  { word:"shiver", pron:"시버", pos:"v", level:"B2", meanings:["몸을 떨다"],
    syn:["tremble","quiver","shake with cold"],
    ex:[{ s:"The children began to {{}} in the wind.", f:"shiver", ko:"아이들이 바람 속에서 몸을 떨기 시작했다." }] },

  /* 승격 62 — 사전 둘째 갈래만 남겼다. '싹' 을 쓰고 있던 bud(B) 의 그 자리를
     'young growth' 로 갈았다. 원본의 '촬영하다' 도 버렸다. */
  { word:"shoot", pron:"슈트", pos:"v", level:"B1", meanings:["쏘다"],
    syn:["fire a weapon","let fly an arrow","send a bullet"],
    ex:[{ s:"Do not {{}} until you see the mark.", f:"shoot", ko:"표적이 보일 때까지 쏘지 마라." }] },

  /* 승격 63 — 사전 글자 유지. 참조 bank(B) 의 화면은 바뀌지 않는다. */
  { word:"shore", pron:"쇼", pos:"n", level:"B1", meanings:["해안","기슭"],
    syn:["bank","edge of the sea","land by the water"],
    ex:[{ s:"They walked along the rocky {{}}.", f:"shore", ko:"그들은 바위 많은 해안을 따라 걸었다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"short of breath", pron:"쇼트 오브 브레스", pos:"phr", level:"B2", meanings:["숨이 찬"],
    syn:["panting hard","out of puff","unable to breathe easily"] },

  /* 승격 64 — 사전 글자 유지. 참조 네 곳(capacity·deficiency·excess·lack) 의
     화면은 바뀌지 않는다. */
  { word:"shortage", pron:"쇼티지", pos:"n", level:"B1", meanings:["부족","품귀"],
    syn:["deficiency","lack","too little to go round"], ant:["excess"],
    ex:[{ s:"The city faced a water {{}}.", f:"shortage", ko:"그 도시는 물 부족을 겪었다." }] },

  /* 승격 65 — 사전 글자 유지. 참조 fault(F) 의 화면은 바뀌지 않는다.
     원본의 '결핍' 은 위 shortage 자리라 버렸다. */
  { word:"shortcoming", pron:"숏커밍", pos:"n", level:"B2", meanings:["단점","결점"],
    syn:["fault","weak point","failing in something"],
    ex:[{ s:"Every plan has one {{}}.", f:"shortcoming", ko:"어떤 계획에나 단점 하나는 있다." }] },

  { word:"shorthand", pron:"숏핸드", pos:"n", level:"C2", meanings:["속기"],
    syn:["quick writing system","note-taking in signs","stenography"],
    ex:[{ s:"She took the notes in {{}}.", f:"shorthand", ko:"그녀는 속기로 기록을 받아 적었다." }] },

  { word:"short-sighted", pron:"숏 사이티드", pos:"adj", level:"C1", meanings:["근시안적인"],
    syn:["lacking foresight","seeing only the near","thinking no further ahead"],
    ex:[{ s:"Cutting research is a {{}} move.", f:"short-sighted", ko:"연구를 줄이는 것은 근시안적인 조치다." }] },

  { word:"shoulder", pron:"숄더", pos:"v", level:"C1", meanings:["떠맡다"],
    syn:["take on a burden","bear the weight of","accept as one's own load"],
    ex:[{ s:"She had to {{}} the blame alone.", f:"shoulder", ko:"그녀는 혼자 그 책임을 떠맡아야 했다." }] },

  /* ── 챕터 8 ────────────────────────────────────── */
  /* 승격 아홉 개가 모두 사전 글자를 그대로 쓴다 — 참조 열두 곳 가운데 화면이
     바뀌는 곳이 하나도 없는 챕터다(simplify 만 사전 '간소화하다' 에서 원본
     '단순화하다' 로 갔는데 참조가 없다).

     같은 뿌리끼리 갈라 둔 자리가 셋이다.
       shiver(챕터 7) ↔ shudder   첫 뜻 '몸을 떨다' 를 글자까지 맞췄다
       sign up ↔ sign up for     앞은 '신청하다, 가입하다', 뒤는 '~을 신청해 넣다'
       simultaneous(동시의) ↔ simultaneously(동시에)   품사로 갈린다
     sign up 의 '등록하다' 는 register(R)·enroll(E) 자리라 쓰지 않았다.
     shut off 의 원본 '멈추다, 서다' 는 stall 자리라 버렸다.
     simulate 는 '비슷한 것을 만들다' 를 버리고 사전값을 지켰다 — 참조
     feign(~인 체하다) 이 '꾸미다' 쪽이다. */

  /* 원본의 명사 갈래('소나기') 는 버렸다. */
  { word:"shower", pron:"샤워", pos:"v", level:"B2", meanings:["퍼붓다","쏟아 붓다"],
    syn:["rain down on","pour in plenty","heap upon"],
    ex:[{ s:"Fans began to {{}} her with gifts.", f:"shower", ko:"팬들이 그녀에게 선물을 퍼붓기 시작했다." }] },

  /* 승격 66 — 사전 글자 유지. 참조 네 곳(diminish·dwindle·enlarge·grow) 의
     화면은 바뀌지 않는다. */
  { word:"shrink", pron:"슈링크", pos:"v", level:"B1", meanings:["줄어들다","수축하다"],
    syn:["diminish","dwindle","get smaller"], ant:["enlarge","grow"],
    ex:[{ s:"Wool will {{}} in hot water.", f:"shrink", ko:"양털은 뜨거운 물에서 줄어든다." }] },

  /* 원본이 [v+n] 이었다. 동사로 세웠다. */
  { word:"shrug", pron:"슈러그", pos:"v", level:"B2", meanings:["어깨를 으쓱하다"],
    syn:["raise the shoulders","show one does not care","lift and drop the shoulders"],
    ex:[{ s:"He could only {{}} at the question.", f:"shrug", ko:"그는 그 질문에 어깨를 으쓱할 수밖에 없었다." }] },

  /* 챕터 7 의 shiver 와 첫 뜻을 글자까지 맞춰 서로 배제되게 두었다. */
  { word:"shudder", pron:"셔더", pos:"v", level:"C1", meanings:["몸을 떨다","몸서리치다"],
    syn:["shake with horror","tremble all over","quake in dread"],
    ex:[{ s:"She began to {{}} at the thought.", f:"shudder", ko:"그녀는 그 생각에 몸서리치기 시작했다." }] },

  /* 원본의 '멈추다, 서다' 는 stall 자리라 버렸다. 구·표현이라 예문은 두지 않는다. */
  { word:"shut off", pron:"셧 오프", pos:"phr", level:"B2", meanings:["차단하다","끊다"],
    syn:["cut the supply of","turn off at the source","block the flow of"] },

  /* 승격 67 — 사전 단일값 유지. 참조 commute(C) 의 화면은 바뀌지 않는다.
     원본의 명사 갈래('왕복 운행') 는 버렸다. */
  { word:"shuttle", pron:"셔틀", pos:"v", level:"B2", meanings:["왕복하다"],
    syn:["commute","go back and forth","run to and fro"],
    ex:[{ s:"Buses {{}} between the two terminals.", f:"shuttle", ko:"버스가 두 터미널 사이를 왕복한다." }] },

  { word:"sibling", pron:"시블링", pos:"n", level:"B2", meanings:["형제자매"],
    syn:["brother or sister","child of the same parents","one's own kin"],
    ex:[{ s:"She has one younger {{}}.", f:"sibling", ko:"그녀는 어린 형제자매가 한 명 있다." }] },

  /* 승격 68 — 사전 단일값 유지. 참조 by-product(B) 의 화면은 바뀌지 않는다.
     구·표현이라 예문은 두지 않는다. */
  { word:"side effect", pron:"사이드 이펙트", pos:"phr", level:"B1", meanings:["부작용"],
    syn:["by-product","unwanted result","effect not aimed at"] },

  { word:"siege", pron:"시지", pos:"n", level:"C2", meanings:["포위 공격"],
    syn:["surrounding of a town","blockade of a fort","long attack from outside"],
    ex:[{ s:"The city survived a long {{}}.", f:"siege", ko:"그 도시는 긴 포위 공격을 견뎌 냈다." }] },

  /* 승격 69 — 사전 글자 유지. 참조 enroll(E) 의 화면은 바뀌지 않는다.
     '등록하다' 는 register(R)·enroll(E) 자리라 쓰지 않았다. */
  { word:"sign up", pron:"사인 업", pos:"phr", level:"B1", meanings:["신청하다","가입하다"],
    syn:["enroll","put one's name down","join by writing in"] },

  /* 위 sign up 과 겹치지 않게 '~을' 을 받는 쪽으로 다듬었다. */
  { word:"sign up for", pron:"사인 업 포", pos:"phr", level:"B1", meanings:["~을 신청해 넣다"],
    syn:["put one's name down for","take out a place in","commit oneself to"] },

  /* 원본의 외래어 '사인' 은 걷었다. */
  { word:"signature", pron:"시그너처", pos:"n", level:"B2", meanings:["서명","특징"],
    syn:["one's written name","mark of one's own","hand-written name"],
    ex:[{ s:"Put your {{}} at the bottom.", f:"signature", ko:"아래쪽에 서명을 하세요." }] },

  /* 승격 70 — 사전 글자 유지. 참조 considerable(C)·meaningless(M) 두 곳의
     화면은 바뀌지 않는다. 챕터 1 의 salient 가 '중요한' 을 이 낱말에 넘겼다. */
  { word:"significant", pron:"시그니피컨트", pos:"adj", level:"B1", meanings:["중요한","상당한"],
    syn:["considerable","weighty in effect","far from small"], ant:["meaningless"],
    ex:[{ s:"The study found a {{}} change.", f:"significant", ko:"그 연구는 중요한 변화를 찾아냈다." }] },

  /* 외래어 '실루엣' 은 걷었다. */
  { word:"silhouette", pron:"실루엣", pos:"n", level:"C1", meanings:["검은 윤곽","그림자"],
    syn:["dark outline","shape against the light","black profile"],
    ex:[{ s:"We saw the {{}} of a tower.", f:"silhouette", ko:"우리는 탑의 검은 윤곽을 보았다." }] },

  /* 승격 71 — 사전 글자 유지. 참조 affinity(A)·commonality(C)·contrast(C)
     세 곳의 화면은 바뀌지 않는다. */
  { word:"similarity", pron:"시멀래러티", pos:"n", level:"B1", meanings:["유사함","닮은 점"],
    syn:["affinity","commonality","likeness between two"], ant:["contrast"],
    ex:[{ s:"There is a clear {{}} between them.", f:"similarity", ko:"그들 사이에는 뚜렷한 닮은 점이 있다." }] },

  /* 원본은 '단순함; 소박함; 평이함' 세 갈래였다. 둘로 줄였다. */
  { word:"simplicity", pron:"심플리시티", pos:"n", level:"B2", meanings:["단순함","소박함"],
    syn:["plainness","freedom from fuss","lack of frills"],
    ex:[{ s:"The design wins for its {{}}.", f:"simplicity", ko:"그 설계는 단순함으로 좋은 평을 받는다." }] },

  /* 승격 72 — 사전은 '간소화하다' 였다. 참조가 없어 원본대로 '단순화하다' 로
     두었다 — 화면이 바뀌는 곳은 없다. */
  { word:"simplify", pron:"심플리파이", pos:"v", level:"B2", meanings:["단순화하다"],
    syn:["make plain","cut out the hard parts","reduce to basics"],
    ex:[{ s:"We must {{}} the form.", f:"simplify", ko:"우리는 그 서식을 단순화해야 한다." }] },

  /* 승격 73 — 사전 단일값 유지. 참조 feign(F) 의 화면은 바뀌지 않는다.
     원본의 '비슷한 것을 만들다' 는 버렸다 — feign 이 '꾸미다' 쪽이다. */
  { word:"simulate", pron:"시뮬레이트", pos:"v", level:"C1", meanings:["그런 양 꾸미다"],
    syn:["feign","put on an act of","pretend to have"],
    ex:[{ s:"He tried to {{}} surprise.", f:"simulate", ko:"그는 놀란 양 꾸미려 했다." }] },

  { word:"simultaneous", pron:"사이멀테이니어스", pos:"adj", level:"C1", meanings:["동시의"],
    syn:["happening together","side by side in time","going on at once"],
    ex:[{ s:"The hall offers {{}} translation.", f:"simultaneous", ko:"그 회관은 동시 통역을 제공한다." }] },

  /* 승격 74 — 사전 단일값 유지. 참조는 없다. 위 simultaneous 와 품사로 갈린다. */
  { word:"simultaneously", pron:"사이멀테이니어슬리", pos:"adv", level:"C1", meanings:["동시에"],
    syn:["at one and the same time","together in time","in the same moment"],
    ex:[{ s:"Both lamps went out {{}}.", f:"simultaneously", ko:"두 등이 동시에 꺼졌다." }] },

  /* ── 챕터 9 ────────────────────────────────────── */
  /* 승격 열둘 가운데 열하나가 사전 글자를 그대로 쓴다. 바뀌는 곳은 한 곳이다.
       slaughter  학살; 도살 → 학살, 도살   bloodshed(B) 의 쌍반점만 갈랐다

     ★ skepticism 은 원본이 '회의론, 무신론' 이었다. '무신론' 은 atheism 의
     뜻이라 사전값 '회의주의' 를 지켰다.

     skim 은 챕터 2 의 scan 과 '훑어보다' 를 글자까지 맞춰 두었다. 그래서
     skim 의 syn 에 scan 을 넣지 않았다 — 설명이 똑같은 선택지가 둘이 되기
     때문이다. browse(B) 의 syn 에서 scan 을 떼고 skim 을 남겨 둔 것도
     같은 이유다(챕터 2 에서 미리 해 두었다).

     '마른' 자리를 셋으로 갈랐다.
       skinny  깡마른              ← 사전 단일값. ant chubby·plump
       slender 날씬한, 가느다란      ← 원본 '호리호리한' 쪽
       slim    가느다란 (챕터 10)   ← slender 의 둘째 갈래와 글자를 맞췄다
     skyrocket(급등하다) 은 soar(급상승하다, 높이 날다 · 챕터 11) 와 갈랐다. */

  { word:"sin", pron:"신", pos:"n", level:"B2", meanings:["죄","죄악"],
    syn:["wrongdoing against god","moral fault","breach of divine law"],
    ex:[{ s:"He confessed his {{}} to the priest.", f:"sin", ko:"그는 사제에게 자신의 죄를 고백했다." }] },

  /* 승격 75 — 사전 글자 유지. 참조 earnest(E)·heartfelt(H)·hypocritical(H)
     세 곳의 화면은 바뀌지 않는다. */
  { word:"sincere", pron:"신시어", pos:"adj", level:"B1", meanings:["진심의","진실한"],
    syn:["earnest","heartfelt","meant truly"], ant:["hypocritical"],
    ex:[{ s:"She gave a {{}} apology.", f:"sincere", ko:"그녀는 진심의 사과를 했다." }] },

  /* 승격 76 — 사전 글자 유지. 참조 discriminate(D) 의 화면은 바뀌지 않는다.
     구·표현이라 예문은 두지 않는다. */
  { word:"single out", pron:"싱글 아웃", pos:"phr", level:"B2", meanings:["골라내다","지목하다"],
    syn:["discriminate","pick out from the rest","point to just one"] },

  /* 승격 77 — 사전 단일값 유지. 참조 ominous(O) 의 화면은 바뀌지 않는다. */
  { word:"sinister", pron:"시니스터", pos:"adj", level:"C2", meanings:["음험한"],
    syn:["ominous","hinting at evil","dark in intent"],
    ex:[{ s:"There was a {{}} tone in his voice.", f:"sinister", ko:"그의 목소리에 음험한 기색이 있었다." }] },

  /* 승격 78 — 사전 글자 유지. 참조 descend(D) 의 화면은 바뀌지 않는다. */
  { word:"sink", pron:"싱크", pos:"v", level:"B1", meanings:["가라앉다","침몰하다"],
    syn:["descend","go under water","drop below the surface"], ant:["float"],
    ex:[{ s:"The boat began to {{}} slowly.", f:"sink", ko:"그 배가 천천히 가라앉기 시작했다." }] },

  /* 승격 79 — 사전 글자 유지. 참조 location(L) 의 화면은 바뀌지 않는다.
     원본은 네 갈래였다. 둘로 줄였다. */
  { word:"site", pron:"사이트", pos:"n", level:"B1", meanings:["부지","장소"],
    syn:["location","plot of ground","spot for building"],
    ex:[{ s:"They chose a flat {{}} for the school.", f:"site", ko:"그들은 학교 부지로 평평한 곳을 골랐다." }] },

  { word:"situate", pron:"시추에이트", pos:"v", level:"C1", meanings:["두다","위치시키다"],
    syn:["place in position","set in a spot","fix the place of"],
    ex:[{ s:"They will {{}} the office near the station.", f:"situate", ko:"그들은 사무실을 역 가까이에 둘 것이다." }] },

  /* 승격 80 — 사전 단일값 유지. 참조 cynical(C) 의 화면은 바뀌지 않는다. */
  { word:"skeptical", pron:"스켑티컬", pos:"adj", level:"B2", meanings:["회의적인"],
    syn:["cynical","slow to believe","full of doubt"],
    ex:[{ s:"Most experts remain {{}} about the claim.", f:"skeptical", ko:"대부분의 전문가는 그 주장에 회의적이다." }] },

  /* 승격 81 — ★ 원본 '회의론, 무신론' 에서 '무신론' 은 atheism 의 뜻이다.
     사전 단일값 '회의주의' 를 지켰다 — 참조 cynicism(C)·doubt(D) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"skepticism", pron:"스켑티시즘", pos:"n", level:"C1", meanings:["회의주의"],
    syn:["cynicism","doubt","habit of not believing"],
    ex:[{ s:"His {{}} slowed the project.", f:"skepticism", ko:"그의 회의주의가 그 사업을 늦췄다." }] },

  /* 승격 82 — 사전 단일값 유지. 참조 browse(B) 의 화면은 바뀌지 않는다.
     챕터 2 의 scan 과 글자를 맞춰 두었으므로 syn 에 scan 을 넣지 않았다. */
  { word:"skim", pron:"스킴", pos:"v", level:"B2", meanings:["훑어보다"],
    syn:["browse","read fast for the gist","glide over the text"],
    ex:[{ s:"I only had time to {{}} the report.", f:"skim", ko:"나는 그 보고서를 훑어볼 시간밖에 없었다." }] },

  /* 승격 83 — 사전 단일값 유지. 참조 chubby(C)·plump(P) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"skinny", pron:"스키니", pos:"adj", level:"B2", meanings:["깡마른"],
    syn:["very thin","bony","all skin and bone"], ant:["chubby","plump"],
    ex:[{ s:"The stray dog was {{}} and weak.", f:"skinny", ko:"그 들개는 깡마르고 약했다." }] },

  /* 승격 84 — 사전 단일값 유지. 참조 leave out(L) 의 화면은 바뀌지 않는다. */
  { word:"skip", pron:"스킵", pos:"v", level:"B1", meanings:["건너뛰다"],
    syn:["leave out","pass over","miss on purpose"],
    ex:[{ s:"You may {{}} the first chapter.", f:"skip", ko:"첫 장은 건너뛰어도 된다." }] },

  /* soar(급상승하다, 높이 날다 · 챕터 11) 와 갈랐다 — 이쪽은 값이 뛰는 쪽이다. */
  { word:"skyrocket", pron:"스카이라킷", pos:"v", level:"C1", meanings:["급등하다"],
    syn:["shoot up fast","rise steeply","climb at great speed"],
    ex:[{ s:"House prices began to {{}}.", f:"skyrocket", ko:"집값이 급등하기 시작했다." }] },

  { word:"skyscraper", pron:"스카이스크레이퍼", pos:"n", level:"B2", meanings:["고층 건물"],
    syn:["very tall building","high-rise tower","building of many floors"],
    ex:[{ s:"A new {{}} rose beside the river.", f:"skyscraper", ko:"강 옆에 새 고층 건물이 올라갔다." }] },

  { word:"slam", pron:"슬램", pos:"v", level:"B2", meanings:["쾅 닫다"],
    syn:["shut with a bang","close hard","bang shut"],
    ex:[{ s:"Do not {{}} the door.", f:"slam", ko:"문을 쾅 닫지 마라." }] },

  { word:"slap", pron:"슬랩", pos:"v", level:"B2", meanings:["찰싹 때리다"],
    syn:["strike with the palm","smack","hit flat-handed"],
    ex:[{ s:"She wanted to {{}} him on the arm.", f:"slap", ko:"그녀는 그의 팔을 찰싹 때리고 싶었다." }] },

  /* 승격 85 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 bloodshed(B) 한 곳의 설명이
     '학살; 도살' 에서 '학살, 도살' 이 된다. 원본의 동사 갈래는 버렸다. */
  { word:"slaughter", pron:"슬로터", pos:"n", level:"C1", meanings:["학살","도살"],
    syn:["bloodshed","mass killing","butchery of animals"],
    ex:[{ s:"The village remembered the {{}}.", f:"slaughter", ko:"그 마을은 그 학살을 기억했다." }] },

  /* slim(가느다란 · 챕터 10) 과 둘째 갈래를 글자까지 맞춰 두었다. */
  { word:"slender", pron:"슬렌더", pos:"adj", level:"B2", meanings:["날씬한","가느다란"],
    syn:["slim in build","gracefully thin","narrow in shape"],
    ex:[{ s:"She has long {{}} fingers.", f:"slender", ko:"그녀는 길고 가느다란 손가락을 지녔다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"slide into", pron:"슬라이드 인투", pos:"phr", level:"B2", meanings:["~에 미끄러져 들어가다"],
    syn:["slip into","glide into","ease into without notice"] },

  /* 승격 86 — 사전 글자 유지. 참조 by far(B) 의 화면은 바뀌지 않는다. */
  { word:"slightly", pron:"슬라이틀리", pos:"adv", level:"B1", meanings:["약간","조금"],
    syn:["a little","to a small degree","just a bit"], ant:["by far"],
    ex:[{ s:"The room was {{}} warmer today.", f:"slightly", ko:"그 방은 오늘 약간 더 따뜻했다." }] },

  /* ── 챕터 10 ───────────────────────────────────── */
  /* 사전이 품사를 잘못 잡아 둔 자리가 둘이다.
       slope  사전 '비탈지다'(동사) → 원본 쪽 명사 '비탈, 기울기'
              incline(v) 의 syn 에 명사가 끼게 되므로 그 자리를
              'rise or fall at an angle' 로 갈았다
       smash  사전 '부수다; 충돌' → 동사 '부수다'
              참조 break·crash·fracture 가 모두 동사라 그대로 맞는다

     smash(부수다) 와 shatter(산산이 부수다 · 챕터 7) 는 '산산이' 로 갈랐다.
     smash 는 break(부수다, 어기다)·fracture(부러지다, 부수다) 와 첫 갈래가
     글자까지 같아 서로의 오답에서 자동으로 빠진다.
     soar(급상승하다, 높이 날다) 는 skyrocket(급등하다 · 챕터 9) 와 갈랐다. */

  /* 승격 87 — 사전 단일값 유지. 참조 narrow(N) 의 화면은 바뀌지 않는다.
     원본의 '호리호리한' 은 챕터 9 의 slender 자리다. */
  { word:"slim", pron:"슬림", pos:"adj", level:"B1", meanings:["가느다란"],
    syn:["narrow","thin in form","of small width"],
    ex:[{ s:"She carried a {{}} notebook.", f:"slim", ko:"그녀는 가느다란 공책을 들고 있었다." }] },

  /* 승격 88 — 사전은 동사 '비탈지다' 였다. 원본이 명사 쪽이라 명사로 세우고
     참조 incline(I) 의 그 자리를 동사 표현으로 갈았다. */
  { word:"slope", pron:"슬로프", pos:"n", level:"B2", meanings:["비탈","기울기"],
    syn:["rising ground","angle of a surface","tilt of the land"],
    ex:[{ s:"The house stands on a gentle {{}}.", f:"slope", ko:"그 집은 완만한 비탈에 서 있다." }] },

  { word:"sloppy", pron:"슬라피", pos:"adj", level:"C1", meanings:["엉성한","대충하는"],
    syn:["slapdash","done without care","messy in work"],
    ex:[{ s:"The teacher returned his {{}} work.", f:"sloppy", ko:"교사는 그의 엉성한 과제를 돌려주었다." }] },

  /* 승격 89 — 사전 글자 유지. 참조 brisk(B)·drowsy(D)·indolent(I) 세 곳의
     화면은 바뀌지 않는다. */
  { word:"sluggish", pron:"슬러기시", pos:"adj", level:"C1", meanings:["느릿한","부진한"],
    syn:["drowsy","indolent","slow to move"], ant:["brisk"],
    ex:[{ s:"Sales were {{}} all winter.", f:"sluggish", ko:"겨울 내내 판매가 부진했다." }] },

  /* 원본이 [n+v] 였다. 명사로 세웠다. */
  { word:"slumber", pron:"슬럼버", pos:"n", level:"C2", meanings:["잠","수면"],
    syn:["deep sleep","time of sleeping","rest with eyes shut"],
    ex:[{ s:"He fell into a deep {{}}.", f:"slumber", ko:"그는 깊은 잠에 빠졌다." }] },

  /* 승격 90 — 사전 글자 유지. 참조 depression(D)·downturn(D) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"slump", pron:"슬럼프", pos:"n", level:"B2", meanings:["폭락","부진"],
    syn:["depression","downturn","sharp fall in trade"],
    ex:[{ s:"The market went through a long {{}}.", f:"slump", ko:"시장은 긴 부진을 겪었다." }] },

  /* 승격 91 — 사전 첫 갈래만 남겼다. 참조 break(B)·crash(C)·fracture(F) 가
     모두 동사여서 그대로 맞는다. 그 세 곳의 설명이 '부수다; 충돌' 에서
     '부수다' 로 짧아진다. */
  { word:"smash", pron:"스매시", pos:"v", level:"B2", meanings:["부수다"],
    syn:["break","fracture","crash into pieces"],
    ex:[{ s:"He tried to {{}} the lock.", f:"smash", ko:"그는 그 자물쇠를 부수려 했다." }] },

  /* 승격 92 — 사전 글자 유지. 참조가 다섯 곳(bumpy·coarse·effortless·flat·
     mellow) 인데 하나도 바뀌지 않는다. */
  { word:"smooth", pron:"스무드", pos:"adj", level:"B1", meanings:["매끄러운","평탄한"],
    syn:["effortless","flat","even to the touch"], ant:["bumpy","coarse"],
    ex:[{ s:"The new road is wide and {{}}.", f:"smooth", ko:"새 길은 넓고 평탄하다." }] },

  /* 원본의 '밀입국하다' 는 버렸다 — 물건을 들이는 쪽만 남겼다. */
  { word:"smuggle", pron:"스머글", pos:"v", level:"C1", meanings:["밀수하다"],
    syn:["bring in by stealth","move goods illegally","sneak past customs"],
    ex:[{ s:"They tried to {{}} gold across the border.", f:"smuggle", ko:"그들은 국경으로 금을 밀수하려 했다." }] },

  /* 승격 93 — 사전 단일값 유지. 참조 flick(F) 의 화면은 바뀌지 않는다. */
  { word:"snap", pron:"스냅", pos:"v", level:"B2", meanings:["딱 튀기다"],
    syn:["flick","give a sharp click","break with a crack"],
    ex:[{ s:"He tried to {{}} his fingers.", f:"snap", ko:"그는 손가락을 딱 튀기려 했다." }] },

  /* 승격 94 — 사전 단일값 유지. 참조 grab(G) 의 화면은 바뀌지 않는다. */
  { word:"snatch", pron:"스내치", pos:"v", level:"B2", meanings:["낚아채다"],
    syn:["grab","seize quickly","take with a jerk"],
    ex:[{ s:"A gull tried to {{}} the bread.", f:"snatch", ko:"갈매기가 그 빵을 낚아채려 했다." }] },

  /* 원본의 둘째 갈래('슬쩍 훔치다') 는 버렸다. */
  { word:"sneak", pron:"스니크", pos:"v", level:"B2", meanings:["몰래 가다"],
    syn:["move without being seen","creep quietly","go by stealth"],
    ex:[{ s:"He tried to {{}} out of the hall.", f:"sneak", ko:"그는 강당에서 몰래 나가려 했다." }] },

  /* 원본이 [v+n] 이었다. 동사로 세웠다. */
  { word:"sniff", pron:"스니프", pos:"v", level:"B2", meanings:["코를 킁킁거리다"],
    syn:["draw air in through the nose","smell in short breaths","snuffle"],
    ex:[{ s:"The dog began to {{}} at the bag.", f:"sniff", ko:"개가 그 가방에 코를 킁킁거리기 시작했다." }] },

  { word:"snore", pron:"스노", pos:"v", level:"B2", meanings:["코를 골다"],
    syn:["breathe noisily in sleep","make a rough sound asleep","rumble while sleeping"],
    ex:[{ s:"He began to {{}} loudly.", f:"snore", ko:"그는 크게 코를 골기 시작했다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"so far", pron:"소 파", pos:"phr", level:"B1", meanings:["지금까지"],
    syn:["up to now","until this point","as of the present"] },

  { word:"so much the better", pron:"소 머치 더 베터", pos:"phr", level:"C2", meanings:["훨씬 더 좋은"],
    syn:["all the better for it","even more welcome","that much improved"] },

  /* 승격 95 — 사전 단일값 유지. 참조 drench(D) 의 화면은 바뀌지 않는다. */
  { word:"soak", pron:"소크", pos:"v", level:"B2", meanings:["흠뻑 젖게 하다"],
    syn:["drench","wet right through","leave in liquid"],
    ex:[{ s:"The rain will {{}} your coat.", f:"soak", ko:"비가 네 외투를 흠뻑 젖게 할 것이다." }] },

  /* 승격 96 — 사전의 쌍반점만 쉼표로 갈랐다. 참조는 없다.
     skyrocket(급등하다 · 챕터 9) 와 갈랐다 — 이쪽은 날아오르는 쪽도 맡는다. */
  { word:"soar", pron:"소", pos:"v", level:"B2", meanings:["급상승하다","높이 날다"],
    syn:["rise high up","fly far above","climb into the sky"],
    ex:[{ s:"Eagles {{}} above the cliff.", f:"soar", ko:"독수리들이 절벽 위로 높이 난다." }] },

  { word:"sob", pron:"삽", pos:"v", level:"B2", meanings:["흐느껴 울다"],
    syn:["weep aloud","cry with catching breath","shed tears noisily"],
    ex:[{ s:"The child began to {{}}.", f:"sob", ko:"그 아이가 흐느껴 울기 시작했다." }] },

  { word:"sober", pron:"소버", pos:"adj", level:"C1", meanings:["술 취하지 않은","냉철한"],
    syn:["not drunk","clear-minded","level in judgment"], ant:["drunk"],
    ex:[{ s:"He stayed {{}} all evening.", f:"sober", ko:"그는 저녁 내내 술에 취하지 않았다." }] },

  /* ── 챕터 11 ───────────────────────────────────── */
  /* ★ solvent 가 이 세트에서 가장 크게 어긋나 있던 자리다. 원본(교재) 은
     '용액' 이라고 적어 두었지만 그것은 solution 의 뜻이다. solvent 의 실제 뜻은
     형용사 '지급 능력이 있는' 이고, 참조 셋 가운데 bankrupt(파산한)·
     insolvent(지불 불능의) 가 바로 그쪽이다. 남은 한 곳 acid(A) 만 화학 쪽
     표현 'dissolving agent' 로 갈았다.

     ⚠ liquid(L) 도 손질했다. solid 가 형용사 '단단한, 입방의' 로 서면 명사
     liquid 의 반의어 자리에 형용사가 들어가게 된다. 'solid matter'(고체) 로
     갈았다.

     solitary(홀로 지내는) 와 solitude(고독, 혼자 지냄) 는 품사로 갈린다.
     somewhat(다소) 은 slightly(약간, 조금 · 챕터 9) 와 갈랐다.
     sole(유일한, 독점의) 과 solely(단독으로) 도 품사로 갈린다. */

  { word:"so-called", pron:"소 콜드", pos:"adj", level:"B2", meanings:["이른바"],
    syn:["named as such","going by that name","said to be"],
    ex:[{ s:"The {{}} expert knew little.", f:"so-called", ko:"그 이른바 전문가는 아는 것이 적었다." }] },

  /* 승격 97 — 사전 단일값 유지. 참조 aloof(A)·antisocial(A)·gregarious(G)
     세 곳의 화면은 바뀌지 않는다. gregarious(사교적인) 와 글자가 같아 서로의
     오답에서 자동으로 빠진다. */
  { word:"sociable", pron:"소셔블", pos:"adj", level:"B2", meanings:["사교적인"],
    syn:["gregarious","fond of company","easy with people"], ant:["aloof","antisocial"],
    ex:[{ s:"He is a {{}} young man.", f:"sociable", ko:"그는 사교적인 청년이다." }] },

  { word:"socialize", pron:"소셜라이즈", pos:"v", level:"B2", meanings:["사귀다","사회화하다"],
    syn:["mix with others","spend time together","take on social ways"],
    ex:[{ s:"She has little time to {{}}.", f:"socialize", ko:"그녀는 사귈 시간이 거의 없다." }] },

  { word:"sociocultural", pron:"소시오컬처럴", pos:"adj", level:"C1", meanings:["사회문화적인"],
    syn:["of society and culture","to do with people and custom","social and cultural at once"],
    ex:[{ s:"The study takes a {{}} view.", f:"sociocultural", ko:"그 연구는 사회문화적인 관점을 취한다." }] },

  { word:"sociology", pron:"소시알러지", pos:"n", level:"B2", meanings:["사회학"],
    syn:["study of society","science of social life","study of human groups"],
    ex:[{ s:"She teaches {{}} at the college.", f:"sociology", ko:"그녀는 그 대학에서 사회학을 가르친다." }] },

  { word:"solace", pron:"살러스", pos:"n", level:"C2", meanings:["위안","위로"],
    syn:["comfort in sorrow","easing of grief","relief from pain"],
    ex:[{ s:"She found {{}} in music.", f:"solace", ko:"그녀는 음악에서 위안을 찾았다." }] },

  { word:"sold-out", pron:"솔드 아웃", pos:"adj", level:"B2", meanings:["매진된"],
    syn:["all tickets gone","none left to buy","fully taken up"],
    ex:[{ s:"They played to a {{}} hall.", f:"sold-out", ko:"그들은 매진된 공연장에서 연주했다." }] },

  /* 승격 98 — 사전 글자 유지. 참조 exclusive(E) 의 화면은 바뀌지 않는다. */
  { word:"sole", pron:"소울", pos:"adj", level:"B2", meanings:["유일한","독점의"],
    syn:["exclusive","one and only","held by one alone"],
    ex:[{ s:"She is the {{}} owner of the shop.", f:"sole", ko:"그녀가 그 가게의 유일한 주인이다." }] },

  /* 승격 99 — 사전 단일값 유지. 참조 exclusively(E) 의 화면은 바뀌지 않는다.
     위 sole(형용사) 과 품사로 갈린다. */
  { word:"solely", pron:"소울리", pos:"adv", level:"B2", meanings:["단독으로"],
    syn:["exclusively","on one's own","by oneself alone"],
    ex:[{ s:"The decision rests {{}} with her.", f:"solely", ko:"그 결정은 단독으로 그녀에게 달려 있다." }] },

  /* 원본은 네 갈래였다. 둘로 줄였다. */
  { word:"solemnity", pron:"설렘니티", pos:"n", level:"C2", meanings:["근엄함","엄숙함"],
    syn:["grave manner","deep seriousness","weight of a rite"],
    ex:[{ s:"The service kept its {{}}.", f:"solemnity", ko:"그 예식은 엄숙함을 지켰다." }] },

  /* 원본의 셋째 갈래('호객하다') 는 버렸다. */
  { word:"solicit", pron:"설리싯", pos:"v", level:"C2", meanings:["간청하다","요청하다"],
    syn:["ask earnestly","beg for","seek by asking"],
    ex:[{ s:"They began to {{}} funds for the school.", f:"solicit", ko:"그들은 학교를 위한 기금을 요청하기 시작했다." }] },

  /* 승격 100 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 cubic(C)·firm(F) 두 곳의
     설명이 '단단한; 입방의' 에서 '단단한, 입방의' 가 된다. 명사인 liquid(L) 의
     반의어 자리는 'solid matter'(고체) 로 갈았다.
     firm(단단한, 회사) 과 첫 갈래가 글자까지 같아 자동 배제된다. */
  { word:"solid", pron:"살리드", pos:"adj", level:"B1", meanings:["단단한","입방의"],
    syn:["cubic","firm","hard right through"],
    ex:[{ s:"The table is made of {{}} oak.", f:"solid", ko:"그 탁자는 단단한 참나무로 만들어졌다." }] },

  /* 승격 101 — 사전 단일값 유지. 참조 lonely(L) 의 화면은 바뀌지 않는다. */
  { word:"solitary", pron:"살러테리", pos:"adj", level:"C1", meanings:["홀로 지내는"],
    syn:["lonely","living alone","without company"],
    ex:[{ s:"He led a {{}} life on the island.", f:"solitary", ko:"그는 그 섬에서 홀로 지내는 삶을 살았다." }] },

  /* 위 solitary(형용사) 와 품사로 갈린다. 챕터 4 의 seclusion(호젓함, 외딴 곳)
     과도 갈라 두었다. */
  { word:"solitude", pron:"살러튜드", pos:"n", level:"C1", meanings:["고독","혼자 지냄"],
    syn:["state of being alone","life apart from others","quiet of one's own"],
    ex:[{ s:"He writes best in {{}}.", f:"solitude", ko:"그는 혼자 있을 때 가장 잘 쓴다." }] },

  { word:"soluble", pron:"살류블", pos:"adj", level:"C2", meanings:["액체에 녹는"],
    syn:["able to dissolve","melting in water","breaking up in liquid"],
    ex:[{ s:"The powder is fully {{}}.", f:"soluble", ko:"그 가루는 완전히 액체에 녹는다." }] },

  /* 승격 102 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 liquid(L) 한 곳의 설명이
     '해결책; 용액' 에서 '해결책, 용액' 이 된다. */
  { word:"solution", pron:"설루션", pos:"n", level:"B1", meanings:["해결책","용액"],
    syn:["answer to a problem","way out of trouble","liquid mixture"],
    ex:[{ s:"They looked for a simple {{}}.", f:"solution", ko:"그들은 간단한 해결책을 찾았다." }] },

  /* 승격 103 — ★ 원본의 '용액' 은 위 solution 의 뜻이다. 사전값
     '지급 능력이 있는' 을 지켰다 — 참조 bankrupt(B)·insolvent(I) 두 곳이
     그쪽이라 화면이 바뀌지 않는다. 남은 acid(A) 한 곳만 갈았다. */
  { word:"solvent", pron:"살번트", pos:"adj", level:"C2", meanings:["지급 능력이 있는"],
    syn:["able to pay debts","free of debt","having funds to settle"], ant:["bankrupt","insolvent"],
    ex:[{ s:"The firm is still {{}}.", f:"solvent", ko:"그 회사는 아직 지급 능력이 있다." }] },

  /* slightly(약간, 조금 · 챕터 9) 와 갈랐다 — 이쪽이 조금 더 큰 정도다. */
  { word:"somewhat", pron:"섬왓", pos:"adv", level:"B2", meanings:["다소"],
    syn:["to some extent","rather more than a little","in some degree"],
    ex:[{ s:"The result was {{}} surprising.", f:"somewhat", ko:"그 결과는 다소 놀라웠다." }] },

  /* 승격 104 — 사전 글자 유지. 참조 acoustic(A) 의 화면은 바뀌지 않는다. */
  { word:"sonic", pron:"사닉", pos:"adj", level:"C1", meanings:["음파의","소리의"],
    syn:["acoustic","of sound waves","to do with sound"],
    ex:[{ s:"The jet made a {{}} boom.", f:"sonic", ko:"그 제트기가 음파의 폭음을 냈다." }] },

  /* 승격 105 — 사전 글자 유지. 참조 console(C)·madden(M) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"soothe", pron:"수드", pos:"v", level:"B2", meanings:["달래다","진정시키다"],
    syn:["console","calm down","quiet a distress"], ant:["madden"],
    ex:[{ s:"A warm bath will {{}} the ache.", f:"soothe", ko:"따뜻한 목욕이 그 통증을 진정시킬 것이다." }] },

  /* ── 챕터 12 ───────────────────────────────────── */
  /* ★ sound 는 '소리' 를 버렸다. 수능에 가장 자주 나오는 뜻이라 아까운 자리다.
     참조 logical(논리적인) 이 형용사 쪽이고 사전값도 '빈틈없는, 타당한' 이어서
     그쪽을 지켰다. 참조를 손질하는 대신 사전값을 따르는 규칙을 그대로 적용한
     것이다.

     span 은 사전이 '기간; 걸치다' 로 명사와 동사를 섞어 두었다. 참조 다섯 곳
     가운데 breadth·distance·duration·length 넷이 명사여서 명사 '기간' 으로
     세우고, 동사인 bridge(B) 한 곳만 'link two sides' 로 갈았다.
     '범위' 는 챕터 3 의 scope·range(R) 자리라 쓰지 않았다.

     sow 는 발음을 '소우' 로 적어 챕터 2 의 saw(소) 와 갈라 두었다.
     specific 은 참조가 여섯 곳으로 이 세트에서 separate 와 함께 가장 많다.
     사전 글자를 그대로 지켜 하나도 바뀌지 않는다. */

  /* 승격 106 — 사전의 쌍반점만 쉼표로 갈랐다. 참조는 없다. */
  { word:"sophisticated", pron:"서피스티케이팃", pos:"adj", level:"B2", meanings:["정교한","세련된"],
    syn:["refined in taste","highly developed","worldly-wise"],
    ex:[{ s:"The lab uses {{}} tools.", f:"sophisticated", ko:"그 실험실은 정교한 도구를 쓴다." }] },

  { word:"sophomore", pron:"사퍼모", pos:"n", level:"B2", meanings:["2학년"],
    syn:["second-year student","one in the second year","student of year two"],
    ex:[{ s:"She is a {{}} at the college.", f:"sophomore", ko:"그녀는 그 대학 2학년이다." }] },

  { word:"sore", pron:"소어", pos:"adj", level:"B1", meanings:["따가운","아픈"],
    syn:["painful to touch","aching","tender and raw"],
    ex:[{ s:"My throat felt {{}} all morning.", f:"sore", ko:"아침 내내 목이 따가웠다." }] },

  /* 승격 107 — 사전 단일값 유지. 참조 grief(G) 의 화면은 바뀌지 않는다.
     원본의 '애도' 는 버렸다 — mourning 자리다. */
  { word:"sorrow", pron:"소로우", pos:"n", level:"B2", meanings:["비애"],
    syn:["grief","deep sadness","heavy heart"],
    ex:[{ s:"Her eyes were full of {{}}.", f:"sorrow", ko:"그녀의 눈은 비애로 가득했다." }] },

  /* 승격 108 — ★ '소리' 를 버린 자리다. 참조 logical(L) 이 형용사여서 사전값
     '빈틈없는, 타당한' 을 지켰다 — 그 한 곳의 화면은 바뀌지 않는다. */
  { word:"sound", pron:"사운드", pos:"adj", level:"B2", meanings:["빈틈없는","타당한"],
    syn:["logical","free of flaws","well-founded"],
    ex:[{ s:"That is a {{}} argument.", f:"sound", ko:"그것은 타당한 논증이다." }] },

  /* 승격 109 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 bitter(B) 한 곳의 설명이
     '신; 시큼한' 에서 '신, 시큼한' 이 된다. */
  { word:"sour", pron:"사우어", pos:"adj", level:"B1", meanings:["신","시큼한"],
    syn:["bitter","sharp in taste","tart"],
    ex:[{ s:"The milk has turned {{}}.", f:"sour", ko:"그 우유가 시큼해졌다." }] },

  { word:"souvenir", pron:"수버니어", pos:"n", level:"B1", meanings:["기념품"],
    syn:["keepsake","memento","gift to remember by"],
    ex:[{ s:"He bought a small {{}} at the museum.", f:"souvenir", ko:"그는 박물관에서 작은 기념품을 샀다." }] },

  { word:"sovereignty", pron:"사브런티", pos:"n", level:"C2", meanings:["통치권","자주권"],
    syn:["supreme power","right to rule oneself","full authority of a state"],
    ex:[{ s:"The island claimed full {{}}.", f:"sovereignty", ko:"그 섬은 완전한 자주권을 주장했다." }] },

  /* 발음을 '소우' 로 적어 챕터 2 의 saw(소) 와 갈랐다. */
  { word:"sow", pron:"소우", pos:"v", level:"B2", meanings:["씨를 뿌리다"],
    syn:["plant seed","scatter grain","put seed in the ground"],
    ex:[{ s:"Farmers {{}} the field in April.", f:"sow", ko:"농부들은 사월에 밭에 씨를 뿌린다." }] },

  /* 승격 110 — 사전 단일값 유지. 참조는 없다. */
  { word:"spacecraft", pron:"스페이스크래프트", pos:"n", level:"B2", meanings:["우주선"],
    syn:["vessel for space travel","rocket ship","craft that leaves the earth"],
    ex:[{ s:"The {{}} reached orbit at dawn.", f:"spacecraft", ko:"그 우주선은 새벽에 궤도에 이르렀다." }] },

  /* 승격 111 — 사전 첫 갈래만 남겼다. 참조 다섯 곳 가운데 넷(breadth·distance·
     duration·length) 이 명사여서 명사로 세웠다. 그 네 곳의 설명이
     '기간; 걸치다' 에서 '기간' 으로 짧아지고, 동사인 bridge(B) 한 곳은
     'link two sides' 로 갈았다.
     duration(지속 기간, 기간)·length(기간, 길이) 와 글자가 겹쳐 자동 배제된다. */
  { word:"span", pron:"스팬", pos:"n", level:"B2", meanings:["기간"],
    syn:["duration","length of time","stretch from end to end"],
    ex:[{ s:"The work took a short {{}} of three weeks.", f:"span", ko:"그 일은 삼 주라는 짧은 기간이 걸렸다." }] },

  /* 승격 112 — 사전 첫 갈래만 남겼다. 참조는 없다. 원본의 동사 갈래도 버렸다. */
  { word:"spare", pron:"스페어", pos:"adj", level:"B2", meanings:["여유 있는"],
    syn:["left over for use","not in use now","kept in reserve"],
    ex:[{ s:"Do you have a {{}} pen?", f:"spare", ko:"여유 있는 펜이 있나요?" }] },

  /* 승격 113 — 사전 단일값 유지. 참조 geographic(G) 의 화면은 바뀌지 않는다. */
  { word:"spatial", pron:"스페이셜", pos:"adj", level:"C1", meanings:["공간의"],
    syn:["geographic","to do with space","of area and place"],
    ex:[{ s:"The test checks {{}} skill.", f:"spatial", ko:"그 검사는 공간의 능력을 살핀다." }] },

  { word:"spear", pron:"스피어", pos:"n", level:"B2", meanings:["창"],
    syn:["long pointed weapon","lance","throwing pole with a blade"],
    ex:[{ s:"He threw the {{}} at the target.", f:"spear", ko:"그는 표적에 창을 던졌다." }] },

  { word:"specialized", pron:"스페셜라이즈드", pos:"adj", level:"B2", meanings:["전문화된"],
    syn:["narrowed to one field","expert in one area","made for one purpose"],
    ex:[{ s:"The clinic offers {{}} care.", f:"specialized", ko:"그 진료소는 전문화된 치료를 제공한다." }] },

  /* 원본의 '특성' 은 버렸다 — characteristic 자리다. */
  { word:"specialty", pron:"스페셜티", pos:"n", level:"B2", meanings:["전문","장기"],
    syn:["chief skill","field one is best at","what one does best"],
    ex:[{ s:"Heart surgery is her {{}}.", f:"specialty", ko:"심장 수술이 그녀의 전문이다." }] },

  { word:"species", pron:"스피시즈", pos:"n", level:"B1", meanings:["종","종류"],
    syn:["kind of living thing","group that breeds together","class of plant or animal"],
    ex:[{ s:"The island holds one rare {{}}.", f:"species", ko:"그 섬에는 드문 종 하나가 있다." }] },

  /* 승격 114 — 사전 글자 유지. 참조가 여섯 곳(concrete·definite·detail·general·
     generic·particular) 인데 하나도 바뀌지 않는다 — 챕터 5 의 separate 와 함께
     이 세트에서 참조가 가장 많은 자리다. */
  { word:"specific", pron:"스퍼시픽", pos:"adj", level:"B1", meanings:["특정한","구체적인"],
    syn:["concrete","definite","particular"], ant:["general","generic"],
    ex:[{ s:"Give me a {{}} example.", f:"specific", ko:"구체적인 예를 하나 들어 보라." }] },

  /* 승격 115 — 사전 단일값 유지. 참조 clarify(C)·define(D) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"specify", pron:"스페서파이", pos:"v", level:"B2", meanings:["명시하다"],
    syn:["clarify","define","state exactly"],
    ex:[{ s:"Please {{}} the size you need.", f:"specify", ko:"필요한 크기를 명시해 주세요." }] },

  { word:"specimen", pron:"스페서먼", pos:"n", level:"C1", meanings:["견본","표본"],
    syn:["sample for study","example taken","test piece"],
    ex:[{ s:"The lab kept one {{}} of each rock.", f:"specimen", ko:"그 실험실은 각 암석의 표본을 하나씩 두었다." }] },

  /* ── 챕터 13 ───────────────────────────────────── */
  /* '영역·범위' 자리가 셋 몰렸다. 챕터 3 의 scope(범위) 까지 넷이다.
       scope    범위        (챕터 3, 사전 단일값)
       sphere   영역, 범위   사전 글자 유지. 참조 domain(영역, 분야)
       spectrum 영역        sphere 의 첫 갈래와 글자를 맞춰 자동 배제시켰다
     spectrum 의 원본 '범위' 는 scope 자리라 쓰지 않았다.

     split 은 사전이 '나누다; 갈라진 틈' 으로 동사와 명사를 섞어 두었다. 참조
     crack(갈라진 틈, 금)·divorce(이혼, 단절) 가 둘 다 명사인데, 원본이 동사
     쪽이고 crack 이 쓰고 있던 명사 뜻은 crack 자신의 첫 뜻과 같았다. 동사로
     세우고 두 자리를 각각 갈았다.
     split(나누다) 은 챕터 5 의 separate(분리하다, 나누다) 와 둘째 갈래가
     글자까지 같아 서로의 오답에서 자동으로 빠진다.

     ★ spoil 은 사전값 '버릇없게 만들다' 를 지켰다. 원본의 '망치다' 는 R 세트의
     ruin 자리이고, 참조 indulge(마음껏 하다) 도 이쪽이다. */

  /* 원본의 '구경거리' 는 버렸다 — 낮춰 보는 말맛이 섞인다. */
  { word:"spectacle", pron:"스펙터클", pos:"n", level:"C1", meanings:["광경","장관"],
    syn:["grand sight","striking scene","display worth seeing"],
    ex:[{ s:"The parade was a fine {{}}.", f:"spectacle", ko:"그 행렬은 멋진 광경이었다." }] },

  /* 승격 116 — 사전 글자 유지. 참조 breathtaking(B) 의 화면은 바뀌지 않는다. */
  { word:"spectacular", pron:"스펙태큘러", pos:"adj", level:"B2", meanings:["장관인","눈부신"],
    syn:["breathtaking","grand to look at","dazzling in scale"],
    ex:[{ s:"They watched a {{}} sunset.", f:"spectacular", ko:"그들은 눈부신 해넘이를 보았다." }] },

  /* 승격 117 — 사전 글자 유지. 참조 bystander(B)·concert goer(C) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"spectator", pron:"스펙테이터", pos:"n", level:"B2", meanings:["관람자","관객"],
    syn:["bystander","concert goer","one who watches"],
    ex:[{ s:"Every {{}} rose to cheer.", f:"spectator", ko:"모든 관객이 일어나 환호했다." }] },

  /* sphere 의 첫 갈래와 글자를 맞춰 자동 배제시켰다. 원본의 '범위' 는
     챕터 3 의 scope 자리다. */
  { word:"spectrum", pron:"스펙트럼", pos:"n", level:"C1", meanings:["영역"],
    syn:["band of related things","full range of kinds","spread from one end to the other"],
    ex:[{ s:"The party covers a wide {{}} of views.", f:"spectrum", ko:"그 정당은 넓은 영역의 견해를 담는다." }] },

  /* 승격 118 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 gamble(G)·hypothesize(H)
     두 곳의 설명이 '추측하다; 투기하다' 에서 '추측하다, 투기하다' 가 된다. */
  { word:"speculate", pron:"스페큘레이트", pos:"v", level:"C1", meanings:["추측하다","투기하다"],
    syn:["gamble","hypothesize","guess without proof"],
    ex:[{ s:"We can only {{}} about the cause.", f:"speculate", ko:"우리는 원인을 추측할 수밖에 없다." }] },

  /* 원본이 [n+v] 였다. 명사로 세웠다('철자를 쓰다' 는 버렸다). */
  { word:"spell", pron:"스펠", pos:"n", level:"C1", meanings:["한동안의 계속"],
    syn:["stretch of weather","short period","run of days"],
    ex:[{ s:"We had a dry {{}} in June.", f:"spell", ko:"우리는 육월에 한동안 마른 날이 이어졌다." }] },

  { word:"sperm", pron:"스펌", pos:"n", level:"C1", meanings:["정자"],
    syn:["male seed cell","reproductive cell of a male","seed of an animal"],
    ex:[{ s:"The study counted each {{}}.", f:"sperm", ko:"그 연구는 정자를 하나하나 셌다." }] },

  /* 승격 119 — 사전 글자 유지. 참조 domain(D) 의 화면은 바뀌지 않는다.
     첫 갈래 '영역' 이 위 spectrum 과 글자가 같아 자동 배제된다. */
  { word:"sphere", pron:"스피어", pos:"n", level:"C1", meanings:["영역","범위"],
    syn:["domain","field of action","area of concern"],
    ex:[{ s:"That lies outside my {{}}.", f:"sphere", ko:"그것은 내 영역 밖이다." }] },

  /* 원본의 '풍미' 는 챕터 2 의 savor 자리라 버렸다. */
  { word:"spice", pron:"스파이스", pos:"n", level:"B1", meanings:["양념","향신료"],
    syn:["seasoning powder","flavouring from plants","hot-tasting addition"],
    ex:[{ s:"Add one more {{}} to the stew.", f:"spice", ko:"스튜에 양념을 하나 더 넣어라." }] },

  { word:"spill", pron:"스필", pos:"v", level:"B1", meanings:["쏟다","흘리다"],
    syn:["let run over","tip out by accident","pour out unmeant"],
    ex:[{ s:"Try not to {{}} the milk.", f:"spill", ko:"우유를 쏟지 않도록 해라." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"spill over", pron:"스필 오버", pos:"phr", level:"C1", meanings:["넘치다","번지다"],
    syn:["flow past the edge","spread beyond bounds","reach further than meant"] },

  /* 승격 120 — 사전 단일값 유지. 참조 get out of hand(G) 의 화면은 바뀌지
     않는다. 원본의 형용사 갈래('나선형의') 는 버렸다. */
  { word:"spiral", pron:"스파이럴", pos:"v", level:"C1", meanings:["악화로 치닫다"],
    syn:["get out of hand","worsen fast","run away downward"],
    ex:[{ s:"Costs began to {{}} after the flood.", f:"spiral", ko:"홍수 뒤로 비용이 악화로 치닫기 시작했다." }] },

  { word:"spirited", pron:"스피리팃", pos:"adj", level:"C1", meanings:["활기를 띤"],
    syn:["full of life","lively in manner","done with vigour"],
    ex:[{ s:"They held a {{}} debate.", f:"spirited", ko:"그들은 활기를 띤 토론을 벌였다." }] },

  /* 승격 121 — 사전 글자 유지. 참조 corporal(C) 의 화면은 바뀌지 않는다. */
  { word:"spiritual", pron:"스피리추얼", pos:"adj", level:"B2", meanings:["정신적인","영적인"],
    syn:["of the soul","not of the body","inner and sacred"], ant:["corporal"],
    ex:[{ s:"She sought {{}} peace.", f:"spiritual", ko:"그녀는 정신적인 평온을 구했다." }] },

  { word:"splash", pron:"스플래시", pos:"v", level:"B2", meanings:["튀기다"],
    syn:["throw water about","spatter with drops","make water fly"],
    ex:[{ s:"Do not {{}} water on the floor.", f:"splash", ko:"바닥에 물을 튀기지 마라." }] },

  /* 승격 122 — 사전 글자 유지. 참조 gorgeous(G)·magnificent(M) 두 곳의 화면은
     바뀌지 않는다. superb(훌륭한, 최고의 · 챕터 20) 와는 '빛나는' 으로 갈랐다. */
  { word:"splendid", pron:"스플렌디드", pos:"adj", level:"B2", meanings:["훌륭한","빛나는"],
    syn:["gorgeous","magnificent","grand and bright"],
    ex:[{ s:"It was a {{}} day for the fair.", f:"splendid", ko:"장이 서기에 훌륭한 날이었다." }] },

  /* 승격 123 — 사전 첫 갈래만 남겼다. 참조 crack(C)·divorce(D) 가 둘 다 명사
     여서 그 두 자리를 각각 'narrow break'·'legal end of a marriage' 로 갈았다.
     챕터 5 의 separate(분리하다, 나누다) 와 '나누다' 가 같아 자동 배제된다. */
  { word:"split", pron:"스플릿", pos:"v", level:"B2", meanings:["나누다"],
    syn:["divide in two","cut apart","break along a line"],
    ex:[{ s:"They agreed to {{}} the cost.", f:"split", ko:"그들은 비용을 나누기로 했다." }] },

  /* 승격 124 — ★ 사전 단일값 유지. 참조 indulge(I) 의 화면은 바뀌지 않는다.
     원본의 '망치다' 는 R 세트의 ruin 자리라 버렸다. */
  { word:"spoil", pron:"스포일", pos:"v", level:"B1", meanings:["버릇없게 만들다"],
    syn:["indulge","let have too much","pamper"],
    ex:[{ s:"Do not {{}} the child.", f:"spoil", ko:"그 아이를 버릇없게 만들지 마라." }] },

  /* 승격 125 — 사전 글자 유지. 참조 impulsive(I) 의 화면은 바뀌지 않는다. */
  { word:"spontaneous", pron:"스판테이니어스", pos:"adj", level:"B2", meanings:["즉흥적인","자발적인"],
    syn:["impulsive","done on the spur","coming of itself"],
    ex:[{ s:"The crowd gave a {{}} cheer.", f:"spontaneous", ko:"군중이 즉흥적인 환호를 보냈다." }] },

  /* 승격 126 — 사전 글자 유지. 참조 continuous(C)·occasional(O) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"sporadic", pron:"스퍼래딕", pos:"adj", level:"C1", meanings:["산발적인","이따금의"],
    syn:["occasional","now and then","scattered in time"], ant:["continuous"],
    ex:[{ s:"There was {{}} rain all week.", f:"sporadic", ko:"한 주 내내 산발적인 비가 내렸다." }] },

  /* ── 챕터 14 ───────────────────────────────────── */
  /* 이 세트에서 참조를 가장 많이 손질한 챕터다 — 아홉 곳이다. 승격 열다섯 개
     가운데 열이 사전의 품사와 어긋나 있었기 때문이다.
       location(n)   spot → particular place            spot 이 동사로 선다
       leap off(phr) spring from → jump down from       사전값이 leap off 자신의 뜻이었다
       drizzle(n)    sprinkle → scattered droplets      sprinkle 이 동사로 선다
       crawl(v)      ant sprint → run flat out          sprint 가 명사로 선다
       gallop(v)     sprint → run flat out              같은 이유
       bud(n)        sprout → unopened flower           sprout 가 동사로 선다
       barn(n)       stable → outbuilding               stable 이 형용사로 선다
       bet(v)        stake → put money on               stake 가 명사로 선다
       chimney(n)    stack → smoke pipe                 stack 이 '더미' 로 선다
     bud 와 barn 은 챕터 7 에서 한 번 손질한 자리를 다시 손질했다. 그때 함께
     떼지 못한 것은 sprout·stable 이 아직 표제어가 아니어서, 참조를 다 떼면
     pron-audit 이 '발음만 남은 유령 키' 로 잡기 때문이다.

     crawl·gallop 의 'run flat out' 에는 사전이 sprint 에 적어 두었던 뜻
     ('전력으로 달리다') 을 그대로 옮겼다. 낱말만 바뀌고 화면에 뜨는 뜻은
     달라지지 않는다.

     stack(더미, 무더기) 은 pile(더미, 무더기 · P) 과 글자가 똑같다. 일부러 그렇게
     두어 서로의 오답에서 자동으로 빠지게 했다 — 그래서 stack 의 syn 에 pile 을
     넣지 않았다. */

  /* 승격 127 — 사전 첫 갈래만 남겼다. 참조 셋 중 둘(catch a glimpse of·detect)
     이 동사라 그대로 맞고, 명사인 location(L) 한 곳만 갈았다.
     ★ '장소' 를 버린 아까운 자리다 — 그쪽은 챕터 9 의 site 와 location 이 맡는다.
     detect(감지하다, 발견하다) 와 '발견하다' 가 같아 자동 배제된다. */
  { word:"spot", pron:"스팟", pos:"v", level:"B1", meanings:["발견하다"],
    syn:["detect","catch a glimpse of","notice at once"],
    ex:[{ s:"Did you {{}} the error on page two?", f:"spot", ko:"두 쪽의 오류를 발견했나요?" }] },

  /* 승격 128 — 사전 단일값 유지. 참조 bride(B) 의 화면은 바뀌지 않는다. */
  { word:"spouse", pron:"스파우스", pos:"n", level:"B2", meanings:["배우자"],
    syn:["bride","husband or wife","married partner"],
    ex:[{ s:"Please bring your {{}} to the dinner.", f:"spouse", ko:"만찬에 배우자를 데려오세요." }] },

  /* 원본이 [v+n] 이었다. 동사로 세웠다. */
  { word:"sprain", pron:"스프레인", pos:"v", level:"B2", meanings:["삐다"],
    syn:["twist a joint","hurt by wrenching","strain a ligament"],
    ex:[{ s:"Be careful not to {{}} your ankle.", f:"sprain", ko:"발목을 삐지 않도록 조심하라." }] },

  /* 승격 129 — ⚠ 사전값 '뛰어 벗어나다' 는 참조 leap off(뛰어내리다) 자신의
     뜻을 베낀 것이었다. 실제 뜻으로 세우고 그 한 곳을 갈았다.
     구·표현이라 예문은 두지 않는다. */
  { word:"spring from", pron:"스프링 프럼", pos:"phr", level:"C1", meanings:["~에서 비롯되다"],
    syn:["arise out of","have its origin in","come from as a source"] },

  /* 승격 130 — 사전 둘째 갈래만 남겼다. 명사 '보슬비' 를 쓰고 있던 drizzle(D)
     의 그 자리를 'scattered droplets' 로 갈았다. 원본의 '간간이 섞다' 는 버렸다. */
  { word:"sprinkle", pron:"스프링클", pos:"v", level:"B2", meanings:["뿌리다"],
    syn:["scatter in drops","shake over lightly","dust with"],
    ex:[{ s:"{{}} a little salt on the eggs.", f:"Sprinkle", ko:"달걀에 소금을 조금 뿌려라." }] },

  /* 승격 131 — 사전은 동사 '전력으로 달리다' 였다. 원본이 앞세운 명사로 세우고
     동사 자리를 쓰던 crawl(C)·gallop(G) 두 곳을 'run flat out' 으로 갈았다. */
  { word:"sprint", pron:"스프린트", pos:"n", level:"B2", meanings:["단거리 경주"],
    syn:["short fast race","dash over a short way","race at full speed"],
    ex:[{ s:"He won the hundred-metre {{}}.", f:"sprint", ko:"그는 백 미터 단거리 경주에서 이겼다." }] },

  /* 승격 132 — 사전 첫 갈래만 남겼다. 명사 '새싹' 을 쓰고 있던 bud(B) 의 그
     자리를 'unopened flower' 로 갈았다. */
  { word:"sprout", pron:"스프라우트", pos:"v", level:"B2", meanings:["싹트다","발아하다"],
    syn:["come out of the seed","begin to grow","put out shoots"],
    ex:[{ s:"The beans began to {{}} after three days.", f:"sprout", ko:"콩이 사흘 뒤에 싹트기 시작했다." }] },

  /* 승격 133 — 사전 단일값 유지. 참조 conserve(C)·dissipate(D) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"squander", pron:"스콴더", pos:"v", level:"C2", meanings:["낭비하다"],
    syn:["dissipate","waste away","throw money about"], ant:["conserve"],
    ex:[{ s:"Do not {{}} the chance.", f:"squander", ko:"그 기회를 낭비하지 마라." }] },

  /* 승격 134 — 사전은 형용사 '정사각형의' 였다. 원본이 명사와 형용사를 섞어
     두었고 참조 cube(정육면체) 가 명사여서 명사로 세웠다 — 그 한 곳의 설명이
     '정사각형의' 에서 '정사각형, 광장' 이 된다. */
  { word:"square", pron:"스퀘어", pos:"n", level:"B1", meanings:["정사각형","광장"],
    syn:["four-sided figure","open public space","plaza in a town"],
    ex:[{ s:"They met in the town {{}}.", f:"square", ko:"그들은 마을 광장에서 만났다." }] },

  /* 승격 135 — 사전 글자 유지. 참조 compress(C)·constrict(C) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"squeeze", pron:"스퀴즈", pos:"v", level:"B1", meanings:["짜다","압박하다"],
    syn:["compress","constrict","press hard together"],
    ex:[{ s:"{{}} the lemon over the fish.", f:"Squeeze", ko:"생선 위에 레몬을 짜라." }] },

  /* 승격 136 — 사전 단일값 유지. 참조 equilibrium(E)·instability(I) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"stability", pron:"스터빌러티", pos:"n", level:"B2", meanings:["안정성"],
    syn:["equilibrium","steady state","firmness over time"], ant:["instability"],
    ex:[{ s:"The bridge gained {{}} from the new pillar.", f:"stability", ko:"그 다리는 새 기둥으로 안정성을 얻었다." }] },

  /* 원본의 '견고하게 하다' 는 버렸다 — 같은 말이다. */
  { word:"stabilize", pron:"스테이벌라이즈", pos:"v", level:"B2", meanings:["안정시키다"],
    syn:["make steady","hold firm","keep from shifting"],
    ex:[{ s:"They worked to {{}} the wall.", f:"stabilize", ko:"그들은 그 벽을 안정시키려 애썼다." }] },

  /* 승격 137 — 사전 첫 갈래만 남겼다. '마구간' 을 쓰고 있던 barn(B) 의 그
     자리를 'outbuilding' 으로 갈았다. */
  { word:"stable", pron:"스테이블", pos:"adj", level:"B1", meanings:["안정된"],
    syn:["not likely to change","firm in place","steady and sure"],
    ex:[{ s:"His condition is now {{}}.", f:"stable", ko:"그의 상태는 이제 안정되었다." }] },

  /* 승격 138 — 사전 둘째 갈래만 남겼다. 굴뚝 뜻으로 쓰고 있던 chimney(C) 의 그
     자리를 'smoke pipe' 로 갈았다. pile(더미, 무더기 · P) 과 글자가 똑같아
     서로의 오답에서 자동으로 빠진다 — 그래서 syn 에 pile 을 넣지 않았다. */
  { word:"stack", pron:"스택", pos:"n", level:"B2", meanings:["더미","무더기"],
    syn:["heap of things","pile of stuff","things laid one on another"],
    ex:[{ s:"A {{}} of plates stood by the sink.", f:"stack", ko:"접시 더미가 개수대 옆에 서 있었다." }] },

  { word:"staff", pron:"스태프", pos:"n", level:"B1", meanings:["직원","간부"],
    syn:["group of workers","team of employees","hired people of a place"],
    ex:[{ s:"The hotel hired more {{}} for summer.", f:"staff", ko:"그 호텔은 여름을 위해 직원을 더 뽑았다." }] },

  /* 승격 139 — 사전 첫 갈래만 남겼다. 참조는 없다. stumble(넘어지다 · 챕터 17)
     과는 '비틀거리다' 로 갈랐다. */
  { word:"stagger", pron:"스태거", pos:"v", level:"B2", meanings:["비틀거리다"],
    syn:["walk unsteadily","reel while walking","sway as one walks"],
    ex:[{ s:"He began to {{}} down the hall.", f:"stagger", ko:"그는 복도를 비틀거리며 내려갔다." }] },

  { word:"stagnant", pron:"스태그넌트", pos:"adj", level:"C1", meanings:["고여 있는","침체된"],
    syn:["not flowing","at a standstill","dull and unmoving"],
    ex:[{ s:"The pond water was {{}}.", f:"stagnant", ko:"그 못의 물은 고여 있었다." }] },

  /* 승격 140 — 사전은 '얼룩; 더럽히다' 였다. 참조가 없어 원본 앞 갈래인 명사로
     세웠다 — 화면이 바뀌는 곳은 없다. */
  { word:"stain", pron:"스테인", pos:"n", level:"B2", meanings:["얼룩"],
    syn:["dirty mark","spot of dirt","patch of colour left"],
    ex:[{ s:"There is a dark {{}} on the rug.", f:"stain", ko:"깔개에 짙은 얼룩이 있다." }] },

  /* 승격 141 — 사전의 쌍반점만 쉼표로 갈랐다. '내기' 는 담지 않았고, 그 뜻으로
     쓰고 있던 bet(B) 의 자리를 'put money on' 으로 갈았다. */
  { word:"stake", pron:"스테이크", pos:"n", level:"B2", meanings:["지분","말뚝"],
    syn:["share in a firm","pointed post","holding in a business"],
    ex:[{ s:"She holds a small {{}} in the company.", f:"stake", ko:"그녀는 그 회사에 작은 지분을 갖고 있다." }] },

  { word:"stale", pron:"스테일", pos:"adj", level:"B2", meanings:["상한","김빠진"],
    syn:["no longer fresh","gone flat","old and dry"],
    ex:[{ s:"The bread has gone {{}}.", f:"stale", ko:"그 빵이 상했다." }] },

  /* ── 챕터 15 ───────────────────────────────────── */
  /* ★ state 는 '상태' 를 버렸다. 수능 빈출 뜻이라 아까운 자리다. 사전이
     '발언하다; 상태' 로 동사와 명사를 섞어 두었고 참조 comment(견해를 밝히다) 가
     동사여서 동사로 세웠다. 사전의 '발언하다' 자체는 R 세트 remark 자리라
     원본의 '말하다, 진술하다' 를 썼다. '상태' 는 챕터 16 의 status 가 받는다.

     '멈춤' 자리를 셋으로 갈랐다.
       stall      갑자기 멎다 (v)         — 원본의 '지연시키다' 는 set back(챕터 6) 자리
       standstill 정지, 멈춤 (n)
       static     움직이지 않는, 변하지 않는 (adj)
     품사가 다 달라 서로를 흐리지 않는다.

     statistical(통계에 근거한) 과 statistics(통계, 통계학) 도 품사로 갈렸다.
     starry(별이 많은) 는 stellar(챕터 16) 와 갈랐다. */

  /* 원본은 세 갈래였다. 둘로 줄였다('줄기' 는 챕터 16 의 stem 자리다). */
  { word:"stalk", pron:"스토크", pos:"v", level:"C1", meanings:["조용히 뒤쫓다","몰래 따라붙다"],
    syn:["follow in secret","track without being seen","dog the steps of"],
    ex:[{ s:"The cat began to {{}} the bird.", f:"stalk", ko:"고양이가 그 새를 조용히 뒤쫓기 시작했다." }] },

  /* 원본이 [v+n] 이었다. 동사로 세웠다. */
  { word:"stall", pron:"스톨", pos:"v", level:"B2", meanings:["갑자기 멎다"],
    syn:["come to a sudden stop","cut out all at once","stop dead"],
    ex:[{ s:"The engine began to {{}} on the hill.", f:"stall", ko:"엔진이 언덕에서 갑자기 멎기 시작했다." }] },

  /* 승격 142 — 사전 단일값 유지. 참조 excel(E) 의 화면은 바뀌지 않는다.
     구·표현이라 예문은 두지 않는다. */
  { word:"stand out", pron:"스탠드 아웃", pos:"phr", level:"B1", meanings:["돋보이다"],
    syn:["excel","catch the eye","be plain to see"] },

  { word:"standardize", pron:"스탠더다이즈", pos:"v", level:"B2", meanings:["표준화하다"],
    syn:["make all the same","bring to one rule","set a common form"],
    ex:[{ s:"The board will {{}} the forms.", f:"standardize", ko:"이사회가 그 서식을 표준화할 것이다." }] },

  /* 승격 143 — 사전 글자 유지. 참조 perspective(P)·point of view(P) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"standpoint", pron:"스탠드포인트", pos:"n", level:"B2", meanings:["관점","입장"],
    syn:["perspective","point of view","angle one looks from"],
    ex:[{ s:"From a legal {{}} it is clear.", f:"standpoint", ko:"법적 관점에서는 분명하다." }] },

  { word:"standstill", pron:"스탠드스틸", pos:"n", level:"C1", meanings:["정지","멈춤"],
    syn:["complete stop","halt in motion","state of no movement"],
    ex:[{ s:"Traffic came to a {{}}.", f:"standstill", ko:"차량 흐름이 정지에 이르렀다." }] },

  { word:"staple", pron:"스테이플", pos:"adj", level:"C1", meanings:["주된","주요한"],
    syn:["chief in use","most relied on","basic and regular"],
    ex:[{ s:"Rice is the {{}} food there.", f:"staple", ko:"거기서는 쌀이 주된 식량이다." }] },

  /* 승격 144 — 사전 글자 유지. 참조 catch a glimpse of(C)·gaze(G) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"stare", pron:"스테어", pos:"v", level:"B1", meanings:["응시하다","빤히 보다"],
    syn:["gaze","look fixedly","fix one's eyes on"],
    ex:[{ s:"It is rude to {{}} at people.", f:"stare", ko:"사람을 빤히 보는 것은 무례하다." }] },

  /* stellar(챕터 16) 와 갈랐다 — 그쪽은 '뛰어난' 쪽이다. */
  { word:"starry", pron:"스타리", pos:"adj", level:"B2", meanings:["별이 많은"],
    syn:["full of stars","lit by stars","dotted with stars"],
    ex:[{ s:"They slept under a {{}} sky.", f:"starry", ko:"그들은 별이 많은 하늘 아래 잤다." }] },

  /* 승격 145 — 사전 단일값 유지. 참조 frighten(F) 의 화면은 바뀌지 않는다. */
  { word:"startle", pron:"스타틀", pos:"v", level:"B2", meanings:["흠칫 놀라게 하다"],
    syn:["frighten","give a sudden shock","make jump"],
    ex:[{ s:"The noise will {{}} the horses.", f:"startle", ko:"그 소음이 말들을 흠칫 놀라게 할 것이다." }] },

  { word:"startling", pron:"스타틀링", pos:"adj", level:"B2", meanings:["깜짝 놀랄","아주 놀라운"],
    syn:["giving a shock","hard to believe","sudden and surprising"],
    ex:[{ s:"The report had a {{}} figure in it.", f:"startling", ko:"그 보고서에는 깜짝 놀랄 수치가 있었다." }] },

  /* 승격 146 — 사전 글자 유지. 참조 famine(F)·hunger(H)·malnutrition(M)
     세 곳의 화면은 바뀌지 않는다. famine(굶주림, 기아) 과 '기아' 가 같아
     자동 배제된다. */
  { word:"starvation", pron:"스타베이션", pos:"n", level:"B2", meanings:["굶어 죽음","기아"],
    syn:["famine","hunger","malnutrition"],
    ex:[{ s:"Many died of {{}} that winter.", f:"starvation", ko:"그해 겨울 많은 이가 굶어 죽었다." }] },

  { word:"starve", pron:"스타브", pos:"v", level:"B1", meanings:["굶주리다"],
    syn:["go without food","suffer hunger","waste from lack of food"],
    ex:[{ s:"The cattle began to {{}}.", f:"starve", ko:"소들이 굶주리기 시작했다." }] },

  /* 승격 147 — ★ '상태' 를 버린 자리다. 사전이 '발언하다; 상태' 로 동사와 명사를
     섞어 두었고 참조 comment(C) 가 동사여서 동사로 세웠다. 사전의 '발언하다' 는
     R 세트 remark 자리라 원본 표현을 썼다 — 그 한 곳의 설명이 '발언하다; 상태'
     에서 '말하다, 진술하다' 가 된다. '상태' 는 챕터 16 의 status 가 받는다. */
  { word:"state", pron:"스테이트", pos:"v", level:"B1", meanings:["말하다","진술하다"],
    syn:["comment","say plainly","set out in words"],
    ex:[{ s:"Please {{}} your reason clearly.", f:"state", ko:"이유를 분명히 말해 주세요." }] },

  /* 원본의 앞 갈래는 뜻이 아니라 설명이라 줄였다. */
  { word:"state-of-the-art", pron:"스테이트 오브 디 아트", pos:"adj", level:"C1", meanings:["최신의"],
    syn:["most advanced","up to the minute","newest in design"],
    ex:[{ s:"The hall has {{}} sound gear.", f:"state-of-the-art", ko:"그 회관은 최신의 음향 장비를 갖췄다." }] },

  { word:"statesman", pron:"스테이츠먼", pos:"n", level:"C1", meanings:["정치가"],
    syn:["respected political leader","wise ruler","senior figure in government"],
    ex:[{ s:"He was known as a fine {{}}.", f:"statesman", ko:"그는 훌륭한 정치가로 알려졌다." }] },

  /* 원본의 '잡음' 은 버렸다 — 명사 갈래다. */
  { word:"static", pron:"스태틱", pos:"adj", level:"C1", meanings:["움직이지 않는","변하지 않는"],
    syn:["at rest","showing no change","fixed in place"],
    ex:[{ s:"Prices stayed {{}} all year.", f:"static", ko:"값이 한 해 내내 변하지 않았다." }] },

  /* 원본은 세 갈래였다. 하나로 줄여 아래 statistics(명사) 와 갈랐다. */
  { word:"statistical", pron:"스터티스티컬", pos:"adj", level:"B2", meanings:["통계에 근거한"],
    syn:["based on figures","to do with data counts","drawn from numbers"],
    ex:[{ s:"They found a {{}} link.", f:"statistical", ko:"그들은 통계에 근거한 연관을 찾았다." }] },

  { word:"statistics", pron:"스터티스틱스", pos:"n", level:"B2", meanings:["통계","통계학"],
    syn:["collected figures","study of numerical data","numbers gathered together"],
    ex:[{ s:"The {{}} show a clear rise.", f:"statistics", ko:"그 통계는 뚜렷한 상승을 보인다." }] },

  /* 승격 148 — 사전 단일값 유지. 참조 carving(C) 의 화면은 바뀌지 않는다. */
  { word:"statue", pron:"스태추", pos:"n", level:"B1", meanings:["조각상"],
    syn:["carving","figure in stone","sculpted image"],
    ex:[{ s:"A bronze {{}} stood in the park.", f:"statue", ko:"공원에 청동 조각상이 서 있었다." }] },

  /* ── 챕터 16 ───────────────────────────────────── */
  /* ⚠ stem 의 사전값 '유래하다, 생기다' 는 사실 stem from 쪽 뜻이었다. 두 낱말이
     같은 챕터에 있어서 깔끔하게 나눌 수 있었다.
       stem      줄기 (n)            ← 원본이 앞세운 갈래
       stem from ~에서 유래하다 (phr)   ← 동사 뜻을 이쪽이 받는다
     참조 derive(D) 의 syn 을 "stem" 에서 "stem from" 으로 옮겼다.

     '엄격한' 이 셋 맞물린다.
       severe(심각한, 엄격한 · 챕터 6) · stern(엄격한, 단호한) · strict(엄격한 · 챕터 17)
     세 낱말의 '엄격한' 을 글자까지 같게 두어 서로의 오답에서 자동으로 빠지게 했다.

     stick to(~을 고수하다) · stick to one's last(본분을 지키다) ·
     stick with(~와 함께 있다) 도 서로 겹치지 않게 갈랐다.
     still(고요한, 잔잔한) 은 serene(고요한, 평화로운 · 챕터 6) 과 첫 갈래가 같아
     자동 배제된다. 사전의 '여전히' 는 부사라 담지 않았다.
     stellar(별의, 뛰어난) 는 starry(별이 많은 · 챕터 15) 와 갈랐다. */

  /* 승격 149 — 사전 글자 유지. 참조 citizenship(C) 의 화면은 바뀌지 않는다.
     챕터 15 의 state 가 넘긴 '상태' 를 이 낱말이 받는다. */
  { word:"status", pron:"스테이터스", pos:"n", level:"B1", meanings:["지위","상태"],
    syn:["citizenship","rank in society","place one holds"],
    ex:[{ s:"Her legal {{}} is still unclear.", f:"status", ko:"그녀의 법적 지위는 아직 분명하지 않다." }] },

  /* 원본이 길어 줄였다. 구·표현이라 예문은 두지 않는다. */
  { word:"status symbol", pron:"스테이터스 심벌", pos:"phr", level:"C1", meanings:["신분을 드러내는 것"],
    syn:["mark of high rank","sign of wealth","thing that shows one's rank"] },

  /* 승격 150 — 사전 글자 유지. 참조 faithful(F) 의 화면은 바뀌지 않는다. */
  { word:"steadfast", pron:"스테드패스트", pos:"adj", level:"C2", meanings:["확고한","변함없는"],
    syn:["faithful","firm and unchanging","not to be shaken"],
    ex:[{ s:"She was {{}} in her support.", f:"steadfast", ko:"그녀는 지지에 확고했다." }] },

  { word:"steel", pron:"스틸", pos:"n", level:"B1", meanings:["강철"],
    syn:["hard metal of iron","iron mixed with carbon","strong grey metal"],
    ex:[{ s:"The frame is made of {{}}.", f:"steel", ko:"그 골조는 강철로 만들어졌다." }] },

  { word:"steep", pron:"스팁", pos:"adj", level:"B1", meanings:["가파른","급격한"],
    syn:["rising sharply","at a big angle","very sudden in rise"],
    ex:[{ s:"The path grew {{}} near the top.", f:"steep", ko:"그 길은 정상 근처에서 가파르게 되었다." }] },

  /* 승격 151 — 사전 단일값 유지. 참조 maneuver(M) 의 화면은 바뀌지 않는다. */
  { word:"steer", pron:"스티어", pos:"v", level:"B2", meanings:["방향을 조종하다"],
    syn:["maneuver","guide the course of","turn the wheel of"],
    ex:[{ s:"He tried to {{}} the boat to shore.", f:"steer", ko:"그는 배의 방향을 해안으로 조종하려 했다." }] },

  /* 승격 152 — 사전 글자 유지. 참조 celestial(C) 의 화면은 바뀌지 않는다.
     starry(별이 많은 · 챕터 15) 와 갈랐다. */
  { word:"stellar", pron:"스텔러", pos:"adj", level:"C1", meanings:["별의","뛰어난"],
    syn:["celestial","of the stars","outstanding in quality"],
    ex:[{ s:"She gave a {{}} performance.", f:"stellar", ko:"그녀는 뛰어난 연주를 했다." }] },

  /* 승격 153 — ⚠ 사전값 '유래하다, 생기다' 는 아래 stem from 쪽 뜻이었다.
     원본이 앞세운 명사 '줄기' 로 세우고 참조 derive(D) 의 syn 을 'stem from'
     으로 옮겼다. */
  { word:"stem", pron:"스템", pos:"n", level:"B1", meanings:["줄기"],
    syn:["part that holds a plant up","stalk of a plant","main shaft of a plant"],
    ex:[{ s:"Cut the {{}} just below the leaf.", f:"stem", ko:"잎 바로 아래에서 줄기를 자르라." }] },

  /* 승격 154 — 사전 단일값 유지. 참조 date back to(D) 의 화면은 바뀌지 않는다.
     여기에 derive(D) 가 새로 붙는다 — 위 stem 에서 옮겨 온 자리다.
     구·표현이라 예문은 두지 않는다. */
  { word:"stem from", pron:"스템 프럼", pos:"phr", level:"B2", meanings:["~에서 유래하다"],
    syn:["date back to","come down from","have its root in"] },

  { word:"step out of", pron:"스텝 아웃 오브", pos:"phr", level:"B1", meanings:["~에서 나오다"],
    syn:["walk out of","come out from","leave the inside of"] },

  { word:"stereotype", pron:"스테레오타입", pos:"n", level:"B2", meanings:["고정관념"],
    syn:["fixed idea of a group","set image of people","worn-out notion"],
    ex:[{ s:"The film breaks an old {{}}.", f:"stereotype", ko:"그 영화는 낡은 고정관념을 깬다." }] },

  /* 승격 155 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 barren(B) 한 곳의 설명이
     '메마른; 무균의' 에서 '메마른, 무균의' 가 된다. */
  { word:"sterile", pron:"스테럴", pos:"adj", level:"C1", meanings:["메마른","무균의"],
    syn:["barren","dry and bare","free of germs"],
    ex:[{ s:"The tools must be fully {{}}.", f:"sterile", ko:"그 기구들은 완전히 무균이어야 한다." }] },

  { word:"sterilize", pron:"스테럴라이즈", pos:"v", level:"C1", meanings:["소독하다","살균하다"],
    syn:["kill germs on","make free of bacteria","clean of all life"],
    ex:[{ s:"Please {{}} the bottles first.", f:"sterilize", ko:"먼저 그 병들을 소독해 주세요." }] },

  /* 승격 156 — 사전 글자 유지. 참조 harsh(H) 의 화면은 바뀌지 않는다.
     severe(챕터 6)·strict(챕터 17) 와 '엄격한' 을 글자까지 맞춰 두었다. */
  { word:"stern", pron:"스턴", pos:"adj", level:"C1", meanings:["엄격한","단호한"],
    syn:["harsh","firm in manner","allowing no excuse"],
    ex:[{ s:"He gave a {{}} warning.", f:"stern", ko:"그는 단호한 경고를 했다." }] },

  { word:"stick to", pron:"스틱 투", pos:"phr", level:"B1", meanings:["~을 고수하다"],
    syn:["hold to firmly","keep on with","not give up on"] },

  /* 원본의 둘째 갈래는 뜻이 아니라 설명이라 버렸다. */
  { word:"stick to one's last", pron:"스틱 투 원스 라스트", pos:"phr", level:"C2", meanings:["본분을 지키다"],
    syn:["keep to one's own trade","mind one's own work","do what one knows"] },

  /* '고수하다' 는 위 stick to 자리라 이쪽은 '함께 있다' 만 맡는다. */
  { word:"stick with", pron:"스틱 위드", pos:"phr", level:"B1", meanings:["~와 함께 있다"],
    syn:["remain beside","keep company with","stay close to"] },

  /* 승격 157 — 사전 단일값과 발음을 글자까지 지켰다(발음 '스티프은' 도 사전
     그대로다). 참조 harden(H) 의 화면은 바뀌지 않는다. */
  { word:"stiffen", pron:"스티프은", pos:"v", level:"C1", meanings:["뻣뻣하게 하다"],
    syn:["harden","make rigid","take the bend out of"],
    ex:[{ s:"Cold will {{}} the rubber.", f:"stiffen", ko:"추위가 그 고무를 뻣뻣하게 할 것이다." }] },

  /* 승격 158 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 choke(C) 한 곳의 설명이
     '억누르다; 질식시키다' 에서 '억누르다, 질식시키다' 가 된다.
     suppress(억압하다 · 챕터 20)·repress(R) 와는 갈라 두었다. */
  { word:"stifle", pron:"스타이플", pos:"v", level:"C1", meanings:["억누르다","질식시키다"],
    syn:["choke","hold down a feeling","cut off the air of"],
    ex:[{ s:"She tried to {{}} a laugh.", f:"stifle", ko:"그녀는 웃음을 억누르려 했다." }] },

  /* 승격 159 — 사전은 '여전히; 고요한' 으로 부사와 형용사를 섞어 두었다.
     참조가 없어 원본대로 형용사로 세웠다. serene(고요한, 평화로운 · 챕터 6) 과
     첫 갈래가 같아 자동 배제된다. */
  { word:"still", pron:"스틸", pos:"adj", level:"B1", meanings:["고요한","잔잔한"],
    syn:["quiet and unmoving","free of stir now","calm without a ripple"],
    ex:[{ s:"The lake was {{}} that morning.", f:"still", ko:"그 아침 호수는 잔잔했다." }] },

  /* ── 챕터 17 ───────────────────────────────────── */
  /* ★ straightforward 는 원본이 '눈에 잘 띄는' 으로 적혀 있었다. conspicuous 의
     뜻이 잘못 끼어든 것이라 사전값 '단순명료한, 쉬운' 으로 바로잡았다 —
     참조 complicated(복잡한, 뒤얽힌) 의 반의어로도 이쪽이 맞는다.

     stock 은 사전이 '재고; 저장하다' 였고 원본은 '재고, 주식' 이었다. 참조 둘이
     모두 사전의 '저장하다' 쪽을 쓰고 있었는데 그 자리는 같은 챕터의 store 가
     받는다. 명사로 세우고 두 곳을 갈았다.
       broth(n)    stock → meat water            육수 뜻으로 쓰던 자리였다
       deal in(phr) stock → keep goods for sale   동사 뜻으로 쓰던 자리였다

     strict(엄격한) 은 stern(엄격한, 단호한 · 챕터 16)·severe(심각한, 엄격한 ·
     챕터 6) 와 글자를 맞춰 셋이 서로의 오답에서 자동으로 빠지게 했다.
     stray(벗어나다, 빗나가다) 는 deviate(벗어나다, 빗나가다 · D) 와 글자가
     똑같아 역시 자동 배제된다. */

  { word:"stillness", pron:"스틸니스", pos:"n", level:"B2", meanings:["고요","평온"],
    syn:["deep quiet","hush over all","calm with no sound"],
    ex:[{ s:"A deep {{}} fell over the wood.", f:"stillness", ko:"깊은 고요가 그 숲에 내렸다." }] },

  /* 승격 160 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 inspire(I) 한 곳의 설명이
     '자극하다; 활성화하다' 에서 '자극하다, 활성화하다' 가 된다. */
  { word:"stimulate", pron:"스티뮬레이트", pos:"v", level:"B1", meanings:["자극하다","활성화하다"],
    syn:["inspire","rouse to action","spur into life"],
    ex:[{ s:"Low rates {{}} the economy.", f:"stimulate", ko:"낮은 금리가 경제를 자극한다." }] },

  /* 원본이 [v+n] 이었다. 동사로 세웠다. */
  { word:"sting", pron:"스팅", pos:"v", level:"B2", meanings:["찌르다","쏘다"],
    syn:["prick with a point","give a sharp pain","jab and hurt"],
    ex:[{ s:"Bees will {{}} if you disturb them.", f:"sting", ko:"벌은 건드리면 쏜다." }] },

  /* 승격 161 — 사전 단일값 유지. 참조 generous(G) 의 화면은 바뀌지 않는다. */
  { word:"stingy", pron:"스틴지", pos:"adj", level:"C1", meanings:["인색한"],
    syn:["mean with money","unwilling to give","tight with cash"], ant:["generous"],
    ex:[{ s:"He was too {{}} to tip.", f:"stingy", ko:"그는 팁을 주기에 너무 인색했다." }] },

  /* 승격 162 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 agitate(A) 한 곳의 설명이
     '젓다; 감동시키다' 에서 '젓다, 감동시키다' 가 된다. */
  { word:"stir", pron:"스터", pos:"v", level:"B1", meanings:["젓다","감동시키다"],
    syn:["agitate","mix with a spoon","move the heart of"],
    ex:[{ s:"Please {{}} the soup slowly.", f:"stir", ko:"수프를 천천히 저어 주세요." }] },

  /* 승격 163 — 사전 첫 갈래에 원본의 '주식' 을 붙였다. 사전의 '저장하다' 는
     아래 store 가 받는다. 그 뜻으로 쓰고 있던 broth(B)·deal in(D) 두 자리를
     각각 갈았다. */
  { word:"stock", pron:"스톡", pos:"n", level:"B1", meanings:["재고","주식"],
    syn:["goods held in store","shares in a company","supply kept on hand"],
    ex:[{ s:"The shop ran out of {{}}.", f:"stock", ko:"그 가게는 재고가 바닥났다." }] },

  { word:"stockholder", pron:"스톡홀더", pos:"n", level:"C1", meanings:["주주"],
    syn:["part-owner of a firm","holder of shares","one who owns stock"],
    ex:[{ s:"Every {{}} received a letter.", f:"stockholder", ko:"모든 주주가 편지를 받았다." }] },

  /* 승격 164 — 사전 첫 갈래만 남겼다. 참조 accumulate(A) 가 동사라 그대로 맞는다. */
  { word:"stockpile", pron:"스톡파일", pos:"v", level:"C1", meanings:["비축하다"],
    syn:["accumulate","lay up a supply","gather a large store"],
    ex:[{ s:"They began to {{}} fuel.", f:"stockpile", ko:"그들은 연료를 비축하기 시작했다." }] },

  /* 승격 165 — 사전 단일값 유지. 참조 drop by(D) 의 화면은 바뀌지 않는다.
     구·표현이라 예문은 두지 않는다. */
  { word:"stop by", pron:"스탑 바이", pos:"phr", level:"B1", meanings:["잠시 들르다"],
    syn:["drop by","call in briefly","look in on the way"] },

  /* 원본의 '도중하차' 는 버렸다 — 뜻이 좁다. */
  { word:"stopover", pron:"스탑오버", pos:"n", level:"C2", meanings:["단기 체류"],
    syn:["short stay on a trip","brief halt on a journey","break in a journey"],
    ex:[{ s:"We had a one-day {{}} in Tokyo.", f:"stopover", ko:"우리는 도쿄에서 하루 단기 체류를 했다." }] },

  /* 승격 166 — 사전 글자 유지. 참조는 없다. */
  { word:"storage", pron:"스토리지", pos:"n", level:"B2", meanings:["저장","보관"],
    syn:["keeping of goods","space for keeping things","act of putting away"],
    ex:[{ s:"The boxes went into {{}}.", f:"storage", ko:"그 상자들은 보관에 들어갔다." }] },

  /* 승격 167 — 사전 첫 갈래만 남겼다. 참조 house(H) 가 동사라 그대로 맞는다.
     위 stock 이 넘긴 '저장하다' 를 이 낱말이 받는다. */
  { word:"store", pron:"스토어", pos:"v", level:"B1", meanings:["저장하다"],
    syn:["house","put away for later","keep in a safe place"],
    ex:[{ s:"We {{}} the grain in a dry barn.", f:"store", ko:"우리는 마른 헛간에 곡식을 저장한다." }] },

  /* 승격 168 — ★ 원본 '눈에 잘 띄는' 은 conspicuous 의 뜻이었다. 사전값
     '단순명료한, 쉬운' 으로 바로잡았다 — 참조 complicated(C) 의 반의어로도
     이쪽이 맞는다. 그 한 곳의 화면은 바뀌지 않는다. */
  { word:"straightforward", pron:"스트레이트포워드", pos:"adj", level:"B2", meanings:["단순명료한","쉬운"],
    syn:["easy to follow","plain and clear","simple to grasp"], ant:["complicated"],
    ex:[{ s:"The rule is quite {{}}.", f:"straightforward", ko:"그 규칙은 꽤 단순명료하다." }] },

  /* 승격 169 — 사전 글자 유지. 참조 burden(B) 의 화면은 바뀌지 않는다. */
  { word:"strain", pron:"스트레인", pos:"n", level:"B2", meanings:["긴장","압박"],
    syn:["burden","tight pressure","heavy demand on one"],
    ex:[{ s:"The long trial put a {{}} on her.", f:"strain", ko:"그 긴 재판이 그녀에게 압박을 주었다." }] },

  /* 승격 170 — 사전 단일값 유지. 참조 fiber(F) 의 화면은 바뀌지 않는다.
     원본의 동사 갈래는 버렸다. */
  { word:"strand", pron:"스트랜드", pos:"n", level:"C1", meanings:["한 가닥"],
    syn:["fiber","single thread","thin thread of hair"],
    ex:[{ s:"One {{}} of hair lay on the desk.", f:"strand", ko:"머리카락 한 가닥이 책상에 놓여 있었다." }] },

  /* 승격 171 — 사전 단일값 유지. 참조는 없다. */
  { word:"strategy", pron:"스트래터지", pos:"n", level:"B1", meanings:["전략"],
    syn:["plan of action","long-term plan","way worked out in advance"],
    ex:[{ s:"They changed their {{}} at halftime.", f:"strategy", ko:"그들은 전반이 끝나고 전략을 바꿨다." }] },

  /* 승격 172 — 사전 글자 유지. 참조 deviate(D)·drift(D) 두 곳의 화면은 바뀌지
     않는다. deviate 와 뜻이 글자까지 똑같아 서로의 오답에서 자동으로 빠진다. */
  { word:"stray", pron:"스트레이", pos:"v", level:"B2", meanings:["벗어나다","빗나가다"],
    syn:["deviate","drift","wander off course"],
    ex:[{ s:"Do not {{}} from the path.", f:"stray", ko:"길에서 벗어나지 마라." }] },

  /* 승격 173 — 사전 글자 유지. 참조 demanding(D)·effortless(E)·laborious(L)
     세 곳의 화면은 바뀌지 않는다. */
  { word:"strenuous", pron:"스트레뉴어스", pos:"adj", level:"C1", meanings:["격렬한","몸이 힘든"],
    syn:["demanding","laborious","taking hard effort"], ant:["effortless"],
    ex:[{ s:"Avoid {{}} work for a week.", f:"strenuous", ko:"한 주 동안 몸이 힘든 일은 피하라." }] },

  /* 승격 174 — 사전 단일값 유지. 참조 indulgent(I) 의 화면은 바뀌지 않는다.
     stern(챕터 16)·severe(챕터 6) 와 '엄격한' 을 글자까지 맞춰 두었다. */
  { word:"strict", pron:"스트릭트", pos:"adj", level:"B1", meanings:["엄격한"],
    syn:["allowing no slack","firm about rules","exact in demand"], ant:["indulgent"],
    ex:[{ s:"The school has a {{}} rule on this.", f:"strict", ko:"그 학교는 이에 대해 엄격한 규칙이 있다." }] },

  { word:"stride", pron:"스트라이드", pos:"v", level:"B2", meanings:["성큼성큼 걷다"],
    syn:["walk with long steps","take long paces","march with big steps"],
    ex:[{ s:"He began to {{}} across the yard.", f:"stride", ko:"그는 마당을 성큼성큼 걷기 시작했다." }] },

  /* ── 챕터 18 ───────────────────────────────────── */
  /* 사전이 동사와 명사를 섞어 둔 자리가 셋인데, 참조가 명사 쪽을 쓰고 있어
     그 자리를 갈았다.
       strip    벗기다; 조각      → 벗기다      comic strip(n) → picture cartoon series
       struggle 투쟁; 힘겨워하다   → 힘겨워하다, 투쟁하다   conflict(n) → open quarrel
       stuff    채우다; 물건      → 채우다      material(n) → raw stuff for making

     strive(노력하다, 분투하다) 와 struggle(힘겨워하다, 투쟁하다) 를 갈랐다 —
     앞은 이루려 애쓰는 쪽, 뒤는 버거워하는 쪽이다.
     stubborn 은 사전의 '고집센' 을 '고집 센' 으로 띄어 썼다. 이렇게 해야
     obstinate(고집 센, 완강한 · O) 와 글자가 맞아 서로의 오답에서 자동으로 빠진다.
     stumble(넘어지다) 은 stagger(비틀거리다 · 챕터 14) 와 갈랐다.
     subconscious(잠재의식, n) 와 subliminal(잠재의식의, adj) 은 품사로 갈린다. */

  /* 승격 175 — 사전 단일값 유지. 참조 impressive(I)·notable(N) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"striking", pron:"스트라이킹", pos:"adj", level:"B2", meanings:["눈에 띄는"],
    syn:["impressive","notable","hard to miss"],
    ex:[{ s:"There is a {{}} likeness between them.", f:"striking", ko:"그들 사이에는 눈에 띄는 닮음이 있다." }] },

  { word:"string", pron:"스트링", pos:"n", level:"B1", meanings:["줄","끈"],
    syn:["thin cord","line of twisted thread","length of twine"],
    ex:[{ s:"Tie the box with a {{}}.", f:"string", ko:"그 상자를 끈으로 묶어라." }] },

  /* 승격 176 — 사전 첫 갈래만 남겼다. 명사 '조각' 을 쓰고 있던 comic strip(C)
     의 그 자리를 'picture cartoon series' 로 갈았다. */
  { word:"strip", pron:"스트립", pos:"v", level:"B2", meanings:["벗기다"],
    syn:["pull the cover off","take the skin from","peel bare"], ant:["adorn"],
    ex:[{ s:"They began to {{}} the old paint.", f:"strip", ko:"그들은 낡은 페인트를 벗기기 시작했다." }] },

  /* 승격 177 — 사전 글자 유지. 참조가 네 곳(aim·aspire·attempt·endeavor) 인데
     하나도 바뀌지 않는다. */
  { word:"strive", pron:"스트라이브", pos:"v", level:"B2", meanings:["노력하다","분투하다"],
    syn:["aspire","endeavor","work hard at"],
    ex:[{ s:"They {{}} to finish before winter.", f:"strive", ko:"그들은 겨울 전에 끝내려고 노력한다." }] },

  /* 승격 178 — 사전 단일값 유지. 참조 anatomy(A)·architecture(A) 두 곳의
     화면은 바뀌지 않는다. 원본의 동사 갈래는 버렸다. */
  { word:"structure", pron:"스트럭처", pos:"n", level:"B1", meanings:["구조"],
    syn:["anatomy","architecture","way parts are put together"],
    ex:[{ s:"The {{}} of the bone is hollow.", f:"structure", ko:"그 뼈의 구조는 속이 비어 있다." }] },

  /* 승격 179 — 사전은 '투쟁; 힘겨워하다' 로 명사가 앞이었다. 참조 셋 중
     agonize(A)·battle(B) 가 동사여서 동사를 앞세웠다. 명사 쪽을 쓰던
     conflict(C) 한 자리를 'open quarrel' 로 갈았다. */
  { word:"struggle", pron:"스트러글", pos:"v", level:"B1", meanings:["힘겨워하다","투쟁하다"],
    syn:["agonize","battle","have a hard time of it"],
    ex:[{ s:"Many firms {{}} in a downturn.", f:"struggle", ko:"많은 회사가 침체기에 힘겨워한다." }] },

  /* 승격 180 — 사전의 '고집센' 을 '고집 센' 으로 띄어 썼다. 참조 obstinate(O)
     한 곳의 설명에 빈칸 하나가 생긴다. 이렇게 해야 obstinate(고집 센, 완강한) 과
     글자가 맞아 서로의 오답에서 자동으로 빠진다. */
  { word:"stubborn", pron:"스터번", pos:"adj", level:"B2", meanings:["완고한","고집 센"],
    syn:["obstinate","set in one's ways","hard to move"],
    ex:[{ s:"He is {{}} about small things.", f:"stubborn", ko:"그는 작은 일에 완고하다." }] },

  /* 구·표현이라 예문은 두지 않는다. */
  { word:"student union", pron:"스튜던트 유니언", pos:"phr", level:"B2", meanings:["학생회관"],
    syn:["hall for students","building for student life","meeting place for students"] },

  /* 승격 181 — 사전 첫 갈래만 남겼다. 명사 '물건' 을 쓰고 있던 material(M) 의
     그 자리를 'raw stuff for making' 으로 갈았다.
     fill(채우다, 메우다) 과 첫 갈래가 같아 자동 배제된다. */
  { word:"stuff", pron:"스터프", pos:"v", level:"B1", meanings:["채우다"],
    syn:["cram","fill","pack in tightly"],
    ex:[{ s:"Do not {{}} the bag too full.", f:"stuff", ko:"그 가방을 너무 가득 채우지 마라." }] },

  /* stagger(비틀거리다 · 챕터 14) 와 갈랐다 — 이쪽은 발이 걸려 쓰러지는 쪽이다. */
  { word:"stumble", pron:"스텀블", pos:"v", level:"B2", meanings:["넘어지다"],
    syn:["trip and fall","lose one's footing","catch the foot"],
    ex:[{ s:"Be careful not to {{}} on the step.", f:"stumble", ko:"계단에서 넘어지지 않도록 조심하라." }] },

  /* 승격 182 — 사전 글자 유지. 참조 awesome(A)·breathtaking(B)·marvelous(M)
     세 곳의 화면은 바뀌지 않는다. marvelous(놀라운, 굉장한) 와 첫 갈래가 같아
     자동 배제된다. */
  { word:"stunning", pron:"스터닝", pos:"adj", level:"B2", meanings:["놀라운","멋진"],
    syn:["awesome","breathtaking","marvelous"],
    ex:[{ s:"The view from the top was {{}}.", f:"stunning", ko:"정상에서 본 경관은 놀라웠다." }] },

  /* 승격 183 — 사전 글자 유지. 참조 delicate(D)·firm(F) 두 곳의 화면은 바뀌지
     않는다. */
  { word:"sturdy", pron:"스터디", pos:"adj", level:"B2", meanings:["튼튼한","견고한"],
    syn:["firm","solidly built","strong in build"], ant:["delicate"],
    ex:[{ s:"She bought a {{}} pair of boots.", f:"sturdy", ko:"그녀는 튼튼한 장화 한 쌍을 샀다." }] },

  { word:"subconscious", pron:"섭칸셔스", pos:"n", level:"C1", meanings:["잠재의식"],
    syn:["hidden layer of the mind","part of the mind below thought","unaware level of thinking"],
    ex:[{ s:"The dream came from her {{}}.", f:"subconscious", ko:"그 꿈은 그녀의 잠재의식에서 나왔다." }] },

  /* 승격 184 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 conquer(C)·dampen(D) 두 곳의
     설명이 '제압하다; 진정시키다' 에서 '제압하다, 진정시키다' 가 된다. */
  { word:"subdue", pron:"섭듀", pos:"v", level:"C1", meanings:["제압하다","진정시키다"],
    syn:["conquer","dampen","bring under control"],
    ex:[{ s:"Guards moved in to {{}} the crowd.", f:"subdue", ko:"경비들이 군중을 제압하러 들어갔다." }] },

  /* 참조가 없어 원본 앞 갈래로 세웠다(동사 '복종시키다' 는 버렸다). */
  { word:"subject", pron:"섭젝트", pos:"n", level:"B1", meanings:["주제","대상"],
    syn:["topic of talk","matter dealt with","thing under study"],
    ex:[{ s:"Let us change the {{}}.", f:"subject", ko:"주제를 바꾸자." }] },

  /* 승격 185 — 사전 단일값 유지. 참조 arbitrary(A)·objective(O) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"subjective", pron:"섭젝티브", pos:"adj", level:"B2", meanings:["주관적인"],
    syn:["arbitrary","based on one's own view","coloured by feeling"], ant:["objective"],
    ex:[{ s:"Taste in art is {{}}.", f:"subjective", ko:"예술 취향은 주관적이다." }] },

  /* 위 subconscious(명사) 와 품사로 갈린다. */
  { word:"subliminal", pron:"섭리미널", pos:"adj", level:"C2", meanings:["잠재의식의"],
    syn:["below the level of thought","working on the unaware mind","under the surface of the mind"],
    ex:[{ s:"The ad used a {{}} message.", f:"subliminal", ko:"그 광고는 잠재의식의 메시지를 썼다." }] },

  /* 원본이 [adj+n] 이었다. 명사로 세웠다. */
  { word:"submarine", pron:"섭머린", pos:"n", level:"B2", meanings:["잠수함"],
    syn:["ship that goes under water","underwater vessel","boat that dives"],
    ex:[{ s:"The {{}} stayed down for a week.", f:"submarine", ko:"그 잠수함은 한 주 동안 물속에 있었다." }] },

  /* 승격 186 — 사전 단일값 유지. 참조 immerse(I) 의 화면은 바뀌지 않는다. */
  { word:"submerge", pron:"섭머지", pos:"v", level:"C1", meanings:["물에 잠기게 하다"],
    syn:["immerse","sink below water","cover with liquid"],
    ex:[{ s:"The flood will {{}} the low fields.", f:"submerge", ko:"홍수가 낮은 밭을 물에 잠기게 할 것이다." }] },

  /* 승격 187 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 cave in(C)·comply(C) 두 곳의
     설명이 '제출하다; 굴복하다' 에서 '제출하다, 굴복하다' 가 된다.
     surrender(항복하다 · 챕터 21) 와는 갈라 두었다. */
  { word:"submit", pron:"섭미트", pos:"v", level:"B1", meanings:["제출하다","굴복하다"],
    syn:["cave in","comply","hand in for review"],
    ex:[{ s:"Please {{}} the form by Friday.", f:"submit", ko:"금요일까지 그 서식을 제출해 주세요." }] },

  /* ── 챕터 19 ───────────────────────────────────── */
  /* 승격이 열여섯 개인데 참조 손질은 한 곳뿐이다 — 사전 글자를 그대로 쓸 수 있는
     낱말이 많은 구간이다.
       commander(n) ant subordinate → person of lower rank
     subordinate 의 사전값은 '부하; 하급의' 로 명사와 형용사가 섞여 있었다.
     참조 셋 중 둘(dominant·inferior) 이 형용사여서 형용사로 세웠다.

     substance 는 참조가 다섯 곳(chemical·content·gist·material·matter) 인데
     쌍반점만 쉼표로 갈라 다섯 곳 모두 글자만 한 자 바뀐다.
     successor(후임자, 계승자) 는 predecessor(전임자, 이전 것 · P) 와 짝이다.
     suffocate(질식시키다) 는 stifle(억누르다, 질식시키다 · 챕터 16)·
     choke(질식시키다, 숨이 막히다 · C) 와 글자가 맞물려 자동 배제된다. */

  /* 승격 188 — 사전은 '부하; 하급의' 였다. 참조 셋 중 둘이 형용사여서 형용사로
     세우고, 명사 쪽을 쓰던 commander(C) 한 자리를 갈았다. */
  { word:"subordinate", pron:"서보더닛", pos:"adj", level:"C1", meanings:["종속된","부수적인"],
    syn:["inferior","subject to another","not the main one"], ant:["dominant"],
    ex:[{ s:"That aim is {{}} to the main one.", f:"subordinate", ko:"그 목표는 주된 목표에 종속된다." }] },

  { word:"subscribe", pron:"섭스크라이브", pos:"v", level:"B2", meanings:["구독하다","지지하다"],
    syn:["take a paper regularly","pay to receive","agree with a view"],
    ex:[{ s:"I {{}} to two weekly papers.", f:"subscribe", ko:"나는 주간지 두 종을 구독한다." }] },

  { word:"subsequence", pron:"섭시퀀스", pos:"n", level:"C2", meanings:["이어서 일어나는 것"],
    syn:["what follows after","thing that comes next","later happening"],
    ex:[{ s:"The report traced each {{}}.", f:"subsequence", ko:"그 보고서는 이어서 일어나는 것을 하나씩 짚었다." }] },

  /* 승격 189 — 사전 글자 유지. 참조 consequent(C) 의 화면은 바뀌지 않는다. */
  { word:"subsequent", pron:"섭시퀀트", pos:"adj", level:"B2", meanings:["뒤이은","차후의"],
    syn:["consequent","coming next in order","following in time"],
    ex:[{ s:"The {{}} meeting settled it.", f:"subsequent", ko:"뒤이은 회의가 그것을 마무리했다." }] },

  /* 승격 190 — 사전 단일값 유지. 참조 afterwards(A) 의 화면은 바뀌지 않는다. */
  { word:"subsequently", pron:"섭시퀀틀리", pos:"adv", level:"B2", meanings:["그 후에"],
    syn:["afterwards","later on","at a later time"],
    ex:[{ s:"He {{}} moved to Busan.", f:"subsequently", ko:"그는 그 후에 부산으로 옮겼다." }] },

  /* 승격 191 — 사전 글자 유지. 참조 break out(B) 의 화면은 바뀌지 않는다. */
  { word:"subside", pron:"섭사이드", pos:"v", level:"C1", meanings:["가라앉다","잦아들다"],
    syn:["die down","grow less strong","settle to a lower level"], ant:["break out"],
    ex:[{ s:"The storm began to {{}} at noon.", f:"subside", ko:"폭풍이 정오에 잦아들기 시작했다." }] },

  /* 승격 192 — 사전 단일값 유지. 참조는 없다. */
  { word:"subsidize", pron:"섭서다이즈", pos:"v", level:"C1", meanings:["보조금을 주다"],
    syn:["give money to help","pay part of the cost","support with funds"],
    ex:[{ s:"The state will {{}} the new line.", f:"subsidize", ko:"주 정부가 새 노선에 보조금을 줄 것이다." }] },

  /* 승격 193 — 사전 단일값 유지. 참조 allowance(A)·bailout(B) 두 곳의 화면은
     바뀌지 않는다. 위 subsidize(동사) 와 품사로 갈린다. */
  { word:"subsidy", pron:"섭서디", pos:"n", level:"C1", meanings:["보조금"],
    syn:["allowance","bailout","money given as aid"],
    ex:[{ s:"Farmers receive a small {{}}.", f:"subsidy", ko:"농민들은 적은 보조금을 받는다." }] },

  /* 승격 194 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 다섯 곳(chemical·content·
     gist·material·matter) 의 설명이 '물질; 본질' 에서 '물질, 본질' 이 된다.
     matter(문제, 물질) 와 '물질' 이 같아 자동 배제된다. */
  { word:"substance", pron:"섭스턴스", pos:"n", level:"B1", meanings:["물질","본질"],
    syn:["chemical","gist","matter"],
    ex:[{ s:"The jar held an odd {{}}.", f:"substance", ko:"그 병에는 이상한 물질이 들어 있었다." }] },

  /* 승격 195 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 considerable(C) 한 곳의
     설명이 '상당한; 실질적인' 에서 '상당한, 실질적인' 이 된다. */
  { word:"substantial", pron:"섭스탠셜", pos:"adj", level:"B2", meanings:["상당한","실질적인"],
    syn:["considerable","large in amount","real and solid"],
    ex:[{ s:"They made a {{}} gain this year.", f:"substantial", ko:"그들은 올해 상당한 이익을 냈다." }] },

  /* 승격 196 — 사전 첫 갈래만 남겼다. 참조 alternative(A) 가 명사라 그대로
     맞는다. 원본은 세 갈래였다. */
  { word:"substitute", pron:"서브스터튜트", pos:"n", level:"B2", meanings:["대리인"],
    syn:["alternative","stand-in for another","one who acts for another"],
    ex:[{ s:"A {{}} took the class today.", f:"substitute", ko:"오늘은 대리인이 수업을 맡았다." }] },

  /* 승격 197 — 사전 단일값 유지. 참조 blatant(B)·delicate(D) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"subtle", pron:"서틀", pos:"adj", level:"B2", meanings:["미묘한"],
    syn:["delicate","hard to notice","fine in shade"], ant:["blatant"],
    ex:[{ s:"There is a {{}} difference here.", f:"subtle", ko:"여기에는 미묘한 차이가 있다." }] },

  /* 승격 198 — 사전 글자 유지. 참조 deduct(D) 의 화면은 바뀌지 않는다. */
  { word:"subtract", pron:"섭트랙트", pos:"v", level:"B1", meanings:["빼다","공제하다"],
    syn:["deduct","take away from","reduce by"],
    ex:[{ s:"{{}} five from twelve.", f:"Subtract", ko:"열둘에서 다섯을 빼라." }] },

  { word:"suburb", pron:"서버브", pos:"n", level:"B1", meanings:["교외","근교"],
    syn:["outer part of a city","district outside town","town on the edge of a city"],
    ex:[{ s:"They live in a quiet {{}}.", f:"suburb", ko:"그들은 조용한 교외에 산다." }] },

  /* 승격 199 — 사전 단일값 유지. 참조 alternate(A)·consecutive(C) 두 곳의
     화면은 바뀌지 않는다. consecutive(연속적인, 잇따른) 와 글자가 같아 자동
     배제된다. */
  { word:"successive", pron:"석세시브", pos:"adj", level:"B2", meanings:["연속적인"],
    syn:["alternate","consecutive","coming one after another"],
    ex:[{ s:"She won three {{}} games.", f:"successive", ko:"그녀는 연속적인 세 경기를 이겼다." }] },

  /* 승격 200 — 사전 글자 유지. 참조 descendant(D)·heir(H)·predecessor(P)
     세 곳의 화면은 바뀌지 않는다. predecessor(전임자, 이전 것) 와 짝이다. */
  { word:"successor", pron:"석세서", pos:"n", level:"B2", meanings:["후임자","계승자"],
    syn:["descendant","heir","one who follows in a post"], ant:["predecessor"],
    ex:[{ s:"The board named her {{}}.", f:"successor", ko:"이사회가 그녀의 후임자를 지명했다." }] },

  { word:"suck", pron:"석", pos:"v", level:"B1", meanings:["빨다","흡수하다"],
    syn:["draw in with the mouth","pull in by suction","take up liquid"],
    ex:[{ s:"Babies {{}} milk from a bottle.", f:"suck", ko:"아기는 병에서 우유를 빤다." }] },

  /* 승격 201 — 사전 단일값 유지. 참조 abrupt(A) 의 화면은 바뀌지 않는다.
     abrupt(갑작스러운, 뜻밖의) 와 첫 갈래가 같아 자동 배제된다. */
  { word:"sudden", pron:"서든", pos:"adj", level:"B1", meanings:["갑작스러운"],
    syn:["abrupt","happening all at once","coming without warning"],
    ex:[{ s:"There was a {{}} drop in price.", f:"sudden", ko:"값이 갑작스럽게 떨어졌다." }] },

  /* 승격 202 — 사전 단일값 유지. 참조 adequate(A)·ample(A)·deficient(D)
     세 곳의 화면은 바뀌지 않는다. */
  { word:"sufficient", pron:"서피션트", pos:"adj", level:"B1", meanings:["충분한"],
    syn:["adequate","ample","enough for the need"], ant:["deficient"],
    ex:[{ s:"One cup is {{}} for the recipe.", f:"sufficient", ko:"그 조리법에는 한 컵이 충분하다." }] },

  /* 승격 203 — 사전 단일값 유지. 참조 choke(C) 의 화면은 바뀌지 않는다.
     choke(질식시키다, 숨이 막히다)·stifle(억누르다, 질식시키다 · 챕터 16) 과
     글자가 맞물려 자동 배제된다. */
  { word:"suffocate", pron:"서퍼케이트", pos:"v", level:"C1", meanings:["질식시키다"],
    syn:["choke","cut off the breath of","kill by stopping air"],
    ex:[{ s:"Thick smoke can {{}} a person.", f:"suffocate", ko:"짙은 연기는 사람을 질식시킬 수 있다." }] },

  /* ── 챕터 20 ───────────────────────────────────── */
  /* 사전의 쌍반점을 쉼표로 가른 자리가 셋(summit·summon·sunken·supplement) 이고,
     뒤 갈래를 덜어 낸 자리가 둘이다.
       supply   공급하다; 공급 → 공급하다   참조 셋이 모두 동사다
       suppress 억압하다; 숨기다 → 억압하다   참조 다섯이 모두 '억누르다' 쪽이다
     suppress 는 이 세트에서 참조가 다섯 곳인 낱말 넷 가운데 하나다.

     ★ 이 챕터에서 예전 흠 둘을 함께 고쳤다. selfless(챕터 5)·suppose(이 챕터) 가
     표제어가 되면서 그 글자가 확정되기 때문이다.
       altruistic(A)  syn 에 selfless 와 unselfish 가 함께 있었는데 사전이 둘 다
                      '이타적인' 이었다 → unselfish 를 giving without reward 로
       assume(A)      syn 에 suppose 와 presume 이 함께 있었는데 둘 다
                      '추정하다, 가정하다' 였다 → presume 을 take for granted 로
     한 목록에 설명이 완전히 같은 선택지가 둘 있으면 '아닌 것 고르기' 가 성립하지
     않는다. A~C 세트에는 감사 도구가 없어 여태 드러나지 않았던 자리다.

     superficial(피상적인) 은 shallow(얕은, 피상적인 · 챕터 6) 와 글자를 맞췄다.
     superb(훌륭한, 최고의) 는 splendid(훌륭한, 빛나는 · 챕터 13) 와 갈랐다.
     superfluous 의 '여분의' 는 spare(챕터 12)·redundant(R) 자리라 버렸다. */

  { word:"suggestion", pron:"서제스천", pos:"n", level:"B1", meanings:["제안","암시"],
    syn:["idea put forward","hint of something","proposal for thought"],
    ex:[{ s:"She made one useful {{}}.", f:"suggestion", ko:"그녀는 쓸모 있는 제안 하나를 했다." }] },

  /* 승격 204 — 사전 단일값 유지. 참조 네 곳(appropriate·apt·eligible·fit) 의
     화면은 바뀌지 않는다. */
  { word:"suitable", pron:"수터블", pos:"adj", level:"B1", meanings:["적합한"],
    syn:["appropriate","apt","fit"],
    ex:[{ s:"This film is not {{}} for children.", f:"suitable", ko:"이 영화는 아이들에게 적합하지 않다." }] },

  /* 승격 205 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 conference(C)·peak(P) 두 곳의
     설명이 '정상; 정상회담' 에서 '정상, 정상회담' 이 된다. */
  { word:"summit", pron:"서밋", pos:"n", level:"B2", meanings:["정상","정상회담"],
    syn:["conference","peak","top of a mountain"],
    ex:[{ s:"They reached the {{}} at noon.", f:"summit", ko:"그들은 정오에 정상에 이르렀다." }] },

  /* 승격 206 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 call out(C)·conjure up(C)·
     convene(C) 세 곳의 설명이 '소환하다; 불러 모으다' 에서 '소환하다, 불러 모으다'
     가 된다. */
  { word:"summon", pron:"서먼", pos:"v", level:"C1", meanings:["소환하다","불러 모으다"],
    syn:["call out","convene","conjure up"],
    ex:[{ s:"The court will {{}} both sides.", f:"summon", ko:"법원이 양쪽을 소환할 것이다." }] },

  { word:"sun-baked", pron:"선 베이크트", pos:"adj", level:"C2", meanings:["햇볕에 말린"],
    syn:["dried by the sun","hardened in sunlight","parched by heat"],
    ex:[{ s:"They walked on {{}} clay.", f:"sun-baked", ko:"그들은 햇볕에 말린 진흙 위를 걸었다." }] },

  /* 승격 207 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 concave(C) 한 곳의 설명이
     '가라앉은; 움푹한' 에서 '가라앉은, 움푹한' 이 된다. */
  { word:"sunken", pron:"성컨", pos:"adj", level:"B2", meanings:["가라앉은","움푹한"],
    syn:["concave","gone under water","hollowed inward"],
    ex:[{ s:"Divers found a {{}} ship.", f:"sunken", ko:"잠수부들이 가라앉은 배를 찾았다." }] },

  { word:"sunscreen", pron:"선스크린", pos:"n", level:"B2", meanings:["자외선 차단제"],
    syn:["cream against sunburn","lotion that blocks rays","skin guard from the sun"],
    ex:[{ s:"Put on {{}} before you go out.", f:"sunscreen", ko:"나가기 전에 자외선 차단제를 바르라." }] },

  /* 승격 208 — 사전 글자 유지. 참조 네 곳(brilliant·exquisite·fabulous·
     magnificent) 의 화면은 바뀌지 않는다. splendid(훌륭한, 빛나는 · 챕터 13) 와는
     '최고의' 로 갈랐다. */
  { word:"superb", pron:"수퍼브", pos:"adj", level:"B2", meanings:["훌륭한","최고의"],
    syn:["brilliant","exquisite","fabulous"],
    ex:[{ s:"The meal was {{}}.", f:"superb", ko:"그 식사는 훌륭했다." }] },

  /* 승격 209 — 사전 단일값 유지. 참조는 없다. shallow(얕은, 피상적인 · 챕터 6)
     와 글자를 맞춰 자동 배제시켰다. */
  { word:"superficial", pron:"수퍼피셜", pos:"adj", level:"B2", meanings:["피상적인"],
    syn:["only on the top","not going deep","seen at a glance"],
    ex:[{ s:"His reading was rather {{}}.", f:"superficial", ko:"그의 독서는 다소 피상적이었다." }] },

  /* '여분의' 는 spare(챕터 12)·redundant(R) 자리라 버렸다. */
  { word:"superfluous", pron:"수퍼플루어스", pos:"adj", level:"C2", meanings:["필요 없는"],
    syn:["more than is needed","serving no purpose","able to be left out"],
    ex:[{ s:"Cut every {{}} word.", f:"superfluous", ko:"필요 없는 낱말은 모두 덜어 내라." }] },

  /* 승격 210 — 사전 단일값 유지. 참조 first-rate(F)·inferior(I) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"superior", pron:"수피어리어", pos:"adj", level:"B2", meanings:["더 뛰어난"],
    syn:["first-rate","better than others","above in quality"], ant:["inferior"],
    ex:[{ s:"This cloth is {{}} to that one.", f:"superior", ko:"이 천이 그것보다 더 뛰어나다." }] },

  { word:"supernatural", pron:"수퍼내추럴", pos:"adj", level:"B2", meanings:["초자연적인"],
    syn:["beyond nature","not of this world","past all natural law"],
    ex:[{ s:"The tale has a {{}} turn.", f:"supernatural", ko:"그 이야기에는 초자연적인 전환이 있다." }] },

  { word:"superstition", pron:"수퍼스티션", pos:"n", level:"B2", meanings:["미신"],
    syn:["belief without reason","fear of signs and omens","groundless old belief"],
    ex:[{ s:"It is only an old {{}}.", f:"superstition", ko:"그것은 오래된 미신일 뿐이다." }] },

  /* 승격 211 — 사전 단일값 유지. 참조 be in charge of(B)·oversee(O) 두 곳의
     화면은 바뀌지 않는다. */
  { word:"supervise", pron:"수퍼바이즈", pos:"v", level:"B2", meanings:["감독하다"],
    syn:["be in charge of","oversee","watch over the work of"],
    ex:[{ s:"One teacher will {{}} the test.", f:"supervise", ko:"교사 한 명이 그 시험을 감독할 것이다." }] },

  /* 원본은 네 갈래였다. 둘로 줄여 위 supervise(동사) 와 품사로 갈랐다. */
  { word:"supervision", pron:"수퍼비전", pos:"n", level:"B2", meanings:["감독","관리"],
    syn:["act of overseeing","watch over work","care and control"],
    ex:[{ s:"Children need close {{}} here.", f:"supervision", ko:"여기서 아이들은 가까운 감독이 필요하다." }] },

  /* 승격 212 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 additive(A)·appendix(A)·
     complement(C) 세 곳의 설명이 '보충; 부록' 에서 '보충, 부록' 이 된다. */
  { word:"supplement", pron:"서플러먼트", pos:"n", level:"B2", meanings:["보충","부록"],
    syn:["additive","appendix","complement"],
    ex:[{ s:"The paper has a weekend {{}}.", f:"supplement", ko:"그 신문에는 주말 부록이 있다." }] },

  /* 승격 213 — 사전 첫 갈래만 남겼다. 참조 contribute(C)·dispense(D)·
     furnish(F) 가 모두 동사라 그대로 맞는다. 그 세 곳의 설명이
     '공급하다; 공급' 에서 '공급하다' 로 짧아진다. */
  { word:"supply", pron:"서플라이", pos:"v", level:"B1", meanings:["공급하다"],
    syn:["contribute","dispense","furnish"],
    ex:[{ s:"The well will {{}} enough water.", f:"supply", ko:"그 우물이 충분한 물을 공급할 것이다." }] },

  /* 승격 214 — 사전 글자 유지. 참조는 없다. */
  { word:"supporter", pron:"서포터", pos:"n", level:"B1", meanings:["지지자","후원자"],
    syn:["one who backs a cause","follower of a side","person giving help"],
    ex:[{ s:"She is a long-time {{}} of the club.", f:"supporter", ko:"그녀는 그 구단의 오랜 지지자다." }] },

  /* 승격 215 — 사전 글자 유지. 참조 assume(A) 의 화면은 바뀌지 않는다.
     ★ 다만 그 목록에 presume(추정하다, 가정하다) 이 함께 있어 설명이 완전히
     같은 선택지가 둘이었다. 이 낱말이 표제어가 되면서 글자가 확정되므로
     presume 자리를 'take for granted' 로 갈았다. */
  { word:"suppose", pron:"서포즈", pos:"v", level:"B1", meanings:["추정하다","가정하다"],
    syn:["assume","take it that","hold as likely"],
    ex:[{ s:"I {{}} she has already left.", f:"suppose", ko:"나는 그녀가 이미 떠났다고 추정한다." }] },

  /* 승격 216 — 사전 첫 갈래만 남겼다. 참조가 다섯 곳(censor·crack down on·
     hold back·hold down·inhibit) 인데 모두 '억누르다' 쪽이라 그대로 맞는다.
     repress(R) 와 맞물려 자동 배제된다. */
  { word:"suppress", pron:"서프레스", pos:"v", level:"B2", meanings:["억압하다"],
    syn:["censor","hold down","inhibit"],
    ex:[{ s:"The regime tried to {{}} the news.", f:"suppress", ko:"그 정권은 그 소식을 억압하려 했다." }] },

  /* ── 챕터 21 ───────────────────────────────────── */
  /* 참조의 품사가 갈려 소수 쪽을 손질한 자리가 넷이다. 모두 사전이 두 품사를
     쌍반점으로 붙여 둔 낱말이다.
       surface  표면; 나타나다     → 표면(n)       come into sight(phr) → rise into view
       surplus  잉여, 과잉        → 잉여, 과잉(n)  leftover(adj) → left unused
       surrender 양보; 항복하다    → 항복하다(v)    concession(n) → step back on a point
       suspect  의심스러운; 의심하다 → 의심하다(v)   dubious(adj) → open to doubt
     surplus 는 사전 글자가 확정값과 같아서 화면 뜻은 그대로인데, 참조 넷 중
     leftover 만 형용사여서 그 자리만 갈았다.

     suspicious(의심하는, 수상한) 는 dubious(의심스러운, 수상한 · D) 와 둘째 갈래가
     글자까지 같아 서로의 오답에서 자동으로 빠진다.
     surrender(항복하다) 는 submit(제출하다, 굴복하다 · 챕터 18) 과 갈랐다. */

  /* 승격 217 — 사전 첫 갈래만 남겼다. 동사 쪽을 쓰던 come into sight(C) 의 그
     자리를 'rise into view' 로 갈았다. 다른 참조 deck(D) 은 명사라 맞는다. */
  { word:"surface", pron:"서피스", pos:"n", level:"B1", meanings:["표면"],
    syn:["outer face of a thing","top layer","outside skin"],
    ex:[{ s:"Dust settled on every {{}}.", f:"surface", ko:"먼지가 모든 표면에 내려앉았다." }] },

  /* 승격 218 — 사전 단일값 유지. 참조 influx(I) 의 화면은 바뀌지 않는다. */
  { word:"surge", pron:"서지", pos:"n", level:"B2", meanings:["급증"],
    syn:["influx","sharp rise","sudden swell in number"],
    ex:[{ s:"There was a {{}} in demand.", f:"surge", ko:"수요에 급증이 있었다." }] },

  { word:"surgeon", pron:"서전", pos:"n", level:"B2", meanings:["외과 전문의"],
    syn:["doctor who operates","medical operator","one who cuts to heal"],
    ex:[{ s:"The {{}} washed her hands twice.", f:"surgeon", ko:"그 외과 전문의는 손을 두 번 씻었다." }] },

  /* 승격 219 — 사전 단일값 유지. 참조 operation(O) 의 화면은 바뀌지 않는다. */
  { word:"surgery", pron:"서저리", pos:"n", level:"B1", meanings:["외과 처치"],
    syn:["operation","cutting to treat","medical procedure"],
    ex:[{ s:"He needs {{}} on his knee.", f:"surgery", ko:"그는 무릎에 외과 처치가 필요하다." }] },

  /* 승격 220 — 사전 단일값 유지. 참조 exceed(E) 의 화면은 바뀌지 않는다. */
  { word:"surpass", pron:"서패스", pos:"v", level:"B2", meanings:["능가하다"],
    syn:["exceed","go beyond","do better than"],
    ex:[{ s:"Her score will {{}} last year's mark.", f:"surpass", ko:"그녀의 점수가 지난해 기록을 능가할 것이다." }] },

  /* 승격 221 — 사전 글자 유지. 참조 넷 중 셋(abundance·deficit·excess) 이 명사라
     그대로 맞고, 형용사인 leftover(L) 한 자리만 'left unused' 로 갈았다. */
  { word:"surplus", pron:"서플러스", pos:"n", level:"B2", meanings:["잉여","과잉"],
    syn:["abundance","excess","amount left over"], ant:["deficit"],
    ex:[{ s:"The farm had a grain {{}} that year.", f:"surplus", ko:"그 농장은 그해 곡물 잉여가 있었다." }] },

  /* 승격 222 — 사전은 '양보; 항복하다' 였다. 참조 셋 중 둘(battle·conquer) 이
     동사여서 동사로 세우고, 명사 쪽을 쓰던 concession(C) 한 자리를 갈았다.
     submit(제출하다, 굴복하다 · 챕터 18) 과는 갈라 두었다. */
  { word:"surrender", pron:"서렌더", pos:"v", level:"B2", meanings:["항복하다"],
    syn:["give oneself up","lay down arms","yield to the enemy"], ant:["conquer"],
    ex:[{ s:"The town refused to {{}}.", f:"surrender", ko:"그 고을은 항복하기를 거부했다." }] },

  { word:"surrogate", pron:"서러깃", pos:"adj", level:"C2", meanings:["대리의","대용의"],
    syn:["acting in place of","standing for another","used instead"],
    ex:[{ s:"They found a {{}} parent for the cub.", f:"surrogate", ko:"그들은 그 새끼에게 대리 어미를 찾아 주었다." }] },

  /* 승격 223 — 사전 글자 유지. 참조 enclose(E) 의 화면은 바뀌지 않는다. */
  { word:"surround", pron:"서라운드", pos:"v", level:"B1", meanings:["둘러싸다","에워싸다"],
    syn:["enclose","ring about","shut in on all sides"],
    ex:[{ s:"Tall trees {{}} the house.", f:"surround", ko:"키 큰 나무들이 그 집을 둘러싼다." }] },

  /* 승격 224 — 사전 첫 갈래만 남겼다. 참조 exploration(E) 이 명사라 그대로 맞는다. */
  { word:"survey", pron:"서베이", pos:"n", level:"B1", meanings:["조사"],
    syn:["exploration","study of opinion","gathering of answers"],
    ex:[{ s:"The {{}} covered two thousand homes.", f:"survey", ko:"그 조사는 이천 가구를 다뤘다." }] },

  /* 승격 225 — 사전 단일값 유지. 참조는 없다. */
  { word:"survival", pron:"서바이벌", pos:"n", level:"B1", meanings:["생존"],
    syn:["staying alive","living on","escape from death"],
    ex:[{ s:"Water is the key to {{}}.", f:"survival", ko:"물이 생존의 열쇠다." }] },

  /* 승격 226 — 사전 단일값 유지. 참조 coexist(C)·get through(G)·perish(P)
     세 곳의 화면은 바뀌지 않는다. */
  { word:"survive", pron:"서바이브", pos:"v", level:"B1", meanings:["살아남다"],
    syn:["coexist","get through","live on after"], ant:["perish"],
    ex:[{ s:"Few seeds {{}} the frost.", f:"survive", ko:"서리를 살아남는 씨앗은 적다." }] },

  /* 승격 227 — 사전 단일값 유지. 참조 immune(I)·liable(L) 두 곳의 화면은
     바뀌지 않는다. */
  { word:"susceptible", pron:"서셉터블", pos:"adj", level:"C1", meanings:["영향받기 쉬운"],
    syn:["liable","open to harm","easily swayed"], ant:["immune"],
    ex:[{ s:"Young plants are {{}} to cold.", f:"susceptible", ko:"어린 식물은 추위에 영향받기 쉽다." }] },

  /* 승격 228 — 사전은 '의심스러운; 의심하다' 로 형용사와 동사를 섞어 두었다.
     원본이 동사 쪽이라 동사로 세우고, 형용사 쪽을 쓰던 dubious(D) 한 자리를
     'open to doubt' 으로 갈았다. */
  { word:"suspect", pron:"서스펙트", pos:"v", level:"B2", meanings:["의심하다"],
    syn:["think it likely wrong","have doubts about","believe guilty"],
    ex:[{ s:"Police {{}} a leak inside the office.", f:"suspect", ko:"경찰은 사무실 내부의 유출을 의심한다." }] },

  /* 승격 229 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 dangle(D)·halt(H) 두 곳의
     설명이 '중단하다; 매달다' 에서 '중단하다, 매달다' 가 된다. */
  { word:"suspend", pron:"서스펜드", pos:"v", level:"B2", meanings:["중단하다","매달다"],
    syn:["dangle","halt","hang from above"],
    ex:[{ s:"They had to {{}} the search at dusk.", f:"suspend", ko:"그들은 해질 무렵 수색을 중단해야 했다." }] },

  { word:"suspense", pron:"서스펜스", pos:"n", level:"B2", meanings:["걱정","긴장감"],
    syn:["anxious waiting","tense not knowing","held breath of doubt"],
    ex:[{ s:"The wait kept us in {{}}.", f:"suspense", ko:"그 기다림이 우리를 긴장감에 두었다." }] },

  /* dubious(의심스러운, 수상한 · D) 와 둘째 갈래를 글자까지 맞춰 두었다. */
  { word:"suspicious", pron:"서스피셔스", pos:"adj", level:"B2", meanings:["의심하는","수상한"],
    syn:["slow to trust","looking wrong","raising doubt"],
    ex:[{ s:"The guard grew {{}} of the van.", f:"suspicious", ko:"경비는 그 승합차를 수상하게 여겼다." }] },

  /* 승격 230 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 afford(A)·incur(I) 두 곳의
     설명이 '유지하다; 견디다' 에서 '유지하다, 견디다' 가 된다. */
  { word:"sustain", pron:"서스테인", pos:"v", level:"B2", meanings:["유지하다","견디다"],
    syn:["afford","incur","keep going"],
    ex:[{ s:"The team could not {{}} the pace.", f:"sustain", ko:"그 팀은 속도를 유지할 수 없었다." }] },

  /* 승격 231 — 사전 단일값 유지. 참조 environment-friendly(E) 의 화면은
     바뀌지 않는다. */
  { word:"sustainable", pron:"서스테이너블", pos:"adj", level:"B2", meanings:["지속 가능한"],
    syn:["environment-friendly","able to keep going","kept up without harm"],
    ex:[{ s:"They aim for {{}} growth.", f:"sustainable", ko:"그들은 지속 가능한 성장을 목표로 한다." }] },

  { word:"swallow", pron:"스왈로", pos:"v", level:"B1", meanings:["삼키다"],
    syn:["take down the throat","gulp","let go down"],
    ex:[{ s:"It is hard to {{}} a big pill.", f:"swallow", ko:"큰 알약을 삼키기는 어렵다." }] },

  /* ── 챕터 22 ───────────────────────────────────── */
  /* 마지막 챕터다. 19단어로 439를 채운다(21×20 + 19).
     승격 아홉 개 가운데 참조의 품사가 어긋난 자리는 없다. 화면이 바뀌는 곳은
     둘뿐이다.
       swell     부풀다; 증가하다        → 부풀다, 증가하다   expand(E)
       syllabus  교과 과정, 강의 계획     → 강의 계획         curriculum(C)
     syllabus 는 사전의 첫 갈래 '교과 과정' 을 버렸다 — 그 자리는 참조
     curriculum(교육 과정, 이수 과정) 이 이미 맡고 있다.

     synthesis(합성, 종합 · n) · synthesize(합성하다, 종합하다 · v) ·
     synthetic(합성의, 인조의 · adj) 은 품사로 셋 갈렸다. */

  /* 승격 232 — 사전 단일값 유지. 참조 marsh(M) 의 화면은 바뀌지 않는다. */
  { word:"swamp", pron:"스왐프", pos:"n", level:"B2", meanings:["늪"],
    syn:["marsh","wet low ground","boggy land"],
    ex:[{ s:"Birds nest in the {{}}.", f:"swamp", ko:"새들이 그 늪에 둥지를 튼다." }] },

  /* 승격 233 — 사전의 쌍반점만 쉼표로 갈랐다. 참조 expand(E) 한 곳의 설명이
     '부풀다; 증가하다' 에서 '부풀다, 증가하다' 가 된다. */
  { word:"swell", pron:"스웰", pos:"v", level:"B2", meanings:["부풀다","증가하다"],
    syn:["expand","grow larger","puff up"],
    ex:[{ s:"The ankle began to {{}}.", f:"swell", ko:"발목이 부풀기 시작했다." }] },

  /* 승격 234 — 사전 글자 유지. 참조 immediate(I) 의 화면은 바뀌지 않는다. */
  { word:"swift", pron:"스위프트", pos:"adj", level:"B2", meanings:["빠른","신속한"],
    syn:["immediate","quick in motion","done at speed"],
    ex:[{ s:"They made a {{}} decision.", f:"swift", ko:"그들은 신속한 결정을 내렸다." }] },

  { word:"swine", pron:"스와인", pos:"n", level:"C1", meanings:["돼지"],
    syn:["pig","hog","farm animal with a snout"],
    ex:[{ s:"The farm keeps twenty {{}}.", f:"swine", ko:"그 농장은 돼지 스무 마리를 기른다." }] },

  { word:"swirl", pron:"스월", pos:"v", level:"C1", meanings:["빙빙 돌다"],
    syn:["spin round and round","whirl about","turn in circles"],
    ex:[{ s:"Leaves began to {{}} in the wind.", f:"swirl", ko:"잎들이 바람에 빙빙 돌기 시작했다." }] },

  /* 승격 235 — 사전은 '전환하다; 스위치' 였다. 참조가 없어 원본대로 동사 두
     갈래로 두었다 — 화면이 바뀌는 곳은 없다. */
  { word:"switch", pron:"스위치", pos:"v", level:"B1", meanings:["바꾸다","전환하다"],
    syn:["change over","shift from one to another","turn to another"],
    ex:[{ s:"Let us {{}} to the other plan.", f:"switch", ko:"다른 계획으로 바꾸자." }] },

  /* 승격 236 — 사전 둘째 갈래만 남겼다. 첫 갈래 '교과 과정' 은 참조
     curriculum(교육 과정, 이수 과정 · C) 이 이미 맡고 있어 버렸다 — 그 한 곳의
     설명이 '교과 과정, 강의 계획' 에서 '강의 계획' 으로 짧아진다. */
  { word:"syllabus", pron:"실러버스", pos:"n", level:"B2", meanings:["강의 계획"],
    syn:["curriculum","outline of a course","list of topics to teach"],
    ex:[{ s:"The {{}} lists every reading.", f:"syllabus", ko:"그 강의 계획은 모든 읽을거리를 적어 두었다." }] },

  { word:"symbolize", pron:"심벌라이즈", pos:"v", level:"B2", meanings:["상징하다"],
    syn:["stand for","be a sign of","represent in a figure"],
    ex:[{ s:"The dove came to {{}} peace.", f:"symbolize", ko:"비둘기는 평화를 상징하게 되었다." }] },

  { word:"symmetry", pron:"시머트리", pos:"n", level:"C1", meanings:["좌우 대칭","균형"],
    syn:["even match of sides","balance of form","mirror likeness"],
    ex:[{ s:"The building has perfect {{}}.", f:"symmetry", ko:"그 건물은 완벽한 좌우 대칭을 지녔다." }] },

  /* 승격 237 — 사전 글자 유지. 참조 empathetic(E) 의 화면은 바뀌지 않는다. */
  { word:"sympathetic", pron:"심퍼세틱", pos:"adj", level:"B2", meanings:["동정하는","공감하는"],
    syn:["empathetic","feeling for others","kind to one's trouble"],
    ex:[{ s:"She gave a {{}} nod.", f:"sympathetic", ko:"그녀는 동정하는 고갯짓을 했다." }] },

  { word:"symposium", pron:"심포지엄", pos:"n", level:"C1", meanings:["학술회","토론회"],
    syn:["meeting of scholars","panel on one topic","gathering for discussion"],
    ex:[{ s:"He spoke at a {{}} last May.", f:"symposium", ko:"그는 지난 오월 학술회에서 발표했다." }] },

  { word:"symptom", pron:"심텀", pos:"n", level:"B1", meanings:["증상","징후"],
    syn:["sign of illness","mark of a problem","outward hint of disease"],
    ex:[{ s:"A cough is the first {{}}.", f:"symptom", ko:"기침이 첫 증상이다." }] },

  { word:"synchronize", pron:"싱크러나이즈", pos:"v", level:"C1", meanings:["동시에 일어나게 하다"],
    syn:["match in time","set to the same moment","bring into step"],
    ex:[{ s:"They had to {{}} the two clocks.", f:"synchronize", ko:"그들은 두 시계를 동시에 맞춰야 했다." }] },

  { word:"syndrome", pron:"신드롬", pos:"n", level:"B2", meanings:["증후군"],
    syn:["set of symptoms","group of signs together","pattern of illness"],
    ex:[{ s:"Doctors named the new {{}}.", f:"syndrome", ko:"의사들이 그 새 증후군에 이름을 붙였다." }] },

  /* 승격 238 — 사전 글자 유지. 참조는 없다. */
  { word:"synopsis", pron:"시납시스", pos:"n", level:"C2", meanings:["줄거리","개요"],
    syn:["short account","brief outline","summary of a story"],
    ex:[{ s:"Send a one-page {{}} first.", f:"synopsis", ko:"먼저 한 쪽짜리 줄거리를 보내라." }] },

  /* 승격 239 — 사전 글자 유지. 참조 analysis(A) 의 화면은 바뀌지 않는다. */
  { word:"synthesis", pron:"신서시스", pos:"n", level:"C1", meanings:["합성","종합"],
    syn:["putting together","making from parts","joining into one"], ant:["analysis"],
    ex:[{ s:"The lab studies protein {{}}.", f:"synthesis", ko:"그 실험실은 단백질 합성을 연구한다." }] },

  /* 위 synthesis(명사) 와 품사로 갈린다. */
  { word:"synthesize", pron:"신서사이즈", pos:"v", level:"C1", meanings:["합성하다","종합하다"],
    syn:["make by combining","build from parts","put together into one"],
    ex:[{ s:"Plants {{}} sugar from light.", f:"synthesize", ko:"식물은 빛으로 당을 합성한다." }] },

  /* 승격 240 — 사전 글자 유지. 참조 artificial(A)·man-made(M)·organic(O)
     세 곳의 화면은 바뀌지 않는다. S 세트 240번째이자 마지막 승격이다. */
  { word:"synthetic", pron:"신세틱", pos:"adj", level:"B2", meanings:["합성의","인조의"],
    syn:["artificial","man-made","made by chemistry"], ant:["organic"],
    ex:[{ s:"The rope is made of {{}} fibre.", f:"synthetic", ko:"그 줄은 합성 섬유로 만들어졌다." }] },

  /* 원본이 [n+v] 였다. 명사로 세웠다. S 세트 439번째 — 마지막 자리다. */
  { word:"syringe", pron:"시린지", pos:"n", level:"C1", meanings:["주사기"],
    syn:["tube for injection","needle and plunger","device for shots"],
    ex:[{ s:"The nurse filled a clean {{}}.", f:"syringe", ko:"간호사가 깨끗한 주사기를 채웠다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "a little": "조금은",
  "able to be left out": "빼도 되는",
  "able to dissolve": "녹을 수 있는",
  "able to keep going": "계속해 갈 수 있는",
  "able to pay debts": "빚을 갚을 수 있는",
  "above in quality": "질에서 위인",
  "academic": "학업의, 학구적인",
  "accept as one's own load": "제 짐으로 받아들이다",
  "aching": "쑤시는",
  "act of fending off attack": "공격을 물리치는 일",
  "act of overseeing": "지켜보며 챙기는 일",
  "act of parting": "갈라서는 일",
  "act of picking out": "골라내는 일",
  "act of putting away": "치워 넣어 두는 일",
  "acting in place of": "~을 대신해 나서는",
  "add salt and spice": "소금과 향신료를 넣다",
  "afraid": "두려워하는",
  "agree with a view": "어떤 견해에 손을 들다",
  "all skin and bone": "살가죽과 뼈뿐인",
  "all the better for it": "그 덕에 더 나은",
  "all tickets gone": "표가 다 나간",
  "allowing no excuse": "변명을 받지 않는",
  "allowing no slack": "느슨함을 두지 않는",
  "amount left over": "남은 양",
  "angle of a surface": "면이 기운 각도",
  "angle one looks from": "바라보는 쪽",
  "answer to a problem": "문제에 대한 답",
  "anxious waiting": "애타는 기다림",
  "apparently": "보아하니",
  "arc of half a turn": "반 바퀴의 활꼴",
  "area covered": "미치는 구역",
  "area of concern": "맡아 다루는 자리",
  "arise out of": "~에서 생겨나다",
  "army officer of low rank": "계급이 낮은 군 간부",
  "as of the present": "현재로서는",
  "ask earnestly": "간절히 청하다",
  "at a big angle": "기울기가 큰",
  "at a later time": "더 뒤의 때에",
  "at a standstill": "멈춰 선",
  "at one and the same time": "같은 때에 한꺼번에",
  "at rest": "가만히 있는",
  "avoid looking bad": "모양이 나빠지지 않게 하다",
  "awareness of oneself": "제 자신을 의식함",
  "balance of form": "모양의 균형",
  "band of related things": "이어진 것들의 띠",
  "bang shut": "탁 소리 내며 닫히다",
  "barely below the top": "표면 바로 아래인",
  "barely enough": "겨우 될 만한",
  "based on figures": "수치를 바탕으로 한",
  "based on one's own view": "자기 견해에 기댄",
  "basic and regular": "기본이 되고 늘 쓰이는",
  "be a sign of": "~의 표시가 되다",
  "be plain to see": "한눈에 보이다",
  "bear the weight of": "~의 무게를 지다",
  "bed into place": "자리에 박아 앉히다",
  "beg for": "~을 애걸하다",
  "begin a task": "일에 손을 대다",
  "begin and stay": "시작해 이어지다",
  "begin to grow": "자라기 시작하다",
  "belief without reason": "까닭 없는 믿음",
  "believe guilty": "죄가 있다고 보다",
  "below the level of thought": "생각의 층 아래에 있는",
  "better than others": "다른 것들보다 나은",
  "beyond nature": "자연을 넘어선",
  "black profile": "검게 보이는 옆모습",
  "block by sorting": "가려서 막다",
  "block the flow of": "~의 흐름을 막다",
  "blockade of a fort": "요새를 에워쌈",
  "boat that dives": "잠기는 배",
  "body circling a planet": "행성을 도는 천체",
  "boggy land": "질척한 땅",
  "bony": "뼈가 드러난",
  "branch of industry": "산업의 한 가지",
  "breach of divine law": "신의 법을 어김",
  "break along a line": "금을 따라 쪼개다",
  "break in a journey": "여정을 끊어 쉼",
  "break with a crack": "뚝 소리 내며 끊다",
  "breaking up in liquid": "액체에서 흩어지는",
  "breathe noisily in sleep": "잘 때 시끄럽게 숨 쉬다",
  "brief halt on a journey": "여정 중 잠깐의 멈춤",
  "brief outline": "간략한 윤곽",
  "bring in by stealth": "몰래 들여오다",
  "bring into step": "발을 맞추게 하다",
  "bring to one rule": "하나의 기준으로 맞추다",
  "bring under control": "다스릴 수 있게 하다",
  "bring up from water": "물에서 끌어올리다",
  "brother or sister": "형제 또는 자매",
  "build from parts": "부분을 모아 짓다",
  "building for student life": "학생 생활을 담는 건물",
  "building of many floors": "층이 많은 건물",
  "butchery of animals": "짐승을 잡음",
  "by oneself alone": "제 혼자서만",
  "call in briefly": "잠깐 들러 가다",
  "calm and untroubled": "잔잔하고 흔들림 없는",
  "calm down": "가라앉히다",
  "calm with no sound": "소리 없이 잔잔함",
  "calm without a ripple": "물결 하나 없이 잔잔한",
  "care and control": "돌봄과 다스림",
  "careful check": "꼼꼼한 확인",
  "carried by nerves": "신경으로 전해지는",
  "cast a shadow on": "~에 그림자를 드리우다",
  "cast ashore from a wreck": "부서진 배에서 밀려 올라온",
  "catch the eye": "눈길을 끌다",
  "catch the foot": "발이 걸리다",
  "causing a stir": "들썩이게 하는",
  "causing fear": "두려움을 일으키는",
  "change of position": "자리의 바뀜",
  "change over": "갈아 바꾸다",
  "cheer": "기운을 북돋우다",
  "chief in use": "쓰임에서 으뜸인",
  "chief skill": "으뜸 솜씨",
  "child of the same parents": "같은 부모의 자식",
  "choice made": "내린 고름",
  "choosing with care": "조심해서 고르는",
  "church talk": "교회에서 하는 말씀",
  "claiming the role oneself": "그 자리를 제 것이라 하는",
  "class of plant or animal": "식물이나 동물의 부류",
  "claw at": "손톱으로 할퀴다",
  "clean and free of germs": "균이 없이 깨끗한",
  "clean by rubbing": "비벼서 깨끗이 하다",
  "clean of all life": "살아 있는 것이 없게 씻다",
  "clear in outline": "윤곽이 또렷한",
  "clear judgment": "맑은 판단력",
  "clear-minded": "머릿속이 맑은",
  "climb at great speed": "아주 빠르게 올라가다",
  "climb into the sky": "하늘로 올라가다",
  "close examination": "빈틈없는 살핌",
  "close hard": "힘껏 닫다",
  "close look": "바짝 들여다봄",
  "close tight": "꽉 닫다",
  "coastal trading town": "바닷가 무역 고을",
  "collected figures": "모아 놓은 수치",
  "coloured by feeling": "느낌이 물든",
  "come down from": "~에서 전해 내려오다",
  "come from as a source": "근원으로 삼아 나오다",
  "come out from": "~에서 나와 서다",
  "come out of the seed": "씨에서 나오다",
  "come to a sudden stop": "갑자기 멈추다",
  "come to rest": "자리를 잡고 멈추다",
  "comfort in sorrow": "슬픔 속의 다독임",
  "coming next in order": "차례상 다음에 오는",
  "coming of itself": "저절로 나오는",
  "coming one after another": "하나씩 잇따라 오는",
  "coming without warning": "미리 알림 없이 오는",
  "commit oneself to": "~에 나서기로 하다",
  "complete in itself": "그것만으로 온전한",
  "complete soaking": "속까지 다 젖음",
  "complete stop": "완전한 멈춤",
  "contemptuous": "업신여기는",
  "cool dark spot": "시원하고 어두운 자리",
  "court ruling": "법정이 내린 결정",
  "cover from danger": "위험을 막아 주는 곳",
  "cover with liquid": "액체로 덮다",
  "craft that leaves the earth": "지구를 벗어나는 기체",
  "crash into pieces": "박살 나게 하다",
  "cream against sunburn": "볕에 타는 것을 막는 크림",
  "creep quietly": "조용히 기어가다",
  "cry with catching breath": "숨을 삼키며 울다",
  "cut apart": "잘라서 떼다",
  "cut off the air of": "~의 숨길을 막다",
  "cut off the breath of": "~의 숨을 끊다",
  "cut out all at once": "한순간에 꺼지다",
  "cut out the hard parts": "어려운 데를 덜어 내다",
  "cut the supply of": "~의 공급을 끊다",
  "cutting to treat": "고치기 위해 자르는 일",
  "cutting tool with teeth": "이가 난 자르는 도구",
  "damage on purpose": "고의로 해를 입히다",
  "dark in intent": "속뜻이 어두운",
  "dark outline": "어두운 테두리",
  "dash over a short way": "짧은 거리를 내달림",
  "dazzling in scale": "규모가 눈부신",
  "dazzling to see": "보기에 눈부신",
  "deep quiet": "깊은 조용함",
  "deep sadness": "깊은 슬픔",
  "deep seriousness": "깊은 진지함",
  "deep sleep": "깊은 잠",
  "delay the progress of": "~의 진행을 늦추다",
  "delicacy of response": "반응의 고움",
  "deliverance": "해방, 벗어남",
  "device for shots": "주사를 놓는 기구",
  "die down": "사그라들다",
  "dig out and raise": "파서 들어 올리다",
  "dirty mark": "더러워진 자리",
  "dirty water from homes": "집에서 나온 더러운 물",
  "disappointing": "실망스러운",
  "discharge from a gland": "샘에서 나온 것",
  "disdainful": "깔보는",
  "display worth seeing": "볼 만한 펼침",
  "dissolving agent": "녹이는 물질",
  "district outside town": "고을 밖의 구역",
  "divide in two": "둘로 갈라놓다",
  "division by race": "인종에 따른 갈림",
  "do what one knows": "아는 일을 하다",
  "doctor who operates": "수술을 하는 의사",
  "dog the steps of": "~의 뒤를 바싹 따르다",
  "done at speed": "빠르게 이뤄진",
  "done on the spur": "그 자리에서 이뤄진",
  "done with vigour": "힘차게 이뤄진",
  "done without care": "공을 들이지 않은",
  "dotted with stars": "별이 박힌",
  "drain water": "배수로로 흐르는 물",
  "drains and clean water": "배수와 깨끗한 물",
  "draw air in through the nose": "코로 숨을 들이켜다",
  "draw in with the mouth": "입으로 들이켜다",
  "drawn from numbers": "숫자에서 끌어낸",
  "dried by the sun": "볕에 마른",
  "drop away": "떨어져 나가다",
  "drop below the surface": "물낯 아래로 내려가다",
  "drunk": "술에 취한",
  "dry and bare": "마르고 헐벗은",
  "dull and unmoving": "가라앉아 움직이지 않는",
  "dust with": "~을 솔솔 얹다",
  "ease into without notice": "티 안 나게 스며들다",
  "easily affected": "쉽게 영향을 받는",
  "easily swayed": "쉽게 휘둘리는",
  "easing of grief": "시름을 덜어 줌",
  "easy to follow": "따라가기 쉬운",
  "edge of the sea": "바다의 가장자리",
  "effect not aimed at": "겨냥하지 않은 영향",
  "elderly person": "나이가 든 사람",
  "elected upper chamber member": "뽑힌 윗 의회 구성원",
  "enough for the need": "필요한 만큼 되는",
  "escape from death": "죽음을 벗어남",
  "even match of sides": "양쪽이 고르게 맞음",
  "even more welcome": "더욱 반가운",
  "even to the touch": "손에 고르게 닿는",
  "exact in demand": "요구가 빈틈없는",
  "examine closely": "바짝 붙어 살펴보다",
  "example taken": "떼어 낸 보기",
  "experienced": "겪어 본 바가 많은",
  "expert in one area": "한 갈래에 밝은",
  "failing in something": "무언가에서 모자란 점",
  "far from small": "작다고 할 수 없는",
  "farm animal with a snout": "코가 납작한 집짐승",
  "farm hut": "농가의 헛간",
  "fasten shut": "잠가서 닫다",
  "fear of signs and omens": "징조를 두려워함",
  "feeling for others": "남의 처지를 헤아리는",
  "feeling held": "품고 있는 느낌",
  "field of action": "움직이는 판",
  "field of work": "일의 갈래",
  "field one is best at": "가장 잘하는 갈래",
  "figure in stone": "돌로 깎은 형상",
  "fill fully": "가득 채우다",
  "fill to the limit": "한도까지 채우다",
  "filled with fear": "두려움에 찬",
  "fine in shade": "빛깔 차이가 고운",
  "fineness of feeling": "느낌의 섬세함",
  "fire a weapon": "무기를 발사하다",
  "firm about rules": "규칙에 단단한",
  "firm and unchanging": "단단하고 달라지지 않는",
  "firm in manner": "태도가 굳은",
  "firm in place": "자리가 단단한",
  "firmness over time": "오래 버티는 든든함",
  "fix one's eyes on": "~에 눈을 두다",
  "fix the place of": "~의 자리를 정하다",
  "fixed idea of a group": "어떤 무리에 대한 굳은 생각",
  "fixed in place": "한자리에 붙은",
  "flavor with spice": "향신료로 맛을 내다",
  "flavouring from plants": "식물에서 얻은 맛내기",
  "flow past the edge": "가장자리를 넘어 흐르다",
  "fluid given off": "내어놓은 액체",
  "fluid in the mouth": "입안의 액체",
  "fly far above": "저 위로 날다",
  "follow in secret": "남몰래 따라가다",
  "follower of a side": "한쪽을 따르는 사람",
  "following in time": "시간상 뒤에 오는",
  "forced separation": "강제로 갈라놓음",
  "formal permission": "정식 허가",
  "four-sided figure": "네 변으로 된 꼴",
  "free from harm": "해를 입지 않는",
  "free of debt": "빚이 없는",
  "free of flaws": "흠이 없는",
  "free of germs": "균이 없는",
  "free of self-interest": "제 이익이 없는",
  "free of stir": "들썩임이 없는",
  "free of stir now": "지금 흔들림이 없는",
  "freedom from fuss": "번거로움이 없음",
  "frightened": "놀라 떠는",
  "frightening": "놀라게 하는",
  "fulfilling": "보람 있는",
  "full authority of a state": "나라가 가진 온전한 권한",
  "full of doubt": "의심으로 가득한",
  "full of life": "생기가 넘치는",
  "full of salt": "소금기가 많은",
  "full of stars": "별이 가득한",
  "full range of kinds": "온갖 갈래의 폭",
  "fully taken up": "자리가 다 찬",
  "gather a large store": "많이 모아 두다",
  "gather up in one go": "한 번에 그러모으다",
  "gathering for discussion": "논의를 위한 모임",
  "gathering of answers": "답을 모으는 일",
  "get smaller": "작아지다",
  "get ~ under way": "~이 돌아가기 시작하게 하다",
  "gift to remember by": "기억하려고 주는 선물",
  "give a sharp click": "딸깍 소리를 내다",
  "give a sharp pain": "날카로운 아픔을 주다",
  "give a sudden shock": "갑작스레 놀래다",
  "give money to help": "돕기 위해 돈을 주다",
  "give oneself up": "스스로를 내주다",
  "give taste to": "~에 맛을 들이다",
  "giving a shock": "충격을 주는",
  "giving contentment": "흐뭇함을 주는",
  "giving up of something": "무언가를 내놓음",
  "giving without reward": "대가 없이 베푸는",
  "glide into": "매끄럽게 들어가다",
  "glide over the text": "글 위를 스쳐 가다",
  "glut": "실컷 채우다",
  "go back and forth": "오가다",
  "go by stealth": "남의 눈을 피해 가다",
  "go under water": "물밑으로 들어가다",
  "go without food": "먹지 못하고 지내다",
  "going by that name": "그 이름으로 통하는",
  "going on at once": "한꺼번에 진행되는",
  "gone flat": "기운이 빠진",
  "gone under water": "물밑으로 들어간",
  "goods held in store": "창고에 둔 물건",
  "gracefully thin": "맵시 있게 마른",
  "grand and bright": "웅장하고 환한",
  "grand sight": "웅장한 볼거리",
  "grand to look at": "보기에 웅장한",
  "grant for study": "공부에 주는 지원금",
  "grave manner": "무게 있는 몸가짐",
  "greet with respect": "예를 갖춰 맞이하다",
  "groundless old belief": "근거 없는 옛 믿음",
  "group of signs together": "함께 나타나는 징후 무리",
  "group of workers": "일하는 사람들의 무리",
  "group that breeds together": "서로 번식하는 무리",
  "grow larger": "더 커지다",
  "grow less strong": "기세가 약해지다",
  "guard with a cover": "덮어서 지키다",
  "guarding oneself": "제 몸을 지킴",
  "guess without proof": "증거 없이 짐작하다",
  "guide on avoiding danger": "위험을 피하는 안내",
  "guide the course of": "~의 진로를 이끌다",
  "gulp": "꿀꺽 넘기다",
  "habit of not believing": "믿지 않으려는 버릇",
  "half circle": "동그라미의 절반",
  "half of a round shape": "둥근 꼴의 절반",
  "half of a school year": "한 학년의 절반",
  "hall for students": "학생들을 위한 회관",
  "halt in motion": "움직임이 멈춘 상태",
  "hand in for review": "검토받도록 내다",
  "hand-written name": "손으로 쓴 이름",
  "handsaw": "손톱질 도구",
  "hang from above": "위에서 늘어뜨리다",
  "happening all at once": "한꺼번에 일어나는",
  "happening together": "함께 일어나는",
  "hard metal of iron": "쇠로 만든 굳은 금속",
  "hard right through": "속까지 굳은",
  "hard to believe": "믿기 어려운",
  "hard to come by": "구하기 어려운",
  "hard to move": "움직이게 하기 어려운",
  "hard to notice": "알아채기 어려운",
  "hardened in sunlight": "햇빛에 굳은",
  "hardly ever": "좀체 ~ 없는",
  "have a hard time of it": "일이 버거워지다",
  "have doubts about": "~에 의문을 품다",
  "have its origin in": "~에 뿌리를 두다",
  "have its root in": "~에 뿌리가 있다",
  "haven": "안식처",
  "having funds to settle": "갚을 자금이 있는",
  "head of a department": "부처를 이끄는 사람",
  "healed cut": "아문 베인 자리",
  "heap of things": "물건을 쌓아 놓은 것",
  "heap upon": "~에 수북이 얹다",
  "heavy demand on one": "몸에 걸리는 무거운 요구",
  "heavy heart": "무거운 마음",
  "held breath of doubt": "숨죽인 의문",
  "held by one alone": "한 사람만 가진",
  "hidden layer of the mind": "마음의 숨은 층",
  "high-rise tower": "높이 솟은 탑 모양 건물",
  "highly developed": "매우 발달한",
  "hint of something": "무언가를 슬쩍 비침",
  "hinting at evil": "나쁜 기미를 띤",
  "hired hand": "품을 받고 일하는 사람",
  "hired people of a place": "그곳에 고용된 사람들",
  "hit flat-handed": "손을 펴서 때리다",
  "hog": "살찐 돼지",
  "hold as likely": "그럴 법하다고 보다",
  "hold down a feeling": "감정을 눌러 두다",
  "hold firm": "단단히 붙들다",
  "hold to firmly": "단단히 붙들고 있다",
  "hold up": "붙들어 늦추다",
  "holder of shares": "지분을 가진 사람",
  "holding in a business": "사업에 대한 보유분",
  "hollowed inward": "안으로 파인",
  "hot-tasting addition": "매운맛을 더하는 것",
  "household helper": "집안일을 돕는 사람",
  "hugely exciting": "크게 들뜨게 하는",
  "hunt for": "뒤져서 구하다",
  "hurt by wrenching": "비틀려 다치다",
  "husband or wife": "남편이나 아내",
  "hush over all": "온통 내린 잠잠함",
  "hygienic": "위생적인",
  "idea put forward": "내놓은 생각",
  "in short supply": "공급이 모자란",
  "in some degree": "얼마간은",
  "in the same moment": "같은 순간에",
  "inner and sacred": "속 깊고 거룩한",
  "iron mixed with carbon": "탄소를 섞은 쇠",
  "ironic in a cutting way": "날카롭게 비꼬는",
  "ironic in tone": "말투가 반어적인",
  "jab and hurt": "쿡 찔러 아프게 하다",
  "join by writing in": "적어 넣어 들어가다",
  "joining into one": "하나로 이음",
  "jot down roughly": "대충 적어 두다",
  "jump down from": "~에서 뛰어 내려오다",
  "just a bit": "아주 살짝",
  "keen-edged": "날이 선",
  "keep apart from others": "남들과 떨어뜨려 두다",
  "keep company with": "~와 같이 지내다",
  "keep from shifting": "움직이지 않게 두다",
  "keep going": "끊이지 않게 하다",
  "keep goods for sale": "팔 물건을 갖춰 두다",
  "keep in a safe place": "안전한 곳에 두다",
  "keep on with": "~을 계속 이어가다",
  "keep one's dignity": "품위를 지키다",
  "keep out of the way": "걸리지 않게 두다",
  "keep races or sexes apart": "인종이나 성별을 떼어 두다",
  "keep to one's own trade": "제 일에만 머물다",
  "keeping groups apart": "무리를 떼어 두는 일",
  "keeping of goods": "물건을 맡아 둠",
  "keepsake": "간직하는 물건",
  "kept in reserve": "여벌로 둔",
  "kept up without harm": "해를 주지 않고 이어지는",
  "kill by stopping air": "공기를 막아 죽이다",
  "kill germs on": "~의 균을 죽이다",
  "kind of living thing": "생물의 갈래",
  "kind to one's trouble": "남의 어려움에 다정한",
  "lack of frills": "덧붙임이 없음",
  "lacking depth": "깊이가 없는",
  "lacking foresight": "앞을 못 보는",
  "lance": "기다란 찌르개",
  "land by the water": "물가의 땅",
  "large in amount": "양이 많은",
  "later happening": "나중에 벌어진 일",
  "later on": "뒤에 가서",
  "lay by for later": "나중을 위해 챙겨 두다",
  "lay down arms": "무기를 내려놓다",
  "lay up a supply": "물량을 쌓아 두다",
  "leaf through": "책장을 넘겨 가며 보다",
  "leave in liquid": "물에 담가 두다",
  "leave the inside of": "~의 안을 벗어나다",
  "left adrift at sea": "바다에 떠돌게 된",
  "left over for use": "쓰려고 남겨 둔",
  "left unused": "쓰지 않고 남은",
  "legal end of a marriage": "혼인을 법으로 끝냄",
  "length of time": "시간의 길이",
  "length of twine": "삼끈 한 토막",
  "let fall": "떨어지게 하다",
  "let fly an arrow": "화살을 날리다",
  "let go down": "내려가게 하다",
  "let have too much": "지나치게 받게 두다",
  "let run over": "넘쳐 흐르게 하다",
  "level in judgment": "판단이 고른",
  "life apart from others": "남들과 떨어진 삶",
  "lift and drop the shoulders": "어깨를 올렸다 내리다",
  "lift with a scoop": "국자로 떠올리다",
  "line of twisted thread": "실을 꼬아 만든 줄",
  "link two sides": "두 쪽을 이어 주다",
  "liquid mixture": "액체로 섞인 것",
  "list of topics to teach": "가르칠 주제 목록",
  "lit by stars": "별빛이 비치는",
  "lively in manner": "몸짓이 생생한",
  "living alone": "혼자 사는",
  "living on": "계속 살아감",
  "long attack from outside": "밖에서 오래 밀어붙이는 공격",
  "long in practice": "오래 익혀 온",
  "long pointed weapon": "길고 뾰족한 무기",
  "long telling-off": "길게 이어지는 꾸중",
  "long-term plan": "오래 보는 계획",
  "look at in fine detail": "잘게 나눠 들여다보다",
  "look fixedly": "눈을 붙박고 보다",
  "look in on the way": "가는 길에 들여다보다",
  "look over quickly": "빠르게 눈으로 지나가다",
  "looking down on": "아래로 보는",
  "looking uncared for": "돌보지 않은 듯한",
  "looking wrong": "어딘가 어긋나 보이는",
  "lose one's footing": "발을 헛디디다",
  "loss for a cause": "대의를 위한 손실",
  "loss of a ship at sea": "바다에서 배를 잃음",
  "lotion that blocks rays": "광선을 막아 주는 로션",
  "made by chemistry": "화학으로 만들어진",
  "made for one purpose": "한 가지 쓰임에 맞춰진",
  "madness": "광기",
  "main shaft of a plant": "식물의 본대",
  "make a mark by rubbing": "비벼서 자국을 내다",
  "make a rough sound asleep": "잠결에 거친 소리를 내다",
  "make all the same": "모두 같게 만들다",
  "make by combining": "섞어서 만들다",
  "make free of bacteria": "세균이 없게 하다",
  "make jump": "펄쩍 뛰게 하다",
  "make plain": "알기 쉽게 하다",
  "make rigid": "굳어지게 하다",
  "make sorrowful": "애석하게 만들다",
  "make steady": "흔들리지 않게 하다",
  "make sure of": "틀림없이 해 두다",
  "make water fly": "물이 날게 하다",
  "making from parts": "부분에서 만들어 냄",
  "male seed cell": "수컷의 씨세포",
  "march with big steps": "큰 걸음으로 나아가다",
  "mark left by a wound": "상처가 남긴 자리",
  "mark of a problem": "문제가 있다는 표",
  "mark of high rank": "높은 자리를 보이는 표",
  "mark of one's own": "제 것임을 보이는 표",
  "married partner": "혼인한 짝",
  "mass killing": "무리를 죽임",
  "match in time": "때를 맞추다",
  "matter dealt with": "다루는 사안",
  "mean with money": "돈에 박한",
  "meant truly": "참으로 한 말인",
  "meat water": "고기를 끓인 물",
  "medical operator": "의료 수술자",
  "medical procedure": "의료 시술",
  "meeting of scholars": "학자들의 모임",
  "meeting place for students": "학생들이 모이는 곳",
  "melting in water": "물에서 풀리는",
  "member of the senate": "상원에 속한 사람",
  "memento": "추억거리",
  "mental health": "정신 건강",
  "messy in work": "일솜씨가 어수선한",
  "mind one's own work": "제 몫의 일을 살피다",
  "mirror likeness": "거울처럼 같은 꼴",
  "miss on purpose": "일부러 빼먹다",
  "mix with a spoon": "숟가락으로 섞다",
  "mix with others": "남들과 어울리다",
  "money for tuition": "수업료에 쓰는 돈",
  "money given as aid": "도움으로 주는 돈",
  "moral fault": "도리에 어긋난 잘못",
  "moral lecture": "도리를 일러 주는 말",
  "more than two": "둘보다 많은",
  "most advanced": "가장 앞선",
  "most relied on": "가장 많이 기대는",
  "move fast in haste": "급히 빠르게 움직이다",
  "move goods illegally": "물건을 불법으로 옮기다",
  "move the heart of": "~의 마음을 흔들다",
  "move to another state": "다른 상태로 옮김",
  "move without being seen": "보이지 않게 움직이다",
  "named as such": "그렇게 불리는",
  "named by oneself": "제가 제 이름을 붙인",
  "narrow break": "좁게 벌어진 자리",
  "narrow in shape": "꼴이 좁은",
  "narrowed to one field": "한 분야로 좁혀진",
  "natural setting": "자연 그대로의 자리",
  "needing nothing outside": "밖에서 얻을 것이 없는",
  "needle and plunger": "바늘과 밀대",
  "newest in design": "설계가 가장 새로운",
  "no longer fresh": "더는 싱싱하지 않은",
  "non-commissioned officer": "임관하지 않은 간부",
  "none left to buy": "살 것이 남지 않은",
  "not deep": "깊지 않은",
  "not drunk": "술기운이 없는",
  "not flowing": "흐르지 않는",
  "not give up on": "~을 놓지 않다",
  "not going deep": "깊이 들어가지 않는",
  "not in use now": "지금 쓰지 않는",
  "not likely to change": "달라질 것 같지 않은",
  "not new": "새것이 아닌",
  "not of the body": "몸에 속하지 않은",
  "not of this world": "이 세상 것이 아닌",
  "not often": "자주 ~ 않는",
  "not on a payroll": "월급을 받지 않는",
  "not religious": "종교와 무관한",
  "not taking all": "다 받지는 않는",
  "not the main one": "주된 것이 아닌",
  "not to be shaken": "흔들리지 않는",
  "note-taking in signs": "기호로 받아 적기",
  "nothing but": "다른 것 없이 오직",
  "notice at once": "단번에 알아채다",
  "numbers gathered together": "함께 모은 숫자들",
  "of area and place": "면적과 자리에 속한",
  "of bodily pleasure": "몸의 즐거움에 속한",
  "of small width": "폭이 작은",
  "of society and culture": "사회와 문화에 속한",
  "of sound mind": "정신이 온전한",
  "of sound waves": "소리 물결에 속한",
  "of the senses": "감각에 속한",
  "of the soul": "넋에 속한",
  "of the stars": "별에 속한",
  "of this world": "이 세상에 속한",
  "office assistant": "사무를 돕는 사람",
  "official approval": "공식 승인",
  "old and dry": "묶고 마른",
  "older member of society": "사회의 연장자",
  "on one's own": "혼자 힘으로",
  "on the face of it": "겉으로 보면",
  "one and only": "오직 하나뿐인",
  "one division": "하나의 갈림",
  "one in the second year": "둘째 해에 있는 사람",
  "one of advanced years": "연치가 높은 사람",
  "one of two school terms": "두 기간 중 하나",
  "one who acts for another": "남을 대신해 나서는 사람",
  "one who backs a cause": "어떤 뜻을 밀어 주는 사람",
  "one who cuts to heal": "고치려고 칼을 대는 사람",
  "one who follows in a post": "그 자리를 뒤이어 맡는 사람",
  "one who keeps records": "기록을 맡는 사람",
  "one who owns stock": "주식을 가진 사람",
  "one who waits on others": "남을 받드는 사람",
  "one who watches": "지켜보는 사람",
  "one's own kin": "제 살붙이",
  "one's written name": "제가 적은 이름",
  "only on the top": "겉면에만 있는",
  "oozing out": "스며 나옴",
  "open public space": "열린 공공의 자리",
  "open quarrel": "드러난 다툼",
  "open to harm": "해를 입기 쉬운",
  "openness to beauty": "아름다움에 열린 마음",
  "orbiting station": "궤도 위의 기지",
  "out of danger": "위험에서 벗어난",
  "out of puff": "숨이 가쁜",
  "outbuilding": "딴채",
  "outer face of a thing": "사물의 겉면",
  "outer part of a city": "도시의 바깥 부분",
  "outline of a course": "수업의 큰 틀",
  "outside skin": "바깥 껍질",
  "outstanding in quality": "질이 빼어난",
  "outward hint of disease": "겉으로 드러난 병의 기미",
  "pack in tightly": "빈틈없이 밀어 넣다",
  "painful to touch": "닿으면 아픈",
  "panel on one topic": "한 주제를 놓고 하는 토론",
  "panting hard": "숨을 몰아쉬는",
  "parched by heat": "열에 바짝 마른",
  "part cut from a whole": "전체에서 잘라 낸 몫",
  "part cut off": "잘라 낸 몫",
  "part of the economy": "경제의 한 몫",
  "part of the mind below thought": "생각 아래의 마음 부분",
  "part one gets": "차지하는 부분",
  "part that holds a plant up": "식물을 받치는 부분",
  "part-owner of a firm": "회사를 나눠 가진 사람",
  "particular place": "어느 한 자리",
  "past all natural law": "자연의 법을 벗어난",
  "patch of colour left": "색이 남은 자리",
  "pattern of illness": "병이 나타나는 틀",
  "pay part of the cost": "비용의 일부를 대다",
  "pay to receive": "값을 내고 받다",
  "pay tribute to": "~에게 찬사를 보내다",
  "peel bare": "말끔히 까다",
  "period of meeting": "모임이 이어지는 기간",
  "person giving help": "도움을 주는 사람",
  "person of lower rank": "아래 계급의 사람",
  "pick out from the rest": "나머지에서 집어내다",
  "picky": "까다롭게 고르는",
  "picture cartoon series": "그림 만화 연작",
  "pig": "돼지 짐승",
  "pile of stuff": "짐을 겹쳐 놓은 것",
  "place in position": "자리에 놓다",
  "place newly lived in": "새로 들어와 사는 곳",
  "place one holds": "차지하고 있는 자리",
  "plain and clear": "수수하고 또렷한",
  "plainness": "꾸밈없음",
  "plan of action": "움직일 계획",
  "plant seed": "씨를 심다",
  "plaza in a town": "고을의 넓은 터",
  "pleasing": "즐거움을 주는",
  "pleasing to the body": "몸에 즐거운",
  "plot of ground": "땅의 한 구획",
  "point of no more": "더 못 받는 지점",
  "point to just one": "딱 하나를 짚다",
  "pointed post": "뾰족한 기둥",
  "port city": "항만이 있는 도시",
  "portion due": "받을 몫",
  "pour in plenty": "넉넉히 쏟다",
  "pour out": "쏟아 내다",
  "pour out unmeant": "뜻 없이 쏟아 내다",
  "pre-owned": "앞서 주인이 있던",
  "press hard together": "세게 맞눌러 붙이다",
  "pretend to have": "가진 척하다",
  "prick with a point": "뾰족한 것으로 찌르다",
  "privacy away from all": "모두에게서 떨어진 사사로움",
  "proposal for thought": "생각해 보라고 내는 안",
  "protect one's honor": "명예를 지키다",
  "protection of one's own body": "제 몸을 막아 냄",
  "puff up": "불룩해지다",
  "pull in by suction": "빨아들이는 힘으로 끌다",
  "pull the cover off": "덮인 것을 뜯어내다",
  "pure and simple": "다름 아닌",
  "push behind schedule": "일정보다 뒤로 밀다",
  "put an end to a dispute": "다툼을 끝맺다",
  "put away for later": "나중을 위해 넣어 두다",
  "put money on": "~에 돈을 걸다",
  "put on an act of": "~인 척 연기하다",
  "put one's name down for": "~에 이름을 올려 두다",
  "put out shoots": "새순을 내다",
  "put seed in the ground": "땅에 씨를 넣다",
  "put to one side": "옆으로 밀어 두다",
  "put together into one": "모아서 하나로 만들다",
  "put ~ into action": "~을 실제로 돌리다",
  "putting others first": "남을 앞세우는",
  "putting together": "하나로 맞춤",
  "quake in dread": "두려움에 흔들리다",
  "quick in motion": "움직임이 빠른",
  "quick to feel": "느낌이 빠른",
  "quick writing system": "빠르게 적는 방식",
  "quiet a distress": "괴로움을 잠잠하게 하다",
  "quiet and unmoving": "조용하고 움직임이 없는",
  "quiet of one's own": "제 것인 고요",
  "quiet spot far off": "멀찍이 떨어진 조용한 곳",
  "race at full speed": "온 힘으로 달리는 겨루기",
  "rain down on": "~에 비처럼 내리다",
  "raise the shoulders": "어깨를 올리다",
  "raising doubt": "의문을 일으키는",
  "rank in society": "사회에서의 자리",
  "rarely": "좀처럼 ~ 않는",
  "rather more than a little": "조금보다는 더",
  "raw stuff for making": "만드는 데 쓰는 바탕",
  "reach further than meant": "뜻한 데보다 멀리 미치다",
  "read fast for the gist": "요지만 빨리 읽다",
  "real and solid": "실제로 알찬",
  "recover from wreck": "난파선에서 되찾다",
  "redemption": "속죄, 되찾음",
  "reduce by": "~만큼 줄이다",
  "reduce to basics": "기본만 남기다",
  "reel while walking": "걷다가 휘청하다",
  "refined in taste": "취향이 다듬어진",
  "relief from pain": "아픔을 덜어 줌",
  "remain beside": "옆에 남아 있다",
  "represent in a figure": "형상으로 나타내다",
  "reproductive cell of a male": "수컷의 생식 세포",
  "respected political leader": "높이 평가되는 정치 지도자",
  "responsive to touch": "닿는 것에 반응하는",
  "rest with eyes shut": "눈을 감고 쉼",
  "rich tang": "짙은 맛깔",
  "right to rule oneself": "스스로 다스릴 권리",
  "ring about": "둘레를 감싸다",
  "rise high up": "높이 솟아오르다",
  "rise into view": "드러나 보이게 되다",
  "rise or fall at an angle": "비스듬히 오르내리다",
  "rise steeply": "가파르게 오르다",
  "rising ground": "솟아오른 땅",
  "rising sharply": "날카롭게 올라가는",
  "rocket ship": "로켓으로 가는 배",
  "roof over one's head": "머리를 덮어 줄 지붕",
  "rouse to action": "움직이도록 일깨우다",
  "rub hard": "세게 비비다",
  "rub with nails": "손톱으로 비비다",
  "rules for staying safe": "안전하게 지내는 규칙",
  "rumble while sleeping": "자면서 그렁거리다",
  "run away downward": "아래로 내리 치닫다",
  "run flat out": "전력으로 달리다",
  "run of days": "이어지는 며칠",
  "run one's eye over": "눈으로 쭉 지나가다",
  "run to and fro": "이리저리 다니다",
  "run-down": "허름해진",
  "running one's own trade": "제 장사를 꾸리는",
  "rush about": "부리나케 돌아다니다",
  "safe place for animals": "동물이 지내는 안전한 곳",
  "safety lesson": "안전 수업",
  "said to be": "~라고 하는",
  "salt-laden": "소금이 섞인",
  "salty": "짠",
  "sample for study": "살펴보려고 뽑은 것",
  "saving from sin": "죄에서 건져 냄",
  "say plainly": "분명히 말하다",
  "scatter grain": "곡식 씨를 흩다",
  "scatter in drops": "방울로 흩다",
  "scattered droplets": "흩날리는 물방울",
  "scattered in time": "때가 띄엄띄엄한",
  "science of social life": "사회 생활을 다루는 학문",
  "scour with a brush": "솔로 닦아 내다",
  "scrawl": "휘갈겨 적다",
  "screen against light": "빛을 막는 가림막",
  "screen from danger": "위험에서 가려 주다",
  "sculpted image": "빚어 만든 상",
  "seasoning powder": "맛을 내는 가루",
  "second-year student": "둘째 해 학생",
  "secret plan": "몰래 세운 계획",
  "seed of an animal": "동물의 씨",
  "seeing only the near": "가까운 것만 보는",
  "seek by asking": "물어 가며 구하다",
  "seen at a glance": "흘끗 보아 아는",
  "seize quickly": "재빨리 붙잡다",
  "self-styled": "스스로 내세운",
  "send a bullet": "탄알을 보내다",
  "senior figure in government": "정부의 원로",
  "serving no purpose": "쓸 데가 없는",
  "set a common form": "공통의 꼴을 정하다",
  "set apart": "따로 떼어 두다",
  "set apart by group": "무리별로 떼어 놓다",
  "set apart for god": "신에게 바쳐진",
  "set image of people": "사람들에 대한 정해진 상",
  "set in a spot": "한 자리에 앉히다",
  "set of symptoms": "증상의 묶음",
  "set order": "정해진 차례",
  "set out in words": "말로 펼쳐 놓다",
  "set to the same moment": "같은 순간에 맞춰 두다",
  "settle in for a while": "한동안 눌러앉다",
  "settle to a lower level": "더 낮은 자리로 내려앉다",
  "shake over lightly": "가볍게 흔들어 얹다",
  "shake with cold": "추위로 떨다",
  "shake with horror": "끔찍함에 떨다",
  "shape against the light": "빛을 등진 꼴",
  "share in a firm": "회사에 가진 몫",
  "shares in a company": "회사의 지분 증서",
  "sharp fall in trade": "거래의 급한 떨어짐",
  "sharp in taste": "맛이 톡 쏘는",
  "sharp rise": "가파른 오름",
  "shed tears noisily": "시끄럽게 눈물을 흘리다",
  "shelter from sun": "볕을 가려 주는 곳",
  "shift from one to another": "하나에서 다른 하나로 옮기다",
  "ship that goes under water": "물속으로 가는 배",
  "shoot up fast": "빠르게 치솟다",
  "short account": "짧게 적은 이야기",
  "short fast race": "짧고 빠른 경주",
  "short period": "짧은 동안",
  "short stay on a trip": "여행 중 짧게 머묾",
  "show one does not care": "대수롭지 않다는 몸짓을 하다",
  "showing good judgment": "판단이 옳은",
  "showing no change": "달라짐이 없는",
  "shut away": "가둬 두다",
  "shut in on all sides": "사방을 막아 두다",
  "shut with a bang": "소리 나게 닫다",
  "shut with wax": "밀랍으로 막다",
  "shyness before others": "남 앞에서의 수줍음",
  "side by side in time": "때를 나란히 하는",
  "sift out": "체로 골라내다",
  "sign of illness": "병의 표시",
  "sign of wealth": "부를 드러내는 표시",
  "simple to grasp": "알아듣기 간단한",
  "single thread": "한 올의 실",
  "sink below water": "물 아래로 가라앉히다",
  "sinking of a vessel": "배가 가라앉음",
  "sitting of a body": "기구가 모여 앉는 때",
  "size of a thing": "사물의 크기",
  "skin guard from the sun": "볕에서 살갗을 지키는 것",
  "slice": "얇게 썬 쪽",
  "slim in build": "몸매가 호리호리한",
  "slip into": "슬그머니 들어가다",
  "slow to believe": "쉽게 믿지 않는",
  "slow to move": "움직임이 더딘",
  "slow to trust": "잘 믿지 않는",
  "smack": "철썩 치다",
  "smash into bits": "조각조각 깨뜨리다",
  "smell in short breaths": "짧게 숨 쉬며 냄새를 맡다",
  "smoke pipe": "연기가 나가는 관",
  "sneak past customs": "세관을 몰래 지나다",
  "sneering": "코웃음 치는",
  "snuffle": "코를 훌쩍이다",
  "social and cultural at once": "사회와 문화를 함께 보는",
  "solid matter": "고체",
  "solidly built": "짜임이 단단한",
  "some in number": "수가 얼마쯤 되는",
  "soundness of mind": "정신의 온전함",
  "space for keeping things": "물건을 둘 자리",
  "spacecraft in orbit": "궤도를 도는 비행체",
  "spatter with drops": "방울을 흩뿌리다",
  "spend time together": "함께 시간을 보내다",
  "spin round and round": "뱅글뱅글 돌다",
  "spit": "뱉는 침",
  "spittle": "입에서 나온 침",
  "split into parts": "여러 몫으로 쪼갬",
  "spooky": "으스스한",
  "spot for building": "집을 세울 자리",
  "spot of dirt": "때가 묶은 점",
  "spread beyond bounds": "테두리를 넘어 퍼지다",
  "spread from one end to the other": "한끝에서 다른 끝까지의 펼침",
  "spur into life": "살아나게 몰아붙이다",
  "squad leader": "분대를 이끄는 사람",
  "stalk of a plant": "식물의 대",
  "stand for": "~을 나타내다",
  "stand-in for another": "남을 대신 서는 사람",
  "standing alone": "홀로 서 있는",
  "standing for another": "다른 것을 대신 서는",
  "standing out most": "가장 도드라지는",
  "start a journey": "길을 나서다",
  "start ~ going": "~이 굴러가게 하다",
  "state exactly": "똑똑히 밝히다",
  "state of being alone": "혼자인 상태",
  "state of being full": "가득 찬 상태",
  "state of being shut away": "틀어박혀 있는 상태",
  "state of no movement": "아무 움직임이 없는 상태",
  "stay close to": "~에 가까이 머물다",
  "staying alive": "살아 있는 상태로 남음",
  "steady and sure": "고르고 믿음직한",
  "steady state": "흔들림 없는 상태",
  "stenography": "기호 필기법",
  "step back on a point": "한 가지에서 물러서 줌",
  "stirring the senses": "감각을 흔드는",
  "stop dead": "딱 멈추다",
  "strain a ligament": "힘줄을 무리하게 하다",
  "stranded after a sinking": "배가 가라앉아 발이 묶인",
  "stretch from end to end": "끝에서 끝까지의 뻗침",
  "stretch of weather": "한동안 이어진 날씨",
  "strike with the palm": "손바닥으로 치다",
  "striking scene": "눈을 끄는 장면",
  "string of words": "낱말을 이은 줄",
  "strong grey metal": "단단한 회색 금속",
  "strong in build": "몸집이 다진",
  "student of year two": "이 년차 학생",
  "study award": "학업에 주는 상금",
  "study of human groups": "사람 무리를 살피는 학문",
  "study of numerical data": "수치 자료를 다루는 학문",
  "study of opinion": "여론을 살피는 일",
  "study of society": "사회를 살피는 학문",
  "subject to another": "남에게 딸린",
  "sudden and surprising": "갑작스럽고 뜻밖인",
  "sudden swell in number": "수가 갑자기 부풀어 오름",
  "suffer hunger": "배고픔을 겪다",
  "summary of a story": "이야기를 줄인 것",
  "supply kept on hand": "갖춰 둔 물량",
  "support with funds": "자금으로 뒷받침하다",
  "supreme power": "가장 높은 권력",
  "surrounding of a town": "고을을 둘러쌈",
  "surroundings of a scene": "장면을 둘러싼 것들",
  "sway as one walks": "걸으며 몸이 기울다",
  "take a paper regularly": "신문을 꾸준히 받다",
  "take away from": "~에서 덜어 내다",
  "take by force": "힘으로 빼앗다",
  "take down the throat": "목으로 넘기다",
  "take hold": "뿌리를 내리다",
  "take in and hide": "받아들여 숨겨 주다",
  "take it that": "~라고 여기다",
  "take long paces": "보폭을 길게 하다",
  "take on a burden": "짐을 짊어지다",
  "take on social ways": "사회의 방식을 익히다",
  "take out a place in": "~에 자리를 잡아 두다",
  "take the bend out of": "~의 휘어짐을 없애다",
  "take the skin from": "~의 껍질을 걷다",
  "take up liquid": "물기를 받아들이다",
  "take with a jerk": "확 잡아당기다",
  "taking hard effort": "힘을 많이 들이는",
  "talk of the town": "장안의 이야깃거리",
  "tart": "새콤한",
  "taste one enjoys": "즐기는 맛",
  "team of employees": "고용된 사람들의 한 조",
  "tender and raw": "쓰라리고 여린",
  "tender mood": "다정한 마음결",
  "tense not knowing": "모르는 채 팽팽함",
  "term of study": "공부하는 기간",
  "test piece": "시험에 쓰는 조각",
  "that much improved": "그만큼 나아진",
  "thin cord": "얇은 노끈",
  "thin in amount": "양이 얇은",
  "thin in form": "꼴이 가는",
  "thin thread of hair": "가느다란 머리 올",
  "thing everyone speaks of": "모두가 입에 올리는 것",
  "thing that comes next": "다음에 오는 일",
  "thing that shows one's rank": "자기 자리를 보여 주는 물건",
  "thing under study": "살펴보는 대상",
  "things laid one on another": "하나씩 얹어 놓은 것들",
  "think it likely wrong": "잘못된 것 같다고 여기다",
  "thinking no further ahead": "더 멀리 생각하지 않는",
  "throw money about": "돈을 함부로 쓰다",
  "throw out as useless": "쓸모없다고 내버리다",
  "throw water about": "물을 끼얹다",
  "throwing pole with a blade": "날이 달린 던지는 장대",
  "tight pressure": "팽팽한 눌림",
  "tight with cash": "돈줄을 꽉 쥔",
  "tilt of the land": "땅의 기울어짐",
  "time a court is open": "법정이 열려 있는 때",
  "time of sleeping": "잠자는 동안",
  "tip out by accident": "실수로 기울여 붓다",
  "to a small degree": "작은 정도로",
  "to all appearances": "누가 봐도 그렇게",
  "to do with data counts": "자료를 세는 일에 관한",
  "to do with feeling": "느낌에 관한",
  "to do with hygiene": "위생에 관한",
  "to do with people and custom": "사람살이와 풍습에 관한",
  "to do with sound": "소리에 관한",
  "to do with space": "공간에 관한",
  "together in time": "때를 맞춰 함께",
  "too little to go round": "돌아갈 만큼이 못 되는",
  "toothed blade": "이가 난 날",
  "top layer": "맨 위의 켜",
  "top of a mountain": "산의 꼭대기",
  "topic of talk": "이야기의 거리",
  "town on the edge of a city": "도시 가장자리의 고을",
  "town with a harbor": "항만을 둔 고을",
  "track without being seen": "보이지 않게 뒤를 밟다",
  "tremble": "부들부들 떨다",
  "tremble all over": "온몸을 떨다",
  "trip and fall": "걸려 넘어지다",
  "try to find": "찾아내려 애쓰다",
  "try to get": "얻으려 애쓰다",
  "tube for injection": "주사에 쓰는 관",
  "turn in circles": "동그라미를 그리며 돌다",
  "turn of duty": "맡는 차례",
  "turn off at the source": "근원에서 잠그다",
  "turn the wheel of": "~의 바퀴를 돌리다",
  "turn to another": "다른 쪽으로 돌리다",
  "twist a joint": "관절을 뒤틀다",
  "unable to breathe easily": "숨쉬기가 어려운",
  "unaware level of thinking": "깨닫지 못하는 생각의 층",
  "under the surface of the mind": "마음 표면 아래의",
  "underwater vessel": "물밑을 다니는 선박",
  "unease at being watched": "보여지는 데서 오는 불편함",
  "unopened flower": "아직 피지 않은 꽃",
  "until this point": "이 시점까지",
  "unwanted result": "바라지 않은 결과",
  "unwilling to give": "내주기를 꺼리는",
  "up to now": "이제까지",
  "up to the minute": "바로 지금까지의",
  "upper-house lawmaker": "윗 의회의 입법자",
  "used": "남이 쓰던",
  "used instead": "대신 쓰이는",
  "using ridicule": "조롱을 써서",
  "very sudden in rise": "오름이 매우 갑작스러운",
  "very tall building": "아주 높은 건물",
  "very thin": "몹시 마른",
  "vessel for space travel": "우주를 오가는 배",
  "vie with others": "남들과 겨루다",
  "view coloured by feeling": "느낌이 물든 생각",
  "view of the land": "땅이 보이는 모습",
  "walk out of": "~에서 걸어 나오다",
  "walk unsteadily": "흔들리며 걷다",
  "walk with long steps": "긴 걸음으로 걷다",
  "wander off course": "가던 길에서 헤매다",
  "ward off": "막아 내다",
  "waste away": "헛되이 써 버리다",
  "waste disposal system": "오물 처리 체계",
  "waste from lack of food": "먹을 것이 없어 쇠하다",
  "waste water": "버려지는 물",
  "watch over the work of": "~의 일을 지켜보다",
  "watch over work": "일을 지켜봄",
  "way out of trouble": "곤란에서 벗어날 길",
  "way parts are put together": "부분들이 짜인 방식",
  "way worked out in advance": "미리 짜 둔 방도",
  "weak point": "약한 데",
  "weep aloud": "소리 내어 울다",
  "weight of a rite": "의식이 지닌 무게",
  "weighty in effect": "영향이 무거운",
  "wet low ground": "물기 많은 낮은 땅",
  "wet right through": "속까지 적시다",
  "what follows after": "뒤에 따라오는 것",
  "what one does best": "제일 잘하는 것",
  "whirl about": "휘돌다",
  "win over by charm": "매력으로 끌어들이다",
  "wise ruler": "지혜로운 다스리는 이",
  "with a keen edge": "날이 선 채로",
  "without company": "함께할 이가 없는",
  "without shame": "부끄러움 없이",
  "witty attack in writing": "글로 재치 있게 찌름",
  "words making a full thought": "한 생각을 다 담은 말",
  "work hard at": "~에 힘을 쏟다",
  "working for oneself": "제 일을 제가 하는",
  "working on the unaware mind": "깨닫지 못하는 마음에 작용하는",
  "worldly-wise": "세상 물정에 밝은",
  "worn and poor": "닳고 볼품없는",
  "worn-out notion": "닳아 버린 생각",
  "worsen fast": "빠르게 나빠지다",
  "wreck on the rocks": "암초에 부서짐",
  "write in a hurry": "급하게 적다",
  "wrongdoing against god": "신을 거스르는 잘못",
  "yield to the enemy": "적에게 굽히다",
  "young growth": "어린 싹"
});
