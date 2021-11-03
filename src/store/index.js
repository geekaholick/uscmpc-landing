import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import banner from '@/store/modules/banner'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    banner,
  },
  strict: process.env.DEV,
})