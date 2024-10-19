'use client';

import Link from 'next/link';
import { ChevronRight, Search, type LucideIcon } from 'lucide-react';

import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Group, Menu } from '@/lib/menu-list';

export function NavMain({
  className,
  items,
}: {
  items: Menu[];
} & React.ComponentProps<'ul'>) {
  return (
    <ul className={cn('grid gap-0.5', className)}>
      {items.map((item) =>
        item.submenus.length > 0 ? (
          <Collapsible key={item.label} asChild defaultOpen={item.active}>
            <li key={item.label}>
              <div className='relative flex items-center'>
                <Link
                  href={item.href}
                  className='flex h-8 min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2'
                >
                  <item.icon className='h-4 w-4 shrink-0' />
                  <div className='flex flex-1 overflow-hidden'>
                    <div className='line-clamp-1 pr-6'>{item.label}</div>
                  </div>
                </Link>
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
              <li key={item.label}>
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

function SidebarSearch({
  results,
}: {
  results: {
    title: string;
    teaser: string;
    url: string;
  }[];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className='flex h-8 w-full min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>
          <Search className='h-4 w-4 shrink-0' />
          <div className='flex flex-1 overflow-hidden'>
            <div className='line-clamp-1 pr-6'>Search</div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <form>
            <div className='border-b p-2.5'>
              <Input
                type='search'
                placeholder='Search...'
                className='h-8 rounded-sm shadow-none focus-visible:ring-0'
              />
            </div>
          </form>
          <div className='grid gap-1 p-1.5 text-sm'>
            {results.map((result) => (
              <Link
                href={result.url}
                key={result.title}
                className='rounded-md p-2.5 outline-none ring-ring hover:bg-accent hover:text-accent-foreground focus-visible:ring-2'
              >
                <div className='font-medium'>{result.title}</div>
                <div className='line-clamp-2 text-muted-foreground'>
                  {result.teaser}
                </div>
              </Link>
            ))}
            <Separator className='my-1.5' />
            <Link
              href='#'
              className='rounded-md px-2.5 py-1 text-muted-foreground outline-none ring-ring hover:text-foreground focus-visible:ring-2'
            >
              See all results
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Popover>
      <PopoverTrigger className='flex h-8 w-full min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'>
        <Search className='h-4 w-4 shrink-0' />
        <div className='flex flex-1 overflow-hidden'>
          <div className='line-clamp-1 pr-6'>Search</div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        side='right'
        align='start'
        sideOffset={4}
        className='w-96 p-0'
      >
        <form>
          <div className='border-b p-2.5'>
            <Input
              type='search'
              placeholder='Search...'
              className='h-8 rounded-sm shadow-none focus-visible:ring-0'
            />
          </div>
        </form>
        <div className='grid gap-1 p-1.5 text-sm'>
          {results.map((result) => (
            <Link
              href={result.url}
              key={result.title}
              className='rounded-md p-2.5 outline-none ring-ring hover:bg-accent hover:text-accent-foreground focus-visible:ring-2'
            >
              <div className='font-medium'>{result.title}</div>
              <div className='line-clamp-2 text-muted-foreground'>
                {result.teaser}
              </div>
            </Link>
          ))}
          <Separator className='my-1.5' />
          <Link
            href='#'
            className='rounded-md px-2.5 py-1 text-muted-foreground outline-none ring-ring hover:text-foreground focus-visible:ring-2'
          >
            See all results
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
