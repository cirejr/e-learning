'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Icons } from '@/components/ui/icons';

import { toast } from 'sonner';
import { createPost } from '@/lib/actions/forum';
import { ForumTopic } from '@/lib/definitions/forum';
import { forumPostSchema } from './schemas';
import { SheetClose } from '@/components/ui/sheet';

type ForumPost = z.infer<typeof forumPostSchema>;

export default function ForumPostCreation({
  authorId,
  topics,
}: {
  authorId: string;
  topics: ForumTopic[];
}) {
  const [isLoading, setIsLoading] = useState(false);

  const closeRef = useRef<HTMLButtonElement>(null);

  const form = useForm<ForumPost>({
    resolver: zodResolver(forumPostSchema),
    defaultValues: {
      title: '',
      topic_id: '',
      content: '',
    },
  });

  const onSubmit = async (data: ForumPost) => {
    setIsLoading(true);
    try {
      const res = await createPost(data, authorId as string);
      if (res?.error) {
        toast.error(
          'Impossible de publier votre message. Veuillez réessayer.',
          {
            description: res?.error,
          }
        );
        return;
      }
      toast.success('Votre message a été publié avec succès.');
      form.reset();
      closeRef.current?.click();
    } catch (error) {
      console.error('Erreur lors de la création du message:', error);
      toast.error('Impossible de publier votre message. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 px-6'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input
                  placeholder='Entrez le titre de votre message'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='topic_id'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sujet</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Sélectionnez un sujet' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic.id} value={topic.id}>
                      {topic.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contenu</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Écrivez votre message ici'
                  className='min-h-[200px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full' disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className='h-4 w-4 animate-spin' />
          ) : (
            'Publier'
          )}
        </Button>
        <SheetClose asChild>
          <button ref={closeRef} style={{ display: 'none' }} />
        </SheetClose>
      </form>
    </Form>
  );
}
