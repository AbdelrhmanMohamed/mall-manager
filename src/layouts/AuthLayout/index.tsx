import React from "react";
import { Outlet } from "react-router-dom";
import MallSnackbar from "components/ui/mall-snackbar";

export default function AuthLayout() {
  return (
    <>
      <Outlet />
      <MallSnackbar />
    </>
  );
}
