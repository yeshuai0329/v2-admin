<template>
  <a-layout class="layout">
    <LayoutHeader class="layout-right-header" />
    <a-layout class="layout-right">
      <LayoutSider />
      <a-layout>
        <keep-alive-tabs />
        <LayoutContent class="layout-right-content" />
      </a-layout>
    </a-layout>
    <!-- <a-layout-footer>
      sadas
    </a-layout-footer> -->
    <DrawerConfig/>
  </a-layout>
</template>

<script>
import LayoutHeader from '@/layouts/LayoutHeader'
import LayoutSider from '@/layouts/LayoutSider'
import LayoutContent from '@/layouts/LayoutContent'
import KeepAliveTabs from '@/components/KeepAliveTabs'
import DrawerConfig from '@/components/DrawerConfig'

export default {
  name: 'DefaultLayout',
  components: {
    LayoutHeader,
    LayoutSider,
    LayoutContent,
    KeepAliveTabs,
    DrawerConfig
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  .layout-right {
    height: 100%;
    display: flex;
    &-header {
      box-shadow: 0 1px 8px #f0f1f2;
      position: relative;
      z-index: 100;
      height: 48px;
    }
  }
}
</style>
