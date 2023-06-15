import React from 'react'
import './RightSideBar.css'
import { Suggestion } from '../suggestion/Suggestion'
import { NavLink } from 'react-router-dom'

export default function RightSideBar() {
  const getActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? 'blueviolet' : '',
    color: isActive ? 'white' : 'black',


  });
  return (
    <div>
      <div id='right-sidebar-theme'>

        <div id='right-sidebar-button'>
          <button className='button'>Trending</button>
          <button className='button'>Latest</button>
        </div>
        <span id='suggestion-for-you'>Suggestions for you</span>
        <Suggestion />

      </div>

      <div id='right-sidebar-button-responsive'>
        <NavLink style={getActiveStyle} className='responsive-button'>Trending</NavLink>
        <NavLink style={getActiveStyle} className='responsive-button'>Latest</NavLink>
      </div>

    </div>
  )
}
