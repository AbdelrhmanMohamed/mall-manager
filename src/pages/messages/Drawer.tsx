import * as React from "react";
import {
  Drawer,
  Box,
  IconButton,
  Container,
  Avatar,
  Typography,
} from "@mui/material";
import { Clear, Download } from "@mui/icons-material";

type Props = {
  open: boolean;
  setOpen: Function;
};
export default function PersistentDrawerRight(props: Props) {
  const { open, setOpen } = props;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: { xs: "100%", lg: "30%" },
            marginTop: "74px",
            backgroundColor: "#E9F4FC",
            left: 0,
            right: 0,
            ml: "auto",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Container>
          <Box sx={{ pt: 3 }}>
            <Box sx={{ width: "100%" }}>
              <IconButton
                onClick={handleDrawerClose}
                sx={{ display: "flex", ml: "auto" }}
                size="large"
              >
                <Clear sx={{ color: "#333" }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ width: "90px", height: "90px" }} />
              <Typography variant="h5" sx={{ color: "#333", mt: 2 }}>
                Murad Adel Zaki
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "14px", color: "#333" }}
              >
                Co-Founder @ Madenaty Mall
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "14px", color: "#333" }}
              >
                +20113572563
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography variant="h5">Shared File</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src="/images/M3.svg" alt="chat" />
                  <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: "14px", color: "#333" }}>
                      Conract.pdf
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "#A9A9A9" }}>
                      12 march 22 . 342 kb
                    </Typography>
                  </Box>
                </Box>
                <IconButton>
                  <Download sx={{ color: "#0068B3" }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src="/images/M2.svg" alt="chat" />
                  <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: "14px", color: "#333" }}>
                      Conract.xcv
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "#A9A9A9" }}>
                      12 march 22 . 342 kb
                    </Typography>
                  </Box>
                </Box>
                <IconButton>
                  <Download sx={{ color: "#0068B3" }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src="/images/M1.svg" alt="chat" />
                  <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: "14px", color: "#333" }}>
                      Conract.doc
                    </Typography>
                    <Typography sx={{ fontSize: "10px", color: "#A9A9A9" }}>
                      12 march 22 . 342 kb
                    </Typography>
                  </Box>
                </Box>
                <IconButton>
                  <Download sx={{ color: "#0068B3" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Drawer>
    </Box>
  );
}
