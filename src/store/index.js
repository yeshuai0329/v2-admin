import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user'
import config from '@/store/config'
Vue.use(Vuex)

const store = new Vuex.Store({
  // namespaced: true,
  modules: {
    user,
    config
  }
})
export default store
