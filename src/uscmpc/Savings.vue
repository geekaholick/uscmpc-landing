<template>
    <section class="screenshot-style-2 section-padding bg-cover section" id="screenshot" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-2">
                        <h2 class="title">SAVINGS / SHARE CAPITAL</h2>
                        <p class="paragraph">Investment is a fundamental pillar in the establishment of cooperative.</p>
                        <p class="paragraph">These funds enable the cooperative to lend to members at faithfully reasonable terms and rates while allowing owners of these funds regular and decent returns in the form of dividends and interest.</p>
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
                            <!-- <p>{{ about.test }}</p> -->
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
                            <!-- <p>{{ about.test }}</p> -->
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
                        title: "FIXED DEPOSIT/SHARE CAPITAL",
                        desc: "As a member, he is allowed to make equity contributions to the capital fund of the COOP in the form of Share Capital. An applicant for membership shall subscribe at least Fifty (50) common shares at Php100.00 per share per year, in the amount of Five Thousand pesos (Php5,000.00) and pay the equivalent of at least Five (5) shares in the amount of Five hundred pesos (Php500.00) per month as his/her monthly contribution to the continuous capital buildup of the cooperative. However, no member shall own or hold more than ten percent (10%) of the total subscribed share capital of the Cooperative. CANNOT BE WITHDRAWN UNLESS THE MEMBER RETRACTS MEMBERSHIP",
                        test: "",
                        pic: require(`../assets/img/home-uscmpc/sharecap.png`),
                    },
                    // {
                    //     title: "DEPOSITS", 
                    //     desc: "Money placements of members with the cooperative for a certain period of time. This can either be in the form of Regular Savings or Time Deposits.",
                    //     test: "you got that long hair sweat jeans thing amabob",
                    //     pic: require(`../assets/img/home-medical/app.png`),
                    // },
                    // {
                    //     title: "USC HIGH SCHOOL", 
                    //     desc: "Nam liber tempor cum soluta nobis eleifend option cong nihil imperdiet.", 
                    //     test: "you got that long hair sweat jeans thing amabob",
                    //     pic: require(`../assets/img/home-medical/app.png`),
                    // },
                ],
            }
        }
    }

</script>
<style lang="scss">
    
</style>
