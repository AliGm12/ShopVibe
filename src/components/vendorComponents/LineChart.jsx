import React from "react";
import { Line } from "react-chartjs-2";
export default function LineChart({ chartData }) {
  return (
    <div className="chart-container w-2/4 bg-white rounded-xl mx-4 my-4 px-2">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "how many stars does products have"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
