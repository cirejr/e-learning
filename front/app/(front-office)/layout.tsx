import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import GlobalNavbar from '@/components/global/global-navbar';
import Footer from '@/components/global/footer';

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
      <GlobalNavbar />
      {children}
      <Footer />
    </main>
  );
}
