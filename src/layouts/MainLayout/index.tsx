import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import MallSnackbar from "components/ui/mall-snackbar";
import Drawer, { drawerWidth } from "./Drawer";
import Toolbar from "@mui/material/Toolbar";

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header toggleDrawer={toggleDrawer} />
      <Drawer toggleDrawer={toggleDrawer} open={open} />
      <Box
        component="main"
        sx={{
          py: 4,
          boxSizing: "border-box",
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          px: { sm: 2, xs: 1 },
        }}
      >
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
