import React from 'react'

const Newsletter = () => {
  return (
    <>
    <section id="newsletter" class="newsletter mx-lg-5 mx-md-3 mx-sm-1  pt-md-3 pt-sm-2 rounded-4">
    <div class="container">
      <div class="row align-items-center py-5 g-3">
        <div class="col-lg-6">
          <h2 class="section-title fw-bold">Join the Newsletter</h2>
          <p class="text-muted">
            Get new posts, cheatsheets, and tutorials straight to your inbox. No spam—unsubscribe anytime.
          </p>
          <form class="row g-2">
            <div class="col-sm-8">
              <input type="email" required class="form-control form-control-lg" placeholder="Your email" />
            </div>
            <div class="col-sm-4">
              <button class="btn btn-dark btn-lg w-100" type="submit">Subscribe</button>
            </div>
          </form>
          <small class="text-muted d-block mt-2"><i class="bi bi-lock"></i> We respect your privacy.</small>
        </div>
        <div class="col-lg-5 ms-auto">
          <div class="bg-dark border rounded-4 p-4 shadow-sm text-light">
            <h5 class="mb-3"><i class="bi bi-chat-dots"></i> Contact</h5>
            <div class="vstack gap-2 ">
              <div><i class="bi bi-envelope"></i> hello@codeblog.dev</div>
              <div><i class="bi bi-twitter-x"></i> @codeblog</div>
              <div><i class="bi bi-geo-alt"></i> Remote • Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Newsletter
