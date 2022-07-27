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
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  floorNo: number;
  shopId: string;
  shopType: string;
  area: string;
  renterName: string;
  phone: number;
  renterID: string;
  areaRenter: string;
  contractStart: string;
  contractEnd: string;
  tradeName: string;
  email: string;
  password: string;
};

type Props = {};

const MallStructureForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({

    defaultValues: {
      floorNo: 0,
      shopId:'',
      shopType:'',
      area:'',
      renterName:'',
      phone: 0,
      renterID: '',
      areaRenter: '',
      contractStart: '',
      contractEnd: '',
      tradeName: '',
      email: '',
      password: '',
    
    },
    mode: "onChange"

  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const navigate = useNavigate();
  const handelBack = () => {
    navigate(-1);
  };
  return (
    <Paper
      sx={{ boxShadow: { xs: 0, sm: 3 }, p: { xs: 1, sm: 2 } }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
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
              <TextField
                fullWidth
                {...register("floorNo", { required: true })}
                helperText={errors.floorNo && "This field is required"}
                error={errors.floorNo && true}
                name="floorNo"
                type="number"
              />
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
              <TextField
                fullWidth
                {...register("shopId", { required: true })}
                helperText={errors.shopId && "This field is required"}
                error={errors.shopId && true}
                name="shopId"
              />
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
              <TextField
                fullWidth
                {...register("shopType", { required: true })}
                helperText={errors.shopType && "This field is required"}
                error={errors.shopType && true}
                name="shopType"
              />
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
              <TextField
                fullWidth
                {...register("area", { required: true })}
                helperText={errors.area && "This field is required"}
                error={errors.area && true}
                name="area"
              />
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
              <TextField
                fullWidth
                {...register("renterName", { required: true })}
                helperText={errors.renterName && "This field is required"}
                error={errors.renterName && true}
                name="renterName"
              />
              {/* {errors.renterName && <span>This field is required</span>} */}
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
              <TextField
                fullWidth
                type="number"
                {...register("phone", {
                  required: true,
                  minLength: 11,
                  maxLength: 11,
                })}
                helperText={
                  (errors.phone?.type === "required" &&
                    "This field is required") ||
                  (errors.phone?.type === "minLength" && "Min number is 11") ||
                  (errors.phone?.type === "minLength" && "Max number is 11")
                }
                error={errors.phone && true}
                name="phone"
              />
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
              <TextField
                fullWidth
                {...register("renterID", { required: true })}
                helperText={errors.renterID && "This field is required"}
                error={errors.renterID && true}
                name="renterID"
              />
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
              <TextField
                fullWidth
                {...register("areaRenter", { required: true })}
                helperText={errors.areaRenter && "This field is required"}
                error={errors.areaRenter && true}
                name="areaRenter"
              />
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
              <TextField
                fullWidth
                type="date"
                {...register("contractStart", { required: true })}
                helperText={errors.contractStart && "This field is required"}
                error={errors.contractStart && true}
                name="contractStart"
              />
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
              <TextField
                fullWidth
                {...register("tradeName", { required: true })}
                helperText={errors.tradeName && "This field is required"}
                error={errors.tradeName && true}
                name="tradeName"

              />
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
              <TextField
                fullWidth
                type="date"
                {...register("contractEnd", { required: true })}
                helperText={errors.contractEnd && "This field is required"}
                error={errors.contractEnd && true}
                name="contractEnd"

              />
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
              <TextField
                fullWidth
                type="email"
                {...register("email", { required: true })}
                helperText={errors.email && "This field is required"}
                error={errors.email && true}
                name="email"
              />
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
              <TextField
                fullWidth
                type={"password"}
                {...register("password", { required: true })}
                helperText={errors.password && "This field is required"}
                error={errors.password && true}
                name="password"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box display="flex" px={1} sx={{ mt: 6, mb: 6 }}>
        <Button variant="contained" size="large" type="submit">
          Add Shop
        </Button>
      </Box>
    </Paper>
  );
};

export default MallStructureForm;
