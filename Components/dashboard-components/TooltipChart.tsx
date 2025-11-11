import { Box, Stack } from "@mui/material";
import { colors } from "../../Constants/colors";
import CustomText from "../Shared-ui/CustomText";
import { useEffect } from "react";
import {
  AreaData,
  AreaSeries,
  ColorType,
  createChart,
  Time,
} from "lightweight-charts";
import { ToolTipChartData } from "../../Constants/tempData";

export default function TooltipChart() {
  useEffect(() => {
    const chartContainer2 = document.getElementById("chartContainer2");
    chartContainer2.innerHTML = "";
    const chartOptions = {
      layout: {
        textColor: "white",
        background: { type: ColorType.Solid, color: "black" },
      },
      width: chartContainer2.clientWidth,
      height: 300,
    };
    const chart = createChart(chartContainer2, chartOptions);

    chart.applyOptions({
      crosshair: {
        // hide the horizontal crosshair line
        horzLine: {
          visible: false,
          labelVisible: false,
        },
        // hide the vertical crosshair label
        vertLine: {
          labelVisible: false,
        },
      },
      // hide the grid lines
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
    });
    const series = chart.addSeries(AreaSeries, {
      topColor: colors.blue100,
      bottomColor: "rgba(41, 98, 255, 0.28)",
      lineColor: colors.blue100,
      lineWidth: 2,
      crosshairMarkerVisible: false,
    });
    series.priceScale().applyOptions({
      scaleMargins: {
        top: 0.3, // leave some space for the legend
        bottom: 0.25,
      },
    });

    series.setData(ToolTipChartData);

    const toolTipWidth = 80;
    const toolTipHeight = 80;
    const toolTipMargin = 15;

    // Create and style the tooltip html element
    const toolTip = document.createElement("div");
    toolTip.style = `width: 96px; height: 96px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
    toolTip.style.background = "white";
    toolTip.style.color = "black";
    toolTip.style.borderColor = "#2962FF";
    chartContainer2.appendChild(toolTip);

    // update tooltip
    chart.subscribeCrosshairMove((param) => {
      if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > chartContainer2.clientWidth ||
        param.point.y < 0 ||
        param.point.y > chartContainer2.clientHeight
      ) {
        toolTip.style.display = "none";
      } else {
        // time will be in the same format that we supplied to setData.
        // thus it will be YYYY-MM-DD
        const dateStr = param.time;
        toolTip.style.display = "block";
        const data = param.seriesData.get(series) as AreaData<Time>;
        const price = data.value !== undefined ? data.value : null;
        toolTip.innerHTML = `<div style="color: ${"#2962FF"}">BT Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: ${"black"}">
            ${Math.round(100 * price) / 100}
            </div><div style="color: ${"black"}">
            ${dateStr}
            </div>`;

        const coordinate = series.priceToCoordinate(price);
        let shiftedCoordinate = param.point.x - 50;
        if (coordinate === null) {
          return;
        }
        shiftedCoordinate = Math.max(
          0,
          Math.min(
            chartContainer2.clientWidth - toolTipWidth,
            shiftedCoordinate
          )
        );
        const coordinateY =
          coordinate - toolTipHeight - toolTipMargin > 0
            ? coordinate - toolTipHeight - toolTipMargin
            : Math.max(
                0,
                Math.min(
                  chartContainer2.clientHeight - toolTipHeight - toolTipMargin,
                  coordinate + toolTipMargin
                )
              );
        toolTip.style.left = shiftedCoordinate + "px";
        toolTip.style.top = coordinateY + "px";
      }
    });

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
      <CustomText text="Revenue Chart" h1 />

      <Box
        id="chartContainer2"
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={'relative'}
      />
    </Stack>
  );
}
