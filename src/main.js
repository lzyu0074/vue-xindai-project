import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 执行一下路由守卫
import './permission'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // 全局事件总线
  mounted() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
