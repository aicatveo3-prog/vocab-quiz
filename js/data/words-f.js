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
 * 진행 상황: 20 / 210단어 (fable ~ fall off) — 1차, 1챕터 완료.
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
    syn:["decline","decrease","dwindle"] }
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
  "vogue":"유행, 인기"
});
