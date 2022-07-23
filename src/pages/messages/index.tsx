import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Container,
  InputBase,
  Typography,
  IconButton,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import TemporaryDrawer from "components/Messages/Drawer";
import SearchIcon from "@mui/icons-material/Search";
import UserChat from "components/Messages/UserChat";
import ChatMessages from "components/Messages/ChatMessages";
import {
  Send,
  SentimentSatisfiedRounded,
  MoreVert,
  AttachFileRounded,
} from "@mui/icons-material";

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
  color: "#333",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#fff",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export default function Messages() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Grid container lg={12}>
        <Grid item lg={4} sx={{ background: "#E9F4FC" }}>
          <Container sx={{ pt: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ pl: 7 }}
                />
              </Search>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" fontSize={1}>
                Messages
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#0068B3",
                  padding: "8px",
                  marginLeft: 1,
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                123
              </Typography>
            </Box>
            <Box>
              <UserChat />
              <UserChat />
              <UserChat />
              <UserChat />
              <UserChat />
              <UserChat />
            </Box>
          </Container>
        </Grid>
        <Grid item lg={8}>
          <Container>
            <Box>
              <Box>
                <Box sx={{ m: "16px 0" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ mr: 2 }}>
                        <Avatar />
                      </Box>
                      <Box>
                        <Typography variant="h5" fontSize="20px">
                          Ahmed Adel
                        </Typography>
                        <Typography
                          variant="body1"
                          fontSize={"14px"}
                          sx={{ color: "#A9A9A9" }}
                        >
                          online
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="end"
                      onClick={handleDrawerOpen}
                      sx={{ ...(open && { display: "none" }) }}
                    >
                      <MoreVert />
                    </IconButton>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box>
                <ChatMessages sender={true} text="Hello! Welcome to TMG" />
                <ChatMessages
                  sender={true}
                  text="How can I help you?"
                  time={true}
                />
                <ChatMessages sender={false} text="Problem with service" />
                <ChatMessages sender={false} text="Have your own question" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "fixed",
                  bottom: "32px",
                  right: "5%",
                  left: "50%",
                }}
              >
                <Box
                  sx={{
                    boxShadow: (theme) => theme.shadows[3],
                    borderRadius: "5px",
                    width: "100%",
                    mr: 3,
                  }}
                >
                  <Search
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <StyledInputBase
                      placeholder="Write a reply"
                      inputProps={{ "aria-label": "search" }}
                    />
                    <div>
                      <IconButton>
                        <AttachFileRounded sx={{ color: "#0068B3" }} />
                      </IconButton>
                      <IconButton>
                        <SentimentSatisfiedRounded sx={{ color: "#0068B3" }} />
                      </IconButton>
                    </div>
                  </Search>
                </Box>

                <Button
                  variant="contained"
                  endIcon={<Send />}
                  sx={{ p: " 10px 22px" }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
      <TemporaryDrawer open={open} setOpen={setOpen} />
    </>
  );
}
