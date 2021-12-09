<template>
    <section class="screenshot-style-2 section-padding bg-cover section" id="screenshot" :style="bgImg">
        <div class="container"  v-for="service in services" :key="service">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-2">
                        <h2 class="title">{{service.title}}</h2>
                        <p class="paragraph">{{service.description }}</p>
                        <img :src="service.image" alt="">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="screenshot-gallery text-center">
                        <swiper :options="swiperOption">
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img :src="service.image" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/bod/glarino.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/bod/abrenica.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/scr-2.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="scr-thumb">
                                    <img src="../assets/img/screenshot/scr-3.jpg" alt="screenshot thumb">
                                </div>
                            </swiper-slide>
                            <!-- Optional controls -->
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import * as servicesTypes from '@/store/types/services';
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ScreenshotTwo',
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/screenshot-bg.jpg')})`
                },
                swiperOption: {
                    speed: 600,
                    loop: true,
                    slidesPerView: 3,
                    effect: 'coverflow',
                    // grabCursor: true,
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: -25,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : false,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                     breakpoints: {
                         768: {
                            spaceBetween: 60
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                }
            }
        },
         computed: {
    ...mapGetters({
      services: servicesTypes.GETTER_SERVICES
    })
  },
  created() {
    this.getServices().then(() => {
        // console.log('services', this.services)
      // this.sliders = this.services;
    });
  },
   methods: {
    ...mapActions({
      getServices: servicesTypes.ACTION_GET_SERVICES
    })
  }
    }

</script>
