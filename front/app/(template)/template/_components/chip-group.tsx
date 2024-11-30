import React from 'react';
import { Badge } from '../../../../components/ui/badge';

export default function ChipGroup() {
  return (
    <div className='mt-10 flex w-full items-center justify-center gap-2'>
      <Badge className='h-2 w-[50px] rounded-full bg-primary hover:bg-primary'></Badge>
      <Badge className='h-1 w-1 rounded-full bg-primary-foreground hover:bg-primary-foreground'></Badge>
      <Badge className='h-1 w-1 rounded-full bg-primary-foreground hover:bg-primary-foreground'></Badge>
    </div>
  );
}
