<template>
  <a-layout-header class="LayoutHeader">
    <div class="LayoutHeader-left">
      <BreadCrumb/>
    </div>
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
import BreadCrumb from './components/BreadCrumb'
export default {
  name: 'LayoutHeader',
  components: {
    FullScreen,
    PersonHead,
    NoticeCenter,
    BreadCrumb
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
      display: flex;
      align-items: center;
  }

  &-right {
    height: 100%;
  }
}
</style>
