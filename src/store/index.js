import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import savings from '@/store/modules/savings'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    savings,
  },
  strict: process.env.DEV,
})