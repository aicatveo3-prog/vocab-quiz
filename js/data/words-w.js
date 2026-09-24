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
    ex:[{ s:"The {{}} travellers sat down.", f:"weary", ko:"지친 여행자들이 자리에 앉았다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "barren ground": "메마른 땅",
  "be dressed in": "~을 차려입고 있다",
  "body that keeps watch": "지켜보는 단체",
  "drain of strength": "힘을 다 빼다",
  "eager to fight": "싸우려 드는",
  "fighting man": "싸우는 사내",
  "given to war": "전쟁으로 기우는",
  "go about with no goal": "목적 없이 돌아다니다",
  "have on": "몸에 걸치고 있다",
  "hospital section": "병원의 한 구역",
  "keeping water out": "물이 못 들어오게 하는",
  "land that grows nothing": "아무것도 자라지 않는 땅",
  "make less strong": "힘을 덜어 내다",
  "not letting water through": "물을 통과시키지 않는",
  "notice to take care": "조심하라는 알림",
  "of large means": "재산이 많은",
  "on one's guard": "단단히 대비하는",
  "one that guards against wrong": "잘못을 막아 서는 것",
  "one trained for battle": "싸움을 익힌 이",
  "part of a hospital": "병원의 한 부분",
  "part of the ocean": "대양의 한 부분",
  "pledge on goods sold": "판 물건에 대한 다짐",
  "roam without aim": "정처 없이 떠돌다",
  "rolling in money": "돈이 넘치는",
  "rooms for the sick": "환자를 두는 방",
  "rub thin by use": "써서 얇아지게 하다",
  "sea area": "바다의 한 구역",
  "shed for keeping things": "물건을 보관하는 헛간",
  "shedding rain": "비를 흘려 내는",
  "soft spot": "허술한 데",
  "soldier of old": "옛 군사",
  "store for goods": "물품을 두는 곳",
  "stray off the point": "갈피를 벗어나다",
  "stretch of sea": "뻗은 바다",
  "stroll to and fro": "어슬렁어슬렁 오가다",
  "sway and hold back": "기울다가 멈칫하다",
  "tire right out": "완전히 지치게 하다",
  "walk here and there": "여기저기 걸어 다니다",
  "want of strength": "힘이 모자람",
  "waste country": "버려진 들판",
  "without energy left": "남은 기운이 없는",
  "word of danger ahead": "앞의 위험을 알리는 말",
  "worn down": "기운이 깎인",
  "written promise to repair": "고쳐 주겠다는 문서"
});
