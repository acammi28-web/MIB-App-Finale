importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBOFHJgBCfVN3hT9EHvI9hSaqH7LxL1UYw",
    projectId: "mib-app-b93cd",
    messagingSenderId: "963337434086",
    appId: "1:963337434086:web:c1fa47b8e6a8eddf0f5c27"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("Notifica ricevuta in background!", payload);

    const notificationTitle = payload.notification?.title || "Radar M.I.B.";
    const notificationOptions = {
        body: payload.notification?.body || "Qualcuno ha appena lasciato un segnale nei paraggi!",
        icon: "/icon.png", // <--- ICONA LOCALE: Evita l'errore su Android
        vibrate: [300, 100, 400],
        requireInteraction: true
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
