import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="footer text-light pt-5 pb-4 mt-5">
  <div class="container">
    <div class="row gy-4">

      {/* <!-- Company Info --> */}
      <div class="col-lg-4 col-md-12 text-light">
        <h4 class="fw-bold text-white mb-3">CodeBlog</h4>
        <p class="text-muted-light">
          CodeBlog is a platform for developers, creators, and learners.  
          We share tutorials, tips, and insights to help you build modern web projects with confidence.
        </p>
        <div class="d-flex gap-3 mt-3">
          <a href="#" class="text-light fs-5"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-light fs-5"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="text-light fs-5"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="text-light fs-5"><i class="bi bi-github"></i></a>
        </div>
      </div>

      {/* <!-- Quick Links --> */}
      <div class="col-lg-2 col-md-4">
        <h6 class="text-uppercase  fw-bold mb-3">Quick Links</h6>
        <ul class="list-unstyled text-muted-light">
          <li class="mb-2"><a href="#hero" class="text-decoration-none text-muted-light">Home</a></li>
          <li class="mb-2"><a href="#about" class="text-decoration-none text-muted-light">About</a></li>
          <li class="mb-2"><a href="#posts" class="text-decoration-none text-muted-light">Blog Posts</a></li>
          <li class="mb-2"><a href="#services" class="text-decoration-none text-muted-light">Services</a></li>
          <li><a href="#newsletter" class="text-decoration-none text-muted-light">Newsletter</a></li>
        </ul>
      </div>

      {/* <!-- Support --> */}
      <div class="col-lg-2 col-md-4 ">
        <h6 class="text-uppercase fw-bold mb-3">Support</h6>
        <ul class="list-unstyled text-muted-light">
          <li class="mb-2"><a href="#" class="text-decoration-none text-muted-light">FAQ</a></li>
          <li class="mb-2"><a href="#" class="text-decoration-none text-muted-light">Privacy Policy</a></li>
          <li class="mb-2"><a href="#" class="text-decoration-none text-muted-light">Terms & Conditions</a></li>
          <li><a href="#" class="text-decoration-none text-muted-light">Contact Us</a></li>
        </ul>
      </div>

      {/* <!-- Contact Info --> */}
      <div class="col-lg-4 col-md-4">
        <h6 class="text-uppercase fw-bold mb-3">Contact</h6>
        <ul class="list-unstyled text-muted-light small">
          <li class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>Coimbatore, Tamil Nadu, India</li>
          <li class="mb-2"><i class="bi bi-envelope text-primary me-2"></i> support@codeblog.dev</li>
          <li class="mb-2"><i class="bi bi-telephone text-primary me-2"></i> +91 98765 43210</li>
          <li><i class="bi bi-clock text-primary me-2"></i> Mon–Fri: 9:00 AM – 6:00 PM</li>
        </ul>
      </div>
    </div>

    <hr class="border-secondary my-4"/>

    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
      <p class="mb-0 small text-muted-light">
        © <span id="year"></span> <strong>CodeBlog</strong>. All rights reserved.
      </p>
      <a href="#hero" class="btn btn-sm btn-outline-secondar rounded-pill"><i class="bi bi-arrow-up"></i> Back to top</a>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
