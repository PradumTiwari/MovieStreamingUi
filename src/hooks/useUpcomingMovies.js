import {addUpcomingMovies} from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';


const useUpcomingMovies=()=>{

    const dispatch=useDispatch();

    const upcomingMovies=async()=>{
     
        const response=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const data=await response.json();
       
        dispatch(addUpcomingMovies(data.results));
      }
    
      useEffect(()=>{
        upcomingMovies();
      },[])
}

 export default useUpcomingMovies;