import React, { useState } from 'react'
import './PostTheme.css';
import me from '../../images/me.jpg'
import ExploreCard from '../../Components/card/ExploreCard'
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { useExplore } from '../../Context/explore-context';
import { useAuth } from '../../Context/auth-context';
export default function PostTheme() {
  const [textInput, setTextInput] = useState('')
  const { NewPost } = useExplore();
  const { detail } = useAuth();
  const { explorePost } = useExplore();

  const textareaChangeHandler = (e) => {
    setTextInput(e.target.value)
  }

  return (
    <div id='post-theme'>
      <div id='post-theme-data'>
        <div id='add-post-block'>

          <div id='add-post-icons'>
            <div id='post-icon'>
              <span><MdPhotoSizeSelectActual /></span>
              <span><BsEmojiSmileFill /></span>
            </div>
            <span id='post-theme-post-button' onClick={() => NewPost({ username: detail.username, content: textInput })}>Post</span>

          </div>
          <div id='profile-add'>
            <span><img src={me} alt="prifle" id='add-post-profile' /></span>
            <textarea placeholder='whats happening' id="add-post-input-filed" cols="30" rows="10" onChange={textareaChangeHandler}></textarea>
          </div>
        </div>

        <div id='upload-post-theme'>{<ExploreCard explorePost={explorePost} />}</div>
      </div>

    </div>
  )
}
