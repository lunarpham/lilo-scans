<template>
    <div>
        <header>
            <div class="container-fluid" id="masthead">
            </div>
        </header>
        <section id="updates" class="pt-5">
            <div class="container">
                <h5 class="fw-bold">MỚI CẬP NHẬT</h5>
                <ul class="fw-bold new-updates p-0">
                    <li class="update-content my-3">
                        <a href="#"
                            class="border-left-pink rounded container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary">
                            <div class="update-body w-100 py-2 px-lg-5 row">
                                <div class="col-md-7">Anh Tiến Phiêu Lưu Ký</div>
                                <div class="col-md-2">Chương 5</div>
                                <div class="col-md-3 text-end">16 giờ trước</div>
                            </div>
                        </a>
                    </li>
                    <li class="update-content my-3">
                        <a href="#"
                            class="border-left-pink rounded container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary">
                            <div class="update-body w-100 py-2 px-lg-5 row">
                                <div class="col-md-7">Anh Tiến Phiêu Lưu Ký</div>
                                <div class="col-md-2">Chương 4</div>
                                <div class="col-md-3 text-end">2 ngày trước</div>
                            </div>
                        </a>
                    </li>
                    <li class="update-content my-3">
                        <a href="#"
                            class="border-left-pink rounded container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary">
                            <div class="update-body w-100 py-2 px-lg-5 row">
                                <div class="col-md-7">Anh Tiến Phiêu Lưu Ký</div>
                                <div class="col-md-2">Chương 3</div>
                                <div class="col-md-3 text-end">3 ngày trước</div>
                            </div>
                        </a>
                    </li>
                    <li class="update-content my-3">
                        <a href="#"
                            class="border-left-pink rounded container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary">
                            <div class="update-body w-100 py-2 px-lg-5 row">
                                <div class="col-md-7">Địt bà Nt*da và BLT</div>
                                <div class="col-md-2">Chương 1</div>
                                <div class="col-md-3 text-end">3 ngày trước</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section id="all-mangas" class="pt-5">
            <div class="container">
                <h5 class="fw-bold">TẤT CẢ MANGA</h5>
                <div class="row container">
                    <div class="col-6 col-md-3 col-xl-4 p-2" v-for="manga in mangas">
                        <img :src="manga.img" :alt="manga.id" style="width: 95%;">
                        <div class="text-under-comic fw-bold">
                            <NuxtLink :to="`manga/${manga.id}`">{{ manga.title }}</NuxtLink>
                        </div>
                    </div>

                </div>
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
    title: 'Trang chủ - Lilo Translation'
})

const { data: mangas } = await useFetch('https://api.npoint.io/5db90e7f047a1396a59c/manga');

useSeoMeta({
    ogTitle: 'Lilo Translation',
    ogDescription: 'Biết bố mày là ai không?',
    ogImage: 'https://i.imgur.com/PU44ah4.jpg',
    url: 'https://lilo-translation.vercel.app/'
})

</script>
  