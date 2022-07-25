import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Button,
  Divider,
  Paper,
  TextField,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { useNavigate } from "react-router-dom";

type Props = {};

const MallStructureForm = (props: Props) => {
  const navigate = useNavigate();
  const handelBack = () => {
    navigate(-1);
  };
  return (
    <Paper sx={{ boxShadow: { xs: 0, sm: 3 }, p: { xs: 1, sm: 2 } }}>
      <Box
        display="flex"
        alignItems={"center"}
        mb={1.5}
        justifyContent="space-between"
      >
        <Box>
          <IconButton onClick={handelBack}>
            <ArrowBackIosIcon
              fontSize="small"
              sx={{
                color: (theme) => theme.palette.grey[500],

                fontSize: "1.1rem",
                top: -1,
                position: "relative",
              }}
            />
          </IconButton>
          <Typography
            component="span"
            variant="h6"
            fontWeight={"bold"}
            mx={0.5}
          >
            THOMAS Shop
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          mb: 2,
        }}
      />
      <Typography variant="h5" mb={1}>
        Shop Info
      </Typography>
      <Grid container spacing={2} mb={3} px={1}>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Floor No</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Shop ID</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth type={"number"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Shop Type</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Area</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        sx={{
          mb: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: { xs: 3, sm: 2 },
        }}
      >
        <Typography variant="h5" mb={1}>
          Renter Info
        </Typography>
        <Button
          variant="text"
          onClick={() => navigate("/messages", { replace: true })}
        >
          <EmailRoundedIcon sx={{ mr: 1 }} />{" "}
          <Typography variant="h5" sx={{ fontSize: { xs: 14, sm: 18 } }}>
            Send Message
          </Typography>
        </Button>
      </Box>
      <Grid container spacing={2} px={1}>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Renter Name</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Phone</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth type="number" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Renter ID</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth type="number" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Area</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Contract Start</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Trade Name</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Contract End</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Email</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth type="email" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            alignItems="center"
            spacing={0.5}
            sx={{ justifyContent: { xs: "space-between", sm: "unset" } }}
          >
            <Grid item xs={12} sm={2.5}>
              <Typography variant="subtitle1">Password</Typography>
            </Grid>
            <Grid item xs={12} sm={9.5}>
              <TextField fullWidth type={"password"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box display="flex" px={1} sx={{ mt: 6, mb: 6 }}>
        <Button variant="contained" size="large">
          Add Shop
        </Button>
        {/* <Button variant="outlined" size="large" sx={{ ml: 3 }}>
          Delete
        </Button> */}
      </Box>
    </Paper>
  );
};

export default MallStructureForm;
