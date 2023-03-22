import React, { forwardRef } from 'react';

const SearchInput =forwardRef((props, ref) => {
  return (
      <input 
        {...props} ref={ref}
        className='w-96 bg-transparent px-4 outline-none text-gray-500 font-semibold'
        type='text'
        placeholder='Search for a movie, tv show, person.....'
      />
  );
});

export default SearchInput;