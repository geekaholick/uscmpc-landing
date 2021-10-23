<template>
    <section class="screenshot-style-2 section-padding bg-cover section" id="screenshot" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-2">
                        <h2 class="title">SAVINGS / SHARE CAPITAL</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem <br>consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div v-for="(about, abouts) in abouts" :key="abouts" class="row">
                <div v-if="abouts%2==0" class="col-lg-6">
                    <div class="download-wrapper-five section-padding">
                        <div class="section-title title-style-5 text-center">
                            <h2 class="title">{{ about.title }}</h2>
                            <p class="paragraph-light">{{ about.desc }}</p>
                        </div>
                        <div class="download-content-five">
                            <p>{{ about.test }}</p>
                        </div>
                    </div>
                </div>
                <div v-else class="col-lg-6">
                    <div class="app-thumb">
                        <img :src="`${about.pic}`" alt="app thumb">
                    </div>
                </div>
                <div v-if="abouts%2==0" class="col-lg-6">
                    <div class="app-thumb">
                        <img :src="`${about.pic}`" alt="app thumb">
                    </div>
                </div>
                <div v-else class="col-lg-6">
                    <div class="download-wrapper-five section-padding">
                        <div class="section-title title-style-5 text-center">
                            <h2 class="title">{{ about.title }}</h2>
                            <p class="paragraph-light">{{ about.desc }}</p>
                        </div>
                        <div class="download-content-five">
                            <p>{{ about.test }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

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
                },
                abouts:[
                    {
                        title: "USC COLLEGE",
                        desc: "Nam liber tempor cum soluta nobis eleifend option cong nihil imperdiet.",
                        test: "you got that long hair sweat jeans thing amabob",
                        pic: require(`../assets/img/home-medical/app.png`),
                    },
                    {
                        title: "USC SENIOR HIGH SCHOOL", 
                        desc: "Nam liber tempor cum soluta nobis eleifend option cong nihil imperdiet.",
                        test: "you got that long hair sweat jeans thing amabob",
                        pic: require(`../assets/img/home-medical/app.png`),
                    },
                    {
                        title: "USC HIGH SCHOOL", 
                        desc: "Nam liber tempor cum soluta nobis eleifend option cong nihil imperdiet.", 
                        test: "you got that long hair sweat jeans thing amabob",
                        pic: require(`../assets/img/home-medical/app.png`),
                    },
                ],
            }
        }
    }

</script>
