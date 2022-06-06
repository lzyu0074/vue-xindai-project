import request from './api'

// 登录
export const reqLogin = (data) => request({ url: 'user/login', method: 'post', data })

// 退出登录
export const reqLogout = () => request({ url: 'user/logout', method: 'post' })

// 贷款申请
export const reqLoanCreate = (data) => request({ url: 'loan/create', method: 'post', data })