import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="事故统计" subtitle="高速公路事故发生情况统计" />
      <Box height="75vh">
        <PieChart isDashboard={false} />
      </Box>
    </Box>
  );
}
