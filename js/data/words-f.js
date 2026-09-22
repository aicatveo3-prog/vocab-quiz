/**
 * 단어 데이터 — 수능 보카 F 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ COL_POOLS 와 GLOSS 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.GLOSS = {...} 로 재대입하면 A~E 세트의 것이 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * ── 이 세트를 쓰면서 지키는 규약 (D·E 세트와 동일) ──
 *
 * meanings — 대표 2개까지만. 첫 뜻에는 괄호 설명을 넣지 않는다.
 *   4지선다 선택지와 짝 맞추기 카드에 그대로 찍히는 문자열이다.
 *
 * ex.f — 반드시 '규칙 변화'만 쓴다.  ★ 가장 중요한 함정
 *   불규칙이면 오답이 원형으로 남아 뜻을 몰라도 정답이 보인다.
 *   tools/words-f-audit.js 가 기계로 검사한다.
 *
 * syn — 문맥에서 실제로 바꿔 쓸 수 있는 말 3개, 아니면 아예 비운다.
 *   3개 미만이면 '아닌 것 고르기'가 출제되지 않으면서 데이터만 남는다.
 *
 *   ★ 유의어를 고른 뒤 반드시 GLOSS 에 이미 있는지, 그 뜻이 이 문맥에 맞는지
 *     확인할 것. 이미 있으면 '거기 적힌 뜻'이 화면에 뜬다.
 *     node tools/pron-render-check.js --word <표제어> 로 확인한다.
 *
 * ant — 진짜 반대말만. 애매하면 '아닌 것 고르기'가 논쟁거리가 된다.
 *
 * pos·level — 오답 후보는 '같은 품사 · 레벨 ±1'로 걸러진다. 한쪽에 몰면
 *   후보가 3개 미만이 되어 그 단어가 조용히 출제에서 빠진다(에러도 안 난다).
 *
 * pron — 한글 발음. 표기 규칙은 js/data/pron.js 헤더에 정리돼 있다.
 *   표제어가 pron 을 가지면 PRON 사전의 같은 항목은 군더더기이므로 반드시
 *   지운다 (tools/pron-audit.js 가 중복을 오류로 잡는다).
 *
 * ── 원본 목록에서 바로잡은 것 (0차에서 tools/f-source.txt 에 반영) ──
 *   filthy      '(피해, 상처를) 가하다, 입히다' → 더러운, 불결한
 *                                               (inflict 의 뜻이 섞였다)
 *   fragrance   '(부피, 크기 등이) 늘다'        → 향기, 방향
 *                                               (swell 의 뜻이 섞였다)
 *   follow suit '수확량, 수익량'                → 선례를 따르다
 *                                               (yield 의 뜻이 섞였다)
 *   frustrated  '좌절시키는'                    → 좌절한, 낙담한
 *                                               (능동/수동이 뒤집혀 있었다)
 *   flit        '동성애의'                      → 훌쩍 날다, 스치듯 지나가다
 *                                               (폐어적 속어 뜻이 올라와 있었다)
 *   fragrance·follow suit 는 이 저장소의 GLOSS 가 이미 옳은 뜻을 갖고 있었다.
 *   flavor perception(향미 지각)은 수능 보카 어휘가 아니라 목록에서 뺐다.
 *   furnish A with B · feel free to do · for one's sake 는 템플릿형 그대로 둔다.
 *
 * ── 1차 기록: 승격한 낱말의 첫 뜻을 고른 근거 ──
 *   사전(GLOSS)에 있던 낱말을 표제어로 올리면, 그 낱말을 유의어로 쓰던 기존
 *   문제의 설명이 '사전 뜻'에서 '표제어 뜻'으로 바뀐다. 1차에서 7개를 올렸다.
 *
 *   fake  ★ meanings 를 ["가짜의"] 한 개로 둔 이유
 *     counterfeit 의 유의어가 ["fake","forged","bogus"] 이고 bogus 의 뜻이
 *     이미 "가짜의, 위조의" 다. fake 를 ["가짜의","위조의"] 로 올리면 한
 *     문제 안에서 두 선택지의 뜻이 한 글자도 다르지 않게 되어 audit 이
 *     오류로 잡는다(그리고 사람이 풀 수 없는 문제가 된다).
 *     ["가짜의"] 는 기존 GLOSS 와 똑같아서 counterfeit·artificial·authentic
 *     세 문제가 한 글자도 바뀌지 않는다. 원본의 '위조의' 는 버렸다.
 *   fad           ["일시적 유행"]  기존 GLOSS 와 동일 → craze 문제 무변
 *   fall back on  ["~에 의지하다"] 기존 GLOSS 와 동일 → draw on 문제 무변
 *   facility      "시설, 기관" → ["시설","설비"]  amenity 문제의 설명이
 *                 바뀌지만 더 정확하다('기관'은 institution 쪽 뜻이다)
 *   factor        "요인, 요소" → ["요인","인자"]  determinant 문제 무해
 *   fade          "바래다, 사라지다" → ["바래다","서서히 사라지다"]
 *                 disappear 의 첫 뜻이 "사라지다" 라서 그대로 두면 짝 맞추기
 *                 카드에 같은 글자가 겹칠 수 있다. 한 단계 더 좁혔다
 *   faith         "신뢰, 신앙" → ["믿음","신앙심"]  conviction 문제 무해
 *
 * ── 1차에서 유의어로 쓰지 않은 것과 이유 ──
 *   make up   → fabricate 의 유의어로 쓰려 했으나 GLOSS 가 "구성하다;
 *               화해하다" 다. 날조 문맥이 아니다. concoct·trump up·falsify 로
 *   ease      → facilitate 의 유의어로 쓰려 했으나 GLOSS 가 "쉬움, 편안함"
 *               (명사)이다. 동사 자리에 맞지 않는다. assist·expedite 로
 *   capacity  → faculty 의 유의어로 쓰려 했으나 표제어 뜻이 "수용력, 용량"
 *               이다. '능력' 뜻이 아니다. ability·aptitude 로
 *   dim       → fade 의 유의어로 쓰려 했으나 GLOSS 가 "어둑하게 하다"(타동)
 *               다. fade 는 자동사다. wither·die away·lose color 로
 *   bogus     → fake 의 유의어로 쓰려 했으나 위 counterfeit 문제와 겹친다
 *
 * ── 2차 기록: 승격한 9개의 첫 뜻 ──
 *   2차는 기존 사전 항목 9개를 표제어로 올렸다. 그중 8개는 기존 뜻을 그대로
 *   가져와 기존 문제가 한 글자도 바뀌지 않게 했다.
 *     fallacy·fantasy·fascinate·fatality·fate·fault·favorable — 기존 뜻 유지
 *     favorable 은 adverse·approving·beneficial·conducive 넷이 참조하는 자리라
 *     원본 순서('호의적인' 먼저)를 버리고 기존 순서를 지켰다
 *     fatal  기존 뜻이 표제어 deadly 의 뜻과 글자까지 같았다. 표제어 둘이
 *            같은 뜻 문자열을 갖지 않도록 ["치명적인","돌이킬 수 없는"] 로
 *     fare   기존 '요리, 음식' 과 원본 '(교통) 요금' 이 아예 다른 갈래다.
 *            둘을 모두 담았다(["요금","음식"]). cuisine 의 선택지 설명이
 *            '요리, 음식' → '요금, 음식' 으로 바뀐다 — 음식 갈래는 그대로
 *            남으므로 틀린 설명이 되지는 않는다
 *
 * ── 2차에서 유의어로 쓰지 않은 것과 이유 ──
 *   charge       fare 의 유의어로 쓰려 했으나 표제어 뜻이 '청구하다'(동사)다
 *   acquaintance familiarity 의 유의어로 쓰려 했으나 뜻이 '아는 사람, 지인'
 *                으로 사람을 가리켜 '익숙함' 문맥에 맞지 않는다
 *   flaw         fault 의 유의어로 쓰려 했으나 뜻 '결함, 흠' 이 표제어 defect
 *                의 뜻과 글자까지 같아 한 문제에서 두 선택지가 구별되지 않는다
 *
 * 진행 상황: 40 / 210단어 (fable ~ favorably) — 2차, 2챕터 완료.
 *
 * 단어를 더 넣을 때 확인 방법:
 *   node tools/words-f-audit.js           검사 6종 + 출제 시뮬레이션
 *   node tools/words-f-audit.js --rules   검사별 수행 건수
 *   node tools/pron-audit.js              발음 커버리지
 *   node tools/pron-render-check.js --all 전수 점검
 *   node tools/d-impact.js                기존 세트 영향 측정 (지문 무변화 확인)
 *   node tools/match-order-check.js       짝 맞추기 보드 전수 검사
 *   node tools/f-plan.js                  남은 목록의 함정 재확인
 */
window.VOCAB_F = [
  /* ── 1차: fable ~ fall off (20개) ─────────────── */

  /* ── fab ───────────────────────────────────── */
  { word:"fable", pron:"페이블", pos:"n", level:"B2", meanings:["우화","설화"],
    syn:["parable","allegory","folktale"],
    ex:[{ s:"Every child knows the {{}} of the tortoise and the hare.", f:"fable", ko:"아이들은 누구나 거북과 토끼의 우화를 안다." }] },

  { word:"fabric", pron:"패브릭", pos:"n", level:"B2", meanings:["직물","천"],
    syn:["cloth","textile","material"],
    ex:[{ s:"The dress is cut from a light cotton {{}}.", f:"fabric", ko:"그 원피스는 얇은 면직물로 재단되었다." }] },

  /* 원본은 '날조하다, 조작하다; 제작하다, 조립하다' 인데 두 갈래를 함께 담으면
     짝 맞추기 카드의 뜻이 흐려진다. 유의어가 붙는 날조 쪽으로 모았다. */
  { word:"fabricate", pron:"패브러케이트", pos:"v", level:"C1", meanings:["날조하다","조작하다"],
    syn:["concoct","trump up","falsify"],
    ex:[{ s:"Reporters proved that the witness had {{}} the entire story.", f:"fabricated", ko:"기자들은 그 증인이 이야기 전체를 날조했음을 밝혀냈다." }] },

  { word:"fabulous", pron:"패뷸러스", pos:"adj", level:"B2", meanings:["기막히게 멋진","굉장한"],
    syn:["marvelous","superb","terrific"],
    ex:[{ s:"The view from the summit was simply {{}}.", f:"fabulous", ko:"정상에서 보는 경치는 그저 기막히게 멋졌다." }] },

  /* ── fac ───────────────────────────────────── */
  { word:"facade", pron:"퍼사드", pos:"n", level:"C1", meanings:["정면","허울"],
    syn:["frontage","outward appearance","veneer"],
    ex:[{ s:"The bank kept its old stone {{}} when the inside was rebuilt.", f:"facade", ko:"그 은행은 내부를 다시 지으면서도 오래된 석조 정면을 남겼다." }] },

  { word:"facilitate", pron:"퍼실러테이트", pos:"v", level:"C1", meanings:["쉽게 하다","촉진하다"],
    syn:["assist","expedite","make easier"],
    ex:[{ s:"A shared language can {{}} trade between neighbors.", f:"facilitate", ko:"공통 언어는 이웃 나라 사이의 교역을 쉽게 할 수 있다." }] },

  { word:"facility", pron:"퍼실러티", pos:"n", level:"B2", meanings:["시설","설비"],
    syn:["installation","amenity","establishment"],
    ex:[{ s:"The town opened a new sports {{}} beside the river.", f:"facility", ko:"그 도시는 강가에 새 체육 시설을 열었다." }] },

  { word:"factor", pron:"팩터", pos:"n", level:"B2", meanings:["요인","인자"],
    syn:["element","cause","determinant"],
    ex:[{ s:"Cost was the deciding {{}} in their final choice.", f:"factor", ko:"비용이 그들의 최종 선택을 가른 요인이었다." }] },

  /* phr 은 문장 빈칸에 넣기 어려워 ex 를 두지 않는다 (기존 phr 151개 모두 같다). */
  { word:"factor in", pron:"팩터 인", pos:"phr", level:"B2", meanings:["~을 고려하다"],
    syn:["take into account","allow for","bear in mind"] },

  { word:"factual", pron:"팩추얼", pos:"adj", level:"C1", meanings:["사실에 근거한"],
    syn:["accurate","truthful","verifiable"], ant:["fictional"],
    ex:[{ s:"The report must stay {{}} and leave out guesswork.", f:"factual", ko:"그 보고서는 사실에 근거해야 하고 추측은 빼야 한다." }] },

  { word:"faculty", pron:"패컬티", pos:"n", level:"C1", meanings:["능력","학부"],
    syn:["ability","aptitude","mental power"],
    ex:[{ s:"Age had not dulled her {{}} for quick reasoning.", f:"faculty", ko:"나이는 빠르게 추론하는 그녀의 능력을 무디게 하지 못했다." }] },

  /* ── fad ~ fak ──────────────────────────────── */
  { word:"fad", pron:"패드", pos:"n", level:"B2", meanings:["일시적 유행"],
    syn:["craze","trend","vogue"],
    ex:[{ s:"The diet proved to be nothing more than a passing {{}}.", f:"fad", ko:"그 식이법은 지나가는 일시적 유행에 지나지 않는 것으로 드러났다." }] },

  { word:"fade", pron:"페이드", pos:"v", level:"B1", meanings:["바래다","서서히 사라지다"],
    syn:["wither","die away","lose color"], ant:["intensify"],
    ex:[{ s:"Bright curtains {{}} quickly in direct sunlight.", f:"fade", ko:"밝은 색 커튼은 직사광선에서 빨리 바랜다." }] },

  { word:"fair", pron:"페어", pos:"adj", level:"B1", meanings:["공정한","타당한"],
    syn:["just","impartial","even-handed"], ant:["biased"],
    ex:[{ s:"Both sides called the referee's ruling {{}}.", f:"fair", ko:"양쪽 모두 심판의 판정을 공정하다고 했다." }] },

  { word:"faith", pron:"페이스", pos:"n", level:"B1", meanings:["믿음","신앙심"],
    syn:["trust","belief","confidence"], ant:["doubt"],
    ex:[{ s:"She kept her {{}} in the team through a losing season.", f:"faith", ko:"그녀는 연패하는 시즌 내내 팀에 대한 믿음을 지켰다." }] },

  { word:"faithful", pron:"페이스풀", pos:"adj", level:"B2", meanings:["충실한","헌신적인"],
    syn:["loyal","devoted","steadfast"], ant:["disloyal"],
    ex:[{ s:"He stayed {{}} to the promise he had made years earlier.", f:"faithful", ko:"그는 몇 해 전에 한 약속에 충실했다." }] },

  /* meanings 가 한 개인 이유는 이 파일 헤더 '1차 기록' 에 적었다. */
  { word:"fake", pron:"페이크", pos:"adj", level:"B1", meanings:["가짜의"],
    syn:["counterfeit","phony","sham"], ant:["genuine"],
    ex:[{ s:"Customs officers seized a crate of {{}} watches.", f:"fake", ko:"세관원들이 가짜 시계 한 상자를 압수했다." }] },

  /* ── fall ──────────────────────────────────── */
  { word:"fall back on", pron:"폴 백 온", pos:"phr", level:"B2", meanings:["~에 의지하다"],
    syn:["resort to","turn to","rely on"] },

  { word:"fall behind", pron:"폴 비하인드", pos:"phr", level:"B1", meanings:["늦어지다","낙오하다"],
    syn:["lag","trail","drop back"] },

  { word:"fall off", pron:"폴 오프", pos:"phr", level:"B2", meanings:["줄다","떨어지다"],
    syn:["decline","decrease","dwindle"] },

  /* ── 2차: fall short of ~ favorably (20개) ─────── */

  { word:"fall short of", pron:"폴 숏 오브", pos:"phr", level:"B2", meanings:["~이 부족하다"],
    syn:["fail to reach","come up short","not measure up"] },

  { word:"fallacy", pron:"팰러시", pos:"n", level:"C1", meanings:["오류","잘못된 생각"],
    syn:["misconception","false notion","faulty reasoning"], ant:["truth"],
    ex:[{ s:"The whole argument rests on a simple {{}} about averages.", f:"fallacy", ko:"그 논증 전체가 평균에 관한 단순한 오류에 기대고 있다." }] },

  { word:"falter", pron:"폴터", pos:"v", level:"C1", meanings:["불안정해지다","머뭇거리다"],
    syn:["waver","hesitate","lose momentum"], ant:["press on"],
    ex:[{ s:"His voice began to {{}} as he read the verdict aloud.", f:"falter", ko:"판결문을 소리내어 읽는 동안 그의 목소리가 떨리기 시작했다." }] },

  /* 유의어로 acquaintance 를 쓰려 했으나 표제어 뜻이 '아는 사람, 지인' 이다.
     '익숙함' 이 아니라 사람을 가리켜 문맥이 어긋난다. */
  { word:"familiarity", pron:"퍼밀리애러티", pos:"n", level:"B2", meanings:["익숙함","친근함"],
    syn:["intimacy","closeness","working knowledge"],
    ex:[{ s:"Years at the bench gave her a deep {{}} with the machine.", f:"familiarity", ko:"작업대에서 보낸 여러 해가 그 기계에 대한 깊은 익숙함을 그녀에게 주었다." }] },

  { word:"famine", pron:"패민", pos:"n", level:"B2", meanings:["굶주림","기아"],
    syn:["starvation","hunger","food shortage"], ant:["abundance"],
    ex:[{ s:"Three years of drought brought {{}} to the northern villages.", f:"famine", ko:"3년에 걸친 가뭄이 북부 마을들에 굶주림을 불러왔다." }] },

  { word:"fanatic", pron:"퍼내틱", pos:"n", level:"C1", meanings:["광신자","열광자"],
    syn:["zealot","extremist","devotee"],
    ex:[{ s:"Only a true {{}} would camp outside for three nights.", f:"fanatic", ko:"진짜 열광자만이 사흘 밤을 밖에서 야영할 것이다." }] },

  { word:"fantasy", pron:"팬터시", pos:"n", level:"B2", meanings:["환상","공상"],
    syn:["daydream","illusion","reverie"], ant:["reality"],
    ex:[{ s:"As a child he escaped into a {{}} of distant planets.", f:"fantasy", ko:"어릴 때 그는 먼 행성들의 환상 속으로 도피했다." }] },

  /* 원본은 '(교통) 요금' 이고 기존 GLOSS 는 '요리, 음식' 이었다. cuisine 의
     유의어로 쓰이던 자리라 한쪽을 버리면 기존 문제나 원본 중 하나가 어긋난다.
     두 갈래를 모두 담았다. 유의어는 요금 쪽으로만 모았다 — charge 를 쓰려
     했으나 표제어 뜻이 '청구하다'(동사)여서 명사 자리에 맞지 않는다. */
  { word:"fare", pron:"페어", pos:"n", level:"B2", meanings:["요금","음식"],
    syn:["ticket price","transport cost","passage money"],
    ex:[{ s:"The bus {{}} went up by twenty cents this month.", f:"fare", ko:"이번 달 버스 요금이 20센트 올랐다." }] },

  { word:"fascinate", pron:"패서네이트", pos:"v", level:"C1", meanings:["매혹하다","흥미를 끌다"],
    syn:["captivate","intrigue","enthrall"], ant:["bore"],
    ex:[{ s:"Deep-sea creatures {{}} children more than dinosaurs do.", f:"fascinate", ko:"심해 생물은 공룡보다 더 아이들을 매혹한다." }] },

  { word:"fascinating", pron:"패서네이팅", pos:"adj", level:"B2", meanings:["매력적인","대단히 흥미로운"],
    syn:["captivating","gripping","absorbing"], ant:["dull"],
    ex:[{ s:"She gave a {{}} talk on the earliest maps of the coast.", f:"fascinating", ko:"그녀는 그 해안의 최초 지도들에 관해 대단히 흥미로운 강연을 했다." }] },

  /* 원본은 '단식, 금식, 절식; 단식의, 금식의' 로 명사와 형용사가 섞여 있다.
     명사 쪽으로 정했다. */
  { word:"fasting", pron:"패스팅", pos:"n", level:"B2", meanings:["단식","금식"],
    syn:["abstinence","self-denial","going without food"],
    ex:[{ s:"Many traditions set aside a period of {{}} before a festival.", f:"fasting", ko:"많은 전통이 축제 전에 단식 기간을 따로 둔다." }] },

  /* 기존 GLOSS 는 '치명적인, 죽음을 초래하는' 이었는데 그것은 표제어 deadly 의
     뜻과 글자까지 똑같다. 표제어 둘이 같은 뜻 문자열을 갖지 않도록 원본의
     '돌이킬 수 없는' 을 둘째 뜻으로 삼았다. */
  { word:"fatal", pron:"페이털", pos:"adj", level:"B2", meanings:["치명적인","돌이킬 수 없는"],
    syn:["deadly","lethal","mortal"], ant:["harmless"],
    ex:[{ s:"A single careless step proved {{}} on the icy ridge.", f:"fatal", ko:"얼어붙은 능선에서 부주의한 한 걸음이 치명적이었다." }] },

  { word:"fatality", pron:"페이탤러티", pos:"n", level:"B2", meanings:["사망자","치사율"],
    syn:["death","casualty","loss of life"],
    ex:[{ s:"Not a single {{}} was reported in the derailment.", f:"fatality", ko:"그 탈선 사고에서 사망자는 한 명도 보고되지 않았다." }] },

  { word:"fate", pron:"페이트", pos:"n", level:"B2", meanings:["운명","숙명"],
    syn:["destiny","providence","predestination"], ant:["chance"],
    ex:[{ s:"He accepted his {{}} without a word of complaint.", f:"fate", ko:"그는 불평 한마디 없이 자기 운명을 받아들였다." }] },

  { word:"fatigue", pron:"퍼티그", pos:"n", level:"B2", meanings:["피로"],
    syn:["exhaustion","weariness","tiredness"], ant:["vigor"],
    ex:[{ s:"Back-to-back shifts left the crew in deep {{}}.", f:"fatigue", ko:"연달아 이어진 근무가 승무원들을 깊은 피로에 빠뜨렸다." }] },

  { word:"faucet", pron:"포싯", pos:"n", level:"B2", meanings:["수도꼭지"],
    syn:["tap","spigot","valve"],
    ex:[{ s:"Water dripped from the kitchen {{}} all night.", f:"faucet", ko:"밤새 부엌 수도꼭지에서 물이 똑똑 떨어졌다." }] },

  /* 유의어에 flaw 를 넣지 않았다. flaw 의 뜻 '결함, 흠' 이 표제어 defect 의
     뜻과 글자까지 똑같아, 한 문제에서 두 선택지가 구별되지 않는다. */
  { word:"fault", pron:"폴트", pos:"n", level:"B2", meanings:["결점","잘못"],
    syn:["defect","shortcoming","blemish"],
    ex:[{ s:"The report blamed the delay on a design {{}}.", f:"fault", ko:"보고서는 그 지연을 설계 결점 탓으로 돌렸다." }] },

  /* 원본은 '호의; 지지, 선호하다' 로 명사와 동사가 섞여 있다. 명사로 정했다. */
  { word:"favor", pron:"페이버", pos:"n", level:"B2", meanings:["호의","은혜"],
    syn:["kindness","goodwill","good turn"],
    ex:[{ s:"She asked one small {{}} before she left.", f:"favor", ko:"그녀는 떠나기 전에 작은 호의 하나를 부탁했다." }] },

  { word:"favorable", pron:"페이버러블", pos:"adj", level:"B2", meanings:["유리한","호의적인"],
    syn:["advantageous","approving","beneficial"], ant:["adverse"],
    ex:[{ s:"The committee returned a {{}} report on the plan.", f:"favorable", ko:"위원회는 그 계획에 유리한 보고서를 냈다." }] },

  /* 전체 adv 가 27개뿐이라 한쪽 레벨로 몰면 오답 후보가 3개 미만이 된다.
     B2 로 두어 B1·B2·C1 을 후보로 쓸 수 있게 했다. */
  { word:"favorably", pron:"페이버러블리", pos:"adv", level:"B2", meanings:["호의적으로","유리하게"],
    syn:["approvingly","positively","in a good light"],
    ex:[{ s:"The critics spoke {{}} of her first novel.", f:"favorably", ko:"비평가들은 그녀의 첫 소설을 호의적으로 말했다." }] }
];

/* ── F 세트가 쓰는 유의어·반의어의 뜻 ─────────────
   표제어(VOCAB~VOCAB_F)에 있는 낱말은 넣지 않는다 — 읽는 쪽이 표제어를 먼저
   찾으므로 죽은 항목이 되고, 뜻이 두 곳으로 갈라진다.
   1차에서 쓴 유의어 중 accurate·amenity·aptitude·assist·biased·cause·
   confidence·counterfeit·craze·decline·decrease·determinant·doubt·dwindle·
   element 는 표제어라서 여기에 없다.
   material·superb·ability·trend·wither·intensify·just·impartial·trust·
   belief·rely on·lag·genuine·establishment 는 이미 GLOSS 에 있어서 없다.

   ⚠️ 재대입(=)이 아니라 Object.assign 으로 합쳐야 A~E 세트 것이 살아남는다. */
Object.assign(window.GLOSS, {
  /* ── 1차: fable ~ fall off (37개) ───────────────── */
  "allegory":"풍유, 비유",
  "allow for":"~을 감안하다",
  "bear in mind":"명심하다, 유념하다",
  "cloth":"천, 옷감",
  "concoct":"꾸며내다, 조작하다",
  "devoted":"헌신적인, 열성적인",
  "die away":"차츰 사라지다",
  "disloyal":"불충한, 배신하는",
  "drop back":"뒤로 처지다",
  "even-handed":"공평한",
  "expedite":"신속히 처리하다",
  "falsify":"위조하다, 변조하다",
  "fictional":"허구의, 소설의",
  "folktale":"민간 설화, 옛이야기",
  "frontage":"건물 정면",
  "installation":"설비, 시설물",
  "lose color":"색이 바래다",
  "loyal":"충성스러운",
  "make easier":"더 쉽게 하다",
  "marvelous":"놀라운, 굉장한",
  "mental power":"정신적 능력",
  "outward appearance":"겉모습, 외관",
  "parable":"우화, 비유담",
  "phony":"허위의, 사이비의",
  "resort to":"~의 수단에 의지하다",
  "sham":"겉치레의, 거짓된",
  "steadfast":"확고한, 변함없는",
  "take into account":"고려하다, 참작하다",
  "terrific":"멋진, 대단한",
  "textile":"직물, 섬유 제품",
  "trail":"뒤처져 따라가다",
  "trump up":"날조하다",
  "truthful":"진실한, 사실대로의",
  "turn to":"~에 도움을 청하다",
  "veneer":"겉치장, 허울",
  "verifiable":"검증할 수 있는",
  "vogue":"유행, 인기",

  /* ── 2차: fall short of ~ favorably (46개) ───────────────── */
  "absorbing":"몰두하게 하는",
  "abstinence":"절제, 금욕",
  "approvingly":"찬성하여",
  "blemish":"흠, 오점",
  "bore":"지루하게 하다",
  "captivating":"매혹적인",
  "closeness":"가까움, 친밀함",
  "come up short":"모자라다",
  "daydream":"백일몽, 공상",
  "death":"죽음",
  "devotee":"열렬한 지지자",
  "enthrall":"마음을 온통 빼앗다",
  "extremist":"극단주의자",
  "fail to reach":"이르지 못하다",
  "false notion":"틀린 관념",
  "faulty reasoning":"잘못된 추론",
  "food shortage":"식량 부족",
  "going without food":"음식을 끊는 것",
  "good turn":"선행",
  "goodwill":"호의, 선의",
  "gripping":"몰입시키는",
  "in a good light":"좋게",
  "intimacy":"친밀함",
  "intrigue":"흥미를 돋우다",
  "loss of life":"인명 손실",
  "lose momentum":"기세를 잃다",
  "not measure up":"기준에 못 미치다",
  "passage money":"통행 요금",
  "positively":"긍정적으로",
  "predestination":"예정된 운명",
  "press on":"밀고 나아가다",
  "reverie":"몽상",
  "self-denial":"자기 절제",
  "shortcoming":"단점, 결점",
  "spigot":"주둥이, 꼭지",
  "starvation":"굶어 죽음, 기아",
  "tap":"수도꼭지",
  "ticket price":"승차 요금",
  "tiredness":"피곤함",
  "transport cost":"교통비",
  "valve":"밸브",
  "vigor":"활력, 기운",
  "waver":"흔들리다, 주저하다",
  "weariness":"지침, 피곤",
  "working knowledge":"실용적 지식",
  "zealot":"열성분자"
});
