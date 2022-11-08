<template>
  <div class="BreadCrumb">
    <a-breadcrumb>
      <template v-for="item in breadCrumdList">
        <a-breadcrumb-item href :key="item.fullPath">
          <a-icon v-if="item.icon" type="user" />
          <span @click="toClickPage(item)">{{ item.menuName }}</span>
        </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: ['breadCrumdList'],
  methods: {
    toClickPage (item) {
      console.log('item', item)
      this.$router.push(item.fullPath)
    }
  }
}
</script>

<style lang='less' scoped>
</style>
