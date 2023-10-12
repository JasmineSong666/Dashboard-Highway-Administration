import { Box, useTheme } from "@mui/material";
import ReactECharts from "echarts-for-react";
import { tokens } from "../theme";

export default function LineChart({ isDashboard = "false" }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Generate data
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["小型车", "大型车", "营运车辆", "工程车", "特种车辆"],
      top: 1,
      left: "center",
      textStyle: {
        color: colors.grey[100],
        fontSize: isDashboard ? "4vh" : "100vh",
      },
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {},
    //   },
    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "特种车辆",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
        color: [colors.blueAccent[700]],
      },
      {
        name: "工程车",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
        color: [colors.blueAccent[500]],
      },
      {
        name: "营运车辆",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
        color: [colors.blueAccent[300]],
      },
      {
        name: "大型车",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 330, 320],
        color: [colors.greenAccent[300]],
      },
      {
        name: "小型车",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        color: [colors.greenAccent[100]],
      },
    ],
  };

  return (
    <Box display="flex" justifyContent="center">
      <ReactECharts
        option={option}
        style={{
          height: isDashboard ? "25vh" : "60vh",
          width: isDashboard ? "40vw" : "100%",
        }}
        opts={{ renderer: "svg" }}
      />
    </Box>
  );
}
