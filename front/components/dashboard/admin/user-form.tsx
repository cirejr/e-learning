'use client';

import React, { useRef } from 'react';
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
import { createUser, signUp, updateUser } from '@/lib/actions/user';
import { userSchema } from '@/lib/schemas/user';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/ui/icons';
import { SheetClose } from '@/components/ui/sheet';

export function UserForm({ user, setIsOpen }: { user?: any; setIsOpen?: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: user?.email || undefined,
      first_name: user?.first_name || undefined,
      last_name: user?.last_name || undefined,
      role: user?.role || 'student',
    },
  });

  async function onSubmit(userData: z.infer<typeof userSchema>) {
    setIsLoading(true);
    try {
      let res;
      if (user) {
        res = await updateUser(user.id, userData);
      } else {
        res = await createUser(userData);
      }
      console.log('res to auth', res);
      if (res.success) {
        toast.success(
          user ? 'informations mis à jour' : 'Utilisateur créé avec succès'
        );
        router.push('/admin/users');
      } else if (res.error) {
        //@ts-ignore
        console.error(res.error.message as string);
      }
    } catch (error) {
      toast.error(
        user
          ? 'Une erreur est survenue lors de la mis à jour des informations'
          : "Une erreur est survenue lors de la création de l'utilisateur"
      );
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-auto space-y-6 px-6'
      >
        <FormField
          control={form.control}
          name='first_name'
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
          name='last_name'
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
          {user ? 'Modifier' : 'Créer'}
        </Button>
        <SheetClose asChild>
          <button ref={closeRef} style={{ display: 'none' }} />
        </SheetClose>
      </form>
    </Form>
  );
}
