import { constantRoutes, asyncRoutes } from '@/router'

function filterRoutes(asyncRoutes, roleName) {
  return asyncRoutes.filter((item) => item.meta.roles.indexOf(roleName) !== -1)
}
export const permission = {
  state: {},
  mutations: {},
  actions: {
    // 根据路由拦截器里发送的请求返回的角色名来过滤路由
    toFilterRoutes({ commit, state }, roleName) {
      return new Promise((resolve, reject) => {
        let newRoutes
        if (roleName.includes('administrator')) {
          console.log('admini----------')

          constantRoutes.children = asyncRoutes
          newRoutes = constantRoutes
        } else {
          console.log('else---------')
          newRoutes = filterRoutes(asyncRoutes, roleName)
        }
        resolve(newRoutes)
      })
    }
  },
  getters: {}
}
