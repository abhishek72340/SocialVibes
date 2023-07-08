import React from 'react'
import './BottomNavbar.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { MdExplore } from 'react-icons/md';
import { BsBookmarks } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { AiFillPlusCircle } from 'react-icons/ai';
import me from '../../images/me.jpg'
export default function BottomNavbar() {
  return (
    <div>
      <div id='bottom-nav'>
        <nav id='navbar'>
          <NavLink><AiOutlineHome /></NavLink>
          <NavLink><MdExplore /></NavLink>
          <NavLink><BsBookmarks /></NavLink>
          <span id='bottom-nav-post-button'><AiFillPlusCircle /></span>
          {/* <NavLink><AiOutlineHeart /></NavLink> */}
          <NavLink><FiLogOut /></NavLink>
          
          <span ><img src={me} alt="profile" id='bottom-profile-picture' /></span>
        </nav>
      </div>
    </div>
  )
}
