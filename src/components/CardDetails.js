import React, { useEffect, useState } from 'react';
import '../assets/css/Style.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CardDetails = () => {

  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios.get('/codeBlog.json') // fetch full file
      .then(res => {
        const blog = res.data.find(item => item._id === id); // find matching id

        if (!blog) {
          setError('Blog not found');
        } else {
          setCard(blog);
        }
      })
      .catch(err => {
        console.error("Axios Error:", err);
        setError("Failed to load blog data");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center fw-bold pt-5">Loading...</div>;
  if (error) return <div className="text-center text-danger pt-5">{error}</div>;

  return (
    <section className="CardDetails py-5">
      <div className="container">
        <div className="row g-4">

          {/* Left side */}
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="user-profile p-4 rounded-4 shadow-sm text-center">

              {/* Profile Image */}
              <div
                className="rounded-4 overflow-hidden mb-3"
                style={{
                  backgroundImage: `url(${card.profileImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "250px",
                }}
              ></div>

              <h4 className="fw-bold">{card.author}</h4>
              <p className="text-muted small">
                Hi, I’m {card.author} — sharing knowledge to help you grow and explore new ideas.
              </p>

              {/* Social Icons */}
              <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="#" className="text-dark"><i className="bi bi-twitter-x fs-5"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-instagram fs-5"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-discord fs-5"></i></a>
              </div>

            </div>

            {/* Categories */}
            <div className="categories p-4 rounded-4 shadow-sm mt-4">
              <h5 className="underline-title ps-2 fw-bold mb-3">Categories</h5>
              <ul className="list-unstyled text-muted">
                <li>Technology</li>
                <li>Health</li>
                <li>Travel</li>
              </ul>
            </div>

            {/* Tags */}
            <div className="tags p-4 rounded-4 shadow-sm mt-4">
              <h5 className="underline-title ps-2 fw-bold mb-3">Tags</h5>
              <div className="d-flex flex-wrap gap-2">
                {["Web", "Technology", "Health", "Life", "Travel"].map(tag => (
                  <button key={tag} className="btn btn-outline-primary rounded-pill btn-sm px-3">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-xl-8 col-lg-8 col-md-12">
            <article className="bg-white p-4 rounded-4 shadow-sm">

              {/* Metadata */}
              <div className="d-flex flex-wrap gap-3 text-muted small mb-3">
                <span><i className="bi bi-person-circle me-1"></i>{card.author}</span>
                <span><i className="bi bi-clock me-1"></i>{card.date}</span>
                <span><i className="bi bi-tags me-1"></i>{card.categories}</span>
              </div>

              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-decoration-none" to="/bloglist">Blogs</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Article</li>
                </ol>
              </nav>

              {/* Title */}
              <h1 className="fw-bold mb-3">{card.title}</h1>

              {/* Main Image */}
              <div className="rounded-4 overflow-hidden mb-4">
                <img src={card.image} alt={card.title} className="img-fluid w-100" />
              </div>

              {/* Blog Text */}
              <div className="blog-text">
                <h4 className="fw-semibold">{card.title}</h4>
                <p className="fs-5">{card.shortDescription}</p>
                <p className="text-muted">{card.description}</p>
              </div>

            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CardDetails;
