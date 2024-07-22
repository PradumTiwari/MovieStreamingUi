import {addPopularMovies,addTopRatedMovies} from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';


const useTopRated=()=>{

    const dispatch=useDispatch();

    const topRated=async()=>{
     
        const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const data=await response.json();
       
        dispatch(addTopRatedMovies(data.results));
      }
    
      useEffect(()=>{
        topRated();
      },[])
}

 export default useTopRated;