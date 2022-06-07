<template>
  <!-- 右侧头部 -->
  <div class="top-container">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/"
                   class="breadcrumb">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item :to="p.path"
                          v-for="p in breadcrumbList"
                          :key="p.path">{{ p.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 下拉菜单退出登录 -->
    <el-dropdown trigger="click"
                 @command="handleCommand">
      <span class="el-dropdown-link"> 退出<i class="el-icon-arrow-down el-icon--right"></i> </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout"
                          icon="el-icon-switch-button">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
import { reqLogout } from '@/api'
import { removeToken } from '@/utils/handleToken'
export default {
  name: 'Top',
  data() {
    return {
      // 面包屑数组
      breadcrumbList: []
    }
  },
  methods: {
    // 退出登录
    async handleCommand(command) {
      const { data: res } = await reqLogout()
      console.log('退出登录', res)
      // 后台就是返回603，不知道为什么
      if (res.code === 603) {
        removeToken()
        this.$router.push('/login')
      }
    }
  },
  watch: {
    $route(newVal, oldVal) {
      // console.log(newVal)
      this.breadcrumbList = newVal.matched.filter((item) => item.meta && item.meta.title)
    }
  },
  mounted() {
    this.breadcrumbList = this.$route.matched.filter((item) => item.meta && item.meta.title)
  }
}
</script>

<style lang="scss">
.top-container {
  display: flex;
  line-height: 60px;
}
.breadcrumb {
  line-height: 60px;
  flex: 1;
}
</style>
