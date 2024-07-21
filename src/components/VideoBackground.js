import React, { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import {useSelector} from 'react-redux';
const VideoBackground = ({video}) => {
  const trailer=useSelector(store=>store.movies?.trailerVideo);
    
  useMovieTrailer({video});
  
  
    
  return (
    <div className='w-screen'>
      <iframe 
  className='w-screen aspect-video'
  src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3`} 
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin" 
  allowFullScreen
></iframe>
    </div>
  )
}

export default VideoBackground