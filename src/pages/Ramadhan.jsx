import React from 'react'
import Navbar from '../components/ramadhan-components/Navbar'
import Hero from '../components/ramadhan-components/Hero'
import AboutUs from '../components/ramadhan-components/AboutUs'
import OurProgram from '../components/ramadhan-components/OurProgram'
import JoinUs from '../components/ramadhan-components/JoinUs'
import Footer from '../components/ramadhan-components/Footer'

const LandingPage = () => {
  return (
    <div className='bg-ramadhan-primary'>
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