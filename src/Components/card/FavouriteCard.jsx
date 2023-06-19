import React from 'react'
import { useFavourite } from '../../Context/favourite-context';
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { VscComment } from 'react-icons/vsc';
import { TbShare3 } from 'react-icons/tb';
export default function FavouriteCad({favouritePost}) {
  const  {deleteFavouritePost} =useFavourite();
  return (
    <div>

      <div>
{
  favouritePost.map((post)=>{
    return(
      <div key={post._id}>
   <div id='bookmark-card'>
                <div id='explore-post'>
                    <span>{post.content}</span>
                    <span><img src={post.mediaURL} alt='profile' id='post-media' /></span>
                    <div id='explore-post-icon'>
                        <span ><AiOutlineLike /></span>
                        <span onClick={()=>deleteFavouritePost(post._id)}><BsBookmarkFill /></span>
                        <span><VscComment /></span>
                        <span><TbShare3 /></span>
                    </div>
                </div>
            </div>
      </div>
    )
  })
}

      </div>

    </div>
  )
}
