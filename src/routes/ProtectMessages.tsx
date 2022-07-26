import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Require_Md({ children }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

  let location = useLocation();
  if (matches) {
    return children;
  } else {
    return <Navigate to="/messages" state={{ from: location }} replace />;
  }
}
