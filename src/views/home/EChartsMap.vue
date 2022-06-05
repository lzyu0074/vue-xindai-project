<template>
  <div>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="china-map"
         style="width: 800px;height:600px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
export default {
  data() {
    return {
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: `地区：{b}<br/>人口：{c}`
        },

        series: [
          {
            name: '销量',
            type: 'map',
            map: 'china',
            label: {
              show: true
            },
            data: [
              { name: '新疆', value: 2344 },
              { name: '广东', value: 344 },
              { name: '青海', value: 214 },
              { name: '黑龙江', value: 5444 }
            ]
          }
        ],
        visualMap: {
          min: 800,
          max: 50000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        }
      }
    }
  },
  methods: {
    initECharts() {
      var myChart = echarts.init(document.getElementById('china-map'))
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
