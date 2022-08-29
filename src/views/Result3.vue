<template>
  <div ref="calendar" :style="{float:`${float}`, width: `${width}%`, height: `${height}px` }">
  </div>
</template>

<script>
export default {
  props: {
    float: { type: [String, Number], default: "left" },
    height: { type: [String, Number], default: "550" }, //高度
    width: { type: [String, Number], default: "100" }, //宽度
    rowData: {
      type: Array,
      default: () => {
        return [
          ["2021-09-01", 50],
          ["2021-09-02", 60],
          ["2021-09-03", 200],
          ["2021-09-04", 100],
          ["2021-09-05", 230],
          ["2021-09-06", 24],
          ["2021-09-07", 60],
          ["2021-09-08", 140],
          ["2021-09-09", 210],
          ["2021-09-10", 160],
          ["2021-09-11", 60],
          ["2021-09-12", 260],
          ["2021-09-13", 120],
          ["2021-09-14", 153],
          ["2021-09-15", 110],
          ["2021-09-16", 117],
          ["2021-09-17", 120],
          ["2021-09-18", 150],
          ["2021-09-19", 130],
          ["2021-09-20", 110],
          ["2021-09-21", 20],
          ["2021-09-22", 10],
          ["2021-09-23", 50],
          ["2021-09-24", 90],
          ["2021-09-25", 10],
          ["2021-09-26", 16],
          ["2021-09-27", 23],
          ["2021-09-28", 26],
          ["2021-09-29", 56],
          ["2021-09-30", 350],
        ];
      },
    },
  },
  data() {
    return {
      calendarChart: null,
      option: null,
      rando_data: [],
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      this.calendarChart = this.$echarts.init(this.$refs.calendar);
      this.option = this.initOption();
      this.calendarChart.setOption(this.option, true);
      calendarChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    initOption() {
      let option = {
        title: {
          text: 'calendar chart'
        },
        tooltip: {
          formatter: function(params) {
            return `${params.value[0]} <br/>话题热度: ${params.value[1].toFixed(
              2
            )}`;
          },
        },

        visualMap: [
          {
            show: false,
            min: 0,
            max: 300,
            calculable: true,
            seriesIndex: [2],
            orient: "horizontal",
            left: "center",
            bottom: 20,
            inRange: {
              color: [
                "rgba(87,171,24,1)",
                "rgba(224,188,20,1)",
                "rgba(228,142,27,1)",
                "rgba(236,61,47,1)",
                "rgba(217,64,159,1)",
                "rgba(165,50,44,1)",
              ],
              opacity: 1,
            },
            controller: {
              inRange: {
                opacity: 0.7,
              },
            },
          },
        ],

        calendar: {
          left: "center",
          top: "middle",
          cellSize: [80, 80],
          yearLabel: { show: false,
                      fontSize: 30
                      },
          orient: "vertical",
          dayLabel: {
            firstDay: 0,
            nameMap: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            color: "#BFEBFF",
            fontSize: 16,
          },
          monthLabel: {
            show: false,
          },
          range: this.rowData[0][0].slice(0, 7),
        },

        series: [
          {
            type: "scatter",
            coordinateSystem: "calendar",
            symbolSize: 1,
            label: {
              show: true,
              formatter: function(params) {
                return params.value[2];
              },
              fontSize: 16,
              color: "#fff",
            },
            data: this.rowData,
          },
          {
            type: "scatter",
            coordinateSystem: "calendar",
            symbolSize: 1,
            label: {
              show: false,
            },
          },
          {
            name: "空气质量",
            type: "heatmap",
            coordinateSystem: "calendar",
            data: this.rowData,
            itemStyle: {
              color: "#000",
              borderColor: "#42C1CC",
            },
          },
        ],
      };
      return option;
    },
  },
};
</script>

