import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "components/Loadable";
import MainLayout from "layouts/MainLayout";
import RequireAuth from "./ProtectRouts";

const Dashboard = Loadable(lazy(() => import("pages/dashboard")));
const Invoice = Loadable(lazy(() => import("pages/invoice")));
const MallStructure = Loadable(lazy(() => import("pages/mallStructure")));
const FloorDetails = Loadable(
  lazy(() => import("pages/mallStructure/FloorDetails"))
);
const MallStructureForm = Loadable(
  lazy(() => import("pages/mallStructure/Form"))
);

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
    {
      path: "mall-structure",
      element: (
        <RequireAuth>
          <MallStructure />
        </RequireAuth>
      ),
    },
    {
      path: "floor-details/:id",
      element: (
        <RequireAuth>
          <FloorDetails />
        </RequireAuth>
      ),
    },
    {
      path: "add-structure",
      element: (
        <RequireAuth>
          <MallStructureForm />
        </RequireAuth>
      ),
    },
  ],
};

export default AuthRoutes;
