<template>
  <div>
    <!-- 没有子级 -->
    <el-menu-item
      index="/index"
      v-if="!item.children"
    >
      <i class="el-icon-s-grid"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <!-- 有子级 -->
    <el-submenu
      index="/loan-approve"
      v-else
    >
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span>贷款审批</span>
      </template>

      <NavMenuItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      ></NavMenuItem>
    </el-submenu>
  </div>
</template>

<script>
import NavMenuItem from '@/layout/components/NavMenuItem'
export default {
  name: 'NavMenuItem',
  data() {
    return {}
  },
  props: ['item'],
  components: {
    NavMenuItem
  }
}
</script>

<style>
</style>