import logo from "../../assets/imgs/store.png";
import {
  home,
  customers,
  order,
  document,
  analytics,
  products,
  discount,
  logout,
  shipment,
  setting,
  shop,
} from "../../assets/icons";

export default function LeftSideBarOfVendor() {
  return (
    <div className="w-52 rounded-xl h-3/4 px-2 py-5 flex flex-col gap-8 bg-white">
      <div className="flex items-center gap-4 ml-2">
        <img src={logo} className="w-8" />
        <span className="font-semibold">Marketo</span>
      </div>
      <div className="flex flex-col gap-[65px]  h-full">
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-sm ml-4">Menu</span>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3 bg-blue-100 font-bold transition-[background-color] cursor-pointer ">
            <span>{home}</span>
            <span>Home</span>
          </div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{customers}</span>
            <span>Customers</span>
          </div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{order}</span>
            <span>Orders</span>
          </div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{document}</span>
            <span>Documents</span>
          </div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{analytics}</span>
            <span>Analytics</span>
          </div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{products}</span>
            <span>Products</span>
          </div>
        </div>
        <div>
          <span className="text-gray-500 text-sm ml-4">Sales</span>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{shop}</span>
            <span>My Store</span>
          </div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{discount}</span>
            <span>Discounts</span>
          </div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{shipment}</span>
            <span>Shipments</span>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{setting}</span>
            <span>Setting</span>
          </div>
          <div className="flex gap-4 items-center py-2 rounded-lg px-3  hover:bg-blue-100 hover:font-semibold transition-[background-color] cursor-pointer ">
            <span>{logout}</span>
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
}
