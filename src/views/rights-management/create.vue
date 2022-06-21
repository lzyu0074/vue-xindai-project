<template>
  <el-card class="box-card">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item
        label="用户名"
        prop="account"
      >
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>

      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="comfirmPass"
      >
        <el-input v-model="ruleForm.comfirmPass"></el-input>
      </el-form-item>

      <el-form-item
        label="权限分配"
        prop="role_id"
      >
        <el-radio-group v-model="ruleForm.role_id">
          <el-radio label="销售人员"></el-radio>
          <el-radio label="初审人员"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { reqCreateUser } from '@/api'
import notification from '@/utils/notification'
export default {
  name: 'RoleList',
  data() {
    // 密码自定义校验
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    // 再次输入密码自定义校验
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        account: '',
        password: '',
        comfirmPass: '',
        role_id: '初审人员'
      },
      rules: {
        account: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        password: [{ validator: validatePass, trigger: 'blur' }],
        comfirmPass: [{ validator: validatePass2, trigger: 'blur' }],
        role_id: [{ required: true }]
      }
    }
  },
  // 计算单选框role
  computed: {
    roleId() {
      return this.ruleForm.role_id === '销售人员' ? '2' : '1'
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log('==========', this.ruleForm.role_id, this.roleId)
          // 表单验证通过
          const { data: res } = await reqCreateUser({ account: this.ruleForm.account, password: this.ruleForm.password, role_id: this.roleId })
          console.log(res)
          if (res.code === 20000) {
            notification('成功', '角色创建成功', 'success')
            this.$router.push('/rights/rolelist')
            // 组件间通信，全局事件总线，将数据传到navMenu组件，让它激活对应的导航项
            this.$bus.$emit('navChange', '/rights/rolelist')
          }
        } else {
          // 表单验证不通过
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>