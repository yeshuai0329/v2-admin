import { Button, Input } from 'ant-design-vue'

const GlobalComponents = [
  Button,
  Input
]

export default (Vue) => {
  GlobalComponents.forEach((component) => {
    Vue.component(component.name, component)
  })
}