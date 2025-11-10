import { Box, Stack } from "@mui/material";
import PageHeader from "../../../Components/Shared-ui/PageHeader";
import GraphTile from "../../../Components/dashboard-components/GraphTile";
import { icons } from "../../../Constants/icons";
import { colors } from "../../../Constants/colors";

export default function DashboardHome() {
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
        
      </Box>
    </Box>
  );
}
