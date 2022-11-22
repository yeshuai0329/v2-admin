<template>
  <div class="LayoutHeader">
    <div class="LayoutHeader-left">
      <a-space>
        <ToggleButton />
        <BreadCrumb :breadCrumdList="breadCrumdList" />
      </a-space>
    </div>

    <div class="LayoutHeader-right">
      <a-space>
        <NoticeCenter />
        <FullScreen />
        <PersonHead />
      </a-space>
    </div>
  </div>
</template>

<script>
import FullScreen from './components/FullScreen'
import PersonHead from './components/PersonHead'
import NoticeCenter from './components/NoticeCenter'
import BreadCrumb from './components/BreadCrumb'
import ToggleButton from './components/ToggleButton'

import { mapState } from 'vuex'

export default {
  name: 'LayoutHeader',
  components: {
    FullScreen,
    PersonHead,
    NoticeCenter,
    BreadCrumb,
    ToggleButton
  },
  computed: {
    ...mapState('config', ['breadCrumdList'])
  }
}
</script>

<style lang='less' scoped>
.LayoutHeader {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  height: 48px;
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
