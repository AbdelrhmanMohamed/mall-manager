import React from "react";
import Filter from "./Filter";
import Box from "@mui/material/Box";
import MallCard from "components/ui/MallCrad";
import Grid from "@mui/material/Grid";
import {
  SalesIcon,
  RefundsIcon,
  PercentageIcon,
} from "components/ui/mall-icons";
import Paper from "@mui/material/Paper";
import { BarChart, DoughnutChart, LineChart } from "./Charts";
import Typography from "@mui/material/Typography";
import MallTable from "components/ui/MallTable";
import { GridColDef } from "@mui/x-data-grid";
import { ShopInvoicResponse } from "proto/ts/api_pb";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Dashboard() {
  let match = localStorage.getItem("user");
  const navigate = useNavigate();
  const handelRowClick = (id: any) => {
    navigate(`/invoice/${id}`, { replace: true });
  };
  const columns: GridColDef[] = [
    { field: getFieldName("invoiceid"), headerName: "Invoice ID", width: 150 },
    { field: getFieldName("timestamp"), headerName: "Time Stamp", width: 150 },
    { field: getFieldName("subtotal"), headerName: "Subtotal", width: 150 },
    { field: getFieldName("services"), headerName: "Services", width: 150 },
    { field: getFieldName("vat"), headerName: "VAT", width: 150 },
    {
      field: getFieldName("grandtotal"),
      headerName: "Grand Total ",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      filterable: false,
      resizable: false,
      editable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          navigate(`/invoice/${params.id}`, { replace: true });
        };

        return (
          <Button onClick={onClick}>
            <KeyboardArrowRightIcon
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            />
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Box mb={4}>
        <Filter />
      </Box>
      <Grid container spacing={2} mb={4}>
        <Grid item lg={3} sm={6} xs={12}>
          <MallCard
            title="Total Sales"
            color="primary.main"
            amount="25.300 EGP"
            icon={<SalesIcon sx={{ color: "primary.main" }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <MallCard
            title="Refunds"
            color="chart.orange"
            amount="4,000"
            icon={
              <RefundsIcon
                sx={{ color: (theme: any) => theme.palette.chart.orange }}
              />
            }
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <MallCard
            title="TMG Percentage"
            color="chart.green"
            amount="20 %"
            icon={
              <PercentageIcon
                sx={{ color: (theme: any) => theme.palette.chart.green }}
              />
            }
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <MallCard
            title="TMG Amount"
            color="chart.violet"
            amount="2,000"
            icon={
              <PercentageIcon
                sx={{ color: (theme: any) => theme.palette.chart.violet }}
              />
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} flexWrap="wrap">
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <Paper elevation={2} sx={{ p: 1.5 }}>
            {match === "mall" ? <LineChart /> : <BarChart />}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={6} lg={3}>
          <Paper sx={{ p: 1.5 }} elevation={2}>
            <Typography variant="h6" fontWeight={"bold"}>
              Popular Categories
              <Box mt={1}>
                <DoughnutChart />
              </Box>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Paper
        sx={{
          height: 600,
          mt: 3,
          p: 1.5,
          display: "flex",
          flexDirection: "column",
        }}
        elevation={2}
      >
        <Box p={2}>
          <Typography variant="h6" fontWeight="bold">
            Invoices
          </Typography>
        </Box>
        <MallTable
          rows={rows}
          columns={columns}
          uniqueKey="invoiceid"
          onRowDoubleClick={(e) => handelRowClick(e.id)}
          editMode="row"
        />
      </Paper>
      <Box mt={12}></Box>
    </>
  );
}
const getFieldName = (name: keyof ShopInvoicResponse.AsObject) => {
  let c: keyof ShopInvoicResponse.AsObject = name;
  return c;
};
const rows: ShopInvoicResponse.AsObject[] | any[] = [
  {
    invoiceid: 100001,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
    action: "",
  },
  {
    invoiceid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100003,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100004,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100005,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100006,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100007,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
];
