<template>

  <div class="container">
    <div class="container px-5">
      <p v-html="test.mission"></p>
      <p v-html="test.vision"></p>  
      <p v-html="test.goal"></p>
      <p v-html="test.generalInfo"></p>
    </div>

  </div>
  <!-- </section>    -->
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      test: {},
    };
  },
  mounted() {
    const data = fetch("http://localhost:9999/profiles")
      .then((res) => res.json())
      .then((result) => {
        console.log(this.test);
        this.test = result;
      });
  },    
};
</script>

<style lang='scss'>
@import "../assets/scss/variables.scss";
@import "../assets/scss/components/video.scss";
.new-p {
  color: black;
  font-size: 14px;
  text-align: justify;
}
</style>

