import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
const DefaultLayout = () => import(/* webpackChunkName: "DefaultLayout" */'@/layouts/DefaultLayout')
const Login = () => import(/* webpackChunkName: "Login" */'@/views/Login')

Vue.use(VueRouter)

// 工程化获取组件映射对象
const ctx = require.context('./', true, /index\.[tj]s/)
const routesMap = ctx.keys().reduce((routes, nextPath) => {
  const nextRoutes = ctx(nextPath).default
  return Object.assign(routes, nextRoutes)
}, { defaultlayout: DefaultLayout })

// 基础路由页面
const baseRoutes = [
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: baseRoutes
})

// 初始化路由信息
export const initDynamicRoutes = () => {
  const authRoutesList = store.state.user.authRoutesList
  authRoutesList.forEach(item => {
    const component = item.component?.toLowerCase()
    const temp = {
      path: item.path,
      name: item.name,
      component: routesMap[component],
      redirect: item.redirect,
      meta: {
        title: item.menuName
      },
      children: []
    }
    if (!temp.component) delete temp.component
    if (!temp.redirect) delete temp.redirect
    if (item.parentName) {
      router.addRoute(item.parentName, temp)
    } else {
      router.addRoute(temp)
    }
  })
}

// 判断用户是否登录
router.beforeEach((to, from, next) => {
  // 如果是去login 页面,放行
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    } else {
      next()
    }
  }
})

// 解决菜单重复点击控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
