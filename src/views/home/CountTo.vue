<template>
  <div>
    <el-row :gutter="30">
      <el-col :xs="24" :md="12" :lg="6">
        <div class="bg">
          <countTo :startVal="startVal" :endVal="endVal" :duration="duration"></countTo>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="6">
        <div class="bg">
          <countTo :startVal="startVal" :endVal="endVal" :duration="duration"></countTo>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="6">
        <div class="bg">
          <countTo :startVal="startVal" :endVal="endVal" :duration="duration"></countTo>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="6">
        <div class="bg">
          <countTo :startVal="startVal" :endVal="endVal" :duration="duration"></countTo>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'CountTo',
  data() {
    return {
      startVal: 0,
      endVal: 1876,
      duration: 1000
    }
  },
  components: {
    countTo
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background-color: #d3dce6;
}
.el-col {
  margin-bottom: 10px;
}
</style>
