// 基础路由文件
const DefaultLayout = () => import(/* webpackChunkName: "DefaultLayout" */'@/layouts/DefaultLayout')
const Login = () => import(/* webpackChunkName: "Login" */'@/views/Login')
const Page404 = () => import(/* webpackChunkName: "Page404" */'@/views/Abnormal/Page404')
const Page500 = () => import(/* webpackChunkName: "Page500" */'@/views/Abnormal/Page500')

const baseRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'DefaultLayout',
    component: DefaultLayout,
    redirect: '/home'
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404
  },
  {
    path: '/500',
    name: 'Page500',
    component: Page500
  }
]

export default baseRoutes
