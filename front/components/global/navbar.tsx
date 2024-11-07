'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { User } from '@supabase/supabase-js';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Courses', href: '/courses' },
  { name: 'Forum', href: '/forum' },
  /* { name: 'Admissions', href: '/admissions' }, */
  { name: 'Contact', href: '/contact' },
];

export default function Navbar({ user }: { user: User }) {
  const pathname = usePathname();
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <Camera className='h-8 w-8' />
          <span className='text-2xl font-bold'>CFTS</span>
        </Link>
        <nav className='flex flex-1 items-center justify-center space-x-6'>
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
        {user ? (
          <Button asChild>
            <Link href='/dashboard'>Dashboard</Link>
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
      </div>
    </header>
  );
}
