import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

export default function Line() {
  return (
    <Box m="20px">
      <Header title="车流量统计" subtitle="高速公路车流量统计" />
      <Box height="75vh">
        <LineChart isDashboard={false} />
      </Box>
    </Box>
  );
}
