<template>
    <NuxtLayout name="lilo">
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
  useHead({
        htmlAttrs: {
            lang: 'en'
        },

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
            src: 'https://kit.fontawesome.com/e2653b8883.js',
            ssr: true
            }
        ]
    })

    useSeoMeta({
        url: 'https://lilo-translation.vercel.app/',
        ogUrl: 'https://lilo-translation.vercel.app/',
        twitterCard: 'summary_large_image'
    })

</script>
<style>
    @import 'bootstrap/dist/css/bootstrap.css';
    @import '~/css/styles.css';
</style>
