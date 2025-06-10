// public/service-worker.js

self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.message,
        icon: '/t2g-icon-310x310.png', // Ganti dengan path ikon Anda
        badge: '/t2g-icon-70x70.png', // Opsional: ikon kecil
        data: {
            url: data.url // URL yang akan dibuka saat notifikasi diklik
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    const url = event.notification.data.url;
    event.waitUntil(
        clients.openWindow(url)
    );
});