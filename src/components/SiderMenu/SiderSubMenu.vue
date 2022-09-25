<template functional>
  <a-sub-menu  :icon="props.menuInfo.menuIcon" :title="props.menuInfo.menuName" :key="props.menuInfo.path">
    <template v-for="menu in props.menuInfo.children" >
      <a-menu-item v-if="!menu.children" :key="menu.path" >{{menu.menuName}}</a-menu-item>
      <sider-sub-menu v-else  :menu-info="menu" :key="menu.path"/>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: 'SiderSubMenu',
  props: {
    menuInfo: {
      type: Object,
      require: true
    }
  }
}
</script>
