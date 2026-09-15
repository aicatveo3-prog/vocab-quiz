/* 서비스 워커 — 앱 셸을 캐시해 오프라인에서도 학습할 수 있게 한다.
   데이터를 수정한 뒤에는 CACHE 버전을 올려야 새 파일이 반영된다. */
var CACHE = 'vocab-quiz-v24';
var ASSETS = [
  './',
  'index.html',
  'css/style.css',
  'js/data/words.js',
  'js/store.js',
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
