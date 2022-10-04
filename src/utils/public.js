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

/**
 * @description 查找默认展开的path的集合
 * @param {*} authMenusList
 * @param {*} fullPath
 * @param {*} openKeys
 */
export const findOpenkeys = (authMenusList, fullPath, openKeys = []) => {
  if (!authMenusList || !authMenusList.length) {
    return null
  }
  for (const node of authMenusList) {
    if (node.fullPath === fullPath) {
      return openKeys
    }
    const find = findOpenkeys(node.children, fullPath, [...openKeys, node.path])
    if (find) {
      return find
    }
  }
  return null
}

/**
 *
 * @description 查找选中的keys
 * @param {*} authMenusList
 * @param {*} fullPath
 * @returns
 */
export const findSelectKeys = (authMenusList, fullPath) => {
  if (!authMenusList || !authMenusList.length) {
    return null
  }
  for (const node of authMenusList) {
    if (node.fullPath === fullPath) {
      return node
    }
    const find = findSelectKeys(node.children, fullPath)
    if (find) {
      return find
    }
  }
  return null
}
