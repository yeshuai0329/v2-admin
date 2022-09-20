<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <DefaultLayout />
    </a-config-provider>
  </div>
</template>

<script>
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
import DefaultLayout from '@/layouts/DefaultLayout'
export default {
  name: 'GlobalProviders',
  components: {
    DefaultLayout
  },
  data () {
    return {
      locale: enUS
    }
  }
}
</script>
