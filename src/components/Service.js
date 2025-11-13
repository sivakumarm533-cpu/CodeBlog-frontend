import React from 'react'

const Service = () => {
  return (
    <>
    <section className='service mx-5 mt-3 rounded-4 py-2'>
        <div className='container'>

            {/* Heading */}
            <div >
                <h2 class="section-title fw-bold pt-5 mb-0">What We Offer</h2>
                <p className='text-muted'>Blog-powered services to help you learn and grow.</p>
            </div>

            <div className='row pt-3 pb-5 g-3'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div id='serv-one' className='serv-content rounded-4 p-3'>

                        <div className='serv-card-head text-end'>
                            <h1 className='fw-bolder' style={{fontSize:"60px"}}>01</h1>
                        </div>

                        <div className='serv-card-body pe-4 ps-3 pb-5'>
                            <h2 className='fw-fw-bolder fs-1'>Fresh & Engaging Content</h2>
                            <p className='pt-3'>We publish high-quality blog posts written with clarity, research, and purpose. Every article is crafted to help readers learn something meaningful—whether it's a new skill, industry insight, or creative perspective.</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div id='serv-two' className='serv-content rounded-4 p-3'>
                        
                        <div className='serv-card-head text-end'>
                            <h1 className='fw-bolder' style={{fontSize:"60px"}}>02</h1>
                        </div>

                        <div className='serv-card-body pe-4 ps-3 pb-5'>
                            <h2 className='fw-fw-bolder fs-1'>In-Depth Tutorials & Guides</h2>
                            <p className='pt-3'>Our blog offers hands-on tutorials, step-by-step project making breakdowns, and practical learning resources for developers, creators, and curious learners. Whether you're just real learning.</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div id='serv-three' className='serv-content rounded-4 p-3 '>

                        <div className='serv-card-head text-end'>
                            <h1 className='fw-bolder' style={{fontSize:"60px"}}>03</h1>
                        </div>

                        <div className='serv-card-body pe-4 ps-3 pb-5'>
                            <h2 className='fw-fw-bolder fs-1'>Community & Discussions</h2>
                            <p className='pt-3'>We believe learning becomes more powerful when ideas are shared. That’s why our platform encourages interaction—ask questions, share ideas connect with fellow readers.always part and supportive community.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service
