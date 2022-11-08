<template>
    <i  v-if="isIconFont" class='anticon'>
      <i v-if="isIconFont" :class="[ 'iconfont', icon]" />
    </i>
    <a-icon v-else :type="icon"/>
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
</style>
