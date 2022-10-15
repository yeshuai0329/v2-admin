<template>
  <a-table
    showHeader
    :title="() => '角色管理'"
    :columns="columns"
    :data-source="dataSource"
    :scroll="{ x: 1200 }"
  />
</template>

<script>
export default {
  name: 'BaseTable',
  props: ['columns', 'dataSource']
}
</script>

<style lang='less' scoped>

</style>
