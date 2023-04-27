import React from 'react'
import './Register.scss'
import Navbar  from './../Navbar/Navbar'
const Register = () => {
  return (
    <>
      <Navbar/>
    <div className="form-body">
      <div className="form-box">
        <div className="form-header">
          <h3>Register</h3>
        </div>
        <div className="form-inner-body">
          <form action="" method="post">
            <div className="input-group">
              <input type="text" name="name" id="name" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-group">
              <input type="text" name="username" id="username" />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-group">
              <input type="email" name="email" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input type="password" name="password" id="password" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-group">
              <div id='#term' className="checkbox">
                <input type="checkbox" name="term" id="term" />
                i agree with rem & condition
              </div>
            </div>
            <div className="input-group">
              <button className='btn' type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register