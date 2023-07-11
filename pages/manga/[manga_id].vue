<template>
    <div>
        <section
            id="manga-header"
            :style="{
                background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 20%, rgba(0, 0, 0, 1)), url('${ manga.cover }')`,
                backgroundSize: 'cover',
                backgroundPositionY: '40%',
                height: '30rem'
                }
            ">

        </section>
        <section>
            <div class="container-fluid pt-5 title-box">
                <div class="container w-100 mt-4 info-box p-0 rounded-3">
                    <div class="row-col-2">
                        <div class="col-md-4 float-md-end mb-4 ms-md-4 d-flex justify-content-center image-box">
                            <img
                                :src="manga.img"
                                alt=""
                                class="manga-cover shadow rounded-3"
                            >
                        </div>
                        <div class="col-md-8 px-4 py-5 details-box">
                            <h1 class="fw-bold manga-title">{{ manga.title }}</h1>
                            <h4 class="fw-med manga-alias">{{ manga.alias }}</h4>
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
                            <div class="row">
                                <div class="col-md-12 d-flex flex-column align-items-start">
                                    <p class="mb-2">Thể loại</p>
                                    <div class="tags-list mb-4 d-flex flex-row flex-wrap">
                                        <small class="tag rounded-2" v-for="genre in manga.genres" :key="genre">{{ genre }}</small>
                                    </div>
                                </div>
                            </div>
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
                            
                        </div>
                        <div class="row summary-wrapper">
                            <div class="col-md-12 px-4">
                                <p class="mb-2">Nội dung</p>
                                <div class="d-flex p-0 container">
                                    <div class="start-block"></div>
                                    <div class="summary-text px-2 py-1">
                                        <p class="fst-italic mb-0">{{ manga.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="reading-links">
            <div class="container px-4">
                <h5 class="fw-bold mb-4">DANH SÁCH LINK ĐỌC</h5>
                <ul v-for="link in manga.links" :key="link.label" class="p-0 link-list">
                    <li>
                        <NuxtLink :to="`${ link.url }`" target="_blank" class="container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary rounded-2">
                            <div class="start-block rounded-start-2"></div>
                            <div class="update-body w-100 py-2 row">
                                <div class="col-md-12">{{ link.label }}</div>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
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
        title: `${ manga._value.title }`,
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
        };
    });
  
</script>
<style>
    @import 'bootstrap/dist/css/bootstrap.css';
    @import '~/css/styles.css'
</style>
  