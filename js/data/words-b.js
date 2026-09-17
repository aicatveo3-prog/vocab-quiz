/**
 * 단어 데이터 — 수능 보카 B 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *   word / pos / level 은 필수, meanings 는 1개 이상 있어야 앱이 깨지지 않는다.
 *   syn 3개 → 아닌 것 고르기 / ex → 문장 빈칸 / col → 연어 고르기 해금.
 *
 * ⚠️ COL_POOLS 와 ANT_DICT 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.ANT_DICT = {...} 로 재대입하면 A 세트의 202개가 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * 진행 상황: 234단어 중 160단어 (babble ~ bothersome).
 *   챕터는 20단어씩 잘리므로 현재 8챕터. 나머지 74단어는 4차에서 채운다.
 */
window.VOCAB_B = [
  /* ── ba ────────────────────────────────────── */
  { word:"babble", pron:"배블", pos:"n", level:"C1", meanings:["옹알이","와글와글 떠드는 소리"],
    syn:["chatter","prattle","murmur"], ant:["silence"],
    ex:[{ s:"The {{}} of the crowd filled the great hall.", f:"babble", ko:"군중의 왁자지껄한 소리가 큰 홀을 가득 채웠다." }] },

  { word:"back-and-forth", pron:"백 앤 포스", pos:"adj", level:"B2", meanings:["오가는","주고받는"],
    syn:["alternating","reciprocal","two-way"], ant:["one-way"],
    ex:[{ s:"After a long {{}} debate, the two sides reached a deal.", f:"back-and-forth", ko:"오랜 공방 끝에 양측은 합의에 이르렀다." }] },

  { word:"backfire", pron:"백파이어", pos:"v", level:"B2", meanings:["역효과를 낳다","계획과 반대로 되다"],
    syn:["boomerang","misfire","rebound"], ant:["succeed"],
    ex:[{ s:"The marketing stunt {{}} and hurt sales instead.", f:"backfired", ko:"그 마케팅 이벤트는 역효과를 낳아 오히려 매출을 떨어뜨렸다." }] },

  { word:"bailout", pron:"베일아웃", pos:"n", level:"C1", meanings:["긴급 구제","구제 금융"],
    syn:["rescue","relief","subsidy"], ant:["bankruptcy"],
    ex:[{ s:"The failing bank received a government {{}}.", f:"bailout", ko:"부실 은행은 정부의 긴급 구제를 받았다." }] },

  { word:"balance sheet", pron:"밸런스 시트", pos:"n", level:"C1", meanings:["대차대조표"],
    syn:["statement","ledger","account"],
    ex:[{ s:"The company's {{}} showed a heavy load of debt.", f:"balance sheet", ko:"그 회사의 대차대조표는 막대한 부채를 보여주었다." }] },

  { word:"bald", pron:"볼드", pos:"adj", level:"B1", meanings:["대머리인","머리가 벗겨진"],
    syn:["hairless","bare","shaven"], ant:["hairy"],
    ex:[{ s:"He started going {{}} in his early thirties.", f:"bald", ko:"그는 삼십 대 초반에 머리가 벗겨지기 시작했다." }] },

  { word:"ballot", pron:"밸럿", pos:"n", level:"B2", meanings:["투표용지","투표"],
    syn:["vote","poll","election"],
    ex:[{ s:"Voters marked their choice on the {{}}.", f:"ballot", ko:"유권자들은 투표용지에 선택을 표시했다." }] },

  { word:"ban", pron:"밴", pos:"v", level:"B1", meanings:["금지하다","금지령"],
    syn:["prohibit","forbid","outlaw"], ant:["allow"],
    ex:[{ s:"The city council voted to {{}} plastic bags.", f:"ban", ko:"시의회는 비닐봉지를 금지하기로 표결했다." }],
    col:[{ p:"ban him {{}} driving", a:"from", pool:"prep", note:"ban A from B : A가 B하는 것을 금지하다" }] },

  { word:"banish", pron:"배니쉬", pos:"v", level:"C1", meanings:["추방하다","내쫓다"],
    syn:["expel","exile","deport"], ant:["admit"],
    ex:[{ s:"The king {{}} the rebel from the kingdom.", f:"banished", ko:"왕은 그 반역자를 왕국에서 추방했다." }] },

  { word:"bank", pron:"뱅크", pos:"n", level:"B1", meanings:["둑","제방"],
    syn:["embankment","levee","shore"],
    ex:[{ s:"We sat on the grassy {{}} of the river.", f:"bank", ko:"우리는 강의 풀이 난 둑에 앉았다." }] },

  { word:"bankrupt", pron:"뱅크럽트", pos:"adj", level:"B2", meanings:["파산한"],
    syn:["insolvent","ruined","penniless"], ant:["solvent"],
    ex:[{ s:"The airline went {{}} after years of losses.", f:"bankrupt", ko:"그 항공사는 수년간의 적자 끝에 파산했다." }] },

  { word:"banquet", pron:"뱅큇", pos:"n", level:"C1", meanings:["연회","진수성찬"],
    syn:["feast","reception","dinner"],
    ex:[{ s:"The hotel hosted a wedding {{}} for two hundred guests.", f:"banquet", ko:"그 호텔은 하객 200명을 위한 결혼 연회를 열었다." }] },

  { word:"bar", pron:"바", pos:"n", level:"C1", meanings:["법조계","변호사단","법정"],
    syn:["judiciary","court","tribunal"],
    ex:[{ s:"She was admitted to the {{}} after passing the exam.", f:"bar", ko:"그녀는 시험에 합격한 뒤 변호사 자격을 얻었다." }] },

  { word:"barbaric", pron:"바바릭", pos:"adj", level:"C1", meanings:["야만적인","이방인의"],
    syn:["savage","brutal","cruel"], ant:["civilized"],
    ex:[{ s:"The prisoners endured {{}} treatment for months.", f:"barbaric", ko:"수감자들은 몇 달 동안 야만적인 대우를 견뎠다." }] },

  { word:"barely", pron:"베어리", pos:"adv", level:"B1", meanings:["간신히","가까스로"],
    syn:["hardly","scarcely","just"], ant:["fully"],
    ex:[{ s:"He {{}} passed the exam by a single point.", f:"barely", ko:"그는 단 1점 차로 간신히 시험에 합격했다." }] },

  { word:"bargain", pron:"바건", pos:"n", level:"B2", meanings:["싼 물건","흥정"],
    syn:["deal","discount","reduction"],
    ex:[{ s:"This coat was a real {{}} at half price.", f:"bargain", ko:"이 코트는 반값이라 정말 싸게 산 물건이었다." }] },

  { word:"bargaining", pron:"바거닝", pos:"n", level:"B2", meanings:["협상","교섭"],
    syn:["negotiation","haggling","dealing"],
    ex:[{ s:"The union entered into {{}} with management.", f:"bargaining", ko:"노조는 경영진과 협상에 들어갔다." }] },

  { word:"barge", pron:"바지", pos:"v", level:"C1", meanings:["난입하다","밀치고 가다"],
    syn:["intrude","shove","push"], ant:["retreat"],
    ex:[{ s:"He tried to {{}} past the guard at the gate.", f:"barge", ko:"그는 문에서 경비원을 밀치고 지나가려 했다." }],
    col:[{ p:"barge {{}} the meeting", a:"into", pool:"prep", note:"barge into ~ : ~에 난입하다" }] },

  { word:"bark", pron:"바크", pos:"v", level:"B1", meanings:["짖다"],
    syn:["yelp","howl","yap"],
    ex:[{ s:"The dog began to {{}} at every stranger.", f:"bark", ko:"그 개는 낯선 사람마다 짖기 시작했다." }] },

  { word:"barn", pron:"반", pos:"n", level:"B1", meanings:["헛간","광"],
    syn:["shed","stable","storehouse"],
    ex:[{ s:"The farmer stored the hay in the {{}}.", f:"barn", ko:"농부는 건초를 헛간에 보관했다." }] },

  { word:"barometer", pron:"버라미터", pos:"n", level:"C1", meanings:["기압계","지표"],
    syn:["gauge","indicator","meter"],
    ex:[{ s:"The {{}} showed a sharp drop in pressure.", f:"barometer", ko:"기압계는 기압이 급격히 떨어졌음을 보여주었다." }] },

  { word:"barrel", pron:"배럴", pos:"n", level:"B2", meanings:["큰 통","배럴"],
    syn:["cask","keg","drum"],
    ex:[{ s:"They aged the wine in an oak {{}} for two years.", f:"barrel", ko:"그들은 그 와인을 오크 통에서 2년간 숙성시켰다." }] },

  { word:"barren", pron:"배런", pos:"adj", level:"C1", meanings:["불모의","임신을 못하는"],
    syn:["infertile","sterile","desolate"], ant:["fertile"],
    ex:[{ s:"Almost nothing grows in this {{}} land.", f:"barren", ko:"이 불모의 땅에서는 거의 아무것도 자라지 않는다." }] },

  { word:"barrier", pron:"배리어", pos:"n", level:"B2", meanings:["장벽","장애물"],
    syn:["obstacle","obstruction","blockade"],
    ex:[{ s:"Language can be a serious {{}} to friendship.", f:"barrier", ko:"언어는 우정에 심각한 장벽이 될 수 있다." }],
    col:[{ p:"a barrier {{}} entry", a:"to", pool:"prep", note:"a barrier to ~ : ~에 대한 장벽" }] },

  { word:"barter", pron:"바터", pos:"v", level:"C1", meanings:["물물교환하다","교역하다"],
    syn:["exchange","trade","swap"],
    ex:[{ s:"The villagers {{}} grain for cloth and salt.", f:"bartered", ko:"마을 사람들은 곡물을 천과 소금으로 물물교환했다." }],
    col:[{ p:"barter grain {{}} cloth", a:"for", pool:"prep", note:"barter A for B : A를 B와 물물교환하다" }] },

  { word:"basin", pron:"베이슨", pos:"n", level:"B2", meanings:["분지","대야"],
    syn:["bowl","hollow","valley"],
    ex:[{ s:"The Amazon {{}} spans several countries.", f:"basin", ko:"아마존 분지는 여러 나라에 걸쳐 있다." }] },

  { word:"battle", pron:"배틀", pos:"v", level:"B1", meanings:["싸우다","대결하다"],
    syn:["fight","combat","struggle"], ant:["surrender"],
    ex:[{ s:"Doctors {{}} for hours to save the patient.", f:"battled", ko:"의사들은 그 환자를 살리려고 몇 시간을 싸웠다." }],
    col:[{ p:"battle {{}} cancer", a:"against", pool:"prep", note:"battle against ~ : ~와 싸우다" }] },

  { word:"bay", pron:"베이", pos:"n", level:"B1", meanings:["만"],
    syn:["cove","inlet","gulf"],
    ex:[{ s:"Fishing boats rested in the quiet {{}}.", f:"bay", ko:"어선들이 고요한 만에 정박해 있었다." }] },

  /* ── be ~ (구·표현) ──────────────────────────
     구·표현은 문장 빈칸에 넣기 어려워 ex를 두지 않는다.
     같은 품사끼리만 오답으로 뽑히므로 표현은 표현끼리 경쟁한다. */
  { word:"be accustomed to", pron:"비 어커스텀드 투", pos:"phr", level:"B2", meanings:["~에 익숙하다"],
    syn:["be used to","be familiar with","be habituated to"], ant:["be unfamiliar with"] },

  { word:"be all for", pron:"비 올 포", pos:"phr", level:"C1", meanings:["~에 대찬성이다","~을 굳게 믿다"],
    syn:["strongly support","fully endorse","be in favor of"], ant:["be against"] },

  { word:"be apt to", pron:"비 앱트 투", pos:"phr", level:"C1", meanings:["~하는 경향이 있다","~하기 쉽다"],
    syn:["tend to","be liable to","be prone to"], ant:["be unlikely to"] },

  { word:"be attached to", pron:"비 어태치드 투", pos:"phr", level:"B2", meanings:["~에 애착을 가지다","~에 소속하다"],
    syn:["be fond of","be devoted to","cling to"], ant:["be indifferent to"] },

  { word:"be beyond one's control", pron:"비 비욘드 원스 컨트롤", pos:"phr", level:"B2", meanings:["제지할 수 없다"],
    syn:["be uncontrollable","be unmanageable","be out of hand"], ant:["be manageable"] },

  { word:"be bound to", pron:"비 바운드 투", pos:"phr", level:"B2", meanings:["반드시 ~하다"],
    syn:["be certain to","be sure to","be destined to"], ant:["be unlikely to"] },

  { word:"be caught up in", pron:"비 코트 업 인", pos:"phr", level:"B2", meanings:["~에 휘말려 들다","~에 사로잡히다"],
    syn:["be involved in","be entangled in","be absorbed in"], ant:["stay out of"] },

  { word:"be committed to", pron:"비 커미티드 투", pos:"phr", level:"B2", meanings:["~에 헌신하다","~에 전념하다"],
    syn:["be devoted to","be dedicated to","be pledged to"], ant:["neglect"] },

  { word:"be compelled to do", pron:"비 컴펠드 투 두", pos:"phr", level:"C1", meanings:["할 수 없이 ~하다"],
    syn:["be forced to","be obliged to","be made to"], ant:["be free to"] },

  { word:"be composed of", pron:"비 컴포즈드 오브", pos:"phr", level:"B2", meanings:["~로 구성되어 있다"],
    syn:["consist of","be made up of","comprise"], ant:["exclude"] },

  { word:"be concerned about", pron:"비 컨선드 어바웃", pos:"phr", level:"B1", meanings:["~을 걱정하다","~에 관심을 가지다"],
    syn:["worry about","care about","be anxious about"], ant:["ignore"] },

  { word:"be consistent with", pron:"비 컨시스턴트 위드", pos:"phr", level:"B2", meanings:["~와 일치하다","~와 일관되다"],
    syn:["agree with","correspond to","match"], ant:["contradict"] },

  { word:"be dependent on", pron:"비 디펜던트 온", pos:"phr", level:"B2", meanings:["~에 좌우되다","~에 의존하다"],
    syn:["rely on","count on","hinge on"], ant:["be independent of"] },

  { word:"be destined to", pron:"비 데스틴드 투", pos:"phr", level:"C1", meanings:["~할 운명이다"],
    syn:["be fated to","be bound to","be meant to"], ant:["be unlikely to"] },

  { word:"be done with", pron:"비 던 위드", pos:"phr", level:"B2", meanings:["~을 다 처리하다","~을 끝장내다"],
    syn:["be finished with","wrap up","have completed"], ant:["begin"] },

  { word:"be engaged in", pron:"비 인게이지드 인", pos:"phr", level:"B2", meanings:["~에 종사하고 있다","~으로 바쁘다"],
    syn:["be involved in","take part in","be occupied with"], ant:["be idle"] },

  { word:"be entitled to", pron:"비 인타이틀드 투", pos:"phr", level:"B2", meanings:["~에 대한 자격이 주어지다"],
    syn:["have a right to","be qualified for","deserve"], ant:["be barred from"] },

  { word:"be fed up with", pron:"비 페드 업 위드", pos:"phr", level:"B2", meanings:["~에 진저리가 나다"],
    syn:["be sick of","be tired of","have had enough of"], ant:["be fond of"] },

  { word:"be glued to", pron:"비 글루드 투", pos:"phr", level:"C1", meanings:["~에 열중하다","~에 딱 붙어 있다"],
    syn:["be fixated on","be absorbed in","stare at"], ant:["ignore"] },

  { word:"be good for", pron:"비 굿 포", pos:"phr", level:"B1", meanings:["~에 소용이 있다","~에 좋다"],
    syn:["be useful for","be beneficial to","serve"], ant:["be harmful to"] },

  { word:"be in charge of", pron:"비 인 차지 오브", pos:"phr", level:"B1", meanings:["~을 담당하다"],
    syn:["be responsible for","supervise","head"], ant:["report to"] },

  { word:"be incapable of ~ing", pron:"비 인케이퍼블 오브", pos:"phr", level:"B2", meanings:["~할 능력이 없다","~할 수 없다"],
    syn:["be unable to","lack the ability to","cannot manage to"], ant:["be capable of"] },

  { word:"be inclined to", pron:"비 인클라인드 투", pos:"phr", level:"C1", meanings:["~할 의향이 있다","~하는 편이다"],
    syn:["be disposed to","lean toward","feel like"], ant:["be reluctant to"] },

  { word:"be known for", pron:"비 노운 포", pos:"phr", level:"B1", meanings:["~로 알려져 있다"],
    syn:["be famous for","be noted for","be renowned for"], ant:["be obscure"] },

  { word:"be liable to do", pron:"비 라이어블 투 두", pos:"phr", level:"C1", meanings:["~할 것 같다","~하기 쉽다"],
    syn:["be apt to","be likely to","be prone to"], ant:["be unlikely to"] },

  { word:"be lost on", pron:"비 로스트 온", pos:"phr", level:"C1", meanings:["~에게 이해되지 않다"],
    syn:["go unnoticed by","escape","fail to register with"], ant:["resonate with"] },

  { word:"be made up of", pron:"비 메이드 업 오브", pos:"phr", level:"B1", meanings:["~로 구성되다"],
    syn:["consist of","be composed of","comprise"], ant:["exclude"] },

  { word:"be obliged to", pron:"비 어블라이지드 투", pos:"phr", level:"C1", meanings:["~할 수밖에 없다","~할 의무가 있다"],
    syn:["be compelled to","be forced to","be required to"], ant:["be free to"] },

  { word:"be part and parcel of", pron:"비 파트 앤 파슬 오브", pos:"phr", level:"C1", meanings:["~의 중요한 부분이 되다"],
    syn:["be integral to","be essential to","be inherent in"], ant:["be irrelevant to"] },

  { word:"be preoccupied with", pron:"비 프리아큐파이드 위드", pos:"phr", level:"C1", meanings:["~에 정신이 팔리다"],
    syn:["be absorbed in","be obsessed with","dwell on"], ant:["be indifferent to"] },

  { word:"be presented with", pron:"비 프리젠티드 위드", pos:"phr", level:"B2", meanings:["~을 제공받다","(상을) 수여받다"],
    syn:["be given","be awarded","receive"], ant:["be denied"] },

  { word:"be prone to", pron:"비 프로운 투", pos:"phr", level:"C1", meanings:["~하기 쉽다","~하는 경향이 있다"],
    syn:["be liable to","be susceptible to","tend to"], ant:["be resistant to"] },

  { word:"be quick to", pron:"비 퀵 투", pos:"phr", level:"B2", meanings:["~가 빠르다","선뜻 ~하다"],
    syn:["be prompt to","be swift to","waste no time in"], ant:["be slow to"] },

  { word:"be regarded as", pron:"비 리가디드 애즈", pos:"phr", level:"B2", meanings:["~로 여겨지다","~로 간주되다"],
    syn:["be seen as","be viewed as","be considered"], ant:["be dismissed as"] },

  { word:"be restricted to", pron:"비 리스트릭티드 투", pos:"phr", level:"B2", meanings:["~에 국한되다","~에 제한되다"],
    syn:["be limited to","be confined to","be capped at"], ant:["be open to"] },

  { word:"be skilled at", pron:"비 스킬드 앳", pos:"phr", level:"B1", meanings:["~에 능숙하다"],
    syn:["be good at","be adept at","be proficient in"], ant:["be clumsy at"] },

  { word:"be stricken with", pron:"비 스트리큰 위드", pos:"phr", level:"C1", meanings:["~에 걸리다","~에 사로잡히다"],
    syn:["be afflicted with","come down with","suffer from"], ant:["recover from"] },

  { word:"be struck by", pron:"비 스트럭 바이", pos:"phr", level:"B2", meanings:["~에 감명받다","~에 깊은 인상을 받다"],
    syn:["be impressed by","be moved by","be taken with"], ant:["be unmoved by"] },

  { word:"be subjected to", pron:"비 섭젝티드 투", pos:"phr", level:"C1", meanings:["지배를 받다","~을 당하다"],
    syn:["undergo","be exposed to","endure"], ant:["be spared"] },

  { word:"be supposed to do", pron:"비 서포즈드 투 두", pos:"phr", level:"B1", meanings:["~하기로 되어 있다","~할 의무가 있다"],
    syn:["be expected to","ought to","be meant to"], ant:["be free to"] },

  /* ── bea ~ bew ─────────────────────────────── */
  { word:"beam", pron:"빔", pos:"n", level:"B2", meanings:["광선","빛줄기"],
    syn:["ray","shaft","gleam"],
    ex:[{ s:"A {{}} of sunlight came through the narrow window.", f:"beam", ko:"좁은 창을 통해 한 줄기 햇빛이 들어왔다." }] },

  { word:"bear", pron:"베어", pos:"v", level:"B1", meanings:["견디다","감당하다"],
    syn:["endure","tolerate","withstand"], ant:["reject"],
    ex:[{ s:"She could not {{}} the pain any longer.", f:"bear", ko:"그녀는 더 이상 그 고통을 견딜 수 없었다." }] },

  { word:"beast", pron:"비스트", pos:"n", level:"B2", meanings:["짐승","야수"],
    syn:["brute","creature","animal"],
    ex:[{ s:"Old legends tell of a {{}} living deep in the forest.", f:"beast", ko:"옛 전설은 숲 깊은 곳에 사는 짐승을 이야기한다." }] },

  { word:"beat", pron:"비트", pos:"v", level:"B1", meanings:["이기다","치다"],
    syn:["defeat","overcome","strike"], ant:["lose"],
    ex:[{ s:"Our team managed to {{}} the defending champions.", f:"beat", ko:"우리 팀은 디펜딩 챔피언을 이겨냈다." }] },

  { word:"beat oneself up", pron:"비트 원셀프 업", pos:"phr", level:"C1", meanings:["자책하다"],
    syn:["blame oneself","reproach oneself","feel guilty"], ant:["forgive oneself"] },

  { word:"become acquainted with", pron:"비컴 어퀘인티드 위드", pos:"phr", level:"B2", meanings:["~에 정통해지다","~와 알게 되다"],
    syn:["get to know","become familiar with","learn about"], ant:["be ignorant of"] },

  { word:"bed", pron:"베드", pos:"n", level:"B1", meanings:["(강·바다의) 바닥","밑바닥"],
    syn:["bottom","floor","base"],
    ex:[{ s:"Smooth rocks covered the {{}} of the stream.", f:"bed", ko:"매끄러운 돌들이 그 개천의 바닥을 덮고 있었다." }] },

  { word:"befall", pron:"비폴", pos:"v", level:"C2", meanings:["(좋지 않은 일이) 일어나다","닥치다"],
    syn:["overtake","strike","happen to"],
    ex:[{ s:"No one knew what disaster would {{}} the village.", f:"befall", ko:"어떤 재앙이 그 마을에 닥칠지 아무도 몰랐다." }] },

  { word:"beforehand", pron:"비포핸드", pos:"adv", level:"B2", meanings:["사전에","미리"],
    syn:["previously","in advance","ahead of time"], ant:["afterward"],
    ex:[{ s:"You should book the tickets well {{}}.", f:"beforehand", ko:"표는 미리 예약해 두는 것이 좋다." }] },

  { word:"beguile", pron:"비가일", pos:"v", level:"C2", meanings:["현혹시키다","속이다"],
    syn:["charm","enchant","deceive"], ant:["repel"],
    ex:[{ s:"The salesman tried to {{}} her with empty promises.", f:"beguile", ko:"그 판매원은 빈 약속으로 그녀를 현혹시키려 했다." }] },

  { word:"behind bars", pron:"비하인드 바스", pos:"phr", level:"B2", meanings:["투옥된","철창신세인"],
    syn:["in prison","imprisoned","in custody"], ant:["at large"] },

  { word:"belated", pron:"빌레이티드", pos:"adj", level:"C1", meanings:["뒤늦은"],
    syn:["overdue","delayed","tardy"], ant:["prompt"],
    ex:[{ s:"He sent a {{}} apology a full week later.", f:"belated", ko:"그는 꼬박 일주일 뒤에 뒤늦은 사과를 보냈다." }] },

  { word:"belittle", pron:"빌리틀", pos:"v", level:"C1", meanings:["과소평가하다","얕보다"],
    syn:["disparage","downplay","undervalue"], ant:["praise"],
    ex:[{ s:"Don't {{}} your own achievements in front of others.", f:"belittle", ko:"다른 사람 앞에서 자신의 성취를 얕보지 마라." }] },

  { word:"belly", pron:"벨리", pos:"n", level:"B1", meanings:["배","복부"],
    syn:["stomach","abdomen","gut"],
    ex:[{ s:"The dog rolled over to show its {{}}.", f:"belly", ko:"그 개는 배를 보이려고 뒤집었다." }] },

  { word:"belong", pron:"빌롱", pos:"v", level:"B1", meanings:["속하다"],
    syn:["pertain","fit in","be part of"],
    ex:[{ s:"These files {{}} to the finance team.", f:"belong", ko:"이 파일들은 재무팀 소속이다." }],
    col:[{ p:"belong {{}} a club", a:"to", pool:"prep", note:"belong to ~ : ~에 속하다" }] },

  { word:"beloved", pron:"빌러브드", pos:"adj", level:"B2", meanings:["사랑 받는","인기 많은"],
    syn:["cherished","adored","dear"], ant:["hated"],
    ex:[{ s:"The {{}} teacher retired after thirty years.", f:"beloved", ko:"모두가 사랑한 그 교사는 30년 만에 은퇴했다." }] },

  { word:"bend", pron:"벤드", pos:"v", level:"B1", meanings:["구부리다","휘다"],
    syn:["curve","flex","twist"], ant:["straighten"],
    ex:[{ s:"Heat the metal until you can {{}} it easily.", f:"bend", ko:"쉽게 구부릴 수 있을 때까지 그 금속을 가열하라." }] },

  { word:"bend over", pron:"벤드 오버", pos:"phr", level:"B1", meanings:["몸을 굽히다"],
    syn:["lean over","stoop","crouch"], ant:["stand up"] },

  { word:"benefactor", pron:"베니팩터", pos:"n", level:"C1", meanings:["후원자","자선을 베푸는 사람"],
    syn:["patron","donor","sponsor"], ant:["opponent"],
    ex:[{ s:"An anonymous {{}} paid for the new library.", f:"benefactor", ko:"익명의 후원자가 새 도서관 비용을 댔다." }] },

  { word:"beneficial", pron:"베니피셜", pos:"adj", level:"B2", meanings:["유익한","이로운"],
    syn:["advantageous","helpful","favorable"], ant:["harmful"],
    ex:[{ s:"Regular exercise is {{}} to your heart.", f:"beneficial", ko:"규칙적인 운동은 심장에 유익하다." }],
    col:[{ p:"beneficial {{}} health", a:"to", pool:"prep", note:"beneficial to ~ : ~에 유익한" }] },

  { word:"beneficiary", pron:"베니피셔리", pos:"n", level:"C1", meanings:["수혜자"],
    syn:["recipient","heir","receiver"], ant:["donor"],
    ex:[{ s:"She was the sole {{}} of her uncle's will.", f:"beneficiary", ko:"그녀는 삼촌 유언의 유일한 수혜자였다." }] },

  { word:"benefit", pron:"베니핏", pos:"n", level:"B1", meanings:["혜택","이득"],
    syn:["advantage","gain","profit"], ant:["drawback"],
    ex:[{ s:"One {{}} of the job is free travel.", f:"benefit", ko:"그 일자리의 한 가지 혜택은 무료 여행이다." }] },

  { word:"benefit from", pron:"베니핏 프롬", pos:"phr", level:"B1", meanings:["~로부터 혜택을 받다"],
    syn:["profit from","gain from","take advantage of"], ant:["suffer from"] },

  { word:"benevolent", pron:"버네벌런트", pos:"adj", level:"C1", meanings:["자애로운","자비로운"],
    syn:["charitable","compassionate","kindly"], ant:["cruel"],
    ex:[{ s:"The {{}} old man gave away most of his fortune.", f:"benevolent", ko:"그 자애로운 노인은 재산 대부분을 나눠 주었다." }] },

  { word:"best of all", pron:"베스트 오브 올", pos:"phr", level:"B1", meanings:["무엇보다도"],
    syn:["above all","most importantly","first and foremost"], ant:["least of all"] },

  { word:"bestow", pron:"비스토우", pos:"v", level:"C2", meanings:["수여하다","증여하다"],
    syn:["grant","confer","award"], ant:["withhold"],
    ex:[{ s:"The king chose to {{}} land on his loyal knights.", f:"bestow", ko:"왕은 충성스러운 기사들에게 땅을 수여하기로 했다." }],
    col:[{ p:"bestow an honor {{}} him", a:"on", pool:"prep", note:"bestow A on B : B에게 A를 수여하다" }] },

  { word:"bet", pron:"벳", pos:"v", level:"B1", meanings:["(내기를) 걸다","단언하다"],
    syn:["wager","gamble","stake"],
    ex:[{ s:"He {{}} ten dollars on the winning horse.", f:"bet", ko:"그는 우승한 말에 10달러를 걸었다." }] },

  { word:"better off", pron:"베터 오프", pos:"phr", level:"B2", meanings:["형편이 더 나은","더 잘사는"],
    syn:["more fortunate","wealthier","in a better position"], ant:["worse off"] },

  { word:"beverage", pron:"베버리지", pos:"n", level:"B2", meanings:["음료"],
    syn:["drink","refreshment","brew"],
    ex:[{ s:"The airline serves a hot {{}} after takeoff.", f:"beverage", ko:"그 항공사는 이륙 후 따뜻한 음료를 제공한다." }] },

  { word:"beware", pron:"비웨어", pos:"v", level:"B2", meanings:["경계하다","주의하다"],
    syn:["watch out","be cautious","look out"], ant:["ignore"],
    ex:[{ s:"Travelers should {{}} of pickpockets in this area.", f:"beware", ko:"여행자들은 이 지역에서 소매치기를 경계해야 한다." }],
    col:[{ p:"beware {{}} pickpockets", a:"of", pool:"prep", note:"beware of ~ : ~을 경계하다" }] },

  { word:"bewilder", pron:"비윌더", pos:"v", level:"C1", meanings:["혼란스럽게 만들다","당황시키다"],
    syn:["confuse","perplex","baffle"], ant:["clarify"],
    ex:[{ s:"The complex rules {{}} most new players.", f:"bewilder", ko:"그 복잡한 규칙은 대부분의 신규 참가자를 혼란스럽게 만든다." }] },

  { word:"bewildered", pron:"비윌더드", pos:"adj", level:"C1", meanings:["당황한","갈피를 못 잡은"],
    syn:["puzzled","disoriented","baffled"], ant:["confident"],
    ex:[{ s:"She gave me a {{}} look and said nothing.", f:"bewildered", ko:"그녀는 당황한 표정으로 나를 보며 아무 말도 하지 않았다." }] },

  /* ── bey ~ bi ──────────────────────────────── */
  { word:"beyond", pron:"비욘드", pos:"adv", level:"B1", meanings:["~너머","~을 지나"],
    syn:["past","farther than","outside"], ant:["within"],
    ex:[{ s:"The village lies just {{}} those low hills.", f:"beyond", ko:"그 마을은 저 낮은 언덕 바로 너머에 있다." }] },

  /* biannual(연 2회)과 biennial(격년)은 일부러 유의어로 묶지 않았다.
     서로의 오답으로 등장해야 둘을 구별하는 훈련이 된다. */
  { word:"biannual", pron:"바이애뉴얼", pos:"adj", level:"C1", meanings:["연 2회의"],
    syn:["twice-yearly","semiannual","half-yearly"], ant:["annual"],
    ex:[{ s:"The company holds a {{}} review each June and December.", f:"biannual", ko:"그 회사는 매년 6월과 12월에 연 2회 평가를 한다." }] },

  { word:"biased", pron:"바이어스트", pos:"adj", level:"B2", meanings:["선입견이 있는","편향된"],
    syn:["prejudiced","partial","one-sided"], ant:["impartial"],
    ex:[{ s:"The report was clearly {{}} toward one side.", f:"biased", ko:"그 보고서는 분명히 한쪽으로 편향되어 있었다." }] },

  { word:"biennial", pron:"바이에니얼", pos:"adj", level:"C1", meanings:["2년에 한 번의","격년의"],
    syn:["two-yearly","alternate-year","every-other-year"], ant:["annual"],
    ex:[{ s:"The festival is a {{}} event, held only in odd years.", f:"biennial", ko:"그 축제는 홀수 해에만 열리는 격년 행사다." }] },

  { word:"big-headed", pron:"빅헤디드", pos:"adj", level:"C1", meanings:["자만하는","잘난체하는"],
    syn:["arrogant","conceited","boastful"], ant:["modest"],
    ex:[{ s:"Sudden success made him {{}} and hard to work with.", f:"big-headed", ko:"갑작스러운 성공은 그를 자만하게 만들어 함께 일하기 어렵게 했다." }] },

  { word:"bilateral", pron:"바이래터럴", pos:"adj", level:"C1", meanings:["쌍방의","양쪽의"],
    syn:["two-sided","mutual","reciprocal"], ant:["unilateral"],
    ex:[{ s:"The two countries signed a {{}} trade agreement.", f:"bilateral", ko:"두 나라는 쌍방 무역 협정에 서명했다." }] },

  { word:"bilingual", pron:"바이링구얼", pos:"adj", level:"B2", meanings:["2개 국어를 쓰는"],
    syn:["dual-language","two-language","polyglot"], ant:["monolingual"],
    ex:[{ s:"She grew up {{}} in Korean and English.", f:"bilingual", ko:"그녀는 한국어와 영어 2개 국어를 쓰며 자랐다." }] },

  { word:"bill", pron:"빌", pos:"n", level:"B1", meanings:["법안","계산서"],
    syn:["legislation","invoice","statement"],
    ex:[{ s:"Congress passed the {{}} after a long debate.", f:"bill", ko:"의회는 오랜 논쟁 끝에 그 법안을 통과시켰다." }] },

  { word:"bind", pron:"바인드", pos:"v", level:"B2", meanings:["묶다","의무를 지우다"],
    syn:["tie","fasten","secure"], ant:["loosen"],
    ex:[{ s:"They used rope to {{}} the boxes together.", f:"bind", ko:"그들은 상자들을 함께 묶기 위해 밧줄을 썼다." }] },

  { word:"biodegradable", pron:"바이오디그레이더블", pos:"adj", level:"C1", meanings:["자연 분해되는","생물 분해성의"],
    syn:["compostable","decomposable","degradable"], ant:["persistent"],
    ex:[{ s:"The packaging is fully {{}} and safe for soil.", f:"biodegradable", ko:"그 포장재는 완전히 자연 분해되며 흙에 무해하다." }] },

  { word:"biodiversity", pron:"바이오다이버시티", pos:"n", level:"C1", meanings:["생물의 다양성"],
    syn:["species variety","ecological variety","biotic richness"], ant:["monoculture"],
    ex:[{ s:"Logging threatens the {{}} of the rainforest.", f:"biodiversity", ko:"벌목은 열대우림의 생물 다양성을 위협한다." }] },

  { word:"biography", pron:"바이오그래피", pos:"n", level:"B2", meanings:["전기","일대기"],
    syn:["life story","memoir","profile"], ant:["fiction"],
    ex:[{ s:"He wrote a {{}} of the former president.", f:"biography", ko:"그는 전임 대통령의 전기를 썼다." }] },

  { word:"biological", pron:"바이올로지컬", pos:"adj", level:"B2", meanings:["생물학의"],
    syn:["organic","physiological","natural"], ant:["artificial"],
    ex:[{ s:"The study examined {{}} differences between the species.", f:"biological", ko:"그 연구는 두 종 사이의 생물학적 차이를 조사했다." }] },

  { word:"biology", pron:"바이올로지", pos:"n", level:"B1", meanings:["생물학","생명 활동"],
    syn:["life science","bioscience","natural science"],
    ex:[{ s:"She majored in {{}} at university.", f:"biology", ko:"그녀는 대학에서 생물학을 전공했다." }] },

  { word:"biomechanics", pron:"바이오메카닉스", pos:"n", level:"C2", meanings:["생물역학"],
    syn:["movement science","kinesiology","body mechanics"],
    ex:[{ s:"Coaches study the {{}} of a runner's stride.", f:"biomechanics", ko:"코치들은 달리는 사람의 보폭에 관한 생물역학을 연구한다." }] },

  { word:"biotechnology", pron:"바이오테크놀로지", pos:"n", level:"C1", meanings:["생명공학"],
    syn:["biotech","bioengineering","genetic engineering"],
    ex:[{ s:"Advances in {{}} have transformed modern medicine.", f:"biotechnology", ko:"생명공학의 발전은 현대 의학을 바꿔 놓았다." }] },

  { word:"bitter", pron:"비터", pos:"adj", level:"B1", meanings:["맛이 쓴","격렬한"],
    syn:["sour","acrid","harsh"], ant:["sweet"],
    ex:[{ s:"The medicine left a {{}} taste in my mouth.", f:"bitter", ko:"그 약은 입안에 쓴맛을 남겼다." }] },

  { word:"bitterness", pron:"비터니스", pos:"n", level:"B2", meanings:["쓰라림","신랄함"],
    syn:["resentment","acrimony","rancor"], ant:["sweetness"],
    ex:[{ s:"Years of failure left him with deep {{}}.", f:"bitterness", ko:"수년간의 실패는 그에게 깊은 쓰라림을 남겼다." }] },

  { word:"bizarre", pron:"비자", pos:"adj", level:"B2", meanings:["이상한","기묘한"],
    syn:["peculiar","weird","outlandish"], ant:["ordinary"],
    ex:[{ s:"He told a {{}} story that no one believed.", f:"bizarre", ko:"그는 아무도 믿지 않는 기묘한 이야기를 했다." }] },

  /* ── bl ────────────────────────────────────── */
  { word:"black eye", pron:"블랙 아이", pos:"n", level:"B2", meanings:["멍든 눈"],
    syn:["bruised eye","shiner","contusion"],
    ex:[{ s:"He came home with a {{}} after the fight.", f:"black eye", ko:"그는 싸움 뒤에 멍든 눈으로 집에 왔다." }] },

  { word:"blacken", pron:"블래큰", pos:"v", level:"C1", meanings:["검게 만들다","(명성을) 더럽히다"],
    syn:["darken","tarnish","smear"], ant:["whiten"],
    ex:[{ s:"Smoke had {{}} the walls of the kitchen.", f:"blackened", ko:"연기가 부엌 벽을 검게 만들어 놓았다." }] },

  { word:"blackout", pron:"블랙아웃", pos:"n", level:"C1", meanings:["정전","보도 정지"],
    syn:["power failure","outage","suppression"],
    ex:[{ s:"The storm caused a city-wide {{}} that lasted hours.", f:"blackout", ko:"그 폭풍은 몇 시간 동안 이어진 도시 전역의 정전을 일으켰다." }] },

  { word:"blacksmith", pron:"블랙스미스", pos:"n", level:"B2", meanings:["대장장이"],
    syn:["ironworker","farrier","smith"],
    ex:[{ s:"The village {{}} shaped horseshoes by hand.", f:"blacksmith", ko:"마을 대장장이는 손으로 말굽을 만들었다." }] },

  { word:"blade", pron:"블레이드", pos:"n", level:"B1", meanings:["칼날","(풀의) 잎사귀"],
    syn:["edge","cutter","knife"],
    ex:[{ s:"Be careful — the {{}} is extremely sharp.", f:"blade", ko:"조심해라 — 그 칼날은 대단히 날카롭다." }] },

  { word:"blank", pron:"블랭크", pos:"adj", level:"B1", meanings:["텅 빈","멍한"],
    syn:["empty","vacant","unfilled"], ant:["filled"],
    ex:[{ s:"She stared at the {{}} page for a whole hour.", f:"blank", ko:"그녀는 텅 빈 페이지를 한 시간 내내 바라보았다." }] },

  { word:"blare", pron:"블레어", pos:"v", level:"C1", meanings:["요란하게 울리다"],
    syn:["blast","boom","resound"], ant:["whisper"],
    ex:[{ s:"Sirens {{}} through the empty streets all night.", f:"blared", ko:"사이렌이 밤새 텅 빈 거리에 요란하게 울렸다." }] },

  { word:"blatant", pron:"블레이턴트", pos:"adj", level:"C1", meanings:["노골적인","뻔한"],
    syn:["flagrant","glaring","overt"], ant:["subtle"],
    ex:[{ s:"It was a {{}} lie that fooled no one.", f:"blatant", ko:"그것은 아무도 속이지 못한 뻔한 거짓말이었다." }] },

  { word:"blaze", pron:"블레이즈", pos:"v", level:"B2", meanings:["활활 타다","불꽃"],
    syn:["flame","flare","burn"], ant:["smolder"],
    ex:[{ s:"The bonfire {{}} well into the night.", f:"blazed", ko:"모닥불은 밤늦게까지 활활 탔다." }] },

  { word:"bleach", pron:"블리치", pos:"v", level:"B2", meanings:["표백하다","바래지게 하다"],
    syn:["whiten","lighten","fade"], ant:["dye"],
    ex:[{ s:"Sunlight had {{}} the curtains almost white.", f:"bleached", ko:"햇빛이 커튼을 거의 흰색으로 바래게 했다." }] },

  { word:"bleed", pron:"블리드", pos:"v", level:"B1", meanings:["피를 흘리다"],
    syn:["hemorrhage","ooze","seep"],
    ex:[{ s:"The cut continued to {{}} for several minutes.", f:"bleed", ko:"그 상처는 몇 분 동안 계속 피를 흘렸다." }] },

  { word:"blend", pron:"블렌드", pos:"v", level:"B1", meanings:["섞다","혼합하다"],
    syn:["mix","combine","merge"], ant:["separate"],
    ex:[{ s:"Slowly {{}} the flour into the melted butter.", f:"blend", ko:"밀가루를 녹인 버터에 천천히 섞어라." }] },

  { word:"blessing", pron:"블레싱", pos:"n", level:"B2", meanings:["축복","승인"],
    syn:["benediction","approval","boon"], ant:["curse"],
    ex:[{ s:"They married with her parents' {{}}.", f:"blessing", ko:"그들은 그녀 부모의 축복을 받으며 결혼했다." }] },

  { word:"bliss", pron:"블리스", pos:"n", level:"C1", meanings:["행복","기쁨"],
    syn:["ecstasy","delight","rapture"], ant:["misery"],
    ex:[{ s:"The first week of the holiday was pure {{}}.", f:"bliss", ko:"휴가 첫 주는 순전한 행복이었다." }] },

  { word:"blizzard", pron:"블리저드", pos:"n", level:"B2", meanings:["눈보라"],
    syn:["snowstorm","whiteout","gale"],
    ex:[{ s:"Schools closed as the {{}} buried the town.", f:"blizzard", ko:"눈보라가 그 도시를 뒤덮으면서 학교들이 문을 닫았다." }] },

  { word:"block out", pron:"블록 아웃", pos:"phr", level:"B2", meanings:["가리다","대강의 계획을 세우다"],
    syn:["shut out","screen off","obscure"], ant:["let in"] },

  { word:"blood sugar", pron:"블러드 슈거", pos:"n", level:"B2", meanings:["혈당"],
    syn:["blood glucose","glucose level","sugar level"],
    ex:[{ s:"Regular exercise helps keep your {{}} stable.", f:"blood sugar", ko:"규칙적인 운동은 혈당을 안정적으로 유지하는 데 도움이 된다." }] },

  { word:"blood type", pron:"블러드 타입", pos:"n", level:"B1", meanings:["혈액형"],
    syn:["blood group","ABO type","blood classification"],
    ex:[{ s:"The hospital recorded her {{}} as O negative.", f:"blood type", ko:"병원은 그녀의 혈액형을 O형 음성으로 기록했다." }] },

  /* 주신 목록의 "재난의, 재앙의; 끔찍한"은 disastrous 계열의 뜻으로,
     원본 복사 오류로 보여 bloodshed의 실제 뜻으로 바로잡았다. */
  { word:"bloodshed", pron:"블러드셰드", pos:"n", level:"C1", meanings:["유혈","살상"],
    syn:["carnage","slaughter","killing"], ant:["peace"],
    ex:[{ s:"The treaty finally ended years of {{}}.", f:"bloodshed", ko:"그 조약은 마침내 수년간의 유혈을 끝냈다." }] },

  { word:"blossom", pron:"블라섬", pos:"v", level:"B2", meanings:["꽃이 피다","번영하다"],
    syn:["bloom","flower","flourish"], ant:["wither"],
    ex:[{ s:"Cherry trees {{}} for only a few days each spring.", f:"blossom", ko:"벚나무는 매년 봄 며칠 동안만 꽃이 핀다." }] },

  { word:"blunt", pron:"블런트", pos:"adj", level:"B2", meanings:["무딘"],
    syn:["dull","unsharpened","rounded"], ant:["sharp"],
    ex:[{ s:"The knife was far too {{}} to cut the bread.", f:"blunt", ko:"그 칼은 빵을 자르기에 너무 무뎠다." }] },

  { word:"blur", pron:"블러", pos:"n", level:"B2", meanings:["흐릿한 것","희미한 형체"],
    syn:["haze","smudge","fog"],
    ex:[{ s:"Without glasses the road sign was just a {{}}.", f:"blur", ko:"안경 없이는 그 도로 표지판이 흐릿한 형체일 뿐이었다." }] },

  { word:"blurry", pron:"블러리", pos:"adj", level:"B2", meanings:["흐릿한","희미한"],
    syn:["fuzzy","indistinct","hazy"], ant:["sharp"],
    ex:[{ s:"All the photos from that night came out {{}}.", f:"blurry", ko:"그날 밤 찍은 사진은 모두 흐릿하게 나왔다." }] },

  { word:"blush", pron:"블러쉬", pos:"v", level:"B1", meanings:["얼굴을 붉히다"],
    syn:["flush","redden","color"],
    ex:[{ s:"She began to {{}} when he praised her work.", f:"blush", ko:"그가 그녀의 작업을 칭찬하자 그녀는 얼굴을 붉히기 시작했다." }] },

  /* ── bo ────────────────────────────────────── */
  { word:"board", pron:"보드", pos:"v", level:"B2", meanings:["탑승하다"],
    syn:["embark","get on","enter"], ant:["disembark"],
    ex:[{ s:"Passengers may {{}} the plane at gate 12.", f:"board", ko:"승객들은 12번 게이트에서 비행기에 탑승할 수 있다." }] },

  { word:"boast", pron:"보우스트", pos:"v", level:"B2", meanings:["뽐내다","자랑하다"],
    syn:["brag","show off","crow"], ant:["downplay"],
    ex:[{ s:"He likes to {{}} about his new car.", f:"boast", ko:"그는 새 차를 자랑하기를 좋아한다." }],
    col:[{ p:"boast {{}} his wealth", a:"about", pool:"prep", note:"boast about ~ : ~을 자랑하다" }] },

  { word:"boastful", pron:"보우스트풀", pos:"adj", level:"C1", meanings:["자랑하는","허풍 떠는"],
    syn:["bragging","vain","conceited"], ant:["modest"],
    ex:[{ s:"His {{}} manner annoyed everyone at the table.", f:"boastful", ko:"그의 허풍 떠는 태도는 식탁의 모두를 짜증나게 했다." }] },

  { word:"bold", pron:"보울드", pos:"adj", level:"B2", meanings:["용기 있는","과감한"],
    syn:["daring","fearless","audacious"], ant:["timid"],
    ex:[{ s:"It was a {{}} decision to quit and start over.", f:"bold", ko:"그만두고 다시 시작한 것은 과감한 결정이었다." }] },

  { word:"bolster", pron:"보울스터", pos:"v", level:"C1", meanings:["북돋우다","강화하다"],
    syn:["strengthen","reinforce","boost"], ant:["undermine"],
    ex:[{ s:"New evidence helped {{}} their argument.", f:"bolster", ko:"새로운 증거가 그들의 주장을 강화하는 데 도움이 되었다." }] },

  { word:"bombard", pron:"봄바드", pos:"v", level:"C1", meanings:["폭격하다","퍼붓다"],
    syn:["shell","pelt","barrage"],
    ex:[{ s:"Reporters {{}} the minister with questions.", f:"bombarded", ko:"기자들은 장관에게 질문을 퍼부었다." }],
    col:[{ p:"bombard him {{}} questions", a:"with", pool:"prep", note:"bombard A with B : A에게 B를 퍼붓다" }] },

  { word:"bond", pron:"본드", pos:"n", level:"B2", meanings:["유대감","결합"],
    syn:["tie","link","attachment"],
    ex:[{ s:"A strong {{}} formed between the two teams.", f:"bond", ko:"두 팀 사이에 강한 유대감이 형성되었다." }] },

  { word:"book", pron:"북", pos:"v", level:"B1", meanings:["예약하다"],
    syn:["reserve","arrange","schedule"], ant:["cancel"],
    ex:[{ s:"We should {{}} a table for eight o'clock.", f:"book", ko:"우리는 8시로 자리를 예약해야 한다." }] },

  { word:"booklet", pron:"북릿", pos:"n", level:"B2", meanings:["소책자","팸플릿"],
    syn:["pamphlet","brochure","leaflet"],
    ex:[{ s:"The museum handed out a free {{}} at the entrance.", f:"booklet", ko:"그 박물관은 입구에서 무료 소책자를 나눠 주었다." }] },

  { word:"boost", pron:"부스트", pos:"v", level:"B2", meanings:["밀어 올리다","상승시키다"],
    syn:["raise","lift","increase"], ant:["reduce"],
    ex:[{ s:"The ad campaign helped {{}} sales by twenty percent.", f:"boost", ko:"그 광고 캠페인은 매출을 20퍼센트 끌어올리는 데 도움이 되었다." }] },

  { word:"border", pron:"보더", pos:"v", level:"B2", meanings:["(경계를) 접하다"],
    syn:["adjoin","abut","flank"],
    ex:[{ s:"Their farmland {{}} the national park.", f:"borders", ko:"그들의 농지는 국립공원과 경계를 접한다." }] },

  { word:"boredom", pron:"보덤", pos:"n", level:"B2", meanings:["권태","지루함"],
    syn:["tedium","monotony","dullness"], ant:["excitement"],
    ex:[{ s:"He read novels to escape the {{}} of the long trip.", f:"boredom", ko:"그는 긴 여행의 지루함을 피하려고 소설을 읽었다." }] },

  { word:"borrow from", pron:"바로우 프롬", pos:"phr", level:"B1", meanings:["~에서 빌리다","~에서 차용하다"],
    syn:["take from","obtain from","get a loan from"], ant:["lend to"] },

  { word:"botanic", pron:"버태닉", pos:"adj", level:"C1", meanings:["식물의","식물학의"],
    syn:["botanical","plant-related","floral"],
    ex:[{ s:"We spent the whole afternoon in the {{}} gardens.", f:"botanic", ko:"우리는 오후 내내 식물원에서 보냈다." }] },

  { word:"botanical", pron:"버태니컬", pos:"adj", level:"C1", meanings:["식물의","식물에서 얻은"],
    syn:["botanic","plant-based","herbal"],
    ex:[{ s:"The book contains detailed {{}} illustrations.", f:"botanical", ko:"그 책에는 상세한 식물 도해가 실려 있다." }] },

  { word:"botany", pron:"바터니", pos:"n", level:"C1", meanings:["식물학"],
    syn:["plant science","phytology","plant biology"],
    ex:[{ s:"She studied {{}} before becoming a gardener.", f:"botany", ko:"그녀는 정원사가 되기 전에 식물학을 공부했다." }] },

  { word:"bothersome", pron:"바더섬", pos:"adj", level:"B2", meanings:["짜증나는","성가신"],
    syn:["annoying","irritating","troublesome"], ant:["pleasant"],
    ex:[{ s:"The constant noise from the street was extremely {{}}.", f:"bothersome", ko:"거리에서 나는 끊임없는 소음은 대단히 성가셨다." }] }
];


/* 아닌 것 고르기에서 반의어(정답)의 뜻을 보여주기 위한 사전 — B 세트 몫.
   words.js 가 만든 객체에 덧붙인다. 재대입하면 A 세트 202개가 사라진다. */
Object.assign(window.ANT_DICT, {
  "afterward":"나중에, 그 후에",
  "annual":"연 1회의, 매년의",
  "artificial":"인공적인",
  "at large":"잡히지 않은, 활개 치는",
  "bankruptcy":"파산",
  "be against":"~에 반대하다",
  "be barred from":"~에서 배제되다, ~을 금지당하다",
  "be capable of":"~할 능력이 있다",
  "be clumsy at":"~에 서투르다",
  "be denied":"거부되다, 받지 못하다",
  "be dismissed as":"~로 일축되다",
  "be fond of":"~을 좋아하다",
  "be free to":"자유롭게 ~할 수 있다",
  "be harmful to":"~에 해롭다",
  "be idle":"놀고 있다, 하는 일이 없다",
  "be ignorant of":"~을 모르다",
  "be independent of":"~에 의존하지 않다",
  "be indifferent to":"~에 무관심하다",
  "be irrelevant to":"~와 무관하다",
  "be manageable":"관리할 수 있다",
  "be obscure":"알려지지 않다, 무명이다",
  "be open to":"~에 열려 있다, 누구나 가능하다",
  "be reluctant to":"~하기를 꺼리다",
  "be resistant to":"~에 잘 견디다, ~에 저항력이 있다",
  "be slow to":"좀처럼 ~하지 않다",
  "be spared":"면하다, 겪지 않다",
  "be unfamiliar with":"~에 익숙하지 않다",
  "be unlikely to":"~할 것 같지 않다",
  "be unmoved by":"~에 감동하지 않다",
  "begin":"시작하다",
  "cancel":"취소하다",
  "civilized":"문명화된, 교양 있는",
  "clarify":"명확히 하다",
  "confident":"자신 있는, 확신하는",
  "contradict":"모순되다, 반박하다",
  "cruel":"잔혹한",
  "curse":"저주, 화근",
  "disembark":"하선하다, 내리다",
  "donor":"기부자, 증여자",
  "downplay":"대단찮게 생각하다, 축소하다",
  "drawback":"결점, 문제점",
  "dye":"염색하다",
  "excitement":"흥분, 설렘",
  "fertile":"비옥한, 다산의",
  "fiction":"허구, 소설",
  "filled":"채워진",
  "forgive oneself":"자신을 용서하다",
  "fully":"완전히, 충분히",
  "hairy":"털이 많은",
  "harmful":"해로운",
  "hated":"미움 받는",
  "impartial":"공정한, 편견 없는",
  "least of all":"그중에서도 특히 아닌",
  "lend to":"~에게 빌려주다",
  "let in":"들이다, 통과시키다",
  "loosen":"풀다, 느슨하게 하다",
  "lose":"지다, 잃다",
  "misery":"고통, 비참",
  "modest":"잘난 척하지 않는, 소박한",
  "monoculture":"단일 재배",
  "monolingual":"1개 국어만 쓰는",
  "one-way":"일방통행의, 편도의",
  "opponent":"반대자, 상대",
  "ordinary":"평범한, 보통의",
  "peace":"평화",
  "penniless":"무일푼의",
  "persistent":"잘 분해되지 않는, 끈질긴",
  "pleasant":"즐거운, 기분 좋은",
  "praise":"칭찬하다",
  "prompt":"즉각적인, 신속한",
  "recover from":"~에서 회복하다",
  "reduce":"줄이다",
  "reject":"거부하다, 물리치다",
  "repel":"쫓아내다, 반발하게 하다",
  "report to":"~에게 보고하다, ~의 지휘를 받다",
  "resonate with":"~에게 공감을 얻다",
  "retreat":"물러나다, 후퇴하다",
  "separate":"분리하다",
  "sharp":"날카로운, 선명한",
  "silence":"침묵, 정적",
  "smolder":"연기만 내며 타다",
  "solvent":"지급 능력이 있는",
  "stand up":"일어서다",
  "stay out of":"~에 관여하지 않다",
  "straighten":"곧게 하다, 펴다",
  "subtle":"미묘한, 은근한",
  "succeed":"성공하다",
  "suffer from":"~로 고통받다",
  "surrender":"항복하다, 굴복하다",
  "sweet":"단, 달콤한",
  "sweetness":"단맛, 감미로움",
  "timid":"겁 많은, 소심한",
  "undermine":"약화시키다",
  "unilateral":"일방적인, 한쪽만의",
  "whisper":"속삭이다",
  "whiten":"희게 하다",
  "wither":"시들다",
  "within":"~안에, ~이내에",
  "worse off":"형편이 더 나쁜"
});
