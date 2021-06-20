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
    "url": "404.html",
    "revision": "f1049afa21a6617dfbebcc412614502f"
  },
  {
    "url": "about.html",
    "revision": "9c313acb795d308fed8365d0371d0a48"
  },
  {
    "url": "assets/css/0.styles.48266c77.css",
    "revision": "6f124ac5000e343edbb1b0aeed792646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3469428.js",
    "revision": "4bf482e8cbfb089f81bfd7115a545c7e"
  },
  {
    "url": "assets/js/11.fa3340f7.js",
    "revision": "3518b2b6d5b1f01246e586b160c986c3"
  },
  {
    "url": "assets/js/12.18cb97e8.js",
    "revision": "e415285ae95f74287e8f373a4b46fea6"
  },
  {
    "url": "assets/js/13.62c57630.js",
    "revision": "275e969af26b84f2391fd5c7d640672b"
  },
  {
    "url": "assets/js/14.991ae3c7.js",
    "revision": "cb6cbad0d01e33651a54f7ef62baca8d"
  },
  {
    "url": "assets/js/15.08e1baf3.js",
    "revision": "c796f3bd820dcff00ec5967a2e058dc5"
  },
  {
    "url": "assets/js/16.b39c7106.js",
    "revision": "b1872157a9844d03545a883ea0e7a10d"
  },
  {
    "url": "assets/js/17.9b76c657.js",
    "revision": "7083b179143e744f6dafed32b2dca5e4"
  },
  {
    "url": "assets/js/18.b35041c8.js",
    "revision": "b89c58b37d0caa762d322e136daf753e"
  },
  {
    "url": "assets/js/19.ed0d8b21.js",
    "revision": "cbfb2b73548201af1eb6bbe93e3e5bcd"
  },
  {
    "url": "assets/js/20.557e3896.js",
    "revision": "596710edcc59e87e9940cc4c19d5772e"
  },
  {
    "url": "assets/js/21.46b3ec29.js",
    "revision": "4538ae0897b39d0e0e908758e7f7d60d"
  },
  {
    "url": "assets/js/22.785da099.js",
    "revision": "6444226935cfff0a4f1373ba792082a1"
  },
  {
    "url": "assets/js/3.bfd4cd9d.js",
    "revision": "fb60fd4d89cd2d05cba48ca57ce44335"
  },
  {
    "url": "assets/js/4.c2bc4666.js",
    "revision": "768796bd1703174cabf453369057f318"
  },
  {
    "url": "assets/js/5.ec9815fc.js",
    "revision": "9c589f4e991cb1e1b4ef84233573a345"
  },
  {
    "url": "assets/js/6.2174eebb.js",
    "revision": "b003a76da09d8ad0d0ffb3bc66d87850"
  },
  {
    "url": "assets/js/7.4d7f823b.js",
    "revision": "e22f7b58086cdc3055582f835a33b072"
  },
  {
    "url": "assets/js/8.aeaeea10.js",
    "revision": "a2bae709c2597c1f3b361f40a7f17312"
  },
  {
    "url": "assets/js/9.b0ce26b7.js",
    "revision": "723129f04d5a3af7560922eb9f2e210b"
  },
  {
    "url": "assets/js/app.3cad0f11.js",
    "revision": "d29f19d4c87a603950373bdd14226fe3"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "demo.html",
    "revision": "60bb9dc3a7641e36d684a00fa5689a94"
  },
  {
    "url": "guide/about.html",
    "revision": "671a1f1f58b93c1f08853f2e587d135b"
  },
  {
    "url": "guide/feedback.html",
    "revision": "0cb5d3cd8536bc7e9710aef41c5dd226"
  },
  {
    "url": "guide/index.html",
    "revision": "38c24b90f65443e6f033fd4e953e58e8"
  },
  {
    "url": "guide/webp.html",
    "revision": "15ced3eb35cbedd8ee80a021a8fc3401"
  },
  {
    "url": "idc.html",
    "revision": "4d90d841e17bfec7c58afeb687a4df43"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "bdaaea8349924b6222392ab2bbfb6591"
  },
  {
    "url": "releases.html",
    "revision": "1c8c9fcec08eebe5c9ae3b2bb5cd3362"
  },
  {
    "url": "sponsors.html",
    "revision": "f1259b14a9c32e088d0dae7f5a0d8aa5"
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
