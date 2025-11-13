import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const ListCard = () => {
  return (
    <>
    <Navbar/>
    <Cards/>

    <span  className='border rounded-pill p-2 position-fixed fs-6 text-muted-light'
    style={{bottom:"90px", right:"30px",}}>“Every story starts with a single post.”</span>
    <button className='addBlog btn btn-primary rounded-5 position-fixed'
     style={{bottom:"20px", right:"30px"}}><Link className='text-light' to={'/blogcreate'}><i class="bi bi-plus-circle fs-3"></i></Link></button>
    <Footer/>
    </>
  )
}

export default ListCard
