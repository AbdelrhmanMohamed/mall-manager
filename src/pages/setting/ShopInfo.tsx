import React from "react";
import { Box, Divider, Typography, Grid ,Container, TextField } from "@mui/material";

type Props = {};
const ShopInfo = (props: Props) => {
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
              <Typography variant="subtitle1">Shop Name</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField fullWidth type={"text"} value="Thomas" disabled />
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
              <Typography variant="subtitle1">Shop Id</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField fullWidth type={"text"} value="Ba342" disabled   />
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
              Shop Area
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField fullWidth type={"text"} value="125.00" disabled />
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
              Shop Type
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField fullWidth type={"text"} value="Clothes" disabled />
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
              TMG Percentage
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField fullWidth type={"text"} value="20%" disabled />
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
              Contract Start
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField fullWidth type={"text"} value="25/1/2022" disabled />
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
              Contract end
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField fullWidth type={"text"} value="26/1/2029" disabled />
            </Grid>
          </Grid>
        </Grid>
        <Divider />

      </Grid>
    </Box>
  </Container>

  );
};

export default ShopInfo;
