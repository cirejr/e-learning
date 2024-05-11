import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { Providers } from '@/providers/main-provider';
import { ViewTransitions } from 'next-view-transitions';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'E-Learning',
  description: 'The best online school website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
