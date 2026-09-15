/**
 * 단어 데이터 (공무원 영어 수준 이상 / CEFR C1~C2 중심)
 *
 * 필드 구성 — 있는 필드에 따라 퀴즈 모드가 자동으로 해금됩니다.
 *   word     : 영단어                                    (필수)
 *   pos      : 품사 v / n / adj / adv                     (필수)
 *   level    : CEFR 레벨                                  (필수)
 *   meanings : 한국어 뜻 배열      → 모드 ①(4지선다) ⑤(짝맞추기) 해금
 *   syn      : 유의어 3개 이상     → 모드 ④(아닌 것 고르기) 해금
 *   ant      : 반의어              → 모드 ①의 오답 품질 향상, ④의 오답으로 사용
 *   ex       : 예문 배열           → 모드 ⑬(문장 빈칸) 해금
 *              { s: "{{}} 자리가 빈칸", f: 문장에 들어갈 실제 어형, ko: 번역 }
 *   col      : 연어 배열           → 모드 ⑯(연어 고르기) 해금
 *              { p: "{{}} 자리가 빈칸", a: 정답, pool: "verb"|"prep"|"auto", note: 해설 }
 *
 * 새 단어를 추가할 때 meanings만 채워도 즉시 ①⑤로 출제됩니다.
 */
window.VOCAB = [
  /* ── A ───────────────────────────────────────────── */
  { word:"abate", pos:"v", level:"C1", meanings:["줄어들다","완화되다"],
    syn:["subside","diminish","wane"], ant:["intensify"],
    ex:[{ s:"The storm finally began to {{}} after midnight.", f:"abate", ko:"폭풍은 자정이 지나서야 잦아들기 시작했다." }] },

  { word:"abhor", pos:"v", level:"C1", meanings:["혐오하다","질색하다"],
    syn:["detest","loathe","despise"], ant:["cherish"],
    ex:[{ s:"She came to {{}} the hypocrisy of the committee.", f:"abhor", ko:"그녀는 위원회의 위선을 혐오하게 되었다." }] },

  { word:"abstain", pos:"v", level:"C1", meanings:["삼가다","기권하다"],
    syn:["refrain","forgo","withhold"], ant:["indulge"],
    ex:[{ s:"Three members chose to {{}} from the vote.", f:"abstain", ko:"세 명의 위원이 투표에서 기권하기로 했다." }],
    col:[{ p:"abstain {{}} alcohol", a:"from", pool:"prep", note:"abstain from ~ : ~을 삼가다" }] },

  { word:"abstruse", pos:"adj", level:"C2", meanings:["난해한","심오한"],
    syn:["obscure","arcane","esoteric"], ant:["lucid"],
    ex:[{ s:"His lecture was so {{}} that few students followed it.", f:"abstruse", ko:"그의 강의는 너무 난해해서 이해한 학생이 거의 없었다." }] },

  { word:"accede", pos:"v", level:"C2", meanings:["동의하다","취임하다"],
    syn:["consent","assent","agree"], ant:["refuse"],
    col:[{ p:"accede {{}} the request", a:"to", pool:"prep", note:"accede to ~ : ~에 응하다" }] },

  { word:"acclaim", pos:"n", level:"C1", meanings:["찬사","격찬"],
    syn:["praise","applause","commendation"], ant:["criticism"],
    ex:[{ s:"The novel won critical {{}} on publication.", f:"acclaim", ko:"그 소설은 출간되자 비평계의 찬사를 받았다." }] },

  { word:"acquiesce", pos:"v", level:"C2", meanings:["묵묵히 따르다","마지못해 동의하다"],
    syn:["comply","consent","submit"], ant:["resist"],
    col:[{ p:"acquiesce {{}} the decision", a:"in", pool:"prep", note:"acquiesce in ~ : ~을 묵묵히 받아들이다" }] },

  { word:"acrimonious", pos:"adj", level:"C2", meanings:["험악한","독설의"],
    syn:["bitter","caustic","rancorous"], ant:["amicable"],
    ex:[{ s:"The negotiations ended in an {{}} dispute.", f:"acrimonious", ko:"협상은 험악한 논쟁으로 끝났다." }] },

  { word:"adamant", pos:"adj", level:"C1", meanings:["단호한","요지부동의"],
    syn:["resolute","unyielding","obdurate"], ant:["flexible"],
    ex:[{ s:"He was {{}} that no exceptions would be made.", f:"adamant", ko:"그는 어떤 예외도 없다고 단호했다." }] },

  { word:"adhere", pos:"v", level:"C1", meanings:["고수하다","들러붙다"],
    syn:["comply","conform","abide"], ant:["deviate"],
    col:[{ p:"adhere {{}} the regulations", a:"to", pool:"prep", note:"adhere to ~ : ~을 준수하다" }] },

  { word:"admonish", pos:"v", level:"C1", meanings:["훈계하다","꾸짖다"],
    syn:["reprimand","rebuke","chide"], ant:["commend"],
    ex:[{ s:"The judge {{}} the lawyer for his conduct.", f:"admonished", ko:"판사는 변호사의 행동을 질책했다." }] },

  { word:"adverse", pos:"adj", level:"B2", meanings:["불리한","부정적인"],
    syn:["unfavorable","detrimental","hostile"], ant:["favorable"],
    ex:[{ s:"The drug was withdrawn after {{}} reactions were reported.", f:"adverse", ko:"부작용이 보고된 후 그 약은 회수되었다." }],
    col:[{ p:"{{}} effects", a:"adverse", pool:"auto", note:"adverse effects : 부작용" }] },

  { word:"advocate", pos:"v", level:"B2", meanings:["옹호하다","지지하다"],
    syn:["champion","endorse","promote"], ant:["oppose"],
    ex:[{ s:"Economists {{}} raising interest rates gradually.", f:"advocate", ko:"경제학자들은 금리를 점진적으로 올리는 것을 지지한다." }] },

  { word:"affable", pos:"adj", level:"C1", meanings:["상냥한","친근한"],
    syn:["genial","amiable","cordial"], ant:["aloof"],
    ex:[{ s:"Despite his rank, the general was remarkably {{}}.", f:"affable", ko:"계급에도 불구하고 그 장군은 놀랄 만큼 상냥했다." }] },

  { word:"affluent", pos:"adj", level:"C1", meanings:["부유한","풍족한"],
    syn:["wealthy","prosperous","opulent"], ant:["destitute"],
    ex:[{ s:"The school serves a largely {{}} neighborhood.", f:"affluent", ko:"그 학교는 대체로 부유한 지역을 담당한다." }] },

  { word:"alleviate", pos:"v", level:"C1", meanings:["완화하다","경감하다"],
    syn:["mitigate","relieve","assuage"], ant:["aggravate"],
    ex:[{ s:"The measures did little to {{}} rural poverty.", f:"alleviate", ko:"그 조치는 농촌 빈곤을 완화하는 데 거의 도움이 되지 않았다." }] },

  { word:"allude", pos:"v", level:"C2", meanings:["암시하다","언급하다"],
    syn:["hint","imply","suggest"], ant:["specify"],
    col:[{ p:"allude {{}} the scandal", a:"to", pool:"prep", note:"allude to ~ : ~을 에둘러 언급하다" }] },

  { word:"aloof", pos:"adj", level:"C1", meanings:["냉담한","거리를 두는"],
    syn:["detached","distant","standoffish"], ant:["sociable"],
    ex:[{ s:"He remained {{}} from office politics.", f:"aloof", ko:"그는 사내 정치와 거리를 두었다." }] },

  { word:"altruistic", pos:"adj", level:"C1", meanings:["이타적인"],
    syn:["selfless","benevolent","charitable"], ant:["selfish"],
    ex:[{ s:"Her motives were genuinely {{}}, not commercial.", f:"altruistic", ko:"그녀의 동기는 상업적이 아니라 진정으로 이타적이었다." }] },

  { word:"ambiguous", pos:"adj", level:"B2", meanings:["애매한","모호한"],
    syn:["equivocal","vague","unclear"], ant:["explicit"],
    ex:[{ s:"The wording of the clause is deliberately {{}}.", f:"ambiguous", ko:"그 조항의 문구는 의도적으로 모호하다." }] },

  { word:"ameliorate", pos:"v", level:"C2", meanings:["개선하다","향상시키다"],
    syn:["improve","enhance","upgrade"], ant:["worsen"],
    ex:[{ s:"Reforms were introduced to {{}} working conditions.", f:"ameliorate", ko:"근로 조건을 개선하기 위해 개혁이 도입되었다." }] },

  { word:"amenable", pos:"adj", level:"C2", meanings:["순응하는","잘 받아들이는"],
    syn:["receptive","agreeable","compliant"], ant:["obstinate"],
    col:[{ p:"amenable {{}} change", a:"to", pool:"prep", note:"amenable to ~ : ~을 잘 받아들이는" }] },

  { word:"anomaly", pos:"n", level:"C1", meanings:["이례","변칙"],
    syn:["aberration","irregularity","deviation"], ant:["norm"],
    ex:[{ s:"Scientists could not explain the statistical {{}}.", f:"anomaly", ko:"과학자들은 그 통계적 이상을 설명할 수 없었다." }] },

  { word:"antipathy", pos:"n", level:"C2", meanings:["반감","혐오"],
    syn:["aversion","animosity","hostility"], ant:["affinity"],
    ex:[{ s:"There was mutual {{}} between the two factions.", f:"antipathy", ko:"두 분파 사이에는 상호 반감이 있었다." }] },

  { word:"apathy", pos:"n", level:"C1", meanings:["무관심","냉담"],
    syn:["indifference","unconcern","listlessness"], ant:["enthusiasm"],
    ex:[{ s:"Voter {{}} led to a record low turnout.", f:"apathy", ko:"유권자의 무관심이 사상 최저 투표율로 이어졌다." }] },

  { word:"appease", pos:"v", level:"C1", meanings:["달래다","진정시키다"],
    syn:["placate","pacify","mollify"], ant:["provoke"],
    ex:[{ s:"The concession failed to {{}} the protesters.", f:"appease", ko:"그 양보는 시위자들을 달래지 못했다." }] },

  { word:"apprehensive", pos:"adj", level:"C1", meanings:["불안한","염려하는"],
    syn:["anxious","uneasy","fearful"], ant:["confident"],
    ex:[{ s:"Staff were {{}} about the merger.", f:"apprehensive", ko:"직원들은 합병에 대해 불안해했다." }] },

  { word:"arbitrary", pos:"adj", level:"B2", meanings:["임의의","독단적인"],
    syn:["random","capricious","autocratic"], ant:["reasoned"],
    ex:[{ s:"The deadline seemed entirely {{}} to the team.", f:"arbitrary", ko:"그 마감일은 팀에게 완전히 임의적으로 보였다." }] },

  { word:"arduous", pos:"adj", level:"C1", meanings:["힘든","고된"],
    syn:["strenuous","laborious","grueling"], ant:["effortless"],
    ex:[{ s:"Restoring the manuscript was an {{}} task.", f:"arduous", ko:"그 원고를 복원하는 일은 고된 작업이었다." }] },

  { word:"ascertain", pos:"v", level:"C1", meanings:["확인하다","알아내다"],
    syn:["determine","verify","establish"], ant:["assume"],
    ex:[{ s:"Investigators tried to {{}} the cause of the fire.", f:"ascertain", ko:"조사관들은 화재 원인을 밝히려 했다." }] },

  { word:"aspire", pos:"v", level:"B2", meanings:["열망하다","포부를 갖다"],
    syn:["yearn","strive","seek"],
    col:[{ p:"aspire {{}} a higher position", a:"to", pool:"prep", note:"aspire to ~ : ~을 열망하다" }] },

  { word:"assiduous", pos:"adj", level:"C2", meanings:["근면한","끈기 있는"],
    syn:["diligent","industrious","painstaking"], ant:["indolent"],
    ex:[{ s:"Her {{}} research uncovered the missing records.", f:"assiduous", ko:"그녀의 끈질긴 연구가 누락된 기록을 찾아냈다." }] },

  { word:"astute", pos:"adj", level:"C1", meanings:["예리한","약삭빠른"],
    syn:["shrewd","perceptive","sagacious"], ant:["obtuse"],
    ex:[{ s:"It was an {{}} observation about market timing.", f:"astute", ko:"그것은 시장 타이밍에 관한 예리한 관찰이었다." }] },

  { word:"audacious", pos:"adj", level:"C1", meanings:["대담한","뻔뻔한"],
    syn:["bold","daring","intrepid"], ant:["timid"],
    ex:[{ s:"They devised an {{}} plan to cross the desert.", f:"audacious", ko:"그들은 사막을 횡단하려는 대담한 계획을 세웠다." }] },

  { word:"augment", pos:"v", level:"C1", meanings:["증대시키다","늘리다"],
    syn:["increase","amplify","supplement"], ant:["diminish"],
    ex:[{ s:"He took a second job to {{}} his income.", f:"augment", ko:"그는 수입을 늘리려고 부업을 했다." }] },

  { word:"auspicious", pos:"adj", level:"C2", meanings:["상서로운","길조의"],
    syn:["favorable","promising","propitious"], ant:["ominous"],
    ex:[{ s:"The launch made an {{}} start to the quarter.", f:"auspicious", ko:"그 출시는 분기의 상서로운 출발이 되었다." }] },

  { word:"austere", pos:"adj", level:"C1", meanings:["검소한","엄격한"],
    syn:["severe","ascetic","spartan"], ant:["lavish"],
    ex:[{ s:"The monks led an {{}} life without comfort.", f:"austere", ko:"수도승들은 안락함 없는 검소한 삶을 살았다." }] },

  { word:"averse", pos:"adj", level:"C1", meanings:["싫어하는","반대하는"],
    syn:["opposed","reluctant","disinclined"], ant:["eager"],
    col:[{ p:"averse {{}} risk", a:"to", pool:"prep", note:"averse to ~ : ~을 꺼리는" }] },

  { word:"aversion", pos:"n", level:"C1", meanings:["혐오","반감"],
    syn:["antipathy","repugnance","distaste"], ant:["fondness"],
    ex:[{ s:"He has a deep {{}} to public speaking.", f:"aversion", ko:"그는 대중 연설에 깊은 거부감을 갖고 있다." }] },

  /* ── B ───────────────────────────────────────────── */
  { word:"belligerent", pos:"adj", level:"C2", meanings:["호전적인","적대적인"],
    syn:["hostile","combative","pugnacious"], ant:["peaceable"],
    ex:[{ s:"His {{}} tone derailed the discussion.", f:"belligerent", ko:"그의 호전적인 어조가 논의를 망쳤다." }] },

  { word:"benevolent", pos:"adj", level:"C1", meanings:["자애로운","인정 많은"],
    syn:["kindly","charitable","magnanimous"], ant:["malevolent"],
    ex:[{ s:"The hospital was funded by a {{}} donor.", f:"benevolent", ko:"그 병원은 인정 많은 기부자의 자금으로 운영되었다." }] },

  { word:"bolster", pos:"v", level:"C1", meanings:["강화하다","뒷받침하다"],
    syn:["reinforce","strengthen","buttress"], ant:["undermine"],
    ex:[{ s:"New data helped {{}} their argument.", f:"bolster", ko:"새로운 자료가 그들의 주장을 뒷받침했다." }] },

  { word:"brevity", pos:"n", level:"C2", meanings:["간결함","짧음"],
    syn:["conciseness","succinctness","terseness"], ant:["verbosity"],
    ex:[{ s:"The report is admired for its {{}} and clarity.", f:"brevity", ko:"그 보고서는 간결함과 명료함으로 호평받는다." }] },

  { word:"burgeon", pos:"v", level:"C2", meanings:["급성장하다","싹트다"],
    syn:["flourish","proliferate","thrive"], ant:["dwindle"],
    ex:[{ s:"Online tutoring began to {{}} during the decade.", f:"burgeon", ko:"온라인 과외는 그 10년 동안 급성장하기 시작했다." }] },

  /* ── C ───────────────────────────────────────────── */
  { word:"cajole", pos:"v", level:"C2", meanings:["회유하다","달래어 설득하다"],
    syn:["coax","wheedle","inveigle"], ant:["coerce"],
    ex:[{ s:"She managed to {{}} him into signing.", f:"cajole", ko:"그녀는 그를 달래어 서명하게 만들었다." }] },

  { word:"candid", pos:"adj", level:"B2", meanings:["솔직한","숨김없는"],
    syn:["frank","forthright","blunt"], ant:["evasive"],
    ex:[{ s:"In a rare {{}} moment, he admitted the error.", f:"candid", ko:"드물게 솔직한 순간에 그는 실수를 인정했다." }] },

  { word:"capricious", pos:"adj", level:"C2", meanings:["변덕스러운"],
    syn:["fickle","volatile","whimsical"], ant:["steadfast"],
    ex:[{ s:"The market proved as {{}} as the weather.", f:"capricious", ko:"시장은 날씨만큼 변덕스러운 것으로 드러났다." }] },

  { word:"censure", pos:"v", level:"C2", meanings:["비난하다","견책하다"],
    syn:["condemn","rebuke","reprove"], ant:["commend"],
    ex:[{ s:"The assembly voted to {{}} the minister.", f:"censure", ko:"의회는 그 장관을 견책하기로 표결했다." }] },

  { word:"circumvent", pos:"v", level:"C1", meanings:["우회하다","교묘히 피하다"],
    syn:["evade","bypass","sidestep"], ant:["confront"],
    ex:[{ s:"The firm used shell companies to {{}} the sanctions.", f:"circumvent", ko:"그 회사는 제재를 피하려고 위장 회사를 이용했다." }] },

  { word:"clandestine", pos:"adj", level:"C2", meanings:["은밀한","비밀의"],
    syn:["covert","surreptitious","furtive"], ant:["overt"],
    ex:[{ s:"They held {{}} meetings in a basement.", f:"clandestine", ko:"그들은 지하실에서 은밀한 회합을 가졌다." }] },

  { word:"coalesce", pos:"v", level:"C2", meanings:["합쳐지다","연합하다"],
    syn:["merge","fuse","amalgamate"], ant:["separate"],
    ex:[{ s:"The small parties began to {{}} into a bloc.", f:"coalesce", ko:"소수 정당들이 하나의 블록으로 합쳐지기 시작했다." }] },

  { word:"cogent", pos:"adj", level:"C2", meanings:["설득력 있는","적절한"],
    syn:["compelling","convincing","persuasive"], ant:["unconvincing"],
    ex:[{ s:"She offered a {{}} case for reform.", f:"cogent", ko:"그녀는 개혁에 대한 설득력 있는 논거를 제시했다." }] },

  { word:"cognizant", pos:"adj", level:"C2", meanings:["인식하고 있는","알고 있는"],
    syn:["aware","conscious","mindful"], ant:["oblivious"],
    col:[{ p:"cognizant {{}} the risks", a:"of", pool:"prep", note:"cognizant of ~ : ~을 인식하는" }] },

  { word:"commensurate", pos:"adj", level:"C2", meanings:["상응하는","비례하는"],
    syn:["proportionate","corresponding","equivalent"], ant:["disproportionate"],
    col:[{ p:"commensurate {{}} experience", a:"with", pool:"prep", note:"commensurate with ~ : ~에 상응하는" }] },

  { word:"complacent", pos:"adj", level:"C1", meanings:["자기만족의","안일한"],
    syn:["smug","self-satisfied","unconcerned"], ant:["vigilant"],
    ex:[{ s:"Success made the company dangerously {{}}.", f:"complacent", ko:"성공은 그 회사를 위험하게 안일해지도록 만들었다." }] },

  { word:"comply", pos:"v", level:"B2", meanings:["준수하다","따르다"],
    syn:["obey","conform","adhere"], ant:["defy"],
    col:[{ p:"comply {{}} the rules", a:"with", pool:"prep", note:"comply with ~ : ~을 준수하다" }] },

  { word:"concede", pos:"v", level:"B2", meanings:["인정하다","양보하다"],
    syn:["admit","acknowledge","grant"], ant:["deny"],
    ex:[{ s:"He was forced to {{}} that the data was flawed.", f:"concede", ko:"그는 그 데이터에 결함이 있음을 인정해야 했다." }] },

  { word:"conciliatory", pos:"adj", level:"C2", meanings:["회유적인","달래는"],
    syn:["placatory","appeasing","peacemaking"], ant:["antagonistic"],
    ex:[{ s:"The president struck a {{}} tone in his speech.", f:"conciliatory", ko:"대통령은 연설에서 회유적인 어조를 취했다." }] },

  { word:"condone", pos:"v", level:"C1", meanings:["용인하다","묵인하다"],
    syn:["overlook","excuse","tolerate"], ant:["condemn"],
    ex:[{ s:"The school will not {{}} bullying of any kind.", f:"condone", ko:"학교는 어떤 형태의 괴롭힘도 용인하지 않을 것이다." }] },

  { word:"conducive", pos:"adj", level:"C1", meanings:["도움이 되는","~에 좋은"],
    syn:["favorable","beneficial","helpful"], ant:["detrimental"],
    col:[{ p:"conducive {{}} learning", a:"to", pool:"prep", note:"conducive to ~ : ~에 도움이 되는" }] },

  { word:"congenial", pos:"adj", level:"C2", meanings:["마음이 맞는","쾌적한"],
    syn:["agreeable","amiable","compatible"], ant:["disagreeable"],
    ex:[{ s:"They found a {{}} atmosphere at the small firm.", f:"congenial", ko:"그들은 그 작은 회사에서 마음 맞는 분위기를 발견했다." }] },

  { word:"conjecture", pos:"n", level:"C2", meanings:["추측","억측"],
    syn:["speculation","surmise","supposition"], ant:["certainty"],
    ex:[{ s:"Without evidence it remains pure {{}}.", f:"conjecture", ko:"증거가 없으면 그것은 순전한 추측에 머문다." }] },

  { word:"consensus", pos:"n", level:"B2", meanings:["합의","의견 일치"],
    syn:["agreement","accord","concurrence"], ant:["discord"],
    ex:[{ s:"The panel reached a {{}} after hours of debate.", f:"consensus", ko:"위원단은 몇 시간의 토론 끝에 합의에 도달했다." }],
    col:[{ p:"{{}} a consensus", a:"reach", pool:"verb", note:"reach a consensus : 합의에 이르다" }] },

  { word:"conspicuous", pos:"adj", level:"C1", meanings:["눈에 띄는","현저한"],
    syn:["noticeable","prominent","striking"], ant:["inconspicuous"],
    ex:[{ s:"His absence at the ceremony was {{}}.", f:"conspicuous", ko:"식장에서 그의 부재는 두드러졌다." }] },

  { word:"contentious", pos:"adj", level:"C2", meanings:["논쟁적인","다투기 좋아하는"],
    syn:["controversial","disputed","quarrelsome"], ant:["undisputed"],
    ex:[{ s:"Pension reform is a highly {{}} issue.", f:"contentious", ko:"연금 개혁은 대단히 논쟁적인 사안이다." }] },

  { word:"contrite", pos:"adj", level:"C2", meanings:["회개하는","깊이 뉘우치는"],
    syn:["remorseful","penitent","repentant"], ant:["unrepentant"],
    ex:[{ s:"He seemed genuinely {{}} about the remark.", f:"contrite", ko:"그는 그 발언에 대해 진심으로 뉘우치는 듯했다." }] },

  { word:"conundrum", pos:"n", level:"C2", meanings:["난제","수수께끼"],
    syn:["riddle","puzzle","dilemma"], ant:["solution"],
    ex:[{ s:"Funding the system poses a real {{}}.", f:"conundrum", ko:"그 제도에 재원을 대는 일은 진짜 난제이다." }] },

  { word:"copious", pos:"adj", level:"C2", meanings:["풍부한","방대한"],
    syn:["abundant","plentiful","ample"], ant:["scanty"],
    ex:[{ s:"She took {{}} notes throughout the trial.", f:"copious", ko:"그녀는 재판 내내 방대한 메모를 했다." }] },

  { word:"corroborate", pos:"v", level:"C2", meanings:["입증하다","확증하다"],
    syn:["confirm","substantiate","validate"], ant:["refute"],
    ex:[{ s:"Two witnesses {{}} his account of the night.", f:"corroborated", ko:"두 명의 증인이 그날 밤에 대한 그의 진술을 확증했다." }] },

  { word:"culminate", pos:"v", level:"C1", meanings:["정점에 이르다","막을 내리다"],
    syn:["climax","conclude","peak"], ant:["commence"],
    col:[{ p:"culminate {{}} a final exam", a:"in", pool:"prep", note:"culminate in ~ : 결국 ~로 끝나다" }] },

  { word:"culpable", pos:"adj", level:"C2", meanings:["과실이 있는","비난받을 만한"],
    syn:["blameworthy","guilty","liable"], ant:["blameless"],
    ex:[{ s:"The report found the agency {{}} for the delay.", f:"culpable", ko:"보고서는 그 지연에 대해 해당 기관에 과실이 있다고 보았다." }] },

  { word:"cursory", pos:"adj", level:"C2", meanings:["대충의","형식적인"],
    syn:["perfunctory","hasty","superficial"], ant:["thorough"],
    ex:[{ s:"Even a {{}} glance revealed the error.", f:"cursory", ko:"대충 훑어보기만 해도 그 오류가 드러났다." }] },


  /* ── D ───────────────────────────────────────────── */
  { word:"daunting", pos:"adj", level:"C1", meanings:["위압적인","기가 꺾이는"],
    syn:["intimidating","formidable","forbidding"], ant:["reassuring"],
    ex:[{ s:"Rebuilding the archive was a {{}} prospect.", f:"daunting", ko:"기록물을 재건하는 일은 기가 꺾이는 전망이었다." }] },

  { word:"dearth", pos:"n", level:"C2", meanings:["부족","결핍"],
    syn:["scarcity","shortage","paucity"], ant:["abundance"],
    ex:[{ s:"There is a {{}} of reliable data on the topic.", f:"dearth", ko:"그 주제에 관한 신뢰할 만한 자료가 부족하다." }],
    col:[{ p:"a dearth {{}} evidence", a:"of", pool:"prep", note:"a dearth of ~ : ~의 부족" }] },

  { word:"debilitate", pos:"v", level:"C2", meanings:["약화시키다","쇠약하게 하다"],
    syn:["weaken","enfeeble","sap"], ant:["invigorate"],
    ex:[{ s:"Chronic illness had begun to {{}} him.", f:"debilitate", ko:"만성 질환이 그를 쇠약하게 만들기 시작했다." }] },

  { word:"decorum", pos:"n", level:"C2", meanings:["예절","품위"],
    syn:["propriety","etiquette","dignity"], ant:["impropriety"],
    ex:[{ s:"The court demanded strict {{}} from all parties.", f:"decorum", ko:"법정은 모든 당사자에게 엄격한 품위를 요구했다." }] },

  { word:"deference", pos:"n", level:"C2", meanings:["존중","경의"],
    syn:["respect","regard","esteem"], ant:["disrespect"],
    ex:[{ s:"He withdrew the motion in {{}} to his colleagues.", f:"deference", ko:"그는 동료들을 존중하여 그 안을 철회했다." }] },

  { word:"deleterious", pos:"adj", level:"C2", meanings:["해로운","유해한"],
    syn:["harmful","detrimental","injurious"], ant:["beneficial"],
    ex:[{ s:"Sleep loss has a {{}} effect on memory.", f:"deleterious", ko:"수면 부족은 기억력에 해로운 영향을 준다." }] },

  { word:"delineate", pos:"v", level:"C2", meanings:["윤곽을 그리다","서술하다"],
    syn:["outline","depict","define"], ant:["obscure"],
    ex:[{ s:"The treaty clearly {{}} each nation's waters.", f:"delineates", ko:"그 조약은 각국의 해역을 명확히 규정한다." }] },

  { word:"deplore", pos:"v", level:"C1", meanings:["비난하다","한탄하다"],
    syn:["condemn","denounce","lament"], ant:["applaud"],
    ex:[{ s:"World leaders {{}} the attack on civilians.", f:"deplored", ko:"세계 지도자들은 민간인 공격을 강력히 비난했다." }] },

  { word:"deter", pos:"v", level:"B2", meanings:["저지하다","억제하다"],
    syn:["discourage","dissuade","inhibit"], ant:["encourage"],
    col:[{ p:"deter them {{}} cheating", a:"from", pool:"prep", note:"deter A from B : A가 B하지 못하게 막다" }] },

  { word:"detrimental", pos:"adj", level:"C1", meanings:["해로운","불리한"],
    syn:["harmful","damaging","adverse"], ant:["beneficial"],
    col:[{ p:"detrimental {{}} health", a:"to", pool:"prep", note:"detrimental to ~ : ~에 해로운" }] },

  { word:"devious", pos:"adj", level:"C1", meanings:["교활한","우회하는"],
    syn:["cunning","deceitful","underhanded"], ant:["straightforward"],
    ex:[{ s:"He took a {{}} route to avoid the checkpoint.", f:"devious", ko:"그는 검문소를 피하려고 우회로를 택했다." }] },

  { word:"devoid", pos:"adj", level:"C2", meanings:["결여된","전혀 없는"],
    syn:["lacking","empty","bereft"], ant:["replete"],
    col:[{ p:"devoid {{}} emotion", a:"of", pool:"prep", note:"devoid of ~ : ~이 전혀 없는" }] },

  { word:"didactic", pos:"adj", level:"C2", meanings:["교훈적인","설교조의"],
    syn:["instructive","moralizing","pedantic"], ant:["entertaining"],
    ex:[{ s:"The film is too {{}} to be enjoyable.", f:"didactic", ko:"그 영화는 너무 설교조여서 즐기기 어렵다." }] },

  { word:"diffident", pos:"adj", level:"C2", meanings:["자신 없는","수줍은"],
    syn:["timid","bashful","self-effacing"], ant:["assertive"],
    ex:[{ s:"She was too {{}} to press her claim.", f:"diffident", ko:"그녀는 너무 소극적이어서 자기 주장을 밀어붙이지 못했다." }] },

  { word:"digress", pos:"v", level:"C2", meanings:["벗어나다","탈선하다"],
    syn:["deviate","stray","ramble"], ant:["focus"],
    ex:[{ s:"The speaker tended to {{}} from the main point.", f:"digress", ko:"그 연사는 요점에서 벗어나는 경향이 있었다." }] },

  { word:"diligent", pos:"adj", level:"B2", meanings:["근면한","성실한"],
    syn:["assiduous","industrious","conscientious"], ant:["negligent"],
    ex:[{ s:"A {{}} clerk spotted the discrepancy.", f:"diligent", ko:"성실한 직원이 그 불일치를 발견했다." }] },

  { word:"diminish", pos:"v", level:"B2", meanings:["줄어들다","감소시키다"],
    syn:["reduce","decrease","lessen"], ant:["expand"],
    ex:[{ s:"Interest in the project began to {{}}.", f:"diminish", ko:"그 사업에 대한 관심이 줄어들기 시작했다." }] },

  { word:"discern", pos:"v", level:"C1", meanings:["식별하다","분간하다"],
    syn:["perceive","distinguish","detect"], ant:["overlook"],
    ex:[{ s:"It is hard to {{}} a pattern in the results.", f:"discern", ko:"그 결과에서 어떤 패턴을 분간하기는 어렵다." }] },

  { word:"discrepancy", pos:"n", level:"C1", meanings:["불일치","차이"],
    syn:["inconsistency","disparity","divergence"], ant:["consistency"],
    ex:[{ s:"Auditors found a {{}} in the accounts.", f:"discrepancy", ko:"감사인들은 회계에서 불일치를 발견했다." }] },

  { word:"disdain", pos:"n", level:"C1", meanings:["경멸","무시"],
    syn:["contempt","scorn","derision"], ant:["admiration"],
    ex:[{ s:"He spoke of his rivals with open {{}}.", f:"disdain", ko:"그는 경쟁자들을 노골적인 경멸로 언급했다." }] },

  { word:"disparage", pos:"v", level:"C2", meanings:["폄하하다","비방하다"],
    syn:["belittle","denigrate","deprecate"], ant:["extol"],
    ex:[{ s:"It is unwise to {{}} a competitor publicly.", f:"disparage", ko:"경쟁사를 공개적으로 폄하하는 것은 현명하지 않다." }] },

  { word:"disparate", pos:"adj", level:"C2", meanings:["이질적인","전혀 다른"],
    syn:["dissimilar","divergent","distinct"], ant:["homogeneous"],
    ex:[{ s:"The study merges {{}} sources of evidence.", f:"disparate", ko:"그 연구는 이질적인 증거 출처들을 통합한다." }] },

  { word:"dissent", pos:"n", level:"C2", meanings:["반대","이견"],
    syn:["disagreement","objection","protest"], ant:["assent"],
    ex:[{ s:"The ruling drew {{}} from two justices.", f:"dissent", ko:"그 판결은 두 명의 대법관으로부터 반대 의견을 받았다." }] },

  { word:"divulge", pos:"v", level:"C2", meanings:["누설하다","폭로하다"],
    syn:["disclose","reveal","leak"], ant:["conceal"],
    ex:[{ s:"Employees may not {{}} client information.", f:"divulge", ko:"직원은 고객 정보를 누설할 수 없다." }] },

  { word:"dogmatic", pos:"adj", level:"C2", meanings:["독단적인","교조적인"],
    syn:["opinionated","doctrinaire","dictatorial"], ant:["open-minded"],
    ex:[{ s:"His {{}} stance left no room for debate.", f:"dogmatic", ko:"그의 독단적인 태도는 토론의 여지를 남기지 않았다." }] },

  { word:"dubious", pos:"adj", level:"C1", meanings:["의심스러운","수상한"],
    syn:["doubtful","questionable","suspect"], ant:["certain"],
    ex:[{ s:"The firm has a {{}} record on safety.", f:"dubious", ko:"그 회사는 안전 문제에서 의심스러운 전력이 있다." }] },

  /* ── E ───────────────────────────────────────────── */
  { word:"eclectic", pos:"adj", level:"C2", meanings:["다방면에서 취한","폭넓은"],
    syn:["diverse","wide-ranging","varied"], ant:["uniform"],
    ex:[{ s:"Her reading taste is remarkably {{}}.", f:"eclectic", ko:"그녀의 독서 취향은 놀랄 만큼 폭넓다." }] },

  { word:"efficacious", pos:"adj", level:"C2", meanings:["효과적인","효험 있는"],
    syn:["effective","potent","productive"], ant:["ineffective"],
    ex:[{ s:"The vaccine proved highly {{}} in trials.", f:"efficacious", ko:"그 백신은 임상에서 매우 효과적임이 입증되었다." }] },

  { word:"egregious", pos:"adj", level:"C2", meanings:["터무니없는","지독한"],
    syn:["flagrant","outrageous","blatant"], ant:["trivial"],
    ex:[{ s:"It was an {{}} breach of protocol.", f:"egregious", ko:"그것은 지독한 규정 위반이었다." }] },

  { word:"elicit", pos:"v", level:"C1", meanings:["끌어내다","유도해 내다"],
    syn:["evoke","extract","draw out"], ant:["suppress"],
    ex:[{ s:"The survey failed to {{}} useful responses.", f:"elicit", ko:"그 설문은 유용한 응답을 끌어내지 못했다." }] },

  { word:"eloquent", pos:"adj", level:"C1", meanings:["웅변의","말솜씨 좋은"],
    syn:["articulate","expressive","fluent"], ant:["inarticulate"],
    ex:[{ s:"She gave an {{}} defense of the policy.", f:"eloquent", ko:"그녀는 그 정책에 대해 웅변적인 변호를 했다." }] },

  { word:"elusive", pos:"adj", level:"C1", meanings:["파악하기 어려운","포착하기 힘든"],
    syn:["evasive","intangible","fleeting"], ant:["obvious"],
    ex:[{ s:"A lasting settlement has proved {{}}.", f:"elusive", ko:"지속적인 합의는 좀처럼 이루기 어려웠다." }] },

  { word:"embellish", pos:"v", level:"C2", meanings:["장식하다","윤색하다"],
    syn:["adorn","decorate","exaggerate"], ant:["simplify"],
    ex:[{ s:"He tends to {{}} stories about his past.", f:"embellish", ko:"그는 자기 과거 이야기를 부풀리는 경향이 있다." }] },

  { word:"eminent", pos:"adj", level:"C1", meanings:["저명한","탁월한"],
    syn:["distinguished","renowned","illustrious"], ant:["obscure"],
    ex:[{ s:"An {{}} historian chaired the committee.", f:"eminent", ko:"저명한 역사학자가 위원회를 주재했다." }] },

  { word:"empirical", pos:"adj", level:"C1", meanings:["경험적인","실증적인"],
    syn:["observed","experiential","factual"], ant:["speculative"],
    ex:[{ s:"The claim lacks any {{}} support.", f:"empirical", ko:"그 주장은 실증적 근거가 전혀 없다." }] },

  { word:"emulate", pos:"v", level:"C1", meanings:["모방하다","본받다"],
    syn:["imitate","mimic","copy"],
    ex:[{ s:"Younger firms tried to {{}} its business model.", f:"emulate", ko:"신생 기업들은 그 사업 모델을 모방하려 했다." }] },

  { word:"enervate", pos:"v", level:"C2", meanings:["기력을 빼앗다"],
    syn:["weaken","exhaust","debilitate"], ant:["energize"],
    ex:[{ s:"The relentless heat began to {{}} the runners.", f:"enervate", ko:"끊임없는 더위가 주자들의 기력을 빼앗기 시작했다." }] },

  { word:"engender", pos:"v", level:"C2", meanings:["낳다","야기하다"],
    syn:["generate","produce","provoke"], ant:["stifle"],
    ex:[{ s:"Transparency helps {{}} public trust.", f:"engender", ko:"투명성은 공적 신뢰를 낳는 데 도움이 된다." }] },

  { word:"enigmatic", pos:"adj", level:"C2", meanings:["불가사의한","알 수 없는"],
    syn:["mysterious","cryptic","inscrutable"], ant:["transparent"],
    ex:[{ s:"He gave an {{}} smile and said nothing.", f:"enigmatic", ko:"그는 알 수 없는 미소를 지으며 아무 말도 하지 않았다." }] },

  { word:"ephemeral", pos:"adj", level:"C2", meanings:["순간적인","단명하는"],
    syn:["transient","fleeting","short-lived"], ant:["enduring"],
    ex:[{ s:"Online fame is often {{}}.", f:"ephemeral", ko:"온라인에서의 명성은 종종 순간적이다." }] },

  { word:"equivocal", pos:"adj", level:"C2", meanings:["모호한","애매한"],
    syn:["ambiguous","vague","evasive"], ant:["unequivocal"],
    ex:[{ s:"The test results were {{}} and had to be repeated.", f:"equivocal", ko:"검사 결과가 모호해서 재검사해야 했다." }] },

  { word:"erudite", pos:"adj", level:"C2", meanings:["학식 있는","박학한"],
    syn:["learned","scholarly","well-read"], ant:["ignorant"],
    ex:[{ s:"His {{}} commentary impressed the panel.", f:"erudite", ko:"그의 박학한 논평은 심사단에 깊은 인상을 주었다." }] },

  { word:"eschew", pos:"v", level:"C2", meanings:["피하다","멀리하다"],
    syn:["avoid","shun","forgo"], ant:["embrace"],
    ex:[{ s:"The author {{}} technical jargon entirely.", f:"eschews", ko:"그 저자는 전문 용어를 전적으로 피한다." }] },

  { word:"esoteric", pos:"adj", level:"C2", meanings:["소수만 아는","난해한"],
    syn:["obscure","arcane","abstruse"], ant:["accessible"],
    ex:[{ s:"The debate turned on an {{}} point of law.", f:"esoteric", ko:"그 논쟁은 난해한 법리적 쟁점을 두고 벌어졌다." }] },

  { word:"exacerbate", pos:"v", level:"C2", meanings:["악화시키다","심화시키다"],
    syn:["aggravate","worsen","intensify"], ant:["alleviate"],
    ex:[{ s:"Tax cuts may {{}} the deficit.", f:"exacerbate", ko:"감세는 재정 적자를 악화시킬 수 있다." }] },

  { word:"exempt", pos:"adj", level:"B2", meanings:["면제된"],
    syn:["excused","immune","released"], ant:["liable"],
    col:[{ p:"exempt {{}} tax", a:"from", pool:"prep", note:"exempt from ~ : ~을 면제받은" }] },

  { word:"exemplary", pos:"adj", level:"C1", meanings:["모범적인","훌륭한"],
    syn:["commendable","admirable","model"], ant:["deplorable"],
    ex:[{ s:"Her conduct throughout was {{}}.", f:"exemplary", ko:"그녀의 처신은 처음부터 끝까지 모범적이었다." }] },

  { word:"exhaustive", pos:"adj", level:"C1", meanings:["철저한","빠짐없는"],
    syn:["thorough","comprehensive","in-depth"], ant:["cursory"],
    ex:[{ s:"They carried out an {{}} review of the files.", f:"exhaustive", ko:"그들은 서류에 대한 철저한 검토를 수행했다." }] },

  { word:"exonerate", pos:"v", level:"C2", meanings:["무죄임을 밝히다","혐의를 벗기다"],
    syn:["acquit","absolve","clear"], ant:["convict"],
    ex:[{ s:"New evidence served to {{}} the defendant.", f:"exonerate", ko:"새로운 증거가 피고의 혐의를 벗겨 주었다." }] },

  { word:"expedite", pos:"v", level:"C1", meanings:["신속히 처리하다","촉진하다"],
    syn:["accelerate","hasten","fast-track"], ant:["delay"],
    ex:[{ s:"An extra fee will {{}} your application.", f:"expedite", ko:"추가 수수료를 내면 신청이 신속히 처리된다." }] },

  { word:"explicit", pos:"adj", level:"B2", meanings:["명시적인","분명한"],
    syn:["clear","unambiguous","definite"], ant:["implicit"],
    ex:[{ s:"The contract is {{}} about payment terms.", f:"explicit", ko:"그 계약서는 지급 조건에 대해 명시적이다." }] },

  { word:"extol", pos:"v", level:"C2", meanings:["극찬하다","격찬하다"],
    syn:["praise","laud","glorify"], ant:["denounce"],
    ex:[{ s:"Critics {{}} the virtues of the new design.", f:"extol", ko:"비평가들은 새 디자인의 장점을 극찬한다." }] },

  { word:"extraneous", pos:"adj", level:"C2", meanings:["관련 없는","불필요한"],
    syn:["irrelevant","superfluous","extrinsic"], ant:["pertinent"],
    ex:[{ s:"Cut any {{}} detail from the summary.", f:"extraneous", ko:"요약문에서 관련 없는 세부 사항은 모두 삭제하라." }] },

  /* ── F ───────────────────────────────────────────── */
  { word:"facilitate", pos:"v", level:"B2", meanings:["촉진하다","용이하게 하다"],
    syn:["ease","expedite","assist"], ant:["hinder"],
    ex:[{ s:"The platform is designed to {{}} collaboration.", f:"facilitate", ko:"그 플랫폼은 협업을 용이하게 하도록 설계되었다." }] },

  { word:"fallacious", pos:"adj", level:"C2", meanings:["잘못된","허위의"],
    syn:["erroneous","misleading","specious"], ant:["valid"],
    ex:[{ s:"The argument rests on a {{}} assumption.", f:"fallacious", ko:"그 논증은 잘못된 가정에 기초한다." }] },

  { word:"fastidious", pos:"adj", level:"C2", meanings:["까다로운","꼼꼼한"],
    syn:["meticulous","finicky","punctilious"], ant:["careless"],
    ex:[{ s:"He is {{}} about grammar and punctuation.", f:"fastidious", ko:"그는 문법과 구두점에 까다롭다." }] },

  { word:"feasible", pos:"adj", level:"B2", meanings:["실현 가능한"],
    syn:["viable","practicable","achievable"], ant:["unworkable"],
    ex:[{ s:"The engineers judged the plan technically {{}}.", f:"feasible", ko:"기술자들은 그 계획이 기술적으로 실현 가능하다고 판단했다." }] },

  { word:"fervent", pos:"adj", level:"C2", meanings:["열렬한","강렬한"],
    syn:["ardent","passionate","zealous"], ant:["apathetic"],
    ex:[{ s:"He is a {{}} supporter of judicial reform.", f:"fervent", ko:"그는 사법 개혁의 열렬한 지지자이다." }] },

  { word:"flagrant", pos:"adj", level:"C2", meanings:["명백한","노골적인"],
    syn:["blatant","egregious","glaring"], ant:["subtle"],
    ex:[{ s:"It was a {{}} violation of the treaty.", f:"flagrant", ko:"그것은 조약에 대한 명백한 위반이었다." }] },

  { word:"formidable", pos:"adj", level:"C1", meanings:["가공할","강력한"],
    syn:["daunting","intimidating","fearsome"], ant:["feeble"],
    ex:[{ s:"They face a {{}} opponent in the final.", f:"formidable", ko:"그들은 결승에서 강력한 상대와 맞선다." }] },

  { word:"frugal", pos:"adj", level:"C1", meanings:["절약하는","검소한"],
    syn:["thrifty","economical","sparing"], ant:["extravagant"],
    ex:[{ s:"Her {{}} habits allowed her to retire early.", f:"frugal", ko:"검소한 습관 덕분에 그녀는 조기 은퇴할 수 있었다." }] },

  { word:"futile", pos:"adj", level:"C1", meanings:["헛된","무익한"],
    syn:["pointless","fruitless","vain"], ant:["productive"],
    ex:[{ s:"Further appeals proved {{}}.", f:"futile", ko:"추가 항소는 헛된 것으로 드러났다." }] },

  /* ── G · H ───────────────────────────────────────── */
  { word:"garrulous", pos:"adj", level:"C2", meanings:["수다스러운"],
    syn:["talkative","loquacious","voluble"], ant:["taciturn"],
    ex:[{ s:"The {{}} guide never stopped talking.", f:"garrulous", ko:"그 수다스러운 안내원은 말을 멈추지 않았다." }] },

  { word:"germane", pos:"adj", level:"C2", meanings:["적절한","밀접한 관련이 있는"],
    syn:["relevant","pertinent","applicable"], ant:["irrelevant"],
    col:[{ p:"germane {{}} the issue", a:"to", pool:"prep", note:"germane to ~ : ~와 관련 있는" }] },

  { word:"gregarious", pos:"adj", level:"C2", meanings:["사교적인","군집성의"],
    syn:["sociable","outgoing","convivial"], ant:["reclusive"],
    ex:[{ s:"A {{}} child, she made friends instantly.", f:"gregarious", ko:"사교적인 아이여서 그녀는 금방 친구를 사귀었다." }] },

  { word:"grievance", pos:"n", level:"C1", meanings:["불만","고충"],
    syn:["complaint","resentment","objection"],
    ex:[{ s:"Workers filed a formal {{}} with management.", f:"grievance", ko:"근로자들은 경영진에 정식 고충을 제기했다." }] },

  { word:"hackneyed", pos:"adj", level:"C2", meanings:["진부한","상투적인"],
    syn:["trite","banal","clichéd"], ant:["original"],
    ex:[{ s:"The speech was full of {{}} phrases.", f:"hackneyed", ko:"그 연설은 상투적인 표현으로 가득했다." }] },

  { word:"hamper", pos:"v", level:"C1", meanings:["방해하다","저해하다"],
    syn:["hinder","impede","obstruct"], ant:["facilitate"],
    ex:[{ s:"Heavy fog {{}} the rescue effort.", f:"hampered", ko:"짙은 안개가 구조 작업을 방해했다." }] },

  { word:"haphazard", pos:"adj", level:"C1", meanings:["무계획적인","되는대로의"],
    syn:["disorganized","random","slapdash"], ant:["systematic"],
    ex:[{ s:"Records were kept in a {{}} manner.", f:"haphazard", ko:"기록은 되는대로 관리되었다." }] },

  { word:"hypocritical", pos:"adj", level:"C1", meanings:["위선적인"],
    syn:["insincere","two-faced","sanctimonious"], ant:["sincere"],
    ex:[{ s:"It is {{}} to demand cuts while raising your own pay.", f:"hypocritical", ko:"자기 급여를 올리면서 삭감을 요구하는 것은 위선적이다." }] },

  /* ── I ───────────────────────────────────────────── */
  { word:"impartial", pos:"adj", level:"C1", meanings:["공정한","편견 없는"],
    syn:["unbiased","neutral","disinterested"], ant:["partisan"],
    ex:[{ s:"Both sides accepted an {{}} mediator.", f:"impartial", ko:"양측은 공정한 중재자를 받아들였다." }] },

  { word:"impeccable", pos:"adj", level:"C2", meanings:["흠 없는","완벽한"],
    syn:["flawless","faultless","immaculate"], ant:["flawed"],
    ex:[{ s:"His credentials are {{}}.", f:"impeccable", ko:"그의 자격 요건은 흠잡을 데가 없다." }] },

  { word:"impede", pos:"v", level:"C1", meanings:["방해하다","지연시키다"],
    syn:["hinder","obstruct","hamper"], ant:["expedite"],
    ex:[{ s:"Red tape continues to {{}} small businesses.", f:"impede", ko:"관료적 절차가 계속 소규모 사업체를 가로막는다." }] },

  { word:"imperative", pos:"adj", level:"C1", meanings:["필수적인","긴급한"],
    syn:["essential","crucial","vital"], ant:["optional"],
    ex:[{ s:"It is {{}} that we act before the deadline.", f:"imperative", ko:"마감 전에 행동하는 것이 필수적이다." }] },

  { word:"impervious", pos:"adj", level:"C2", meanings:["영향받지 않는","불침투성의"],
    syn:["immune","resistant","unaffected"], ant:["susceptible"],
    col:[{ p:"impervious {{}} criticism", a:"to", pool:"prep", note:"impervious to ~ : ~에 아랑곳하지 않는" }] },

  { word:"impetuous", pos:"adj", level:"C2", meanings:["충동적인","성급한"],
    syn:["rash","impulsive","hasty"], ant:["cautious"],
    ex:[{ s:"One {{}} decision cost him the election.", f:"impetuous", ko:"한 번의 성급한 결정이 그에게 선거 패배를 안겼다." }] },

  { word:"implausible", pos:"adj", level:"C1", meanings:["믿기 어려운","설득력 없는"],
    syn:["improbable","unconvincing","far-fetched"], ant:["credible"],
    ex:[{ s:"His alibi struck the jury as {{}}.", f:"implausible", ko:"그의 알리바이는 배심원단에게 믿기 어렵게 다가왔다." }] },

  { word:"inadvertent", pos:"adj", level:"C1", meanings:["의도치 않은","부주의한"],
    syn:["unintentional","accidental","unwitting"], ant:["deliberate"],
    ex:[{ s:"The leak was {{}} rather than malicious.", f:"inadvertent", ko:"그 유출은 악의적이기보다 의도치 않은 것이었다." }] },

  { word:"incessant", pos:"adj", level:"C1", meanings:["끊임없는","쉴 새 없는"],
    syn:["ceaseless","constant","unremitting"], ant:["intermittent"],
    ex:[{ s:"The {{}} noise made concentration impossible.", f:"incessant", ko:"끊임없는 소음 때문에 집중이 불가능했다." }] },

  { word:"incisive", pos:"adj", level:"C2", meanings:["예리한","날카로운"],
    syn:["penetrating","acute","trenchant"], ant:["vague"],
    ex:[{ s:"She is known for {{}} questioning.", f:"incisive", ko:"그녀는 예리한 질문으로 유명하다." }] },

  { word:"incongruous", pos:"adj", level:"C2", meanings:["어울리지 않는","부조화한"],
    syn:["inappropriate","discordant","mismatched"], ant:["harmonious"],
    ex:[{ s:"The tower looks {{}} beside the old church.", f:"incongruous", ko:"그 탑은 오래된 교회 옆에서 어울리지 않아 보인다." }] },

  { word:"indict", pos:"v", level:"C2", meanings:["기소하다","고발하다"],
    syn:["charge","accuse","arraign"], ant:["acquit"],
    ex:[{ s:"A grand jury voted to {{}} the executives.", f:"indict", ko:"대배심은 그 임원들을 기소하기로 표결했다." }] },

  { word:"indispensable", pos:"adj", level:"C1", meanings:["필수불가결한"],
    syn:["essential","vital","requisite"], ant:["dispensable"],
    ex:[{ s:"Clean water is {{}} to public health.", f:"indispensable", ko:"깨끗한 물은 공중 보건에 필수불가결하다." }] },

  { word:"indicative", pos:"adj", level:"C1", meanings:["나타내는","시사하는"],
    syn:["suggestive","symptomatic","representative"],
    col:[{ p:"indicative {{}} a wider trend", a:"of", pool:"prep", note:"indicative of ~ : ~을 시사하는" }] },

  { word:"indolent", pos:"adj", level:"C2", meanings:["게으른","나태한"],
    syn:["lazy","slothful","idle"], ant:["industrious"],
    ex:[{ s:"He was dismissed as an {{}} student.", f:"indolent", ko:"그는 나태한 학생으로 평가되어 퇴출되었다." }] },

  { word:"inevitable", pos:"adj", level:"B2", meanings:["불가피한","필연적인"],
    syn:["unavoidable","inescapable","certain"], ant:["avoidable"],
    ex:[{ s:"Some delay is {{}} at this stage.", f:"inevitable", ko:"이 단계에서 약간의 지연은 불가피하다." }] },

  { word:"inexorable", pos:"adj", level:"C2", meanings:["멈출 수 없는","냉혹한"],
    syn:["relentless","unstoppable","implacable"], ant:["yielding"],
    ex:[{ s:"The {{}} rise in costs alarmed investors.", f:"inexorable", ko:"멈출 수 없는 비용 상승이 투자자들을 불안하게 했다." }] },

  { word:"infallible", pos:"adj", level:"C2", meanings:["절대 틀리지 않는","확실한"],
    syn:["unerring","faultless","dependable"], ant:["fallible"],
    ex:[{ s:"No screening method is entirely {{}}.", f:"infallible", ko:"어떤 검사 방법도 완전히 무결한 것은 아니다." }] },

  { word:"ingenuous", pos:"adj", level:"C2", meanings:["순진한","솔직한"],
    syn:["naive","artless","guileless"], ant:["devious"],
    ex:[{ s:"His {{}} honesty disarmed the interviewer.", f:"ingenuous", ko:"그의 순진한 정직함은 면접관의 경계를 풀었다." }] },

  { word:"inherent", pos:"adj", level:"C1", meanings:["내재된","본질적인"],
    syn:["intrinsic","innate","built-in"], ant:["extraneous"],
    ex:[{ s:"There are risks {{}} in any investment.", f:"inherent", ko:"어떤 투자에도 내재된 위험이 있다." }] },

  { word:"innocuous", pos:"adj", level:"C2", meanings:["무해한","악의 없는"],
    syn:["harmless","inoffensive","benign"], ant:["pernicious"],
    ex:[{ s:"What seemed an {{}} remark caused offense.", f:"innocuous", ko:"악의 없어 보였던 말이 불쾌감을 일으켰다." }] },

  { word:"insidious", pos:"adj", level:"C2", meanings:["서서히 퍼지는","교활한"],
    syn:["stealthy","treacherous","subtle"], ant:["overt"],
    ex:[{ s:"Corruption has an {{}} effect on institutions.", f:"insidious", ko:"부패는 제도에 서서히 스며드는 영향을 미친다." }] },

  { word:"insipid", pos:"adj", level:"C2", meanings:["맛없는","재미없는"],
    syn:["bland","vapid","dull"], ant:["flavorful"],
    ex:[{ s:"The sequel was an {{}} imitation of the original.", f:"insipid", ko:"그 속편은 원작의 맹맹한 모방이었다." }] },

  { word:"insolent", pos:"adj", level:"C2", meanings:["무례한","건방진"],
    syn:["impertinent","impudent","insubordinate"], ant:["respectful"],
    ex:[{ s:"The recruit was punished for his {{}} reply.", f:"insolent", ko:"그 신병은 건방진 대답 때문에 처벌받았다." }] },

  { word:"intransigent", pos:"adj", level:"C2", meanings:["비타협적인","완고한"],
    syn:["uncompromising","obstinate","inflexible"], ant:["accommodating"],
    ex:[{ s:"Both sides remained {{}} after a week of talks.", f:"intransigent", ko:"일주일간의 회담 후에도 양측은 비타협적이었다." }] },

  { word:"intrepid", pos:"adj", level:"C2", meanings:["용맹한","두려움 없는"],
    syn:["fearless","dauntless","valiant"], ant:["cowardly"],
    ex:[{ s:"An {{}} reporter entered the war zone.", f:"intrepid", ko:"용맹한 기자가 전쟁 지역에 들어갔다." }] },

  { word:"inundate", pos:"v", level:"C2", meanings:["침수시키다","쇄도하다"],
    syn:["flood","swamp","overwhelm"],
    ex:[{ s:"The office was {{}} with complaints.", f:"inundated", ko:"사무실은 항의로 넘쳐났다." }] },

  { word:"irrevocable", pos:"adj", level:"C2", meanings:["되돌릴 수 없는","최종적인"],
    syn:["irreversible","final","binding"], ant:["reversible"],
    ex:[{ s:"Signing makes the transfer {{}}.", f:"irrevocable", ko:"서명하면 그 양도는 되돌릴 수 없게 된다." }] },


  /* ── L · M ───────────────────────────────────────── */
  { word:"laconic", pos:"adj", level:"C2", meanings:["말이 적은","간결한"],
    syn:["terse","succinct","concise"], ant:["verbose"],
    ex:[{ s:"His {{}} reply ended the conversation.", f:"laconic", ko:"그의 짧은 대답이 대화를 끝냈다." }] },

  { word:"lament", pos:"v", level:"C1", meanings:["애도하다","한탄하다"],
    syn:["mourn","grieve","bemoan"], ant:["rejoice"],
    ex:[{ s:"Historians {{}} the loss of the archive.", f:"lament", ko:"역사가들은 그 기록물의 소실을 한탄한다." }] },

  { word:"laud", pos:"v", level:"C2", meanings:["칭송하다","찬양하다"],
    syn:["praise","extol","acclaim"], ant:["criticize"],
    ex:[{ s:"The press {{}} her for the discovery.", f:"lauded", ko:"언론은 그 발견에 대해 그녀를 칭송했다." }] },

  { word:"lenient", pos:"adj", level:"C1", meanings:["관대한","너그러운"],
    syn:["tolerant","merciful","permissive"], ant:["stringent"],
    ex:[{ s:"Critics called the sentence far too {{}}.", f:"lenient", ko:"비판자들은 그 형량이 너무 관대하다고 말했다." }] },

  { word:"lethargic", pos:"adj", level:"C1", meanings:["무기력한","활기 없는"],
    syn:["sluggish","listless","torpid"], ant:["energetic"],
    ex:[{ s:"Poor sleep left him {{}} all morning.", f:"lethargic", ko:"수면 부족으로 그는 아침 내내 무기력했다." }] },

  { word:"lucid", pos:"adj", level:"C2", meanings:["명료한","맑은"],
    syn:["clear","coherent","intelligible"], ant:["confusing"],
    ex:[{ s:"She gave a {{}} explanation of the theory.", f:"lucid", ko:"그녀는 그 이론에 대해 명료한 설명을 했다." }] },

  { word:"lucrative", pos:"adj", level:"C1", meanings:["수익성 있는","돈이 되는"],
    syn:["profitable","remunerative","gainful"], ant:["unprofitable"],
    ex:[{ s:"Consulting proved more {{}} than teaching.", f:"lucrative", ko:"컨설팅이 강의보다 더 수익성이 좋은 것으로 드러났다." }] },

  { word:"magnanimous", pos:"adj", level:"C2", meanings:["도량이 넓은","관대한"],
    syn:["generous","forgiving","noble"], ant:["petty"],
    ex:[{ s:"He was {{}} in defeat and praised his rival.", f:"magnanimous", ko:"그는 패배에도 도량이 넓어 경쟁자를 칭찬했다." }] },

  { word:"malicious", pos:"adj", level:"C1", meanings:["악의적인","심술궂은"],
    syn:["spiteful","malevolent","vindictive"], ant:["benevolent"],
    ex:[{ s:"The post contained {{}} falsehoods.", f:"malicious", ko:"그 게시물에는 악의적인 허위 사실이 담겨 있었다." }] },

  { word:"meager", pos:"adj", level:"C1", meanings:["빈약한","불충분한"],
    syn:["scanty","paltry","sparse"], ant:["plentiful"],
    ex:[{ s:"They survived on a {{}} pension.", f:"meager", ko:"그들은 빈약한 연금으로 생계를 이었다." }] },

  { word:"meticulous", pos:"adj", level:"C1", meanings:["세심한","꼼꼼한"],
    syn:["thorough","scrupulous","painstaking"], ant:["sloppy"],
    ex:[{ s:"The restoration required {{}} attention to detail.", f:"meticulous", ko:"그 복원 작업은 세부에 대한 꼼꼼한 주의를 요구했다." }] },

  { word:"mitigate", pos:"v", level:"C1", meanings:["완화하다","경감하다"],
    syn:["alleviate","lessen","temper"], ant:["exacerbate"],
    ex:[{ s:"Planting trees can help {{}} urban heat.", f:"mitigate", ko:"나무를 심는 것은 도시 열섬을 완화하는 데 도움이 된다." }] },

  { word:"mundane", pos:"adj", level:"C1", meanings:["평범한","일상적인"],
    syn:["ordinary","routine","humdrum"], ant:["extraordinary"],
    ex:[{ s:"Most of the job involves {{}} paperwork.", f:"mundane", ko:"그 일의 대부분은 평범한 서류 작업이다." }] },

  { word:"myriad", pos:"adj", level:"C1", meanings:["무수한","막대한"],
    syn:["countless","innumerable","untold"], ant:["few"],
    ex:[{ s:"The city faces {{}} logistical problems.", f:"myriad", ko:"그 도시는 무수한 물류 문제에 직면해 있다." }] },

  /* ── N · O ───────────────────────────────────────── */
  { word:"nebulous", pos:"adj", level:"C2", meanings:["모호한","흐릿한"],
    syn:["vague","hazy","indistinct"], ant:["definite"],
    ex:[{ s:"Their strategy remains rather {{}}.", f:"nebulous", ko:"그들의 전략은 여전히 다소 모호하다." }] },

  { word:"negligible", pos:"adj", level:"C1", meanings:["무시할 만한","미미한"],
    syn:["insignificant","trivial","minute"], ant:["substantial"],
    ex:[{ s:"The difference in cost was {{}}.", f:"negligible", ko:"비용 차이는 미미했다." }] },

  { word:"notorious", pos:"adj", level:"B2", meanings:["악명 높은"],
    syn:["infamous","disreputable","ill-famed"], ant:["esteemed"],
    ex:[{ s:"The junction is {{}} for accidents.", f:"notorious", ko:"그 교차로는 사고로 악명이 높다." }],
    col:[{ p:"notorious {{}} corruption", a:"for", pool:"prep", note:"notorious for ~ : ~로 악명 높은" }] },

  { word:"novice", pos:"n", level:"B2", meanings:["초보자","신참"],
    syn:["beginner","neophyte","apprentice"], ant:["veteran"],
    ex:[{ s:"The course is aimed at the complete {{}}.", f:"novice", ko:"그 강좌는 완전 초보자를 대상으로 한다." }] },

  { word:"oblivious", pos:"adj", level:"C1", meanings:["의식하지 못하는","잊고 있는"],
    syn:["unaware","heedless","ignorant"], ant:["cognizant"],
    col:[{ p:"oblivious {{}} the danger", a:"to", pool:"prep", note:"oblivious to ~ : ~을 알아채지 못하는" }] },

  { word:"obsolete", pos:"adj", level:"B2", meanings:["구식의","쓸모없어진"],
    syn:["outdated","antiquated","defunct"], ant:["current"],
    ex:[{ s:"The format became {{}} within five years.", f:"obsolete", ko:"그 포맷은 5년 안에 구식이 되었다." }] },

  { word:"obstinate", pos:"adj", level:"C1", meanings:["고집스러운","완강한"],
    syn:["stubborn","headstrong","intransigent"], ant:["compliant"],
    ex:[{ s:"He was {{}} in refusing any compromise.", f:"obstinate", ko:"그는 어떤 타협도 거부하며 완강했다." }] },

  { word:"onerous", pos:"adj", level:"C2", meanings:["부담스러운","까다로운"],
    syn:["burdensome","arduous","taxing"], ant:["effortless"],
    ex:[{ s:"The contract imposes {{}} reporting duties.", f:"onerous", ko:"그 계약은 부담스러운 보고 의무를 부과한다." }] },

  { word:"opaque", pos:"adj", level:"C1", meanings:["불투명한","이해하기 어려운"],
    syn:["unclear","obscure","impenetrable"], ant:["transparent"],
    ex:[{ s:"The funding structure is deliberately {{}}.", f:"opaque", ko:"그 자금 구조는 의도적으로 불투명하다." }] },

  { word:"ostensible", pos:"adj", level:"C2", meanings:["표면상의","겉보기의"],
    syn:["apparent","outward","professed"], ant:["actual"],
    ex:[{ s:"The {{}} reason was budgetary, but politics played a role.", f:"ostensible", ko:"표면상의 이유는 예산이었지만 정치가 작용했다." }] },

  { word:"ostracize", pos:"v", level:"C2", meanings:["배척하다","외면하다"],
    syn:["shun","exclude","banish"], ant:["welcome"],
    ex:[{ s:"Whistleblowers are often {{}} by colleagues.", f:"ostracized", ko:"내부 고발자는 종종 동료들에게 배척당한다." }] },

  /* ── P ───────────────────────────────────────────── */
  { word:"painstaking", pos:"adj", level:"C1", meanings:["공들인","고생스러운"],
    syn:["meticulous","thorough","diligent"], ant:["slapdash"],
    ex:[{ s:"The map was the result of {{}} fieldwork.", f:"painstaking", ko:"그 지도는 공들인 현장 조사의 결과물이었다." }] },

  { word:"paramount", pos:"adj", level:"C1", meanings:["가장 중요한","최고의"],
    syn:["supreme","foremost","overriding"], ant:["subordinate"],
    ex:[{ s:"Passenger safety is {{}}.", f:"paramount", ko:"승객 안전이 가장 중요하다." }] },

  { word:"paucity", pos:"n", level:"C2", meanings:["부족","소량"],
    syn:["dearth","scarcity","shortage"], ant:["abundance"],
    ex:[{ s:"A {{}} of funding stalled the research.", f:"paucity", ko:"자금 부족이 그 연구를 정체시켰다." }] },

  { word:"pejorative", pos:"adj", level:"C2", meanings:["경멸적인","비하하는"],
    syn:["derogatory","disparaging","belittling"], ant:["complimentary"],
    ex:[{ s:"The term is now considered {{}}.", f:"pejorative", ko:"그 용어는 현재 경멸적인 것으로 여겨진다." }] },

  { word:"perfunctory", pos:"adj", level:"C2", meanings:["형식적인","성의 없는"],
    syn:["cursory","mechanical","superficial"], ant:["thorough"],
    ex:[{ s:"He gave the report a {{}} glance.", f:"perfunctory", ko:"그는 보고서를 형식적으로 훑어봤다." }] },

  { word:"pernicious", pos:"adj", level:"C2", meanings:["유해한","치명적인"],
    syn:["harmful","destructive","deleterious"], ant:["innocuous"],
    ex:[{ s:"Misinformation has a {{}} influence on debate.", f:"pernicious", ko:"잘못된 정보는 토론에 유해한 영향을 미친다." }] },

  { word:"perseverance", pos:"n", level:"B2", meanings:["인내","끈기"],
    syn:["persistence","tenacity","steadfastness"], ant:["indolence"],
    ex:[{ s:"Her {{}} finally paid off.", f:"perseverance", ko:"그녀의 끈기가 마침내 결실을 보았다." }] },

  { word:"pertinent", pos:"adj", level:"C1", meanings:["적절한","관련 있는"],
    syn:["relevant","germane","applicable"], ant:["extraneous"],
    ex:[{ s:"She raised a highly {{}} objection.", f:"pertinent", ko:"그녀는 매우 적절한 이의를 제기했다." }] },

  { word:"placate", pos:"v", level:"C2", meanings:["달래다","진정시키다"],
    syn:["appease","pacify","mollify"], ant:["provoke"],
    ex:[{ s:"Nothing could {{}} the angry crowd.", f:"placate", ko:"어떤 것도 성난 군중을 달랠 수 없었다." }] },

  { word:"plausible", pos:"adj", level:"B2", meanings:["그럴듯한","타당해 보이는"],
    syn:["credible","believable","convincing"], ant:["implausible"],
    ex:[{ s:"That is the most {{}} explanation so far.", f:"plausible", ko:"그것이 지금까지 가장 그럴듯한 설명이다." }] },

  { word:"precarious", pos:"adj", level:"C1", meanings:["불안정한","위태로운"],
    syn:["unstable","perilous","insecure"], ant:["secure"],
    ex:[{ s:"Many workers are in {{}} employment.", f:"precarious", ko:"많은 노동자가 불안정한 고용 상태에 있다." }] },

  { word:"preclude", pos:"v", level:"C2", meanings:["못하게 하다","배제하다"],
    syn:["prevent","prohibit","rule out"], ant:["permit"],
    ex:[{ s:"The clause does not {{}} further appeals.", f:"preclude", ko:"그 조항은 추가 항소를 배제하지 않는다." }] },

  { word:"predicament", pos:"n", level:"C1", meanings:["곤경","궁지"],
    syn:["plight","dilemma","quandary"],
    ex:[{ s:"He explained his financial {{}} to the bank.", f:"predicament", ko:"그는 은행에 자신의 재정적 곤경을 설명했다." }] },

  { word:"prevalent", pos:"adj", level:"C1", meanings:["널리 퍼진","일반적인"],
    syn:["widespread","common","rife"], ant:["rare"],
    ex:[{ s:"The practice is still {{}} in rural areas.", f:"prevalent", ko:"그 관행은 농촌 지역에서 여전히 널리 퍼져 있다." }] },

  { word:"procrastinate", pos:"v", level:"C1", meanings:["미루다","지체하다"],
    syn:["delay","postpone","dawdle"], ant:["expedite"],
    ex:[{ s:"Students who {{}} rarely finish on time.", f:"procrastinate", ko:"미루는 학생들은 좀처럼 제때 끝내지 못한다." }] },

  { word:"prodigal", pos:"adj", level:"C2", meanings:["낭비하는","방탕한"],
    syn:["wasteful","extravagant","profligate"], ant:["frugal"],
    ex:[{ s:"The regime was {{}} with public money.", f:"prodigal", ko:"그 정권은 공적 자금을 낭비했다." }] },

  { word:"profound", pos:"adj", level:"B2", meanings:["깊은","심오한"],
    syn:["deep","intense","far-reaching"], ant:["superficial"],
    ex:[{ s:"The ruling had a {{}} impact on privacy law.", f:"profound", ko:"그 판결은 프라이버시 법에 깊은 영향을 미쳤다." }] },

  { word:"proliferate", pos:"v", level:"C2", meanings:["급증하다","확산하다"],
    syn:["multiply","burgeon","mushroom"], ant:["dwindle"],
    ex:[{ s:"Fake accounts began to {{}} on the platform.", f:"proliferate", ko:"그 플랫폼에서 가짜 계정이 급증하기 시작했다." }] },

  { word:"propensity", pos:"n", level:"C2", meanings:["경향","성향"],
    syn:["tendency","inclination","predisposition"], ant:["aversion"],
    col:[{ p:"a propensity {{}} violence", a:"for", pool:"prep", note:"a propensity for ~ : ~하는 성향" }] },

  { word:"prosaic", pos:"adj", level:"C2", meanings:["평범한","산문적인"],
    syn:["mundane","pedestrian","unimaginative"], ant:["poetic"],
    ex:[{ s:"The truth was more {{}} than the rumor.", f:"prosaic", ko:"진실은 소문보다 더 평범했다." }] },

  { word:"prudent", pos:"adj", level:"C1", meanings:["신중한","분별 있는"],
    syn:["cautious","judicious","circumspect"], ant:["reckless"],
    ex:[{ s:"It would be {{}} to wait for the audit.", f:"prudent", ko:"감사를 기다리는 것이 신중할 것이다." }] },

  { word:"pugnacious", pos:"adj", level:"C2", meanings:["싸우기 좋아하는","공격적인"],
    syn:["belligerent","combative","aggressive"], ant:["peaceable"],
    ex:[{ s:"His {{}} style alienated potential allies.", f:"pugnacious", ko:"그의 공격적인 방식은 잠재적 동맹을 멀어지게 했다." }] },

  /* ── Q · R ───────────────────────────────────────── */
  { word:"quandary", pos:"n", level:"C2", meanings:["곤경","당혹"],
    syn:["dilemma","predicament","plight"],
    ex:[{ s:"The offer put her in a real {{}}.", f:"quandary", ko:"그 제안은 그녀를 진짜 곤경에 빠뜨렸다." }] },

  { word:"quell", pos:"v", level:"C2", meanings:["진압하다","가라앉히다"],
    syn:["suppress","subdue","quash"], ant:["incite"],
    ex:[{ s:"Troops were sent to {{}} the unrest.", f:"quell", ko:"군대가 소란을 진압하기 위해 파견되었다." }] },

  { word:"quintessential", pos:"adj", level:"C2", meanings:["전형적인","본질적인"],
    syn:["typical","archetypal","classic"], ant:["atypical"],
    ex:[{ s:"He is the {{}} civil servant.", f:"quintessential", ko:"그는 전형적인 공무원이다." }] },

  { word:"rebuke", pos:"v", level:"C1", meanings:["질책하다","비난하다"],
    syn:["reprimand","admonish","censure"], ant:["commend"],
    ex:[{ s:"The chair {{}} him for interrupting.", f:"rebuked", ko:"의장은 그가 말을 끊은 것을 질책했다." }] },

  { word:"recalcitrant", pos:"adj", level:"C2", meanings:["반항적인","다루기 힘든"],
    syn:["defiant","unruly","obstinate"], ant:["obedient"],
    ex:[{ s:"A few {{}} members blocked the vote.", f:"recalcitrant", ko:"몇몇 반항적인 위원들이 표결을 막았다." }] },

  { word:"redundant", pos:"adj", level:"C1", meanings:["불필요한","중복의"],
    syn:["superfluous","unnecessary","surplus"], ant:["essential"],
    ex:[{ s:"The second paragraph is entirely {{}}.", f:"redundant", ko:"두 번째 단락은 전적으로 불필요하다." }] },

  { word:"refrain", pos:"v", level:"B2", meanings:["삼가다","자제하다"],
    syn:["abstain","desist","forbear"], ant:["indulge"],
    col:[{ p:"refrain {{}} smoking", a:"from", pool:"prep", note:"refrain from ~ : ~을 삼가다" }] },

  { word:"refute", pos:"v", level:"C1", meanings:["반박하다","논파하다"],
    syn:["disprove","rebut","contradict"], ant:["corroborate"],
    ex:[{ s:"He produced figures to {{}} the accusation.", f:"refute", ko:"그는 그 비난을 반박할 수치를 제시했다." }] },

  { word:"reiterate", pos:"v", level:"C1", meanings:["반복하다","되풀이하다"],
    syn:["repeat","restate","recapitulate"],
    ex:[{ s:"Let me {{}} our position on the matter.", f:"reiterate", ko:"그 문제에 대한 우리의 입장을 다시 말씀드리겠습니다." }] },

  { word:"relegate", pos:"v", level:"C2", meanings:["좌천시키다","격하하다"],
    syn:["demote","downgrade","consign"], ant:["promote"],
    col:[{ p:"relegate him {{}} a minor post", a:"to", pool:"prep", note:"relegate A to B : A를 B로 격하하다" }] },

  { word:"relinquish", pos:"v", level:"C2", meanings:["포기하다","내주다"],
    syn:["surrender","cede","abandon"], ant:["retain"],
    ex:[{ s:"He refused to {{}} control of the firm.", f:"relinquish", ko:"그는 회사의 지배권을 내주기를 거부했다." }] },

  { word:"reluctant", pos:"adj", level:"B2", meanings:["꺼리는","마음이 없는"],
    syn:["unwilling","hesitant","disinclined"], ant:["eager"],
    ex:[{ s:"Banks were {{}} to lend during the crisis.", f:"reluctant", ko:"위기 동안 은행들은 대출을 꺼렸다." }] },

  { word:"remorse", pos:"n", level:"C1", meanings:["후회","자책"],
    syn:["regret","contrition","penitence"], ant:["indifference"],
    ex:[{ s:"He showed no {{}} at the hearing.", f:"remorse", ko:"그는 심리에서 아무런 후회도 보이지 않았다." }] },

  { word:"reprehensible", pos:"adj", level:"C2", meanings:["비난받을 만한","괘씸한"],
    syn:["blameworthy","deplorable","disgraceful"], ant:["admirable"],
    ex:[{ s:"The conduct was described as morally {{}}.", f:"reprehensible", ko:"그 행위는 도덕적으로 비난받을 만하다고 묘사되었다." }] },

  { word:"repudiate", pos:"v", level:"C2", meanings:["부인하다","거부하다"],
    syn:["reject","renounce","disavow"], ant:["embrace"],
    ex:[{ s:"The party moved to {{}} its earlier pledge.", f:"repudiate", ko:"그 정당은 이전 공약을 부인하는 쪽으로 움직였다." }] },

  { word:"resilient", pos:"adj", level:"B2", meanings:["회복력 있는","탄력적인"],
    syn:["tough","adaptable","buoyant"], ant:["fragile"],
    ex:[{ s:"The economy proved more {{}} than expected.", f:"resilient", ko:"경제는 예상보다 회복력이 강한 것으로 드러났다." }] },

  { word:"reticent", pos:"adj", level:"C2", meanings:["말을 아끼는","말이 없는"],
    syn:["reserved","taciturn","uncommunicative"], ant:["garrulous"],
    ex:[{ s:"Officials were {{}} about the negotiations.", f:"reticent", ko:"관계자들은 협상에 대해 말을 아꼈다." }] },

  { word:"rudimentary", pos:"adj", level:"C1", meanings:["기초적인","초보의"],
    syn:["basic","elementary","undeveloped"], ant:["advanced"],
    ex:[{ s:"He has only a {{}} grasp of statistics.", f:"rudimentary", ko:"그는 통계에 대해 기초적인 이해만 갖고 있다." }] },

  /* ── S ───────────────────────────────────────────── */
  { word:"sagacious", pos:"adj", level:"C2", meanings:["현명한","슬기로운"],
    syn:["wise","astute","shrewd"], ant:["foolish"],
    ex:[{ s:"It was a {{}} choice of successor.", f:"sagacious", ko:"그것은 현명한 후계자 선택이었다." }] },

  { word:"salient", pos:"adj", level:"C2", meanings:["두드러진","현저한"],
    syn:["prominent","notable","conspicuous"], ant:["negligible"],
    ex:[{ s:"Let me summarize the {{}} points.", f:"salient", ko:"두드러진 요점들을 요약하겠습니다." }] },

  { word:"scrupulous", pos:"adj", level:"C2", meanings:["세심한","양심적인"],
    syn:["meticulous","conscientious","principled"], ant:["unscrupulous"],
    ex:[{ s:"She was {{}} in crediting her sources.", f:"scrupulous", ko:"그녀는 출처를 밝히는 데 양심적이었다." }] },

  { word:"scrutinize", pos:"v", level:"C1", meanings:["정밀히 조사하다","면밀히 살피다"],
    syn:["examine","inspect","probe"], ant:["skim"],
    ex:[{ s:"Regulators will {{}} the merger closely.", f:"scrutinize", ko:"규제 당국은 그 합병을 면밀히 조사할 것이다." }] },

  { word:"skeptical", pos:"adj", level:"B2", meanings:["회의적인","의심하는"],
    syn:["doubtful","dubious","unconvinced"], ant:["credulous"],
    ex:[{ s:"Economists remain {{}} of the forecast.", f:"skeptical", ko:"경제학자들은 그 전망에 회의적이다." }] },

  { word:"solicit", pos:"v", level:"C1", meanings:["요청하다","간청하다"],
    syn:["request","seek","petition"],
    ex:[{ s:"The agency will {{}} public comment.", f:"solicit", ko:"그 기관은 공개 의견을 요청할 것이다." }] },

  { word:"spurious", pos:"adj", level:"C2", meanings:["가짜의","허위의"],
    syn:["false","bogus","counterfeit"], ant:["genuine"],
    ex:[{ s:"The claim rests on {{}} statistics.", f:"spurious", ko:"그 주장은 허위 통계에 기초한다." }] },

  { word:"squander", pos:"v", level:"C1", meanings:["낭비하다","허비하다"],
    syn:["waste","dissipate","misspend"], ant:["conserve"],
    ex:[{ s:"They {{}} a decisive lead in the second half.", f:"squandered", ko:"그들은 후반에 결정적인 리드를 허비했다." }] },

  { word:"stagnant", pos:"adj", level:"C1", meanings:["침체된","고여 있는"],
    syn:["static","inactive","sluggish"], ant:["dynamic"],
    ex:[{ s:"Wages have been {{}} for a decade.", f:"stagnant", ko:"임금이 10년간 정체되어 있다." }] },

  { word:"staunch", pos:"adj", level:"C2", meanings:["확고한","충실한"],
    syn:["loyal","steadfast","unwavering"], ant:["unreliable"],
    ex:[{ s:"She is a {{}} defender of press freedom.", f:"staunch", ko:"그녀는 언론 자유의 확고한 옹호자이다." }] },

  { word:"stringent", pos:"adj", level:"C2", meanings:["엄격한","엄중한"],
    syn:["strict","rigorous","severe"], ant:["lenient"],
    ex:[{ s:"The new rules are far more {{}}.", f:"stringent", ko:"새 규정은 훨씬 더 엄격하다." }] },

  { word:"subsequent", pos:"adj", level:"B2", meanings:["이후의","다음의"],
    syn:["following","succeeding","ensuing"], ant:["preceding"],
    ex:[{ s:"The error was corrected in {{}} editions.", f:"subsequent", ko:"그 오류는 이후 판에서 수정되었다." }] },

  { word:"substantiate", pos:"v", level:"C2", meanings:["입증하다","실증하다"],
    syn:["corroborate","verify","validate"], ant:["refute"],
    ex:[{ s:"He could not {{}} any of the allegations.", f:"substantiate", ko:"그는 그 주장 중 어느 것도 입증할 수 없었다." }] },

  { word:"subtle", pos:"adj", level:"B2", meanings:["미묘한","절제된"],
    syn:["understated","delicate","nuanced"], ant:["flagrant"],
    ex:[{ s:"There is a {{}} difference between the two terms.", f:"subtle", ko:"두 용어 사이에는 미묘한 차이가 있다." }] },

  { word:"succinct", pos:"adj", level:"C2", meanings:["간결한","간명한"],
    syn:["concise","terse","pithy"], ant:["verbose"],
    ex:[{ s:"Keep the summary {{}} and factual.", f:"succinct", ko:"요약은 간결하고 사실에 근거하게 유지하라." }] },

  { word:"succumb", pos:"v", level:"C2", meanings:["굴복하다","넘어가다"],
    syn:["yield","surrender","capitulate"], ant:["resist"],
    col:[{ p:"succumb {{}} pressure", a:"to", pool:"prep", note:"succumb to ~ : ~에 굴복하다" }] },

  { word:"superfluous", pos:"adj", level:"C2", meanings:["불필요한","남는"],
    syn:["redundant","excess","needless"], ant:["indispensable"],
    ex:[{ s:"Most of the appendix is {{}}.", f:"superfluous", ko:"부록의 대부분은 불필요하다." }] },

  { word:"surmise", pos:"v", level:"C2", meanings:["추측하다","짐작하다"],
    syn:["conjecture","infer","suppose"],
    ex:[{ s:"We can only {{}} what he intended.", f:"surmise", ko:"우리는 그가 무엇을 의도했는지 추측할 수밖에 없다." }] },

  { word:"susceptible", pos:"adj", level:"C1", meanings:["영향받기 쉬운","취약한"],
    syn:["vulnerable","prone","liable"], ant:["impervious"],
    col:[{ p:"susceptible {{}} infection", a:"to", pool:"prep", note:"susceptible to ~ : ~에 취약한" }] },

  /* ── T ───────────────────────────────────────────── */
  { word:"tacit", pos:"adj", level:"C2", meanings:["암묵적인","무언의"],
    syn:["implicit","unspoken","implied"], ant:["explicit"],
    ex:[{ s:"There was {{}} agreement not to raise the issue.", f:"tacit", ko:"그 문제를 꺼내지 않겠다는 암묵적 합의가 있었다." }] },

  { word:"taciturn", pos:"adj", level:"C2", meanings:["말이 없는","무언의"],
    syn:["reticent","reserved","silent"], ant:["garrulous"],
    ex:[{ s:"The witness was {{}} under cross-examination.", f:"taciturn", ko:"그 증인은 반대 신문에서 말이 없었다." }] },

  { word:"tangible", pos:"adj", level:"C1", meanings:["실체적인","유형의"],
    syn:["concrete","palpable","perceptible"], ant:["intangible"],
    ex:[{ s:"Voters want {{}} results, not promises.", f:"tangible", ko:"유권자들은 약속이 아니라 실질적인 성과를 원한다." }] },

  { word:"tantamount", pos:"adj", level:"C2", meanings:["~와 마찬가지인","동등한"],
    syn:["equivalent","comparable","as good as"],
    col:[{ p:"tantamount {{}} a confession", a:"to", pool:"prep", note:"tantamount to ~ : ~와 다름없는" }] },

  { word:"tenacious", pos:"adj", level:"C1", meanings:["집요한","끈질긴"],
    syn:["persistent","dogged","resolute"], ant:["irresolute"],
    ex:[{ s:"She is a {{}} negotiator.", f:"tenacious", ko:"그녀는 집요한 협상가이다." }] },

  { word:"tentative", pos:"adj", level:"B2", meanings:["잠정적인","조심스러운"],
    syn:["provisional","preliminary","unconfirmed"], ant:["definitive"],
    ex:[{ s:"We reached a {{}} agreement on Friday.", f:"tentative", ko:"우리는 금요일에 잠정 합의에 도달했다." }] },

  { word:"tenuous", pos:"adj", level:"C2", meanings:["미약한","빈약한"],
    syn:["weak","flimsy","slight"], ant:["substantial"],
    ex:[{ s:"The link between the two events is {{}}.", f:"tenuous", ko:"두 사건 사이의 연관성은 미약하다." }] },

  { word:"thwart", pos:"v", level:"C2", meanings:["좌절시키다","저지하다"],
    syn:["foil","frustrate","obstruct"], ant:["facilitate"],
    ex:[{ s:"Police acted quickly to {{}} the plot.", f:"thwart", ko:"경찰은 그 음모를 저지하기 위해 신속히 움직였다." }] },

  { word:"transient", pos:"adj", level:"C2", meanings:["일시적인","순간의"],
    syn:["temporary","fleeting","ephemeral"], ant:["permanent"],
    ex:[{ s:"The side effects are mild and {{}}.", f:"transient", ko:"그 부작용은 경미하고 일시적이다." }] },

  { word:"trivial", pos:"adj", level:"B2", meanings:["사소한","하찮은"],
    syn:["insignificant","petty","negligible"], ant:["paramount"],
    ex:[{ s:"They argued over {{}} procedural points.", f:"trivial", ko:"그들은 사소한 절차 문제로 다퉜다." }] },

  { word:"truncate", pos:"v", level:"C2", meanings:["잘라내다","단축하다"],
    syn:["shorten","curtail","abbreviate"], ant:["extend"],
    ex:[{ s:"The report was {{}} to fit two pages.", f:"truncated", ko:"그 보고서는 두 페이지에 맞추려고 축약되었다." }] },

  /* ── U · V · W · Z ───────────────────────────────── */
  { word:"ubiquitous", pos:"adj", level:"C2", meanings:["어디에나 있는","아주 흔한"],
    syn:["omnipresent","pervasive","universal"], ant:["scarce"],
    ex:[{ s:"Smartphones are now {{}} in classrooms.", f:"ubiquitous", ko:"스마트폰은 이제 교실에서 어디서나 볼 수 있다." }] },

  { word:"unanimous", pos:"adj", level:"B2", meanings:["만장일치의"],
    syn:["undisputed","united","consensual"], ant:["divided"],
    ex:[{ s:"The verdict was {{}}.", f:"unanimous", ko:"평결은 만장일치였다." }] },

  { word:"undermine", pos:"v", level:"C1", meanings:["약화시키다","훼손하다"],
    syn:["weaken","subvert","sabotage"], ant:["bolster"],
    ex:[{ s:"Leaks {{}} confidence in the process.", f:"undermine", ko:"유출은 그 절차에 대한 신뢰를 훼손한다." }] },

  { word:"unequivocal", pos:"adj", level:"C2", meanings:["명백한","분명한"],
    syn:["unambiguous","explicit","categorical"], ant:["equivocal"],
    ex:[{ s:"The court gave an {{}} answer.", f:"unequivocal", ko:"법원은 명백한 답을 내놓았다." }] },

  { word:"unprecedented", pos:"adj", level:"C1", meanings:["전례 없는"],
    syn:["unparalleled","unheard-of","novel"], ant:["routine"],
    ex:[{ s:"The scheme received an {{}} number of applications.", f:"unprecedented", ko:"그 제도는 전례 없는 수의 신청을 받았다." }] },

  { word:"unscrupulous", pos:"adj", level:"C1", meanings:["파렴치한","비양심적인"],
    syn:["unethical","dishonest","unprincipled"], ant:["scrupulous"],
    ex:[{ s:"{{}} agents exploited the applicants.", f:"Unscrupulous", ko:"비양심적인 중개인들이 신청자들을 이용했다." }] },

  { word:"untenable", pos:"adj", level:"C2", meanings:["지지할 수 없는","버틸 수 없는"],
    syn:["indefensible","unsustainable","insupportable"], ant:["defensible"],
    ex:[{ s:"His position became {{}} after the leak.", f:"untenable", ko:"유출 이후 그의 입지는 버틸 수 없게 되었다." }] },

  { word:"usurp", pos:"v", level:"C2", meanings:["강탈하다","찬탈하다"],
    syn:["seize","appropriate","commandeer"], ant:["relinquish"],
    ex:[{ s:"The council was accused of trying to {{}} judicial power.", f:"usurp", ko:"그 의회는 사법권을 침탈하려 했다는 비난을 받았다." }] },

  { word:"vacillate", pos:"v", level:"C2", meanings:["망설이다","흔들리다"],
    syn:["waver","hesitate","dither"], ant:["resolve"],
    ex:[{ s:"Ministers continued to {{}} over the tax.", f:"vacillate", ko:"장관들은 그 세금을 두고 계속 갈팡질팡했다." }] },

  { word:"venerate", pos:"v", level:"C2", meanings:["숭배하다","공경하다"],
    syn:["revere","honor","esteem"], ant:["despise"],
    ex:[{ s:"The town still {{}} its founder.", f:"venerates", ko:"그 마을은 여전히 창건자를 공경한다." }] },

  { word:"veracity", pos:"n", level:"C2", meanings:["진실성","정확성"],
    syn:["truthfulness","accuracy","honesty"], ant:["falsity"],
    ex:[{ s:"Nobody questioned the {{}} of her account.", f:"veracity", ko:"아무도 그녀 진술의 진실성을 의심하지 않았다." }] },

  { word:"verbose", pos:"adj", level:"C2", meanings:["장황한","말이 많은"],
    syn:["wordy","long-winded","prolix"], ant:["succinct"],
    ex:[{ s:"The introduction is needlessly {{}}.", f:"verbose", ko:"서론이 불필요하게 장황하다." }] },

  { word:"viable", pos:"adj", level:"B2", meanings:["실행 가능한","생존 가능한"],
    syn:["feasible","workable","practicable"], ant:["untenable"],
    ex:[{ s:"Solar became a {{}} alternative in the region.", f:"viable", ko:"그 지역에서 태양광은 실행 가능한 대안이 되었다." }] },

  { word:"vindicate", pos:"v", level:"C2", meanings:["정당함을 입증하다","무죄를 밝히다"],
    syn:["justify","exonerate","absolve"], ant:["incriminate"],
    ex:[{ s:"The audit fully {{}} her decision.", f:"vindicated", ko:"그 감사는 그녀의 결정이 정당했음을 완전히 입증했다." }] },

  { word:"virulent", pos:"adj", level:"C2", meanings:["치명적인","악의적인"],
    syn:["deadly","toxic","venomous"], ant:["innocuous"],
    ex:[{ s:"A {{}} strain spread through the region.", f:"virulent", ko:"치명적인 변종이 그 지역에 퍼졌다." }] },

  { word:"volatile", pos:"adj", level:"C1", meanings:["변덕스러운","불안정한"],
    syn:["unstable","mercurial","erratic"], ant:["steady"],
    ex:[{ s:"Currency markets turned {{}} overnight.", f:"volatile", ko:"환율 시장이 하룻밤에 불안정해졌다." }] },

  { word:"voracious", pos:"adj", level:"C2", meanings:["탐욕스러운","왕성한"],
    syn:["insatiable","ravenous","greedy"], ant:["satiated"],
    ex:[{ s:"She is a {{}} reader of history.", f:"voracious", ko:"그녀는 역사서를 왕성하게 읽는 독서가이다." }] },

  { word:"wane", pos:"v", level:"C1", meanings:["줄어들다","약해지다"],
    syn:["diminish","decline","subside"], ant:["intensify"],
    ex:[{ s:"Public support began to {{}} after the scandal.", f:"wane", ko:"스캔들 이후 대중의 지지가 약해지기 시작했다." }] },

  { word:"wary", pos:"adj", level:"B2", meanings:["조심하는","경계하는"],
    syn:["cautious","circumspect","guarded"], ant:["reckless"],
    ex:[{ s:"Investors are {{}} of sudden policy shifts.", f:"wary", ko:"투자자들은 갑작스러운 정책 변화를 경계한다." }] },

  { word:"whimsical", pos:"adj", level:"C2", meanings:["변덕스러운","기발한"],
    syn:["capricious","fanciful","quirky"], ant:["conventional"],
    ex:[{ s:"The design has a {{}} charm.", f:"whimsical", ko:"그 디자인에는 기발한 매력이 있다." }] },

  { word:"zealous", pos:"adj", level:"C1", meanings:["열성적인","열심인"],
    syn:["fervent","ardent","passionate"], ant:["indifferent"],
    ex:[{ s:"A {{}} reformer, he pushed the bill through.", f:"zealous", ko:"열성적인 개혁가였던 그는 그 법안을 통과시켰다." }] }
];

/* 연어 모드에서 오답으로 사용할 고정 풀 */
window.COL_POOLS = {
  verb: ["make","do","take","have","give","pay","reach","meet","draw","hold","bring","put"],
  prep: ["on","in","at","to","for","with","of","from","by","about","into","over","against","under"]
};


/* 연어 보강 — 전치사 중심 (공무원 시험 최빈출). 단어별로 words 배열에 병합됩니다.
   opts가 있으면 그 목록에서 오답을 뽑고, 없으면 위 COL_POOLS를 사용합니다. */
window.VOCAB_COL_EXTRA = {
  apprehensive: [{ p:"apprehensive {{}} the outcome", a:"about", pool:"prep", note:"apprehensive about ~ : ~을 걱정하는" }],
  aversion:     [{ p:"an aversion {{}} risk", a:"to", pool:"prep", note:"an aversion to ~ : ~에 대한 혐오" }],
  antipathy:    [{ p:"antipathy {{}} reform", a:"to", pool:"prep", note:"antipathy to ~ : ~에 대한 반감" }],
  inherent:     [{ p:"risks inherent {{}} the job", a:"in", pool:"prep", note:"inherent in ~ : ~에 내재된" }],
  wary:         [{ p:"wary {{}} strangers", a:"of", pool:"prep", note:"wary of ~ : ~을 경계하는" }],
  skeptical:    [{ p:"skeptical {{}} the claim", a:"of", pool:"prep", note:"skeptical of ~ : ~에 회의적인" }],
  dubious:      [{ p:"dubious {{}} the plan", a:"about", pool:"prep", note:"dubious about ~ : ~에 의심을 품는" }],
  remorse:      [{ p:"remorse {{}} his actions", a:"for", pool:"prep", note:"remorse for ~ : ~에 대한 후회" }],
  deference:    [{ p:"in deference {{}} tradition", a:"to", pool:"prep", note:"in deference to ~ : ~을 존중하여" }],
  disdain:      [{ p:"disdain {{}} authority", a:"for", pool:"prep", note:"disdain for ~ : ~에 대한 경멸" }],
  discrepancy:  [{ p:"a discrepancy {{}} the accounts", a:"in", pool:"prep", note:"a discrepancy in ~ : ~의 불일치" }],
  dissent:      [{ p:"dissent {{}} the ruling", a:"from", pool:"prep", note:"dissent from ~ : ~에 이견을 내다" }],
  paucity:      [{ p:"a paucity {{}} data", a:"of", pool:"prep", note:"a paucity of ~ : ~의 부족" }],
  veracity:     [{ p:"the veracity {{}} the claim", a:"of", pool:"prep", note:"the veracity of ~ : ~의 진실성" }],
  digress:      [{ p:"digress {{}} the topic", a:"from", pool:"prep", note:"digress from ~ : ~에서 벗어나다" }],
  preclude:     [{ p:"preclude him {{}} running", a:"from", pool:"prep", note:"preclude A from B : A가 B하지 못하게 하다" }],
  inundate:     [{ p:"inundated {{}} requests", a:"with", pool:"prep", note:"be inundated with ~ : ~이 쇄도하다" }],
  contrite:     [{ p:"contrite {{}} his mistake", a:"about", pool:"prep", note:"contrite about ~ : ~을 뉘우치는" }],
  complacent:   [{ p:"complacent {{}} the risks", a:"about", pool:"prep", note:"complacent about ~ : ~에 안일한" }],
  prevalent:    [{ p:"prevalent {{}} rural areas", a:"in", pool:"prep", note:"prevalent in ~ : ~에 널리 퍼진" }],
  abhor:        [{ p:"an abhorrence {{}} violence", a:"of", pool:"prep", note:"abhorrence of ~ : ~에 대한 혐오" }],
  apathy:       [{ p:"apathy {{}} public affairs", a:"about", pool:"prep", note:"apathy about ~ : ~에 대한 무관심" }],
  scrutinize:   [{ p:"under close {{}}", a:"scrutiny", opts:["scrutiny","scrutinize","scrutinized","scrutinizing"], note:"under scrutiny : 조사를 받는 중" }],
  consensus:    [{ p:"a consensus {{}} the issue", a:"on", pool:"prep", note:"a consensus on ~ : ~에 관한 합의" }],
  grievance:    [{ p:"{{}} a grievance", a:"file", opts:["file","open","write","send"], note:"file a grievance : 고충을 제기하다" }],
  conundrum:    [{ p:"{{}} a conundrum", a:"pose", opts:["pose","carry","hold","keep"], note:"pose a conundrum : 난제를 던지다" }],
  decorum:      [{ p:"{{}} decorum", a:"observe", opts:["observe","watch","view","notice"], note:"observe decorum : 예절을 지키다" }],
  perseverance: [{ p:"{{}} great perseverance", a:"show", opts:["show","tell","speak","talk"], note:"show perseverance : 끈기를 보이다" }],
  acclaim:      [{ p:"{{}} critical acclaim", a:"win", opts:["win","beat","score","reach"], note:"win acclaim : 찬사를 받다" }],
  quandary:     [{ p:"{{}} a quandary", a:"in", pool:"prep", note:"in a quandary : 곤경에 빠진" }],
  susceptible:  [{ p:"less susceptible {{}} damage", a:"to", pool:"prep", note:"susceptible to ~ : ~에 취약한" }],
  lament:       [{ p:"lament {{}} the loss", a:"over", pool:"prep", note:"lament over ~ : ~을 한탄하다" }],
  emulate:      [{ p:"eager to {{}} his mentor", a:"emulate", pool:"auto", note:"emulate ~ : ~을 본받다" }],
  thwart:       [{ p:"{{}} an attempt", a:"thwart", pool:"auto", note:"thwart an attempt : 시도를 저지하다" }],
  mitigate:     [{ p:"{{}} the damage", a:"mitigate", pool:"auto", note:"mitigate damage : 피해를 완화하다" }],
  bolster:      [{ p:"{{}} confidence", a:"bolster", pool:"auto", note:"bolster confidence : 신뢰를 강화하다" }],
  undermine:    [{ p:"{{}} public trust", a:"undermine", pool:"auto", note:"undermine trust : 신뢰를 훼손하다" }],
  exacerbate:   [{ p:"{{}} the situation", a:"exacerbate", pool:"auto", note:"exacerbate the situation : 상황을 악화시키다" }],
  expedite:     [{ p:"{{}} the process", a:"expedite", pool:"auto", note:"expedite the process : 절차를 신속히 처리하다" }],
  quell:        [{ p:"{{}} the riot", a:"quell", pool:"auto", note:"quell a riot : 폭동을 진압하다" }],
  corroborate:  [{ p:"{{}} the testimony", a:"corroborate", pool:"auto", note:"corroborate testimony : 증언을 확증하다" }],
  ascertain:    [{ p:"{{}} the facts", a:"ascertain", pool:"auto", note:"ascertain the facts : 사실을 확인하다" }],
  squander:     [{ p:"{{}} an opportunity", a:"squander", pool:"auto", note:"squander an opportunity : 기회를 허비하다" }],
  divulge:      [{ p:"{{}} confidential details", a:"divulge", pool:"auto", note:"divulge details : 세부 사항을 누설하다" }],
  solicit:      [{ p:"{{}} donations", a:"solicit", pool:"auto", note:"solicit donations : 기부를 요청하다" }],
  alleviate:    [{ p:"{{}} the symptoms", a:"alleviate", pool:"auto", note:"alleviate symptoms : 증상을 완화하다" }]
};

/* 병합 */
(function mergeExtraCollocations() {
  var extra = window.VOCAB_COL_EXTRA;
  window.VOCAB.forEach(function (w) {
    if (extra[w.word]) {
      w.col = (w.col || []).concat(extra[w.word]);
    }
  });
})();
