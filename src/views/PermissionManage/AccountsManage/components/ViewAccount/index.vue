<template>
  <div class='ViewAccount' >
    ViewAccount
    <a-input></a-input>
    <a-button @click="goback">返回</a-button>
  </div>
</template>

<script>
export default {
  name: 'ViewAccount',
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.ViewAccount {
  min-width: 1200px;
}
</style>
