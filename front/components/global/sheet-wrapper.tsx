import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '../ui/separator';

export default function SheetWrapper({
  title,
  triggerTitle,
  children,
}: {
  title: string;
  triggerTitle: string;
  children: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>{triggerTitle}</Button>
      </SheetTrigger>
      <SheetContent className='min-w-[600px] px-0'>
        <SheetHeader className='px-6 pt-0'>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <Separator className='my-4 w-full' />
        {children}
      </SheetContent>
    </Sheet>
  );
}
