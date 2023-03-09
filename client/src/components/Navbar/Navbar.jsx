import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2>MERN-Blog</h2>
        </div>
        <ul className="menu">
          { ['home','login','register','blog'].map((item)=>{
            return(
              <>
                <li key={item} className="menu-item">
                  <Link to={'/'+item} className="menu-link">{item}</Link>
                </li>
              </>
            )
            })
          }
        </ul>
        <ul className="menu">
          { ['🌙','📃'].map((item)=>{
            return(
              <>
                <li key={item} className="menu-item">
                  <Link to={'/'+item} className="menu-link">{item}</Link>
                </li>
              </>
            )
            })
          }
          <li className="menu-item">
            <Link to="/regi" className="menu-link btn">Sign Up</Link>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Navbar