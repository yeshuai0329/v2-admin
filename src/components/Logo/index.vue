<template>
  <div class='Logo' >
    <img :src="vueLogoPng" alt="">
    <div>
      {{ 'v2-antdv-admin' }}
    </div>
  </div>
</template>

<script>
import { vueLogoPng } from '@/assets/images/index'
export default {
  name: 'Logo',
  data () {
    return {
      vueLogoPng
    }
  }
}
</script>

<style lang='less' scoped>
.Logo {
  width: 200px;
  padding: 0 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
  }
}
</style>
