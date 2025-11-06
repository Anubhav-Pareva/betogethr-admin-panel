import { colors } from "@/Constants/colors";
import { Grid, Stack } from "@mui/material";
import CustomText from "../Shared-ui/CustomText";
import CustomButton from "../Shared-ui/CustomButton";

interface itemStruc {
  id: number;
  name: string;
  connected: boolean;
  mode: string;
  acc_number: string;
}

interface BrokerDetailCardProps {
  item: itemStruc;
}

export default function BrokerDetailCard({ item }: BrokerDetailCardProps) {
  return (
    <Stack p={2}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        sx={{ backgroundColor: colors.violet300, borderRadius: "32px" }}
        justifyContent={"space-between"}
      >
        <Grid container p={4} rowGap={2} columnGap={2}>
          <Grid size={{ xs: 12, sm: 4, md: 12, lg: 4 }}>
            <CustomText text={item.name} fw600 h5 />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4, md: 12, lg: 4 }}
            container
            direction={"row"}
            alignItems={"center"}
            gap={1}
          >
            <CustomText text="Status:" fw600 h5 />
            <CustomText
              text={item.connected ? " Connected" : " Disconnected"}
              color={item.connected ? "green" : "red"}
              fw600
              h5
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 12, lg: 4 }}>
            <CustomText text={`Account:${item.acc_number}`} fw600 h5 />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 12, lg: 4 }}>
            <CustomText text={`Mode:${item.mode}`} fw600 h5 />
          </Grid>
        </Grid>
        <Stack
          p={4}
          sx={{
            borderTop: { xs: `1px solid ${colors.gray400}`, md: 0 },
            borderLeft: { xs: 0, md: `1px solid ${colors.gray400}` },
          }}
          maxWidth={{ xs: "100%", md: 250 }}
          minWidth={{ xs: "100%", md: 200 }}
          justifyContent={"center"}
        >
          <CustomButton
            title={item.connected ? "Disconnected" : "Connected"}
            onClick={() => console.log("pressed")}
            type={2}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
