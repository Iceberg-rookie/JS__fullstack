<template>
  <div id="app">
    <Home/>
    <div class="showEchart">
      <div class="echart-container" ref="echartContainer"></div>
    </div>
  </div>
</template>

<script>
import Home from '@/views/home/Home'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Home
  },
  mounted() {
    this.initEchart()
  },
  methods: {
    getdata() {
      this.$http.post()
        .then((res) => {
          document.write(res.body);    
        });
    },
    initEchart () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echartContainer);
      let option = null

      // 指定图表的配置项和数据
      option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
  }
}
</script>

<style lang="less" scoped>
.showEchart{
  display: flex;
  margin-left: 15em;
  height: 90vh;
  margin-top: -90vh;
  .echart-container {
    width: 85vw;
    height: 90vh;
  }
}
</style>