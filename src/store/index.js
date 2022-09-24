import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  // namespaced: true,
  modules: {
    user
  }
})
export default store
