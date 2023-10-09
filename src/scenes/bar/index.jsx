import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="交通状态" subtitle="车辆通行延误和实时排队长度" />
      <Box height="75vh" diaplay="flex" justifyContent="center">
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
}
