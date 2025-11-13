import React, { useState } from 'react'
import Data from '../assets/images/create-blog.png'
import axios from 'axios';

const CreateBlog = () => {

    const [formData, setFormData] =useState({
        title:"",
        author:"",
        categories:"",
        shortDescription:"",
        description:"",
        image:"",
        profileImage:""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,[e.target.name]: e.target.value
        });
    };

    // handling form summits
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:5000/api/blogs', formData)
            alert("Blog was Saved");
            console.log("Blog Saved", response.data)


            // reset form

            setFormData({
                title:"",
                author:"",
                categories:"",
                shortDescription:"",
                description:"",
                image:"",
                profileImage:""
            });
        }catch(error){
            console.log("Error created", error);
            alert("Failed to create a blog")
        }
    }

  return (
    <>
    <section className="create-blog py-5">
  <div className="container">
    <div className="row justify-content-center align-items-center g-4">

      {/* Image Side */}
      <div className="col-lg-5 d-none d-lg-block">
        <div className="p-4">
          <img src={Data} alt="Create blog" className="img-fluid rounded-4 shadow-sm" />
        </div>
      </div>

      {/* Form Side */}
      <div className="col-lg-7">
        <div className="p-4 p-md-5 bg-white shadow rounded-4">

          <h2 className="fw-bold mb-3 text-center">Create New Blog</h2>
          <p className="text-muted text-center mb-4">
            Share ideas, stories, and knowledge with the world.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Title */}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" name="title" className="form-control"
                placeholder="Enter blog title"
                value={formData.title}
                onChange={handleChange} />
            </div>

            {/* Author + Categories */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Author</label>
                <input type="text" name="author" className="form-control"
                  placeholder="Author name"
                  value={formData.author}
                  onChange={handleChange} />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <input type="text" name="categories" className="form-control"
                  placeholder="e.g. Tech, Life"
                  value={formData.categories}
                  onChange={handleChange} />
              </div>
            </div>

            {/* Short Description */}
            <div className="mb-3">
              <label className="form-label">Short Description</label>
              <textarea name="shortDescription" className="form-control"
                placeholder="Write a short summary..."
                rows="2"
                value={formData.shortDescription}
                onChange={handleChange}></textarea>
            </div>

            {/* Main Description */}
            <div className="mb-3">
              <label className="form-label">Full Description</label>
              <textarea name="description" className="form-control"
                placeholder="Write full blog content..."
                rows="4"
                value={formData.description}
                onChange={handleChange}></textarea>
            </div>

            {/* Images */}
            <div className="mb-3">
              <label className="form-label">Banner Image URL</label>
              <input type="url" name="image" className="form-control"
                placeholder="Paste blog banner URL"
                value={formData.image}
                onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Author Profile URL</label>
              <input type="url" name="profileImage" className="form-control"
                placeholder="Paste profile photo URL"
                value={formData.profileImage}
                onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill">
              Publish Blog
            </button>
          </form>

        </div>
      </div>

    </div>
  </div>
</section>

    </>
  )
}

export default CreateBlog
