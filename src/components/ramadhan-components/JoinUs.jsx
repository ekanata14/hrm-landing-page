import React from "react";
import heroImg from "../../assets/hero_img.jpg";
import Button from "./Button";
import mewarnai from "../../assets/mewarnai.png";
import adzan from '../../assets/adzan.png';
import doa from '../../assets/doa-sehari-hari.png';
import storyTelling from '../../assets/story-telling.png';
import juzAmma from '../../assets/juz-amma.png';
import cerdasCermat from '../../assets/cerdas-cermat.png';

const JoinUs = () => {
  return (
    <div className="w-full mt-5 font-poppins" id="pesantrenKilat">
      <h1 className="text-5xl text-center text-blue font-bold">
        LOMBA PESANTREN KILAT
      </h1>
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 h-full xl:h-[1000px] font-mono mt-10 gap-6 p-10 text-center text-white">
        <div className="card w-full xl:w-3/4 bg-ramadhan-green shadow-xl">
          <figure>
            <img src={mewarnai} alt="Shoes" className="w-1/2 rounded-xl" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="text-2xl text-center font-bold">Mewarnai</h2>  
            <h2 className="text-2xl text-center font-bold">UMUR 4 - 7 TAHUN</h2>
          </div>
        </div>
        <div className="card w-full xl:w-3/4 bg-ramadhan-green shadow-xl">
          <figure>
            <img src={adzan} alt="Shoes" className="w-1/2 rounded-xl" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="text-2xl text-center font-bold">Adzan</h2>
            <h2 className="text-2xl text-center font-bold">UMUR 8 - 11 TAHUN</h2>
          </div>
        </div>
        <div className="card w-full xl:w-3/4 bg-ramadhan-green shadow-xl">
          <figure>
            <img src={doa} alt="Shoes" className="w-1/2 rounded-xl" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="text-2xl text-center font-bold">Doa Sehari-hari</h2>
            <h2 className="text-2xl text-center font-bold">UMUR 4 - 7 TAHUN</h2>
          </div>
        </div>
        <div className="card w-full xl:w-3/4 bg-ramadhan-green shadow-xl">
          <figure>
            <img src={juzAmma} alt="Shoes" className="w-1/2 rounded-xl" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="text-2xl text-center font-bold">Juz Amma</h2>
            <h2 className="text-2xl text-center font-bold">UMUR 8 - 11 TAHUN</h2>
          </div>
        </div>
        <div className="card w-full xl:w-3/4 bg-ramadhan-green shadow-xl">
          <figure>
            <img src={storyTelling} alt="Shoes" className="w-1/2 rounded-xl" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="text-2xl text-center font-bold">Story Telling</h2>
            <h2 className="text-2xl text-center font-bold">UMUR 8 - 11 TAHUN</h2>
          </div>
        </div>
        <div className="card w-full xl:w-3/4 bg-ramadhan-secondary shadow-xl">
          <figure>
            <img src={cerdasCermat} alt="Shoes" className="w-1/2 rounded-xl" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="text-2xl text-center font-bold">Cerdas Cermat</h2>
            <h2 className="text-2xl text-center font-bold">UMUR 12 - 15 TAHUN</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
