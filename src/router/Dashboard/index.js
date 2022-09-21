/* 数据看板菜单页面路由 */

// 分析页
const Analysis = () => import(/* webpackChunkName: "Analysis" */'@/views/Dashboard/Analysis')
// 监控页面
const Monitor = () => import(/* webpackChunkName: "Monitor" */'@/views/Dashboard/Monitor')

export default {
  analysis: Analysis,
  monitor: Monitor
}
