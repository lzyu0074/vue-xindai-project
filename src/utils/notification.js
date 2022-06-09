// 封装消息提示，在多处使用时，便于统一修改
import Vue from 'vue'

const notification = (title, message, type = 'success', duration = 2000) => {
  Vue.prototype.$notify({
    title,
    message,
    type,
    duration,
    position: 'top-left'
  })
}
export default notification