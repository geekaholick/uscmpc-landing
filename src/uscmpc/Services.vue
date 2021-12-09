<template>
    <section class="about-area section-padding section" id="service" :class="AboutStyle">
        <div class="container">
            <div class="row mtn-30">
                <!-- single item start -->
                <div v-for="(service, services) in abouts" :key="services" class="col-lg-3 col-md-6">
                    <a :href="service.link">
                    <div class="about-item">
                        <div class="about-icon">
                            <i :class="service.icon"></i>
                        </div>
                        <div class="about-content">
                            <h6>{{ service.title }}</h6>
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
import * as servicesTypes from '@/store/types/services';
import { mapActions, mapGetters } from 'vuex';

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
    },
    computed: {
    ...mapGetters({
      services: servicesTypes.GETTER_SERVICES
    })
  },
  created() {
    this.getServices().then(() => {
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

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/about.scss';
</style>
