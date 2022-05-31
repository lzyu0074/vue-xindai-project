<template>
  <div>
    <el-container>
      <!-- 左侧导航菜单 -->
      <el-aside width="200px" class="menu-wrapper">
        <!-- 导航菜单 -->
        <el-menu default-active="/index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
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

      <!-- 右侧 -->
      <el-container>
        <!-- 右侧头部 -->
        <el-header>
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 下拉菜单退出登录 -->
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link"> 退出<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout" icon="el-icon-switch-button">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <!-- 右侧主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    // 退出登录
    handleCommand(command) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
// 去除导航栏滚动条
.menu-wrapper {
  overflow: hidden;
}
.el-submenu {
  .el-menu-item {
    width: 199px;
  }
}
</style>
