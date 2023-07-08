import { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { VscComment } from 'react-icons/vsc';
import { useBookmark } from '../../Context/bookmark-context';
import { useAuth } from '../../Context/auth-context';
import { useFavourite } from '../../Context/favourite-context';
import { AiFillLike } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { useUser } from '../../Context/user-context';
import { useExplore } from '../../Context/explore-context';
import EditModal from '../modal/editModal/EditModal';

export default function BookmarkCard({ data }) {
    console.log('data', data);
    const [commentModal, setCommentModal] = useState(false)
    const [edit, setEdit] = useState(false);
    const { deleteBookmarkPost } = useBookmark();
    const { userDetails } = useAuth();
    const { addFavouritePost, dislikePost } = useFavourite();

    const { DeletePost, explorePost } = useExplore();
    const { findUser } = useUser();

    const bookmarkPost = explorePost.find(item => item._id === data._id)

    const comentModalHandler = () => {
        setCommentModal(!commentModal)
    };
    const editHandler = () => {
        setEdit(!edit)
    };

    return (
        <div key={data._id}>
            <div id='bookmark-card'>
                <div id='explore-post'>
                    <div id='edit-icon'>
                        {data.username === userDetails?.username ? <span onClick={editHandler}><BsThreeDots /></span> : null}

                        {data.username === userDetails?.username ?
                            <div> {edit && <div id='edit-modal'>
                                {data.username === userDetails?.username ? <span ><EditModal data={data} /></span> : null}
                                {[data].username === userDetails?.username ? <span onClick={() => DeletePost(data._id)}><MdDeleteOutline id='dlt-icon' onClick={editHandler} /></span> : null}
                            </div>}
                            </div> : null}
                    </div>
                    <div id='post-user-info'>
                        <img src={findUser(data?.username)?.avatarUrl} alt="profile" id='profile-avatar' />
                        <div id='user-name'>
                            <span>{findUser(data?.username)?.firstName}</span>
                            <span>{findUser(data?.username)?.lastName}</span>
                        </div>
                        <span id='post-time'>{new Date(data?.updatedAt).toDateString()}</span>
                    </div>
                    <span id='post-user-username'>@{data?.username}</span><br />
                    <span>{data?.content}</span>
                    <span><img src={bookmarkPost?.mediaURL} alt='profile' id='post-media' /></span>
                    <div id='explore-post-icon'>
                        {
                            data?.likes?.likedBy?.find(item => item._id === userDetails._id) ? <span onClick={() => dislikePost(data._id)}><AiFillLike id='full-like-icon' /> <span className='like'>{data?.likes?.likeCount}</span></span> :
                                <span onClick={() => addFavouritePost(data._id)}><span className='like-full'>{data?.likes?.likeCount}</span><AiOutlineLike /></span>
                        }

                        <span onClick={() => deleteBookmarkPost(data?._id)}><BsBookmarkFill /></span>
                        <span onClick={comentModalHandler}><VscComment /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
