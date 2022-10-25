/* 权限管理菜单页面路由 */

// 角色管理
const RolesManage = () => import(/* webpackChunkName: "RolesManage" */'@/views/PermissionManage/RolesManage')
// 账号管理
const AccountsManage = () => import(/* webpackChunkName: "AccountsManage" */'@/views/PermissionManage/AccountsManage')
// 查看账号详情
const ViewAccount = () => import(/* webpackChunkName: "ViewAccount" */'@/views/PermissionManage/AccountsManage/components/ViewAccount')

export default {
  RolesManage: RolesManage,
  AccountsManage: AccountsManage,
  ViewAccount: ViewAccount
}
