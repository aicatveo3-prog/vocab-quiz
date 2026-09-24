/**
 * 단어 데이터 — 수능 보카 V 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 75단어 · 4챕터 (마지막 챕터 15단어) ──
 *
 * 승격이 37개(49%)다. 절반이 이미 선택지로 쓰이던 낱말이라, 표제어로 올리면
 * 기존 표제어 여러 곳의 화면이 함께 움직인다. 확정한 뜻·품사·레벨은
 * tools/v-source.txt 에 남겨 두었다. 원본(교재) 76단어에서 vengeance 하나를
 * 뺐다 — 기존 표제어 revenge(복수) 와 같은 말이다.
 *
 * ── 이 세트에서 조심한 것 ─────────────────────────────
 * ① vari- 무리가 여섯이다. variability·variable·variation·varied·variety·various.
 *    짝 맞추기 보드는 공통 접두사 여섯 글자부터 가르므로 variability↔variable 은
 *    저절로 갈리지만 varied↔variety(5글자) 는 안 걸린다. 뜻으로 갈랐다.
 *      varied  다양한, 변화가 많은   varies 와 various 는 '다양한' 을 글자까지
 *      various 다양한, 여러 가지의   맞춰 두었다 — 갈라 쓸 수 없는 말이어서
 *                                    앱이 자동으로 서로의 오답에서 뺀다.
 * ② virtu- 무리가 넷이다. virtual·virtually·virtue·virtuous. 넷 다 뜻이 아주
 *    달라 그대로 두었다.
 * ③ 품사로 가른 자리가 넷이다.
 *      vegan(adj 엄격한 채식의)   ↔ vegetarian(n 채식주의자)
 *      ventilate(v 환기하다)      ↔ ventilation(n 통풍, 환기)
 *      voluntary(adj 자발적인)    ↔ volunteer(n 자원봉사자)
 *      vigorous(adj 격렬한)       ↔ vigorously(adv 힘차게)
 * ④ 교재 오류를 둘 고쳤다.
 *      vegetation 식물 → 초목      '식물' 은 plant 의 뜻이다
 *      vandalism  '반달리즘' 걷음  낱말을 한글로 되풀이한 것이다
 *    version 의 사전값 '버전' 과 venture 의 교재 뜻 '벤처(사업)' 도 같은
 *    까닭으로 걷었다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 V 세트가 뜨지 않는다.
 */
window.VOCAB_V = [

  /* ══ 1차 · vacant ~ vast (20단어) ═══════════════════════════════════════
     승격 12 · 신규 8

     이 챕터에 vari- 무리가 여섯 중 여섯이 다 모였다. variability·variable·
     variation·varied·variety·various. 짝 맞추기 보드는 공통 접두사 여섯
     글자부터 같은 어근으로 보고 가르는데, 이 여섯은 이렇게 갈린다.
       variability ↔ variable   'variab' 6글자 → 자동으로 갈린다
       varied ↔ variety         'varie'  5글자 → 안 걸린다
       variable ↔ variation     'varia'  5글자 → 안 걸린다
     안 걸리는 짝은 뜻으로 갈라야 한다. 다행히 품사가 갈린다 —
     variability(n)·variation(n)·variety(n) / variable(adj)·varied(adj)·various(adj).
     같은 품사끼리만 오답이 되므로 실제로 부딪치는 것은 명사 셋과 형용사 셋이다.

       명사 셋   variability 변동성, 가변성   variation 차이, 변형   variety 다양성, 여러 가지
       형용사 셋 variable 변하기 쉬운         varied 다양한          various 다양한

     ★ varied 와 various 는 아무리 해도 갈라 쓸 수가 없었다. 둘 다 '다양한'
     이고, 기존 표제어 diverse(다양한, 여러 가지의) 도 같다. 그래서 **글자를
     통째로 맞췄다** — 앱의 meaningsOverlap 이 글자가 같은 두 낱말을 서로의
     오답에서 자동으로 빼기 때문이다. 어설프게 다르게 적는 것이 가장 위험하다.
     various 는 diverse 와 두 갈래가 완전히 같다.

     ★ validate 는 사전값을 버리고 교재를 따랐다. 사전이 '확인하다; 유효화하다'
     인데 '확인하다' 는 3차의 verify 첫 뜻과 똑같아진다. 교재의 '입증하다,
     인증하다' 로 갈랐다. demonstrate·document 가 '입증하다' 를, confirm·
     identify 가 '확인하다' 를 써서 네 곳이 맞물려 배제된다.
     ★ 참조 confirm(C) 의 화면이 한 줄 바뀐다.

     ★ vapor 는 사전값의 앞뒤를 바꿨다('김, 수증기' → '수증기, 김'). 영→한
     선택지에는 첫 뜻만 뜨는데 '김' 혼자로는 뜻이 흐리다. ★ 참조 fume(F) 의
     화면이 한 줄 바뀐다.

     ★ vandalism 의 교재 뜻 '반달리즘' 은 낱말을 한글로 되풀이한 것이라 걷었다.
     U 세트의 ubiquitous('유비쿼터스') 와 같은 자리다. */

  /* 승격 ① — 사전 글자 유지. 참조 blank(B)·empty(E) 두 곳의 화면은 바뀌지
     않는다. 교재의 '공허한' 은 empty(텅 빈, 공허한) 자리라 버렸다. */
  { word:"vacant", pron:"베이컨트", pos:"adj", level:"B2", meanings:["빈","비어 있는"],
    syn:["blank","empty","not in use"],
    ex:[{ s:"The seat beside her was {{}}.", f:"vacant", ko:"그녀 옆자리는 비어 있었다." }] },

  /* 교재의 동사 갈래('진공청소기로 청소하다') 는 버렸다. */
  { word:"vacuum", pron:"배큠", pos:"n", level:"B2", meanings:["진공"],
    syn:["space with no air","emptied of all air","airless space"],
    ex:[{ s:"Sound cannot travel in a {{}}.", f:"vacuum", ko:"소리는 진공에서 이동할 수 없다." }] },

  /* 승격 ② — 사전과 교재가 같다. 참조 네 곳(ambiguous·equivocal 유의어,
     definite·precise 반의어) 의 화면은 바뀌지 않는다. obscure·ambiguous·
     equivocal·fuzzy 와 맞물려 배제된다. */
  { word:"vague", pron:"베이그", pos:"adj", level:"B2", meanings:["모호한","애매한"],
    syn:["ambiguous","equivocal","not clearly put"],
    ex:[{ s:"His answer was too {{}} to help.", f:"vague", ko:"그의 대답은 도움이 되기에 너무 모호했다." }] },

  /* 교재의 '약간' 은 slightly(약간, 조금) 자리라 버렸다. */
  { word:"vaguely", pron:"베이글리", pos:"adv", level:"B2", meanings:["희미하게","애매모호하게"],
    syn:["in a hazy way","without sharp outline","not quite plainly"],
    ex:[{ s:"She {{}} remembered the road.", f:"vaguely", ko:"그녀는 그 길을 희미하게 기억했다." }] },

  /* 승격 ③ — 사전 단일값 유지. 참조 invalid(I 반의어)·legitimate(L) 두 곳의
     화면은 바뀌지 않는다. 교재의 '근거가 확실한' 은 certain·definite·undoubted
     의 '확실한' 을 품어 세 곳과 맞물린다. */
  { word:"valid", pron:"밸리드", pos:"adj", level:"B2", meanings:["유효한"],
    syn:["legitimate","holding good","still in force"],
    ex:[{ s:"The pass is {{}} for a year.", f:"valid", ko:"그 통행권은 일 년간 유효하다." }] },

  /* 승격 ④ — ★교재를 따랐다. 사전값 '확인하다; 유효화하다' 의 '확인하다' 는
     3차 verify 의 첫 뜻과 똑같아져 둘이 구별되지 않는다. demonstrate·document
     가 '입증하다' 를, confirm·identify 가 '확인하다' 를 써서 맞물려 배제된다.
     ★ 참조 confirm(C) 의 화면이 한 줄 바뀐다. */
  { word:"validate", pron:"밸리데이트", pos:"v", level:"B2", meanings:["입증하다","인증하다"],
    syn:["confirm","show to be true","give official backing to"],
    ex:[{ s:"The test will {{}} the theory.", f:"validate", ko:"그 실험이 그 이론을 입증할 것이다." }] },

  { word:"valuables", pron:"밸류어블스", pos:"n", level:"B2", meanings:["귀중품"],
    syn:["things worth money","goods of value","precious belongings"],
    ex:[{ s:"Leave your {{}} at the desk.", f:"valuables", ko:"귀중품은 안내대에 두세요." }] },

  { word:"valueless", pron:"밸류리스", pos:"adj", level:"C1", meanings:["무가치한"],
    syn:["worth nothing","of no value at all","not worth a penny"],
    ex:[{ s:"The old note is now {{}}.", f:"valueless", ko:"그 낡은 지폐는 이제 무가치하다." }] },

  /* ★ 교재의 '반달리즘' 은 낱말을 한글로 되풀이한 것이라 걷었다. */
  { word:"vandalism", pron:"밴덜리즘", pos:"n", level:"C1", meanings:["공공 기물 파손"],
    syn:["wrecking public property","damage done for its own sake","breaking things on purpose"],
    ex:[{ s:"The park suffered heavy {{}}.", f:"vandalism", ko:"그 공원은 심한 공공 기물 파손을 겪었다." }] },

  /* 교재 괄호를 걷었다. '선두' 는 '선봉' 과 같은 말이어서 하나로 줄였다. */
  { word:"vanguard", pron:"밴가드", pos:"n", level:"C2", meanings:["선봉"],
    syn:["those at the front","leaders of a movement","first rank of a march"],
    ex:[{ s:"They stood in the {{}} of reform.", f:"vanguard", ko:"그들은 개혁의 선봉에 섰다." }] },

  /* 승격 ⑤ — 사전 단일값 유지. 참조 세 곳(disappear·dissipate 유의어,
     come into existence 반의어) 의 화면은 바뀌지 않는다. disappear(사라지다,
     없어지다) 와 글자가 맞물려 배제되고 fade 의 '서서히 사라지다' 도 품는다. */
  { word:"vanish", pron:"배니시", pos:"v", level:"B2", meanings:["사라지다"],
    syn:["disappear","dissipate","go out of sight"],
    ex:[{ s:"The mist will {{}} by noon.", f:"vanish", ko:"안개는 정오까지 사라질 것이다." }] },

  /* 승격 ⑥ — ★사전의 앞뒤를 바꿨다. 영→한 선택지에는 첫 뜻만 뜨는데 '김'
     혼자로는 뜻이 흐리다. ★ 참조 fume(F) 의 화면이 한 줄 바뀐다. */
  { word:"vapor", pron:"베이퍼", pos:"n", level:"B2", meanings:["수증기","김"],
    syn:["fume","steam given off","mist from hot water"],
    ex:[{ s:"Water {{}} rose from the pan.", f:"vapor", ko:"냄비에서 수증기가 올라왔다." }] },

  /* 승격 ⑦ — 사전 글자 유지(참조 consistency 가 반의어). 교재는 순서만 다르다. */
  { word:"variability", pron:"베리어빌러티", pos:"n", level:"C1", meanings:["변동성","가변성"],
    syn:["how much it swings","liability to change","range of change"], ant:["consistency"],
    ex:[{ s:"The data show wide {{}}.", f:"variability", ko:"그 자료는 큰 변동성을 보인다." }] },

  /* 승격 ⑧ — 사전 글자 유지. 참조 세 곳(inconsistent 유의어, constant·
     invariable 반의어) 의 화면은 바뀌지 않는다. capricious(변덕스러운,
     변하기 쉬운) 와 맞물려 배제된다. */
  { word:"variable", pron:"베리어블", pos:"adj", level:"B2", meanings:["변하기 쉬운","가변적인"],
    syn:["inconsistent","not staying the same","open to change"], ant:["constant","invariable"],
    ex:[{ s:"The weather here is {{}}.", f:"variable", ko:"이곳 날씨는 변하기 쉽다." }] },

  /* '변화' 는 shift(변화, 교대)·mutation(돌연변이, 변화) 자리라 버렸다.
     '차이' 는 contrast·discrepancy·disparity·margin 넷과 맞물려 배제된다. */
  { word:"variation", pron:"베리에이션", pos:"n", level:"B2", meanings:["차이","변형"],
    syn:["contrast","discrepancy","a changed form"],
    ex:[{ s:"There is little {{}} between them.", f:"variation", ko:"그들 사이에는 차이가 거의 없다." }] },

  /* 승격 ⑨ — 사전 글자 유지. 참조 diverse(D)·monotonous(M) 두 곳의 화면은
     바뀌지 않는다. 아래 various 와 '다양한' 을 맞춰 자동 배제시켰다. */
  { word:"varied", pron:"베리드", pos:"adj", level:"B2", meanings:["다양한","변화가 많은"],
    syn:["diverse","full of change","of many sorts"], ant:["monotonous"],
    ex:[{ s:"She has a {{}} taste in books.", f:"varied", ko:"그녀는 책에 다양한 취향을 지녔다." }] },

  /* 승격 ⑩ — 사전 글자 유지(참조 diversity). 교재의 '변종, 품종' 은 버렸다. */
  { word:"variety", pron:"버라이어티", pos:"n", level:"B1", meanings:["다양성","여러 가지"],
    syn:["diversity","range of kinds","many sorts"],
    ex:[{ s:"The shop offers a wide {{}}.", f:"variety", ko:"그 가게는 폭넓은 다양성을 갖추고 있다." }] },

  /* ★ varied·diverse 와 글자를 맞춰 자동 배제시켰다. 셋이 다 '다양한' 이고
     갈라 쓸 수가 없다. 어설프게 다르게 적으면 앱이 셋을 다른 뜻으로 보고 같은
     문제에 나란히 내놓는다. diverse 와는 두 갈래가 통째로 같다. */
  { word:"various", pron:"베리어스", pos:"adj", level:"B1", meanings:["다양한","여러 가지의"],
    syn:["of many kinds","differing one from another","more than a few"],
    ex:[{ s:"He gave {{}} reasons for leaving.", f:"various", ko:"그는 떠나는 다양한 이유를 댔다." }] },

  /* 승격 ⑪ — 사전 글자 유지. 참조 세 곳(differ·diversify·fluctuate) 의 화면은
     바뀌지 않는다. differ(다르다, 의견이 다르다) 와 맞물려 배제된다. */
  { word:"vary", pron:"베리", pos:"v", level:"B1", meanings:["다르다","달라지다"],
    syn:["differ","diversify","fluctuate"],
    ex:[{ s:"Prices {{}} from shop to shop.", f:"vary", ko:"값은 가게마다 다르다." }] },

  /* 승격 ⑫ — 사전 글자 유지. 참조 enormous(E)·immense(I) 두 곳의 화면은
     바뀌지 않는다. enormous·immense·untold 가 '막대한' 을, extensive·
     limitless 가 교재의 '방대한' 을 써서 여러 곳과 맞물린다. */
  { word:"vast", pron:"배스트", pos:"adj", level:"B1", meanings:["광대한","막대한"],
    syn:["enormous","immense","spread out very far"],
    ex:[{ s:"A {{}} plain lay before them.", f:"vast", ko:"광대한 평원이 그들 앞에 놓여 있었다." }] },

  /* ══ 2차 · vegan ~ vertical (20단어) ═════════════════════════════════════
     승격 10 · 신규 10

     품사로 가른 자리가 둘이다.
       vegan(adj 엄격한 채식의)  ↔ vegetarian(n 채식주의자)
       ventilate(v 환기하다)     ↔ ventilation(n 통풍, 환기)
     ventilate↔ventilation 은 공통 접두사가 여덟 글자여서 짝 맞추기 보드에서도
     자동으로 갈린다. vegan↔vegetarian 은 세 글자('veg') 뿐이지만 품사가 달라
     같은 보드에 오지 않는다. vegetarian↔vegetation 은 여섯 글자('vegeta') 로
     걸린다.

     ★ vegetation 의 교재 뜻은 '식물' 이었다. 그런데 '식물' 은 기존 표제어
     plant(식물, 공장) 의 뜻이다. vegetation 은 한 곳에 자란 초목 전체를
     가리키는 말이므로 사전값 '초목' 이 맞다. 참조도 plant 한 곳이다.

     ★ version 의 사전값은 '판, 버전' 이었다. '버전' 은 낱말을 한글로 되풀이한
     것이라 걷고 교재의 '형태' 를 넣었다. 1차의 vandalism('반달리즘') 과 같은
     자리다. ★ 참조 adaptation(A) 의 화면이 한 줄 바뀐다.

     ★ venture 는 사전이 '과감히 하다; 모험' 으로 동사와 명사를 섞어 놓았다.
     참조 dare 가 동사여서 동사 쪽을 세우고 교재의 '감행하다' 를 둘째로 넣었다.
     명사 '모험' 은 adventure(모험)·quest(탐구, 모험) 자리다.
     ★ 참조 dare(D) 의 화면이 한 줄 바뀐다.

     verdict·verge 는 사전의 쌍반점만 쉼표로 고쳤다. verge 는 brink(가장자리,
     직전) 와 **두 갈래가 통째로 같다** — 갈라 쓸 수 없는 말이어서 일부러
     맞췄고, 앱이 둘을 서로의 오답에서 자동으로 뺀다.

     venue 는 '개최지' 를 앞세우고 '장소' 를 둘째로 남겼다. '장소' 가 있어야
     location(장소, 위치)·site(부지, 장소) 와 맞물려 배제된다. */

  /* 교재 괄호를 걷었다. '엄격한' 을 품어 strict·rigid·rigorous·severe·stern·
     hard-and-fast 여섯과 맞물려 배제된다. 아래 vegetarian 과 품사로 갈랐다. */
  { word:"vegan", pron:"비건", pos:"adj", level:"C1", meanings:["엄격한 채식의"],
    syn:["eating no animal food at all","avoiding milk and eggs too","of the strictest plant diet"],
    ex:[{ s:"She follows a {{}} diet.", f:"vegan", ko:"그녀는 엄격한 채식 식단을 따른다." }] },

  /* 위 vegan(형용사) 과 품사로 갈랐다. */
  { word:"vegetarian", pron:"베지테리언", pos:"n", level:"B2", meanings:["채식주의자"],
    syn:["one who eats no meat","person on a plant diet","eater of greens only"],
    ex:[{ s:"He became a {{}} last year.", f:"vegetarian", ko:"그는 지난해 채식주의자가 되었다." }] },

  /* 승격 ⑬ — ★사전값이 맞다(참조 plant). 교재의 '식물' 은 plant(식물, 공장) 의
     뜻이다. vegetation 은 한 곳에 자란 초목 전체를 가리킨다. */
  { word:"vegetation", pron:"베지테이션", pos:"n", level:"B2", meanings:["초목"],
    syn:["plant","greenery","plants of a place"],
    ex:[{ s:"Thick {{}} covered the slope.", f:"vegetation", ko:"빽빽한 초목이 그 비탈을 덮었다." }] },

  /* 승격 ⑭ — 사전의 쌍반점만 쉼표로. 참조 automobile(A)·medium(M) 두 곳의
     화면은 바뀌지 않는다. means(수단, 방법) 와 '수단' 이 맞물려 배제된다. */
  { word:"vehicle", pron:"비이클", pos:"n", level:"B1", meanings:["차량","수단"],
    syn:["automobile","medium","thing that carries"],
    ex:[{ s:"No {{}} may enter the lane.", f:"vehicle", ko:"어떤 차량도 그 길에 들어갈 수 없다." }] },

  { word:"vein", pron:"베인", pos:"n", level:"B2", meanings:["정맥","혈관"],
    syn:["blood tube to the heart","tube carrying blood","blood channel"],
    ex:[{ s:"The nurse found a {{}} at once.", f:"vein", ko:"간호사가 곧 정맥을 찾았다." }] },

  /* 교재의 '빠른 속도' 는 '속도' 와 같은 말이어서 하나로 줄였다.
     rate(속도, 비율)·tempo(속도) 와 맞물려 배제된다. */
  { word:"velocity", pron:"벌라서티", pos:"n", level:"C1", meanings:["속도"],
    syn:["rate","tempo","speed of travel"],
    ex:[{ s:"They measured the {{}} of the ball.", f:"velocity", ko:"그들은 공의 속도를 재었다." }] },

  /* 승격 ⑮ — 사전 단일값 유지(참조 toxin). 교재의 '앙심, 원한' 은 grudge(원한,
     앙심)·resentment(분노, 원한) 자리라 버렸다. */
  { word:"venom", pron:"베넘", pos:"n", level:"C1", meanings:["독액"],
    syn:["toxin","poison from a bite","snake poison"],
    ex:[{ s:"The {{}} acts on the nerves.", f:"venom", ko:"그 독액은 신경에 작용한다." }] },

  /* 교재의 '공기를 유통시키다' 는 뜻이 아니라 설명이라 걷었다. */
  { word:"ventilate", pron:"벤털레이트", pos:"v", level:"B2", meanings:["환기하다"],
    syn:["let fresh air in","air out a room","open up to the air"],
    ex:[{ s:"Please {{}} the kitchen well.", f:"ventilate", ko:"부엌을 잘 환기해 주세요." }] },

  /* 위 ventilate(동사) 와 품사로 갈랐다. 공통 접두사가 여덟 글자여서 짝 맞추기
     보드에서도 자동으로 갈린다. */
  { word:"ventilation", pron:"벤털레이션", pos:"n", level:"B2", meanings:["통풍","환기"],
    syn:["flow of fresh air","airing of a room","fresh air let in"],
    ex:[{ s:"The room has poor {{}}.", f:"ventilation", ko:"그 방은 통풍이 나쁘다." }] },

  /* 승격 ⑯ — ★사전 첫 갈래를 세웠다. 사전이 '과감히 하다; 모험' 으로 동사와
     명사를 섞어 놓았는데 참조 dare 가 동사다. 명사 '모험' 은 adventure(모험)·
     quest(탐구, 모험) 자리다. ★ 참조 dare(D) 의 화면이 한 줄 바뀐다. */
  { word:"venture", pron:"벤처", pos:"v", level:"B2", meanings:["과감히 하다","감행하다"],
    syn:["dare","risk doing","press on despite danger"],
    ex:[{ s:"Few would {{}} out in that storm.", f:"venture", ko:"그 폭풍 속에 과감히 나설 사람은 드물다." }] },

  /* '장소' 를 둘째로 남겨 location(장소, 위치)·site(부지, 장소) 와 맞물리게 했다. */
  { word:"venue", pron:"베뉴", pos:"n", level:"B2", meanings:["개최지","장소"],
    syn:["place for an event","spot where it is held","site"],
    ex:[{ s:"They changed the {{}} at short notice.", f:"venue", ko:"그들은 급히 개최지를 바꿨다." }] },

  /* 교재 괄호('구두의') 를 걷었다. */
  { word:"verbal", pron:"버벌", pos:"adj", level:"B2", meanings:["언어의","말로 된"],
    syn:["spoken rather than written","in words","put in speech"],
    ex:[{ s:"They had only a {{}} agreement.", f:"verbal", ko:"그들은 말로 된 합의만 했다." }] },

  /* 승격 ⑰ — 사전의 쌍반점만 쉼표로. 참조 conclusion(C)·diagnosis(D) 두 곳의
     화면은 바뀌지 않는다. 교재의 '판결' 은 decree(법령, 판결)·sentence(문장,
     판결) 자리라 버렸다. */
  { word:"verdict", pron:"버딕트", pos:"n", level:"C1", meanings:["평결","판단"],
    syn:["conclusion","diagnosis","finding of a court"],
    ex:[{ s:"The jury reached a {{}} at dusk.", f:"verdict", ko:"배심원단은 저녁에 평결에 이르렀다." }] },

  /* 승격 ⑱ — 사전의 쌍반점만 쉼표로(참조 brink). brink(가장자리, 직전) 와 두
     갈래가 통째로 같다 — 갈라 쓸 수 없어 일부러 맞췄고 자동 배제된다. */
  { word:"verge", pron:"버지", pos:"n", level:"C1", meanings:["가장자리","직전"],
    syn:["brink","the very edge","point just before"],
    ex:[{ s:"She stood on the {{}} of tears.", f:"verge", ko:"그녀는 눈물이 터질 직전이었다." }] },

  /* 승격 ⑲ — 사전 글자 유지. 참조 세 곳(attest·certify·confirm) 의 화면은
     바뀌지 않는다. confirm·identify 가 '확인하다' 를 써서 맞물려 배제된다.
     1차의 validate(입증하다, 인증하다) 와 갈랐다. */
  { word:"verify", pron:"베러파이", pos:"v", level:"B2", meanings:["확인하다","검증하다"],
    syn:["attest","certify","check and prove"],
    ex:[{ s:"We must {{}} every figure.", f:"verify", ko:"우리는 모든 수치를 확인해야 한다." }] },

  /* 3차의 well-rounded 에서 '다재다능한' 을 빼 이쪽에 주었다. */
  { word:"versatile", pron:"버서틀", pos:"adj", level:"C1", meanings:["다재다능한","다용도의"],
    syn:["good at many things","able to do much","fit for many uses"],
    ex:[{ s:"He is a {{}} player.", f:"versatile", ko:"그는 다재다능한 선수다." }] },

  /* 승격 ⑳ — 사전 단일값 유지(참조 lyric). 교재의 '시' 는 poetry 쪽이라 버렸다. */
  { word:"verse", pron:"버스", pos:"n", level:"C1", meanings:["운문"],
    syn:["lyric","lines with a beat","poetry rather than prose"],
    ex:[{ s:"He wrote the tale in {{}}.", f:"verse", ko:"그는 그 이야기를 운문으로 썼다." }] },

  /* 승격 ㉑ — ★사전의 '버전' 은 낱말을 한글로 되풀이한 것이라 걷고 교재의
     '형태' 를 넣었다. ★ 참조 adaptation(A) 의 화면이 한 줄 바뀐다. */
  { word:"version", pron:"버전", pos:"n", level:"B1", meanings:["판","형태"],
    syn:["adaptation","one form of a thing","a retold shape"],
    ex:[{ s:"This is the latest {{}} of the map.", f:"version", ko:"이것이 그 지도의 최신판이다." }] },

  /* 교재의 '대' 는 너무 짧아 풀어 썼다. 전치사지만 스키마에 prep 이 없어
     구·표현(phr) 으로 두었다. */
  { word:"versus", pron:"버서스", pos:"phr", level:"B2", meanings:["~에 맞서","~와 대비하여"],
    syn:["set against","compared with","over against"] },

  /* 승격 ㉒ — 사전과 교재가 같다(참조 horizontal 이 반의어). */
  { word:"vertical", pron:"버티컬", pos:"adj", level:"B2", meanings:["수직의"],
    syn:["straight up and down","at a right angle to the ground","upright in line"], ant:["horizontal"],
    ex:[{ s:"Draw a {{}} line here.", f:"vertical", ko:"여기에 수직선을 그으세요." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "a changed form": "달라진 꼴",
  "a retold shape": "다시 옮긴 모습",
  "able to do much": "할 수 있는 것이 많은",
  "air out a room": "방의 공기를 갈다",
  "airing of a room": "방의 공기를 갊",
  "airless space": "공기 없는 자리",
  "at a right angle to the ground": "땅에 직각으로",
  "avoiding milk and eggs too": "우유와 달걀까지 피하는",
  "blood channel": "피가 흐르는 길",
  "blood tube to the heart": "심장으로 가는 핏줄",
  "breaking things on purpose": "일부러 물건을 깨뜨림",
  "check and prove": "살펴서 참임을 밝히다",
  "damage done for its own sake": "까닭 없이 낸 손상",
  "differing one from another": "서로 제각기 다른",
  "eater of greens only": "푸성귀만 먹는 이",
  "eating no animal food at all": "동물성 음식을 아예 안 먹는",
  "emptied of all air": "공기를 다 뺀",
  "finding of a court": "법정이 내린 결론",
  "first rank of a march": "행렬의 첫 줄",
  "fit for many uses": "여러 곳에 쓸 만한",
  "flow of fresh air": "맑은 공기의 흐름",
  "fresh air let in": "들인 맑은 공기",
  "full of change": "변화가 가득한",
  "give official backing to": "공식으로 뒷받침해 주다",
  "go out of sight": "눈앞에서 없어지다",
  "good at many things": "여러 가지를 잘하는",
  "goods of value": "값진 물품",
  "holding good": "효력이 살아 있는",
  "how much it swings": "흔들리는 폭",
  "in a hazy way": "아리송하게",
  "in words": "말로 된",
  "leaders of a movement": "운동을 이끄는 이들",
  "let fresh air in": "맑은 공기를 들이다",
  "liability to change": "바뀔 수 있는 성질",
  "lines with a beat": "가락이 있는 글줄",
  "many sorts": "여러 종류",
  "mist from hot water": "더운 물에서 나온 안개",
  "more than a few": "한둘이 아닌",
  "not clearly put": "뚜렷하게 말하지 않은",
  "not in use": "쓰이지 않는",
  "not quite plainly": "또렷하지 않게",
  "not staying the same": "한결같지 않은",
  "not worth a penny": "한 푼 값도 못 하는",
  "of many kinds": "온갖 종류의",
  "of many sorts": "갖가지의",
  "of no value at all": "아무 값도 없는",
  "of the strictest plant diet": "가장 철저한 식물 식단의",
  "one form of a thing": "한 가지 꼴",
  "one who eats no meat": "고기를 안 먹는 사람",
  "open up to the air": "바깥 공기에 열다",
  "over against": "마주 놓고",
  "person on a plant diet": "식물만 먹는 사람",
  "place for an event": "행사를 치르는 곳",
  "plants of a place": "한 곳에 자란 풀과 나무",
  "poetry rather than prose": "산문이 아닌 시",
  "point just before": "바로 앞의 지점",
  "poison from a bite": "물려서 들어온 독",
  "precious belongings": "소중한 소지품",
  "press on despite danger": "위험을 무릅쓰고 나아가다",
  "put in speech": "말로 옮긴",
  "range of change": "바뀌는 범위",
  "range of kinds": "갖춘 종류의 폭",
  "risk doing": "위험을 안고 해 보다",
  "set against": "맞세워",
  "show to be true": "참임을 보여 주다",
  "snake poison": "뱀의 독",
  "space with no air": "공기가 없는 공간",
  "speed of travel": "나아가는 빠르기",
  "spoken rather than written": "글이 아니라 말로 하는",
  "spot where it is held": "그것이 열리는 자리",
  "spread out very far": "아주 멀리 펼쳐진",
  "steam given off": "뿜어 나온 김",
  "still in force": "아직 힘을 지닌",
  "straight up and down": "곧추 선",
  "the very edge": "바로 그 끝",
  "thing that carries": "실어 옮기는 것",
  "things worth money": "값나가는 물건",
  "those at the front": "맨 앞에 선 이들",
  "tube carrying blood": "피를 나르는 관",
  "upright in line": "선이 곧게 선",
  "without sharp outline": "윤곽이 또렷하지 않게",
  "worth nothing": "값이 나가지 않는",
  "wrecking public property": "공공 재산을 부숨"
});
