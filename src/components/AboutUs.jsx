import React from "react";
import heroImg from "../assets/hero_img.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-blue mt-5 font-poppins" id="aboutUs">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 h-[1300px] xl:h-[550px] font-mono mt-10 p-10 text-center text-white">
        <div className="left-side h-[450px] order-last xl:order-first">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.171182068834!2d115.25831357487971!3d-8.675265591372622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2403886b0cdbf%3A0x989d64546dc6f609!2sMasjid%20Al-Ihsan%20-%20Sanur!5e0!3m2!1sen!2sid!4v1707032981052!5m2!1sen!2sid" style={{border : 0, width: '100%', height: '450px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-md"></iframe>
        </div>
      <div className="right-side flex justify-center flex-col p-0 xl:p-10">
          <h1 className="text-5xl font-bold">
            Tentang Kami
          </h1>
          <p className="text-xl xl:text-2xl mt-5 text-justify">
            Himpunan Remaja Muslim Masjid Al-Ihsaan Sanur adalah himpunan remaja muslim yang berlokasi di Sanur. Himpunan ini berada di bawah Masjid Al-Ihsaan Sanur yang dimana tujuan dari kami adalah merangkul dan mengayomi remaja muslim yang berada di Sanur dan sekitar nya untuk bersama-sama meningkatkan iman dan taqwa, serta mempererat tali persaudaraan antar sesama remaja muslim yang berada di Bali.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
