import React from 'react'
import './Explore.css';
import ExploreCard from '../../Components/card/ExploreCard';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useExplore } from '../../Context/explore-context'

export default function Explore() {
  const { explorePost } = useExplore();
  return (
    <div>
      <span> <Navbar style={{ position: 'sticky' }} /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>

      <div id='explore-theme'>
        <div id='explore-theme-data'>
          <div >
            {
              explorePost.map((data) => <ExploreCard data={data} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
