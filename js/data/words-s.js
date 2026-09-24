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
    ex:[{ s:"The room was {{}} warmer today.", f:"slightly", ko:"그 방은 오늘 약간 더 따뜻했다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "a little": "조금은",
  "academic": "학업의, 학구적인",
  "accept as one's own load": "제 짐으로 받아들이다",
  "act of fending off attack": "공격을 물리치는 일",
  "act of parting": "갈라서는 일",
  "act of picking out": "골라내는 일",
  "add salt and spice": "소금과 향신료를 넣다",
  "afraid": "두려워하는",
  "all skin and bone": "살가죽과 뼈뿐인",
  "apparently": "보아하니",
  "arc of half a turn": "반 바퀴의 활꼴",
  "area covered": "미치는 구역",
  "army officer of low rank": "계급이 낮은 군 간부",
  "at one and the same time": "같은 때에 한꺼번에",
  "avoid looking bad": "모양이 나빠지지 않게 하다",
  "awareness of oneself": "제 자신을 의식함",
  "bang shut": "탁 소리 내며 닫히다",
  "barely below the top": "표면 바로 아래인",
  "barely enough": "겨우 될 만한",
  "bear the weight of": "~의 무게를 지다",
  "bed into place": "자리에 박아 앉히다",
  "begin a task": "일에 손을 대다",
  "begin and stay": "시작해 이어지다",
  "black profile": "검게 보이는 옆모습",
  "block by sorting": "가려서 막다",
  "block the flow of": "~의 흐름을 막다",
  "blockade of a fort": "요새를 에워쌈",
  "body circling a planet": "행성을 도는 천체",
  "bony": "뼈가 드러난",
  "branch of industry": "산업의 한 가지",
  "breach of divine law": "신의 법을 어김",
  "bring up from water": "물에서 끌어올리다",
  "brother or sister": "형제 또는 자매",
  "building of many floors": "층이 많은 건물",
  "butchery of animals": "짐승을 잡음",
  "calm and untroubled": "잔잔하고 흔들림 없는",
  "careful check": "꼼꼼한 확인",
  "carried by nerves": "신경으로 전해지는",
  "cast a shadow on": "~에 그림자를 드리우다",
  "cast ashore from a wreck": "부서진 배에서 밀려 올라온",
  "causing a stir": "들썩이게 하는",
  "causing fear": "두려움을 일으키는",
  "change of position": "자리의 바뀜",
  "cheer": "기운을 북돋우다",
  "child of the same parents": "같은 부모의 자식",
  "choice made": "내린 고름",
  "choosing with care": "조심해서 고르는",
  "church talk": "교회에서 하는 말씀",
  "claiming the role oneself": "그 자리를 제 것이라 하는",
  "claw at": "손톱으로 할퀴다",
  "clean and free of germs": "균이 없이 깨끗한",
  "clean by rubbing": "비벼서 깨끗이 하다",
  "clear in outline": "윤곽이 또렷한",
  "clear judgment": "맑은 판단력",
  "climb at great speed": "아주 빠르게 올라가다",
  "close examination": "빈틈없는 살핌",
  "close hard": "힘껏 닫다",
  "close look": "바짝 들여다봄",
  "close tight": "꽉 닫다",
  "coastal trading town": "바닷가 무역 고을",
  "come to rest": "자리를 잡고 멈추다",
  "commit oneself to": "~에 나서기로 하다",
  "complete in itself": "그것만으로 온전한",
  "complete soaking": "속까지 다 젖음",
  "contemptuous": "업신여기는",
  "cool dark spot": "시원하고 어두운 자리",
  "court ruling": "법정이 내린 결정",
  "cover from danger": "위험을 막아 주는 곳",
  "cut out the hard parts": "어려운 데를 덜어 내다",
  "cut the supply of": "~의 공급을 끊다",
  "cutting tool with teeth": "이가 난 자르는 도구",
  "damage on purpose": "고의로 해를 입히다",
  "dark in intent": "속뜻이 어두운",
  "dark outline": "어두운 테두리",
  "dazzling to see": "보기에 눈부신",
  "delay the progress of": "~의 진행을 늦추다",
  "delicacy of response": "반응의 고움",
  "deliverance": "해방, 벗어남",
  "dig out and raise": "파서 들어 올리다",
  "dirty water from homes": "집에서 나온 더러운 물",
  "disappointing": "실망스러운",
  "discharge from a gland": "샘에서 나온 것",
  "disdainful": "깔보는",
  "division by race": "인종에 따른 갈림",
  "drain water": "배수로로 흐르는 물",
  "drains and clean water": "배수와 깨끗한 물",
  "drop away": "떨어져 나가다",
  "drop below the surface": "물낯 아래로 내려가다",
  "ease into without notice": "티 안 나게 스며들다",
  "easily affected": "쉽게 영향을 받는",
  "edge of the sea": "바다의 가장자리",
  "effect not aimed at": "겨냥하지 않은 영향",
  "elderly person": "나이가 든 사람",
  "elected upper chamber member": "뽑힌 윗 의회 구성원",
  "examine closely": "바짝 붙어 살펴보다",
  "experienced": "겪어 본 바가 많은",
  "failing in something": "무언가에서 모자란 점",
  "far from small": "작다고 할 수 없는",
  "farm hut": "농가의 헛간",
  "fasten shut": "잠가서 닫다",
  "feeling held": "품고 있는 느낌",
  "field of work": "일의 갈래",
  "fill fully": "가득 채우다",
  "fill to the limit": "한도까지 채우다",
  "filled with fear": "두려움에 찬",
  "fineness of feeling": "느낌의 섬세함",
  "fire a weapon": "무기를 발사하다",
  "fix the place of": "~의 자리를 정하다",
  "flavor with spice": "향신료로 맛을 내다",
  "fluid given off": "내어놓은 액체",
  "fluid in the mouth": "입안의 액체",
  "forced separation": "강제로 갈라놓음",
  "formal permission": "정식 허가",
  "free from harm": "해를 입지 않는",
  "free of self-interest": "제 이익이 없는",
  "free of stir": "들썩임이 없는",
  "freedom from fuss": "번거로움이 없음",
  "frightened": "놀라 떠는",
  "frightening": "놀라게 하는",
  "fulfilling": "보람 있는",
  "full of doubt": "의심으로 가득한",
  "full of salt": "소금기가 많은",
  "gather up in one go": "한 번에 그러모으다",
  "get smaller": "작아지다",
  "get ~ under way": "~이 돌아가기 시작하게 하다",
  "give taste to": "~에 맛을 들이다",
  "giving contentment": "흐뭇함을 주는",
  "giving up of something": "무언가를 내놓음",
  "glide into": "매끄럽게 들어가다",
  "glide over the text": "글 위를 스쳐 가다",
  "glut": "실컷 채우다",
  "go back and forth": "오가다",
  "go under water": "물밑으로 들어가다",
  "going on at once": "한꺼번에 진행되는",
  "gracefully thin": "맵시 있게 마른",
  "grant for study": "공부에 주는 지원금",
  "greet with respect": "예를 갖춰 맞이하다",
  "guard with a cover": "덮어서 지키다",
  "guarding oneself": "제 몸을 지킴",
  "guide on avoiding danger": "위험을 피하는 안내",
  "habit of not believing": "믿지 않으려는 버릇",
  "half circle": "동그라미의 절반",
  "half of a round shape": "둥근 꼴의 절반",
  "half of a school year": "한 학년의 절반",
  "hand-written name": "손으로 쓴 이름",
  "handsaw": "손톱질 도구",
  "happening together": "함께 일어나는",
  "hard to come by": "구하기 어려운",
  "hardly ever": "좀체 ~ 없는",
  "haven": "안식처",
  "head of a department": "부처를 이끄는 사람",
  "healed cut": "아문 베인 자리",
  "heap upon": "~에 수북이 얹다",
  "high-rise tower": "높이 솟은 탑 모양 건물",
  "hinting at evil": "나쁜 기미를 띤",
  "hired hand": "품을 받고 일하는 사람",
  "hit flat-handed": "손을 펴서 때리다",
  "hold up": "붙들어 늦추다",
  "household helper": "집안일을 돕는 사람",
  "hugely exciting": "크게 들뜨게 하는",
  "hunt for": "뒤져서 구하다",
  "hygienic": "위생적인",
  "in short supply": "공급이 모자란",
  "in the same moment": "같은 순간에",
  "ironic in a cutting way": "날카롭게 비꼬는",
  "ironic in tone": "말투가 반어적인",
  "join by writing in": "적어 넣어 들어가다",
  "jot down roughly": "대충 적어 두다",
  "just a bit": "아주 살짝",
  "keen-edged": "날이 선",
  "keep apart from others": "남들과 떨어뜨려 두다",
  "keep one's dignity": "품위를 지키다",
  "keep out of the way": "걸리지 않게 두다",
  "keep races or sexes apart": "인종이나 성별을 떼어 두다",
  "keeping groups apart": "무리를 떼어 두는 일",
  "lack of frills": "덧붙임이 없음",
  "lacking depth": "깊이가 없는",
  "lacking foresight": "앞을 못 보는",
  "land by the water": "물가의 땅",
  "lay by for later": "나중을 위해 챙겨 두다",
  "leaf through": "책장을 넘겨 가며 보다",
  "left adrift at sea": "바다에 떠돌게 된",
  "let fall": "떨어지게 하다",
  "let fly an arrow": "화살을 날리다",
  "lift and drop the shoulders": "어깨를 올렸다 내리다",
  "lift with a scoop": "국자로 떠올리다",
  "long attack from outside": "밖에서 오래 밀어붙이는 공격",
  "long in practice": "오래 익혀 온",
  "long telling-off": "길게 이어지는 꾸중",
  "look at in fine detail": "잘게 나눠 들여다보다",
  "look over quickly": "빠르게 눈으로 지나가다",
  "looking down on": "아래로 보는",
  "looking uncared for": "돌보지 않은 듯한",
  "loss for a cause": "대의를 위한 손실",
  "loss of a ship at sea": "바다에서 배를 잃음",
  "madness": "광기",
  "make a mark by rubbing": "비벼서 자국을 내다",
  "make plain": "알기 쉽게 하다",
  "make sorrowful": "애석하게 만들다",
  "make sure of": "틀림없이 해 두다",
  "mark left by a wound": "상처가 남긴 자리",
  "mark of one's own": "제 것임을 보이는 표",
  "mass killing": "무리를 죽임",
  "meant truly": "참으로 한 말인",
  "member of the senate": "상원에 속한 사람",
  "mental health": "정신 건강",
  "miss on purpose": "일부러 빼먹다",
  "money for tuition": "수업료에 쓰는 돈",
  "moral fault": "도리에 어긋난 잘못",
  "moral lecture": "도리를 일러 주는 말",
  "more than two": "둘보다 많은",
  "move fast in haste": "급히 빠르게 움직이다",
  "move to another state": "다른 상태로 옮김",
  "named by oneself": "제가 제 이름을 붙인",
  "narrow in shape": "꼴이 좁은",
  "natural setting": "자연 그대로의 자리",
  "needing nothing outside": "밖에서 얻을 것이 없는",
  "non-commissioned officer": "임관하지 않은 간부",
  "not deep": "깊지 않은",
  "not new": "새것이 아닌",
  "not often": "자주 ~ 않는",
  "not on a payroll": "월급을 받지 않는",
  "not religious": "종교와 무관한",
  "not taking all": "다 받지는 않는",
  "note-taking in signs": "기호로 받아 적기",
  "nothing but": "다른 것 없이 오직",
  "of bodily pleasure": "몸의 즐거움에 속한",
  "of sound mind": "정신이 온전한",
  "of the senses": "감각에 속한",
  "of this world": "이 세상에 속한",
  "office assistant": "사무를 돕는 사람",
  "official approval": "공식 승인",
  "older member of society": "사회의 연장자",
  "on the face of it": "겉으로 보면",
  "one division": "하나의 갈림",
  "one of advanced years": "연치가 높은 사람",
  "one of two school terms": "두 기간 중 하나",
  "one who keeps records": "기록을 맡는 사람",
  "one who waits on others": "남을 받드는 사람",
  "one's own kin": "제 살붙이",
  "one's written name": "제가 적은 이름",
  "oozing out": "스며 나옴",
  "openness to beauty": "아름다움에 열린 마음",
  "orbiting station": "궤도 위의 기지",
  "out of danger": "위험에서 벗어난",
  "out of puff": "숨이 가쁜",
  "panting hard": "숨을 몰아쉬는",
  "part cut from a whole": "전체에서 잘라 낸 몫",
  "part cut off": "잘라 낸 몫",
  "part of the economy": "경제의 한 몫",
  "part one gets": "차지하는 부분",
  "pay tribute to": "~에게 찬사를 보내다",
  "period of meeting": "모임이 이어지는 기간",
  "pick out from the rest": "나머지에서 집어내다",
  "picky": "까다롭게 고르는",
  "place in position": "자리에 놓다",
  "place newly lived in": "새로 들어와 사는 곳",
  "plainness": "꾸밈없음",
  "pleasing": "즐거움을 주는",
  "pleasing to the body": "몸에 즐거운",
  "plot of ground": "땅의 한 구획",
  "point of no more": "더 못 받는 지점",
  "point to just one": "딱 하나를 짚다",
  "port city": "항만이 있는 도시",
  "portion due": "받을 몫",
  "pour in plenty": "넉넉히 쏟다",
  "pour out": "쏟아 내다",
  "pre-owned": "앞서 주인이 있던",
  "pretend to have": "가진 척하다",
  "privacy away from all": "모두에게서 떨어진 사사로움",
  "protect one's honor": "명예를 지키다",
  "protection of one's own body": "제 몸을 막아 냄",
  "pure and simple": "다름 아닌",
  "push behind schedule": "일정보다 뒤로 밀다",
  "put an end to a dispute": "다툼을 끝맺다",
  "put on an act of": "~인 척 연기하다",
  "put one's name down for": "~에 이름을 올려 두다",
  "put to one side": "옆으로 밀어 두다",
  "put ~ into action": "~을 실제로 돌리다",
  "putting others first": "남을 앞세우는",
  "quake in dread": "두려움에 흔들리다",
  "quick to feel": "느낌이 빠른",
  "quick writing system": "빠르게 적는 방식",
  "quiet spot far off": "멀찍이 떨어진 조용한 곳",
  "rain down on": "~에 비처럼 내리다",
  "raise the shoulders": "어깨를 올리다",
  "rarely": "좀처럼 ~ 않는",
  "read fast for the gist": "요지만 빨리 읽다",
  "recover from wreck": "난파선에서 되찾다",
  "redemption": "속죄, 되찾음",
  "reduce to basics": "기본만 남기다",
  "responsive to touch": "닿는 것에 반응하는",
  "rich tang": "짙은 맛깔",
  "rise steeply": "가파르게 오르다",
  "roof over one's head": "머리를 덮어 줄 지붕",
  "rub hard": "세게 비비다",
  "rub with nails": "손톱으로 비비다",
  "rules for staying safe": "안전하게 지내는 규칙",
  "run one's eye over": "눈으로 쭉 지나가다",
  "run to and fro": "이리저리 다니다",
  "run-down": "허름해진",
  "running one's own trade": "제 장사를 꾸리는",
  "rush about": "부리나케 돌아다니다",
  "safe place for animals": "동물이 지내는 안전한 곳",
  "safety lesson": "안전 수업",
  "salt-laden": "소금이 섞인",
  "salty": "짠",
  "saving from sin": "죄에서 건져 냄",
  "scour with a brush": "솔로 닦아 내다",
  "scrawl": "휘갈겨 적다",
  "screen against light": "빛을 막는 가림막",
  "screen from danger": "위험에서 가려 주다",
  "secret plan": "몰래 세운 계획",
  "seeing only the near": "가까운 것만 보는",
  "self-styled": "스스로 내세운",
  "send a bullet": "탄알을 보내다",
  "set apart": "따로 떼어 두다",
  "set apart by group": "무리별로 떼어 놓다",
  "set apart for god": "신에게 바쳐진",
  "set in a spot": "한 자리에 앉히다",
  "set order": "정해진 차례",
  "settle in for a while": "한동안 눌러앉다",
  "shake with cold": "추위로 떨다",
  "shake with horror": "끔찍함에 떨다",
  "shape against the light": "빛을 등진 꼴",
  "shelter from sun": "볕을 가려 주는 곳",
  "shoot up fast": "빠르게 치솟다",
  "show one does not care": "대수롭지 않다는 몸짓을 하다",
  "showing good judgment": "판단이 옳은",
  "shut away": "가둬 두다",
  "shut with a bang": "소리 나게 닫다",
  "shut with wax": "밀랍으로 막다",
  "shyness before others": "남 앞에서의 수줍음",
  "side by side in time": "때를 나란히 하는",
  "sift out": "체로 골라내다",
  "sinking of a vessel": "배가 가라앉음",
  "sitting of a body": "기구가 모여 앉는 때",
  "size of a thing": "사물의 크기",
  "slice": "얇게 썬 쪽",
  "slim in build": "몸매가 호리호리한",
  "slip into": "슬그머니 들어가다",
  "slow to believe": "쉽게 믿지 않는",
  "smack": "철썩 치다",
  "smash into bits": "조각조각 깨뜨리다",
  "sneering": "코웃음 치는",
  "some in number": "수가 얼마쯤 되는",
  "soundness of mind": "정신의 온전함",
  "spacecraft in orbit": "궤도를 도는 비행체",
  "spit": "뱉는 침",
  "spittle": "입에서 나온 침",
  "split into parts": "여러 몫으로 쪼갬",
  "spooky": "으스스한",
  "spot for building": "집을 세울 자리",
  "squad leader": "분대를 이끄는 사람",
  "standing alone": "홀로 서 있는",
  "standing out most": "가장 도드라지는",
  "start a journey": "길을 나서다",
  "start ~ going": "~이 굴러가게 하다",
  "state of being full": "가득 찬 상태",
  "state of being shut away": "틀어박혀 있는 상태",
  "stenography": "기호 필기법",
  "stirring the senses": "감각을 흔드는",
  "stranded after a sinking": "배가 가라앉아 발이 묶인",
  "strike with the palm": "손바닥으로 치다",
  "string of words": "낱말을 이은 줄",
  "study award": "학업에 주는 상금",
  "surrounding of a town": "고을을 둘러쌈",
  "surroundings of a scene": "장면을 둘러싼 것들",
  "take by force": "힘으로 빼앗다",
  "take hold": "뿌리를 내리다",
  "take in and hide": "받아들여 숨겨 주다",
  "take on a burden": "짐을 짊어지다",
  "take out a place in": "~에 자리를 잡아 두다",
  "talk of the town": "장안의 이야깃거리",
  "taste one enjoys": "즐기는 맛",
  "tender mood": "다정한 마음결",
  "term of study": "공부하는 기간",
  "thin in amount": "양이 얇은",
  "thing everyone speaks of": "모두가 입에 올리는 것",
  "thinking no further ahead": "더 멀리 생각하지 않는",
  "throw out as useless": "쓸모없다고 내버리다",
  "time a court is open": "법정이 열려 있는 때",
  "to a small degree": "작은 정도로",
  "to all appearances": "누가 봐도 그렇게",
  "to do with feeling": "느낌에 관한",
  "to do with hygiene": "위생에 관한",
  "together in time": "때를 맞춰 함께",
  "too little to go round": "돌아갈 만큼이 못 되는",
  "toothed blade": "이가 난 날",
  "town with a harbor": "항만을 둔 고을",
  "tremble": "부들부들 떨다",
  "tremble all over": "온몸을 떨다",
  "try to find": "찾아내려 애쓰다",
  "try to get": "얻으려 애쓰다",
  "turn of duty": "맡는 차례",
  "turn off at the source": "근원에서 잠그다",
  "unable to breathe easily": "숨쉬기가 어려운",
  "unease at being watched": "보여지는 데서 오는 불편함",
  "unwanted result": "바라지 않은 결과",
  "upper-house lawmaker": "윗 의회의 입법자",
  "used": "남이 쓰던",
  "using ridicule": "조롱을 써서",
  "very tall building": "아주 높은 건물",
  "very thin": "몹시 마른",
  "vie with others": "남들과 겨루다",
  "view coloured by feeling": "느낌이 물든 생각",
  "view of the land": "땅이 보이는 모습",
  "ward off": "막아 내다",
  "waste disposal system": "오물 처리 체계",
  "waste water": "버려지는 물",
  "weak point": "약한 데",
  "weighty in effect": "영향이 무거운",
  "win over by charm": "매력으로 끌어들이다",
  "with a keen edge": "날이 선 채로",
  "without shame": "부끄러움 없이",
  "witty attack in writing": "글로 재치 있게 찌름",
  "words making a full thought": "한 생각을 다 담은 말",
  "working for oneself": "제 일을 제가 하는",
  "worn and poor": "닳고 볼품없는",
  "wreck on the rocks": "암초에 부서짐",
  "write in a hurry": "급하게 적다",
  "wrongdoing against god": "신을 거스르는 잘못",
  "young growth": "어린 싹"
});
