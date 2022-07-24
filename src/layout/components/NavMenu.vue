<template>
  <!-- 导航菜单 -->

  <el-aside
    width="200px"
    class="menu-wrapper"
  >
    <el-menu
      :default-active="defaultActiveIndex"
      class="el-menu-vertical-demo"
      background-color="#393e46"
      text-color="#eeeeee"
      active-text-color="#00adb5"
      router
    >

      <NavMenuItem :item="$store.state.permission.route"></NavMenuItem>

    </el-menu>
  </el-aside>

</template>

<script>
import NavMenuItem from '@/layout/components/NavMenuItem'

export default {
  name: 'NavMenu',
  data() {
    return {
      // 默认是/index首页
      defaultActiveIndex: '/index'
    }
  },
  // 全局事件总线，监听来激活对应的导航项
  mounted() {
    this.$bus.$on('navChange', (path) => {
      console.log('收到了----', path)
      this.defaultActiveIndex = path
      console.log(this.defaultActiveIndex)
    })
  },
  components: {
    NavMenuItem
  }
}
</script>

<style lang="scss">
// .nav-container {
//   width: 200px;
//   overflow: hidden;
//   position: fixed;
//   top: 0;
//   left: 0;
// }
.el-aside {
  background-color: #393e46;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 100%;
}
</style>
