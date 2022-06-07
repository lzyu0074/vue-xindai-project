<template>
  <!-- 导航菜单 -->

  <el-aside width="200px"
            class="menu-wrapper">
    <!-- 固定定位容器，使侧边导航固定定位 -->
    <div class="nav-container">
      <el-menu default-active="/index"
               class="el-menu-vertical-demo"
               background-color="#393e46"
               text-color="#eeeeee"
               active-text-color="#00adb5"
               router>
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
        <el-submenu index="/loan-approve">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span>贷款审批</span>
          </template>

          <el-menu-item index="/loan-approve/first"><i class="el-icon-s-opportunity"></i>初审</el-menu-item>
          <el-menu-item index="/loan-approve/end"><i class="el-icon-s-opportunity"></i>终审</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">标的管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-bank-card
"></i>
          <span slot="title">权限管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-aside>

</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style lang="scss">
.nav-container {
  width: 200px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}
.el-aside {
  background-color: #393e46;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 100%;
}
</style>
