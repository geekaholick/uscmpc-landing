<template>
    <section class="about-two-area section-padding section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-4 text-center">
                        <h2 class="title">WHO WE ARE</h2>
                        <p class="paragraph">USC and Community Multi-Purpose Cooperative</p>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <!-- single item start -->
                <div v-for="(about, abouts) in abouts" :key="abouts" class="col-lg-4 col-sm-4">
                    <div class="about-item-two">
                        <div class="about-icon">
                            <a :href="about.link"><i :class="about.icon"></i></a>
                        </div>
                        <div class="about-content">
                            <h5>{{ about.title }}</h5>
                            <p>{{ about.desc }}</p>
                        </div>
                    </div>
                </div>
                <!-- single item end -->
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'About',
    data (){
        return {
             abouts:[
                {
                    title: "HISTORY",
                    desc: "The cooperative history looks back on the beginning of who we are now.", 
                    icon: "fa fa-book",
                    link: "history"
                },
                {
                    title: "COOPERATIVE PROFILE", 
                    desc: "The general structure of the USC & Community Multi-Purpose Cooperative as a company and cooperative.", 
                    icon: "fa fa-address-card",
                    link: "cooperative-profile"
                },
                {
                    title: "BOARD OF DIRECTORS", 
                    desc: "The governing body that represents the interest of the cooperative.", 
                    icon: "fa fa-group",
                    link: "board-of-directors"
                },
                {
                    title: "COOPERATIVE OFFICERS", 
                    desc: "The supporting body that helps in the operation of the cooperative.", 
                    icon: "fa fa-gears",
                    link: "cooperative-officers"
                },
                {
                    title: "AWARDS AND DISTINCTIONS", 
                    desc: "Achievements acquired through the years.", 
                    icon: "fa fa-graduation-cap",
                    link: "awards-distinctions"
                },
                {
                    title: "PHOTOS AND VIDEOS", 
                    desc: "The captured moments that we hope to remember as a cooperative.", 
                    icon: "fa fa-folder-open",
                    link: "photos-videos"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/about.scss';
</style>
