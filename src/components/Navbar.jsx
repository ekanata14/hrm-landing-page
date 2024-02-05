import React from "react";
import logohrm from "../assets/logo_hrm.png";

const Navbar = () => {
  return (
    <div className="w-full shadow-md font-poppins">
      <div className="container mx-auto flex justify-center xl:justify-between h-28">
        <img src={logohrm} alt="hrm-logo" className="max-w-32" />
          <ul className="hidden xl:flex h-full">
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 hover:bg-blue hover:cursor-pointer font-bold transition-all ease-in duration-300">
              About Us
            </li>
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 hover:bg-blue hover:cursor-pointer font-bold transition-all ease-in duration-300">
              Our Program
            </li>
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 hover:bg-blue hover:cursor-pointer font-bold transition-all ease-in duration-300">
              Join Us
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
