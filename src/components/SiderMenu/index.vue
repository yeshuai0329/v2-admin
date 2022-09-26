<template>
    <a-menu
      mode="inline"
      theme="dark"
    >
      <template v-for="menuInfo in authMenusList" >
        <a-menu-item
          v-if="!menuInfo.children"
          :key="menuInfo.menuId"
          @click="clickMenu(menuInfo)"
        >
          {{menuInfo.menuName}}
        </a-menu-item>
        <a-sub-menu  v-else :icon="menuInfo.menuIcon" :title="menuInfo.menuName" :key="menuInfo.path">
          <template v-for="menu in menuInfo.children" >
            <a-menu-item
              v-if="!menu.children"
              :key="menu.path"
              @click="clickMenu(menu)"
            >
              {{menu.menuName}}
            </a-menu-item>
            <sider-menu  v-else :mode="menu.children" :key="menu.path"></sider-menu>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SiderMenu',
  props: ['mode'],
  computed: {
    ...mapState('user', ['authMenusList'])
  },
  methods: {
    clickMenu (menuInfo) {
      console.log('menuInfo', menuInfo)
      this.$router.push(menuInfo.fullPath)
    }
  }
}
</script>

<style lang='less' scoped>
  .ant-menu {
    height: 100%;
  }
</style>
