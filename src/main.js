import Vue from 'vue'
import AntDesignVue from '@/AntDesignVue'
import GlobalProviders from '@/components/GlobalProviders'
import '@/styles/reset.less'

Vue.config.productionTip = false
// 引入全局注册的 ant-design-vue 的组件
Vue.use(AntDesignVue)

new Vue({
  render: h => h(GlobalProviders),
}).$mount('#app')
