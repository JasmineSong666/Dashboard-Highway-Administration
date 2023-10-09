import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

export default function Geography() {
  return (
    <Box m="20px">
      <Header title="养护事件分布" subtitle="各路段养护事件的分布情况" />
      <Box height="75vh">
        <GeographyChart isDashboard={false} />
      </Box>
    </Box>
  );
}
