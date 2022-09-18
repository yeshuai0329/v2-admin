import Vue from 'vue'
import App from './App.vue'
import AntDesignVue from '@/AntDesignVue'

Vue.config.productionTip = false
// 引入全局注册的 ant-design-vue 的组件
Vue.use(AntDesignVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
