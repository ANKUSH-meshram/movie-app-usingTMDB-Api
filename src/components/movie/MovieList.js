import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import TMDB from '../../api/TMDB';
import { Request } from '../../api/Request';
import Blur from '../../baseUI/blur/Blur';


const MovieList = ({fetch}) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetching action
    const fetchMovies = async () => {
      const {data} = await TMDB.get(Request[fetch])
      setMovies(data.results)
    }

    fetchMovies();
  },[fetch])

  return (
    <div className='flex pr-10 gap-4 overflow-x-auto'>
      {movies.map((movie, index) => {
        return <MovieCard key={index} {...movie} />
      })}
      <div className='absolute top-0 right-0 w-16 h-full'>
        <Blur />
      </div>
    </div>
  );
};

export default MovieList;