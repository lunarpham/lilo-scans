<template>
    <div>
        <section class="mt-5 pt-5">
            <div class="container">
                <div class="row info-box">

                    <!--Image box for manga cover-->
                    <div class="col-md-3 py-4 px-4 flex-column justify-content-center image-box">
                        <div>
                            <img
                                :src="manga.img"
                                :alt="manga.id"
                                class="manga-cover rounded-3"
                            >
                        </div>
                        <div class="container p-0 mt-3">
                            
                            <div class="d-flex flex-column">
                                <NuxtLink :to="`${ link.url }`" target="_blank" class="custom-box rounded-3 w-100 mx-0 mb-2 text-center" v-for="link in manga.links" :key="link.label" >
                                    {{ link.label }}
                                </NuxtLink>
                            </div>
                        </div>        
                        
                    </div>

                    <!--Details-->
                    <div class="col px-4 py-4 details-box">
                        
                        <!--Manga title and alias-->
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h1 class="fw-bold">{{ manga.title }}</h1>
                                <h5 class="fw-med">{{ manga.alias }}</h5>
                            </div>
                        </div>

                        <!--Manga info R1-->
                        <div class="row">
                            <div class="col-md-5 d-flex flex-row align-items-start">
                                <p class="me-2">Tác giả</p>
                                <p class="fw-bold">{{ manga.author }}</p>
                            </div>
                        </div>

                        <!--Manga info R2-->
                        <div class="row">
                            <div class="col-md-12 d-flex flex-column align-items-start">
                                <div class="tags-list mb-3 d-flex flex-row flex-wrap">
                                    <small class="tag rounded-2" v-for="genre in manga.genres" :key="genre">{{ genre }}</small>
                                </div>
                            </div>
                        </div>

                        <!--Manga info R3-->
                        <div class="row">
                            <div class="col-md-4 d-flex flex-column align-items-start">
                                <template v-if="manga.tlstatus === 'Đang tiến hành'"><p class="fw-bold tl-status status-on">Đang tiến hành</p></template>
                                <template v-if="manga.tlstatus === 'Đã hoàn thành'"><p class="fw-bold tl-status status-done">Đã hoàn thành</p></template>
                                <template v-if="manga.tlstatus === 'Tạm ngưng'"><p class="fw-bold tl-status status-pause">Tạm ngưng</p></template>
                            </div>
                        </div>

                        <!--Manga info R4-->
                        <div class="row">
                            <div class="col-md-12">
                                <p class="fst-italic mb-0">{{ manga.description }}</p>
                            </div>
                        </div>

                        <!--Manga info R5-->
                        <div class="row mt-3">
                            <div class="col-md-12 d-flex flex-row align-items-start">
                                <p class="me-2">Nhóm dịch</p>
                                <div class="tags-list mb-3 d-flex flex-row flex-wrap">
                                    <small class="tag rounded-2" v-for="group in manga.groups" :key="group">{{ group }}</small>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                                    <div class="d-flex">
                                        <h5 class="me-2"><i class="fa-solid fa-list-ul"></i></h5>
                                        <h5 class="fw-bold">DANH SÁCH CHƯƠNG</h5>
                                    </div>
                                    <div class="row flex-row mt-2 mx-2 p-1">
                                            <NuxtLink :to="'/chapter/' + `${ chapter.imgurhash }`" v-for="chapter in manga.chapters" class="col-md-2 me-3 custom-box p-3 rounded-3 text-start flex-column" >
                                                <p class="fw-bold mb-0">{{ chapter.chapname }}</p>
                                                <p class="mb-0 chapter-date">2023-07-22</p>
                                            </NuxtLink>
                                    
                                    </div>
                                    
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
    const route = useRoute();
    const { data: manga } = await useFetch('https://api.npoint.io/5db90e7f047a1396a59c/manga/' + route.params.manga_id);
    console.log( manga._value.title );

    useHead(() => {
        return {
        title: `${ manga._value.title }` + ' - Lilo Translation',
        };
    });

    useSeoMeta({
        ogTitle: `${ manga._value.title }` + ' - Lilo Translation',
        ogDescription: `${ manga._value.description }`,
        ogImage: `${ manga._value.img }`,
        twitterTitle: `${ manga._value.title }` + ' - Lilo Translation',
        twitterDescription: `${ manga._value.description }`,
        twitterImage: `${ manga._value.img }`,
    })
  
</script>
  