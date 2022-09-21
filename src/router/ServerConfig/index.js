/* 服务器管理菜单页面路由 */

// 响应状态吗
const RespCode = () => import(/* webpackChunkName: "RespCode" */'@/views/ServerConfig/RespCode')

export default {
  respcode: RespCode
}
