<template>
  <div class="LoginModel">
    <a-tabs :activeKey="activeKey" @change="tabsChange" :tabBarStyle="{textAlign: 'center'}" animated>
      <a-tab-pane v-for="item in LOGIN_TYPE_MAP" :key="item. key" :tab="item.tab" >
        <component :is="item.component" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { LOGIN_TYPE_MAP } from '@/views/Login/constant'

export default {
  name: 'LoginModel',
  components: {

  },
  data: function () {
    return {
      LOGIN_TYPE_MAP: LOGIN_TYPE_MAP,
      activeKey: '1'
    }
  },
  computed: {
    activeComponet () {
      const componentMap = this.LOGIN_TYPE_MAP.find((item) => item.key === this.activeKey)
      return componentMap.component
    }
  },
  methods: {
    tabsChange (activeKey) {
      console.log('activeKey', activeKey)
      this.activeKey = activeKey
    }
  }
}
</script>

<style lang='less' scoped>
  .LoginModel {
    width: 100%;
    height: 100%;
  }
</style>
