// Service Worker for CDN offloading
// Intercepts requests to /album/* and /assets/* and fetches from jsDelivr CDN
// Falls back to the original URL if CDN fails

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/xulihang/BasicCAT-website@master';

// Paths to offload to CDN
const CDN_PATHS = ['/album/', '/assets/'];

// File extensions that benefit from CDN (static assets)
const CDN_EXTENSIONS = /\.(png|jpg|jpeg|gif|svg|webp|ico|mp4|webm|pdf|zip|json|js|css|woff2?|ttf|eot)$/i;

function shouldUseCDN(url) {
  const urlObj = new URL(url);
  // Only intercept same-origin requests
  if (urlObj.origin !== self.location.origin) return false;
  const path = urlObj.pathname;
  return CDN_PATHS.some(prefix => path.startsWith(prefix)) && CDN_EXTENSIONS.test(path);
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
  const cdnUrl = CDN_BASE + url.pathname;

  event.respondWith(
    fetch(cdnUrl, { mode: 'cors', credentials: 'omit' })
      .then(response => {
        if (response.ok) return response;
        throw new Error('CDN returned ' + response.status);
      })
      .catch(() => fetch(request))
  );
});
