const DefaultLayout = () => import(/* webpackChunkName: "DefaultLayout" */'@/layouts/DefaultLayout')

// 工程化获取组件映射对象
const ctx = require.context('./', true, /index\.[tj]s/)
const routesMap = ctx.keys().reduce((routes, nextPath) => {
  const nextRoutes = ctx(nextPath).default
  return Object.assign(routes, nextRoutes)
}, { defaultlayout: DefaultLayout })

console.log('routesMap', routesMap)

/**
 * 动态路由映射函数
*/
export const userDynamicRouters = (rightRouters) => {
  const recursionMap = (list, authRoutes = []) => {
    list.forEach((item) => {
      const component = item.component ? item.component.toLowerCase() : ''
      const routeItem = {
        path: item.path,
        component: routesMap[component],
        redirect: item.redirect,
        meta: {
          title: item.menuName
        }
      }
      if (!component) delete routeItem.component
      if (!routeItem.redirect) delete routeItem.redirect
      authRoutes.push(routeItem)
      if (item.children && item.children.length) {
        routeItem.children = []
        routeItem.children = recursionMap(item.children, routeItem.children)
      }
    })
    return authRoutes
  }
  return recursionMap(rightRouters)
}
