import React, { useState } from 'react'
import './PostTheme.css';
import me from '../../images/me.jpg'
import ExploreCard from '../../Components/card/ExploreCard'
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { useExplore } from '../../Context/explore-context';
import { useAuth } from '../../Context/auth-context';
import { useUser } from '../../Context/user-context';
export default function PostTheme() {
  const [filter, setFilter] = useState("latest");
  const [textInput, setTextInput] = useState('')
  const { NewPost } = useExplore();
  const { detail, userDetails } = useAuth();
  const { explorePost } = useExplore();
  const { isFollow } = useUser();

  const textareaChangeHandler = (e) => {
    setTextInput(e.target.value)
  };

  const homeData = explorePost?.filter(
    (post) =>
      isFollow(post?.username) || post?.username === userDetails?.username
  );
  let filteredPosts = homeData;
  if (filter === "trending") {
    filteredPosts = homeData.sort(
      (post1, post2) => post2?.likes?.likeCount - post1?.likes?.likeCount
    );
  } else if (filter === "latest") {
    filteredPosts = homeData.sort(
      (post1, post2) => new Date(post2?.createdAt) - new Date(post1?.createdAt)
    );
  } else if (filter === "oldest") {
    filteredPosts = homeData.sort(
      (post1, post2) => new Date(post1?.createdAt) - new Date(post2?.createdAt)
    );
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
            <span><img src={userDetails?.avatarUrl} alt="profile" id='add-post-profile' /></span>
            <textarea placeholder='whats happening...' id="add-post-input-filed" className='text-red-500' cols="30" rows="10" onChange={textareaChangeHandler}></textarea>
          </div>
        </div>

{/* FIlter */}
        <div className="right cursor-pointer mt-[12rem]  ">
          <div className="filter-options  z-5 ">
            <select
              className="bg-cyan-800 text-white p-1 ml-[-2.3rem] absolute"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="trending">Trending</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        <div id='upload-post-theme'>{<ExploreCard post={homeData}  />}</div>
      </div>

    </div>
  )
}
