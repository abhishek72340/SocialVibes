import React from 'react'
import './PostTheme.css';
import me from '../../images/me.jpg'
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsEmojiSmileFill } from 'react-icons/bs';
export default function PostTheme() {
  return (
    <div id='post-theme'>
      <div id='post-theme-data'>
        <div id='add-post-block'>

          <div id='add-post-icons'>
            <span><MdPhotoSizeSelectActual /></span>
            <span><BsEmojiSmileFill /></span>
          </div>

          <div id='profile-add'>
            <span><img src={me} alt="prifle" id='add-post-profile' /></span>
            <textarea placeholder='whats happening' id="add-post-input-filed" cols="30" rows="10"></textarea>
          </div>
          
        </div>
      </div>
    </div>
  )
}
