import { colors } from "@/Constants/colors";
import { Divider, Stack } from "@mui/material";
import CustomText from "../Shared-ui/CustomText";
import { BrokerList } from "@/Constants/tempData";
import BrokerDetailCard from "./BrokerDetailCard";

export default function ConnectedBrokerListing() {
  return (
    <Stack
      py={2}
      sx={{
        backgroundColor: colors.voilet900,
        borderRadius: "32px",
        border: 1.5,
        borderColor: colors.gray400,
      }}
    >
      <CustomText text="Connected Brokers" fw400 h5 style={{ px: 3 }} />
      {BrokerList.map((item) => {
        return (
          <Stack key={item.id} gap={2} my={2}>
            <BrokerDetailCard item={item}/>
            {item.id !== BrokerList.length && (
              <Divider sx={{ height: 1, backgroundColor: colors.gray400 }} />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
}
