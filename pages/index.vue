<template>
    <div>
        <header>
            <div class="container-fluid" id="masthead">
            </div>
        </header>

        <Disclaimer />

        <!--<section id="updates" class="pt-5">
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
        </section>-->
        <section id="all-mangas" class="mt-3" :aria-hidden="true">
            <div class="container px-4 align-items-center">
                <div class="d-flex underline mb-3">
                    <h5 class="mb-0"><i class="fa-solid fa-book-open me-2"></i></h5>
                    <h5 class="fw-bold mb-0">TẤT CẢ MANGA</h5>
                </div>
                
            </div>
            <div class="container">

                <Suspense>
                    <template #default>
                        <AllMangas />
                    </template>

                    <template #fallback>
                        <Loading />
                    </template>
                </Suspense>
            </div>


        </section>
    </div>
</template>
<script setup>
useHead({
    title: 'Trang chủ - Lilo Translation'
})

useSeoMeta({
    ogTitle: 'Lilo Translation',
    ogDescription: 'Biết bố mày là ai không?',
    ogImage: 'https://i.imgur.com/PU44ah4.jpg',
    twitterTitle: 'Lilo Translation',
    twitterDescription: 'Biết bố mày là ai không?',
    twitterImage: 'https://i.imgur.com/PU44ah4.jpg'
})

</script>
  