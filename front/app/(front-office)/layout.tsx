import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import Navbar from '@/components/global/navbar';
import Footer from '@/components/global/footer';
import { getUser } from '@/data-access/data';
import { User } from '@supabase/supabase-js';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = (await getUser()) as User;
  return (
    <main
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}
    >
      <Navbar user={user} />
      {children}
      <Footer />
    </main>
  );
}
