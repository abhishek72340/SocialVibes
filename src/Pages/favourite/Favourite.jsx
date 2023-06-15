import React from 'react'
import './Favourite.css'
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
export default function Favourite() {
  return (

    <div>
      <span> <Navbar /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>
      <div id='favourite-theme'>No Favourites Post</div>
    </div>
  )
}
