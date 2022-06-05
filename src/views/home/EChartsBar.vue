<template>
  <div>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main"
         style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  },
  methods: {
    initECharts() {
      var myChart = echarts.init(document.getElementById('main'))
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option)
    }
  },
  mounted() {
    this.initECharts()
  }
}
</script>

<style lang="scss"></style>
