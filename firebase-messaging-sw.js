importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDHHu8YMr-pbtKiDC-Jmeif6gRZMNqF9Hc",
  authDomain: "home-tasks-dd55b.firebaseapp.com",
  projectId: "home-tasks-dd55b",
  storageBucket: "home-tasks-dd55b.firebasestorage.app",
  messagingSenderId: "973414286380",
  appId: "1:973414286380:web:12ad64d2e3134a3e443d89"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/home-tasks/icon.png',
    badge: '/home-tasks/icon.png'
  });
});
