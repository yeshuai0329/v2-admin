<template>
  <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <a-button @click="$message.error('失败了')" type="primary"> 1下载 </a-button>
      <a-input></a-input>
      <a-modal :visible="true"></a-modal>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import enUS from 'ant-design-vue/lib/locale-provider/en_US';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: function() {
    return {
      locale: enUS
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
