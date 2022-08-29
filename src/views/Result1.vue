<template>
  <div class="char1" id="mychart" :style="myChartStyle">
    <nav>
      <router-link to="/search">Home</router-link> |
      <router-link to="/result">Result</router-link>
    </nav>
    <router-view/>
  </div>
</template>
 
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      xData: ["word1", "word2", "word3", "word4", "word5", "word6", "word7"], //横坐标
      yData: [23, 24, 18, 25, 27, 28, 35], //数据
      myChartStyle: { float: "left", width: "100%", height: "500px" } //图表样式
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      // 基本柱状图
      const option = {
        title: {
          text: 'bar chart'
        },
        xAxis: {
          data: this.xData,
          name: '关键词'
        },
        yAxis: {
          name: '热度'
        },
        series: [
          {
            type: "bar", //形状为柱状图
            data: this.yData,
            name: '热度'
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>