import React from "react";
import { Outlet } from "react-router-dom";
import MasSnackbar from "pages/Snackbar";

export default function AuthLayout() {
  return (
    <>
      <Outlet />
      <MasSnackbar />
    </>
  );
}
