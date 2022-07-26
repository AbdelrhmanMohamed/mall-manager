import {
  Box,
  List,
  ListItem,
  Typography,
  Grid,
  FormControl,
  MenuItem,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {};

const Sidebar = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [settingPage, setSettingPage] = React.useState("personal-information");

  const handleChange = (event: SelectChangeEvent) => {
    setSettingPage(event.target.value as string);
    navigate(event.target.value as string);
  };

  return (
    <>
      {matches ? (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item container xs={12}>
            <FormControl fullWidth>
              <Select
                id="demo-simple-select"
                value={settingPage}
                onChange={handleChange}
              >
                <MenuItem value={"personal-information"}>
                  Personal Information
                </MenuItem>
                <MenuItem value={"change-password"}>Password</MenuItem>
                <MenuItem value={"shop-info"}>Shop info</MenuItem>
                <MenuItem value={"theme"}>Theme</MenuItem>
                <MenuItem value={"about"}>About</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ backgroundColor: "#E9F4FC", height: "100%" }}>
          <Box>
            <List
              sx={{ p: { xs: 1, lg: 2 } }}
              component="nav"
              aria-label="mailbox folders"
            >
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
              <Link
                to="theme"
                style={{ textDecoration: "none", color: "#C0C0C0" }}
              >
                <ListItem button sx={{ mt: 2 }}>
                  <Typography variant="body1" component="div">
                    Theme
                  </Typography>
                </ListItem>
              </Link>
              <Link
                to="about"
                style={{ textDecoration: "none", color: "#C0C0C0" }}
              >
                <ListItem button sx={{ mt: 2 }}>
                  <Typography variant="body1" component="div">
                    About
                  </Typography>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
