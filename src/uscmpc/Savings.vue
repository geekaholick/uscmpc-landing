<template>
  <section
    class="screenshot-style-2 section-padding bg-cover section"
    id="screenshot"
    :style="bgImg"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title title-style-2">
            <h2 class="title">SAVINGS / SHARE CAPITAL</h2>
            <div class="paragraph font-italic">
              Investment is a fundamental pillar in the establishment of
              cooperative.
            </div>
            <div class="paragraph font-italic">
              These funds enable the cooperative to lend to members at
              faithfully reasonable terms and rates while allowing owners of
              these funds regular and decent returns in the form of dividends
              and interest.
            </div>
          </div>
        </div>
      </div>
      <div v-for="(saving, savings) in savings" :key="savings" class="row">
        <div v-if="savings % 2 == 0" class="col-lg-6">
          <div class="download-wrapper-five section-padding">
            <div class="section-title title-style-5 text-center">
              <h2 class="title">{{ saving.title }}</h2>
              <div class="paragraph">{{ saving.description }}</div>
            </div>
            <div class="download-content-five">
              <!-- <p>{{ saving.test }}</p> -->
            </div>
          </div>
        </div>
        <div v-else class="col-lg-6">
          <div class="app-thumb my-5">
            <img :src="`${saving.image}`" alt="app thumb" />
          </div>
        </div>
        <div v-if="savings % 2 == 0" class="col-lg-6">
          <div class="app-thumb">
            <img :src="`${saving.image}`" alt="app thumb" />
          </div>
        </div>
        <div v-else class="col-lg-6">
          <div class="download-wrapper-five section-padding">
            <div class="section-title title-style-5 text-center">
              <h2 class="title">{{ saving.title }}</h2>
              <div class="paragraph">{{ saving.description }}</div>
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
import * as savingsTypes from "@/store/types/savings";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ScreenshotTwo",
  data() {
    return {
      bgImg: {
        backgroundImage: `url(${require("../assets/img/bg/screenshot-bg.jpg")})`,
      }
    };
  },
   computed: {
    ...mapGetters({
      savings: savingsTypes.GETTER_SAVINGS
    })
  },
  created() {
    this.getSavings();
  },
   methods: {
    ...mapActions({
      getSavings: savingsTypes.ACTION_GET_SAVINGS
    })
  }
};
</script>
<style lang="scss"></style>
