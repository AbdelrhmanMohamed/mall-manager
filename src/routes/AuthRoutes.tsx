import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "components/Loadable";
import AuthLayout from "layouts/AuthLayout";
import NotRequireAuth from "./NoAuth";
import Login from "pages/authentication/Login";
// import Messages from "pages/messages/Messages";

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <NotRequireAuth>
            <Login />
          </NotRequireAuth>
        ),
      },
    ],
  },
];

export default AuthRoutes;
