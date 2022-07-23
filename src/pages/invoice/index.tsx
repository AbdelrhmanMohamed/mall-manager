import React from "react";
import Paper from "@mui/material/Paper";
import { GridColDef } from "@mui/x-data-grid";
import MallTable from "components/ui/MallTable";
import { TransactionsOfInvoiceRespone } from "proto/ts/api_pb";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export default function Invoice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handelBack = () => {
    navigate(-1);
  };
  return (
    <Paper
      sx={{
        height: 600,
        p: 1.5,
        display: "flex",
        flexDirection: "column",
      }}
      elevation={2}
    >
      <Box display="flex" alignItems={"center"} mb={1.5}>
        <IconButton onClick={handelBack}>
          <ArrowBackIosIcon
            fontSize="small"
            sx={{
              color: (theme) => theme.palette.grey[500],

              fontSize: "1rem",
            }}
          />
        </IconButton>
        <Typography component="span" variant="h6" fontWeight={"bold"} mx={0.5}>
          Transactions Of Invoice {id}
        </Typography>
      </Box>
      <MallTable rows={rows} columns={columns} uniqueKey="orderid" />
    </Paper>
  );
}
const getFieldName = (name: keyof TransactionsOfInvoiceRespone.AsObject) => {
  let c: keyof TransactionsOfInvoiceRespone.AsObject = name;
  return c;
};
const rows: TransactionsOfInvoiceRespone.AsObject[] = [
  {
    orderid: 100001,
    timestamp: "12/1/2022",
    subtotal: 2540,
    product: "Airpods",
    vat: 10,
    grandtotal: 500,
  },
  {
    orderid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    product: "Airpods",
    vat: 10,
    grandtotal: 500,
  },
  {
    orderid: 100003,
    timestamp: "12/1/2022",
    subtotal: 2540,
    product: "Airpods",
    vat: 10,
    grandtotal: 500,
  },
  {
    orderid: 100004,
    timestamp: "12/1/2022",
    subtotal: 2540,
    product: "Airpods",
    vat: 10,
    grandtotal: 500,
  },
  {
    orderid: 100005,
    timestamp: "12/1/2022",
    subtotal: 2540,
    product: "Airpods",
    vat: 10,
    grandtotal: 500,
  },
  {
    orderid: 100006,
    timestamp: "12/1/2022",
    subtotal: 2540,
    product: "Airpods",
    vat: 10,
    grandtotal: 500,
  },
  {
    orderid: 100007,
    timestamp: "12/1/2022",
    subtotal: 2540,
    product: "Airpods",
    vat: 10,
    grandtotal: 500,
  },
];

const columns: GridColDef[] = [
  { field: getFieldName("orderid"), headerName: "Order ID", width: 150 },
  { field: getFieldName("timestamp"), headerName: "Time Stamp", width: 150 },
  { field: getFieldName("subtotal"), headerName: "Subtotal", width: 150 },
  { field: getFieldName("product"), headerName: "Product", width: 150 },
  { field: getFieldName("vat"), headerName: "VAT", width: 150 },
  {
    field: getFieldName("grandtotal"),
    headerName: "Grand Total ",
    width: 150,
  },
];
