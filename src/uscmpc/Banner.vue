<template>
  <section
    class="slider-section slider-style-5 section"
    id="home"
    :style="bgImg"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <carousel
            class="hero-carousel"
            v-if="sliders.length > 0"
            :items="1"
            :nav="false"
            :dots="false"
            :loop="true"
            :autoplay="true"
            :smartSpeed="5000"
          >
            <!-- single slider item -->
            <div
              v-for="(slider, sliders) in sliders"
              :key="sliders"
              class="hero-slider-item"
            >
              <div class="row align-items-center">
                <div class="col-xl-7 col-lg-7 col-md-7">
                  <div class="slider-content">
                    <div class="slider-logo">
                      <img
                        :src="
                          require('@/assets/img/home-uscmpc/slider/slider-logo.png')
                        "
                        alt="slider logo"
                      />
                    </div>
                    <h6 class="slider-subtitle">{{ slider.subtitle }}</h6>
                    <h2 class="slider-title">{{ slider.title }}</h2>
                    <p class="slider-desc multi-line-truncate">{{ slider.description }}</p>
                    <div class="slider-btn">
                      <a :href="slider.link" class="btn btn-round">
                        <i v-show="slider.icon" :class="slider.icon" class="mr-2"></i>{{ slider.button_text }}</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5">
                  <div class="slider-thumb">
                    <img
                      :src="
                        require('@/assets/img/home-uscmpc/slider/member.png')
                      "
                      alt="slider thumb"
                    />
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
import carousel from "vue-owl-carousel";
import * as bannerTypes from "@/store/types/banner";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HeroBannerFive",
  components: {
    carousel
  },
  data() {
    return {
      bgImg: {
        backgroundImage: `url(${require("../assets/img/home-medical/slider/1-bg.jpg")})`
      },
      sliders: []
    };
  },
  computed: {
    ...mapGetters({
      banners: bannerTypes.GETTER_BANNERS
    })
  },
  created() {
    this.getBanners().then(() => {
      this.sliders = this.banners;
    });
  },
  methods: {
    ...mapActions({
      getBanners: bannerTypes.ACTION_GET_BANNERS
    })
  }
};
</script>
