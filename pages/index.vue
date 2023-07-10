<template>
    <div>
      <header>
          <div class="container-fluid" id="masthead">
          </div>
      </header>
      <section id="updates" class="pt-5">
          <div class="container">
              <h5 class="fw-bold">MỚI CẬP NHẬT</h5>
              <ul class="new-updates p-0">
                  <li class="update-content my-3">
                      <a href="#" class="container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary">
                          <div class="start-block"></div>
                          <div class="update-body w-100 py-2 px-lg-5 row">
                              <div class="col-md-8">Anh Tiến Phiêu Lưu Ký</div>
                              <div class="col-md-1">Chương 5</div>
                              <div class="col-md-3 text-end">16 giờ trước</div>
                          </div>
                      </a>
                  </li>
                  <li class="update-content my-3">
                      <a href="#" class="container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary">
                          <div class="start-block"></div>
                          <div class="update-body w-100 py-2 px-lg-5 row">
                              <div class="col-md-8">Anh Tiến Phiêu Lưu Ký</div>
                              <div class="col-md-1">Chương 4</div>
                              <div class="col-md-3 text-end">2 ngày trước</div>
                          </div>
                      </a>
                  </li>
                  <li class="update-content my-3">
                      <a href="#" class="container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary">
                          <div class="start-block"></div>
                          <div class="update-body w-100 py-2 px-lg-5 row">
                              <div class="col-md-8">Anh Tiến Phiêu Lưu Ký</div>
                              <div class="col-md-1">Chương 3</div>
                              <div class="col-md-3 text-end">3 ngày trước</div>
                          </div>
                      </a>
                  </li>
                  <li class="update-content my-3">
                      <a href="#" class="container bg-white shadow-sm p-0 d-flex link-underline link-underline-opacity-0 link-secondary">
                          <div class="start-block"></div>
                          <div class="update-body w-100 py-2 px-lg-5 row">
                              <div class="col-md-8">Địt bà Nt*da và BLT</div>
                              <div class="col-md-1">Chương 1</div>
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
        title: 'Trang chủ - Lilo Translation',
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
    })
  </script>
  