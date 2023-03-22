import React from 'react';
import ProgressCircle from '../../baseUI/progress-circle/ProgressCircle';

const getPosterURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
}

const MovieCard = ({poster_path, name, first_air_date, title, release_date, vote_average }) => {
  return (
    <div className='flex flex-col'>
      <div className='relative'>
        <img src={getPosterURL(poster_path)} alt={name || title} className='w-[150px] h-[225px] shadow-sm rounded-lg hover:shadow-md hover:shadow-black transition-all duration-75 cursor-pointer' />
        <div className='absolute bottom-[-1.2rem] left-2'>
          <ProgressCircle percent={vote_average * 10}/>
        </div>
      </div>
      <div className='flex flex-col pt-6 px-3 w-[150px]'>
        <h3 className='font-bold text-gray-200 hover:text-[#25dae7] transition-all duration-75 hover:cursor-pointer '>{name || title}</h3>
        <p className='font-normal text-xs'>{first_air_date || release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;