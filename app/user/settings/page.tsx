"use client";
import ChangePassword from "@/Components/setting-components/ChangePassword";
import EditProfile from "@/Components/setting-components/EditProfile";
import LeftSection from "@/Components/setting-components/LeftSection";
import PageHeader from "@/Components/Shared-ui/PageHeader";
import {  Box } from "@mui/material";
import { useState } from "react";

export default function SettingsPage() {
  const [selected, setSelected] = useState("profile");
  return (
    <Box width={"100%"}>
      <PageHeader title="Settings" />
      <Box display={'flex'} flexDirection={{xs:'column', md:'row'}} gap={'12px'}>
        <LeftSection selected={selected} setSelected={setSelected}/>
        {selected === 'profile' && <EditProfile/>}
        {selected === 'change-password' && <ChangePassword />}
        {selected === 'api-key' && <>profile</>}
        {selected === 'subscription' && <>profile</>}
      </Box>
    </Box>
  );
}
