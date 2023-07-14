<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container px-4">
            <NuxtLink to="/" class="navbar-brand fw-bold fs-4" href="#page-top">LILO TRANSLATION</NuxtLink>
            <button class="navbar-toggler border navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="bi-list collapse-icon"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item fw-bold"><NuxtLink to="/" class="line-bottom  nav-link">Trang chủ</NuxtLink></li>
                    <li class="nav-item fw-bold"><NuxtLink to="/about" class="line-bottom  nav-link">Biết bố mày là ai không?</NuxtLink></li>
                    <li>
                        <select class="form-select color-switch" v-model="$colorMode.preference">
                            <option value="system">Hệ thống</option>
                            <option value="light">Đỏ sáng</option>
                            <option value="dark">Xanh tối</option>
                            <option value="purple">Tím vàng</option>
                            <option value="blue">Xanh tím</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
    const colorMode = useColorMode()
</script>