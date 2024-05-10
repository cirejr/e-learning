import React from 'react';
import { AcmeLogo } from './acme-logo';

export default function FooterLogo() {
  return (
    <div className='max-w-[400px] mr-0 md:mr-5'>
      <div className='flex items-center'>
        <AcmeLogo width={100} height={100} />
        <p className='font-bold text-6xl'>ACME</p>
      </div>
      <p>Top learning experiences that create more talent in the world.</p>
    </div>
  );
}
