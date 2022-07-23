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
  PointElement,
  LineElement,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
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
const options_line = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      text: "Revenue Difference",
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
      borderWidth: 1,
    },
  ],
};
const data_line = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export function BarChart() {
  return <Bar data={data_bar} options={options_bar} />;
}
export function DoughnutChart() {
  return <Doughnut data={data_doughnut} options={options_doughnut} />;
}
export function LineChart() {
  return <Line data={data_line} options={options_line} />;
}
