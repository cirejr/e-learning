'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Newspaper } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Courses', href: '/courses' },
  { name: 'Forum', href: '/forum' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <Newspaper className='h-6 w-6' />
          <span className='font-bold'>JournalismEdu</span>
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
        <div className='flex items-center space-x-4'>
          <Button variant='outline' asChild>
            <Link href='/login'>Log in</Link>
          </Button>
          <Button asChild>
            <Link href='/apply'>Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
