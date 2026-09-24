/**
 * 단어 데이터 — 수능 보카 U 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 80단어 · 4챕터 (11차부터 네 차수에 걸쳐 붙인다) ──
 *
 * 승격이 29개(36%), 참조가 45곳이다. 확정한 뜻·품사·레벨은 tools/u-source.txt
 * 에 남겨 두었다. 원본(교재) 82단어에서 둘을 빼 20으로 나누어떨어지게 맞췄고
 * 뜻 오류 다섯을 고쳤다.
 *
 * ── 이 세트의 성격 ───────────────────────────────────
 * 여든 개가 거의 다 un-·under-·up- 으로 시작하는 파생어다. 그래서 뜻이 서로
 * 가까운 낱말이 무더기로 몰린다.
 *   끊임없음   unceasing · uninterrupted · unhindered
 *   변함없음   unswerving · unwavering
 *   견줄 데 없음 unparalleled · unrivaled
 *   분명함     unambiguous · unequivocal
 *   약화       undercut · undermine
 * 이 자리들은 기존 표제어와도 맞물린다(ceaseless·steadfast·excessive·dampen …).
 * 사전값이 있으면 글자까지 지켜 meaningsOverlap 이 자동으로 배제하게 두었고,
 * 사전값이 없으면 서로 다른 갈래를 맡도록 갈라 썼다.
 *
 * ── 앱이 문제를 만드는 방식에서 반드시 알아야 할 것 두 가지 ──────────
 * T 세트 8차에서 quizgen.js 를 다시 읽고 알아낸 것이다. 이 세트는 파생어
 * 뭉치라서 특히 중요하다.
 *
 * ① 영→한 4지선다는 선택지에 **첫 뜻만** 쓴다(makeMcq 의 en-ko 갈래가
 *    meanings[0] 만 모은다). 그러니 헷갈리는 낱말에 갈래를 더하는 것으로는
 *    부족하고, 갈리는 말을 **첫 자리**에 놓아야 한다.
 * ② 한→영 4지선다는 **철자가 닮은 낱말을 오답으로 먼저 고른다**(spellingScore).
 *    un-·under- 로 시작하는 이 세트의 낱말들은 서로의 오답으로 뜨는 것이
 *    기본값이다.
 * 짝 맞추기 보드는 공통 접두사 **여섯 글자**부터 같은 어근으로 보고 가른다.
 * 'under'(5) · 'uncon'(5) 처럼 다섯 글자만 겹치는 짝은 안 걸리니 뜻으로
 * 갈라야 한다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 U 세트가 뜨지 않는다.
 */
window.VOCAB_U = [

  /* ══ 11차 · ubiquitous ~ understandably (20단어) ═══════════════════════════
     승격 6(unambiguous·unconventional·uncover·undergo·underlying·undermine) · 신규 14

     '끊임없음' 덩어리가 이 챕터에서 먼저 걸렸다. unceasing(끊임없는) 은
     ceaseless(끊임없는, 부단한)·incessant(끊임없는)·perennial(다년생의,
     끊임없는) 셋과 글자가 같아 자동 배제된다. constant 는 레벨 차가 2여서
     애초에 같은 문제에 오지 않는다. 사전값을 글자까지 지킨 덕이다.

     손본 자리가 둘이다. 둘 다 참조가 없는 신규여서 순서를 바꾸는 것이 공짜였다.

       ★ unconscious  의식을 잃은 → **의식이 없는**
         numb(감각을 잃은, 마비된 · B2/adj) 와 품사·레벨이 같은데 '의식을 잃은'
         과 '감각을 잃은' 은 꼴이 완전히 똑같다. 글자가 달라 자동 배제도 안
         된다. 영→한 선택지에 나란히 놓이면 '의식' 과 '감각' 한 낱말로만
         갈려서 억울하게 틀린다. 꼴을 아예 바꿨다.

       ★ undergraduate  대학생 → **학부생, 대학생**
         pupil(학생, 제자 · B1/n) 의 '학생' 을 '대학생' 이 통째로 품는다.
         두 글자라 자동 배제는 안 되고 화면에서도 갈리지 않는다. '학부생' 을
         앞세웠다. 교재 뜻 '대학생' 은 둘째 갈래로 살려 두었다.

     나머지는 손대지 않아도 자동으로 갈린다.
       ultimate      ← fundamental(근본적인, 기초적인) 와 '근본적인' 이 같다
       unchangeable  ← invariable(불변의, 변함없는) 와 '불변의' 가 같다
       uncover       ← discover·determine 이 '알아내다' 를, diagnose 가
                       '원인을 밝혀내다' 로 '밝혀내다' 를 품는다
       undergo       ← receive(받다, 수령하다) 와 '받다' 가 같다
       undermine     ← dampen(약화시키다, 적시다) 와 '약화시키다' 가 같다
       unambiguous·unconventional·underlying ← 참조와 유의어 관계다

     ★ ubiquitous 의 교재 뜻은 '어디에나 존재하는, 유비쿼터스' 였다. 둘째
     갈래는 낱말 자체를 한글로 되풀이한 것이라 걷어 냈다.

     ultraviolet(자외선의) 과 infrared(적외선의 · C1/adj) 는 레벨 차가 1이어서
     한 문제에 뜬다. 그대로 두었다 — '자' 와 '적' 한 글자로 갈리는 것이 오히려
     가릴 만한 훈련이다. 뜻이 분명히 다르다. */

  /* ★ 교재 둘째 갈래 '유비쿼터스' 를 걷었다 — 낱말을 한글로 되풀이한 것이다. */
  { word:"ubiquitous", pron:"유비쿼터스", pos:"adj", level:"C1", meanings:["어디에나 존재하는"],
    syn:["found everywhere","present in every place","turning up all over"],
    ex:[{ s:"Mobile phones are now {{}}.", f:"ubiquitous", ko:"휴대전화는 이제 어디에나 존재한다." }] },

  /* fundamental(근본적인, 기초적인 · B2/adj) 와 '근본적인' 이 맞물려 배제된다.
     교재의 '최고의' 는 superb(훌륭한, 최고의)·top-notch(최고 수준의) 자리다. */
  { word:"ultimate", pron:"얼티메이트", pos:"adj", level:"B1", meanings:["궁극적인","근본적인"],
    syn:["final of all","at the very end","deepest of all"],
    ex:[{ s:"Peace was their {{}} aim.", f:"ultimate", ko:"평화가 그들의 궁극적인 목표였다." }] },

  /* 교재는 [adj+n] 이지만 형용사 쪽만 세웠다. infrared(적외선의 · C1/adj) 와
     레벨 차가 1이라 한 문제에 뜨는데, '자' 와 '적' 으로 분명히 갈린다. */
  { word:"ultraviolet", pron:"울트라바이얼릿", pos:"adj", level:"B2", meanings:["자외선의"],
    syn:["beyond the violet end","of invisible short rays","of the burning light"],
    ex:[{ s:"The glass blocks {{}} rays.", f:"ultraviolet", ko:"그 유리는 자외선을 막는다." }] },

  /* 승격 ① — 사전 단일값 유지(참조 explicit). '분명한' 은 evident·obvious
     자리라 쓰지 않았다. */
  { word:"unambiguous", pron:"언앰비규어스", pos:"adj", level:"C1", meanings:["모호하지 않은"],
    syn:["explicit","open to one reading only","leaving no doubt"],
    ex:[{ s:"The order was {{}}.", f:"unambiguous", ko:"그 명령은 모호하지 않았다." }] },

  /* 교재 둘째 갈래('전원 합의의') 는 같은 말이어서 하나로 줄였다. */
  { word:"unanimous", pron:"유내너머스", pos:"adj", level:"C1", meanings:["만장일치의"],
    syn:["agreed by all","with not one against","of one mind throughout"],
    ex:[{ s:"The vote was {{}}.", f:"unanimous", ko:"그 표결은 만장일치였다." }] },

  /* 교재의 '좋지 않은' 은 뜻이 흐려 버렸다. fascinating·inviting(매력적인)
     과 정반대여서 한 문제에 같이 뜰 수 있는데, 앱은 반의어를 일부러 한 개
     넣어 뜻의 경계를 묻는다. 고장이 아니라 설계다. */
  { word:"unattractive", pron:"언어트랙티브", pos:"adj", level:"B2", meanings:["매력 없는"],
    syn:["plain to look at","drawing no one","without charm"],
    ex:[{ s:"The room was bare and {{}}.", f:"unattractive", ko:"그 방은 헐벗고 매력이 없었다." }] },

  /* ceaseless(끊임없는, 부단한)·incessant(끊임없는)·perennial(다년생의,
     끊임없는) 셋과 글자가 같아 자동 배제된다. constant 는 레벨 차가 2다. */
  { word:"unceasing", pron:"언시싱", pos:"adj", level:"C1", meanings:["끊임없는"],
    syn:["going on and on","never coming to a stop","without a break"],
    ex:[{ s:"The {{}} noise wore them down.", f:"unceasing", ko:"끊임없는 소음이 그들을 지치게 했다." }] },

  /* invariable(불변의, 변함없는 · C1/adj) 와 '불변의' 가 맞물려 배제된다.
     교재 둘째 갈래('바꿀 수 없는') 는 같은 말이어서 하나로 줄였다. */
  { word:"unchangeable", pron:"언체인저블", pos:"adj", level:"B2", meanings:["불변의"],
    syn:["that cannot be altered","fixed for good","staying just as it is"],
    ex:[{ s:"The rule is {{}}.", f:"unchangeable", ko:"그 규칙은 불변이다." }] },

  /* 교재의 '~답지 않은' 에서 물결표를 걷었다. */
  { word:"uncharacteristic", pron:"언캐릭터리스틱", pos:"adj", level:"C1", meanings:["평소답지 않은"],
    syn:["not like one's usual self","out of keeping with one's ways","unlike how one normally is"],
    ex:[{ s:"His silence was {{}}.", f:"uncharacteristic", ko:"그의 침묵은 평소답지 않았다." }] },

  /* ★ 교재의 '의식을 잃은' 을 '의식이 없는' 으로 바꿨다. numb(감각을 잃은,
     마비된 · B2/adj) 와 꼴이 똑같아 영→한 선택지에 나란히 놓이면 '의식' 과
     '감각' 한 낱말로만 갈리기 때문이다. 교재 두 갈래는 같은 말이었다. */
  { word:"unconscious", pron:"언칸셔스", pos:"adj", level:"B2", meanings:["의식이 없는"],
    syn:["knocked out cold","not aware of anything","in a dead faint"],
    ex:[{ s:"They found him {{}} on the floor.", f:"unconscious", ko:"그들은 그가 바닥에서 의식이 없는 것을 발견했다." }] },

  /* 승격 ② — 사전 단일값 유지(참조 eccentric). '독특한' 은 unique 자리라
     쓰지 않았다. */
  { word:"unconventional", pron:"언컨벤셔널", pos:"adj", level:"B2", meanings:["관습에 얽매이지 않는"],
    syn:["eccentric","not doing as others do","going one's own way"],
    ex:[{ s:"She took an {{}} route to the top.", f:"unconventional", ko:"그녀는 정상에 이르는 관습에 얽매이지 않는 길을 택했다." }] },

  /* 승격 ③ — 사전 글자 유지. 참조 discover(D)·expose(E) 두 곳의 화면은 바뀌지
     않는다. discover·determine 이 '알아내다' 를, diagnose 가 '원인을 밝혀내다'
     로 '밝혀내다' 를 품어 넷이 모두 맞물려 배제된다. */
  { word:"uncover", pron:"언커버", pos:"v", level:"B2", meanings:["밝혀내다","알아내다"],
    syn:["discover","expose","bring to light"],
    ex:[{ s:"The audit will {{}} the loss.", f:"uncover", ko:"그 감사가 손실을 밝혀낼 것이다." }] },

  /* '약화시키다' 는 아래 undermine 자리라 쓰지 않았다. */
  { word:"undercut", pron:"언더컷", pos:"v", level:"C1", meanings:["~보다 저가로 팔다"],
    syn:["sell cheaper than","beat on price","offer for less"],
    ex:[{ s:"They can {{}} every rival.", f:"undercut", ko:"그들은 모든 경쟁자보다 저가로 팔 수 있다." }] },

  /* 승격 ④ — 사전 글자 유지. 참조 be subjected to(B)·go through(G) 두 곳의
     화면은 바뀌지 않는다. receive(받다, 수령하다 · B1/v) 와 '받다' 가 맞물려
     배제된다. */
  { word:"undergo", pron:"언더고", pos:"v", level:"B2", meanings:["겪다","받다"],
    syn:["be subjected to","go through","live through"],
    ex:[{ s:"She will {{}} surgery tomorrow.", f:"undergo", ko:"그녀는 내일 수술을 받을 것이다." }] },

  /* ★ '학부생' 을 앞세웠다. '대학생' 은 pupil(학생, 제자 · B1/n) 의 '학생' 을
     통째로 품는데 두 글자라 자동 배제가 안 되고 화면에서도 갈리지 않는다. */
  { word:"undergraduate", pron:"언더그래주엇", pos:"n", level:"B2", meanings:["학부생","대학생"],
    syn:["student not yet graduated","one reading for a first degree","college learner"],
    ex:[{ s:"She is still an {{}}.", f:"undergraduate", ko:"그녀는 아직 학부생이다." }] },

  /* 승격 ⑤ — 사전 단일값 유지. 참조 fundamental(F)·latent(L) 두 곳의 화면은
     바뀌지 않는다. '근본적인' 은 위 ultimate 과 fundamental 자리다. */
  { word:"underlying", pron:"언덜라잉", pos:"adj", level:"B2", meanings:["밑바탕에 있는"],
    syn:["fundamental","latent","lying beneath the surface"],
    ex:[{ s:"We must find the {{}} cause.", f:"underlying", ko:"우리는 밑바탕에 있는 원인을 찾아야 한다." }] },

  /* 승격 ⑥ — 사전 단일값 유지. 참조 bolster(B 반의어)·sabotage(S) 두 곳의
     화면은 바뀌지 않는다. dampen(약화시키다, 적시다 · C1/v) 와 글자가
     맞물려 배제된다. */
  { word:"undermine", pron:"언더마인", pos:"v", level:"B2", meanings:["약화시키다"],
    syn:["sabotage","eat away at","weaken from below"], ant:["bolster"],
    ex:[{ s:"Gossip can {{}} trust.", f:"undermine", ko:"소문은 신뢰를 약화시킬 수 있다." }] },

  { word:"underpaid", pron:"언더페이드", pos:"adj", level:"C1", meanings:["저임금의","박봉의"],
    syn:["paid too little","earning below one's worth","poorly rewarded"],
    ex:[{ s:"The staff felt {{}}.", f:"underpaid", ko:"직원들은 박봉이라고 느꼈다." }] },

  /* 교재는 [v+n] 이지만 동사 쪽만 세웠다. */
  { word:"underscore", pron:"언더스코어", pos:"v", level:"C1", meanings:["밑줄을 긋다"],
    syn:["draw a line under","mark beneath the words","rule a line below"],
    ex:[{ s:"Please {{}} the title.", f:"underscore", ko:"제목에 밑줄을 그어 주세요." }] },

  /* 교재 두 갈래('당연히, 이해할 수 있게') 가 같은 말이어서 하나로 줄였다. */
  { word:"understandably", pron:"언더스탠더블리", pos:"adv", level:"B2", meanings:["당연히"],
    syn:["as anyone would","for good reason","no wonder"],
    ex:[{ s:"She was {{}} upset.", f:"understandably", ko:"그녀는 당연히 속상해했다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "agreed by all": "모두가 뜻을 모은",
  "as anyone would": "누구라도 그럴 만하게",
  "at the very end": "아주 마지막의",
  "beat on price": "값으로 이기다",
  "beyond the violet end": "보라 끝을 넘어선",
  "college learner": "대학에서 배우는 사람",
  "deepest of all": "가장 깊은 데 있는",
  "draw a line under": "~ 아래에 선을 긋다",
  "drawing no one": "아무도 끌지 못하는",
  "earning below one's worth": "값어치보다 덜 버는",
  "eat away at": "조금씩 깎아 먹다",
  "final of all": "맨 끝에 오는",
  "fixed for good": "아주 굳어 버린",
  "for good reason": "그럴 까닭이 있어서",
  "going on and on": "줄곧 이어지는",
  "going one's own way": "제 길을 가는",
  "in a dead faint": "깊이 까무러친",
  "knocked out cold": "까무러쳐 쓰러진",
  "leaving no doubt": "의문을 남기지 않는",
  "live through": "견디며 지나다",
  "lying beneath the surface": "겉 아래에 깔린",
  "mark beneath the words": "글자 밑에 표를 하다",
  "never coming to a stop": "멈추는 일이 없는",
  "no wonder": "놀랄 일이 아니게",
  "not aware of anything": "아무것도 알아채지 못하는",
  "not doing as others do": "남들 하는 대로 하지 않는",
  "not like one's usual self": "여느 때의 자기와 다른",
  "of invisible short rays": "눈에 안 보이는 짧은 빛의",
  "of one mind throughout": "처음부터 끝까지 한마음인",
  "of the burning light": "살을 태우는 빛의",
  "offer for less": "더 적은 돈에 내놓다",
  "one reading for a first degree": "첫 학위를 향해 배우는 이",
  "open to one reading only": "한 가지로만 읽히는",
  "out of keeping with one's ways": "제 방식에 어울리지 않는",
  "paid too little": "너무 적게 받는",
  "plain to look at": "보기에 수수한",
  "poorly rewarded": "보답이 초라한",
  "present in every place": "어느 자리에나 있는",
  "rule a line below": "밑으로 줄을 대다",
  "sell cheaper than": "~보다 싸게 팔다",
  "staying just as it is": "그대로 머무는",
  "student not yet graduated": "아직 졸업하지 않은 학생",
  "that cannot be altered": "고칠 수 없는",
  "turning up all over": "곳곳에서 나타나는",
  "unlike how one normally is": "보통의 모습과 딴판인",
  "weaken from below": "아래에서부터 무르게 하다",
  "with not one against": "반대가 하나도 없는",
  "without a break": "쉬는 틈이 없는",
  "without charm": "끌리는 데가 없는"
});
