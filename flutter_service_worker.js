'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bc8bce359787481cf879b680f275fe9c",
".git/config": "4a763d025a55fac91020f93f3f732b5e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45aca5de5e85356232efd6225caa6391",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5218242797a6d7394bfd079d1a203d28",
".git/logs/refs/heads/main": "498ab0540a041294a5f9546b5a446bc4",
".git/logs/refs/remotes/origin/main": "dfa52ec2cc64a35fb134f43eaca555c4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/19e192a1aa6e81e87e16249182f90a10aef7b2": "9b57815af530014ffb02c55118e7cafe",
".git/objects/12/233f80b5dbfbf5335937d7c8efe90f21189283": "2c6e3a88491fcda4ba8f53904cffa2de",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/19/131ab8bb5f10cb159b3f1f3c7f872d666f73f5": "0e6ae79caa59beea1527a3b4680175e3",
".git/objects/1c/cd493ad46e30924616d0601fae764779b7e766": "500ab90e272061a16248db491dca1ecf",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/8475bbc105fb12836be618bf786d2200c341dd": "66db2d050b6eb96723a6b3f7ebecf69c",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/51c14ea3933e77f6c7bad499beb292c7e98ea5": "605a1436d6ff8a79ea17ca1556c66a4b",
".git/objects/24/e92972c03067b7e999883ac1372d1b965dbeb8": "eebb2a685f909b0f51e297e3176ecc32",
".git/objects/29/d08fc6a20f721c4daeab4883d249c19626619f": "5fc26853eff8e47f660c1a7d7db275ca",
".git/objects/2b/d451a70eaef7807cdc33e7ea3ab8352717ffa6": "964199c29f1d89ab5d2b869449f93963",
".git/objects/2b/f9ded9c1532039bc15bfacec2b0cf7b25f9fca": "9b01de63c690c4afbd3647acda15f723",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/40/3fa30a40ea1c116138188796955a7f5de8512b": "95519a898e131b1b6171673c0b09619e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/94762a6fdeb30d18d56ecf7dffe14f015d75a7": "bce25e4669b607e35df988d6e96aa950",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/4e7eb3af304c043635928389b957fdb2b6ffe3": "6d0c2cc99c2d28165cdad4a7f9fcdc58",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5d/8efc5478abc1671c593d1d978c25e845dc3db0": "c0d2b432d11d10bb93ba33f85257e733",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/e561602c1635cf123d9fca5a37fe26a5c8fb9a": "307a520a53cbe4b4bb934e9ea36fab6d",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/329ed11389fdbc5d02b6dca0ec6e7fcad0ed20": "28cf24391cfd625d8fbc39af69f7a8e9",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/320e8b37faf88dcc4e541585ada539c83c601c": "d671b2807f0b462826cf0c4dc4c59ef3",
".git/objects/74/4a5a988d0f1cff6d93308bde70564ba5433bd7": "590fcc5a9f41fcf53e106486146eb21c",
".git/objects/76/96c1befaf8327bf3b5465e5688d36cdace41bb": "aa48af77c64a10f288e3f33fbba93c0a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/8d06f5afe3d3de2676911fd7f4b53502729636": "d3fd06a4b3821134ad7857a2861d0f57",
".git/objects/85/68b6593e64702e6afc5e815f1910f5cb5fbfae": "0311dbaccb47fce6ec43a1775adbc959",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/f4a5b14c7b7bbda8cc5df3613c8f17ddc64abd": "1dece31c1f7c90e8d1ab5667c5b7a2ec",
".git/objects/8d/67706cbb317502cfb691340016305d9cc15e00": "ff5d396ffdc37113967330b762fd9dd6",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/48604067fa9da6291054d1626b3c88a1a2e0eb": "7ed5c17a2fa80c837dcf04e0b24f1211",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/a809ecc53f9ca8f7418dfe01eb2c6c43a84793": "3eeb1ebec00e25795455655ae05b6989",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/b891a2a5aa66fb5dafe43ddc7fc974c61717c1": "308a37283392d441eff3f6f6fd039fac",
".git/objects/c4/654bb46e042ace04b6275fa0429a84be18cd52": "96dc68a40e9d07f584caff1c4c0620ab",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/1510679900b9ebc944a93f3321af49328933a3": "be5d4e03cd9da11e74a395f2edb3fb0a",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/00b77937fac69162123e68f8feb7fe56124a35": "c11c269c99c6cce186cb9a37d804d49e",
".git/objects/dc/93ab3765e0f63650e764d3ff655ac2ff9b8c20": "3a3ae85a0eb8817b871d4e037de4bad5",
".git/objects/dd/3a2baf37d5eaf92548e9d543f4dd1ac0fd3eb6": "8ed9bf9f79affff041feb7f59f2c4a9d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/e9466a9c5620da42f73c754bb797e8c0e38438": "4e4567d037f15460e7ada40da872b2d9",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8f6953b016ea3901cb3f7a8571a1670b1a06c8": "b95fbef04e879eb0ae9b20fc5076f0c7",
".git/objects/ee/15b4e203603f9e5e1aa19b6674eaec9397f73f": "ff7502a132db2d87d01ed3b3a7e9a4df",
".git/objects/f3/108672946807fd19fe91b37e980348520e998d": "05911d45c1581a9e9993f0d1c9e64c44",
".git/objects/f9/185e1b7ca9e3e10494fb5589ecca7f9b4f3d78": "b50442040d0da596c63265d54f4528b6",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "02a568bff2a36caf6b5d622ab0a35bd6",
".git/refs/remotes/origin/main": "02a568bff2a36caf6b5d622ab0a35bd6",
"assets/AssetManifest.json": "a6dfff5757765ec0b0cfa18d37ad4331",
"assets/AssetManifest.smcbin": "513d2579c13db720239bab7e3514526b",
"assets/assets/images/acerLaptop.jpg": "e42fe5910ab06ebbf7ca170bd4c7123d",
"assets/assets/images/Grocery&Staples.png": "1df6308ae47d0bc6818c905a338b719f",
"assets/assets/images/mobilePhone.png": "c4a77690324093bdef71b73448ed3b5f",
"assets/assets/images/Rectangle%252032.png": "a1a3d2db276fa603a9dc0b1f7a3ccf61",
"assets/assets/images/tablet.png": "cd9e7fb6783ed142b15e4dadd690185b",
"assets/assets/images/vegtables.png": "9dbb3e29cc0abaa3b2bf1162ed716ac6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "08021e3c0317bcf57a835085c644807d",
"assets/NOTICES": "a1812e6cd839e72919a1590a7850a2f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba1e41a0aedd6abb3ee9535a22bce4a8",
"/": "ba1e41a0aedd6abb3ee9535a22bce4a8",
"main.dart.js": "40dbdbd9c12022a8b42f905c52e2ed58",
"manifest.json": "7b3858093bc4eec6d199a29e65f28353",
"README.md": "05468fbb8b69e40ff0c4e0900119c377",
"version.json": "d7f764d50816ffcea31a321e819cfd26"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
