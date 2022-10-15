<template>
  <div class='AccountsManage' >
    <BaseSearchForm :label-list="labelList"/>
    <BaseTable
      :columns="accountColumns"
      :data-source="dataSource"
    />
  </div>
</template>

<script>
import { accountColumns } from '@/views/PermissionManage/AccountsManage/constant'
export default {
  name: 'AccountsManage',
  data: function () {
    return {
      accountColumns: accountColumns,
      dataSource: [
        {
          key: '1',
          name: ' John Brown |vJohn Brown|John Brown|John Brown',
          age: 32,
          address: 'John Brown |vJohn Brown|John Brown|John Brown'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 40,
          address: 'London Park'
        }
      ],
      labelList: [
        { label: '姓名', value: 'name1' },
        { label: '工作单位', value: 'name2' },
        { label: '30岁之前的工作单位', value: 'name3' },
        { label: '姓名1', value: 'name4' },
        { label: '姓名1', value: 'name5' },
        { label: '姓名1', value: 'name6' },
        { label: '姓名1', value: 'name7' },
        { label: '姓名1', value: 'name8' },
        { label: '姓名1', value: 'name9' },
        { label: '姓名1', value: 'name10' },
        { label: '姓名1', value: 'name11' }
      ],
      searchForm: {

      }
    }
  }
}
</script>

<style lang='less' scoped>
.AccountsManage {
  min-width: 1200px;
}
</style>
