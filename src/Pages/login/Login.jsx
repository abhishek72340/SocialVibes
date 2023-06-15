import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import media from '../../images/media.svg'
export default function Login() {
  return (
    <div>
      <div id='login-page'>
        <img src={media} alt="svg" id='login-svg-image' />

        <div id='login-form-container'>
          <form id='login-form'>

            <input type="email" id='email' placeholder='email' required />
            <input type="password" id='password' placeholder='password' required />

            <button id='login-button'>Login</button>
            <button id='guest-login-button' >Login as a guest</button>
            <div id='dont-have-account'> <span>Don't have an account? </span><Link to='/signup' id='login-link'>Signup</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}
