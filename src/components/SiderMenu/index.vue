<template>
  <a-menu mode="inline" theme="dark" @openChange="openChange">
    <template v-for="menuInfo in authMenusList">
      <sub-menu
        v-if="menuInfo.children && menuInfo.children.length > 0"
        :mode="menuInfo"
        :key="menuInfo.path"
        :click-menu="clickMenu"
      >
      </sub-menu>

      <a-menu-item v-else :key="menuInfo.path" @click="clickMenu(menuInfo)">
        {{ menuInfo.menuName }}
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SubMenu from './SubMenu'
export default {
  name: 'SiderMenu',
  components: {
    SubMenu
  },
  computed: {
    ...mapState('user', ['authMenusList'])
  },
  methods: {
    ...mapActions('config', [
      'setComponentNameAction',
      'setKeepAliveListAction'
    ]),
    clickMenu (menuInfo) {
      console.log('menuInfo', menuInfo)
      this.$router.push(menuInfo.fullPath)
      this.setComponentNameAction(menuInfo.component)
      this.setKeepAliveListAction(menuInfo)
    },
    openChange (openKeys) {
      console.log('openKeys', openKeys)
    }
  }
}
</script>
