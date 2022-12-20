<template>
  <div class="PersonHead">
    <a-dropdown>
      <a-space class='PersonHead-content'>
        <a-avatar :src="defaultHeadeJpg" shape="square" :size="32"  />
        <div class="PersonHead-nickName one-ellipsis">
          {{ userInfo.nickName }}
        </div>
      </a-space>

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
import { defaultHeadeJpg } from '@/assets/images/index'
export default {
  name: 'PersonHead',
  computed: {
    ...mapState('user', ['authRoutesList', 'userInfo'])
  },
  data () {
    return {
      defaultHeadeJpg
    }
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
  height: 48px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(0,0,0,.025);
  }
  &-nickName {
    max-width: 100px;
  }
  &-content {
    height: 100%;
  }
}
</style>
