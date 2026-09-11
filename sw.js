/* Cache lại trang + font + nhạc để lần sau mở không cần mạng.

   Trang HTML thì ưu tiên mạng trước (có bản mới là thấy ngay), hỏng mạng
   mới lấy bản đã lưu. Font/nhạc/ảnh thì lấy bản đã lưu trước cho nhanh.
   Đổi số ở CACHE mỗi lần deploy để dọn sạch bản cũ. */
const CACHE = 'sorry-v4';
const SHELL = ['./', './index.html'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(SHELL.map((u) => c.add(new Request(u, { cache: 'reload' })))))
      .then(() => self.skipWaiting())
  );
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
  const sameOrigin = url.origin === location.origin;
  const cacheable =
    sameOrigin ||
    /(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com|cdn\.tailwindcss\.com)$/.test(url.hostname);

  if (!cacheable) return;

  const isPage = req.mode === 'navigate' ||
                 (sameOrigin && /\.html?$/.test(url.pathname));

  /* Trang: mạng trước — khỏi bị kẹt ở bản cũ sau khi deploy lại */
  if (isPage) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  /* Còn lại: bản đã lưu trước cho nhanh */
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
