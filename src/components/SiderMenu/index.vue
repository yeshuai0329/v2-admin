<template>
  <a-menu>
    <a-menu-item>菜单项</a-menu-item>
    <a-sub-menu title="子菜单">
      <a-menu-item>子菜单项</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  name: "SiderMenu",
};
</script>

<style lang='less' scoped>
.ant-menu {
  height: 100%;
}
</style>