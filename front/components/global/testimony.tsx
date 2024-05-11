import React from 'react';
import SectionWrapper from './section-wrapper';
import { Avatar } from '@nextui-org/react';
import FooterLogo from './footer-logo';
import { AcmeLogo } from './acme-logo';
import ChipGroup from './chip-group';

export default function Testimony() {
  return (
    <section className='bg-slate-100 h-[500px] flex items-center justify-center'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div className='flex items-center'>
            <AcmeLogo width={100} height={100} />
            <p className='font-bold text-6xl'>ACME</p>
          </div>
          <blockquote className='mt-6 border-l-2 pl-6 italic scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            "After all," he said, "everyone enjoys a good joke, so it's only
            fair that they should pay for the privilege."
          </blockquote>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Avatar
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              className='w-20 h-20'
            />
            <p className='font-semibold'>Jacob Jones</p>
            <p className='text-foreground text-sm'>
              Student, National University
            </p>
          </div>
        </div>
        <ChipGroup />
      </div>
    </section>
  );
}
