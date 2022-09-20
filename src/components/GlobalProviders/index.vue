<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<script>
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
export default {
  name: 'GlobalProviders',
  components: {
  },
  data () {
    return {
      locale: enUS
    }
  }
}
</script>
