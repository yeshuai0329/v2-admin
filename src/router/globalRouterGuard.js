import router from '@/router/router'
import NProgress from 'nprogress'
import { findOpenkeys, findSelectNode } from '@/utils/public'
import { uniq } from 'lodash'
import store from '@/store'

// --------------------------------------------------- 全局前置守卫 -------------------------------------------------/
// 判断用户是否登录
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 如果是去login 页面,放行
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      next()
    } else {
      next()
    }
  }
})

// --------------------------------------------------- 全局后置守卫 -------------------------------------------------/

// 修改title
router.afterEach((to, from, next) => {
  document.title = to.meta.title || 'v2-admin-for-antdv'
})

// 关闭进度条
router.afterEach((to, from, next) => {
  NProgress.done()
})

// 菜单打开选中相关
router.afterEach((to, from, next) => {
  const meta = to.meta
  const authRoutesList = store.state.user.authRoutesList
  const authMenusList = store.state.user.authMenusList
  if (authRoutesList.find(route => route.menuId === meta.menuId)) {
    let openKeys = []
    let node = {}
    // 如果是详情页,那么找父id
    if (meta.isDetailMenu === 1) {
      openKeys = findOpenkeys(authMenusList, meta.menuParentId, [])
      node = findSelectNode(authMenusList, meta.menuParentId)
      store.dispatch('config/setSelectedKeysAction', [meta.menuParentId])
    }
    // 如果是普通页面,那么找父id
    if (meta.isDetailMenu === 0) {
      openKeys = findOpenkeys(authMenusList, meta.menuId, [])
      node = findSelectNode(authMenusList, meta.menuId)
      store.dispatch('config/setSelectedKeysAction', [meta.menuId])
    }
    store.dispatch('config/setOpenKeysAction', uniq(openKeys.concat(store.state.config.openKeys)))
    store.dispatch('config/setCurrentComponentAction', node || {})
    store.dispatch('config/setKeepAliveListAction', node || {})
  }
})

export default router
