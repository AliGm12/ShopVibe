import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LeftSideBarOfVendor from "./LeftSideBarOfVendor";
import SearchBar from "./SearchBar";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "./BarChart";
import TopProducts from "./TopProducts";
import TotalIncome from "./TotalIncome";
import RecentOrders from "./RecentOrders";
import WarehouseStock from "./WarehouseStock";
import StarsChart from "./StarsChart";

Chart.register(CategoryScale);

export default function VendorPanel() {
  const location = useLocation();
  const data = location.state.data;
  console
    .log
    // data.purchasedItems,
    // data.productPrices,
    // data.productCounts,
    // data.increasedPrice
    // data.productStars,
    // data.totalPrice,
    // data.allProducts
    ();

  const [avgStars, setAvgStars] = useState(0);
  const [productStarsClone, setProductStarsClone] = useState(
    Object.entries(data.productStars)
  );
  useEffect(() => {
    let sum = 0;
    productStarsClone.forEach((val) => {
      sum += Number.parseInt(val[1]);
    });
    setAvgStars(sum / productStarsClone.length);
  }, [data.productStars, productStarsClone]);
    console.log(avgStars,productStarsClone);

  const [chartData, setChartData] = useState({
    labels: data.purchasedItems.map((purchasedI) => {
      if (purchasedI.title.length >= 13) {
        return purchasedI.title.slice(0, 13) + "...";
      } else {
        return purchasedI.title;
      }
    }),
    datasets: [
      {
        barPercentage: 1,
        label: "Product cost",
        data: data.increasedPrice.map((item) => {
          return item.price;
        }),
        backgroundColor: "#c6dbff",
        borderColor: "#3cb1f6",
        borderWidth: 1,
        height: "200px",
      },
    ],
  });
  const [chartData2,setChartData2] = useState({
    labels: data.purchasedItems.map((item) => item.title),
      datasets: [
        {
          label: "Stars per product",
          data: productStarsClone.map((item) => {
            return item[1];
          }),
          backgroundColor: ["#FFB200","#EB5B00","#E4003A","#B60071"],
          borderWidth: 1,
        },
      ],
  })
  return (
    <div className="p-4 px-12 bg-[#f0f1f6] flex 3xl:h-full">
      <LeftSideBarOfVendor />
      <div className="w-full mr-4">
        <SearchBar />
        <div className="grid grid-cols-[750px_1fr] w-full">
          <BarChart chartData={chartData} />
          <TopProducts products={data.allProducts} />
        </div>
        <div className="grid grid-cols-[735px_490px] 3xl:flex">
          <div className="h-full">
            <div className="flex">
              <TotalIncome totalPrice={data.totalPrice} />
              <WarehouseStock
                allProducts={data.allProducts}
                itemCounts={data.productCounts}
              />
            </div>
            <div className="h-full">
              <RecentOrders
                purchasedI={data.purchasedItems}
                itemCounts={data.productCounts}
                itemStars={data.productStars}
              />
            </div>
          </div>
          <StarsChart chartData={chartData2} avgStars={avgStars}/>
        </div>
      </div>
    </div>
  );
} 
