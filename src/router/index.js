import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout' },
  { path: '/login', component: () => import('@/views/login') },
  // 布局
  {
    path: '/layout', component: () => import('@/layout'), redirect: '/index',
    children: [
      // 首页
      { path: '/index', component: () => import('@/views/home') },
      // 贷款申请
      { path: '/loan-input', component: () => import('@/views/loan-input') },
      {
        // 贷款审批
        path: '/loan-approve', component: () => import('@/views/loan-approve'),
        children: [
          // 初审
          { path: 'first', component: () => import('@/views/loan-approve/first.vue') },
          // 终审
          { path: 'end', component: () => import('@/views/loan-approve/end.vue') }
        ]
      },
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
