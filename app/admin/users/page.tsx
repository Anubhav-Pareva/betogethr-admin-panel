'use client'
import { Box } from "@mui/material";
import PageHeader from "../../../Components/Shared-ui/PageHeader";
import GlobalTable from "../../../Components/globaltable";
import { userColumns } from "../../../utils/table-types/user-type";

export default function User() {
  return (
    <Box width={"100%"}>
      <PageHeader title="User" />
      <Box px={1}>
        <GlobalTable
        columns={userColumns}
        rows={[]}/>
      </Box>
    </Box>
  );
}
