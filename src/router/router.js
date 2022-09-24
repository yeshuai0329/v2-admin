import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/Login')

Vue.use(VueRouter)

// 工程化获取组件映射对象
const ctx = require.context('./', true, /index\.[tj]s/)
const routesMap = ctx.keys().reduce((routes, nextPath) => {
  const nextRoutes = ctx(nextPath).default
  return Object.assign(routes, nextRoutes)
}, {})

console.log('routesMap', routesMap)
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
  // 如果是去其他页面,校验是否登录
  next()
})

export default router
