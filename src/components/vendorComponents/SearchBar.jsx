import { search, bell, chat } from "../../assets/icons";
import logo from "../../assets/imgs/jurica-koletic.jpg"

export default function SearchBar() {
  return (
    <div className="rounded-xl px-3 py-5 bg-white h-16  ml-4 flex justify-between items-center">
      <div className="flex items-center gap-3  w-2/4"> 
        <input className="bg-[#f0f1f6] px-4 h-10 rounded-lg w-3/4 outline-none" type="text" placeholder="search" />
        <span className="h-10 w-10 flex justify-center items-center bg-[#3c81f6] rounded-lg text-white cursor-pointer">{search}</span>
      </div>
      <div className="flex items-center gap-6 mr-5">
        <div className="flex gap-3 icons relative">
          <span className="h-10 w-10 flex justify-center items-center bg-[#f0f1f6] rounded-lg cursor-pointer">{chat}</span>
          <span className="h-10 w-10 flex justify-center items-center bg-[#f0f1f6] rounded-lg cursor-pointer">{bell}</span>
        </div>
        <div className="flex items-center gap-3">
            <img src={logo} className="w-10 h-10 rounded object-fill" />
            <div className="flex flex-col">
                <span className="text-sm font-bold">Ali Golmaryami</span>
                <span className="text-[12px] text-gray-500">Sales Manager</span>
            </div>
        </div>
      </div>
    </div>
  );
}
