"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    title: {
      display: true,
      text: "Transactions Amount Per Month",
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
      ticks: {
        callback: function (value, index, values) {
          return value / 1000 + "k"; // Convert value to "k" format
        },
      },
    },
  },
};

const labels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SUP",
  "ACT",
  "NOV",
  "DEC",
];

export default function AreaChart({ areaChartData }) {
  console.log({ areaChartData });
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Transactions Amount Per Month ",
        data: areaChartData || [45, 34, 60, 20, 90, 10, 40],
        borderColor: "rgba(0, 128, 0,0.4)",
        backgroundColor: "rgba(0, 128, 0,0.4)",
        tension: 0.4, // Set tension for smoother curve
      },
    ],
  };
  return <Line options={options} data={data} />;
}
