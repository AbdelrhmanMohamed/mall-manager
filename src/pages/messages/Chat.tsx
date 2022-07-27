import {
  AttachFileRounded,
  KeyboardArrowLeft,
  MoreVert,
  Send,
  SentimentSatisfiedRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ChatMessages from "./ChatMessages";
import { Search, StyledInputBase } from "./index";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

type Props = {
  setOpen: Function;
};

const Chat = ({ setOpen }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
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
                  {matches ? (
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={() => navigate("/messages")}
                    >
                      <KeyboardArrowLeft sx={{ fontSize: 30 }} />
                    </IconButton>
                  ) : (
                    ""
                  )}
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
              left: { xs: "10px", sm: "32px", md: "53%", lg: "50%", xl: "45%" },
              right: { xs: "0", sm: "0", md: "", lg: "7%", xl: "8%" },
              width: {
                xs: "95vw",
                sm: "92vw",
                md: "45vw",
                lg: "46vw",
                xl: "45vw",
              },
            }}
          >
            <Box
              sx={{
                boxShadow: (theme) => theme.shadows[3],
                borderRadius: "5px",
                width: "100%",
                mr: { xs: 2, lg: 3 },
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
                <Box sx={{ p: { xs: "0px", sm: 1, md: 1, lg: 1, xl: 1 } }}>
                  <IconButton>
                    <AttachFileRounded sx={{ color: "#0068B3" }} />
                  </IconButton>
                  <IconButton>
                    <SentimentSatisfiedRounded sx={{ color: "#0068B3" }} />
                  </IconButton>
                </Box>
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
    </>
  );
};

export default Chat;
