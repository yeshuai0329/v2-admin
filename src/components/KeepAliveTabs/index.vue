<template>
  <div class='KeepAliveTabs' >
    <tab-button v-for="menuInfo in keepAliveList"  :mode="menuInfo" :key="menuInfo.path" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TabButton from './TabButton'

export default {
  name: 'KeepAliveTabs',
  components: {
    TabButton
  },
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState('config', ['keepAliveList'])
  },
  mounted () {
    console.log('mounted', this.$store.state)
  },
  updated () {
    console.log('updated', 1)
  }
}
</script>

<style lang='less' scoped>
  .KeepAliveTabs {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-y: scroll;
    background: #fff;
    box-shadow:  0 1px 8px #f0f1f2;
    position: relative;
    z-index: 98;
  }
</style>
