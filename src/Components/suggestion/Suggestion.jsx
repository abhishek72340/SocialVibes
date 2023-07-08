import React from 'react'
import './Suggestion.css';
// import { useUser } from '../../Context/suggestion-context';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/user-context'
import {useAuth} from '../../Context/auth-context';

export const Suggestion = () => {
  const { user } = useUser();
    const navigate = useNavigate();
  const { FollowUser,UnfollowUser } = useUser();
  const { userDetails} = useAuth();

  return (
    <div>
      {
        user.map((user) => {
                 return (
            <div key={user._id} id='suggestion-profiles' >
              <span id='suggestion-profile-picture' onClick={() => navigate(`/userprofile/${user?.username}`)}><img src={user.avatarUrl} alt="img" id='suggestion-profile-picture' /></span>
              <span id='suggestion-name'>{user.firstName}{user.lastName}</span>
              <span id='suggestion-username'>@{user.username}</span>
              <button id='suggestion-follow-button' onClick={() =>
                user?.followers?.find((user) => user?._id === userDetails?._id)
                  ? UnfollowUser(user._id)
                  : FollowUser(user._id)
              }>{user?.followers?.find((user) => user?._id === userDetails?._id)
                ? "Following"
                :"Follow"}</button>
            </div>
          )
        })
      }
    </div>
  )
}
