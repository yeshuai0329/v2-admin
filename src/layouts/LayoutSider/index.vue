<template>
  <a-layout-sider :collapsed="collapsed" theme="light" collapsible  @collapse="toggleAction">
    <sider-menu/>
  </a-layout-sider>
</template>

<script>
import SiderMenu from '@/components/SiderMenu'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'LayoutSider',
  components: {
    SiderMenu
  },
  data () {
    return {
      keepOpenKeys: []
    }
  },
  computed: {
    ...mapState('config', ['collapsed', 'openKeys'])
  },
  methods: {
    ...mapActions('config', ['setCollapsedAction', 'setOpenKeysAction']),
    toggleAction (a, b) {
      console.log('a', a)
      console.log('b', b)
      if (!this.collapsed) {
        this.keepOpenKeys = this.openKeys
        this.setOpenKeysAction([])
      } else {
        this.setOpenKeysAction(this.keepOpenKeys)
      }
      this.setCollapsedAction(!this.collapsed)
    }
  }
}
</script>
