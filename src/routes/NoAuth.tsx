import { Navigate, useLocation } from "react-router-dom";

export default function NotRequireAuth({ children }) {
  const auth = true; //checkTokenCookie();
  let location = useLocation();

  if (auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
