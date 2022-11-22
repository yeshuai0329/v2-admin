<template>
  <div :class="['Logo', { 'Logo-collapsed': collapsed}]" >
    <img :src="vueLogoPng" alt="">
    <div v-if="!collapsed">
      {{ 'v2-antdv-admin' }}
    </div>
  </div>
</template>

<script>
import { vueLogoPng } from '@/assets/images/index'
import { mapState } from 'vuex'

export default {
  name: 'Logo',
  data () {
    return {
      vueLogoPng
    }
  },
  computed: {
    ...mapState('config', ['collapsed'])
  }
}
</script>

<style lang='less' scoped>
.Logo {
  width: 200px;
  height: 48px;
  padding: 0 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
  }
}

.Logo-collapsed {
  width: 80px;
}
</style>
