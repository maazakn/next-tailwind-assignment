import Highlighted from '@/components/Highlighted';
import Separater from '@/components/Separater';
import ImageBox from '@/components/ImageBox';
import {
  bgHero,
  porfolio1,
  porfolio2,
  porfolio3,
  porfolio4,
  porfolio5,
  porfolio6,
  porfolio7,
  porfolio8,
  porfolio9,
  porfolio10,
  porfolio11,
  porfolio12,
} from '@/assets';

const highlights = [
  {
    label: 'Fast',
    exta: 'X2',
  },
  {
    label: 'Quality',
    exta: 'A++',
  },
  {
    label: 'LOW PRICE',
    exta: '1/2',
  },
  {
    label: 'High Tech',
    exta: 'Gen AI',
  },
];

const portfolioItems = [
  {
    src: porfolio1,
    title: 'More Details...',
  },
  {
    src: porfolio2,
    title: 'More Details...',
  },
  {
    src: porfolio3,
    title: 'More Details...',
  },
  {
    src: porfolio4,
    title: 'More Details...',
  },
  {
    src: porfolio5,
    title: 'More Details...',
  },
  {
    src: porfolio6,
    title: 'More Details...',
  },
  {
    src: porfolio7,
    title: 'More Details...',
  },
  {
    src: porfolio8,
    title: 'More Details...',
  },
  {
    src: porfolio9,
    title: 'More Details...',
  },
  {
    src: porfolio10,
    title: 'More Details...',
  },
  {
    src: porfolio11,
    title: 'More Details...',
  },
  {
    src: porfolio12,
    title: 'More Details...',
  },
];

export default function Home() {
  return (
    <div aria-label='home-page' className='w-full h-full'>
      <div
        className='w-full h-4/5 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('${bgHero?.src}')`,
        }}
      />

      <div className='w-full py-20'>
        <div className='w-[844px] mx-auto flex items-center flex-col'>
          <h3 className='font-pretendard font-bold text-2xl bg-gradient-to-br from-[#ff4d82] to-[#ffba53] bg-clip-text text-transparent'>
            영상 제작소
          </h3>
          <p className='text-white font-pretendard text-4xl font-extralight mt-5'>
            당장 내일 <span className='font-semibold'>‘고품질 맞춤 영상’</span>
            을 받아보세요
          </p>

          <div className='flex gap-0 my-14'>
            {highlights.map((item, k) => (
              <Highlighted key={k} {...item} />
            ))}
          </div>

          <div className='space-y-6 text-center'>
            <p className='text-white font-pretendard text-4xl font-bold'>
              AI VIDEO ON YOUR DEMAND
            </p>

            <div className='opacity-60 text-white font-pretendard font-bold text-xl w-4/5 mx-auto space-y-7'>
              <p>
                가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의
                생성 AI 기술에 영상 전문가의 터치를 더해 비용 및 시간은 절감하고
                퀄리티는 보장된 영상을 만듭니다
              </p>

              <p className='w-2/3 mx-auto'>
                {`가격은 절반으로, 속도는 두배로, 품질은 A++! 기업 홍보, 제품
                소개, 교육 및 행사, 정보 및 안내 영상 등 당신이 필요한 '그
                영상'을 플루닛 영상제작소에 맡겨주세요.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separater />

      <div className='w-full py-20'>
        <div className='flex justify-center'>
          <p className='text-white font-pretendard text-5xl font-bold relative'>
            PREVIOUS WORKS
            <span className='size-4 bg-gradient-to-br from-[#ff4d82] to-[#ffba53] rounded-full absolute -top-4 -left-5' />
          </p>
        </div>

        <div className='mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(270px,1fr)]'>
          {portfolioItems.map((itm, k) => (
            <ImageBox key={k} {...itm} />
          ))}
        </div>
      </div>
    </div>
  );
}
