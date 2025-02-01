import React from "react";
import { Bar } from "react-chartjs-2";
import { arrowDown } from "../../assets/icons";
export default function LineChart({ chartData }) {
  return (
    <div className="chart-container  h-[350px]  bg-white  rounded-xl mx-4 my-3 px-16">
      <div className="flex justify-between mx-4 mt-4">
        <h2 className="font-bold">All Purchased products</h2>
        <div className="flex items-center text-sm bg-[#f0f1f6] px-2 cursor-pointer rounded-xl">
          <span>Monthly</span>
          <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
        </div>
      </div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
}
