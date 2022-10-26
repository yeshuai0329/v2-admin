import Vue from 'vue'
import AntDesignVue from '@/AntDesignVue'
import GlobalProviders from '@/components/GlobalProviders'
import router from '@/router/globalRouterGuard'
import '@/styles/reset.less'
import '@/styles/nprogress.less'
import store from '@/store'

Vue.config.productionTip = false
// 引入全局注册的 ant-design-vue 的组件
Vue.use(AntDesignVue)

new Vue({
  router,
  store,
  render: h => h(GlobalProviders)
}).$mount('#app')
