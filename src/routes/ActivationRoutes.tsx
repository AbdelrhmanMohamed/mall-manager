import { checkTokenCookie } from "client/grbc";
import { Navigate, useLocation } from "react-router-dom";

export default function ActivationRoutes({ children }) {
  const auth = checkTokenCookie(); //checkTokenCookie();
  const active = localStorage.getItem("active");
  let location = useLocation();

  if (auth && JSON.parse(active) === false) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
}
