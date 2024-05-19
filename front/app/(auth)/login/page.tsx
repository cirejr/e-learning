import { Metadata } from 'next';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from './components/user-auth-form';
import { Link } from 'next-view-transitions';

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

      <div className='lg:p-8 flex items-center justify-center h-full'>
        <div className='mx-auto my-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Sign in to your account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to log in
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </>
  );
}
