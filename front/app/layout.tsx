import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { Providers } from '@/providers/main-provider';
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'CFTS',
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
        <meta property='og:image' content='/opengraph-image.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta name='twitter:image' content='/twitter-image.png' />
        <meta name='twitter:image:type' content='image/png' />
        <meta name='twitter:image:width' content='1200' />
        <meta name='twitter:image:height' content='630' />

        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <Providers>{children}</Providers>
          <Toaster
            position='top-right'
            className='font-sans text-xl font-normal'
          />
        </body>
      </html>
    </ViewTransitions>
  );
}
