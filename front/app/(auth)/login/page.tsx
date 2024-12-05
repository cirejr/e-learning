import { Metadata } from 'next';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from './components/user-auth-form';
import { Link } from 'next-view-transitions';
import { Label } from '@/components/ui/label';
import CopyButton from '@/components/global/copy-button';

export default function LoginPage() {
  return (
    <>
      {/* <Link
        href='/register'
        className={cn(
          buttonVariants({ variant: 'default' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Register
      </Link> */}

      <div className='col-span-2 flex h-full w-full items-center justify-center bg-slate-900 text-primary-foreground dark lg:p-8'>
        <div className='mx-auto my-auto flex w-full flex-col justify-center space-y-6 px-6 sm:w-[350px] sm:px-0'>
          <div className='flex flex-col space-y-2'>
            <h1 className='text-4xl font-semibold tracking-tight text-white'>
              Bienvenue
            </h1>
            <p className='text-sm text-muted-foreground'>
              Connectez vous à votre compte
            </p>
          </div>
          <UserAuthForm />
          <div className='mt-6 text-muted-foreground'>
            <p className='text-white'>Test Credentials</p>
            <div className='flex items-center gap-2'>
              <Label>Email : </Label>
              <CopyButton command='pierre@curry.com' />
            </div>

            <div className='flex items-center gap-2'>
              <Label>Password : </Label>
              <CopyButton command='ZlExS4gkQ7L4' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
