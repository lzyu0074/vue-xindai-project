<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :layout="layout"
    :page-sizes="pageSizes"
    :page-size.sync="size"
    :current-page.sync="current"
    :total="total"
    background
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 可传可不传的两个值：
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    pageSizes: {
      type: Array,
      default() {
        return [3, 5, 10, 20]
      }
    },
    // 需要传过来的三个值：
    pageSize: {
      type: Number
    },
    currentPage: {
      type: Number
    },
    total: {
      type: Number
    }
  },
  data() {
    return {}
  },
  computed: {
    size: {
      get() {
        return this.pageSize
      },
      set(val) {
        this.$emit('update:pageSize', val)
      }
    },
    current: {
      get() {
        return this.currentPage
      },
      set(val) {
        // 也可以不在这个触发emit，在handleCurrentChange里触发也行
      }
    }
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.$emit('getTableList')
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.$emit('update:currentPage', val)
      this.$emit('getTableList')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>