/* 服务器管理菜单页面路由 */

// 服务器一级菜单默认页面
const ServerConfig = () => import(/* webpackChunkName: "ServerConfig" */'@/views/ServerConfig')
// 响应状态吗
const RespCode = () => import(/* webpackChunkName: "RespCode" */'@/views/ServerConfig/RespCode')

// 服务器二级菜单默认页面
const AuthConfig = () => import(/* webpackChunkName: "AuthConfig" */'@/views/ServerConfig/AuthConfig')
// 白名单
const WhiteList = () => import(/* webpackChunkName: "WhiteList" */'@/views/ServerConfig/AuthConfig/WhiteList')

export default {
  RespCode: RespCode,
  ServerConfig: ServerConfig,
  AuthConfig: AuthConfig,
  WhiteList: WhiteList
}
