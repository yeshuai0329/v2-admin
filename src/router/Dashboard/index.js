/* 数据看板菜单页面路由 */

// 数据看板默认二级路由页面
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */'@/views/Dashboard')
// 分析页
const Analysis = () => import(/* webpackChunkName: "Analysis" */'@/views/Dashboard/Analysis')
// 监控页面
const Monitor = () => import(/* webpackChunkName: "Monitor" */'@/views/Dashboard/Monitor')

export default {
  Dashboard: Dashboard,
  Analysis: Analysis,
  Monitor: Monitor
}
