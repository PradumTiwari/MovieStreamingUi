import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import {addNowPlaying} from '../utils/movieSlice';


const Browse = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  const getNowPlaying=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
    const data=await response.json();
    console.log(data.results);
    dispatch(addNowPlaying(data.results));
  }

  useEffect(()=>{
    getNowPlaying();
  },[])

  return (
    <div className='w-full'>
      <div className='h-16 border-slate-600'> {/* Adjust height for Header */}
        <Header />
      </div>
     
     
    </div>
  );
}

export default Browse