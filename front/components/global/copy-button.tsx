'use client';

import React from 'react';
import { Button } from '../ui/button';
import { Check, Copy } from 'lucide-react';

export default function CopyButton({ command }: { command: string }) {
  const [copied, setCopied] = React.useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  return (
    <div className='flex items-center space-x-2 text-muted-foreground'>
      <p className='text-sm'>{command}</p>
      <Button
        variant='ghost'
        size='icon'
        onClick={copyToClipboard}
        className='text-xs text-zinc-400 hover:bg-background hover:text-white focus:outline-none md:text-base'
      >
        {copied ? <Check className='h-4 w-4' /> : <Copy className='h-4 w-4' />}
        <span className='sr-only'>Copier</span>
      </Button>
    </div>
  );
}
