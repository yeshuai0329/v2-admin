import { Button, Input, message, Modal, ConfigProvider, Layout, Menu } from 'ant-design-vue'
const { Sider, Header, Content } = Layout
const { SubMenu, Item, ItemGroup } = Menu
const GlobalComponents = [
  Button,
  Input,
  ConfigProvider,
  Layout,
  Sider,
  Header,
  Content,
  Menu,
  SubMenu,
  Item,
  ItemGroup
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