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
      next('/login')
    } else {
      const authRoutesList = JSON.parse(localStorage.getItem('authRoutesList'))
      if (!authRoutesList) next('/login')
      const route = authRoutesList.find(item => item.fullPath === to.fullPath)
      if (route || ['/404', '/500'].includes(to.fullPath)) {
        next()
      } else {
        next('/404')
      }
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
      openKeys = findOpenkeys(authMenusList, meta.menuParentId, []) || openKeys
      node = findSelectNode(authMenusList, meta.menuParentId) || node
      store.dispatch('config/setSelectedKeysAction', [meta.menuParentId])
      store.dispatch('config/setOpenKeysAction', uniq(openKeys.concat(store.state.config.openKeys)))
      store.dispatch('config/setCurrentComponentAction', node)
      store.dispatch('config/setKeepAliveListAction', node)
    }

    if (meta.menuIsShow === 1 && meta.isDetailMenu === 0) {
      openKeys = findOpenkeys(authMenusList, meta.menuId, []) || openKeys
      node = findSelectNode(authMenusList, meta.menuId) || node
      store.dispatch('config/setSelectedKeysAction', [meta.menuId])
      store.dispatch('config/setOpenKeysAction', uniq(openKeys.concat(store.state.config.openKeys)))
      store.dispatch('config/setCurrentComponentAction', node)
      store.dispatch('config/setKeepAliveListAction', node)
    }

    if (meta.menuIsShow === 0) {
      node = authRoutesList.find(item => item.menuId === meta.menuId) || node
      store.dispatch('config/setSelectedKeysAction', [])
      store.dispatch('config/setOpenKeysAction', uniq(openKeys.concat(store.state.config.openKeys)))
      store.dispatch('config/setCurrentComponentAction', node)
      store.dispatch('config/setKeepAliveListAction', node)
    }
  }
})

// 设置面包屑
router.afterEach((to, from, next) => {
  const authRoutesList = store.state.user.authRoutesList
  const route = authRoutesList.find((route) => route.fullPath === to.fullPath)
  if (route) {
    const findBreadCrumbList = (authRoutesList, route, BreadCrumbList = []) => {
      BreadCrumbList.unshift(route)
      let temp = route
      while (temp.menuParentId) {
        const findOne = authRoutesList.find((item) => item.menuId === temp.menuParentId)
        if (findOne) {
          BreadCrumbList.unshift(findOne)
          temp = findOne
        } else {
          temp = {}
        }
      }
      return BreadCrumbList
    }
    store.dispatch('config/setBreadCrumdListAction', findBreadCrumbList(authRoutesList, route))
  }
})
export default router
