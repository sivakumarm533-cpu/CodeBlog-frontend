import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Lastpost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    axios.get('/codeBlog.json')
      .then(res => setBlogs(res.data))
      .catch(() => setError('failed to load blogs'))
      .finally(() => setloading(false));
  },[]);

  if (loading) return <div className='text-center py-5 pt-5 fw-bold d-none'>Loading...</div>;
  if (error) return <div className='text-center text-danger fw-bold pt-5 d-none'>{error}</div>
  return (
    <>
    <section id="posts" class="posts py-5 mx-lg-5 mx-md-3 mx-sm-1  mt-md-3 mt-sm-2 rounded-4 mb-3">
    <div class="container">
      <div class="d-flex align-items-end justify-content-between mb-4">
        <div>
          <h2 class="section-title fw-bold mb-0">Latest Posts</h2>
          <p class="text-muted mb-0">Fresh reads to level up your skills.</p>
        </div>
        <Link to="/bloglist" className="btn btn-outline-secondary rounded-pill text-decoration-none text-muted">View All</Link>

      </div>

      <div class="row g-4 justify-content-center">
        
        {blogs.slice(0, 4).map((blog) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10 " key={blog._id}>
          <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden blog-card">
            
            {/* Image */}
            <div
              className="card-img-top"
              style={{
                backgroundImage: `url(${blog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "220px",
              }}
            ></div>

            {/* Content */}
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-2 text-muted small">
                <span><i className="bi bi-person"></i> {blog.author}</span>
                <span><i className="bi bi-calendar"></i> {blog.date}</span>
              </div>

              <h5 className="card-title fw-semibold">{blog.title}</h5>
              <p className="card-description text-muted small">{blog.description}</p>

              <div className="mt-3">
                <Link
                  className="btn btn-outline-primary rounded-pill px-4"
                  to={`/blogdetails/${blog._id}`}>Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>

          </div>
        </div>
      ))}
        


        {/* card backup code */}
        {/* <div class="col-md-6 col-lg-4">
          <div class="card post-card h-100 border-0 shadow-sm">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" class="card-img-top" alt="Node API" />
            <div class="card-body">
              <span class="tag mb-2 d-inline-block">Node</span>
              <h5 class="card-title">Secure REST APIs with Express & JWT</h5>
              <p class="card-text text-muted">From auth flow to middleware—ship APIs that are fast, safe, and production-ready.</p>
              <Link className='btn btn-primary rounded-pill p-2' to={`/blogdetails/${"#"}`}>Read More</Link>
            </div>
          </div>
        </div> */}
      </div>

    </div>
  </section>
    </>
  )
}

export default Lastpost
