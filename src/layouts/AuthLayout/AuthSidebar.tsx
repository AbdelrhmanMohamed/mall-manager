import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function AuthSidebar() {
  return (
    <AuthSide className="flex items-center">
      <Stack
        sx={{ height: "92%", margin: "auto" }}
        justifyContent={"space-between"}
        alignItems="center"
      >
        {/* <Typography fontWeight="400" variant="h4" className="text-3xl">
          مرحبا بك
        </Typography> */}
        <Box
          mt={-5}
          flex="1"
          className="flex justify-center flex-col items-center"
        >
          <img
            src="https://via.placeholder.com/200"
            srcSet="https://via.placeholder.com/200"
            alt={"المنصة الموحدة"}
            loading="lazy"
          />
          <Typography variant="h2" mt={3} fontWeight="normal">
            المنصة الموحدة لعملاء مياه الشرب و الصرف الصحي
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} justifyContent="center" width="100%">
          <IconButton aria-label="FacebookIcon" className="bg-slate-50">
            <FacebookIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="TwitterIcon" className="bg-slate-50">
            <TwitterIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="InstagramIcon" className="bg-slate-50">
            <InstagramIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </AuthSide>
  );
}

const AuthSide = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  padding: theme.spacing(0, 5),
  textAlign: "center",
  backgroundColor: theme.palette.secondary.dark,
  color: "#fff",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 2),
  },
}));
