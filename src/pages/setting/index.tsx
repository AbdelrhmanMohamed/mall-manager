import { Grid } from "@mui/material";
import Sidebar from "components/setting/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Setting = (props: Props) => (
  <Grid container lg={12} sx={{ height: "100%" }}>
    <Grid lg={3} item>
      <Sidebar />
    </Grid>
    <Grid lg={9} item>
      <Outlet />
    </Grid>
  </Grid>
);

export default Setting;
