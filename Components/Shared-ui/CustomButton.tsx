import { Button } from "@mui/material";
import CustomText from "./CustomText";
import { colors } from "@/Constants/colors";
import Image from "next/image";

interface CustomButtonProp {
  title: string;
  onClick: () => void;
  flex?: 0 | 1 | "auto";
  type?: number;
  imgSrc?: string | null;
  disabled?:boolean;
}

export default function CustomButton({
  title,
  onClick,
  flex = 0,
  type = 0,
  imgSrc = null,
  disabled=false,
}: CustomButtonProp) {

  const flexValue = flex === "auto" ? "0 0 auto" : flex === 1 ? 1 : 0;

  switch (type) {
    case 1:
      return (
        <Button
          onClick={onClick}
          sx={{
            px: "28px",
            py: "12px",
            borderRadius: "32px",
            flex: flexValue,
            border:1,
            borderColor:colors.gray400,
            cursor:'pointer'
          }}
        >
          <CustomText text={title} color={colors.gray500} fw400 />
        </Button>
      );
      case 2:
      return (
        <Button
          onClick={onClick}
          sx={{
            px: "20px",
            py: "12px",
            borderRadius: "32px",
            flex: flex ? 1 : 0,
            border:1,
            backgroundColor:colors.gray400,
            borderColor:colors.gray600,
            cursor:'pointer'
          }}
        >
          <CustomText text={title} color={colors.white500} p1 fw400 />
        </Button>
      );
    default:
      return (
        <Button
          onClick={onClick}
          sx={{
            backgroundColor: colors.white500,
            px: "28px",
            py: "12px",
            borderRadius: "32px",
            flex: flexValue,
            maxWidth:350,
            cursor:'pointer'
          }}
          disabled={disabled}
        >
         {imgSrc && <Image src={imgSrc} alt='btn Icon' width={24} height={24}/>}
          <CustomText text={title} color={colors.black50} fw400 />
        </Button>
      );
  }
}
