/**
 * 단어 데이터 — 수능 보카 E 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ COL_POOLS 와 GLOSS 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.GLOSS = {...} 로 재대입하면 A~D 세트의 것이 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * ── 이 세트를 쓰면서 지키는 규약 (D 세트와 동일) ──
 *
 * meanings — 대표 2개까지만. 첫 뜻에는 괄호 설명을 넣지 않는다.
 *   4지선다 선택지와 짝 맞추기 카드에 그대로 찍히는 문자열이다.
 *
 * ex.f — 반드시 '규칙 변화'만 쓴다.  ★ 가장 중요한 함정
 *   불규칙이면 오답이 원형으로 남아 뜻을 몰라도 정답이 보인다.
 *   tools/words-e-audit.js 가 기계로 검사한다.
 *
 * syn — 문맥에서 실제로 바꿔 쓸 수 있는 말 3개, 아니면 아예 비운다.
 *   3개 미만이면 '아닌 것 고르기'가 출제되지 않으면서 데이터만 남는다.
 *
 *   ★ 유의어를 고른 뒤 반드시 GLOSS 에 이미 있는지, 그 뜻이 이 문맥에 맞는지
 *     확인할 것. 이미 있으면 '거기 적힌 뜻'이 화면에 뜬다. 1차에서 실제로
 *     걸러낸 것:
 *       edge 의 유의어 border → "(경계를) 접하다"(동사)  ✗ → boundary
 *       edge 의 유의어 margin → "여백; 차이"             ✗ → rim
 *       efface 의 유의어 wipe out → "전멸시키다"(과함)    ✗ → blot out
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
 * ── 원본 목록에서 바로잡은 것 ─────────────────
 *   emulate     '치솟다, 급등하다'  → 모방하다, 흉내내다   (escalate 의 뜻이 섞였다)
 *   erode       '밤에 일어나는'     → 침식하다, 부식시키다  (nocturnal 의 뜻)
 *   extrovert   '외향적인'(형용사)  → 외향적인 사람(명사)  (extroverted 와 혼동)
 *   evident     '눈의 띄는'         → 눈에 띄는           (오타)
 *   effortless  '힘들지 않는'       → 힘들지 않은         (어미)
 *   exemplary   '칭찬할만한'        → 칭찬할 만한         (띄어쓰기)
 *   earthly     '도대체, 조금도' 갈래 제거 — 부정문 관용 용법이라 카드에 못 싣는다.
 *               '지상의'를 앞으로 (heavenly·divine 의 반의어로 쓰이는 뜻이 세속적인 쪽)
 *   edge        '우위' 갈래 제거 — 기존 GLOSS "가장자리, 끝"을 그대로 유지해야
 *               blade·brink·competitiveness·core 의 기존 문제가 안 변한다
 *   ecology     '생태계'를 뒤로 — ecosystem 과 뜻이 겹쳐 짝 맞추기가 억울해진다
 *   embody      '상징하다; 포함하다' → 구현하다, 상징하다  (주된 뜻이 빠져 있었다)
 *   elliptical  '생략된; 타원형의' → 타원형의를 앞으로 (ecology·earthly 와 같은 이유)
 *   emit        '(빛, 가스 등을) 내뿜다' → 방출하다, 내뿜다   (첫 뜻의 괄호를 풀었다)
 *   empirical   '경험(실험)에 의거한, 실증적인' → 실증적인을 앞으로 (같은 이유)
 *   enact       '(법을) 제정하다; 상연하다; ~을 행하다' → 갈래 셋을 둘로 줄였다
 *   encounter   '맞닥뜨리다, 마주하다; 만남, 조우, 접촉' → 동사로 정리했다.
 *               pos 는 하나여야 하는데 원본이 동사와 명사를 섞어 두었다
 *   endeavor    '노력하다; 노력' → 동사로 정리 (encounter 와 같은 경우)
 *   end up      '결국 (어떤 처지에) 처하게 되다' → 첫 뜻의 괄호를 풀었다
 *   endow       '(능력 등을) 주다, 기부하다' → 부여하다, 기부하다 (같은 이유)
 *   endorse     갈래 넷을 둘로 (홍보하다·배서하다 제거)
 *   enforce     '강요하다; 집행하다, 시행하다' → 시행하다를 앞으로, 둘로 줄였다
 *   engage      '사로잡다, 끌다; 관계를 맺다; 약속하다' → 둘로 줄였다
 *   enlighten   '계몽하다, 깨우치다, 가르치다' → 둘로 줄였다
 *   enhance     기존 GLOSS 는 "높이다, 향상시키다" 였는데 원본 순서대로 '향상시키다'를
 *               앞으로 돌렸다. 뜻 내용이 같아 degrade·detract 의 반의어 설명은 안 변한다
 *   enthrone    '(취임식 등에서) 왕좌에 앉히다' → 괄호를 풀었다
 *   entitle     '제목을 붙이다, 권리를 부여하다' → '권리를 부여하다'를 앞으로
 *               (시험에 나오는 쪽이고 3차에 넣은 GLOSS "entitled":"권리가 있는" 과 맞는다)
 *   environment-friendly  '환경친화적인, 친환경적인' → 두 뜻이 사실상 같은 말이라
 *               하나만 남겼다. 카드에 같은 말이 두 번 찍히는 것을 막는다
 *   epic        '서사시, 서사시의, 장대한' → 명사로 정리 (명사·형용사가 섞여 있었다)
 *   equivalent  '동등한, ~에 상당하는, 동등한 것' → 형용사로 정리
 *   erect       '세우다, 짓다, 만들다; 똑바로 선, 직립의' → 동사로 정리
 *   epidemic    '유행병, 전염병, 급속한 확산' → 둘로,  era '기원, 연대, 시대' → 둘로
 *   eradicate   '뿌리째 뽑다' 를 살렸다 (3차에서 넣은 GLOSS 항목이 표제어로 올라왔다)
 *
 * ── 작업 현황 ─────────────────────────────────
 * 250단어 (e-commerce ~ eyesore) — 13챕터. 20개씩 13차에 나눠 쓴다.
 * 차수를 챕터 크기(20)에 맞췄다. 알파벳순으로 뒤에만 붙으므로 한 번 완성한
 * 챕터는 다음 차수가 건드리지 않는다 — 차수마다 챕터 하나가 확정된다.
 *
 *   1차  20개  e-commerce ~ efficient      ← 완료
 *   2차  20개  effortless ~ elevated       ← 완료
 *   3차  20개  elevation ~ eminent         ← 완료
 *   4차  20개  emission ~ encourage        ← 완료
 *   5차  20개  encouragement ~ enlighten   ← 완료
 *   6차  20개  enormous ~ environment-friendly  ← 완료
 *   7차  20개  envision ~ erratic          ← 완료
 *   8차  20개  erroneous ~ evaluate
 *   9차  20개  evaporate ~ excess
 *  10차  20개  excessive ~ exhibition
 *  11차  20개  exhilarating ~ explicit
 *  12차  20개  explicitly ~ extinct
 *  13차  10개  extinction ~ eyesore
 *
 * ── 1차 기록 ─────────────────────────────────
 * syn 을 비운 7개 (e-commerce·ebb·eclipse·ecological·ecology·ecosystem·
 * economics) 는 바꿔 쓸 낱말이 없는 기술 명사다. 알파벳 앞머리에 eco-·econ-
 * 이 몰려 우연히 한 차수에 겹쳤고, 뒤 차수는 동사·형용사가 많아 정상이다.
 * 억지로 채우면 틀린 유의어를 가르치게 되므로 비웠다. 그 단어는 '아닌 것
 * 고르기'에만 안 나오고 나머지 4개 모드는 정상 출제된다.
 *
 * 표제어가 되면서 사전에서 지운 항목 4개
 *   gloss.js   economical, ecstasy
 *   words-c.js earthly, edge
 *   pron.js    earthly, economical, ecstasy, edge
 *
 * ── 2차 기록 ─────────────────────────────────
 * syn 을 비운 2개 — electoral(선거의)·electromagnetic field(전자기장).
 * 1차의 7개에서 크게 줄었다. eco-·econ- 명사 무리를 지났기 때문이다.
 *
 * 표제어가 되면서 사전에서 지운 항목 5개
 *   gloss.js   elaborate, election, elevated
 *   words-c.js effortless, element
 *   pron.js    effortless, elaborate, election, element, elevated
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   element   '성분' → '원소'. compound(화합물)의 반의어로 이미 쓰이고 있어
 *             원소 갈래를 버리면 그 문제가 무너진다 (Salt is a compound of…)
 *   elevated  기존 GLOSS "높은, 고상한"과 똑같이 둬서 aerial 의 유의어가 안 변한다
 *   elements  레벨을 C1 로 벌렸다. element(B1)와 '레벨 ±1' 필터로 갈라져
 *             철자가 s 하나 다른 두 낱말이 한 문제의 보기로 같이 뜨지 않는다
 *
 * 유의어에서 걸러낸 것 — GLOSS 뜻이 문맥과 어긋나는 경우
 *   electricity 의 current → "흐름, 현재의"   ✗ → electric current(전류)
 *   eject 의 admit          → "인정하다, 시인하다" ✗ → let in
 *   elegant 의 crude        → "대충의, 원유"   ✗ → inelegant
 *
 * ── 3차 기록 ─────────────────────────────────
 * syn 을 비운 1개 — embroider(수놓다). stitch·sew 는 뜻이 더 넓어 유의어로
 * 가르치면 틀린 것을 가르치게 되는 공예 동사다.
 * 동사가 9개 들어와 세트 분포가 v 4 → 13 으로 풀렸다 (eco-·elect- 명사 무리를 지났다).
 *
 * 표제어가 되면서 사전에서 지운 항목 7개
 *   gloss.js   elevation, eliminate, embark, embrace, emerge, emergence
 *   words-d.js eminent
 *   pron.js    elevation, eliminate, embark, embrace, emerge, emergence, eminent
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   eliminate 기존 GLOSS "제거하다, 없애다"를 그대로 옮겼다. abolish·assassinate 가
 *             유의어로 쓰고 있어 '탈락시키다' 같은 경기 갈래를 넣으면 암살·폐지
 *             문제의 피드백이 엉뚱해진다
 *   eminent   기존 GLOSS "저명한, 뛰어난"을 그대로 뒀다 — distinguished 의 유의어다
 *             (2차의 elevated 와 같은 처리)
 *   emergence 레벨을 C1, emergency 를 B1 로 두 칸 벌렸다. 철자가 한 글자 다른 같은
 *             명사가 '레벨 ±1' 필터에 걸려 한 문제의 보기로 같이 뜨지 않는다.
 *             2차의 element(B1)/elements(C1) 와 같은 방법이고 실제 난이도와도 맞는다
 *   embody    반대로 원본을 고칠 수 있었던 경우다 — GLOSS·PRON 어디에도 없던 낱말이라
 *             '구현하다'를 앞에 세워도 깨질 기존 문제가 없었다
 *
 * 유의어에서 걸러낸 것
 *   eloquent 의 articulate → 표제어인데 품사가 동사("분명히 표현하다") ✗ → well-spoken
 *   elicit 의 extract      → "발췌하다; 추출물"      ✗ → bring out
 *   embed 의 lodge         → "숙소; 제기하다"        ✗ → set in
 *   emblem 의 token        → "표시; 기념품"          ✗ → badge
 *   emerge 의 surface      → "표면; 나타나다"(명사 갈래) ✗ → come to light
 *   emergence 의 rise      → "오르다; 상승"(동사)    ✗ → advent
 *   embarrass 의 shame     → "수치, 창피"(명사)      ✗ → put to shame
 *   embark 의 get on       → "탑승하다". 뜻이 표제어 board 와 글자까지 같아 피드백
 *                            두 줄이 똑같아진다(audit 이 오류로 잡았다) ✗ → go aboard
 *
 * PRON 에 뒤늦게 채운 2개 — humiliate, symbol. GLOSS 에는 전부터 있었지만 발음이
 * 없었다. 선택지로 처음 쓰이면서 '선택지는 뜻과 발음을 모두 가져야 한다' 검사에
 * 걸렸다. 앞 차수에서는 아무도 유의어로 쓰지 않아 드러나지 않았던 구멍이다.
 *
 * ── 4차 기록 ─────────────────────────────────
 * syn 을 비운 1개 — emotionally. E 세트의 첫 부사다. 부사는 바꿔 쓸 낱말을
 * 만들면 억지가 된다(emotional 은 형용사라 품사가 어긋나고, sentimentally 는
 * '감상적으로'로 뜻이 기운다). 오답 후보는 전체 adv 23개에서 나오므로 출제는 정상이다.
 *
 * 사전에 이미 있던 낱말이 9개로 앞 차수(7개)보다 많았다. em-·en- 접두사 구간이
 * 기본 어휘라서 A~D 세트가 이미 유의어로 끌어다 쓰고 있었기 때문이다.
 *
 * 표제어가 되면서 사전에서 지운 항목 9개 (GLOSS·PRON 양쪽 18항목)
 *   gloss.js   emphasize, empty, enchant, enclose, encounter
 *   words.js   emit
 *   words-d.js enable, encode, encourage
 *   pron.js    위 9개 전부
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   emit      기존 뜻 "방출하다"를 첫 뜻으로 살렸다 — absorb 의 반의어이고
 *             discharge 의 유의어다
 *   empty     기존 뜻의 '빈' 갈래를 유지했다 — blank·devoid·drain 이 유의어로 쓴다
 *   encourage 기존 GLOSS "격려하다, 장려하다" 를 그대로 옮겼다(demoralize 의 반의어).
 *             원본의 '자극하다'를 쓰지 않은 이유다
 *   encode    기존 GLOSS 와 똑같이 뒀다 — decipher 의 반의어다
 *   enable    empower 의 유의어로도 쓰므로 레벨을 B2 로, empower 를 C1 로 벌렸다.
 *             같은 동사 둘이 한 문제의 보기로 같이 뜨지 않는다
 *
 * 유의어에서 걸러낸 것
 *   emission 의 discharge → 표제어인데 품사가 동사 ✗ 명사 3개(emanation·outflow·
 *                           venting)로 짰다. discharge 는 emit 쪽에만 썼다
 *   emulate 의 copy       → "복제품, 사본"(명사)     ✗ → mimic
 *   encode 의 scramble    → "서두르다; 다투다"       ✗ → put into code
 *   encompass 의 span     → "기간; 걸치다"           ✗ → incorporate
 *   encourage 의 urge     → "충동; 재촉하다"(명사 갈래가 앞) ✗ → cheer on
 *   empathetic 의 understanding → "이해, 인식"(명사) ✗ → caring
 *   employ 의 recruit     → "신입; 모집하다"(명사가 앞) ✗ → give a job to
 *   emphasis 의 weight    → "무게; 닻"               ✗ → importance
 *   enchant 의 charm      → "매력"(명사)             ✗ → captivate
 *
 * PRON 에 뒤늦게 채운 1개 — stress. 3차의 humiliate·symbol 과 같은 경우다.
 *
 * ── 손대지 않고 남겨 둔 기존 문제 3개 ──────────
 * 차수를 지나며 눈에 띄었지만 그 차수의 범위가 아니라 그대로 뒀다. 고치면 기존
 * 출제가 변하므로 따로 판단이 필요하다. 셋 다 '동사·명사 표제어에 품사가 다른
 * 유의어가 붙어 있다' 는 같은 꼴이다.
 *   drain(빼내다 — 동사) 의 유의어 empty  → 형용사 뜻("텅 빈")이 뜬다.
 *        4차 전에도 "빈, 텅 빈"이 떴으므로 그 변경으로 나빠진 것은 아니다.
 *        고치려면 drain 의 syn 을 empty out 같은 동사구로 바꿔야 한다   (4차에 발견)
 *   beguile(현혹시키다 — 동사) 의 유의어 charm → "매력"(명사)이 뜬다    (4차에 발견)
 *   counterpart(대응물 — 명사) 의 유의어 equivalent → 형용사 뜻이 뜬다.
 *        equivalent 는 표제어 comparable·corresponding(둘 다 형용사)도 유의어로
 *        쓰므로 형용사로 둘 수밖에 없었다. 명사 하나보다 형용사 둘을 지켰다.
 *        7차 전에도 같은 형용사 뜻이 떴으므로 나빠진 것은 아니다        (7차에 발견)
 *
 * 반대로 encounter 는 이번에 나아졌다. 기존 GLOSS "마주치다, 만남"의 명사 갈래가
 * 표제어 come across(동사)와 어긋났는데, 동사로 정리하면서 사라졌다.
 *
 * ── 5차 기록 ─────────────────────────────────
 * 사전에 이미 있던 낱말이 10개로 가장 많았다(3차 7 → 4차 9 → 5차 10). end-·en-
 * 구간이 기본 어휘라서 A~D 세트가 이미 유의어로 폭넓게 끌어다 쓰고 있었다.
 * 영향을 받는 기존 표제어가 18개라, 작업 전에 18개의 렌더를 먼저 떠 두고
 * 작업 후 하나씩 대조했다. 차수마다 이 방식을 쓰는 게 좋다.
 *
 * 표제어가 되면서 사전에서 지운 항목 10개 (GLOSS·PRON 양쪽 20항목)
 *   gloss.js   endangered, endeavor, endless, endorse, endurance, enemy,
 *              engagement, enlighten
 *   words-c.js endure
 *   words-d.js enhance
 *   pron.js    위 10개 전부
 *
 * syn 을 비운 1개 — encyclopedia. 1차의 e-commerce 무리와 같은 기술 명사다.
 *
 * E 세트의 첫 구(phr) — end up. ex 를 달지 않았다. 기존 phr 표제어 149개가
 * 전부 ex 를 갖지 않고 audit 도 경고한다. 구는 빈칸 변환이 첫 낱말만 바뀌어
 * 오답이 원형으로 남기 쉽다. 처음엔 ex 를 넣었다가 경고를 보고 뺐다.
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   endless   기존 뜻 "끝없는, 무한한" 그대로 — boundless·ceaseless·countless
 *             세 표제어가 유의어로 쓴다(이번 차수에서 참조가 가장 많은 낱말)
 *   endorse   기존 뜻 "지지하다, 보증하다" 그대로 — advocate 의 유의어다
 *   endurance '지구력'을 앞에 뒀다 — aerobic 의 유의어라 지구력 갈래가 먼저 와야 한다
 *   enemy     '적'을 앞에 뒀다 — adversary 의 유의어다
 *   engagement '약속'을 앞에 뒀다 — appointment 의 유의어다('예약'을 버렸다)
 *   endure    원본대로 "견디다, 참다" 로 했다. 기존 GLOSS 의 '지속되다'를 버렸지만
 *             bear·cope with·be subjected to 세 유의어 쪽이 '견디다'를 필요로 하고,
 *             반의어 collapse 도 '견디다'로 뜻이 통한다
 *
 * 유의어에서 걸러낸 것
 *   endless 의 infinite   → GLOSS 가 limitless 와 똑같이 "무한한" 이어서 피드백
 *                           두 줄이 같아진다(audit 이 잡는다)  ✗ → unending
 *   engross 의 immerse    → "담그다; 몰입하다" (물에 담그는 뜻이 앞) ✗ → fully absorb
 *   enforce 의 implement  → "실행하다; 도구" (명사 갈래가 섞인다)  ✗ → put in force
 *   endow 의 confer       → "수여하다; 상의하다"                  ✗ → provide with
 *   endow 의 grant        → "수여하다; 보조금" (명사 갈래)         ✗ → provide with
 *   engagement 의 commitment → "헌신, 약속" (헌신이 앞)           ✗ → prior arrangement
 *
 * PRON 에 뒤늦게 채운 1개 — jeopardize. 4차의 stress 와 같은 경우다.
 *
 * 반대로 attempt 는 이번에 나아졌다. 기존 GLOSS "노력, 시도"(명사)가 표제어
 * attempt(동사)와 어긋났는데, endeavor 를 동사로 정리하면서 사라졌다.
 * 4차의 encounter 와 같은 꼴이다 — 원본이 동사·명사를 섞어 둔 낱말을 표제어로
 * 올리면 그 참조가 저절로 고쳐진다.
 *
 * ── 6차 기록 ─────────────────────────────────
 * 사전에 이미 있던 낱말이 4개로 확 줄었다(5차 10개). 5차까지 en- 접두사의
 * 기본 어휘 구간을 지났고, 6차는 entail·entangle·enthrone·entity 처럼 A~D 세트가
 * 유의어로 쓸 일이 없던 낱말이 많다.
 *
 * 표제어가 되면서 사전에서 지운 항목 4개 (GLOSS·PRON 양쪽 7항목)
 *   gloss.js   enormous, enthusiastic, entry
 *   words.js   enthusiasm
 *   pron.js    위 4개 전부
 *
 * syn 을 비운 1개 — entity. '독립체'는 바꿔 쓸 낱말이 마땅치 않은 추상 명사다.
 * being·body·unit 은 뜻이 훨씬 넓다(unit 의 GLOSS 는 "단위; 세포" 다).
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   enthusiasm   기존 GLOSS "열정, 열의" 그대로 — apathy 의 반의어다
 *   enthusiastic 기존 GLOSS "열정적인, 열심인" 그대로 — avid 의 유의어다
 *   entry        '들어감'을 앞에 두되 '입장'을 남겼다 — access·admission 두 표제어가
 *                유의어로 쓰는데 entrance("입구; 입장")와 뜻이 글자까지 겹치면 안 된다
 *
 * ★ 이번에 낸 실수 — GLOSS 키 중복
 *   enroll 의 반의어를 withdraw 에서 drop out 으로 바꿀 때, 후보 조사를 이미 끝낸
 *   뒤라 확인 없이 새 GLOSS·PRON 항목으로 추가했다. drop out 은 words-d.js 의
 *   표제어(phr B2 "중도에 그만두다, 빠지다")여서 표제어와 사전에 같은 낱말이
 *   두 번 등록됐다. words-d-audit 과 pron-audit 이 둘 다 오류로 잡아 냈다
 *   (2차의 let in 과 같은 사고다). 추가한 2항목을 지우면 표제어 쪽이 쓰이고,
 *   뜻도 반의어로 알맞다.
 *   ⇒ 조사 뒤에 유의어를 바꿨으면 그 낱말만이라도 다시 확인할 것.
 *
 * 유의어에서 걸러낸 것
 *   entire 의 whole      → "전체"(명사)              ✗ → undivided
 *   entity 의 unit       → "단위; 세포"              ✗ → syn 을 비웠다
 *   entrust 의 delegate  → 표제어인데 품사가 명사("대표, 대리인") ✗ → put in the care of
 *   entry 의 exit        → "나가다, 퇴장하다"(동사)   ✗ → ant 를 비웠다
 *   enroll 의 join       → "합류하다; 연결하다" + 발음도 없다 ✗ → put one's name down
 *   enroll 의 withdraw   → "철수하다, 회수하다"       ✗ → drop out(표제어)
 *   ensure 의 secure     → "확보하다; 안전한"         ✗ → make sure
 *
 * 발음에서 바로잡은 것 — 기존 표기를 찾아보고 고친 것들이다
 *   enthrone  기존 dethrone 이 "디스론" 이라 '인스론' 으로 적었다 (인스로운 ✗)
 *   enticing  기존 PRON 에 entice "인타이스" 가 있어 '인타이싱' 으로 맞췄다
 *   jealous 와 zealous 는 한글로 둘 다 "젤러스" 다. 서로 다른 표제어(envious·
 *   enthusiastic)의 선택지라 한 문제에 같이 뜨지 않는다 — principal/principle 선례.
 *
 * PRON 에 뒤늦게 채운 1개 — passion. 5차의 jeopardize 와 같은 경우다.
 *
 * ── 7차 기록 ─────────────────────────────────
 * 사전에 이미 있던 낱말이 10개로 다시 늘었다. equi-·err- 구간이 A~D 세트의
 * 유의어로 많이 쓰이고 있었다. GLOSS·PRON 20항목을 지웠다.
 *
 * 표제어가 되면서 사전에서 지운 항목 10개
 *   gloss.js   envision, equal, equipment, equivalent, equivocal, erect, erosion, errand
 *   words-c.js erratic
 *   words-e.js eradicate   ← 3차에서 eliminate 의 유의어로 내가 넣은 항목이다
 *   pron.js    위 10개 전부
 *
 * ★ 자기 세트에 넣은 GLOSS 가 뒤 차수에서 표제어가 될 수 있다.
 *   eradicate 가 그 첫 사례다. 앞 차수에서 유의어로 쓴 낱말이 알파벳순으로 뒤에
 *   있으면 반드시 이런 일이 생긴다. 조사 스크립트가 words-e.js 까지 훑어서
 *   잡아냈다 — 남은 차수에서도 words-e.js 를 조사 대상에 넣어야 한다.
 *   (뒤 차수에서 표제어가 될 낱말: eruption·escalate·essence 등을 유의어로 썼는지
 *    확인하면 미리 알 수 있다)
 *
 * syn 을 비운 4개 — epic·equation·equator·equatorial. 한 차수에 넷은 1차(7개)
 * 다음으로 많은데, 이 구간에 문학·수학·지리 용어가 몰려 있어서다(epic·epilogue·
 * equation·equator·equatorial). 1차의 eco-·econ- 명사 무리와 같은 이유다.
 *   epic       saga·heroic poem 은 서로 뜻이 거의 같아 셋을 채우면 같은 말을 세 번 한다
 *   equation   formula 의 GLOSS 가 "공식; 방법" 이라 '방법' 갈래가 섞인다
 *   equator·equatorial  지리 용어에는 바꿔 쓸 낱말이 없다
 *
 * 한 차수 안에서 뜻이 겹치는 짝을 레벨로 갈랐다 — 3차 emergence/emergency 와 같다
 *   epoch(C2) / era(B2)        둘 다 명사 '시대'.  뜻도 '신기원' / '시대' 로 갈랐다
 *   equal(B1) / equivalent(C1) 둘 다 형용사 '동등한'. equal 은 '같은' 을 앞에 뒀다
 *   equator(n) / equatorial(adj) 는 품사가 달라 레벨을 건드릴 필요가 없었다
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   equivalent 기존 GLOSS "동등한, 상당하는"(형용사) 그대로 — comparable·corresponding
 *              두 형용사 표제어가 유의어로 쓴다. 원본의 '동등한 것'(명사)은 버렸다
 *   equivocal  기존 GLOSS "애매한, 이중적인" 그대로 — 원본의 '확실치 않은' 을 쓰면
 *              표제어 ambiguous 자신의 뜻("애매한, 확실치 않은")과 글자까지 같아진다
 *   erect      동사로 정리 — 표제어 construct 가 유의어로 쓴다
 *   eradicate  '근절하다' 를 앞에 그대로 — 표제어 eliminate 가 유의어로 쓴다
 *   erode      원본의 '밤에 일어나는; 야행성의'(nocturnal 의 뜻)를 바로잡았다.
 *              표제어 erosion 과 뜻이 짝을 이룬다
 *
 * ⚠️ equal 은 형태가 조금 바뀌었다 — 보고 대상
 *   기존 GLOSS 는 "동등하다; 같다"(서술형)였는데 형용사 표제어로 올리면서
 *   "같은, 동등한"(관형형)이 되었다. 표제어 correspond to(동사구)가 이 낱말을
 *   유의어로 쓰므로 그 피드백의 어미가 바뀐다. 뜻 자체는 같고, 같은 목록의
 *   fit 이 이미 "맞다; 적합한" 으로 형태가 섞여 있어 어색하지 않다. 다만
 *   '뜻이 아니라 형태가 바뀐' 첫 사례이므로 적어 둔다.
 *
 * 유의어에서 걸러낸 것
 *   epidemic 의 plague  → "괴롭히다; 역병"(동사가 앞)   ✗ → contagion
 *   equilibrium 의 balance → "균형을 맞추다; 균형"(동사가 앞) ✗ → state of balance
 *   equation 의 formula → "공식; 방법"                 ✗ → syn 을 비웠다
 *   erect 의 raise      → "올리다; 기르다"              ✗ → construct(표제어)
 *
 * PRON 에 뒤늦게 채운 3개 — outbreak, put up, stability. 6차의 passion 과 같다.
 *
 * 발음은 기존 표기에서 찾아 맞췄다
 *   corrode  기존 corrosive("커로시브")·corrosion("커로전")에 맞췄다
 *   even·unequal  기존 uneven("언이븐")에 맞췄다
 *   age      기존 age-old("에이지 올드")에 맞췄다
 *
 * 단어를 더 넣을 때 확인 방법:
 *   node tools/words-e-audit.js           검사 6종 + 출제 시뮬레이션
 *   node tools/words-e-audit.js --rules   검사별 수행 건수
 *   node tools/pron-audit.js              발음 커버리지
 *   node tools/pron-render-check.js --all 전수 점검
 *   node tools/d-impact.js                기존 세트 영향 측정
 *   node tools/match-order-check.js       짝 맞추기 보드 전수 검사
 */
window.VOCAB_E = [
  /* ── e-co ──────────────────────────────────── */
  { word:"e-commerce", pron:"이커머스", pos:"n", level:"B2", meanings:["전자 상거래"],
    ex:[{ s:"Small family shops moved into {{}} to survive the downturn.", f:"e-commerce", ko:"작은 가족 상점들은 불황을 견디려고 전자 상거래로 옮겨 갔다." }] },

  { word:"earnest", pron:"어니스트", pos:"adj", level:"B2", meanings:["성실한","진지한"],
    syn:["sincere","wholehearted","serious"], ant:["insincere"],
    ex:[{ s:"His {{}} concern for the workers finally won their trust.", f:"earnest", ko:"노동자들을 향한 그의 성실한 관심이 마침내 그들의 신뢰를 얻었다." }] },

  { word:"earthly", pron:"어슬리", pos:"adj", level:"C1", meanings:["지상의","세속적인"],
    syn:["worldly","terrestrial","mundane"], ant:["heavenly"],
    ex:[{ s:"He gave up his {{}} possessions and entered the monastery.", f:"earthly", ko:"그는 세속적인 재산을 포기하고 수도원에 들어갔다." }] },

  { word:"easygoing", pron:"이지고잉", pos:"adj", level:"B2", meanings:["태평한","느긋한"],
    syn:["relaxed","laid-back","tolerant"], ant:["uptight"],
    ex:[{ s:"Her {{}} manner quickly calmed the nervous applicants.", f:"easygoing", ko:"그녀의 느긋한 태도가 긴장한 지원자들을 금세 진정시켰다." }] },

  { word:"ebb", pron:"엡", pos:"n", level:"C1", meanings:["썰물"],
    ex:[{ s:"Wide flats of sand appear at {{}} twice a day.", f:"ebb", ko:"썰물 때면 하루 두 번 넓은 모래펄이 드러난다." }] },

  { word:"eccentric", pron:"익센트릭", pos:"adj", level:"B2", meanings:["유별난","괴상한"],
    syn:["odd","peculiar","unconventional"], ant:["conventional"],
    ex:[{ s:"The inventor's {{}} habits amused the whole village.", f:"eccentric", ko:"그 발명가의 유별난 습관은 마을 전체를 즐겁게 했다." }] },

  { word:"eclipse", pron:"이클립스", pos:"n", level:"C1", meanings:["일식","월식"],
    ex:[{ s:"Crowds filled the beach to watch the total {{}}.", f:"eclipse", ko:"개기 일식을 보려고 사람들이 해변을 가득 메웠다." }] },

  { word:"ecological", pron:"에컬라지컬", pos:"adj", level:"B2", meanings:["생태계의","생태학적인"],
    ex:[{ s:"Draining the wetland caused lasting {{}} damage.", f:"ecological", ko:"습지의 물을 빼내면서 지속적인 생태계 피해가 생겼다." }] },

  { word:"ecology", pron:"이칼러지", pos:"n", level:"B2", meanings:["생태학","생태계"],
    ex:[{ s:"She spent ten years studying the {{}} of coral reefs.", f:"ecology", ko:"그녀는 산호초 생태학을 연구하며 10년을 보냈다." }] },

  { word:"economical", pron:"에커나미컬", pos:"adj", level:"B2", meanings:["경제적인","실속 있는"],
    syn:["thrifty","frugal","cost-effective"], ant:["wasteful"],
    ex:[{ s:"A hybrid engine is far more {{}} on long drives.", f:"economical", ko:"하이브리드 엔진은 장거리 운전에서 훨씬 더 경제적이다." }] },

  { word:"economics", pron:"에커나믹스", pos:"n", level:"B2", meanings:["경제학"],
    ex:[{ s:"He dropped law and took up {{}} in his second year.", f:"economics", ko:"그는 2학년 때 법학을 그만두고 경제학을 시작했다." }] },

  { word:"ecosystem", pron:"이코시스템", pos:"n", level:"B2", meanings:["생태계"],
    ex:[{ s:"Removing one predator can unbalance an entire {{}}.", f:"ecosystem", ko:"포식자 하나를 없애는 것만으로 생태계 전체의 균형이 깨질 수 있다." }] },

  { word:"ecstasy", pron:"엑스터시", pos:"n", level:"C1", meanings:["황홀","환희"],
    syn:["rapture","bliss","elation"], ant:["misery"],
    ex:[{ s:"The fans screamed in {{}} as the band walked out.", f:"ecstasy", ko:"밴드가 걸어 나오자 팬들은 황홀경에 빠져 소리쳤다." }] },

  /* ── ed ────────────────────────────────────── */
  { word:"edge", pron:"에지", pos:"n", level:"B1", meanings:["가장자리","끝"],
    syn:["rim","brink","boundary"], ant:["center"],
    ex:[{ s:"He balanced the glass on the {{}} of the shelf.", f:"edge", ko:"그는 선반 가장자리에 유리잔을 아슬아슬하게 올려놓았다." }] },

  { word:"edible", pron:"에더블", pos:"adj", level:"B2", meanings:["식용의","먹을 수 있는"],
    syn:["eatable","fit to eat","safe to eat"], ant:["poisonous"],
    ex:[{ s:"Only a few of these wild mushrooms are actually {{}}.", f:"edible", ko:"이 야생 버섯들 중 실제로 식용인 것은 몇 개뿐이다." }] },

  { word:"editorial", pron:"에더토리얼", pos:"n", level:"B2", meanings:["사설","논설"],
    syn:["opinion piece","leading article","commentary"],
    ex:[{ s:"The paper ran a fierce {{}} against the new tax.", f:"editorial", ko:"그 신문은 새 세금에 반대하는 격렬한 사설을 실었다." }] },

  /* ── ef ────────────────────────────────────── */
  { word:"efface", pron:"이페이스", pos:"v", level:"C2", meanings:["지우다","말살하다"],
    syn:["erase","obliterate","blot out"], ant:["restore"],
    ex:[{ s:"Centuries of wind had begun to {{}} the inscription.", f:"efface", ko:"수백 년의 바람이 그 새긴 글귀를 지우기 시작했다." }] },

  { word:"effectiveness", pron:"이펙티브니스", pos:"n", level:"B2", meanings:["유효성","효과"],
    syn:["efficacy","potency","usefulness"], ant:["futility"],
    ex:[{ s:"The trial measured the {{}} of the new vaccine.", f:"effectiveness", ko:"그 임상시험은 새 백신의 유효성을 측정했다." }] },

  { word:"efficiency", pron:"이피션시", pos:"n", level:"B2", meanings:["능률","효율"],
    syn:["productivity","effectiveness","competence"], ant:["inefficiency"],
    ex:[{ s:"Automating the line raised {{}} by a third.", f:"efficiency", ko:"생산 라인을 자동화해 능률이 3분의 1 높아졌다." }] },

  { word:"efficient", pron:"이피션트", pos:"adj", level:"B2", meanings:["효율적인","능률적인"],
    syn:["effective","productive","streamlined"], ant:["wasteful"],
    ex:[{ s:"A more {{}} layout cut the walking distance in half.", f:"efficient", ko:"더 효율적인 배치로 이동 거리가 절반으로 줄었다." }] },

  { word:"effortless", pron:"에퍼틀리스", pos:"adj", level:"B2", meanings:["힘들지 않은","수월한"],
    syn:["easy","smooth","painless"], ant:["strenuous"],
    ex:[{ s:"She made the difficult passage sound completely {{}}.", f:"effortless", ko:"그녀는 그 어려운 악절을 완전히 수월하게 들리도록 연주했다." }] },

  /* ── eg ────────────────────────────────────── */
  { word:"ego", pron:"이고", pos:"n", level:"B2", meanings:["자아","자존심"],
    syn:["self","self-esteem","pride"], ant:["humility"],
    ex:[{ s:"Losing so badly bruised his {{}} for weeks.", f:"ego", ko:"그렇게 크게 진 것이 몇 주 동안 그의 자존심을 상하게 했다." }] },

  { word:"egocentric", pron:"이고센트릭", pos:"adj", level:"C1", meanings:["자기중심적인","이기적인"],
    syn:["selfish","self-centered","narcissistic"], ant:["altruistic"],
    ex:[{ s:"His {{}} account of the project ignored everyone else.", f:"egocentric", ko:"그 프로젝트에 대한 그의 자기중심적인 설명은 다른 모두를 무시했다." }] },

  /* ── ej · el ───────────────────────────────── */
  { word:"eject", pron:"이젝트", pos:"v", level:"B2", meanings:["몰아내다","쫓아내다"],
    syn:["expel","throw out","evict"], ant:["let in"],
    ex:[{ s:"Guards moved in to {{}} the noisy spectators.", f:"eject", ko:"경비원들이 시끄러운 관중을 몰아내려고 들어왔다." }] },

  { word:"elaborate", pron:"일래버릿", pos:"adj", level:"C1", meanings:["공들인","정교한"],
    syn:["intricate","detailed","painstaking"], ant:["simple"],
    ex:[{ s:"The wedding featured an {{}} ten-course dinner.", f:"elaborate", ko:"그 결혼식에는 공들인 10코스 만찬이 있었다." }] },

  { word:"elastic", pron:"일래스틱", pos:"adj", level:"B2", meanings:["탄력 있는","유연한"],
    syn:["flexible","stretchy","springy"], ant:["rigid"],
    ex:[{ s:"The waistband is {{}} enough to fit most sizes.", f:"elastic", ko:"그 허리 밴드는 대부분의 치수에 맞을 만큼 탄력이 있다." }] },

  { word:"elated", pron:"일레이티드", pos:"adj", level:"C1", meanings:["마냥 행복해하는","신이 난"],
    syn:["overjoyed","thrilled","jubilant"], ant:["dejected"],
    ex:[{ s:"The whole team looked {{}} after the final whistle.", f:"elated", ko:"경기 종료 휘슬이 울린 뒤 팀 전체가 신이 나 보였다." }] },

  { word:"elect", pron:"일렉트", pos:"v", level:"B2", meanings:["선출하다","선택하다"],
    syn:["choose","vote for","appoint"], ant:["dismiss"],
    ex:[{ s:"Members will {{}} a new chair at the spring meeting.", f:"elect", ko:"회원들은 봄 총회에서 새 의장을 선출할 것이다." }] },

  { word:"election", pron:"일렉션", pos:"n", level:"B2", meanings:["선거","선정"],
    syn:["vote","ballot","poll"],
    ex:[{ s:"Turnout in the local {{}} was unusually high.", f:"election", ko:"그 지방 선거의 투표율은 유난히 높았다." }] },

  { word:"electoral", pron:"일렉터럴", pos:"adj", level:"C1", meanings:["선거의"],
    ex:[{ s:"The new {{}} map clearly favors rural districts.", f:"electoral", ko:"새 선거 지도는 분명히 농촌 지역에 유리하다." }] },

  { word:"electorate", pron:"일렉터릿", pos:"n", level:"C1", meanings:["유권자"],
    syn:["voters","constituency","voting public"],
    ex:[{ s:"The entire {{}} was invited to comment on the plan.", f:"electorate", ko:"전체 유권자가 그 계획에 의견을 낼 수 있도록 초청되었다." }] },

  { word:"electricity", pron:"일렉트리서티", pos:"n", level:"B1", meanings:["전기"],
    syn:["electric power","electrical energy","electric current"],
    ex:[{ s:"The storm cut off {{}} to thousands of homes.", f:"electricity", ko:"폭풍이 수천 가구의 전기를 끊었다." }] },

  { word:"electromagnetic field", pron:"일렉트로마그네틱 필드", pos:"n", level:"C1", meanings:["전자기장"],
    ex:[{ s:"Sensitive instruments detect any shift in the {{}}.", f:"electromagnetic field", ko:"민감한 기기는 전자기장의 어떤 변화도 감지한다." }] },

  { word:"electronic", pron:"일렉트라닉", pos:"adj", level:"B1", meanings:["전자의"],
    syn:["digital","computerized","electrical"],
    ex:[{ s:"All {{}} devices must be switched off during takeoff.", f:"electronic", ko:"이륙 중에는 모든 전자 기기를 꺼야 한다." }] },

  { word:"elegant", pron:"엘러건트", pos:"adj", level:"B2", meanings:["우아한","고상한"],
    syn:["graceful","refined","stylish"], ant:["inelegant"],
    ex:[{ s:"She wore an {{}} black dress to the ceremony.", f:"elegant", ko:"그녀는 그 행사에 우아한 검은 드레스를 입었다." }] },

  /* element 는 '요소·원소'다. compound(화합물)의 반의어로 이미 쓰이고 있어
     '원소' 갈래를 버리면 그 문제가 무너진다 — 원본의 '성분'을 '원소'로 둔다. */
  { word:"element", pron:"엘러먼트", pos:"n", level:"B1", meanings:["요소","원소"],
    syn:["component","part","ingredient"], ant:["compound"],
    ex:[{ s:"Trust is the key {{}} in any lasting partnership.", f:"element", ko:"신뢰는 오래가는 모든 동업 관계의 핵심 요소다." }] },

  { word:"elementary", pron:"엘러멘터리", pos:"adj", level:"B1", meanings:["초등 교육의","기본의"],
    syn:["basic","fundamental","introductory"], ant:["advanced"],
    ex:[{ s:"The course covers only {{}} statistics.", f:"elementary", ko:"그 강좌는 기본적인 통계만 다룬다." }] },

  /* elements(악천후)는 element(요소)와 철자가 s 하나 차이다. 레벨을 C1 로 벌려
     두면 '레벨 ±1' 필터에 걸려 두 낱말이 한 문제의 보기로 같이 뜨지 않는다. */
  { word:"elements", pron:"엘러먼츠", pos:"n", level:"C1", meanings:["악천후","비바람"],
    syn:["bad weather","foul weather","rough weather"],
    ex:[{ s:"Left out in the {{}}, the paint began to peel.", f:"elements", ko:"악천후에 노출된 그 페인트는 벗겨지기 시작했다." }] },

  { word:"elevate", pron:"엘러베이트", pos:"v", level:"B2", meanings:["승격시키다","높이다"],
    syn:["raise","promote","lift"], ant:["lower"],
    ex:[{ s:"The board voted to {{}} her to senior partner.", f:"elevate", ko:"이사회는 그녀를 수석 파트너로 승격시키기로 의결했다." }] },

  { word:"elevated", pron:"엘러베이티드", pos:"adj", level:"C1", meanings:["높은","고상한"],
    syn:["lofty","raised","noble"], ant:["lowly"],
    ex:[{ s:"The house sits on {{}} ground above the river.", f:"elevated", ko:"그 집은 강 위 높은 땅에 자리하고 있다." }] },

  /* ── 3차: elevation ~ eminent ───────────────────── */

  { word:"elevation", pron:"엘러베이션", pos:"n", level:"B2", meanings:["고도","높이"],
    syn:["altitude","height","loftiness"], ant:["depth"],
    ex:[{ s:"Crops grow poorly at this {{}} because the air is thin.", f:"elevation", ko:"공기가 희박해서 이 고도에서는 작물이 잘 자라지 않는다." }] },

  { word:"elicit", pron:"일리싯", pos:"v", level:"C1", meanings:["끌어내다","유도해 내다"],
    syn:["draw out","evoke","bring out"],
    ex:[{ s:"The lawyer tried to {{}} a clear answer from the witness.", f:"elicit", ko:"변호사는 증인에게서 분명한 답을 끌어내려 했다." }] },

  { word:"eligible", pron:"엘리저블", pos:"adj", level:"B2", meanings:["자격이 있는","적격의"],
    syn:["qualified","entitled","suitable"], ant:["ineligible"],
    ex:[{ s:"Only long-term residents are {{}} to vote in this district.", f:"eligible", ko:"이 선거구에서는 장기 거주자만 투표할 자격이 있다." }] },

  /* eliminate 의 뜻은 기존 GLOSS "제거하다, 없애다" 를 그대로 옮겼다.
     abolish·assassinate 가 이 낱말을 유의어로 쓰고 있어, '탈락시키다' 같은
     경기 갈래를 넣으면 그 두 문제의 피드백이 엉뚱해진다. */
  { word:"eliminate", pron:"일리머네이트", pos:"v", level:"B2", meanings:["제거하다","없애다"],
    syn:["remove","get rid of","eradicate"], ant:["retain"],
    ex:[{ s:"The new filter helps {{}} harmful bacteria from the water.", f:"eliminate", ko:"새 필터는 물에서 해로운 세균을 제거하는 데 도움이 된다." }] },

  /* 원본은 '생략된; 타원형의' 순서인데 '타원형의'를 앞으로 돌렸다. 카드에 가장
     크게 찍히는 첫 뜻이고, oval·egg-shaped 로 유의어를 깔끔히 짤 수 있는 쪽이다
     (ecology '생태계'를 뒤로, earthly '지상의'를 앞으로 돌린 선례와 같다). */
  { word:"elliptical", pron:"일립티컬", pos:"adj", level:"C2", meanings:["타원형의","생략된"],
    syn:["oval","egg-shaped","oblong"],
    ex:[{ s:"The comet follows a long {{}} path around the sun.", f:"elliptical", ko:"그 혜성은 태양 주위로 길게 타원형인 궤도를 따라 돈다." }] },

  { word:"eloquence", pron:"엘러퀀스", pos:"n", level:"C1", meanings:["웅변","설득력"],
    syn:["fluency","articulacy","expressiveness"],
    ex:[{ s:"His {{}} at the hearing won over even his critics.", f:"eloquence", ko:"청문회에서 보인 그의 웅변은 비판자들까지 설득했다." }] },

  /* eloquent 의 유의어로 articulate 를 쓰지 않았다 — 표제어인데 품사가 동사
     ("분명히 표현하다")여서 형용사 자리에 엉뚱한 뜻이 뜬다. well-spoken 으로 뺐다. */
  { word:"eloquent", pron:"엘러퀀트", pos:"adj", level:"C1", meanings:["웅변의","설득력 있는"],
    syn:["persuasive","fluent","well-spoken"], ant:["inarticulate"],
    ex:[{ s:"She gave an {{}} defense of the proposal.", f:"eloquent", ko:"그녀는 그 제안을 설득력 있게 변호했다." }] },

  { word:"elusive", pron:"일루시브", pos:"adj", level:"C1", meanings:["찾기 힘든","붙잡기 어려운"],
    syn:["hard to find","slippery","evasive"],
    ex:[{ s:"The cause of the disease remains {{}} after years of study.", f:"elusive", ko:"수년간의 연구에도 그 병의 원인은 여전히 찾기 힘들다." }] },

  /* 유의어로 get on 을 쓰지 않았다 — GLOSS 가 "탑승하다" 인데 표제어 board 의
     뜻과 글자까지 같아서 피드백 두 줄이 똑같아진다(audit 이 오류로 잡는다). */
  { word:"embark", pron:"임바크", pos:"v", level:"B2", meanings:["탑승하다","착수하다"],
    syn:["board","set out","go aboard"], ant:["disembark"],
    ex:[{ s:"Passengers began to {{}} an hour before departure.", f:"embark", ko:"승객들은 출발 한 시간 전부터 탑승하기 시작했다." }] },

  { word:"embarrass", pron:"임배러스", pos:"v", level:"B1", meanings:["당황스럽게 만들다","난처하게 하다"],
    syn:["humiliate","mortify","put to shame"],
    ex:[{ s:"He never meant to {{}} her in front of the whole class.", f:"embarrass", ko:"그는 반 전체 앞에서 그녀를 당황스럽게 만들 생각이 전혀 없었다." }] },

  /* ex.f 를 원형으로 둔다 — embedded 는 자음을 겹치는 변화라서 quizgen 이
     변환을 포기하고 오답만 원형으로 남긴다(뜻을 몰라도 정답이 보인다). */
  { word:"embed", pron:"임베드", pos:"v", level:"C1", meanings:["끼워 넣다","박아 넣다"],
    syn:["insert","implant","set in"],
    ex:[{ s:"Engineers {{}} sensors in the bridge to track stress.", f:"embed", ko:"기술자들은 응력을 추적하기 위해 교량에 센서를 끼워 넣는다." }] },

  { word:"emblem", pron:"엠블럼", pos:"n", level:"B2", meanings:["상징","표상"],
    syn:["symbol","insignia","badge"],
    ex:[{ s:"The olive branch is an {{}} of peace.", f:"emblem", ko:"올리브 가지는 평화의 상징이다." }] },

  /* 원본은 '상징하다; 포함하다' 인데 주된 뜻은 '구현하다' 다. GLOSS·PRON 어디에도
     없던 낱말이라 기존 문제를 깨지 않고 고칠 수 있었다. */
  { word:"embody", pron:"임바디", pos:"v", level:"C1", meanings:["구현하다","상징하다"],
    syn:["personify","represent","exemplify"],
    ex:[{ s:"These old courtyards {{}} the spirit of the city.", f:"embody", ko:"이 오래된 안마당들은 그 도시의 정신을 구현한다." }] },

  { word:"embrace", pron:"임브레이스", pos:"v", level:"B2", meanings:["받아들이다","포옹하다"],
    syn:["accept","adopt","welcome"], ant:["reject"],
    ex:[{ s:"Older firms were slow to {{}} the new technology.", f:"embrace", ko:"오래된 기업들은 새 기술을 받아들이는 데 더뎠다." }] },

  /* syn 을 비웠다 — '수놓다'는 바꿔 쓸 낱말이 마땅치 않은 공예 동사다.
     stitch·sew 는 뜻이 더 넓어 유의어로 가르치면 틀린 것을 가르치게 된다. */
  { word:"embroider", pron:"임브로이더", pos:"v", level:"C2", meanings:["수놓다","자수하다"],
    ex:[{ s:"She learned to {{}} flowers on plain linen.", f:"embroider", ko:"그녀는 무늬 없는 린넨에 꽃을 수놓는 법을 배웠다." }] },

  { word:"emerge", pron:"이머지", pos:"v", level:"B2", meanings:["드러나다","나타나다"],
    syn:["appear","come out","come to light"], ant:["disappear"],
    ex:[{ s:"New evidence began to {{}} halfway through the trial.", f:"emerge", ko:"재판 중반에 새로운 증거가 드러나기 시작했다." }] },

  /* emergence(출현)와 emergency(비상사태)는 같은 명사에 철자가 한 글자 차이다.
     레벨을 C1 / B1 로 두 칸 벌려 '레벨 ±1' 필터에 걸리게 했다 — 두 낱말이 한
     문제의 보기로 같이 뜨지 않는다. 2차의 element(B1)/elements(C1) 와 같은 방법이고,
     실제 난이도 순서(비상사태가 기초어)와도 맞는다. 코드는 건드리지 않는다. */
  { word:"emergence", pron:"이머전스", pos:"n", level:"C1", meanings:["출현","등장"],
    syn:["appearance","arrival","advent"],
    ex:[{ s:"The {{}} of cheap sensors changed the whole industry.", f:"emergence", ko:"값싼 센서의 출현이 산업 전체를 바꿔 놓았다." }] },

  { word:"emergency", pron:"이머전시", pos:"n", level:"B1", meanings:["비상사태","긴급 상황"],
    syn:["crisis","urgent situation","critical situation"],
    ex:[{ s:"Dial this number only in a genuine {{}}.", f:"emergency", ko:"진짜 비상사태일 때만 이 번호로 전화하세요." }] },

  { word:"emerging", pron:"이머징", pos:"adj", level:"B2", meanings:["신흥의","최근 생겨난"],
    syn:["rising","developing","up-and-coming"], ant:["established"],
    ex:[{ s:"The fund puts most of its money into {{}} markets.", f:"emerging", ko:"그 펀드는 자금 대부분을 신흥 시장에 넣는다." }] },

  /* 기존 words-d.js GLOSS 의 "저명한, 뛰어난" 을 그대로 옮겼다 — 표제어
     distinguished 가 eminent 를 유의어로 쓰고 있어 뜻이 바뀌면 그 문제가 변한다
     (2차의 elevated 선례). */
  { word:"eminent", pron:"에머넌트", pos:"adj", level:"C1", meanings:["저명한","뛰어난"],
    syn:["distinguished","famous","outstanding"], ant:["little-known"],
    ex:[{ s:"The prize goes to an {{}} scholar each spring.", f:"eminent", ko:"그 상은 매년 봄 저명한 학자에게 주어진다." }] },

  /* ── 4차: emission ~ encourage ──────────────────── */

  /* 유의어를 명사로만 골랐다 — discharge 는 표제어인데 품사가 동사("방출하다,
     내보내다")여서 명사 emission 자리에 쓰면 뜻이 어긋난다. emit 쪽에만 쓴다. */
  { word:"emission", pron:"이미션", pos:"n", level:"B2", meanings:["방출","배출"],
    syn:["emanation","outflow","venting"], ant:["absorption"],
    ex:[{ s:"The new rules cap carbon {{}} from heavy industry.", f:"emission", ko:"새 규정은 중공업의 탄소 배출에 상한을 둔다." }] },

  /* 원본은 '(빛, 가스 등을) 내뿜다' 인데 첫 뜻에는 괄호 설명을 넣지 않는다.
     기존 GLOSS "방출하다"를 첫 뜻으로 살려 absorb(반의어)·discharge(유의어)의
     기존 문제가 변하지 않게 했다. */
  { word:"emit", pron:"이미트", pos:"v", level:"B2", meanings:["방출하다","내뿜다"],
    syn:["discharge","give off","send out"], ant:["absorb"],
    ex:[{ s:"Older engines {{}} far more soot than modern ones.", f:"emit", ko:"구형 엔진은 현대식 엔진보다 훨씬 많은 매연을 방출한다." }] },

  /* syn 을 비웠다 — 부사는 바꿔 쓸 낱말을 만들면 억지가 된다. emotional(형용사)을
     넣으면 품사가 어긋나고, sentimentally 는 '감상적으로'로 뜻이 기운다.
     E 세트의 첫 부사다(오답 후보는 전체 adv 23개에서 나온다). */
  { word:"emotionally", pron:"이모셔널리", pos:"adv", level:"B2", meanings:["감정적으로","정서적으로"],
    ex:[{ s:"She spoke {{}} about the years she spent abroad.", f:"emotionally", ko:"그녀는 외국에서 보낸 시절에 대해 감정적으로 이야기했다." }] },

  { word:"empathetic", pron:"엠퍼세틱", pos:"adj", level:"B2", meanings:["공감하는","공감할 수 있는"],
    syn:["compassionate","sympathetic","caring"], ant:["indifferent"],
    ex:[{ s:"A good nurse is {{}} without becoming overwhelmed.", f:"empathetic", ko:"좋은 간호사는 압도되지 않으면서도 공감할 수 있다." }] },

  { word:"empathy", pron:"엠퍼시", pos:"n", level:"B2", meanings:["감정이입","공감"],
    syn:["compassion","sympathy","fellow feeling"], ant:["indifference"],
    ex:[{ s:"Reading fiction is said to build {{}} for other people.", f:"empathy", ko:"소설 읽기는 타인에 대한 공감을 키운다고 한다." }] },

  { word:"emphasis", pron:"엠퍼시스", pos:"n", level:"B2", meanings:["강조","강세"],
    syn:["prominence","accent","importance"],
    ex:[{ s:"The school places heavy {{}} on reading aloud.", f:"emphasis", ko:"그 학교는 소리 내어 읽기를 크게 강조한다." }] },

  { word:"emphasize", pron:"엠퍼사이즈", pos:"v", level:"B1", meanings:["강조하다","역설하다"],
    syn:["highlight","stress","underline"], ant:["downplay"],
    ex:[{ s:"The coach likes to {{}} defense over scoring.", f:"emphasize", ko:"그 감독은 득점보다 수비를 강조하기를 좋아한다." }] },

  /* 원본 '경험(실험)에 의거한, 실증적인' 은 첫 뜻에 괄호가 들어간다 — 순서를
     바꿔 '실증적인'을 앞에 세우고 괄호를 풀었다. */
  { word:"empirical", pron:"임피리컬", pos:"adj", level:"C1", meanings:["실증적인","경험에 의거한"],
    syn:["observed","experimental","evidence-based"], ant:["theoretical"],
    ex:[{ s:"The claim sounds plausible but lacks {{}} support.", f:"empirical", ko:"그 주장은 그럴듯하게 들리지만 실증적인 근거가 없다." }] },

  { word:"employ", pron:"임플로이", pos:"v", level:"B1", meanings:["고용하다","쓰다"],
    syn:["hire","make use of","give a job to"], ant:["dismiss"],
    ex:[{ s:"The mill used to {{}} half the town.", f:"employ", ko:"그 공장은 한때 마을 절반을 고용했다." }] },

  { word:"empower", pron:"임파워", pos:"v", level:"C1", meanings:["권한을 주다","힘을 실어 주다"],
    syn:["authorize","enable","give power to"],
    ex:[{ s:"The law will {{}} local councils to set their own rules.", f:"empower", ko:"그 법은 지방 의회가 자체 규정을 정할 권한을 준다." }] },

  { word:"empty", pron:"엠프티", pos:"adj", level:"B1", meanings:["텅 빈","공허한"],
    syn:["vacant","unfilled","bare"], ant:["full"],
    ex:[{ s:"The theater was almost {{}} on a Tuesday night.", f:"empty", ko:"화요일 밤 극장은 거의 텅 비어 있었다." }] },

  /* 원본의 '치솟다, 급등하다'는 escalate 의 뜻이 섞인 것이다 — 헤더에 적어 둔 대로
     바로잡았다. */
  { word:"emulate", pron:"에뮬레이트", pos:"v", level:"C1", meanings:["모방하다","흉내내다"],
    syn:["imitate","mimic","follow the example of"],
    ex:[{ s:"Younger players try to {{}} his footwork.", f:"emulate", ko:"어린 선수들은 그의 발놀림을 모방하려 한다." }] },

  { word:"enable", pron:"이네이블", pos:"v", level:"B2", meanings:["할 수 있게 하다","가능하게 하다"],
    syn:["allow","permit","make possible"], ant:["disable"],
    ex:[{ s:"A small grant will {{}} her to finish the research.", f:"enable", ko:"작은 보조금이 그녀가 연구를 마칠 수 있게 해 줄 것이다." }] },

  /* 원본은 '(법을) 제정하다; 상연하다; ~을 행하다' 로 갈래가 셋이다 — 대표 2개로
     줄이고 괄호를 풀었다. */
  { word:"enact", pron:"이낵트", pos:"v", level:"C1", meanings:["제정하다","상연하다"],
    syn:["legislate","pass into law","put into effect"], ant:["repeal"],
    ex:[{ s:"Parliament moved quickly to {{}} the new safety code.", f:"enact", ko:"의회는 새 안전 규정을 제정하려 빠르게 움직였다." }] },

  /* 유의어로 charm 을 쓰지 않았다 — GLOSS 가 "매력"(명사)이라 동사 자리에 안 맞는다
     (표제어 beguile 이 이미 그 문제를 안고 있다). captivate 로 뺐다. */
  { word:"enchant", pron:"인챈트", pos:"v", level:"C1", meanings:["황홀하게 만들다","매혹하다"],
    syn:["captivate","fascinate","bewitch"], ant:["repel"],
    ex:[{ s:"The old carousel still seems to {{}} every child who sees it.", f:"enchant", ko:"그 낡은 회전목마는 지금도 그것을 보는 모든 아이를 황홀하게 만드는 듯하다." }] },

  { word:"enclose", pron:"인클로즈", pos:"v", level:"B2", meanings:["둘러싸다","동봉하다"],
    syn:["surround","fence in","encircle"],
    ex:[{ s:"They plan to {{}} the yard with a low stone wall.", f:"enclose", ko:"그들은 낮은 돌담으로 마당을 둘러쌀 계획이다." }] },

  { word:"encode", pron:"인코드", pos:"v", level:"C1", meanings:["암호화하다","부호화하다"],
    syn:["encrypt","cipher","put into code"], ant:["decode"],
    ex:[{ s:"The app will {{}} every message before sending it.", f:"encode", ko:"그 앱은 메시지를 보내기 전에 모두 암호화한다." }] },

  { word:"encompass", pron:"인컴퍼스", pos:"v", level:"C1", meanings:["포함하다","아우르다"],
    syn:["include","incorporate","bring together"], ant:["exclude"],
    ex:[{ s:"The survey will {{}} every district in the province.", f:"encompass", ko:"그 조사는 그 도의 모든 구역을 포함할 것이다." }] },

  /* 원본은 '맞닥뜨리다, 마주하다; 만남, 조우, 접촉' 으로 동사와 명사가 섞여 있다.
     pos 는 하나여야 하므로 동사로 정리했다 — 표제어 come across 가 이 낱말을
     유의어로 쓰고 있어 동사 갈래가 살아 있어야 한다(기존 GLOSS 는 "마주치다, 만남"
     이라 명사 갈래가 섞여 있었다). */
  { word:"encounter", pron:"인카운터", pos:"v", level:"B2", meanings:["맞닥뜨리다","마주치다"],
    syn:["come across","run into","bump into"],
    ex:[{ s:"Hikers sometimes {{}} bears on this ridge.", f:"encounter", ko:"등산객들은 이 능선에서 이따금 곰과 맞닥뜨린다." }] },

  { word:"encourage", pron:"인커리지", pos:"v", level:"B1", meanings:["격려하다","장려하다"],
    syn:["motivate","inspire","cheer on"], ant:["discourage"],
    ex:[{ s:"Teachers should {{}} students to ask awkward questions.", f:"encourage", ko:"교사는 학생들이 껄끄러운 질문을 하도록 격려해야 한다." }] },

  /* ── 5차: encouragement ~ enlighten ─────────────── */

  { word:"encouragement", pron:"인커리지먼트", pos:"n", level:"B2", meanings:["격려","격려가 되는 말"],
    syn:["reassurance","moral support","backing"], ant:["discouragement"],
    ex:[{ s:"A word of {{}} from her coach was all she needed.", f:"encouragement", ko:"그녀에게 필요한 것은 코치의 격려 한마디였다." }] },

  /* syn 을 비웠다 — 백과사전은 바꿔 쓸 낱말이 없는 기술 명사다(1차의 e-commerce
     무리와 같다). reference work 류를 억지로 넣으면 셋이 서로 비슷해진다. */
  { word:"encyclopedia", pron:"인사이클러피디어", pos:"n", level:"B2", meanings:["백과사전"],
    ex:[{ s:"He read the whole {{}} the summer he turned twelve.", f:"encyclopedia", ko:"그는 열두 살이 된 여름에 백과사전을 통째로 읽었다." }] },

  /* 원본 '결국 (어떤 처지에) 처하게 되다' 는 첫 뜻에 괄호가 들어간다 — 풀어 썼다.
     E 세트의 첫 구(phr)다(오답 후보는 전체 phr 149개에서 나온다).

     ex 를 달지 않았다. 기존 phr 표제어 149개가 전부 ex 를 갖지 않고, audit 도
     'phr 에 ex 가 있으면' 경고한다. 구는 빈칸 변환이 첫 낱말만 바뀌어서 오답이
     원형으로 남기 쉽다 — 뜻을 몰라도 정답이 보이는 문제가 된다.
     나머지 네 모드(4지선다·아닌것·짝맞추기)는 정상 출제된다. */
  { word:"end up", pron:"엔드 업", pos:"phr", level:"B1", meanings:["결국 ~하게 되다","끝내 ~이 되다"],
    syn:["wind up","turn out","finish up"] },

  { word:"endanger", pron:"인데인저", pos:"v", level:"B2", meanings:["위험에 빠뜨리다","위협하다"],
    syn:["imperil","jeopardize","put at risk"], ant:["protect"],
    ex:[{ s:"Draining the marsh would {{}} dozens of rare species.", f:"endanger", ko:"그 습지를 말리면 희귀종 수십 종을 위험에 빠뜨릴 것이다." }] },

  { word:"endangered", pron:"인데인저드", pos:"adj", level:"B2", meanings:["멸종 위기에 처한","위기에 놓인"],
    syn:["at risk","threatened","vulnerable"],
    ex:[{ s:"The reserve shelters three {{}} bird species.", f:"endangered", ko:"그 보호 구역은 멸종 위기에 처한 조류 세 종을 보호한다." }] },

  /* 원본은 '노력하다; 노력' 으로 동사와 명사가 섞여 있다. 동사로 정했다 —
     표제어 attempt(동사)가 이 낱말을 유의어로 쓰고 있는데 기존 GLOSS 가
     "노력, 시도"(명사)라서 뜻이 어긋나 있었다. 이번에 바로잡힌다. */
  { word:"endeavor", pron:"엔데버", pos:"v", level:"C1", meanings:["노력하다","애쓰다"],
    syn:["strive","attempt","make an effort"],
    ex:[{ s:"We will {{}} to answer every letter within a week.", f:"endeavor", ko:"우리는 모든 편지에 일주일 안에 답하려 노력할 것이다." }] },

  /* 유의어로 infinite 를 쓰지 않았다 — GLOSS 가 limitless 와 똑같이 "무한한"
     이어서 피드백 두 줄이 같아진다(audit 이 오류로 잡는다). */
  { word:"endless", pron:"엔들리스", pos:"adj", level:"B2", meanings:["끝없는","무한한"],
    syn:["limitless","unending","interminable"], ant:["finite"],
    ex:[{ s:"The drive across the plain felt {{}}.", f:"endless", ko:"평원을 가로지르는 그 운전은 끝없이 느껴졌다." }] },

  /* 원본은 '지지하다; 보증하다, 홍보하다; (수표에) 배서하다' 로 갈래가 넷이다 —
     기존 GLOSS "지지하다, 보증하다" 를 그대로 옮겼다(advocate 의 유의어다). */
  { word:"endorse", pron:"인도스", pos:"v", level:"C1", meanings:["지지하다","보증하다"],
    syn:["approve","support","vouch for"], ant:["oppose"],
    ex:[{ s:"Two former mayors agreed to {{}} her campaign.", f:"endorse", ko:"전임 시장 두 명이 그녀의 선거 운동을 지지하기로 했다." }] },

  /* 원본 '(능력 등을) 주다, 기부하다' 의 괄호를 풀었다. */
  { word:"endow", pron:"인다우", pos:"v", level:"C2", meanings:["부여하다","기부하다"],
    syn:["bestow","donate","provide with"],
    ex:[{ s:"An alumnus agreed to {{}} two new scholarships.", f:"endow", ko:"한 졸업생이 새 장학금 두 건을 기부하기로 했다." }] },

  { word:"endurance", pron:"인듀런스", pos:"n", level:"C1", meanings:["지구력","인내력"],
    syn:["stamina","staying power","perseverance"],
    ex:[{ s:"Long-distance swimming demands {{}} more than speed.", f:"endurance", ko:"장거리 수영은 속도보다 지구력을 요구한다." }] },

  { word:"endure", pron:"인듀어", pos:"v", level:"B2", meanings:["견디다","참다"],
    syn:["bear","withstand","put up with"], ant:["succumb"],
    ex:[{ s:"The crew had to {{}} three weeks of storms.", f:"endure", ko:"승무원들은 3주간의 폭풍을 견뎌야 했다." }] },

  { word:"enemy", pron:"에너미", pos:"n", level:"B1", meanings:["적","장애물"],
    syn:["opponent","adversary","foe"], ant:["ally"],
    ex:[{ s:"Haste is the {{}} of careful work.", f:"enemy", ko:"서두름은 꼼꼼한 작업의 적이다." }] },

  /* 원본은 '강요하다; 집행하다, 시행하다' 다 — 대표 2개로 줄였다.
     유의어로 implement 를 쓰지 않았다(GLOSS "실행하다; 도구" 에 명사 갈래가 섞인다). */
  { word:"enforce", pron:"인포스", pos:"v", level:"B2", meanings:["시행하다","강요하다"],
    syn:["carry out","impose","put in force"],
    ex:[{ s:"Nobody bothered to {{}} the parking rules.", f:"enforce", ko:"아무도 주차 규정을 시행하려 애쓰지 않았다." }] },

  /* 원본은 '사로잡다, 끌다; 관계를 맺다; 약속하다' 로 갈래가 셋이다 — 둘로 줄였다. */
  { word:"engage", pron:"인게이지", pos:"v", level:"B2", meanings:["사로잡다","관계를 맺다"],
    syn:["captivate","draw in","hold the attention of"],
    ex:[{ s:"A good opening line will {{}} the reader at once.", f:"engage", ko:"좋은 첫 문장은 독자를 곧바로 사로잡는다." }] },

  { word:"engagement", pron:"인게이지먼트", pos:"n", level:"B2", meanings:["약속","약혼"],
    syn:["appointment","betrothal","prior arrangement"],
    ex:[{ s:"She had a dinner {{}} she could not cancel.", f:"engagement", ko:"그녀는 취소할 수 없는 저녁 약속이 있었다." }] },

  { word:"engender", pron:"인젠더", pos:"v", level:"C2", meanings:["생기게 하다","불러일으키다"],
    syn:["give rise to","bring about","provoke"],
    ex:[{ s:"Secrecy tends to {{}} suspicion among neighbors.", f:"engender", ko:"비밀주의는 이웃들 사이에 의심을 생기게 하는 경향이 있다." }] },

  /* 유의어로 immerse 를 쓰지 않았다 — GLOSS 가 "담그다; 몰입하다" 라서 물에 담그는
     뜻이 앞에 뜬다. */
  { word:"engross", pron:"인그로스", pos:"v", level:"C2", meanings:["몰두하게 만들다","빠져들게 하다"],
    syn:["preoccupy","rivet","fully absorb"],
    ex:[{ s:"The puzzle can {{}} a child for hours.", f:"engross", ko:"그 퍼즐은 아이를 몇 시간이고 몰두하게 만들 수 있다." }] },

  { word:"enhance", pron:"인핸스", pos:"v", level:"B2", meanings:["향상시키다","높이다"],
    syn:["improve","boost","heighten"], ant:["degrade"],
    ex:[{ s:"A little salt will {{}} the flavor of the soup.", f:"enhance", ko:"소금을 조금 넣으면 국의 맛이 향상된다." }] },

  { word:"enlarge", pron:"인라지", pos:"v", level:"B2", meanings:["확대하다","확장하다"],
    syn:["expand","magnify","broaden"], ant:["shrink"],
    ex:[{ s:"They want to {{}} the kitchen before winter.", f:"enlarge", ko:"그들은 겨울 전에 부엌을 확장하고 싶어 한다." }] },

  /* 원본은 '계몽하다, 깨우치다, 가르치다' 로 셋이다 — 둘로 줄였다. 기존 GLOSS 는
     "교화하다, 깨우치다" 였는데 civilize(유의어)·deceive·delude(반의어) 모두
     '계몽하다'로도 뜻이 통한다. */
  { word:"enlighten", pron:"인라이튼", pos:"v", level:"C1", meanings:["계몽하다","깨우치다"],
    syn:["educate","inform","open one's eyes"], ant:["mislead"],
    ex:[{ s:"A single good teacher can {{}} a whole village.", f:"enlighten", ko:"좋은 교사 한 명이 마을 전체를 계몽할 수 있다." }] },

  /* ── 6차: enormous ~ environment-friendly ───────── */

  { word:"enormous", pron:"이노머스", pos:"adj", level:"B1", meanings:["막대한","거대한"],
    syn:["immense","colossal","vast"], ant:["tiny"],
    ex:[{ s:"Rebuilding the bridge will cost an {{}} amount.", f:"enormous", ko:"그 교량을 다시 세우는 데는 막대한 금액이 들 것이다." }] },

  { word:"enrich", pron:"인리치", pos:"v", level:"B2", meanings:["풍요롭게 하다","질을 높이다"],
    syn:["improve","fortify","add value to"],
    ex:[{ s:"Reading widely will {{}} your writing more than any rule.", f:"enrich", ko:"폭넓은 독서는 어떤 규칙보다 당신의 글을 풍요롭게 한다." }] },

  { word:"enroll", pron:"인로울", pos:"v", level:"B2", meanings:["등록하다","입학시키다"],
    syn:["register","sign up","put one's name down"], ant:["drop out"],
    ex:[{ s:"Hundreds of adults {{}} in the evening classes each spring.", f:"enroll", ko:"매년 봄 수백 명의 성인이 야간 강좌에 등록한다." }] },

  { word:"enrollment", pron:"인로울먼트", pos:"n", level:"B2", meanings:["등록","입학"],
    syn:["registration","sign-up","admission"],
    ex:[{ s:"The college saw {{}} double after the fee was cut.", f:"enrollment", ko:"그 대학은 수강료를 낮춘 뒤 등록이 두 배가 되는 것을 보았다." }] },

  { word:"ensure", pron:"인슈어", pos:"v", level:"B1", meanings:["확실하게 하다","보장하다"],
    syn:["guarantee","make certain","make sure"],
    ex:[{ s:"Check the lid twice to {{}} that nothing spills.", f:"ensure", ko:"아무것도 쏟아지지 않도록 뚜껑을 두 번 확인하세요." }] },

  { word:"entail", pron:"인테일", pos:"v", level:"C1", meanings:["수반하다","필요로 하다"],
    syn:["involve","require","bring with it"],
    ex:[{ s:"Moving abroad will {{}} more paperwork than you expect.", f:"entail", ko:"외국으로 이주하는 일은 예상보다 많은 서류 작업을 수반한다." }] },

  { word:"entangle", pron:"인탱글", pos:"v", level:"C2", meanings:["얽어매다","꼼짝 못하게 하다"],
    syn:["ensnare","tangle up","trap"], ant:["disentangle"],
    ex:[{ s:"Loose nets can {{}} seals and turtles.", f:"entangle", ko:"풀린 그물은 물개와 거북을 얽어맬 수 있다." }] },

  /* 원본 '(취임식 등에서) 왕좌에 앉히다' 의 괄호를 풀었다.
     발음은 기존 dethrone("디스론")에 맞춰 '인스론' 으로 적었다 — '로운'이 아니다. */
  { word:"enthrone", pron:"인스론", pos:"v", level:"C2", meanings:["왕좌에 앉히다","즉위시키다"],
    syn:["install as king","put on the throne","crown as monarch"],
    ex:[{ s:"The abbey has been used to {{}} monarchs for centuries.", f:"enthrone", ko:"그 수도원은 수 세기 동안 군주를 왕좌에 앉히는 데 쓰였다." }] },

  /* 기존 GLOSS "열정, 열의" 를 그대로 옮겼다 — 표제어 apathy 의 반의어다. */
  { word:"enthusiasm", pron:"인수지애즘", pos:"n", level:"B2", meanings:["열정","열의"],
    syn:["eagerness","zeal","passion"], ant:["apathy"],
    ex:[{ s:"Her {{}} for the project carried the whole team.", f:"enthusiasm", ko:"그 사업에 대한 그녀의 열정이 팀 전체를 이끌었다." }] },

  /* 기존 GLOSS "열정적인, 열심인" 을 그대로 옮겼다 — 표제어 avid 의 유의어다. */
  { word:"enthusiastic", pron:"인수지애스틱", pos:"adj", level:"B2", meanings:["열정적인","열심인"],
    syn:["eager","keen","zealous"], ant:["indifferent"],
    ex:[{ s:"The crowd gave the young pianist an {{}} welcome.", f:"enthusiastic", ko:"관객은 그 젊은 피아니스트를 열정적으로 환영했다." }] },

  { word:"enticing", pron:"인타이싱", pos:"adj", level:"C1", meanings:["유혹적인","마음을 끄는"],
    syn:["tempting","appealing","alluring"],
    ex:[{ s:"The offer looked {{}} until we read the small print.", f:"enticing", ko:"그 제안은 작은 글씨의 조항을 읽기 전까지는 유혹적으로 보였다." }] },

  { word:"entire", pron:"인타이어", pos:"adj", level:"B1", meanings:["전체의","온전한"],
    syn:["complete","total","undivided"], ant:["partial"],
    ex:[{ s:"She spent the {{}} afternoon sorting old photographs.", f:"entire", ko:"그녀는 오후 전체를 옛 사진을 정리하며 보냈다." }] },

  /* 원본은 '제목을 붙이다, 권리를 부여하다' 순서인데 '권리를 부여하다'를 앞으로
     돌렸다. 시험에 나오는 쪽이고, 3차에서 넣은 GLOSS "entitled":"권리가 있는" 과
     방향이 맞는다. entitled 는 형용사 항목이라 이 동사와 오답 후보로 겹치지 않는다. */
  { word:"entitle", pron:"인타이털", pos:"v", level:"C1", meanings:["권리를 부여하다","제목을 붙이다"],
    syn:["authorize","qualify","give the right to"],
    ex:[{ s:"A full ticket will {{}} you to two free refills.", f:"entitle", ko:"정가 티켓은 두 번의 무료 리필을 받을 권리를 부여한다." }] },

  /* syn 을 비웠다 — '독립체'는 바꿔 쓸 낱말이 마땅치 않은 추상 명사다.
     being·body·unit 은 모두 뜻이 훨씬 넓어 유의어로 가르치면 틀린 것을 가르친다
     (unit 의 GLOSS 는 "단위; 세포" 다). encyclopedia·e-commerce 와 같은 경우다. */
  { word:"entity", pron:"엔터티", pos:"n", level:"C1", meanings:["독립체","실체"],
    ex:[{ s:"After the merger the two firms became a single {{}}.", f:"entity", ko:"합병 후 두 회사는 하나의 독립체가 되었다." }] },

  { word:"entrepreneur", pron:"안트러프러너", pos:"n", level:"B2", meanings:["사업가","기업가"],
    syn:["businessperson","founder","business owner"],
    ex:[{ s:"The prize goes to a young {{}} each October.", f:"entrepreneur", ko:"그 상은 매년 10월 젊은 사업가에게 주어진다." }] },

  { word:"entrust", pron:"인트러스트", pos:"v", level:"C1", meanings:["맡기다","위임하다"],
    syn:["hand over to","assign","put in the care of"],
    ex:[{ s:"They chose to {{}} the accounts to an outside firm.", f:"entrust", ko:"그들은 회계를 외부 회사에 맡기기로 했다." }] },

  { word:"entry", pron:"엔트리", pos:"n", level:"B1", meanings:["들어감","입장"],
    syn:["entrance","access","admittance"],
    ex:[{ s:"A side gate gives {{}} to the garden.", f:"entry", ko:"측면 문으로 정원에 들어갈 수 있다." }] },

  { word:"envious", pron:"엔비어스", pos:"adj", level:"B2", meanings:["부러워하는","시기심이 강한"],
    syn:["jealous","covetous","green with envy"],
    ex:[{ s:"He grew {{}} of his cousin's easy success.", f:"envious", ko:"그는 사촌의 손쉬운 성공을 부러워하게 되었다." }] },

  { word:"environment", pron:"인바이런먼트", pos:"n", level:"B1", meanings:["환경"],
    syn:["surroundings","setting","habitat"],
    ex:[{ s:"Cutting the old forest would harm the whole {{}}.", f:"environment", ko:"오래된 숲을 베면 환경 전체가 해를 입는다." }] },

  /* 원본은 '환경친화적인, 친환경적인' 인데 두 뜻이 사실상 같은 말이다 — 카드에
     같은 말이 두 번 찍히므로 하나만 뒀다(electronic·encyclopedia 선례). */
  { word:"environment-friendly", pron:"인바이런먼트 프렌들리", pos:"adj", level:"B2", meanings:["환경친화적인"],
    syn:["eco-friendly","green","sustainable"],
    ex:[{ s:"The company switched to {{}} packaging last year.", f:"environment-friendly", ko:"그 회사는 지난해 환경친화적인 포장으로 바꿨다." }] },

  /* ── 7차: envision ~ erratic ─────────────────────── */

  { word:"envision", pron:"인비전", pos:"v", level:"C1", meanings:["마음속에 그리다","상상하다"],
    syn:["imagine","visualize","picture in one's mind"],
    ex:[{ s:"It is hard to {{}} the town as it looked a century ago.", f:"envision", ko:"그 마을이 한 세기 전에 어떻게 보였을지 마음속에 그리기는 어렵다." }] },

  /* 원본은 '서사시, 서사시의, 장대한' 으로 명사와 형용사가 섞여 있다 — 명사로 정했다.
     syn 을 비웠다: saga·heroic poem 은 뜻이 서로 거의 같아 셋을 채우면 피드백이
     같은 말을 세 번 하게 된다. 문학 용어 명사다. */
  { word:"epic", pron:"에픽", pos:"n", level:"B2", meanings:["서사시"],
    ex:[{ s:"The class spent a month on a single Greek {{}}.", f:"epic", ko:"그 수업은 그리스 서사시 한 편에 한 달을 썼다." }] },

  { word:"epidemic", pron:"에퍼데믹", pos:"n", level:"B2", meanings:["유행병","전염병"],
    syn:["outbreak","contagion","widespread disease"],
    ex:[{ s:"The city closed its schools during the {{}}.", f:"epidemic", ko:"그 도시는 유행병이 도는 동안 학교를 닫았다." }] },

  { word:"epilogue", pron:"에펄로그", pos:"n", level:"C1", meanings:["에필로그","후기"],
    syn:["afterword","closing section","final chapter"],
    ex:[{ s:"A short {{}} tells us what became of the family.", f:"epilogue", ko:"짧은 에필로그가 그 가족이 어떻게 되었는지 알려 준다." }] },

  /* epoch(신기원)와 era(시대)는 같은 명사에 뜻이 겹친다. 레벨을 C2 / B2 로 두 칸
     벌려 '레벨 ±1' 필터에 걸리게 했고, 뜻도 '신기원' 과 '시대' 로 갈라 두었다.
     2차 element/elements, 3차 emergence/emergency 와 같은 방법이다. */
  { word:"epoch", pron:"에폭", pos:"n", level:"C2", meanings:["신기원","획기적인 시대"],
    syn:["milestone","turning point","new age"],
    ex:[{ s:"The first printing press opened a new {{}} in learning.", f:"epoch", ko:"최초의 인쇄기는 학문에 새로운 신기원을 열었다." }] },

  /* equal(B1)과 equivalent(C1)도 두 칸 벌렸다 — 둘 다 형용사에 '동등한' 뜻이다.
     equal 은 '같은' 을 앞에 둬 뜻으로도 갈라 놓았다. */
  { word:"equal", pron:"이퀄", pos:"adj", level:"B1", meanings:["같은","동등한"],
    syn:["identical","the same","even"], ant:["unequal"],
    ex:[{ s:"Cut the dough into six {{}} pieces.", f:"equal", ko:"반죽을 똑같은 크기의 여섯 조각으로 자르세요." }] },

  /* syn 을 비웠다 — 수학 용어다. formula 의 GLOSS 는 "공식; 방법" 이라 '방법' 갈래가
     섞이고, 나머지 후보는 '등식'을 달리 말한 것뿐이다. */
  { word:"equation", pron:"이퀘이전", pos:"n", level:"C1", meanings:["방정식","등식"],
    ex:[{ s:"He solved the {{}} in three lines.", f:"equation", ko:"그는 그 방정식을 세 줄로 풀었다." }] },

  /* equator·equatorial 은 syn 을 비웠다 — 지리 용어에는 바꿔 쓸 낱말이 없다
     (1차의 ecological·ecology 와 같다). 품사가 명사/형용사로 달라 둘이 한 문제의
     보기로 같이 뜨지는 않는다. */
  { word:"equator", pron:"이퀘이터", pos:"n", level:"B2", meanings:["적도"],
    ex:[{ s:"The ship crossed the {{}} just after midnight.", f:"equator", ko:"그 배는 자정 직후에 적도를 건넜다." }] },

  { word:"equatorial", pron:"에쿼토리얼", pos:"adj", level:"C1", meanings:["적도의","적도 부근의"],
    ex:[{ s:"Heavy rain falls all year in {{}} regions.", f:"equatorial", ko:"적도 지역에는 일 년 내내 많은 비가 내린다." }] },

  { word:"equilibrium", pron:"이퀄리브리엄", pos:"n", level:"C1", meanings:["균형","평형"],
    syn:["stability","evenness","state of balance"],
    ex:[{ s:"The market found a new {{}} after the shock.", f:"equilibrium", ko:"시장은 그 충격 뒤에 새로운 균형을 찾았다." }] },

  { word:"equipment", pron:"이퀴프먼트", pos:"n", level:"B1", meanings:["장비","용품"],
    syn:["gear","apparatus","tools"],
    ex:[{ s:"The club lends climbing {{}} to beginners.", f:"equipment", ko:"그 동아리는 초보자에게 등반 장비를 빌려준다." }] },

  /* 기존 GLOSS "동등한, 상당하는"(형용사)을 그대로 옮겼다 — 표제어 comparable·
     corresponding 두 형용사가 유의어로 쓴다. 원본의 '동등한 것'(명사) 갈래는 버렸다.
     명사 표제어 counterpart 도 이 낱말을 유의어로 쓰지만, 형용사 둘을 지키는 쪽이
     낫다(counterpart 의 어긋남은 7차 전에도 있었다 — 아래 '남겨 둔 문제' 참고). */
  { word:"equivalent", pron:"이퀴벌런트", pos:"adj", level:"C1", meanings:["동등한","상당하는"],
    syn:["comparable","corresponding","tantamount"],
    ex:[{ s:"One cup of this flour is {{}} to two of the old kind.", f:"equivalent", ko:"이 밀가루 한 컵은 예전 것 두 컵과 동등하다." }] },

  /* 기존 GLOSS "애매한, 이중적인" 을 그대로 뒀다 — 표제어 ambiguous 가 유의어로 쓰는데
     원본의 '확실치 않은' 을 쓰면 ambiguous 자신의 뜻과 글자까지 같아진다. */
  { word:"equivocal", pron:"이퀴버컬", pos:"adj", level:"C2", meanings:["애매한","이중적인"],
    syn:["ambiguous","vague","open to doubt"], ant:["explicit"],
    ex:[{ s:"His {{}} reply satisfied neither side.", f:"equivocal", ko:"그의 애매한 답변은 어느 쪽도 만족시키지 못했다." }] },

  { word:"era", pron:"이러", pos:"n", level:"B2", meanings:["시대","연대"],
    syn:["age","period","epoch"],
    ex:[{ s:"Steam engines defined an entire {{}} of industry.", f:"era", ko:"증기 기관은 산업의 한 시대 전체를 규정했다." }] },

  /* 3차에서 eliminate 의 유의어로 넣은 GLOSS 항목이 표제어로 올라온다 — 그 항목을
     지웠다. eliminate 쪽 뜻이 변하지 않게 '근절하다' 를 앞에 그대로 뒀다. */
  { word:"eradicate", pron:"이래더케이트", pos:"v", level:"C1", meanings:["근절하다","뿌리째 뽑다"],
    syn:["root out","stamp out","wipe out"],
    ex:[{ s:"Vaccines helped {{}} the disease within a decade.", f:"eradicate", ko:"백신은 10년 안에 그 병을 근절하는 데 도움이 되었다." }] },

  /* 원본은 '세우다, 짓다, 만들다; 똑바로 선, 직립의' 로 동사와 형용사가 섞여 있다 —
     동사로 정했다. 표제어 construct 가 이 낱말을 유의어로 쓰므로 동사여야 한다. */
  { word:"erect", pron:"이렉트", pos:"v", level:"B2", meanings:["세우다","짓다"],
    syn:["build","put up","construct"], ant:["demolish"],
    ex:[{ s:"Workers will {{}} the frame in a single day.", f:"erect", ko:"작업자들은 하루 만에 그 골조를 세울 것이다." }] },

  /* 원본의 '밤에 일어나는; 야행성의' 는 nocturnal 의 뜻이 섞인 것이다 — 헤더에
     적어 둔 대로 바로잡았다. 표제어 erosion 과 짝이 맞는 뜻이다. */
  { word:"erode", pron:"이로드", pos:"v", level:"C1", meanings:["침식하다","부식시키다"],
    syn:["wear away","eat away","corrode"],
    ex:[{ s:"Winter rain will {{}} the bare hillside.", f:"erode", ko:"겨울비가 헐벗은 산비탈을 침식할 것이다." }] },

  { word:"erosion", pron:"이로전", pos:"n", level:"B2", meanings:["침식","부식"],
    syn:["corrosion","wearing away","gradual destruction"],
    ex:[{ s:"Tree roots slow the {{}} of the riverbank.", f:"erosion", ko:"나무 뿌리는 강둑의 침식을 늦춘다." }] },

  { word:"errand", pron:"에런드", pos:"n", level:"B2", meanings:["심부름","용건"],
    syn:["chore","task","quick trip"],
    ex:[{ s:"She stepped out to run a quick {{}}.", f:"errand", ko:"그녀는 잠깐 심부름을 하러 나갔다." }] },

  { word:"erratic", pron:"이래틱", pos:"adj", level:"C1", meanings:["예측할 수 없는","일정하지 않은"],
    syn:["unpredictable","inconsistent","irregular"], ant:["consistent"],
    ex:[{ s:"The old clock keeps {{}} time.", f:"erratic", ko:"그 낡은 시계는 일정하지 않게 시간을 가리킨다." }] }
];

/* ── E 세트가 쓰는 유의어·반의어의 뜻 ─────────────
   표제어(VOCAB~VOCAB_E)에 있는 낱말은 넣지 않는다 — 읽는 쪽이 표제어를 먼저
   찾으므로 죽은 항목이 되고, 뜻이 두 곳으로 갈라진다.
   bliss·boundary·brink·commentary·competence·conventional 은 표제어라서 없다.

   ⚠️ 재대입(=)이 아니라 Object.assign 으로 합쳐야 A~D 세트 것이 살아남는다. */
Object.assign(window.GLOSS, {
  /* ── 1차: earnest ~ efficient (28개) ───────────────── */
  "blot out":"지워 없애다, 가리다",
  "cost-effective":"비용 대비 효과가 좋은",
  "eatable":"먹을 수 있는",
  "efficacy":"효능",
  "elation":"의기양양, 들뜬 기쁨",
  "fit to eat":"먹기에 적합한",
  "futility":"무익함, 헛됨",
  "inefficiency":"비능률, 비효율",
  "insincere":"진심이 아닌, 겉치레의",
  "laid-back":"서두르지 않는, 태평한",
  "leading article":"주요 논설",
  "mundane":"평범한, 일상적인",
  "odd":"이상한, 색다른",
  "opinion piece":"의견 기고문",
  "poisonous":"유독한, 독이 있는",
  "potency":"효력, 위력",
  "productivity":"생산성",
  "rim":"테두리, 언저리",
  "safe to eat":"먹어도 안전한",
  "sincere":"진심의, 진실한",
  "streamlined":"간소화된, 군더더기 없는",
  "thrifty":"알뜰한, 돈을 아끼는",
  "tolerant":"너그러운, 관대한",
  "unconventional":"관습에 얽매이지 않는",
  "uptight":"긴장한, 신경이 날카로운",
  "usefulness":"유용성",
  "wasteful":"낭비하는, 헤픈",
  "wholehearted":"전심전력의, 진심을 다한",

  /* ── 2차: effortless ~ elevated (37개) ───────────────── */
  "advanced":"고급의, 진전된",
  "bad weather":"나쁜 날씨",
  "basic":"기본적인",
  "choose":"고르다, 선택하다",
  "computerized":"컴퓨터로 처리되는",
  "detailed":"상세한, 세밀한",
  "digital":"디지털의",
  "easy":"쉬운, 수월한",
  "electric current":"전류",
  "electric power":"전력",
  "electrical":"전기의",
  "electrical energy":"전기 에너지",
  "evict":"퇴거시키다",
  "foul weather":"험한 날씨",
  "inelegant":"품위 없는, 촌스러운",
  "introductory":"입문의, 소개하는",
  "jubilant":"환호하는, 승리에 들뜬",
  "lofty":"아주 높은, 우뚝한",
  "lower":"낮추다, 내리다",
  "lowly":"낮은, 미천한",
  "narcissistic":"자기도취적인",
  "painless":"고통 없는, 수고롭지 않은",
  "pride":"자랑, 자부심",
  "raised":"올려진, 돋운",
  "rough weather":"거친 날씨",
  "self":"자기 자신",
  "self-centered":"자기중심적인",
  "self-esteem":"자존감",
  "springy":"튀어 오르는, 반발력 있는",
  "stretchy":"잘 늘어나는",
  "stylish":"멋스러운, 세련된",
  "throw out":"내쫓다, 버리다",
  "vote for":"~에 투표하다",
  "voters":"유권자들",
  "voting public":"투표권을 가진 대중",
  "constituency":"선거구, 선거구민",

  /* ── 3차: elevation ~ eminent (38개) ───────────────── */
  "articulacy":"또렷한 표현력",
  "badge":"표장, 배지",
  "bring out":"드러내다, 끄집어내다",
  "come out":"드러나다, 밝혀지다",
  "come to light":"세상에 알려지다",
  "crisis":"위기, 중대 국면",
  "critical situation":"위태로운 상황",
  "developing":"발전 중인, 개발 중인",
  "draw out":"끌어내다, 이끌어 내다",
  "egg-shaped":"달걀 모양의",
  "entitled":"권리가 있는",
  "established":"확립된, 기성의",
  "exemplify":"전형적으로 보여주다",
  "expressiveness":"표현력이 풍부함",
  "fluency":"유창함",
  "fluent":"유창한",
  "go aboard":"배에 오르다",
  "hard to find":"찾기 어려운",
  "implant":"심어 넣다, 이식하다",
  "inarticulate":"말을 제대로 못 하는",
  "ineligible":"자격이 없는",
  "insignia":"휘장, 표장",
  "little-known":"거의 알려지지 않은",
  "loftiness":"높음, 우뚝함",
  "mortify":"창피하게 하다",
  "oblong":"길둥근, 직사각형의",
  "oval":"타원형의",
  "personify":"체현하다, 의인화하다",
  "put to shame":"부끄럽게 만들다",
  "retain":"그대로 유지하다",
  "rising":"떠오르는, 상승하는",
  "set in":"끼워 넣다, 박아 넣다",
  "set out":"출발하다, 착수하다",
  "slippery":"붙잡기 힘든, 미끄러운",
  "up-and-coming":"전도유망한",
  "urgent situation":"긴급한 상황",
  "well-spoken":"말솜씨가 좋은",

  /* ── 4차: emission ~ encourage (38개) ───────────────── */
  "accent":"강세, 악센트",
  "bewitch":"넋을 빼앗다",
  "bring together":"아우르다, 한데 모으다",
  "bump into":"마주치다, 부딪치다",
  "captivate":"마음을 사로잡다",
  "caring":"배려하는, 보살피는",
  "cheer on":"응원하다",
  "cipher":"암호로 바꾸다",
  "emanation":"발산, 방출",
  "encircle":"원형으로 둘러싸다",
  "encrypt":"암호화하다",
  "evidence-based":"증거에 기반한",
  "experimental":"실험에 의한",
  "fascinate":"매혹하다, 흥미를 끌다",
  "fellow feeling":"동류 의식, 공감",
  "fence in":"울타리로 둘러막다",
  "follow the example of":"~의 본을 따르다",
  "give a job to":"~에게 일자리를 주다",
  "give off":"내뿜다, 발산하다",
  "give power to":"~에게 힘을 주다",
  "imitate":"모방하다, 본뜨다",
  "importance":"중요성",
  "incorporate":"포함시키다, 통합하다",
  "inspire":"고무하다, 영감을 주다",
  "legislate":"법을 제정하다",
  "make possible":"가능하게 만들다",
  "mimic":"흉내 내다, 모방하다",
  "motivate":"동기를 부여하다",
  "observed":"관찰된",
  "pass into law":"법으로 통과시키다",
  "prominence":"두드러짐, 현저함",
  "put into code":"부호로 바꾸다",
  "put into effect":"시행하다",
  "run into":"우연히 만나다",
  "send out":"내보내다, 발신하다",
  "surround":"둘러싸다, 에워싸다",
  "sympathetic":"동정하는, 공감하는",
  "venting":"배출, 뿜어냄",

  /* ── 5차: encouragement ~ enlighten (33개) ───────────────── */
  "backing":"후원, 지지",
  "betrothal":"약혼",
  "broaden":"넓히다, 확장하다",
  "discouragement":"낙담, 의욕 저하",
  "draw in":"끌어들이다",
  "educate":"교육하다, 가르치다",
  "finish up":"끝으로 ~하게 되다",
  "finite":"유한한, 한계가 있는",
  "fully absorb":"완전히 몰입시키다",
  "heighten":"높이다, 고조시키다",
  "hold the attention of":"~의 주의를 붙들다",
  "imperil":"위험에 빠뜨리다",
  "inform":"알리다, 알려 주다",
  "interminable":"끝이 안 보이는, 지루하게 긴",
  "make an effort":"노력을 기울이다",
  "moral support":"정신적 지지",
  "open one's eyes":"눈을 뜨게 하다",
  "perseverance":"끈기, 꾸준함",
  "preoccupy":"마음을 온통 차지하다",
  "prior arrangement":"미리 정한 약속",
  "provide with":"~을 갖추어 주다",
  "put at risk":"위험에 놓다",
  "put in force":"효력을 발생시키다",
  "put up with":"참고 견디다",
  "reassurance":"안심시키는 말, 확언",
  "rivet":"시선을 붙들어 매다",
  "stamina":"체력, 지구력",
  "staying power":"버티는 힘",
  "threatened":"위협받는",
  "turn out":"결과적으로 ~이 되다",
  "unending":"그침이 없는",
  "vouch for":"보증하다",
  "wind up":"결국 ~에 이르다",

  /* ── 6차: enormous ~ environment-friendly (39개) ───────────────── */
  "add value to":"가치를 높이다",
  "admittance":"입장 허용",
  "alluring":"매혹적인",
  "bring with it":"~을 함께 가져오다",
  "business owner":"사업주",
  "businessperson":"사업하는 사람",
  "covetous":"탐내는",
  "crown as monarch":"왕관을 씌워 즉위시키다",
  "disentangle":"얽힌 것을 풀다",
  "eagerness":"열의, 간절함",
  "eco-friendly":"친환경의",
  "ensnare":"덫에 걸리게 하다",
  "fortify":"강화하다, 보강하다",
  "founder":"창업자, 설립자",
  "give the right to":"~할 권리를 주다",
  "green":"환경을 해치지 않는",
  "green with envy":"몹시 부러워하는",
  "habitat":"서식지",
  "hand over to":"~에게 넘기다",
  "install as king":"왕으로 세우다",
  "involve":"수반하다, 포함하다",
  "jealous":"질투하는",
  "make certain":"확실히 하다",
  "make sure":"반드시 ~하게 하다",
  "put in the care of":"~의 보살핌에 맡기다",
  "put on the throne":"왕좌에 앉히다",
  "put one's name down":"이름을 올리다",
  "registration":"등록, 기재",
  "sign up":"신청하다, 가입하다",
  "sign-up":"가입, 신청",
  "surroundings":"주위 환경",
  "sustainable":"지속 가능한",
  "tangle up":"뒤엉키게 하다",
  "tempting":"구미가 당기는",
  "trap":"가두다, 덫에 빠뜨리다",
  "undivided":"나뉘지 않은, 온전한",
  "vast":"광대한, 막대한",
  "zeal":"열의, 열성",

  /* ── 7차: envision ~ erratic (30개) ───────────────── */
  "afterword":"후기, 발문",
  "age":"시대, 시기",
  "closing section":"맺는 부분",
  "contagion":"전염, 감염",
  "corrode":"부식시키다",
  "eat away":"조금씩 먹어 들어가다",
  "even":"고른, 대등한",
  "evenness":"고름, 균등함",
  "final chapter":"마지막 장",
  "gear":"장구, 용품",
  "gradual destruction":"서서히 무너짐",
  "inconsistent":"일관성이 없는",
  "milestone":"중대한 사건, 분기점",
  "new age":"새 시대",
  "open to doubt":"의심의 여지가 있는",
  "picture in one's mind":"마음속에 그려 보다",
  "quick trip":"잠깐 다녀오는 길",
  "root out":"뿌리부터 제거하다",
  "stamp out":"근절해 버리다",
  "state of balance":"균형 잡힌 상태",
  "tantamount":"~와 다름없는",
  "the same":"마찬가지인",
  "tools":"도구, 공구",
  "turning point":"전환점",
  "unequal":"동등하지 않은",
  "unpredictable":"종잡을 수 없는",
  "visualize":"시각적으로 떠올리다",
  "wear away":"닳아 없어지게 하다",
  "wearing away":"닳아 없어짐",
  "widespread disease":"널리 퍼진 질병"
});
