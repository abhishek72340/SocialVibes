import React from 'react'
import './Bookmark.css';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useBookmark } from '../../Context/bookmark-context';
import { AiOutlineLike } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { VscComment } from 'react-icons/vsc';
import { TbShare3 } from 'react-icons/tb';
export default function Bookmark() {
  const { bookmarkPost } = useBookmark();
  return (
    <div>
      <span> <Navbar /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>

      {bookmarkPost ? (
        bookmarkPost.map((data) => {
          return (
            <div key={data._id} id='explore-card'>
              <div id='explore-data'>
                <span>{data.content}</span>
                <span><img src={data.mediaURL} alt='img' id='post-media' /></span>
                <div id='explore-post-icon'>
                  <span><AiOutlineLike /></span>
                  <span ><CiBookmark /></span>
                  <span><VscComment /></span>
                  <span><TbShare3 /></span>
                </div>
              </div>
            </div>
          )
        })
      ) : <div id='bookmark-theme'>
        No Bookmark
      </div>}


    </div>
  )
}
