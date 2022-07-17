import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "components/Loadable";
import MainLayout from "layouts/MainLayout";
import RequireAuth from "./ProtectRouts";
import ActivationRoutes from "./ActivationRoutes";

const Activation = Loadable(
  lazy(() => import("pages/authentication/register/activation"))
);
const Home = Loadable(lazy(() => import("pages/home")));
const Bills = Loadable(lazy(() => import("pages/bills")));
const Calc = Loadable(lazy(() => import("pages/calc")));
const Reading = Loadable(lazy(() => import("pages/reading")));
const Profile = Loadable(lazy(() => import("pages/authentication/profile")));
const AddAnotherAccount = Loadable(
  lazy(() => import("pages/authentication/addAnotherAccount"))
);
const Complaint = Loadable(lazy(() => import("pages/complaint")));
const Services = Loadable(lazy(() => import("pages/Services")));
const MyApps = Loadable(lazy(() => import("pages/myApps")));
const AppDetails = Loadable(lazy(() => import("pages/myApps/Application")));
const Application = Loadable(lazy(() => import("../pages/application")));
const CalcForm = Loadable(lazy(() => import("../pages/calc/form")));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "activation",
      element: (
        <ActivationRoutes>
          <Activation />
        </ActivationRoutes>
      ),
    },
    {
      path: "bills",
      element: (
        <RequireAuth>
          <Bills />
        </RequireAuth>
      ),
    },
    {
      path: "calc",
      element: (
        <RequireAuth>
          <Calc />
        </RequireAuth>
      ),
    },
    {
      path: "newbill",
      element: (
        <RequireAuth>
          <CalcForm />
        </RequireAuth>
      ),
    },
    {
      path: "reading",
      element: (
        <RequireAuth>
          <Reading />
        </RequireAuth>
      ),
    },
    {
      path: "complint",
      element: <Complaint />,
    },
    {
      path: "services",
      element: <Services />,
      children: [
        {
          path: ":id",
          element: <Services />,
        },
      ],
    },
    {
      path: "myApps",
      element: (
        <RequireAuth>
          <MyApps />
        </RequireAuth>
      ),
    },
    {
      path: "appDetails/:siteCode/:appId/:formNo",
      element: (
        <RequireAuth>
          <AppDetails />
        </RequireAuth>
      ),
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "anotherAccount",
      element: <AddAnotherAccount />,
    },
    {
      path: "/application/:appId/:withCustkey",
      element: <Application />,
    },
  ],
};

export default AuthRoutes;
