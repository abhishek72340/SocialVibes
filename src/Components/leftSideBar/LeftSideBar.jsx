import React from 'react'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom';
import BottomNavbar from '../bottomNavbar/BottomNavbar'
import { PostModal } from '../modal/PostModal';
import { AiOutlineHome } from 'react-icons/ai';
import { MdExplore } from 'react-icons/md';
import { BsBookmarks } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { AiFillPlusCircle } from 'react-icons/ai';
import me from '../../images/me.jpg'

export default function LeftSideBar() {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? 'blueviolet' : '',

  });
  return (
    <div>
      <div id='left-sidebar-block'>
        <div id='left-sidebar-theme'>
          <div id='left-sidebar-data'>
            <NavLink to='/' style={getActiveStyle}><div className='left-sidebar-data-icon'><span className='left-sidebar-icon' ><AiOutlineHome /></span><span className='left-sidebar-link'>Home</span></div></NavLink>
            <NavLink to='/explore' style={getActiveStyle}><div className='left-sidebar-data-icon'><span className='left-sidebar-icon'><MdExplore /></span><span className='left-sidebar-link'>Explore</span></div></NavLink>
            <NavLink to='/bookmark' style={getActiveStyle}><div className='left-sidebar-data-icon'><span className='left-sidebar-icon'><BsBookmarks /></span><span className='left-sidebar-link'>Bookmarks</span></div></NavLink>
            <NavLink to='/favourite' style={getActiveStyle}><div className='left-sidebar-data-icon'><span className='left-sidebar-icon'><AiOutlineHeart /></span><span className='left-sidebar-link'>Favourites</span></div></NavLink>
            <NavLink to='/login' style={getActiveStyle}><div className='left-sidebar-data-icon'><span className='left-sidebar-icon'><FiLogOut /></span><span className='left-sidebar-link'>Logout</span></div></NavLink>
            <span id='left-sidebar-post'><PostModal /></span>
            <div id='add-post-button'><AiFillPlusCircle /></div>
          </div>
        </div>
        <div id='profile-highlight'>
          <span ><img src={me} alt="img" id='profile-picture' /></span>
          <span id='profile-name'>Abhishek Singh</span>
          <span style={{ marginLeft: '-6.5rem', marginTop: "1rem", fontSize: '11px' }} id='profile-username'>@abhisheksingh</span>
        </div>
      </div>

      {/* bottom navbar */}
      <BottomNavbar />
    </div>
  )
}
