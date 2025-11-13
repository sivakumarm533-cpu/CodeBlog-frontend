import React, { useState } from 'react'
import '../assets/css/Style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <section className="navbar p-3 ms-5 me-5 rounded-bottom-5 position-sticky top-0 z-3 bg-white shadow-sm" >
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <div className="nav-logo">
          <h2 className="fw-bold mb-0">CodeBlog</h2>
        </div>

        {/* Navigation Links */}
        <div className={`nav-items d-flex align-items-center gap-3 ${menuOpen ? "show-menu" : ""}`}>
          <ul className="d-flex gap-4 list-unstyled mb-0">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/bloglist" className="nav-link">Blogs</Link></li>
            <li><Link className="nav-link">About</Link></li>
            <li><Link className="nav-link">Service</Link></li>
            <li><Link className="nav-link">Contact</Link></li>
            <li></li>
          </ul>

          <div className="nav-button">
            <button className="btn btn-primary rounded-pill">Explore</button>
          </div>
        </div>

        {/* Menu Icon small screens */}
        <div className="menu d-md-none">
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="bi bi-list fs-2"></i>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Navbar
 