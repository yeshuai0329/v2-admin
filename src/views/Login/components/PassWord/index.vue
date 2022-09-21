<template>
  <div class='PassWord' >
    <div class="inputModel">
      <div >
        <label>账号</label><a-input v-model="userInfo.accountNumber"/>
      </div>
       <div>
        <label>密码</label><a-input-password  v-model="userInfo.passWord" visibilityToggle/>
      </div>
    </div>
    <div class='buttonGroup'>
      <a-row :gutter="[24,24]">
        <a-col :span="12"><a-button size="large" block>注册</a-button></a-col>
        <a-col :span="12"><a-button  size="large" type="primary" block>登录</a-button></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PassWord',
  data: function () {
    return {
      userInfo: {
        accountNumber: '',
        passWord: ''
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .PassWord {
    padding: 24px 24px 24px 24px;
    height: 100%;
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
