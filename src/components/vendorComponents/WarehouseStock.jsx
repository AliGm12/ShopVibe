export default function WarehouseStock({ allProducts, itemCounts }) {
  // console.log(allProducts, itemCounts);
  return (
    <div className="w-96 rounded-xl px-5 py-2 flex flex-col  bg-white ml-4">
      <div className="flex items-center justify-between">
        <span className="font-bold">Warehouse stock</span>
        <span className="material-symbols-outlined text-green-500 border border-green-500 bg-green-100 rounded-md py-[1px] px-[3px]">
          123
        </span>
      </div>
      <div className="flex gap-2 text-[#3c81f6]">
        <span>Number of products:</span>
        <span className="font-bold text-gray-600">{allProducts.length}</span>
      </div>
      <div className="flex gap-2 text-[#3c81f6]">
        <span >Number of Purchased products:</span>
        <span className="font-bold text-green-600">{Object.entries(itemCounts).length}</span>
      </div>
      <div className="flex gap-2 text-[#3c81f6]">
        <span >Remaining products :</span>
        <span className="font-bold text-red-600">{allProducts.length - Object.entries(itemCounts).length}</span>
      </div>
      {/* <span className="text-nowrap text-sm text-gray-500">24% increase compared to last week</span> */}
    </div>
  );
}
