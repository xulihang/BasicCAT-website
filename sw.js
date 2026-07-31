// Service Worker for CDN offloading
// Intercepts requests to /album/* and /assets/* and fetches from CDN mirrors
// Tries jsdmirror → jsdelivr → origin (first success wins)

const CDN_URLS = [
  'https://cdn.jsdmirror.com/gh/xulihang/BasicCAT-website@master',
  'https://cdn.jsdelivr.net/gh/xulihang/BasicCAT-website@master',
];

// Paths to offload to CDN
const CDN_PATHS = ['/album/', '/assets/','/gallery/'];

// File extensions that benefit from CDN (static assets)
const CDN_EXTENSIONS = /\.(png|jpg|jpeg|gif|svg|webp|ico|mp4|webm|pdf|zip|json|js|css|woff2?|ttf|eot)$/i;

function shouldUseCDN(url) {
  const urlObj = new URL(url);
  // Only intercept same-origin requests
  if (urlObj.origin !== self.location.origin) return false;
  const path = urlObj.pathname;
  return CDN_PATHS.some(prefix => path.startsWith(prefix)) && CDN_EXTENSIONS.test(path);
}

async function tryCDNs(path) {
  for (const base of CDN_URLS) {
    try {
      const res = await fetch(base + path, { mode: 'cors', credentials: 'omit' });
      if (res.ok) return res;
    } catch (_) {
      // try next
    }
  }
  throw new Error('All CDNs failed');
}

// Install - activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate - take control of all clients
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Fetch - intercept and route to CDN, fallback to origin
self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;
  if (!shouldUseCDN(request.url)) return;

  const url = new URL(request.url);

  event.respondWith(
    tryCDNs(url.pathname).catch(() => fetch(request))
  );
});
