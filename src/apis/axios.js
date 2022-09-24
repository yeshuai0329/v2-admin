import axios from 'axios'
import { message } from 'ant-design-vue'

// 重新设置token
const setToken = ({ token, refreshtoken }) => {
  localStorage.setItem('token', token)
  localStorage.setItem('refreshtoken', refreshtoken)
}

// 获取token
const getlocalToken = (key) => {
  const token = localStorage.getItem(key)
  return token
}

const instance = axios.create({
  timeout: 30000, // 超时时间
  withCredentials: true,
  headers: {
  }
})

// 请求拦截器：在请求被发送出去之前，做一些验证工作
instance.interceptors.request.use((config) => {
  config.headers = {
    ...{
      token: getlocalToken('token'),
      refreshtoken: getlocalToken('refreshtoken')
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器：在响应到达之前，先进行数据过滤，错误处理
instance.interceptors.response.use((response) => {
  // 统一拦截错误码
  if (response.status === 200 && response.data) {
    if (response.data.code !== 200) {
      if (response.data.code === 10000) {
        // code === 10000 代表token失效,要刷新token了
        setToken(response.data.data)
        const config = response.config
        config.headers = {
          ...{
            token: getlocalToken('token'),
            refreshtoken: getlocalToken('refreshtoken')
          }
        }
        instance(config)
      } else if (response.data.code === 10002) {
        // token 和 refreshtoken 都失效
        window.location.href = '/login'
        localStorage.clear()
      } else {
        message.error(response.data.message)
        return response
      }
    }
    return response
  }
  return response
}, (error) => {
  return Promise.reject(error)
})

export default instance
