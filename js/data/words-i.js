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
    syn:["leading player","industry veteran","prominent name"] },

  { word:"inefficient", pron:"이니피션트", pos:"adj", level:"B2", meanings:["비능률적인","비효율적인"],
    syn:["wasteful","ineffective","uneconomical"], ant:["efficient"],
    ex:[{ s:"The old boiler was noisy and hopelessly {{}}.", f:"inefficient", ko:"그 낡은 보일러는 시끄럽고 구제 불능으로 비능률적이었다." }] },

  /* 승격 ① — GLOSS '서투른, 무능한' 을 글자까지 지켰다.
     clumsy(syn)·competent(ant) 두 문제가 참조하므로 원본의 '솜씨 없는' 대신
     사전 쪽 순서를 남겼다. */
  { word:"inept", pron:"이넵트", pos:"adj", level:"C1", meanings:["서투른","무능한"],
    syn:["clumsy","bungling","incapable"], ant:["competent"],
    ex:[{ s:"His {{}} handling of the crisis cost him his job.", f:"inept", ko:"위기에 대한 그의 서투른 대처가 그의 일자리를 잃게 했다." }] },

  /* 승격 ① — GLOSS '불평등, 불균등' 을 글자까지 지켰다. disparity(syn) 가 참조한다.
     원본은 '불평등' 한 갈래인데 사전 쪽 두 갈래를 그대로 두었다. */
  { word:"inequality", pron:"이니콸러티", pos:"n", level:"B2", meanings:["불평등","불균등"],
    syn:["disparity","imbalance","unfairness"], ant:["equality"],
    ex:[{ s:"The report highlights growing income {{}}.", f:"inequality", ko:"그 보고서는 커지는 소득 불평등을 강조한다." }] },

  /* 승격 ① — GLOSS '피할 수 없는' 을 첫 자리에 지켰다. foregone(syn) 이 참조한다.
     원본 첫 뜻 '불가피한' 은 같은 갈래라 사전 쪽 표현을 남기고,
     원본의 '필연적인' 을 둘째 자리에 붙였다. */
  { word:"inevitable", pron:"인에버터블", pos:"adj", level:"B2", meanings:["피할 수 없는","필연적인"],
    syn:["unavoidable","foregone","destined"],
    ex:[{ s:"A clash between the two sides seemed {{}}.", f:"inevitable", ko:"양측의 충돌은 피할 수 없어 보였다." }] },

  { word:"infant", pron:"인펀트", pos:"n", level:"B1", meanings:["유아","젖먹이"],
    syn:["baby","newborn","toddler"],
    ex:[{ s:"The vaccine is given to every {{}} at six weeks.", f:"infant", ko:"그 백신은 생후 6주에 모든 유아에게 투여된다." }] },

  /* 승격 ① — GLOSS '감염시키다' 와 글자까지 같다. contaminate(syn) 가 참조한다.
     원본도 한 갈래라 그대로 두었다. */
  { word:"infect", pron:"인펙트", pos:"v", level:"B2", meanings:["감염시키다"],
    syn:["contaminate","taint","blight"],
    ex:[{ s:"A single carrier can {{}} dozens of people.", f:"infect", ko:"한 명의 보균자가 수십 명을 감염시킬 수 있다." }] },

  /* 승격 ① — GLOSS '감염, 전염' 을 글자까지 지켰다. contamination(syn) 이 참조한다.
     원본 첫 뜻은 '전염병' 이었으나 참조하는 쪽이 '오염·감염' 결이라 사전을 따랐다.
     infect 와 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"infection", pron:"인펙션", pos:"n", level:"B2", meanings:["감염","전염"],
    syn:["contamination","contagion","sepsis"],
    ex:[{ s:"The wound became inflamed and showed signs of {{}}.", f:"infection", ko:"그 상처는 염증이 생기고 감염 징후를 보였다." }] },

  { word:"inferior", pron:"인피리어", pos:"adj", level:"B2", meanings:["~보다 못한","열등한"],
    syn:["lesser","second-rate","subordinate"], ant:["superior"],
    ex:[{ s:"The cheaper model is clearly {{}} in build quality.", f:"inferior", ko:"더 싼 모델은 제작 품질에서 분명히 열등하다." }] },

  /* 원본 첫 뜻은 '침입하다' 로 뒤에 올 invade 와 같았다. invade 가 '침략하다' 를
     가져가고 이쪽은 '침투하다' 로 돌렸다 — 몰래 스며드는 쪽이다. */
  { word:"infiltrate", pron:"인필트레이트", pos:"v", level:"C1", meanings:["침투하다","스며들다"],
    syn:["penetrate","sneak into","permeate"],
    ex:[{ s:"Agents managed to {{}} the smuggling network.", f:"infiltrate", ko:"요원들은 그 밀수 조직에 침투하는 데 성공했다." }] },

  /* 승격 ① — GLOSS '무한한' 과 글자까지 같다. boundless(syn) 가 참조한다.
     원본도 한 갈래라 그대로 두었다. */
  { word:"infinite", pron:"인퍼닛", pos:"adj", level:"B2", meanings:["무한한"],
    syn:["boundless","limitless","endless"], ant:["finite"],
    ex:[{ s:"The universe may well be {{}} in extent.", f:"infinite", ko:"우주는 그 범위가 무한할 수도 있다." }] },

  /* ── 챕터 9 ─────────────────────────────── */

  /* 승격 ② — GLOSS '영향, 영향을 미치다' 로 명사와 동사가 섞여 있었다.
     참조 둘 중 affect(syn) 가 동사, determinant(syn) 가 명사다.
     원본 순서대로 pos 를 v 로 잡고 '영향을 미치다' 를 앞에,
     명사 갈래 '영향력' 을 뒤에 두어 양쪽 참조가 다 읽히게 했다. */
  { word:"influence", pron:"인플루언스", pos:"v", level:"B1", meanings:["영향을 미치다","영향력"],
    syn:["affect","sway","shape"],
    ex:[{ s:"Advertising can strongly {{}} what children want.", f:"influence", ko:"광고는 아이들이 원하는 것에 강하게 영향을 미칠 수 있다." }] },

  /* influence 와 앞 여섯 글자가 같지만 어원이 무관하고 품사도 달라(v/n)
     같은 보드에 안 온다. */
  { word:"influenza", pron:"인플루엔자", pos:"n", level:"C1", meanings:["독감","유행성 감기"],
    syn:["flu","grippe","viral illness"],
    ex:[{ s:"An outbreak of {{}} closed two primary schools.", f:"influenza", ko:"독감 유행으로 두 초등학교가 문을 닫았다." }] },

  { word:"influx", pron:"인플럭스", pos:"n", level:"C1", meanings:["유입","밀어닥침"],
    syn:["inflow","surge","stream"], ant:["outflow"],
    ex:[{ s:"The town saw a sudden {{}} of summer tourists.", f:"influx", ko:"그 마을은 여름 관광객의 갑작스러운 유입을 겪었다." }] },

  /* 승격 ① — GLOSS '알리다, 알려 주다' 를 글자까지 지켰다. enlighten(syn) 이 참조한다.
     원본은 '알리다' 한 갈래인데 사전 쪽 두 갈래를 그대로 두었다. */
  { word:"inform", pron:"인폼", pos:"v", level:"B1", meanings:["알리다","알려 주다"],
    syn:["notify","enlighten","apprise"],
    ex:[{ s:"Please {{}} us of any change of address.", f:"inform", ko:"주소 변경이 있으면 저희에게 알려 주십시오." }] },

  { word:"infrared", pron:"인프러레드", pos:"adj", level:"C1", meanings:["적외선의"],
    syn:["thermal","heat-sensing","long-wave"],
    ex:[{ s:"The camera uses {{}} light to see in total darkness.", f:"infrared", ko:"그 카메라는 완전한 어둠 속에서 보기 위해 적외선을 사용한다." }] },

  { word:"infrastructure", pron:"인프러스트럭처", pos:"n", level:"B2", meanings:["사회 기반 시설","기반 구조"],
    syn:["framework","facilities","public works"],
    ex:[{ s:"Years of neglect left the road {{}} crumbling.", f:"infrastructure", ko:"수년간의 방치로 도로 기반 시설이 무너져 갔다." }] },

  { word:"ingenious", pron:"인지니어스", pos:"adj", level:"C1", meanings:["기발한","재주가 많은"],
    syn:["clever","inventive","cunning"], ant:["clumsy"],
    ex:[{ s:"She found an {{}} solution to the storage problem.", f:"ingenious", ko:"그녀는 보관 문제에 기발한 해법을 찾아냈다." }] },

  /* 승격 ① — GLOSS '재료, 성분' 을 글자까지 지켰다.
     component(syn)·element(syn) 두 문제가 참조하므로 원본의 순서('성분, 원료,
     재료') 대신 사전 쪽을 남겼다. */
  { word:"ingredient", pron:"인그리디언트", pos:"n", level:"B1", meanings:["재료","성분"],
    syn:["component","element","constituent"],
    ex:[{ s:"Flour is the main {{}} in most breads.", f:"ingredient", ko:"밀가루는 대부분의 빵에서 주 재료다." }] },

  { word:"inhabit", pron:"인해빗", pos:"v", level:"B2", meanings:["살다","거주하다"],
    syn:["occupy","dwell in","populate"],
    ex:[{ s:"Only a few hundred people {{}} the island year-round.", f:"inhabit", ko:"수백 명만이 그 섬에 연중 산다." }] },

  /* inhabit 과 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"inhabitant", pron:"인해버턴트", pos:"n", level:"B2", meanings:["거주민","주민"],
    syn:["resident","dweller","occupant"],
    ex:[{ s:"Every {{}} of the village was interviewed.", f:"inhabitant", ko:"그 마을의 모든 거주민이 면담을 받았다." }] },

  /* 승격 ① — GLOSS '숨을 들이쉬다' 를 글자까지 지켰다. exhale(ant) 이 참조한다.
     원본 '숨을 들이마시다' 는 같은 갈래라 사전 쪽 표현을 남겼다. */
  { word:"inhale", pron:"인헤일", pos:"v", level:"B2", meanings:["숨을 들이쉬다"],
    syn:["breathe in","draw in","suck in"], ant:["exhale"],
    ex:[{ s:"Try not to {{}} the fumes from the solvent.", f:"inhale", ko:"용제에서 나오는 연기를 들이쉬지 않도록 하세요." }] },

  /* 뒤에 올 innate 가 '타고난' 을 첫 자리로 쓰므로 이쪽은 '내재하는' 을 앞에 두었다. */
  { word:"inherent", pron:"인히런트", pos:"adj", level:"C1", meanings:["내재하는","타고난"],
    syn:["built-in","inborn","ingrained"],
    ex:[{ s:"There is an {{}} risk in any surgical procedure.", f:"inherent", ko:"어떤 외과 수술에도 내재하는 위험이 있다." }] },

  { word:"inherit", pron:"인헤릿", pos:"v", level:"B2", meanings:["상속하다","물려받다"],
    syn:["succeed to","come into","take over"],
    ex:[{ s:"She will {{}} the estate from her aunt.", f:"inherit", ko:"그녀는 이모로부터 그 재산을 상속할 것이다." }] },

  /* 승격 ② — GLOSS '상속, 유산' 이다. 참조하는 heredity(syn) 의 뜻이 '유전' 인데
     사전에는 그 갈래가 없었다. 원본이 '유전' 을 갖고 있어 둘째 자리에 넣고,
     첫 자리는 사전·원본이 공통으로 가진 '유산' 으로 했다.
     inherit 과 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"inheritance", pron:"인헤리턴스", pos:"n", level:"B2", meanings:["유산","유전"],
    syn:["heredity","legacy","bequest"],
    ex:[{ s:"The house came to him as an {{}} from his uncle.", f:"inheritance", ko:"그 집은 삼촌에게서 받은 유산으로 그에게 왔다." }] },

  /* 승격 ① — GLOSS '억제하다, 방해하다' 를 글자까지 지켰다. constrain(syn) 이
     참조하므로 원본의 '금하다' 대신 사전 쪽 '방해하다' 를 남겼다. */
  { word:"inhibit", pron:"인히빗", pos:"v", level:"C1", meanings:["억제하다","방해하다"],
    syn:["constrain","restrain","suppress"],
    ex:[{ s:"Unusually cold weather can {{}} seed germination.", f:"inhibit", ko:"이례적으로 추운 날씨는 씨앗 발아를 억제할 수 있다." }] },

  /* inhibit 과 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"inhibition", pron:"인히비션", pos:"n", level:"C1", meanings:["억제","억압"],
    syn:["restraint","suppression","reserve"],
    ex:[{ s:"Alcohol lowers {{}} and impairs judgment.", f:"inhibition", ko:"알코올은 억제를 낮추고 판단력을 손상시킨다." }] },

  { word:"inhumane", pron:"인휴메인", pos:"adj", level:"C1", meanings:["몰인정한","무자비한"],
    syn:["cruel","brutal","heartless"], ant:["humane"],
    ex:[{ s:"The conditions in the holding camp were {{}}.", f:"inhumane", ko:"그 수용소의 환경은 몰인정했다." }] },

  { word:"initial", pron:"이니셜", pos:"adj", level:"B1", meanings:["처음의","최초의"],
    syn:["first","opening","preliminary"], ant:["final"],
    ex:[{ s:"The {{}} response to the proposal was positive.", f:"initial", ko:"그 제안에 대한 처음의 반응은 긍정적이었다." }] },

  /* 승격 ① — GLOSS '시작하다, 착수하다' 를 글자까지 지켰다. commence(syn) 이
     참조하므로 원본의 '개시하다' 대신 사전 쪽 '착수하다' 를 남겼다.
     initial·initiative 와 어근이 같지만 품사가 셋 다 달라(adj/v/n) 같은 보드에
     안 온다. */
  { word:"initiate", pron:"이니시에이트", pos:"v", level:"C1", meanings:["시작하다","착수하다"],
    syn:["commence","launch","embark on"],
    ex:[{ s:"The council will {{}} a full review of the policy.", f:"initiate", ko:"의회는 그 정책에 대한 전면 검토를 시작할 것이다." }] },

  { word:"initiative", pron:"이니셔티브", pos:"n", level:"B2", meanings:["주도권","발의"],
    syn:["enterprise","drive","first move"],
    ex:[{ s:"She took the {{}} and organized the whole event.", f:"initiative", ko:"그녀가 주도권을 잡고 행사 전체를 준비했다." }] },

  /* ── 챕터 10 ────────────────────────────── */

  { word:"injection", pron:"인젝션", pos:"n", level:"B2", meanings:["주사","주입"],
    syn:["shot","jab","infusion"],
    ex:[{ s:"The nurse gave him an {{}} in the upper arm.", f:"injection", ko:"간호사가 그의 위팔에 주사를 놓았다." }] },

  { word:"injustice", pron:"인저스티스", pos:"n", level:"B2", meanings:["불공평","부정"],
    syn:["unfairness","inequity","wrong"], ant:["justice"],
    ex:[{ s:"He spent his life fighting social {{}}.", f:"injustice", ko:"그는 사회적 불공평과 싸우며 일생을 보냈다." }] },

  /* 승격 ① — GLOSS '타고난, 본래의' 를 글자까지 지켰다.
     dispositional(syn)·hard-wired(syn) 두 문제가 참조하므로 원본의 '선천적인'
     대신 사전 쪽 '본래의' 를 남겼다. */
  { word:"innate", pron:"이네이트", pos:"adj", level:"C1", meanings:["타고난","본래의"],
    syn:["inborn","hard-wired","congenital"], ant:["acquired"],
    ex:[{ s:"Some researchers argue that the ability is {{}}.", f:"innate", ko:"일부 연구자는 그 능력이 타고난 것이라고 주장한다." }] },

  /* 원본 첫 뜻은 '내부의' 로 뒤에 올 internal 과 같았다. internal 이 '내부의' 를
     가져가고 이쪽은 '내면의' 로 돌렸다. */
  { word:"inner", pron:"이너", pos:"adj", level:"B1", meanings:["내면의","안쪽의"],
    syn:["inward","innermost","central"], ant:["outer"],
    ex:[{ s:"She rarely shares her {{}} thoughts with anyone.", f:"inner", ko:"그녀는 내면의 생각을 누구와도 좀처럼 나누지 않는다." }] },

  /* 승격 ② — GLOSS '무죄인' 이다. guilty(ant) 가 그 갈래를 쓰므로 첫 자리에
     지키고, 원본의 '순수한' 을 둘째 자리에 붙였다. */
  { word:"innocent", pron:"이노선트", pos:"adj", level:"B1", meanings:["무죄인","순수한"],
    syn:["blameless","guiltless","not guilty"], ant:["guilty"],
    ex:[{ s:"The jury found the defendant {{}} on all counts.", f:"innocent", ko:"배심원단은 피고가 모든 혐의에서 무죄라고 판단했다." }] },

  /* 승격 ① — GLOSS '혁신하다' 를 첫 자리에 지켰다. break new ground(syn) 가
     참조한다. 원본의 '쇄신하다' 를 둘째 자리에 붙였다. */
  { word:"innovate", pron:"이너베이트", pos:"v", level:"C1", meanings:["혁신하다","쇄신하다"],
    syn:["break new ground","modernize","pioneer"],
    ex:[{ s:"Companies that fail to {{}} soon fall behind.", f:"innovate", ko:"혁신하지 못하는 기업은 곧 뒤처진다." }] },

  { word:"innovation", pron:"이너베이션", pos:"n", level:"B2", meanings:["혁신","쇄신"],
    syn:["breakthrough","novelty","advance"],
    ex:[{ s:"The firm built its reputation on constant {{}}.", f:"innovation", ko:"그 회사는 끊임없는 혁신으로 명성을 쌓았다." }] },

  /* 승격 ① — GLOSS '혁신적인' 을 첫 자리에 지켰다. 참조하는 groundbreaking(syn)
     의 뜻이 '획기적인' 인데, 그쪽이 이 낱말을 유의어로 쓰므로 같은 갈래가 맞다 —
     원본의 '획기적인' 을 둘째 자리에 붙여 양쪽을 다 살렸다.
     innovate·innovation 과 어근이 같지만 품사가 셋 다 달라(v/n/adj) 같은 보드에
     안 온다. */
  { word:"innovative", pron:"이노베이티브", pos:"adj", level:"B2", meanings:["혁신적인","획기적인"],
    syn:["groundbreaking","pioneering","inventive"],
    ex:[{ s:"Their {{}} approach to teaching won several awards.", f:"innovative", ko:"그들의 혁신적인 교육 접근법은 여러 상을 받았다." }] },

  /* 승격 ① — GLOSS '셀 수 없이 많은' 과 글자까지 같다. countless(syn) 가 참조한다.
     원본도 한 갈래라 그대로 두었다. */
  { word:"innumerable", pron:"이누머러블", pos:"adj", level:"C1", meanings:["셀 수 없이 많은"],
    syn:["countless","myriad","untold"],
    ex:[{ s:"The library holds {{}} medieval manuscripts.", f:"innumerable", ko:"그 도서관은 셀 수 없이 많은 중세 필사본을 소장한다." }] },

  { word:"inoculate", pron:"이나큘레이트", pos:"v", level:"C1", meanings:["접종하다","예방주사를 놓다"],
    syn:["vaccinate","immunize","inject"],
    ex:[{ s:"Doctors will {{}} every child against measles.", f:"inoculate", ko:"의사들은 모든 아이에게 홍역 접종을 할 것이다." }] },

  /* 원본 셋째 갈래 '질문' 은 meanings 2개 제한에 걸려 뺐다. */
  { word:"inquiry", pron:"인콰이어리", pos:"n", level:"B2", meanings:["연구","탐구"],
    syn:["investigation","probe","research"],
    ex:[{ s:"Scientific {{}} depends on careful observation.", f:"inquiry", ko:"과학적 탐구는 주의 깊은 관찰에 달려 있다." }] },

  /* 승격 ① — GLOSS '호기심 많은' 을 글자까지 지켰다. curious(syn) 가 참조한다.
     원본 '호기심이 많은' 은 같은 갈래라 사전 쪽 표현을 남겼다. */
  { word:"inquisitive", pron:"인퀴저티브", pos:"adj", level:"C1", meanings:["호기심 많은"],
    syn:["curious","probing","prying"],
    ex:[{ s:"The child was endlessly {{}} about how things worked.", f:"inquisitive", ko:"그 아이는 사물이 어떻게 작동하는지에 끝없이 호기심이 많았다." }] },

  /* 승격 ① — GLOSS '미친, 제정신이 아닌' 을 글자까지 지켰다. deranged(syn) 가
     참조하므로 원본의 순서('제 정신이 아닌, 미친') 대신 사전 쪽을 남겼다. */
  { word:"insane", pron:"인세인", pos:"adj", level:"B2", meanings:["미친","제정신이 아닌"],
    syn:["deranged","demented","unhinged"], ant:["sane"],
    ex:[{ s:"The plan sounded completely {{}} when first proposed.", f:"insane", ko:"그 계획은 처음 제안됐을 때 완전히 미친 것처럼 들렸다." }] },

  /* 승격 ① — GLOSS '만족을 모르는' 을 글자까지 지켰다. greedy(syn) 가 참조한다.
     원본 '만족할 줄 모르는' 은 같은 갈래라 사전 쪽 표현을 남겼다. */
  { word:"insatiable", pron:"인세이셔블", pos:"adj", level:"C1", meanings:["만족을 모르는"],
    syn:["greedy","voracious","unquenchable"],
    ex:[{ s:"He had an {{}} appetite for detective novels.", f:"insatiable", ko:"그는 추리 소설에 대해 만족을 모르는 욕구를 가졌다." }] },

  { word:"inscription", pron:"인스크립션", pos:"n", level:"C1", meanings:["새겨진 글","비문"],
    syn:["engraving","epitaph","lettering"],
    ex:[{ s:"The {{}} on the monument had almost worn away.", f:"inscription", ko:"그 기념비에 새겨진 글은 거의 닳아 없어졌다." }] },

  /* insect·insecticide 는 어근이 같고 품사도 둘 다 n 이어서 같은 보드에 올 수
     있다. 다만 뜻이 '곤충' 과 '살충제' 로 완전히 달라 무리가 없다. */
  { word:"insect", pron:"인섹트", pos:"n", level:"B1", meanings:["곤충","벌레"],
    syn:["bug","pest","creepy-crawly"],
    ex:[{ s:"This flower depends on a single {{}} for pollination.", f:"insect", ko:"이 꽃은 수분을 위해 한 종류의 곤충에 의존한다." }] },

  { word:"insecticide", pron:"인섹터사이드", pos:"n", level:"C1", meanings:["살충제"],
    syn:["pesticide","bug spray","fumigant"],
    ex:[{ s:"Overuse of {{}} harmed the local bee population.", f:"insecticide", ko:"살충제 과용이 지역 벌 개체 수에 해를 입혔다." }] },

  /* 승격 ① — GLOSS '삽입하다, 끼워 넣다' 를 글자까지 지켰다.
     delete(ant)·embed(syn) 두 문제가 참조하므로 원본('삽입하다' 한 갈래) 대신
     사전 쪽을 남겼다. */
  { word:"insert", pron:"인서트", pos:"v", level:"B2", meanings:["삽입하다","끼워 넣다"],
    syn:["embed","put in","slot in"], ant:["delete"],
    ex:[{ s:"Please {{}} the card with the chip facing up.", f:"insert", ko:"칩이 위를 향하도록 카드를 삽입하세요." }] },

  { word:"insider", pron:"인사이더", pos:"n", level:"C1", meanings:["내부자","내부 사정을 아는 사람"],
    syn:["member","confidant","associate"], ant:["outsider"],
    ex:[{ s:"Only an {{}} could have known that detail.", f:"insider", ko:"내부자만이 그 세부 사항을 알 수 있었을 것이다." }] },

  { word:"insidious", pron:"인시디어스", pos:"adj", level:"C2", meanings:["서서히 퍼지는","교활한"],
    syn:["stealthy","creeping","treacherous"],
    ex:[{ s:"Lead poisoning is an {{}} threat to young children.", f:"insidious", ko:"납 중독은 어린 아이들에게 서서히 퍼지는 위협이다." }] },

  /* ── 챕터 11 ────────────────────────────── */

  { word:"insight", pron:"인사이트", pos:"n", level:"B2", meanings:["통찰력","간파"],
    syn:["perception","discernment","acumen"],
    ex:[{ s:"Her book offers real {{}} into rural poverty.", f:"insight", ko:"그녀의 책은 농촌 빈곤에 대한 진정한 통찰력을 준다." }] },

  { word:"insistent", pron:"인시스턴트", pos:"adj", level:"B2", meanings:["주장하는","우기는"],
    syn:["persistent","emphatic","adamant"],
    ex:[{ s:"He was {{}} that the meeting should go ahead.", f:"insistent", ko:"그는 회의를 진행해야 한다고 주장했다." }] },

  /* 승격 ① — GLOSS '지불 불능의, 파산한' 을 글자까지 지켰다.
     bankrupt(syn)·broke(syn) 두 문제가 참조한다. 원본은 순서가 반대였는데,
     사전 쪽을 쓰면 B 세트 bankrupt 의 뜻('파산한')과 첫 뜻이 겹치는 것도
     함께 피할 수 있다. */
  { word:"insolvent", pron:"인살번트", pos:"adj", level:"C1", meanings:["지불 불능의","파산한"],
    syn:["bankrupt","broke","in the red"], ant:["solvent"],
    ex:[{ s:"The airline was declared {{}} last month.", f:"insolvent", ko:"그 항공사는 지난달 지불 불능 상태로 선언되었다." }] },

  { word:"insomnia", pron:"인삼니아", pos:"n", level:"C1", meanings:["불면증"],
    syn:["sleeplessness","wakefulness","restlessness"],
    ex:[{ s:"Chronic {{}} left her exhausted all day.", f:"insomnia", ko:"만성 불면증은 그녀를 하루 종일 지치게 했다." }] },

  /* 승격 ① — GLOSS '고무하다, 영감을 주다' 가 원본과 글자까지 같다.
     encourage(syn) 가 참조한다. 손댈 것이 없었다. */
  { word:"inspire", pron:"인스파이어", pos:"v", level:"B1", meanings:["고무하다","영감을 주다"],
    syn:["encourage","motivate","stimulate"],
    ex:[{ s:"Her speech will {{}} a new generation of scientists.", f:"inspire", ko:"그녀의 연설은 새 세대의 과학자들을 고무할 것이다." }] },

  /* 승격 ① — GLOSS '불안정' 과 글자까지 같다. flux(syn) 가 참조한다.
     원본도 한 갈래라 그대로 두었다. */
  { word:"instability", pron:"인스터빌러티", pos:"n", level:"B2", meanings:["불안정"],
    syn:["flux","volatility","precariousness"], ant:["stability"],
    ex:[{ s:"Political {{}} scared away foreign investors.", f:"instability", ko:"정치적 불안정이 외국 투자자들을 겁주어 쫓아냈다." }] },

  /* 승격 ② — GLOSS '임명하다; 설치하다' 다. depose(ant) 가 참조하는데 그쪽 뜻이
     '퇴위시키다' 라 이 낱말의 '취임시키다' 갈래와 짝이 된다. 원본 순서대로
     '설치하다' 를 앞에 두고 그 갈래를 '취임시키다' 로 둘째 자리에 지켰다. */
  { word:"install", pron:"인스톨", pos:"v", level:"B1", meanings:["설치하다","취임시키다"],
    syn:["set up","fit","put in place"], ant:["remove"],
    ex:[{ s:"Engineers will {{}} the new turbine next week.", f:"install", ko:"기술자들이 다음 주에 새 터빈을 설치할 것이다." }] },

  /* 원본 뜻 '할부 판매' 는 파는 쪽 시선이어서 '할부 구매 방식' 으로 고쳤다. */
  { word:"installment plan", pron:"인스톨먼트 플랜", pos:"phr", level:"C1", meanings:["할부 구매 방식"],
    syn:["hire purchase","payment plan","deferred payment"] },

  /* 원본에서 immediate·instant·instantaneous 의 첫 뜻이 모두 '즉각적인' 이었다.
     셋을 갈랐다 — immediate 즉각적인 / instant 즉석의 / instantaneous 순간적인.
     원본의 명사 갈래('순간, 잠깐')는 pos 가 adj 인 이 표제어에 담지 못했다. */
  { word:"instant", pron:"인스턴트", pos:"adj", level:"B1", meanings:["즉석의","곧바로 되는"],
    syn:["immediate","ready-made","on-the-spot"],
    ex:[{ s:"Just add hot water to the {{}} noodles.", f:"instant", ko:"즉석 국수에 뜨거운 물만 부으면 된다." }] },

  /* instant 와 어근·품사가 다 같아 같은 보드에 올 수 있다. 다만 뜻이 '즉석의' 와
     '순간적인' 으로 갈려 짝을 고르는 데 무리가 없다. */
  { word:"instantaneous", pron:"인스턴테이니어스", pos:"adj", level:"C1", meanings:["순간적인","동시에 일어나는"],
    syn:["immediate","instant","split-second"],
    ex:[{ s:"The response from the sensor was almost {{}}.", f:"instantaneous", ko:"그 센서의 반응은 거의 순간적이었다." }] },

  { word:"instigate", pron:"인스터게이트", pos:"v", level:"C2", meanings:["착수하게 하다","선동하다"],
    syn:["provoke","incite","set off"],
    ex:[{ s:"He was accused of trying to {{}} a riot.", f:"instigate", ko:"그는 폭동을 선동하려 했다는 혐의를 받았다." }] },

  /* 원본 둘째 갈래는 '주입시키다' 였는데 10차의 indoctrinate('사상을 주입하다')와
     겹쳐, 서서히 배어들게 한다는 이 낱말의 결에 맞춰 '서서히 심어주다' 로 했다. */
  { word:"instill", pron:"인스틸", pos:"v", level:"C1", meanings:["스며들게 하다","서서히 심어주다"],
    syn:["implant","inculcate","infuse"],
    ex:[{ s:"Her parents tried to {{}} a lasting love of reading.", f:"instill", ko:"그녀의 부모는 독서에 대한 오랜 애정을 스며들게 하려 했다." }] },

  /* 뒤에 올 intuition 이 '직감' 을 첫 자리로 쓰므로 여기서는 '천성' 을 택했다. */
  { word:"instinct", pron:"인스팅트", pos:"n", level:"B2", meanings:["본능","천성"],
    syn:["impulse","urge","inclination"],
    ex:[{ s:"Birds migrate by {{}} rather than by learning.", f:"instinct", ko:"새들은 학습보다 본능으로 이동한다." }] },

  /* instinct 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"instinctive", pron:"인스팅티브", pos:"adj", level:"B2", meanings:["본능적인","천성의"],
    syn:["intuitive","automatic","reflexive"],
    ex:[{ s:"Her {{}} reaction was to step back from the edge.", f:"instinctive", ko:"그녀의 본능적인 반응은 가장자리에서 뒤로 물러서는 것이었다." }] },

  /* 승격 ② — GLOSS '제정하다, 도입하다' 로 동사였다. establish(syn) 가 참조하므로
     pos 를 v 로 유지하고 사전의 '제정하다' 를 둘째 자리에 지켰다.
     원본의 명사 갈래('학회, 시설')는 pos 가 v 라 담지 못했다.
     institutionalize 와 품사가 둘 다 v 라 같은 보드에 올 수 있지만, 뜻이
     '설립하다' 와 '시설에 수용하다' 로 갈려 무리가 없다. */
  { word:"institute", pron:"인스터튜트", pos:"v", level:"B2", meanings:["설립하다","제정하다"],
    syn:["establish","found","introduce"],
    ex:[{ s:"The university plans to {{}} a new scholarship fund.", f:"institute", ko:"그 대학은 새 장학 기금을 설립할 계획이다." }] },

  { word:"institution", pron:"인스터튜션", pos:"n", level:"B2", meanings:["기관","단체"],
    syn:["organization","establishment","body"],
    ex:[{ s:"The bank is one of the oldest financial {{}} in Europe.", f:"institutions", ko:"그 은행은 유럽에서 가장 오래된 금융 기관 중 하나다." }] },

  { word:"institutionalize", pron:"인스터투셔널라이즈", pos:"v", level:"C2", meanings:["시설에 수용하다","제도화하다"],
    syn:["hospitalize","formalize","entrench"],
    ex:[{ s:"The reforms aim to {{}} transparency in government.", f:"institutionalize", ko:"그 개혁은 정부의 투명성을 제도화하는 것을 목표로 한다." }] },

  { word:"instruct", pron:"인스트럭트", pos:"v", level:"B1", meanings:["지시하다","가르치다"],
    syn:["direct","order","teach"],
    ex:[{ s:"The judge will {{}} the jury on the relevant law.", f:"instruct", ko:"판사는 배심원단에게 관련 법에 대해 지시할 것이다." }] },

  /* 승격 ① — GLOSS '지시, 명령' 을 글자까지 지켰다. command(syn) 가 참조한다.
     원본은 '교육, 지도; 지시, 명령' 네 갈래인데 참조가 쓰는 뒤쪽 두 갈래를 남겼다.
     instruct 와 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"instruction", pron:"인스트럭션", pos:"n", level:"B1", meanings:["지시","명령"],
    syn:["command","directive","order"],
    ex:[{ s:"Follow the {{}} on the label carefully.", f:"instruction", ko:"라벨의 지시를 주의 깊게 따르세요." }] },

  { word:"instructive", pron:"인스트럭티브", pos:"adj", level:"B2", meanings:["교육적인","유익한"],
    syn:["educational","enlightening","illuminating"],
    ex:[{ s:"The documentary was both entertaining and {{}}.", f:"instructive", ko:"그 다큐멘터리는 재미있으면서 교육적이었다." }] },

  /* ── 챕터 12 ────────────────────────────── */

  /* 승격 ② — GLOSS '기구, 도구' 다. device(syn) 가 쓰는 갈래 '도구' 를 둘째
     자리에 지키고, 첫 자리는 원본의 '악기' 로 했다.
     원본 셋째 갈래 '장치' 는 meanings 2개 제한에 걸려 뺐다. */
  { word:"instrument", pron:"인스트러먼트", pos:"n", level:"B1", meanings:["악기","도구"],
    syn:["device","tool","utensil"],
    ex:[{ s:"The violin is a difficult {{}} to master.", f:"instrument", ko:"바이올린은 숙달하기 어려운 악기다." }] },

  /* 승격 ① — GLOSS '불충분한' 을 첫 자리에 지켰다.
     adequate(ant)·deficient(syn) 두 문제가 참조한다. 원본은 '부족한' 이 앞인데,
     사전 쪽을 쓰면 D 세트 deficient 의 뜻('부족한')과 첫 뜻이 겹치는 것도
     함께 피할 수 있다. */
  { word:"insufficient", pron:"인서피션트", pos:"adj", level:"B2", meanings:["불충분한","부족한"],
    syn:["deficient","inadequate","scanty"], ant:["adequate"],
    ex:[{ s:"The evidence was {{}} to secure a conviction.", f:"insufficient", ko:"그 증거는 유죄 판결을 얻기에 불충분했다." }] },

  /* 뒤에 올 isolate 는 '고립시키다' 를 첫 자리로 쓴다 — 첫 뜻이 갈린다. */
  { word:"insulate", pron:"인설레이트", pos:"v", level:"C1", meanings:["격리시키다","단열 처리하다"],
    syn:["shield","cushion","seal off"],
    ex:[{ s:"Thick stone walls {{}} the house from winter cold.", f:"insulate", ko:"두꺼운 돌벽이 그 집을 겨울 추위로부터 격리시킨다." }] },

  /* 승격 ② — GLOSS '모욕, 모욕하다' 로 명사와 동사가 섞여 있었다.
     원본이 동사를 앞에 두므로 pos 를 v 로 잡고, compliment(ant) 가 명사여서
     사전의 명사 갈래 '모욕' 을 둘째 자리에 지켰다. */
  { word:"insult", pron:"인설트", pos:"v", level:"B2", meanings:["모욕하다","모욕"],
    syn:["offend","humiliate","affront"], ant:["compliment"],
    ex:[{ s:"He did not mean to {{}} anyone with the remark.", f:"insult", ko:"그는 그 말로 누구도 모욕할 의도가 없었다." }] },

  { word:"insurance", pron:"인슈어런스", pos:"n", level:"B1", meanings:["보험","보험금"],
    syn:["coverage","policy","indemnity"],
    ex:[{ s:"Travel {{}} covers lost luggage and delays.", f:"insurance", ko:"여행 보험은 분실된 수하물과 지연을 보상한다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 (세트 파일에 PRON
   블록을 두는 선례가 없다. pron.js 가 이 파일보다 뒤에 로드되므로 여기서
   Object.assign(window.PRON, ...) 을 하면 pron.js 쪽 값에 덮인다). */
Object.assign(window.GLOSS, {
  "abiding by": "~을 지키며",
  "acquired": "후천적으로 얻은",
  "acumen": "예리한 판단력",
  "ad-lib": "즉흥적으로 하다",
  "adamant": "단호한",
  "affair": "일, 사건",
  "affront": "모욕을 주다",
  "all-embracing": "모두를 아우르는",
  "alone": "혼자서",
  "amid": "~의 한복판에",
  "animate": "살아 있는",
  "answering": "응답하는",
  "apathetic": "시들한, 심드렁한",
  "apprise": "통지하다",
  "approaching": "다가오는",
  "approving of": "~을 승인하여",
  "as against": "~와 대비하여",
  "as payment for": "~의 값으로",
  "as regards": "~에 관해서는",
  "as required by": "~이 요구하는 대로",
  "astonishingly": "깜짝 놀랄 만큼",
  "at the outset": "처음에",
  "baby": "아기",
  "beg": "간청하다",
  "bequest": "유증, 물려준 것",
  "betterment": "개량",
  "blameless": "잘못이 없는",
  "blight": "병들게 하다",
  "body": "단체, 조직",
  "brazen": "낯 두꺼운",
  "breathe in": "숨을 들이켜다",
  "bring on": "불러오다",
  "brooding": "알을 품는 일",
  "bug": "벌레",
  "bug spray": "벌레 살충 분무제",
  "bungling": "일을 망치는",
  "cheeky": "건방진, 까부는",
  "childish": "어린애 같은",
  "clever": "영리한",
  "clue": "단서",
  "colonialism": "식민주의",
  "come into": "물려받게 되다",
  "commencement": "시작, 개회",
  "commensurate with": "~에 상응하여",
  "compared with": "~와 비교하면",
  "compulsion": "강한 욕구, 강제",
  "concerning": "~에 관하여",
  "confidant": "속을 털어놓는 사람",
  "confinement": "감금",
  "congenital": "선천적인",
  "consistent with": "~와 들어맞는",
  "constituent": "구성 요소",
  "corresponding to": "~에 대응하여",
  "creative": "창의적인",
  "creeping": "슬금슬금 퍼지는",
  "creepy-crawly": "기어 다니는 벌레",
  "curable": "치유 가능한",
  "cushion": "충격을 줄이다",
  "cut off": "차단된, 외딴",
  "damage": "손상시키다, 피해",
  "deathlessness": "불사, 죽지 않음",
  "deferred payment": "후불",
  "deficiently": "모자라게",
  "denote": "가리키다",
  "depraved": "타락한",
  "destined": "운명으로 정해진",
  "detection": "탐지, 발견",
  "detention": "구금",
  "deter": "막다, 억제하다",
  "different": "다른",
  "discernment": "식별력",
  "disjointed": "조리가 없는",
  "dispensable": "없어도 되는",
  "disrespectful": "예의 없는",
  "distinguishable": "구별할 수 있는",
  "doctrinal": "교리상의",
  "dogmatic": "독단적인",
  "down the road": "앞으로 가면",
  "drive": "추진력",
  "driving force": "추진 동력",
  "dwell in": "~에 거주하다",
  "dweller": "사는 사람",
  "dyspepsia": "소화 장애",
  "educational": "교육에 도움이 되는",
  "emblematic": "상징적인",
  "emboss": "도드라지게 새기다",
  "emigration": "국외 이주",
  "emphatic": "단호히 말하는",
  "endlessness": "끝없음",
  "enhancement": "향상, 강화",
  "enlightening": "깨우침을 주는",
  "enterprise": "진취성, 사업",
  "entrench": "확고히 자리 잡게 하다",
  "episode": "일화",
  "epitaph": "묘비명",
  "evenhandedly": "치우치지 않게",
  "expansionism": "팽창주의",
  "extemporize": "즉석에서 말하다",
  "face to face": "얼굴을 맞대고",
  "facilities": "설비",
  "fairly": "공정하게, 상당히",
  "fallacious": "오류가 있는",
  "faulty": "고장이 있는",
  "figuration": "형상화",
  "figurehead": "명목상의 대표",
  "first": "첫 번째의",
  "first move": "첫 행동",
  "firstly": "첫째로는",
  "flawed": "결함이 있는",
  "flu": "인플루엔자",
  "for now": "당장은",
  "for want of": "~이 부족해서",
  "formalize": "공식화하다",
  "forthcoming": "다가오는, 곧 있을",
  "fumigant": "훈증제",
  "garbled": "뒤죽박죽인",
  "grippe": "유행성 감기",
  "guiltless": "죄가 없는",
  "hallucination": "환각",
  "hatching": "부화",
  "heartburn": "가슴 쓰림",
  "heat-sensing": "열을 감지하는",
  "hegemony": "패권",
  "hire purchase": "할부 매입",
  "hospitalize": "입원시키다",
  "hypothetical": "가상의, 가설의",
  "idol": "우상, 숭배 대상",
  "illuminating": "눈을 뜨게 하는",
  "immunize": "면역을 주다",
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
  "in the red": "적자 상태인",
  "incalculable": "헤아릴 수 없이 큰",
  "incarcerate": "수감하다",
  "incarceration": "수감",
  "incensed": "노발대발한",
  "incite": "부추기다",
  "inculcate": "되풀이해 가르치다",
  "indecipherable": "판독할 수 없는",
  "indemnity": "손해 배상금",
  "indistinguishable": "구별할 수 없는",
  "individuality": "개성, 특성",
  "induction": "취임시킴, 유도",
  "industry veteran": "업계 베테랑",
  "ineffective": "효과가 없는",
  "inequity": "불공정",
  "inert": "반응이 없는",
  "inexperience": "미숙, 경험 부족",
  "inference": "추론",
  "inflict": "안기다, 가하다",
  "inflow": "흘러듦",
  "infuse": "불어넣다",
  "infusion": "주입액",
  "inject": "주사로 넣다",
  "innermost": "가장 깊은 곳의",
  "inorganic": "무기의",
  "insinuate": "빗대어 말하다",
  "insinuation": "빗댄 말",
  "insofar as": "~하는 한에서는",
  "insolent": "건방진",
  "insufficiently": "넉넉하지 못하게",
  "introduce": "도입하다, 소개하다",
  "intuitive": "직감에 따른",
  "inventive": "창의력이 뛰어난",
  "inward": "안쪽을 향한",
  "irresolute": "결단을 못 내리는",
  "jab": "예방주사",
  "jail": "감옥에 넣다",
  "justice": "정의",
  "juvenile": "유치한, 청소년의",
  "knowledge": "지식",
  "latency": "잠재 상태",
  "lawful": "합법적인",
  "leading player": "주요 인물",
  "leaning": "기울어짐, 선호",
  "legendary": "전설적인",
  "legible": "읽기 쉬운",
  "lenient": "처벌이 가벼운",
  "lesser": "더 작은, 못한",
  "lettering": "글자 새김",
  "lifeless": "생명이 없는",
  "light up": "환하게 밝히다",
  "literate": "글을 읽고 쓸 수 있는",
  "local": "그 지역의",
  "long-wave": "장파의",
  "looming": "곧 닥칠 듯한",
  "make do": "있는 것으로 때우다",
  "make-believe": "가상의, 거짓의",
  "manufacturing": "제조의",
  "meanwhile": "한편으로는",
  "mechanized": "기계화된",
  "member": "구성원",
  "metaphor": "은유, 비유",
  "migration": "이주, 이동",
  "mirage": "신기루",
  "mishap": "작은 사고",
  "mismatched": "짝이 맞지 않는",
  "modernize": "현대화하다",
  "momentum": "기세, 탄력",
  "mortality": "죽음을 피할 수 없음, 사망률",
  "motivation": "동기 부여",
  "naivety": "순진함",
  "newborn": "갓난아기",
  "not guilty": "유죄가 아닌",
  "notify": "통보하다",
  "novelty": "새로움",
  "objective": "객관적인, 목표",
  "objectively": "객관적으로",
  "occupant": "점유자",
  "occupy": "차지하다",
  "occurrence": "일어남, 사례",
  "on its own": "그 자체만으로",
  "on the side of": "~의 편에 서서",
  "on-the-spot": "현장에서 바로 하는",
  "optimal": "최적의",
  "optimally": "최적으로",
  "over time": "시간이 지나면서",
  "pamper": "애지중지하다",
  "partisan": "당파적인",
  "payment plan": "납입 계획",
  "perfectionism": "완벽주의",
  "perfectly": "완벽하게",
  "permeate": "배어들다",
  "permissive": "제약이 느슨한",
  "personally": "개인적으로, 직접",
  "pest": "해충",
  "pesticide": "농약",
  "policy": "보험 증권",
  "poorly": "형편없이",
  "powerlessness": "무력함",
  "precariousness": "불안한 상태",
  "preferably": "되도록",
  "prevalence": "널리 퍼져 있음",
  "primeval": "원시의, 태고의",
  "probing": "파고드는",
  "prominent name": "이름난 인물",
  "propagandize": "선전하다",
  "propel": "나아가게 하다",
  "propensity": "기질, 버릇",
  "proportionally to": "~에 비례하는 만큼",
  "protected": "보호되는",
  "prying": "남의 일을 캐는",
  "public works": "공공 사업",
  "put in": "넣다",
  "put in place": "자리에 놓다",
  "ready-made": "미리 만들어진",
  "reflexive": "반사적인",
  "regal": "제왕의",
  "relative to": "~에 비하여",
  "relocation": "이전, 재배치",
  "remarkably": "눈에 띄게",
  "repercussion": "파급 효과",
  "research": "연구 조사",
  "resistant": "저항력이 있는",
  "resourceful": "기지가 뛰어난",
  "restlessness": "잠 못 이룸",
  "reward": "보상",
  "romanticism": "낭만주의",
  "sameness": "동일성, 똑같음",
  "scanty": "빈약한",
  "scrawled": "갈겨쓴",
  "seal off": "차단하다",
  "second-rate": "이류의",
  "secondary": "이차적인",
  "selective": "가려서 하는",
  "selfhood": "자아, 개체성",
  "separately": "따로따로",
  "sepsis": "패혈증",
  "shameless": "부끄러움을 모르는",
  "ship in": "실어 들이다",
  "shot": "주사 한 대",
  "sign": "징후, 표지",
  "sleeplessness": "잠들지 못함",
  "slope": "비탈지다",
  "slot in": "끼워 맞추다",
  "sneak into": "몰래 들어가다",
  "sovereign": "주권을 가진",
  "specifically": "구체적으로",
  "speedy": "신속한",
  "split-second": "순식간의",
  "spoil": "버릇없게 만들다",
  "spontaneous": "즉흥적인, 자발적인",
  "spur": "박차를 가하다",
  "stamp": "도장을 찍다",
  "stealthy": "몰래 하는",
  "striking": "눈에 띄는",
  "submerge": "물에 잠기게 하다",
  "substandard": "표준에 못 미치는",
  "succeed to": "~을 승계하다",
  "suck in": "빨아들이다",
  "surge": "급증",
  "surrounded by": "~에 둘러싸여",
  "susceptible": "영향받기 쉬운",
  "swift": "빠른, 신속한",
  "symbolism": "상징, 상징주의",
  "tacit": "말 없는, 무언의",
  "take over": "넘겨받다",
  "taking account of": "~을 감안하여",
  "teach": "가르치다",
  "tendency": "성향",
  "thermal": "열의",
  "tilt": "기울이다",
  "to begin with": "먼저",
  "to some extent": "어느 정도는",
  "to sum up": "정리하자면",
  "toddler": "아기, 걸음마쟁이",
  "tool": "연장",
  "treacherous": "믿을 수 없는",
  "truly": "참으로",
  "unauthorized": "무단의, 승인받지 않은",
  "unavoidable": "비켜 갈 수 없는",
  "unawareness": "알지 못함",
  "unbelievable": "믿을 수 없는",
  "unbelievably": "믿을 수 없을 만큼",
  "undeniable": "부인할 수 없는",
  "under way": "진행 중에",
  "undeveloped": "발달하지 않은",
  "uneconomical": "돈이 많이 드는",
  "uneducated": "교육받지 못한",
  "unfeasible": "실행 불가능한",
  "unimaginative": "상상력이 없는",
  "unintelligible": "알아들을 수 없는",
  "unlawful": "위법의",
  "unlettered": "무학의",
  "unquenchable": "가라앉힐 수 없는",
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
  "untold": "헤아릴 수 없는",
  "untreatable": "치료할 수 없는",
  "upset stomach": "배탈",
  "utensil": "기구, 용구",
  "utopianism": "유토피아주의",
  "vaccinate": "백신을 놓다",
  "vacillation": "갈팡질팡함",
  "verification": "입증, 검증",
  "viral illness": "바이러스 질환",
  "volatility": "변동이 심함",
  "voracious": "식욕이 왕성한",
  "wakefulness": "깨어 있는 상태",
  "wavering": "흔들리는",
  "whim": "일시적 기분",
  "with regard to": "~에 대해서는",
  "with respect to": "~와 관련해서는",
  "without": "~이 없이",
  "wrong": "잘못된 일"
});
