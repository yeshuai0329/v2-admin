<template>
  <div class="LoginModel">
    <a-tabs
      :activeKey="activeKey"
      @change="tabsChange"
      :tabBarStyle="{ textAlign: 'center' }"
      animated
    >
      <a-tab-pane
        v-for="item in LOGIN_TYPE_MAP"
        :key="item.key"
        :tab="item.tab"
      />
    </a-tabs>
    <template v-if="!siderVerifyShow">
      <h1>v2-admin-antdv</h1>
      <h5>基于 vue2\antdv 搭建的admin管理系统</h5>
    </template>

    <!-- 账号密码登录 -->
    <template v-if="activeKey === '1' && !siderVerifyShow">
      <a-form-model
        layout="horizontal"
        v-bind="formItemLayout"
        :hideRequiredMark="true"
        ref="formTypeOne"
        :model="formTypeOne"
        :rules="formTypeOneRules"
      >
        <a-form-model-item label="账号" prop="accountNumber">
          <a-input v-model.trim="formTypeOne.accountNumber" />
        </a-form-model-item>
        <a-form-model-item label="密码" prop="passWord">
          <a-input-password
            v-model.trim="formTypeOne.passWord"
            visibilityToggle
          />
        </a-form-model-item>
      </a-form-model>

      <div class="buttonGroup">
        <a-row :gutter="[24, 24]">
          <a-col :span="12">
            <a-button size="large" block @click="userRegist">注册</a-button>
          </a-col>
          <a-col :span="12">
            <a-button
              size="large"
              type="primary"
              block
              @click="loginButton"
              :loading="loginLoading"
            >
              登录
            </a-button>
          </a-col>
        </a-row>
      </div>
    </template>

    <!-- 手机验证码登录 -->
    <template v-if="activeKey === '2' && !siderVerifyShow">
      <a-form-model
        layout="horizontal"
        v-bind="formItemLayout"
        :hideRequiredMark="true"
        ref="formTypeTwo"
        :model="formTypeTwo"
        :rules="formTypeTwoRules"
      >
        <a-form-model-item label="手机号" prop="phoneNumber">
          <a-input v-model.trim="formTypeTwo.phoneNumber" />
        </a-form-model-item>
        <a-form-model-item label="验证码" prop="vCode">
          <a-input v-model.trim="formTypeTwo.vCode">
            <template #suffix>
              <a-button type="link">获取验证码</a-button>
            </template>
          </a-input>
        </a-form-model-item>
      </a-form-model>
      <div class="buttonGroup">
        <a-button type="primary" block size="large">登录/注册</a-button>
      </div>
    </template>

    <div class="SlideVerifyParant" v-if="siderVerifyShow">
      <a-button type="link" @click="goback"
        ><a-icon type="arrow-left" />返回</a-button
      >
      <SlideVerify
        :l="42"
        :r="10"
        :w="350"
        :h="250"
        slider-text="向右滑动"
        class="content"
        @success="onSuccess"
      />
    </div>
  </div>
</template>

<script>
import { LOGIN_TYPE_MAP } from '@/views/Login/constant'
import { loginApi, regestApi } from '@/apis/Login'
import { getMenusInfoApi } from '@/apis/Auth'
import { mapActions } from 'vuex'
import { authRoutesToAuthMenus, findSelectNode } from '@/utils/public'
import { initDynamicRoutes } from '@/router/router'

export default {
  name: 'LoginModel',
  components: {},
  data: function () {
    return {
      LOGIN_TYPE_MAP: LOGIN_TYPE_MAP,
      activeKey: '1',
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 }
      },
      formTypeOne: {
        accountNumber: 'yeshuai0329@aliyun.com',
        passWord: '123456',
        loginType: '1'
      },
      formTypeOneRules: {
        accountNumber: [{ required: true, message: '请输入账号' }],
        passWord: [{ required: true, message: '请输入密码' }]
      },
      formTypeTwo: {
        phoneNumber: '15526190820',
        vCode: '123456',
        loginType: '2'
      },
      formTypeTwoRules: {
        phoneNumber: [{ required: true, message: '请输入手机哈' }],
        vCode: [{ required: true, message: '请输入验证码' }]
      },
      loginLoading: false,
      registLoading: false,
      siderVerifyShow: false
    }
  },
  computed: {},
  methods: {
    ...mapActions('user', [
      'userInfoAction',
      'authRoutesListAction',
      'authMenusListAction'
    ]),
    ...mapActions('config', ['setKeepAliveListAction']),
    goback () {
      this.loginLoading = false
      this.registLoading = false
      this.siderVerifyShow = false
    },
    onSuccess () {
      this.loginAction()
    },
    loginButton () {
      if (this.activeKey === '1') {
        this.$refs.formTypeOne.validate((err, message) => {
          if (!err) {
            this.$message.error('请输入账号和密码')
            return
          }
          this.loginLoading = true
          this.siderVerifyShow = true
        })
      }
    },
    async loginAction () {
      const { data } = await loginApi(this.formTypeOne)
      this.loginLoading = false
      if (data.code === 200) {
        this.userInfoAction(data.data)
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('refreshtoken', data.data.refreshtoken)
        this.getMenusInfo()
      }
    },
    async userRegist () {
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
        const authMenusList = authRoutesToAuthMenus(data.data, [], 0)
        this.authMenusListAction(authMenusList)
        const node = findSelectNode(authMenusList, 1)
        this.setKeepAliveListAction(node || {})
        this.$router.push('/home')
        this.$message.success('账号登录成功!')
      }
    },
    tabsChange (activeKey) {
      this.activeKey = activeKey
    }
  }
}
</script>

<style lang='less' scoped>
.LoginModel {
  width: 100%;
  height: 100%;
  h1 {
    text-align: center;
    font-size: 28px;
  }
  h5 {
    text-align: center;
    font-size: 16px;
    color: #ccc;
    margin: 16px;
  }

  .buttonGroup {
    padding: 8px 24px;
  }
  .SlideVerifyParant {
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
  }
}
</style>
