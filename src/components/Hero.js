import React from 'react'
import Img from '../assets/images/banner-images/hero.png'

const Hero = () => {
  return (
    <>
    <section className='banner ms-5 me-5 rounded-4 mt-3 py-5'id="hero">
        <div className='container'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-7 col-md-12 col-sm-12'>
                <div className=' banner-content text-center p-5'>
                  <h1 className='banner-title fw-bolder'>Hello and welcome! Enjoy the latest stories & insights.</h1>
                  <p className='banner-desc'>Your daily dose of knowledge, inspiration, and real-world thinking.</p>
                  <button className='btn btn-light rounded-pill'>Explore</button>
                </div>
              </div>

              <div className='col-lg-5 col-md-12 col-sm-12 d-lg-block  d-md-none d-sm-none'>
                <div className='banner-image '>
                  <img src={Img} alt='NoImage' className='img-fluid'/>
                </div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero
