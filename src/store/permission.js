import { constantRoutes, asyncRoutes } from '@/router'

function filterRoutes(asyncRoutes, roleName) {
  return asyncRoutes.filter(item => item.meta.roles.indexOf(roleName) !== -1)
}
export const permission = {
  state: {},
  mutations: {},
  actions: {
    toFilterRoutes({ commit, state }, roleName) {
      return new Promise((resolve, reject) => {
        if (roleName.includes('administrator')) {
          constantRoutes.children = asyncRoutes
        } else {
          filterRoutes(asyncRoutes, roleName)
        }
      })
    }
  },
  getters: {}
}