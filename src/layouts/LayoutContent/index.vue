<template>
  <a-layout-content class="LayoutContent">
    <transition name="content" mode="out-in">
      <keep-alive :include="keepAliveComponentNameList">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </a-layout-content>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutContent',
  computed: {
    ...mapGetters('config', ['keepAliveComponentNameList'])
  }
}
</script>

<style lang='less' scoped>
.LayoutContent {
  background: #FFF;
  padding: 16px;
  overflow: scroll;
}
/* 进入的起点  */
.content-enter {
  transform: translateX(-200px);
  opacity: 0;
  transition: 0.3s ease-out;
}
// 进入的终点
.content-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: 0.3s ease-out;
}

// 离开的起点
.content-leave {
  transform: translateX(0px);
  opacity: 1;
  transition: 0.3s ease-out;
}
// 离开的终点
.content-leave-to {
  transform: translateX(300px);
  opacity: 0;
  transition: 0.3s ease-out;
}
</style>
