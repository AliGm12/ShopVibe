import { Pie } from "react-chartjs-2";

export default function StarsChart({ chartData, avgStars }) {
  return (
    <div className="chart-container bg-white w-full h-[305px] pb-12 rounded-xl mx-4  pt-4">
      <div className="flex justify-between">
        <h2 className="ml-6 font-bold">Product rates</h2>
        <h2 className="mr-6 font-bold text-green-500">Average rate : {avgStars}</h2>
      </div>
      <Pie
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: false,
              text: "stars",
            },
          },
        }}
      />
    </div>
  );
}
