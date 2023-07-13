<template>
    <div>
        <section class="mt-5 pt-5">
            <div class="container">
                <div class="row info-box">

                    <!--Image box for manga cover-->
                    <div class="col-md-4 py-4 px-4 d-flex justify-content-center image-box">
                        <div>
                            <img
                                :src="manga.img"
                                :alt="manga.id"
                                class="manga-cover rounded-3"
                            >
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
                            <div class="col-md-5 d-flex flex-column align-items-start">
                                <p class="mb-0">Tác giả</p>
                                <p class="fw-bold">{{ manga.author }}</p>
                            </div>
                            <div class="col-md-5 d-flex flex-column align-items-start">
                                <p class="mb-0">Hoạ sĩ</p>
                                <p class="fw-bold">{{ manga.artist }}</p>
                            </div>
                            <div class="col-md-2 d-flex flex-column align-items-start">
                                <p class="mb-0">Loại</p>
                                <p class="fw-bold">{{ manga.format }}</p>
                            </div>
                        </div>

                        <!--Manga info R2-->
                        <div class="row">
                            <div class="col-md-12 d-flex flex-column align-items-start">
                                <p class="mb-2">Thể loại</p>
                                <div class="tags-list mb-3 d-flex flex-row flex-wrap">
                                    <small class="tag rounded-2" v-for="genre in manga.genres" :key="genre">{{ genre }}</small>
                                </div>
                            </div>
                        </div>

                        <!--Manga info R3-->
                        <div class="row">
                            <div class="col-md-4 d-flex flex-column align-items-start">
                                <p class="mb-0">Năm xuất bản</p>
                                <p class="fw-bold">{{ manga.pbyear }}</p>
                            </div>
                            <div class="col-md-4 d-flex flex-column align-items-start">
                                <p class="mb-0">Tình trạng</p>
                                <p class="fw-bold pb-status">{{ manga.pbstatus }}</p>
                            </div>
                            <div class="col-md-4 d-flex flex-column align-items-start">
                                <p class="mb-0">Bản dịch</p>
                                <p class="fw-bold tl-status">{{ manga.tlstatus }}</p>
                            </div>
                        </div>

                        <!--Manga info R4-->
                        <div class="row">
                            <div class="col-md-12">
                                <p class="mb-2">Nội dung</p>
                                <p class="fst-italic mb-0">{{ manga.description }}</p>
                            </div>
                        </div>

                        <!--Manga info R5-->
                        <div class="row mt-3">
                            <div class="col-md-12 d-flex flex-column align-items-start">
                                <p class="mb-2">Nhóm dịch</p>
                                <div class="tags-list mb-3 d-flex flex-row flex-wrap">
                                    <small class="tag rounded-2" v-for="group in manga.groups" :key="group">{{ group }}</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="reading-links" class="mt-5">
            <div class="container px-4">
                <h5 class="fw-bold mb-4 underline">DANH SÁCH LINK ĐỌC</h5>
                <div class="d-flex flex-wrap flex-row">
                    <NuxtLink :to="`${ link.url }`" target="_blank" class="custom-box rounded-3" v-for="link in manga.links" :key="link.label" >
                        {{ link.label }}
                    </NuxtLink>
                </div>
            </div>        
        </section>
    </div>
</template>
<script>

    export default {
        mounted() {
            const pbstatus = this.$el.querySelector(".pb-status").innerHTML;
            const tlstatus = this.$el.querySelector(".tl-status").innerHTML;

            if (pbstatus === "Đã hoàn thành") {
            this.$el.querySelector(".pb-status").classList.add("status-done");
            } else if (pbstatus === "Vẫn tiếp tục") {
            this.$el.querySelector(".pb-status").classList.add("status-on");
            } else if (pbstatus === "Tạm ngưng") {
            this.$el.querySelector(".pb-status").classList.add("status-pause");
            }

            if (tlstatus === "Đã hoàn thành") {
            this.$el.querySelector(".tl-status").classList.add("status-done");
            } else if (tlstatus === "Đang tiến hành") {
            this.$el.querySelector(".tl-status").classList.add("status-on");
            } else if (tlstatus === "Tạm ngưng") {
            this.$el.querySelector(".tl-status").classList.add("status-pause");
            }
        },
    }          
</script>
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
  