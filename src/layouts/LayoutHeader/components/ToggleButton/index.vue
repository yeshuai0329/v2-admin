<template>
  <div class='ToggleButton' >
    <a-icon :type="isExpand? 'menu-unfold':'menu-fold'" @click="toggleAction"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ToggleButton',
  computed: {
    ...mapState('config', ['isExpand'])
  },
  methods: {
    ...mapActions('config', ['setIsExpandAction']),
    toggleAction () {
      this.setIsExpandAction(!this.isExpand)
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
