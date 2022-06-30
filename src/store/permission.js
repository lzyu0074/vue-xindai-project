import { constantRoutes, asyncRoutes, conRoutes } from '@/router'

function filterRoutes(asyncRoutes, roleName) {
  return asyncRoutes.filter((item) => item.meta.roles.indexOf(roleName) !== -1)
}
export const permission = {
  state: {
    state: null
  },
  mutations: {
    SETROUTES(state, route) {
      state.route = route
    }
  },
  actions: {
    // 根据路由拦截器里发送的请求返回的角色名来过滤路由
    toFilterRoutes({ commit, state }, roleName) {
      return new Promise((resolve, reject) => {
        let newRoutes
        // let layout = constantRoutes.filter(item => item.path.includes('/layout'))[0]

        // let layout = conRoutes.filter(item => item.path.includes('/layout'))[0]

        let layout = conRoutes[0]

        console.log(layout, '+++++layout');
        console.log(conRoutes, '+++++conRoutes');
        if (roleName.includes('administrator')) {
          console.log('admini----------')
          layout.children = asyncRoutes
          console.log('ad-----------------');
        } else {
          console.log('else---------')
          layout.children = filterRoutes(asyncRoutes, roleName)
        }
        // newRoutes = [layout] || []
        newRoutes = layout

        commit('SETROUTES', layout)

        resolve(newRoutes)
      })
    }
  },
  getters: {}
}
