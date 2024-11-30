'use client';

import React from 'react';
import { Button } from '../ui/button';
import { LogOutIcon } from 'lucide-react';
import { logout } from '@/data-access/data';
import { useRouter } from 'next/navigation';
import { Icons } from '../ui/icons';

export default function LogoutButton() {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  async function onLogout() {
    setIsLoading(true);
    await logout();
    router.refresh();
  }
  return (
    <Button
      onClick={onLogout}
      variant='outline'
      className='w-full justify-start border-0 pl-2'
    >
      {isLoading ? (
        <Icons.loader className='flex animate-spin items-center' />
      ) : (
        <span className='flex items-center justify-start'>
          <LogOutIcon className='mr-3 h-4 w-4 text-muted-foreground' /> Se
          déconnecter
        </span>
      )}
    </Button>
  );
}
