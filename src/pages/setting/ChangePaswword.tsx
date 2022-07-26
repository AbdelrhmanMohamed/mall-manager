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
type Props = {};

const ChangePaswword = (props: Props) => {
  return (
    <Container maxWidth="md">
      <Box component={"form"} sx={{ mt: 3 }}>
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
                <TextField fullWidth type={"text"} />
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
                <TextField fullWidth type={"password"} />
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
                <TextField fullWidth type={"password"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <Grid
              container
              alignItems="center"
              spacing={0.5}
              sx={{ justifyContent: { xs: "end" }, mb: 2 }}
            >
              <Grid item xs={12} sm={8}>
                <Button variant="contained" fullWidth size="large">
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
