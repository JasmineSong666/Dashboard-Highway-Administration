import { Box, useTheme } from "@mui/material";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { tokens } from "../theme";

export default function BarChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Generate data
  let category = [];
  let dottedBase = +new Date();
  let lineData = [];
  let barData = [];
  for (let i = 0; i < 20; i++) {
    let date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push(
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
    );
    let b = Math.random() * 200;
    let d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
  }
  // option
  const option = {
    backgroundColor: isDashboard ? colors.primary[400] : colors.primary[500],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["车辆通行延误", "实时排队长度"],
      //data: ['line', 'bar'],
      textStyle: {
        color: "#ccc",
      },
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    series: [
      {
        name: "车辆通行延误",
        type: "line",
        smooth: true,
        showAllSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 15,
        data: lineData,
      },
      {
        name: "实时排队长度",
        type: "bar",
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#14c8d4" },
            { offset: 1, color: "#43eec6" },
          ]),
        },
        data: barData,
      },
      {
        name: "车辆通行延误",
        type: "bar",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(20,200,212,0.5)" },
            { offset: 0.2, color: "rgba(20,200,212,0.2)" },
            { offset: 1, color: "rgba(20,200,212,0)" },
          ]),
        },
        z: -12,
        data: lineData,
      },
      {
        name: "延误平均值",
        type: "pictorialBar",
        symbol: "rect",
        itemStyle: {
          color: "#0f375f",
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData,
      },
    ],
  };

  return (
    <Box>
      <ReactECharts
        option={option}
        style={{
          height: isDashboard ? "22vh" : "60vh",
          // width: isDashboard ? "45vw" : "100%",
        }}
        opts={{ renderer: "svg" }}
      />
    </Box>
  );
}
