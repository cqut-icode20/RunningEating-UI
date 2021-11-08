<template>
  <div class="report">
    <!--  卡片-->
    <el-card>
      <!-- 2. 为ECharts准备一个具备大小（宽高）的Dom -->
      <div class="chart" id="sales" ></div>
    </el-card>
    <el-card>
      <div class="chart" id="users"></div>
    </el-card>
    <el-card>
      <div class="chart" id="login"></div>
    </el-card>
    <el-card>
      <div class="chart" id="fire"></div>
    </el-card>
  </div>
</template>

<script>

import * as echarts from "echarts";

export default {
  name: 'MainPage',
  components: {},
  async mounted() {
    const chart_sales = echarts.init(document.getElementById('sales'));
    const chart_users = echarts.init(document.getElementById('users'));
    const chart_login = echarts.init(document.getElementById('login'));
    const chart_fire = echarts.init(document.getElementById('fire'));
// 指定图表的配置项和数据
    const option = {
      title: {
        x: 'center',
        y: 'top',
        text: '实时销量数据'
      },
      tooltip: {},
      legend: {
        y: 'bottom',
        data: ['销量']
      },
      xAxis: {
        data: ["零食1", "零食2", "零食3", "零食4", "零食5", "零食6"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [35, 20, 36, 10, 10, 20]
      }]
    };

// 使用刚指定的配置项和数据显示图表。
    chart_sales.setOption(option);
    chart_users.setOption(option);
    chart_login.setOption(option);
    chart_fire.setOption(option);
  }
}
</script>

<style scoped>
.report{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

}
.chart{
  width: 400px;
  height: 300px;
}

</style>
