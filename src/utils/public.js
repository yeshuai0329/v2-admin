/**
 * 权限路由映射成权限菜单
 * @param {Array} authRoutes  打平的权限路由
 */
export const authRoutesToAuthMenus = (authRoutes, authMenus = [], menuParentId) => {
  for (const item of authRoutes) {
    if (item.menuParentId === menuParentId && item.menuIsShow) {
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
 * @param {*} menuId
 * @param {*} openKeys
 */
export const findOpenkeys = (authMenusList, menuId, openKeys = []) => {
  if (!authMenusList || !authMenusList.length) {
    return null
  }
  for (const node of authMenusList) {
    if (node.menuId === menuId) {
      return openKeys
    }
    const find = findOpenkeys(node.children, menuId, [...openKeys, node.menuId])
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
 * @param {*} menuId
 * @returns
 */
export const findSelectNode = (authMenusList, menuId) => {
  if (!authMenusList || !authMenusList.length) {
    return null
  }
  for (const node of authMenusList) {
    if (node.menuId === menuId) {
      return node
    }
    const find = findSelectNode(node.children, menuId)
    if (find) {
      return find
    }
  }
  return null
}
