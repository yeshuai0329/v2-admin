<template>
  <div
    :class="[
      'TabButton',
      { 'active-button': mode.name === currentComponent.name },
    ]"
    @click="toggleComponent(mode)"
  >
    {{ mode.menuName }}
    <a-icon
      v-if="mode.name !== 'Home'"
      type="close"
      @click="deleteComponent(mode)"
      class="TabButton-icon"
    />
  </div>
</template>

<script>
import { findOpenkeys } from '@/utils/public'
import { mapState, mapActions } from 'vuex'
import { uniq } from 'lodash'
export default {
  name: 'TabButton',
  props: {
    mode: {
      type: Object,
      require: true
    }
  },
  computed: {
    ...mapState('config', ['currentComponent', 'openKeys', 'selectedKeys']),
    ...mapState('user', ['authMenusList'])
  },
  methods: {
    ...mapActions('config', [
      'setCurrentComponentAction',
      'setKeepAliveComponentListAction',
      'setOpenKeysAction',
      'setSelectedKeysAction'
    ]),
    toggleComponent (mode) {
      if (mode.name === this.currentComponent.name) return
      this.setCurrentComponentAction(mode)
      this.$router.push(mode.fullPath)
      const currentOpenKeys = findOpenkeys(this.authMenusList, mode.menuId, [])
      this.setOpenKeysAction(uniq(this.openKeys.concat(currentOpenKeys)))
      this.setSelectedKeysAction([mode.menuId])
    },
    deleteComponent (mode) {
      this.setKeepAliveComponentListAction(mode)
    }
  }
}
</script>

<style lang='less' scoped>
.TabButton {
  cursor: pointer;
  height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  font-size: 12px;
  line-height: 26px;
  padding: 0px 8px;
  margin: 0px 4px;
}
.active-button {
  background-color: rgb(64, 158, 255);
  color: #fff;
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

.TabButton-icon {
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  font-size: 8px;
  vertical-align: middle;
  line-height: 16px;
  margin-bottom: 2px;
}

.TabButton-icon:hover {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #b4bccc;
}
</style>
