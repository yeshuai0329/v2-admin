<template>
  <div>
    登录页面
    <router-link to="/home">去home</router-link>
    <a-button @click="login">登录</a-button>
    <a-button @click="gohome">去home</a-button>
    <a-button @click="gocode">去响应状态吗</a-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login () {
      localStorage.setItem('v2tocken', 11111)
      this.gohome()
    },
    gohome () {
      localStorage.setItem('v2tocken', 11111)
      this.$router.push('/home')
    },
    gocode () {
      localStorage.setItem('v2tocken', 11111)
      this.$router.push('/serverconfig/respcode')
    }
  }
}
</script>

<style lang='less' scoped>

</style>
