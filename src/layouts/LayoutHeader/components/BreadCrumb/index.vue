<template>
  <div class="BreadCrumb">
    <a-breadcrumb>
      <template v-for="item in breadCrumdList">
        <a-breadcrumb-item href :key="item.fullPath" class="breadcrumb-item">
          <IconFont :icon="item.icon"/>
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
      this.$router.push(item.fullPath)
    }
  }
}
</script>

<style lang='less' scoped>
.BreadCrumb{
  min-width: 48px;
  .breadcrumb-item {
    vertical-align: baseline;
  }
}
</style>
