<template>
  <div class="VentureCapitalDay">
    <AutoScreen>
      <div class="VentureCapitalDay-wrapper">

      </div>
    </AutoScreen>
  </div>
</template>

<script>
import AutoScreen from '@/components/AutoScreen'
export default {
  name: 'VentureCapitalDay',
  components: {
    AutoScreen
  }
}
</script>

<style lang='less' scoped>
.VentureCapitalDay {
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-wrapper {
    width: 100%;
    height: 100%;
    background: url('../../../assets/images/largescreen/largescreen-bg.jpg');
    background-size: 100%;
  }
  h1 {
    width: 10rem;
    background: blue;
  }
  &-one {
    width: 5rem;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
