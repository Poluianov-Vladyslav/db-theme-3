/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "c14020cecd7d7dfec427d185acdbdc8b"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.5c9963bb.css",
    "revision": "3146038c4f4660722d88a28988d7224c"
  },
  {
    "url": "assets/img/add.f5738e6d.png",
    "revision": "f5738e6d2aac3c092824cddce5afcf85"
  },
  {
    "url": "assets/img/delete.c8f25997.png",
    "revision": "c8f2599740200e7e15849260af4be681"
  },
  {
    "url": "assets/img/for_lab4.7dc22bd2.jpg",
    "revision": "7dc22bd2d5a66c9835712d68d2d46ec8"
  },
  {
    "url": "assets/img/get_all.99e1c2e7.png",
    "revision": "99e1c2e7bbbea92cde4cdc12fb2cf82d"
  },
  {
    "url": "assets/img/get_one.a08d913f.png",
    "revision": "a08d913faaac39d05ac50a2e1bde2801"
  },
  {
    "url": "assets/img/pract.56f5c28e.png",
    "revision": "56f5c28efde887f43438083781071f28"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/server.36655f9e.png",
    "revision": "36655f9ed04a730cd9027d62016c8e10"
  },
  {
    "url": "assets/img/update.0a1ef2c6.png",
    "revision": "0a1ef2c6ace378d71cadacb235d7c696"
  },
  {
    "url": "assets/js/10.c2d6dd61.js",
    "revision": "8f4057e904de8901a9080ca2e7942b29"
  },
  {
    "url": "assets/js/11.603171d8.js",
    "revision": "2236bfcbc49677c60c3b0fda1eda054b"
  },
  {
    "url": "assets/js/12.c1d64cde.js",
    "revision": "423728ab885fd31ebf6d69834ae9cd1c"
  },
  {
    "url": "assets/js/13.f6b75744.js",
    "revision": "a83c7ec1826b6c1d50523aad24b7e25c"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.e35a6dc4.js",
    "revision": "f732684eaab501586c368a3ad236eeb0"
  },
  {
    "url": "assets/js/17.32f3fa16.js",
    "revision": "9af174baced39deeab8989a930210eee"
  },
  {
    "url": "assets/js/18.e93cda26.js",
    "revision": "1fcdbc15c35def4bf1bbe57b6184765f"
  },
  {
    "url": "assets/js/19.dc36c287.js",
    "revision": "10518a239798cebf2fbdaf49bf955809"
  },
  {
    "url": "assets/js/2.69ab6635.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.59562d31.js",
    "revision": "73aa3efbee863ee706369ca5333f6c4e"
  },
  {
    "url": "assets/js/21.ef1c75ab.js",
    "revision": "3ea43f6650712cbe7447dd72898ecaab"
  },
  {
    "url": "assets/js/22.a4e588cb.js",
    "revision": "8cd525b64cc45e83f148211b35da6862"
  },
  {
    "url": "assets/js/23.eed8465b.js",
    "revision": "1f33cc5788bdd4a6b9207f413d8192ab"
  },
  {
    "url": "assets/js/24.242a5dda.js",
    "revision": "04488014ba021f5f92123633db00cc8f"
  },
  {
    "url": "assets/js/26.f5424b81.js",
    "revision": "24923da10b396b1a8796fc5698e01360"
  },
  {
    "url": "assets/js/3.1492e312.js",
    "revision": "1dbed99f49c5520e22107456b0b01572"
  },
  {
    "url": "assets/js/4.8211a5d0.js",
    "revision": "18ce14d312c3d494dc613083f57bbf6e"
  },
  {
    "url": "assets/js/5.22a8c3cd.js",
    "revision": "859d0d25ceb8cd189fa6450460efe1db"
  },
  {
    "url": "assets/js/6.6cd70278.js",
    "revision": "7a8e773b0b2158f77779ca991c47cef5"
  },
  {
    "url": "assets/js/7.352b63be.js",
    "revision": "3f7fa61d3aa5a271836c22f2a98033ed"
  },
  {
    "url": "assets/js/8.acae36a2.js",
    "revision": "ec8f43b9878e92b5af70faee022ec4c9"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.bec637a1.js",
    "revision": "f3ca7d160768ee0d1eea82a24471def5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "bbee6298604400ce9a19e0e5a10be2ec"
  },
  {
    "url": "design/index.html",
    "revision": "3f50f268f446584df2f1831010e16532"
  },
  {
    "url": "index.html",
    "revision": "75a79a73a5437bee4ef1d5540d467dc8"
  },
  {
    "url": "intro/index.html",
    "revision": "c1a2d73040e9b1540a005ed7f35d8db3"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "53fdea4e683958c8e7dbdc287886b5da"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "598dc2a8fe5338fc15df48d9e5baac41"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0bdbed4d8de0dfe8209a70619112c5e9"
  },
  {
    "url": "software/index.html",
    "revision": "dd315c549a1218bf9011814d59e1b2e3"
  },
  {
    "url": "test/index.html",
    "revision": "f997e27dc03c37a155310957ca22e334"
  },
  {
    "url": "use cases/index.html",
    "revision": "bbc6e0bc1983da3b6ebd1578b4dd9de8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
