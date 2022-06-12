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

// 贷款审批 初审 查询
export const reqApproveFirstList = (data) => request({ url: 'approve/first/list', method: 'get', params: data })

// 贷款审批  初审  通过
export const reqApproveFirstPass = (id) => request({ url: 'approve/first/pass', method: 'post', data: { appId: id } })
// 贷款审批  初审  拒绝
export const reqApproveFirstReject = (id) => request({ url: 'approve/first/reject', method: 'post', data: { appId: id } })

// 贷款审批 终审 查询
export const reqApproveEndtList = (data) => request({ url: 'approve/end/list', method: 'get', params: data })

// 贷款审批  终审  通过
export const reqApproveEndPass = (id) => request({ url: 'approve/end/pass', method: 'post', data: { appId: id } })
// 贷款审批  终审  拒绝
export const reqApproveEndReject = (id) => request({ url: 'approve/end/reject', method: 'post', data: { appId: id } })

// 标的管理  查询
export const reqContractList = (data) => request({ url: 'contract/list', method: 'get', params: data })

// 生成合同
export const reqContractCreateFile = (id) => request({ url: 'contract/createFile', method: 'post', data: { id } })

// 下载合同
export const reqContractDownload = (id) => request({ url: 'contract/download', method: 'get', params: { id } })