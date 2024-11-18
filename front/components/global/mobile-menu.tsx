'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { cn } from '@/lib/utils';

export default function MobileMenu({
  user,
  navigation,
}: {
  user: User;
  navigation: any[];
}) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>
          <Menu className='h-6 w-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>CFTS</SheetTitle>
        </SheetHeader>
        <nav className='my-3 flex flex-1 flex-col items-center justify-center space-y-4'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <SheetFooter>
          {user ? (
            <Button asChild>
              <Link className='' href='/dashboard'>
                Dashboard
              </Link>
            </Button>
          ) : (
            <div className='flex items-center space-x-4'>
              <Button variant='outline' asChild>
                <Link href='/login'>Log in</Link>
              </Button>
              <Button asChild>
                <Link href='/apply'>Apply Now</Link>
              </Button>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
