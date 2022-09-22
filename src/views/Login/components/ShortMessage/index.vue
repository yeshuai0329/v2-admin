<template>
  <div class='ShortMessage' >
    <h1>v2-admin-antdv</h1>
    <h5>基于 vue2\antdv 搭建的admin管理系统</h5>
    <div class="inputModel">
      <div >
        <label>手机号</label><a-input v-model="userInfo.phoneNumber"/>
      </div>
       <div>
        <label>验证码</label>
        <a-input  v-model="userInfo.vCode">
          <template #suffix>
            <a-button type="link">获取验证码</a-button>
          </template>
        </a-input>
      </div>
    </div>
    <div class='buttonGroup'>
      <a-button type="primary" block size="large">登录/注册</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShortMessage',
  data: function () {
    return {
      userInfo: {
        phoneNumber: '',
        vCode: ''
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .ShortMessage {
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
        .ant-input-affix-wrapper {
          width: 365px;
        }
      }
    }
  }
</style>
