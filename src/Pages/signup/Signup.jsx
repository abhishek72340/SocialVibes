import React from 'react'

import { Link } from 'react-router-dom'
import media from '../../images/media.svg'
export default function Signup() {
  return (
    <div>
      <div id='login-page'>
        <img src={media} alt="svg" id='login-svg-image' />

        <div id='login-form-container'>
          <form id='login-form'>

            <input type="name" id='name' placeholder='name' required />
            <input type="email" id='email' placeholder='email' required />
            <input type="password" id='password' placeholder='password' required />
            <input type="password" id='confirm-password' placeholder='confirm password' required />

            <button id='login-button'>Signup</button>
            <div id='dont-have-account'> <span>Go to login </span><Link to='/login' id='signup-link'>Login</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}
