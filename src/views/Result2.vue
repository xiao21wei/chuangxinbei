<template>
  <div class="chart2" id="mychart" :style="myChartStyle">
  </div>
</template>

<script>
import * as echarts from "echarts";
 
export default {
  data() {
    return {
      xData: ["word1", "word2", "word3", "word4", "word5", "word6"], //横坐标
      yData: [40, 60, 70, 85, 39, 50], //数据
      myChartStyle: { float: "left", width: "100%", height: "550px" } //图表样式
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const option = {
          title: {
          text: 'radar chart'
        },
        radar: {
            // shape: 'circle',
            indicator: [
            { name: this.xData[0], max: 100 },
            { name: this.xData[1], max: 100 },
            { name: this.xData[2], max: 100 },
            { name: this.xData[3], max: 100 },
            { name: this.xData[4], max: 100 },
            { name: this.xData[5], max: 100 }
            ]
        },
        series: [
            {
            name: 'char2',
            type: 'radar',
            data: [
                {
                value: this.yData,
                name: '关键词'
                },
            ]
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

