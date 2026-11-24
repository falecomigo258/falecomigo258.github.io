importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyDAuMMta5I-NsqoEgJm-tbtuljlY85Lnjg",
  authDomain: "falecomigo-fe950.firebaseapp.com",
  projectId: "falecomigo-fe950",
  storageBucket: "falecomigo-fe950.firebasestorage.app",
  messagingSenderId: "69315194447",
  appId: "1:69315194447:web:b8ea8935dcbbaa1bb1043a"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title || 'FALE COMIGO', {
    body: payload.notification.body || 'Alguém quer falar contigo',
    icon: 'https://via.placeholder.com/192'
  });
});
