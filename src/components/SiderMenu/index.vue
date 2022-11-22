<template>
  <a-menu
    mode="inline"
    theme="light"
    :openKeys="openKeys"
    :selectedKeys="selectedKeys"
    @openChange="openChange"
    @select="selectChange"
    :inline-collapsed="collapsed"
  >
    <Logo />
    <template v-for="menuInfo in authMenusList">
      <sub-menu
        v-if="menuInfo.children && menuInfo.children.length > 0"
        :mode="menuInfo"
        :key="menuInfo.menuId"
        :click-menu="clickMenu"
      />

      <a-menu-item v-else :key="menuInfo.menuId" @click="clickMenu(menuInfo)">
        <IconFont :icon="menuInfo.icon"/>
        <span>{{ menuInfo.menuName }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SubMenu from './SubMenu'
import Logo from '@/components/Logo'

export default {
  name: 'SiderMenu',
  components: {
    SubMenu,
    Logo
  },
  computed: {
    ...mapState('user', ['authMenusList']),
    ...mapState('config', [
      'currentComponent',
      'openKeys',
      'selectedKeys',
      'collapsed'
    ])
  },
  methods: {
    ...mapActions('config', [
      'setCurrentComponentAction',
      'setKeepAliveListAction',
      'setOpenKeysAction',
      'setSelectedKeysAction'
    ]),
    clickMenu (menuInfo) {
      this.$router.push(menuInfo.fullPath)
      this.setCurrentComponentAction(menuInfo)
      this.setKeepAliveListAction(menuInfo)
    },
    openChange (openKeys) {
      this.setOpenKeysAction(openKeys)
    },
    selectChange ({ selectedKeys }) {
      this.setSelectedKeysAction(selectedKeys)
    }
  }
}
</script>

<style lang="less" scoped>
  .ant-menu {
    height: 100%;
  }
</style>
