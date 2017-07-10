(global => {
  'use strict';

  var versionCache = '-v0.0.1'

  // Load the sw-tookbox library.
  importScripts('/explore-github/sw/sw-toolbox.js');

  // Turn on debug logging, visible in the Developer Tools' console.
  global.toolbox.options.debug = true;

  // toolbox.precache([
  //   'www/js/app.js'
  // ]);

  toolbox.router.get('/explore-github/sw/*', global.toolbox.cacheFirst, {
      cache: {
          name: 'serviceWorkerCacheVue' + versionCache,
          maxEntries: 200
      }
  });
  toolbox.router.get('/explore-github/**/*.{css}', global.toolbox.cacheFirst, {
    cache: {
      name: 'staticCssCacheVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/explore-github/**/*.{js}', global.toolbox.cacheFirst, {
    cache: {
      name: 'staticJsCacheVue' + versionCache,
      maxEntries: 200
    }
  });  
  toolbox.router.get(/\.(?:png|gif|jpg)$/, global.toolbox.cacheFirst, {
    cache: {
      name: 'imageCacheVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/explore-github/(.*)', toolbox.cacheFirst, {
    cache: {
      name: 'staticOtherVue' + versionCache,
      maxEntries: 200
    }
  });
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'googleapis',
      maxEntries: 20,
    },
    origin: /\.googleapis\.com$/
  });  
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'cloudflare',
      maxEntries: 20,
    },
    origin: /\.cloudflare\.com$/
  });  
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'githubusercontent',
      maxEntries: 200,
    },
    origin: /\.githubusercontent\.com$/
  });
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'githubapi',
      maxEntries: 200,
      maxAgeSeconds: 60 * 60 * 48,
    },
    origin: /\.github\.com$/
  });

  // Boilerplate to ensure our service worker takes control of the page as soon as possible.
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));
})(self);
