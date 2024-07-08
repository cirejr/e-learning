'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { createUser } from '@/lib/actions/user';
import { userSchema } from '@/lib/schemas/user';
import { createClient } from '@/utils/supabase/server';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/ui/icons';

export function UserForm({ user, setIsOpen }: { user?: any; setIsOpen: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: user?.email || undefined,
      firstName: user?.firstName || undefined,
      lastName: user?.lastName || undefined,
      password: user?.password || undefined,
      role: user?.role || 'student',
    },
  });

  async function onSubmit(userData: z.infer<typeof userSchema>) {
    setIsLoading(true);
    console.log('userData', userData);
    try {
      const res = await createUser(userData);
      console.log(res, 'res');
      if (res.success) {
        toast.success('Utilisateur créé avec succès');
        router.push('/admin/users');
      } else if (res.error) {
        //@ts-ignore
        toast.error(res.error.message as string);
      }
    } catch (error) {
      toast.error(
        "Une erreur est survenue lors de la création de l'utilisateur"
      );
    }
    setIsLoading(false);
    setIsOpen(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-auto space-y-6 '
      >
        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Nom' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Prénom' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type='email' placeholder='Email' />
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
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input {...field} type='password' placeholder='Mot de passe' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='role'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir un type d'utilisateur" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='admin'>Administrateur</SelectItem>
                  <SelectItem value='student'>Etudiant</SelectItem>
                  <SelectItem value='teacher'>Professeur</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          {isLoading && <Icons.loader className='mr-2 h-4 w-4 animate-spin' />}
          Créer
        </Button>
      </form>
    </Form>
  );
}
