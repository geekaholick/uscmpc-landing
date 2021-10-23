<template>
    <section class="about-area section-padding section" id="service" :class="AboutStyle">
        <div class="container">
            <div class="row mtn-30">
                <!-- single item start -->
                <div v-for="(about, abouts) in abouts" :key="abouts" class="col-lg-3 col-md-6">
                    <a :href="about.link">
                    <div class="about-item">
                        <div class="about-icon">
                            <i :class="about.icon"></i>
                        </div>
                        <div class="about-content">
                            <h6>{{ about.title }}</h6>
                            <!-- <p>{{ about.desc }}</p> -->
                        </div>
                    </div>
                    </a>
                </div>
                <!-- single item end -->
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Services',
    props: ["AboutStyle"],
    data (){
        return {
             abouts:[
                { 
                    title: "SAVINGS / SHARE CAPITAL", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon: "fa fa-pagelines",
                    link: "savings"
                },
                {
                    title: "LENDING", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon: "fa fa-money",
                    link: "lending"
                },
                {
                    title: "CONSUMER STORE (Coop Mart)", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon: "fa fa-shopping-cart",
                    // link: "coop-mart"
                    link: "under-construction"
                },
                {
                    title: "OTHER SERVICES", 
                    desc: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.", 
                    icon: "fa fa-sign-in",
                    // link: "services"
                    link: "under-construction"
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
