import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 flex w-full justify-between items-center px-10 h-16 bg-[#032541]'>
      <ul className='flex justify-start items-center w-1/2 gap-8 text-gray-300 font-semibold '>
        <NavLink to={'/'}>
          <img className='w-16' src='https://seeklogo.com/images/T/tubi-logo-D945B763B4-seeklogo.com.png' alt='logo' />
        </NavLink>
        <NavLink to={''}>
          <li>Movies</li>
        </NavLink>
        <NavLink to={''}>
        <li>TV Shows</li>
        </NavLink>
        <NavLink to={''}>
        <li>People</li>
        </NavLink>
      </ul>

      <ul className='flex justify-end items-center w-1/2 gap-8 text-gray-300 font-semibold '>
        <NavLink to={''} >
          <li>Login</li>
        </NavLink>
        <NavLink to={''} >
          <li>Join TMDB</li>
        </NavLink>
        <NavLink to={''} >
          <li><BiSearch/></li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;