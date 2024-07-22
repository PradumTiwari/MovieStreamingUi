import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  const popularMovies=useSelector(store=>store.movies?.popularMovies);
  const topRated=useSelector(store=>store.movies?.topRatedMovies);
  const upComingMovies=useSelector(store=>store.movies?.upcomingMovies);
  console.log("Upcoming",upComingMovies);
  console.log("Top Rated",topRated);
  console.log("Now Plaing",movies);
  console.log("Popular Movies",popularMovies);
  return (
    <div className='bg-black '>
      <div className='-mt-[350px] pl-12 relative z-20 '>
     {movies&& <MovieList title={"Now Playing"} movies={movies}/>}
     {topRated&& <MovieList title={"Top Rated Movies"} movies={topRated}/>}
     {popularMovies&& <MovieList title={"Popular Movies"} movies={popularMovies}/>}
     {movies&& <MovieList title={"Upcoming Movies"} movies={upComingMovies}/>}
    </div>
    </div>
  )
}

export default SecondaryContainer