import { Box, List, ListItem, Typography, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <Box sx={{ backgroundColor: "#E9F4FC", height: "100%" }}>
      <Container>
        <List sx={{ p: 2 }} component="nav" aria-label="mailbox folders">
          <ListItem button sx={{ color: "#333" }}>
            <Typography variant="h5" component="div">
              Setting
            </Typography>
          </ListItem>
          <Link
            to="personal-information"
            style={{ textDecoration: "none", color: "#0068B3" }}
          >
            <ListItem button sx={{ mt: 2 }}>
              <Typography variant="body1" component="div">
                Personal Information
              </Typography>
            </ListItem>
          </Link>
          <Link
            to="change-password"
            style={{ textDecoration: "none", color: "#C0C0C0" }}
          >
            <ListItem button sx={{ mt: 2 }}>
              <Typography variant="body1" component="div">
                Password
              </Typography>
            </ListItem>
          </Link>
          <Link
            to="shop-info"
            style={{ textDecoration: "none", color: "#C0C0C0" }}
          >
            <ListItem button sx={{ mt: 2 }}>
              <Typography variant="body1" component="div">
                Shop Info
              </Typography>
            </ListItem>
          </Link>
          <Link to="theme" style={{ textDecoration: "none", color: "#C0C0C0" }}>
            <ListItem button sx={{ mt: 2 }}>
              <Typography variant="body1" component="div">
                Theme
              </Typography>
            </ListItem>
          </Link>
          <Link to="about" style={{ textDecoration: "none", color: "#C0C0C0" }}>
            <ListItem button sx={{ mt: 2 }}>
              <Typography variant="body1" component="div">
                About
              </Typography>
            </ListItem>
          </Link>
        </List>
      </Container>
    </Box>
  );
};

export default Sidebar;
