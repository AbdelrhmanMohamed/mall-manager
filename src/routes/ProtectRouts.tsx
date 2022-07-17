import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { checkTokenCookie } from "client/grbc";

export default function RequireAuth({ children }) {
  const auth = checkTokenCookie();
  const active = localStorage.getItem("active") || "false";
  let location = useLocation();
  if (auth && JSON.parse(active)) {
    return children;
  } else if (auth && !JSON.parse(active)) {
    return <Navigate to="/activation" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}
