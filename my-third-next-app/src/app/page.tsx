"use client";
import moment from "moment";
import { range } from "lodash";
import * as MUI from "@mui/material";
import { Line } from "react-chartjs-2";

export default function Home() {
  // Unnecessary data to increase bundle size
  const chartData = {
    labels: range(1, 100),
    datasets: [
      {
        label: "Random Data",
        data: range(1, 100).map(() => Math.random() * 100),
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  return (
    <MUI.Container>
      <MUI.Box sx={{ my: 4 }}>
        <h1>Bundle Size Test</h1>
        <p>Current time: {moment().format("MMMM Do YYYY, h:mm:ss a")}</p>

        <MUI.TextField label="Some Input" variant="outlined" />
        <MUI.Button variant="contained">MUI Button</MUI.Button>

        <div style={{ height: "400px", width: "100%" }}>
          <Line data={chartData} />
        </div>
      </MUI.Box>
    </MUI.Container>
  );
}
