/**
 * 단어 데이터 — 수능 보카 N 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *    ⚠️ 또 gloss.js 에 같은 키가 있는지 먼저 확인할 것 — gloss.js 가 이 파일보다
 *    뒤에 로드되므로 여기 넣은 값이 조용히 덮인다.
 *
 * ── 이 세트의 승격: 80단어 중 38개(48%) ──
 *
 * n 으로 시작하는 낱말 중 쓰이는 것들이 (neglect·notice·nurture·numerous·native
 * 같은) 기본 낱말이어서 오래전부터 다른 문제의 유의어·반의어로 동원돼 왔다.
 * 참조는 모두 55곳이다. 가장 많이 쓰이는 것은 neglect(7곳)로, 그중 여섯이
 * 반의어 자리다 — cherish·cultivate·attention·administer·be committed to·brush up.
 *
 * 원칙은 A~M 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 *   ④ 한 표제어에 두 품사를 섞지 않는다 — 참조가 쓰는 갈래를 남긴다
 *
 * ── 원본의 뜻 오류를 고친 것 ──
 *   nasty     '풀로 덮인, 무성한' → '고약한, 못된'
 *             grassy 의 뜻이 들어와 있었다. M 세트 malicious 가 유의어로 쓴다.
 *   numerous  '많은' → '수많은, 다수의'
 *             두 글자는 선택지에서 뜻으로 읽기 빠듯하다. 사전값을 썼다.
 *
 * ── 겹침을 가른 것 ──
 *   narration '서술, 해설' / narrative '이야기, 서사'
 *   neural '신경의, 신경계의' / neurological '신경학의, 신경 질환의'
 *   nevertheless '그럼에도 불구하고' / nonetheless '그렇기는 하지만'
 *   notable '주목할 만한, 중요한' / noticeable '눈에 띄는, 뚜렷한' / notably '특히'
 *   nourish '영양분을 공급하다' / nurture '양육하다, 보살펴 키우다'
 *   nutrient '영양소' / nutrition '영양, 영양 섭취' / nutritious '영양이 풍부한'
 *     ↑ 이 여섯은 손대지 않으면 챕터 4 안에서 여덟 번 서로 물린다.
 *       meaningsOverlap 이 부분 문자열까지 잡기 때문이다.
 *   necessarily '필연적으로, 반드시'  ← by all means(반드시, B) 와 첫 뜻을 갈랐다
 *   nerve '신경, 긴장'               ← anxiety(불안, A) 와 첫 뜻을 갈랐다
 *   nimble '날렵한, 민첩한'          ← agile(민첩한, A) 와 첫 뜻을 갈랐다
 *
 * ── 품사를 하나로 정리한 것 (참조가 쓰는 갈래를 남겼다) ──
 *   notice  n  통지, 안내문      참조 4곳이 모두 명사(advert·advertisement·attention·bulletin)
 *   novel   adj 참신한, 신기한    conventional(ant, C) 이 형용사 갈래를 쓴다. '소설' 은 버렸다.
 *   nap     n  낮잠             doze(D) 가 동사 갈래를 쓰고 있었다 — doze 쪽 유의어를
 *                              'take a nap' 으로 바꿔 어긋남을 고쳤다(words-d.js).
 *   narrow  adj 폭이 좁은        constrict(C) 가 동사 갈래를 쓰고 있었다 — constrict 쪽
 *                              유의어를 이 세트의 'narrow down' 으로 바꿨다(words-c.js).
 *   neglect v  방치하다          참조 일곱 중 여섯이 동사다. attention(A) 만 명사 자리여서
 *                              그쪽 반의어를 'inattention' 으로 바꿨다(words.js).
 */

window.VOCAB_N = [
  { word:"nag", pron:"내그", pos:"v", level:"B2", meanings:["잔소리하다","성가시게 하다"],
    syn:["pester","keep on at","harp on"],
    ex:[{ s:"She began to {{}} him about the unpaid bills.", f:"nag", ko:"그녀는 밀린 청구서를 두고 그에게 잔소리하기 시작했다." }] },

  /* 승격 ① — 사전 표현 '순진한, 어수룩한' 을 글자까지 지켰다.
     cunning(ant, C) 이 반의어로 쓰는 자리라 화면이 바뀌지 않는다. */
  { word:"naive", pron:"나이브", pos:"adj", level:"B2", meanings:["순진한","어수룩한"],
    syn:["innocent","unworldly","gullible"], ant:["cunning"],
    ex:[{ s:"It was {{}} to hand the key to a stranger.", f:"naive", ko:"낯선 사람에게 열쇠를 건넨 것은 순진했다." }] },

  { word:"namely", pron:"네임리", pos:"adv", level:"B2", meanings:["다시 말해","즉"],
    syn:["that is to say","in other words","specifically"],
    ex:[{ s:"Only one student was absent, {{}} the class monitor.", f:"namely", ko:"한 학생만 결석했는데, 즉 반장이었다." }] },

  /* 승격 ② — 사전이 '낮잠, 잠깐 잠' 으로 명사였는데 doze(D) 는 동사 '졸다' 의
     유의어로 쓰고 있었다. 이미 어긋나 있던 자리다. 수능에서 더 흔한 명사로
     세우고 doze 쪽 유의어를 'take a nap' 으로 바꿨다(words-d.js). */
  { word:"nap", pron:"냅", pos:"n", level:"B1", meanings:["낮잠"],
    syn:["short sleep","forty winks","brief rest"],
    ex:[{ s:"He took a quick {{}} after lunch.", f:"nap", ko:"그는 점심을 먹고 잠깐 낮잠을 잤다." }] },

  /* 승격 ③ — 사전은 '해설, 서술' 이었다. 순서를 뒤집어 '서술' 을 앞세웠다.
     commentary(C) 의 첫 뜻이 '해설' 이라 그쪽과 첫 뜻을 갈라 두는 편이 낫다. */
  { word:"narration", pron:"내레이션", pos:"n", level:"B2", meanings:["서술","해설"],
    syn:["commentary","voice-over","recounting"],
    ex:[{ s:"The film's {{}} explains each step of the process.", f:"narration", ko:"그 영화의 서술은 과정의 각 단계를 설명한다." }] },

  { word:"narrative", pron:"내러티브", pos:"n", level:"B2", meanings:["이야기","서사"],
    /* tale 은 사전 뜻이 story 와 똑같은 '이야기' 라 검사가 잡았다 — chronicle 로 바꿨다 */
    syn:["story","chronicle","storyline"],
    ex:[{ s:"The {{}} follows three families over a century.", f:"narrative", ko:"그 이야기는 한 세기에 걸쳐 세 가족을 따라간다." }] },

  /* 승격 ④ — 사전이 '좁히다; 좁은' 으로 동사와 형용사가 섞여 있었다.
     constrict(C) 는 동사 갈래를, limited(L) 는 형용사 갈래를 쓰고 있었다.
     원본이 형용사여서 형용사로 세우고, constrict 쪽 유의어를 이 세트의
     'narrow down' 으로 바꿨다(words-c.js) — 동사 자리에 동사구가 온다. */
  { word:"narrow", pron:"내로", pos:"adj", level:"B1", meanings:["폭이 좁은","빠듯한"],
    syn:["slim","tight","cramped"], ant:["wide"],
    ex:[{ s:"The path grew too {{}} for the cart to pass.", f:"narrow", ko:"그 길은 수레가 지나가기에 너무 폭이 좁아졌다." }] },

  { word:"narrow down", pron:"내로 다운", pos:"phr", level:"B2", meanings:["좁히다","줄이다"],
    syn:["whittle down","cut down","focus in on"] },

  { word:"narrow-minded", pron:"내로 마인디드", pos:"adj", level:"B2", meanings:["속 좁은","옹졸한"],
    syn:["bigoted","intolerant","small-minded"], ant:["broad-minded"],
    ex:[{ s:"His {{}} remarks upset the whole room.", f:"narrow-minded", ko:"그의 속 좁은 말이 방 안 사람들 모두를 상하게 했다." }] },

  /* 승격 ⑤ — ★원본의 뜻이 틀렸다. '풀로 덮인, 무성한' 은 grassy 의 뜻이다.
     사전값 '고약한' 을 첫 자리에 두고 '못된' 을 붙였다. M 세트 malicious 가
     유의어로 쓰는 자리다. */
  { word:"nasty", pron:"내스티", pos:"adj", level:"B2", meanings:["고약한","못된"],
    syn:["spiteful","mean-spirited","foul"], ant:["kindly"],
    ex:[{ s:"He left a {{}} note on her desk.", f:"nasty", ko:"그는 그녀의 책상에 고약한 쪽지를 남겼다." }] },

  /* 승격 ⑥ — 사전이 '토착의; 원주민' 으로 형용사와 명사가 섞여 있었다.
     참조 세 곳(aboriginal·domestic·indigenous) 이 모두 형용사 갈래를 쓴다.
     원본대로 형용사로 세웠다. */
  { word:"native", pron:"네이티브", pos:"adj", level:"B1", meanings:["태어난 곳의","원주민의"],
    syn:["indigenous","homegrown","local-born"], ant:["foreign-born"],
    ex:[{ s:"She returned to her {{}} village after ten years.", f:"native", ko:"그녀는 십 년 만에 태어난 곳의 마을로 돌아갔다." }] },

  { word:"naturalize", pron:"내처럴라이즈", pos:"v", level:"C1", meanings:["귀화시키다","동식물을 들이다"],
    syn:["grant citizenship to","admit as a citizen","bring in a species"],
    ex:[{ s:"The country agreed to {{}} the refugees.", f:"naturalize", ko:"그 나라는 난민들을 귀화시키기로 했다." }] },

  /* 승격 ⑦ — 사전은 '본질, 성질' 이었다. 원본의 '천성' 을 앞세웠다 —
     character(C) 가 유의어로 쓰는 자리여서 그쪽 화면 글자가 함께 바뀐다.
     '종류; 자연' 갈래는 버렸다(한 표제어에 세 갈래를 담지 않는다). */
  { word:"nature", pron:"네이처", pos:"n", level:"B1", meanings:["천성","본질"],
    syn:["disposition","temperament","inherent quality"],
    ex:[{ s:"It is not in his {{}} to hold a grudge.", f:"nature", ko:"원한을 품는 것은 그의 천성이 아니다." }] },

  { word:"naughty", pron:"노티", pos:"adj", level:"B1", meanings:["버릇없는","개구쟁이인"],
    syn:["mischievous","disobedient","badly behaved"], ant:["well-behaved"],
    ex:[{ s:"The {{}} puppy chewed through the cable.", f:"naughty", ko:"버릇없는 강아지가 전선을 물어 끊었다." }] },

  { word:"naval", pron:"네이벌", pos:"adj", level:"B2", meanings:["해군의"],
    syn:["maritime military","seagoing","fleet-related"],
    ex:[{ s:"The town grew around a {{}} base.", f:"naval", ko:"그 도시는 해군 기지를 중심으로 자라났다." }] },

  { word:"navigation", pron:"내버게이션", pos:"n", level:"B2", meanings:["항해","길 찾기"],
    syn:["sailing","wayfinding","course-plotting"],
    ex:[{ s:"Early sailors used the stars for {{}}.", f:"navigation", ko:"초기 뱃사람들은 항해에 별을 썼다." }] },

  { word:"necessarily", pron:"네서세럴리", pos:"adv", level:"B2", meanings:["필연적으로","반드시"],
    syn:["inevitably","of necessity","as a matter of course"],
    ex:[{ s:"A high price does not {{}} mean high quality.", f:"necessarily", ko:"높은 값이 반드시 높은 품질을 뜻하지는 않는다." }] },

  { word:"necessary", pron:"네서세리", pos:"adj", level:"B1", meanings:["필요한","없어서는 안 될"],
    syn:["required","indispensable","called-for"], ant:["dispensable"],
    ex:[{ s:"Bring only what is {{}} for the trip.", f:"necessary", ko:"여행에 필요한 것만 가져오세요." }] },

  /* 승격 ⑧ — 사전 표현 '필요로 하다' 를 글자까지 지켰다.
     call for(C)·involve(I) 두 곳의 화면이 바뀌지 않는다. */
  { word:"necessitate", pron:"너세서테이트", pos:"v", level:"C1", meanings:["필요로 하다"],
    syn:["call for","require","make unavoidable"],
    ex:[{ s:"Heavy rain may {{}} a change of plan.", f:"necessitate", ko:"폭우는 계획 변경을 필요로 할 수 있다." }] },

  { word:"necessity", pron:"너세서티", pos:"n", level:"B2", meanings:["필요성","필수품"],
    syn:["need","requirement","must-have"], ant:["luxury"],
    ex:[{ s:"Clean water is a basic {{}}, not a luxury.", f:"necessity", ko:"깨끗한 물은 사치가 아니라 기본 필수품이다." }] },

  /* ── 챕터 2 ─────────────────────────────────────── */

  /* 승격 ⑨ — 사전 표현과 글자까지 같다. affirmative(ant, A) 화면이 안 바뀐다. */
  { word:"negative", pron:"네거티브", pos:"adj", level:"B1", meanings:["부정적인"],
    syn:["unfavorable","pessimistic","downbeat"], ant:["affirmative"],
    ex:[{ s:"The trial produced a {{}} result.", f:"negative", ko:"그 시험은 부정적인 결과를 냈다." }] },

  /* 승격 ⑩ — 사전이 '방치하다; 소홀' 로 동사와 명사가 섞여 있었다. 참조 일곱 중
     여섯이 동사여서 동사로 세웠다. 명사 자리였던 attention(A) 쪽 반의어를
     'inattention' 으로 바꿨다(words.js). 이 세트에서 참조가 가장 많은 낱말이다. */
  { word:"neglect", pron:"니글렉트", pos:"v", level:"B2", meanings:["방치하다","등한시하다"],
    syn:["ignore","let slide","fail to care for"], ant:["cherish"],
    ex:[{ s:"Do not {{}} the small cracks in the wall.", f:"neglect", ko:"벽의 작은 금들을 방치하지 마라." }] },

  /* 승격 ⑪ — 사전 표현 '태만, 부주의' 를 글자까지 지켰다(malpractice, M). */
  { word:"negligence", pron:"네글러전스", pos:"n", level:"C1", meanings:["태만","부주의"],
    syn:["carelessness","dereliction","laxity"], ant:["diligence"],
    ex:[{ s:"The report blamed the accident on {{}}.", f:"negligence", ko:"보고서는 그 사고를 태만 탓으로 돌렸다." }] },

  /* 승격 ⑫ — 사전 표현 '무시해도 될 만한' 을 글자까지 지켰다. M 세트의
     marginal·minimal 두 곳이 유의어로 쓰는 자리여서 뜻을 덧붙이지 않았다. */
  { word:"negligible", pron:"네글러저블", pos:"adj", level:"C1", meanings:["무시해도 될 만한"],
    syn:["trifling","insignificant","too small to count"], ant:["considerable"],
    ex:[{ s:"The price difference was {{}}.", f:"negligible", ko:"값 차이는 무시해도 될 만했다." }] },

  /* 승격 ⑬ — 사전에는 뜻만 있고 발음이 없던 항목이다(참조도 없었다). */
  { word:"negotiate", pron:"니고시에이트", pos:"v", level:"B2", meanings:["협상하다","교섭하다"],
    syn:["bargain","work out terms","come to terms"],
    ex:[{ s:"The two sides met to {{}} a ceasefire.", f:"negotiate", ko:"양측은 휴전을 협상하려고 만났다." }] },

  /* nerve 의 첫 뜻을 '신경' 으로 두었다 — 원본의 '불안' 은 anxiety(불안, 염려, A) 의
     첫 뜻과 같아서 갈랐다. 동사 '용기를 내어 ~하다' 갈래는 버렸다. */
  { word:"nerve", pron:"너브", pos:"n", level:"B2", meanings:["신경","긴장"],
    syn:["nerve fiber","tension","edginess"], ant:["composure"],
    ex:[{ s:"A pinched {{}} caused the pain in his arm.", f:"nerve", ko:"눌린 신경이 그의 팔에 통증을 일으켰다." }] },

  { word:"nervousness", pron:"너버스니스", pos:"n", level:"B2", meanings:["신경과민","소심함"],
    syn:["jitters","unease","timidity"], ant:["assurance"],
    ex:[{ s:"Her {{}} showed in her shaking hands.", f:"nervousness", ko:"그녀의 신경과민이 떨리는 손에서 드러났다." }] },

  /* 승격 ⑭ — 사전 표현 '아늑하게 자리잡다' 를 글자까지 지켰다(curl up, C). */
  { word:"nestle", pron:"네슬", pos:"v", level:"C1", meanings:["아늑하게 자리잡다"],
    syn:["snuggle","settle cozily","tuck oneself in"],
    ex:[{ s:"The cabin seems to {{}} between two hills.", f:"nestle", ko:"그 오두막은 두 언덕 사이에 아늑하게 자리잡은 듯하다." }] },

  { word:"neural", pron:"뉴럴", pos:"adj", level:"C1", meanings:["신경의","신경계의"],
    syn:["nerve-related","of the nervous system","brain-circuit"],
    ex:[{ s:"Learning strengthens {{}} connections.", f:"neural", ko:"배움은 신경의 연결을 튼튼하게 한다." }] },

  /* neurological 의 첫 뜻을 '신경학의' 로 두었다 — neural(신경의) 과 같은 챕터라
     첫 뜻이 같으면 짝 맞추기 보드에서 서로 물린다. */
  { word:"neurological", pron:"뉴럴라지컬", pos:"adj", level:"C1", meanings:["신경학의","신경 질환의"],
    syn:["nerve-disease-related","brain-medicine","neurology-based"],
    ex:[{ s:"She was referred to a {{}} clinic.", f:"neurological", ko:"그녀는 신경학의 진료소로 보내졌다." }] },

  /* 승격 ⑮ — 사전 표현 '중립적인, 공정한' 을 글자까지 지켰다.
     disinterested(D)·impartial(I) 두 곳의 화면이 안 바뀐다. '중성의' 는 버렸다. */
  { word:"neutral", pron:"뉴트럴", pos:"adj", level:"B2", meanings:["중립적인","공정한"],
    syn:["unaligned","even-handed","taking no side"], ant:["partisan"],
    ex:[{ s:"The country stayed {{}} during the war.", f:"neutral", ko:"그 나라는 전쟁 동안 중립적인 상태를 지켰다." }] },

  /* neutron 은 전문어다. 바꿔 쓸 낱말이 마땅치 않아 유의어를 비웠다 —
     '아닌 것 고르기' 에서만 빠지고 나머지 세 모드는 출제된다.
     M 세트 Mars·Mediterranean 과 같은 처리다. */
  { word:"neutron", pron:"뉴트란", pos:"n", level:"C2", meanings:["중성자"],
    ex:[{ s:"A {{}} carries no electric charge.", f:"neutron", ko:"중성자는 전기를 띠지 않는다." }] },

  /* 승격 ⑯ — 사전에 뜻만 있고 발음이 없던 항목이다. 표현을 글자까지 지켰다.
     같은 세트의 nonetheless 와 겹치므로 그쪽을 '그렇기는 하지만' 으로 갈랐다. */
  { word:"nevertheless", pron:"네버더리스", pos:"adv", level:"B2", meanings:["그럼에도 불구하고"],
    syn:["even so","all the same","for all that"],
    ex:[{ s:"The plan was costly; {{}}, the city approved it.", f:"nevertheless", ko:"그 계획은 비쌌지만, 그럼에도 불구하고 시는 승인했다." }] },

  { word:"niche", pron:"니치", pos:"n", level:"C1", meanings:["꼭 맞는 자리","틈새시장"],
    syn:["snug spot","specialized corner","small market gap"],
    ex:[{ s:"The shop found its {{}} selling rare records.", f:"niche", ko:"그 가게는 희귀 음반을 팔며 꼭 맞는 자리를 찾았다." }] },

  /* 승격 ⑰ — 사전은 '민첩한, 날렵한' 이었다. agile(민첩한, 재빠른, A) 이 유의어로
     쓰는 자리여서 순서를 뒤집어 첫 뜻을 갈랐다. */
  { word:"nimble", pron:"님블", pos:"adj", level:"C1", meanings:["날렵한","민첩한"],
    syn:["deft","light-footed","quick-moving"], ant:["clumsy"],
    ex:[{ s:"Her {{}} fingers tied the knot in seconds.", f:"nimble", ko:"그녀의 날렵한 손가락이 몇 초 만에 매듭을 묶었다." }] },

  { word:"nobility", pron:"노빌러티", pos:"n", level:"C1", meanings:["귀족","고귀함"],
    syn:["aristocracy","the titled classes","high birth"],
    ex:[{ s:"The land belonged to the {{}} for centuries.", f:"nobility", ko:"그 땅은 여러 세기 동안 귀족의 것이었다." }] },

  /* 승격 ⑱ — 사전이 '귀족, 고귀한' 으로 명사와 형용사가 섞여 있었다.
     참조 세 곳 중 둘(dignified·elevated) 이 형용사여서 형용사로 세웠다.
     commoner(ant, C) 는 명사 자리지만 '귀족의' 가 남아 뜻이 통한다. */
  { word:"noble", pron:"노블", pos:"adj", level:"B2", meanings:["고귀한","귀족의"],
    syn:["high-minded","aristocratic","lofty in character"], ant:["ignoble"],
    ex:[{ s:"It was a {{}} gesture to give up his seat.", f:"noble", ko:"자리를 내준 것은 고귀한 몸짓이었다." }] },

  { word:"nocturnal", pron:"낙터널", pos:"adj", level:"C1", meanings:["밤의","야간의"],
    syn:["night-active","after-dark","of the night"], ant:["daytime"],
    ex:[{ s:"Owls are {{}} hunters.", f:"nocturnal", ko:"올빼미는 밤의 사냥꾼이다." }] },

  { word:"nomadic", pron:"노매딕", pos:"adj", level:"C1", meanings:["유목의","방랑의"],
    syn:["wandering","roaming","itinerant"], ant:["settled"],
    ex:[{ s:"The tribe kept a {{}} way of life.", f:"nomadic", ko:"그 부족은 유목의 삶을 지켰다." }] },

  /* 승격 ⑲ — 사전은 '이름뿐인' 한 갈래였다. 원본의 '명목상의' 를 뒤에 붙였다.
     minimal(M) 이 유의어로 쓰는 자리여서 첫 뜻은 사전값을 지켰다. */
  { word:"nominal", pron:"나머널", pos:"adj", level:"C1", meanings:["이름뿐인","명목상의"],
    syn:["in name only","titular","token-level"], ant:["actual"],
    ex:[{ s:"He is the {{}} head, but others decide.", f:"nominal", ko:"그는 이름뿐인 수장이고, 결정은 다른 이들이 한다." }] },

  /* ── 챕터 3 ─────────────────────────────────────── */

  /* 승격 ⑳ — 사전 표현을 글자까지 지켰다(designate, D). */
  { word:"nominate", pron:"나머네이트", pos:"v", level:"B2", meanings:["지명하다","후보로 추천하다"],
    syn:["designate","put forward","name as candidate"],
    ex:[{ s:"The board will {{}} two new directors.", f:"nominate", ko:"이사회는 새 이사 두 명을 지명할 것이다." }] },

  /* 승격 21 — 사전 표현을 글자까지 지켰다(appointment, A). */
  { word:"nomination", pron:"나머네이션", pos:"n", level:"B2", meanings:["지명","후보 지정"],
    syn:["appointment","naming","candidacy"],
    ex:[{ s:"Her {{}} surprised the whole committee.", f:"nomination", ko:"그녀의 지명은 위원회 전체를 놀라게 했다." }] },

  /* nonetheless 는 사전에 없던 낱머다. 챕터 2 의 nevertheless 가 사전 표현
     '그럼에도 불구하고' 를 쓰므로 이쪽을 '그렇기는 하지만' 으로 갈랐다.
     둘은 실제로 같은 뜻이어서 서로 유의어로 등록해 두었다. */
  { word:"nonetheless", pron:"넌더리스", pos:"adv", level:"B2", meanings:["그렇기는 하지만"],
    syn:["nevertheless","in spite of that","just the same"],
    ex:[{ s:"The road was icy; {{}}, the bus ran on time.", f:"nonetheless", ko:"길이 얼었지만, 그렇기는 하지만 버스는 정시에 다녔다." }] },

  { word:"nonexistent", pron:"난이그지스턴트", pos:"adj", level:"B2", meanings:["존재하지 않는"],
    syn:["not there at all","wholly lacking","without any trace"], ant:["existing"],
    ex:[{ s:"Public transport in the village is almost {{}}.", f:"nonexistent", ko:"그 마을의 대중교통은 거의 존재하지 않는다." }] },

  /* 원본 뜻이 '사실이나 실제 일어난 일을 다루는 글' 이라는 서술문이었다 —
     선택지에 담기엔 길어서 '실화, 논픽션' 으로 줄였다. */
  { word:"nonfiction", pron:"난픽션", pos:"n", level:"B2", meanings:["실화","논픽션"],
    syn:["factual writing","true account","real-life writing"], ant:["fiction"],
    ex:[{ s:"He reads only {{}} these days.", f:"nonfiction", ko:"그는 요즘 실화만 읽는다." }] },

  { word:"nonmaterial", pron:"난머티리얼", pos:"adj", level:"C1", meanings:["비물질적인","영적인"],
    syn:["immaterial","not physical","of the spirit"], ant:["tangible"],
    ex:[{ s:"Songs and stories are {{}} heritage.", f:"nonmaterial", ko:"노래와 이야기는 비물질적인 유산이다." }] },

  /* 승격 22 — 사전 표현 '비영리의' 를 글자까지 지켰다(commercial 의 반의어 자리).
     원본의 '비영리적인' 보다 사전 쪽을 남겼다. */
  { word:"nonprofit", pron:"난프라핏", pos:"adj", level:"B2", meanings:["비영리의"],
    syn:["not-for-profit","charitable","run for public good"], ant:["commercial"],
    ex:[{ s:"She works for a {{}} group that plants trees.", f:"nonprofit", ko:"그녀는 나무를 심는 비영리의 단체에서 일한다." }] },

  { word:"non-refundable", pron:"난 리펀더블", pos:"adj", level:"B2", meanings:["환불이 안 되는"],
    syn:["not returnable","paid for good","without money back"],
    ex:[{ s:"The deposit is {{}} once the room is booked.", f:"non-refundable", ko:"방을 예약하면 보증금은 환불이 안 된다." }] },

  { word:"nonsense", pron:"난센스", pos:"n", level:"B1", meanings:["말도 안 되는 말","허튼소리"],
    syn:["rubbish","drivel","empty talk"],
    ex:[{ s:"He dismissed the rumor as {{}}.", f:"nonsense", ko:"그는 그 소문을 말도 안 되는 말이라고 일축했다." }] },

  { word:"nonverbal", pron:"난버벌", pos:"adj", level:"B2", meanings:["비언어적인","말을 쓰지 않는"],
    syn:["unspoken","gestural","without speech"], ant:["spoken"],
    ex:[{ s:"A frown is a strong {{}} signal.", f:"nonverbal", ko:"찡그림은 강한 비언어적인 신호다." }] },

  { word:"nonviolent", pron:"난바이얼런트", pos:"adj", level:"B2", meanings:["비폭력의"],
    syn:["peaceable","without force","unarmed"], ant:["violent"],
    ex:[{ s:"They staged a {{}} sit-in outside the hall.", f:"nonviolent", ko:"그들은 회관 밖에서 비폭력의 연좌 농성을 벌였다." }] },

  { word:"norm", pron:"놈", pos:"n", level:"B2", meanings:["규범","표준"],
    syn:["accepted rule","usual pattern","what is expected"],
    ex:[{ s:"Working from home became the {{}}.", f:"norm", ko:"집에서 일하는 것이 규범이 되었다." }] },

  /* norm group 은 심리 검사에서 쓰는 전문 용어다. 일반 어휘가 아니지만
     유의어 셋을 세울 수 있어 비우지 않았다. 구·표현이라 ex 는 넣지 않는다. */
  { word:"norm group", pron:"놈 그룹", pos:"phr", level:"C2", meanings:["기준 집단","준거 집단"],
    syn:["reference group","comparison group","baseline sample"] },

  { word:"nostalgia", pron:"노스탤저", pos:"n", level:"C1", meanings:["옛날을 그리워함","향수"],
    syn:["longing for the past","homesickness","wistful memory"],
    ex:[{ s:"Old photographs filled her with {{}}.", f:"nostalgia", ko:"오래된 사진들이 그녀를 옛날을 그리워함으로 채웠다." }] },

  { word:"not to mention", pron:"낫 투 멘션", pos:"phr", level:"B2", meanings:["~은 말할 것도 없고"],
    syn:["to say nothing of","let alone","over and above that"] },

  /* 승격 23 — 사전은 '주목할 만한, 유명한' 이었다. '유명한' 은 같은 챕터 4 의
     notorious(악명 높은, 소문난) 와 부딪히므로 원본의 '중요한' 을 썼다.
     참조가 없어 화면 변화는 없다. */
  { word:"notable", pron:"노터블", pos:"adj", level:"B2", meanings:["주목할 만한","중요한"],
    syn:["striking","worth noting","of consequence"], ant:["unremarkable"],
    ex:[{ s:"The year brought one {{}} change to the rules.", f:"notable", ko:"그 해는 규칙에 주목할 만한 변화 하나를 가져왔다." }] },

  /* 승격 24 — 사전 표현 '특히, 두드러지게' 를 글자까지 지켰다(in particular, I).
     원본의 '명백히' 는 버렸다 — 부사 셋을 한 표제어에 담을 필요가 없다. */
  { word:"notably", pron:"노터블리", pos:"adv", level:"B2", meanings:["특히","두드러지게"],
    syn:["in particular","markedly","above all"],
    ex:[{ s:"Prices rose, {{}} for fresh fruit.", f:"notably", ko:"값이 올랐는데, 특히 신선한 과일이 그랬다." }] },

  { word:"notation", pron:"노테이션", pos:"n", level:"C1", meanings:["기호법","표시법"],
    syn:["symbol system","set of written signs","recording scheme"],
    ex:[{ s:"Musical {{}} lets players share a tune.", f:"notation", ko:"음악 기호법은 연주자들이 곡을 나누게 해 준다." }] },

  /* note 는 사전에 없던 낱말이다. 동사로 세웠다 — comment(C, 견해를 밝히다) 가
     '논평하다' 갈래로 observe 를 유의어로 쓰고 있었는데, observe 를 '관찰하다,
     준수하다' 로 세우면 그 자리가 어긋난다. comment 쪽 유의어를 이 note 로
     바꿨다(words-c.js) — '언급하다' 가 딱 맞는다. */
  { word:"note", pron:"노트", pos:"v", level:"B1", meanings:["주목하다","언급하다"],
    syn:["take note of","remark on","point out"],
    ex:[{ s:"Please {{}} the change of time on the form.", f:"note", ko:"양식에 적힌 시간 변경을 주목해 주세요." }] },

  /* 승격 25 — 사전이 '알아차리다; 통지' 로 동사와 명사가 섞여 있었다.
     참조 네 곳(advert·advertisement·attention·bulletin) 이 모두 명사다.
     원본대로 명사로 세우고 '분간하다, 인지하다' 갈래는 버렸다. */
  { word:"notice", pron:"노티스", pos:"n", level:"B2", meanings:["통지","안내문"],
    syn:["posted sign","official word","notification"],
    ex:[{ s:"A {{}} on the door said the shop had moved.", f:"notice", ko:"문에 붙은 통지는 가게가 이사했다고 알렸다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "accepted rule": "널리 받아들여진 규칙",
  "admit as a citizen": "시민으로 받아들이다",
  "after-dark": "해 진 뒤의",
  "all the same": "그래도 마찬가지로",
  "aristocracy": "귀족 계급",
  "aristocratic": "귀족적인",
  "as a matter of course": "당연한 일로",
  "badly behaved": "행실이 나쁜",
  "baseline sample": "기준이 되는 표본",
  "bigoted": "편견에 찬",
  "brain-circuit": "뇌 회로의",
  "brain-medicine": "뇌 의학의",
  "brief rest": "잠깐의 휴식",
  "bring in a species": "종을 들여오다",
  "called-for": "꼭 있어야 하는",
  "candidacy": "후보 자격",
  "carelessness": "부주의함",
  "come to terms": "합의에 이르다",
  "comparison group": "비교 대상 집단",
  "composure": "침착함",
  "course-plotting": "항로를 그림",
  "cramped": "옹색한",
  "cut down": "개수를 줄이다",
  "daytime": "낮의",
  "deft": "솜씨 좋은",
  "dereliction": "직무 유기",
  "diligence": "근면",
  "disobedient": "말을 안 듣는",
  "disposition": "타고난 성향",
  "downbeat": "가라앉은",
  "drivel": "헛소리",
  "edginess": "안절부절함",
  "empty talk": "속 빈 말",
  "even so": "그래도",
  "existing": "실제로 있는",
  "factual writing": "사실을 적은 글",
  "fail to care for": "돌보지 않다",
  "fleet-related": "함대에 관한",
  "focus in on": "~로 초점을 모으다",
  "for all that": "그런데도",
  "foreign-born": "외국에서 태어난",
  "forty winks": "눈 좀 붙이기",
  "foul": "형편없이 나쁜",
  "gestural": "몸짓으로 하는",
  "grant citizenship to": "~에게 시민권을 주다",
  "gullible": "잘 속아 넘어가는",
  "high birth": "높은 가문 태생",
  "high-minded": "뜻이 높은",
  "homegrown": "제 땅에서 난",
  "homesickness": "고향을 그리는 마음",
  "ignoble": "비열한",
  "in name only": "이름만 있는",
  "in other words": "달리 말하면",
  "in spite of that": "그것에도 아랑곳없이",
  "inattention": "주의를 기울이지 않음",
  "inevitably": "어쩔 수 없이",
  "inherent quality": "본디 지닌 성질",
  "insignificant": "대단치 않은",
  "intolerant": "너그럽지 못한",
  "itinerant": "떠돌이의",
  "jitters": "초조함",
  "just the same": "그래도 여전히",
  "keep on at": "계속 다그치다",
  "laxity": "느슨함",
  "let alone": "~은커녕",
  "let slide": "내버려 두다",
  "light-footed": "발이 가벼운",
  "local-born": "그 지역에서 태어난",
  "lofty in character": "인품이 높은",
  "longing for the past": "지난 때를 그리는 마음",
  "make unavoidable": "피할 수 없게 만들다",
  "maritime military": "바다 군사의",
  "mean-spirited": "심보가 나쁜",
  "mischievous": "장난이 심한",
  "must-have": "꼭 있어야 할 것",
  "name as candidate": "후보로 이름을 올리다",
  "naming": "이름을 지어 부름",
  "need": "필요, 요구",
  "nerve fiber": "신경 섬유",
  "nerve-disease-related": "신경 질환에 관한",
  "nerve-related": "신경에 관한",
  "neurology-based": "신경학에 바탕한",
  "night-active": "밤에 움직이는",
  "not physical": "물질이 아닌",
  "not returnable": "되돌려 받을 수 없는",
  "not there at all": "아예 없는",
  "not-for-profit": "이익을 남기지 않는",
  "notification": "알림",
  "of consequence": "무게가 있는",
  "of necessity": "필요에 따라",
  "of the nervous system": "신경계에 속한",
  "of the night": "밤에 속한",
  "of the spirit": "정신에 속한",
  "official word": "공식으로 알리는 말",
  "over and above that": "그 위에 더해",
  "paid for good": "낸 뒤 되찾지 못하는",
  "peaceable": "평온하게 하는",
  "pessimistic": "비관적인",
  "pester": "귀찮게 하다",
  "point out": "집어서 말하다",
  "posted sign": "붙여 놓은 알림",
  "quick-moving": "빠르게 움직이는",
  "real-life writing": "실제 삶을 다룬 글",
  "recording scheme": "적어 두는 방식",
  "recounting": "이야기해 줌",
  "reference group": "견주어 보는 집단",
  "remark on": "~에 대해 말하다",
  "roaming": "여기저기 옮겨 다니는",
  "run for public good": "공익을 위해 운영되는",
  "sailing": "배를 몰기",
  "seagoing": "바다를 다니는",
  "set of written signs": "적어 쓰는 기호 묶음",
  "settle cozily": "편안히 자리 잡다",
  "settled": "정착한",
  "short sleep": "짧게 자는 잠",
  "slim": "가느다란",
  "small market gap": "작은 시장 틈",
  "small-minded": "생각이 좁은",
  "snug spot": "꼭 들어맞는 자리",
  "snuggle": "파고들어 안기다",
  "specialized corner": "전문화된 영역",
  "spoken": "입으로 말하는",
  "storyline": "줄거리",
  "symbol system": "기호 체계",
  "take a nap": "낮잠을 자다",
  "take note of": "~을 눈여겨보다",
  "taking no side": "편을 들지 않는",
  "temperament": "기질",
  "tension": "팽팽함",
  "that is to say": "말하자면",
  "the titled classes": "작위를 가진 계층",
  "tight": "여유가 없는",
  "timidity": "겁이 많음",
  "titular": "직함만의",
  "to say nothing of": "~은 말할 나위 없이",
  "token-level": "형식만 갖춘",
  "too small to count": "셀 가치가 없을 만큼 작은",
  "trifling": "대수롭지 않은",
  "true account": "실제 있었던 이야기",
  "tuck oneself in": "몸을 들이밀다",
  "unaligned": "어느 편도 아닌",
  "unarmed": "무기를 들지 않은",
  "unworldly": "세상을 모르는",
  "usual pattern": "으레 그러한 틀",
  "voice-over": "화면 밖 목소리",
  "wandering": "떠돌아다니는",
  "wayfinding": "길을 찾아냄",
  "well-behaved": "행동이 바른",
  "what is expected": "당연히 여겨지는 것",
  "whittle down": "조금씩 줄이다",
  "wholly lacking": "온전히 빠져 있는",
  "wide": "폭이 넓은",
  "wistful memory": "아련한 기억",
  "without any trace": "흔적조차 없는",
  "without force": "힘을 쓰지 않는",
  "without money back": "돈을 돌려주지 않는",
  "without speech": "말 없이 하는",
  "work out terms": "조건을 맞춰 가다",
  "worth noting": "눈여겨볼 만한"
});
