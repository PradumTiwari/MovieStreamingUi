import React, { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import {useSelector} from 'react-redux';
const VideoBackground = ({video}) => {
  const trailer=useSelector(store=>store.movies?.trailerVideo);
    
  useMovieTrailer({video});
  
  
    
  return (
    <div><iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailer?.key} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default VideoBackground