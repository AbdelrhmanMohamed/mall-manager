import React, { useEffect , useState } from "react";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import MallSnackbar from "components/ui/mall-snackbar";
import Drawer from "./Drawer";
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
      <Box component="main" sx={{ flexGrow: 1, px: {xs:1 , lg:2}, py: 4 }}>
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
