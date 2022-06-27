import router from '@/router'
import store from '@/store'
import { reqUserInfo } from '@/api'

router.beforeEach(async (to, from, next) => {
  const token = store.state.login.token
  if (!token) {
    // 未登录
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }

  } else {
    // 已登录
    const { data: res } = await reqUserInfo()
    const roleName = res.data.roles[0].name
    console.log('角色', roleName);
    next()
  }
})
