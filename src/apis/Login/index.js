import request from '@/apis/axios'

const BASEURL = process.env.VUE_APP_BASEURL

// 账号密码登录
export const loginApi = (data) => {
  return request({
    url: `${BASEURL}/account/login`,
    method: 'post',
    data
  })
}

// 注册账号
export const regestApi = (data) => {
  return request({
    url: `${BASEURL}/account/regist`,
    method: 'post',
    data
  })
}
