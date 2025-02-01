import { useState, useRef } from "react";
// import { ProductsContext } from "../App.jsx";

export default function LeftSideBar({
  showProdPerCat,
  prod,
  sFpro,
}) {
  const [flag, setFlag] = useState(0)

  const ref = useRef()
  const arrowRef = useRef()


  return (
    <>
      <div className="left-sidebar-div bg-[#f0f0f0] w-[16%] fixed bottom-0 top-[120px] z-10 flex flex-col items-center overflow-y-auto border-t-2 border-r-2 border-[#d6d8dc] px-8 leading-10">
        <div className="w-full  border-b-2 border-[#d6d8dc] py-3">
          <h1 className="text-2xl font-bold cursor-pointer flex items-center" onClick={()=>{
            if(flag == 0){
              ref.current.style.height = "0"
              ref.current.style.visibility = "hidden"
              ref.current.style.opacity = 0
              arrowRef.current.innerHTML = "keyboard_arrow_up"
              setFlag(1)
            }else if(flag == 1){
              ref.current.style.height = "430px"
              ref.current.style.visibility = "visible"
              ref.current.style.opacity = 1
              arrowRef.current.innerHTML = "keyboard_arrow_down"
              setFlag(0)
            }
          }}>Categories
            <span ref={arrowRef} className="material-symbols-outlined text-3xl">
              keyboard_arrow_down
            </span>
          </h1>
        <div ref={ref} className="categories">
        {showProdPerCat.map((pro, index) => {
            return (
              <div
                className="cursor-pointer"
                onClick={() => {
                  sFpro(prod.filter((prod) => prod.category === pro));
                }}
                key={index}
              >
                {(pro[0].toUpperCase() + pro.slice(1)).replace("-", " ")}
              </div>
            );
          })}
        </div>
        </div>
        <div className="w-full border-b-2 border-[#d6d8dc] py-3">
          <h1 className="text-2xl font-bold">Rating</h1>
          <div >
            <div className="flex items-center">
              <input type="radio" name="drone" id="first-rate" value="" onClick={() =>{
                sFpro(prod.filter((prod) => prod.rating >= 4));
              }} />
              <label htmlFor="first-rate" className="ml-2 cursor-pointer">
                4 - 5 stars
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="drone" id="second-rate" value="" onClick={()=>{
                sFpro(prod.filter(prod=>prod.rating >= 3 && prod.rating < 4));
              }}/>
              <label htmlFor="second-rate" className="ml-2 cursor-pointer">
                3 - 4 stars
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="drone" id="third-rate" value="" onClick={()=>{
                sFpro(prod.filter(prod=>prod.rating >= 2 && prod.rating < 3));
              }}/>
              <label htmlFor="third-rate" className="ml-2 cursor-pointer">
                2 - 3 stars
              </label>
            </div>
          </div>

        </div>
        <div className="w-full border-b-2 border-[#d6d8dc] py-3">
          <h1 className="text-2xl font-bold">Brands</h1>
          <div
            className="cursor-pointer"
            onClick={() => {
              sFpro(prod);
            }}
          >
            All
          </div>
        </div>
        <div className="w-full border-b-2 border-[#d6d8dc] py-3">
          <h1 className="text-2xl font-bold">Price</h1>
          <div
            className="cursor-pointer"
            onClick={() => {
              sFpro(prod);
            }}
          >
            All
          </div>
        </div>
        <div className="w-full border-b-2 border-[#d6d8dc] py-3">
          <h1 className="text-2xl font-bold">Discount</h1>
          <div
            className="cursor-pointer"
            onClick={() => {
              sFpro(prod);
            }}
          >
            All
          </div>
        </div>
        <div className="w-full border-b-2 border-[#d6d8dc] py-3">
          <h1 className="text-2xl font-bold">Stock</h1>
          <div
            className="cursor-pointer"
            onClick={() => {
              sFpro(prod);
            }}
          >
            All
          </div>
        </div>
      </div>
    </>
  );
}
