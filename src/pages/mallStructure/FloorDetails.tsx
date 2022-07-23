import React from "react";
import Paper from "@mui/material/Paper";
import { GridColDef } from "@mui/x-data-grid";
import MallTable from "components/ui/MallTable";
import { Shop } from "proto/ts/api_pb";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Add } from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function FloorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handelBack = () => {
    navigate("/mall-structure");
  };
  return (
    <Paper
      sx={{
        height: 600,
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
      elevation={2}
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
            Floor {id}
          </Typography>
        </Box>
        <Button
          variant="contained"
          endIcon={<Add />}
          sx={{ ml: 2 }}
          onClick={() => navigate("/add-structure")}
        >
          Add new Shop
        </Button>
      </Box>
      <MallTable rows={rows} columns={columns} uniqueKey="shopid" />
    </Paper>
  );
}
const getFieldName = (name: keyof Shop.AsObject) => {
  let c: keyof Shop.AsObject = name;
  return c;
};
type TShop = Omit<Shop.AsObject, "percentage" | "status">;
interface EShop extends TShop {
  percentage?: string;
  status?: string;
}
const rows: EShop[] = [
  {
    shopid: 1,
    shopname: "THOMAS",
    area: 290,
    percentage: "8%",
    type: "clothes",
    status: "rented",
  },
  {
    shopid: 2,
    shopname: "THOMAS",
    area: 290,
    percentage: "8%",
    type: "clothes",
    status: "rented",
  },
  {
    shopid: 3,
    shopname: "THOMAS",
    area: 290,
    percentage: "8%",
    type: "clothes",
    status: "rented",
  },
  {
    shopid: 4,
    shopname: "THOMAS",
    area: 290,
    percentage: "8%",
    type: "clothes",
    status: "rented",
  },
  {
    shopid: 5,
    shopname: "THOMAS",
    area: 290,
    percentage: "8%",
    type: "clothes",
    status: "rented",
  },
  {
    shopid: 6,
    shopname: "THOMAS",
    area: 290,
    percentage: "8%",
    type: "clothes",
    status: "rented",
  },
  {
    shopid: 7,
    shopname: "THOMAS",
    area: 290,
    percentage: "8%",
    type: "clothes",
    status: "rented",
  },
];

const columns: GridColDef[] = [
  { field: getFieldName("shopid"), headerName: "Shop ID", width: 150 },
  { field: getFieldName("shopname"), headerName: "Shop Name", width: 150 },
  { field: getFieldName("area"), headerName: "Area", width: 150 },
  { field: getFieldName("percentage"), headerName: "Percentage", width: 150 },
  { field: getFieldName("type"), headerName: "Type", width: 150 },
  {
    field: getFieldName("status"),
    headerName: "Status",
    width: 150,
  },
];
