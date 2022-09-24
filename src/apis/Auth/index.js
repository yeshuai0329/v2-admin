import request from '@/apis/axios'

const BASEURL = process.env.VUE_APP_BASEURL

/**
 *
 * 权限相关的接口
 *
 */
// 账号密码登录
export const getMenusInfoApi = () => {
  return request({
    url: `${BASEURL}/user/authmenus`,
    method: 'get'
  })
}
