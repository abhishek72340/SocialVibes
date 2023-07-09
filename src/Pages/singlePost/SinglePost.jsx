// import React from 'react'
// import './SinglePost.css';
// import Navbar from '../../Components/navbar/Navbar'
// import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
// import RightSideBar from "../../Components/rightSideBar/RightSideBar";
// import { useParams } from 'react-router-dom';
// import { useExplore } from '../../Context/explore-context';
// import { useBookmark } from '../../Context/bookmark-context';
// import { useFavourite } from '../../Context/favourite-context';
// import { AiOutlineLike } from 'react-icons/ai';
// import { CiBookmark } from 'react-icons/ci';
// import { VscComment } from 'react-icons/vsc';
// import { BsBookmarkFill } from 'react-icons/bs';
// import { AiFillLike } from 'react-icons/ai';
// export default function SinglePost() {
//   const { addBookmarkPost, bookmarkPost, deleteBookmarkPost } = useBookmark();
//   const { addFavouritePost, favouritePost, deleteFavouritePost } = useFavourite();
//   const { id } = useParams();
//   const { explorePost } = useExplore();

//   const single = explorePost.find(post => post._id === id);

//   return (
//     <div>
//       <span> <Navbar style={{ position: 'sticky' }} /></span>
//       <span ><LeftSideBar /></span>
//       <span ><RightSideBar /></span>


//       <div id='single-post-container'>
//         <div id='explore-card'>
//           <div id='explore-data'>
//             <span>{single?.content}</span>
//             <span ><img src={single?.mediaURL} alt='profile' id='post-media' /></span>
//             <div id='explore-post-icon'>
//               {
//                 favouritePost.find(like => like._username === single._id) ? <span onClick={() => deleteFavouritePost(single._id)}><AiFillLike /> </span> :
//                   <span onClick={() => addFavouritePost(single._id)}><AiOutlineLike /></span>
//               }

//               {
//                 bookmarkPost.find(bookmark => bookmark._id === single._id) ? <span onClick={() => deleteBookmarkPost(single._id)}><BsBookmarkFill /></span> :
//                   <span onClick={() => addBookmarkPost(single._id)}><CiBookmark /></span>
//               }
//               <span><VscComment /></span>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
