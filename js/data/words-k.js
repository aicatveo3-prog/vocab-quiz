/**
 * 단어 데이터 — 수능 보카 K 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 이 세트는 8단어짜리다 ──
 *
 * k 로 시작하는 수능 수준 낱말이 그만큼 적다(영어 표제어 전체의 0.7% 남짓).
 * 절반이 'keep ~' 구여서 pos 가 phr 이고, phr 에는 ex 를 붙이지 않는다 —
 * A~J 세트의 phr 234개 중 예문을 가진 것이 0개다. 구는 빈칸으로 파도 어형
 * 변화가 없어 문제가 성립하지 않는다. 대신 syn 을 3개 갖춰 '아닌 것 고르기' 로
 * 덮었다.
 *
 * 챕터는 1개이고 8단어다. MIN_TAIL(4) 이상이라 독립 챕터로 남는다.
 */
window.VOCAB_K = [
  /* ── 챕터 1 ─────────────────────────────── */

  /* 승격 ① — GLOSS '열심인; 날카로운' 을 글자까지 지켰다.
     참조 둘(avid·enthusiastic)이 모두 '열심인' 쪽 갈래를 쓰므로,
     원본('날카로운, 예리한' 이 앞)이 아니라 사전 순서를 남겼다. */
  { word:"keen", pron:"킨", pos:"adj", level:"B2", meanings:["열심인","날카로운"],
    syn:["avid","enthusiastic","eager"], ant:["indifferent"],
    ex:[{ s:"She is a {{}} student of medieval history.", f:"keen", ko:"그녀는 중세사에 열심인 학생이다." }] },

  /* 원본은 keep away from·keep off 둘 다 '멀리 하다' 였다.
     keep away from 은 거리를 두는 쪽, keep off 는 손대거나 들어가지 않는 쪽이라
     '피하다, 가까이 하지 않다' 로 갈랐다. */
  { word:"keep away from", pron:"킵 어웨이 프럼", pos:"phr", level:"B1", meanings:["~를 멀리 하다"],
    syn:["stay clear of","shun","keep one's distance from"] },

  { word:"keep off", pron:"킵 오프", pos:"phr", level:"B2", meanings:["~를 피하다","가까이 하지 않다"],
    syn:["avoid","stay off","refrain from"] },

  { word:"keep pace with", pron:"킵 페이스 위드", pos:"phr", level:"B2", meanings:["~와 보조를 맞추다"],
    syn:["move in step with","stay level with","match the speed of"] },

  { word:"keep up with", pron:"킵 업 위드", pos:"phr", level:"B1", meanings:["~에 뒤지지 않다","~에 정통하다"],
    syn:["stay abreast of","follow closely","not fall behind"] },

  { word:"kerosene", pron:"케러신", pos:"n", level:"C1", meanings:["등유"],
    syn:["paraffin","lamp oil","fuel oil"],
    ex:[{ s:"The old lamp burns {{}} rather than oil.", f:"kerosene", ko:"그 낡은 램프는 기름이 아니라 등유를 태운다." }] },

  /* 첫 뜻 '기사' 가 A 세트 article 과 같지만 그쪽은 신문 기사(記事), 이쪽은
     중세 기사(騎士)다. 한글이 같을 뿐 뜻이 달라 학습에 방해가 되지 않고,
     meaningsOverlap 이 같은 보기에 함께 뜨지 못하게 막는다. */
  { word:"knight", pron:"나이트", pos:"n", level:"B2", meanings:["기사","무사"],
    syn:["cavalier","horseman","man-at-arms"],
    ex:[{ s:"The {{}} wore a full suit of plate armour.", f:"knight", ko:"그 기사는 판금 갑옷을 완전히 갖춰 입었다." }] },

  /* 승격 ① — GLOSS '지식' 과 글자까지 같다. I 세트 ignorance 의 반의어로
     쓰이므로 이 갈래가 바뀌면 방금 넣은 문제 화면이 바뀐다. 원본도 한 갈래다. */
  { word:"knowledge", pron:"날리지", pos:"n", level:"B1", meanings:["지식"],
    syn:["information","learning","expertise"], ant:["ignorance"],
    ex:[{ s:"Her {{}} of local plants is remarkable.", f:"knowledge", ko:"지역 식물에 대한 그녀의 지식은 놀랍다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "cavalier": "기마 무사",
  "follow closely": "바짝 따라가다",
  "fuel oil": "연료용 기름",
  "horseman": "말 타는 사람",
  "information": "정보",
  "keep one's distance from": "~와 거리를 두다",
  "lamp oil": "램프용 기름",
  "learning": "학식, 배움",
  "man-at-arms": "무장한 병사",
  "match the speed of": "~의 속도에 맞추다",
  "move in step with": "~와 발을 맞춰 나아가다",
  "not fall behind": "처지지 않다",
  "paraffin": "파라핀유",
  "stay abreast of": "~을 꾸준히 따라잡다",
  "stay clear of": "~에서 떨어져 있다",
  "stay level with": "~와 나란히 가다",
  "stay off": "~에 손대지 않다"
});
