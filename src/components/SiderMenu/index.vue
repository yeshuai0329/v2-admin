<template>
  <a-menu mode="inline" theme="dark" @openChange="openChange" @select="selectChange" :openKeys="openMenuKeys" :selectedKeys="selectedMenuKeys">
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
import { findOpenkeys, findSelectKeys } from '@/utils/public'
import { mapState, mapActions } from 'vuex'
import SubMenu from './SubMenu'
export default {
  name: 'SiderMenu',
  components: {
    SubMenu
  },
  data: function () {
    return {
      openMenuKeys: [],
      selectedMenuKeys: []
    }
  },
  computed: {
    ...mapState('user', ['authMenusList']),
    ...mapState('config', ['currentComponent', 'openKeys', 'selectedKeys'])
  },
  watch: {
    openKeys: {
      handler () {
        this.openMenuKeys = this.openKeys
      },
      deep: true,
      immediate: true
    },
    selectedKeys: {
      handler () {
        this.selectedMenuKeys = this.selectedKeys
      },
      deep: true,
      immediate: true
    }
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
      const openKeys = findOpenkeys(this.authMenusList, this.$route.path, [])
      const selectedKeys = findSelectKeys(this.authMenusList, this.$route.path)
      this.setOpenKeysAction(openKeys)
      this.setSelectedKeysAction(selectedKeys)
      this.setCurrentComponentAction(menuInfo)
      this.setKeepAliveListAction(menuInfo)
    },
    openChange (openKeys) {
      this.openMenuKeys = openKeys
    },
    selectChange ({ selectedKeys }) {
      this.selectedMenuKeys = selectedKeys
    }
  }
}
</script>
