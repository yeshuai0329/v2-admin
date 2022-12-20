// 自定义全局组件
import BaseTable from '@/components/BaseTable'
import BaseSearchForm from '@/components/BaseSearchForm'
import IconFont from '@/components/IconFont'
import SlideVerify from 'vue-monoplasty-slide-verify'

// antd 组件
import {
  Button, Input, message, Modal, ConfigProvider, Layout, Menu,
  Row, Col, Tabs, Form, FormModel, Icon, Progress, Table, Space,
  Avatar, Dropdown, Popover, Badge, Divider, Empty, Breadcrumb, Drawer, Switch, Tooltip, Spin
} from 'ant-design-vue'
const { Sider, Header, Content, Footer } = Layout
const { SubMenu, Item, ItemGroup } = Menu
const { TabPane } = Tabs
const { Password } = Input

// antd 组件
const globalComponents = [
  Button, Input, ConfigProvider, Layout, Sider, Header, Content, Footer, Menu,
  SubMenu, Item, ItemGroup, Row, Col, Tabs, TabPane, Form, FormModel,
  Password, Icon, Progress, Table, Form, Space, Avatar, Dropdown, Popover,
  Badge, Divider, Empty, Drawer, Switch, Tooltip, Spin
]

// 自定义全局组件
const customComponents = [
  BaseTable,
  BaseSearchForm,
  IconFont
]

export default (Vue) => {
  // 全局 message 提示
  Vue.prototype.$message = message
  // 全局注册 Modal 组件
  Vue.use(Modal)
  Vue.use(SlideVerify)
  Vue.use(Breadcrumb)

  Vue.component(FormModel.Item.name, FormModel.Item)
  // 注册常用全局组件
  globalComponents.forEach((component) => {
    Vue.component(component.name, component)
  })

  customComponents.forEach((component) => {
    Vue.component(component.name, component)
  })
}
