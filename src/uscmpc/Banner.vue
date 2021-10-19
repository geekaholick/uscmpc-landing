<template>
    <section class="slider-section slider-style-5 section" id="home" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <carousel class="hero-carousel"
                        :items = "1"
                        :nav = "false"
                        :dots = "false"
                        :loop = "true"
                        :autoplay = "true"
                        :smartSpeed = "5000"
                    >
                        <!-- single slider item -->
                        <div v-for="(slider, sliders) in sliders" :key="sliders" class="hero-slider-item">
                            <div class="row align-items-center">
                                <div class="col-xl-7 col-lg-7 col-md-7">
                                    <div class="slider-content">
                                        <div class="slider-logo">
                                            <img :src="slider.logo" alt="slider logo">
                                        </div>
                                        <h6 class="slider-subtitle">{{ slider.subtitle }}</h6>
                                        <h2 class="slider-title">{{ slider.sliderTitle }}</h2>
                                        <p class="slider-desc">{{ slider.sliderDesc }}</p>
                                        <div class="slider-btn">
                                            <a :href="slider.link" class="btn btn-round">{{ slider.buttonText }}</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-5">
                                    <div class="slider-thumb">
                                        <img :src="slider.sliderThumb" alt="slider thumb">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- single slider end -->
                    </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        name: 'HeroBannerFive',
        components: {
            carousel 
        },
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/home-medical/slider/1-bg.jpg')})`
                },
                sliders: [
                    {
                        sliderThumb: require("../assets/img/home-uscmpc/slider/member.png"), 
                        logo: require("../assets/img/home-uscmpc/slider/slider-logo.png"), 
                        subtitle: 'USC & Community Multi-Purpose Cooperative', 
                        sliderTitle: 'Become One of Us', 
                        sliderDesc: 'Hassle free online application. At your own convinience.',
                        buttonText: 'APPLY HERE',
                        link: '#'
                    },
                    {
                        sliderThumb: require("../assets/img/home-uscmpc/slider/2.png"), 
                        logo: require("../assets/img/home-uscmpc/slider/slider-logo.png"), 
                        subtitle: 'USC & Community Multi-Purpose Cooperative', 
                        sliderTitle: 'Special General Assembly Meeting', 
                        sliderDesc: 'October 24, 2021 (07:00 AM to 12:00 NN) via ZOOM',
                        buttonText: 'JOIN US',
                        link: 'http://www.event.uscmpc.com'
                    },
                ]
            }
        }
    }
</script>
