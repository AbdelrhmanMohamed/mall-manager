import { Navigate, useLocation } from "react-router-dom";

export default function NotRequireAuth({ children }) {
  const auth = localStorage.getItem("user"); //checkTokenCookie();
  let location = useLocation();
  if (auth !== null) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
