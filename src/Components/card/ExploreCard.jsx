import React, { useState } from 'react'
import { useBookmark } from '../../Context/bookmark-context';
import { useFavourite } from '../../Context/favourite-context';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { VscComment } from 'react-icons/vsc';
import { BsBookmarkFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { useExplore } from '../../Context/explore-context';
import EditModal from '../modal/editModal/EditModal';
import { useAuth } from '../../Context/auth-context';
// import { useUser } from '../../Context/user-context';

export default function ExploreCard({ explorePost }) {
    const [commentModal, setCommentModal] = useState(false)
    const { addBookmarkPost, bookmarkPost, deleteBookmarkPost } = useBookmark();
    const { addFavouritePost, deleteFavouritePost } = useFavourite();
    const [edit, setEdit] = useState(false);

    const { DeletePost } = useExplore();
    const { userDetails } = useAuth();
    // const { user } = useUser();
    const navigate = useNavigate();
    // const userData = user?.find((item) => item.username === explorePost?.username)

    const comentModalHandler = () => {
        setCommentModal(!commentModal)
    };
    const editHandler = () => {
        setEdit(!edit)
    }

    return (
        <div  >
            {
                explorePost.map((data) => {
                    return (
                        <div key={data._id} id='explore-card'>
                            <div id='explore-data'>
                                <span>{data.content}</span>

                                <div id='edit-icon'>

                                    {/* <span onClick={editHandler} ><AiOutlineEdit /></span> */}
                                    {data.username === userDetails?.username ? <span onClick={editHandler}><BsThreeDots /></span> : null}

                                    {data.username === userDetails?.username ?
                                        <div> {edit && <div id='edit-modal'>
                                            {data.username === userDetails?.username ? <span><EditModal data={data} /></span> : null}
                                            {data.username === userDetails?.username ? <span onClick={() => DeletePost(data._id)}><MdDeleteOutline id='dlt-icon' /></span> : null}
                                        </div>}
                                        </div> : null}

                                </div>
                                <span onClick={() => navigate(`/singlepost/${data._id}`)}><img src={data.mediaURL} alt='profile' id='post-media' /></span>
                                <div id='explore-post-icon'>

                                    {
                                        data.likes.likedBy.find(item => item._id === userDetails._id) ? <span onClick={() => deleteFavouritePost(data._id)}><AiFillLike id='full-like-icon' /> <span className='like'>{data.likes.likeCount}</span></span> :
                                            <span onClick={() => addFavouritePost(data._id)}><span className='like-full'>{data.likes.likeCount}</span><AiOutlineLike /></span>
                                    }

                                    {
                                        bookmarkPost.find(bookmark => bookmark._id === data._id) ? <span onClick={() => deleteBookmarkPost(data._id)}><BsBookmarkFill /></span> :
                                            <span onClick={() => addBookmarkPost(data._id)}><CiBookmark /></span>
                                    }
                                    <span onClick={comentModalHandler} ><VscComment /></span>

                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
