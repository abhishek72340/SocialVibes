import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { VscComment } from 'react-icons/vsc';
import { TbShare3 } from 'react-icons/tb';
import { useBookmark } from '../../Context/bookmark-context';
export default function ({ post }) {
    const  {deleteBookmarkPost} =useBookmark();
    return (
        <div key={post._id}>
            <div id='bookmark-card'>
                <div id='explore-post'>
                    <span>{post.content}</span>
                    <span><img src={post.mediaURL} alt='profile' id='post-media' /></span>
                    <div id='explore-post-icon'>
                        <span ><AiOutlineLike /></span>
                        <span onClick={()=>deleteBookmarkPost(post._id)}><BsBookmarkFill /></span>
                        <span><VscComment /></span>
                        <span><TbShare3 /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
