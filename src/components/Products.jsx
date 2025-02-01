import { useState } from "react";
import { star } from "../assets/icons";

export default function Products({ prod, fpro, setPurchasedI }) {

  const [buttonFlags,setButtonFlags] = useState({})

  return (
    <>
      <div className="product-page grid grid-cols-5 gap-x-6 w-[79.5%] float-right gap-y-6 mx-auto justify-between mb-20 font-MyFont mt-[290px] overflow-y-scroll h-[62%] 3xl:h-[67%]  mr-8 pr-6 ">
        {fpro.length > 0
          ? fpro.map((pro) => {
              return (
                <div
                  key={pro.id}
                  className=" bg-gray-100 border border-gray-200 shadow px-4 py-4 transition-all h-[332px] hover:shadow-2xl hover:bg-white"
                >
                  <div className="h-44 flex justify-center ">
                    <img
                      className="w-40 h-36 object-contain"
                      src={pro.images[0]}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#636363] mb-2">
                      {pro.category}
                    </span>
                    <span className="h-6 overflow-hidden font-semibold mb-2">
                      {pro.title}
                    </span>
                    <div className="mb-2 text-[14px] flex gap-2">
                      <span className="text-blue-700 font-extrabold">
                        &euro;{pro.price}
                      </span>
                      <span className="text-[#007d48] font-extrabold">
                        {pro.discountPercentage} % off
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <button className="bg-black text-white py-2 w-2/4 text-[13px]" onClick={()=>{
                        if(!buttonFlags[pro.id]){
                          setPurchasedI((prevD)=>([
                            ...prevD,
                            pro
                          ]))
                          setButtonFlags((prev)=>({
                            ...prev,
                            [pro.id]:true
                          }))
                        }   
                      }}>
                        Add to Cart
                      </button>
                      <div className="flex items-center justify-center text-xs relative">
                        <span className="relative top-[-2px] ">{star}</span>
                        <span className="font-extrabold">{pro.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : prod.map((pro) => {
              return (
                <div
                  key={pro.id}
                  className="bg-gray-100 border border-gray-200 shadow px-4 py-4 transition-all h-[332px] hover:shadow-2xl hover:bg-white"
                >
                  <div className="h-44 flex justify-center ">
                    <img
                      className="w-40 h-36 object-contain"
                      src={pro.thumbnail}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#636363] mb-2">
                      {pro.category}
                    </span>
                    <span className="h-6 overflow-hidden font-semibold mb-2">
                      {pro.title}
                    </span>
                    <div className="mb-2 text-[14px] flex gap-2">
                      <span className="text-blue-700 font-extrabold">
                        &euro;{pro.price}
                      </span>
                      <span className="text-[#007d48] font-extrabold">
                        {pro.discountPercentage} % off
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <button className="bg-black text-white py-2 w-2/4 text-[13px]" onClick={()=>{
                        if(!buttonFlags[pro.id]){
                          setPurchasedI((prevD)=>([
                            ...prevD,
                            pro
                          ]))
                          setButtonFlags((prev)=>({
                            ...prev,
                            [pro.id]:true
                          }))
                        } 
                      }}>
                        Add to Cart
                      </button>
                      <div className="flex items-center justify-center text-xs ">
                        <span className="">{star}</span>
                        <span className="font-extrabold">{pro.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}
