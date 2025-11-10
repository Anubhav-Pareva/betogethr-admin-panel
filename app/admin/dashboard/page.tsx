'use client'
import { Box, Stack } from "@mui/material";
import PageHeader from "../../../Components/Shared-ui/PageHeader";
import GraphTile from "../../../Components/dashboard-components/GraphTile";
import { icons } from "../../../Constants/icons";
import { colors } from "../../../Constants/colors";
import { AreaSeries, ColorType, createChart } from "lightweight-charts";
import { useEffect } from "react";
import CustomText from "../../../Components/Shared-ui/CustomText";

export default function DashboardHome() {
  useEffect(() => {
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = "";
    const chart = createChart(chartContainer, {
      layout: {
        textColor:'white',
        background: { type: ColorType.Solid, color: "black" },
      },
      width:chartContainer.clientWidth,
      height: 300,
    });
    const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    const data = [
      { value: 0, time: "2025-09-12" },
      { value: 8, time: "2025-09-13" },
      { value: 10, time: '2025-09-14' },
      { value: 20, time: '2025-09-15' },
      { value: 3, time: '2025-09-16' },
      { value: 43, time: '2025-09-17' },
      { value: 41, time: '2025-09-18' },
      { value: 43, time: '2025-09-19' },
      { value: 56, time: '2025-09-20' },
      { value: 46, time: '2025-09-21' },
    ];

    areaSeries.setData(data);

    chart.timeScale().fitContent();
  }, []);
  return (
    <Box width={"100%"}>
      <PageHeader title="Dashboard" />
      <Box px={1}>
        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={{
            xs: "center",
            md: "space-evenly",
            lg: "flex-start",
          }}
          gap={4}
          alignItems={"center"}
        >
          <GraphTile
            title="Active Users"
            value="1 lakh+"
            icon={icons.menuIcon.users}
            bgColor={colors.blue100}
          />
          <GraphTile
            title="Premium Users"
            value="1 k+"
            icon={icons.premium}
            bgColor={colors.green100}
          />
          <GraphTile
            title="Total Download"
            value="1.7 lakh+"
            icon={icons.download}
            bgColor={colors.violet100}
          />
          <GraphTile
            title="Total Revenue"
            value="10 cr+"
            icon={icons.revenue}
            bgColor={colors.yellow100}
          />
        </Stack>
        <Stack p={4} mt={4} sx={{backgroundColor:colors.black}} borderRadius={'32px'} gap={2}>
          <CustomText text="User Chart"  h1/>
        <Box id="chartContainer" width={'100%'}/>
        </Stack>
      </Box>
    </Box>
  );
}
