/**
 * 단어 데이터 — 수능 보카 W 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 73단어 · 4챕터 (마지막 챕터 13단어) ──
 *
 * 승격이 32개(44%)다. 확정한 뜻·품사·레벨은 tools/w-source.txt 에 남겨 두었다.
 * 원본(교재) 76단어에서 셋을 뺐다.
 *   well-timed  기존 표제어 timely(시기적절한, 때맞춘) 와 거의 같은 말이다
 *   whizz·whizzy  수능에 거의 안 나오고, 둘이 서로 다섯 글자만 같아 갈리지도 않는다
 *
 * ── 이 세트에서 조심한 것 ─────────────────────────────
 * ① well- 무리가 넷이다. well-grounded·well-meaning·well-rounded·well-to-do.
 *    넷이 서로 다섯 글자만 같아 짝 맞추기 보드에서 안 걸린다(여섯 글자부터
 *    가른다). 갈래를 하나씩만 남겨 뜻으로 갈랐다.
 *      well-grounded  정당한 근거가 있는
 *      well-meaning   선의의
 *      well-rounded   균형이 잡힌      ← '다재다능한' 은 versatile 에 넘겼다
 *      well-to-do     유복한, 부유한    ← '부유한' 을 둘째로 남겨 wealthy 와 맞물리게 했다
 * ② with- 무리가 넷이다. withdraw·wither·withhold·withstand. 공통 접두사가
 *    'with' 네 글자뿐이라 보드에서 안 갈리지만 뜻이 아주 달라 그대로 두었다.
 * ③ 품사로 가른 자리가 셋이다.
 *      weaken(v 약화시키다)   ↔ weakness(n 약점, 약함)
 *      willing(adj 기꺼이 ~하는) ↔ willingness(n 기꺼이 하는 마음)
 *      wander(v 헤매다)       ↔ wander around(phr 이리저리 헤매다)
 * ④ 교재 오류를 셋 고쳤다.
 *      watchdog  (증거 없이) 추정된, 주장된 → 감시 역할을 하는 것
 *                ★교재가 alleged 의 뜻을 잘못 붙였다. 실제로 기존 표제어
 *                alleged 가 '(증거 없이) 주장된, 혐의를 받는' 이다
 *      waver     약하다, 약해지다 → 흔들리다, 주저하다
 *      wander around  이리저리 헤메다 → 헤매다 (맞춤법)
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 W 세트가 뜨지 않는다.
 */
window.VOCAB_W = [
  { word:"worsen", exams:["공무원"], pron:"워슨", pos:"v", level:"B2", meanings:["악화되다","악화시키다"], syn:["deteriorate","decline","aggravate"], ant:["improve"], ex:[{ s:"The potholes {{}} after heavy rain.", f:"worsened", ko:"폭우 후 도로의 구멍이 악화되었다." }] },
  { word:"well-being", exams:["공무원"], pron:"웰빙", pos:"n", level:"B2", meanings:["안녕","행복","복지"], syn:["welfare","wellness","health"], ex:[{ s:"I urge action for the {{}} of our community.", f:"well-being", ko:"나는 우리 지역의 안녕을 위해 조치를 촉구한다." }] },
  { word:"workforce", exams:["공무원"], pron:"워크포스", pos:"n", level:"B2", meanings:["노동력","인력"], syn:["labor force","staff","personnel"], ex:[{ s:"Because of the ageing {{}}, planning is critical.", f:"workforce", ko:"고령화되는 인력 때문에 계획 수립이 매우 중요하다." }] },

  /* ══ 1차 · wander ~ weary (20단어) ═══════════════════════════════════════
     승격 9 · 신규 11

     ★ 이 챕터에 교재 오류가 둘 있었다.

     첫째, watchdog 의 교재 뜻이 **「(증거 없이) 추정된, 주장된」** 으로 적혀
     있었다. 그건 watchdog 뜻이 아니라 **alleged 의 뜻**이다. 실제로 기존
     표제어 alleged 가 「(증거 없이) 주장된, 혐의를 받는」 으로 등록돼 있다.
     교재에서 행이 밀려 잘못 붙은 것으로 보인다. 사전값 「감시 역할을 하는 것」
     이 맞고 참조도 monitor(감시 장치, 감독자) 한 곳이다.

     둘째, waver 의 교재 뜻이 「약하다, 약해지다; 흔들리다; 망설이다」 였다.
     '약하다' 는 waver 의 뜻이 아니다(weaken 과 섞인 듯하다). 사전값
     「흔들리다, 주저하다」 가 맞고 참조 falter·hesitate 둘도 그쪽을 가리킨다.

     ★ wander around 의 교재 뜻은 「이리저리 헤메다」 였다. **'헤메다' 는 오타**
     이고 표준은 '헤매다' 다. 저장소도 열아홉 곳 모두 '헤매다' 를 쓴다.
     고쳐 넣으니 위 wander(헤매다, 산만해지다) 의 '헤매다' 를 글자째 품어
     자동 배제까지 된다. 두 낱말은 공통 접두사가 여섯 글자여서 짝 맞추기
     보드에서도 갈린다.

     ★ wasteland 의 첫 뜻을 '불모지' 로 갈랐다. 교재는 「황무지, 불모지」 인데
     4차의 wilderness 도 「황야, 황무지」 다. 둘째 갈래에 '황무지' 를 남겨
     글자를 맞추면 앱이 자동으로 배제하고, 첫 뜻은 '불모지' 와 '황야' 로
     확실히 갈린다.

     품사로 가른 자리 하나 — weaken(v 약화시키다) ↔ weakness(n 약점, 약함).
     공통 접두사가 네 글자('weak') 뿐이라 보드에서는 안 걸리지만 품사가 달라
     같은 보드에 오지 않는다.

     wear 와 wear out 은 공통 접두사가 네 글자라 안 걸리는데 뜻이 아주 달라
     그대로 뒀다(입고 있다 / 지치게 하다). */

  /* 승격 ① — 사전 글자 유지. 참조 concentrate(C 반의어)·drift(D) 두 곳의
     화면은 바뀌지 않는다. 교재의 '거닐다, 돌아다니다' 는 roam(배회하다,
     떠돌아다니다) 자리다. 아래 wander around 가 '헤매다' 를 품어 배제된다. */
  { word:"wander", pron:"완더", pos:"v", level:"B2", meanings:["헤매다","산만해지다"],
    syn:["drift","roam without aim","stray off the point"], ant:["concentrate"],
    ex:[{ s:"His mind began to {{}}.", f:"wander", ko:"그의 마음이 산만해지기 시작했다." }] },

  /* ★ 교재 '헤메다' 는 오타다 — 표준은 '헤매다' 이고 저장소도 전부 그렇게
     쓴다. 고쳐 넣으니 위 wander 의 '헤매다' 를 품어 자동 배제까지 된다. */
  { word:"wander around", pron:"완더 어라운드", pos:"phr", level:"B2", meanings:["이리저리 헤매다"],
    syn:["walk here and there","go about with no goal","stroll to and fro"] },

  { word:"ward", pron:"워드", pos:"n", level:"B2", meanings:["병실","병동"],
    syn:["rooms for the sick","hospital section","part of a hospital"],
    ex:[{ s:"She works in the children's {{}}.", f:"ward", ko:"그녀는 소아 병동에서 일한다." }] },

  /* 승격 ② — 사전 글자 유지(참조 depot). depot(차고, 창고) 와 '창고' 가
     맞물려 배제된다. */
  { word:"warehouse", pron:"웨어하우스", pos:"n", level:"B2", meanings:["창고","저장고"],
    syn:["depot","store for goods","shed for keeping things"],
    ex:[{ s:"The goods lie in a {{}}.", f:"warehouse", ko:"그 물품은 창고에 있다." }] },

  /* 승격 ③ — 사전 단일값 유지(참조 martial). 교재의 '호전적인' 은
     combative(호전적인) 자리라 버렸다. */
  { word:"warlike", pron:"워라이크", pos:"adj", level:"C1", meanings:["전쟁을 벌이려는"],
    syn:["martial","eager to fight","given to war"],
    ex:[{ s:"They took a {{}} stand.", f:"warlike", ko:"그들은 전쟁을 벌이려는 태도를 취했다." }] },

  /* attention(주목, 주의) 와 '주의' 가 맞물려 배제된다. */
  { word:"warning", pron:"워닝", pos:"n", level:"B1", meanings:["경고","주의"],
    syn:["attention","word of danger ahead","notice to take care"],
    ex:[{ s:"They ignored the {{}} sign.", f:"warning", ko:"그들은 경고 표지를 무시했다." }] },

  /* 교재의 괄호('보증(서)') 를 풀어 '보증서' 로 했다. guarantee(보장하다,
     보증) 와 맞물려 배제된다. */
  { word:"warranty", pron:"워런티", pos:"n", level:"C1", meanings:["보증서","담보"],
    syn:["guarantee","written promise to repair","pledge on goods sold"],
    ex:[{ s:"The {{}} runs for two years.", f:"warranty", ko:"그 보증서는 이 년간 유효하다." }] },

  { word:"warrior", pron:"워리어", pos:"n", level:"B2", meanings:["전사"],
    syn:["fighting man","one trained for battle","soldier of old"],
    ex:[{ s:"The {{}} laid down his shield.", f:"warrior", ko:"그 전사는 방패를 내려놓았다." }] },

  /* 승격 ④ — 사전 글자 유지(참조 cautious). 교재는 순서만 다르다.
     alert(경계하는, 방심하지 않는) 와 '경계하는' 이 맞물려 배제된다. */
  { word:"wary", pron:"웨리", pos:"adj", level:"C1", meanings:["조심하는","경계하는"],
    syn:["cautious","on one's guard","slow to trust"],
    ex:[{ s:"He was {{}} of strangers.", f:"wary", ko:"그는 낯선 이를 조심했다." }] },

  /* ★ 첫 뜻을 '불모지' 로 갈랐다. 4차의 wilderness(황야, 황무지) 와 둘째 갈래
     '황무지' 를 맞춰 자동 배제시켰고, 첫 뜻은 '불모지' 와 '황야' 로 갈린다. */
  { word:"wasteland", pron:"웨이스트랜드", pos:"n", level:"C1", meanings:["불모지","황무지"],
    syn:["barren ground","land that grows nothing","waste country"],
    ex:[{ s:"The valley became a {{}}.", f:"wasteland", ko:"그 골짜기는 불모지가 되었다." }] },

  /* 승격 ⑤ — ★사전값이 맞다(참조 monitor). 교재의 '(증거 없이) 추정된,
     주장된' 은 alleged 의 뜻이다 — 실제로 기존 표제어 alleged 가 '(증거 없이)
     주장된, 혐의를 받는' 으로 등록돼 있다. 교재에서 행이 밀린 것으로 보인다. */
  { word:"watchdog", pron:"워치독", pos:"n", level:"C1", meanings:["감시 역할을 하는 것"],
    syn:["monitor","body that keeps watch","one that guards against wrong"],
    ex:[{ s:"The group acts as a {{}}.", f:"watchdog", ko:"그 단체는 감시 역할을 한다." }] },

  { word:"waterproof", pron:"워터프루프", pos:"adj", level:"B2", meanings:["방수의"],
    syn:["keeping water out","shedding rain","not letting water through"],
    ex:[{ s:"She wore a {{}} coat.", f:"waterproof", ko:"그녀는 방수 외투를 입었다." }] },

  /* 교재의 '바다' 는 sea 자리라 버렸다. */
  { word:"waters", pron:"워터스", pos:"n", level:"C1", meanings:["수역","해역"],
    syn:["sea area","stretch of sea","part of the ocean"],
    ex:[{ s:"They fish in northern {{}}.", f:"waters", ko:"그들은 북쪽 수역에서 고기를 잡는다." }] },

  /* 승격 ⑥ — ★사전값이 맞다. 교재의 '약하다, 약해지다' 는 waver 의 뜻이
     아니다(아래 weaken 과 섞인 듯하다). 참조 falter·hesitate 둘도 '흔들리다,
     주저하다' 쪽을 가리킨다. hesitate(주저하다, 망설이다) 와 맞물려 배제되고
     4차의 wobble(흔들리다, 떨다) 과도 '흔들리다' 로 맞물린다. */
  { word:"waver", pron:"웨이버", pos:"v", level:"C1", meanings:["흔들리다","주저하다"],
    syn:["falter","hesitate","sway and hold back"],
    ex:[{ s:"She did not {{}} for a moment.", f:"waver", ko:"그녀는 한순간도 흔들리지 않았다." }] },

  /* 승격 ⑦ — 사전 단일값 유지. 참조 세 곳(dilute·impair 유의어, consolidate
     반의어) 의 화면은 바뀌지 않는다. dampen(약화시키다, 적시다)·undermine
     (약화시키다) 과 글자가 맞물려 배제된다. */
  { word:"weaken", pron:"위컨", pos:"v", level:"B2", meanings:["약화시키다"],
    syn:["dilute","impair","make less strong"], ant:["consolidate"],
    ex:[{ s:"Rust will {{}} the beam.", f:"weaken", ko:"녹이 그 보를 약화시킬 것이다." }] },

  /* 위 weaken(동사) 과 품사로 갈랐다. */
  { word:"weakness", exams:["공무원"], pron:"위크니스", pos:"n", level:"B1", meanings:["약점","약함"],
    syn:["weak point","want of strength","soft spot"],
    ex:[{ s:"Pride was his one {{}}.", f:"weakness", ko:"자만이 그의 유일한 약점이었다." }] },

  /* 승격 ⑧ — 사전과 교재가 같다. 참조 affluent(A)·broke(B 반의어) 두 곳의
     화면은 바뀌지 않는다. affluent(풍족한, 부유한) 와 맞물리고 4차의
     well-to-do(유복한, 부유한) 와도 '부유한' 으로 맞물린다. */
  { word:"wealthy", pron:"웰시", pos:"adj", level:"B2", meanings:["부유한"],
    syn:["affluent","rolling in money","of large means"], ant:["broke"],
    ex:[{ s:"They come from a {{}} family.", f:"wealthy", ko:"그들은 부유한 집안 출신이다." }] },

  /* 교재의 명사 갈래('의복') 는 attire(의복, 복장) 자리라 버렸다. */
  { word:"wear", pron:"웨어", pos:"v", level:"B1", meanings:["입고 있다","닳게 하다"],
    syn:["have on","be dressed in","rub thin by use"],
    ex:[{ s:"You may {{}} my coat.", f:"wear", ko:"내 외투를 입어도 된다." }] },

  /* 승격 ⑨ — 사전 단일값 유지(참조 exhaust). 교재의 '지치다' 는 자동사여서
     버리고 타동사 쪽만 세웠다. */
  { word:"wear out", pron:"웨어 아웃", pos:"v", level:"B2", meanings:["지치게 하다"],
    syn:["exhaust","tire right out","drain of strength"],
    ex:[{ s:"The long march will {{}} them.", f:"wear out", ko:"그 긴 행군이 그들을 지치게 할 것이다." }] },

  /* exhausted(몹시 피곤한, 기진맥진한) 가 '피곤한' 을 품어 맞물려 배제된다. */
  { word:"weary", pron:"위어리", pos:"adj", level:"B2", meanings:["지친","피곤한"],
    syn:["exhausted","worn down","without energy left"],
    ex:[{ s:"The {{}} travellers sat down.", f:"weary", ko:"지친 여행자들이 자리에 앉았다." }] },

  /* ══ 2차 · weave ~ wide-ranging (20단어) ═════════════════════════════════
     승격 8 · 신규 12

     ★ well- 무리 넷이 이 챕터에 다 모였다. well-grounded·well-meaning·
     well-rounded·well-to-do. 넷이 서로 **다섯 글자('well-')만** 같아서 짝
     맞추기 보드의 어근 검사(여섯 글자) 에 하나도 안 걸린다. 게다가 넷 다
     adj/C1 이라 레벨로도 안 갈린다. 갈래를 하나씩만 남겨 뜻으로 갈랐다.
       well-grounded  정당한 근거가 있는   ← legitimate 의 '정당한' 을 품어 배제도 된다
       well-meaning   선의의              ← 교재 '선의로 한' 은 같은 말이어서 줄였다
       well-rounded   균형이 잡힌         ← '다재다능한' 은 V 세트 versatile 에 넘겼다
       well-to-do     유복한, 부유한       ← '부유한' 을 둘째로 남겨 wealthy 와 맞물리게 했다
     첫 뜻이 '정당한 근거가 있는'·'선의의'·'균형이 잡힌'·'유복한' 으로 확실히
     갈린다.

     ★ weave 는 교재가 「(천을) 짜다, 뜨다」 로 괄호를 달아 두었다. 괄호를 그냥
     걷으면 「짜다」 가 되는데, 그러면 squeeze(짜다, 압박하다)·milk(젖을 짜다)
     와 눈으로 갈리지 않는다. 한국어 '짜다' 는 뜻이 여럿이라 더 위험하다.
     괄호를 **풀어서 앞에 붙여** 「천을 짜다」 로 했다.

     ★ wicked 는 교재의 「못된, 사악한」 에서 앞뒤를 바꿨다. '못된' 이 첫 뜻이면
     erroneous(잘못된, 오류가 있는) 와 **한 글자로만** 갈린다. '사악한' 을
     앞세우니 V 세트 vicious(사악한, 잔인한) 와 글자가 맞물려 자동 배제되고,
     둘째로 남긴 '못된' 이 nasty(고약한, 못된) 와도 맞물린다.

     ★ when it comes to 는 교재의 「~에 관한 한」 을 버렸다. in terms of(~에
     관해서는, ~면에서)·regarding(~에 관하여) 과 눈으로 갈리지 않는다. 이 구의
     핵심은 '화제를 그것으로 돌리면' 이므로 「~로 말하자면」 으로 적었다.

     whimper 와 whine 은 둘 다 우는 소리인데 사전값이 이미 갈라져 있었다
     ('훌쩍이며 울다' / '낑낑거리다'). 그대로 지켰다. */

  /* ★ 교재 괄호 '(천을)' 을 걷지 않고 풀어서 앞에 붙였다. '짜다' 만 남기면
     squeeze(짜다, 압박하다)·milk(젖을 짜다) 와 눈으로 갈리지 않는다. */
  { word:"weave", pron:"위브", pos:"v", level:"B2", meanings:["천을 짜다","뜨다"],
    syn:["work threads into cloth","make on a loom","knit together"],
    ex:[{ s:"They still {{}} by hand here.", f:"weave", ko:"이곳에서는 아직 손으로 천을 짠다." }] },

  /* 교재의 '수초' 는 드문 쪽이라 버렸다. */
  { word:"weed", pron:"위드", pos:"n", level:"B2", meanings:["잡초"],
    syn:["wild plant in a garden","plant nobody wants","unwanted growth"],
    ex:[{ s:"She pulled out every {{}}.", f:"weed", ko:"그녀는 잡초를 하나하나 뽑았다." }] },

  /* 승격 ⑩ — 사전의 쌍반점만 쉼표로(참조 compare). compare(비교하다) 와
     맞물려 배제된다. 교재의 '무게가 ~이다' 는 자동사 쪽이라 버렸다. */
  { word:"weigh", pron:"웨이", pos:"v", level:"B1", meanings:["재다","비교하다"],
    syn:["compare","find the weight of","turn over in the mind"],
    ex:[{ s:"Please {{}} the parcel first.", f:"weigh", ko:"그 소포를 먼저 재 주세요." }] },

  /* 승격 ⑪ — 사전 단일값 유지(참조 common good). 교재의 '행복' 은 bliss(행복,
     기쁨)·happiness 자리라 버렸다. */
  { word:"welfare", pron:"웰페어", pos:"n", level:"B2", meanings:["복지"],
    syn:["common good","care of the needy","state help for all"],
    ex:[{ s:"The city spends much on {{}}.", f:"welfare", ko:"그 도시는 복지에 많이 쓴다." }] },

  /* legitimate(정당한, 적법한) 의 '정당한' 을 품어 맞물려 배제된다.
     교재의 '기초가 잘 잡힌' 은 버렸다. */
  { word:"well-grounded", pron:"웰 그라운디드", pos:"adj", level:"C1", meanings:["정당한 근거가 있는"],
    syn:["resting on good reason","backed by sound proof","with firm footing"],
    ex:[{ s:"Her fear was {{}}.", f:"well-grounded", ko:"그녀의 두려움은 정당한 근거가 있었다." }] },

  /* 교재의 '선의로 한' 은 '선의의' 와 같은 말이어서 하나로 줄였다. */
  { word:"well-meaning", pron:"웰 미닝", pos:"adj", level:"C1", meanings:["선의의"],
    syn:["meant kindly","acting from good intent","with a kind aim"],
    ex:[{ s:"It was a {{}} mistake.", f:"well-meaning", ko:"그것은 선의의 실수였다." }] },

  /* '다재다능한' 은 V 세트 versatile(다재다능한, 다용도의) 에 넘겼다. */
  { word:"well-rounded", pron:"웰 라운디드", pos:"adj", level:"C1", meanings:["균형이 잡힌"],
    syn:["even on every side","balanced all round","sound in every part"],
    ex:[{ s:"They seek a {{}} education.", f:"well-rounded", ko:"그들은 균형이 잡힌 교육을 찾는다." }] },

  /* ★ 첫 뜻을 '유복한' 으로 갈랐다. '부유한' 을 둘째로 남겨 wealthy(부유한)·
     affluent(풍족한, 부유한) 와 맞물리게 했다. */
  { word:"well-to-do", pron:"웰 투 두", pos:"adj", level:"C1", meanings:["유복한","부유한"],
    syn:["comfortably off","of easy means","having plenty"],
    ex:[{ s:"They live in a {{}} district.", f:"well-to-do", ko:"그들은 유복한 동네에 산다." }] },

  /* 승격 ⑫ — 사전 단일값 유지(참조 marsh). */
  { word:"wetland", pron:"웻랜드", pos:"n", level:"B2", meanings:["습지대"],
    syn:["marsh","boggy land","ground that holds water"],
    ex:[{ s:"Birds nest in the {{}}.", f:"wetland", ko:"새들이 그 습지대에 둥지를 튼다." }] },

  { word:"wheat", pron:"위트", pos:"n", level:"B1", meanings:["밀"],
    syn:["grain for bread","corn ground into flour","the crop of the field"],
    ex:[{ s:"The {{}} ripened early.", f:"wheat", ko:"그 밀은 일찍 익었다." }] },

  /* ★ 교재의 '~에 관한 한' 은 in terms of(~에 관해서는, ~면에서)·regarding
     (~에 관하여) 과 눈으로 갈리지 않는다. 이 구의 핵심은 화제를 그것으로
     돌리는 것이므로 '~로 말하자면' 으로 적었다. */
  { word:"when it comes to", pron:"웬 잇 컴스 투", pos:"phr", level:"B2", meanings:["~로 말하자면"],
    syn:["speaking of","as for","turning to the matter of"] },

  /* 교재의 부사 갈래('어디쯤에') 는 버렸다. */
  { word:"whereabouts", pron:"웨어러바우츠", pos:"n", level:"C1", meanings:["행방","소재"],
    syn:["where a person is","place one is at","the spot one has gone to"],
    ex:[{ s:"His {{}} are still unknown.", f:"whereabouts", ko:"그의 행방은 아직 알려지지 않았다." }] },

  /* on the other hand(반면에, 한편) 와 맞물려 배제된다. 접속사지만 스키마에
     conj 가 없어 구·표현(phr) 으로 두었다. */
  { word:"whereas", pron:"웨어래즈", pos:"phr", level:"B2", meanings:["반면에"],
    syn:["on the other hand","while by contrast","though the other way"] },

  /* 승격 ⑬ — 사전 단일값 유지(참조 moan). 교재 명사 갈래 버림. 아래 whine 과
     사전값이 이미 갈라져 있어 그대로 지켰다. */
  { word:"whimper", pron:"윔퍼", pos:"v", level:"C1", meanings:["훌쩍이며 울다"],
    syn:["moan","cry in small sobs","snivel softly"],
    ex:[{ s:"The puppy began to {{}}.", f:"whimper", ko:"그 강아지가 훌쩍이며 울기 시작했다." }] },

  /* 승격 ⑭ — 사전 단일값 유지(참조 groan). 교재의 '칭얼거리다, 우는 소리를
     하다' 는 위 whimper 와 겹쳐 사전값 쪽을 세웠다. */
  { word:"whine", pron:"와인", pos:"v", level:"B2", meanings:["낑낑거리다"],
    syn:["groan","make a long thin cry","complain in a high tone"],
    ex:[{ s:"The dog will {{}} at the door.", f:"whine", ko:"그 개는 문에서 낑낑거릴 것이다." }] },

  /* 교재 명사 갈래('회전, 소란') 는 revolution·disturbance·riot 자리라 버렸다. */
  { word:"whirl", pron:"월", pos:"v", level:"C1", meanings:["소용돌이치다"],
    syn:["spin round fast","turn like a top","go round and round"],
    ex:[{ s:"Leaves began to {{}} in the wind.", f:"whirl", ko:"잎들이 바람에 소용돌이치기 시작했다." }] },

  /* 승격 ⑮ — 사전 단일값 유지. 참조 blare(B)·call out(C) 두 곳(둘 다 반의어)
     의 화면은 바뀌지 않는다. 교재 명사 갈래 버림. */
  { word:"whisper", pron:"위스퍼", pos:"v", level:"B1", meanings:["속삭이다"],
    syn:["speak under one's breath","talk very softly","murmur low"], ant:["blare","call out"],
    ex:[{ s:"She had to {{}} in the hall.", f:"whisper", ko:"그녀는 복도에서 속삭여야 했다." }] },

  /* 승격 ⑯ — 사전 글자 유지(참조 earnest·heartfelt). 교재의 '전적인, 완전한'
     은 absolute·outright·sheer·thorough 넷 자리라 버렸다. */
  { word:"wholehearted", pron:"홀하티드", pos:"adj", level:"C1", meanings:["전심전력의","진심을 다한"],
    syn:["earnest","heartfelt","with all one's heart"],
    ex:[{ s:"He gave it his {{}} support.", f:"wholehearted", ko:"그는 그것에 전심전력의 지지를 보냈다." }] },

  /* ★ 교재의 '못된, 사악한' 에서 앞뒤를 바꿨다. '못된' 이 첫 뜻이면
     erroneous(잘못된, 오류가 있는) 와 한 글자로만 갈린다. '사악한' 을 앞세우니
     V 세트 vicious(사악한, 잔인한) 와 맞물려 배제되고, 둘째로 남긴 '못된' 이
     nasty(고약한, 못된) 와도 맞물린다. 교재의 '위험한' 은 hazardous 자리다. */
  { word:"wicked", pron:"위키드", pos:"adj", level:"B2", meanings:["사악한","못된"],
    syn:["evil in nature","given to doing harm","bad at heart"],
    ex:[{ s:"The tale has a {{}} queen.", f:"wicked", ko:"그 이야기에는 사악한 여왕이 나온다." }] },

  /* 승격 ⑰ — 사전 단일값 유지(참조 extensive). 교재의 '광범한' 은 extensive·
     widespread 쪽이라 버렸다. */
  { word:"wide-ranging", pron:"와이드 레인징", pos:"adj", level:"C1", meanings:["폭넓은"],
    syn:["extensive","covering much ground","taking in a great deal"],
    ex:[{ s:"They held a {{}} debate.", f:"wide-ranging", ko:"그들은 폭넓은 토론을 벌였다." }] },

  /* ══ 3차 · widespread ~ wonder (20단어) ══════════════════════════════════
     승격 11 · 신규 9

     will- 무리 넷과 with- 무리 넷이 한꺼번에 들어온다.

     will·willing·willingness·willpower — 공통 접두사가 네 글자('will') 뿐이라
     짝 맞추기 보드에서 안 갈린다(여섯 글자부터 가른다). willing↔willingness 만
     일곱 글자로 걸린다. 품사가 will(n)·willing(adj)·willingness(n)·
     willpower(n) 이니 명사 셋이 서로 부딪친다.
       ★ will(의지) 과 willpower(의지력) 이 문제였다. '의지력' 은 '의지' 를
       품는데 **두 글자라 자동 배제가 안 된다**(품기 검사는 양쪽이 세 글자
       이상일 때만 돈다). 영→한 선택지에 나란히 놓이면 갈리지 않는다.
       willpower 의 첫 뜻을 '정신력' 으로 돌려 will 이 '의지' 를 쓸 수 있게
       했다. ★ 참조 determination(D) 의 화면이 한 줄 바뀐다.
       willingness(기꺼이 하는 마음) 는 셋과 확실히 갈린다.

     withdraw·wither·withhold·withstand — 역시 'with' 네 글자뿐이라 보드에서
     안 갈리지만 뜻이 아주 달라 그대로 뒀다(철수하다 / 시들다 / 보류하다 /
     견디다). 넷 다 사전값을 글자까지 지켰다.

     ★ withhold 는 참조가 **일곱 곳**이다(allocate·allot·bestow·contribute·
     deliver 반의어, deduct·hold back 유의어). 이 세트에서 가장 많다. 교재가
     '억제하다, 보류하다' 로 순서만 달랐으므로 사전값을 그대로 지켰다.

     ★ wonder 는 교재가 동사('궁금해하다') 를 앞세웠는데 참조 둘
     (astonishment·marvel) 이 모두 명사다. 명사로 세우고 사전의 쌍반점만
     쉼표로 고쳤다.

     wobble 은 1차의 waver(흔들리다, 주저하다) 와 '흔들리다' 를, quiver(떨다)
     와 '떨다' 를 맞춰 자동 배제시켰다. 셋이 다 흔들림을 말하는데 갈라 쓸 수가
     없어 글자를 맞춘 것이다. */

  /* 승격 ⑱ — 사전 단일값 유지(참조 general). prevalent(널리 퍼진, 흔한) 와
     맞물려 배제된다. 교재의 '광범위한' 은 extensive 자리다. */
  { word:"widespread", pron:"와이드스프레드", pos:"adj", level:"B2", meanings:["널리 퍼진"],
    syn:["general","found nearly everywhere","spread over a large area"],
    ex:[{ s:"The custom is {{}} in the south.", f:"widespread", ko:"그 풍습은 남부에 널리 퍼져 있다." }] },

  { word:"widow", pron:"위도우", pos:"n", level:"B2", meanings:["미망인"],
    syn:["woman whose husband has died","wife left alone by death","one bereaved of a husband"],
    ex:[{ s:"The {{}} sold the farm.", f:"widow", ko:"그 미망인은 농장을 팔았다." }] },

  /* 승격 ⑲ — 사전 글자 유지(참조 breadth·diameter). 교재는 순서만 다르다. */
  { word:"width", pron:"위드스", pos:"n", level:"B1", meanings:["너비","폭"],
    syn:["breadth","diameter","how broad a thing is"],
    ex:[{ s:"Measure the {{}} of the door.", f:"width", ko:"그 문의 너비를 재라." }] },

  /* 1차의 wasteland(불모지, 황무지) 와 '황무지' 를 맞춰 자동 배제시켰고,
     첫 뜻은 '황야' 와 '불모지' 로 갈린다. */
  { word:"wilderness", pron:"윌더니스", pos:"n", level:"C1", meanings:["황야","황무지"],
    syn:["wild land with no people","untamed country","waste of open land"],
    ex:[{ s:"They trekked across the {{}}.", f:"wilderness", ko:"그들은 황야를 가로질러 걸었다." }] },

  /* ★ 아래 willpower 의 첫 뜻을 '정신력' 으로 돌린 덕에 이쪽이 '의지' 를 쓸 수
     있다. '의지력' 은 '의지' 를 품지만 두 글자라 자동 배제가 안 되기 때문이다.
     free will(자유 의지) 과는 '자유' 가 갈래를 못 박아 갈린다. */
  { word:"will", pron:"윌", pos:"n", level:"B2", meanings:["의지","유언장"],
    syn:["power to choose","paper leaving one's goods","the mind's resolve"],
    ex:[{ s:"She has a strong {{}}.", f:"will", ko:"그녀는 강한 의지를 지녔다." }] },

  { word:"willing", pron:"윌링", pos:"adj", level:"B1", meanings:["기꺼이 ~하는"],
    syn:["ready to do it","not holding back","glad to lend a hand"],
    ex:[{ s:"He was {{}} to wait.", f:"willing", ko:"그는 기꺼이 기다리려 했다." }] },

  /* 위 willing(형용사) 과 품사로 갈랐다. 공통 접두사가 일곱 글자여서 짝 맞추기
     보드에서도 갈린다. */
  { word:"willingness", pron:"윌링니스", pos:"n", level:"B2", meanings:["기꺼이 하는 마음"],
    syn:["readiness to act","mind glad to do it","being ready to help"],
    ex:[{ s:"Her {{}} surprised them.", f:"willingness", ko:"그녀의 기꺼이 하는 마음이 그들을 놀라게 했다." }] },

  /* 승격 ⑳ — ★첫 뜻을 '정신력' 으로 갈랐다. 사전값 '의지력' 이 앞이면 위
     will(의지) 과 눈으로 갈리지 않는다 — '의지력' 이 '의지' 를 품지만 두
     글자라 자동 배제가 안 된다. ★ 참조 determination(D) 의 화면이 한 줄 바뀐다. */
  { word:"willpower", pron:"윌파워", pos:"n", level:"C1", meanings:["정신력","의지력"],
    syn:["determination","strength of mind","grip on oneself"],
    ex:[{ s:"It took great {{}} to stop.", f:"willpower", ko:"멈추는 데 큰 정신력이 들었다." }] },

  /* 승격 ㉑ — 사전 단일값 유지(참조 fortune). */
  { word:"windfall", pron:"윈드폴", pos:"n", level:"C2", meanings:["뜻밖의 횡재"],
    syn:["fortune","money that falls in one's lap","gain nobody looked for"],
    ex:[{ s:"The sale was a {{}} for them.", f:"windfall", ko:"그 매각은 그들에게 뜻밖의 횡재였다." }] },

  /* 승격 ㉒ — 사전 단일값 유지(참조 crooked). crooked(구불구불한, 곧지 않은)
     와 맞물려 배제된다. 교재의 '나선형의' 는 버렸다. */
  { word:"winding", pron:"와인딩", pos:"adj", level:"B2", meanings:["구불구불한"],
    syn:["crooked","bending this way and that","full of turns"],
    ex:[{ s:"They took the {{}} path.", f:"winding", ko:"그들은 구불구불한 길로 갔다." }] },

  { word:"windmill", pron:"윈드밀", pos:"n", level:"B1", meanings:["풍차"],
    syn:["mill turned by the wind","tower with sails","wind-driven mill"],
    ex:[{ s:"An old {{}} stood on the hill.", f:"windmill", ko:"낡은 풍차가 언덕에 서 있었다." }] },

  /* 승격 ㉓ — 사전 단일값 유지(참조 in relation to). 교재의 '~에 관해서는' 은
     in terms of(~에 관해서는, ~면에서) 자리라 버렸다. */
  { word:"with regard to", pron:"위드 리가드 투", pos:"phr", level:"B2", meanings:["~에 대해서는"],
    syn:["in relation to","as it touches","on the head of"] },

  /* 승격 ㉔ — 사전 글자 유지. 참조 deploy(D 반의어)·drop out(D) 두 곳의 화면은
     바뀌지 않는다. recall(회상하다, 회수하다)·retrieve(되찾다, 회수하다) 와
     '회수하다' 가 맞물려 배제된다. 교재의 '치우다' 는 버렸다. */
  { word:"withdraw", pron:"위드드로", pos:"v", level:"B2", meanings:["철수하다","회수하다"],
    syn:["drop out","pull back from a place","take out again"], ant:["deploy"],
    ex:[{ s:"The troops will {{}} by May.", f:"withdraw", ko:"그 군대는 오월까지 철수할 것이다." }] },

  /* 승격 ㉕ — 사전 단일값 유지(참조 blossom 반의어·fade). */
  { word:"wither", pron:"위더", pos:"v", level:"C1", meanings:["시들다"],
    syn:["fade","dry up and droop","lose all freshness"], ant:["blossom"],
    ex:[{ s:"The leaves began to {{}}.", f:"wither", ko:"잎들이 시들기 시작했다." }] },

  /* 승격 ㉖ — ★사전 글자 유지. 참조가 **일곱 곳**으로 이 세트에서 가장 많다
     (allocate·allot·bestow·contribute·deliver 반의어, deduct·hold back 유의어).
     교재는 순서만 달랐다. contain·hold back·hold down·inhibit·restrain 이
     '억제하다' 를, put on hold 가 '보류하다' 를 써서 여섯 곳과 맞물린다. */
  { word:"withhold", pron:"위드홀드", pos:"v", level:"C1", meanings:["보류하다","억제하다"],
    syn:["deduct","hold back","keep from giving"],
    ex:[{ s:"They may {{}} the payment.", f:"withhold", ko:"그들은 지급을 보류할 수 있다." }] },

  /* 승격 ㉗ — 사전 글자 유지(참조 bear·endure). bear(견디다, 감당하다)·
     endure(견디다, 참다)·sustain(유지하다, 견디다) 와 맞물려 배제된다. */
  { word:"withstand", pron:"위스탠드", pos:"v", level:"B2", meanings:["견디다","버티다"],
    syn:["bear","endure","hold out against"],
    ex:[{ s:"The wall can {{}} a gale.", f:"withstand", ko:"그 벽은 강풍을 견딜 수 있다." }] },

  /* 교재 동사 갈래('목격하다') 는 버렸다. */
  { word:"witness", pron:"위트니스", pos:"n", level:"B2", meanings:["목격자","증인"],
    syn:["one who saw it happen","person giving evidence","onlooker in court"],
    ex:[{ s:"The {{}} took the stand.", f:"witness", ko:"그 목격자가 증인석에 섰다." }] },

  /* 1차의 waver(흔들리다, 주저하다) 와 '흔들리다' 를, quiver(떨다) 와 '떨다' 를
     맞춰 자동 배제시켰다. 셋이 다 흔들림을 말하는데 갈라 쓸 수가 없어 글자를
     맞춘 것이다. V 세트 vibrate(진동하다) 와는 확실히 갈린다. */
  { word:"wobble", pron:"와블", pos:"v", level:"C1", meanings:["흔들리다","떨다"],
    syn:["quiver","rock unsteadily","shake from side to side"],
    ex:[{ s:"The table began to {{}}.", f:"wobble", ko:"그 탁자가 흔들리기 시작했다." }] },

  /* grievous(통탄할, 비통한)·lamentable(통탄스러운, 한심한) 과 맞물려 배제된다.
     교재의 '몹시 슬픈, 비통한' 은 grievous 쪽이라 버렸다. */
  { word:"woeful", pron:"워풀", pos:"adj", level:"C2", meanings:["통탄할","한심한"],
    syn:["grievous","lamentable","sad beyond telling"],
    ex:[{ s:"It was a {{}} waste of money.", f:"woeful", ko:"그것은 통탄할 돈 낭비였다." }] },

  /* 승격 ㉘ — ★사전의 쌍반점만 쉼표로. 교재는 동사('궁금해하다') 를 앞세웠는데
     참조 둘(astonishment·marvel) 이 모두 명사여서 명사로 세웠다.
     marvel(경이, 놀라운 일) 과 '경이' 가 맞물려 배제된다. */
  { word:"wonder", pron:"원더", pos:"n", level:"B1", meanings:["놀라움","경이"],
    syn:["astonishment","marvel","a sense of awe"],
    ex:[{ s:"The child stared in {{}}.", f:"wonder", ko:"그 아이는 놀라움에 차서 바라보았다." }] },

  /* ══ 4차 · wooden ~ wrinkle (13단어) — W 세트 마지막 ══════════════════════
     승격 4 · 신규 9

     ★ workable 은 V 세트 때 미리 갈라 둔 자리다. 교재 뜻이 「실행 가능한」
     인데, 그 자리는 기존 표제어 feasible(실행 가능한, 그럴듯한) 과 V 세트
     viable(실행 가능한) 이 이미 쓰고 있다. 셋을 다 같은 글자로 맞추면 서로
     배제되기는 하지만 학생에게는 똑같은 말이 셋 되어 버린다. 그래서 이쪽만
     「해낼 수 있는, 쓸 만한」 으로 갈라 썼다.

     ★ worthy 는 교재의 「자격이 있는, 훌륭한」 에서 앞뒤를 바꿨다. '자격이
     있는' 이 첫 뜻이면 qualified(자격 있는) 와 **조사 하나만** 다르다
     ('자격이 있는' / '자격 있는'). 글자가 달라 자동 배제도 안 되니 영→한
     선택지에 나란히 놓이면 갈리지 않는다. '훌륭한' 을 앞세우니 admirable·
     magnificent·respectable·splendid·superb 다섯과 맞물려 배제되고, 둘째로
     남긴 '자격이 있는' 이 eligible(자격이 있는, 적격의) 와도 맞물린다.

     ★ work out 은 교재가 「운동하다; 잘 풀리다」 인데 사전값은 「알아내다,
     계산해 내다」 다. 참조 셋(deduce·estimate·figure out) 이 모두 '알아냄'
     쪽이어서 사전값을 따랐다. determine·discover·uncover 가 '알아내다' 를 써서
     세 곳과 맞물려 배제된다.

     worthwhile 은 사전값 「할 만한 값이 있는」 을 지켰다. 교재의 '가치 있는' 은
     뜻이 너무 넓다. worthy 와 공통 접두사가 다섯 글자('worth') 라 짝 맞추기
     보드에서 안 갈리지만, 첫 뜻이 '할 만한 값이 있는' 과 '훌륭한' 으로 확실히
     갈린다. */

  { word:"wooden", pron:"우든", pos:"adj", level:"B1", meanings:["나무로 된"],
    syn:["made of timber","cut from a tree","of wood throughout"],
    ex:[{ s:"They sat on a {{}} bench.", f:"wooden", ko:"그들은 나무로 된 의자에 앉았다." }] },

  /* 승격 ㉙ — ★사전값을 따랐다. 교재는 '운동하다; 잘 풀리다' 인데 참조 셋
     (deduce·estimate·figure out) 이 모두 '알아냄' 쪽이다. determine·discover·
     uncover 가 '알아내다' 를 써서 세 곳과 맞물려 배제된다. */
  { word:"work out", pron:"워크 아웃", pos:"phr", level:"B2", meanings:["알아내다","계산해 내다"],
    syn:["deduce","estimate","figure out"] },

  /* ★ feasible(실행 가능한, 그럴듯한) 과 V 세트 viable(실행 가능한) 이 교재
     뜻의 자리를 이미 쓰고 있다. 셋을 같은 글자로 맞추면 서로 배제되기는 하나
     학생에게는 똑같은 말이 셋 된다. 이쪽만 갈라 썼다. */
  { word:"workable", pron:"워커블", pos:"adj", level:"B2", meanings:["해낼 수 있는","쓸 만한"],
    syn:["able to be done","fit to use","good enough to go on with"],
    ex:[{ s:"That is a {{}} answer.", f:"workable", ko:"그것은 해낼 수 있는 답이다." }] },

  { word:"workload", pron:"워크로드", pos:"n", level:"B2", meanings:["업무량","작업량"],
    syn:["amount of work to get through","load of tasks","how much there is to do"],
    ex:[{ s:"Her {{}} doubled that month.", f:"workload", ko:"그달 그녀의 업무량이 두 배가 됐다." }] },

  { word:"world view", pron:"월드 뷰", pos:"n", level:"C1", meanings:["세계관"],
    syn:["way of seeing the world","one's whole outlook on life","frame of belief"],
    ex:[{ s:"Travel changed his {{}}.", f:"world view", ko:"여행이 그의 세계관을 바꿨다." }] },

  /* 교재 동사 갈래('숭배하다') 는 버렸다. chapel(예배실, 부속 예배당) 과는
     '-실' 이 장소를 뜻해 갈린다. */
  { word:"worship", pron:"워십", pos:"n", level:"B2", meanings:["예배","숭배"],
    syn:["act of bowing down","reverence paid to a god","service of praise"],
    ex:[{ s:"They gathered for {{}} at dawn.", f:"worship", ko:"그들은 새벽에 예배를 보러 모였다." }] },

  /* 승격 ㉚ — 사전 단일값 유지(참조 fruitful). 교재의 '가치 있는' 은 뜻이 너무
     넓어 버렸다. 아래 worthy 와 첫 뜻이 확실히 갈린다. */
  { word:"worthwhile", pron:"워스와일", pos:"adj", level:"B2", meanings:["할 만한 값이 있는"],
    syn:["fruitful","worth the trouble","paying for the effort"],
    ex:[{ s:"The trip proved {{}}.", f:"worthwhile", ko:"그 여행은 할 만한 값이 있었다." }] },

  /* ★ 교재의 '자격이 있는, 훌륭한' 에서 앞뒤를 바꿨다. '자격이 있는' 이 첫
     뜻이면 qualified(자격 있는) 와 조사 하나만 다르다. '훌륭한' 을 앞세우니
     admirable·magnificent·respectable·splendid·superb 다섯과 맞물리고, 둘째로
     남긴 '자격이 있는' 이 eligible(자격이 있는, 적격의) 와도 맞물린다. */
  { word:"worthy", pron:"워디", pos:"adj", level:"B2", meanings:["훌륭한","자격이 있는"],
    syn:["of real merit","deserving of it","fit to receive"],
    ex:[{ s:"It was a {{}} cause.", f:"worthy", ko:"그것은 훌륭한 명분이었다." }] },

  /* 교재 동사 갈래('상처를 입히다') 는 버렸다. scar(흉터, 상처) 와 맞물려
     배제된다. */
  { word:"wound", pron:"운드", pos:"n", level:"B1", meanings:["상처"],
    syn:["cut in the flesh","hurt in the body","open sore from a blow"],
    ex:[{ s:"The {{}} healed slowly.", f:"wound", ko:"그 상처는 천천히 나았다." }] },

  /* résumé(이력서, 요약)·conclusion(결론, 결말) 과 맞물려 배제된다. */
  { word:"wrap-up", pron:"랩 업", pos:"n", level:"C1", meanings:["요약","결말"],
    syn:["summing up at the end","closing account","final round-up"],
    ex:[{ s:"He gave a short {{}}.", f:"wrap-up", ko:"그는 짧은 요약을 했다." }] },

  /* outrage(격분, 분노)·resentment(분노, 원한) 와 맞물려 배제된다. */
  { word:"wrath", pron:"래스", pos:"n", level:"C2", meanings:["분노","노여움"],
    syn:["outrage","resentment","burning anger"],
    ex:[{ s:"They feared the king's {{}}.", f:"wrath", ko:"그들은 왕의 분노를 두려워했다." }] },

  /* 승격 ㉛ — 사전 단일값 유지(참조 miserable). 교재의 '비참한' 은 miserable·
     deplorable·disastrous·tragic 넷 자리라 버렸다. */
  { word:"wretched", pron:"레치드", pos:"adj", level:"C1", meanings:["처참한"],
    syn:["miserable","in a sorry state","wretchedly poor"],
    ex:[{ s:"They lived in {{}} huts.", f:"wretched", ko:"그들은 처참한 오막살이에 살았다." }] },

  /* 승격 ㉜ — 사전 단일값 유지(참조 furrow·gather line). 교재의 '잔주름' 은
     같은 말이어서 하나로 줄였다. */
  { word:"wrinkle", pron:"링클", pos:"n", level:"B2", meanings:["주름"],
    syn:["furrow","gather line","line in the skin"],
    ex:[{ s:"A {{}} showed on her brow.", f:"wrinkle", ko:"그녀의 이마에 주름이 드러났다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "a sense of awe": "아득한 느낌",
  "able to be done": "해낼 만한",
  "act of bowing down": "엎드려 절하는 일",
  "acting from good intent": "착한 뜻에서 나온",
  "amount of work to get through": "해내야 할 일의 양",
  "as for": "그것에 대해서라면",
  "as it touches": "그것에 닿는 한에서는",
  "backed by sound proof": "단단한 근거가 받쳐 주는",
  "bad at heart": "속이 나쁜",
  "balanced all round": "두루 고른",
  "barren ground": "메마른 땅",
  "be dressed in": "~을 차려입고 있다",
  "being ready to help": "도울 채비가 되어 있음",
  "bending this way and that": "이리저리 휘는",
  "body that keeps watch": "지켜보는 단체",
  "care of the needy": "어려운 이를 돌봄",
  "closing account": "마무리 보고",
  "comfortably off": "살림이 넉넉한",
  "complain in a high tone": "높은 소리로 불평하다",
  "corn ground into flour": "가루로 빻는 곡물",
  "covering much ground": "아주 넓게 아우르는",
  "cry in small sobs": "잔 흐느낌으로 울다",
  "cut from a tree": "나무를 잘라 만든",
  "cut in the flesh": "살이 갈라진 데",
  "deserving of it": "그럴 만한",
  "drain of strength": "힘을 다 빼다",
  "dry up and droop": "말라 늘어지다",
  "eager to fight": "싸우려 드는",
  "even on every side": "어느 쪽도 치우치지 않은",
  "evil in nature": "본디 악한",
  "fighting man": "싸우는 사내",
  "final round-up": "마지막 정리",
  "find the weight of": "무게를 알아내다",
  "fit to receive": "받을 만한",
  "fit to use": "쓰기에 알맞은",
  "found nearly everywhere": "거의 어디서나 보이는",
  "frame of belief": "믿음의 틀",
  "full of turns": "굽이가 많은",
  "gain nobody looked for": "아무도 바라지 않았던 이득",
  "given to doing harm": "해를 끼치려 드는",
  "given to war": "전쟁으로 기우는",
  "glad to lend a hand": "손을 보태는 것이 반가운",
  "go about with no goal": "목적 없이 돌아다니다",
  "go round and round": "돌고 또 돌다",
  "good enough to go on with": "그럭저럭 밀고 갈 만한",
  "grain for bread": "빵을 만드는 곡식",
  "grip on oneself": "스스로를 다잡는 힘",
  "ground that holds water": "물을 머금은 땅",
  "have on": "몸에 걸치고 있다",
  "having plenty": "가진 것이 많은",
  "hospital section": "병원의 한 구역",
  "how broad a thing is": "얼마나 넓은지",
  "how much there is to do": "할 일이 얼마나 되는지",
  "hurt in the body": "몸에 난 다친 데",
  "in a sorry state": "딱한 꼴인",
  "keep from giving": "주지 않고 두다",
  "keeping water out": "물이 못 들어오게 하는",
  "knit together": "엮어 붙이다",
  "land that grows nothing": "아무것도 자라지 않는 땅",
  "line in the skin": "살결에 잡힌 금",
  "load of tasks": "맡은 일의 짐",
  "lose all freshness": "싱싱함을 다 잃다",
  "made of timber": "목재로 만든",
  "make a long thin cry": "가늘고 긴 소리를 내다",
  "make less strong": "힘을 덜어 내다",
  "make on a loom": "베틀로 만들다",
  "meant kindly": "좋은 마음으로 한",
  "mill turned by the wind": "바람으로 돌리는 방아",
  "mind glad to do it": "즐거이 하려는 마음",
  "money that falls in one's lap": "굴러 들어온 돈",
  "murmur low": "낮게 웅얼거리다",
  "not holding back": "마다하지 않는",
  "not letting water through": "물을 통과시키지 않는",
  "notice to take care": "조심하라는 알림",
  "of easy means": "형편이 편한",
  "of large means": "재산이 많은",
  "of real merit": "참으로 값진",
  "of wood throughout": "온통 나무인",
  "on one's guard": "단단히 대비하는",
  "on the head of": "~의 건에 대해",
  "one bereaved of a husband": "남편을 여읜 이",
  "one that guards against wrong": "잘못을 막아 서는 것",
  "one trained for battle": "싸움을 익힌 이",
  "one who saw it happen": "그 일을 본 사람",
  "one's whole outlook on life": "삶을 보는 전체 눈",
  "onlooker in court": "법정에 선 목격자",
  "open sore from a blow": "맞아서 터진 자리",
  "paper leaving one's goods": "재산을 남기는 문서",
  "part of a hospital": "병원의 한 부분",
  "part of the ocean": "대양의 한 부분",
  "paying for the effort": "들인 힘이 되돌아오는",
  "person giving evidence": "증거를 대는 사람",
  "place one is at": "머무는 자리",
  "plant nobody wants": "아무도 원치 않는 풀",
  "pledge on goods sold": "판 물건에 대한 다짐",
  "power to choose": "고를 수 있는 힘",
  "pull back from a place": "어떤 곳에서 물러나다",
  "readiness to act": "나설 준비가 됨",
  "ready to do it": "할 마음이 있는",
  "resting on good reason": "까닭이 튼튼한",
  "reverence paid to a god": "신에게 드리는 공경",
  "roam without aim": "정처 없이 떠돌다",
  "rock unsteadily": "불안하게 흔들리다",
  "rolling in money": "돈이 넘치는",
  "rooms for the sick": "환자를 두는 방",
  "rub thin by use": "써서 얇아지게 하다",
  "sad beyond telling": "말로 못 할 만큼 슬픈",
  "sea area": "바다의 한 구역",
  "service of praise": "찬양하는 의례",
  "shake from side to side": "좌우로 흔들리다",
  "shed for keeping things": "물건을 보관하는 헛간",
  "shedding rain": "비를 흘려 내는",
  "snivel softly": "코를 훌쩍이다",
  "soft spot": "허술한 데",
  "soldier of old": "옛 군사",
  "sound in every part": "어느 구석도 부실하지 않은",
  "speak under one's breath": "숨을 죽이고 말하다",
  "speaking of": "말이 난 김에 그것으로",
  "spin round fast": "빠르게 맴돌다",
  "spread over a large area": "넓은 지역에 퍼진",
  "state help for all": "나라가 두루 주는 도움",
  "store for goods": "물품을 두는 곳",
  "stray off the point": "갈피를 벗어나다",
  "strength of mind": "마음의 힘",
  "stretch of sea": "뻗은 바다",
  "stroll to and fro": "어슬렁어슬렁 오가다",
  "summing up at the end": "끝에 추려 말함",
  "sway and hold back": "기울다가 멈칫하다",
  "take out again": "다시 빼내다",
  "taking in a great deal": "많은 것을 담는",
  "talk very softly": "아주 나직이 말하다",
  "the crop of the field": "밭에서 거두는 작물",
  "the mind's resolve": "마음이 굳힌 뜻",
  "the spot one has gone to": "떠나간 곳",
  "though the other way": "다른 쪽은 그렇지만",
  "tire right out": "완전히 지치게 하다",
  "tower with sails": "날개가 달린 탑",
  "turn like a top": "팽이처럼 돌다",
  "turning to the matter of": "화제를 그것으로 돌려",
  "untamed country": "길들지 않은 들판",
  "unwanted growth": "달갑지 않게 자란 것",
  "walk here and there": "여기저기 걸어 다니다",
  "want of strength": "힘이 모자람",
  "waste country": "버려진 들판",
  "waste of open land": "텅 빈 벌판",
  "way of seeing the world": "세상을 바라보는 방식",
  "where a person is": "사람이 있는 데",
  "while by contrast": "그와 달리 한편",
  "wife left alone by death": "죽음으로 홀로 남은 아내",
  "wild land with no people": "사람 없는 거친 땅",
  "wild plant in a garden": "밭에 난 들풀",
  "wind-driven mill": "바람이 돌리는 기계",
  "with a kind aim": "고운 속뜻을 지닌",
  "with all one's heart": "온 마음을 다해",
  "with firm footing": "발판이 굳은",
  "without energy left": "남은 기운이 없는",
  "woman whose husband has died": "남편을 잃은 여자",
  "word of danger ahead": "앞의 위험을 알리는 말",
  "work threads into cloth": "실을 엮어 천으로 만들다",
  "worn down": "기운이 깎인",
  "worth the trouble": "수고할 값이 되는",
  "written promise to repair": "고쳐 주겠다는 문서"
});
