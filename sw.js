/* Cache lại trang + font + nhạc để lần sau mở không cần mạng. */
const CACHE = 'sorry-v1';
const SHELL = ['./', './index.html'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const cacheable =
    url.origin === location.origin ||
    /(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com|cdn\.tailwindcss\.com)$/.test(url.hostname);

  if (!cacheable) return;

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req)
        .then((res) => {
          // res.ok bỏ qua response 206 (partial) của audio — không cache được
          if (res && (res.ok || res.type === 'opaque') && res.status !== 206) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => hit);
    })
  );
});
