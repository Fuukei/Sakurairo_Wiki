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
    "revision": "eab950f07f0b479c447bd57cff0ad0cb"
  },
  {
    "url": "about.html",
    "revision": "1637014d6c6844e8193ed5f96c077297"
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
    "url": "assets/js/10.f6595224.js",
    "revision": "e37dc304be7830235c451deb0a31baca"
  },
  {
    "url": "assets/js/11.377eaa22.js",
    "revision": "c9900891374867f2b960f847a9e48f72"
  },
  {
    "url": "assets/js/12.caa4c714.js",
    "revision": "7d5819e99a8486e2fce151168d62353d"
  },
  {
    "url": "assets/js/13.719f5442.js",
    "revision": "5f85e809c1b497bdb04961aaf3dbbe71"
  },
  {
    "url": "assets/js/14.2557a23e.js",
    "revision": "0226d85db3d66c2ba9b1fca9175aa748"
  },
  {
    "url": "assets/js/15.7f932efe.js",
    "revision": "ff25356fca7574f853e2c8ebfafccbf0"
  },
  {
    "url": "assets/js/16.3da25c5c.js",
    "revision": "3e39d53b81de44108e8876409a6234cc"
  },
  {
    "url": "assets/js/17.27444f5e.js",
    "revision": "3babe3be5bad9fbf3a3b0f6dd1a3d9d9"
  },
  {
    "url": "assets/js/18.ac1d9d89.js",
    "revision": "4e20ae4250929050713f75f926ce23ed"
  },
  {
    "url": "assets/js/19.bb06cccb.js",
    "revision": "2f4f30d7c035c1a931dc0f371cb34975"
  },
  {
    "url": "assets/js/20.00bb3c53.js",
    "revision": "40676d6dfe02c2d95bd06af3e524624f"
  },
  {
    "url": "assets/js/21.dc17a794.js",
    "revision": "27558b708fdf28f5d8d557205d721d02"
  },
  {
    "url": "assets/js/22.ed46af67.js",
    "revision": "e9cb0997ae994ef3d0e018a52ded2a61"
  },
  {
    "url": "assets/js/3.8e6f5365.js",
    "revision": "16a1c0f647518d0fb1ec079b4f9502b5"
  },
  {
    "url": "assets/js/4.212b845c.js",
    "revision": "0f322693d366515d86641d86e3a8c99b"
  },
  {
    "url": "assets/js/5.2590636f.js",
    "revision": "c3d3e20ab68b4b2299080b98c13f003e"
  },
  {
    "url": "assets/js/6.52c8b565.js",
    "revision": "f0cc344418bd1201da9b87b4845cc0df"
  },
  {
    "url": "assets/js/7.4f3910d8.js",
    "revision": "47d6998c4473a4ec8adc5b1b6b5e8e1e"
  },
  {
    "url": "assets/js/8.bac3baf7.js",
    "revision": "8b6aa11756356bb69fdc58af198f988d"
  },
  {
    "url": "assets/js/9.47377419.js",
    "revision": "6b319a05ea5aafb513881139cfc4cc2e"
  },
  {
    "url": "assets/js/app.7f5d07a3.js",
    "revision": "c071adba76e011eefd6695f033e8c401"
  },
  {
    "url": "assets/js/vendors~docsearch.662ea70f.js",
    "revision": "46195b62fb196de7b91415b1a9873cf1"
  },
  {
    "url": "demo.html",
    "revision": "f3b4bb6356441cdbb82872c64257083d"
  },
  {
    "url": "guide/about.html",
    "revision": "e7a0cd8c83692fd4e0e6642a324fa0f6"
  },
  {
    "url": "guide/feedback.html",
    "revision": "10410cd6e1a8565efafbc7b533f03d25"
  },
  {
    "url": "guide/index.html",
    "revision": "c8fb1ff6ac207dccc3b97aaee1bf6e6a"
  },
  {
    "url": "guide/webp.html",
    "revision": "885d3f34574705306ac76dc7e131dfa9"
  },
  {
    "url": "idc.html",
    "revision": "9b25502e5c6b80ebc39c01c883ae9c2e"
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
    "revision": "1a4c4d217d4eb1fe15a69640d035afa4"
  },
  {
    "url": "releases.html",
    "revision": "9c8e30a2abd0a1fa304b12ad696509a3"
  },
  {
    "url": "sponsors.html",
    "revision": "ee2aedb15f895603d36c88ce8004e19e"
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
