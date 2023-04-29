import React from 'react'
import Navbar from '../Navbar/Navbar'
import './../Register/Register.scss'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <><Navbar/>
    <div className="form-body">
      <div className="form-box">
        <div className="form-header">
          <h3>Login</h3>
        </div>
        <div className="form-inner-body">
          <form action="" method="post">
            <div className="input-group">
              <input type="text" placeholder='Username' name="username" id="username" />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-group">
              <input type="password" placeholder='Password' name="password" id="password" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-group">
                <input type="checkbox" name="term" id="term" />
              
              <label htmlFor='term' className="checkbox">
                Remember me
              </label>
            </div>
            <div className="input-group">
              <button className='btn' type="submit">submit</button>
            </div>
          </form>
          <p>Not have an account <Link to={'/register'}>Click Here</Link></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login