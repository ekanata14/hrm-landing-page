import React from "react";
import heroImg from "../assets/hero_img.jpg";

const OurProgram = () => {
  return (
    <div className="w-full mt-5 font-poppins h-[100%]">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-y-16 justify-items-center h-full font-mono mt-10 p-10 text-center text-white">
        <div className="h-96 w-[350px] xl:w-96 bg-blue rounded-xl flex justify-center items-center shadow-2xl">
          <h1 className="text-3xl font-bold">Ramadhan Bazzar</h1>
        </div>
        <div className="h-96 w-[350px] xl:w-96 bg-blue rounded-xl flex justify-center items-center shadow-2xl">
          <h1 className="text-3xl font-bold">Bakti Sosial</h1>
        </div>
        <div className="h-96 w-[350px] xl:w-96 bg-blue rounded-xl flex justify-center items-center shadow-2xl">
          <h1 className="text-3xl font-bold">Islamic Day Event</h1>
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
