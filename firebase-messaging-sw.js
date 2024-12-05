// Importa el script de Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

// Configuración de Firebase (reemplaza con tus datos)
const firebaseConfig = {
  apiKey: "AIzaSyCF1GZfrS4F1d_tpM_UMF1fcGfNgFLmjNc",
  authDomain: "compartetusazon-3263f.firebaseapp.com",
  projectId: "compartetusazon-3263f",
  storageBucket: "compartetusazon-3263f.firebasestorage.app",
  messagingSenderId: "943614456718",
  appId: "1:943614456718:web:2724711299e5ae57c5aadf",
  measurementId: "G-VF52GTS23B"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa Firebase Messaging
const messaging = firebase.messaging();

// Manejo de notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en segundo plano:', payload);

  // Personaliza la notificación
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  // Muestra la notificación
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  console.log('Notificación clickeada:', event.notification);
  
  // Cierra la notificación al hacer clic
  event.notification.close();

  // Redirige a una URL específica
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Si ya hay una pestaña abierta con la URL, la enfoca
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }

      // Si no hay pestaña abierta, abre una nueva
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
