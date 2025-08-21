const CACHE_NAME = 'copycleanse-v2'
const STATIC_CACHE_NAME = 'copycleanse-static-v2'
const urlsToCache = ['/', '/logo.png', '/favicon.ico', '/js/lazy-load.js']

// Separate cache for external resources
const EXTERNAL_CACHE = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
]

// Handle SKIP_WAITING message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response
      }

      return fetch(event.request).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        // Clone the response since it can only be consumed once
        var responseToCache = response.clone()

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    })
  )
})

// Clean up old caches
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
