<template>
  <!-- 角色列表展示 -->
  <div>

    <!-- 数据表格 -->
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="account"
        label="用户名"
        width="100"
        fixed
      >
      </el-table-column>

      <el-table-column
        prop="password"
        label="密码"
        width="100"
      >
      </el-table-column>

      <el-table-column
        prop="reg_time"
        label="创建时间"
        width="200"
      >
      </el-table-column>

      <el-table-column
        prop="creator"
        label="创建者"
        width="100"
      >
      </el-table-column>

      <el-table-column
        prop="role_name"
        label="权限分配"
        width="100"
      >
        <template slot-scope="{row}">
          {{row.role_name | roleName }}

        </template>
      </el-table-column>

    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      :pageSize.sync="params.pageSize"
      :currentPage.sync="params.pageNo"
      @getTableList="getTableList"
    ></Pagination>

  </div>

</template>

<script>
import { reqUserList } from '@/api'
import notification from '@/utils/notification'
import Pagination from '@/components/Pagination'
export default {
  data() {
    return {
      tableData: [],
      params: {
        pageNo: 1,
        pageSize: 5,
        name: ''
      },
      // 全屏loading
      fullscreenLoading: false,
      // 分页
      total: 0
    }
  },
  created() {
    this.getTableList()
  },

  methods: {
    // 获取表格数据
    async getTableList() {
      const { data: res } = await reqUserList()
      console.log('获取角色列表', res)
      if (res.code === 20000) {
        this.tableData = res.data
        // this.total = res.data.rows
      } else {
        notification('获取数据失败', res.data)
      }
    }
  },
  filters: {
    roleName(val) {
      switch (val) {
        case 'approve':
          return '审核人员'
          break
        default:
          return '销售人员'
      }
    }
  },

  components: {
    Pagination
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  line-height: 14px;
  text-align: center;
}
.demo-form-inline {
  text-align: left;
}
</style>