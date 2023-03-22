

const SearchButton = (props) => {

  return (
    <div>
      <button
        {...props}
        className='rounded-full w-28 h-12 bg-[#18ceb4] text-gray-200 font-bold hover:text-gray-700 transition-all duration-150'
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;