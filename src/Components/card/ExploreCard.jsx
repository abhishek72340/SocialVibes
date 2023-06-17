import React from 'react'
import { useBookmark } from '../../Context/bookmark-context';
import { useFavourite } from '../../Context/favourite-context';
import { AiOutlineLike } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { VscComment } from 'react-icons/vsc';
import { TbShare3 } from 'react-icons/tb';
import { BsBookmarkFill } from 'react-icons/bs';
export default function ExploreCard({ data }) {
    const { addBookmarkPost,bookmarkPost } = useBookmark();
    const {addFavouritePost}=useFavourite();
   
    return (
        <div>
            <div key={data._id} id='explore-card'>
                <div id='explore-data'>
                    <span>{data.content}</span>
                    <span><img src={data.mediaURL} alt='profile' id='post-media' /></span>
                    <div id='explore-post-icon'>
                        <span onClick={()=>addFavouritePost(data._id)}><AiOutlineLike /></span>
                        {
                            bookmarkPost.find(post=>post._id===data._id)? <span ><BsBookmarkFill /></span>:
                            <span onClick={() => addBookmarkPost(data._id)}><CiBookmark /></span>
                        }
                       
                        
                        <span><VscComment /></span>
                        <span><TbShare3 /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
