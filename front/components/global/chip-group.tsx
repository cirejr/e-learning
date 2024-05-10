import { Chip } from '@nextui-org/react';
import React from 'react';
import { Badge } from '../ui/badge';

export default function ChipGroup() {
  return (
    <div className='flex gap-2 mt-10 justify-center items-center w-full'>
      <Badge className='w-[50px] bg-primary h-2 rounded-full hover:bg-primary'></Badge>
      <Badge className='w-1 bg-primary-foreground hover:bg-primary-foreground h-1 rounded-full'></Badge>
      <Badge className='w-1 bg-primary-foreground hover:bg-primary-foreground h-1 rounded-full'></Badge>
    </div>
  );
}
