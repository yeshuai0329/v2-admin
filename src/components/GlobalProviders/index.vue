<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<script>
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
import { initDynamicRoutes } from '@/router/router'
export default {
  name: 'GlobalProviders',
  components: {
  },
  mounted () {
    initDynamicRoutes()
  },
  data () {
    return {
      locale: enUS
    }
  }
}
</script>
