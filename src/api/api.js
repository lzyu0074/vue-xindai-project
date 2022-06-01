import axios from 'axios'
import { getToken } from '@/utils/handleToken'
import { Message } from 'element-ui';

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // 每次请求头中带上token
  config.headers['token'] = getToken()
  return config
}, (err) => { })

// 响应拦截器
request.interceptors.response.use((response) => {
  // 提示错误消息
  const { data: res } = response
  if (res.code != 20000 && res.code != 603) {
    Message({
      message: res.data || '发生了某些错误',
      type: 'warning',
      center: true,
      duration: 2000
    })
  }
  return response
}, (err) => { })

export default request