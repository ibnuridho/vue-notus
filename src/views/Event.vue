<template>
    <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-12 px-4 mt-0">
                <div class="relative flex flex-col min-w-0 w-full mb-2">
                    <span class="text-center text-3xl font-bold mb-6 text-white">WELCOME</span>
                    <span class="text-center text-5xl font-bold mb-2 text-white">{{ name }}</span>
                    <span class="text-center text-2xl font-bold mb-2 text-white">from</span>
                    <span class="text-center text-5xl font-bold mb-6 text-white">{{ company }}</span>
                    <small class="text-center text-xl font-bold mb-0 text-white">at</small>
                    <span class="text-center text-4xl font-bold mb-0 text-white">EDII COFFEE MORNING</span>
                    <span class="text-center text-2xl font-bold mb-6 text-white">24 JUNE 2025</span>
                </div>
                <hr>
                <div class="relative flex flex-col min-w-0 w-full mb-6">
                    <small class="text-center text-2xl font-bold mb-0 text-white">SEAT INFORMATION</small>
                    <span class="text-center text-4xl font-bold mb-0 text-white">{{ seatno }}</span>
                </div>                
            </div>
        </div>
    </div>
</template>
<script>
import Pusher from 'pusher-js';

export default {
    name: 'RealTimeComponent',
    data() {
        return {
            name: 'customer_name',
            company: 'company_name',
            seatno: 'A-000',
        };
    },
    mounted() {
        // Inisialisasi Pusher
        const pusher = new Pusher('30939cf110684fa8c235', {
            cluster: 'ap1',
            forceTLS: false,
        });

        // Subscribing ke channel dan event
        const channel = pusher.subscribe('cm-notifications');
        channel.bind('coffee-morning-notification', (data) => {
            this.company = data.message;
            this.name = data.title;
            this.seatno = data.url;
        });
    },
};
</script>
