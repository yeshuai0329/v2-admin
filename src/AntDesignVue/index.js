import { Button, Input, message, Modal, ConfigProvider } from 'ant-design-vue'

const GlobalComponents = [
  Button,
  Input,
  ConfigProvider
]

export default (Vue) => {
  // 全局 message 提示
  Vue.prototype.$message = message
  // 全局注册 Modal 组件
  Vue.use(Modal)
  // 注册常用全局组件
  GlobalComponents.forEach((component) => {
    Vue.component(component.name, component)
  })
}