import React from 'react'

const FooterNav = () => {
  return (
    <>
    <footer class="py-4 border-top ms-5 me-5 mt-4">
        <div class="container d-flex flex-wrap justify-content-between align-items-center">
            <span class="text-muted small">© <span id="year"></span> CodeBlog. All rights reserved.</span>
            <a href="#hero" class="btn btn-sm btn-outline-secondary rounded-pill"><i class="bi bi-arrow-up"></i> Back to top</a>
        </div>
    </footer>
    </>
  )
}

export default FooterNav
