'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { login } from '../action';
import { loginSchema } from './schema';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type LoginFormValues = z.infer<typeof loginSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
      const res = await login(formData);
      if (res.success) {
        toast.success('connecté(e)');
        router.push('/admin');
      } else if (res.error)
        toast.error(
          res.error === 'Invalid login credentials'
            ? 'Identifiants de connexion incorrects'
            : res.error
        );
    } catch (error) {
      toast.error('une erreur est survenue veuillez ressayer');
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className={cn('grid gap-6 dark', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-2 space-y-4 text-muted-foreground'>
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              className='text-white bg-slate-800 border border-slate-700'
              {...register('email')}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email.message}</p>
            )}
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='•••••••'
              type='password'
              autoCapitalize='none'
              autoComplete='current-password'
              autoCorrect='off'
              disabled={isLoading}
              className='text-white bg-slate-800 border border-slate-700'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password.message}</p>
            )}
          </div>
          <Button
            disabled={isLoading}
            size='lg'
            className='text-white border-indigo-600/75 border-2 bg-indigo-800 hover:bg-indigo-600 hover:border-indigo-500/75'
          >
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Se connecter
          </Button>
        </div>
      </form>
      {/* <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <Button variant='outline' type='button' disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.gitHub className='mr-2 h-4 w-4' />
        )}{' '}
        GitHub
      </Button> */}
    </div>
  );
}
