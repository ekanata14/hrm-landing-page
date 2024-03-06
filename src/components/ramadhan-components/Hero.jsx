import React from 'react'
import heroImg from '../../assets/hero-img-compressed-new.jpg'

const Hero = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 xl:grid-cols-2 h-[1000px] xl:h-[500px] font-mono mt-10 font-poppins'>
      <div className="left-side flex justify-center flex-col p-5">
        <h1 className='text-5xl font-bold leading-[64px] text-black'>Informasi Kegiatan Ramadhan</h1>
        <h1 className='text-5xl font-bold leading-[64px] text-blue'>HRM <span className='text-blue'>Al-Ihsaan Sanur</span></h1>
        <p className='text-3xl mt-5 font-semibold text-ramadhan-secondary'>Mendidik Generasi Muda di Era Digital</p>
      </div>
      <div className="right-side p-5 flex flex-col justify-center"> 
          <button className="text-3xl mt-8 font-bold text-white bg-ramadhan-secondary p-3 rounded-xl shadow-md text-center">PESANTREN KILAT</button>
          <button className="text-3xl mt-8 font-bold text-white bg-ramadhan-green py-3 rounded-xl shadow-md text-center">BAZZAR RAMADHAN</button>
          <button className="text-3xl mt-8 font-bold text-white bg-blue p-3 rounded-xl shadow-md text-center">DOWNLOAD JUKNIS LOMBA</button>
      </div>
    </div>
  )
}

export default Hero