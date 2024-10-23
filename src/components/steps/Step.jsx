import React from 'react';

const Step = ({
  stepText = 'Step1',
  title = 'Title',
  descrip = 'Description',
  isLast = false,
}) => {
  return (
    <div className='relative w-full'>
      <div className='w-full bg-[#141414] rounded-2xl lg:rounded-full border border-white/20 flex gap-6 lg:gap-10 px-7 lg:px-10 py-3 lg:py-4 items-center relative z-10'>
        <div className='lg:min-w-28'>
          <p className='text-xs lg:text-base font-normal font-pretendard uppercase text-[#ff7e7e]'>
            {stepText}
          </p>
          <p className='text-lg lg:text-xl font-bold font-pretendard'>
            {title}
          </p>
        </div>

        <p className='flex-1 text-sm lg:text-base font-normal font-pretendard text-[#AAAAAA]'>
          {descrip}
        </p>
      </div>

      {!isLast && (
        <div className='w-[20px] h-[13px] bg-[#444444] absolute left-[45%] -bottom-1 rotate-45' />
      )}
    </div>
  );
};

export default Step;
