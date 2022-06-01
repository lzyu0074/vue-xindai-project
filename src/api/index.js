import request from './api'

// 登录
export const reqLogin = (data) => request({ url: 'user/login', method: 'post', data })

// 退出登录
export const reqLogout = () => request({ url: 'user/logout', method: 'post' })