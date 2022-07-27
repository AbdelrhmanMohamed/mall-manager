import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  oldPassword: string;
  newPassword: string;
  reEnterNewPassword: string;
};

const ChangePaswword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      reEnterNewPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container maxWidth="md">
      <Box component={"form"} sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={0.5} mb={3} xs={12}>
          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              spacing={0.5}
              sx={{
                justifyContent: { xs: "space-between", sm: "unset" },
                mb: 2,
              }}
            >
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">Old password</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  type={"text"}
                  {...register("oldPassword", { required: true })}
                  helperText={errors.oldPassword && "This field is required"}
                  error={errors.oldPassword && true}
                  name="oldPassword"
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              spacing={0.5}
              sx={{
                justifyContent: { xs: "space-between", sm: "unset" },
                mb: 2,
              }}
            >
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">New Password</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  type={"password"}
                  {...register("newPassword", { required: true })}
                  helperText={errors.newPassword && "This field is required"}
                  error={errors.newPassword && true}
                  name="newPassword"
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider />

          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              spacing={0.5}
              sx={{
                justifyContent: { xs: "space-between", sm: "unset" },
                mb: 2,
              }}
            >
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1">
                  Re-Enter New Password{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  type={"password"}
                  {...register("reEnterNewPassword", { required: true })}
                  helperText={
                    errors.reEnterNewPassword && "This field is required"
                  }
                  error={errors.reEnterNewPassword && true}
                  name="reEnterNewPassword"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              spacing={0.5}
              sx={{ justifyContent: { xs: "end" }, mb: 2 }}
            >
              <Grid item xs={12} sm={8}>
                <Button
                  variant="contained"
                  type={"submit"}
                  fullWidth
                  size="large"
                >
                  Change Password
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ChangePaswword;
