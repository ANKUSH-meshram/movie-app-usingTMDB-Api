import SearchButton from "../../baseUI/search/SearchButton";
import SearchInput from "../../baseUI/search/SearchInput";
import React, {useRef, useState} from "react";
import Section from "../section/Section";
import MovieList from "../movie/MovieList";



const Banner = () => {
  
  
  const searchInputRef = useRef();

  const handleSearch = () => {
    alert(`You Typed ${searchInputRef.current.value}`);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  const [sectionToggle, setSectionToggle] = useState({
    first: 'On TV',
    second: 'On TV',
    third: 'Today'
  });

  const handleToggledValue = (section, selectedValue) => {
    setSectionToggle(prev => ({
      ...prev,
      [section]: selectedValue
    }))
  }

  // console.log(sectionToggle)

  return (
    <div className='banner'>

      <img src='https://wallpaperaccess.com/full/3988284.jpg' alt='banner' 
        className='w-full h-[90vh] opacity-10 absolute'
      />

      <div className='relative w-full h-[90vh] flex flex-col justify-center items-center'>
        <h3 className='text-7xl text-gray-100 font-bold tracking-wide'>Welcome.</h3>
        <p className='mt-2 text-2xl text-gray-300 font-medium'>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className='mt-10 h-12 flex items-center bg-gray-300 rounded-full'>
          <SearchInput ref={searchInputRef} onKeyDown={handleKeyDown} />
          <div>
            <SearchButton onClick={handleSearch}/>
          </div>
        </div>
      </div>
      <Section 
        title="What's Popular"
        items={["On TV", "In Theatres"]} 
        onToggle={handleToggledValue.bind(null, 'first')}
        isToggled={sectionToggle.first==='On TV'?false:true}
      >
        <MovieList 
          fetch={sectionToggle.first}
        />
      </Section>
    </div>
  );
};

export default Banner;