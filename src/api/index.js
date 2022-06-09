import request from './api'

// 登录
export const reqLogin = (data) => request({ url: 'user/login', method: 'post', data })

// 退出登录
export const reqLogout = () => request({ url: 'user/logout', method: 'post' })

// 贷款申请
export const reqLoanCreate = (data) => request({ url: 'loan/create', method: 'post', data })

// 申请管理
export const reqLoanQuery = (data) => request({ url: 'loan/list', method: 'get', params: data })

// 提交审核
export const reqSubmitToApprove = (id) => request({ url: 'loan/submitToApprove', method: 'post', data: { id } })