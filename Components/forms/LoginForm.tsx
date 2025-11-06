import { Box, Stack } from "@mui/material";
import BackButton from "../Shared-ui/BackButton";
import { colors } from "../../Constants/colors";
import CustomText from "../Shared-ui/CustomText";
import { Controller, useForm } from "react-hook-form";
import { StyledTextField } from "../Shared-ui/StyledTextField";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "../../rtk/endpoints/authApi";
import { useDispatch } from "react-redux";
import { loginSchema } from "../../Validations/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomLink from "../Shared-ui/CustomLink";
import CustomButton from "../Shared-ui/CustomButton";
import { useEffect } from "react";
import { showAlert } from "../../rtk/feature/alertSlice";
import { loginUser } from "../../rtk/feature/authSlice";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useRouter();
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();
  // ✅ Setup React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs, undefined, Yup.InferType<typeof loginSchema>>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (formData: Yup.InferType<typeof loginSchema>) => {
    try {
      await login(formData as LoginFormInputs).unwrap();
    } catch (err) {
      console.log("Login Error:", err);
    }
  };

  // ✅ Redirect if login successful
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(loginUser(data));
      dispatch(showAlert({ message: "Log-in success", severity: "success" }));
      navigate.push("/user");
    }
  }, [isSuccess, data, dispatch, navigate]);
  return (
    <Stack
      width={{ xs: "95%", sm: 480 }}
      maxWidth={480}
      justifyContent="flex-end"
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
      <Box position="absolute" top={10} left={10} width="48px" height="48px">
        <BackButton />
      </Box>

      <CustomText text="Welcome Back!" fw400 h1 align="center" />

      {/* ✅ Form Start */}
      <form>
        <Stack gap="16px">
          {/* Email Field */}
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

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                label="Password"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          {/* Forgot Password Link */}
          <CustomLink
            title="Forgot Password"
            link="/forgot-password"
            type={2}
            align="right"
          />

          {/* Login Button */}
          <CustomButton
            title={isLoading ? "Logging in..." : "Login"}
            onClick={handleSubmit(handleLogin)}
            disabled={isLoading}
          />

          {/* Signup Link */}
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap="4px"
          >
            <CustomText
              text="Don't have an account?"
              fw400
              p1
              color={colors.gray500}
            />
            <CustomLink title="Sign up" link="/create-account" />
          </Stack>
        </Stack>
      </form>
      {/* ✅ Form End */}
    </Stack>
  );
}
