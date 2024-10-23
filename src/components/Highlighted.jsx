import React from 'react';

const Highlighted = ({ label = 'Tilte', exta = 'Extra' }) => {
  return (
    <div className='size-[90px] lg:size-[180px] rounded-full bg-gradient-to-br from-[#ff4d82] to-[#ffba53] overflow-hidden relative'>
      <div
        className='size-auto bg-black absolute rounded-full flex flex-col items-center justify-center'
        style={{ inset: '1.5px 2px 2px' }}>
        <p className='font-pretendard font-bold text-base lg:text-[32px] uppercase bg-gradient-to-br from-[#ff4d82] to-[#ffba53] bg-clip-text text-transparent text-center px-10'>
          {label}
        </p>
        <p className='hidden lg:block opacity-60 font-pretendard font-bold text-2xl bg-gradient-to-br from-[#ff4d82] to-[#ffba53] bg-clip-text text-transparent text-center'>
          {exta}
        </p>
      </div>
    </div>
  );
};

export default Highlighted;
