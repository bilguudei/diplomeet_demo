'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1e9b51807673d6a9bc1fdbb059fbe2b7",
"version.json": "e30a41376aeedea528e99f5af23d4352",
"index.html": "e318af9fef344107932edcfd9035a966",
"/": "e318af9fef344107932edcfd9035a966",
"main.dart.js": "99cc61b3dbbd2a45841958b497ec14c8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c3479674bf8544310a73d859685c0962",
"assets/AssetManifest.json": "85d9c974f4064b96fa413f77277a5ee6",
"assets/NOTICES": "acd07245613ebc22e9e58c41969e6b6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fdc5170e0401cc7346a3d1780606463c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9a92ca48bd2bdb7b1a7bcbfc95f90ab2",
"assets/fonts/MaterialIcons-Regular.otf": "b4d9b8819281c21bef4199c3322add67",
"assets/assets/icons/ic_phone.svg": "ac882541f59bf1f831beb69f0cdd015e",
"assets/assets/icons/ic_education.svg": "d4ce3f4e8286c50974d38418ee4dc23d",
"assets/assets/icons/ic_hide_pass.svg": "a946f0d9603e79061f613713b8434f7f",
"assets/assets/icons/ic_checklist.svg": "f06e9f144d48985a68fee63d79c00e3d",
"assets/assets/icons/ic_lang_mn.svg": "56dab6302e1a8f83c629f6bbac828cd6",
"assets/assets/icons/ic_x.svg": "e53e22e9e086391c9878892363ce0bcb",
"assets/assets/icons/ic_info.svg": "8386bc73c6d4ca6b5291ce90a7f61ba0",
"assets/assets/icons/ic_work.svg": "cbcbe17838f7154a683316d1e2177d91",
"assets/assets/icons/ic_qr.svg": "d904ad93bbb01350e5eea857c53ec252",
"assets/assets/icons/ic_bell.svg": "882312643f2c1e23059c6da31e383bc2",
"assets/assets/icons/ic_book.svg": "75004f769d5597766c700cc475224133",
"assets/assets/icons/ic_location.svg": "b1fa13c489250976c20a1f3ec38d61f5",
"assets/assets/icons/ic_home.svg": "1670701cc757ad0cb4fc49b110beb7ef",
"assets/assets/icons/ic_user.svg": "281d1a44e4d188d565234b01cace2728",
"assets/assets/icons/ic_language.svg": "077baac38c6d58a0f8e5576ef6e396cd",
"assets/assets/icons/ic_show_pass.svg": "7ccf3c73401f9318bf692b1885b35b86",
"assets/assets/icons/ic_calendar.svg": "3a92ff363a9ba2d0ecbfada5abca474f",
"assets/assets/icons/ic_arrow_right.svg": "844378445a9f8f43efaa2a294f025775",
"assets/assets/icons/ic_lang_en.svg": "2bf5e6d6e3eca764f2f6e3f539a87d7f",
"assets/assets/icons/ic_menu.svg": "925d57385a1d494e55e65a54f0465bba",
"assets/assets/icons/ic_email.svg": "9d1c37fd77c02b65738b14b95ee674cc",
"assets/assets/icons/ic_app_icon.svg": "5fb2890eff5046e3033ce1b758bd6d70",
"assets/assets/icons/ic_back.svg": "8f54eceb0fd6472cc505570dbdc91503",
"assets/assets/icons/ic_pass.svg": "ee3d78093b148f760d75d5f22b8afb83",
"assets/assets/icons/ic_theme.svg": "07270073b2d42bb583710183cbaab1a2",
"assets/assets/icons/ic_edit.svg": "3adf27a9be40817393193ac5e6efa478",
"assets/assets/icons/ic_logout.svg": "1186446b7d2b091ddf39ad96388cefe0",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
