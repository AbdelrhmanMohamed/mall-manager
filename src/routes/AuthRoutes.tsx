import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "components/Loadable";
import MainLayout from "layouts/MainLayout";
import RequireAuth from "./ProtectRouts";
import Login from "pages/authentication/Login";
// import Messages from "pages/messages/Messages";

const Dashboard = Loadable(lazy(() => import("pages/dashboard")));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <Dashboard />,
          </RequireAuth>
        ),
      },
    ],
  },
  { path: "login", element: <Login /> },
];

export default AuthRoutes;
