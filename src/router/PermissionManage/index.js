/* 权限管理菜单页面路由 */

// 权限管理一级菜单路由入口
const PermissionManage = () => import(/* webpackChunkName: "PermissionManage" */'@/views/PermissionManage')

// 角色管理
const RolesManage = () => import(/* webpackChunkName: "RolesManage" */'@/views/PermissionManage/RolesManage')
// 账号管理
const AccountsManage = () => import(/* webpackChunkName: "AccountsManage" */'@/views/PermissionManage/AccountsManage')

export default {
  PermissionManage: PermissionManage,
  RolesManage: RolesManage,
  AccountsManage: AccountsManage
}
