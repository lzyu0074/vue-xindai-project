<template>
  <div>
    <!-- 搜索 -->
    <el-form
      :inline="true"
      class="demo-form-inline"
    >
      <el-form-item>
        <el-input
          v-model="params.name"
          placeholder="输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSearch"
        >查询</el-button>
      </el-form-item>
    </el-form>

    <!-- 数据表格 -->
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="姓名"
        width="80"
        fixed
      >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="50"
      >
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.sex | getSex }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="education"
        label="教育程度"
        width="100"
      >
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.education | getEducation }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address1"
        label="居住地址"
        width="100"
      >
      </el-table-column>

      <el-table-column
        prop="contact_phone"
        label="手机号"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="申请状态"
        width="100"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | getTagType">{{row.status | getStatus }}</el-tag>

        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="300"
      >
        <template slot-scope="{row}">
          <el-button
            type="primary"
            size="mini"
            :disabled="row.status !== 0 && row.status !== 3 && row.status !== 6 "
          >编辑</el-button>
          <el-button
            type="danger"
            size="mini"
            :disabled="row.status !== 0 && row.status !== 3 && row.status !== 6 "
          >删除</el-button>
          <el-button
            type="warning"
            size="mini"
            :disabled="row.status !== 0 && row.status !== 3 && row.status !== 6 && row.status !== 2 "
            @click="submitToApprove(row.id)"
            v-loading.fullscreen.lock="fullscreenLoading"
          >提交审核</el-button>
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
import { reqLoanQuery, reqSubmitToApprove } from '@/api'
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
      const { data: res } = await reqLoanQuery(this.params)
      console.log('申请管理-获取数据：', res)
      if (res.code === 20000) {
        this.tableData = res.data.data.data
        this.total = res.data.rows
      } else {
        notification('获取数据失败', res.data)
      }
    },
    // 提交审核
    async submitToApprove(id) {
      // 开启全屏loading
      this.fullscreenLoading = true

      const { data: res } = await reqSubmitToApprove(id)
      console.log('提交审核：', res)
      if (res.code === 20000) {
        // 关闭loading
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 500)

        notification('成功', '已提交审核')
        this.getTableList()
      } else {
        this.fullscreenLoading = false
        notification('失败', res.data)
      }
    },
    // 分页两个方法
    // 已转到子组件中（二次封装的分页器）

    // 搜索
    onSearch() {
      this.getTableList()
    }
  },
  // 过滤器，根据后台返回的数据，来翻译成用户看得懂的数据
  filters: {
    getSex(sex) {
      switch (sex) {
        case 'man':
          return '男'
          break
        case 'woman':
          return '女'
          break
        default:
          return sex
      }
    },
    getEducation(education) {
      switch (education) {
        case 'college':
          return '大学'
          break
        case 'highschool':
          return '高中'
          break
        default:
          return education
      }
    },
    getStatus(status) {
      switch (status) {
        case 0:
          return '进件状态'
          break
        case 1:
          return '提交初审'
          break
        case 2:
          return '初审通过'
          break
        case 3:
          return '初审拒绝'
          break
        case 4:
          return '提交终审'
          break
        case 5:
          return '终审通过'
          break
        case 6:
          return '终审拒绝'
          break
        case 7:
          return '生成合同'
          break
        default:
          return status
      }
    },
    getTagType(status) {
      switch (status) {
        case 0:
          return 'info'
          break
        case 1:
          return ''
          break
        case 2:
          return 'success'
          break
        case 3:
          return 'danger'
          break
        case 4:
          return ''
          break
        case 5:
          return 'success'
          break
        case 6:
          return 'danger'
          break
        case 7:
          return 'danger'
          break
        default:
          return 'info'
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