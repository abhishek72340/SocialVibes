import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { VscComment } from 'react-icons/vsc';
import { useBookmark } from '../../Context/bookmark-context';
import { useAuth } from '../../Context/auth-context';
import { useFavourite } from '../../Context/favourite-context';
import { AiFillLike } from 'react-icons/ai';

export default function({ post }) {
    const { deleteBookmarkPost } = useBookmark();
    const { userDetails } = useAuth();
    const { addFavouritePost, dislikePost } = useFavourite();

    return (
        <div key={post._id}>
            <div id='bookmark-card'>
                <div id='explore-post'>
                    <span>{post.content}</span>
                    <span><img src={post.mediaURL} alt='profile' id='post-media' /></span>
                    <div id='explore-post-icon'>

                        {
                            post.likes.likedBy.find(item => item._id === userDetails._id) ? <span onClick={() => dislikePost(post._id)}><AiFillLike id='full-like-icon' /> <span className='like'>{post.likes.likeCount}</span></span> :
                                <span onClick={() => addFavouritePost(post._id)}><span className='like-full'>{post.likes.likeCount}</span><AiOutlineLike /></span>
                        }
                        
                        <span onClick={() => deleteBookmarkPost(post._id)}><BsBookmarkFill /></span>
                        <span><VscComment /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
