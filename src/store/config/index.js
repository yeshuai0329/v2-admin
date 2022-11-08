import router from '@/router/router'
import { findOpenkeys } from '@/utils/public'
import { uniq } from 'lodash'
/**
 * @description:  系统配置相关
 */
const state = {
  currentComponent: JSON.parse(localStorage.getItem('config/currentComponent') || '{}'),
  keepAliveList: JSON.parse(localStorage.getItem('config/keepAliveList') || '[]'),
  openKeys: JSON.parse(localStorage.getItem('config/openKeys') || '[]'),
  selectedKeys: JSON.parse(localStorage.getItem('config/selectedKeys') || '[]'),
  breadCrumdList: [],
  collapsed: JSON.parse(localStorage.getItem('config/collapsed') || 'false'),
  themeColor: JSON.parse(localStorage.getItem('config/themeColor')) || { name: '佛晓蓝(默认)', color: '#1890FF', checkIsShow: true, loading: false }
}

const getters = {
  keepAliveComponentNameList (state, getters, rootState) {
    return state.keepAliveList.map(menuInfo => {
      return menuInfo.name
    })
  }
}

/**
 * @description:  响应组件中用户的动作
 */
const actions = {
  // 当前路由对应的组件名
  setCurrentComponentAction (context, menuInfo) {
    context.commit('setCurrentComponentMution', menuInfo)
  },
  // 当前缓存的路由列表
  setKeepAliveListAction (context, menuInfo) {
    const idx = context.state.keepAliveList.findIndex(item => item.menuId === menuInfo.menuId)
    // 路由缓存列表中不存在
    if (idx === -1) context.commit('setKeepAliveListMution', menuInfo)
  },
  // 删除缓存的组件
  setKeepAliveComponentListAction (context, menuInfo) {
    const idx = context.state.keepAliveList.findIndex(item => item.menuId === menuInfo.menuId)
    if (idx !== -1) context.commit('setKeepAliveComponentListMution', { menuInfo, idx })
  },
  // 设置展开的展开的菜单key
  setOpenKeysAction (context, openKeys) {
    context.commit('setOpenKeysMutation', openKeys)
  },
  // 设置选中的菜单
  setSelectedKeysAction (context, selectedKeys) {
    context.commit('setSelectedKeysMutation', selectedKeys)
  },
  // 设置面包屑
  setBreadCrumdListAction (context, breadCrumdList) {
    context.commit('setBreadCrumdListMutation', breadCrumdList)
  },
  // 设置菜单展开关闭
  setCollapsedAction (context, value) {
    context.commit('setCollapsedMutation', value)
  },
  // 设置主题色
  setThemeColorAction (context, obj) {
    context.commit('setThemeColorMutation', obj)
  }
}

/**
 * @description:  修改state中用户信息相关状态的数据
 */
const mutations = {
  // 当前路由对应的组件名
  setCurrentComponentMution (state, menuInfo) {
    state.currentComponent = menuInfo
    localStorage.setItem('config/currentComponent', JSON.stringify(menuInfo))
  },

  // 当前缓存的路由列表
  setKeepAliveListMution (state, menuInfo) {
    state.keepAliveList.push(menuInfo)
    localStorage.setItem('config/keepAliveList', JSON.stringify(state.keepAliveList))
  },

  // 删除缓存的组件
  setKeepAliveComponentListMution (state, { menuInfo, idx }) {
    if (menuInfo.name !== state.currentComponent.name) {
      state.keepAliveList.splice(idx, 1)
      localStorage.setItem('config/keepAliveList', JSON.stringify(state.keepAliveList))
    } else {
      state.keepAliveList.splice(idx, 1)
      const lastIndex = state.keepAliveList.length - 1
      // 设置当前组件
      router.push(state.keepAliveList[lastIndex].fullPath)
      this.commit('config/setCurrentComponentMution', state.keepAliveList[lastIndex])
      // 设置openkey
      const openKeys = findOpenkeys(JSON.parse(localStorage.getItem('authMenusList')), state.currentComponent.menuId, [])
      this.commit('config/setOpenKeysMutation', uniq(state.openKeys.concat(openKeys)))
      this.commit('config/setSelectedKeysMutation', [state.currentComponent.menuId])
      localStorage.setItem('config/keepAliveList', JSON.stringify(state.keepAliveList))
    }
  },

  // 设置展开的展开的菜单key
  setOpenKeysMutation (state, openKeys) {
    state.openKeys = openKeys
    localStorage.setItem('config/openKeys', JSON.stringify(state.openKeys))
  },

  // 设置高亮的菜单
  setSelectedKeysMutation (state, selectedKeys) {
    state.selectedKeys = selectedKeys
    localStorage.setItem('config/selectedKeys', JSON.stringify(state.selectedKeys))
  },
  // 设置面包屑
  setBreadCrumdListMutation (state, breadCrumdList) {
    state.breadCrumdList = breadCrumdList
  },
  // 设置面包屑
  setCollapsedMutation (state, value) {
    state.collapsed = value
    localStorage.setItem('config/collapsed', JSON.stringify(state.collapsed))
  },
  // 设置主题色
  setThemeColorMutation (context, obj) {
    state.themeColor = obj
    localStorage.setItem('config/themeColor', JSON.stringify(state.themeColor))
  }
}

const config = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default config
