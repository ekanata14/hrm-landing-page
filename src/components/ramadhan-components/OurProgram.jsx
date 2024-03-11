import React from "react";
import sosro from "../../assets/sosro.png"
import glico from "../../assets/glico.jpg"

const OurProgram = () => {
  return (
    <div className="w-full mt-10 font-poppins h-[100%]" id="bazzar">
          <h1 className="xl:text-5xl text-3xl text-center text-blue font-bold">
            BAZZAR COLLABORATION WITH
          </h1>
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-16 justify-items-center h-full font-mono mt-5 p-10 text-center text-white">
        <div>
        <div className="h-96 w-[350px] xl:w-96 bg-contain bg-no-repeat bg-center rounded-xl flex justify-center items-center cursor-pointer hover:shadow-2xl hover:scale-110 transition-all duration-300" style={{backgroundImage: `url(${sosro})`}}>
        </div>
        </div>
        <div>
        <div className="h-96 w-[350px] xl:w-96 bg-contain bg-no-repeat bg-center rounded-xl flex justify-center items-center cursor-pointer hover:shadow-2xl hover:scale-110 transition-all duration-300" style={{backgroundImage: `url(${glico})`}}>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
