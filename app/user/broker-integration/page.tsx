"use client";
import ConnectedBrokerListing from "@/Components/broker-components/ConnectedBrokerListing";
import CustomButton from "@/Components/Shared-ui/CustomButton";
import CustomTabBar from "@/Components/Shared-ui/CustomTabBar";
import PageHeader from "@/Components/Shared-ui/PageHeader";
import { icons } from "@/Constants/icons";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

export default function BrokerIntegration() {
  const [selected, setSelected] = useState("Connected Brokers");
  return (
    <Box width={"100%"}>
      <PageHeader title="Broker Integration" />
      <Box px={1} display={'flex'} flexDirection={'column'} gap={2}>
        <Stack
          width={"100%"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
          justifyContent={"space-between"}
        >
          <CustomTabBar
            tabs={["Connected Brokers", "Trading Settings"]}
            onChange={setSelected}
          />
          <CustomButton
            title="Add New Broker"
            imgSrc={icons.plusCircular}
            onClick={() => console.log("pressed")}
            flex={1}
          />
        </Stack>
        {selected === 'Connected Brokers' ? <ConnectedBrokerListing /> : <>Trading Settings</>}
      </Box>
    </Box>
  );
}
