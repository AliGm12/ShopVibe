export default function SearchAndSort({value,fpro,sFpro}) {
  return (
    <>
      <div className="w-[79.5%] float-right mr-8">
        <div className="my-5 text-2xl flex gap-2">
          <span className="text-[#858585]">Showing search results for</span>
          <span className="text-[#1E1E1E]">&apos;{value}&apos;</span>
        </div>
        <div className="flex justify-between items-center text-base bg-[#f1f1f1] py-4 px-7">
          <div className="flex gap-6">
            <span>Sort by:</span>
            <select className="bg-black text-white py-1 px-2 ">
              <option>Popular</option>
              <option>Price</option>
              <option>Discounted</option>
            </select>
            <select className="py-1 px-2 ">
              <option>Price</option>
              <option>Discounted</option>
              <option>Popular</option>
            </select>
            <select className="py-1 px-2 ">
              <option>Discounted</option>
              <option>Popular</option>
              <option>Price</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <button className="flex items-center bg-white border border-gray-300 p-1">
              <span className="material-symbols-outlined">
                keyboard_arrow_left
              </span>
            </button>
            <button className="flex items-center bg-white border border-gray-300 p-1">
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
