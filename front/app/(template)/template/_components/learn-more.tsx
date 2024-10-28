import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';

export default function LearnMore({ href }: { href: string }) {
  return (
    <p className='mt-5'>
      <Link
        className='group inline-flex items-center gap-x-1 font-medium underline-offset-4 hover:underline'
        href={href}
      >
        Savoir plus
        <ChevronRightIcon className='h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1' />
      </Link>
    </p>
  );
}
