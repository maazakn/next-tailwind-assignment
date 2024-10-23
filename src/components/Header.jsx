import React from 'react';
import { logo, globe, humberger } from '@/assets';
import Image from 'next/image';

const Header = () => {
  const allRoutes = [
    { name: '스튜디오', isActive: false },
    { name: '워크센터', isActive: false },
    { name: '손비서', isActive: false },
    { name: '메타휴먼', isActive: false },
    { name: '영상제작소', isActive: true },
    { name: '공지사항', isActive: false },
    { name: '제휴문의', isActive: false },
  ];

  return (
    <div className='flex bg-black h-[100px] px-5 lg:px-16 items-center justify-between'>
      <Image
        src={logo}
        alt='logo'
        height={28}
        width={170}
        priority
        className='w-[121px] h-[20px] lg:w-[170px] lg:h-[28px]'
      />

      <div className='lg:flex items-center gap-10 hidden'>
        {allRoutes.map((itm, k) => (
          <div key={k} className='relative w-max flex flex-col items-center'>
            <span className='text-white font-pretendard font-bold text-base flex items-center'>
              {itm?.name}
            </span>

            {itm?.isActive && (
              <span className='w-2 h-2 bg-gradient-to-br from-[#ff4d82] to-[#ffba53] rounded-full absolute top-8' />
            )}
          </div>
        ))}
      </div>

      <Image
        src={humberger}
        alt='humberger'
        height={20}
        width={20}
        className='size-5 lg:hidden'
      />

      <div className='items-center gap-8 lg:flex hidden'>
        <span className='font-pretendard font-bold text-base text-white'>
          로그인
        </span>

        <Image src={globe} alt='globe' height={20} width={40} />
      </div>
    </div>
  );
};

export default Header;
