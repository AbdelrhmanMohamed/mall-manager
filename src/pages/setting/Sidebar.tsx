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
import {  useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
  
} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

type Props = {};
interface ListItemLinkProps {
  primary: string;
  to: string;
  show?: boolean;
}

function ListItemLink(props: ListItemLinkProps) {
  const {  primary, to } = props;
  const location = useLocation();
  const match = `/setting/${to}` === location.pathname;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(
        function Link(itemProps, ref) {
          return (
            <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
          );
        }
      ),
    [to]
  );
console.log(to);

  return (
    <li>
      <ListItem button component={renderLink}>
        
        <ListItemText
          sx={{
            color: match ? "primary.main" : (theme) => theme.palette.grey[500],
            "& .MuiListItemText-primary": {
              fontWeight: match && "bold",
              fontSize: "1rem",
            },
          }}
          primary={primary}
        />
      </ListItem>
    </li>
  );
}

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
              <ListItemLink
              to={"personal-information"}
              primary={"Personal Information"}
            />
              <ListItemLink
              to={"change-password"}
              primary={"Password"}
            />
              <ListItemLink
              to={"shop-info"}
              primary={"Shop Info"}
            />
              <ListItemLink
              to={"theme"}
              primary={"Theme"}
            />
              <ListItemLink
              to={"about"}
              primary={"About"}
            />
            </List>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
