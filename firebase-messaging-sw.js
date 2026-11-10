importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBOFHJgBCfVN3hT9EHvI9hSaqH7LxL1UYw",
    projectId: "mib-app-b93cd",
    messagingSenderId: "963337434086",
    appId: "1:963337434086:web:c1fa47b8e6a8eddf0f5c27"
});

// Avvia il ricevitore e lascia che Firebase gestisca tutto in automatico
const messaging = firebase.messaging();
