import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import savings from '@/store/modules/savings'
import banner from '@/store/modules/banner'
import coopMart from "@/store/modules/coopMart"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    savings,
    banner,
    coopMart
  },
  strict: process.env.DEV,
})
