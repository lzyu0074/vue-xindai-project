import { setToken } from '@/utils/handleToken'
import { reqLogin } from '@/api'

export const login = {
  state: {},
  mutations: {},
  actions: {
    onLogin({ commit }, data) {
      return new Promise((resolve, reject) => {
        reqLogin(data).then((response) => {
          const { data: res } = response
          console.log('登录', res)
          if (res.code === 20000) {
            setToken(res.data.token)
            resolve()
          } else {
            reject(new Error(`发生了错误${res}`))
          }
        })
      })
    }
  },
  getters: {}
}
