<template>
    <a-menu>
      <template v-for="menuInfo in authMenusList" >
        <a-menu-item v-if="!menuInfo.children" :key="menuInfo.menuId" >{{menuInfo.menuName}}</a-menu-item>
        <sider-sub-menu v-else :menu-info="menuInfo" :key="menuInfo.path"/>
      </template>
    </a-menu>
</template>

<script>
import { mapState } from 'vuex'
import SiderSubMenu from './SiderSubMenu.vue'

export default {
  name: 'SiderMenu',
  components: {
    SiderSubMenu
  },
  computed: {
    ...mapState('user', ['authMenusList'])
  }
}
</script>

<style lang='less' scoped>
  .ant-menu {
    height: 100%;
  }
</style>
