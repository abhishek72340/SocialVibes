import React from 'react'
import './Suggestion.css';
import { useSuggestion } from '../../Context/suggestion-context';
import {useNavigate} from 'react-router-dom';
export const Suggestion = () => {
  const { suggestUser } = useSuggestion();

  const navigate=useNavigate();

  return (
    <div>
      {
        suggestUser.map((user) => {
          return (
            <div key ={user._id} id='suggestion-profiles' onClick={()=>navigate(`/singleuser/${user._id}`)}>
              <span id='suggestion-profile-picture' ><img src={user.avatarUrl} alt="img" id='suggestion-profile-picture' /></span>
              <span id='suggestion-name'>{user.firstName}{user.lastName}</span>
              <span id='suggestion-username'>{user.username}</span>
              <button id='suggestion-follow-button'>+ Follow</button>
            </div>
          )
        })
      }






    </div>
  )
}
