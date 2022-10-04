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
  mounted () {
    if (JSON.stringify(this.currentComponent) === '{}') {
      const node = findSelectKeys(this.authMenusList, '/home')
      this.setCurrentComponentAction(node)
      this.setKeepAliveListAction(node)
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
      this.$nextTick(() => {
        const openKeys = findOpenkeys(this.authMenusList, menuInfo.fullPath, [])
        const node = findSelectKeys(this.authMenusList, menuInfo.fullPath)
        this.setOpenKeysAction(openKeys)
        this.setSelectedKeysAction([node.path])
        this.setCurrentComponentAction(menuInfo)
        this.setKeepAliveListAction(menuInfo)
      })
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
