const base = ".";

const assets = [
    "/",
    "/index.html",
    "/assets/aeroware.png",
    "/assets/fb.png",
    "/assets/gh.png",
    "/assets/icon.png",
    "/assets/infinitelytyped.png",
    "/assets/kali.png",
    "/assets/nb.png",
    "/assets/nova.png",
    "/assets/particles.json",
    "/assets/s.png",
    "/assets/spotify.png",
    "/assets/ts.png",
    "/assets/tw.png",
    "/assets/vade.jpeg",
    "/assets/yt.png",
    "/assets/icons/icon72.png",
    "/assets/icons/icon144.png",
    "/assets/icons/icon192.png",
];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(base).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});
