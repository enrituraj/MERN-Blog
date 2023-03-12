import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  const [menu, setmenu] = useState(false)
  const [theme, settheme] = useState('Day')

  function togleMenu(){
    menu ? setmenu(false) : setmenu(true)
  }
  function changeTheme(themeName){
    (themeName === 'Day') ? settheme('Night') : settheme('Day')
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2>MERN-Blog</h2>
        </div>
        <ul className= {`menu menu-group ${menu ? 'active' : ''}`}>
          { ['Home','Blog','contact','login'].map((item)=>{
            return(
              <>
                <li key={item} className="menu-item">
                  <Link to={'/'+item} className="menu-link">{item}</Link>
                </li>
              </>
            )
            })
          }
          <li class="menu-item lg-hidden">
            <Link class="menu-link" to="/blog">Register</Link>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu-item">
            <Link onClick={()=>changeTheme('Night')} className={`menu-link ${(theme === 'Day') ? 'd-none' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
            </Link>
            <Link onClick={()=>changeTheme('Day')} className={`menu-link ${(theme === 'Night') ? 'd-none' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="" className="menu-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
            </Link>
          </li>
          <li className="menu-item lg-hidden">
            <Link onClick={()=>togleMenu()} className="menu-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </Link>
          </li>
          <li className="menu-item sm-none">
            <Link to="/regi" className="menu-link btn sm-hidden">Sign Up</Link>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Navbar