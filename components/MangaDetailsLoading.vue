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
                            
                            <div class="d-flex flex-column placeholder-glow">
                                <h1 class="placeholder col-12 mb-3"></h1>
                            </div>
                        </div>        
                        
                    </div>

                    <!--Details-->
                    <div class="col px-4 py-4 details-box">
                        
                        <!--Manga title and alias-->
                        <div class="row">
                            <div class="col-md-12 mb-3 d-flex flex-column placeholder-glow">
                                <h1 class="placeholder col-8"></h1>
                                <h5 class="placeholder col-6"></h5>
                            </div>
                        </div>

                        <!--Manga info R1-->
                        <div class="row">
                            <div class="col-md-5 d-flex flex-row align-items-start placeholder-glow">
                                <p class="placeholder col-6"></p>
                            </div>
                        </div>

                        <!--Manga info R2-->
                        <div class="row">
                            <div class="col-md-12 d-flex flex-column align-items-start placeholder-glow">
                                <div class="placeholder col-8 mb-4">
                                </div>
                            </div>
                        </div>

                        <!--Manga info R3-->
                        <div class="row">
                            <div class="col-md-4 d-flex flex-column align-items-start placeholder-glow">
                                <div class="placeholder col-8 mb-4"></div>
                            </div>
                        </div>

                        <!--Manga info R4-->
                        <div class="row">
                            <div class="col-md-12 placeholder-glow">
                                <p class="placeholder col-12 mb-0"></p>
                                <p class="placeholder col-12 mb-0"></p>
                                <p class="placeholder col-12 mb-0"></p>
                                <p class="placeholder col-12 mb-0"></p>
                            </div>
                        </div>

                        <!--Manga info R5-->
                        <div class="row mt-3">
                            <div class="col-md-12 d-flex flex-row align-items-start placeholder-glow">
                                <div class="placeholder col-6 mb-2">
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                                    <div class="d-flex">
                                        <h5 class="me-2"><i class="fa-solid fa-list-ul"></i></h5>
                                        <h5 class="fw-bold">DANH SÁCH CHƯƠNG</h5>
                                    </div>
                                    <div class="row flex-row mt-2 mx-2 p-1 placeholder-glow">
                                            <h1 class="placeholder col-10"></h1>
                                    
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