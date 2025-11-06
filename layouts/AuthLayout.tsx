"use client";

import { Box } from "@mui/material";
import { images } from "../Constants/images";
import { colors } from "../Constants/colors";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${images.authBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backgroundColor: colors.voilet500_80,
          height:'100%',
          
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
