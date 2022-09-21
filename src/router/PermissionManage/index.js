/* 权限管理菜单页面路由 */

// 角色管理
const RolesManage = () => import(/* webpackChunkName: "RolesManage" */'@/views/PermissionManage/RolesManage')
// 账号管理
const AccountsManage = () => import(/* webpackChunkName: "AccountsManage" */'@/views/PermissionManage/AccountsManage')

export default {
  rolesmanage: RolesManage,
  accountsmanage: AccountsManage
}
