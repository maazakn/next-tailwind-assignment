import Image from 'next/image';
import Highlighted from '@/components/Highlighted';
import Separater from '@/components/Separater';
import ImageBox from '@/components/ImageBox';
import {
  bgHero,
  pencil,
  camera,
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
  file,
  video,
} from '@/assets';
import Step from '@/components/steps/Step';
import BoxedStep from '@/components/steps/BoxedStep';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import Input from '@/components/input';
import Textarea from '@/components/textarea';
import Checkbox from '@/components/checkbox';

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

const steps = [
  {
    stepText: 'Step1',
    title: '사전 논의',
    descrip:
      '영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의',
  },
  {
    stepText: 'Step2',
    title: '영상 기획',
    descrip:
      '스토리보드 전달&수정을 통한 기획안 확정 가상인간 발화용 스크립트 작성과 프롬프팅',
  },
  {
    stepText: 'Step3',
    title: '영상 생성 ',
    descrip:
      '작성한 스크립트로 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성',
  },
  {
    stepText: 'Step4',
    title: '영상 편집',
    descrip:
      '영상 전문가의 편집, 디자인, 후반 작업 단계 필요시 실사 촬영 병행하여 편집본 완성',
  },
  {
    stepText: 'Step5',
    title: '최종 납품',
    descrip:
      '고객 피드백 반영하여 최종본 완성 및 납품 * 영상 수정 무료 1회 제공',
  },
];

const boxedSteps = [
  {
    src: file,
    stepText: 'Step1',
    title: '제작 안내',
    descrip: '영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내',
  },
  {
    src: file,
    stepText: 'Step2',
    title: '영상 생성',
    descrip:
      '스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성',
  },
  {
    src: video,
    stepText: 'Step3',
    title: '편집 및 납품',
    descrip: '편집 진행, 12~48시간 내 최종본 완성 및 납품',
  },
];

export default function Home() {
  return (
    <div aria-label='home-page' className='w-full h-full'>
      <div
        className='w-full h-2/4 lg:h-4/5 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('${bgHero?.src}')`,
        }}
      />

      <div className='w-full py-16 lg:py-20 px-4'>
        <div className='lg:w-[844px] mx-auto flex items-center flex-col'>
          <h3 className='font-pretendard font-bold text-2xl bg-gradient-to-br from-[#ff4d82] to-[#ffba53] bg-clip-text text-transparent'>
            영상 제작소
          </h3>
          <p className='text-white font-pretendard text-2xl lg:text-4xl font-extralight mt-2 lg:mt-5 text-center'>
            당장 내일 <span className='font-semibold'>‘고품질 맞춤 영상’</span>
            을 받아보세요
          </p>

          <div className='flex gap-0 my-10 lg:my-14'>
            {highlights.map((item, k) => (
              <Highlighted key={k} {...item} />
            ))}
          </div>

          <div className='space-y-6 text-center'>
            <p className='text-white font-pretendard text-lg lg:text-4xl font-bold'>
              AI VIDEO ON YOUR DEMAND
            </p>

            <div className='opacity-60 text-white font-pretendard font-normal lg:font-bold text-base lg:text-xl w-full lg:w-4/5 mx-auto space-y-7'>
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

      <div className='w-full py-16 lg:py-20'>
        <div className='flex justify-center'>
          <p className='text-white font-pretendard text-xl lg:text-5xl font-bold relative'>
            PREVIOUS WORKS
            <span className='size-2 lg:size-4 bg-gradient-to-br from-[#ff4d82] to-[#ffba53] rounded-full absolute -top-1 -left-2 lg:-top-4 lg:-left-5' />
          </p>
        </div>

        <div className='mt-8 lg:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(100px,1fr)] lg:auto-rows-[minmax(270px,1fr)]'>
          {portfolioItems.map((itm, k) => (
            <ImageBox key={k} {...itm} />
          ))}
        </div>
      </div>

      <div className='w-full py-10 lg:py-20 px-4'>
        <div className='flex justify-center'>
          <p className='text-white font-pretendard text-xl lg:text-5xl font-bold relative'>
            MAKING PROCESS
            <span className='size-2 lg:size-4 bg-gradient-to-br from-[#ff4d82] to-[#ffba53] rounded-full absolute -top-1 -left-2 lg:-top-4 lg:-left-5' />
            <Image
              src={pencil}
              alt='pencil'
              height={30}
              width={30}
              className='absolute -top-24 -right-5 lg:inline hidden'
            />
            <Image
              src={camera}
              alt='camera'
              height={45}
              width={56}
              className='absolute -top-5 -right-4 lg:inline hidden'
            />
          </p>
        </div>

        <div className='w-full lg:w-11/12 flex-col lg:flex-row my-4 lg:my-14 mx-auto flex gap-6'>
          <div className='w-full lg:w-2/4 lg:bg-[#141414] rounded-[20px] lg:border border-white/15 lg:py-10 lg:px-14 flex flex-col items-center'>
            <span className='text-white font-pretendard font-bold text-[22px] lg:text-[44px]'>
              일반 제작
            </span>

            <span className='text-white font-pretendard font-normal text-base lg:text-2xl opacity-80'>
              제작 시작 후 5영업일 이내
            </span>

            <div className='mt-4 lg:mt-8 w-full space-y-4 lg:space-y-6'>
              {steps.map((step, k) => (
                <Step key={k} {...step} isLast={steps?.length - 1 === k} />
              ))}
            </div>
          </div>

          <div className='w-full lg:w-2/4 lg:bg-gradient-to-br from-[#ff4d82] to-[#ffba53] relative rounded-[20px] lg:before:absolute lg:before:bg-black before:inset-[3px_4px_4px] before:content-[""] before:size-auto before:rounded-[20px]'>
            <div className='flex flex-col items-center py-4 lg:py-10 lg:px-14 relative'>
              <h3 className='font-pretendard font-bold text-[28px] lg:text-[44px] bg-gradient-to-br from-[#ff4d82] to-[#ffba53] bg-clip-text text-transparent'>
                Ploonet Quickserve™
              </h3>

              <span className='lg:text-white font-pretendard font-normal text-base lg:text-2xl text-[#DDDDDD]'>
                제작 시작 후 12~48시간 이내
              </span>

              <div className='py-8 lg:py-0 px-6 lg:px-0 mt-10 w-full space-y-4 lg:space-y-6 bg-gradient-to-br from-[#ff4d82] to-[#ffba53] lg:from-transparent relative rounded-[20px]'>
                <div className='block lg:hidden absolute bg-black inset-[2px_3px_3px] size-auto rounded-[20px]' />
                {boxedSteps.map((step, k) => (
                  <BoxedStep
                    key={k}
                    {...step}
                    isLast={boxedSteps?.length - 1 === k}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className='font-pretendard text-[10px] lg:text-sm font-normal text-center w-5/6 lg:w-3/6 mx-auto text-[#999999]'>
          * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등
          전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
          <br className='lg:hidden' /> <br className='lg:hidden' /> ** 영상의
          길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며,
          클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>

      <div className='w-full py-10 lg:py-20 px-4'>
        <div className='w-full lg:w-[844px] mx-auto flex items-center flex-col'>
          <h3 className='font-pretendard font-bold text-lg lg:text-2xl bg-gradient-to-br from-[#ff4d82] to-[#ffba53] bg-clip-text text-transparent'>
            영상 제작 문의
          </h3>
          <p className='text-white font-pretendard text-2xl lg:text-[44px] font-extralight mt-2 lg:mt-5 text-center'>
            <span className='font-semibold'>영상 제작이 필요하다면, </span>
            지금 문의 주세요.
          </p>

          <p className='text-white font-pretendard text-base font-normal lg:text-2xl lg:font-bold my-5 lg:my-8 opacity-60 lg:w-3/4 text-center'>
            여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시
            연락 드리겠습니다.
          </p>

          <p className='font-pretendard text-base font-bold text-[#666666] text-center lg:hidden'>
            Email
          </p>

          <p className='font-pretendard text-base lg:text-lg font-normal lg:text-[#666666] text-center'>
            henry.lim@saltlux.com
          </p>

          <form className='w-full space-y-3 lg:space-y-4 my-8 lg:my-14'>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='영상 유형 선택' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Option 1'>Option 1</SelectItem>
                <SelectItem value='Option 2'>Option 2</SelectItem>
                <SelectItem value='Option 3'>Option 3</SelectItem>
                <SelectItem value='Option 4'>Option 4</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder='연락 받으실 담당자 성함' />
            <Input placeholder='이메일' />
            <Input placeholder='휴대폰 번호' />

            <Textarea
              resize='none'
              rows={6}
              className='resize-none'
              placeholder='비디오 콘텐츠에 대한 메시지를 작성하세요'
            />

            <Input placeholder='참고 영상' />
          </form>

          <p className='text-[#ff6c50] self-start text-xs lg:text-base font-normal font-pretendard mt-6 lg:mt-0 ml-1 lg:ml-3'>
            * 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를
            적어주시면 더 정확히 안내해드리겠습니다.
          </p>

          <div className='mt-10 flex gap-y-8 lg:justify-between lg:items-center w-full flex-col lg:flex-row'>
            <div className='flex items-center gap-2 lg:gap-4'>
              <Checkbox id='terms' />
              <label
                htmlFor='terms'
                className='cursor-pointer text-sm lg:text-base font-pretendard font-normal opacity-60'>
                <span className='underline'>개인정보처리방침</span>에 동의합니다
              </label>
            </div>

            <button className='bg-[#FF6D51] text-base lg:text-xl font-pretendard font-bold py-3 px-4 rounded-[8px]'>
              문의 보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
