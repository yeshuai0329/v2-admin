<template>
  <div class="login">
    <div class="content">
      <a-row>
        <a-col :span="14">
          <login-model></login-model>
        </a-col>
        <a-col :span="10">
          <img :src="loginJpeg" alt="" class="login-content-center-bgImg">
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import LoginModel from '@/views/Login/components/LoginModel'
import { loginJpeg } from '@/assets/images/index'

export default {
  name: 'Login',
  components: {
    LoginModel
  },
  data () {
    return {
      loginJpeg
    }
  }
}
</script>

<style lang='less' scoped>
  .login {
    min-width: 800px;
    height: 100%;
    background-color:#73a2f3;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      min-width: 800px;
      max-width: 800px;
      height: 500px;
      background-color: aliceblue;
      border-radius: 8px;
      overflow: hidden;
      .ant-row {
        height: 100%;
      }
      .ant-col {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
