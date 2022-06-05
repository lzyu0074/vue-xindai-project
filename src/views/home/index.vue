<template>
  <div>
    首页
    <!-- 数字滚动展示组件 -->
    <CountTo></CountTo>
    <!-- echarts图表 -->
    <EChartsBar></EChartsBar>
    <EChartsMap></EChartsMap>
  </div>
</template>

<script>
import CountTo from '@/views/home/CountTo'
import EChartsBar from '@/views/home/EChartsBar'
import EChartsMap from '@/views/home/EChartsMap'
export default {
  components: {
    CountTo,
    EChartsBar,
    EChartsMap
  }
}
</script>

<style lang="scss"></style>
