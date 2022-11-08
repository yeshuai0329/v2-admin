<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="goBackHome">
        <a-icon type="home"/>
        返回首页
      </a-button>
    </template>
  </a-result>
</template>

<script>
import { Result } from 'ant-design-vue'
export default {
  name: 'Page404',
  components: {
    aResult: Result
  },
  methods: {
    goBackHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang='less' scoped>

</style>
