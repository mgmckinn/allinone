/** @format */

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("schedule-app-cache").then((cache) => {
      return cache.addAll([
        "/",
        "index.html",
        "assets/images/A_flat-design_vector_graphic_digital_illustration.png",
        "styles.css",
        "app.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
