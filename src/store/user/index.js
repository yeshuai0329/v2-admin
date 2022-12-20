/**
 * @description:  保存用户信息相关状态
 */
const state = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  authRoutesList: JSON.parse(localStorage.getItem('authRoutesList')) || [],
  authMenusList: JSON.parse(localStorage.getItem('authMenusList')) || []
}

/**
 * @description:  响应组件中用户的动作
 */
const actions = {
  // 设置用户信息
  userInfoAction (context, value) {
    context.commit('userInfoMutation', value)
  },
  // 设置用户信息路由信息
  authRoutesListAction (context, value) {
    context.commit('authRoutesListMutation', value)
  },
  // 设置用户菜单列表
  authMenusListAction (context, value) {
    context.commit('authMenusListMutation', value)
  }
}

/**
 * @description:  修改state中用户信息相关状态的数据
 */
const mutations = {
  // 设置用户信息
  userInfoMutation (state, value) {
    state.userInfo = value
    localStorage.setItem('userInfo', JSON.stringify(value))
  },
  // 设置用户信息路由信息
  authRoutesListMutation (state, value) {
    state.authRoutesList = value
    localStorage.setItem('authRoutesList', JSON.stringify(value))
  },
  // 设置用户菜单信息
  authMenusListMutation (state, value) {
    state.authMenusList = value
    localStorage.setItem('authMenusList', JSON.stringify(value))
  }
}

const user = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default user
