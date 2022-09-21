/* 异常页面路由 */

// 404页
const Page404 = () => import(/* webpackChunkName: "Page404" */'@/views/Abnormal/Page404')

export default {
  page404: Page404
}
