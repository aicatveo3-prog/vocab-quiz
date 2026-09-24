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
 *   erupt       '(감정 등이) 터져 나오다; …' → 괄호를 풀고 기존 뜻을 살렸다
 *   eruption    '(화산의) 폭발, 분화' → 괄호를 풀었다
 *   establish   '확립하다; (법률, 제도 등을) 제정하다; 설립하다' → 괄호를 풀고 둘로
 *   established 갈래 넷(인정받는·확실히 자리 잡은·저명한·존경받는) → 뜻은 기존
 *               "확립된, 기성의" 를 쓰고, 버린 갈래는 유의어 recognized·long-standing 으로 살렸다
 *   esteem      '존경, 경의; 존경하다' → 동사로 정리 (admire 가 유의어로 쓴다)
 *   estimate    '견적, 추정; 추정하다, 추산하다' → 동사로 정리 (calculate 가 유의어로 쓴다)
 *   eternal     '영원한, 끊임없는' → '불멸의' 로 바꿨다. 유의어 perpetual 의 GLOSS 가
 *               "영원한, 끊임없는" 이라 그대로 두면 표제어와 선택지가 같은 말을 한다
 *   eternity    '영겁, 오랜 시간' 제거 — '영원' 을 달리 말한 것뿐이다. 기존 GLOSS 의
 *               '사후 세계' 를 살렸다 (표제어 afterlife 가 유의어로 쓴다)
 *   erroneous   '잘못된' 에 '오류가 있는' 을 붙였다 — 유의어 mistaken 이 "잘못된, 틀린"
 *               이라 '틀린' 을 쓰면 겹친다
 *   evade       '피하다, 회피하다' → '회피하다, 교묘히 피하다'. 아래 8차 기록 참고
 *   even        '(수가) 같은, 짝수의' → 괄호를 풀었다
 *   evoke       '(기억, 감정을) 불러일으키다' → 괄호를 풀었다
 *   evident     '눈의 띄는' → 눈에 띄는  (오타. 위 목록에도 적혀 있다)
 *   evidence    '증거; 증언; 흔적' → 둘로 줄였다
 *   excess      '과잉, 초과량, 초과한' → 명사로 정리
 *   eventually  '결국' 하나만 — 유의어 finally 의 GLOSS 가 "마침내, 결국" 이라 겹친다
 *   exemplary   '칭찬할만한' → 칭찬할 만한  (띄어쓰기. 위 목록에도 적혀 있다)
 *   exchange    '교환; 교환하다' → 동사로 정리 (barter 가 유의어로 쓴다)
 *   execute     '처형하다; (계획을) 실행하다' → 괄호를 풀고 '실행하다' 를 앞으로
 *               (carry out 이 유의어로 쓰므로 '처형하다' 로 시작하면 엉뚱해진다)
 *   exempt      '면제되는; 면제하다' → 형용사로 정리
 *   exert       '(영향, 권력, 억압 등을) 이용하다, 행사하다' → 괄호를 풀고 '행사하다' 를 앞으로
 *   exhaust     '기진맥진하게 만들다; 배기가스; 배기관' → 동사로 정리. '고갈시키다' 를
 *               앞에 뒀다(deplete 가 유의어로 쓴다). '기진맥진' 은 exhausted 가 맡는다
 *   exhibition  '(감정, 기교 등의) 표현' 갈래 제거,  exclusively 셋 → 둘
 *   exile       '국외 추방, 망명자, 추방하다' → 동사로 정리 (banish·deport 가 유의어로 쓴다)
 *   experiment  '실험, 실험하다' → 명사로 정리
 *   expand      '커지다, 확장하다' → '커지다, 확대되다' (아래 11차 기록 참고)
 *   expect      '기대하다, 예상하다' → '기대하다, 당연히 여기다' (같은 이유)
 *   explicit    '분명한, 명쾌한' → 기존 GLOSS 의 '명시적인' 을 앞으로 (같은 이유)
 *   expel       원본 '내쫓다, 방출하다' 대신 기존 GLOSS "추방하다, 퇴학시키다" 를 썼다
 *   exploit     '착취하다, (부당하게) 이용하다' → 괄호를 풀고 동사로 정리
 *   explosive   '폭발성의, 폭발하기 쉬운; 폭발물, 폭약' → 형용사 한 뜻으로
 *   export      '수출(품); 수출하다, 내보내다' → 괄호를 풀고 동사로
 *   explore     '탐험하다, 탐사하다; 탐구하다' → 앞 둘이 같은 말이라 둘로
 *   exquisite   '정교한; 매우 아름다운, 고귀한' → '매우 아름다운' 을 앞으로
 *   extend      원본 '확대하다, 확장하다' 대신 기존 GLOSS "늘리다, 연장하다" 를 썼다
 *               (아래 12차 기록의 ★ 참고)
 *   extinct     '멸종된, 사라진, 사화산의' → 둘로
 *   extract     원본은 동사만 주는데 기존 GLOSS 의 '발췌하다' 를 둘째 뜻으로 남겼다
 *               (표제어 clipping 이 유의어로 쓴다 — 아래 13차 기록 참고)
 *   extrinsic   '외적인, 외부의' → '외적인, 외부에서 오는' (external 과 겹치지 않게)
 *   extrovert   위 목록에 적은 대로 명사 '외향적인 사람' 으로 바로잡았다
 *   extraterrestrial  '외계인, 우주인; 지구 밖 생물체의, 외계의' → 명사로 정리
 *
 * ── 작업 현황 — 완료 ──────────────────────────
 * 250단어 전량 (e-commerce ~ eyesore) — 13챕터. 20개씩 13차에 나눠 썼다.
 * 차수를 챕터 크기(20)에 맞췄다. 알파벳순으로 뒤에만 붙으므로 한 번 완성한
 * 챕터는 다음 차수가 건드리지 않는다 — 차수마다 챕터 하나가 확정됐다.
 *
 *   1차  20개  e-commerce ~ efficient      ← 완료
 *   2차  20개  effortless ~ elevated       ← 완료
 *   3차  20개  elevation ~ eminent         ← 완료
 *   4차  20개  emission ~ encourage        ← 완료
 *   5차  20개  encouragement ~ enlighten   ← 완료
 *   6차  20개  enormous ~ environment-friendly  ← 완료
 *   7차  20개  envision ~ erratic          ← 완료
 *   8차  20개  erroneous ~ evaluate        ← 완료
 *   9차  20개  evaporate ~ excess          ← 완료
 *  10차  20개  excessive ~ exhibition      ← 완료
 *  11차  20개  exhilarating ~ explicit     ← 완료
 *  12차  20개  explicitly ~ extinct        ← 완료
 *  13차  10개  extinction ~ eyesore        ← 완료
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
 * ── 8차 기록 ─────────────────────────────────
 * 사전에 이미 있던 낱말이 10개(7차와 같다). 영향받는 기존 표제어가 17개라
 * 베이스라인을 먼저 떠 두고 대조했다.
 *
 * 표제어가 되면서 사전에서 지운 항목 10개 (GLOSS·PRON 양쪽 20항목)
 *   gloss.js   erupt, escort, esteem, estimate, eternity, evaluate
 *   words.js   establish
 *   words-c.js escape, evade
 *   words-e.js established  ← 4차에서 emerging 의 반의어로 내가 넣은 항목이다
 *   pron.js    위 10개 전부
 *
 * 앞 차수에 넣은 GLOSS 가 표제어로 올라온 두 번째 사례다(7차 eradicate 에 이어).
 * 조사 스크립트에 '9~13차에 올 낱말이 이미 사전에 있나' 를 세는 칸을 넣어 두니
 * 30개가 나왔다 — 그 가운데 내가 넣은 것은 even(7차)·exemplify(3차) 둘이다.
 * 남은 차수에서 이 둘을 지워야 한다.
 *
 * ★ 뜻이 '글자까지' 겹치는 것을 미리 피한 사례 — evade
 *   원본 순서대로 "피하다, 회피하다" 로 두면 표제어 avoid·dodge 의 유의어 목록에
 *   있는 sidestep(GLOSS "피하다, 회피하다")과 글자까지 같아진다. 그래서 뜻을
 *   "회피하다, 교묘히 피하다" 로 잡았다. 같은 이유로 dodge 와 sidestep 을 evade 의
 *   유의어로 함께 쓰지 않았다 — 그 둘끼리도 뜻이 글자까지 같다(dodge 는 표제어
 *   "피하다, 회피하다", sidestep 은 GLOSS "피하다, 회피하다").
 *   1·2차에서는 audit 이 잡은 뒤에 고쳤지만, 이번에는 베이스라인 렌더를 먼저 떠
 *   두었기 때문에 쓰기 전에 알 수 있었다.
 *
 * 같은 이유로 뜻을 원본과 달리 잡은 것이 둘 더 있다
 *   eternal    perpetual 의 GLOSS 가 "영원한, 끊임없는" → 원본의 '끊임없는' 대신 '불멸의'
 *   erroneous  mistaken 의 GLOSS 가 "잘못된, 틀린"     → '틀린' 대신 '오류가 있는'
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   erupt      기존 뜻 "분출하다, 발발하다" 그대로 — 표제어 break out 이 유의어로 쓴다
 *   escort     기존 뜻 "호위하다, 수행하다"(동사) 그대로 — 표제어 accompany 가 쓴다
 *   esteem     동사로 정리 — 표제어 admire(동사)가 쓴다
 *   estimate   동사로 정리 — 표제어 calculate(동사)가 쓴다
 *   established 기존 뜻 "확립된, 기성의" 그대로 — 표제어 emerging 의 반의어다
 *   eternity   '사후 세계' 갈래 유지 — 표제어 afterlife 가 유의어로 쓴다
 *
 * 유의어에서 걸러낸 것
 *   escort 의 guard   → "경비원; 지키다"(명사가 앞)   ✗ → conduct safely
 *   escalate 의 grow  → "자라다; 증가하다"(자라다가 앞) ✗ → increase sharply
 *   evade 의 sidestep → dodge 와 뜻이 글자까지 같다    ✗ → shirk
 *
 * PRON 에 뒤늦게 채운 3개 — moral, property, racial. 7차의 outbreak 들과 같다.
 *
 * ── 9차 기록 ─────────────────────────────────
 * 사전에 이미 있던 낱말이 10개. 그 가운데 둘이 내가 앞 차수에 넣은 것이다 —
 * even(7차, equal 의 유의어)·everlasting(8차, eternal 의 유의어). 7차 eradicate,
 * 8차 established 에 이어 세 번째·네 번째다. 8차에 넣어 둔 '다음 차수에 올 낱말이
 * 이미 사전에 있나' 칸이 미리 알려 주었다.
 *
 * 표제어가 되면서 사전에서 지운 항목 10개 (GLOSS·PRON 양쪽 20항목)
 *   gloss.js   evident, evoke, examine, excavate, exception
 *   words-d.js evaporate, evolve, exaggerate
 *   words-e.js even(7차), everlasting(8차)   ← 내가 넣은 것
 *   pron.js    위 10개 전부
 *
 * ★ 뜻이 거의 같은 형용사·구를 레벨로 갈랐다 — 세 짝
 *   지금까지는 철자가 비슷한 짝(element/elements)을 갈랐지만, 이번에는 '뜻이 거의
 *   같아서' 갈라야 하는 경우가 나왔다. 한 문제의 보기로 같이 뜨면 어느 쪽도 답으로
 *   고를 수 없는 문제가 된다.
 *     even(C1) / equal(B1)          둘 다 형용사에 첫 뜻이 '같은'
 *     everlasting(C2) / eternal(B2) 둘 다 '영원한' 계열 형용사
 *     except(C1) / apart from(B1)   둘 다 phr 에 '~을 제외하고'
 *   레벨을 두 칸 벌려야 '레벨 ±1' 필터 밖으로 나간다. 한 칸(B2 ↔ B1)은 안 된다.
 *
 * except 는 전치사인데 pos 는 v/n/adj/adv/phr 뿐이라 phr 로 담았다 — 기존 표제어
 * apart from·due to·ahead of 와 같은 처리다. phr 이므로 ex 를 달지 않았다(5차 참고).
 *
 * syn 을 비운 1개 — evergreen. conifer·evergreen tree 는 표제어를 달리 말한 것뿐인
 * 식물 용어다 (7차의 equator·equatorial 과 같다).
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   even       '같은' 을 앞에 — 표제어 equal 의 유의어라 '짝수의' 로 시작하면 안 된다
 *   evoke      '불러일으키다' 를 앞에 — 표제어 conjure up·elicit(3차)이 유의어로 쓴다
 *   evident    '분명한' 을 앞에 — 표제어 apparent 가 유의어로 쓴다
 *   exception  '반례' 갈래 유지 — 표제어 counterexample 이 유의어로 쓴다
 *   exaggerate '과장하다' 를 앞에 — 표제어 downplay 의 반의어다
 *   examine    기존 뜻 "조사하다, 검사하다" 그대로 — analyze·audit 이 유의어로 쓴다
 *
 * 유의어에서 걸러낸 것
 *   evident 의 obvious → "분명한, 명백한". 표제어 apparent 의 뜻 "명백한, 분명한" 과
 *                        두 낱말이 순서만 다른 꼴이라 나란히 뜨면 어색하다 ✗ → clear-cut
 *   evolve 의 progress → "진보, 전진"(명사)        ✗ → unfold
 *   exaggerate 의 embellish → "꾸미다, 장식하다"   ✗ → magnify
 *   evident 의 plain   → "평범한; 명백한"(평범한이 앞) ✗ → unmistakable
 *
 * ⚠️ 덤으로 고쳐진 것 — 표제어 apparent 의 유의어 obvious 와 evident 가 둘 다
 *   "분명한, 명백한" 으로 뜻이 글자까지 같았다(9차 전부터). evident 를 표제어로
 *   올리며 '눈에 띄는' 오타를 바로잡자 그 중복이 사라졌다.
 *
 * PRON 에 뒤늦게 채운 3개 — go beyond, grounds, look into. 8차의 moral 들과 같다.
 *
 * ── 10차 기록 ────────────────────────────────
 * 사전에 이미 있던 낱말이 6개로 줄었다(9차 10개). exemplify 는 3차에서 embody 의
 * 유의어로 내가 넣은 것이다 — 앞 차수 항목이 표제어로 올라온 다섯 번째 사례다.
 *
 * 표제어가 되면서 사전에서 지운 항목 6개 (GLOSS·PRON 양쪽 12항목)
 *   gloss.js   exchange, execute, executive
 *   words.js   exclusion
 *   words-d.js exhaust
 *   words-e.js exemplify(3차)   ← 내가 넣은 것
 *   pron.js    위 6개 전부
 *
 * ★ 명사와 형용사를 한 뜻에 함께 담아야 했던 경우 — executive
 *   기존 GLOSS 는 "경영진, 관리직의" 로 명사와 형용사가 섞여 있다. 표제어 CEO(명사)는
 *   '경영진' 을, administrative(형용사)는 '관리직의' 를 필요로 해서 어느 한쪽을
 *   버리면 그쪽이 어긋난다. 그래서 섞인 뜻을 그대로 옮겼다.
 *   pos=n 인데 둘째 뜻이 형용사인 표제어는 이미 14개 있다 — characteristic(특성,
 *   특유의)·chemical(화학 물질, 화학의)·criminal(범죄자, 범죄의)·current(흐름,
 *   현재의) 가 같은 꼴이다. 새로 만든 예외가 아니라 기존 방식을 따른 것이다.
 *
 * ⚠️ 덤으로 고쳐진 것 — 표제어 barter 의 유의어 exchange 와 swap 이 둘 다
 *   "교환하다" 로 뜻이 글자까지 같았다(10차 전부터). exchange 를 표제어로 올리며
 *   '주고받다' 를 붙이자 그 중복이 사라졌다. 9차의 apparent(obvious/evident)와
 *   같은 종류의 덤이다 — 사전 항목을 표제어로 올릴 때 뜻을 두 개로 적으면
 *   이런 묵은 중복이 저절로 풀린다.
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   execute    '실행하다' 를 앞에 — 표제어 carry out 이 유의어로 쓴다
 *   exhaust    '고갈시키다' 를 앞에 — 표제어 deplete 가 유의어로 쓴다
 *   executive  기존 GLOSS 그대로 — 위 ★ 참고
 *   exemplify  '전형' 갈래를 앞에 — 표제어 embody(3차)가 유의어로 쓴다
 *   exclusion  '배제' 갈래 유지 — 표제어 access 의 반의어다
 *
 * 유의어에서 걸러낸 것
 *   exhibition 의 display → 표제어인데 품사가 동사("전시하다, 드러내다") ✗ → showcase
 *   exert 의 apply        → 표제어인데 "지원하다, 적용하다" 로 '지원하다' 가 앞 ✗ → wield
 *   exchange 의 switch    → "전환하다; 스위치" + 발음도 없다      ✗ → interchange
 *   executive 의 director → "감독, 지도자"                        ✗ → senior official
 *   exemplary 의 praiseworthy → "칭찬할 만한". 이 표제어의 둘째 뜻과 글자까지 같아
 *                               화면에 같은 말이 겹친다           ✗ → first-rate
 *
 * 발음은 기존 표기에서 찾아 맞췄다
 *   exhibition  기존 표제어 art exhibition("아트 엑시비션")에 맞춰 '엑시비션' (엑서비션 ✗)
 *   administrator  administration("어드미니스트레이션")에 맞췄다
 *   manager        managerial("매너지리얼")에 맞췄다
 *   art exhibition 은 pos 가 phr 이라 이 명사 표제어와 오답 후보로 겹치지 않는다.
 *
 * PRON 에 뒤늦게 채운 1개 — moderate. 9차의 grounds 들과 같다.
 *
 * ── 11차 기록 ────────────────────────────────
 * 사전에 이미 있던 낱말이 9개. 영향받는 기존 표제어가 16개라 베이스라인을 먼저
 * 떠 두고 대조했다. 이번에는 내가 앞 차수에 넣은 항목이 하나도 없었다.
 *
 * 표제어가 되면서 사전에서 지운 항목 9개 (GLOSS·PRON 양쪽 18항목)
 *   gloss.js   exile, expect, expel, expenditure, explain
 *   words.js   expansion, explicit
 *   words-c.js expand, expert
 *   pron.js    위 9개 전부
 *
 * ★ 이 구간은 뜻이 겹치는 짝이 유난히 많다 — 다섯 짝을 손봤다
 *   레벨을 두 칸 벌려 해결한 것 (9차에서 쓴 방법)
 *     expenditure(C1) / expense(B1)   둘 다 돈에 관한 명사.  뜻도 '지출/소비량' 과
 *                                     '비용/돈' 으로 갈랐다
 *     expert(B1) / expertise(C1)      둘 다 '전문' 명사.  '사람' 과 '지식' 으로 갈린다
 *   레벨로 풀 수 없어 뜻으로만 가른 것
 *     expand(B2) / enlarge(B2, 6차)   ⚠️ B2 와 두 칸 떨어진 레벨은 C2 뿐이라
 *                                     expand 에 맞지 않는다. 자동사(커지다, 확대되다) /
 *                                     타동사(확대하다, 확장하다)로 뜻을 갈랐다
 *     expect(B1) / anticipate(B2)     anticipate 의 뜻이 "기대하다, 예상하다" 라서
 *                                     원본대로 두면 글자까지 같아진다. 둘째 뜻을
 *                                     '당연히 여기다' 로 바꿨다(첫 뜻은 anticipate 가
 *                                     이 낱말을 유의어로 쓰므로 그대로 뒀다)
 *     explicit / evident(9차)·apparent  원본의 '분명한' 을 앞에 쓰면 셋이 뒤섞인다.
 *                                     기존 GLOSS 의 '명시적인' 을 앞으로 돌렸다
 *   ⇒ 레벨 간격은 B1·B2·C1·C2 넷뿐이라, B2 짝은 C2 로만 벌릴 수 있다. B2 에 있는
 *      기본 낱말끼리 겹치면 레벨로는 풀 수 없고 뜻으로 갈라야 한다.
 *
 * 추방 낱말이 몰려 있다 — exile(C2)·expel(B2) 이 들어오면서 기존 banish(C1)·
 * deport(C1)·eject(B2) 와 다섯 낱말이 한 무리가 되었다. banish 와 deport 는 11차
 * 전부터 서로 이웃 레벨이었으므로 새로 만든 문제는 아니다. 뜻을 '추방하다, 퇴학시키다'
 * (expel) / '추방하다, 망명시키다'(exile) 로 갈라 글자까지 겹치지 않게 했다.
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   expel       기존 뜻 "추방하다, 퇴학시키다" — banish·deport·eject 셋이 유의어로 쓴다
 *   expenditure 기존 뜻 "지출, 소비량" — 표제어 consumption 이 유의어로 쓴다
 *   expect      첫 뜻 '기대하다' 유지 — 표제어 anticipate 가 유의어로 쓴다
 *   explicit    첫 뜻 '명시적인' 유지 — 표제어 ambiguous·equivocal(7차)의 반의어다
 *   exile       동사로 정리 — banish·deport(둘 다 동사)가 유의어로 쓴다
 *
 * 유의어에서 걸러낸 것
 *   exhort 의 urge     → "충동; 재촉하다"(명사 갈래가 앞)  ✗ → urge strongly
 *   expense 의 charge  → 표제어인데 품사가 동사            ✗ → payment
 *   expert 의 authority → 표제어 "권한, 당국"              ✗ → master
 *
 * 발음은 기존 표기에서 찾아 맞췄다
 *   exist·existence  coexist("코이그지스트")·come into existence("컴 인투 이그지스턴스")
 *   expense          at the expense of("앳 디 익스펜스 오브") — 이 구는 pos 가 phr 이라
 *                    명사 표제어 expense 와 오답 후보로 겹치지 않는다
 *   experiment       experimental("익스페러멘털"),  anticipation → anticipate 에 맞췄다
 *
 * PRON 에 뒤늦게 채운 2개 — growth, swell. 10차의 moderate 와 같다.
 *
 * ── 12차 기록 ────────────────────────────────
 * 사전에 이미 있던 낱말이 6개. explosion 은 8차에서 eruption 의 유의어로 내가 넣은
 * 것이다 — 앞 차수 항목이 표제어로 올라온 여섯 번째 사례다.
 *
 * 표제어가 되면서 사전에서 지운 항목 6개 (GLOSS·PRON 양쪽 12항목)
 *   gloss.js   exploit, extensive, extent
 *   words-c.js exposure, extend
 *   words-e.js explosion(8차)   ← 내가 넣은 것
 *   pron.js    위 6개 전부
 *
 * ★ 뜻이 겹칠 자리를 미리 뒤져서 extend 를 구했다
 *   조사 스크립트에 '이 뜻 조각을 쓰는 기존 표제어' 를 뽑는 칸을 새로 넣었다.
 *   '확대' 로 뒤지니 amplify·enlarge·escalate·expand·expansion 다섯이 나왔다.
 *   원본대로 extend 를 '확대하다, 확장하다' 로 적으면 표제어 enlarge(6차, B2)의 뜻과
 *   글자까지 같아진다 — 빈자리가 없다. 기존 GLOSS "늘리다, 연장하다" 를 그대로 쓰니
 *   '연장' 쪽으로 갈라지고 표제어 curtail(반의어)도 함께 지켜졌다.
 *   ⇒ 11차까지는 베이스라인 렌더로 '이미 쓰는 낱말' 을 확인했는데, 뜻 조각으로
 *      거꾸로 뒤지면 '앞으로 겹칠 자리' 까지 미리 보인다. 13차에도 쓴다.
 *
 *   같은 방법으로 미리 피한 것이 셋 더 있다
 *     extension  '연장, 확장' — expansion(B2 "팽창, 확대")과 '확대' 가 겹치지 않게
 *     extent     레벨을 C1 로 — degree(B1 "정도, 학위")와 '정도' 가 겹친다
 *     exquisite  '매우 아름다운' 을 앞으로 — elaborate(C1 "공들인, 정교한")와 겹친다
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것 — 이번엔 다섯 낱말 모두 기존 GLOSS 를 썼다
 *   explosion  "폭발, 파열"      — 표제어 eruption 이 유의어로 쓴다
 *   exposure   "노출, 폭로"      — 표제어 camouflage 의 반의어다
 *   extend     "늘리다, 연장하다" — 표제어 curtail 의 반의어다 (위 ★ 참고)
 *   extensive  "광범위한, 방대한" — 표제어 comprehensive 가 유의어로 쓴다
 *   extent     "범위, 정도"      — breadth·degree·dimension 셋이 유의어로 쓴다
 *
 * syn 을 비운 1개 — externalize. 심리학 용어라 바꿔 쓸 한 낱말이 없다.
 *
 * 유의어에서 걸러낸 것
 *   exploit 의 abuse   → 표제어인데 품사가 명사("학대, 남용")  ✗ → use unfairly
 *   exploit 의 misuse  → "남용, 오용"(명사)                   ✗ → squeeze profit from
 *   (둘 다 명사 표제어 exploitation 쪽에서는 그대로 쓸 수 있었다)
 *
 * 발음은 기존 표기에서 찾아 맞췄다
 *   expose     be exposed to("비 익스포즈드 투")에 맞췄다
 *   extension  by extension("바이 익스텐션")에 맞췄다. 이 구는 pos 가 phr 이라
 *              명사 표제어 extension 과 오답 후보로 겹치지 않는다
 *   search     researcher("리서처"),  broad  broaden("브로든")에 맞췄다
 *
 * PRON 에 뒤늦게 채운 2개 — search, survey. 11차의 growth 들과 같다.
 *
 * ── 13차 기록 (마지막) ────────────────────────
 * 사전에 이미 있던 낱말이 2개로 가장 적었다. extraordinary 는 9차에서 exceptional 의
 * 유의어로 내가 넣은 것이다 — 앞 차수 항목이 표제어로 올라온 일곱 번째이자 마지막 사례다.
 *
 * 표제어가 되면서 사전에서 지운 항목 2개
 *   gloss.js   extract
 *   words-e.js extraordinary(9차)   ← 내가 넣은 것
 *   pron.js    위 2개 전부
 *
 * ★ extract — 뜻을 반씩 가져와 기존 참조를 지켰다
 *   원본은 '뽑다, 뽑아내다, 추출하다' 로 동사만 주는데, 기존 GLOSS 는 "발췌하다;
 *   추출물" 이었고 표제어 clipping(명사 "오려낸 기사, 스크랩")이 이 낱말을 유의어로
 *   쓴다. 원본만 따르면 clipping 쪽에서 '발췌' 갈래가 사라진다.
 *   그래서 원본의 '추출하다' 를 첫 뜻으로, 기존 GLOSS 의 '발췌하다' 를 둘째 뜻으로
 *   남겼다 — 품사는 동사이므로 clipping 쪽은 어미만 바뀌고 뜻은 지켜진다.
 *   12차 exploit(adventure 의 '모험' 갈래를 못 지켰다)과 대비되는 경우다. 원본과
 *   기존 GLOSS 가 다를 때, 두 쪽에서 한 갈래씩 가져올 수 있으면 그게 가장 낫다.
 *
 * 뜻 조각 조사로 미리 피한 것 (12차에서 만든 방법)
 *   extrinsic  '외부의' 를 '외부에서 오는' 으로, 레벨도 C2 로 — 표제어 external
 *              (12차, B2 "외부의, 외면의")과 두 칸 벌렸다
 *   extraordinary  원본의 '놀라운' 을 쓰지 않았다 — amazing(B1 "놀라운, 굉장한")·
 *              breathtaking(B2 "숨이 멎을 듯한, 놀라운")과 뒤섞인다. 9차에 내가
 *              넣은 "비범한, 대단한" 을 그대로 썼다(exceptional 도 함께 지켜졌다)
 *   extinction 원본의 '소멸' 대신 '절멸' — dissipate(C2 "소멸되다, 낭비하다")를 피했다
 *              (품사가 달라 급하진 않지만 굳이 겹칠 이유가 없다)
 *
 * syn 을 비운 2개 — extracurricular·extraterrestrial. 학교 용어와 우주 용어인데
 * 후보가 모두 표제어를 길게 풀어 쓴 것뿐이다. alien 은 표제어인데 품사가 형용사
 * ("이질적인, 생소한")여서 extraterrestrial(명사)에 쓸 수 없었다.
 *
 * 유의어에서 걸러낸 것
 *   extract 의 pull out → "물러나다, 손을 떼다"        ✗ → distill
 *   extraterrestrial 의 alien → 표제어인데 품사가 형용사 ✗ → syn 을 비웠다
 *
 * 발음은 기존 표기에서 찾아 맞췄다
 *   extraterrestrial  기존 PRON 의 terrestrial("터레스트리얼")
 *   extracurricular   표제어 curriculum("커리큘럼")
 *   eyesore           표제어 black eye("블랙 아이")
 *   non-inherent      be inherent in("비 인히어런트 인") — '인히런트' 가 아니다
 *
 * PRON 에 뒤늦게 채운 1개 — ignite. 12차의 search 들과 같다.
 *
 * ── E 세트를 마치며 ───────────────────────────
 * 250단어 / 13챕터. 13차수 내내 짝 맞추기 지문 2c5b7afb8552 가 한 번도 바뀌지
 * 않았다 — A·B·C 세트의 기존 문제는 하나도 변하지 않았다는 뜻이다.
 *
 * 차수마다 되풀이된 일 세 가지를 적어 둔다. F 세트에서도 그대로 겪을 것이다.
 *
 *  1) 사전에 이미 있는 낱말을 표제어로 올리는 일 — 13차수 합계 92개였다
 *     (차수별 수는 각 차수 기록에 적어 두었다).
 *     기존 표제어가 그 낱말을 유의어·반의어로 쓰고 있으면 뜻을 함부로 못 바꾼다.
 *     작업 전에 영향받는 표제어의 렌더를 먼저 떠 두고, 작업 후 하나씩 대조하는
 *     방법이 가장 확실했다(4차부터 썼다).
 *
 *  2) 앞 차수에서 내가 넣은 GLOSS 가 뒤 차수에 표제어가 되는 일 — 7번 있었다.
 *     eradicate(7차)·established(8차)·even·everlasting(9차)·exemplify(10차)·
 *     explosion(12차)·extraordinary(13차). 조사 스크립트가 words-e.js 까지 훑고,
 *     '다음 차수에 올 낱말이 이미 사전에 있나' 를 세도록 해 두면 미리 보인다.
 *
 *  3) 뜻이 겹치는 짝을 갈라 놓는 일 — 레벨을 두 칸 벌리는 것이 정석이다
 *     (element/elements 이후 계속 썼다). 다만 레벨은 B1·B2·C1·C2 넷뿐이라
 *     B2 에 있는 짝은 C2 로만 벌릴 수 있다. 기본 낱말끼리 겹치면 레벨로는 풀 수
 *     없고 뜻으로 갈라야 한다(11차 expand/enlarge). 12차에 만든 '뜻 조각으로
 *     기존 표제어를 거꾸로 뒤지기' 가 쓰기 전에 알아내는 가장 빠른 방법이었다.
 *
 * 덤으로 고쳐진 묵은 중복 2건
 *   표제어 apparent 의 유의어 obvious 와 evident 가 둘 다 "분명한, 명백한" 이었다 (9차)
 *   표제어 barter 의 유의어 exchange 와 swap 이 둘 다 "교환하다" 였다        (10차)
 * 사전 항목은 뜻이 하나뿐인 경우가 많은데, 표제어로 올리면서 뜻을 둘로 적으면
 * 이런 중복이 저절로 사라진다. 일부러 찾아 고친 것이 아니라 덤으로 얻은 것이다.
 *
 * 품사가 어긋난 채로 남아 있던 다섯 곳은 E 세트를 마친 뒤 한 번에 고쳤다 —
 * 아래 '품사가 어긋난 유의어 5곳' 절을 보라.
 *
 * ── 품사가 어긋난 유의어 5곳 — E 세트를 마친 뒤 정리했다 ──
 * 차수를 지나며 '표제어의 품사와 유의어의 품사가 어긋난' 자리를 다섯 찾아 두었다가,
 * E 세트 250단어를 다 넣은 뒤 한 번에 고쳤다. 차수 중에 고치지 않은 이유는 이 다섯이
 * 모두 A~D 세트의 표제어이고, 남의 세트를 건드리면 그 세트의 기존 출제가 변해서
 * '기존 문제 무변' 을 확인해 온 근거가 흔들리기 때문이다.
 *
 * 무엇이 문제였나 — drain 이 가장 알기 쉽다
 *   drain 은 동사('빼내다')인데 유의어 자리에 empty 가 형용사 뜻("텅 빈, 공허한")으로
 *   떴다. "물을 빼내다" 자리에 "물을 텅 빈"을 넣을 수 없으니 바꿔 쓸 수 없는 말이다.
 *   '아닌 것 고르기'는 "바꿔 쓸 수 없는 것"을 고르는 문제인데, 정답(반의어) 말고도
 *   고를 만한 것이 하나 더 보이는 셈이었다.
 *   영어 empty 자체는 형용사·동사 두 쓰임이 다 있다. 이 앱이 한 낱말에 뜻을 하나만
 *   달 수 있어서 생긴 일이다.
 *
 * 고친 방법 — 표제어마다 어긋난 유의어 하나만 품사가 맞는 낱말로 갈아끼웠다
 *   words-d.js  drain(v)       empty      → empty out ("비우다")
 *   words-b.js  beguile(v)     charm      → captivate ("마음을 사로잡다", 이미 있던 항목)
 *   words-c.js  counterpart(n) equivalent → opposite number ("대응하는 상대")
 *   words-c.js  companion(n)   close      → close friend ("가까운 친구")   ※ escort 자리
 *   words.js    adventure(n)   exploit    → risky undertaking ("위험을 무릅쓴 일")
 *   빼낸 다섯(empty·charm·equivalent·escort·exploit)은 그대로 표제어로 살아 있다 —
 *   그 낱말이 사라진 것이 아니라, 이 다섯 자리에서만 쓰지 않는 것이다.
 *   새로 넣은 낱말 넷은 gloss.js(알파벳 순)와 pron.js 에 등록했다. captivate 는
 *   4차에 이미 넣어 둔 항목이라 새로 만들 것이 없었다.
 *
 * 확인한 것
 *   짝 맞추기 지문 2c5b7afb8552 가 그대로였다 — 지문은 meanings 만 쓰고 syn 은 보지
 *   않기 때문이다. 다섯 표제어의 '아닌 것 고르기'는 의도대로 바뀌었고(그게 목적이다),
 *   나머지 모드와 다른 표제어는 하나도 변하지 않았다.
 *   다섯 다 syn 이 여전히 3개라 출제도 정상이다.
 *
 * ⚠️ 같은 꼴이 하나 더 남아 있다 — counterpart(명사) 의 유의어 match
 *   GLOSS 가 "일치하다; 경기" 로 동사 뜻이 앞에 있다. gloss.js 헤더에 적혀 있듯
 *   match 는 표제어 correspond to(동사구)를 위해 '일치하다' 를 앞에 쓴 항목이라,
 *   명사 표제어 counterpart 쪽에서는 어긋난다. 이번 작업은 '다섯 곳' 으로 합의한
 *   범위여서 건드리지 않았다. 고치려면 counterpart 의 match 를 명사구로 바꾸면 된다.
 *
 * 반대로 차수 작업 중에 저절로 나아진 것도 있었다
 *   encounter  기존 GLOSS "마주치다, 만남"의 명사 갈래가 표제어 come across(동사)와
 *              어긋났는데, 4차에 동사로 정리하면서 사라졌다
 *   endeavor   기존 GLOSS "노력, 시도"(명사)가 표제어 attempt(동사)와 어긋났는데,
 *              5차에 동사로 정리하면서 사라졌다
 *   ⇒ 원본이 동사·명사를 섞어 둔 낱말을 표제어로 올리면 pos 를 하나로 정해야 하므로
 *      이런 어긋남이 저절로 고쳐진다. 반대로 12차 exploit 처럼 새로 생기기도 한다.
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
  /* ★ syn 의 "set in" 을 "bed into place" 로 바꿨다. 사전이 set in 의 뜻을
     '끼워 넣다, 박아 넣다' 로 — 이 표제어의 뜻을 그대로 베껴 — 적어 두고 있었다.
     set in 의 실제 뜻은 '시작되다, 자리 잡다' 여서 S 세트에서 그렇게 세웠다. */
  { word:"embed", pron:"임베드", pos:"v", level:"C1", meanings:["끼워 넣다","박아 넣다"],
    syn:["insert","implant","bed into place"],
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
     낫다(counterpart 의 어긋남은 7차 전에도 있었다. E 세트를 마친 뒤 counterpart 쪽
     syn 을 opposite number 로 바꿔 정리했다 — 아래 '품사가 어긋난 유의어 5곳' 참고). */
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
    ex:[{ s:"The old clock keeps {{}} time.", f:"erratic", ko:"그 낡은 시계는 일정하지 않게 시간을 가리킨다." }] },

  /* ── 8차: erroneous ~ evaluate ───────────────────── */

  /* 뜻을 '오류가 있는' 으로 잡았다 — 유의어 mistaken 의 GLOSS 가 "잘못된, 틀린"
     이어서 '틀린' 을 쓰면 표제어와 선택지가 같은 말을 한다. */
  { word:"erroneous", pron:"이로우니어스", pos:"adj", level:"C1", meanings:["잘못된","오류가 있는"],
    syn:["incorrect","mistaken","false"], ant:["correct"],
    ex:[{ s:"The report drew an {{}} conclusion from good data.", f:"erroneous", ko:"그 보고서는 좋은 자료에서 잘못된 결론을 끌어냈다." }] },

  /* 원본 '(감정 등이) 터져 나오다; 분출하다, 분화하다' 에서 괄호를 풀고, 기존 GLOSS
     "분출하다, 발발하다" 를 그대로 옮겼다 — 표제어 break out 이 유의어로 쓴다. */
  { word:"erupt", pron:"이럽트", pos:"v", level:"B2", meanings:["분출하다","발발하다"],
    syn:["break out","burst forth","blow up"],
    ex:[{ s:"The volcano could {{}} again within months.", f:"erupt", ko:"그 화산은 몇 달 안에 다시 분출할 수 있다." }] },

  /* 원본 '(화산의) 폭발, 분화' 의 괄호를 풀었다. */
  { word:"eruption", pron:"이럽션", pos:"n", level:"B2", meanings:["폭발","분화"],
    syn:["outburst","explosion","blast"],
    ex:[{ s:"Ash from the {{}} grounded flights for a week.", f:"eruption", ko:"그 폭발에서 나온 화산재가 일주일간 항공편을 멈춰 세웠다." }] },

  { word:"escalate", pron:"에스컬레이트", pos:"v", level:"C1", meanings:["확대되다","증가시키다"],
    syn:["intensify","step up","increase sharply"],
    ex:[{ s:"A small dispute can {{}} into a strike.", f:"escalate", ko:"작은 분쟁이 파업으로 확대될 수 있다." }] },

  { word:"escape", pron:"이스케이프", pos:"v", level:"B1", meanings:["탈출하다","벗어나다"],
    syn:["break free","get away","flee"], ant:["be trapped"],
    ex:[{ s:"Two of the birds managed to {{}} through a gap.", f:"escape", ko:"새 두 마리가 틈으로 탈출하는 데 성공했다." }] },

  /* 기존 GLOSS "호위하다, 수행하다"(동사)를 그대로 뒀다 — 표제어 accompany(동사)가
     유의어로 쓴다. 유의어로 guard 는 쓰지 않았다(GLOSS 가 "경비원; 지키다" 로 명사가 앞). */
  { word:"escort", pron:"이스코트", pos:"v", level:"B2", meanings:["호위하다","수행하다"],
    syn:["accompany","go with","conduct safely"],
    ex:[{ s:"Two officers will {{}} the visitors to the gate.", f:"escort", ko:"경관 두 명이 방문객을 문까지 호위할 것이다." }] },

  { word:"essential", pron:"이센셜", pos:"adj", level:"B1", meanings:["필수적인","극히 중요한"],
    syn:["indispensable","vital","crucial"], ant:["optional"],
    ex:[{ s:"Clean water is {{}} to public health.", f:"essential", ko:"깨끗한 물은 공중 보건에 필수적이다." }] },

  /* 원본은 '확립하다; (법률, 제도 등을) 제정하다; 설립하다' 로 갈래가 셋이다 — 괄호를
     풀고 둘로 줄였다. 표제어 abolish(반의어)·determine(유의어)이 이 낱말을 쓴다. */
  { word:"establish", pron:"이스태블리시", pos:"v", level:"B1", meanings:["확립하다","설립하다"],
    syn:["found","set up","institute"], ant:["abolish"],
    ex:[{ s:"The town hopes to {{}} a museum in the old mill.", f:"establish", ko:"그 마을은 낡은 제분소에 박물관을 설립하기를 바란다." }] },

  /* 4차에서 emerging 의 반의어로 words-e.js 에 넣은 GLOSS 항목이 표제어로 올라온다 —
     7차의 eradicate 와 같은 경우다. 그 항목을 지우고 뜻 "확립된, 기성의" 를 그대로
     옮겨 emerging 쪽이 변하지 않게 했다. 원본의 갈래 넷(인정받는·확실히 자리 잡은·
     저명한·존경받는)은 recognized·long-standing 을 유의어로 넣어 살렸다. */
  { word:"established", pron:"이스태블리시트", pos:"adj", level:"B2", meanings:["확립된","기성의"],
    syn:["long-standing","recognized","well-founded"], ant:["emerging"],
    ex:[{ s:"She left an {{}} firm to start her own.", f:"established", ko:"그녀는 자리 잡은 회사를 떠나 자기 사업을 시작했다." }] },

  { word:"estate", pron:"이스테이트", pos:"n", level:"B2", meanings:["소유지","재산"],
    syn:["property","land holding","possessions"],
    ex:[{ s:"The family sold the {{}} after the war.", f:"estate", ko:"그 가족은 전쟁 후에 소유지를 팔았다." }] },

  /* 원본은 '존경, 경의; 존경하다' 로 명사가 앞이지만 동사로 정했다 — 표제어
     admire(동사)가 이 낱말을 유의어로 쓴다. */
  { word:"esteem", pron:"이스팀", pos:"v", level:"C1", meanings:["존경하다","높이 평가하다"],
    syn:["admire","look up to","hold in high regard"], ant:["despise"],
    ex:[{ s:"Colleagues {{}} her for her patience.", f:"esteem", ko:"동료들은 그녀의 인내심 때문에 그녀를 존경한다." }] },

  /* 원본은 '견적, 추정; 추정하다, 추산하다' 로 명사와 동사가 섞여 있다 — 동사로
     정했다. 표제어 calculate(동사)가 유의어로 쓴다. */
  { word:"estimate", pron:"에스터메이트", pos:"v", level:"B1", meanings:["추정하다","추산하다"],
    syn:["calculate","reckon","work out"],
    ex:[{ s:"Surveyors {{}} the repair at twice that figure.", f:"estimate", ko:"조사관들은 수리비를 그 금액의 두 배로 추정한다." }] },

  /* 뜻을 '불멸의' 로 잡았다 — 유의어 perpetual 의 GLOSS 가 "영원한, 끊임없는" 이라
     원본의 '끊임없는' 을 쓰면 표제어와 선택지가 같은 말을 한다. */
  { word:"eternal", pron:"이터널", pos:"adj", level:"B2", meanings:["영원한","불멸의"],
    syn:["everlasting","perpetual","undying"], ant:["temporary"],
    ex:[{ s:"The poem treats love as an {{}} force.", f:"eternal", ko:"그 시는 사랑을 영원한 힘으로 다룬다." }] },

  /* 기존 GLOSS "영원; 사후 세계" 를 그대로 뒀다 — 표제어 afterlife 가 유의어로 쓰므로
     '사후 세계' 갈래가 살아 있어야 한다. 원본의 '영겁, 오랜 시간' 은 '영원' 을 달리
     말한 것뿐이라 버렸다. */
  { word:"eternity", pron:"이터너티", pos:"n", level:"C1", meanings:["영원","사후 세계"],
    syn:["afterlife","hereafter","endless time"],
    ex:[{ s:"The wait felt like an {{}}.", f:"eternity", ko:"그 기다림은 영원처럼 느껴졌다." }] },

  { word:"ethical", pron:"에시컬", pos:"adj", level:"B2", meanings:["윤리적인","도덕적인"],
    syn:["moral","principled","upright"], ant:["unethical"],
    ex:[{ s:"The board raised {{}} objections to the plan.", f:"ethical", ko:"이사회는 그 계획에 윤리적인 이의를 제기했다." }] },

  { word:"ethics", pron:"에식스", pos:"n", level:"C1", meanings:["윤리학","윤리"],
    syn:["moral principles","moral philosophy","code of conduct"],
    ex:[{ s:"She teaches medical {{}} to first-year students.", f:"ethics", ko:"그녀는 1학년생에게 의료 윤리학을 가르친다." }] },

  { word:"ethnic", pron:"에스닉", pos:"adj", level:"B2", meanings:["민족의","인종의"],
    syn:["racial","cultural","tribal"],
    ex:[{ s:"The city celebrates its many {{}} traditions.", f:"ethnic", ko:"그 도시는 여러 민족의 전통을 기린다." }] },

  { word:"evacuate", pron:"이배큐에이트", pos:"v", level:"C1", meanings:["대피시키다","철수시키다"],
    syn:["clear out","move out","remove to safety"],
    ex:[{ s:"Crews had to {{}} the village before dawn.", f:"evacuate", ko:"대원들은 새벽 전에 그 마을을 대피시켜야 했다." }] },

  /* 뜻을 '교묘히 피하다' 로 잡았다 — 원본 순서대로 "피하다, 회피하다" 로 두면
     표제어 avoid·dodge 의 유의어 목록에 있는 sidestep(GLOSS "피하다, 회피하다")과
     글자까지 같아져 피드백 두 줄이 같아진다. 그래서 dodge 와 sidestep 을 유의어로
     같이 쓰지도 않았다(그 둘도 서로 뜻이 글자까지 같다). */
  { word:"evade", pron:"이베이드", pos:"v", level:"C1", meanings:["회피하다","교묘히 피하다"],
    syn:["avoid","dodge","shirk"], ant:["confront"],
    ex:[{ s:"He tried to {{}} the question twice.", f:"evade", ko:"그는 그 질문을 두 번 회피하려 했다." }] },

  { word:"evaluate", pron:"이밸류에이트", pos:"v", level:"B1", meanings:["평가하다"],
    syn:["appraise","assess","judge"],
    ex:[{ s:"Teachers {{}} the projects on four criteria.", f:"evaluate", ko:"교사들은 네 가지 기준으로 그 과제를 평가한다." }] },

  /* ── 9차: evaporate ~ excess ─────────────────────── */

  { word:"evaporate", pron:"이배퍼레이트", pos:"v", level:"B2", meanings:["증발하다","기화하다"],
    syn:["vaporize","dry up","disappear"],
    ex:[{ s:"Shallow puddles {{}} within an hour on hot stone.", f:"evaporate", ko:"얕은 물웅덩이는 뜨거운 돌 위에서 한 시간 안에 증발한다." }] },

  { word:"evasion", pron:"이베이전", pos:"n", level:"C1", meanings:["회피","탈세"],
    syn:["avoidance","dodging","tax dodging"],
    ex:[{ s:"The audit uncovered years of tax {{}}.", f:"evasion", ko:"그 감사는 수년간의 탈세를 밝혀냈다." }] },

  /* 원본 '(수가) 같은, 짝수의' 의 괄호를 풀었다. 7차에서 equal 의 유의어로 넣은
     GLOSS 항목이 표제어로 올라온다 — 그 항목을 지웠다.
     레벨을 C1 로 뒀다. equal(B1)과 둘 다 형용사에 첫 뜻이 '같은' 이라서, 레벨이
     붙어 있으면 한 문제의 보기로 같이 떠서 답을 고를 수 없게 된다. '같은' 을 앞에
     둔 것은 equal 쪽 피드백이 '짝수의' 로 시작하면 안 되기 때문이다. */
  { word:"even", pron:"이븐", pos:"adj", level:"C1", meanings:["같은","짝수의"],
    syn:["equal","identical","the same"],
    ex:[{ s:"Split the bill into two {{}} shares.", f:"even", ko:"계산서를 똑같은 두 몫으로 나누세요." }] },

  /* 뜻을 '결국' 하나만 뒀다 — 유의어 finally 의 GLOSS 가 "마침내, 결국" 이라
     '마침내' 를 같이 쓰면 표제어와 선택지가 같은 말을 한다. */
  { word:"eventually", pron:"이벤추얼리", pos:"adv", level:"B1", meanings:["결국"],
    syn:["in the end","finally","ultimately"],
    ex:[{ s:"The argument {{}} settled itself.", f:"eventually", ko:"그 논쟁은 결국 저절로 가라앉았다." }] },

  /* syn 을 비웠다 — 식물 용어다. conifer·evergreen tree 는 표제어를 달리 말한
     것뿐이다 (7차의 equator·equatorial 과 같은 경우). */
  { word:"evergreen", pron:"에버그린", pos:"n", level:"B2", meanings:["상록수"],
    ex:[{ s:"A row of {{}} shields the house from wind.", f:"evergreen", ko:"상록수 한 줄이 그 집을 바람에서 막아 준다." }] },

  /* 8차에서 eternal 의 유의어로 넣은 GLOSS 항목이 표제어로 올라온다 — 지웠다.
     레벨을 C2 로 뒀다. eternal(B2)과 뜻이 거의 같은 형용사라서, 레벨이 가까우면
     두 낱말이 한 문제의 보기로 같이 떠 답을 고를 수 없게 된다. */
  { word:"everlasting", pron:"에버래스팅", pos:"adj", level:"C2", meanings:["영원히 계속되는"],
    syn:["eternal","perpetual","undying"],
    ex:[{ s:"He wrote of an {{}} bond between the two families.", f:"everlasting", ko:"그는 두 가문 사이의 영원히 계속되는 유대를 적었다." }] },

  /* 원본은 '증거; 증언; 흔적' 으로 갈래가 셋이다 — 둘로 줄였다. */
  { word:"evidence", pron:"에비던스", pos:"n", level:"B1", meanings:["증거","증언"],
    syn:["proof","testimony","grounds"],
    ex:[{ s:"The police found no {{}} of a break-in.", f:"evidence", ko:"경찰은 침입의 증거를 찾지 못했다." }] },

  /* 원본의 '눈의 띄는' 은 오타다 — '눈에 띄는' 으로 바로잡았다(헤더에 적어 둔 대로).
     유의어로 obvious 를 쓰지 않았다: GLOSS 가 "분명한, 명백한" 인데 표제어 apparent 의
     뜻 "명백한, 분명한" 과 두 낱말이 순서만 다른 꼴이라 화면에 나란히 뜨면 어색하다. */
  { word:"evident", pron:"에비던트", pos:"adj", level:"B2", meanings:["분명한","눈에 띄는"],
    syn:["apparent","unmistakable","clear-cut"],
    ex:[{ s:"Her relief was {{}} to everyone in the room.", f:"evident", ko:"그녀의 안도는 방 안 모두에게 분명했다." }] },

  /* 원본 '(기억, 감정을) 불러일으키다' 의 괄호를 풀었다. 기존 GLOSS 의 '불러일으키다'
     를 앞에 그대로 뒀다 — 표제어 conjure up 과 elicit(3차)이 유의어로 쓴다. */
  { word:"evoke", pron:"이보크", pos:"v", level:"C1", meanings:["불러일으키다","떠올리게 하다"],
    syn:["conjure up","bring to mind","arouse"],
    ex:[{ s:"That smell can {{}} a whole childhood.", f:"evoke", ko:"그 냄새는 어린 시절 전체를 불러일으킬 수 있다." }] },

  { word:"evolution", pron:"에벌루션", pos:"n", level:"B2", meanings:["진화","발전"],
    syn:["development","progression","gradual change"],
    ex:[{ s:"The book traces the {{}} of written language.", f:"evolution", ko:"그 책은 문자 언어의 진화를 추적한다." }] },

  /* 유의어로 progress 를 쓰지 않았다 — GLOSS 가 "진보, 전진"(명사)이다. */
  { word:"evolve", pron:"이발브", pos:"v", level:"B2", meanings:["발달하다","진화하다"],
    syn:["develop","unfold","grow gradually"],
    ex:[{ s:"Small workshops can {{}} into real factories.", f:"evolve", ko:"작은 공방도 진짜 공장으로 발달할 수 있다." }] },

  { word:"exaggerate", pron:"이그재저레이트", pos:"v", level:"B2", meanings:["과장하다","부풀리다"],
    syn:["overstate","blow out of proportion","magnify"], ant:["downplay"],
    ex:[{ s:"Do not {{}} how long the repair will take.", f:"exaggerate", ko:"수리가 얼마나 걸릴지 과장하지 마세요." }] },

  { word:"examine", pron:"이그재민", pos:"v", level:"B1", meanings:["조사하다","검사하다"],
    syn:["inspect","analyze","look into"],
    ex:[{ s:"Inspectors will {{}} every weld on the pipe.", f:"examine", ko:"검사관들이 그 배관의 모든 용접부를 조사할 것이다." }] },

  { word:"excavate", pron:"엑스커베이트", pos:"v", level:"C1", meanings:["발굴하다","출토하다"],
    syn:["dig","unearth","dig up"],
    ex:[{ s:"The team hopes to {{}} the site before winter.", f:"excavate", ko:"그 팀은 겨울 전에 그 유적을 발굴하기를 바란다." }] },

  { word:"exceed", pron:"익시드", pos:"v", level:"B2", meanings:["넘다","초과하다"],
    syn:["surpass","go beyond","outdo"],
    ex:[{ s:"Costs must not {{}} the agreed budget.", f:"exceed", ko:"비용이 합의된 예산을 넘어서는 안 된다." }] },

  { word:"excel", pron:"익셀", pos:"v", level:"C1", meanings:["뛰어나게 잘하다","탁월하다"],
    syn:["shine","stand out","outperform"],
    ex:[{ s:"She began to {{}} at long-distance running.", f:"excel", ko:"그녀는 장거리 달리기에서 뛰어나게 잘하기 시작했다." }] },

  /* 전치사지만 pos 는 v/n/adj/adv/phr 뿐이므로 phr 로 담았다 — 기존 표제어
     apart from·due to·ahead of 와 같은 처리다. phr 이므로 ex 를 달지 않는다(5차 참고).
     레벨을 C1 로 뒀다: apart from 이 phr B1 에 뜻도 "~을 제외하고, ~외에는" 으로 거의
     같아서, 레벨이 붙어 있으면 두 낱말이 한 문제의 보기로 같이 떠 답을 고를 수 없다. */
  { word:"except", pron:"익셉트", pos:"phr", level:"C1", meanings:["~을 제외하고"],
    syn:["apart from","aside from","other than"] },

  /* 기존 GLOSS "예외; 반례" 의 '반례' 를 살렸다 — 표제어 counterexample 이 유의어로 쓴다. */
  { word:"exception", pron:"익셉션", pos:"n", level:"B2", meanings:["예외","반례"],
    syn:["special case","anomaly","counterexample"],
    ex:[{ s:"Every rule here has one {{}}.", f:"exception", ko:"여기 모든 규칙에는 예외가 하나씩 있다." }] },

  { word:"exceptional", pron:"익셉셔널", pos:"adj", level:"B2", meanings:["예외적인","특별한"],
    syn:["extraordinary","remarkable","unusual"],
    ex:[{ s:"They made an {{}} allowance for her.", f:"exceptional", ko:"그들은 그녀에게 예외적인 혜택을 주었다." }] },

  /* 원본은 '과잉, 초과량, 초과한' 으로 명사와 형용사가 섞여 있다 — 명사로 정했다. */
  { word:"excess", pron:"익세스", pos:"n", level:"C1", meanings:["과잉","초과량"],
    syn:["surplus","overabundance","too much"], ant:["shortage"],
    ex:[{ s:"The plant dumped its {{}} into the river.", f:"excess", ko:"그 공장은 초과량을 강에 버렸다." }] },

  /* ── 10차: excessive ~ exhibition ────────────────── */

  { word:"excessive", pron:"익세시브", pos:"adj", level:"B2", meanings:["지나친","과도한"],
    syn:["extreme","immoderate","over the top"], ant:["moderate"],
    ex:[{ s:"The fee seemed {{}} for a two-page form.", f:"excessive", ko:"두 장짜리 서식에 그 수수료는 지나쳐 보였다." }] },

  /* 원본은 '교환; 교환하다' 로 명사와 동사가 섞여 있다 — 동사로 정했다.
     표제어 barter(동사)가 이 낱말을 유의어로 쓴다. */
  { word:"exchange", pron:"익스체인지", pos:"v", level:"B1", meanings:["교환하다","주고받다"],
    syn:["swap","barter","interchange"],
    ex:[{ s:"The two schools {{}} students every summer.", f:"exchange", ko:"두 학교는 매년 여름 학생을 교환한다." }] },

  { word:"excited", pron:"익사이티드", pos:"adj", level:"B1", meanings:["흥분된","신이 난"],
    syn:["thrilled","elated","worked up"], ant:["calm"],
    ex:[{ s:"The children were too {{}} to sit still.", f:"excited", ko:"아이들은 너무 흥분해서 가만히 앉아 있지 못했다." }] },

  { word:"exclaim", pron:"익스클레임", pos:"v", level:"B2", meanings:["소리치다","외치다"],
    syn:["cry out","shout","call out"],
    ex:[{ s:"She began to {{}} before he finished speaking.", f:"exclaim", ko:"그녀는 그가 말을 끝내기도 전에 소리치기 시작했다." }] },

  { word:"exclamation", pron:"엑스클러메이션", pos:"n", level:"C1", meanings:["감탄","외침"],
    syn:["outcry","cry","shout of surprise"],
    ex:[{ s:"A soft {{}} escaped her as the lights came on.", f:"exclamation", ko:"불이 켜지자 그녀에게서 낮은 감탄이 새어 나왔다." }] },

  { word:"exclusion", pron:"익스클루전", pos:"n", level:"B2", meanings:["제외","배제"],
    syn:["omission","barring","shutting out"], ant:["inclusion"],
    ex:[{ s:"Her {{}} from the list caused an argument.", f:"exclusion", ko:"그녀가 명단에서 제외된 것이 논쟁을 일으켰다." }] },

  { word:"exclusive", pron:"익스클루시브", pos:"adj", level:"B2", meanings:["배타적인","독점적인"],
    syn:["sole","restricted","select"], ant:["inclusive"],
    ex:[{ s:"The club remains {{}} about who may join.", f:"exclusive", ko:"그 클럽은 누가 가입할 수 있는지에 배타적이다." }] },

  /* 원본은 '오로지, 오직 ~만, 배타적으로' 로 셋인데 앞 둘이 같은 말이라 둘로 줄였다. */
  { word:"exclusively", pron:"익스클루시블리", pos:"adv", level:"C1", meanings:["오로지","독점적으로"],
    syn:["only","solely","entirely"],
    ex:[{ s:"The shop sells {{}} secondhand books.", f:"exclusively", ko:"그 가게는 오로지 중고 책만 판다." }] },

  { word:"excursion", pron:"익스커전", pos:"n", level:"B2", meanings:["소풍","유람"],
    syn:["outing","trip","day trip"],
    ex:[{ s:"The class took an {{}} to the salt flats.", f:"excursion", ko:"그 반은 염전으로 소풍을 갔다." }] },

  /* 원본은 '처형하다; (계획을) 실행하다' 로 처형이 앞이지만 '실행하다' 를 앞에 뒀다 —
     표제어 carry out(수행하다, 실행하다)이 이 낱말을 유의어로 쓰므로, 피드백이
     '처형하다' 로 시작하면 엉뚱해진다. 괄호도 풀었다. */
  { word:"execute", pron:"엑서큐트", pos:"v", level:"B2", meanings:["실행하다","처형하다"],
    syn:["carry out","perform","put into effect"],
    ex:[{ s:"The team will {{}} the plan in three stages.", f:"execute", ko:"그 팀은 계획을 세 단계로 실행할 것이다." }] },

  { word:"execution", pron:"엑서큐션", pos:"n", level:"C1", meanings:["처형","사형 집행"],
    syn:["capital punishment","death penalty","putting to death"],
    ex:[{ s:"The country halted every {{}} that year.", f:"execution", ko:"그 나라는 그해 모든 처형을 중단했다." }] },

  /* 기존 GLOSS "경영진, 관리직의" 를 그대로 옮겼다. 명사와 형용사가 섞인 뜻이지만
     표제어 CEO(명사)는 '경영진' 을, administrative(형용사)는 '관리직의' 를 필요로 해서
     하나를 버리면 어느 한쪽이 어긋난다. pos=n 에 둘째 뜻이 형용사인 표제어는 이미
     여럿 있다 — characteristic·chemical·criminal·current 가 같은 꼴이다. */
  { word:"executive", pron:"이그제큐티브", pos:"n", level:"B2", meanings:["경영진","관리직의"],
    syn:["manager","administrator","senior official"],
    ex:[{ s:"A senior {{}} signed off on the deal.", f:"executive", ko:"고위 경영진이 그 거래를 승인했다." }] },

  /* 원본의 '칭찬할만한' 은 띄어쓰기가 틀렸다 — '칭찬할 만한' 으로 바로잡았다
     (헤더에 적어 둔 대로). 유의어로 praiseworthy 를 쓰지 않았다: GLOSS 가
     "칭찬할 만한" 으로 이 표제어의 둘째 뜻과 글자까지 같아 화면에 같은 말이 겹친다. */
  { word:"exemplary", pron:"이그젬플러리", pos:"adj", level:"C1", meanings:["모범적인","칭찬할 만한"],
    syn:["model","admirable","first-rate"],
    ex:[{ s:"His record over ten years was {{}}.", f:"exemplary", ko:"10년에 걸친 그의 기록은 모범적이었다." }] },

  /* 3차에서 embody 의 유의어로 words-e.js 에 넣은 GLOSS 항목이 표제어로 올라온다 —
     그 항목을 지웠다. embody 쪽 피드백이 바뀌지 않도록 '전형' 갈래를 앞에 뒀다. */
  { word:"exemplify", pron:"이그젬플리파이", pos:"v", level:"C1", meanings:["전형적인 사례가 되다","예증하다"],
    syn:["illustrate","typify","embody"],
    ex:[{ s:"These letters {{}} the style of the period.", f:"exemplify", ko:"이 편지들은 그 시대의 문체를 전형적으로 보여 준다." }] },

  /* 원본은 '면제되는; 면제하다' 로 형용사와 동사가 섞여 있다 — 형용사로 정했다. */
  { word:"exempt", pron:"이그젬프트", pos:"adj", level:"C1", meanings:["면제되는","적용 대상이 아닌"],
    syn:["excused","not subject to","free from"],
    ex:[{ s:"Small farms are {{}} from the new levy.", f:"exempt", ko:"작은 농장은 새 부과금에서 면제된다." }] },

  /* 원본 '(영향, 권력, 억압 등을) 이용하다, 행사하다' 의 괄호를 풀고 '행사하다' 를
     앞에 뒀다 — '이용하다' 는 뜻이 너무 넓어 카드의 첫 뜻으로 맞지 않는다. */
  { word:"exert", pron:"이그저트", pos:"v", level:"C1", meanings:["행사하다","가하다"],
    syn:["wield","bring to bear","put forth"],
    ex:[{ s:"Editors still {{}} real influence over what we read.", f:"exert", ko:"편집자들은 우리가 읽는 것에 여전히 실질적인 영향력을 행사한다." }] },

  { word:"exhale", pron:"엑스헤일", pos:"v", level:"C1", meanings:["내쉬다","내뿜다"],
    syn:["breathe out","expel air","blow out"], ant:["inhale"],
    ex:[{ s:"Divers learn to {{}} slowly on the way up.", f:"exhale", ko:"잠수부들은 올라오는 동안 천천히 내쉬는 법을 배운다." }] },

  /* 원본은 '기진맥진하게 만들다; 배기가스; 배기관' 으로 동사와 명사가 섞여 있다 —
     동사로 정하고, 기존 GLOSS 의 '고갈시키다' 를 앞에 뒀다(표제어 deplete 가
     유의어로 쓴다). '기진맥진' 쪽은 같은 차수의 exhausted 가 맡는다. */
  { word:"exhaust", pron:"이그조스트", pos:"v", level:"B2", meanings:["고갈시키다","기진맥진하게 만들다"],
    syn:["deplete","use up","wear out"],
    ex:[{ s:"Two dry summers can {{}} the village well.", f:"exhaust", ko:"두 번의 건조한 여름이면 마을 우물을 고갈시킬 수 있다." }] },

  { word:"exhausted", pron:"이그조스티드", pos:"adj", level:"B1", meanings:["몹시 피곤한","기진맥진한"],
    syn:["worn out","drained","dead tired"],
    ex:[{ s:"They arrived {{}} after two days on the road.", f:"exhausted", ko:"그들은 이틀간의 여정 끝에 몹시 피곤한 상태로 도착했다." }] },

  /* 발음은 기존 표제어 art exhibition("아트 엑시비션")에 맞춰 '엑시비션' 으로 적었다.
     원본의 '(감정, 기교 등의) 표현' 갈래는 버렸다(괄호 설명이 필요한 갈래다).
     art exhibition 은 pos 가 phr 이라 이 명사와 오답 후보로 겹치지 않는다. */
  { word:"exhibition", pron:"엑시비션", pos:"n", level:"B2", meanings:["전시회","전람"],
    syn:["showcase","public display","exposition"],
    ex:[{ s:"The museum opens a new {{}} each spring.", f:"exhibition", ko:"그 박물관은 매년 봄 새 전시회를 연다." }] },

  /* ── 11차: exhilarating ~ explicit ───────────────── */

  { word:"exhilarating", pron:"이그질러레이팅", pos:"adj", level:"C1", meanings:["아주 신나는","즐거운"],
    syn:["thrilling","stirring","invigorating"],
    ex:[{ s:"The ride down the valley was {{}}.", f:"exhilarating", ko:"골짜기를 내려가는 그 주행은 아주 신났다." }] },

  /* 유의어로 urge 를 쓰지 않았다 — GLOSS 가 "충동; 재촉하다" 로 명사 갈래가 앞이다
     (5차 encourage 에서도 같은 이유로 걸러냈다). */
  { word:"exhort", pron:"이그조트", pos:"v", level:"C2", meanings:["훈계하다","간곡히 권하다"],
    syn:["urge strongly","admonish","preach to"],
    ex:[{ s:"The captain would {{}} the crew before every match.", f:"exhort", ko:"주장은 경기마다 선수들을 간곡히 격려하곤 했다." }] },

  /* 원본은 '국외 추방, 망명자, 추방하다' 로 명사 둘과 동사가 섞여 있다 — 동사로
     정했다. 표제어 banish·deport(둘 다 동사)가 이 낱말을 유의어로 쓴다.
     '망명시키다' 를 둘째 뜻으로 둔 것은 banish("추방하다, 내쫓다")·deport("강제
     추방하다, 국외로 내보내다")와 뜻이 글자까지 겹치지 않게 하려는 것이다. */
  { word:"exile", pron:"엑사일", pos:"v", level:"C2", meanings:["추방하다","망명시키다"],
    syn:["banish","deport","send into exile"],
    ex:[{ s:"The new rulers moved to {{}} their rivals.", f:"exile", ko:"새 통치자들은 경쟁자들을 추방하려 움직였다." }] },

  { word:"exist", pron:"이그지스트", pos:"v", level:"B1", meanings:["존재하다"],
    syn:["be present","be real","live on"],
    ex:[{ s:"No written record of the village seems to {{}}.", f:"exist", ko:"그 마을의 기록은 남아 있지 않은 것 같다." }] },

  { word:"existence", pron:"이그지스턴스", pos:"n", level:"B2", meanings:["존재"],
    syn:["being","reality","actual fact"],
    ex:[{ s:"Nobody doubted the {{}} of the old tunnel.", f:"existence", ko:"아무도 그 낡은 터널의 존재를 의심하지 않았다." }] },

  { word:"exotic", pron:"이그자틱", pos:"adj", level:"B2", meanings:["이국적인","외국산의"],
    syn:["foreign","unusual","outlandish"],
    ex:[{ s:"The market sells {{}} fruit from three continents.", f:"exotic", ko:"그 시장은 세 대륙에서 온 이국적인 과일을 판다." }] },

  /* ⚠️ 뜻을 '커지다, 확대되다'(자동사 쪽)로 잡았다. 표제어 enlarge(6차, B2 "확대하다,
     확장하다")와 뜻이 가까운데, 레벨은 벌릴 수가 없었다 — B2 와 두 칸 떨어진 레벨은
     C2 뿐이고 expand 에 C2 는 맞지 않는다. 그래서 자동사(커지다)/타동사(확대하다)로
     뜻을 갈라 두었다. 9차의 even/equal 처럼 레벨로 푸는 편이 낫지만, 이 짝은
     레벨로 풀 수 없는 자리에 있다. */
  { word:"expand", pron:"익스팬드", pos:"v", level:"B2", meanings:["커지다","확대되다"],
    syn:["grow bigger","swell","spread out"],
    ex:[{ s:"Metal rails {{}} slightly on hot afternoons.", f:"expand", ko:"금속 레일은 더운 오후에 조금 커진다." }] },

  { word:"expansion", pron:"익스팬션", pos:"n", level:"B2", meanings:["팽창","확대"],
    syn:["growth","increase in size","enlargement"],
    ex:[{ s:"The {{}} of the port took eight years.", f:"expansion", ko:"그 항구의 확대에는 8년이 걸렸다." }] },

  /* ⚠️ 둘째 뜻을 '당연히 여기다' 로 잡았다. 표제어 anticipate(B2)의 뜻이 "기대하다,
     예상하다" 여서, 원본대로 두면 두 낱말의 뜻이 글자까지 같아져 한 문제의 보기로
     같이 뜨면 답을 고를 수 없다. 첫 뜻 '기대하다' 는 anticipate 가 이 낱말을
     유의어로 쓰기 때문에 그대로 두었다. */
  { word:"expect", pron:"익스펙트", pos:"v", level:"B1", meanings:["기대하다","당연히 여기다"],
    syn:["anticipate","foresee","predict"],
    ex:[{ s:"We did not {{}} so many people to show up.", f:"expect", ko:"우리는 그렇게 많은 사람이 올 줄은 기대하지 않았다." }] },

  { word:"expectancy", pron:"익스펙턴시", pos:"n", level:"C1", meanings:["기대","예상"],
    syn:["expectation","anticipation","likelihood"],
    ex:[{ s:"A hush of {{}} fell over the hall.", f:"expectancy", ko:"기대의 정적이 강당에 내렸다." }] },

  { word:"expedition", pron:"엑스퍼디션", pos:"n", level:"B2", meanings:["원정","긴 여행"],
    syn:["journey","voyage","quest"],
    ex:[{ s:"The {{}} reached the ridge in eleven days.", f:"expedition", ko:"그 원정대는 11일 만에 능선에 도달했다." }] },

  /* 기존 GLOSS "추방하다, 퇴학시키다" 를 그대로 옮겼다 — 표제어 banish·deport·eject
     셋이 이 낱말을 유의어로 쓴다. 원본의 '내쫓다, 방출하다' 를 쓰면 banish 자신의
     뜻("추방하다, 내쫓다")과 겹치는 낱말이 늘어난다. */
  { word:"expel", pron:"익스펠", pos:"v", level:"B2", meanings:["추방하다","퇴학시키다"],
    syn:["drive out","throw out","eject"],
    ex:[{ s:"The school may {{}} anyone caught cheating twice.", f:"expel", ko:"그 학교는 두 번 부정행위를 한 사람을 퇴학시킬 수 있다." }] },

  /* expenditure(C1)와 expense(B1)를 두 칸 벌렸다 — 둘 다 돈에 관한 명사라서
     레벨이 가까우면 한 문제의 보기로 같이 뜬다. 뜻도 '지출/소비량' 과 '비용/돈' 으로
     갈라 두었다. 기존 GLOSS "지출, 소비량" 은 표제어 consumption 이 유의어로 쓴다. */
  { word:"expenditure", pron:"익스펜디처", pos:"n", level:"C1", meanings:["지출","소비량"],
    syn:["spending","outlay","sum spent"],
    ex:[{ s:"Public {{}} on roads fell again last year.", f:"expenditure", ko:"도로에 대한 공공 지출이 지난해 또 줄었다." }] },

  { word:"expense", pron:"익스펜스", pos:"n", level:"B1", meanings:["비용","돈"],
    syn:["cost","outgoings","payment"],
    ex:[{ s:"They covered the {{}} of the trip themselves.", f:"expense", ko:"그들은 여행 비용을 직접 부담했다." }] },

  /* 원본은 '실험, 실험하다' 로 명사와 동사가 섞여 있다 — 명사로 정했다. */
  { word:"experiment", pron:"익스페러먼트", pos:"n", level:"B2", meanings:["실험"],
    syn:["trial run","test","controlled trial"],
    ex:[{ s:"The {{}} was repeated in four other labs.", f:"experiment", ko:"그 실험은 다른 네 실험실에서도 반복되었다." }] },

  /* expert(B1)와 expertise(C1)도 두 칸 벌렸다 — 둘 다 '전문' 명사다.
     뜻은 '사람'(전문가)과 '지식'(전문 지식)으로 갈라진다. */
  { word:"expert", pron:"엑스퍼트", pos:"n", level:"B1", meanings:["전문가"],
    syn:["specialist","master","skilled person"],
    ex:[{ s:"They called in an {{}} to read the old script.", f:"expert", ko:"그들은 옛 문서를 읽으려고 전문가를 불렀다." }] },

  { word:"expertise", pron:"엑스퍼티즈", pos:"n", level:"C1", meanings:["전문 지식","특수 기술"],
    syn:["know-how","special skill","technical knowledge"],
    ex:[{ s:"Restoring the clock needs real {{}}.", f:"expertise", ko:"그 시계를 복원하려면 진짜 전문 지식이 필요하다." }] },

  { word:"expire", pron:"익스파이어", pos:"v", level:"C1", meanings:["만료되다","기한이 끝나다"],
    syn:["run out","lapse","come to an end"],
    ex:[{ s:"The permit will {{}} at the end of the month.", f:"expire", ko:"그 허가는 이달 말에 만료된다." }] },

  { word:"explain", pron:"익스플레인", pos:"v", level:"B1", meanings:["설명하다","해명하다"],
    syn:["clarify","account for","spell out"],
    ex:[{ s:"Let me {{}} why the schedule slipped.", f:"explain", ko:"일정이 밀린 이유를 설명하겠습니다." }] },

  /* 기존 GLOSS "명시적인" 을 첫 뜻으로 그대로 뒀다 — 표제어 ambiguous·equivocal(7차)의
     반의어다. 원본의 '분명한' 을 앞에 쓰면 표제어 evident(9차, "분명한, 눈에 띄는")·
     apparent("명백한, 분명한")와 뜻이 뒤섞여 셋을 구별할 수 없게 된다. */
  { word:"explicit", pron:"익스플리시트", pos:"adj", level:"B2", meanings:["명시적인","명쾌한"],
    syn:["clear-cut","unambiguous","stated plainly"], ant:["ambiguous"],
    ex:[{ s:"The contract is {{}} about who pays for repairs.", f:"explicit", ko:"그 계약서는 수리비를 누가 내는지 명시적이다." }] },

  /* ── 12차: explicitly ~ extinct ──────────────────── */

  { word:"explicitly", pron:"익스플리시틀리", pos:"adv", level:"B2", meanings:["분명히","명쾌하게"],
    syn:["clearly","plainly","in so many words"],
    ex:[{ s:"The notice {{}} bans dogs from the lawn.", f:"explicitly", ko:"그 안내문은 개가 잔디에 들어오는 것을 분명히 금지한다." }] },

  /* ⚠️ 동사로 정했다. 원본이 '착취하다, (부당하게) 이용하다' 로 동사만 주기 때문이다.
     다만 기존 GLOSS 는 "모험; 이용하다" 로 명사 갈래가 앞에 있었고, 표제어
     adventure(명사 '모험')가 이 낱말을 유의어로 쓴다 — 그 피드백이 동사 뜻으로
     바뀐다. E 세트를 마친 뒤 adventure 쪽 syn 을 risky undertaking 으로 바꿔
     정리했다(아래 '품사가 어긋난 유의어 5곳'). adventure 에는 escapade·quest
     두 유의어가 더 있어 '모험' 쪽은 그것들이 받쳐 준다.
     유의어로 abuse·misuse 를 쓰지 않았다 — 둘 다 명사다(abuse 는 표제어 "학대, 남용"). */
  { word:"exploit", pron:"엑스플로이트", pos:"v", level:"C1", meanings:["착취하다","부당하게 이용하다"],
    syn:["take advantage of","use unfairly","squeeze profit from"],
    ex:[{ s:"Some agencies {{}} workers who cannot read the contract.", f:"exploit", ko:"일부 업체는 계약서를 읽지 못하는 노동자를 착취한다." }] },

  { word:"exploitation", pron:"엑스플로이테이션", pos:"n", level:"C1", meanings:["착취","이용"],
    syn:["abuse","misuse","unfair use"],
    ex:[{ s:"The report documents the {{}} of child labor.", f:"exploitation", ko:"그 보고서는 아동 노동 착취를 기록한다." }] },

  { word:"exploration", pron:"엑스플러레이션", pos:"n", level:"B2", meanings:["탐사","탐험"],
    syn:["survey","expedition","investigation"],
    ex:[{ s:"Deep-sea {{}} still costs more than space travel.", f:"exploration", ko:"심해 탐사는 여전히 우주 여행보다 비용이 많이 든다." }] },

  /* 원본은 '탐험하다, 탐사하다; 탐구하다' 인데 앞 둘이 거의 같은 말이라 둘로 줄였다. */
  { word:"explore", pron:"익스플로어", pos:"v", level:"B2", meanings:["탐험하다","탐구하다"],
    syn:["travel through","investigate","search"],
    ex:[{ s:"They set out to {{}} the caves below the ridge.", f:"explore", ko:"그들은 능선 아래 동굴을 탐험하러 나섰다." }] },

  /* 8차에서 eruption 의 유의어로 words-e.js 에 넣은 GLOSS 항목이 표제어로 올라온다 —
     그 항목을 지웠다. 뜻 "폭발, 파열" 을 그대로 옮겨 eruption 쪽이 변하지 않게 했다.
     eruption(B2 "폭발, 분화")과는 뜻이 가깝지만 '파열' 과 '분화' 로 갈린다. */
  { word:"explosion", pron:"익스플로전", pos:"n", level:"B2", meanings:["폭발","파열"],
    syn:["blast","detonation","bursting"],
    ex:[{ s:"The {{}} shattered windows three streets away.", f:"explosion", ko:"그 폭발로 세 블록 떨어진 창문들이 깨졌다." }] },

  /* 원본은 '폭발성의, 폭발하기 쉬운; 폭발물, 폭약' 이다 — 형용사로 정하고, 앞 두 뜻이
     사실상 같은 말이라 하나만 남겼다(environment-friendly 와 같은 처리). */
  { word:"explosive", pron:"익스플로시브", pos:"adj", level:"B2", meanings:["폭발성의"],
    syn:["liable to explode","volatile","highly unstable"],
    ex:[{ s:"The shed held several {{}} cans of solvent.", f:"explosive", ko:"그 창고에는 폭발성 용제 통이 여러 개 있었다." }] },

  /* 원본 '수출(품); 수출하다, 내보내다' 에서 괄호를 풀고 동사로 정했다. */
  { word:"export", pron:"엑스포트", pos:"v", level:"B1", meanings:["수출하다","내보내다"],
    syn:["sell abroad","ship out","send overseas"], ant:["import"],
    ex:[{ s:"The island began to {{}} salt in the 1800s.", f:"export", ko:"그 섬은 1800년대에 소금을 수출하기 시작했다." }] },

  { word:"expose", pron:"익스포즈", pos:"v", level:"B2", meanings:["폭로하다","노출시키다"],
    syn:["reveal","uncover","bring to light"], ant:["conceal"],
    ex:[{ s:"The letters {{}} how the fund was really spent.", f:"expose", ko:"그 편지들은 기금이 실제로 어떻게 쓰였는지 폭로한다." }] },

  { word:"exposure", pron:"익스포저", pos:"n", level:"B2", meanings:["노출","폭로"],
    syn:["being exposed","revelation","uncovering"],
    ex:[{ s:"Long {{}} to the sun cracked the paint.", f:"exposure", ko:"오랜 햇빛 노출이 그 페인트를 갈라지게 했다." }] },

  /* 원본은 '정교한; 매우 아름다운, 고귀한' 인데 '매우 아름다운' 을 앞에 뒀다 —
     표제어 elaborate(C1 "공들인, 정교한")와 첫 뜻이 겹치지 않게 하려는 것이다. */
  { word:"exquisite", pron:"엑스퀴짓", pos:"adj", level:"C2", meanings:["매우 아름다운","정교한"],
    syn:["beautifully made","delicate","superb"],
    ex:[{ s:"The box held an {{}} silver locket.", f:"exquisite", ko:"그 상자에는 매우 아름다운 은 로켓이 들어 있었다." }] },

  /* ★ 원본은 '확대하다, 확장하다; (시간, 기간 등을) 연장하다' 인데 기존 GLOSS
     "늘리다, 연장하다" 를 그대로 썼다. 원본대로 '확대하다, 확장하다' 로 적으면
     표제어 enlarge(6차, B2 "확대하다, 확장하다")와 뜻이 글자까지 같아진다.
     '확대' 계열은 이미 amplify·enlarge·escalate·expand·expansion 다섯이 쓰고 있어
     빈자리가 없다. '연장' 쪽으로 가르면 표제어 curtail(반의어)도 지켜진다. */
  { word:"extend", pron:"익스텐드", pos:"v", level:"B1", meanings:["늘리다","연장하다"],
    syn:["lengthen","prolong","stretch out"], ant:["curtail"],
    ex:[{ s:"The city may {{}} the bus route past the mill.", f:"extend", ko:"시는 버스 노선을 제분소 너머로 연장할 수도 있다." }] },

  { word:"extended", pron:"익스텐디드", pos:"adj", level:"B2", meanings:["연장된","늘어난"],
    syn:["lengthened","prolonged","drawn-out"],
    ex:[{ s:"They asked for an {{}} deadline.", f:"extended", ko:"그들은 연장된 기한을 요청했다." }] },

  /* 뜻을 '연장, 확장' 으로 잡았다 — 표제어 expansion(B2 "팽창, 확대")과 '확대' 가
     겹치지 않게 하려는 것이다. 기존 표제어 by extension 은 pos 가 phr 이라
     이 명사와 오답 후보로 겹치지 않는다. */
  { word:"extension", pron:"익스텐션", pos:"n", level:"B2", meanings:["연장","확장"],
    syn:["lengthening","addition","prolonging"],
    ex:[{ s:"The library got a two-year {{}} on its lease.", f:"extension", ko:"그 도서관은 임대 계약을 2년 연장받았다." }] },

  { word:"extensive", pron:"익스텐시브", pos:"adj", level:"B2", meanings:["광범위한","방대한"],
    syn:["wide-ranging","far-reaching","broad"],
    ex:[{ s:"The storm caused {{}} damage to the orchards.", f:"extensive", ko:"그 폭풍은 과수원에 광범위한 피해를 입혔다." }] },

  /* 레벨을 C1 로 뒀다 — 표제어 degree(B1 "정도, 학위")가 이 낱말을 유의어로 쓰고
     첫 뜻에 '정도' 가 겹치므로, 레벨을 두 칸 벌려 한 문제의 보기로 같이 뜨지
     않게 했다. 기존 GLOSS "범위, 정도" 는 breadth·degree·dimension 셋이 쓴다. */
  { word:"extent", pron:"익스텐트", pos:"n", level:"C1", meanings:["범위","정도"],
    syn:["scope","range","scale"],
    ex:[{ s:"Nobody knew the full {{}} of the leak.", f:"extent", ko:"아무도 그 누출의 전체 범위를 알지 못했다." }] },

  { word:"exterminate", pron:"익스터머네이트", pos:"v", level:"C1", meanings:["박멸하다","몰살하다"],
    syn:["wipe out","annihilate","kill off"],
    ex:[{ s:"It took two winters to {{}} the beetles.", f:"exterminate", ko:"그 딱정벌레를 박멸하는 데 두 번의 겨울이 걸렸다." }] },

  { word:"external", pron:"익스터널", pos:"adj", level:"B2", meanings:["외부의","외면의"],
    syn:["outer","outside","surface-level"], ant:["internal"],
    ex:[{ s:"The report blamed {{}} factors for the delay.", f:"external", ko:"그 보고서는 지연의 원인을 외부 요인으로 돌렸다." }] },

  /* syn 을 비웠다 — 심리학 용어라 바꿔 쓸 한 낱말이 없다. 후보는 모두
     '밖으로 드러내다' 를 길게 풀어 쓴 것뿐이어서 셋을 채우면 같은 말을 세 번 한다
     (entity·equation·externalize 가 같은 경우다). */
  { word:"externalize", pron:"익스터널라이즈", pos:"v", level:"C2", meanings:["외면화하다","표면화하다"],
    ex:[{ s:"Drawing helps children {{}} what they cannot say.", f:"externalize", ko:"그림은 아이가 말로 못 하는 것을 표면화하도록 돕는다." }] },

  /* 원본은 '멸종된, 사라진, 사화산의' 로 셋인데 둘로 줄였다. 표제어 endangered(5차,
     "멸종 위기에 처한")와는 '멸종된' 과 '멸종 위기' 로 뜻이 분명히 갈린다. */
  { word:"extinct", pron:"익스팅트", pos:"adj", level:"B2", meanings:["멸종된","사라진"],
    syn:["died out","no longer existing","wiped out"], ant:["surviving"],
    ex:[{ s:"The bird has been {{}} for over a century.", f:"extinct", ko:"그 새는 한 세기 넘게 멸종된 상태다." }] },

  /* ── 13차: extinction ~ eyesore (10개, 마지막) ────── */

  { word:"extinction", pron:"익스팅션", pos:"n", level:"B2", meanings:["멸종","절멸"],
    syn:["dying out","disappearance","wiping out"],
    ex:[{ s:"Two more frog species face {{}} this decade.", f:"extinction", ko:"개구리 두 종이 이번 10년 안에 멸종에 직면한다." }] },

  { word:"extinguish", pron:"익스팅귀시", pos:"v", level:"C1", meanings:["끄다","소멸시키다"],
    syn:["put out","snuff out","quench"], ant:["ignite"],
    ex:[{ s:"It took four hours to {{}} the peat fire.", f:"extinguish", ko:"그 토탄 화재를 끄는 데 네 시간이 걸렸다." }] },

  /* ⚠️ 원본은 '뽑다, 뽑아내다, 추출하다' 로 동사만 주지만 기존 GLOSS 는
     "발췌하다; 추출물" 이었다. 표제어 clipping(명사 "오려낸 기사, 스크랩")이 이 낱말을
     유의어로 쓰므로 '발췌' 갈래가 살아 있어야 한다 — 그래서 원본의 '추출하다' 를
     앞에 두고 기존 GLOSS 의 '발췌하다' 를 둘째 뜻으로 남겼다. 품사는 동사이므로
     clipping 쪽은 어미가 바뀌지만 뜻은 지켜진다(7차 equal 과 같은 꼴).
     유의어로 pull out 은 쓰지 않았다 — GLOSS 가 "물러나다, 손을 떼다" 다. */
  { word:"extract", pron:"익스트랙트", pos:"v", level:"C1", meanings:["추출하다","발췌하다"],
    syn:["draw out","distill","take out"],
    ex:[{ s:"Machines now {{}} sugar from beet in one pass.", f:"extract", ko:"기계는 이제 한 번에 사탕무에서 설탕을 추출한다." }] },

  /* syn 을 비웠다 — 학교 용어다. after-school·outside the curriculum 류는 모두
     '정규 과목 밖' 을 달리 말한 것뿐이어서 셋을 채우면 같은 말을 세 번 한다. */
  { word:"extracurricular", pron:"엑스트러커리큘러", pos:"adj", level:"C1", meanings:["과외의","정규 과목 이외의"],
    ex:[{ s:"She signed up for two {{}} clubs.", f:"extracurricular", ko:"그녀는 과외 동아리 두 개에 등록했다." }] },

  /* 9차에서 exceptional 의 유의어로 words-e.js 에 넣은 GLOSS 항목이 표제어로
     올라온다 — 그 항목을 지웠다. 뜻 "비범한, 대단한" 을 그대로 옮겼다.
     원본의 '놀라운' 을 쓰면 표제어 amazing(B1 "놀라운, 굉장한")·breathtaking
     (B2 "숨이 멎을 듯한, 놀라운")과 뜻이 뒤섞인다. */
  { word:"extraordinary", pron:"익스트로디너리", pos:"adj", level:"C1", meanings:["비범한","대단한"],
    syn:["exceptional","remarkable","phenomenal"],
    ex:[{ s:"She has an {{}} memory for names.", f:"extraordinary", ko:"그녀는 이름을 기억하는 데 비범한 능력이 있다." }] },

  /* 원본은 '외계인, 우주인; 지구 밖 생물체의, 외계의' 로 명사와 형용사가 섞여 있다 —
     명사로 정했다. syn 을 비웠다: 후보가 모두 '우주에서 온 존재' 를 달리 말한 것이고,
     alien 은 표제어인데 품사가 형용사("이질적인, 생소한")라 쓸 수 없다.
     발음은 기존 PRON 의 terrestrial("터레스트리얼")에 맞췄다. */
  { word:"extraterrestrial", pron:"엑스트러터레스트리얼", pos:"n", level:"C2", meanings:["외계인","지구 밖 생물체"],
    ex:[{ s:"The film treats its {{}} as an ordinary neighbor.", f:"extraterrestrial", ko:"그 영화는 외계인을 평범한 이웃처럼 다룬다." }] },

  { word:"extravagant", pron:"익스트래버건트", pos:"adj", level:"C1", meanings:["사치스러운","낭비하는"],
    syn:["lavish","wasteful","over the top"], ant:["thrifty"],
    ex:[{ s:"The wedding was more {{}} than anyone expected.", f:"extravagant", ko:"그 결혼식은 누가 예상한 것보다 사치스러웠다." }] },

  /* 뜻을 '외적인, 외부에서 오는' 으로 잡았다 — 표제어 external(12차, B2 "외부의,
     외면의")과 '외부의' 가 글자까지 겹치지 않게 하려는 것이다. 레벨도 C2 로 둬서
     B2 와 두 칸 벌렸다. external 을 유의어로 쓰는 것은 그대로 괜찮다. */
  { word:"extrinsic", pron:"익스트린식", pos:"adj", level:"C2", meanings:["외적인","외부에서 오는"],
    syn:["external","coming from outside","non-inherent"], ant:["intrinsic"],
    ex:[{ s:"Pay is an {{}} reward; curiosity is not.", f:"extrinsic", ko:"보수는 외적인 보상이고 호기심은 그렇지 않다." }] },

  /* 원본의 '외향적인'(형용사)은 extroverted 와 혼동한 것이다 — 헤더에 적어 둔 대로
     명사 '외향적인 사람' 으로 바로잡았다. */
  { word:"extrovert", pron:"엑스트러버트", pos:"n", level:"C1", meanings:["외향적인 사람"],
    syn:["outgoing person","sociable type","people person"], ant:["introvert"],
    ex:[{ s:"Every team needs one {{}} to break the silence.", f:"extrovert", ko:"모든 팀에는 침묵을 깨 줄 외향적인 사람 하나가 필요하다." }] },

  /* E 세트의 마지막 낱말. 발음은 기존 표제어 black eye("블랙 아이")에 맞췄다. */
  { word:"eyesore", pron:"아이소어", pos:"n", level:"C1", meanings:["눈에 거슬리는 것"],
    syn:["ugly sight","blot on the landscape","monstrosity"],
    ex:[{ s:"The half-built tower is an {{}} on the skyline.", f:"eyesore", ko:"그 반쯤 지은 탑은 스카이라인에서 눈에 거슬리는 것이다." }] }
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
  "opinion piece":"의견 기고문",
  "poisonous":"유독한, 독이 있는",
  "potency":"효력, 위력",
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
  "expressiveness":"표현력이 풍부함",
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
  "personify":"체현하다, 의인화하다",
  "put to shame":"부끄럽게 만들다",
  "rising":"떠오르는, 상승하는",
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
  "fellow feeling":"동류 의식, 공감",
  "fence in":"울타리로 둘러막다",
  "follow the example of":"~의 본을 따르다",
  "give a job to":"~에게 일자리를 주다",
  "give power to":"~에게 힘을 주다",
  "importance":"중요성",
  "legislate":"법을 제정하다",
  "make possible":"가능하게 만들다",
  "observed":"관찰된",
  "pass into law":"법으로 통과시키다",
  "prominence":"두드러짐, 현저함",
  "put into code":"부호로 바꾸다",
  "put into effect":"시행하다",
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
  "fully absorb":"완전히 몰입시키다",
  "hold the attention of":"~의 주의를 붙들다",
  "imperil":"위험에 빠뜨리다",
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
  "hand over to":"~에게 넘기다",
  "install as king":"왕으로 세우다",
  "make certain":"확실히 하다",
  "make sure":"반드시 ~하게 하다",
  "put in the care of":"~의 보살핌에 맡기다",
  "put on the throne":"왕좌에 앉히다",
  "put one's name down":"이름을 올리다",
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
  "evenness":"고름, 균등함",
  "final chapter":"마지막 장",
  "gradual destruction":"서서히 무너짐",
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
  "widespread disease":"널리 퍼진 질병",

  /* ── 8차: erroneous ~ evaluate (35개) ───────────────── */
  "blow up":"폭발하다",
  "burst forth":"터져 나오다",
  "clear out":"비우다, 치우다",
  "code of conduct":"행동 규범",
  "conduct safely":"안전하게 데려가다",
  "cultural":"문화의",
  "endless time":"끝없는 시간",
  "hold in high regard":"높이 받들다",
  "incorrect":"부정확한",
  "increase sharply":"급격히 늘다",
  "land holding":"소유 토지",
  "long-standing":"오래 이어져 온",
  "moral philosophy":"도덕 철학",
  "moral principles":"도덕 원칙",
  "move out":"옮겨 나가다",
  "possessions":"소유물, 재산",
  "principled":"원칙을 지키는",
  "recognized":"인정받는",
  "remove to safety":"안전한 곳으로 옮기다",
  "shirk":"회피해 버리다",
  "step up":"단계적으로 높이다",
  "temporary":"일시적인",
  "tribal":"부족의",
  "undying":"죽지 않는",
  "unethical":"비윤리적인",
  "upright":"정직한, 청렴한",
  "well-founded":"근거가 확실한",

  /* ── 9차: evaporate ~ excess (28개) ───────────────── */
  "anomaly":"변칙, 이례",
  "arouse":"자극하다, 일깨우다",
  "avoidance":"회피, 기피",
  "blow out of proportion":"지나치게 부풀리다",
  "bring to mind":"떠오르게 하다",
  "clear-cut":"명확한",
  "dig up":"파내다",
  "dodging":"슬쩍 피함",
  "dry up":"말라 없어지다",
  "gradual change":"서서히 일어나는 변화",
  "grow gradually":"서서히 자라다",
  "other than":"~이 아닌, ~말고는",
  "outdo":"앞지르다",
  "overabundance":"지나치게 많음",
  "progression":"진행, 연속",
  "shine":"두각을 나타내다",
  "special case":"특수한 경우",
  "stand out":"돋보이다",
  "surpass":"능가하다",
  "tax dodging":"탈세",
  "testimony":"증언",
  "too much":"너무 많은 것",
  "ultimately":"궁극적으로",
  "vaporize":"기화시키다",

  /* ── 10차: excessive ~ exhibition (44개) ───────────────── */
  "administrator":"관리자, 행정관",
  "barring":"차단, 못 들어오게 함",
  "blow out":"불어 내보내다",
  "breathe out":"숨을 내쉬다",
  "bring to bear":"작용시키다",
  "capital punishment":"사형",
  "cry":"외침, 부르짖음",
  "cry out":"크게 외치다",
  "day trip":"당일 여행",
  "dead tired":"몹시 지친",
  "death penalty":"사형 제도",
  "drained":"진이 빠진",
  "excused":"면제된",
  "expel air":"공기를 밀어내다",
  "exposition":"박람회, 전시",
  "free from":"~에서 벗어난",
  "immoderate":"절제 없는",
  "manager":"경영자, 운영자",
  "model":"모범이 되는",
  "not subject to":"적용받지 않는",
  "omission":"생략, 누락",
  "only":"오직",
  "outcry":"고함, 절규",
  "over the top":"정도를 넘은",
  "public display":"공개 전시",
  "put forth":"내세우다, 발휘하다",
  "putting to death":"사형을 집행함",
  "select":"선별된",
  "senior official":"고위 간부",
  "shout of surprise":"놀라서 내는 소리",
  "showcase":"전시 행사",
  "shutting out":"몰아냄",
  "sole":"유일한, 독점의",
  "solely":"단독으로",
  "trip":"여행, 이동",
  "wear out":"지치게 하다",
  "wield":"휘두르다, 행사하다",
  "worked up":"들뜬",
  "worn out":"녹초가 된",

  /* ── 11차: exhilarating ~ explicit (38개) ───────────────── */
  "actual fact":"실제 사실",
  "admonish":"타이르다, 훈계하다",
  "anticipation":"기대감",
  "be present":"있다, 존재하다",
  "be real":"실재하다",
  "being":"존재하는 것",
  "controlled trial":"통제된 시험",
  "cost":"비용, 대가",
  "drive out":"쫓아 버리다",
  "enlargement":"확대, 증대",
  "expectation":"기대, 예상되는 것",
  "grow bigger":"더 커지다",
  "increase in size":"크기가 커짐",
  "know-how":"실무 지식",
  "likelihood":"가능성",
  "live on":"계속 살아 있다",
  "outgoings":"지출액",
  "outlay":"경비 지출",
  "preach to":"설교하듯 말하다",
  "run out":"기한이 다하다",
  "send into exile":"망명 보내다",
  "skilled person":"숙련된 사람",
  "special skill":"특수 기능",
  "specialist":"특정 분야 전문가",
  "spell out":"자세히 설명하다",
  "spending":"지출, 씀",
  "spread out":"퍼지다, 펼쳐지다",
  "stated plainly":"분명히 밝힌",
  "stirring":"가슴 뛰게 하는",
  "sum spent":"쓴 금액",
  "technical knowledge":"기술 지식",
  "thrilling":"짜릿한",
  "trial run":"시험 가동",
  "unambiguous":"모호하지 않은",
  "urge strongly":"강하게 권하다",

  /* ── 12차: explicitly ~ extinct (44개) ───────────────── */
  "beautifully made":"아름답게 만들어진",
  "being exposed":"드러나 있음",
  "bring to light":"세상에 드러내다",
  "broad":"넓은, 폭넓은",
  "bursting":"터짐",
  "clearly":"분명하게",
  "detonation":"폭발, 기폭",
  "died out":"멸종해 사라진",
  "drawn-out":"질질 늘어진",
  "far-reaching":"파급 효과가 큰",
  "highly unstable":"매우 불안정한",
  "in so many words":"딱 그렇게 말로",
  "investigation":"조사, 탐구",
  "kill off":"죽여 없애다",
  "lengthen":"길게 하다",
  "lengthened":"길어진",
  "lengthening":"길게 늘임",
  "liable to explode":"폭발할 수 있는",
  "no longer existing":"더 이상 존재하지 않는",
  "outer":"바깥쪽의",
  "plainly":"숨김없이, 있는 그대로",
  "prolonged":"오래 끌어진",
  "prolonging":"기간을 늘림",
  "revelation":"폭로, 뜻밖의 사실",
  "sell abroad":"해외에 팔다",
  "send overseas":"해외로 보내다",
  "ship out":"실어 내보내다",
  "squeeze profit from":"~에서 이익을 짜내다",
  "stretch out":"펴서 늘이다",
  "surface-level":"표면상의",
  "surviving":"살아남은",
  "travel through":"~을 돌아다니다",
  "unfair use":"부당한 이용",
  "uncovering":"벗겨 냄, 드러냄",
  "use unfairly":"부당하게 이용하다",
  "volatile":"휘발성의, 불안정한",
  "wide-ranging":"폭넓은",
  "wiped out":"완전히 없어진",

  /* ── 13차: extinction ~ eyesore (19개, 마지막) ───────────────── */
  "blot on the landscape":"경관을 망치는 것",
  "coming from outside":"밖에서 들어오는",
  "distill":"증류해 뽑아내다",
  "dying out":"멸종해 감",
  "monstrosity":"기괴하게 흉한 것",
  "non-inherent":"본래의 것이 아닌",
  "outgoing person":"사교적인 사람",
  "people person":"사람을 좋아하는 사람",
  "phenomenal":"경이로운",
  "quench":"물로 끄다",
  "snuff out":"꺼 버리다",
  "sociable type":"어울리기 좋아하는 사람",
  "take out":"꺼내다",
  "ugly sight":"보기 흉한 광경",
  "wiping out":"완전히 없앰"
});
