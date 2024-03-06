import React from "react";
import heroImg from "../../assets/hero_img.jpg";
import Button from "./Button";

const JoinUs = () => {
  return (
    <div className="w-full mt-5 font-poppins" id="joinUs">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 h-[800px] xl:h-[550px] font-mono mt-10 p-10 text-center text-white">
        <div className="left-side order-last xl:order-first">
          <img src={heroImg} alt="hero-img" className="rounded-md shadow-xl" />
        </div>
        <div className="right-side flex justify-start xl:justify-center items-center flex-col p-10 text-black">
          <h1 className="text-5xl font-bold">Join Us</h1>
          <p className="text-xl xl:text-2xl mt-5 text-justify">
            Pengen gabung? Pantau terus web kami
          </p>
          <Button text="COMING SOON!" link="#"></Button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
