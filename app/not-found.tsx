import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { images } from "../Constants/images";
import { colors } from "../Constants/colors";

export default function NotFound() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: colors.gray900 }}
      height={"100vh"}
    >
      <Stack width={{ xs: 250, md: 550 }} height={{ xs: 250, md: 550 }}>
        <Image
          src={images.notFoundImg}
          alt="Not Found"
          fill
          style={{ objectFit: "contain" }}
        />
      </Stack>
    </Box>
  );
}
