<template>
  <div class='ToggleButton' >
    <a-icon :type="collapsed? 'menu-unfold':'menu-fold'" @click="toggleAction"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ToggleButton',
  data () {
    return {
      keepOpenKeys: []
    }
  },
  computed: {
    ...mapState('config', ['collapsed', 'openKeys'])
  },
  methods: {
    ...mapActions('config', ['setCollapsedAction', 'setOpenKeysAction']),
    toggleAction () {
      if (!this.collapsed) {
        this.keepOpenKeys = this.openKeys
        this.setOpenKeysAction([])
      } else {
        this.setOpenKeysAction(this.keepOpenKeys)
      }
      this.setCollapsedAction(!this.collapsed)
    }
  }
}
</script>

<style lang='less' scoped>
.ToggleButton {
  font-size: 24px;
  cursor: pointer;
  margin-right: 8px;
}
</style>
