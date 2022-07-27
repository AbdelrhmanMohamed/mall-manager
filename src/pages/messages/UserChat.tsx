import React from "react";
import { Box, Divider, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {};

const UserChat = (props: Props) => {
  const navigate = useNavigate();

  const handelRowClick = () => {
    navigate(`/messages/${"1"}`, { replace: true });
  };

  return (
    <Box sx={{ cursor: "pointer" }} onClick={() => handelRowClick()}>
      <Box sx={{ m: "16px 0" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: { xs: 2, md: 1, lg: 2 } }}>
              <Avatar />
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "1rem", lg: "20px" } }}
              >
                Ahmed Adel
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#A9A9A9",
                  fontSize: { xs: "14px", md: "0.8rem" },
                }}
              >
                Have your own question
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            sx={{ color: "#A9A9A9", fontSize: { xs: "14px", md: "0.8rem" } }}
          >
            22/5/22
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default UserChat;
