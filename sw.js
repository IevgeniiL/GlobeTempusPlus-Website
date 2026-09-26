const CACHE = 'tempus-v6';
/* Resolve paths relative to this script so GitHub Pages project URLs (/repo/) work. */
const base = new URL('./', self.location.href).href;
const ASSETS = [
  base,
  new URL('index.html', base).href,
  new URL('images/screens/01-main.png', base).href,
  new URL('images/screens/02-compact.png', base).href,
  new URL('images/screens/03-add-location.png', base).href,
  new URL('images/screens/04-edit-list.png', base).href,
  new URL('images/screens/05-availability.png', base).href,
  new URL('images/screens/06-swipe-actions.png', base).href,
  new URL('images/screens/07-day-agenda.png', base).href,
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
