import React from 'react';
import SectionWrapper from '@/app/(template)/template/_components/section-wrapper';
import { Avatar } from '@nextui-org/react';
import { AcmeLogo } from '@/app/(template)/template/_components/acme-logo';
import ChipGroup from '@/app/(template)/template/_components/chip-group';

export default function Testimony() {
  return (
    <section className='flex h-[500px] items-center justify-center bg-slate-100'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <div className='flex items-center'>
            <AcmeLogo width={100} height={100} />
            <p className='text-6xl font-bold'>ACME</p>
          </div>
          <blockquote className='mt-6 scroll-m-20 border-l-2 pb-2 pl-6 text-3xl font-semibold italic tracking-tight first:mt-0'>
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
            so it&apos;s only fair that they should pay for the privilege.&quot;
          </blockquote>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Avatar
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              className='h-20 w-20'
            />
            <p className='font-semibold'>Jacob Jones</p>
            <p className='text-sm text-foreground'>
              Student, National University
            </p>
          </div>
        </div>
        <ChipGroup />
      </div>
    </section>
  );
}
