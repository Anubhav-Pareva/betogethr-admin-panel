'use client'
import { Box } from "@mui/material";
import PageHeader from "../../../Components/Shared-ui/PageHeader";
import LineChart from "../../../Components/dashboard-components/LineChart";
import TooltipChart from "../../../Components/dashboard-components/TooltipChart";
import GraphGroup from "../../../Components/dashboard-components/GraphGroup";

export default function DashboardHome() {
  return (
    <Box width={"100%"}>
      <PageHeader title="Dashboard" />
      <Box px={1}>
        <GraphGroup/>
        <LineChart/>
        <TooltipChart/>
      </Box>
    </Box>
  );
}
