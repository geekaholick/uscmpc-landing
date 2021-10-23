<template>
    <section class="testimonial-area pt-100 fix section" id="review" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">BOARD OF DIRECTORS</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="custom_testimonial-item">
                        <div class="custom_testimonial-thumb">
                            <img src="../assets/img/bod/glarino.jpg" alt="client thumb">
                        </div>
                        <div class="testimonial-content">
                            <h6 class="custom_client">Glenn Glarino</h6>
                            <p style="color: black">Chair</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="custom_testimonial-item">
                        <div class="custom_testimonial-thumb">
                            <img src="../assets/img/bod/abrenica.jpg" alt="client thumb">
                        </div>
                        <div class="testimonial-content">
                            <h6 class="custom_client">Brennette Abrenica</h6>
                            <p style="color: black">Vice Chair</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="custom_testimonial-item">
                        <div class="custom_testimonial-thumb">
                            <img src="../assets/img/bod/abarquez.jpg" alt="client thumb">
                        </div>
                        <div class="testimonial-content">
                            <h6 class="custom_client">Milagros Abarquez</h6>
                            <p style="color: black">Member</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="custom_testimonial-item">
                        <div class="custom_testimonial-thumb">
                            <img src="../assets/img/bod/mayormita.jpg" alt="client thumb">
                        </div>
                        <div class="testimonial-content">
                            <h6 class="custom_client">Ricardo Mayormita</h6>
                            <p style="color: black">Member</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="custom_testimonial-item">
                        <div class="custom_testimonial-thumb">
                            <img src="../assets/img/bod/yu.jpg" alt="client thumb">
                        </div>
                        <div class="testimonial-content">
                            <h6 class="custom_client">Jesus Yu Jr.</h6>
                            <p style="color: black">Member</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="custom_testimonial-item">
                        <div class="custom_testimonial-thumb">
                            <img src="../assets/img/bod/fornolles.jpg" alt="client thumb">
                        </div>
                        <div class="testimonial-content">
                            <h6 class="custom_client">Marichu Fornolles</h6>
                            <p style="color: black">Treasurer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="custom_testimonial-item">
                        <div class="custom_testimonial-thumb">
                            <img src="../assets/img/bod/villaluz.jpg" alt="client thumb">
                        </div>
                        <div class="testimonial-content">
                            <h6 class="custom_client">Celeste Villaluz</h6>
                            <p style="color: black">Secretary</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Testimonial',
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/bg/video-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/testimonial.scss';

    .custom_client {
        font-weight: 700;
        color: black;
        padding: 27px 0 10px;
    }

    .custom_testimonial-item {
        text-align: center;
        padding: 5%;
    }

    .custom_testimonial-thumb {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
    }
</style>
