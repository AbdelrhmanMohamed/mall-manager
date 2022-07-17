import React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import { RELATED_CUSTKEY } from "proto/auth/gen/GoAuth_pb";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { PersonAddOutlined } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Radio from "@mui/material/Radio";
import { changeUser } from "redux/userSlice";
import { logout } from "redux/loginSlice";
import { showNotification } from "app/store";

interface Props {
  menu: MenuProps;
  onClickItem?: () => void;
}

export default function ProfileMenu({ menu, onClickItem }: Props) {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const currentUser: RELATED_CUSTKEY.AsObject = useAppSelector(
    (state) => state.user.selectedUser
  );
  const { user } = useAppSelector((state) => state.user);
  const handleChange = (e?: any, acc?: RELATED_CUSTKEY.AsObject) => {
    showNotification(`تم التبديل الى :  ${acc.custname}`);
    dispatch(changeUser({ selectedUser: acc }));
    onClickItem();
  };
  const handelSignOut = () => {
    dispatch(logout());
    navigate("/", { replace: true });
    window.location.reload();
  };
  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-menu",
      }}
      TransitionComponent={Fade}
      transitionDuration={300}
      {...menu}
    >
      <Box p={1} mt={1}>
        <Box textAlign={"center"} mb={1}>
          <Typography
            mb={0.5}
            variant="subtitle1"
            component="span"
            fontWeight={"bold"}
          >
            {currentUser?.custname}
          </Typography>
          {(user?.relatedCustkeyList || []).length > 0 && (
            <Typography variant="subtitle2" color="textSecondary">
              رقم الحساب: {currentUser?.custkey}
            </Typography>
          )}
        </Box>
        <Box
          onClick={() => {
            menu.anchorEl = null;
          }}
          textAlign="center"
          mb={1}
          mt={1}
        >
          <Link to="/profile">
            <Button
              variant="contained"
              disableFocusRipple
              fullWidth
              onClick={() => onClickItem()}
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
                        checked={acc?.custkey === currentUser?.custkey}
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
            <PersonAddOutlined fontSize="large" color="secondary" />
            <Button
              variant="text"
              color="secondary"
              sx={{
                mt: 0.5,
              }}
              onClick={() => onClickItem()}
            >
              {(user?.relatedCustkeyList || []).length < 1
                ? "اضافة رقم اشتراك"
                : " اضافة حساب اخر"}
            </Button>
          </Box>
        </Link>
        <Divider light />
        <Box mt={1} px={1}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handelSignOut}
          >
            <Typography variant="body1">تسجيل الخروج</Typography>
          </Button>
        </Box>
      </Box>
    </Menu>
  );
}

const ListItemTextStyle = styled(ListItemText)(({ theme }) => ({
  "": {},
}));
