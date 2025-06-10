<template>
    <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-8/12 px-4">
                <div class="relative flex flex-col min-w-0 w-full mb-6">
                    <span class="text-center text-3xl font-bold mb-6 text-white">WELCOME</span>
                    <span class="text-center text-5xl font-bold mb-6 text-white">{{ message }}</span>
                    <small class="text-center text-xl font-bold mb-0 text-white">at</small>
                    <span class="text-center text-4xl font-bold mb-0 text-white">EDII COFFEE MORNING</span>
                    <span class="text-center text-2xl font-bold mb-6 text-white">24 JUNE 2025</span>
                </div>
                <hr>
                <div class="relative flex flex-col min-w-0 w-full mb-6">
                    <small class="text-center text-2xl font-bold mb-0 text-white">SEAT INFORMATION</small>
                    <span class="text-center text-4xl font-bold mb-0 text-white">A-22</span>
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
            message: '...',
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
            this.message = data.message;
        });
    },
};
</script>
