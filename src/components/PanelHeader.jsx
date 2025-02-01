import { useEffect, useRef, useState } from "react";
import { bag, shop, bell, chat, search } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import img from "../assets/imgs/store.png";
import SearchAndSort from "./SearchAndSort";
import avatar from "../assets/imgs/jurica-koletic.jpg";

export default function PanelHeader({ prod, fpro, sFpro,purchasedI }) {
  const checkout = useRef()
  const [productCounts, setProductCounts] = useState({});
  const [productPrices, setProductPrices] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [totalPrice,setTotalPrice] = useState(0)
  const [increasedPrice,setIncreasedPrice] = useState([])
  const [productStars,setProductstars] = useState({})
  const [warningMessage, setWarningMessage] = useState('');

  const navigate = useNavigate()

 const checkoutFunc = ()=>{
  const allProductsRated = purchasedI.every((item) => productStars[item.id] !== undefined);
  if (!allProductsRated) {
    console.log("Please rate all products before checking out");
    setWarningMessage('Please rate all products before checking out');
  } else {
    const data = {
      purchasedItems:purchasedI,
      productPrices:productPrices,
      productCounts:productCounts,
      productStars:productStars,
      increasedPrice:increasedPrice,
      totalPrice:totalPrice,
      allProducts:prod
    };
    navigate("/vendorpanel", { state: { data } });
  }
 };

  useEffect(()=>{  
    setIncreasedPrice(JSON.parse(JSON.stringify(purchasedI)));
  },[purchasedI])

  useEffect(()=>{
    let count = 0;
    increasedPrice.forEach((prod)=>{
    count = count + prod.price
  })
  setTotalPrice(count.toFixed(2))  
},[increasedPrice])

useEffect(()=>{
  purchasedI.forEach(item=>{
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [item.id]: 1,
    }));
  })
},[purchasedI])

  const updatePrice = (pro,index,operator)=>{
    const newItems = [...increasedPrice];
    if(operator === "+"){
      newItems[index].price += pro
      setIncreasedPrice(newItems)
    }else{
      newItems[index].price -= pro
      setIncreasedPrice(newItems)
    }
  }
  return (
    <>
      <div className="fixed top-0 right-0 left-0 bg-white">
        <div className="border-b-2 border-gray-300 ultra">
          <div className="bg-[#0047FF] text-white text-center py-2">
            Now ..... you can download it on your cellphone through the App
            Store and Play Store
          </div>
          <div className="h-20 flex items-center px-12">
            <div className="flex h-full items-center w-[65%] gap-8">
              <img src={img} />
              <div className="relative w-5/12 flex items-center">
                <input
                  onInput={(e) => {
                    sFpro(
                      prod.filter((prod) => {
                        return prod.title
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase());
                      })
                    );
                  }}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  placeholder="search it!"
                  className="w-full outline-none border border-gray-300 rounded-3xl h-12 text-xl text-gray-600 pl-12"
                />
                <span className="absolute left-4  text-gray-500">{search}</span>
              </div>
              <div className="flex">
                <span className="border-r border-gray-300 pr-6 mr-6 cursor-pointer">
                  Home
                </span>
                <span className="flex items-center border-r border-gray-300 pr-6 mr-6 cursor-pointer">
                  Product
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </span>
                <span className="border-r border-gray-300 pr-6 mr-6 cursor-pointer">
                  Promo
                </span>
                <span className="cursor-pointer">Contact us</span>
              </div>
            </div>
            <div className="w-[35%] h-full flex items-center gap-8 justify-end">
              <span className="cursor-pointer text-3xl">{bell}</span>
              <span className="cursor-pointer text-3xl">{chat}</span>
              <span className="cursor-pointer text-3xl">{shop}</span>
              <div className="border-r border-gray-400 pr-6 flex items-center relative">
                <span className=" cursor-pointer text-3xl text-blue-600 bag-icon" onClick={()=>{checkout.current.classList.toggle("invisible");}}>{bag}</span>

                <div ref={checkout} className="checkout-div absolute bg-white z-40 w-[440px]  right-5 top-8 border border-gray-200 shadow-xl py-6 px-4 flex flex-col invisible max-h-[500px] overflow-y-auto">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-medium">Checkout Goods</h2>
                      <span className="text-gray-400">({purchasedI.length})</span>
                    </div>
                      {warningMessage && <p style={{ color: 'red' ,position: 'absolute', top: "3.5rem", backgroundColor:"#ff00000f",borderRadius:"8px",padding:"5px 10px",fontSize:"12px"}}>{warningMessage}</p>}
                    <div className="text-blue-600 font-normal">
                      view details
                    </div>
                  </div>
                  <div className="px-6 py-8">
                    {purchasedI.map((pro,index) => {
                      const productId = pro.id;
                      const count = productCounts[productId] || 1;
                      const price = productPrices[productId] || pro.price;
                      return (
                        <div
                          key={pro.id}
                          className="flex gap-5 items-center py-2 mx-auto"
                        >
                          <img src={pro.thumbnail} className="w-16 h-16" />
                          <div className="flex flex-col">
                            <div className="font-medium">{pro.title}</div>
                            <div className="flex gap-4 w-44">
                              <div className="flex text-gray-600 ">
                                <span
                                  onClick={(e) => {
                                    if (count > 1) {
                                      setProductCounts((prevCounts) => ({
                                        ...prevCounts,
                                        [productId]: count - 1,
                                      }));
                                      setProductPrices((prevPrices) => ({
                                        ...prevPrices,
                                        [productId]: price - pro.price,
                                      }));
                                    updatePrice(pro.price,index,e.target.innerHTML)
                                    }
                                  }}
                                  className="border border-gray-400 w-[25px] flex items-center justify-center h-[25px] cursor-pointer text-3xl"
                                >
                                  -
                                </span>
                                <span className="border-t border-b border-gray-400 w-[25px] flex items-center justify-center h-[25px]">
                                  {count}
                                </span>
                                <span
                                  onClick={(e) => {
                                    setProductCounts((prevCounts) => ({
                                      ...prevCounts,
                                      [productId]: count + 1,
                                    }));
                                    setProductPrices((prevPrices) => ({
                                      ...prevPrices,
                                      [productId]: price +  pro.price,
                                    }));
                                    updatePrice(pro.price,index,e.target.innerHTML)
                                  }}
                                  className="border border-gray-400 w-[25px] flex items-center justify-center h-[25px] cursor-pointer text-3xl"
                                >
                                  +
                                </span>
                              </div>
                                <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-yellow-400 text-lg">
                                  star_rate
                                </span>
                                <input
                                type="number"
                                min="1"
                                max="5"
                                value= {productStars[productId]}
                                className="w-16 h-[25px] border border-gray-400 pl-2 outline-none"
                                onChange={(e) => {
                                  setProductstars((prevStars)=>({
                                    ...prevStars,
                                    [productId]: e.target.value
                                  }))
                                }}
                              />
                                </div>
                            </div>
                          </div>
                          <span className="font-semibold text-blue-800">
                            {price.toFixed(2)} $
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span>$-</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Grand total</span>
                      <span className="text-blue-700 font-medium">${totalPrice}</span>
                    </div>
                    <button className="bg-blue-700 text-white py-2"
                    onClick={checkoutFunc}>
                      CHECKOUT NOW
                    </button>
                  </div>
                </div>
              </div>
              <img
                className="w-10  h-10 rounded-full object-cover cursor-pointer"
                src={avatar}
              />
            </div>
          </div>
        </div>
        <SearchAndSort value={inputValue} fpro={fpro} sFpro={sFpro} />
      </div>
    </>
  );
}


