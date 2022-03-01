import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import services from '@/store/modules/services'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    services,
  },
  strict: process.env.DEV,
})