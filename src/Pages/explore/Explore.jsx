import React from 'react'
import './Explore.css';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useExplore } from '../../Context/explore-context'

export default function Explore() {
  const { explorePost } = useExplore();
  return (
    <div>
      <span> <Navbar style={{ position: 'sticky' }} /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>

      <div id='explore-theme'>
        <div id='explore-theme-data'>

          <div >
            {
              explorePost.map((data) => {
                return (
                  <div key={data._id} id='explore-card'>
<div id='explore-data'>
                    <span>{data.content}</span>
                   <span><img src={data.mediaURL} alt='img'  id='post-media'/></span> 
                   </div>
                  </div>
                )
              })
            }
          </div>



        </div>
      </div>
    </div>
  )
}
