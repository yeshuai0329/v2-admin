<template>
    <a-icon v-if="icon && !isIconFont" :type="icon"/>
    <i  v-else class='anticon'>
      <i :class="[ 'iconfont', icon]" />
    </i>
</template>

<script>
export default {
  name: 'IconFont',
  props: ['icon'],
  computed: {
    isIconFont () {
      return /^icon-/.test(this.icon)
    }
  }
}
</script>

<style lang='less' scoped>
.iconfont {
  font-size: 14px;
}
</style>
