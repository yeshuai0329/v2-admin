import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import baseRoutes from '@/router/baseRoutes'
const DefaultLayout = () => import(/* webpackChunkName: "DefaultLayout" */'@/layouts/DefaultLayout')

Vue.use(VueRouter)

// 工程化获取组件映射对象
const ctx = require.context('./', true, /index\.[tj]s/)
const routesMap = ctx.keys().reduce((routes, nextPath) => {
  const nextRoutes = ctx(nextPath).default
  return Object.assign(routes, nextRoutes)
}, { DefaultLayout: DefaultLayout })

const router = new VueRouter({
  mode: 'history',
  routes: baseRoutes
})

// 初始化路由信息
export const initDynamicRoutes = () => {
  const authRoutesList = store.state.user.authRoutesList
  for (const item of authRoutesList) {
    const componentName = item.componentName
    const temp = {
      path: item.path,
      name: item.name,
      component: routesMap[componentName],
      redirect: item.redirect,
      meta: {
        title: item.menuName,
        menuId: item.menuId,
        menuParentId: item.menuParentId,
        isDetailMenu: item.isDetailMenu,
        isSubMenu: item.isSubMenu,
        menuIsShow: item.menuIsShow
      },
      children: []
    }
    if (!temp.redirect) delete temp.redirect
    if (!router.getRoutes().find(route => route.name === temp.name)) {
      if (item.componentParentName) {
        router.addRoute(item.componentParentName, temp)
      } else {
        router.addRoute(temp)
      }
    }
  }
}

// 解决菜单重复点击控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
