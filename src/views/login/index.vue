<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名：" prop="account">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onLogin('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reqLogin } from '@/api'
import { setToken } from '@/utils/handleToken'
export default {
  data() {
    return {
      ruleForm: {
        account: 'admin',
        password: 'approve123456.'
      },
      rules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onLogin(ruleForm) {
      this.$refs[ruleForm].validate(async (valid) => {
        if (valid) {
          const { data: res } = await reqLogin(this.ruleForm)
          console.log('登录', res)
          if (res.code === 20000) {
            setToken(res.data.token)
            this.$router.push('/index')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss"></style>
