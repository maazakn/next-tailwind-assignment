import React from 'react';

const ImageBox = ({ src, title = 'Previous work' }) => {
  return (
    <div
      className='group relative bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url('${src?.src}')`,
      }}>
      <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-0 size-full bg-black/50 flex items-center justify-center'>
        <span className='text-white font-pretendard text-2xl font-bold'>
          {title}
        </span>
      </div>
    </div>
  );
};

export default ImageBox;
