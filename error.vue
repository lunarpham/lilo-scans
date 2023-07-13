<template>
    <Navbar />
        <section class="d-flex justify-content-center mt-5 pt-5 h-100">
            <div class="container text-center mt-5 pt-5">
                <h1 class="fw-bold" style="font-size: 4rem;">{{ error.statusCode }}</h1>
                <h5>Đã xảy ra lỗi.</h5>
                <NuxtLink to="/">Quay về trang chính</NuxtLink>
            </div>
        </section>
    <AppFooter />
</template>
<script setup>
    defineProps(['error'])
</script>
<style scoped>

    footer {
        margin-top: 70vh;
    }
</style>