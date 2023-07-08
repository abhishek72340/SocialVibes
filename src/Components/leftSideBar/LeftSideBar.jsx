import React from 'react'
import './LeftSideBar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import BottomNavbar from '../bottomNavbar/BottomNavbar'
import { PostModal } from '../modal/PostModal';
import { useAuth } from '../../Context/auth-context';
import { MdExplore } from 'react-icons/md';
import { BsBookmarks } from 'react-icons/bs';
import { MdOutlineFeedback } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { AiFillPlusCircle } from 'react-icons/ai';
// import me from '../../images/me.jpg'
import { useUser } from '../../Context/user-context';

export default function LeftSideBar() {
  const { userLogout,userDetails } = useAuth();
  const {user}=useUser();
  const users=user.find(item=>item.username===userDetails.username)
  const navigate = useNavigate()

  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? 'blueviolet' : '',


  });
  return (
    <div>
      <div id='left-sidebar-block'>
        <div id='left-sidebar-theme'>
          <div id='left-sidebar-data'>
            <NavLink to='/' style={getActiveStyle}><div className='left-sidebar-data-icon'><span className='left-sidebar-icon' ><MdOutlineFeedback /></span><span className='left-sidebar-link'>Feed</span></div></NavLink>
            <NavLink to='/explore' style={getActiveStyle}><div className='left-sidebar-data-icon'><span className='left-sidebar-icon'><MdExplore /></span><span className='left-sidebar-link'>Explore</span></div></NavLink>
            <NavLink to='/bookmark' style={getActiveStyle}><div className='left-sidebar-data-icon'><span className='left-sidebar-icon'><BsBookmarks /></span><span className='left-sidebar-link'>Bookmarks</span></div></NavLink>
            <NavLink to='/login' style={getActiveStyle}><div className='left-sidebar-data-icon' onClick={userLogout}><span className='left-sidebar-icon'><FiLogOut /></span><span className='left-sidebar-link'>Logout</span></div></NavLink>
            <span id='left-sidebar-post'><PostModal /></span>
            <div id='add-post-button'><AiFillPlusCircle /></div>
          </div>
        </div>

        {/* user profile */}
        <div id='profile-highlight' onClick={() => navigate(`/userprofile/${users?.username}`)} >
          <span ><img src={users?.avatarUrl} alt="img" id='profile-picture' /></span>
          <span id='profile-name'>{users?.firstName}</span>
          <span style={{ marginLeft: '-4.3rem', marginTop: "1rem", fontSize: '11px' }} id='profile-username'>@{users?.username}</span>
        </div>
      </div>

      {/* bottom navbar */}
      <BottomNavbar />
    </div>
  )
}
