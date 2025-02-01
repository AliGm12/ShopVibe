import { useEffect, useState } from "react";

export default function TopProducts({ products }) {
  const [sortedProducts, setSortedProducts] = useState(
    JSON.parse(JSON.stringify(products))
  );
  useEffect(() => {
    let cloneSortedP = [...sortedProducts];
    cloneSortedP.sort((a, b) => b.price - a.price);
    setSortedProducts(cloneSortedP);
  }, []);

  return (
    <div className="bg-white  rounded-xl my-3 py-3 px-6 h-[350px]">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold">Top Products</h1>
        <span className="material-symbols-outlined">more_horiz</span>
      </div>
      <div>
        {sortedProducts.slice(0, 4).map((item) => {
          return (
            <div className="flex justify-between gap-12 my-2 bg-[#f0f1f6] py-2 px-4 rounded-xl cursor-pointer hover:bg-[#d7d5db]" key={item.id}>
              <div className="flex gap-2 text-sm">
                <img className="w-12 h-12" src={item.images[0]} />
                <div className="flex flex-col">
                  <span className="font-extrabold">{item.title}</span>
                  <span className="text-gray-500">{item.stock} available</span>
                </div>
              </div>
              <span className="font-semibold text-sm">${item.price.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
