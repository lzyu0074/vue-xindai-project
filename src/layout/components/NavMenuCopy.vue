<template>
  <!-- 这个是原来的没改过的NavMenu -->
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
      <!-- 无子级菜单 -->

      <el-menu-item index="/index">
        <i class="el-icon-s-grid"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="/loan-input">
        <i class="el-icon-setting"></i>
        <span slot="title">贷款申请</span>
      </el-menu-item>

      <el-menu-item index="/input-manager">
        <i class="el-icon-s-order"></i>
        <span slot="title">申请管理</span>
      </el-menu-item>

      <!-- 有子级菜单 -->

      <el-submenu index="/loan-approve">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>贷款审批</span>
        </template>
        <el-menu-item index="/loan-approve/first"><i class="el-icon-s-opportunity"></i>初审</el-menu-item>
        <el-menu-item index="/loan-approve/end"><i class="el-icon-s-opportunity"></i>终审</el-menu-item>
      </el-submenu>

      <el-menu-item index="/contract">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">标的管理</span>
      </el-menu-item>

      <!-- 有子级菜单 -->
      <el-submenu index="/rights">
        <template slot="title">
          <i class="el-icon-bank-card"></i>
          <span slot="title">权限管理</span>
        </template>

        <el-menu-item index="/rights/create"><i class="el-icon-s-opportunity"></i>创建角色账号</el-menu-item>
        <el-menu-item index="/rights/rolelist"><i class="el-icon-s-opportunity"></i>角色列表展示</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>

</template>

<script>
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
