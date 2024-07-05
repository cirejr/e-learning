import Link from 'next/link';
import React from 'react';

export default function RightSide() {
  return (
    <div className='relative w-full hidden h-full flex-col bg-muted col-span-3 p-10 text-white lg:flex dark:border-r bg-[url("/images/auth-image-2.jpg")] bg-no-repeat bg-cover bg-center dark'>
      <div className='absolute inset-0' />
      <div className='relative z-20 flex items-center text-lg font-medium'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='mr-2 h-6 w-6'
        >
          <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
        </svg>
        <Link href='/'>E-Learning</Link>
      </div>
    </div>
  );
}
