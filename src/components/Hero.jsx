import React from 'react'
import heroImg from '../assets/hero_img.jpg'

const Hero = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 xl:grid-cols-2 h-[1000px] xl:h-[500px] font-mono mt-10 font-poppins'>
      <div className="left-side flex justify-center flex-col p-5">
        <h1 className='text-5xl font-bold leading-[64px]'>Himpunan Remaja Muslim <span className='text-blue'>Masjid Al-Ihsaan Sanur</span></h1>
        <p className='text-3xl mt-5 font-semibold text-lightBrown'>Empowering Youth, Streightening Faith</p>
      </div>
      <div className="right-side p-5">
        <img src={heroImg} alt="hero-img" className='rounded-md shadow-xl' />
      </div>
    </div>
  )
}

export default Hero