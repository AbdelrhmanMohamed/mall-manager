import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, InputBase } from "@mui/material";
import TemporaryDrawer from "pages/messages/Drawer";
import UserChatList from "./UserChatList";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Chat from "./Chat";

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#333",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "115px",
      marginLeft: "8px",

    },
  },
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(0),
  },
}));

export default function Messages() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <Grid item xs={12}>
          <UserChatList />
        </Grid>
      ) : (
        <Grid container sm={12}>
          <Grid item xs={12} md={4} xl={3} sx={{ background: "#E9F4FC" }}>
            <UserChatList />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            xl={9}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Chat setOpen={setOpen} />
          </Grid>
        </Grid>
      )}
      <TemporaryDrawer open={open} setOpen={setOpen} />
    </>
  );
}
