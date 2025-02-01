import LeftSideBar from "./LeftSideBar";
import PanelHeader from "./PanelHeader";
import Products from "./Products";

export default function Shop({productsCat,setProductsCat,products,setProducts,filteredProducts,setFilteredProducts,purchasedItem,setPurchasedItem}) {
  return (
    <div className=" h-screen overflow-y-hidden"> 
    <LeftSideBar showProdPerCat={productsCat} setShowProdPerCat={setProductsCat} prod={products} setProd={setProducts} fpro={filteredProducts} sFpro={setFilteredProducts}/>  
    <PanelHeader prod={products} setProd={setProducts} fpro={filteredProducts} sFpro={setFilteredProducts} purchasedI={purchasedItem} setPurchasedI={setPurchasedItem}/>
    <Products prod={products} setProd={setProducts} fpro={filteredProducts} sFpro={setFilteredProducts} purchasedI={purchasedItem} setPurchasedI={setPurchasedItem}/>
    </div>
  );
}
