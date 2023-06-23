import React from 'react'
import './SingleUser.css';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useUser } from '../../Context/user-context';
import { useParams } from 'react-router-dom';
export default function SingleUser() {
  const { userId } = useParams();
  const { user } = useUser();
  const singleUser = user.find(post => post._id === userId);



  return (
    <div>
      <span> <Navbar style={{ position: 'sticky' }} /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>
      {/* <img src={singleUser.avatarUrl} alt="user" /> */}

      <div id='single-user'>
        <div id='explore-card'>

          <div id='explore-data'>
            <span>{singleUser?.firstName} {singleUser?.lastName}</span>
            <span ><img src={singleUser?.avatarUrl} alt='profile' id='user-media' /></span>
            <div>{singleUser?.bio}</div>
            <a href='https://abhishek-singh-rana.netlify.app/'>{singleUser?.website}</a>


          </div>
        </div>
      </div>
    </div>
  )
}
