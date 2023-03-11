import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.scss'

import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'
import img4 from '../../assets/img/4.jpg'
import img5 from '../../assets/img/5.jpg'

const Home = () => {
  return (
    <>
      <Navbar />

      <header className="header">
        <div className="grid">

          <div className="container">

            <div className="verticle1-card card">
              <div className="img-box">                
                <img src={img4} alt="" />
              </div>
              <div className="blog-data">
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic corrupti nihil alias, saepe necessitatibus velit ipsam pariatur expedita provident?</p>
              </div>
            </div>
            <div className="overly1-card card">
              <img src={img2} alt="ggg" />
              <div className="blog-data">
                <h2>Main Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium eius earum quae a hic!</p>
              </div>
            </div>
          </div>
          <div className="horizontal-card card">
              <div className="img-box">
                
              <img src={img3} alt="" />
              </div>
              <div className="blog-data">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eos.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis velit quisquam unde reprehenderit placeat, autem nihil asperiores nemo officia labore.</p>
              </div>
            </div>
          <div className="container1">

            <div className="overly1-card card">
             
              <img src={img1} alt="ggg" />
              <div className="blog-data">
                <h2>Main Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugit, facere consectetur ut sunt ipsum!</p>
              </div>
              </div>
            <div className="verticle1-card card">
              
            <div className="img-box">                
                <img src={img5} alt="" />
              </div>
              <div className="blog-data">
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic corrupti nihil alias, saepe necessitatibus velit ipsam pariatur expedita provident?</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="trending">
        <h3>Trending Blog</h3>
        <div className="flex">
          <div className="trending-card">
            <h1>hello</h1>
          </div>
          <div className="trending-card">
            <h1>hello</h1>
          </div>
          <div className="trending-card">
            <h1>hello</h1>
          </div>
          <div className="trending-card">
            <h1>hello</h1>
          </div>
          <div className="trending-card">
            <h1>hello</h1>
          </div>
          <div className="trending-card">
            <h1>hello</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home