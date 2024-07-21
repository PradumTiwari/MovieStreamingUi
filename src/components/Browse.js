import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
 
 useNowPlayingMovies();

  return (
    <div className='w-full'>
      <div className='h-16 border-slate-600'> {/* Adjust height for Header */}
        <Header />
      <MainContainer/>
      <SecondaryContainer/>
      </div>
     
     
    </div>
  );
}

export default Browse