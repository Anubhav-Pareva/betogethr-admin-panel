"use client";

import { Box } from "@mui/material";
import PublicRoute from "../Components/Shared-ui/PublicWrapper";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../Components/forms/LoginForm";


export default function Home() {

  return (
    <PublicRoute>
      <AuthLayout>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <LoginForm/>
        </Box>
      </AuthLayout>
    </PublicRoute>
  );
}
