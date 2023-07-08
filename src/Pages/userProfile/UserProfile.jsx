import './UserProfile.css';
import {useParams} from 'react-router-dom';
import ProfileModal from '../../Components/modal/profileModal/ProfileModal'
// import me from '../../images/me.jpg'
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { FiLogOut } from 'react-icons/fi';
import { useExplore } from '../../Context/explore-context';
import { useUser } from '../../Context/user-context';
import ExploreCard from '../../Components/card/ExploreCard'
import Explore from '../explore/Explore';
import { useAuth } from '../../Context/auth-context';
export default function UserProfile() {
  const {explorePost}=useExplore();
  const {user} =useUser();
const {userDetails}=useAuth();


  const {username}=useParams();
  const post = explorePost.filter((item) => item.username === username);
  const userProfile = user.find((item) => item.username === username);
  console.log('userprofile',userProfile)
  console.log('username',username)
  console.log('user',user)

  return (
    <div>
      <span> <Navbar /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>

      <div id='profile-information-container'>
        <div id='profile-information'>
          <div id='profile-edit'>
            <div id='profile-name'>
              <img src={userProfile?.avatarUrl} alt="profile" id='user-profile-picture' />
              <span id='user-name-highlight'>{userProfile?.firstName}{userProfile?.lastName}</span>
            </div>
            <div id='edit-button-icon'> 
            {userDetails.username===username?<ProfileModal userProfile={userProfile} />:<button>Follow</button>}
              <span id='icon'><FiLogOut /></span>
            </div>
          </div>
         
          <div id='user-bio'>
            <span>@{userProfile?.username}</span>
            <div id='bio-link'><span>{userProfile?.bio}</span>
              <a href="https://github.com/abhishek72340">github.com/abhishek72340</a>
              <div id='following'>
                <span>{post?.length} Post</span>
                <span>{userProfile?.following?.length} Following</span>
                <span>{userProfile?.followers?.length} Follower</span>

              </div>
            </div>
          </div>

        </div>
      </div>
<div id='user-profile-post'><ExploreCard post={post} /></div>
    </div>
  )
}
