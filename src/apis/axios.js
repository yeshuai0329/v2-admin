import { message } from 'ant-design-vue'
import axios from 'axios'

const instance = axios.create({
  timeout: 30000 // 超时时间
  // withCredentials: true
})

// 请求拦截器：在请求被发送出去之前，做一些验证工作
instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器：在响应到达之前，先进行数据过滤，错误处理
instance.interceptors.response.use((response) => {
  // 统一拦截错误码
  if (response.status === 200 && response.data) {
    if (response.data.code !== 200) {
      message.error(response.data.message)
      return response
    }
    return response
  }
  return response
}, (error) => {
  return Promise.reject(error)
})

export default instance
