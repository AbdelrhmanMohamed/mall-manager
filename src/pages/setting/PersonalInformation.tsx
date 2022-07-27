import React from "react";
import {
  Box,
  Avatar,
  Button,
  Divider,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  fullName: string;
  jobTitle: string;
  idNumber: number;
  email: string;
  number: number;
  password: string;
};

type Props = {};

const PersonalInformation = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      fullName: "",
      jobTitle: "",
      idNumber: null,
      email: "",
      number: null,
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            mt: 3,
          }}
        >
          <Avatar sx={{ mr: 2 }} />
          <Button sx={{ mr: 2 }} variant="outlined">
            Delete
          </Button>
          <Button sx={{ mr: 2 }} variant="contained" type="submit">
            Upload
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Box component={"form"}>
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
                  <Grid item xs={12} sm={2}>
                    <Typography variant="subtitle1">Full name</Typography>
                  </Grid>
                  <Grid item xs={12} sm={7.5}>
                    <TextField
                      fullWidth
                      type={"text"}
                      {...register("fullName", { required: true })}
                      helperText={errors.fullName && "This field is required"}
                      error={errors.fullName && true}
                      name="fullName"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ m: 0.5 }} />
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
                  <Grid item xs={12} sm={2}>
                    <Typography variant="subtitle1">Job Title</Typography>
                  </Grid>
                  <Grid item xs={12} sm={7.5}>
                    <TextField
                      fullWidth
                      type={"text"}
                      {...register("jobTitle", { required: true })}
                      helperText={errors.jobTitle && "This field is required"}
                      error={errors.jobTitle && true}
                      name="jobTitle"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ m: 0.5 }} />
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
                  <Grid item xs={12} sm={2}>
                    <Typography variant="subtitle1">ID Number</Typography>
                  </Grid>
                  <Grid item xs={12} sm={7.5}>
                    <TextField
                      fullWidth
                      type={"number"}
                      {...register("idNumber", { required: true })}
                      helperText={errors.idNumber && "This field is required"}
                      error={errors.idNumber && true}
                      name="idNumber"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ m: 0.5 }} />
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
                  <Grid item xs={12} sm={2}>
                    <Typography variant="subtitle1">Email</Typography>
                  </Grid>
                  <Grid item xs={12} sm={7.5}>
                    <TextField
                      fullWidth
                      type={"email"}
                      {...register("email", { required: true })}
                      helperText={errors.email && "This field is required"}
                      error={errors.email && true}
                      name="email"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Divider sx={{ m: 0.5 }} />
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
                  <Grid item xs={12} sm={2}>
                    <Typography variant="subtitle1">Number</Typography>
                  </Grid>
                  <Grid item xs={12} sm={7.5}>
                    <TextField
                      fullWidth
                      type={"number"}
                      {...register("number", { required: true })}
                      helperText={errors.number && "This field is required"}
                      error={errors.number && true}
                      name="number"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Divider sx={{ m: 0.5 }} />
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  spacing={1}
                  sx={{
                    justifyContent: { xs: "space-between", sm: "unset" },
                    mb: 2,
                  }}
                >
                  <Grid item xs={12} sm={2}>
                    <Typography variant="subtitle1">Password</Typography>
                  </Grid>
                  <Grid item xs={12} sm={7.5}>
                    <TextField
                      fullWidth
                      type={"password"}
                      {...register("password", { required: true })}
                      helperText={errors.password && "This field is required"}
                      error={errors.password && true}
                      name="password"
                    />
                  </Grid>
                  <Grid item xs={12} sm={2.5}>
                    <Link to="/setting/change-password">Change password</Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Divider sx={{ m: 0.5 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PersonalInformation;
