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

type Props = {};

const PersonalInformation = (props: Props) => {
  return (
    <Box>
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
          <Button sx={{ mr: 2 }} variant="contained">
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
                    <TextField fullWidth type={"text"} />
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
                    <TextField fullWidth type={"text"} />
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
                    <TextField fullWidth type={"number"} />
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
                    <TextField fullWidth type={"email"} />
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
                    <TextField fullWidth type={"number"} />
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
                    <TextField fullWidth type={"password"} />
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
