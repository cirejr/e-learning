'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/form-schemas/login';
import { signIn } from '@/auth';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    const { email, password } = data;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const res = await signIn('credentials', formData);

      console.log(res);
    } catch (error) {
      if ((error as Error).message.includes('CredentialsSignin')) {
        return 'CredentialsSignin';
      }
      throw error;
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='name@example.com'
                  type='email'
                  autoCapitalize='none'
                  autoComplete='email'
                  autoCorrect='off'
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id='password'
                  placeholder='password'
                  type='password'
                  autoCapitalize='none'
                  autoComplete='current-password'
                  autoCorrect='off'
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isLoading} className='w-full'>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          Sign In with Email
        </Button>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant='outline'
          type='button'
          disabled={isLoading}
          className='w-full'
        >
          {isLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.gitHub className='mr-2 h-4 w-4' />
          )}{' '}
          GitHub
        </Button>
      </form>
    </Form>
  );
}
