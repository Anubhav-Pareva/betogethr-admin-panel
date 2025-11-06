import { Stack } from "@mui/material";
import CustomText from "../Shared-ui/CustomText";
import { Controller, useForm } from "react-hook-form";
import { StyledTextField } from "../Shared-ui/StyledTextField";
import CustomButton from "../Shared-ui/CustomButton";
import { colors } from "../../Constants/colors";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { resetPasswordSchema } from "../../Validations/ResetPasswordSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

type ResetFormInputsReq = { password: string; confirmPassword: string };

interface ResetFormProps{
    token:string;
}

export default function ResetForm({token}:ResetFormProps){
    const dispatch = useDispatch();
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<ResetFormInputsReq, undefined, Yup.InferType<typeof resetPasswordSchema>>({
        resolver: yupResolver(resetPasswordSchema),
        defaultValues: {
          password: "",
          confirmPassword: "",
        },
      });
    
      const onSubmit = async (data: Yup.InferType<typeof resetPasswordSchema>) => {
        try {
        //   if (!token) {
        //     dispatch(
        //       showAlert({
        //         message: "Token missing. Please check your email link again.",
        //         severity: "error",
        //       })
        //     );
        //     router.replace("/");
        //     return;
        //   }
    
        //   const payload = {
        //     new_password: data.password,
        //     reset_token: token,
        //   };
    
        //   await resetPassword(payload);
        console.log(data, token, dispatch);
        router.replace("/");
        } catch (err) {
          console.error(err);
        }
      };
    
    //   useEffect(() => {
    //     if (isSuccess) {
    //       dispatch(
    //         showAlert({ message: "Password reset success", severity: "success" })
    //       );
    //       router.replace("/");
    //     }
    //   }, [isSuccess, dispatch, router]);
    return(
        <Stack
            width={{ xs: "95%", sm: 480 }}
            height={377}
            maxWidth={{ xs: "95%", sm: 480 }}
            maxHeight={377}
            justifyContent={"flex-end"}
            sx={{
              backgroundColor: colors.voilet900,
              borderRadius: "32px",
              p: { xs: "32px", sm: "64px" },
              border: "1.5px solid",
              borderColor: colors.gray700,
              gap: { xs: "24px", sm: "42px" },
            }}
          >
            <CustomText text="Reset Password" fw400 h1 align="center" />

            <form>
              <Stack gap={"16px"}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <StyledTextField
                      {...field}
                      label="New Password"
                      type="password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                />

                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <StyledTextField
                      {...field}
                      label="Confirm Password"
                      type="password"
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword?.message}
                    />
                  )}
                />

                <CustomButton
                  title="Reset Password"
                  onClick={handleSubmit(onSubmit)}
                //   disabled={isLoading}
                />
              </Stack>
            </form>
          </Stack>
    )
}