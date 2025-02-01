import { useState } from "react";

export default function RecentOrders({ purchasedI, itemCounts, itemStars }) {
  const [itemsCount, setItemsCount] = useState(Object.entries(itemCounts));
  const [itemsStars, setItemsStars] = useState(Object.entries(itemStars));
  console.log(purchasedI, itemCounts);
  return (
    <div className="rounded-xl px-5 py-2 mt-3 bg-white ml-4 ">
      <div className="flex items-center justify-between">
        <span className="font-extrabold">Recent order</span>
        <div className="bg-gray-200 flex items-center rounded-xl px-2 py-1 ">
          <span className="material-symbols-outlined text-base font-bold">
            page_info
          </span>
          <span className="font-bold text-sm">Filter</span>
        </div>
      </div>
      <div>
        <table className="" width="100%">
          <thead>
            <tr className="text-gray-400">
              <th className="font-thin">#</th>
              <th className="font-thin">Product</th>
              <th className="font-thin">Number</th>
              <th className="font-thin">Status</th>
              <th className="font-thin">Price</th>
              <th className="font-thin">Stars</th>
            </tr>
          </thead>
          <tbody>
            {purchasedI.slice(0, 2).map((item, index) => {
              return (
                <tr key={item.id} className="border-t border-gray-300">
                  <td className="text-center font-bold">{index + 1}</td>
                  <td className="justify-center gap-2 flex items-center">
                    <img className="w-12 h-12" src={item.images[0]} />
                    <span className="font-bold">{item.title}</span>
                  </td>
                  <td className="text-center font-bold">
                    {itemsCount[index][1]}
                  </td>
                  <td className="text-green-400 text-center font-bold">
                    <span className="border-2 border-green-400 rounded-xl px-2 py-1">
                      Recieved
                    </span>
                  </td>
                  <td className="text-center font-bold">${item.price}</td>
                  <td className="text-center font-bold">
                    {itemsStars[index][1]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
