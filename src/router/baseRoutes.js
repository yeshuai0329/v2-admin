// 基础路由文件
const DefaultLayout = () => import(/* webpackChunkName: "DefaultLayout" */'@/layouts/DefaultLayout')
const Login = () => import(/* webpackChunkName: "Login" */'@/views/Login')
const Page404 = () => import(/* webpackChunkName: "Page404" */'@/views/Abnormal/Page404')
const Page500 = () => import(/* webpackChunkName: "Page500" */'@/views/Abnormal/Page500')
const LargeScreen = () => import(/* webpackChunkName: "LargeScreen" */'@/views/LargeScreen')
const VentureCapitalDay = () => import(/* webpackChunkName: "VentureCapitalDay" */'@/views/LargeScreen/VentureCapitalDay')
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
  // 大屏可视化路径
  {
    path: '/largescreen',
    name: 'LargeScreen',
    component: LargeScreen,
    children: [
      {
        path: 'venture',
        name: 'VentureCapitalDay',
        component: VentureCapitalDay
      }
    ]
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
