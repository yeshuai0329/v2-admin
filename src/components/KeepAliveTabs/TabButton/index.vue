<template>
  <div :class="['TabButton', {'active-button': mode.component === componentName}]" @click="toggleComponent(mode)">
    {{mode.menuName}}
    <a-icon type="close" @click="deleteComponent(mode)"/>
  </div>
</template>

<script>
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
    ...mapState('config', ['componentName'])
  },
  methods: {
    ...mapActions('config', ['setComponentNameAction', 'setKeepAliveComponentNameListAction']),
    toggleComponent (mode) {
      console.log('mode', mode)
      this.setComponentNameAction(mode.component)
      this.$router.push(mode.fullPath)
    },
    deleteComponent (mode) {
      this.setKeepAliveComponentNameListAction(mode)
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
