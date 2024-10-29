'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import { MessageSquare } from 'lucide-react';
import { postComment } from '@/lib/actions/form';
import { toast } from 'sonner';
import { Icons } from '@/components/ui/icons';

export const commentSchema = z.object({
  content: z.string().min(10, {
    message: 'Le commentaire doit faire au moins 10 caractères.',
  }),
});

export default function ReplyForm({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
  });

  async function onSubmit(data: z.infer<typeof commentSchema>) {
    setIsLoading(true);
    try {
      await postComment(data, userId, postId);
      toast.success('Commentaire posté avec succès !');
    } catch (error) {
      toast.error('Erreur lors de la publication du commentaire !');
    } finally {
      form.reset({ content: '' });
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardContent className='p-6'>
        <h3 className='mb-4 text-lg font-semibold'>Laissez un commentaire</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className='min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Write your reply...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>
              <MessageSquare className='mr-2 h-4 w-4' />
              {isLoading ? (
                <Icons.spinner className='h-4 w-4 animate-spin' />
              ) : (
                'Répondre'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
