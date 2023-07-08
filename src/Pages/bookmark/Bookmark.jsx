import React from 'react'
import './Bookmark.css';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useBookmark } from '../../Context/bookmark-context';
import BookmarkCard from '../../Components/card/BookmarkCard';
// import {GoBookmarkFill} from  'react-icons/'
export default function Bookmark() {
  const { bookmarkPost } = useBookmark();
  return (
    <div>
      <span> <Navbar /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>
      <div id='bookmark-theme'>
        <div>
          {
            bookmarkPost.length ?
              bookmarkPost.map((data) => <BookmarkCard data={data} />) :
              <span id='no-bookmark'>No Bokmark </span>
          }
        </div>
      </div>
    </div>
  )
}
