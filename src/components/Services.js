import React from 'react'

const Services = () => {
  return (
    <>
    <section id="services" class="py-5">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="section-title fw-bold">What We Offer</h2>
        <p class="text-muted">Blog-powered services to help you learn and grow.</p>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-journal-code fs-2 text-primary"></i>
                <div>
                  <h5 class="mb-1">Fresh & Engaging Content</h5>
                  <p class="text-muted mb-0">
                    Well-researched articles that simplify complex topics and deliver real value with clear examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-terminal fs-2 text-primary"></i>
                <div>
                  <h5 class="mb-1">In-Depth Tutorials & Guides</h5>
                  <p class="text-muted mb-0">
                    Step-by-step walkthroughs for React, Node, and tooling—perfect for beginners and seasoned devs alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-start gap-3">
                <i class="bi bi-people fs-2 text-primary"></i>
                <div>
                  <h5 class="mb-1">Community & Discussions</h5>
                  <p class="text-muted mb-0">
                    Ask questions, share ideas, and connect with readers—a friendly space to learn and collaborate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    </>
  )
}

export default Services
