<template functional>
  <a-sub-menu
    :icon="props.mode.menuIcon"
    :title="props.mode.menuName"
    :key="props.mode.path"
  >
    <template v-for="menu in props.mode.children">
      <sub-menu
        v-if="menu.children && menu.children.length > 0"
        :mode="menu"
        :key="menu.path"
        :click-menu="props.clickMenu"
      />
      <a-menu-item v-else :key="menu.path" @click="props.clickMenu(menu)">
        {{ menu.menuName }}
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
