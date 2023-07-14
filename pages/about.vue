<template>
    <div>
        <section class="mt-5 pt-5">
            <div class="container px-4">
                <h1>Thông tin</h1>
                <p>Đây là trang thông tin</p>   
            </div>
        </section>
        
    </div>
</template>
<style>
    @import 'bootstrap/dist/css/bootstrap.css';
    @import '~/css/styles.css'
</style>
<script setup>
    useHead({
        title: 'Thông tin - Lilo Translation',
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: 'Lilo Translation'
            }
        ],
        link: [
            {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/lilo.webp'
            }
        ],

        script: [
            {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js',
            ssr: true
            }
        ]
    })
</script>
  
  