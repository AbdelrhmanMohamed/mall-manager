import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "assets/logo.svg";
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  Badge,
  InputBase,
  Typography,
  IconButton,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";


type Props ={
  toggleDrawer:Function
}
export default function Header({toggleDrawer}:Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMatches_md = useMediaQuery(theme.breakpoints.down("md"));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Typography>Mall manager -</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderRadius: "0 0 16px 16px",
          flexDirection: { xs: "row-reverse", md: "column" },
        }}
      >
        <Toolbar sx={{ width: { xs: "100%", md: "unset" } }}>
          {isMatches_md ? (
            <Box sx={{ display: { xs: "block", md: "none" }, mr: "auto" }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            ""
          )}

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 0.5 }}
          >
            <img src={Logo} height={50} alt="Madinaty logo" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontSize: { xs: "13px", sm: "20px" } }}
          >
            Madinaty open air mall
          </Typography>
          <Box sx={{ flexGrow: {xs:1} , display: { xs: "none", md: "flex" } }} />

          <Search sx={{ display: { xs: "none", md: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: {xs:1} , display: { xs: "none", md: "flex" } }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              onClick={handleMenuClose}
              sx={{
                display: "flex",
                alginItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar sx={{ w: 4, h: 4 }} />

              <Typography
                sx={{
                  color: (theme) => theme.palette.common.white,
                  ml: 2,
                  fontSize: "14px",
                }}
                variant="body1"
              >
                Mall manager - {"Murad adel"}
              </Typography>
              <KeyboardArrowDownIcon
                sx={{ color: (theme) => theme.palette.common.white, ml: 3 }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
