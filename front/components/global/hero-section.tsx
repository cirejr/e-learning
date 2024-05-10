import { Button } from '@/components/ui/button';
import { Button as NextButton } from '@nextui-org/react';
import {
  BriefcaseIcon,
  FlowerIcon,
  HeartIcon,
  LightbulbIcon,
  MountainSnow,
  SearchIcon,
  SettingsIcon,
} from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <div className='container py-24 lg:py-32'>
        {/* Grid */}
        <div className='grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center relative'>
          <div className='hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20'>
            <svg
              className='w-16 h-auto text-orange-500'
              width={121}
              height={135}
              viewBox='0 0 121 135'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164'
                stroke='currentColor'
                strokeWidth={10}
                strokeLinecap='round'
              />
              <path
                d='M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5'
                stroke='currentColor'
                strokeWidth={10}
                strokeLinecap='round'
              />
              <path
                d='M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874'
                stroke='currentColor'
                strokeWidth={10}
                strokeLinecap='round'
              />
            </svg>
          </div>
          {/* End SVG Element */}
          {/* SVG Element */}
          <div className='hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32'>
            <svg
              className='w-40 h-auto text-cyan-500'
              width={347}
              height={188}
              viewBox='0 0 347 188'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426'
                stroke='currentColor'
                strokeWidth={7}
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              Up Your Skills To Advance Your Career Path
            </h1>
            <p className='mt-3 text-xl text-muted-foreground'>
              Learn UI-UX Design skills with weekend UX . The latest online
              learning system and material that help your knowledge growing.
            </p>
            {/* Buttons */}
            <div className='mt-7 grid gap-3 w-full sm:inline-flex'>
              <Button size={'lg'}>Get started</Button>
              <Button
                variant={'secondary'}
                size={'lg'}
                className='bg-primary-foreground text-primary '
              >
                Get free trial
              </Button>
            </div>
            {/* End Buttons */}

            <div className='mt-10 sm:mt-20 flex gap-2 justify-center'>
              <NextButton variant={'flat'} color='default' radius='sm'>
                <BriefcaseIcon className='flex-shrink-0 w-3 h-auto mr-2' />
                Business Mind
              </NextButton>
              <NextButton variant={'flat'} color='danger' radius='sm'>
                <SettingsIcon className='flex-shrink-0 w-3 h-auto mr-2' />
                Career-Oriented
              </NextButton>
              <NextButton variant={'flat'} radius='sm' color='success'>
                <LightbulbIcon className='flex-shrink-0 w-3 h-auto mr-2' />
                Creative Thinking
              </NextButton>
            </div>
          </div>
          {/* Col */}
          <div className='relative ms-4'>
            <Image
              className='w-full rounded-md'
              src='https://img.freepik.com/photos-gratuite/nature-morte-livres-contre-technologie_23-2150063081.jpg?t=st=1715302404~exp=1715306004~hmac=eb16c9cf6547f9b314a14f327289c8190e961d480a77fd831fea08bcb248ef6c&w=740'
              alt='hero image'
              width={700}
              height={800}
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}

const star = (
  <svg
    className='h-4 w-4'
    width={51}
    height={51}
    viewBox='0 0 51 51'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z'
      fill='currentColor'
    />
  </svg>
);
