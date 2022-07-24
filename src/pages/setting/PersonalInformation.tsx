import React from "react";
import {
  Box,
  Avatar,
  Button,
  FormControl,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

type Props = {};

export const EditTextField = styled(TextField)({
  borderColor: "#333",
  width: "400px",
  "& .MuiOutlinedInput-notchedOutline ": {
    backgroundColor: "#fff !important",
  },
});

const PersonalInformation = (props: Props) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            mt: 3,
          }}
        >
          <Avatar sx={{ mr: 2 }} />
          <Button sx={{ mr: 2 }} variant="outlined">
            Delete
          </Button>
          <Button sx={{ mr: 2 }} variant="contained">
            Upload
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Container>
            <Box component={"form"}>
              <Box sx={{ mt: 2, mb: 2 }}>
                <FormControl
                  sx={{
                    maxWidth: "550px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Typography sx={{ mr: 5 }}>Full Name</Typography>
                  <EditTextField />
                </FormControl>
              </Box>
              <Divider sx={{ m: 0.5 }} />
              <Box sx={{ mt: 2, mb: 2 }}>
                <FormControl
                  sx={{
                    maxWidth: "550px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Typography sx={{ mr: 5 }}>Jop Title</Typography>
                  <EditTextField />
                </FormControl>
              </Box>
              <Divider sx={{ m: 0.5 }} />
              <Box sx={{ mt: 2, mb: 2 }}>
                <FormControl
                  sx={{
                    maxWidth: "550px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Typography sx={{ mr: 5 }}>ID Number </Typography>
                  <EditTextField />
                </FormControl>
              </Box>
              <Divider sx={{ m: 0.5 }} />
              <Box sx={{ mt: 2, mb: 2 }}>
                <FormControl
                  sx={{
                    maxWidth: "550px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Typography sx={{ mr: 5 }}> Email </Typography>
                  <EditTextField />
                </FormControl>
              </Box>
              <Divider sx={{ m: 0.5 }} />
              <Box sx={{ mt: 2, mb: 2 }}>
                <FormControl
                  sx={{
                    maxWidth: "550px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Typography sx={{ mr: 5 }}> Number </Typography>
                  <EditTextField />
                </FormControl>
              </Box>
              <Divider sx={{ m: 0.5 }} />
              <Box sx={{ mt: 2, mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "750px",
                  }}
                >
                  <FormControl
                    sx={{
                      width: "550px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <Typography sx={{ mr: 5 }}> Password </Typography>
                    <EditTextField type="password" />
                  </FormControl>
                  <Box sx={{ ml: 4 }}>
                    <Link to="/setting/change-password">Change password</Link>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ m: 0.5 }} />
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default PersonalInformation;
