import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import MallSnackbar from "components/ui/mall-snackbar";
import Drawer from "./Drawer";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header />
      <Drawer />
      <ScrollToTop />
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Outlet />
      </Box>
      <MallSnackbar />
    </Box>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
