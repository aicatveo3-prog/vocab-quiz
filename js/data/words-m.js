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
    ex:[{ s:"A software {{}} delayed the whole launch.", f:"malfunction", ko:"소프트웨어 고장이 발사 전체를 지연시켰다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "add up": "앞뒤가 맞다",
  "arrive in time": "시간에 맞춰 닿다",
  "atone for": "~을 벌충하다",
  "be logical": "논리에 맞다",
  "book ahead": "미리 예약하다",
  "charged": "전하를 띤",
  "clear a path for": "~을 위해 길을 트다",
  "complain loudly": "큰 소리로 불평하다",
  "conjurer": "요술쟁이",
  "enrage": "분노하게 하다",
  "exasperate": "속을 뒤집어 놓다",
  "gain ground": "기반을 넓히다",
  "glitch": "작은 결함",
  "grandeur": "장대함",
  "greater part": "더 큰 쪽",
  "hold water": "말이 성립하다",
  "ill-natured": "성질이 나쁜",
  "illusionist": "환술사",
  "improvised": "즉석에서 만든",
  "infuriate": "격노하게 하다",
  "kick up a row": "한바탕 소동을 벌이다",
  "magnetized": "자기를 띤",
  "majesty": "위엄",
  "make a scene": "사람들 앞에서 난리를 치다",
  "most": "대부분의 것",
  "polarized": "극을 띤",
  "press forward": "밀고 나아가다",
  "pull it off": "끝내 해내다",
  "soothe": "달래다",
  "spiteful": "앙심을 품은",
  "splendor": "화려함",
  "step aside for": "~에게 자리를 비켜 주다",
  "stopgap": "임시로 메우는",
  "venomous": "독기 서린",
  "wizard": "마법사"
});
