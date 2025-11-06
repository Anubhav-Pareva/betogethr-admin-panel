import { Box, Stack } from "@mui/material";
import { colors } from "../../Constants/colors";
import BackButton from "../Shared-ui/BackButton";
import CustomText from "../Shared-ui/CustomText";
import { Controller, useForm } from "react-hook-form";
import { StyledTextField } from "../Shared-ui/StyledTextField";
import CustomButton from "../Shared-ui/CustomButton";
import CustomLink from "../Shared-ui/CustomLink";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotSchema } from "../../Validations/ForgotSchema";

export default function ForgotForm() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [userEmail, setEmail] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (data: { email: string }) => {
    try {
      setEmail(data.email);
      console.log(dispatch);
      //   await forgotPassword(data);
      router.push(
        `/otp-verification?type=${"forgot"}&email=${userEmail}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  //   useEffect(() => {
  //     if (isSuccess) {
  //       dispatch(
  //         showAlert({ message: "OTP sent successfully", severity: "success" })
  //       );
  //       router.push(
  //         `/otp-verification?token=${
  //           data.verification_token
  //         }&type=${"forgot"}&email=${userEmail}`
  //       );
  //     }
  //   }, [isSuccess]);
  return (
    <Stack
      width={{ xs: "95%", sm: 480 }}
      height={377}
      maxWidth={{ xs: "95%", sm: 480 }}
      maxHeight={377}
      justifyContent={"flex-end"}
      sx={{
        position: "relative",
        backgroundColor: colors.voilet900,
        borderRadius: "32px",
        p: { xs: "32px", sm: "64px" },
        border: "1.5px",
        borderColor: colors.gray700,
        gap: { xs: "24px", sm: "42px" },
      }}
    >
      <Box
        position={"absolute"}
        top={10}
        left={10}
        width={"48px"}
        height={"48px"}
      >
        <BackButton />
      </Box>
      <CustomText text="Forgot Password" fw400 h1 align="center" />
      <form>
        <Stack gap={"16px"}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                label="Email"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <CustomButton
            title="Check your inbox"
            onClick={handleSubmit(onSubmit)}
            //disabled={isLoading}
          />
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"4px"}
          >
            <CustomText
              text="Have your password?"
              fw400
              p1
              color={colors.gray500}
            />
            <CustomLink title="Signin" link="/" />
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
}
