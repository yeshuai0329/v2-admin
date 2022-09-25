/* 服务器管理菜单页面路由 */

// 服务器二级菜单默认页面
const ServerConfig = () => import(/* webpackChunkName: "ServerConfig" */'@/views/ServerConfig')
// 响应状态吗
const RespCode = () => import(/* webpackChunkName: "RespCode" */'@/views/ServerConfig/RespCode')

export default {
  respcode: RespCode,
  serverconfig: ServerConfig
}
