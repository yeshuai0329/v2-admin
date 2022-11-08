<template functional>
  <a-sub-menu :key="props.mode.menuId">
    <span slot="title">
      <IconFont :icon="props.mode.icon"/>
      <!-- <a-icon type="home"/> -->
      <span>{{ props.mode.menuName }}</span>
    </span>
    <template v-for="menu in props.mode.children">
      <sub-menu
        v-if="menu.children && menu.children.length > 0"
        :mode="menu"
        :key="menu.menuId"
        :click-menu="props.clickMenu"
      />
      <a-menu-item v-else :key="menu.menuId" @click="props.clickMenu(menu)">
        <IconFont :icon="menu.icon"/>
        <span>{{ menu.menuName }}</span>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: 'SubMenu',
  props: ['mode', 'clickMenu']
}
</script>

<style lang='less' scoped>
</style>
