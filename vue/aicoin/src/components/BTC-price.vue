<template>
  <div class="showEchart">
    <div class="echart-container" ref="echartContainer"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {};
  },
  mounted() {
    this.initEchart();
  },
  methods: {
    initEchart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echartContainer);

      let option = null;
      var rawData = [
        [
          "2021/05/01",
          "12701.9",
          "12953",
          "-33.69",
          "-0.94%",
          "11715.8",
          "12807.6",
          "176963664",
          "25403106",
          "-",
        ],
        [
          "2021/05/02",
          "12953",
          "12881.9",
          "9.14",
          "0.26%",
          "12597.2",
          "13211.2",
          "187889600",
          "26778766",
          "-",
        ],
        [
          "2021/05/03",
          "12881.9",
          "13102.2",
          "29.96",
          "0.85%",
          "13250.5",
          "12751.6",
          "182551920",
          "25093890",
          "-",
        ],
        [
          "2021/05/04",
          "13102.2",
          "12883.3",
          "-94.13",
          "-2.59%",
          "12730.1",
          "13196.5",
          "269983264",
          "36904280",
          "-",
        ],
        [
          "2021/05/05",
          "12883.3",
          "12978",
          "15.43",
          "0.43%",
          "12852.9",
          "13383.8",
          "198451120",
          "27466004",
          "-",
        ],
        [
          "2021/05/06",
          "12978",
          "13598.5",
          "-23.6",
          "-0.65%",
          "12852.8",
          "13351.5",
          "227785216",
          "31542126",
          "-",
        ],
        [
          "2021/05/07",
          "12978",
          "13598.5",
          "-15.68",
          "-0.43%",
          "12852.8",
          "13351.5",
          "298201792",
          "41990292",
          "-",
        ],
        [
          "2021/05/08",
          "13598.5",
          "13221.2",
          "9.3",
          "0.26%",
          "12583.9",
          "13626.7",
          "261178752",
          "36084604",
          "-",
        ],
        [
          "2021/05/09",
          "13221.2",
          "13420.6",
          "63.51",
          "1.77%",
          "12915.9",
          "13832.2",
          "299849280",
          "39831696",
          "-",
        ],
        [
          "2021/05/10",
          "13420.6",
          "13531.9",
          "-1.03",
          "-0.03%",
          "12977.9",
          "13476.1",
          "273707904",
          "36538580",
          "-",
        ],
        [
          "2021/05/11",
          "13531.9",
          "13853.4",
          "63.81",
          "1.81%",
          "13111",
          "13658.9",
          "283856480",
          "38143960",
          "-",
        ],
        [
          "2021/05/12",
          "13853.4",
          "13796",
          "5.83",
          "0.17%",
          "13400",
          "14113.9",
          "193482304",
          "26528864",
          "-",
        ],
        [
          "2021/05/13",
          "13796",
          "13487.3",
          "-10.31",
          "-0.29%",
          "13627.5",
          "13881.9",
          "200471344",
          "27627494",
          "-",
        ],
        [
          "2021/05/14",
          "13487.3",
          "13688.1",
          "86.09",
          "2.51%",
          "13220.3",
          "13855",
          "215374624",
          "27921354",
          "-",
        ],
        [
          "2021/05/15",
          "13688.1",
          "13887.9",
          "-20.91",
          "-0.61%",
          "13282.9",
          "13772",
          "182908880",
          "24507642",
          "-",
        ],
        [
          "2021/05/16",
          "13887.9",
          "15068.4",
          "-16.94",
          "-0.49%",
          "13850",
          "15160.8",
          "200427520",
          "27949970",
          "-",
        ],
      ].reverse();

      function calculateMA(dayCount, data) {
        var result = [];
        for (var i = 0, len = data.length; i < len; i++) {
          if (i < dayCount) {
            result.push("-");
            continue;
          }
          var sum = 0;
          for (var j = 0; j < dayCount; j++) {
            sum += data[i - j][1];
          }
          result.push(sum / dayCount);
        }
        return result;
      }

      var dates = rawData.map(function (item) {
        return item[0];
      });

      var data = rawData.map(function (item) {
        return [+item[1], +item[2], +item[5], +item[6]];
      });

      // 指定图表的配置项和数据
      option = {
        legend: {
          data: ["日K", "MA5", "MA10", "MA20", "MA30"],
          inactiveColor: "#777",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false,
            type: "cross",
            lineStyle: {
              color: "#376df4",
              width: 2,
              opacity: 1,
            },
          },
        },
        xAxis: {
          type: "category",
          data: dates,
          axisLine: { lineStyle: { color: "#8392A5" } },
        },
        yAxis: {
          scale: true,
          axisLine: { lineStyle: { color: "#8392A5" } },
          splitLine: { show: false },
        },
        grid: {
          bottom: 80,
        },
        dataZoom: [
          {
            textStyle: {
              color: "#8392A5",
            },
            handleIcon:
              "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            dataBackground: {
              areaStyle: {
                color: "#8392A5",
              },
              lineStyle: {
                opacity: 0.8,
                color: "#8392A5",
              },
            },
            brushSelect: true,
          },
          {
            type: "inside",
          },
        ],
        series: [
          {
            type: "candlestick",
            name: "日K",
            data: data,
            itemStyle: {
              color: "#FD1050",
              color0: "#0CF49B",
              borderColor: "#FD1050",
              borderColor0: "#0CF49B",
            },
          },
          {
            name: "MA5",
            type: "line",
            data: calculateMA(5, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "MA10",
            type: "line",
            data: calculateMA(10, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "MA20",
            type: "line",
            data: calculateMA(20, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "MA30",
            type: "line",
            data: calculateMA(30, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
        ],
      };
      option1 = {
        legend: {
          data: ["日K", "MA5", "MA10", "MA20", "MA30"],
          inactiveColor: "#777",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false,
            type: "cross",
            lineStyle: {
              color: "#376df4",
              width: 2,
              opacity: 1,
            },
          },
        },
        xAxis: {
          type: "category",
          data: dates,
          axisLine: { lineStyle: { color: "#8392A5" } },
        },
        yAxis: {
          scale: true,
          axisLine: { lineStyle: { color: "#8392A5" } },
          splitLine: { show: false },
        },
        grid: {
          bottom: 80,
        },
        dataZoom: [
          {
            textStyle: {
              color: "#8392A5",
            },
            handleIcon:
              "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            dataBackground: {
              areaStyle: {
                color: "#8392A5",
              },
              lineStyle: {
                opacity: 0.8,
                color: "#8392A5",
              },
            },
            brushSelect: true,
          },
          {
            type: "inside",
          },
        ],
        series: [
          {
            type: "candlestick",
            name: "日K",
            data: data,
            itemStyle: {
              color: "#FD1050",
              color0: "#0CF49B",
              borderColor: "#FD1050",
              borderColor0: "#0CF49B",
            },
          },
          {
            name: "MA5",
            type: "line",
            data: calculateMA(5, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "MA10",
            type: "line",
            data: calculateMA(10, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "MA20",
            type: "line",
            data: calculateMA(20, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          {
            name: "MA30",
            type: "line",
            data: calculateMA(30, data),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      option && myChart.setOption(option);
      option1 && myChart.setOption(option1);
    },
  },
};
</script>

<style lang="less" scoped>
.showEchart {
  position: relative;
  display: flex;
  flex: auto;
  flex-direction: column;
  .echart-container {
    top: 3em;
    margin-left: 15em;
    width: 40em;
    height: 40em;
  }
}
</style>