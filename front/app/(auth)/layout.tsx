import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import GlobalNavbar from '@/components/global/global-navbar';
import Footer from '@/components/global/footer';
import RightSide from '@/components/auth/right-side';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={cn(
        'min-h-screen bg-background font-sans antialiased flex',
        fontSans.variable
      )}
    >
      <div className='container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <RightSide />
        {children}
      </div>
    </main>
  );
}
