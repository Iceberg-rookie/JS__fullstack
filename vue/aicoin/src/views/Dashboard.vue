<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <div class="user-info">
            <img src="../assets/img/img.jpg" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            登录时间：
            <span>2021-06-01</span>
          </div>
          <div class="user-info-list">
            登录地点：
            <span>南昌</span>
          </div>
        </el-card>
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>每日多空观点</span>
            </div>
          </template>
          <div class="echarts1" ref="echartContainer1"></div>
          看多
          <el-progress :percentage="50.01" color="#42b983"></el-progress
          >看空
          <el-progress :percentage="49.99" color="#D41530"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="iconfont icon-zongshizhi grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">11.77万亿</div>
                  <div>总市值</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="iconfont icon-leijichengjiaoe grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1.46万亿</div>
                  <div>总成交额</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="iconfont icon-iconset02100 grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">6.3860</div>
                  <div>汇率</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>快讯</span>
            </div>
          </template>
          <el-table :show-header="false" :data="newList" style="width: 100%">
            <el-table-column>
              <template #default="scope">
                <el-link
                  class="todo-item"
                  :underline="false" 
                  href=""
                >
                  {{ scope.row.title }}
                </el-link>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div class="echarts" ref="echartContainer"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>要闻推荐</span>
            </div>
          </template>
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <el-link
                  :underline="false" 
                  href=""
                >去中心化衍生品交易平台 Kine 即将上线币安智能链</el-link>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <el-link
                  :underline="false" 
                  href=""
                >21Shares将在伦敦Aquis交易所上线比特币ETP</el-link>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <el-link
                  :underline="false" 
                  href=""
                >USDT大额转出Bitfinex交易所</el-link>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "dashboard",
  data() {
    return {
      name: localStorage.getItem("ms_username"),
      newList: [
        {
          title: "BTC合约24H净流入：￥30.05亿",
          status: false
        },
        {
          title: "BTC合约持仓量￥255.87亿，较前日+3.69%",
          status: false
        },
        {
          title: "24H交易所链上转账，BTC净流入：-￥11.99亿（-5259.11个）",
          status: false
        },
        {
          title: "Glassnode指标：比特币活跃供应量触及5个月低点",
          tatus: false
        },
        {
          title: "今日情绪指数为：极度恐惧（23分）",
          status: false
        },
        {
          title: "BTC合约24H净流入：￥30.05亿",
          status: false
        },
        {
          title: "BTC合约持仓量￥255.87亿，较前日+3.69%",
          status: false
        },
        {
          title: "24H交易所链上转账，BTC净流入：-￥11.99亿（-5259.11个）",
          status: false
        },
        {
          title: "Glassnode指标：比特币活跃供应量触及5个月低点",
          tatus: false
        },
      ],
      data: [

      ],
    };
  },
  mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echartContainer);
      var myChart1 = echarts.init(this.$refs.echartContainer1);

      let option = null;
      let option1 = null;

      var rawData = [
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
          title: {
            text: '每日多空观点',
            left: 'center'
          },
          tooltip: {
              trigger: 'item'
          },
          legend: {
              orient: 'vertical',
              left: 'left',
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              color: ['#008555','#D60F2A',],
              data: [
                {value: 5001, name: '看多'},
                {value: 4999, name: '看空'},
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
      };

      // 使用刚指定的配置项和数据显示图表。
      option && myChart.setOption(option);
      option1 && myChart1.setOption(option1);
  },
  computed: {
    role() {
        return this.name === "admin" ? "超级管理员" : "普通用户";
    }
  },
  methods: {
    changeDate() {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() +
          1}/${date.getDate()}`;
      });
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.echarts {
  width: 100%;
  height: 380px;
}

.echarts1 {
  width: 100%;
  height: 220px;
}

.clearfix {
  border-left: 2px solid #0B69EF;
  padding-left: 5px;
}
</style>
