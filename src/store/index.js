import Vue from 'vue'
import Vuex from 'vuex'
import { login } from './user'
import { permission } from './permission'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  modules: {
    login,
    permission
  }
})
