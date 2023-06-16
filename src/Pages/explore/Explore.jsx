import React from 'react'
import './Explore.css';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useExplore } from '../../Context/explore-context'
import { AiOutlineLike } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { VscComment } from 'react-icons/vsc';
import { TbShare3 } from 'react-icons/tb';


export default function Explore() {
  const { explorePost, addBookmarkPost } = useExplore();
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
                      <span><img src={data.mediaURL} alt='img' id='post-media' /></span>
                      <div id='explore-post-icon'>
                        <span><AiOutlineLike /></span>
                        <span onClick={() => addBookmarkPost(data._id)}><CiBookmark /></span>
                        <span><VscComment /></span>
                        <span><TbShare3 /></span>
                      </div>
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
