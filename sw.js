importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/explore-github/about.bundle.js",
    "revision": "faef77681fd5b4005d242e6298a43299"
  },
  {
    "url": "/explore-github/followers.bundle.js",
    "revision": "254176e36de42d4ddcc73076c54d9982"
  },
  {
    "url": "/explore-github/following.bundle.js",
    "revision": "d469bfecf16aed863bd1096d435184b7"
  },
  {
    "url": "/explore-github/home.bundle.js",
    "revision": "9d679875318a9caa22ec80062262de50"
  },
  {
    "url": "/explore-github/index.html",
    "revision": "f0aff8185c0f14921eb32281cb74aa15"
  },
  {
    "url": "/explore-github/main.bundle.js",
    "revision": "f708a70df0d8a124e3093a08d6ff8054"
  },
  {
    "url": "/explore-github/profile.bundle.js",
    "revision": "19b461b8e0bbd1731940ba1e9850037e"
  },
  {
    "url": "/explore-github/repo.bundle.js",
    "revision": "408345c6c17294ac3fcdebb1d4391355"
  },
  {
    "url": "/explore-github/repositories.bundle.js",
    "revision": "1a146fe00ff958a5b2b873e822f7ea73"
  },
  {
    "url": "/explore-github/search.bundle.js",
    "revision": "0dfd91b865b93eee2794017ffd441607"
  },
  {
    "url": "/explore-github/sidebar.bundle.js",
    "revision": "15c28aae1e229ccc6b040929c62414ce"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
