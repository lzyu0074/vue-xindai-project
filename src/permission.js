import router from '@/router'
import store from '@/store'

router.beforeEach((from, to, next) => {
  const st = store.state
  console.log(st);
  console.log('------------------');
  next()
})
