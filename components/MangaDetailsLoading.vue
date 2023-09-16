<template>
    <div>
        <section class="mt-5 pt-5">
            <div class="container">
                <div class="row info-box">

                    <!--Image box for manga cover-->
                    <div class="col-md-3 py-4 px-4 flex-column justify-content-center image-box">
                        <div>
                            <img src="~/assets/placeholder.jpg" akt="placeholder" class="rounded-3 w-100">
                        </div>
                        <div class="container p-0 mt-3">
                            
                            <div class="d-flex flex-column">
                                <h1 class="placeholder col-12"></h1>
                            </div>
                        </div>        
                        
                    </div>

                    <!--Details-->
                    <div class="col px-4 py-4 details-box">
                        
                        <!--Manga title and alias-->
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h1 class="placeholder col-3"></h1>
                                <h5 class="placeholder col-3"></h5>
                            </div>
                        </div>

                        <!--Manga info R1-->
                        <div class="row">
                            <div class="col-md-5 d-flex flex-row align-items-start">
                                <p class="placeholder col-3">Tác giả</p>
                                <p class="placeholder col-3"></p>
                            </div>
                        </div>

                        <!--Manga info R2-->
                        <div class="row">
                            <div class="col-md-12 d-flex flex-column align-items-start">
                                <div class="placeholder col-8">
                                </div>
                            </div>
                        </div>

                        <!--Manga info R3-->
                        <div class="row">
                            <div class="col-md-4 d-flex flex-column align-items-start">
                                <p class="placeholder col-3"></p>
                            </div>
                        </div>

                        <!--Manga info R4-->
                        <div class="row">
                            <div class="col-md-12">
                                <p class="placeholder col-12"></p>
                            </div>
                        </div>

                        <!--Manga info R5-->
                        <div class="row mt-3">
                            <div class="col-md-12 d-flex flex-row align-items-start">
                                <p class="me-2">Nhóm dịch</p>
                                <div class="placeholder col-6">
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                                    <div class="d-flex">
                                        <h5 class="me-2"><i class="fa-solid fa-list-ul"></i></h5>
                                        <h5 class="fw-bold">DANH SÁCH CHƯƠNG</h5>
                                    </div>
                                    <div class="row flex-row mt-2 mx-2 p-1">
                                            <h1 class="placeholder col-12"></h1>
                                    
                                    </div>
                                    
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
    useHead(() => {
        return {
        title: "Đang tải truyện...",
        };
    });
  
</script>