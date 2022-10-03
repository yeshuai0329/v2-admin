<template>
  <div class='PassWord' >
    <h1>v2-admin-antdv</h1>
    <h5>基于 vue2\antdv 搭建的admin管理系统</h5>
    <div class="inputModel">
      <div >
        <label>账号</label><a-input v-model.trim="userInfo.accountNumber"/>
      </div>
       <div>
        <label>密码</label><a-input-password  v-model.trim="userInfo.passWord" visibilityToggle/>
      </div>
    </div>
    <div class='buttonGroup'>
      <a-row :gutter="[24,24]">
        <a-col :span="12">
          <a-button size="large" block @click="userRegist">注册</a-button>
        </a-col>
        <a-col :span="12">
          <a-button
            size="large"
            type="primary"
            block
            @click="userLogin"
            :loading="loginLoading"
          >
            登录
          </a-button>
          </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { loginApi, regestApi } from '@/apis/Login'
import { getMenusInfoApi } from '@/apis/Auth'
import { mapActions } from 'vuex'
import { initDynamicRoutes } from '@/router/router'
import { authRoutesToAuthMenus } from '@/utils/public'
export default {
  name: 'PassWord',
  data: function () {
    return {
      userInfo: {
        accountNumber: 'yeshuai0329@aliyun.com',
        passWord: '123456',
        loginType: '1'
      },
      loginLoading: false,
      registLoading: false
    }
  },
  methods: {
    ...mapActions('user', ['userInfoAction', 'authRoutesListAction', 'authMenusListAction']),
    async userLogin  () {
      if (!this.userInfo.accountNumber || !this.userInfo.passWord) {
        this.$message.error('请输入账号或密码!')
      } else {
        this.loginLoading = true
        const { data } = await loginApi(this.userInfo)
        this.loginLoading = false
        if (data.code === 200) {
          this.userInfoAction(data.data)
          localStorage.setItem('token', data.data.token)
          localStorage.setItem('refreshtoken', data.data.refreshtoken)
          this.getMenusInfo()
        }
      }
    },
    async userRegist  () {
      if (!this.userInfo.accountNumber || !this.userInfo.passWord) {
        this.$message.error('请输入账号或密码!')
      } else {
        this.registLoading = true
        const { data } = await regestApi(this.userInfo)
        this.registLoading = false
        if (data.code === 200) {
          this.$message.success('账号注册成功!')
        }
      }
    },
    // 获取菜单列表
    async getMenusInfo () {
      const { data } = await getMenusInfoApi()
      if (data.code === 200) {
        this.authRoutesListAction(data.data)
        initDynamicRoutes()
        const authMenusList = authRoutesToAuthMenus(data.data, [], 1)
        this.authMenusListAction(authMenusList)
        this.$router.push('/home')
        this.$message.success('账号登录成功!')
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .PassWord {
    padding: 0px 24px 24px 24px;
    height: 100%;
    h1 {
      text-align: center;
      font-size: 24px;
    }
    h5 {
      text-align: center;
      color: #ccc;
    }
    .inputModel {
      border-radius: 8px;
      margin-bottom: 24px;
      div {
        margin: 12px 0px;
        label {
          display:  inline-block;
          width: 50px;
          height: 100%;
          text-align: left;
        }
      }
      div:first-child {
        .ant-input {
          width: 365px;
        }
      }
      div:last-child {
        .ant-input-password {
          width: 365px;
        }
      }
    }
  }
</style>
