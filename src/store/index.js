import Vue from 'vue'
import Vuex from 'vuex'
import showModule from './modules/show'
import showcityModule from './modules/showcity'
import showcinemaModule from './modules/showcinema'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    showModule,
    showcityModule,
    showcinemaModule
  }
})
