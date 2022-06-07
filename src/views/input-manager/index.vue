<template>
  <el-table :data="tableData"
            style="width: 100%"
            height="500">
    <el-table-column prop="name"
                     label="姓名"
                     width="100"
                     fixed>
    </el-table-column>
    <el-table-column prop="date"
                     label="出生日期"
                     width="150">
    </el-table-column>
    <el-table-column prop="name"
                     label="性别"
                     width="100">
    </el-table-column>
    <el-table-column prop="address"
                     label="教育程度"
                     width="100">
    </el-table-column>
    <el-table-column prop="address"
                     label="居住地址"
                     width="200">
    </el-table-column>
    <el-table-column prop="address"
                     label="手机号"
                     width="150">
    </el-table-column>
    <el-table-column prop="address"
                     label="申请状态"
                     width="100">
    </el-table-column>
    <el-table-column prop="address"
                     label="操作"
                     width="150">
    </el-table-column>
  </el-table>
</template>

<script>
import { reqLoanQuery } from '@/api'
export default {
  data() {
    return {
      tableData: [
        {
          name: '张三',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '张三',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          name: '张三',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          name: '张三',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      params: {
        pageNo: 1,
        pageSize: 10,
        name: ''
      }
    }
  },
  created() {
    this.getTableList()
  },
  methods: {
    async getTableList() {
      const { data: res } = await reqLoanQuery(this.params)
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  line-height: 14px;
  text-align: center;
}
</style>