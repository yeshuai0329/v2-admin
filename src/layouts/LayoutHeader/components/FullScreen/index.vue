<template>
  <div class="FullScreen" @click="clickIcon">
    <a-icon v-show="!isFullScreen" type="fullscreen" />
    <a-icon v-show="isFullScreen" type="fullscreen-exit" />
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
  mounted () {
    const self = this
    window.onresize = function () {
      if (!self.checkFull()) {
        // 退出全屏后要执行的动作
        self.isFullScreen = false
      }
    }
  },
  methods: {
    checkFull () {
      // 判断浏览器是否处于全屏状态 （需要考虑兼容问题）
      // 火狐浏览器
      var isFull =
        document.mozFullScreen ||
        document.fullScreen ||
        // 谷歌浏览器及Webkit内核浏览器
        document.webkitIsFullScreen ||
        document.webkitRequestFullScreen ||
        document.mozRequestFullScreen ||
        document.msFullscreenEnabled
      if (isFull === undefined) {
        isFull = false
      }
      return isFull
    },
    clickIcon () {
      if (this.isFullScreen) {
        this.fullScreenExit()
      } else {
        this.fullScreen()
      }
    },
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
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
}
</style>
