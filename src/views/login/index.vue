<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户名："
        prop="account"
      >
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item
        label="密码："
        prop="password"
      >
        <el-input
          v-model="ruleForm.password"
          type="password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="onLogin('ruleForm')"
        >登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onNotAdminLogin('ruleForm')"
        >非管理员登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
          // 派发action，发送登录请求
          this.$store
            .dispatch('onLogin', this.ruleForm)
            .then((res) => {
              this.$router.push('/index')
              console.log('登录按钮跳转-------')
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onNotAdminLogin(ruleForm) {
      this.ruleForm.account = 'tom'
      this.ruleForm.password = '12345678'
      this.$refs[ruleForm].validate(async (valid) => {
        if (valid) {
          // 派发action，发送登录请求
          this.$store
            .dispatch('onLogin', this.ruleForm)
            .then((res) => {
              this.$router.push('/index')
              console.log('登录按钮跳转-------')
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
body {
  // 自己加的
  background-color: #393e46;
}
.login-container .el-form-item__label {
  color: #fff;
}
.login-container {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  padding-top: 200px;
  color: #fff;
}
</style>
