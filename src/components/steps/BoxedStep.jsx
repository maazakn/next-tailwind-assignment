import React from 'react';
import Image from 'next/image';

const BoxedStep = ({
  src,
  stepText = 'Step1',
  title = 'Title',
  descrip = 'Description',
  isLast = false,
}) => {
  return (
    <div className='w-full flex gap-5 lg:gap-6 items-center pb-4 lg:pb-10 relative'>
      <div className='bg-gradient-to-br from-[#ff4d82] to-[#ffba53] rounded-[19px] px-7 py-5 lg:px-10 lg:py-6 flex flex-col items-center gap-1 lg:gap-4'>
        <p className='text-xs lg:text-lg font-normal font-pretendard uppercase'>
          {stepText}
        </p>
        <Image
          src={src}
          alt='image'
          height={24}
          width={24}
          className='size-6'
        />
      </div>

      <div className='lg:space-y-3 relative flex-1'>
        <p className='text-lg lg:text-2xl font-bold font-pretendard'>{title}</p>
        <p className='text-sm lg:text-lg font-medium font-pretendard text-[#CCCCCC] lg:w-5/6'>
          {descrip}
        </p>

        {!isLast && (
          <div className='bg-white/15 w-full h-px absolute -bottom-6 lg:-bottom-10' />
        )}
      </div>
    </div>
  );
};

export default BoxedStep;
