import React, { useLayoutEffect, useRef, useState } from 'react';

const Switch = ({items, onToggle, isToggled}) => {
  const item1Ref = useRef()
  const item2Ref = useRef()

  const [item1Width, setItem1Width] = useState();
  const [item2Width, setItem2Width] = useState();

  useLayoutEffect(() => {
    setItem1Width(item1Ref.current.offsetWidth)
    setItem2Width(item2Ref.current.offsetWidth)
  },[])

  const activeTextColor = "bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"



  const handleToggle = (selectedItem) => {
    onToggle(selectedItem)
  }

  return (
    <div className='h-8 border-solid border-[#bbb5b5] rounded-full border-[1px] font-semibold flex items-center text-white relative z-[1] hover:cursor-pointer'>
      <div ref={item1Ref} onClick={handleToggle.bind(null, items[0])} className={`py-1 px-5 h-8 rounded-full ${isToggled || activeTextColor}`}>{items[0]}</div>

      <div ref={item2Ref} onClick={() => {handleToggle(items[1])}} className={`py-1 px-5 h-8 rounded-full ${isToggled && activeTextColor}`}>{items[1]}</div>

      <div className='h-8 w-20 bg-gray-900 rounded-full absolute z-[-1] transition-all duration-300 ease-in' 
      style={isToggled ? {
        left:`${item1Width}px`, 
        width:`${item2Width + 2}px`
      }  : {
        left: '0', 
        width: `${item1Width}px`
        } }>
      </div>
    </div>
  );
};

export default Switch;