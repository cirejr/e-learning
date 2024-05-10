import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';
import ChipGroup from './chip-group';

export default function SectionWrapper({
  title,
  headTitle,
  description,
  className,
  children,
}: {
  title?: string;
  headTitle?: string;
  description?: string;
  className?: ClassValue;
  children: React.ReactNode;
}) {
  return (
    <section className='container pt-24 w-full p-6'>
      <div
        className={cn(
          'w-full flex flex-col gap-3 items-center justify-center mb-6',
          className
        )}
      >
        <p className='text-sm text-primary font-semibold'>{title}</p>
        <p className='text-3xl font-bold'>{headTitle}</p>
        <p className='text-muted-foreground text-xl'>{description}</p>
      </div>
      {children}
      <ChipGroup />
    </section>
  );
}
