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
  { word:"weakness", pron:"위크니스", pos:"n", level:"B1", meanings:["약점","약함"],
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
    ex:[{ s:"They held a {{}} debate.", f:"wide-ranging", ko:"그들은 폭넓은 토론을 벌였다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "acting from good intent": "착한 뜻에서 나온",
  "as for": "그것에 대해서라면",
  "backed by sound proof": "단단한 근거가 받쳐 주는",
  "bad at heart": "속이 나쁜",
  "balanced all round": "두루 고른",
  "barren ground": "메마른 땅",
  "be dressed in": "~을 차려입고 있다",
  "body that keeps watch": "지켜보는 단체",
  "care of the needy": "어려운 이를 돌봄",
  "comfortably off": "살림이 넉넉한",
  "complain in a high tone": "높은 소리로 불평하다",
  "corn ground into flour": "가루로 빻는 곡물",
  "covering much ground": "아주 넓게 아우르는",
  "cry in small sobs": "잔 흐느낌으로 울다",
  "drain of strength": "힘을 다 빼다",
  "eager to fight": "싸우려 드는",
  "even on every side": "어느 쪽도 치우치지 않은",
  "evil in nature": "본디 악한",
  "fighting man": "싸우는 사내",
  "find the weight of": "무게를 알아내다",
  "given to doing harm": "해를 끼치려 드는",
  "given to war": "전쟁으로 기우는",
  "go about with no goal": "목적 없이 돌아다니다",
  "go round and round": "돌고 또 돌다",
  "grain for bread": "빵을 만드는 곡식",
  "ground that holds water": "물을 머금은 땅",
  "have on": "몸에 걸치고 있다",
  "having plenty": "가진 것이 많은",
  "hospital section": "병원의 한 구역",
  "keeping water out": "물이 못 들어오게 하는",
  "knit together": "엮어 붙이다",
  "land that grows nothing": "아무것도 자라지 않는 땅",
  "make a long thin cry": "가늘고 긴 소리를 내다",
  "make less strong": "힘을 덜어 내다",
  "make on a loom": "베틀로 만들다",
  "meant kindly": "좋은 마음으로 한",
  "murmur low": "낮게 웅얼거리다",
  "not letting water through": "물을 통과시키지 않는",
  "notice to take care": "조심하라는 알림",
  "of easy means": "형편이 편한",
  "of large means": "재산이 많은",
  "on one's guard": "단단히 대비하는",
  "one that guards against wrong": "잘못을 막아 서는 것",
  "one trained for battle": "싸움을 익힌 이",
  "part of a hospital": "병원의 한 부분",
  "part of the ocean": "대양의 한 부분",
  "place one is at": "머무는 자리",
  "plant nobody wants": "아무도 원치 않는 풀",
  "pledge on goods sold": "판 물건에 대한 다짐",
  "resting on good reason": "까닭이 튼튼한",
  "roam without aim": "정처 없이 떠돌다",
  "rolling in money": "돈이 넘치는",
  "rooms for the sick": "환자를 두는 방",
  "rub thin by use": "써서 얇아지게 하다",
  "sea area": "바다의 한 구역",
  "shed for keeping things": "물건을 보관하는 헛간",
  "shedding rain": "비를 흘려 내는",
  "snivel softly": "코를 훌쩍이다",
  "soft spot": "허술한 데",
  "soldier of old": "옛 군사",
  "sound in every part": "어느 구석도 부실하지 않은",
  "speak under one's breath": "숨을 죽이고 말하다",
  "speaking of": "말이 난 김에 그것으로",
  "spin round fast": "빠르게 맴돌다",
  "state help for all": "나라가 두루 주는 도움",
  "store for goods": "물품을 두는 곳",
  "stray off the point": "갈피를 벗어나다",
  "stretch of sea": "뻗은 바다",
  "stroll to and fro": "어슬렁어슬렁 오가다",
  "sway and hold back": "기울다가 멈칫하다",
  "taking in a great deal": "많은 것을 담는",
  "talk very softly": "아주 나직이 말하다",
  "the crop of the field": "밭에서 거두는 작물",
  "the spot one has gone to": "떠나간 곳",
  "though the other way": "다른 쪽은 그렇지만",
  "tire right out": "완전히 지치게 하다",
  "turn like a top": "팽이처럼 돌다",
  "turning to the matter of": "화제를 그것으로 돌려",
  "unwanted growth": "달갑지 않게 자란 것",
  "walk here and there": "여기저기 걸어 다니다",
  "want of strength": "힘이 모자람",
  "waste country": "버려진 들판",
  "where a person is": "사람이 있는 데",
  "while by contrast": "그와 달리 한편",
  "wild plant in a garden": "밭에 난 들풀",
  "with a kind aim": "고운 속뜻을 지닌",
  "with all one's heart": "온 마음을 다해",
  "with firm footing": "발판이 굳은",
  "without energy left": "남은 기운이 없는",
  "word of danger ahead": "앞의 위험을 알리는 말",
  "work threads into cloth": "실을 엮어 천으로 만들다",
  "worn down": "기운이 깎인",
  "written promise to repair": "고쳐 주겠다는 문서"
});
