import React from 'react'
import './Explore.css';
import ExploreCard from '../../Components/card/ExploreCard';
import Navbar from '../../Components/navbar/Navbar'
import LeftSideBar from "../../Components/leftSideBar/LeftSideBar";
import RightSideBar from "../../Components/rightSideBar/RightSideBar";
import { useExplore } from '../../Context/explore-context'
import { Spinner } from '@chakra-ui/react'

export default function Explore() {
  const { explorePost, isLoading } = useExplore();

  return (
    <div>
      <span> <Navbar style={{ position: 'sticky' }} /></span>
      <span ><LeftSideBar /></span>
      <span ><RightSideBar /></span>

      <div id='explore-theme'>
        <div id='explore-theme-data'>
          <div >
            {
              isLoading ? <span id='explore-loading'>
                {<Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                />}
              </span> :<ExploreCard explorePost={explorePost} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
