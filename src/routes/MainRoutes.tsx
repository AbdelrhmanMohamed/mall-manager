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
const Shops = Loadable(lazy(() => import("pages/shops")));
const ShopStatistics = Loadable(lazy(() => import("pages/shops/statistics")));
const Map = Loadable(lazy(() => import("pages/map")));
const Messages = Loadable(lazy(() => import("pages/messages")));
const Chat = Loadable(lazy(() => import("pages/messages/Chat")));
const Setting = Loadable(lazy(() => import("pages/setting")));
const PersonalInformation = Loadable(
  lazy(() => import("pages/setting/PersonalInformation"))
);
const ChangePaswword = Loadable(
  lazy(() => import("pages/setting/ChangePaswword"))
);
const ShopInfo = Loadable(lazy(() => import("pages/setting/ShopInfo")));
const About = Loadable(lazy(() => import("pages/setting/About")));
const Theme = Loadable(lazy(() => import("pages/setting/Theme")));

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
    {
      path: "shops",
      element: (
        <RequireAuth>
          <Shops />
        </RequireAuth>
      ),
    },
    {
      path: "shop-stats/:id",
      element: (
        <RequireAuth>
          <ShopStatistics />
        </RequireAuth>
      ),
    },
    {
      path: "map",
      element: (
        <RequireAuth>
          <Map />
        </RequireAuth>
      ),
    },
    {
      path: "messages",
      element: (
        <RequireAuth>
          <Messages />
        </RequireAuth>
      ),
    },

    {
      path: "messages/1", // should change to :id
      element: (
        <RequireAuth>
          <Chat />
        </RequireAuth>
      ),
    },
    {
      path: "setting/",
      element: (
        <RequireAuth>
          <Setting />
        </RequireAuth>
      ),
      children: [
        {
          index: true,
          path: "personal-information",
          element: (
            <RequireAuth>
              <PersonalInformation />
            </RequireAuth>
          ),
        },
        {
          path: "change-password",
          element: (
            <RequireAuth>
              <ChangePaswword />
            </RequireAuth>
          ),
        },
        {
          path: "shop-info",
          element: (
            <RequireAuth>
              <ShopInfo />
            </RequireAuth>
          ),
        },
        {
          path: "theme",
          element: (
            <RequireAuth>
              <Theme />
            </RequireAuth>
          ),
        },
        {
          path: "about",
          element: (
            <RequireAuth>
              <About />
            </RequireAuth>
          ),
        },
      ],
    },
  ],
};

export default AuthRoutes;
