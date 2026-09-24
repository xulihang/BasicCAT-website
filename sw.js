// Service Worker for CDN offloading
// Intercepts requests to /album/*, /assets/* and /gallery/* and fetches from
// CDN mirrors. Tries jsdmirror → jsdelivr → origin (first success wins).
//
// JS and CSS deliberately do NOT go to the CDN. They block rendering and first
// input, so a cross-origin round trip — or a CDN timeout before the origin
// fallback — on every cold load is exactly what inflates INP. Same-origin:
// fast, and no failure mode.
//
// Nothing is cached in the Cache API. Content always tracks the deployed
// commit; the only optimisations are a per-request deadline and a short
// Cache-Control on the response handed back to the browser, so a bad mirror
// can't stall the page and a broken image can't stick for a week.

const CDN_URLS = [
  'https://cdn.jsdmirror.com/gh/xulihang/BasicCAT-website@master',
  'https://cdn.jsdelivr.net/gh/xulihang/BasicCAT-website@master',
];

// Per-CDN deadline. jsdmirror has been observed taking 60s and then answering
// 554 under a dozen-image burst; without a cap that stall is paid on every
// image before the origin fallback even gets a chance to run. Above a few
// seconds a visitor has already seen the hole in the page, so give up and let
// the origin serve it. Mirrors in the Pacific are slow but reachable, so this
// is deliberately more generous than a same-continent timeout would be.
const CDN_TIMEOUT_MS = 5000;

// How long a successful CDN response stays in the browser's HTTP cache. The
// CDNs send `max-age=604800`, which pins a stale image in place for a week:
// a same-path replacement on GitHub is invisible until that expires. Pinning
// the CSS instead makes deleted files self-heal and replaced ones recover on
// reload.
const RESPONSE_CACHE_TTL_S = 600;

// Paths to offload to CDN
const CDN_PATHS = ['/album/', '/assets/','/gallery/'];

// File extensions that benefit from CDN (static assets).
// js/css are intentionally excluded: see the note at the top.
const CDN_EXTENSIONS = /\.(png|jpg|jpeg|gif|svg|webp|avif|ico|mp4|webm|pdf|zip|json|woff2?|ttf|eot)$/i;

function shouldUseCDN(url) {
  const urlObj = new URL(url);
  // Only intercept same-origin requests
  if (urlObj.origin !== self.location.origin) return false;
  const path = urlObj.pathname;
  return CDN_PATHS.some(prefix => path.startsWith(prefix)) && CDN_EXTENSIONS.test(path);
}

// Fetch one CDN with a deadline. Returns null on timeout, network error, or
// any non-ok status so the caller can move on to the next mirror.
async function tryOneCDN(base, path) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CDN_TIMEOUT_MS);
  try {
    const res = await fetch(base + path, {
      mode: 'cors',
      credentials: 'omit',
      signal: controller.signal,
    });
    return res.ok ? res : null;
  } catch (_) {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// Returns a CDN-served response with our own TTL, or null if the CDNs can't
// serve it.
async function tryCDNs(path) {
  for (const base of CDN_URLS) {
    const res = await tryOneCDN(base, path);
    if (!res) continue;

    // The CDN sends `max-age=604800`. Re-wrap with our own TTL so a broken
    // path can't stick in the browser cache for a week.
    const headers = new Headers(res.headers);
    headers.set('Cache-Control', `public, max-age=${RESPONSE_CACHE_TTL_S}`);
    const body = await res.blob();
    return new Response(body, { status: 200, headers });
  }
  return null;
}

// Last resort: the origin. Wrapped rather than returned directly so a 404 from
// GitHub Pages gets a short TTL too — otherwise a missing image is cached as
// "missing" for the origin's max-age and the page shows a broken tile even
// after the file lands.
async function fromOrigin(request) {
  const res = await fetch(request);
  if (!res.ok) {
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers: new Headers(res.headers),
    });
  }

  const headers = new Headers(res.headers);
  const cc = headers.get('Cache-Control') || '';
  const ttl = /max-age=(\d+)/.exec(cc);
  // Leave the origin's own TTL alone when it is already short (GitHub Pages
  // serves 600s); only clamp it when it is longer than our cap.
  if (!ttl || Number(ttl[1]) > RESPONSE_CACHE_TTL_S) {
    headers.set('Cache-Control', `public, max-age=${RESPONSE_CACHE_TTL_S}`);
  }
  const body = await res.blob();
  return new Response(body, { status: 200, headers });
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
    (async () => {
      const cached = await tryCDNs(url.pathname);
      if (cached) return cached;
      return fromOrigin(request);
    })()
  );
});
