import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const options_bar = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sales Stats",
    },
  },
};
const options_doughnut = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      display: true,
    },
    title: {
      display: false,
      text: "Sales Stats",
    },
  },
};

const data_bar = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#0068B3",
    },
    {
      label: "Orders",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#E27E1B",
    },
  ],
};
const data_doughnut = {
  labels: ["iPhone (60%)", "Airpods (30%)", "MacBook (10%)"],
  datasets: [
    {
      label: "# of Votes",
      data: [7, 4, 1],
      backgroundColor: ["#0068B3", "#E27E1B", "#0BB300"],
      // borderColor: [
      //   "rgba(255, 99, 132, 1)",
      //   "rgba(54, 162, 235, 1)",
      //   "rgba(255, 206, 86, 1)",
      // ],
      borderWidth: 1,
    },
  ],
};
export function BarChart() {
  return <Bar data={data_bar} options={options_bar} />;
}
export function DoughnutChart() {
  return <Doughnut data={data_doughnut} options={options_doughnut} />;
}
