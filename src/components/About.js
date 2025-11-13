import React from 'react'
import Img from '../assets/images/banner-images/about.jpg'

const About = () => {
  return (
    <>
    <section id="about" class="about py-5 mx-lg-5 mx-md-3 mx-sm-1  mt-md-3 mt-sm-2 mt-2 rounded-4">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-6 mt-0">
            <div className='pb-3'>
              <h2 class="section-title fw-bold mb-0">About This Blog</h2>
              <p className='text-muted'>so you can apply what you learn instantly</p>
            </div>
            <p class="text-muted">
              We publish high-quality articles focused on modern web development—covering React, Node, UI/UX, performance, and deployment.
              Every post is written with clarity and real projects in mind, so you can apply what you learn instantly.
            </p>
            <ul class="list-unstyled">
              <li class="mb-2"><i class="bi bi-check-circle text-primary"></i> In-depth tutorials & code samples</li>
              <li class="mb-2"><i class="bi bi-check-circle text-primary"></i> Clean patterns and best practices</li>
              <li class="mb-2"><i class="bi bi-check-circle text-primary"></i> Beginner-friendly & pro-useful</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <div class="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <img src={Img} alt="NoImage" class="w-100 h-100 object-fit-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
