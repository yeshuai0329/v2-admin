<template>
  <a-layout class="layout-left">
    <LayoutSider />
    <a-layout class="layout-right">
      <LayoutHeader class="layout-right-header"/>
      <a-layout class="layout-right-tabs">
        <keep-alive-tabs />
      </a-layout>
      <LayoutContent class="layout-right-content"/>
    </a-layout>
  </a-layout>
</template>

<script>
import LayoutHeader from '@/layouts/LayoutHeader'
import LayoutSider from '@/layouts/LayoutSider'
import LayoutContent from '@/layouts/LayoutContent'
import KeepAliveTabs from '@/components/KeepAliveTabs'
import { authRoutesToAuthMenus } from '@/utils/public'
import { initDynamicRoutes } from '@/router/router'
import { getMenusInfoApi } from '@/apis/Auth'
import { mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',
  components: {
    LayoutHeader,
    LayoutSider,
    LayoutContent,
    KeepAliveTabs
  },
  mounted () {
    this.getMenusInfo()
  },
  methods: {
    ...mapActions('user', ['authRoutesListAction', 'authMenusListAction']),
    // 获取菜单列表
    async getMenusInfo () {
      const { data } = await getMenusInfoApi()
      if (data.code === 200) {
        this.authRoutesListAction(data.data)
        initDynamicRoutes()
        const authMenusList = authRoutesToAuthMenus(data.data, [], 1)
        this.authMenusListAction(authMenusList)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .layout-left {
    height: 100%;
    .layout-right{
      height: 100%;
      display: flex;
      &-header {
        box-shadow:  0 1px 8px #f0f1f2;
        position: relative;
        z-index: 100;
      }
      &-tabs {
        min-height: 32px !important;
        max-height: 32px !important;
      }
      &-content {
        height: calc(100% - 96px);
        overflow: scroll;
      }
    }
  }
</style>
