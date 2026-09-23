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
    ex:[{ s:"Her contribution to modern medicine was {{}}.", f:"immeasurable", ko:"현대 의학에 대한 그녀의 기여는 헤아릴 수 없었다." }] },

  /* 승격 ② — GLOSS '직접적인; 즉각적인' 이다. direct(syn) 가 쓰는 갈래는
     '직접적인' 이라 둘째 자리에 지켰다. 첫 자리는 '즉각적인' 으로 두어
     뒤에 올 instant('즉석의')·instantaneous('순간적인')와 갈렸다.
     원본 셋째 갈래 '당면한' 은 meanings 2개 제한에 걸려 뺐다. */
  { word:"immediate", pron:"이미디엇", pos:"adj", level:"B1", meanings:["즉각적인","직접적인"],
    syn:["prompt","swift","speedy"], ant:["delayed"],
    ex:[{ s:"The medicine brought {{}} relief from the pain.", f:"immediate", ko:"그 약은 통증에 즉각적인 완화를 가져왔다." }] },

  { word:"immemorial", pron:"이머모리얼", pos:"adj", level:"C2", meanings:["태고의","아득한 옛적의"],
    syn:["ancient","age-old","primeval"], ant:["modern"],
    ex:[{ s:"The village has held this festival from time {{}}.", f:"immemorial", ko:"그 마을은 태고로부터 이 축제를 열어 왔다." }] },

  /* 승격 ② — GLOSS '거대한, 엄청난' 이다. astronomical(syn)·enormous(syn) 가
     참조한다. 원본 뜻 '막대한, 광대한' 으로 바꿨다 — enormous 의 뜻이 '막대한'
     이고 그쪽이 immense 를 유의어로 쓰므로 같은 갈래가 맞다. */
  { word:"immense", pron:"이멘스", pos:"adj", level:"B2", meanings:["막대한","광대한"],
    syn:["enormous","vast","colossal"], ant:["tiny"],
    ex:[{ s:"The project required an {{}} amount of funding.", f:"immense", ko:"그 사업에는 막대한 자금이 필요했다." }] },

  /* 승격 ① — GLOSS '담그다; 몰입하다' 와 같은 갈래다. 참조하는 기존 문제가 없어
     원본 뜻을 그대로 썼다. PRON 에는 없었다. */
  { word:"immerse", pron:"이머스", pos:"v", level:"C1", meanings:["빠져들게 하다","담그다"],
    syn:["submerge","engross","plunge"],
    ex:[{ s:"She likes to {{}} herself in a long historical novel.", f:"immerse", ko:"그녀는 긴 역사 소설에 빠져들기를 좋아한다." }] },

  { word:"immigration", pron:"이머그레이션", pos:"n", level:"B1", meanings:["이민","이주"],
    syn:["migration","settlement","relocation"], ant:["emigration"],
    ex:[{ s:"New {{}} policies took effect at the start of the year.", f:"immigration", ko:"새 이민 정책이 연초에 발효되었다." }] },

  /* 승격 ② — GLOSS '임박한, 코앞의' 다. at hand(syn) 가 쓰는 갈래 '임박한' 을
     첫 자리에 지켰다. 둘째 갈래는 원본의 '급박한' 으로 바꿨다.
     뒤에 올 impending 은 '곧 닥칠' 로 돌려 겹침을 피했다. */
  { word:"imminent", pron:"이머넌트", pos:"adj", level:"B2", meanings:["임박한","급박한"],
    syn:["approaching","looming","forthcoming"], ant:["distant"],
    ex:[{ s:"Dark clouds warned of an {{}} storm.", f:"imminent", ko:"검은 구름이 임박한 폭풍을 알렸다." }] },

  { word:"immoral", pron:"이모럴", pos:"adj", level:"B2", meanings:["부도덕한","품행이 나쁜"],
    syn:["unethical","corrupt","depraved"], ant:["moral"],
    ex:[{ s:"Many considered the practice deeply {{}}.", f:"immoral", ko:"많은 사람이 그 관행을 몹시 부도덕하다고 여겼다." }] },

  { word:"immortal", pron:"이모틀", pos:"adj", level:"C1", meanings:["불멸의","불사의"],
    syn:["undying","eternal","everlasting"], ant:["mortal"],
    ex:[{ s:"The gods of myth were believed to be {{}}.", f:"immortal", ko:"신화의 신들은 불멸이라고 믿어졌다." }] },

  /* immortal 과 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"immortality", pron:"이모탤러티", pos:"n", level:"C1", meanings:["불멸","영생"],
    syn:["eternity","endlessness","deathlessness"], ant:["mortality"],
    ex:[{ s:"Ancient rulers sought {{}} through vast monuments.", f:"immortality", ko:"고대 통치자들은 거대한 기념물을 통해 불멸을 추구했다." }] },

  { word:"immune", pron:"이뮨", pos:"adj", level:"B2", meanings:["면역성의","면한"],
    syn:["resistant","exempt","protected"], ant:["susceptible"],
    ex:[{ s:"Survivors of the disease became {{}} to reinfection.", f:"immune", ko:"그 병을 앓고 살아남은 사람들은 재감염에 면역이 되었다." }] },

  /* ── 챕터 3 ─────────────────────────────── */

  /* 승격 ② — GLOSS '충격; 영향' 이다. affect(syn) 는 '영향' 쪽,
     collision(syn) 은 '충격' 쪽을 쓴다. 두 갈래를 다 살리고 순서만 원본에 맞췄다.
     원본 셋째 갈래 '영향을 주다'(동사)는 meanings 2개 제한에 걸려 뺐다. */
  { word:"impact", pron:"임팩트", pos:"n", level:"B1", meanings:["영향","충격"],
    syn:["effect","consequence","repercussion"],
    ex:[{ s:"The report measured the {{}} of tourism on the coral reef.", f:"impact", ko:"그 보고서는 관광이 산호초에 미치는 영향을 측정했다." }] },

  /* 승격 ② — GLOSS '손상시키다, 약화시키다' 다. degrade(syn) 가 참조한다.
     원본 순서대로 '악화시키다' 를 앞에 두고 '손상시키다' 를 지켰다. */
  { word:"impair", pron:"임페어", pos:"v", level:"C1", meanings:["악화시키다","손상시키다"],
    syn:["damage","weaken","diminish"], ant:["enhance"],
    ex:[{ s:"Lack of sleep can seriously {{}} judgment.", f:"impair", ko:"수면 부족은 판단력을 심각하게 손상시킬 수 있다." }] },

  /* 승격 ② — GLOSS '전하다, 부여하다' 다. convey(syn) 가 쓰는 갈래가
     '전달하다' 라서 둘째 자리에 지켰다. 사전에 있던 '부여하다' 는 셋째 갈래가
     되어 meanings 2개 제한에 걸렸다 — 이 갈래를 참조하는 문제는 없다. */
  { word:"impart", pron:"임파트", pos:"v", level:"C1", meanings:["말해주다","전달하다"],
    syn:["convey","communicate","disclose"],
    ex:[{ s:"A good teacher can {{}} enthusiasm as well as facts.", f:"impart", ko:"좋은 교사는 사실뿐 아니라 열정도 전달할 수 있다." }] },

  /* 승격 ① — GLOSS '공정한, 편견 없는' 을 글자까지 지켰다. 참조가 3곳
     (biased(ant)·disinterested(syn)·fair(syn))이라 원본 '편파적이지 않은' 대신
     사전 쪽 표현을 남겼다. */
  { word:"impartial", pron:"임파셜", pos:"adj", level:"C1", meanings:["공정한","편견 없는"],
    syn:["unbiased","neutral","objective"], ant:["biased"],
    ex:[{ s:"The dispute was settled by an {{}} mediator.", f:"impartial", ko:"그 분쟁은 공정한 중재자에 의해 해결되었다." }] },

  /* impart·impartial 과 어근이 같지만 품사가 셋 다 달라(v/adj/adv)
     같은 보드에 안 온다. */
  { word:"impartially", pron:"임파셜리", pos:"adv", level:"C1", meanings:["공정하게","편견 없이"],
    syn:["fairly","objectively","evenhandedly"],
    ex:[{ s:"Judges must treat all parties {{}}.", f:"impartially", ko:"판사는 모든 당사자를 공정하게 대해야 한다." }] },

  { word:"impel", pron:"임펠", pos:"v", level:"C1", meanings:["추진하다","재촉하다"],
    syn:["propel","compel","spur"], ant:["deter"],
    ex:[{ s:"Financial pressure {{}} many students to take part-time jobs.", f:"impels", ko:"재정적 압박은 많은 학생이 아르바이트를 하도록 재촉한다." }] },

  /* 원본 첫 뜻은 '임박한' 으로 imminent 과 같았다. imminent 이 '임박한' 을
     가져가고 이쪽은 '곧 닥칠' 로 돌렸다. */
  { word:"impending", pron:"임펜딩", pos:"adj", level:"C1", meanings:["곧 닥칠","다가오는"],
    syn:["imminent","approaching","looming"],
    ex:[{ s:"Everyone sensed the {{}} crisis but no one acted.", f:"impending", ko:"모두가 곧 닥칠 위기를 감지했지만 아무도 움직이지 않았다." }] },

  { word:"imperative", pron:"임페러티브", pos:"adj", level:"C1", meanings:["꼭 필요한","절박한"],
    syn:["essential","urgent","crucial"], ant:["optional"],
    ex:[{ s:"It is {{}} that emissions be cut without delay.", f:"imperative", ko:"배출량을 지체 없이 줄이는 것이 꼭 필요하다." }] },

  /* 둘째 갈래를 '흠이 있는' 으로 했다. '결함이 있는' 은 유의어 flawed 의 뜻과
     글자까지 같아, 문제와 선택지가 같은 줄을 보여 주게 된다. */
  { word:"imperfect", pron:"임퍼픽트", pos:"adj", level:"B2", meanings:["불완전한","흠이 있는"],
    syn:["flawed","faulty","substandard"], ant:["perfect"],
    ex:[{ s:"Even the finest translation is an {{}} copy of the original.", f:"imperfect", ko:"가장 훌륭한 번역조차 원문의 불완전한 사본이다." }] },

  { word:"imperial", pron:"임피리얼", pos:"adj", level:"C1", meanings:["제국의","황제의"],
    syn:["royal","sovereign","regal"],
    ex:[{ s:"The museum displays {{}} robes from the Qing dynasty.", f:"imperial", ko:"그 박물관은 청나라의 황제 의복을 전시한다." }] },

  /* imperial 과 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"imperialism", pron:"임피리얼리즘", pos:"n", level:"C1", meanings:["제국주의","패권주의"],
    syn:["colonialism","expansionism","hegemony"],
    ex:[{ s:"The conflict was driven by nineteenth-century {{}}.", f:"imperialism", ko:"그 분쟁은 19세기 제국주의에 의해 추동되었다." }] },

  { word:"impertinent", pron:"임퍼터넌트", pos:"adj", level:"C2", meanings:["무례한","버릇없는"],
    syn:["rude","insolent","disrespectful"], ant:["polite"],
    ex:[{ s:"The student's {{}} remark stunned the whole class.", f:"impertinent", ko:"그 학생의 무례한 말이 반 전체를 아연하게 했다." }] },

  /* 승격 ① — GLOSS '원동력, 추진력' 과 같은 갈래다. 참조하는 기존 문제가 없어
     원본 뜻 '자극제, 추진력' 을 그대로 썼다. PRON 에는 없었다. */
  { word:"impetus", pron:"임퍼터스", pos:"n", level:"C1", meanings:["자극제","추진력"],
    syn:["stimulus","momentum","driving force"],
    ex:[{ s:"The discovery gave fresh {{}} to cancer research.", f:"impetus", ko:"그 발견은 암 연구에 새로운 자극제가 되었다." }] },

  /* 승격 ② — GLOSS '실행하다; 도구' 다. act on(syn)·apply(syn) 는 둘 다 동사로
     '실행하다' 갈래를 쓴다. 사전에 있던 명사 '도구' 는 pos 가 v 인 이 표제어에
     담을 수 없고 참조하는 문제도 없어 뺐다. */
  { word:"implement", pron:"임플러먼트", pos:"v", level:"B2", meanings:["실행하다","수행하다"],
    syn:["execute","carry out","enforce"],
    ex:[{ s:"The city plans to {{}} the new recycling scheme in June.", f:"implement", ko:"그 시는 6월에 새 재활용 제도를 실행할 계획이다." }] },

  /* 승격 ② — GLOSS '함축, 영향' 이다. connotation(syn) 이 쓰는 갈래 '함축' 을
     첫 자리에 지켰다. 둘째는 원본의 '암시' 로 했다 — '영향' 은 바로 앞
     impact 가 가져갔다. */
  { word:"implication", pron:"임플리케이션", pos:"n", level:"B2", meanings:["함축","암시"],
    syn:["connotation","inference","insinuation"],
    ex:[{ s:"He denied any {{}} that the figures had been altered.", f:"implication", ko:"그는 수치가 조작되었다는 어떤 암시도 부인했다." }] },

  /* implication 과 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다.
     원본 셋째 갈래 '절대적인' 은 meanings 2개 제한에 걸려 뺐다. */
  { word:"implicit", pron:"임플리싯", pos:"adj", level:"C1", meanings:["암시된","내포된"],
    syn:["implied","tacit","unspoken"], ant:["explicit"],
    ex:[{ s:"There was an {{}} agreement that no one would raise the issue.", f:"implicit", ko:"아무도 그 문제를 꺼내지 않겠다는 암시된 합의가 있었다." }] },

  { word:"implore", pron:"임플로", pos:"v", level:"C2", meanings:["애원하다","탄원하다"],
    syn:["beg","plead","entreat"],
    ex:[{ s:"She began to {{}} the judge for leniency.", f:"implore", ko:"그녀는 판사에게 관용을 애원하기 시작했다." }] },

  { word:"imply", pron:"임플라이", pos:"v", level:"B2", meanings:["암시하다","의미하다"],
    syn:["suggest","hint","insinuate"],
    ex:[{ s:"Are you trying to {{}} that the record was careless?", f:"imply", ko:"그 기록이 부주의했다고 암시하려는 겁니까?" }] },

  /* 승격 ② — GLOSS '수입하다' 다. export(ant) 가 참조한다. 첫 갈래를 그대로
     지키고 원본의 '가져오다' 를 뒤에 붙였다.
     원본 셋째 갈래 '수입품'(명사)은 pos 가 v 라 담지 못했다. */
  { word:"import", pron:"임포트", pos:"v", level:"B1", meanings:["수입하다","가져오다"],
    syn:["bring in","introduce","ship in"], ant:["export"],
    ex:[{ s:"Japan must {{}} most of its energy resources.", f:"import", ko:"일본은 에너지 자원의 대부분을 수입해야 한다." }] },

  /* 승격 ① — GLOSS '부과하다, 강요하다' 를 글자까지 지켰다.
     dictate(syn)·enforce(syn) 두 문제가 참조하므로 원본('부과하다' 한 갈래)
     대신 사전 쪽을 남겼다. */
  { word:"impose", pron:"임포즈", pos:"v", level:"B2", meanings:["부과하다","강요하다"],
    syn:["levy","inflict","dictate"],
    ex:[{ s:"The government will {{}} a tax on sugary drinks.", f:"impose", ko:"정부는 설탕이 든 음료에 세금을 부과할 것이다." }] },

  /* ── 챕터 4 ─────────────────────────────── */

  /* 승격 ① — GLOSS '빈곤하게 하다' 와 같은 갈래다. 참조하는 기존 문제가 없어
     원본 뜻을 그대로 썼다. PRON 에는 없었다. */
  { word:"impoverish", pron:"임파버리시", pos:"v", level:"C1", meanings:["가난하게 하다","저하시키다"],
    syn:["ruin","deplete","drain"], ant:["enrich"],
    ex:[{ s:"Decades of conflict {{}} the entire region.", f:"impoverished", ko:"수십 년의 분쟁이 그 지역 전체를 가난하게 만들었다." }] },

  { word:"impractical", pron:"임프랙티컬", pos:"adj", level:"B2", meanings:["비현실적인","실용성 없는"],
    syn:["unrealistic","unworkable","unfeasible"], ant:["practical"],
    ex:[{ s:"The plan was brilliant but entirely {{}}.", f:"impractical", ko:"그 계획은 훌륭했지만 전적으로 비현실적이었다." }] },

  { word:"impressive", pron:"임프레시브", pos:"adj", level:"B1", meanings:["인상적인","감명 깊은"],
    syn:["striking","remarkable","imposing"], ant:["unremarkable"],
    ex:[{ s:"Her performance at the recital was genuinely {{}}.", f:"impressive", ko:"연주회에서 그녀의 연주는 정말로 인상적이었다." }] },

  /* 원본은 '찍다, 인쇄하다; 자국, 흔적' 으로 동사와 명사가 갈린다.
     동사 쪽으로 모았다 — 명사 '자국' 은 바꿔 쓸 유의어 3개를 만들기 어렵다. */
  { word:"imprint", pron:"임프린트", pos:"v", level:"C1", meanings:["찍다","인쇄하다"],
    syn:["stamp","engrave","emboss"],
    ex:[{ s:"The workshop will {{}} your initials on the leather cover.", f:"imprint", ko:"그 공방은 가죽 표지에 당신의 이니셜을 찍어 준다." }] },

  /* 승격 ① — GLOSS '투옥하다, 가두다' 를 글자까지 지켰다. confine(syn) 이 참조한다.
     원본 둘째 갈래 '갇히게 하다' 대신 사전 쪽 '가두다' 를 남겼다. */
  { word:"imprison", pron:"임프리즌", pos:"v", level:"B2", meanings:["투옥하다","가두다"],
    syn:["confine","jail","incarcerate"], ant:["release"],
    ex:[{ s:"The regime would {{}} anyone who criticized it openly.", f:"imprison", ko:"그 정권은 공개적으로 비판하는 사람은 누구든 투옥했다." }] },

  /* imprison 과 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"imprisonment", pron:"임프리즌먼트", pos:"n", level:"B2", meanings:["투옥","구속"],
    syn:["confinement","incarceration","detention"],
    ex:[{ s:"He faced ten years of {{}} for the offence.", f:"imprisonment", ko:"그는 그 범죄로 10년의 투옥에 처해졌다." }] },

  { word:"improper", pron:"임프로퍼", pos:"adj", level:"B2", meanings:["부적절한","부도덕한"],
    syn:["inappropriate","unsuitable","unseemly"], ant:["proper"],
    ex:[{ s:"Using company funds that way was clearly {{}}.", f:"improper", ko:"회사 자금을 그렇게 쓰는 것은 명백히 부적절했다." }] },

  /* 승격 ① — GLOSS '개선, 향상' 을 글자까지 지켰다. degradation(ant) 이 참조한다.
     원본은 '개선, 호전, 향상' 으로 세 갈래인데 사전 쪽 두 갈래를 그대로 두었다. */
  { word:"improvement", pron:"임프루브먼트", pos:"n", level:"B1", meanings:["개선","향상"],
    syn:["enhancement","progress","betterment"], ant:["decline"],
    ex:[{ s:"There has been a marked {{}} in urban air quality.", f:"improvement", ko:"도시 대기 질에 뚜렷한 개선이 있었다." }] },

  /* improvement 와 어근이 같지만 품사가 달라(n/v) 같은 보드에 안 온다. */
  { word:"improvise", pron:"임프러바이즈", pos:"v", level:"C1", meanings:["즉흥적으로 하다","즉석에서 만들다"],
    syn:["ad-lib","extemporize","make do"],
    ex:[{ s:"When the projector failed she had to {{}}.", f:"improvise", ko:"프로젝터가 고장 나자 그녀는 즉흥적으로 해야 했다." }] },

  /* 3차의 impertinent('무례한')와 갈래가 다르다 — 이쪽은 낯가죽이 두껍다는 쪽이다. */
  { word:"impudent", pron:"임퓨던트", pos:"adj", level:"C2", meanings:["뻔뻔스러운","철면피의"],
    syn:["brazen","shameless","cheeky"], ant:["modest"],
    ex:[{ s:"His {{}} reply left the committee speechless.", f:"impudent", ko:"그의 뻔뻔스러운 대답에 위원회는 할 말을 잃었다." }] },

  { word:"impulse", pron:"임펄스", pos:"n", level:"B2", meanings:["충동","자극"],
    syn:["urge","whim","compulsion"],
    ex:[{ s:"She resisted the {{}} to check her phone again.", f:"impulse", ko:"그녀는 휴대전화를 다시 확인하려는 충동을 참았다." }] },

  /* impulse 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"impulsive", pron:"임펄시브", pos:"adj", level:"B2", meanings:["충동적인","즉흥적인"],
    syn:["rash","spontaneous","hasty"], ant:["deliberate"],
    ex:[{ s:"Buying the car was an {{}} decision he later regretted.", f:"impulsive", ko:"그 차를 산 것은 그가 나중에 후회한 충동적인 결정이었다." }] },

  /* ── 여기서부터 'in ~' 구가 28개 이어진다 (챕터 4 후반 ~ 챕터 5 전체) ──
     pos 가 phr 인 항목에는 ex 를 붙이지 않는다. A~H 세트의 phr 204개 중 예문을
     가진 것이 0개다 — 구는 빈칸으로 파면 어형 변화가 없어 문제가 성립하지 않는다.
     대신 syn 을 3개 갖춰 '아닌 것 고르기' 로 덮는다 (기존 phr 203/204가 그렇다).
     이 구간은 4지선다·아닌것·짝맞추기 세 모드로 출제된다. */

  /* 원본에 in one sense('어떤 의미에서')가 따로 있었으나 이것과 가를 방법이
     없어 목록에서 뺐다. */
  { word:"in a sense", pron:"인 어 센스", pos:"phr", level:"B2", meanings:["어떤 의미에서는","어느 면에서는"],
    syn:["in a way","to some extent","in some respects"] },

  /* 승격 ① — GLOSS '미리, 사전에' 를 글자까지 지켰다. beforehand(syn) 가 참조한다.
     원본은 '미리' 한 갈래인데 사전 쪽 두 갈래를 그대로 두었다. */
  { word:"in advance", pron:"인 어드밴스", pos:"phr", level:"B1", meanings:["미리","사전에"],
    syn:["beforehand","ahead of time","previously"] },

  { word:"in comparison to", pron:"인 컴패리슨 투", pos:"phr", level:"B2", meanings:["~와 비교하여"],
    syn:["compared with","relative to","as against"] },

  /* 아래 세 개는 원본에서 첫 뜻이 모두 '~에 따라' 로 같았다. 갈래를 나눴다.
       in compliance with  ~을 준수하여   (규칙·명령을 따름)
       in conformity with  ~와 일치하여   (기준·양식에 맞음)
       in line with        ~에 부합하여   (방향·방침이 어긋나지 않음) */
  { word:"in compliance with", pron:"인 컴플라이언스 위드", pos:"phr", level:"C1", meanings:["~을 준수하여"],
    syn:["in accordance with","abiding by","as required by"] },

  { word:"in conformity with", pron:"인 컨포머티 위드", pos:"phr", level:"C1", meanings:["~와 일치하여"],
    syn:["consistent with","in agreement with","in harmony with"] },

  { word:"in contrast with", pron:"인 컨트래스트 위드", pos:"phr", level:"B2", meanings:["~와 대조적으로"],
    syn:["as opposed to","unlike","in opposition to"] },

  { word:"in favor of", pron:"인 페이버 어브", pos:"phr", level:"B2", meanings:["~에 찬성하여"],
    syn:["in support of","approving of","on the side of"] },

  { word:"in isolation", pron:"인 아이설레이션", pos:"phr", level:"B2", meanings:["홀로","별개로"],
    syn:["alone","separately","on its own"] },

  /* ── 챕터 5 ─────────────────────────────── */

  { word:"in line with", pron:"인 라인 위드", pos:"phr", level:"B2", meanings:["~에 부합하여","~와 일직선으로"],
    syn:["in keeping with","corresponding to","in step with"] },

  /* syn 을 비워 두었다. 원본 뜻 '도중에서' 는 틀렸고('경력 중반에' 로 고쳤다),
     이 구를 바꿔 쓸 수 있는 영어 표현이 셋이 없다. 억지로 만들면 사전에 없는
     말을 정답으로 가르치게 된다. illiteracy 와 같은 이유다.
     4지선다·짝맞추기 두 모드로만 출제된다. */
  { word:"in mid-career", pron:"인 미드 커리어", pos:"phr", level:"C2", meanings:["경력 중반에"] },

  { word:"in particular", pron:"인 퍼티큘러", pos:"phr", level:"B1", meanings:["특히"],
    syn:["especially","notably","specifically"] },

  { word:"in person", pron:"인 퍼슨", pos:"phr", level:"B1", meanings:["직접","몸소"],
    syn:["face to face","personally","in the flesh"] },

  { word:"in progress", pron:"인 프라그레스", pos:"phr", level:"B1", meanings:["진행 중인"],
    syn:["under way","ongoing","in motion"] },

  { word:"in proportion to", pron:"인 프러포션 투", pos:"phr", level:"B2", meanings:["~에 비례하여"],
    syn:["proportionally to","in ratio to","commensurate with"] },

  { word:"in relation to", pron:"인 릴레이션 투", pos:"phr", level:"B2", meanings:["~와 관련하여"],
    syn:["with regard to","concerning","as regards"] },

  { word:"in response to", pron:"인 리스판스 투", pos:"phr", level:"B1", meanings:["~에 대응하여"],
    syn:["in reply to","in reaction to","answering"] },

  { word:"in return for", pron:"인 리턴 포", pos:"phr", level:"B2", meanings:["~의 대가로"],
    syn:["in exchange for","as payment for","in recompense for"] },

  { word:"in sum", pron:"인 섬", pos:"phr", level:"B2", meanings:["요컨대"],
    syn:["in short","to sum up","in brief"] },

  { word:"in terms of", pron:"인 텀즈 어브", pos:"phr", level:"B1", meanings:["~에 관해서는","~면에서"],
    syn:["with respect to","regarding","in the matter of"] },

  { word:"in that", pron:"인 댓", pos:"phr", level:"C1", meanings:["~라는 점에서"],
    syn:["insofar as","seeing that","given that"] },

  { word:"in the absence of", pron:"인 디 앱선스 어브", pos:"phr", level:"B2", meanings:["~이 없어서","~이 없을 때"],
    syn:["without","lacking","for want of"] },

  /* 승격 ② — GLOSS 는 '끝에는' 이었다. eventually(syn) 가 참조하는데 그쪽 뜻이
     '결국' 이므로 사전 쪽이 부정확했다. 원본 '결국, 마침내' 로 바로잡았다. */
  { word:"in the end", pron:"인 더 엔드", pos:"phr", level:"B1", meanings:["결국","마침내"],
    syn:["eventually","ultimately","at last"] },

  { word:"in the first place", pron:"인 더 퍼스트 플레이스", pos:"phr", level:"B2", meanings:["우선","첫째로"],
    syn:["firstly","to begin with","at the outset"] },

  { word:"in the light of", pron:"인 더 라이트 어브", pos:"phr", level:"C1", meanings:["~에 비추어","~을 고려하여"],
    syn:["considering","in view of","taking account of"] },

  /* 원본 뜻은 '결국에는' 으로 바로 위 in the end('결국, 마침내')와 겹쳤다.
     이 구는 실제로 '시간을 길게 두고 보면' 이라는 뜻이므로 '장기적으로는' 으로
     바로잡았다. 겹침도 함께 풀렸다. */
  { word:"in the long run", pron:"인 더 롱 런", pos:"phr", level:"B2", meanings:["장기적으로는","길게 보면"],
    syn:["over time","in the long term","down the road"] },

  { word:"in the meantime", pron:"인 더 민타임", pos:"phr", level:"B1", meanings:["그러는 동안에","그동안"],
    syn:["meanwhile","for now","in the interim"] },

  { word:"in the midst of", pron:"인 더 미드스트 어브", pos:"phr", level:"B2", meanings:["~하는 중에","~의 한가운데에"],
    syn:["in the middle of","amid","surrounded by"] },

  /* 승격 ① — GLOSS '접근할 수 없는' 을 글자까지 지켰다. accessible(ant) 이 참조한다.
     원본 '접근하기 어려운' 은 같은 갈래라 사전 쪽 표현을 남겼고, 갈래를 늘리면
     기존 화면이 바뀌므로 한 갈래로 두었다. */
  { word:"inaccessible", pron:"인억세서블", pos:"adj", level:"B2", meanings:["접근할 수 없는"],
    syn:["unreachable","remote","cut off"], ant:["accessible"],
    ex:[{ s:"The summit is {{}} during winter storms.", f:"inaccessible", ko:"그 정상은 겨울 폭풍이 몰아치는 동안 접근할 수 없다." }] },

  /* ── 챕터 6 ─────────────────────────────── */

  /* 승격 ① — GLOSS '부정확한' 과 글자까지 같다. accurate(ant) 이 참조한다.
     원본도 한 갈래라 그대로 두었다. */
  { word:"inaccurate", pron:"인애큐릿", pos:"adj", level:"B2", meanings:["부정확한"],
    syn:["incorrect","erroneous","imprecise"], ant:["accurate"],
    ex:[{ s:"The earliest maps of the coast were wildly {{}}.", f:"inaccurate", ko:"그 해안의 초기 지도들은 터무니없이 부정확했다." }] },

  { word:"inadequately", pron:"인애더큇리", pos:"adv", level:"B2", meanings:["부적절하게","불충분하게"],
    syn:["insufficiently","poorly","deficiently"],
    ex:[{ s:"The building was {{}} insulated against the cold.", f:"inadequately", ko:"그 건물은 추위에 불충분하게 단열되어 있었다." }] },

  { word:"inanimate", pron:"인애너멋", pos:"adj", level:"C1", meanings:["무생물의","생명이 없는"],
    syn:["lifeless","inorganic","inert"], ant:["animate"],
    ex:[{ s:"Children often speak to {{}} objects as if they were alive.", f:"inanimate", ko:"아이들은 무생물 물체에 살아 있는 것처럼 말을 걸곤 한다." }] },

  { word:"inauguration", pron:"이노규레이션", pos:"n", level:"C1", meanings:["취임","개시"],
    syn:["installation","induction","commencement"],
    ex:[{ s:"The president's {{}} drew a crowd of thousands.", f:"inauguration", ko:"대통령의 취임식은 수천 명의 인파를 끌어모았다." }] },

  /* 승격 ① — GLOSS '무능력, 무자격' 을 글자까지 지켰다. disability(syn) 가 참조한다.
     원본은 '무능력' 한 갈래인데 사전 쪽 두 갈래를 그대로 두었다. */
  { word:"incapacity", pron:"인커패서티", pos:"n", level:"C1", meanings:["무능력","무자격"],
    syn:["disability","incompetence","powerlessness"],
    ex:[{ s:"His {{}} to work was confirmed by two independent doctors.", f:"incapacity", ko:"그의 근로 무능력은 독립적인 두 의사에 의해 확인되었다." }] },

  { word:"incentive", pron:"인센티브", pos:"n", level:"B2", meanings:["장려책","유인책"],
    syn:["inducement","motivation","reward"], ant:["deterrent"],
    ex:[{ s:"Tax breaks act as an {{}} for green investment.", f:"incentive", ko:"세금 감면은 친환경 투자를 위한 장려책으로 작용한다." }] },

  /* 승격 ① — GLOSS '끊임없는' 과 글자까지 같다. ceaseless(syn)·continuous(syn)
     두 문제가 참조한다. 원본도 한 갈래라 그대로 두었다. */
  { word:"incessant", pron:"인세선트", pos:"adj", level:"C1", meanings:["끊임없는"],
    syn:["ceaseless","unrelenting","constant"],
    ex:[{ s:"The {{}} noise from the building site was unbearable.", f:"incessant", ko:"공사장에서 나는 끊임없는 소음은 참을 수 없었다." }] },

  /* incidence·incident 는 어근이 같고 품사도 둘 다 n 이어서 같은 보드에 올 수
     있다. 다만 뜻이 '발생, 출현' 과 '사건, 불쾌한 일' 로 뚜렷이 갈려
     짝을 고르는 데 무리가 없다. */
  { word:"incidence", pron:"인서던스", pos:"n", level:"C1", meanings:["발생","출현"],
    syn:["occurrence","frequency","prevalence"],
    ex:[{ s:"The {{}} of asthma has risen sharply in urban areas.", f:"incidence", ko:"도시 지역에서 천식 발생이 급격히 증가했다." }] },

  { word:"incident", pron:"인서던트", pos:"n", level:"B1", meanings:["사건","불쾌한 일"],
    syn:["episode","affair","mishap"],
    ex:[{ s:"Police are still investigating the {{}} at the station.", f:"incident", ko:"경찰은 역에서 일어난 그 사건을 아직 조사하고 있다." }] },

  /* 승격 ① — GLOSS '부수적인, 우연한' 과 글자까지 같고 원본과도 같다.
     circumstantial(syn) 이 참조한다. */
  { word:"incidental", pron:"인시덴털", pos:"adj", level:"C1", meanings:["부수적인","우연한"],
    syn:["circumstantial","secondary","minor"], ant:["essential"],
    ex:[{ s:"Travel costs are {{}} to the main budget.", f:"incidental", ko:"여행 비용은 주 예산에 부수적이다." }] },

  /* 원본 셋째 갈래 '경사' 는 meanings 2개 제한에 걸려 뺐다. */
  { word:"inclination", pron:"인클러네이션", pos:"n", level:"C1", meanings:["경향","성향"],
    syn:["tendency","propensity","leaning"],
    ex:[{ s:"He showed little {{}} to change his mind.", f:"inclination", ko:"그는 생각을 바꿀 경향을 거의 보이지 않았다." }] },

  /* 원본은 '기울다; 경사면' 으로 동사와 명사가 갈린다. 동사 쪽으로 모았다.
     inclination 과 어근이 같지만 품사가 달라(n/v) 같은 보드에 안 온다. */
  { word:"incline", pron:"인클라인", pos:"v", level:"B2", meanings:["기울다","기울이다"],
    syn:["lean","slope","tilt"],
    ex:[{ s:"The path begins to {{}} steeply after the bridge.", f:"incline", ko:"그 길은 다리를 지나면 급하게 기울기 시작한다." }] },

  /* 승격 ① — GLOSS '포함하다' 와 글자까지 같다. 참조가 5곳(comprise·consist·
     contain·cover·encompass)으로 이 세트에서 두 번째로 많다. 갈래를 늘리면
     그 5곳 화면이 다 바뀌므로 한 갈래로 두었다.
     뒤에 올 incorporate 는 '통합하다' 로, involve 는 '수반하다' 로 돌려
     '포함하다' 를 이 표제어가 독점한다. */
  { word:"include", pron:"인클루드", pos:"v", level:"B1", meanings:["포함하다"],
    syn:["contain","comprise","encompass"], ant:["exclude"],
    ex:[{ s:"The advertised price does not {{}} insurance.", f:"include", ko:"광고된 가격은 보험을 포함하지 않는다." }] },

  /* 승격 ② — GLOSS '포용적인' 이다. exclusive(ant) 가 그 갈래를 쓰므로 둘째
     자리에 지켰다. 첫 자리는 원본의 '포괄적인' 으로 했다. */
  { word:"inclusive", pron:"인클루시브", pos:"adj", level:"B2", meanings:["포괄적인","포용적인"],
    syn:["comprehensive","all-embracing","broad"], ant:["exclusive"],
    ex:[{ s:"The festival aims to be as {{}} as possible.", f:"inclusive", ko:"그 축제는 가능한 한 포괄적이려고 한다." }] },

  /* 승격 ② — GLOSS '일관성 없는, 앞뒤가 안 맞는' 이다. 원본 첫 뜻 '일관되지
     않는' 은 뒤에 올 inconsistent('일관성이 없는')와 겹쳐, 사전의 둘째 갈래
     '앞뒤가 안 맞는' 을 첫 자리로 올렸다. 참조하는 delirious(syn) 가
     '헛소리하는' 이라 이쪽 갈래와 오히려 더 잘 맞는다. */
  { word:"incoherent", pron:"인코히어런트", pos:"adj", level:"C1", meanings:["앞뒤가 안 맞는","조리 없는"],
    syn:["rambling","disjointed","garbled"], ant:["lucid"],
    ex:[{ s:"His explanation was rushed and {{}}.", f:"incoherent", ko:"그의 설명은 급하고 앞뒤가 안 맞았다." }] },

  /* 승격 ① — GLOSS '양립할 수 없는, 호환되지 않는' 을 글자까지 지켰다.
     compatible(ant) 이 참조한다. */
  { word:"incompatible", pron:"인컴패터블", pos:"adj", level:"C1", meanings:["양립할 수 없는","호환되지 않는"],
    syn:["conflicting","clashing","mismatched"], ant:["compatible"],
    ex:[{ s:"The two schedules proved completely {{}}.", f:"incompatible", ko:"두 일정은 완전히 양립할 수 없음이 드러났다." }] },

  { word:"incomprehensible", pron:"인캄프리헨서블", pos:"adj", level:"C1", meanings:["이해할 수 없는","알아들을 수 없는"],
    syn:["unintelligible","baffling","impenetrable"], ant:["clear"],
    ex:[{ s:"The instructions were almost {{}} to a beginner.", f:"incomprehensible", ko:"그 설명서는 초보자에게 거의 이해할 수 없었다." }] },

  /* 승격 ① — GLOSS '모순, 불일치' 를 글자까지 지켰다.
     contradiction(syn)·discrepancy(syn) 두 문제가 참조한다.
     원본은 순서가 '불일치, 모순' 이었으나 사전 쪽을 남겼다. */
  { word:"inconsistency", pron:"인컨시스턴시", pos:"n", level:"C1", meanings:["모순","불일치"],
    syn:["discrepancy","contradiction","disparity"],
    ex:[{ s:"The auditor found a serious {{}} in the accounts.", f:"inconsistency", ko:"감사관은 그 계정에서 심각한 모순을 발견했다." }] },

  /* 승격 ① — GLOSS '일관성이 없는' 과 글자까지 같고 원본과도 같다.
     erratic(syn) 이 참조한다. inconsistency 와 어근이 같지만 품사가 달라(n/adj)
     같은 보드에 안 온다. */
  { word:"inconsistent", pron:"인컨시스턴트", pos:"adj", level:"B2", meanings:["일관성이 없는"],
    syn:["erratic","variable","uneven"], ant:["consistent"],
    ex:[{ s:"His form this season has been maddeningly {{}}.", f:"inconsistent", ko:"이번 시즌 그의 경기력은 답답할 만큼 일관성이 없었다." }] },

  /* 승격 ② — GLOSS '포함시키다, 통합하다' 다. encompass(syn) 가 참조한다.
     첫 자리를 '통합하다' 로 바꿔 include('포함하다')와 갈랐고,
     사전의 '포함시키다' 는 둘째 자리에 지켰다.
     원본 셋째 갈래 '합병하다' 는 meanings 2개 제한에 걸려 뺐다. */
  { word:"incorporate", pron:"인코퍼레이트", pos:"v", level:"B2", meanings:["통합하다","포함시키다"],
    syn:["merge","absorb","embody"],
    ex:[{ s:"The new design will {{}} feedback from early users.", f:"incorporate", ko:"새 디자인은 초기 사용자의 피드백을 통합할 것이다." }] },

  /* ── 챕터 7 ─────────────────────────────── */

  /* 승격 ② — GLOSS '증가, 늘다' 로 명사와 동사가 섞여 있었다. 참조가 5곳인데
     boost(syn)·decline(ant)·decrease(ant)·cut back on(ant) 네 개가 동사라
     pos 를 v 로 잡고 사전의 '늘다' 를 둘째 자리에 지켰다.
     abatement(ant)만 명사지만 ant 는 품사를 맞추지 않아도 읽힌다. */
  { word:"increase", pron:"인크리스", pos:"v", level:"B1", meanings:["증가하다","늘다"],
    syn:["grow","rise","boost"], ant:["decrease"],
    ex:[{ s:"Global temperatures continue to {{}} decade after decade.", f:"increase", ko:"지구 기온은 10년마다 계속 증가한다." }] },

  /* 승격 ② — GLOSS '놀라운, 믿기 힘든' 이다. amazing(syn) 이 쓰는 갈래가
     '놀라운' 이라 둘째 자리에 지켰다. 첫 자리는 원본의 '믿기 어려운' 으로 했다. */
  { word:"incredible", pron:"인크레더블", pos:"adj", level:"B2", meanings:["믿기 어려운","놀라운"],
    syn:["unbelievable","astonishing","amazing"],
    ex:[{ s:"The team made an {{}} comeback in the final minutes.", f:"incredible", ko:"그 팀은 마지막 몇 분에 믿기 어려운 역전을 이뤘다." }] },

  /* incredible 과 어근이 같지만 품사가 달라(adj/adv) 같은 보드에 안 온다. */
  { word:"incredibly", pron:"인크레더블리", pos:"adv", level:"B2", meanings:["믿기 힘들게도","놀랍게도"],
    syn:["unbelievably","astonishingly","remarkably"],
    ex:[{ s:"The old bridge survived {{}} intact after the quake.", f:"incredibly", ko:"그 낡은 다리는 지진 후 놀랍게도 온전히 남았다." }] },

  /* 승격 ① — GLOSS '알을 품다' 를 글자까지 지켰다. hatch(syn) 가 참조한다.
     원본 둘째 갈래 '배양하다' 를 뒤에 붙였다.
     H 세트 harbor 의 뜻이 '품다' 라, 원본처럼 '품다' 로 쓰면 첫 뜻이 겹친다 —
     사전 쪽 '알을 품다' 가 그 문제도 함께 막아 준다. */
  { word:"incubate", pron:"인큐베이트", pos:"v", level:"C1", meanings:["알을 품다","배양하다"],
    syn:["hatch","brood","nurture"],
    ex:[{ s:"The hen will {{}} the eggs for about three weeks.", f:"incubate", ko:"그 암탉은 약 3주 동안 알을 품을 것이다." }] },

  /* incubate 와 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"incubation", pron:"인큐베이션", pos:"n", level:"C1", meanings:["알을 품음","잠복기"],
    syn:["brooding","hatching","latency"],
    ex:[{ s:"The {{}} period for this virus is about five days.", f:"incubation", ko:"이 바이러스의 잠복기는 약 5일이다." }] },

  { word:"incur", pron:"인커", pos:"v", level:"C1", meanings:["초래하다","발생시키다"],
    syn:["bring about","sustain","provoke"],
    ex:[{ s:"Late payment will {{}} an additional handling fee.", f:"incur", ko:"연체는 추가 취급 수수료를 초래한다." }] },

  { word:"incurable", pron:"인큐어러블", pos:"adj", level:"B2", meanings:["치유할 수 없는","고칠 수 없는"],
    syn:["untreatable","terminal","hopeless"], ant:["curable"],
    ex:[{ s:"The disease was once considered entirely {{}}.", f:"incurable", ko:"그 병은 한때 완전히 치유할 수 없다고 여겨졌다." }] },

  { word:"indecision", pron:"인디시전", pos:"n", level:"C1", meanings:["망설임","우유부단"],
    syn:["hesitation","uncertainty","vacillation"],
    ex:[{ s:"Months of {{}} cost the company its lead.", f:"indecision", ko:"수개월의 망설임이 회사의 선두 자리를 잃게 했다." }] },

  /* 승격 ① — GLOSS '결단력 없는, 우유부단한' 을 글자까지 지켰다.
     decisive(ant)·hesitant(syn) 두 문제가 참조하므로 원본('우유부단한' 한 갈래)
     대신 사전 쪽을 남겼다.
     indecision 과 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"indecisive", pron:"인디사이시브", pos:"adj", level:"B2", meanings:["결단력 없는","우유부단한"],
    syn:["hesitant","wavering","irresolute"], ant:["decisive"],
    ex:[{ s:"He was too {{}} to lead a negotiation of that size.", f:"indecisive", ko:"그는 그 규모의 협상을 이끌기에는 너무 결단력이 없었다." }] },

  { word:"indeed", pron:"인디드", pos:"adv", level:"B1", meanings:["정말로","사실은"],
    syn:["truly","certainly","in fact"],
    ex:[{ s:"The results were {{}} better than anyone expected.", f:"indeed", ko:"결과는 정말로 누구의 예상보다도 좋았다." }] },

  /* 승격 ① — GLOSS '색인, 목록' 을 글자까지 지켰다.
     catalog(syn)·directory(syn) 두 문제가 참조하므로 원본의 '찾아보기' 대신
     사전 쪽 '목록' 을 남겼다. */
  { word:"index", pron:"인덱스", pos:"n", level:"B1", meanings:["색인","목록"],
    syn:["catalog","directory","register"],
    ex:[{ s:"Look up the term in the {{}} at the back of the book.", f:"index", ko:"책 뒤에 있는 색인에서 그 용어를 찾아보세요." }] },

  { word:"indicate", pron:"인디케이트", pos:"v", level:"B1", meanings:["나타내다","보여 주다"],
    syn:["show","signal","denote"],
    ex:[{ s:"The survey results {{}} a clear shift in public opinion.", f:"indicate", ko:"조사 결과는 여론의 뚜렷한 변화를 나타낸다." }] },

  /* indication·indicator 는 어근이 같고 품사도 둘 다 n 이어서 같은 보드에 올 수
     있다. 다만 뜻이 '암시, 조짐' 과 '지표, 표시기' 로 갈려 무리가 없다. */
  { word:"indication", pron:"인디케이션", pos:"n", level:"B2", meanings:["암시","조짐"],
    syn:["sign","hint","clue"],
    ex:[{ s:"There was no {{}} that the engine was about to fail.", f:"indication", ko:"엔진이 곧 고장 날 것이라는 조짐은 없었다." }] },

  /* 승격 ① — GLOSS '지표, 표시기' 를 글자까지 지켰다. barometer(syn) 가 참조하므로
     원본의 순서('표시기, 지표') 대신 사전 쪽을 남겼다. */
  { word:"indicator", pron:"인디케이터", pos:"n", level:"B2", meanings:["지표","표시기"],
    syn:["barometer","gauge","benchmark"],
    ex:[{ s:"Unemployment remains a key economic {{}}.", f:"indicator", ko:"실업률은 여전히 핵심 경제 지표다." }] },

  /* 승격 ① — GLOSS '무관심' 과 글자까지 같다. 참조가 4곳(apathy·commitment·
     concern·empathy)이라 갈래를 늘리지 않고 한 갈래로 두었다. 원본도 한 갈래다. */
  { word:"indifference", pron:"인디퍼런스", pos:"n", level:"B2", meanings:["무관심"],
    syn:["apathy","detachment","unconcern"], ant:["concern"],
    ex:[{ s:"Her apparent {{}} to the news surprised everyone.", f:"indifference", ko:"그 소식에 대한 그녀의 명백한 무관심이 모두를 놀라게 했다." }] },

  /* 승격 ① — GLOSS '무관심한' 과 글자까지 같다. 참조가 5곳(ardent·avid·curious·
     empathetic·enthusiastic)이라 갈래를 늘리지 않았다. 원본도 한 갈래다.
     사전 항목이 words.js 와 words-c.js 두 곳에 중복으로 있었다 — 둘 다 지웠다.
     indifference 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"indifferent", pron:"인디퍼런트", pos:"adj", level:"B2", meanings:["무관심한"],
    syn:["apathetic","unconcerned","detached"], ant:["enthusiastic"],
    ex:[{ s:"He seemed utterly {{}} to the outcome of the vote.", f:"indifferent", ko:"그는 투표 결과에 완전히 무관심해 보였다." }] },

  /* 승격 ① — GLOSS '토착의, 원주민의' 를 글자까지 지켰다. aboriginal(syn) 이
     참조하므로 원본의 '자생의' 대신 사전 쪽 '원주민의' 를 남겼다. */
  { word:"indigenous", pron:"인디저너스", pos:"adj", level:"C1", meanings:["토착의","원주민의"],
    syn:["aboriginal","native","local"], ant:["foreign"],
    ex:[{ s:"These plants are {{}} to the highlands of Peru.", f:"indigenous", ko:"이 식물들은 페루 고지대에 토착한 것이다." }] },

  /* indigenous 와 앞 여섯 글자가 같지만 어원이 무관하고 품사도 달라(adj/n)
     같은 보드에 안 온다. */
  { word:"indigestion", pron:"인디제스천", pos:"n", level:"B2", meanings:["소화 불량"],
    syn:["dyspepsia","upset stomach","heartburn"],
    ex:[{ s:"Eating too quickly often causes {{}}.", f:"indigestion", ko:"너무 빨리 먹으면 소화 불량을 자주 일으킨다." }] },

  { word:"indignant", pron:"인디그넌트", pos:"adj", level:"C1", meanings:["화난","분개한"],
    syn:["outraged","resentful","incensed"],
    ex:[{ s:"She was {{}} at being left off the invitation list.", f:"indignant", ko:"그녀는 초청 명단에서 빠진 것에 분개했다." }] },

  { word:"indiscriminate", pron:"인디스크리머넛", pos:"adj", level:"C1", meanings:["무분별한","지각없는"],
    syn:["random","unselective","sweeping"], ant:["selective"],
    ex:[{ s:"The report condemned the {{}} use of pesticides.", f:"indiscriminate", ko:"그 보고서는 살충제의 무분별한 사용을 규탄했다." }] },

  /* ── 챕터 8 ─────────────────────────────── */

  /* 승격 ① — GLOSS '없어서는 안 될' 을 첫 자리에 지켰다. essential(syn) 이 참조한다.
     원본 첫 뜻 '필수적인' 은 뒤에 올 integral 과 겹쳐, 사전 쪽 표현으로 갈랐다. */
  { word:"indispensable", pron:"인디스펜서블", pos:"adj", level:"B2", meanings:["없어서는 안 될","불가결한"],
    syn:["essential","vital","crucial"], ant:["dispensable"],
    ex:[{ s:"A good dictionary is {{}} for serious study.", f:"indispensable", ko:"좋은 사전은 본격적인 공부에 없어서는 안 된다." }] },

  /* 승격 ① — GLOSS '세뇌시키다' 를 첫 자리에 지켰다. brainwash(syn) 가 참조한다.
     원본 첫 뜻은 '주입하다' 였는데 뒤에 올 instill('스며들게 하다, 주입시키다')과
     겹쳐, 사전 쪽을 앞에 두고 '사상을 주입하다' 로 풀어 썼다. */
  { word:"indoctrinate", pron:"인닥트러네이트", pos:"v", level:"C1", meanings:["세뇌시키다","사상을 주입하다"],
    syn:["brainwash","condition","propagandize"],
    ex:[{ s:"The regime sought to {{}} children through school textbooks.", f:"indoctrinate", ko:"그 정권은 학교 교과서를 통해 아이들을 세뇌시키려 했다." }] },

  { word:"indolent", pron:"인덜런트", pos:"adj", level:"C2", meanings:["게으른","나태한"],
    syn:["lazy","idle","sluggish"], ant:["diligent"],
    ex:[{ s:"The long humid summer made everyone {{}}.", f:"indolent", ko:"길고 습한 여름은 모두를 게으르게 만들었다." }] },

  { word:"indubitable", pron:"인두버터블", pos:"adj", level:"C2", meanings:["의심의 여지가 없는","명백한"],
    syn:["unquestionable","undeniable","certain"], ant:["doubtful"],
    ex:[{ s:"The evidence of warming is now {{}}.", f:"indubitable", ko:"온난화의 증거는 이제 의심의 여지가 없다." }] },

  { word:"induce", pron:"인듀스", pos:"v", level:"C1", meanings:["설득하다","유발하다"],
    syn:["persuade","bring on","prompt"],
    ex:[{ s:"Nothing could {{}} him to change his mind.", f:"induce", ko:"어떤 것도 그가 마음을 바꾸도록 설득할 수 없었다." }] },

  { word:"indulge", pron:"인덜지", pos:"v", level:"B2", meanings:["마음껏 하다","채우다"],
    syn:["pamper","gratify","spoil"],
    ex:[{ s:"On weekends she likes to {{}} in long hot baths.", f:"indulge", ko:"주말에 그녀는 길고 뜨거운 목욕을 마음껏 즐기기를 좋아한다." }] },

  /* indulge 와 어근이 같지만 품사가 달라(v/adj) 같은 보드에 안 온다.
     G 세트 generous 의 뜻이 '관대한' 이라 첫 자리는 '너그러운' 으로 두었다. */
  { word:"indulgent", pron:"인덜전트", pos:"adj", level:"C1", meanings:["너그러운","관대한"],
    syn:["lenient","permissive","tolerant"], ant:["strict"],
    ex:[{ s:"His {{}} grandparents never refused him anything.", f:"indulgent", ko:"너그러운 그의 조부모는 그에게 어떤 것도 거절하지 않았다." }] },

  { word:"industrial", pron:"인더스트리얼", pos:"adj", level:"B1", meanings:["산업의","공업의"],
    syn:["manufacturing","mechanized","commercial"],
    ex:[{ s:"The city grew up around its {{}} district.", f:"industrial", ko:"그 도시는 공업 지구를 중심으로 성장했다." }] },

  /* industrial 과 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다.
     원본은 '산업' 한 갈래인데, 바로 뒤 industry figure 가 '업계' 쪽 뜻을 쓰므로
     둘째 갈래로 '업계' 를 붙였다. */
  { word:"industry", pron:"인더스트리", pos:"n", level:"B1", meanings:["산업","업계"],
    syn:["business","commerce","trade"],
    ex:[{ s:"The tourism {{}} employs thousands of local people.", f:"industry", ko:"관광 산업은 수천 명의 지역 주민을 고용한다." }] },

  /* 원본 뜻 '업계 인물' 은 무슨 말인지 모호해 '업계의 유력 인사' 로 고쳤다.
     굳어진 관용구가 아니라 느슨한 결합이어서 유의어도 같은 결의 표현으로 두었다. */
  { word:"industry figure", pron:"인더스트리 피규어", pos:"phr", level:"C1", meanings:["업계의 유력 인사"],
    syn:["leading player","industry veteran","prominent name"] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 (세트 파일에 PRON
   블록을 두는 선례가 없다. pron.js 가 이 파일보다 뒤에 로드되므로 여기서
   Object.assign(window.PRON, ...) 을 하면 pron.js 쪽 값에 덮인다). */
Object.assign(window.GLOSS, {
  "abiding by": "~을 지키며",
  "ad-lib": "즉흥적으로 하다",
  "affair": "일, 사건",
  "all-embracing": "모두를 아우르는",
  "alone": "혼자서",
  "amid": "~의 한복판에",
  "animate": "살아 있는",
  "answering": "응답하는",
  "apathetic": "시들한, 심드렁한",
  "approaching": "다가오는",
  "approving of": "~을 승인하여",
  "as against": "~와 대비하여",
  "as payment for": "~의 값으로",
  "as regards": "~에 관해서는",
  "as required by": "~이 요구하는 대로",
  "astonishingly": "깜짝 놀랄 만큼",
  "at the outset": "처음에",
  "beg": "간청하다",
  "betterment": "개량",
  "brazen": "낯 두꺼운",
  "bring on": "불러오다",
  "brooding": "알을 품는 일",
  "cheeky": "건방진, 까부는",
  "childish": "어린애 같은",
  "clue": "단서",
  "colonialism": "식민주의",
  "commencement": "시작, 개회",
  "commensurate with": "~에 상응하여",
  "compared with": "~와 비교하면",
  "compulsion": "강한 욕구, 강제",
  "concerning": "~에 관하여",
  "confinement": "감금",
  "consistent with": "~와 들어맞는",
  "corresponding to": "~에 대응하여",
  "creative": "창의적인",
  "curable": "치유 가능한",
  "cut off": "차단된, 외딴",
  "damage": "손상시키다, 피해",
  "deathlessness": "불사, 죽지 않음",
  "deficiently": "모자라게",
  "denote": "가리키다",
  "depraved": "타락한",
  "detection": "탐지, 발견",
  "detention": "구금",
  "deter": "막다, 억제하다",
  "different": "다른",
  "disjointed": "조리가 없는",
  "dispensable": "없어도 되는",
  "disrespectful": "예의 없는",
  "distinguishable": "구별할 수 있는",
  "doctrinal": "교리상의",
  "dogmatic": "독단적인",
  "down the road": "앞으로 가면",
  "driving force": "추진 동력",
  "dyspepsia": "소화 장애",
  "emblematic": "상징적인",
  "emboss": "도드라지게 새기다",
  "emigration": "국외 이주",
  "endlessness": "끝없음",
  "enhancement": "향상, 강화",
  "episode": "일화",
  "evenhandedly": "치우치지 않게",
  "expansionism": "팽창주의",
  "extemporize": "즉석에서 말하다",
  "face to face": "얼굴을 맞대고",
  "fairly": "공정하게, 상당히",
  "fallacious": "오류가 있는",
  "faulty": "고장이 있는",
  "figuration": "형상화",
  "figurehead": "명목상의 대표",
  "firstly": "첫째로는",
  "flawed": "결함이 있는",
  "for now": "당장은",
  "for want of": "~이 부족해서",
  "forthcoming": "다가오는, 곧 있을",
  "garbled": "뒤죽박죽인",
  "hallucination": "환각",
  "hatching": "부화",
  "heartburn": "가슴 쓰림",
  "hegemony": "패권",
  "hypothetical": "가상의, 가설의",
  "idol": "우상, 숭배 대상",
  "impenetrable": "헤아릴 수 없는",
  "implied": "함축된",
  "imprecise": "정밀하지 않은",
  "in a way": "어떤 면에서는",
  "in accordance with": "~에 맞추어",
  "in agreement with": "~와 합의하여",
  "in brief": "간단히 말해",
  "in exchange for": "~와 맞바꾸어",
  "in fact": "실은",
  "in harmony with": "~와 조화를 이루어",
  "in keeping with": "~에 걸맞게",
  "in motion": "움직이는 중인",
  "in opposition to": "~에 반대하여",
  "in ratio to": "~와의 비율로",
  "in reaction to": "~에 반응하여",
  "in recompense for": "~의 보상으로",
  "in reply to": "~에 답하여",
  "in short": "요약하면",
  "in some respects": "몇몇 점에서는",
  "in step with": "~와 발을 맞추어",
  "in support of": "~을 지지하여",
  "in the flesh": "실물로",
  "in the interim": "그 사이에",
  "in the long term": "긴 기간으로 보면",
  "in the matter of": "~의 문제에서는",
  "in the middle of": "~의 중간에",
  "incalculable": "헤아릴 수 없이 큰",
  "incarcerate": "수감하다",
  "incarceration": "수감",
  "incensed": "노발대발한",
  "indecipherable": "판독할 수 없는",
  "indistinguishable": "구별할 수 없는",
  "individuality": "개성, 특성",
  "induction": "취임시킴, 유도",
  "industry veteran": "업계 베테랑",
  "inert": "반응이 없는",
  "inexperience": "미숙, 경험 부족",
  "inference": "추론",
  "inflict": "안기다, 가하다",
  "inorganic": "무기의",
  "insinuate": "빗대어 말하다",
  "insinuation": "빗댄 말",
  "insofar as": "~하는 한에서는",
  "insolent": "건방진",
  "insufficiently": "넉넉하지 못하게",
  "introduce": "도입하다, 소개하다",
  "inventive": "창의력이 뛰어난",
  "irresolute": "결단을 못 내리는",
  "jail": "감옥에 넣다",
  "juvenile": "유치한, 청소년의",
  "knowledge": "지식",
  "latency": "잠재 상태",
  "lawful": "합법적인",
  "leading player": "주요 인물",
  "leaning": "기울어짐, 선호",
  "legendary": "전설적인",
  "legible": "읽기 쉬운",
  "lenient": "처벌이 가벼운",
  "lifeless": "생명이 없는",
  "light up": "환하게 밝히다",
  "literate": "글을 읽고 쓸 수 있는",
  "local": "그 지역의",
  "looming": "곧 닥칠 듯한",
  "make do": "있는 것으로 때우다",
  "make-believe": "가상의, 거짓의",
  "manufacturing": "제조의",
  "meanwhile": "한편으로는",
  "mechanized": "기계화된",
  "metaphor": "은유, 비유",
  "migration": "이주, 이동",
  "mirage": "신기루",
  "mishap": "작은 사고",
  "mismatched": "짝이 맞지 않는",
  "momentum": "기세, 탄력",
  "mortality": "죽음을 피할 수 없음, 사망률",
  "motivation": "동기 부여",
  "naivety": "순진함",
  "objective": "객관적인, 목표",
  "objectively": "객관적으로",
  "occurrence": "일어남, 사례",
  "on its own": "그 자체만으로",
  "on the side of": "~의 편에 서서",
  "optimal": "최적의",
  "optimally": "최적으로",
  "over time": "시간이 지나면서",
  "pamper": "애지중지하다",
  "partisan": "당파적인",
  "perfectionism": "완벽주의",
  "perfectly": "완벽하게",
  "permissive": "제약이 느슨한",
  "personally": "개인적으로, 직접",
  "poorly": "형편없이",
  "powerlessness": "무력함",
  "preferably": "되도록",
  "prevalence": "널리 퍼져 있음",
  "primeval": "원시의, 태고의",
  "prominent name": "이름난 인물",
  "propagandize": "선전하다",
  "propel": "나아가게 하다",
  "propensity": "기질, 버릇",
  "proportionally to": "~에 비례하는 만큼",
  "protected": "보호되는",
  "regal": "제왕의",
  "relative to": "~에 비하여",
  "relocation": "이전, 재배치",
  "remarkably": "눈에 띄게",
  "repercussion": "파급 효과",
  "resistant": "저항력이 있는",
  "resourceful": "기지가 뛰어난",
  "reward": "보상",
  "romanticism": "낭만주의",
  "sameness": "동일성, 똑같음",
  "scrawled": "갈겨쓴",
  "secondary": "이차적인",
  "selective": "가려서 하는",
  "selfhood": "자아, 개체성",
  "separately": "따로따로",
  "shameless": "부끄러움을 모르는",
  "ship in": "실어 들이다",
  "sign": "징후, 표지",
  "slope": "비탈지다",
  "sovereign": "주권을 가진",
  "specifically": "구체적으로",
  "speedy": "신속한",
  "spoil": "버릇없게 만들다",
  "spontaneous": "즉흥적인, 자발적인",
  "spur": "박차를 가하다",
  "stamp": "도장을 찍다",
  "striking": "눈에 띄는",
  "submerge": "물에 잠기게 하다",
  "substandard": "표준에 못 미치는",
  "surrounded by": "~에 둘러싸여",
  "susceptible": "영향받기 쉬운",
  "swift": "빠른, 신속한",
  "symbolism": "상징, 상징주의",
  "tacit": "말 없는, 무언의",
  "taking account of": "~을 감안하여",
  "tendency": "성향",
  "tilt": "기울이다",
  "to begin with": "먼저",
  "to some extent": "어느 정도는",
  "to sum up": "정리하자면",
  "truly": "참으로",
  "unauthorized": "무단의, 승인받지 않은",
  "unawareness": "알지 못함",
  "unbelievable": "믿을 수 없는",
  "unbelievably": "믿을 수 없을 만큼",
  "undeniable": "부인할 수 없는",
  "under way": "진행 중에",
  "undeveloped": "발달하지 않은",
  "uneducated": "교육받지 못한",
  "unfeasible": "실행 불가능한",
  "unimaginative": "상상력이 없는",
  "unintelligible": "알아들을 수 없는",
  "unlawful": "위법의",
  "unlettered": "무학의",
  "unquestionable": "의문의 여지가 없는",
  "unreachable": "닿을 수 없는",
  "unreadable": "읽을 수 없는",
  "unrealistic": "현실성 없는",
  "unreasonable": "불합리한, 터무니없는",
  "unrelenting": "누그러지지 않는",
  "unremarkable": "특별할 것 없는",
  "unschooled": "학교 교육을 받지 않은",
  "unseemly": "온당하지 못한",
  "unselective": "가리지 않는",
  "unspoken": "입 밖에 내지 않은",
  "untreatable": "치료할 수 없는",
  "upset stomach": "배탈",
  "utopianism": "유토피아주의",
  "vacillation": "갈팡질팡함",
  "verification": "입증, 검증",
  "wavering": "흔들리는",
  "whim": "일시적 기분",
  "with regard to": "~에 대해서는",
  "with respect to": "~와 관련해서는",
  "without": "~이 없이"
});
