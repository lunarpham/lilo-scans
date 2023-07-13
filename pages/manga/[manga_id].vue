<template>
    <Suspense>
        <template #fallback>
            <MangaDetailsLoading />
        </template>
        <template #default>
            <MangaDetails />
        </template>
    </Suspense>
</template>

<script>
    import MangaDetails from '~/components/MangaDetails.vue';
    import MangaDetailsLoading from '~/components/MangaDetailsLoading.vue';
</script>