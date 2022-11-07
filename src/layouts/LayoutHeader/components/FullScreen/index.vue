<template>
  <div class="FullScreen">
    <a-icon v-show="!isFullScreen" type="fullscreen" @click="fullScreen" />
    <a-icon
      v-show="isFullScreen"
      type="fullscreen-exit"
      @click="fullScreenExit"
    />
  </div>
</template>

<script>
export default {
  name: 'FullScreen',
  data () {
    return {
      isFullScreen: false
    }
  },
  methods: {
    fullScreen () {
      const element = document.body
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
      this.isFullScreen = true
    },
    fullScreenExit () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      this.isFullScreen = false
    }
  }
}
</script>

<style lang='less' scoped>
  .FullScreen {
    width: 32px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      background: aliceblue;
    }
  }
</style>
