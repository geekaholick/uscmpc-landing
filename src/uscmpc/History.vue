<template>
  <section class="video-section section-padding fix" :style="bgImg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title title-style-4 text-center">
            <h2 class="title">HISTORY</h2>
            <p
              class="paragraph"
            >Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="bestapp-content-inner">
            <img class="image" :src="content.image">
            <div class="bestapp-content-text pb-0" v-html="content.content"></div>
          </div>
        </div>
        <!-- <div class="col-lg-6">
                    <div class="video-player">
                        <figure class="embed-responsive embed-responsive-16by9">
                            <iframe :src="video" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </figure>
                    </div>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
axios.headers;
export default {
  name: "Video",
  data() {
    return {
      content: "",
      video: "https://www.youtube.com/embed/iaj8ktgL3BY",
      bgImg: {
        backgroundImage: `url(${require("../assets/img/bg/video-bg.jpg")})`
      }
    };
  },
  mounted() {
    axios.get('http://'+process.env.VUE_APP_HOST+':'+process.env.VUE_APP_DATABASE_PORT+'/history').then(test => {
      this.content = test.data;
    });
  }
};
</script>

<style lang='scss'>
@import "../assets/scss/variables.scss";
@import "../assets/scss/components/video.scss";
.new-p {
  color: black;
  font-size: 18px;
  text-align: justify;
}
.new-ul {
  color: black;
  columns: 2;
  padding: 0px 20px;
  font-size: 1.1rem;
  padding: 2%;
}
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding: 5%;
}
</style>
