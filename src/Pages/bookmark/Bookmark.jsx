import React from 'react'
import './Bookmark.css';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useBookmark } from '../../Context/bookmark-context';
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { VscComment } from 'react-icons/vsc';
import { TbShare3 } from 'react-icons/tb';
// import {GoBookmarkFill} from  'react-icons/'
export default function Bookmark() {
  const { bookmarkPost } = useBookmark();
  return (
    <div>
      <span> <Navbar /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>

      <div id='bookmark-theme'>
       <div>{bookmarkPost.lenth>0?
          bookmarkPost.map((post) => {
            return (
              <div key={post._id} >
                <div id='bookmark-card'>
                  <div id='explore-post'>
                    <span>{post.content}</span>
                    <span><img src={post.mediaURL} alt='profile' id='post-media' /></span>
                    <div id='explore-post-icon'>
                      <span ><AiOutlineLike /></span>
                      <span ><BsBookmarkFill /></span>
                      <span><VscComment /></span>
                      <span><TbShare3 /></span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          :<span id='no-bookmark'>No Bokmark </span>}</div>

      </div>
    </div>
  )
}
