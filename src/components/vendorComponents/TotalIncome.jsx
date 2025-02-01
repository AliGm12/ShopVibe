import React from "react";

export default function TotalIncome({totalPrice}) {
  return (
    <div className="w-80 rounded-xl px-5 py-2 flex flex-col  bg-white ml-4">
      <div className="flex items-center justify-between">
        <span className="font-bold">Total income</span>
        <span className="material-symbols-outlined text-green-500 border border-green-500 bg-green-100 rounded-md text-lg px-[4px]">trending_up</span>
      </div>
      <h1 className="font-extrabold text-2xl mb-5">${totalPrice}</h1>
      <span className="text-nowrap text-sm text-gray-500">24% increase compared to last week</span>
    </div>
  );
}
