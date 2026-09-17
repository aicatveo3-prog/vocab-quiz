/**
 * firebase-config.js — Firebase 접속 설정
 *
 * 이 값들은 웹 클라이언트에 그대로 실려 나가도록 설계된 공개 값이다.
 * 저장소에 커밋해도 문제없다. 실제 보호막은 Firestore 보안 규칙이다:
 *
 *   match /users/{uid} {
 *     allow read, write: if request.auth != null && request.auth.uid == uid;
 *   }
 *
 * ⚠️ 반면 "서비스 계정 JSON 키"는 관리자 비밀키이므로 절대 여기에 두지 않는다.
 */
window.FIREBASE = {
  /* SDK 버전 — gstatic CDN은 정확한 버전을 요구한다.
     이 버전이 존재하지 않으면 스크립트가 404로 조용히 실패한다.
     그때는 아래 한 줄만 고치면 된다 (앱이 화면에 안내를 띄운다).
     최신 버전은 Firebase 콘솔의 웹 앱 설정 코드나 릴리스 노트에서 확인. */
  sdkVersion: '12.19.0',

  config: {
    apiKey: 'AIzaSyComnoq3YAk5wFR95LmLpkh37gSLRBSqoE',
    authDomain: 'vocab-quiz-35c1d.firebaseapp.com',
    projectId: 'vocab-quiz-35c1d',
    // storageBucket / messagingSenderId / databaseURL / measurementId 는
    // 이 앱이 쓰지 않는 기능이라 넣지 않았다. Auth + Firestore만 사용한다.
    appId: '1:996599631403:web:6af1e7d6f8cfb28171646e'
  }
};
