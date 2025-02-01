import { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorPanel from "./components/vendorComponents/VendorPanel";
import Shop from "./components/Shop";




export default function App() {
  const [products,setProducts] = useState([])
  const [productsCat,setProductsCat] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])
  const [purchasedItem, setPurchasedItem] = useState([])

  useEffect(() => {

      fetch('https://dummyjson.com/products?limit=100&skip=30')
      .then(res=>res.json())
      .then(res=>{
        setProducts(res.products)
      }) 
    }, []);
    useEffect(() => {
      if (products.length > 0) {
        const arr = [];
        products.forEach(prod => {
          arr.push(prod.category);
        });
        const set1 = new Set(arr);
        setProductsCat(Array.from(set1));
      }
    }, [products]);
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={    <Shop productsCat={productsCat} setProductsCat={setProductsCat} products={products} setProducts={setProducts} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} purchasedItem={purchasedItem} setPurchasedItem={setPurchasedItem}/>}/>
        <Route path="/vendorpanel" element={<VendorPanel/>}/>
        <Route path="*" element={<div className="h-screen w-screen flex justify-center items-center text-7xl">Cannot be found</div>} />
      </Routes>
    </Router>
    </>
  )
}
