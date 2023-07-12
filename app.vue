<template>
  <Suspense>
    <template #default>
    <NuxtLayout name="lilo">
      <NuxtPage />
    </NuxtLayout>
    </template>
    
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script setup>
  useHead({
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

<style>
    @import 'bootstrap/dist/css/bootstrap.css';
    @import '~/css/styles.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
</style>
