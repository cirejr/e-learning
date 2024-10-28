import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import Footer from '@/app/(template)/template/_components/footer';
import Navbar from '@/components/global/navbar';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
