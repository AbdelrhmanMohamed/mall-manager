import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import MallSnackbar from "components/ui/mall-snackbar";
import Drawer from "./Drawer";
import Toolbar from "@mui/material/Toolbar";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1, px: 2, py: 4 }}>
        <Toolbar />
        <Outlet />
      </Box>
      <ScrollToTop />
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
