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
  { word:"undeniable", exams:["공무원"], pron:"언디나이어블", pos:"adj", level:"C1", meanings:["부인할 수 없는","명백한"], syn:["indisputable","unquestionable","irrefutable"], ant:["doubtful"], ex:[{ s:"Some things are {{}}: climate change and shifting demographics.", f:"undeniable", ko:"기후 변화와 인구 변동 같은 것은 부인할 수 없다." }] },
  { word:"underestimate", exams:["공무원"], pron:"언더에스티메이트", pos:"v", level:"B2", meanings:["과소평가하다"], syn:["undervalue","belittle","discount"], ant:["overestimate"], ex:[{ s:"Officials tend to {{}} the scale of the troubles.", f:"underestimate", ko:"관계자들은 문제의 규모를 과소평가하는 경향이 있다." }] },
  { word:"underline", exams:["공무원"], pron:"언더라인", pos:"v", level:"B2", meanings:["강조하다","밑줄을 긋다"], syn:["emphasize","stress","highlight"], ex:[{ s:"The report {{}} the need for reform.", f:"underlines", ko:"그 보고서는 개혁의 필요성을 강조한다." }] },
  { word:"unequivocally", exams:["공무원"], pron:"언이퀴버컬리", pos:"adv", level:"C2", meanings:["명백하게","분명히"], syn:["clearly","definitely","categorically"], ant:["ambiguously"], ex:[{ s:"Life tells them {{}} how capable they really are.", f:"unequivocally", ko:"삶은 그들이 얼마나 유능한지 분명하게 알려 준다." }] },
  { word:"unravel", exams:["공무원"], pron:"언래블", pos:"v", level:"C1", meanings:["풀다","해결하다"], syn:["solve","untangle","decipher"], ant:["complicate"], ex:[{ s:"Detectives tried to {{}} the mystery of the disappearance.", f:"unravel", ko:"형사들은 실종의 미스터리를 풀려고 애썼다." }] },
  { word:"unruly", exams:["공무원"], pron:"언룰리", pos:"adj", level:"C1", meanings:["다루기 힘든","제멋대로인"], syn:["disorderly","rowdy","unmanageable"], ant:["obedient"], ex:[{ s:"The novel is about the vexed parents of an {{}} teenager.", f:"unruly", ko:"그 소설은 제멋대로인 십대의 골치 아픈 부모에 관한 것이다." }] },
  { word:"universally", exams:["공무원"], pron:"유니버설리", pos:"adv", level:"C1", meanings:["보편적으로","널리"], syn:["widely","generally","commonly"], ex:[{ s:"A passport is a {{}} accepted document.", f:"universally", ko:"여권은 보편적으로 인정되는 문서다." }] },
  { word:"upgrade", exams:["공무원"], pron:"업그레이드", pos:"v", level:"B2", meanings:["향상시키다","개선하다"], syn:["improve","enhance","boost"], ant:["downgrade"], ex:[{ s:"We assess and {{}} our services.", f:"upgrade", ko:"우리는 서비스를 평가하고 개선한다." }] },
  { word:"uncertain", exams:["공무원"], pron:"언서튼", pos:"adj", level:"B2", meanings:["불확실한"], syn:["unsure","doubtful","unpredictable"], ant:["certain"], ex:[{ s:"The work is risky and {{}}.", f:"uncertain", ko:"그 일은 위험하고 불확실하다." }] },
  { word:"uniform", exams:["공무원"], pron:"유니폼", pos:"n", level:"B1", meanings:["제복","유니폼"], syn:["outfit","attire","costume"], ex:[{ s:"We provide guiding resources and a {{}}.", f:"uniform", ko:"우리는 안내 자료와 제복을 제공한다." }] },
  { word:"unexpected", exams:["공무원"], pron:"언익스펙티드", pos:"adj", level:"B1", meanings:["예상치 못한","뜻밖의"], syn:["unforeseen","surprising","sudden"], ant:["expected","predictable"], ex:[{ s:"Life is full of {{}} happy moments.", f:"unexpected", ko:"인생은 예상치 못한 행복한 순간들로 가득하다." }] },
  { word:"unlike", exams:["공무원"], pron:"언라이크", pos:"phr", level:"B1", meanings:["~와 달리","~와 다른"], syn:["contrary to","in contrast with","different from"] },
  { word:"unmanned", exams:["공무원"], pron:"언맨드", pos:"adj", level:"B2", meanings:["무인의","사람이 타지 않은"], syn:["uncrewed","pilotless","automated"], ant:["manned"], ex:[{ s:"AUVs are {{}} underwater robots.", f:"unmanned", ko:"AUV는 무인 수중 로봇이다." }] },
  { word:"unnerving", exams:["공무원"], pron:"언너빙", pos:"adj", level:"C1", meanings:["불안하게 만드는","초조하게 하는"], syn:["disturbing","unsettling","disconcerting"], ex:[{ s:"Not knowing how a decision is made is {{}}.", f:"unnerving", ko:"결정이 어떻게 내려지는지 모른다는 것은 사람을 불안하게 만든다." }] },
  { word:"utilize", exams:["공무원"], pron:"유털라이즈", pos:"v", level:"B2", meanings:["활용하다","이용하다"], syn:["use","employ","harness"], ex:[{ s:"We must {{}} renewable energy to generate electricity.", f:"utilize", ko:"우리는 전기를 생산하기 위해 재생 가능 에너지를 활용해야 한다." }] },
  { word:"unemotional", exams:["공무원"], pron:"언이모셔널", pos:"adj", level:"C1", meanings:["감정을 드러내지 않는","냉정한"], syn:["detached","impassive","stoic"], ant:["emotional"], ex:[{ s:"Critical thinking may seem cold and {{}}, but it can stir strong feelings.", f:"unemotional", ko:"비판적 사고는 차갑고 감정 없는 것처럼 보이지만 강한 감정을 불러일으킬 수 있다." }] },
  { word:"upcoming", exams:["공무원"], pron:"업커밍", pos:"adj", level:"B2", meanings:["다가오는","곧 있을"], syn:["forthcoming","impending","coming"], ex:[{ s:"We need more chairs for our {{}} event.", f:"upcoming", ko:"곧 있을 행사를 위해 의자가 더 필요하다." }] },

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
  { word:"ubiquitous", exams:["공무원"], pron:"유비쿼터스", pos:"adj", level:"C1", meanings:["어디에나 존재하는"],
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
  { word:"underlying", exams:["공무원"], pron:"언덜라잉", pos:"adj", level:"B2", meanings:["밑바탕에 있는"],
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
  { word:"underscore", exams:["공무원"], pron:"언더스코어", pos:"v", level:"C1", meanings:["밑줄을 긋다"],
    syn:["draw a line under","mark beneath the words","rule a line below"],
    ex:[{ s:"Please {{}} the title.", f:"underscore", ko:"제목에 밑줄을 그어 주세요." }] },

  /* 교재 두 갈래('당연히, 이해할 수 있게') 가 같은 말이어서 하나로 줄였다. */
  { word:"understandably", pron:"언더스탠더블리", pos:"adv", level:"B2", meanings:["당연히"],
    syn:["as anyone would","for good reason","no wonder"],
    ex:[{ s:"She was {{}} upset.", f:"understandably", ko:"그녀는 당연히 속상해했다." }] },

  /* ══ 12차 · undertake ~ unique (20단어) ══════════════════════════════════
     승격 9 · 신규 11

     이 챕터는 사전값을 글자까지 지킨 덕에 거의 다 저절로 갈렸다. '착수함'·
     '확실함'·'명백함'·'무관심함' 덩어리가 통째로 자동 배제된다.
       undertake     ← commence·embark·launch·initiate 넷이 '착수하다' 를 쓴다
       undervalue    ← belittle(과소평가하다, 얕보다) 와 글자가 같다
       undoubted     ← definite(확실한, 명확한) 와 '확실한' 이 같다 · certain 은 레벨 차 2
       undue         ← excessive(지나친, 과도한) 와 **두 갈래가 통째로 같다**
       unearth       ← excavate(발굴하다, 출토하다) 와 '발굴하다' 가 같다
       unequivocal   ← indubitable(의심의 여지가 없는, 명백한) 와 '명백한' 이 같다
       uneven        ← bumpy(울퉁불퉁한) 와 글자가 같다
       uninterested  ← indifferent(무관심한) 와 **글자가 통째로 같다**
       uninterrupted ← continuous(계속되는, 끊이지 않는) 와 '계속되는' 이 같다
       unique        ← distinctive(독특한, 특색 있는) 와 '독특한' 이 같다

     손본 자리가 둘이다.

       ★ unease  불안 → **불안, 불안정한 마음**
         instability(불안정 · B2/n) 와 품사·레벨이 같다. '불안' 은 '불안정' 의
         앞 두 글자인데, 자동 배제는 **양쪽이 세 글자 이상**일 때만 품기
         검사를 하므로 두 글자짜리 '불안' 은 빠져나간다. 한국어에서 '정치 불안'
         과 '정치적 불안정' 이 같은 말로 쓰이니, 한→영에서 '불안' 을 물으면
         instability 도 맞는 답이 되어 버린다.
         둘째 갈래 '불안정한 마음' 이 '불안정' 을 글자째 품게 해서 막았다.
         첫 갈래 '불안' 은 그대로 두었으므로 anxiety(불안, 염려)·misgiving
         (의심, 불안) 과 맞물리는 것도 살아 있다.
         ★ 교재의 '불안, 우려' 는 쓸 수 없었다. anxiety 의 유의어 목록 안에
         apprehension(불안, 우려) 이 함께 서 있어 설명 두 줄이 똑같아진다.
         ★ 참조 넷(anxiety·concern·discomfort·nervousness) 의 화면이 한 줄씩
         늘어난다.

       ★ unintended 의 유의어에 accidental 을 넣었다
         accidental(우연한, 고의가 아닌 · B2/adj) 의 둘째 갈래가 '의도하지
         않은' 과 사실상 같은 말인데 글자가 달라 자동 배제가 안 된다. 유의어로
         등록하면 앱이 둘을 서로의 오답으로 쓰지 않는다. accidental 자신의
         화면은 바뀌지 않는다.

     intentional(의도적인, 고의의) 과 unintended 는 뜻이 정반대여서 한 문제에
     같이 뜰 수 있다. 앱이 반의어를 일부러 한 개 넣어 뜻의 경계를 묻는 설계다. */

  /* commence·embark·launch·initiate 넷이 '착수하다' 를 써서 모두 맞물려 배제된다. */
  { word:"undertake", pron:"언더테이크", pos:"v", level:"B2", meanings:["착수하다","책임을 떠맡다"],
    syn:["embark","take on a task","set about doing"],
    ex:[{ s:"They will {{}} the repairs next week.", f:"undertake", ko:"그들은 다음 주에 보수에 착수할 것이다." }] },

  /* 승격 ⑦ — 사전 단일값 유지(참조 belittle). '경시하다' 는 downplay(경시하다,
     축소하다) 자리다. overestimate(과대평가하다) 와는 뜻이 정반대여서 한 문제에
     같이 뜰 수 있다 — 반의어를 일부러 넣는 설계다. */
  { word:"undervalue", pron:"언더밸류", pos:"v", level:"C1", meanings:["과소평가하다"],
    syn:["belittle","rate too low","think too little of"],
    ex:[{ s:"Do not {{}} her work.", f:"undervalue", ko:"그녀의 일을 과소평가하지 마라." }] },

  /* 승격 ⑧ — 사전 단일값 유지(참조 aquatic). 부사 갈래는 버렸다. */
  { word:"underwater", exams:["공무원"], pron:"언더워터", pos:"adj", level:"B2", meanings:["수중의"],
    syn:["aquatic","below the surface","under the waves"],
    ex:[{ s:"They filmed an {{}} cave.", f:"underwater", ko:"그들은 수중 동굴을 찍었다." }] },

  /* 승격 ⑨ — 사전 단일값 유지(참조 immature). 교재의 '개발되지 않은' 은 버렸다. */
  { word:"undeveloped", pron:"언디벨럽트", pos:"adj", level:"B2", meanings:["발달하지 않은"],
    syn:["immature","not grown out","still at an early stage"],
    ex:[{ s:"The wings are still {{}}.", f:"undeveloped", ko:"그 날개는 아직 발달하지 않았다." }] },

  /* definite(확실한, 명확한 · B2/adj) 와 '확실한' 이 맞물려 배제된다. certain 은
     레벨 차가 2다. indubitable(의심의 여지가 없는, 명백한 · C2) 과는 첫 뜻이
     '확실한' 과 '의심의 여지가 없는' 이어서 화면에서 갈린다. */
  { word:"undoubted", pron:"언다우티드", pos:"adj", level:"C1", meanings:["확실한","의심할 바 없는"],
    syn:["beyond question","not open to doubt","plain for all to see"],
    ex:[{ s:"She has {{}} skill.", f:"undoubted", ko:"그녀는 확실한 솜씨를 지녔다." }] },

  /* excessive(지나친, 과도한 · B2/adj) 와 두 갈래가 통째로 같다 — 갈라 쓸 수가
     없어 일부러 글자를 맞췄다. 그러면 자동으로 서로의 오답에서 빠진다. */
  { word:"undue", pron:"언듀", pos:"adj", level:"C1", meanings:["지나친","과도한"],
    syn:["excessive","more than is right","beyond what is called for"],
    ex:[{ s:"They took {{}} risks.", f:"undue", ko:"그들은 지나친 위험을 감수했다." }] },

  /* 승격 ⑩ — 사전 글자 유지. 참조 discover(D)·excavate(E) 두 곳의 화면은
     바뀌지 않는다. excavate(발굴하다, 출토하다) 와 '발굴하다' 가 맞물려 배제된다. */
  { word:"unearth", exams:["공무원"], pron:"언어스", pos:"v", level:"C1", meanings:["발굴하다","찾아내다"],
    syn:["excavate","dig out of the ground","bring up from hiding"],
    ex:[{ s:"They hope to {{}} more coins.", f:"unearth", ko:"그들은 동전을 더 발굴하기를 바란다." }] },

  /* 승격 ⑪ — ★ 사전값 '불안' 에 '불안정한 마음' 을 더했다. instability(불안정 ·
     B2/n) 와 품사·레벨이 같은데, 자동 배제의 품기 검사는 양쪽이 세 글자 이상일
     때만 돌아서 두 글자 '불안' 은 빠져나간다. 둘째 갈래가 '불안정' 을 글자째
     품게 해 막았다. '불안' 은 그대로라 anxiety(불안, 염려)·misgiving(의심,
     불안) 과 맞물리는 것도 살아 있다.
     ★ 교재의 '불안, 우려' 는 쓸 수 없었다 — anxiety 의 유의어 목록 안에
     apprehension(불안, 우려) 이 함께 서 있어 설명 두 줄이 똑같아진다.
     ★ 참조 넷(anxiety·concern·discomfort·nervousness) 의 화면이 한 줄씩 늘어난다. */
  { word:"unease", pron:"언이즈", pos:"n", level:"B2", meanings:["불안","불안정한 마음"],
    syn:["anxiety","a troubled feeling","want of calm"],
    ex:[{ s:"A sense of {{}} filled the room.", f:"unease", ko:"불안한 느낌이 그 방을 채웠다." }] },

  { word:"unemployment", pron:"언임플로이먼트", pos:"n", level:"B1", meanings:["실업","실직"],
    syn:["being out of work","lack of jobs","state of having no post"],
    ex:[{ s:"{{}} fell again this year.", f:"unemployment", ko:"실업이 올해 또 줄었다." }] },

  /* indubitable(의심의 여지가 없는, 명백한 · C2/adj) 와 '명백한' 이 맞물려
     배제된다. apparent·obvious·plain 은 레벨 차가 2~3이다. 교재의 '분명한' 은
     apparent(명백한, 분명한) 자리라 버렸다. */
  { word:"unequivocal", pron:"언이퀴버컬", pos:"adj", level:"C2", meanings:["명백한","에두르지 않는"],
    syn:["leaving no room for doubt","said straight out","without hedging"],
    ex:[{ s:"His answer was {{}}.", f:"unequivocal", ko:"그의 대답은 명백했다." }] },

  /* 승격 ⑫ — 사전 글자 유지. 참조 bumpy(B)·inconsistent(I) 두 곳의 화면은
     바뀌지 않는다. bumpy(울퉁불퉁한) 와 글자가 맞물려 배제된다. 교재의
     '불공평한' 은 버렸다. */
  { word:"uneven", pron:"언이븐", pos:"adj", level:"B2", meanings:["울퉁불퉁한","고르지 않은"],
    syn:["bumpy","inconsistent","not level"],
    ex:[{ s:"The path was rough and {{}}.", f:"uneven", ko:"그 길은 거칠고 울퉁불퉁했다." }] },

  /* 승격 ⑬ — 사전 글자 유지(참조 alien). */
  { word:"unfamiliar", pron:"언퍼밀리어", pos:"adj", level:"B1", meanings:["낯선","익숙하지 않은"],
    syn:["alien","new to one","not known before"],
    ex:[{ s:"The street felt {{}} at night.", f:"unfamiliar", ko:"그 거리는 밤에 낯설게 느껴졌다." }] },

  { word:"unforgettable", pron:"언퍼게터블", pos:"adj", level:"B1", meanings:["잊을 수 없는"],
    syn:["staying in the mind for ever","impossible to put out of mind","never to be lost from memory"],
    ex:[{ s:"It was an {{}} night.", f:"unforgettable", ko:"그것은 잊을 수 없는 밤이었다." }] },

  { word:"unfortunately", pron:"언포처너틀리", pos:"adv", level:"B1", meanings:["불행히도"],
    syn:["sad to say","as bad luck would have it","regrettably"],
    ex:[{ s:"{{}}, the train was full.", f:"unfortunately", ko:"불행히도 그 기차는 만원이었다." }] },

  /* 아래 uninterrupted(계속되는, 끊기지 않는) 와 갈랐다 — 이쪽은 '막는 것' 에,
     그쪽은 '끊김' 에 무게를 두었다. */
  { word:"unhindered", pron:"언힌더드", pos:"adj", level:"C1", meanings:["막는 것이 없는"],
    syn:["with nothing in the way","free to go on","meeting no block"],
    ex:[{ s:"The river ran {{}} to the sea.", f:"unhindered", ko:"그 강은 막는 것 없이 바다로 흘렀다." }] },

  /* 승격 ⑭ — 사전 단일값 유지(참조 anonymous). 교재의 '정체불명의' 는 버렸다. */
  { word:"unidentified", pron:"언아이덴티파이드", pos:"adj", level:"B2", meanings:["미확인의"],
    syn:["anonymous","of unknown name","not yet named"],
    ex:[{ s:"An {{}} ship lay offshore.", f:"unidentified", ko:"미확인 배 한 척이 앞바다에 있었다." }] },

  /* ★ accidental(우연한, 고의가 아닌 · B2/adj) 을 유의어로 넣었다. 그쪽 둘째
     갈래 '고의가 아닌' 이 이 낱말과 사실상 같은 말인데 글자가 달라 자동
     배제가 안 되기 때문이다. accidental 자신의 화면은 바뀌지 않는다.
     intentional(의도적인, 고의의) 과는 뜻이 정반대여서 한 문제에 같이 뜰 수
     있다 — 반의어를 일부러 넣는 설계다. */
  { word:"unintended", pron:"언인텐디드", pos:"adj", level:"B2", meanings:["의도하지 않은"],
    syn:["accidental","not meant to happen","without any such aim"],
    ex:[{ s:"The change had {{}} results.", f:"unintended", ko:"그 변화는 의도하지 않은 결과를 낳았다." }] },

  /* ★ 교재의 '관계가 없는' 은 unrelated 의 뜻이어서 버렸다.
     indifferent(무관심한 · B2/adj) 와 글자가 통째로 같아 자동 배제된다. */
  { word:"uninterested", pron:"언인터리스티드", pos:"adj", level:"B2", meanings:["무관심한"],
    syn:["indifferent","caring nothing for it","with no wish to know"],
    ex:[{ s:"He seemed quite {{}}.", f:"uninterested", ko:"그는 꽤 무관심해 보였다." }] },

  /* continuous(계속되는, 끊이지 않는 · B1/adj) 와 '계속되는' 이 맞물려 배제된다.
     위 unhindered(막는 것이 없는) 와 갈랐다. */
  { word:"uninterrupted", pron:"언인터럽티드", pos:"adj", level:"B2", meanings:["계속되는","끊기지 않는"],
    syn:["continuous","going on without a stop","never broken into"],
    ex:[{ s:"She had six hours of {{}} sleep.", f:"uninterrupted", ko:"그녀는 여섯 시간을 계속되는 잠으로 보냈다." }] },

  /* 승격 ⑮ — 사전 글자 유지(참조 distinctive). */
  { word:"unique", pron:"유니크", pos:"adj", level:"B1", meanings:["독특한","유일한"],
    syn:["distinctive","the only one of its kind","like no other"],
    ex:[{ s:"Each print is {{}}.", f:"unique", ko:"각 판화는 독특하다." }] },

  /* ══ 13차 · unite ~ up to a point (20단어) ═══════════════════════════════
     승격 6 · 신규 14

     이 챕터가 U 세트에서 가장 빽빽했다. '변함없음'·'견줄 데 없음'·'의심할 수
     없음' 세 덩어리가 한자리에 모이고, 그중 여럿이 **글자만 살짝 달라** 자동
     배제를 빠져나간다. 네 자리를 유의어로 묶고 한 자리는 뜻 순서를 바꿨다.

       ★ untold  헤아릴 수 없는 → **막대한, 헤아릴 수 없는**
         measurable(헤아릴 수 있는 · B2/adj) 와 레벨 차가 1이다. '없는' 과
         '있는' 한 글자만 다르니 영→한 선택지에 나란히 놓이면 눈으로 갈리지
         않는다. '막대한' 을 앞세웠다. 사전값은 둘째 갈래로 살아 있어
         immeasurable(헤아릴 수 없는, 측정할 수 없는 · C1/adj)·priceless·
         invaluable 과 맞물리는 것도 그대로다. enormous·immense 의 '막대한' 과도
         새로 맞물린다. ★ 참조 innumerable(I) 의 화면이 한 줄 늘어난다.

       ★ unquestioned 의 유의어에 undoubted·indubitable 을 넣었다
         셋이 사실상 같은 뜻인데 글자가 조금씩 달라 하나도 배제되지 않았다.
           unquestioned  의심할 수 없는
           undoubted     확실한, 의심할 바 없는   ← 앞 챕터
           indubitable   의심의 여지가 없는, 명백한
         '의심할 수 없는' 과 '의심할 바 없는' 은 한 글자만 다르다. 한→영에서
         어느 쪽을 물어도 정답이 둘이 된다. 유의어로 묶어 막았다.

       ★ unswerving 의 유의어에 unwavering 을 넣었다
         같은 챕터에 있는데 뜻이 사실상 같다('변함없는' / '확고한'). 둘 다
         steadfast(확고한, 변함없는) 와는 글자가 맞물려 배제되는데 서로는
         빠져나갔다. 유의어로 묶었다.

       ★ unite 의 유의어에 integrate 를 넣었다
         incorporate(통합하다, 포함시키다)·consolidate(강화하다, 통합하다) 는
         '통합하다' 가 글자째 같아 자동 배제되는데, integrate 는 '통합**시키다**'
         라서 빠져나간다. 뜻은 거의 같다. 유의어로 묶었다.

       ★ unsustainable 의 반의어에 sustainable 을 넣었다 — 자료를 제대로 채운
         것이다. 앱은 반의어를 오답에서 빼지 않고 오히려 일부러 한 개 넣어
         뜻의 경계를 묻는다.

     나머지는 손대지 않아도 자동으로 갈린다.
       unlawful      ← illegal(불법의, 위법의) 와 '위법의' 가 같다
       unlock        ← reveal·display 가 '드러내다' 를 쓴다
       unwavering    ← steadfast·resolute 가 '확고한' 을 쓴다
       unswerving    ← steadfast·invariable 이 '변함없는' 을 쓴다
       unity·universal·unpredictable ← 참조와 유의어 관계다

     unparalleled(비할 데 없는) 와 unrivaled(경쟁자가 없는) 는 뜻이 가까워
     한 챕터에 두기가 조심스러웠다. 앞쪽은 '견줄 상대' 에, 뒤쪽은 '겨루는 자'
     에 무게를 두어 글자로 확실히 갈랐다. */

  /* 승격 ⑯ — 사전 단일값 유지. 참조 세 곳(combine·cooperate 유의어,
     alienate 반의어) 의 화면은 바뀌지 않는다. '결합시키다' 는 combine 자리다.
     ★ integrate(융합하다, 통합시키다) 를 유의어로 넣었다 — '통합시키다' 는
     '통합하다' 와 글자가 달라 자동 배제를 빠져나가기 때문이다.
     incorporate·consolidate 는 '통합하다' 가 같아 저절로 배제된다. */
  { word:"unite", pron:"유나이트", pos:"v", level:"B1", meanings:["통합하다"],
    syn:["combine","integrate","join into one"], ant:["alienate"],
    ex:[{ s:"The war helped to {{}} the clans.", f:"unite", ko:"그 전쟁은 씨족들을 통합하는 데 도움이 됐다." }] },

  /* 승격 ⑰ — 사전 글자 유지. 참조 cohesion(C)·division(D) 두 곳의 화면은
     바뀌지 않는다. 교재 세 갈래 중 하나를 버렸다. */
  { word:"unity", pron:"유너티", pos:"n", level:"B2", meanings:["통합","단결"],
    syn:["cohesion","being at one","holding together"], ant:["division"],
    ex:[{ s:"The speech called for {{}}.", f:"unity", ko:"그 연설은 단결을 호소했다." }] },

  /* 승격 ⑱ — 사전 단일값 유지(참조 generic). 교재의 '전 세계의, 우주의' 는
     버렸다. */
  { word:"universal", pron:"유니버설", pos:"adj", level:"B1", meanings:["보편적인"],
    syn:["generic","true of all","holding everywhere"],
    ex:[{ s:"Kindness is a {{}} value.", f:"universal", ko:"친절은 보편적인 가치다." }] },

  { word:"unjust", pron:"언저스트", pos:"adj", level:"B2", meanings:["부당한"],
    syn:["not fair","against what is right","wrongly harsh"],
    ex:[{ s:"The fine seemed {{}}.", f:"unjust", ko:"그 벌금은 부당해 보였다." }] },

  /* 승격 ⑲ — 사전 단일값 유지(참조 illegal). illegal(불법의, 위법의) 와
     '위법의' 가 맞물려 배제된다. */
  { word:"unlawful", pron:"언로풀", pos:"adj", level:"B2", meanings:["위법의"],
    syn:["illegal","against the law","not allowed by law"],
    ex:[{ s:"The search was ruled {{}}.", f:"unlawful", ko:"그 수색은 위법으로 판정됐다." }] },

  /* 교재는 열일곱 자짜리 설명이었다. 뜻만 남겼다. */
  { word:"unlearn", pron:"언런", pos:"v", level:"C2", meanings:["배운 것을 잊다"],
    syn:["put aside what one was taught","drop an old habit of mind","let go of learning"],
    ex:[{ s:"Players must {{}} bad form first.", f:"unlearn", ko:"선수들은 먼저 나쁜 자세를 잊어야 한다." }] },

  /* reveal(드러내다, 밝히다)·display(전시하다, 드러내다) 와 '드러내다' 가
     맞물려 배제된다. */
  { word:"unlock", pron:"언락", pos:"v", level:"B2", meanings:["열다","드러내다"],
    syn:["reveal","open with a key","let out what was shut in"],
    ex:[{ s:"One key can {{}} both doors.", f:"unlock", ko:"열쇠 하나가 두 문을 다 열 수 있다." }] },

  { word:"unnoticeably", pron:"언노티서블리", pos:"adv", level:"C2", meanings:["눈에 띄지 않게"],
    syn:["without being seen","so as to draw no eye","too slightly to be marked"],
    ex:[{ s:"Prices crept up {{}}.", f:"unnoticeably", ko:"값이 눈에 띄지 않게 슬금슬금 올랐다." }] },

  /* 아래 unrivaled(경쟁자가 없는) 와 갈랐다 — 이쪽은 '견줄 상대' 에 무게를
     두었다. */
  { word:"unparalleled", pron:"언패럴렐드", pos:"adj", level:"C1", meanings:["비할 데 없는"],
    syn:["with no equal","never matched before","standing quite alone"],
    ex:[{ s:"The city grew at an {{}} pace.", f:"unparalleled", ko:"그 도시는 비할 데 없는 속도로 커졌다." }] },

  /* 승격 ⑳ — 사전 단일값 유지(참조 erratic). '예측할 수 없는' 은 erratic 자리다. */
  { word:"unpredictable", pron:"언프리딕터블", pos:"adj", level:"B2", meanings:["종잡을 수 없는"],
    syn:["erratic","hard to foresee","changing without warning"],
    ex:[{ s:"The weather here is {{}}.", f:"unpredictable", ko:"이곳 날씨는 종잡을 수 없다." }] },

  /* ★ undoubted(확실한, 의심할 바 없는)·indubitable(의심의 여지가 없는,
     명백한) 을 유의어로 넣었다. 셋이 사실상 같은 뜻인데 '의심할 수 없는' 과
     '의심할 바 없는' 처럼 한 글자만 달라 하나도 자동 배제되지 않았다.
     dubious(의심스러운)·suspicious(의심하는) 와는 뜻이 정반대라 한 문제에
     같이 뜰 수 있다 — 반의어를 일부러 넣는 설계다. */
  { word:"unquestioned", pron:"언퀘스천드", pos:"adj", level:"C1", meanings:["의심할 수 없는"],
    syn:["undoubted","indubitable","not to be doubted"],
    ex:[{ s:"Her skill is {{}}.", f:"unquestioned", ko:"그녀의 솜씨는 의심할 수 없다." }] },

  /* 위 unparalleled(비할 데 없는) 와 갈랐다 — 이쪽은 '겨루는 자' 에 무게를
     두었다. */
  { word:"unrivaled", pron:"언라이벌드", pos:"adj", level:"C1", meanings:["경쟁자가 없는"],
    syn:["with no one to match it","having no contender","at the top alone"],
    ex:[{ s:"The firm is {{}} in that field.", f:"unrivaled", ko:"그 회사는 그 분야에서 경쟁자가 없다." }] },

  { word:"unroll", pron:"언롤", pos:"v", level:"B2", meanings:["펼치다"],
    syn:["spread out flat","open out a roll","lay open"],
    ex:[{ s:"They began to {{}} the map.", f:"unroll", ko:"그들은 지도를 펼치기 시작했다." }] },

  /* 교재의 '지속불가능한' 을 풀어 썼다. ★ 반의어에 sustainable 을 넣었다 —
     앱은 반의어를 오답에서 빼지 않고 일부러 한 개 넣어 뜻의 경계를 묻는다. */
  { word:"unsustainable", pron:"언서스테이너블", pos:"adj", level:"B2", meanings:["지속할 수 없는"],
    syn:["not able to keep going","bound to break down","impossible to maintain"], ant:["sustainable"],
    ex:[{ s:"That rate of use is {{}}.", f:"unsustainable", ko:"그 정도의 사용량은 지속할 수 없다." }] },

  /* ★ 교재의 '완고한' 은 stubborn(고집 센 · S) 의 뜻이어서 버렸다.
     steadfast(확고한, 변함없는)·invariable(불변의, 변함없는) 과 '변함없는' 이
     맞물려 배제된다. ★ 같은 챕터 unwavering 은 뜻이 사실상 같은데 글자가
     달라 빠져나가므로 유의어로 묶었다. */
  { word:"unswerving", pron:"언스워빙", pos:"adj", level:"C2", meanings:["변함없는","약해지지 않는"],
    syn:["unwavering","never turning aside","holding the same course"],
    ex:[{ s:"He showed {{}} loyalty.", f:"unswerving", ko:"그는 변함없는 충성을 보였다." }] },

  /* 승격 ㉑ — ★ 첫 뜻을 '막대한' 으로 올렸다. 사전값 '헤아릴 수 없는' 혼자로는
     measurable(헤아릴 수 있는 · B2/adj) 과 '없는/있는' 한 글자로만 갈린다.
     사전값은 둘째 갈래로 살아 있어 immeasurable·priceless·invaluable 과
     맞물리는 것이 그대로이고, enormous·immense 의 '막대한' 과도 새로 맞물린다.
     ★ 참조 innumerable(I) 의 화면이 한 줄 늘어난다. 교재의 '밝혀지지 않은' 은
     버렸다. */
  { word:"untold", pron:"언톨드", pos:"adj", level:"C1", meanings:["막대한","헤아릴 수 없는"],
    syn:["innumerable","too many to count","past all reckoning"],
    ex:[{ s:"The flood did {{}} harm.", f:"untold", ko:"그 홍수는 막대한 피해를 냈다." }] },

  { word:"unveil", pron:"언베일", pos:"v", level:"C1", meanings:["덮개를 벗기다","발표하다"],
    syn:["take the cover off","show for the first time","bring into open view"],
    ex:[{ s:"They will {{}} the statue at noon.", f:"unveil", ko:"그들은 정오에 그 조상의 덮개를 벗길 것이다." }] },

  /* steadfast(확고한, 변함없는)·resolute(단호한, 확고한) 와 '확고한' 이 맞물려
     배제된다. 위 unswerving 이 이 낱말을 유의어로 등록해 두어 둘도 갈린다. */
  { word:"unwavering", pron:"언웨이버링", pos:"adj", level:"C1", meanings:["확고한"],
    syn:["steadfast","not shaken at all","firm throughout"],
    ex:[{ s:"She kept an {{}} gaze.", f:"unwavering", ko:"그녀는 확고한 시선을 지켰다." }] },

  /* 교재의 '건강이 좋아진' 은 뜻이 아니라 설명이라 걷었다. */
  { word:"up and about", pron:"업 앤드 어바웃", pos:"phr", level:"C1", meanings:["병상에서 일어난"],
    syn:["out of one's sick bed","on one's feet again","well enough to move"] },

  /* T 세트의 to some degree(어느 정도)·to a large extent(상당히, 크게) 와 갈랐다. */
  { word:"up to a point", pron:"업 투 어 포인트", pos:"phr", level:"B2", meanings:["어느 선까지는"],
    syn:["so far and no further","within limits","to a certain line"] },

  /* ══ 14차 · upbringing ~ utility (20단어) — U 세트 마지막, A~U 마지막 ═══════
     승격 8 · 신규 12

     이 챕터의 함정은 모두 **두 글자짜리 뜻**이었다. 자동 배제의 품기 검사는
     양쪽이 세 글자 이상일 때만 돌아간다. 그래서 '시의'·'기구'·'공익' 처럼 두
     글자인 말은 더 긴 뜻 안에 통째로 들어가 있어도 걸리지 않는다. 넷을 고쳤다.

       ★ uppermost  가장 높은, 맨 위의 → **맨 위의, 가장 높은**
         '높은' 을 쓰는 상대가 다섯이다 — elevated(높은, 고상한)·lofty(아주
         높은)·notorious(악명 높은)·high-pitched(음조가 높은)·renowned(명성
         높은). 게다가 '가장' 을 쓰는 cardinal·foremost(가장 중요한)·salient
         (가장 두드러진)·marginal(가장자리의) 도 있다. 어느 쪽으로도 안 갈린다.
         '맨 위의' 를 앞세웠다. 덤으로 둘째 갈래 '가장 높은' 이 elevated 의
         '높은' 을 품어 그쪽은 자동 배제까지 된다.

       ★ utensil  기구, 용구 → **용구, 기구**
         appliance((가정용) 기구 · B2/n) 와 품사·레벨이 같다. '기구' 는 두
         글자라 '(가정용) 기구' 안에 들어 있어도 자동 배제가 안 된다. '용구' 를
         앞세웠다. '기구' 는 둘째 갈래로 남아 device(장치, 기구)·apparatus
         (장치, 기구) 와는 계속 맞물린다. ★ 참조 instrument(I) 의 화면에서
         두 갈래의 앞뒤가 바뀐다.

       ★ utility  공익사업, 유용성 → **유용성, 공익사업**
         common good(공익 · C1/n) 을 '공익사업' 이 통째로 품는데 '공익' 이 두
         글자라 빠져나간다. 수능에서도 utility 는 '유용성' 쪽이 먼저다.

       ★ municipal  시의, 지방 자치의 → **지방 자치의, 시의** (M 세트를 손질)
         urban 의 뜻 '도시의' 가 '시의' 를 통째로 품는데 역시 두 글자라 안
         걸린다. 게다가 둘은 레벨 차가 1이고 **metropolitan 의 유의어 목록에
         나란히 서 있다**. urban 은 참조 metropolitan 이 있어 사전값을 지켜야
         하므로 municipal 쪽의 앞뒤를 바꿨다. ★ 참조 두 곳의 화면이 바뀐다.

     나머지는 손대지 않아도 자동으로 갈린다.
       uphold      ← advocate·subscribe·endorse 가 '지지하다' 를 쓴다
       upright     ← dishonest(부정직한) 가 '정직한' 을 품는다
       uprising    ← revolt(봉기)·rebellion(반란) 과 글자가 같다
       uproot      ← eradicate(근절하다, 뿌리째 뽑다) 와 **두 갈래가 통째로 같다**
       urge        ← impulse(충동, 자극) 와 '충동' 이 같다
       urgent      ← pressing(긴급한, 절박한) 와 두 갈래가 통째로 같다 · desperate 와 '절박한'
       utilitarian ← pragmatic(현실적인, 실리를 따지는) 와 '실리를 따지는' 이 같다

     ★ urge 는 사전 첫 갈래만 세웠다(충동). 참조 셋(craving·impulse·instinct)
     이 모두 명사여서다. 교재의 '설득하다' 는 induce·convince 자리다.

     ★ useless 는 사전 쪽 붙여쓰기('쓸모없는') 를 따랐다. 교재는 '쓸모 없는'
     으로 띄어 썼는데, 참조 futile 의 화면을 지키려면 사전 글자가 맞다.

     upside down 은 교재의 '거꾸로' 를 버리고 '뒤집혀' 로 좁혔다 — '거꾸로' 는
     conversely(거꾸로, 반대로 · C1/adv) 자리다. */

  { word:"upbringing", pron:"업브링잉", pos:"n", level:"C1", meanings:["양육","가정 교육"],
    syn:["the way one is reared","training given at home","rearing of a child"],
    ex:[{ s:"She had a strict {{}}.", f:"upbringing", ko:"그녀는 엄격한 양육을 받았다." }] },

  /* 교재의 '혼란시키다' 는 turmoil(혼란, 소동)·disrupt 자리라 버렸다. */
  { word:"upheave", pron:"업히브", pos:"v", level:"C2", meanings:["들어 올리다"],
    syn:["heave up from below","push up in a mass","raise with force"],
    ex:[{ s:"Ice can {{}} the whole road.", f:"upheave", ko:"얼음이 길 전체를 들어 올릴 수 있다." }] },

  /* advocate(지지하다, 옹호하다)·subscribe·endorse 가 '지지하다' 를 써서 셋 다
     맞물려 배제된다. */
  { word:"uphold", exams:["공무원"], pron:"업홀드", pos:"v", level:"B2", meanings:["떠받치다","지지하다"],
    syn:["advocate","hold up from under","stand behind"],
    ex:[{ s:"The court will {{}} the ruling.", f:"uphold", ko:"법원은 그 판결을 지지할 것이다." }] },

  /* ★ 첫 뜻을 '맨 위의' 로 갈랐다. '가장 높은' 을 앞에 두면 elevated·lofty·
     notorious·high-pitched·renowned 의 '높은' 과도, cardinal·foremost·salient·
     marginal 의 '가장' 과도 눈으로 갈리지 않는다. 둘째 갈래로 남긴 '가장 높은'
     이 elevated 의 '높은' 을 품어 그쪽은 자동 배제까지 된다. 교재의 '최고의'
     는 superb·top-notch 자리다. */
  { word:"uppermost", pron:"어퍼모스트", pos:"adj", level:"C1", meanings:["맨 위의","가장 높은"],
    syn:["at the very top","highest of all","on top of everything"],
    ex:[{ s:"The {{}} shelf is empty.", f:"uppermost", ko:"맨 위 선반은 비어 있다." }] },

  /* 승격 ㉒ — 사전 글자 유지. 참조 ethical(E)·moral(M) 두 곳의 화면은 바뀌지
     않는다. dishonest(부정직한, 속이는) 가 '정직한' 을 품어 맞물려 배제된다.
     교재의 '똑바른, 꼿꼿한' 은 버렸다. */
  { word:"upright", pron:"업라이트", pos:"adj", level:"B2", meanings:["정직한","청렴한"],
    syn:["ethical","moral","straight in one's dealings"],
    ex:[{ s:"He was known as an {{}} judge.", f:"upright", ko:"그는 정직한 판사로 알려져 있었다." }] },

  /* revolt(봉기, 반기를 듦)·rebellion(반란, 반항) 과 글자가 맞물려 배제된다. */
  { word:"uprising", pron:"업라이징", pos:"n", level:"C1", meanings:["봉기","반란"],
    syn:["revolt","rising against rule","open revolt of the people"],
    ex:[{ s:"The {{}} began in the port.", f:"uprising", ko:"그 봉기는 항구에서 시작됐다." }] },

  /* eradicate(근절하다, 뿌리째 뽑다 · C1/v) 와 두 갈래가 통째로 같다 — 갈라
     쓸 수가 없어 일부러 글자를 맞췄다. 그러면 자동으로 서로의 오답에서 빠진다. */
  { word:"uproot", pron:"업루트", pos:"v", level:"C1", meanings:["근절하다","뿌리째 뽑다"],
    syn:["eradicate","pull up by the roots","wipe out entirely"],
    ex:[{ s:"They mean to {{}} the practice.", f:"uproot", ko:"그들은 그 관행을 근절할 작정이다." }] },

  /* 교재의 '성쇠' 는 '우여곡절' 과 같은 말이어서 걷었다. */
  { word:"ups and downs", pron:"업스 앤드 다운스", pos:"phr", level:"C1", meanings:["우여곡절"],
    syn:["good times and bad","turns of fortune","rough and smooth alike"] },

  /* 교재의 '거꾸로' 는 conversely(거꾸로, 반대로 · C1/adv) 자리라 뜻을 좁혔다. */
  { word:"upside down", pron:"업사이드 다운", pos:"adv", level:"B1", meanings:["뒤집혀"],
    syn:["with the top at the bottom","turned over completely","the wrong way up"],
    ex:[{ s:"The boat lay {{}} on the sand.", f:"upside down", ko:"그 배는 모래 위에 뒤집혀 있었다." }] },

  /* 승격 ㉓ — 사전 글자 유지(참조 easygoing 이 반의어). */
  { word:"uptight", pron:"업타이트", pos:"adj", level:"C1", meanings:["긴장한","신경이 날카로운"],
    syn:["strung up tight","on edge","unable to relax"], ant:["easygoing"],
    ex:[{ s:"He gets {{}} before a test.", f:"uptight", ko:"그는 시험 전에 긴장한다." }] },

  /* 승격 ㉔ — 사전 글자 유지(참조 downturn 이 반의어). */
  { word:"upturn", pron:"업턴", pos:"n", level:"B2", meanings:["상승","호전"],
    syn:["turn for the better","rise after a fall","change to the good"], ant:["downturn"],
    ex:[{ s:"Trade showed a slow {{}}.", f:"upturn", ko:"거래는 더딘 상승을 보였다." }] },

  /* 승격 ㉕ — 사전 단일값 유지(참조 metropolitan). ★ municipal(시의 · B2/adj)
     과 '시의' 가 겹치는데 두 글자라 자동 배제가 안 된다. 이쪽은 참조가 있어
     사전값을 지켜야 하므로 municipal 쪽을 '지방 자치의, 시의' 로 손질했다.
     metropolitan(대도시의, 수도의) 은 '도시의' 를 품어 저절로 배제된다. */
  { word:"urban", exams:["공무원"], pron:"어번", pos:"adj", level:"B1", meanings:["도시의"],
    syn:["metropolitan","of the town","of built-up areas"],
    ex:[{ s:"{{}} life suits her well.", f:"urban", ko:"도시 생활이 그녀에게 잘 맞는다." }] },

  /* 승격 ㉖ — ★ 사전 첫 갈래만 세웠다. 참조 셋(craving·impulse·instinct) 이
     모두 명사여서다. 교재의 '설득하다' 는 induce·convince 자리다.
     impulse(충동, 자극) 와 글자가 맞물려 배제된다. */
  { word:"urge", exams:["공무원"], pron:"어지", pos:"n", level:"B1", meanings:["충동"],
    syn:["impulse","craving","instinct"],
    ex:[{ s:"She felt a sudden {{}} to run.", f:"urge", ko:"그녀는 달리고 싶은 갑작스러운 충동을 느꼈다." }] },

  /* 승격 ㉗ — 사전 글자 유지. 참조 desperate(D)·imperative(I) 두 곳의 화면은
     바뀌지 않는다. pressing(긴급한, 절박한) 과 두 갈래가 통째로 같고
     desperate(필사적인, 절박한) 와 '절박한' 이 같아 맞물려 배제된다. */
  { word:"urgent", pron:"어전트", pos:"adj", level:"B1", meanings:["긴급한","절박한"],
    syn:["pressing","calling for haste","not able to wait"],
    ex:[{ s:"There is an {{}} need for water.", f:"urgent", ko:"물이 긴급히 필요하다." }] },

  /* 승격 ㉘ — ★ 사전의 붙여쓰기를 따랐다. 교재는 '쓸모 없는' 으로 띄어 썼는데,
     참조 futile(F) 의 화면을 지키려면 사전 글자가 맞다. */
  { word:"useless", pron:"유스리스", pos:"adj", level:"B1", meanings:["쓸모없는"],
    syn:["futile","of no use at all","serving no purpose"],
    ex:[{ s:"The old key is {{}} now.", f:"useless", ko:"그 낡은 열쇠는 이제 쓸모없다." }] },

  { word:"user-friendly", pron:"유저 프렌들리", pos:"adj", level:"B2", meanings:["사용하기 쉬운"],
    syn:["simple to work with","made for the plain user","needing no manual"],
    ex:[{ s:"The new app is {{}}.", f:"user-friendly", ko:"새 앱은 사용하기 쉽다." }] },

  /* 교재는 [v+n] 이지만 동사 쪽만 세웠다. */
  { word:"usher", pron:"어셔", pos:"v", level:"B2", meanings:["안내하다"],
    syn:["show the way in","lead to a seat","conduct in politely"],
    ex:[{ s:"A boy will {{}} the guests in.", f:"usher", ko:"한 소년이 손님들을 안내할 것이다." }] },

  /* 승격 ㉙ — ★ 두 갈래의 앞뒤를 바꿨다. '기구' 를 앞에 두면 appliance
     ((가정용) 기구 · B2/n) 와 눈으로 갈리지 않는데, 두 글자라 자동 배제도 안
     된다. '기구' 는 둘째 갈래로 남아 device(장치, 기구)·apparatus(장치, 기구)
     와는 계속 맞물린다. '도구' 는 instrument(악기, 도구) 자리다.
     ★ 참조 instrument(I) 의 화면에서 두 갈래의 앞뒤가 바뀐다. */
  { word:"utensil", pron:"유텐설", pos:"n", level:"B2", meanings:["용구","기구"],
    syn:["instrument","tool for the kitchen","thing used in work"],
    ex:[{ s:"Each {{}} hangs on its own hook.", f:"utensil", ko:"각 용구가 제 걸이에 걸려 있다." }] },

  /* pragmatic(현실적인, 실리를 따지는 · C1/adj) 와 '실리를 따지는' 이 맞물려
     배제된다. practical·functional 은 레벨 차가 3·2다. */
  { word:"utilitarian", pron:"유틸리테리언", pos:"adj", level:"C2", meanings:["실용적인","실리를 따지는"],
    syn:["pragmatic","made for use not show","valuing what works"],
    ex:[{ s:"The building is plain and {{}}.", f:"utilitarian", ko:"그 건물은 꾸밈없고 실용적이다." }] },

  /* ★ 첫 뜻을 '유용성' 으로 갈랐다. '공익사업' 은 common good(공익 · C1/n) 을
     통째로 품는데 '공익' 이 두 글자라 자동 배제가 안 된다. 수능에서도 이 낱말은
     '유용성' 쪽이 먼저다. 교재 형용사 갈래는 버렸다. */
  { word:"utility", exams:["공무원"], pron:"유틸러티", pos:"n", level:"B2", meanings:["유용성","공익사업"],
    syn:["usefulness in practice","a public service firm","water or power supply"],
    ex:[{ s:"They questioned the {{}} of the plan.", f:"utility", ko:"그들은 그 계획의 유용성을 의문시했다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "a public service firm": "공공 서비스를 맡은 회사",
  "a troubled feeling": "뒤숭숭한 느낌",
  "against the law": "법에 어긋나는",
  "against what is right": "옳은 바에 어긋나는",
  "agreed by all": "모두가 뜻을 모은",
  "ambiguously": "모호하게",
  "as anyone would": "누구라도 그럴 만하게",
  "as bad luck would have it": "운이 나빠서",
  "at the top alone": "혼자 맨 위에 있는",
  "at the very end": "아주 마지막의",
  "at the very top": "바로 꼭대기에 있는",
  "beat on price": "값으로 이기다",
  "being at one": "한 덩어리로 있음",
  "being out of work": "일자리가 없는 상태",
  "below the surface": "물 표면 아래의",
  "beyond question": "따질 여지가 없는",
  "beyond the violet end": "보라 끝을 넘어선",
  "beyond what is called for": "필요한 만큼을 넘어선",
  "bound to break down": "무너지게 되어 있는",
  "bring into open view": "드러난 자리로 내놓다",
  "bring up from hiding": "숨은 데서 끌어내다",
  "caring nothing for it": "도무지 마음을 두지 않는",
  "categorically": "단호하게, 절대적으로",
  "change to the good": "좋은 쪽으로 바뀜",
  "changing without warning": "예고 없이 바뀌는",
  "college learner": "대학에서 배우는 사람",
  "commonly": "흔히, 일반적으로",
  "complicate": "복잡하게 하다",
  "conduct in politely": "공손히 모셔 들이다",
  "costume": "의상, 복장",
  "deepest of all": "가장 깊은 데 있는",
  "different from": "~와 다른",
  "dig out of the ground": "땅에서 캐내다",
  "disconcerting": "당황하게 하는",
  "disturbing": "불안하게 하는",
  "draw a line under": "~ 아래에 선을 긋다",
  "drawing no one": "아무도 끌지 못하는",
  "drop an old habit of mind": "묵은 생각 버릇을 버리다",
  "earning below one's worth": "값어치보다 덜 버는",
  "eat away at": "조금씩 깎아 먹다",
  "final of all": "맨 끝에 오는",
  "firm throughout": "끝까지 단단한",
  "fixed for good": "아주 굳어 버린",
  "for good reason": "그럴 까닭이 있어서",
  "free to go on": "거침없이 나아가는",
  "going on and on": "줄곧 이어지는",
  "going on without a stop": "멈춤 없이 이어지는",
  "going one's own way": "제 길을 가는",
  "good times and bad": "좋을 때와 나쁠 때",
  "hard to foresee": "미리 알기 어려운",
  "having no contender": "맞설 자가 없는",
  "heave up from below": "아래에서 밀어 올리다",
  "highest of all": "그중 제일 높은",
  "hold up from under": "아래에서 버텨 주다",
  "holding everywhere": "어디서나 통하는",
  "holding the same course": "같은 길을 지키는",
  "holding together": "서로 붙어 버팀",
  "impassive": "무표정한",
  "impossible to maintain": "버텨 낼 수 없는",
  "impossible to put out of mind": "떨쳐 낼 수 없는",
  "in a dead faint": "깊이 까무러친",
  "join into one": "하나로 합치다",
  "knocked out cold": "까무러쳐 쓰러진",
  "lack of jobs": "일자리가 모자람",
  "lay open": "펴서 놓다",
  "lead to a seat": "자리로 이끌다",
  "leaving no doubt": "의문을 남기지 않는",
  "leaving no room for doubt": "의심할 틈을 안 남기는",
  "let go of learning": "익힌 것을 놓아 버리다",
  "let out what was shut in": "갇혀 있던 것을 내놓다",
  "like no other": "견줄 데가 없는",
  "live through": "견디며 지나다",
  "lying beneath the surface": "겉 아래에 깔린",
  "made for the plain user": "보통 사람을 위해 만든",
  "made for use not show": "보이기보다 쓰려고 만든",
  "mark beneath the words": "글자 밑에 표를 하다",
  "meeting no block": "걸리는 데가 없는",
  "more than is right": "옳은 정도를 넘는",
  "needing no manual": "설명서가 필요 없는",
  "never broken into": "도중에 끊기지 않는",
  "never coming to a stop": "멈추는 일이 없는",
  "never matched before": "전에 견줄 것이 없던",
  "never to be lost from memory": "기억에서 사라지지 않는",
  "never turning aside": "곁길로 새지 않는",
  "new to one": "처음 겪는",
  "no wonder": "놀랄 일이 아니게",
  "not able to keep going": "계속 이어 갈 수 없는",
  "not allowed by law": "법이 허락하지 않는",
  "not aware of anything": "아무것도 알아채지 못하는",
  "not doing as others do": "남들 하는 대로 하지 않는",
  "not fair": "공정하지 못한",
  "not grown out": "다 자라지 못한",
  "not known before": "전에 알던 바 없는",
  "not level": "평평하지 못한",
  "not like one's usual self": "여느 때의 자기와 다른",
  "not meant to happen": "그리 되려던 것이 아닌",
  "not open to doubt": "의심이 끼어들 수 없는",
  "not shaken at all": "조금도 흔들리지 않는",
  "not to be doubted": "의심을 살 수 없는",
  "not yet named": "아직 이름 붙지 않은",
  "of built-up areas": "건물이 들어찬 지역의",
  "of invisible short rays": "눈에 안 보이는 짧은 빛의",
  "of no use at all": "하나도 쓰이지 않는",
  "of one mind throughout": "처음부터 끝까지 한마음인",
  "of the burning light": "살을 태우는 빛의",
  "of the town": "고을의",
  "of unknown name": "이름이 알려지지 않은",
  "offer for less": "더 적은 돈에 내놓다",
  "on one's feet again": "다시 두 발로 선",
  "on top of everything": "모든 것 위에 얹힌",
  "one reading for a first degree": "첫 학위를 향해 배우는 이",
  "open out a roll": "말린 것을 풀다",
  "open revolt of the people": "백성이 드러내어 일어섬",
  "open to one reading only": "한 가지로만 읽히는",
  "open with a key": "열쇠로 따다",
  "out of keeping with one's ways": "제 방식에 어울리지 않는",
  "out of one's sick bed": "앓던 자리에서 나온",
  "paid too little": "너무 적게 받는",
  "past all reckoning": "가늠을 넘어선",
  "pilotless": "조종사가 없는",
  "plain for all to see": "누구나 알아볼 만한",
  "plain to look at": "보기에 수수한",
  "poorly rewarded": "보답이 초라한",
  "predictable": "예측할 수 있는",
  "present in every place": "어느 자리에나 있는",
  "pull up by the roots": "뿌리까지 뽑아내다",
  "push up in a mass": "한 덩이째 솟구치게 하다",
  "put aside what one was taught": "배운 바를 내려놓다",
  "raise with force": "힘으로 치켜올리다",
  "rate too low": "값을 너무 낮게 매기다",
  "rearing of a child": "아이를 길러 냄",
  "regrettably": "애석하게도",
  "rise after a fall": "떨어진 뒤의 오름",
  "rough and smooth alike": "험한 길과 순한 길 모두",
  "rule a line below": "밑으로 줄을 대다",
  "sad to say": "안타깝게도",
  "said straight out": "곧바로 내놓고 말한",
  "sell cheaper than": "~보다 싸게 팔다",
  "set about doing": "~하기에 나서다",
  "show for the first time": "처음으로 내보이다",
  "show the way in": "들어갈 길을 알려 주다",
  "simple to work with": "다루기 수월한",
  "so as to draw no eye": "눈길을 끌지 않도록",
  "so far and no further": "거기까지만",
  "spread out flat": "납작하게 펴다",
  "stand behind": "뒤에서 밀어 주다",
  "standing quite alone": "홀로 우뚝 선",
  "state of having no post": "자리를 잃은 형편",
  "staying in the mind for ever": "마음에 오래 남는",
  "staying just as it is": "그대로 머무는",
  "still at an early stage": "아직 이른 단계인",
  "stoic": "금욕적인, 극기의",
  "straight in one's dealings": "하는 일이 곧은",
  "strung up tight": "바짝 조여진",
  "student not yet graduated": "아직 졸업하지 않은 학생",
  "surprising": "놀라운",
  "take on a task": "일을 떠맡다",
  "take the cover off": "덮은 것을 걷다",
  "that cannot be altered": "고칠 수 없는",
  "the only one of its kind": "그 갈래에 하나뿐인",
  "the way one is reared": "길러지는 방식",
  "the wrong way up": "위아래가 틀린 채로",
  "thing used in work": "일에 쓰는 물건",
  "think too little of": "대수롭지 않게 여기다",
  "to a certain line": "일정한 선까지",
  "too many to count": "셀 수 없을 만큼 많은",
  "too slightly to be marked": "알아챌 수 없을 만큼 조금",
  "tool for the kitchen": "부엌에서 쓰는 연장",
  "training given at home": "집에서 받는 가르침",
  "true of all": "누구에게나 들어맞는",
  "turn for the better": "나아지는 쪽으로 돎",
  "turned over completely": "아주 엎어진 채로",
  "turning up all over": "곳곳에서 나타나는",
  "turns of fortune": "운이 뒤바뀌는 일",
  "unable to relax": "도무지 풀어지지 않는",
  "uncrewed": "승무원이 없는",
  "under the waves": "물결 아래의",
  "unforeseen": "예견하지 못한",
  "unlike how one normally is": "보통의 모습과 딴판인",
  "unsettling": "마음을 뒤숭숭하게 하는",
  "usefulness in practice": "실제로 쓸모가 있음",
  "valuing what works": "되는 것을 값지게 보는",
  "want of calm": "차분함이 모자람",
  "water or power supply": "물이나 전기의 공급",
  "weaken from below": "아래에서부터 무르게 하다",
  "well enough to move": "움직일 만큼 나은",
  "wipe out entirely": "깡그리 없애다",
  "with no equal": "맞먹는 것이 없는",
  "with no one to match it": "겨룰 이가 없는",
  "with no wish to know": "알고 싶은 마음이 없는",
  "with not one against": "반대가 하나도 없는",
  "with nothing in the way": "길을 막는 것 없이",
  "with the top at the bottom": "위가 아래로 가서",
  "within limits": "한도 안에서는",
  "without a break": "쉬는 틈이 없는",
  "without any such aim": "그런 속셈이 전혀 없는",
  "without being seen": "보이지 않은 채로",
  "without charm": "끌리는 데가 없는",
  "without hedging": "둘러대지 않는",
  "wrongly harsh": "까닭 없이 모진"
});
