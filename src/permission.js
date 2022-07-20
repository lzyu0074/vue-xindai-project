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

    console.log('store', store);
    if (store.state.permission.route) {
      next()
    } else {
      const { data: res } = await reqUserInfo()
      const roleName = res.data.roles[0].name //拿到角色名，根据角色名去过滤路由
      const newRoutes = await store.dispatch('toFilterRoutes', roleName)
      console.log("过滤出来的路由", newRoutes)
      // newRoutes.forEach(item => router.addRoute(item))
      router.addRoute(newRoutes)
      console.log('to.path--', to.path)
      console.log(router);
      console.log('roleName----------------', roleName);
      // next()

      if (roleName) {
        next({ path: to.path })
      } else {
        next({ path: '/login' })
      }   //解开这个，注释掉上面的next可以实现功能
    }

    // next()
  }
})
