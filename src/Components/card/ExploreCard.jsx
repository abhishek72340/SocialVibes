import React,{useState} from 'react'
import { useBookmark } from '../../Context/bookmark-context';
import { useFavourite } from '../../Context/favourite-context';
import  {useNavigate} from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import { VscComment } from 'react-icons/vsc';
import { BsBookmarkFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import CommentModal from '../modal/commentModal/CommentModal';

export default function ExploreCard({ explorePost }) {
    const [commentModal, setCommentModal] = useState(false)

    const { addBookmarkPost, bookmarkPost, deleteBookmarkPost } = useBookmark();
    const { addFavouritePost, favouritePost, deleteFavouritePost } = useFavourite();

    const navigate=useNavigate();

    const comentModalHandler=()=>{
        setCommentModal(!commentModal)
       
      }
    return (
        <div  >
            {
                explorePost.map((data) => {
                    return (
                        <div key={data._id} id='explore-card'>
                            <div id='explore-data'> 
                                <span>{data.content}</span>
                               <span onClick={()=>navigate(`/singlepost/${data._id}`)}><img src={data.mediaURL} alt='profile' id='post-media' /></span>
                                <div id='explore-post-icon'>
                                    {
                                        favouritePost.find(like => like._username === data._id) ? <span onClick={() => deleteFavouritePost(data._id)}><AiFillLike /> </span> :
                                            <span onClick={() => addFavouritePost(data._id)}><AiOutlineLike /></span>
                                    }

                                    {
                                        bookmarkPost.find(bookmark => bookmark._id === data._id) ? <span onClick={() => deleteBookmarkPost(data._id)}><BsBookmarkFill /></span> :
                                            <span onClick={() => addBookmarkPost(data._id)}><CiBookmark /></span>
                                    }
                                    <span onClick={comentModalHandler} ><VscComment /></span>
                                    {commentModal && <span><CommentModal/></span>}

                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
