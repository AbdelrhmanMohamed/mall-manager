import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const auth = localStorage.getItem("user"); //checkTokenCookie();
  let location = useLocation();
  if (auth !== null) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}
