import Vue from 'vue'
import VueRouter from 'vue-router'
const DefaultLayout = () => import('@/layouts/DefaultLayout')
const Home = () => import('@/views/home')
const Login = () => import('@/views/Login')
const RespCode = () => import('@/views/serverConfig/RespCode')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: DefaultLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'serverconfig/respcode',
          component: RespCode
        }
      ]
    }
  ]
})

console.log('11', 11)

export default router
