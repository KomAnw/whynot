/* eslint-disable no-restricted-globals, no-return-await */
const VERSION = 'v1';
const STATIC_CACHE_NAME = `s_app_${VERSION}`;
const DYNAMIC_CACHE_NAME = `d_app_${VERSION}`;

const URLS = ['index.html', '/fonts/Handjet.woff', '/fonts/Handjet.woff2', '/vite.svg', '/src/index.tsx'];

self.addEventListener('install', async () => {
  const cache = await caches.open(STATIC_CACHE_NAME);

  await cache.addAll(URLS);
});

self.addEventListener('activate', async () => {
  const cacheNames = await caches.keys();

  await Promise.all(
    cacheNames
      .filter(name => name !== STATIC_CACHE_NAME)
      .filter(name => name !== DYNAMIC_CACHE_NAME)
      .map(name => caches.delete(name))
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  const url = new URL(request.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

async function cacheFirst(request) {
  const cached = await caches.match(request);

  return cached ?? (await fetch(request));
}

async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);

  try {
    const response = await fetch(request);

    await cache.put(request, response.clone());

    return response;
  } catch (e) {
    const cached = await cache.match(request);

    return cached;
  }
}
