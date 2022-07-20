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
import { BarChart, DoughnutChart } from "./Charts";
import Typography from "@mui/material/Typography";
import MallTable from "components/ui/MallTable";

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Dashboard() {
  return (
    <>
      <Box mb={4}>
        <Filter />
      </Box>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={3}>
          <MallCard
            title="Total Sales"
            color="primary.main"
            amount="25.300 EGP"
            icon={<SalesIcon sx={{ color: "primary.main" }} />}
          />
        </Grid>
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Paper elevation={2} sx={{ p: 1.5 }}>
            <BarChart />
          </Paper>
        </Grid>
        <Grid item xs={3}>
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
        <MallTable />
      </Paper>
      <Box mt={12}></Box>
    </>
  );
}
