import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Navs from "./Navs";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { checkTokenCookie } from "client/grbc";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ProfileMenu from "./ProfileMenu";
import { getUserData, changeUser } from "redux/userSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { RELATED_CUSTKEY } from "proto/auth/gen/GoAuth_pb";
import Avatar from "@mui/material/Avatar";
import { PersonAddOutlined } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import { logout } from "redux/loginSlice";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { showNotification } from "app/store";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isToken, setIsToken] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, selectedUser } = useAppSelector((state) => state.user);
  const [openList, setOpenList] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();
  let navigate = useNavigate();

  const handleChange = (e?: any, acc?: RELATED_CUSTKEY.AsObject) => {
    showNotification(`تم التبديل الى :  ${acc.custname}`);
    dispatch(changeUser({ selectedUser: acc }));
    setOpen(false);
  };
  const handelSignOut = () => {
    dispatch(logout());
    navigate("/", { replace: true });
    window.location.reload();
  };
  const openProfileMenu = Boolean(anchorEl);
  const handelOpenProfileMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelOpenList = () => {
    setOpenList(!openList);
  };
  useEffect(() => {
    if (matches) {
      setOpen(false);
    }
  }, [matches]);
  useEffect(() => {
    let isLogged = checkTokenCookie();
    if (user) {
      setIsToken(isLogged);
    }
  }, [user]);
  useEffect(() => {
    let token = checkTokenCookie();
    if (token) {
      if (Object.keys(user)?.length < 1) {
        dispatch(getUserData());
      }
    }
  }, [dispatch, user]);
  React.useEffect(() => {
    if (user?.relatedCustkeyList && selectedUser === undefined) {
      dispatch(changeUser({ selectedUser: user?.relatedCustkeyList[0] }));
    }
  }, [dispatch, user?.relatedCustkeyList, selectedUser]);
  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{
          boxShadow: "shadows.z1",
          borderBottom: "1px solid #eee",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Logo />
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                },
                textAlign: "left",
              }}
            >
              <Navs showMyApps={isToken} />
              <Box>
                {!isToken ? (
                  <Link to="/login">
                    <Button
                      variant="contained"
                      disableFocusRipple
                      sx={{
                        border: "2px solid",
                        borderColor: "primary.main",
                        borderRadius: "50px",
                        "&:hover": {
                          border: "2px solid",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      تسجيل الدخول
                    </Button>
                  </Link>
                ) : (
                  <Grid container wrap="nowrap" alignItems="center" spacing={3}>
                    <Grid item>
                      <Box
                      // onClick={handelOpenNotifiMenu}
                      >
                        <Badge color="primary" badgeContent={3} showZero>
                          <NotificationsNoneOutlinedIcon
                            // className={classes.contactUs_icon}
                            color="inherit"
                          />
                        </Badge>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <IconButton
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple
                        onClick={handelOpenProfileMenu}
                      >
                        <Typography
                          color="primary"
                          variant="subtitle1"
                          // className={classes.user_name}
                          component="span"
                          fontWeight={"bold"}
                          textAlign="left"
                        >
                          {user?.firstName} {user?.secondName}
                          <Typography
                            component="div"
                            variant="caption"
                            color="textSecondary"
                            textAlign="left"
                          >
                            رقم الحساب : {selectedUser?.custkey}
                          </Typography>
                        </Typography>
                        <ExpandMoreOutlinedIcon
                          color="action"
                          sx={{
                            marginX: 1.5,
                            backgroundColor: "#eee",
                            borderRadius: 33,
                          }}
                        />
                      </IconButton>
                    </Grid>
                  </Grid>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpen(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <DrawerHeader
          anchor={"right"}
          open={open}
          onClose={() => setOpen(false)}
          variant="persistent"
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <Box
            sx={{
              padding: 2,
            }}
          >
            <Stack
              spacing={1}
              justifyContent="space-between"
              flexWrap={"nowrap"}
              flexDirection="row-reverse"
            >
              <IconButton>
                <CloseIcon onClick={() => setOpen(false)} />
              </IconButton>
            </Stack>
            <Navs
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                padding: 0,
              }}
              onItemClick={() => setOpen(false)}
              showMyApps={isToken}
            />
            {isToken && (
              <Box mt={-2} mb={1}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton onClick={handelOpenList}>
                    <ListItemText
                      disableTypography
                      primary={user?.firstName + user?.secondName}
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        color: (theme) => theme.palette.primary.main,
                      }}
                    />
                    {openList ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openList} timeout="auto" unmountOnExit>
                    <Box>
                      <Box textAlign="center" mt={0.8} mb={0.8}>
                        <Link to="/profile">
                          <Button
                            variant="contained"
                            disableFocusRipple
                            fullWidth
                            onClick={() => setOpen(false)}
                            sx={{
                              border: "2px solid",
                              borderColor: "primary.main",
                              borderRadius: "50px",
                              "&:hover": {
                                border: "2px solid",
                                borderColor: "primary.main",
                              },
                              boxShadow: "none",
                              width: "70%",
                              minWidth: 200,
                            }}
                          >
                            الملف الشخصى
                          </Button>
                        </Link>
                      </Box>
                      <Divider light />
                      <Box mt={1}>
                        <Typography mb={-1} color="textSecondary">
                          حساباتى
                        </Typography>
                        {(user?.relatedCustkeyList || []).length < 1 && (
                          <Typography variant="subtitle2" color="error">
                            لا يوجد لديك ارقام اشتراك
                          </Typography>
                        )}
                        <List>
                          {(user.relatedCustkeyList || []).map(
                            (acc: RELATED_CUSTKEY.AsObject) => {
                              const labelId = `checkbox-list-label-${acc?.custkey}`;
                              return (
                                <ListItem
                                  key={acc?.custkey}
                                  onClick={(e) => handleChange(e, acc)}
                                  sx={{
                                    padding: 0.8,
                                  }}
                                  button
                                >
                                  <ListItemAvatar>
                                    <Avatar alt={acc.custname} />
                                  </ListItemAvatar>
                                  <ListItemTextStyle
                                    id={labelId}
                                    primary={acc.custname}
                                    secondary={"رقم الحساب : " + acc?.custkey}
                                    primaryTypographyProps={{
                                      fontWeight: "medium",
                                      variant: "body2",
                                      marginBottom: 0.5,
                                    }}
                                    secondaryTypographyProps={{
                                      noWrap: true,
                                      fontSize: 12,
                                      lineHeight: "16px",
                                    }}
                                  />
                                  <Box>
                                    <Radio
                                      onChange={(e) => handleChange(e, acc)}
                                      value={acc?.custkey}
                                      name="radio-buttons"
                                      checked={
                                        acc?.custkey === selectedUser?.custkey
                                      }
                                    />
                                  </Box>
                                </ListItem>
                              );
                            }
                          )}
                        </List>
                      </Box>
                      <Link to="/anotherAccount">
                        <Box
                          display={"flex"}
                          mb={1}
                          mt={-1}
                          flexDirection="row"
                          whiteSpace={"pre"}
                          alignItems={"center"}
                          px={1.5}
                        >
                          <PersonAddOutlined
                            fontSize="large"
                            color="secondary"
                          />
                          <Button
                            variant="text"
                            color="secondary"
                            sx={{
                              mt: 0.5,
                            }}
                            onClick={() => setOpen(false)}
                          >
                            {(user?.relatedCustkeyList || []).length < 1
                              ? "اضافة رقم اشتراك"
                              : " اضافة حساب اخر"}
                          </Button>
                        </Box>
                      </Link>
                      <Divider light />
                      <Button
                        disableFocusRipple
                        onClick={handelSignOut}
                        fullWidth
                        color="error"
                        variant="outlined"
                        sx={{
                          border: "2px solid",
                          borderColor: "error.main",
                          borderRadius: "50px",
                          "&:hover": {
                            border: "2px solid",
                            borderColor: "error.main",
                          },
                          boxShadow: "none",
                          width: "100%",
                        }}
                      >
                        تسجيل الخروج
                      </Button>
                    </Box>
                  </Collapse>
                </List>
              </Box>
            )}

            {!isToken && (
              <Link to="/login">
                <Button
                  variant="contained"
                  disableFocusRipple
                  sx={{
                    border: "2px solid",
                    borderColor: "primary.main",
                    borderRadius: "50px",
                    minWidth: 250,
                    "&:hover": {
                      border: "2px solid",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  تسجيل الدخول
                </Button>
              </Link>
            )}
          </Box>
        </DrawerHeader>
        <ProfileMenu
          menu={{
            open: openProfileMenu,
            anchorEl: anchorEl,
            onClose: handleClose,
          }}
          onClickItem={() => setAnchorEl(null)}
        />
      </AppBar>
      {user?.isActive === false && location.pathname !== "/activation" && (
        <Link to="/activation">
          <Typography
            sx={{
              background: "#fff",
              borderBottom: `1px solid #eee`,
              "&:hover": {
                color: (theme: Theme) => theme.palette.error.dark,
              },
            }}
            p={2}
            textAlign={"center"}
            variant="subtitle1"
            color="error"
            fontWeight={"bold"}
          >
            الحساب غير مُفعل - لتفعيل الحساب اضغط هنا !
          </Typography>
        </Link>
      )}
    </>
  );
};
export default Header;

const DrawerHeader = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "100%",
  },
}));
const ListItemTextStyle = styled(ListItemText)(({ theme }) => ({
  "": {},
}));
