<template>
  <!-- 导航菜单 -->
  <el-aside width="200px" class="menu-wrapper">
    <el-menu default-active="/index" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
      <el-menu-item index="/index">
        <i class="el-icon-edit"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/loan-input">
        <span slot="title">贷款申请</span>
      </el-menu-item>
      <el-submenu index="/loan-approve">
        <template slot="title">
          <span>贷款审批</span>
        </template>

        <el-menu-item index="/loan-approve/first">初审</el-menu-item>
        <el-menu-item index="/loan-approve/end">终审</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <span slot="title">标的管理</span>
      </el-menu-item>
      <el-menu-item index="6">
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

<style lang="scss"></style>
