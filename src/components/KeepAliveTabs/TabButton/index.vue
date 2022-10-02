<template>
  <div
    :class="['TabButton', {'active-button': mode.name === currentComponent.name}]"
    @click="toggleComponent(mode)"
  >
    {{mode.menuName}}
    <a-icon v-if="mode.component!=='Home'" type="close" @click="deleteComponent(mode)"/>
  </div>
</template>

<script>
import { findOpenkeys, findSelectKeys } from '@/utils/public'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TabButton',
  props: {
    mode: {
      type: Object,
      require: true
    }
  },
  computed: {
    ...mapState('config', ['currentComponent']),
    ...mapState('user', ['authMenusList'])
  },
  methods: {
    ...mapActions('config', ['setCurrentComponentAction', 'setKeepAliveComponentListAction', 'setOpenKeysAction', 'setSelectedKeysAction']),
    toggleComponent (mode) {
      this.setCurrentComponentAction(mode)
      this.$router.push(mode.fullPath)
      const openKeys = findOpenkeys(this.authMenusList, this.$route.path, [])
      const selectedKeys = findSelectKeys(this.authMenusList, this.$route.path)
      this.setOpenKeysAction(openKeys)
      this.setSelectedKeysAction(selectedKeys)
    },
    deleteComponent (mode) {
      this.setKeepAliveComponentListAction(mode)
    }
  }
}
</script>

<style lang='less' scoped>
  .TabButton{
    margin: 3px 5px;
    padding: 0px 5px;
    height: 26px;
    display: inline-block;
    line-height: 26px;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
  }
  .active-button {
    background-color: rgb(64, 158, 255)
  }
  .active-button::before {
     content: "";
      background: #fff;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
      margin-right: 2px;
  }
</style>
