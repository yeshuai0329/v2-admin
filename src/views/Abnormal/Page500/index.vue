<template>
  <a-result status="500" title="500" sub-title="Sorry, the page you visited does not exist.">
  </a-result>
</template>

<script>
import { Result } from 'ant-design-vue'
export default {
  name: 'Page500',
  components: {
    aResult: Result
  }
}
</script>

<style lang='less' scoped>

</style>
