import React from 'react'
import './Main.css';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import PostTheme from '../../Components/postTheme/PostTheme'
export const Main = () => {
  return (
    <div >

      <span> <Navbar /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>
      <span><PostTheme /></span>


    </div>
  )
}
