import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import media from '../../images/media.svg'
import { useAuth } from '../../Context/auth-context'

export default function Login() {
  const {loginHandler,LoginDataHandler,userDetails,applyDummyData}=useAuth();
  return (
    <div>
      <div id='login-page'>
        <img src={media} alt="svg" id='login-svg-image' />

        <div id='login-form-container'>

          <form id='login-form' onSubmit={loginHandler}>
            <input type="text" id='username' placeholder='username' value={userDetails.username}  onChange={LoginDataHandler}  required />
            <input type="password" id='password' placeholder='password' value={userDetails.password}  onChange={LoginDataHandler}  required />
            <button type='submit' id='login-button'>Login</button>
            <button id='guest-login-button' onClick={applyDummyData}>Login as a guest</button>
            <div id='dont-have-account'> <span>Don't have an account? </span><Link to='/signup' id='login-link'>Signup</Link></div>

          </form>
        </div>
      </div>
    </div>
  )
}
