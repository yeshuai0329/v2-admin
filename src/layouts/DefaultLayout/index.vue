<template>
    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script>
export default {
  name: 'DefaultLayout'

}
</script>

<style lang="less" scoped>
  .ant-layout {
    height: 100%;
  }
</style>