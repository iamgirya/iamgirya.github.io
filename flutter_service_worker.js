'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f3f7039447a8002c10f0eb54c6ccaf60",
"assets/AssetManifest.bin.json": "7ef387c751e485f96dcfdc5448925306",
"assets/AssetManifest.json": "1f3c19ba3bc7a3e151d274982d36d936",
"assets/assets/%25D0%25B2%25D0%25B5%25D0%25BA%25D1%2582%25D0%25BE%25D1%2580%25D0%25BD%25D1%258B%25D0%25B5%25D0%25B8%25D0%25BB%25D0%25BB%25D1%258E%25D1%2581%25D1%2582%25D1%2580%25D0%25B0%25D1%2586%25D0%25B8%25D0%25B8.png": "bcc5209f8d647090f58b205414a414e7",
"assets/assets/%25D0%25BA%25D0%25BE%25D0%25BD%25D1%2586%25D0%25B5%25D0%25BF%25D1%2582%25D1%258B%25D0%25B8%25D1%2581%25D0%25BA%25D0%25B5%25D1%2582%25D1%2587%25D0%25B8.png": "6d39fc053a14cd5ae18753e642e3e598",
"assets/assets/%25D0%25BF%25D0%25BE%25D0%25BB%25D0%25B8%25D0%25B3%25D1%2580%25D0%25B0%25D1%2584%25D0%25B8%25D1%258F.png": "e623e659fbf408a7629cdff2f5b33c86",
"assets/assets/%25D1%2588%25D1%2580%25D0%25B8%25D1%2584%25D1%2582.png": "c271bac1873712f59edbcc61c71cfd6d",
"assets/assets/ai.png": "7232ea6969c6409efaaad0368435f08e",
"assets/assets/be.svg": "476740cd83374c256f42884e7a381dc2",
"assets/assets/figma.svg": "02175343cc05cfb9ba0f49d374ae66f9",
"assets/assets/fontlab-studio.png": "d3aebe6385bb6de2c1e160a68a0eb956",
"assets/assets/fonts/AA%2520Stetica%2520Italic.otf": "e68da889ebfa80bae94d5de373b1a9c2",
"assets/assets/fonts/AA%2520Stetica%2520Light%2520Italic.otf": "0ab8a0bc26aa69f2c0d8ab7d80e8dff9",
"assets/assets/fonts/AA%2520Stetica%2520Light.otf": "ca878e5bd3a583f55a55262c3e2d5051",
"assets/assets/fonts/AA%2520Stetica%2520Medium%2520Italic.otf": "1c09b48f6d2193ccab89fed5d17f503a",
"assets/assets/fonts/AA%2520Stetica%2520Medium.otf": "dd81b3b2b35ea3db0e5081078f07990b",
"assets/assets/fonts/AAStetica%2520Black_0.otf": "475085dde85e602bba866333dfec229d",
"assets/assets/fonts/AAStetica%2520Bold%2520Italic.otf": "de45d4f50e4455a6494e2471f310275f",
"assets/assets/fonts/AAStetica-Bold.otf": "75ab8bb1fad56d33f9aa3372b7a6fede",
"assets/assets/fonts/AAStetica-Regular.otf": "d61b279a9b14986698d1479061fa488c",
"assets/assets/id.png": "19b2fc7efa6795f50d95ff7f290492cf",
"assets/assets/mail.svg": "c8dd193703ac2c9a9aa1859338886587",
"assets/assets/my_photo.png": "94d287b2f47eafd8a85b125aace07e67",
"assets/assets/ps.png": "0e0dbfd118ee3a39266d697a16cfc303",
"assets/assets/telegram.svg": "4f881af5aba746d471fc27cbdffe32b3",
"assets/FontManifest.json": "94bf13a22c459fdef5fd670e465a6b89",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "fdec358ed44631fe002d9203741dd10c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "31a15518e22c45290e88d11619197fb0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c0c04426466a9ec5be50758ee9da3a4",
"/": "2c0c04426466a9ec5be50758ee9da3a4",
"main.dart.js": "37f4b81fe5745c97e3fbf3a964fe9bbe",
"manifest.json": "fd78a13be0f04d6e59cf6f844a52dbc4",
"version.json": "ca56763004cabf29e9c24e2ed99cd285"};
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
