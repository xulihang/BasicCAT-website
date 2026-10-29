// Service Worker for CDN offloading
// Intercepts requests to /album/*, /assets/* and /gallery/* and fetches from
// a single CDN mirror: jsdelivr → origin (first success wins).
//
// JS and CSS deliberately do NOT go to the CDN. They block rendering and first
// input, so a cross-origin round trip — or a CDN timeout before the origin
// fallback — on every cold load is exactly what inflates INP. Same-origin:
// fast, and no failure mode.
//
// Nothing is cached in the Cache API. Content always tracks the deployed
// commit; the only optimisations are a per-request deadline and a short
// Cache-Control on the response handed back to the browser, so a bad CDN
// can't stall the page and a broken image can't stick for a week.

const CDN_URLS = [
  'https://cdn.jsdelivr.net/gh/xulihang/BasicCAT-website@master',
];

// Per-CDN deadline. A CDN that hangs without a cap would stall every image
// before the origin fallback even gets a chance to run, and with only one
// mirror there is nothing else to fall through to but the origin. Two seconds
// is long enough for a healthy cross-region fetch and short enough that a
// stalled CDN is indistinguishable from no CDN at all.
const CDN_TIMEOUT_MS = 2000;

// How long a successful CDN response stays in the browser's HTTP cache. The
// CDN sends `max-age=604800`, which pins a stale image in place for a week:
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

// One CDN attempt, with the deadline covering the body as well as the headers.
// Returns null on timeout, network error, non-ok status, or a redirect, so the
// caller can fall back to the origin.
//
// redirect: 'manual' — when the file isn't in jsdelivr's cache (the first hit
// after every 12h s-maxage, and after any push) it answers with a 301 to
// raw.githubusercontent.com instead of serving the bytes itself. Following
// that redirect hands the request to a host that is slow or unreachable from
// China and, worse, can return headers promptly and then hang mid-body. That
// is the white-image case: the fetch never settles, so the origin fallback in
// the handler below never runs and the browser waits forever. Treating a
// redirect as a miss sends the request straight to the origin instead.
async function tryOneCDN(base, path) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CDN_TIMEOUT_MS);
  try {
    const res = await fetch(base + path, {
      mode: 'cors',
      credentials: 'omit',
      redirect: 'manual',
      signal: controller.signal,
    });
    if (!res.ok) return null;

    // The deadline is still armed here. Headers arriving is not the same as
    // the image being deliverable — a throttled body can stall indefinitely
    // and, without this, the fetch event would never resolve.
    const body = await res.blob();

    const headers = new Headers(res.headers);
    // The body is already decoded by fetch(), so the original encoding headers
    // would tell the browser to decode it a second time — which fails, and
    // shows up as a blank image.
    headers.delete('Content-Encoding');
    headers.delete('Content-Length');
    headers.set('Cache-Control', `public, max-age=${RESPONSE_CACHE_TTL_S}`);
    return new Response(body, { status: 200, headers });
  } catch (_) {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// Returns a CDN-served response, or null if the CDNs can't serve it.
async function tryCDNs(path) {
  for (const base of CDN_URLS) {
    const res = await tryOneCDN(base, path);
    if (res) return res;
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

  // Range requests are media players streaming a video. Buffering the CDN
  // response into a Blob below would drop the ranges and make the video wait
  // for the entire file, so let those go straight to the network.
  if (request.headers.has('range')) return;

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
