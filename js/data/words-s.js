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
    ex:[{ s:"Her {{}} faded as she spoke.", f:"self-consciousness", ko:"말을 이어가며 그녀의 자의식이 옅어졌다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "academic": "학업의, 학구적인",
  "act of picking out": "골라내는 일",
  "add salt and spice": "소금과 향신료를 넣다",
  "afraid": "두려워하는",
  "apparently": "보아하니",
  "area covered": "미치는 구역",
  "avoid looking bad": "모양이 나빠지지 않게 하다",
  "awareness of oneself": "제 자신을 의식함",
  "barely enough": "겨우 될 만한",
  "block by sorting": "가려서 막다",
  "body circling a planet": "행성을 도는 천체",
  "branch of industry": "산업의 한 가지",
  "bring up from water": "물에서 끌어올리다",
  "careful check": "꼼꼼한 확인",
  "causing fear": "두려움을 일으키는",
  "cheer": "기운을 북돋우다",
  "choice made": "내린 고름",
  "choosing with care": "조심해서 고르는",
  "claiming the role oneself": "그 자리를 제 것이라 하는",
  "claw at": "손톱으로 할퀴다",
  "clean and free of germs": "균이 없이 깨끗한",
  "clean by rubbing": "비벼서 깨끗이 하다",
  "clear judgment": "맑은 판단력",
  "close examination": "빈틈없는 살핌",
  "close look": "바짝 들여다봄",
  "close tight": "꽉 닫다",
  "coastal trading town": "바닷가 무역 고을",
  "complete soaking": "속까지 다 젖음",
  "contemptuous": "업신여기는",
  "cutting tool with teeth": "이가 난 자르는 도구",
  "damage on purpose": "고의로 해를 입히다",
  "deliverance": "해방, 벗어남",
  "dig out and raise": "파서 들어 올리다",
  "disappointing": "실망스러운",
  "discharge from a gland": "샘에서 나온 것",
  "disdainful": "깔보는",
  "division by race": "인종에 따른 갈림",
  "drains and clean water": "배수와 깨끗한 물",
  "examine closely": "바짝 붙어 살펴보다",
  "experienced": "겪어 본 바가 많은",
  "fasten shut": "잠가서 닫다",
  "field of work": "일의 갈래",
  "fill fully": "가득 채우다",
  "fill to the limit": "한도까지 채우다",
  "filled with fear": "두려움에 찬",
  "flavor with spice": "향신료로 맛을 내다",
  "fluid given off": "내어놓은 액체",
  "fluid in the mouth": "입안의 액체",
  "forced separation": "강제로 갈라놓음",
  "formal permission": "정식 허가",
  "free from harm": "해를 입지 않는",
  "frightened": "놀라 떠는",
  "frightening": "놀라게 하는",
  "fulfilling": "보람 있는",
  "full of salt": "소금기가 많은",
  "gather up in one go": "한 번에 그러모으다",
  "give taste to": "~에 맛을 들이다",
  "giving contentment": "흐뭇함을 주는",
  "giving up of something": "무언가를 내놓음",
  "glut": "실컷 채우다",
  "grant for study": "공부에 주는 지원금",
  "greet with respect": "예를 갖춰 맞이하다",
  "guide on avoiding danger": "위험을 피하는 안내",
  "handsaw": "손톱질 도구",
  "hard to come by": "구하기 어려운",
  "hardly ever": "좀체 ~ 없는",
  "haven": "안식처",
  "head of a department": "부처를 이끄는 사람",
  "healed cut": "아문 베인 자리",
  "hunt for": "뒤져서 구하다",
  "hygienic": "위생적인",
  "in short supply": "공급이 모자란",
  "ironic in a cutting way": "날카롭게 비꼬는",
  "ironic in tone": "말투가 반어적인",
  "jot down roughly": "대충 적어 두다",
  "keep apart from others": "남들과 떨어뜨려 두다",
  "keep one's dignity": "품위를 지키다",
  "keep races or sexes apart": "인종이나 성별을 떼어 두다",
  "keeping groups apart": "무리를 떼어 두는 일",
  "leaf through": "책장을 넘겨 가며 보다",
  "lift with a scoop": "국자로 떠올리다",
  "long in practice": "오래 익혀 온",
  "look at in fine detail": "잘게 나눠 들여다보다",
  "look over quickly": "빠르게 눈으로 지나가다",
  "looking down on": "아래로 보는",
  "loss for a cause": "대의를 위한 손실",
  "madness": "광기",
  "make a mark by rubbing": "비벼서 자국을 내다",
  "make sorrowful": "애석하게 만들다",
  "make sure of": "틀림없이 해 두다",
  "mark left by a wound": "상처가 남긴 자리",
  "mental health": "정신 건강",
  "money for tuition": "수업료에 쓰는 돈",
  "move fast in haste": "급히 빠르게 움직이다",
  "named by oneself": "제가 제 이름을 붙인",
  "natural setting": "자연 그대로의 자리",
  "not new": "새것이 아닌",
  "not often": "자주 ~ 않는",
  "not religious": "종교와 무관한",
  "not taking all": "다 받지는 않는",
  "of sound mind": "정신이 온전한",
  "of this world": "이 세상에 속한",
  "office assistant": "사무를 돕는 사람",
  "official approval": "공식 승인",
  "on the face of it": "겉으로 보면",
  "one division": "하나의 갈림",
  "one who keeps records": "기록을 맡는 사람",
  "oozing out": "스며 나옴",
  "orbiting station": "궤도 위의 기지",
  "out of danger": "위험에서 벗어난",
  "part cut from a whole": "전체에서 잘라 낸 몫",
  "part cut off": "잘라 낸 몫",
  "part of the economy": "경제의 한 몫",
  "pay tribute to": "~에게 찬사를 보내다",
  "picky": "까다롭게 고르는",
  "pleasing": "즐거움을 주는",
  "point of no more": "더 못 받는 지점",
  "port city": "항만이 있는 도시",
  "pre-owned": "앞서 주인이 있던",
  "privacy away from all": "모두에게서 떨어진 사사로움",
  "protect one's honor": "명예를 지키다",
  "quiet spot far off": "멀찍이 떨어진 조용한 곳",
  "rarely": "좀처럼 ~ 않는",
  "recover from wreck": "난파선에서 되찾다",
  "redemption": "속죄, 되찾음",
  "rich tang": "짙은 맛깔",
  "rub hard": "세게 비비다",
  "rub with nails": "손톱으로 비비다",
  "rules for staying safe": "안전하게 지내는 규칙",
  "run one's eye over": "눈으로 쭉 지나가다",
  "rush about": "부리나케 돌아다니다",
  "safe place for animals": "동물이 지내는 안전한 곳",
  "safety lesson": "안전 수업",
  "salt-laden": "소금이 섞인",
  "salty": "짠",
  "saving from sin": "죄에서 건져 냄",
  "scour with a brush": "솔로 닦아 내다",
  "scrawl": "휘갈겨 적다",
  "secret plan": "몰래 세운 계획",
  "self-styled": "스스로 내세운",
  "set apart by group": "무리별로 떼어 놓다",
  "set apart for god": "신에게 바쳐진",
  "shut away": "가둬 두다",
  "shut with wax": "밀랍으로 막다",
  "shyness before others": "남 앞에서의 수줍음",
  "sift out": "체로 골라내다",
  "size of a thing": "사물의 크기",
  "slice": "얇게 썬 쪽",
  "sneering": "코웃음 치는",
  "soundness of mind": "정신의 온전함",
  "spacecraft in orbit": "궤도를 도는 비행체",
  "spit": "뱉는 침",
  "spittle": "입에서 나온 침",
  "spooky": "으스스한",
  "standing out most": "가장 도드라지는",
  "state of being full": "가득 찬 상태",
  "state of being shut away": "틀어박혀 있는 상태",
  "study award": "학업에 주는 상금",
  "take by force": "힘으로 빼앗다",
  "taste one enjoys": "즐기는 맛",
  "thin in amount": "양이 얇은",
  "throw out as useless": "쓸모없다고 내버리다",
  "to all appearances": "누가 봐도 그렇게",
  "to do with hygiene": "위생에 관한",
  "toothed blade": "이가 난 날",
  "town with a harbor": "항만을 둔 고을",
  "try to find": "찾아내려 애쓰다",
  "try to get": "얻으려 애쓰다",
  "unease at being watched": "보여지는 데서 오는 불편함",
  "used": "남이 쓰던",
  "using ridicule": "조롱을 써서",
  "vie with others": "남들과 겨루다",
  "view of the land": "땅이 보이는 모습",
  "ward off": "막아 내다",
  "waste disposal system": "오물 처리 체계",
  "win over by charm": "매력으로 끌어들이다",
  "witty attack in writing": "글로 재치 있게 찌름",
  "write in a hurry": "급하게 적다"
});
