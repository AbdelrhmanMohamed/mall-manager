import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MasSnackbar from "pages/Snackbar";
import { useAppDispatch } from "app/hooks";
import { getAppTypes } from "redux/apptypsSlice";
import { getAppTypesGategory } from "redux/appTypeGategorySlice";
import { APPLICATION_TYPE_REQUEST } from "proto/mobileservice/ts/mobileService_pb";

export default function MainLayout() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    let obj: APPLICATION_TYPE_REQUEST.AsObject = {
      active: true,
      withDraw: false,
      withIcon: false,
    };
    dispatch(getAppTypes(obj));
    dispatch(getAppTypesGategory());
  }, [dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        width: "100%",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box minHeight={"90vh"}>
        <ScrollToTop />
        <Outlet />
      </Box>
      <Footer />
      <MasSnackbar />
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
