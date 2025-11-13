import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/codeBlog.json')   // Fetch from public folder
      .then(res => setBlogs(res.data))
      .catch(() => setError('Failed to load blogs'))
      .finally(() => setloading(false));
  }, []);

  if (loading) return <div className='text-center py-5 fw-bold'>Loading...</div>;
  if (error) return <div className='text-center text-danger fw-bold pt-5'>{error}</div>;

  return (
    <section className="Cardlist py-md-4 py-3 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-md-4 mb-3">Latest Blog Posts</h2>

        <div className="row g-4 justify-content-center">
          {blogs.slice(0, 12).map((blog) => (
            <div className="col-sm-10 col-md-6 col-lg-3" key={blog._id}>
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
                      to={`/blogdetails/${blog._id}`}
                    >
                      Read More <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
