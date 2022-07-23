import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  MallStructureIcon,
  ShopIcon,
  LogoutIcon,
} from "components/ui/mall-icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
} from "react-router-dom";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import TMGLogo from "assets/TMGLogo.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  show?: boolean;
}

const Lists: ListItemLinkProps[] = [
  {
    primary: "Mall Structure",
    icon: <MallStructureIcon />,
    to: "/mall-structure",
  },
  { primary: "Shops", icon: <ShopIcon />, to: "/shops" },
  { primary: "Mall Map", icon: <MapIcon />, to: "/map" },
];
const fixedList: ListItemLinkProps[] = [
  { primary: "Messages", icon: <ForumIcon />, to: "/messages", show: true },
  {
    primary: "Setting",
    icon: <SettingsIcon />,
    to: "/setting/personal-information",
    show: true,
  },
];
const dashList: ListItemLinkProps[] = [
  { primary: "Dashboard", icon: <DashboardIcon />, to: "/" },
];
function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;
  const location = useLocation();
  const match = to === location.pathname;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(
        function Link(itemProps, ref) {
          return (
            <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
          );
        }
      ),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? (
          <ListItemIcon
            sx={{
              color: match
                ? "primary.main"
                : (theme) => theme.palette.grey[500],
            }}
          >
            {icon}
          </ListItemIcon>
        ) : null}
        <ListItemText
          sx={{
            color: match ? "primary.main" : (theme) => theme.palette.grey[500],
            "& .MuiListItemText-primary": {
              fontWeight: match && "bold",
              fontSize: "1rem",
            },
          }}
          primary={primary}
        />
        {match && <ListStripe></ListStripe>}
      </ListItem>
    </li>
  );
}

export default function Navs() {
  const isMall = localStorage.getItem("user");
  return (
    <>
      <List
        sx={{
          mt: 2,
        }}
      >
        {dashList.map((nav, index) => (
          <ListItemLink
            key={index}
            to={nav.to}
            primary={nav.primary}
            icon={nav.icon}
          />
        ))}
        {isMall === "mall" &&
          Lists.map((nav, index) => (
            <ListItemLink
              key={index}
              to={nav.to}
              primary={nav.primary}
              icon={nav.icon}
            />
          ))}

        {fixedList.map((nav, index) => (
          <ListItemLink
            key={index}
            to={nav.to}
            primary={nav.primary}
            icon={nav.icon}
          />
        ))}
      </List>
      <Divider />
      <List
        sx={{
          mt: 1,
        }}
      >
        <ListItem
          button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <ListItemIcon
            sx={{
              color: "error.main",
            }}
          >
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "error.main",
              "& .MuiListItemText-primary": {
                fontSize: "1rem",
              },
            }}
            primary={"Logout"}
          />
        </ListItem>
      </List>
      <Box
        mt="auto"
        sx={{
          position: "absolute",
          bottom: 33,
          left: 16,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img height={60} src={TMGLogo} alt="TMGLogo" />
        <Typography
          mt={1.5}
          variant="subtitle2"
          fontWeight={"bold"}
          textAlign="center"
          color="primary.main"
        >
          Talaat Moustafa Group
          <Typography color="primary.main" variant="body2" fontWeight={"bold"}>
            future builders
          </Typography>
        </Typography>
      </Box>
    </>
  );
}

const ListStripe = styled("span")(({ theme }) => ({
  width: 3,
  height: 28,
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  right: 0,
}));
