import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "components/Loadable";
import AuthLayout from "layouts/AuthLayout";
import NotRequireAuth from "./NoAuth";
// import { checkTokenCookie } from "client/grbc";

const AuthLogin = Loadable(lazy(() => import("pages/authentication/Login")));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes: RouteObject = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: (
        <NotRequireAuth>
          <AuthLogin />
        </NotRequireAuth>
      ),
    },
  ],
};

export default AuthRoutes;
