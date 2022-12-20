<template>
  <div class="AutoScreen">
    <div class="AutoScreen-wrapper" :style="wrapperStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const debounce = function (fn, delay) {
  let t = null
  return function () {
    if (t !== null) {
      clearTimeout(t)
    }
    t = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

export default {
  name: 'AutoScreen',
  mounted () {
    this.screenInit()
    window.addEventListener('resize', debounce(this.screenInit, 300))
  },
  data () {
    return {
      wrapperStyle: {
        width: '0px',
        height: '0px'
      }
    }
  },
  methods: {
    screenInit () {
      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight
      const screenRatio = screenWidth / screenHeight
      const htmlDom = document.querySelector('html')

      // 屏幕很宽的情况下
      if (screenRatio >= 16 / 9) {
        console.log('screenRatio', screenRatio)
        this.wrapperStyle.width = `${screenHeight * (16 / 9)}px`
        this.wrapperStyle.height = `${screenHeight}px`
        htmlDom.style.fontSize = `${(screenHeight * (16 / 9)) / 10}px`
      } else {
        // 屏幕很窄的情况下
        this.wrapperStyle.width = `${screenWidth}px`
        this.wrapperStyle.height = `${screenWidth * (9 / 16)}px`
        htmlDom.style.fontSize = `${screenWidth / 10}px`
      }
      console.log('screenWidth', screenWidth)
      console.log('screenHeight', screenHeight)
    }
  }
}
</script>

<style lang='less' scoped>
.AutoScreen {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  overflow: hidden;
  &-wrapper {
    // background: pink;
    // transition-property: width, height;
    // transition-duration: 0.25s;
    // transition-timing-function: ease;
  }
}
</style>
