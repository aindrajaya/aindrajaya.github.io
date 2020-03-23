'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "143cf2d02e6c26d911c48439ebb1ad32",
"/assets/assets/apple.png": "48a50bcddbde773f7cc670b0a28658f0",
"/assets/assets/card_back.jpg": "06e098cb8b27f3088cf449b2bb66a599",
"/assets/assets/card_band.jpg": "14503b23fc03012d97b08db8b47cb049",
"/assets/assets/creditcardchipsilver.png": "cceabe706d6e55a1e850864b866f1ce2",
"/assets/assets/CustomSocial.ttf": "5d041825c2b4952a2de288aad0312c5d",
"/assets/assets/delete.png": "6de05df02ead1400f83799d851d06faa",
"/assets/assets/food1.jpg": "fde8cadbc87b15fe22f3d9c22952b776",
"/assets/assets/food10.jpg": "893f12c4bfcfef5b814c0dc50d73d1c6",
"/assets/assets/food11.jpg": "0d6e5764062d9dfe9ce587029ca1b392",
"/assets/assets/food12.jpg": "f35d8373299d146bf5cdd80637492e9d",
"/assets/assets/food13.jpg": "bb5a1d510f19470cc28f8e3add5d66ab",
"/assets/assets/food14.jpg": "883a5d2245395cb024ffab6203b7dcd6",
"/assets/assets/food2.jpg": "d737180564a7b4f82a9367d1ae93fd0a",
"/assets/assets/food3.jpg": "345330b7156f658f308273c03519f7af",
"/assets/assets/food4.jpg": "a6bf79299f807d424f5ab38cd9f82abc",
"/assets/assets/food5.jpg": "c7c74a91f2d8ffcffe19d6d97d3eb46e",
"/assets/assets/food6.jpg": "97e460b0a25f77d8efd99cfde862a4f5",
"/assets/assets/food7.jpg": "bc5ac52853e8a657b3258b7cd2dc0299",
"/assets/assets/food8.jpg": "b3e63ad07a4a05d8924fb40c37a8f6c3",
"/assets/assets/food9.jpg": "865cc618296cb419f43ef4e4a2b9066f",
"/assets/assets/google.png": "03a7691228d65be8abf85925f87ee940",
"/assets/assets/home_background.jpeg": "a145f324b07c533359d7617bb8e21c43",
"/assets/assets/icons&splashs/Asset31.png": "5812c9e0d71aa4269d52e0f90d43ec43",
"/assets/assets/icons&splashs/Asset41.png": "5812c9e0d71aa4269d52e0f90d43ec43",
"/assets/assets/icons&splashs/Asset51.png": "32b996720315c4f130f30bbc4acad8f5",
"/assets/assets/icons&splashs/Asset61.png": "ae623307d083d35acd83e0d7aa80d9ae",
"/assets/assets/icons&splashs/bckp/Thumbs.db": "4808b30bfb4b3beaeba4cdf8515b7b45",
"/assets/assets/icons&splashs/splash_day.png": "ce6a5aef59e79653cb3d188e5abb91b4",
"/assets/assets/icons&splashs/splash_night.png": "ac72c87217230185b30ad3af42cf986c",
"/assets/assets/icons&splashs/Thumbs.db": "2976f23ce005a2480004042abd6cd5cd",
"/assets/assets/moon.png": "252adb637796d34935af363266ba380b",
"/assets/assets/otp1.png": "2c7e653a03e41ca9ef919dd6496885b7",
"/assets/assets/otp2.png": "02de868dafabaf5756ceff0a56a8e117",
"/assets/assets/profil.jpg": "208baeb40d9212db4833757e501a83e1",
"/assets/assets/profil4.jpg": "6b466accf2ce65b593b13e93c3f67681",
"/assets/assets/profile2.jpg": "13aec6a5c28f636d511f1aaac1ae6dc2",
"/assets/assets/profile3.jpg": "db33403bd8e832f3dc80340233ed5626",
"/assets/assets/Quicksand-Regular.ttf": "f87b9b4f34bdbf75b5c0cf3a5a137508",
"/assets/assets/samsung.png": "a329f9af67e93a7bc4077a8d6bd26608",
"/assets/assets/serif-regular.ttf": "ae585d91ff895849f607a9bfbd439c6f",
"/assets/assets/serifbold.ttf": "4b61d02c1a6ed6956666ffb0fed35eca",
"/assets/assets/sun.png": "c312eab33bd58651a57447a00b69083f",
"/assets/assets/switcher.flr": "e4682a262b4d677503db28da3d067753",
"/assets/assets/Thumbs.db": "b8d60fbb6c783d5eab3b62cf479dd6d4",
"/assets/assets/visa_logo.png": "2111eeb7c5b5dbb9c9cb7baefd327697",
"/assets/assets/Walkthrough/Best_Chef_day.png": "6e3fbbfd1fe0f502d4446047147252ce",
"/assets/assets/Walkthrough/Best_Chef_night.png": "70277a2f0a40667668dcc10ee1c2aa0e",
"/assets/assets/Walkthrough/Perfect_Price_day.png": "1229c2107a0842b76ad1d8318e149f93",
"/assets/assets/Walkthrough/Perfect_Price_night.png": "ba39688b577265ec95ac6351e60cba4f",
"/assets/assets/Walkthrough/Perfect_Taste_day.png": "3d50415c8a4d28d596561b6b151337e6",
"/assets/assets/Walkthrough/Perfect_Taste_night.png": "6d719ec18089eb412132d24cf1da0024",
"/assets/assets/Walkthrough/Relaxed_Atmosphere_day.png": "9f1c17ce68a3cba1cf85860f169d618b",
"/assets/assets/Walkthrough/Relaxed_Atmosphere_night.png": "88396c307241a426d1e6c242a57d597c",
"/assets/assets/Walkthrough/Thumbs.db": "a61b00734f2da5b31ae5b0a291254411",
"/assets/assets/Walkthrough/transparent.png": "8ba198fc94a9d91143b38e77bc87cb34",
"/assets/FontManifest.json": "4b49e8a85ac076b963499082662e0f0c",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "ac7460a2eddab5215907a93ebacd0f2f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "5ef1ae1743982d8a80af4c2403c72b1a",
"/main.dart.js": "9c2eb46acd58b22ade4d0d03a88e6c36",
"/manifest.json": "25a98277033a4de4882ad6e58c5a27bf"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
