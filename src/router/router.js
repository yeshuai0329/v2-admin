import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import NProgress from 'nprogress'
const DefaultLayout = () => import(/* webpackChunkName: "DefaultLayout" */'@/layouts/DefaultLayout')
const Login = () => import(/* webpackChunkName: "Login" */'@/views/Login')

Vue.use(VueRouter)

// 工程化获取组件映射对象
const ctx = require.context('./', true, /index\.[tj]s/)
const routesMap = ctx.keys().reduce((routes, nextPath) => {
  const nextRoutes = ctx(nextPath).default
  return Object.assign(routes, nextRoutes)
}, { DefaultLayout: DefaultLayout })

// 基础路由页面
const baseRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    name: 'DefaultLayout',
    component: DefaultLayout,
    redirect: '/home'
  }
]

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
        title: item.menuName
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

// 判断用户是否登录
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 如果是去login 页面,放行
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      next()
    } else {
      next()
    }
  }
})

// 修改title
router.afterEach((to, from, next) => {
  document.title = to.meta.title || 'v2-admin-for-antdv'
})

// 关闭进度条
router.afterEach((to, from, next) => {
  NProgress.done()
})

// 解决菜单重复点击控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
