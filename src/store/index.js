import Vue from "vue";
import Vuex from "vuex";

import coopMart from "@/store/modules/coopMart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coopMart
  },
  strict: process.env.DEV
});
