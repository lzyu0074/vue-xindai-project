import { setToken } from '@/utils/handleToken'
import { reqLogin } from '@/api'

export const login = {
  state: {
    token: ''
  },
  mutations: {
    LOGINSETTOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    // 登录请求，在本地存储token，在state中存储token
    onLogin({ commit }, data) {
      return new Promise((resolve, reject) => {
        reqLogin(data).then((response) => {
          const { data: res } = response
          console.log('登录', res)
          if (res.code === 20000) {
            setToken(res.data.token)
            commit('LOGINSETTOKEN', res.data.token)
            resolve('ok')
          } else {
            reject(new Error(`发生了错误${res}`))
          }
        })
      })
    }
  },
  getters: {}
}
