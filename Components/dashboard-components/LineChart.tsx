import { Box, Stack } from "@mui/material";
import CustomText from "../Shared-ui/CustomText";
import { colors } from "../../Constants/colors";
import { useEffect } from "react";
import { ColorType, createChart, LineSeries } from "lightweight-charts";
import { LineSeriesData1, LineSeriesData2 } from "../../Constants/tempData";

export default function LineChart() {
  useEffect(() => {
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = "";
    const chart = createChart(chartContainer, {
      layout: {
        textColor: "white",
        background: { type: ColorType.Solid, color: "black" },
      },
      width: chartContainer.clientWidth,
      height: 300,
    });
    const lineSeriesOne = chart.addSeries(LineSeries, {
      color: colors.blue100,
    });
    const lineSeriesTwo = chart.addSeries(LineSeries, {
      color: colors.voilet500,
    });


    lineSeriesOne.setData(LineSeriesData1);
    lineSeriesTwo.setData(LineSeriesData2);

    chart.timeScale().fitContent();
  }, []);
  return (
    <Stack
      p={4}
      mt={4}
      sx={{ backgroundColor: colors.black }}
      borderRadius={"32px"}
      gap={4}
    >
      <Stack flexDirection={{xs:'column', sm:'row'}} alignItems={'center'} justifyContent={'space-between'}>
        <CustomText text="User Chart" h1 />
        <Stack gap={1} flexDirection={{xs:'row', sm:'column'}}>
          <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
            <Stack
              width={16}
              height={16}
              borderRadius={"100px"}
              sx={{ backgroundColor: colors.blue100 }}
            />
            <CustomText text="Total User" />
          </Stack>
          <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
            <Stack
              width={16}
              height={16}
              borderRadius={"100px"}
              sx={{ backgroundColor: colors.voilet500 }}
            />
            <CustomText text="Premium User" />
          </Stack>
        </Stack>
      </Stack>
      <Box
        id="chartContainer"
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      />
    </Stack>
  );
}
