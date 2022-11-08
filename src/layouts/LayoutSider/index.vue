<template>
  <a-layout-sider :collapsed="collapsed" theme="light">
    <sider-menu/>
  </a-layout-sider>
</template>

<script>
import SiderMenu from '@/components/SiderMenu'
import { mapState } from 'vuex'

export default {
  name: 'LayoutSider',
  components: {
    SiderMenu
  },
  computed: {
    ...mapState('config', ['collapsed'])
  }
}
</script>
