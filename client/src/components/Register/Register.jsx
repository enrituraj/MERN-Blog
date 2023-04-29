import React from 'react'
import './Register.scss'
import Navbar  from './../Navbar/Navbar'
import { Link } from 'react-router-dom'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {


  const notify = () => {
    toast.error("Wow so easy!", {
      position: toast.POSITION.TOP_RIGHT
    })
  };


  return (
    <>
      <Navbar/>
      <ToastContainer 
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      theme="colored"
      />
    <div className="form-body">
      <div className="form-box">
        <div className="form-header">
          <h3>Register</h3>
        </div>
        <div className="form-inner-body">
          <form>
            <div className="input-group">
              <input type="text" placeholder='Name' name="name" id="name" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-group">
              <input type="text" placeholder='Username' name="username" id="username" />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-group">
              <input type="email" placeholder='Email' name="email" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input type="password" placeholder='Password' name="password" id="password" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-group">
                <input type="checkbox" name="term" id="term" />
              
              <label htmlFor='term' className="checkbox">
                i agree with rem & condition
              </label>
            </div>
            <div className="input-group">
              <button className='btn' type="submit" onClick={notify}>submit</button>
            </div>
          </form>
          <p>Alredy have an account <Link to={'/login'}>Login</Link></p>

        </div>
      </div>
    </div>
    <button className='btn' type="submit" onClick={notify}>submit</button>

    </>
  )
}

export default Register