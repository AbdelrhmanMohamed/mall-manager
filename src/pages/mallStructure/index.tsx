import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import MallCard from "components/ui/MallCrad";
import MallTable from "components/ui/MallTable";
import { Layers, Store } from "@mui/icons-material";
import { Areas } from "proto/ts/api_pb";
import { GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function MallStructure() {
  const navigate = useNavigate();
  const handelRowClick = (id: any) => {
    navigate(`/floor-details/${id}`, { replace: true });
  };
  const columns: GridColDef[] = [
    { field: getFieldName("floornumber"), headerName: "Floor Number" },
    {
      field: getFieldName("numberofshops"),
      headerName: "Number Of Shops",
      width: 180,
    },
    { field: getFieldName("active"), headerName: "Active" },
    { field: getFieldName("closed"), headerName: "Closed" },
    { field: getFieldName("integrated"), headerName: "Integrated" },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      filterable: false,
      resizable: false,
      editable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          navigate(`/floor-details/${params.id}`, { replace: true });
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
    <Box>
      <Grid container spacing={2} mb={3}>
        <Grid item lg={3} sm={6} xs={12}>
          <MallCard
            title="Total Areas"
            color="primary.main"
            amount="10"
            icon={<Layers sx={{ color: "primary.main" }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <MallCard
            title="Total Shops"
            color="chart.orange"
            amount="40"
            icon={
              <Store
                sx={{ color: (theme: any) => theme.palette.chart.orange }}
              />
            }
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <MallCard
            title="Rented"
            color="chart.green"
            amount="10"
            icon={
              <Store
                sx={{ color: (theme: any) => theme.palette.chart.green }}
              />
            }
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <MallCard
            title="Integrated"
            color="chart.violet"
            amount="20"
            icon={
              <Store
                sx={{ color: (theme: any) => theme.palette.chart.violet }}
              />
            }
          />
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
            Areas
          </Typography>
        </Box>
        <MallTable
          rows={rows}
          columns={columns}
          uniqueKey="floornumber"
          onRowDoubleClick={(e) => handelRowClick(e.id)}
        />
      </Paper>
    </Box>
  );
}

const getFieldName = (name: keyof Areas.AsObject) => {
  let c: keyof Areas.AsObject = name;
  return c;
};
const rows: Areas.AsObject[] = [
  {
    floornumber: 1,
    numberofshops: 20,
    active: 16,
    closed: 4,
    integrated: 7,
  },
  {
    floornumber: 2,
    numberofshops: 20,
    active: 16,
    closed: 4,
    integrated: 7,
  },
  {
    floornumber: 3,
    numberofshops: 20,
    active: 16,
    closed: 4,
    integrated: 7,
  },
  {
    floornumber: 4,
    numberofshops: 20,
    active: 16,
    closed: 4,
    integrated: 7,
  },
  {
    floornumber: 5,
    numberofshops: 20,
    active: 16,
    closed: 4,
    integrated: 7,
  },
  {
    floornumber: 6,
    numberofshops: 20,
    active: 16,
    closed: 4,
    integrated: 7,
  },
  {
    floornumber: 7,
    numberofshops: 20,
    active: 16,
    closed: 4,
    integrated: 7,
  },
];
