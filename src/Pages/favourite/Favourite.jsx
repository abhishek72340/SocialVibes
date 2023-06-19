import React from 'react'
import './Favourite.css'
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useFavourite } from '../../Context/favourite-context'
import FavouriteCard from '../../Components/card/FavouriteCard';
export default function Favourite() {
  const  {favouritePost} =useFavourite();
  

  return (

    <div>
      <span> <Navbar /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>
      
      {
        <FavouriteCard favouritePost={favouritePost}/>
      }
    </div>
  )
}
