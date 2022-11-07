<template>
  <a-layout-header class="LayoutHeader">
    <div class="LayoutHeader-left">12312</div>
    <div class="LayoutHeader-right">
      <a-space>
        <NoticeCenter/>
        <FullScreen />
        <PersonHead />
      </a-space>
    </div>
  </a-layout-header>
</template>

<script>
import FullScreen from './components/FullScreen'
import PersonHead from './components/PersonHead'
import NoticeCenter from './components/NoticeCenter'
export default {
  name: 'LayoutHeader',
  components: {
    FullScreen,
    PersonHead,
    NoticeCenter
  }
}
</script>

<style lang='less' scoped>
.ant-layout-header {
  padding: 0 24px;
}
.LayoutHeader {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  &-left {
    height: 100%;
  }

  &-right {
    height: 100%;
  }
}
</style>
