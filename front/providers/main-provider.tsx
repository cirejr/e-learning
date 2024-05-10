'use client';

import { NextUIProvider } from '@nextui-org/react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
      <ProgressBar
        height='4px'
        color='#5C24D3'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </NextUIProvider>
  );
}
