import { Grid } from "@mui/material";
import Sidebar from "pages/setting/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Setting = () => (
  <Grid container lg={12} sx={{ height: "100%" }}>
    <Grid xs={12} md={3} item>
      <Sidebar />
    </Grid>
    <Grid xs={12} md={9} item>
      <Outlet />
    </Grid>
  </Grid>
);

export default Setting;
