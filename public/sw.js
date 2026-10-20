const STATIC_CACHE = "ayo-rental-static-v2";
const PAGE_CACHE = "ayo-rental-pages-v1";
const APP_SHELL = [
  "/",
  "/offline.html",
  "/ayo-logo.svg",
  "/ayo-icon.svg",
  "/ayo-icon-192.png",
  "/ayo-icon-512.png",
  "/hero-rental-car.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(APP_SHELL)),
      self.skipWaiting(),
    ]),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith("ayo-rental-") &&
                key !== STATIC_CACHE &&
                key !== PAGE_CACHE,
            )
            .map((key) => caches.delete(key)),
        ),
      ),
      self.clients.claim(),
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            const cache = await caches.open(PAGE_CACHE);
            await cache.put(request, response.clone());
          }
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);
          return cachedPage || (await caches.match("/offline.html"));
        }),
    );
    return;
  }

  if (
    url.pathname.startsWith("/_next/static/") ||
    APP_SHELL.includes(url.pathname)
  ) {
    event.respondWith(
      caches.match(request).then(async (cached) => {
        if (cached) {
          return cached;
        }
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(STATIC_CACHE);
          await cache.put(request, response.clone());
        }
        return response;
      }),
    );
  }
});
