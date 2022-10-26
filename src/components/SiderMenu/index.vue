<template>
  <a-menu mode="inline" theme="dark" :openKeys="openKeys" :selectedKeys="selectedKeys" @openChange="openChange" @select="selectChange">
    <template v-for="menuInfo in authMenusList">
      <sub-menu
        v-if="menuInfo.children && menuInfo.children.length > 0"
        :mode="menuInfo"
        :key="menuInfo.menuId"
        :click-menu="clickMenu"
      >
      </sub-menu>

      <a-menu-item v-else :key="menuInfo.menuId" @click="clickMenu(menuInfo)">
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
    ...mapState('user', ['authMenusList']),
    ...mapState('config', ['currentComponent', 'openKeys', 'selectedKeys'])
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
