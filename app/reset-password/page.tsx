"use client";

import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import ResetForm from "../../Components/forms/ResetForm";
import PublicRoute from "../../Components/Shared-ui/PublicWrapper";
import AuthLayout from "../../layouts/AuthLayout";


export default function ResetPassword() {
  const params = useSearchParams();
  const token = params.get("token");
  return (
    <PublicRoute>
      <AuthLayout>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <ResetForm token={token}/>
        </Box>
      </AuthLayout>
    </PublicRoute>
  );
}
