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
    const notificationTitle = "Radar M.I.B.";
    const notificationOptions = {
        body: "Qualcuno ha appena lasciato un segnale nei paraggi!",
        icon: "https://cdn-icons-png.flaticon.com/512/3233/3233483.png",
        vibrate: [300, 100, 400],
        requireInteraction: true
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
