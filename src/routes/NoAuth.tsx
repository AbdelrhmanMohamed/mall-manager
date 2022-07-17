import { checkTokenCookie } from "client/grbc";
import { Navigate, useLocation } from "react-router-dom";

export default function NotRequireAuth({ children }) {
  const auth = checkTokenCookie(); //checkTokenCookie();
  const active = localStorage.getItem("active");
  let location = useLocation();

  if (auth && JSON.parse(active)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
