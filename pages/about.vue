<template>
    <div>
        <section class="mt-5 pt-5">
            <div class="container p-4">
                <div class="row">
                    <div class="col-md-2">
                        <img src="https://i.imgur.com/PU44ah4.jpg" alt="Lilo Translation" class="rounded-circle border"
                            style="width: 100%;">
                    </div>
                    <div class="col-md-10">
                        <h2 class="fw-bold">Lilo Translation</h2>
                        <h5>@LiloScans</h5>
                        <p>Nhóm dịch manga cấp thấp. Chủ yếu làm mấy bộ ít ai để ý tới.</p>
                        <div class="row">
                            <div class="col-md-4 d-flex flex-column align-items-start">
                                <p class="fw-bold mb-0">Thành lập</p>
                                <p id="createdDate">13-07-2022</p>
                            </div>
                            <div class="col-md-4 d-flex flex-column align-items-start">
                                <p class="fw-bold mb-0">Thành viên</p>
                                <p id="createdDate">10</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8 mt-5">
                        <h5 class="fw-bold underline-50">THEO DÕI BỌN MÌNH TẠI</h5>
                        <div class="d-flex flex-wrap flex-row mt-3">
                            <NuxtLink to="/" target="_blank" class="custom-box rounded-3">
                                Facebook
                            </NuxtLink>
                            <NuxtLink to="/" target="_blank" class="custom-box rounded-3">
                                Mangadex
                            </NuxtLink>
                            <NuxtLink to="/" target="_blank" class="custom-box rounded-3">
                                Otakusan
                            </NuxtLink>
                            <NuxtLink to="/" target="_blank" class="custom-box rounded-3">
                                Cuutruyen
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-md-4 mt-5">
                        <h5 class="fw-bold underline-50">LIÊN HỆ</h5>
                        <div class="mt-3">
                            <NuxtLink to="mailto:liloscans@gmail.com" target="_blank"
                                class="custom-box rounded-3 d-flex flex-wrap flex-row justify-content-center w-100">
                                <i class="material-icons">mail</i>
                                <p class="mb-0 ms-2">EMAIL</p>
                            </NuxtLink>
                        </div>
                    </div>

                </div>
                <div class="row mt-5">
                    <h5 class="fw-bold underline-50">THÀNH VIÊN</h5>
                    <div class="row px-4">
                        <div class="col-12 col-md-6">
                            <div class="rounded-3 row mt-4 p-2 pastel-bg red-border">
                                <div class="col-md-12 col-xl-2 member-avt">
                                    <img src="~/assets/avatar.jpg" alt="avatar" class="w-100 rounded-circle">
                                </div>
                                <div class="col-md-12 col-xl-9">
                                    <div class="fw-bold">Lunar</div>
                                    <p>aa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script setup>
useHead({
    title: 'Thông tin - Lilo Translation'
})
useSeoMeta({
    ogTitle: 'Thông tin - Lilo Translation',
    ogDescription: 'Về team của chúng mình.',
    ogImage: 'https://i.imgur.com/PU44ah4.jpg',
    twitterTitle: 'Thông tin - Lilo Translation',
    twitterDescription: 'Về team của chúng mình.',
    twitterImage: 'https://i.imgur.com/PU44ah4.jpg'
})
</script>
  
  