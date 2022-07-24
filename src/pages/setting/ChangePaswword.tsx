import React from 'react'
import {
  Box,
  Button,
  FormControl,
  Divider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import {EditTextField} from "./PersonalInformation";
type Props = {}

const ChangePaswword = (props: Props) => {
  return (
    <Box>
    <Container maxWidth="lg">

      <Box sx={{ mt: 3 }}>
        <Container>
          <Box component={"form"}>
            <Box sx={{ mt: 2, mb: 2 }}>
              <FormControl
                sx={{
                  maxWidth: "650px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ mr: 5 }}>Old Password</Typography>
                <EditTextField />
              </FormControl>
            </Box>
            <Divider />
            <Box sx={{ mt: 2, mb: 2 }}>
              <FormControl
                sx={{
                  maxWidth: "650px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ mr: 5 }}>New Password</Typography>
                <EditTextField />
              </FormControl>
            </Box>
            <Divider />

            <Box sx={{ mt: 2, mb: 2 }}>
              <FormControl
                sx={{
                  maxWidth: "650px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography sx={{ mr: 5 }}>Re-Enter New Password</Typography>
                <EditTextField />
              </FormControl>
            </Box>

            <Box sx={{ mt: 4, mb: 2 , ml:"auto" ,maxWidth:"580px"}}>
              <FormControl
                sx={{
                width: "400px",
                }}
              >
                <Button  variant="contained" fullWidth>Change Password</Button>
              </FormControl>
            </Box>
            
            </Box>
        </Container>
      </Box>
    </Container>
  </Box>

  )
}

export default ChangePaswword