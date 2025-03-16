import React from "react";
import logohrm from "../assets/logo_hrm.png";

const Navbar = () => {
  return (
    <div className="w-full shadow-md font-poppins">
      <div className="container mx-auto flex justify-center xl:justify-between h-28 text-black">
        <img src={logohrm} alt="hrm-logo" className="max-w-32" />
        <ul className="hidden xl:flex h-full">
          <a href="#aboutUs">
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 hover:bg-blue hover:cursor-pointer font-bold transition-all ease-in duration-300">
              Tentang Kami
            </li>
          </a>
          <a href="#ourProgram">
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 hover:bg-blue hover:cursor-pointer font-bold transition-all ease-in duration-300">
              Program Kami
            </li>
          </a>
          {/* <a href="https://forms.gle/MWyqe52NBtC8Loet8">
            <li className="h-full px-10 text-xl flex items-center hover:text-slate-50 bg-lightBrown hover:bg-blue hover:cursor-pointer font-bold transition-all ease-in duration-300">
              DAFTAR
            </li>
          </a> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
