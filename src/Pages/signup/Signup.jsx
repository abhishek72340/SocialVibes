import React from 'react'
import './Signup.css';
import { useAuth } from '../../Context/auth-context'
import { Link } from 'react-router-dom'
import media from '../../images/media.svg'
export default function Signup() {
  const { signupHandler, signupInputChange, userData } = useAuth();
  return (
    <div id='signup-theme'>
      <div id='login-page'>
        <img src={media} alt="svg" id='login-svg-image' />

        <div id='login-form-container'>
          <form id='login-form' onSubmit={signupHandler}>

            <input type="text" id='name' onChange={signupInputChange} value={userData.firstName} placeholder='firstname' required />
            <input type="text" id='name' onChange={signupInputChange} value={userData.lastName} placeholder='lastName' required />
            <input type="email" id='name' onChange={signupInputChange} value={userData.email} placeholder='email' required />
            <input type="text" id='username' onChange={signupInputChange} value={userData.username} placeholder='username' required />
            <input type="password" id='password' onChange={signupInputChange} value={userData.password} placeholder='password' required />
            <input type="password" id='confirm-password' onChange={signupInputChange} value={userData.confirmPassword} placeholder='confirm password' required />

            <button type='submit' id='login-button' >Signup</button>
            <div id='dont-have-account'> <span>Go to login </span><Link to='/login' id='signup-link'>Login</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}
