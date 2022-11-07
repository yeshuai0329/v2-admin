<template>
  <div class="BreadCrumb">
    <a-breadcrumb>
      <template v-for='item in breadcrumbList' >
       <a-breadcrumb-item :href="item.fullPath" :key="item.fullPath">
        <a-icon v-if="item.icon" type="user" />
        <span>{{item.menuName}}</span>
      </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data () {
    return {
      breadcrumbList: []
    }
  }
}
</script>

<style lang='less' scoped>

</style>
