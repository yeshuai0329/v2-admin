/* 服务器管理菜单页面路由 */

// 响应状态吗
const RespCode = () => import(/* webpackChunkName: "RespCode" */'@/views/ServerConfig/RespCode')

// 白名单
const WhiteList = () => import(/* webpackChunkName: "WhiteList" */'@/views/ServerConfig/AuthConfig/WhiteList')

export default {
  RespCode: RespCode,
  WhiteList: WhiteList
}
