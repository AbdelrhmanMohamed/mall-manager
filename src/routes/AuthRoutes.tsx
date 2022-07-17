import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "components/Loadable";
import AuthLayout from "layouts/AuthLayout";
import NotRequireAuth from "./NoAuth";
// import { checkTokenCookie } from "client/grbc";

const AuthLogin = Loadable(lazy(() => import("pages/authentication/Login")));
const AuthRegister = Loadable(
  lazy(() => import("pages/authentication/register"))
);
const Forgetpass = Loadable(
  lazy(() => import("pages/authentication/Forgetpass"))
);

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
    {
      path: "register",
      element: (
        <NotRequireAuth>
          <AuthRegister />
        </NotRequireAuth>
      ),
    },
    {
      path: "forgetpass",
      element: (
        <NotRequireAuth>
          <Forgetpass />
        </NotRequireAuth>
      ),
    },
  ],
};

export default AuthRoutes;
