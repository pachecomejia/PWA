// Registrando el Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
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
        '/',
        './index.html',
        './style.css',
        './html/css/style.css',
        './html/css/styles.css',
        './html/html/contacto.html',
        './html/css/contacto.css',
        './html/horarios.html',
        './html/css/horarios.html',
        './html/registrarse.html',
        './html/servicios.html',
        './html/css/horarios.css',
        './html/css/login.css',
        './html/css/social.css',
        './html/images/cardio1.png',
        './html/images/gimnasio.png',
        './html/images/gimnasio1.png',
        './html/images/pesas.png'
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
