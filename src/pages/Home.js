import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import Lastpost from '../components/Lastpost'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Service/>
    <Lastpost/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home
