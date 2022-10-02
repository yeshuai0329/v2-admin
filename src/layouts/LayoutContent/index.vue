<template>
  <a-layout-content >
    <keep-alive :include="keepAliveComponentNameList">
      <router-view></router-view>
    </keep-alive>
  </a-layout-content>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutContent',
  computed: {
    ...mapGetters('config', ['keepAliveComponentNameList'])
  }
}
</script>

<style lang='less' scoped>

</style>
