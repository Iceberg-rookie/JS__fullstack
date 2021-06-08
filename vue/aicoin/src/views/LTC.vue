<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb>
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 价格预测
        </el-breadcrumb-item>
        <el-breadcrumb-item>莱特币</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>前日多空观点</span>
            </div>
          </template>
          <!-- <div class="echarts1" ref="echartContainer1"></div> -->
          看多
          <el-progress :percentage="50.01" color="#42b983"></el-progress
          >看空
          <el-progress :percentage="49.99" color="#D41530"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>昨日多空观点</span>
            </div>
          </template>
          <div class="echarts1" ref="echartContainer1"></div>
          看多
          <el-progress :percentage="50.01" color="#42b983"></el-progress
          >看空
          <el-progress :percentage="49.99" color="#D41530"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>今日多空观点</span>
            </div>
          </template>
          <!-- <div class="echarts1" ref="echartContainer1"></div> -->
          看多
          <el-progress :percentage="50.01" color="#42b983"></el-progress
          >看空
          <el-progress :percentage="49.99" color="#D41530"></el-progress>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "ltc",
  data() {
    return {
      name: localStorage.getItem("ms_username"),
      data: [

      ],
    };
  },
  mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart1 = echarts.init(this.$refs.echartContainer1);

      let option1 = null;

      // 指定图表的配置项和数据     
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

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
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