<template>
    <div class="row" v-for="image in imagespanels.data.images">
        <div class="col-md-12">
            <embed :src="image.link" :alt="image.id" class="w-100 mb-4">
        </div>
        
    </div>
</template>
<script setup>
    const chapterroute = useRoute();
    const { data: imagespanels } = useFetch('https://api.imgur.com/3/album/' + chapterroute.params.chapterid , {
      headers: {
        'Authorization': 'Client-ID 9a5dcb4b1915c16',
      },
      
    });

    useHead(() => {
        return {
        title: "Lilo Translation",
        };
    });

    useSeoMeta({
        ogTitle: "Lilo Translation",
        ogDescription: "Lilo Translation",
        ogImage: "Lilo Translation",
        twitterTitle: "Lilo Translation",
        twitterDescription: "Lilo Translation",
        twitterImage: "Lilo Translation",
    })
</script>