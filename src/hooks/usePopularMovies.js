import {addPopularMovies} from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';


const usePopularMovies=()=>{

    const dispatch=useDispatch();

    const getNowPlaying=async()=>{
     
        const response=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const data=await response.json();
       
        dispatch(addPopularMovies(data.results));
      }
    
      useEffect(()=>{
        getNowPlaying();
      },[])
}

 export default usePopularMovies;