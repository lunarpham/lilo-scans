<template>
    <section class="mt-5 pt-5">
        <div class="container">
            <div class="row info-box">

                <!--Image box for manga cover-->
                <div class="col-md-4 py-4 px-4 d-flex justify-content-center image-box">
                    <div>
                        <img src="~/assets/placeholder.jpg" alt="..."
                            class="manga-cover rounded-3">
                    </div>

                </div>

                <!--Details-->
                <div class="col px-4 py-4 details-box placeholder-glow">

                    <!--Manga title and alias-->
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <h1 class="fw-bold placeholder col-8"></h1>
                            <h5 class="fw-med placeholder col-6"></h5>
                        </div>
                    </div>

                    <!--Manga info R1-->
                    <div class="row">
                        <div class="col-md-5 d-flex flex-column align-items-start">
                            <p class="mb-0">Tác giả</p>
                            <p class="fw-bold placeholder col-4"></p>
                        </div>
                        <div class="col-md-5 d-flex flex-column align-items-start">
                            <p class="mb-0">Hoạ sĩ</p>
                            <p class="fw-bold placeholder col-4"></p>
                        </div>
                        <div class="col-md-2 d-flex flex-column align-items-start">
                            <p class="mb-0">Loại</p>
                            <p class="fw-bold placeholder col-4"></p>
                        </div>
                    </div>

                    <!--Manga info R2-->
                    <div class="row">
                        <div class="col-md-12 d-flex flex-column align-items-start">
                            <p class="mb-2">Thể loại</p>
                            <div class="tags-list mb-3 d-flex flex-row flex-wrap placeholder col-4">
                            </div>
                        </div>
                    </div>

                    <!--Manga info R3-->
                    <div class="row">
                        <div class="col-md-4 d-flex flex-column align-items-start">
                            <p class="mb-0">Năm xuất bản</p>
                            <p class="fw-bold placeholder col-2"></p>
                        </div>
                        <div class="col-md-4 d-flex flex-column align-items-start">
                            <p class="mb-0">Tình trạng</p>
                            <p class="fw-bold pb-status placeholder col-5"></p>
                        </div>
                        <div class="col-md-4 d-flex flex-column align-items-start">
                            <p class="mb-0">Bản dịch</p>
                            <p class="fw-bold tl-status placeholder col-5"></p>
                        </div>
                    </div>

                    <!--Manga info R4-->
                    <div class="row">
                        <div class="col-md-12">
                            <p class="mb-2">Nội dung</p>
                            <p class="fst-italic mb-0 placeholder col-12"></p>
                            <p class="fst-italic mb-0 placeholder col-12"></p>
                            <p class="fst-italic mb-0 placeholder col-12"></p>
                        </div>
                    </div>

                    <!--Manga info R5-->
                    <div class="row mt-3">
                        <div class="col-md-12 d-flex flex-column align-items-start">
                            <p class="mb-2">Nhóm dịch</p>
                            <div class="tags-list mb-3 d-flex flex-row flex-wrap placeholder col-2">
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
                <div class="d-flex flex-wrap flex-row placeholder-glow">
                    <div class="placeholder col-2 py-4"></div>
                </div>
            </div>        
    </section>
</template>
<script setup>
    useHead(() => {
        return {
        title: "Đang tải truyện...",
        };
    });
  
</script>