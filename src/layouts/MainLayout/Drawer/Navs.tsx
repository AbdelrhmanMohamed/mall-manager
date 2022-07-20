import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MallStructureIcon, ShopIcon } from "components/ui/mall-icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

interface ILists {
  name: string;
  icon: React.ReactNode;
}

const Lists: ILists[] = [
  { name: "Dashboard", icon: <DashboardIcon /> },
  { name: "Mall Structure", icon: <MallStructureIcon /> },
  { name: "Shops", icon: <ShopIcon /> },
  { name: "Mall Map", icon: <MapIcon /> },
  { name: "Messages", icon: <ForumIcon /> },
  { name: "Setting", icon: <SettingsIcon /> },
  { name: "Logout", icon: <LogoutIcon /> },
];

export default function Navs() {
  return (
    <>
      <List>
        {Lists.map((nav, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{nav.icon}</ListItemIcon>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
