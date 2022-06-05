<template>
  <!-- 导航菜单 -->
  <el-aside width="200px"
            class="menu-wrapper">
    <el-menu default-active="/index"
             class="el-menu-vertical-demo"
             background-color="#393e46"
             text-color="#eeeeee"
             active-text-color="#00adb5"
             router>
      <el-menu-item index="/index">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/loan-input">
        <i class="el-icon-setting"></i>
        <span slot="title">贷款申请</span>
      </el-menu-item>
      <el-submenu index="/loan-approve">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>贷款审批</span>
        </template>

        <el-menu-item index="/loan-approve/first"><i class="el-icon-s-opportunity"></i>初审</el-menu-item>
        <el-menu-item index="/loan-approve/end"><i class="el-icon-s-opportunity"></i>终审</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-view"></i>
        <span slot="title">标的管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-view"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style lang="scss">
</style>
