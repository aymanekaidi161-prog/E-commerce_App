import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="logo" />

      <ul className="hidden sm:flex gap-5">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-[15px] font-semibold text-gray-700 ">Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="text-[15px] font-semibold text-gray-700">Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-[15px] font-semibold text-gray-700">About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-[15px] font-semibold text-gray-700">Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-6 cursor-pointer"
          alt="search icon"
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-6 cursor-pointer"
            alt="portfolio icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6 min-w-5" alt="cart icon" />
          <span className="absolute -bottom-2 -right-2 w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[10px]">
            10
          </span>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu icon"
          className="w-6 cursor-pointer sm:hidden"
        />
      </div>
      {/*menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all flex flex-col text-gray-600 ${
          visible ? "w-full" : "w-0"
        }`}>
        <div
          onClick={() => setVisible(false)}
          className="cursor-pointer flex items-center gap-4 p-3">
          <img
            className="h-4 rotate-180"
            src={assets.dropdown_icon}
            alt="dropdown icon"/>
          <p>back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>


      </div>
    </div>
  );
}
