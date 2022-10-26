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
import { findOpenkeys, findSelectNode } from '@/utils/public'
export default {
  name: 'SiderMenu',
  components: {
    SubMenu
  },
  mounted () {
    const meta = this.$route.meta
    let openKeys = []
    let node = {}
    // 如果是详情页,那么找父id
    if (meta.isDetailMenu === 1) {
      openKeys = findOpenkeys(this.authMenusList, meta.menuParentId, [])
      node = findSelectNode(this.authMenusList, meta.menuParentId)
      this.setSelectedKeysAction([meta.menuParentId])
    }
    // 如果是普通页面,那么找父id
    if (meta.isDetailMenu === 0) {
      openKeys = findOpenkeys(this.authMenusList, meta.menuId, [])
      node = findSelectNode(this.authMenusList, meta.menuId)
      this.setSelectedKeysAction([meta.menuId])
    }
    this.setOpenKeysAction(openKeys)
    this.setCurrentComponentAction(node || {})
    this.setKeepAliveListAction(node || {})
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
