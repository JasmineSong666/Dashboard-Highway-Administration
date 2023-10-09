import { Box, useTheme } from "@mui/material";
import ReactECharts from "echarts-for-react";
import { tokens } from "../theme";

export default function PieChart({ isDashboard = "false" }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0.2%",
      left: "center",
      textStyle: {
        color: colors.grey[100],
        fontSize: isDashboard ? "10vh" : "20px",
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 1.5,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 30,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "安全设施" },
          { value: 735, name: "路面状况" },
          { value: 580, name: "追尾" },
          { value: 484, name: "车辆拥堵" },
          { value: 300, name: "恶劣天气" },
        ],
        color: [
          colors.blueAccent[100],
          colors.blueAccent[300],
          colors.blueAccent[500],
          colors.blueAccent[700],
          colors.blueAccent[800],
        ],
      },
    ],
  };

  return (
    <Box>
      <ReactECharts
        option={option}
        style={{ height: isDashboard ? "20vh" : "60vh" }}
        opts={{ renderer: "svg" }}
      />
    </Box>
  );
}
