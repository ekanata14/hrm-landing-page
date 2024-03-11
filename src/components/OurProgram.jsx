import React from "react";
import bazzaar from "../assets/bazzaar.jpeg";
import baksos from "../assets/baksos.jpg";
import phbi from "../assets/phbi.jpg"

const OurProgram = () => {
  return (
    <div className="w-full mt-10 font-poppins h-[100%]" id="ourProgram">
          <h1 className="text-5xl text-center font-bold text-black">
            Program Kami
          </h1>
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-y-16 justify-items-center h-full font-mono mt-5 p-10 text-center text-white">
        <div>
        <div className="h-96 w-[350px] xl:w-96 bg-cover bg-center rounded-xl flex justify-center items-center shadow-md cursor-pointer hover:shadow-2xl hover:scale-110 transition-all duration-300" style={{backgroundImage: `url(${bazzaar})`}}>
        </div>
          <h1 className="text-3xl mt-8 font-bold bg-blue py-3 rounded-xl shadow-md">Bazzar Ramadhan</h1>
        </div>
        <div>
        <div className="h-96 w-[350px] xl:w-96 bg-cover bg-center rounded-xl flex justify-center items-center shadow-md cursor-pointer hover:shadow-2xl hover:scale-110 transition-all duration-300" style={{backgroundImage: `url(${baksos})`}}>
        </div>
          <h1 className="text-3xl mt-8 font-bold bg-blue py-3 rounded-xl shadow-md">Bakti Sosial</h1>
        </div>
        <div> 
        <div className="h-96 w-[350px] xl:w-96 bg-cover bg-center rounded-xl flex justify-center items-center shadow-md cursor-pointer hover:shadow-2xl hover:scale-110 transition-all duration-300" style={{backgroundImage: `url(${phbi})`}}>
        </div>
          <h1 className="text-3xl mt-8 font-bold bg-blue py-3 rounded-xl shadow-md">Kegiatan PHBI</h1>
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
