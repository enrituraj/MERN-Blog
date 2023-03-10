import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.scss'
const Home = () => {
  return (
    <>
      <Navbar />

      <header className="header">
        <div className="grid">

          <div className="container">

            <div className="overly1-card card">
              <h1>hi</h1></div>
            <div className="verticle1-card card">
              <h1>hi</h1></div>
          </div>
          <div className="horizontal-card card">
            <h1>hi</h1></div>
          <div className="container1">

            <div className="overly1-card card">
              <h1>hi</h1></div>
            <div className="verticle1-card card">
              <h1>hi</h1></div>
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