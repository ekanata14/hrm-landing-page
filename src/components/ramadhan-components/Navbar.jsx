import React from "react";
import logohrm from "../../assets/logo_hrm.png";

const Navbar = () => {
  return (
    <div className="w-full shadow-md font-poppins bg-ramadhan-primary">
      <div className="container mx-auto flex justify-center xl:justify-between h-28">
        <img src={logohrm} alt="hrm-logo" className="max-w-32" />
          <ul className="hidden xl:flex h-full">
            <a href="#aboutUs">
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 hover:bg-ramadhan-primary hover:cursor-pointer font-bold transition-all ease-in duration-300">
              Pesantren Kilat
            </li>
            </a>
            <a href="#ourProgram">
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 hover:bg-blue hover:cursor-pointer font-bold transition-all ease-in duration-300">
              Bazzar Ramadhan
            </li>
            </a>
            <a href="#joinUs">
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 bg-lightBrown hover:bg-blue hover:cursor-pointer font-bold transition-all ease-in duration-300">
              Join Us
            </li>
            </a>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
