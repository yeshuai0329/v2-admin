const DefaultLayout = () => import(/* webpackChunkName: "DefaultLayout" */'@/layouts/DefaultLayout')
const Login = () => import(/* webpackChunkName: "Login" */'@/views/Login')

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

export default baseRoutes
