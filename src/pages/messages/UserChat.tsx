import React from "react";
import { Box, Divider, Avatar, Typography } from "@mui/material";

type Props = {};

const UserChat = (props: Props) => {
  return (
    <>
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
                Have your own question
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            fontSize={"14px"}
            sx={{ color: "#A9A9A9" }}
          >
            22/5/22
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default UserChat;
