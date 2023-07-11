<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-white shadow" id="mainNav">
        <div class="container">
            <NuxtLink to="/" class="navbar-brand fw-bold fs-4" href="#page-top">LILO TRANSLATION</NuxtLink>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item fw-bold"><NuxtLink to="/" class="nav-link"><div class="active full-width">Trang chủ</div></NuxtLink></li>
                    <li class="nav-item fw-bold"><NuxtLink to="/about" class="nav-link">Biết bố mày là ai không?</NuxtLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
@import '~/css/styles.css'

</style>