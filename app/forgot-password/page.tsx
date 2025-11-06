"use client";

import { Box } from "@mui/material";
import PublicRoute from "../../Components/Shared-ui/PublicWrapper";
import AuthLayout from "../../layouts/AuthLayout";
import ForgotForm from "../../Components/forms/ForgotForm";

export default function ForgotPassword() {
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
          <ForgotForm />
        </Box>
      </AuthLayout>
    </PublicRoute>
  );
}
