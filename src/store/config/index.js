import router from '@/router/router'
/**
 * @description:  系统配置相关
 */
const state = {
  componentName: 'Home',
  keepAliveList: []
}

const getters = {
  keepAliveComponentNameList (state, getters, rootState) {
    return state.keepAliveList.map(menuInfo => {
      return menuInfo.component
    })
  }
}

/**
 * @description:  响应组件中用户的动作
 */
const actions = {
  // 当前路由对应的组件名
  setComponentNameAction (context, value) {
    context.commit('setComponentNameMution', value)
  },
  // 当前缓存的路由列表
  setKeepAliveListAction (context, value) {
    const idx = context.state.keepAliveList.findIndex(menuInfo => menuInfo === value)
    if (idx === -1) {
      context.commit('setKeepAliveListMution', value)
    }
  },
  setKeepAliveComponentNameListAction (context, mode) {
    const idx = context.state.keepAliveList.findIndex(menuInfo => menuInfo.menuId === mode.menuId)
    if (idx !== -1) {
      context.commit('setKeepAliveComponentNameListMution', idx)
    }
  }
}

/**
 * @description:  修改state中用户信息相关状态的数据
 */
const mutations = {
  // 当前路由对应的组件名
  setComponentNameMution (state, value) {
    state.componentName = value
  },
  // 当前缓存的路由列表
  setKeepAliveListMution (state, value) {
    state.keepAliveList.push(value)
  },
  setKeepAliveComponentNameListMution (state, idx) {
    state.keepAliveList.splice(idx, 1)
    if (state.keepAliveList.length > 0) {
      router.push(state.keepAliveList[0].fullPath)
    } else {
      router.push('/home')
    }
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
