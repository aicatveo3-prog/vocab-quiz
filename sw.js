/* 서비스 워커 — 앱 셸을 캐시해 오프라인에서도 학습할 수 있게 한다.
   데이터를 수정한 뒤에는 CACHE 버전을 올려야 새 파일이 반영된다. */
var CACHE = 'vocab-quiz-v82';
var ASSETS = [
  './',
  'index.html',
  'css/style.css',
  'js/data/words.js',
  'js/data/words-b.js',
  'js/data/words-c.js',
  'js/data/words-d.js',
  'js/data/gloss.js',
  'js/data/pron.js',
  'js/store.js',
  'js/firebase-config.js',
  'js/sync.js',
  'js/quizgen.js',
  'js/conquer.js',
  'js/modes.js',
  'js/app.js',
  'manifest.json',
  'icon.svg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;

  /* 같은 출처의 앱 파일만 캐시한다.
     외부 요청까지 캐시 우선으로 처리하면 Firebase 인증 토큰과 동기화 응답이
     낡은 캐시로 고정되어 로그인이 이상하게 동작한다. Firebase SDK와 API는
     항상 네트워크로 나가게 두고, 오프라인일 때는 동기화만 쉬면 된다
     (localStorage가 정답이므로 학습은 그대로 된다). */
  var url;
  try { url = new URL(e.request.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(function (hit) {
      return hit || fetch(e.request).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return res;
      }).catch(function () { return caches.match('index.html'); });
    })
  );
});
