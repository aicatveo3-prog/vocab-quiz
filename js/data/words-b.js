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
 * 진행 상황: 234단어 중 100단어 (babble ~ bewildered).
 *   챕터는 20단어씩 잘리므로 현재 5챕터. 나머지 134단어는 이후 차수에서 채운다.
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
    ex:[{ s:"She gave me a {{}} look and said nothing.", f:"bewildered", ko:"그녀는 당황한 표정으로 나를 보며 아무 말도 하지 않았다." }] }
];


/* 아닌 것 고르기에서 반의어(정답)의 뜻을 보여주기 위한 사전 — B 세트 몫.
   words.js 가 만든 객체에 덧붙인다. 재대입하면 A 세트 202개가 사라진다. */
Object.assign(window.ANT_DICT, {
  "afterward":"나중에, 그 후에",
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
  "civilized":"문명화된, 교양 있는",
  "clarify":"명확히 하다",
  "confident":"자신 있는, 확신하는",
  "contradict":"모순되다, 반박하다",
  "cruel":"잔혹한",
  "donor":"기부자, 증여자",
  "drawback":"결점, 문제점",
  "fertile":"비옥한, 다산의",
  "forgive oneself":"자신을 용서하다",
  "fully":"완전히, 충분히",
  "hairy":"털이 많은",
  "harmful":"해로운",
  "hated":"미움 받는",
  "least of all":"그중에서도 특히 아닌",
  "lose":"지다, 잃다",
  "one-way":"일방통행의, 편도의",
  "opponent":"반대자, 상대",
  "penniless":"무일푼의",
  "praise":"칭찬하다",
  "prompt":"즉각적인, 신속한",
  "recover from":"~에서 회복하다",
  "reject":"거부하다, 물리치다",
  "repel":"쫓아내다, 반발하게 하다",
  "report to":"~에게 보고하다, ~의 지휘를 받다",
  "resonate with":"~에게 공감을 얻다",
  "retreat":"물러나다, 후퇴하다",
  "silence":"침묵, 정적",
  "solvent":"지급 능력이 있는",
  "stand up":"일어서다",
  "stay out of":"~에 관여하지 않다",
  "straighten":"곧게 하다, 펴다",
  "suffer from":"~로 고통받다",
  "worse off":"형편이 더 나쁜",
  "succeed":"성공하다",
  "surrender":"항복하다, 굴복하다"
});
