'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Search, type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Group, Menu } from '@/lib/menu-list';
import { SheetClose } from '@/components/ui/sheet';
import { SidebarContext } from '@/components/ui/sidebar';

export function NavMain({
  className,
  items,
}: {
  items: Menu[];
} & React.ComponentProps<'ul'>) {
  function useSidebar() {
    return React.useContext(SidebarContext);
  }

  const { onOpenChange } = useSidebar();

  return (
    <ul className={cn('grid gap-0.5', className)}>
      {items.map((item) =>
        item.submenus.length > 0 ? (
          <Collapsible key={item.label} asChild defaultOpen={item.active}>
            <li key={item.label}>
              <div className='relative flex items-center'>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className='flex h-8 min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2'
                  >
                    <item.icon className='h-4 w-4 shrink-0' />
                    <div className='flex flex-1 overflow-hidden'>
                      <div className='line-clamp-1 pr-6'>{item.label}</div>
                    </div>
                  </Link>
                </SheetClose>
                <CollapsibleTrigger asChild>
                  <Button
                    variant='ghost'
                    className='absolute right-1 h-6 w-6 rounded-md p-0 ring-ring transition-all focus-visible:ring-2 data-[state=open]:rotate-90'
                  >
                    <ChevronRight className='h-4 w-4 text-muted-foreground' />
                    <span className='sr-only'>Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className='px-4 py-0.5'>
                <ul className='grid border-l px-2'>
                  {item.submenus?.map((subItem) => (
                    <li key={subItem.label}>
                      <Link
                        href={subItem.href}
                        className='flex h-8 min-w-8 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium text-muted-foreground ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2'
                      >
                        <div className='line-clamp-1'>{subItem.label}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </li>
          </Collapsible>
        ) : (
          <li key={item.label}>
            <ul className='grid px-2'>
              <li key={item.label} onClick={() => onOpenChange(false)}>
                <Link
                  href={item.href}
                  className='flex h-8 min-w-8 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2'
                >
                  <div className='line-clamp-1'>{item.label}</div>
                </Link>
              </li>
            </ul>
          </li>
        )
      )}
    </ul>
  );
}
