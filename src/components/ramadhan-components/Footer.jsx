import React from "react";
import logohrm from "../../assets/logo_hrm.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import heroImg from "../../assets/hero_img.jpg";

const Footer = () => {
  return (
    <div className="w-full mt-5 font-poppins h-[100%] bg-blue">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-y-16 justify-items-center h-full font-mono mt-10 p-10 text-center text-white">
        <div className="h-96 w-96 bg-blue rounded-xl flex flex-col justify-center items-center xl:order-1 order-2">
          <h1 className="text-3xl font-bold">Our Social Media</h1>
          <a href="https://instagram.com/hrm_sanur" target="_blank">
            <img src={instagram} alt="instagram-logo" className="w-20 mt-5" />
          </a>
        </div>
        <div className="h-96 w-96 bg-blue rounded-xl flex justify-center items-center xl:order-2 order-1">
          <img src={logohrm} alt="hrm-logo" className="max-w-64" />
        </div>
        <div className="h-96 w-96 bg-blue rounded-xl flex flex-col justify-center items-center order-3">
          <h1 className="text-3xl font-bold">About Masjid Al-Ihsaan</h1>
          <a href="https://web.facebook.com/profile.php?id=61554138836057" target="_blank">
            <img src={facebook} alt="facebook-logo" className="w-20 mt-5"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
