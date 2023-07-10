<template>
    <div> 
        <section
            id="manga-header"
            style="background: linear-gradient(to bottom, rgba(0,0,0,0.3) 20%, rgba(0, 0, 0, 1)), url('https://i.imgur.com/oSO6iPt.jpg');
                    background-size: cover;
                    background-position-y: 40%;
                    height: 30rem;
            ">

        </section>
        <section>
            <div class="container-fluid pt-5 title-box">
                <div class="container w-100 mt-4 info-box p-0 rounded-3">
                    <div class="row-col-2">
                        <div class="col-md-4 float-md-end mb-4 ms-md-4 d-flex justify-content-center image-box">
                            <img
                                src="https://mangadex.org/covers/32252a48-b20a-4a1d-b1b0-b46679bbae47/79e8e2be-6176-44dd-9195-dd209f052b26.png"
                                alt=""
                                class="manga-cover shadow rounded-3"
                            >
                        </div>
                        <div class="col-md-8 px-4 py-5 details-box">
                            <h1 class="fw-bold manga-title">Shimotsuki-san wa Mob ga Suki</h1>
                            <h4 class="fw-med manga-alias">Shimotsuki-san chỉ thích nhân vật nền</h4>
                            <div class="row">
                                <div class="col-md-5 d-flex flex-column align-items-start">
                                    <p class="mb-0">Tác giả</p>
                                    <p class="fw-bold">Yagami Kagami</p>
                                </div>
                                <div class="col-md-5 d-flex flex-column align-items-start">
                                    <p class="mb-0">Hoạ sĩ</p>
                                    <p class="fw-bold">Kigurumi</p>
                                </div>
                                <div class="col-md-2 d-flex flex-column align-items-start">
                                    <p class="mb-0">Loại</p>
                                    <p class="fw-bold">Series</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 d-flex flex-column align-items-start">
                                    <p class="mb-2">Thể loại</p>
                                    <div class="tags-list mb-4 d-flex flex-row flex-wrap">
                                        <small class="tag rounded-2">Comedy</small>
                                        <small class="tag rounded-2">Romance</small>
                                        <small class="tag rounded-2">School Life</small>
                                        <small class="tag rounded-2">Slice of Life</small>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 d-flex flex-column align-items-start">
                                    <p class="mb-0">Năm xuất bản</p>
                                    <p class="fw-bold">2015</p>
                                </div>
                                <div class="col-md-4 d-flex flex-column align-items-start">
                                    <p class="mb-0">Tình trạng</p>
                                    <p class="fw-bold pb-status">Tạm ngưng</p>
                                </div>
                                <div class="col-md-4 d-flex flex-column align-items-start">
                                    <p class="mb-0">Bản dịch</p>
                                    <p class="fw-bold tl-status">Đang tiến hành</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row summary-wrapper">
                            <div class="col-md-12 px-4">
                                <p class="mb-2">Nội dung</p>
                                <div class="d-flex p-0 container">
                                    <div class="start-block"></div>
                                    <div class="summary-text px-2 py-1">
                                        <p class="fst-italic mb-0">"Chỉ riêng cậu là đặc biệt!"

                                            Sau khi tan học, Nakayama Koutarou quay trở lại trường để lấy vài thứ cậu bỏ quên và rồi nhìn thấy Shimotsuki Shiho đang ngủ gật giữa lớp học vắng tanh.
                                            
                                            Shimotsuki được đồn đại là đối tượng nhắm đến của Ryuuzaki Ryouma - một tên đào hoa lập hẳn một dàn harem trong lớp, nhưng biểu cảm của cô lúc nào cũng thờ ơ, và chưa ai từng thấy cô nở một nụ cười.
                                            
                                            Ấy thế mà, ngay lúc này đây, những ngón tay trắng trẻo của cô gái ấy đang nắm lấy bàn tay của Koutarou——?
                                            
                                            Đây là câu chuyện về một "mối quan hệ bí mật" giữa một nữ chính và một nhân vật nền!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="reading-links">
            <div class="container px-4">
                <h5 class="fw-bold">DANH SÁCH LINK ĐỌC</h5>
            </div>        
        </section>
    </div>
  </template>
  <script>
        export default {
            mounted() {
                const pbstatus = this.$el.querySelector(".pb-status").innerHTML;
                const tlstatus = this.$el.querySelector(".tl-status").innerHTML;

                if (pbstatus === "Đã hoàn thành") {
                this.$el.querySelector(".pb-status").classList.add("status-done");
                } else if (pbstatus === "Vẫn tiếp tục") {
                this.$el.querySelector(".pb-status").classList.add("status-on");
                } else if (pbstatus === "Tạm ngưng") {
                this.$el.querySelector(".pb-status").classList.add("status-pause");
                }

                if (tlstatus === "Đã hoàn thành") {
                this.$el.querySelector(".tl-status").classList.add("status-done");
                } else if (tlstatus === "Đang tiến hành") {
                this.$el.querySelector(".tl-status").classList.add("status-on");
                } else if (tlstatus === "Tạm ngưng") {
                this.$el.querySelector(".tl-status").classList.add("status-pause");
                }
            },
        };
</script>
<script setup>
    const route = useRoute();
    useHead({
        title: route.params.title,
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
<style>
    @import 'bootstrap/dist/css/bootstrap.css';
    @import '~/css/styles.css'
</style>
  