import React from 'react'
import './Suggestion.css';
import { useSuggestion } from '../../Context/suggestion-context';
export const Suggestion = () => {
  const { suggestUser } = useSuggestion();

  return (
    <div>
      {
        suggestUser.map((user) => {
          return (
            <div id='suggestion-profiles'>
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
