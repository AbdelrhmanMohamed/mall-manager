import React from "react";
import { Box, Button, FormControl, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { EditTextField } from "./PersonalInformation";

type Props = {};
const ShopInfo = (props: Props) => {
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
                  <Typography sx={{ mr: 5 }}>Shop Name</Typography>
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
                  <Typography sx={{ mr: 5 }}>Shop ID</Typography>
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
                  <Typography sx={{ mr: 5 }}>Shop Area</Typography>
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
                  <Typography sx={{ mr: 5 }}>Shop Type</Typography>
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
                  <Typography sx={{ mr: 5 }}>TMG Percentage</Typography>
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
                  <Typography sx={{ mr: 5 }}>Contract Start</Typography>
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
                  <Typography sx={{ mr: 5 }}>Contract End</Typography>
                  <EditTextField />
                </FormControl>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default ShopInfo;
