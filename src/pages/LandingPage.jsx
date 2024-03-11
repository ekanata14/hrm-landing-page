import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import OurProgram from '../components/OurProgram'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='bg-white'>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <OurProgram></OurProgram>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage