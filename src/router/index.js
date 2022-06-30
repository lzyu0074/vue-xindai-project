import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch((err) => err)
}

export const constantRoutes = [
  { path: '/', redirect: '/layout' },
  { path: '/login', component: () => import('@/views/login') },
  // 布局
  {
    path: '/layout',
    component: () => import('@/layout'),
    redirect: '/index',
    meta: { title: '首页' } //title首页放在这里是为了面包屑
  }
]

export const asyncRoutes = [
  // 首页
  { path: '/index', component: () => import('@/views/home'), meta: { roles: ['input', 'approve'] } },
  // 贷款申请
  { path: '/loan-input', component: () => import('@/views/loan-input'), meta: { title: '贷款申请', roles: ['input'] } },
  // 贷款管理
  { path: '/input-manager', component: () => import('@/views/input-manager'), meta: { title: '申请管理' }, roles: ['input'] },
  // 贷款审批
  {
    path: '/loan-approve',
    component: () => import('@/views/loan-approve'),
    meta: { title: '贷款审批', roles: ['approve'] },
    redirect: '/loan-approve/first',
    children: [
      // 初审
      { path: 'first', component: () => import('@/views/loan-approve/first.vue'), meta: { title: '初审' } },
      // 终审
      { path: 'end', component: () => import('@/views/loan-approve/end.vue'), meta: { title: '终审' } }
    ]
  },
  // 标的管理
  { path: '/contract', component: () => import('@/views/contract'), meta: { title: '标的管理', roles: ['approve'] } },
  // 权限管理
  {
    path: '/rights',
    component: () => import('@/views/rights-management'),
    meta: { title: '权限管理' },
    redirect: '/rights/create',
    children: [
      { path: 'create', component: () => import('@/views/rights-management/create.vue'), meta: { title: '创建角色' } },
      { path: 'rolelist', component: () => import('@/views/rights-management/rolelist.vue'), meta: { title: '角色列表' } }
    ]
  }
]

const router = new VueRouter({
  routes: constantRoutes
})

export default router
