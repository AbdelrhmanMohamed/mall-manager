import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "components/Loadable";
import MainLayout from "layouts/MainLayout";
import RequireAuth from "./ProtectRouts";

const Dashboard = Loadable(lazy(() => import("pages/dashboard")));
const Invoice = Loadable(lazy(() => import("pages/invoice")));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
    },
    {
      path: "invoice/:id",
      element: (
        <RequireAuth>
          <Invoice />
        </RequireAuth>
      ),
    },
  ],
};

export default AuthRoutes;
