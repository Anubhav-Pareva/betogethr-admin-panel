import { Stack } from "@mui/material";
import CustomText from "../Shared-ui/CustomText";
import { images } from "../../Constants/images";
import { colors } from "../../Constants/colors";
import Image from "next/image";
import { icons } from "../../Constants/icons";

interface GraphTileProps {
  title: string;
  value: string;
  icon?: string;
  bgColor?: string;
}

export default function GraphTile({
  title,
  value,
  icon,
  bgColor,
}: GraphTileProps) {
  return (
    <Stack
      width={285}
      height={230}
      sx={{
        backgroundImage: `url(${images.graphBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "34px",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Stack
        sx={{ backgroundColor: colors.black_op50 }}
        p={2}
        justifyContent={"center"}
        height={"100%"}
        width={"100%"}
        gap={2}
      >
        {icon && (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width={37}
            height={37}
            borderRadius={"32px"}
            sx={{ backgroundColor: bgColor }}
          >
            <Image src={icon} alt={icon} width={22} height={22} />
          </Stack>
        )}
        <Stack>
          <CustomText text={title} fw400 p1 color={colors.gray300} />
          <CustomText text={value} h4 />
        </Stack>
      </Stack>
    </Stack>
  );
}
