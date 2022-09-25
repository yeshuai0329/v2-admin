/**
 * 权限路由映射成权限菜单
 * @param {Array} authRoutes  打平的权限路由
 */
export const authRoutesToAuthMenus = (authRoutes, authMenus = [], menuParentId) => {
  for (const item of authRoutes) {
    if (item.menuParentId === menuParentId) {
      var newItem = { ...item, children: [] }
      authMenus.push(newItem)
      authRoutesToAuthMenus(authRoutes, newItem.children, newItem.menuId)
      if (!newItem.children.length) delete newItem.children
    }
  }
  return authMenus
}
