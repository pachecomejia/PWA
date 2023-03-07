
// Registrando el Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      console.log('Service Worker registrado con éxito: ', registration.scope);
    }, function(err) {
      console.log('Error al registrar el Service Worker: ', err);
    });
  });
}

// Instalando y activando el Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mi-cache').then(function(cache) {
      return cache.addAll([
        
        "https://mypwa-e0b3c.web.app/",
        "/",
        "/index.html",
        "/css/style.css",
        "/images/perfil.jpg",
        "/images/icono.jpg",
        "/js/app.js"
       
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
caches.open('my-cache').then(function(cache) {
  var urls = [
    '/path/to/resource1',
    '/path/to/resource2',
    '/path/to/resource3'
  ];

  cache.addAll(urls)
    .then(function() {
      console.log('All resources have been added to the cache');
    })
    .catch(function(error) {
      console.error('Failed to add resources to cache:', error);
    });
});

