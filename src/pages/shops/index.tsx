import React from "react";
import SelectBoxes from "./Filters";
import { Grid, Paper } from "@mui/material";
import MallCard from "components/ui/MallCrad";
import MallTable from "components/ui/MallTable";
import { Shop } from "proto/ts/api_pb";
import { GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import {
  SalesIcon,
  RefundsIcon,
  PercentageIcon,
} from "components/ui/mall-icons";
import { LineChart } from "pages/dashboard/Charts";
export default function Shops() {
  const navigate = useNavigate();
  const handelRowClick = (id: any) => {
    navigate(`/shop-stats/${id}`, { replace: true });
  };
  return (
    <>
      <SelectBoxes />
      <Grid container spacing={2} flexWrap="wrap">
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
      <Grid container spacing={2} xs={12} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={2} sx={{ p: 1.5 }}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 1,
              display: "flex",
              flexDirection: "column",
              height: 450,
            }}
            elevation={2}
          >
            <MallTable
              rows={rows}
              columns={columns}
              uniqueKey="shopid"
              onRowDoubleClick={(e) => handelRowClick(e.id)}
              hideToolbar
              pagination
              pageSize={10}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
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
];

const columns: GridColDef[] = [
  { field: getFieldName("shopname"), headerName: "Shop Name", width: 140 },
  { field: getFieldName("area"), headerName: "Area", width: 80 },
  { field: getFieldName("type"), headerName: "Type", width: 80 },
];
