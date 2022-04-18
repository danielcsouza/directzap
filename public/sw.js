self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open('direct-zap-v3').then(function (cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/img/logo.svg',
          '/manifest.json',
          '/img/icons/16x16.png',
          '/img/icons/36x36.png',
          '/img/icons/48x48.png',
          '/img/icons/72x72.png',
          '/img/icons/96x96.png',
          '/img/icons/144x114.png',
          '/img/icons/192x192.png',
          '/img/icons/256x256.png',
          '/img/icons/512x512.png',
          '/img/icons/1024x1024.png',          
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (request) {
        return request || fetch(event.request)
      })
    )
  })
  
  // Delete outdated caches
  self.addEventListener('activate', function (event) {
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key, i) {
          if (key !== "direct-zap-v3") {
            return caches.delete(keyList[i])
          }
        }))
      })
    )
  })