import React from 'react';
import Switch from '../../baseUI/switch/Switch';

const Section = ({title, children ,...props}) => {
  return (
    <section className='pt-[30px] px-10 relative'>
      <div className='flex items-center gap-5'>
        <h3 className='font-semibold text-2xl'>{title}</h3>
        <Switch {...props} />
      </div>
      <div className='pt-5'>
        {children}
      </div>
    </section>
  );
};

export default Section;