/**
 * 단어 데이터 — 수능 보카 M 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *    ⚠️ 또 gloss.js 에 같은 키가 있는지 먼저 확인할 것 — gloss.js 가 이 파일보다
 *    뒤에 로드되므로 여기 넣은 값이 조용히 덮인다.
 *
 * ── 이 세트의 승격: 212단어 중 97개(46%) ──
 *
 * 비율로는 이 저장소에서 가장 높다. m 으로 시작하는 낱말 중 쓰이는 것들이
 * (modest·merge·modify·mortal·measure·moral 같은) 기본 낱말이어서 오래전부터
 * 다른 문제의 유의어·반의어로 동원돼 왔기 때문이다. 참조는 모두 119곳이다.
 *
 * 그중 18개는 바로 앞서 넣은 I·J·K·L 세트가 참조한다.
 *   mature←immature(I)·juvenile(J)   mortal←immortal(I)·lethal(L)
 *   moral←immoral(I)·lesson(L)       mirror←looking glass(L)
 *   meddle←interfere(I)  mediate←intervene(I)  menace←intimidate(I)
 *   merge←incorporate(I) metaphor←imagery(I)   mimic←imitate(I)
 *   minor←incidental(I)  mishap←incident(I)    momentum←impetus(I)
 *   motivate←inspire(I)  motivation←incentive(I)
 *   multiracial←interracial(I)  meanwhile←in the meantime(I)  modest←impudent(I)
 *
 * 원칙은 A~L 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 * 판단 근거는 해당 단어 주석에 적는다.
 *
 * ── 원본 뜻 오류를 아홉 고쳤다 ──
 *   marked      '유포적인' → '표시된'        (뜻이 안 통하는 말이었다)
 *   millennium  '천 년간의, 천년기의' → '천 년, 천년기' (명사인데 형용사로 적혔다)
 *   meadow      '녹초지' → '목초지'          (오타)
 *   mistress    '여왕' → '안주인'            (여왕은 queen)
 *   manned      '사람이 하는' → '유인의'      (사람이 타고 조작하는 쪽)
 *   marrow      '뼈골' → '골수, 뼛속'        (표준어가 아니었다)
 *   monologue   '1인 극' → '1인극'           (띄어쓰기)
 *   medieval    '중고의, 낡은' → '중세의'     ← 사전에 맞는 값이 있어 승격으로 교정
 *   menace      '위협적인' → '으르다'(동사)    ← 같음. '위협적인' 은 menacing
 *   multiracial '다문화의' → '여러 인종의'     ← 같음. '다문화의' 는 multicultural
 *
 * ── 뜻이 겹쳐 갈라 쓴 것 (7묶음) ──
 *   magnificent 웅장한 / majestic 장엄한          (사전 값이 이미 갈려 있었다)
 *   means 수단 / method 방법                      (사전 값)
 *   multicultural 다문화의 / multiracial 여러 인종의 (사전 값)
 *   misconception 잘못된 생각 / misinterpretation 오역 / misunderstanding 오해
 *   misconceive 잘못 생각하다 / misunderstand 오해하다
 *   mob 폭도 / multitude 다수
 *   mumble 중얼거리다(사전 값 유지) / mutter 투덜거리다
 */
window.VOCAB_M = [
  /* ── 챕터 1 ─────────────────────────────── */

  { word:"madden", pron:"매든", pos:"v", level:"C1", meanings:["몹시 화나게 만들다","격분시키다"],
    syn:["enrage","infuriate","exasperate"], ant:["soothe"],
    ex:[{ s:"The endless delays began to {{}} passengers.", f:"madden", ko:"끝없는 지연이 승객들을 몹시 화나게 만들기 시작했다." }] },

  { word:"magician", pron:"머지션", pos:"n", level:"B1", meanings:["마법사","마술사"],
    syn:["conjurer","wizard","illusionist"],
    ex:[{ s:"The {{}} pulled a rabbit from an empty hat.", f:"magician", ko:"그 마술사는 빈 모자에서 토끼를 꺼냈다." }] },

  { word:"magnetic", pron:"매그네틱", pos:"adj", level:"B2", meanings:["자석의","자기의"],
    syn:["magnetized","polarized","charged"],
    ex:[{ s:"The card has a {{}} strip on the back.", f:"magnetic", ko:"그 카드는 뒷면에 자기 띠가 있다." }] },

  /* magnificent 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다.
     원본 셋째 갈래 '장엄' 은 meanings 2개 제한에 걸려 뺐다. */
  { word:"magnificence", pron:"매그니피선스", pos:"n", level:"C1", meanings:["훌륭함","웅장"],
    syn:["splendor","grandeur","majesty"],
    ex:[{ s:"Visitors still marvel at the {{}} of the palace.", f:"magnificence", ko:"방문객들은 여전히 그 궁전의 웅장함에 감탄한다." }] },

  /* 승격 ① — GLOSS '웅장한, 훌륭한' 이 원본과 글자까지 같다. awesome(syn) 이 참조한다.
     바로 뒤 majestic 은 사전 값 '장엄한' 을 쓰므로 첫 뜻이 갈린다. */
  { word:"magnificent", pron:"매그니피선트", pos:"adj", level:"B2", meanings:["웅장한","훌륭한"],
    syn:["awesome","splendid","superb"],
    ex:[{ s:"The cathedral is a {{}} piece of architecture.", f:"magnificent", ko:"그 대성당은 웅장한 건축물이다." }] },

  /* 승격 ① — GLOSS '확대하다, 증폭시키다' 를 글자까지 지켰다.
     amplify(syn)·enlarge(syn)·exaggerate(syn) 세 문제가 참조하므로 원본의
     '과장하다' 대신 사전 쪽 '증폭시키다' 를 남겼다. */
  { word:"magnify", pron:"매그너파이", pos:"v", level:"B2", meanings:["확대하다","증폭시키다"],
    syn:["amplify","enlarge","exaggerate"],
    ex:[{ s:"The lens can {{}} the image fifty times.", f:"magnify", ko:"그 렌즈는 상을 50배 확대할 수 있다." }] },

  /* 승격 ① — GLOSS '규모, 크기' 와 같은 갈래다. 참조도 PRON 도 없어 사전 쪽
     표현을 그대로 썼다 — 원본 '엄청난 크기' 는 '엄청난' 이 뜻에 섞여 어색하다. */
  { word:"magnitude", pron:"매그너튜드", pos:"n", level:"C1", meanings:["규모","크기"],
    syn:["scale","extent","dimension"],
    ex:[{ s:"No one grasped the {{}} of the problem at first.", f:"magnitude", ko:"처음에는 아무도 그 문제의 규모를 파악하지 못했다." }] },

  /* 승격 ① — GLOSS '장엄한' 을 첫 자리에 지켰다. grand(syn) 이 참조한다.
     원본 첫 뜻 '웅장한' 은 바로 앞 magnificent 와 같아, 사전 쪽을 앞에 두고
     '위엄 있는' 을 붙여 갈랐다. */
  { word:"majestic", pron:"머제스틱", pos:"adj", level:"B2", meanings:["장엄한","위엄 있는"],
    syn:["grand","stately","imposing"],
    ex:[{ s:"The eagle made a {{}} sweep over the valley.", f:"majestic", ko:"그 독수리가 골짜기 위로 장엄하게 선회했다." }] },

  /* 승격 ① — GLOSS '대다수, 과반수' 를 글자까지 지켰다. bulk(syn) 이 참조하므로
     원본의 '대부분' 대신 사전 쪽을 남겼다.
     반의어 minority 는 뒤 챕터에 올 표제어라 아직 뜻이 없다 — ant 를 비워 두었다. */
  { word:"majority", pron:"머조러티", pos:"n", level:"B1", meanings:["대다수","과반수"],
    syn:["bulk","most","greater part"],
    ex:[{ s:"A clear {{}} of voters backed the proposal.", f:"majority", ko:"유권자의 분명한 대다수가 그 제안을 지지했다." }] },

  /* 'make ~' 구가 여덟 개 이어진다. pos 가 phr 인 항목에는 ex 를 붙이지 않는다 —
     A~L 세트의 phr 248개 중 예문을 가진 것이 0개다. 구는 빈칸으로 파도 어형
     변화가 없어 문제가 성립하지 않는다. 대신 syn 3개로 '아닌 것 고르기' 를 덮는다. */
  { word:"make a fuss", pron:"메이크 어 퍼스", pos:"phr", level:"B2", meanings:["소란을 피우다"],
    syn:["kick up a row","complain loudly","make a scene"] },

  { word:"make a reservation", pron:"메이크 어 레저베이션", pos:"phr", level:"B1", meanings:["예약하다"],
    syn:["book","reserve","book ahead"] },

  { word:"make headway", pron:"메이크 헤드웨이", pos:"phr", level:"B2", meanings:["나아가다","진전을 보이다"],
    syn:["progress","gain ground","press forward"] },

  { word:"make it", pron:"메이크 잇", pos:"phr", level:"B2", meanings:["시간 약속을 지키다","이루다"],
    syn:["arrive in time","succeed","pull it off"] },

  { word:"make sense", pron:"메이크 센스", pos:"phr", level:"B1", meanings:["의미가 통하다","이해가 되다"],
    syn:["be logical","add up","hold water"] },

  /* 승격 ① — GLOSS '구성하다; 화해하다' 를 글자까지 지켰다. 참조가 3곳
     (account for·compensate for·constitute)이라 그대로 두었다.
     원본은 명사('구조, 구성; 화장')인데 그 읽기는 보통 makeup 으로 붙여 쓴다. */
  { word:"make up", pron:"메이크 업", pos:"phr", level:"B2", meanings:["구성하다","화해하다"],
    syn:["constitute","account for","compose"] },

  /* 승격 ① — GLOSS '보충하다, 만회하다' 를 글자까지 지켰다. 참조도 PRON 도 없다.
     원본 '보상하다' 를 쓰면 C 세트 compensate 와 첫 뜻이 같아지는데,
     사전 쪽을 쓰면 그 문제도 함께 풀린다. */
  { word:"make up for", pron:"메이크 업 포", pos:"phr", level:"B2", meanings:["보충하다","만회하다"],
    syn:["compensate for","offset","atone for"] },

  /* 승격 ① — GLOSS '~에 길을 내주다' 와 같은 갈래다. give way to(syn) 가 참조한다. */
  { word:"make way for", pron:"메이크 웨이 포", pos:"phr", level:"B2", meanings:["~에 길을 내주다"],
    syn:["give way to","step aside for","clear a path for"] },

  { word:"makeshift", pron:"메이크시프트", pos:"adj", level:"C1", meanings:["임시변통의","임시로 만든"],
    syn:["temporary","improvised","stopgap"], ant:["permanent"],
    ex:[{ s:"They built a {{}} shelter out of branches.", f:"makeshift", ko:"그들은 나뭇가지로 임시변통의 대피소를 만들었다." }] },

  { word:"malevolent", pron:"멀레벌런트", pos:"adj", level:"C2", meanings:["악의 있는","심술궂은"],
    syn:["spiteful","ill-natured","venomous"], ant:["benevolent"],
    ex:[{ s:"He shot her a {{}} look across the room.", f:"malevolent", ko:"그는 방 건너로 그녀에게 악의 있는 시선을 던졌다." }] },

  /* 승격 ① — GLOSS '고장, 오작동' 을 글자까지 지켰다. breakdown(syn) 이 참조한다.
     원본은 동사를 앞에 두지만('제대로 작동하지 않다'), 사전이 명사여서 pos 를
     n 으로 유지했다. */
  { word:"malfunction", pron:"맬펑션", pos:"n", level:"B2", meanings:["고장","오작동"],
    syn:["breakdown","fault","glitch"],
    ex:[{ s:"A software {{}} delayed the whole launch.", f:"malfunction", ko:"소프트웨어 고장이 발사 전체를 지연시켰다." }] },

  /* ── 챕터 2 ─────────────────────────────── */

  /* 원본 둘째 갈래 '심술궂은' 은 챕터 1의 malevolent 와 같다. 이쪽은 실제로 해를
     끼치려는 쪽이어서 '해를 끼치려는' 으로 갈랐다. */
  { word:"malicious", pron:"멀리셔스", pos:"adj", level:"C1", meanings:["악의적인","해를 끼치려는"],
    syn:["malevolent","vindictive","nasty"], ant:["kindly"],
    ex:[{ s:"The email contained {{}} software.", f:"malicious", ko:"그 이메일에는 악의적인 소프트웨어가 들어 있었다." }] },

  { word:"malnutrition", pron:"맬뉴트리션", pos:"n", level:"B2", meanings:["영양실조","영양 부족"],
    syn:["undernourishment","starvation","poor diet"],
    ex:[{ s:"Child {{}} fell sharply after the programme began.", f:"malnutrition", ko:"그 사업이 시작된 뒤 아동 영양실조가 급격히 줄었다." }] },

  { word:"malodorous", pron:"맬로더러스", pos:"adj", level:"C2", meanings:["고약한 냄새가 나는"],
    syn:["smelly","foul-smelling","reeking"], ant:["fragrant"],
    ex:[{ s:"A {{}} cloud drifted from the factory.", f:"malodorous", ko:"고약한 냄새가 나는 연무가 공장에서 흘러나왔다." }] },

  { word:"malpractice", pron:"맬프랙티스", pos:"n", level:"C1", meanings:["의료 사고","위법 행위"],
    syn:["negligence","misconduct","wrongdoing"],
    ex:[{ s:"The surgeon was sued for {{}}.", f:"malpractice", ko:"그 외과의는 의료 사고로 고소당했다." }] },

  /* 뒤 챕터의 mistreat('학대하다')와 첫 뜻이 갈리도록 둘째 갈래를
     '험하게 다루다' 로 했다 — 원본의 '학대하다' 는 mistreat 쪽에 남긴다. */
  { word:"maltreat", pron:"맬트리트", pos:"v", level:"C1", meanings:["거칠게 다루다","험하게 다루다"],
    syn:["abuse","ill-treat","mishandle"],
    ex:[{ s:"Staff who {{}} animals face prosecution.", f:"maltreat", ko:"동물을 거칠게 다루는 직원은 기소된다." }] },

  /* 승격 ① — GLOSS '의무적인, 필수의' 를 글자까지 지켰다. compulsory(syn) 가
     참조하므로 원본의 '강제적인' 대신 사전 쪽을 남겼다. */
  { word:"mandatory", pron:"맨더토리", pos:"adj", level:"B2", meanings:["의무적인","필수의"],
    syn:["compulsory","obligatory","required"], ant:["optional"],
    ex:[{ s:"Helmets are {{}} on all construction sites.", f:"mandatory", ko:"모든 공사 현장에서 안전모는 의무적이다." }] },

  { word:"maneuver", pron:"머누버", pos:"v", level:"C1", meanings:["능숙하게 움직이다","교묘히 다루다"],
    syn:["navigate","steer","work one's way"],
    ex:[{ s:"The driver had to {{}} the truck through a narrow gate.", f:"maneuver", ko:"운전자는 좁은 문으로 트럭을 능숙하게 움직여야 했다." }] },

  /* 승격 ① — GLOSS '열광, 광기' 를 글자까지 지켰다. craze(syn) 가 참조하므로
     원본의 '열중' 대신 사전 쪽 '광기' 를 남겼다. */
  { word:"mania", pron:"메이니어", pos:"n", level:"C1", meanings:["열광","광기"],
    syn:["craze","obsession","frenzy"],
    ex:[{ s:"A {{}} for tulips once swept the Netherlands.", f:"mania", ko:"한때 튤립 열광이 네덜란드를 휩쓸었다." }] },

  /* 원본 셋째 갈래 '분명한'(형용사)은 pos 가 v 라 담지 못했다. */
  { word:"manifest", pron:"매너페스트", pos:"v", level:"C1", meanings:["보이다","나타내다"],
    syn:["display","reveal","exhibit"],
    ex:[{ s:"Symptoms may {{}} themselves years later.", f:"manifest", ko:"증상은 몇 년 뒤에 나타날 수도 있다." }] },

  /* 승격 ① — GLOSS '조종하다, 조작하다' 가 원본과 글자까지 같다.
     brainwash(syn) 가 참조한다. */
  { word:"manipulate", pron:"머니퓰레이트", pos:"v", level:"B2", meanings:["조종하다","조작하다"],
    syn:["brainwash","exploit","control"],
    ex:[{ s:"Advertisers try to {{}} what we want.", f:"manipulate", ko:"광고주는 우리가 원하는 것을 조종하려 한다." }] },

  /* 승격 ① — GLOSS '인공적인' 과 같은 갈래다. artificial(syn) 이 참조한다.
     첫 뜻이 artificial 과 같은데 그쪽이 이 낱말을 유의어로 쓰므로 같은 갈래가 맞다.
     원본의 '인위적인' 은 같은 갈래라 한 갈래로 두었다. */
  { word:"man-made", pron:"맨 메이드", pos:"adj", level:"B2", meanings:["인공적인"],
    syn:["artificial","synthetic","human-made"], ant:["natural"],
    ex:[{ s:"The lake is entirely {{}}.", f:"man-made", ko:"그 호수는 전적으로 인공적이다." }] },

  /* 원본 뜻 '사람이 하는' 은 흐리다. manned spacecraft 처럼 사람이 타고 조작한다는
     뜻이어서 '유인의, 사람이 탑승한' 으로 고쳤다. */
  { word:"manned", pron:"맨드", pos:"adj", level:"C1", meanings:["유인의","사람이 탑승한"],
    syn:["crewed","staffed","human-operated"], ant:["unmanned"],
    ex:[{ s:"The first {{}} flight to the Moon was in 1969.", f:"manned", ko:"달로 향한 첫 유인 비행은 1969년이었다." }] },

  /* 승격 ② — GLOSS '방법, 태도' 다. 참조 둘(conduct·demeanor)이 쓰는 갈래는
     '태도' 쪽이라 둘째 자리에 지켰다. 첫 자리는 원본의 '방식' 으로 했다 —
     사전의 '방법' 을 그대로 쓰면 뒤 챕터의 method('방법, 수법')와 첫 뜻이 겹친다.
     manned 와 앞 네 글자가 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"manner", pron:"매너", pos:"n", level:"B1", meanings:["방식","태도"],
    syn:["conduct","demeanor","way"],
    ex:[{ s:"She answered in a very polite {{}}.", f:"manner", ko:"그녀는 아주 공손한 방식으로 대답했다." }] },

  /* 승격 ② — GLOSS '수공의; 설명서' 로 형용사와 명사가 섞여 있었다.
     automatic(ant) 이 참조하는 갈래는 형용사 '수공의' 라 첫 자리에 지키고,
     둘째를 원본의 '손으로 하는' 으로 바꿨다 — 한 표제어에 형용사와 명사를
     섞지 않는 쪽이 읽기 낫다. 원본의 '안내서' 는 그래서 뺐다. */
  { word:"manual", pron:"매뉴얼", pos:"adj", level:"B2", meanings:["수공의","손으로 하는"],
    syn:["hand-operated","non-automatic","hands-on"], ant:["automatic"],
    ex:[{ s:"Most of the work on this farm is still {{}}.", f:"manual", ko:"이 농장에서 대부분의 일은 아직 손으로 한다." }] },

  /* 승격 ① — GLOSS '제조하다; 제조' 와 같은 갈래다. 참조도 PRON 도 없어
     동사 쪽으로 정리했다. 원본의 '제조업' 은 명사 갈래라 뺐다. */
  { word:"manufacture", pron:"매뉴팩처", pos:"v", level:"B2", meanings:["제조하다","생산하다"],
    syn:["produce","fabricate","assemble"],
    ex:[{ s:"The plant will {{}} batteries for electric cars.", f:"manufacture", ko:"그 공장은 전기차용 배터리를 제조할 것이다." }] },

  /* 승격 ① — GLOSS '원고, 필사본' 을 글자까지 지켰다. handwritten(syn) 이 참조한다.
     manual·manufacture 와 어근이 같지만 품사가 셋 다 달라(adj/v/n) 같은 보드에
     안 온다. */
  { word:"manuscript", pron:"매뉴스크립트", pos:"n", level:"B2", meanings:["원고","필사본"],
    syn:["draft","typescript","original copy"],
    ex:[{ s:"The {{}} was rejected by three publishers.", f:"manuscript", ko:"그 원고는 세 출판사에서 거절당했다." }] },

  /* 승격 ① — GLOSS '여백; 차이' 와 같은 갈래다. 참조도 PRON 도 없다.
     원본 셋째 갈래 '판매 수익' 은 meanings 2개 제한에 걸려 뺐다. */
  { word:"margin", pron:"마진", pos:"n", level:"B2", meanings:["여백","차이"],
    syn:["border","edge","gap"],
    ex:[{ s:"She wrote notes in the {{}} of the page.", f:"margin", ko:"그녀는 페이지 여백에 메모를 썼다." }] },

  /* margin 과 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"marginal", pron:"마저널", pos:"adj", level:"C1", meanings:["가장자리의","중요하지 않은"],
    syn:["peripheral","slight","negligible"], ant:["central"],
    ex:[{ s:"The change had only a {{}} effect on sales.", f:"marginal", ko:"그 변화는 매출에 중요하지 않은 영향만 있었다." }] },

  { word:"marital", pron:"매러털", pos:"adj", level:"C1", meanings:["결혼의","부부의"],
    syn:["conjugal","matrimonial","wedded"],
    ex:[{ s:"The form asks for your {{}} status.", f:"marital", ko:"그 양식은 결혼 여부를 묻는다." }] },

  /* 원본 둘째 갈래 '유포적인' 은 뜻이 안 통하는 말이다. marked 는 눈에 띄게
     뚜렷하다는 뜻이고, 표시가 붙었다는 뜻도 있어 '표시된' 으로 고쳤다. */
  { word:"marked", pron:"마크트", pos:"adj", level:"B2", meanings:["뚜렷한","표시된"],
    syn:["noticeable","pronounced","conspicuous"], ant:["slight"],
    ex:[{ s:"There has been a {{}} improvement in air quality.", f:"marked", ko:"대기 질에 뚜렷한 개선이 있었다." }] },

  /* ── 챕터 3 ─────────────────────────────── */

  /* 원본 첫 뜻 '뼈골' 은 표준어가 아니어서 '골수, 뼛속' 으로 고쳤다. */
  { word:"marrow", pron:"매로", pos:"n", level:"C1", meanings:["골수","뼛속"],
    syn:["bone marrow","pith","innermost part"],
    ex:[{ s:"The transplant replaced the patient's bone {{}}.", f:"marrow", ko:"그 이식은 환자의 골수를 대체했다." }] },

  /* 고유명사다. 기존에 AI·Antarctic·CEO 선례가 있어 대문자로 시작해도 문제없다.
     syn 을 비워 두었다 — 행성 이름을 바꿔 쓸 낱말이 없다. */
  { word:"Mars", pron:"마즈", pos:"n", level:"B1", meanings:["화성"],
    ex:[{ s:"The rover sent back images from the surface of {{}}.", f:"Mars", ko:"그 탐사차는 화성 표면에서 영상을 보내왔다." }] },

  /* marshal 과 앞 다섯 글자가 같지만 품사가 달라(n/v) 같은 보드에 안 온다. */
  { word:"marsh", pron:"마시", pos:"n", level:"B2", meanings:["습지","늪"],
    syn:["swamp","wetland","bog"],
    ex:[{ s:"Rare birds nest in the coastal {{}}.", f:"marsh", ko:"희귀한 새들이 해안 습지에 둥지를 튼다." }] },

  { word:"marshal", pron:"마셜", pos:"v", level:"C2", meanings:["집결시키다","정렬시키다"],
    syn:["assemble","muster","line up"],
    ex:[{ s:"The general began to {{}} his forces at dawn.", f:"marshal", ko:"그 장군은 새벽에 병력을 집결시키기 시작했다." }] },

  { word:"martial", pron:"마셜", pos:"adj", level:"C1", meanings:["군사의","전쟁의"],
    syn:["military","warlike","combative"],
    ex:[{ s:"The government declared {{}} law that night.", f:"martial", ko:"정부는 그날 밤 계엄령을 선포했다." }] },

  { word:"martial art", pron:"마셜 아트", pos:"phr", level:"B2", meanings:["무술"],
    syn:["combat sport","self-defense skill","fighting art"] },

  /* marvelous 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"marvel", pron:"마벌", pos:"n", level:"B2", meanings:["경이","놀라운 일"],
    syn:["wonder","phenomenon","sensation"],
    ex:[{ s:"The bridge is a {{}} of modern engineering.", f:"marvel", ko:"그 다리는 현대 공학의 경이다." }] },

  /* 승격 ① — GLOSS '놀라운, 굉장한' 을 글자까지 지켰다. fabulous(syn) 가
     참조하므로 원본의 '멋진' 대신 사전 쪽을 남겼다. */
  { word:"marvelous", pron:"마벌러스", pos:"adj", level:"B2", meanings:["놀라운","굉장한"],
    syn:["fabulous","wondrous","stunning"],
    ex:[{ s:"She has a {{}} memory for names.", f:"marvelous", ko:"그녀는 이름을 기억하는 놀라운 능력이 있다." }] },

  /* 승격 ① — GLOSS '남성적인' 과 같은 갈래다. feminine(ant) 이 참조한다.
     원본 '남성의, 남자다운' 도 같은 갈래라 사전 쪽 한 갈래로 두었다. */
  { word:"masculine", pron:"매스큘린", pos:"adj", level:"B2", meanings:["남성적인"],
    syn:["manly","virile","male"], ant:["feminine"],
    ex:[{ s:"The design has a distinctly {{}} feel.", f:"masculine", ko:"그 디자인은 뚜렷하게 남성적인 느낌을 준다." }] },

  /* 승격 ① — GLOSS '다량; 질량' 을 글자까지 지켰다. bulk(syn)·lump(syn) 두 문제가
     참조한다. 원본 첫 뜻 '덩어리' 를 쓰면 L 세트 lump·C 세트 cluster 와 첫 뜻이
     같아지는데, 사전 쪽을 쓰면 그 문제도 함께 풀린다. */
  { word:"mass", pron:"매스", pos:"n", level:"B2", meanings:["다량","질량"],
    syn:["bulk","lump","quantity"],
    ex:[{ s:"A {{}} of paperwork arrived that morning.", f:"mass", ko:"그날 아침 다량의 서류가 도착했다." }] },

  { word:"mass produce", pron:"매스 프러두스", pos:"phr", level:"B2", meanings:["대량 생산하다"],
    syn:["turn out in bulk","churn out","manufacture at scale"] },

  /* 승격 ① — GLOSS '거대한, 대량의' 와 같은 갈래다. 참조도 PRON 도 없어
     원본 뜻을 그대로 썼다. */
  { word:"massive", pron:"매시브", pos:"adj", level:"B2", meanings:["거대한","매우 큰"],
    syn:["colossal","immense","hulking"], ant:["tiny"],
    ex:[{ s:"A {{}} oak stood at the centre of the lawn.", f:"massive", ko:"거대한 떡갈나무가 잔디밭 가운데 서 있었다." }] },

  /* 승격 ① — GLOSS '숙련자, 장인' 을 글자까지 지켰다.
     apprentice(ant)·expert(syn) 두 문제가 참조하므로 원본의 '대가, 거장' 대신
     사전 쪽을 남겼다 — 같은 갈래다. 원본의 동사 갈래('숙련하다')는 pos 가 n 이라 뺐다. */
  { word:"master", pron:"매스터", pos:"n", level:"B1", meanings:["숙련자","장인"],
    syn:["expert","virtuoso","adept"], ant:["apprentice"],
    ex:[{ s:"He trained for years under a {{}} of the craft.", f:"master", ko:"그는 그 공예의 숙련자 밑에서 여러 해 훈련했다." }] },

  /* master 와 어근이 같지만 품사가 둘 다 n 이라 같은 보드에 올 수 있다.
     다만 뜻이 '숙련자' 와 '걸작' 으로 완전히 달라 무리가 없다. */
  { word:"masterpiece", pron:"매스터피스", pos:"n", level:"B2", meanings:["걸작"],
    syn:["magnum opus","crowning work","classic"],
    ex:[{ s:"The novel is widely regarded as his {{}}.", f:"masterpiece", ko:"그 소설은 널리 그의 걸작으로 평가된다." }] },

  /* 원본은 동사를 앞에 두므로 pos 를 v 로 잡았다. 명사 갈래('친구, 짝')는 뺐다. */
  { word:"mate", pron:"메이트", pos:"v", level:"B2", meanings:["짝짓기하다","교배하다"],
    syn:["breed","pair off","couple"],
    ex:[{ s:"These birds {{}} for life.", f:"mate", ko:"이 새들은 평생 짝짓기한다." }] },

  /* 승격 ① — GLOSS '재료, 물질' 을 글자까지 지켰다. content(syn)·fabric(syn) 두
     문제가 참조하므로 원본의 '자료, 데이터' 대신 사전 쪽을 남겼다. */
  { word:"material", pron:"머티리얼", pos:"n", level:"B1", meanings:["재료","물질"],
    syn:["fabric","substance","stuff"],
    ex:[{ s:"The jacket is made from recycled {{}}.", f:"material", ko:"그 재킷은 재활용 재료로 만들어졌다." }] },

  /* material 과 앞 다섯 글자가 같지만 어원이 갈리고 품사도 달라(n/adj)
     같은 보드에 안 온다. */
  { word:"maternal", pron:"머터널", pos:"adj", level:"C1", meanings:["모성의","어머니의"],
    syn:["motherly","nurturing","protective"], ant:["paternal"],
    ex:[{ s:"She felt a strong {{}} instinct from the first day.", f:"maternal", ko:"그녀는 첫날부터 강한 모성 본능을 느꼈다." }] },

  { word:"maternity", pron:"머터너티", pos:"adj", level:"C1", meanings:["출산의","임산부의"],
    syn:["prenatal","obstetric","childbearing"],
    ex:[{ s:"She took six months of {{}} leave.", f:"maternity", ko:"그녀는 6개월의 출산 휴가를 냈다." }] },

  /* 승격 ① — GLOSS '문제; 물질' 을 글자까지 지켰다. content(syn) 가 참조한다.
     원본의 '일' 은 '문제' 와 같은 갈래이고, 동사 갈래('중요하다')는 pos 가 n 이라 뺐다. */
  { word:"matter", pron:"매터", pos:"n", level:"B1", meanings:["문제","물질"],
    syn:["issue","affair","substance"],
    ex:[{ s:"We need to settle this {{}} before Friday.", f:"matter", ko:"우리는 금요일 전에 이 문제를 해결해야 한다." }] },

  /* 승격 ① — GLOSS '성숙한; 성숙하다' 를 글자까지 지켰다. I 세트 immature 와
     J 세트 juvenile 이 반의어로 참조하므로 이 갈래가 바뀌면 방금 넣은 문제 화면이
     바뀐다. 원본의 '다 자란' 은 '성숙한' 과 같은 갈래다. */
  { word:"mature", pron:"머추어", pos:"adj", level:"B2", meanings:["성숙한","성숙하다"],
    syn:["grown-up","developed","ripe"], ant:["immature"],
    ex:[{ s:"He is remarkably {{}} for his age.", f:"mature", ko:"그는 나이에 비해 놀랄 만큼 성숙하다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "add up": "앞뒤가 맞다",
  "arrive in time": "시간에 맞춰 닿다",
  "atone for": "~을 벌충하다",
  "be logical": "논리에 맞다",
  "bog": "늪지",
  "bone marrow": "뼈 속 골수",
  "book ahead": "미리 예약하다",
  "charged": "전하를 띤",
  "childbearing": "아이를 낳는",
  "churn out": "쏟아 내다",
  "classic": "고전적 명작",
  "clear a path for": "~을 위해 길을 트다",
  "combat sport": "격투 종목",
  "complain loudly": "큰 소리로 불평하다",
  "conjugal": "혼인 관계의",
  "conjurer": "요술쟁이",
  "couple": "짝을 이루다",
  "crewed": "승무원이 탄",
  "crowning work": "최고의 성취작",
  "enrage": "분노하게 하다",
  "exasperate": "속을 뒤집어 놓다",
  "fighting art": "싸움 기술",
  "foul-smelling": "역한 냄새의",
  "gain ground": "기반을 넓히다",
  "glitch": "작은 결함",
  "grandeur": "장대함",
  "greater part": "더 큰 쪽",
  "grown-up": "다 자란",
  "hand-operated": "손으로 조작하는",
  "hands-on": "직접 손을 쓰는",
  "hold water": "말이 성립하다",
  "hulking": "덩치가 큰",
  "human-made": "사람이 만든",
  "human-operated": "사람이 조작하는",
  "ill-natured": "성질이 나쁜",
  "ill-treat": "부당하게 대하다",
  "illusionist": "환술사",
  "improvised": "즉석에서 만든",
  "infuriate": "격노하게 하다",
  "innermost part": "가장 깊은 속",
  "kick up a row": "한바탕 소동을 벌이다",
  "magnetized": "자기를 띤",
  "magnum opus": "대표 역작",
  "majesty": "위엄",
  "make a scene": "사람들 앞에서 난리를 치다",
  "male": "남성의",
  "manly": "남자다운",
  "manufacture at scale": "규모를 갖춰 제조하다",
  "matrimonial": "혼인상의",
  "misconduct": "부정 행위",
  "mishandle": "잘못 다루다",
  "most": "대부분의 것",
  "motherly": "어머니 같은",
  "muster": "소집하다",
  "nasty": "고약한",
  "navigate": "길을 찾아 나아가다",
  "negligence": "태만, 부주의",
  "negligible": "무시해도 될 만한",
  "non-automatic": "자동이 아닌",
  "nurturing": "보살피는",
  "obsession": "집착",
  "obstetric": "산과의",
  "original copy": "원본",
  "pair off": "둘씩 짝지다",
  "paternal": "아버지의",
  "phenomenon": "현상",
  "pith": "속심",
  "polarized": "극을 띤",
  "poor diet": "부실한 식사",
  "press forward": "밀고 나아가다",
  "pronounced": "두드러진",
  "protective": "감싸려 하는",
  "pull it off": "끝내 해내다",
  "reeking": "악취를 풍기는",
  "self-defense skill": "호신 기술",
  "sensation": "큰 화제",
  "slight": "미미한",
  "smelly": "냄새 나는",
  "soothe": "달래다",
  "spiteful": "앙심을 품은",
  "splendor": "화려함",
  "staffed": "인원이 배치된",
  "steer": "방향을 조종하다",
  "step aside for": "~에게 자리를 비켜 주다",
  "stopgap": "임시로 메우는",
  "swamp": "늪",
  "turn out in bulk": "한꺼번에 많이 만들다",
  "typescript": "타자 원고",
  "undernourishment": "영양 부족",
  "unmanned": "무인의",
  "venomous": "독기 서린",
  "vindictive": "앙갚음하려는",
  "virile": "사내다운",
  "virtuoso": "명인",
  "warlike": "전쟁을 벌이려는",
  "way": "방식",
  "wedded": "혼인한",
  "wetland": "습지대",
  "wizard": "마법사",
  "wondrous": "경이로운",
  "work one's way": "힘써 나아가다",
  "wrongdoing": "비행, 부정"
});
