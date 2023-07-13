<template>
    <div class="row row-cols-auto container p-0 g-0">
        <NuxtLink
            :to='`manga/${manga.id}`'
            class="col-md-3 p-2 manga-panel"
            v-for="manga in mangas"
            style="text-decoration: none; color: inherit;"
        >
            <div class="view-details text-center text-uppercase fw-bold rounded-2">CHI TIẾT</div>
            <img
                :src="manga.img"
                :alt="manga.id"
                style="width: 100%;"
                class="rounded-3 border manga-img mb-3"
            >
            <div class="text-under-comic fw-bold">{{ manga.title }}</div>
        </NuxtLink>
    </div>
</template>
<script setup>
    const { data: mangas } = await useFetch('https://api.npoint.io/5db90e7f047a1396a59c/manga');
</script>