
/**
 * @description:  保存用户信息相关状态
 */
const state = {
  userInfo: {
    accountNumber: 'yeshuai@aliyun.com'
  }
}

/**
 * @description:  响应组件中用户的动作
 */
const actions = {
  userInfoAction (context, value) {
    console.log('context', context)
    console.log('value', value)
    context.commit('userInfoMutation', value)
  }
}

/**
 * @description:  修改state中用户信息相关状态的数据
 */
const mutations = {
  userInfoMutation (state, value) {
    state.userInfo = value
  }
}

const user = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default user
