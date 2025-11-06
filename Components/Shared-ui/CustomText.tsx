import { SxProps, Typography } from "@mui/material";
import { colors } from "../../Constants/colors";

interface CustomTextProp {
  /**font size */
  h1?: boolean;
  h5?:boolean;
  h6?:boolean
  p1?: boolean;
  p2?: boolean;
  p3?: boolean;
  /**Font Weight */
  fw200?: boolean;
  fw300?: boolean;
  fw400?: boolean;
  fw600?: boolean;
  fw700?: boolean;
  /**colors */
  color?: string;
  style?: SxProps;
  align?: "left" | "center" | "right";
  text: string;
}

export default function CustomText({
  h1 = false,
  h5 = false,
  h6 = false,
  p1 = false,
  p2 = false,
  p3 = false,
  fw200 = false,
  fw300 = false,
  fw400 = false,
  fw600 = false,
  fw700 = false,
  text,
  color = colors.white500,
  style = {},
  align = "left",
}: CustomTextProp) {
  const fontSize = (): string => {
    if (h1) return "32px";
    if(h5) return "20px";
    if(h6) return '16px';
    if (p1) return "16px";
    if (p2) return "14px";
    if (p3) return "12px";
    return "16px";
  };
  const fontWeight = () => {
    if (fw200) return "200";
    if (fw300) return "300";
    if (fw400) return "400";
    if (fw600) return "600";
    if (fw700) return "700";
    return "500";
  };
  const component = h1
    ? "h1"
    : h5
    ? "h5"
    : h6
    ? "h6"
    : p1 || p2 || p3
    ? "p"
    : "span";
  return (
    <Typography
      component={component}
      color={color}
      textAlign={align}
      sx={{ fontWeight: fontWeight(), fontSize: fontSize(), ...style } }
    >
      {text}
    </Typography>
  );
}
