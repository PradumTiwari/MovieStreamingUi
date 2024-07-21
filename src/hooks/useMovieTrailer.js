import {useEffect} from 'react';
import {API_OPTIONS} from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {addTrailerVideo} from '../utils/movieSlice';

const useMovieTrailer=({video})=>{
    const {id}=video;
    const dispatch=useDispatch();
    const getMovieVideos=async()=>{
        const respone=await fetch('https://api.themoviedb.org/3/movie/'+id +'/videos?language=en-US', API_OPTIONS);
        const data=await respone.json();
        
        const filterDataOfTrailer=data.results.filter(video=>video.type==='Trailer')
    
        const trailer=filterDataOfTrailer.length?filterDataOfTrailer[0]:filterDataOfTrailer.results[0];
        dispatch(addTrailerVideo(trailer));
      }
    
  
      useEffect(()=>{
        getMovieVideos();
      },[])
}


export default useMovieTrailer;