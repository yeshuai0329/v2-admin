<template>
  <div class='PersonHead' >
    <a-dropdown>
    <a-avatar shape="square" :size="48" icon="user" />
    <a-menu slot="overlay">
      <a-menu-item @click="toPersonCenter">
        <a-icon type="user" />
        个人中心
      </a-menu-item>
      <a-menu-item @click="logout">
        <a-icon type="poweroff" />
        退出登录
      </a-menu-item>
    </a-menu>
  </a-dropdown>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PersonHead',
  computed: {
    ...mapState('user', ['authRoutesList'])
  },
  methods: {
    ...mapActions('config', ['setCurrentComponentAction']),
    logout () {
      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()
    },
    toPersonCenter () {
      this.$router.push('/personcenter')
    }
  }
}
</script>

<style lang='less' scoped>
.PersonHead {
  width:48px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
