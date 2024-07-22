import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
 
 useNowPlayingMovies();
 usePopularMovies();
 useTopRated();
 useUpcomingMovies();
  return (
    <div className='w-screen h-full'>
      <div className=''> {/* Adjust height for Header */}
        <Header />
      <MainContainer/>
      <SecondaryContainer/>
      </div>
     
     
    </div>
  );
}

export default Browse