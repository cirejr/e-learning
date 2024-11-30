'use client';

import React from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
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
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from '@/components/ui/file-upload';
import { Textarea } from '@/components/ui/textarea';
import { User } from '@supabase/supabase-js';
import { CloudUpload, Paperclip } from 'lucide-react';

const profileFormSchema = z.object({
  first_name: z.string({
    required_error: 'Veuillez saisir le nom.',
  }),
  last_name: z.string({
    required_error: 'Veuillez saisir le prénom.',
  }),
  avatar_url: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      })
    )
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function UserProfileForm({ user }: { user: User }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [files, setFiles] = React.useState<File[] | null>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  const defaultValues: Partial<ProfileFormValues> = {
    first_name: user?.user_metadata?.first_name || undefined,
    last_name: user?.user_metadata?.last_name || undefined,
    avatar_url: user?.user_metadata?.avatar_url || undefined,
  };
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  /* const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  }); */

  function onSubmit(data: ProfileFormValues) {
    toast.success('success');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='first_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input
                  placeholder={user?.user_metadata?.first_name}
                  {...field}
                />
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
          name='avatar_url'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image de Couverture</FormLabel>
              <FormControl>
                <FileUploader
                  value={files}
                  onValueChange={setFiles}
                  dropzoneOptions={dropZoneConfig}
                  className='relative rounded-lg bg-background p-2'
                >
                  <FileInput
                    id='fileInput'
                    className='outline-dashed outline-1 outline-slate-500'
                  >
                    <div className='flex w-full flex-col items-center justify-center p-8'>
                      <CloudUpload className='h-10 w-10 text-gray-500' />
                      <p className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
                        <span className='font-semibold'>Click to upload</span>
                        &nbsp; or drag and drop
                      </p>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                  </FileInput>
                  <FileUploaderContent>
                    {files &&
                      files.length > 0 &&
                      files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <Paperclip className='h-4 w-4 stroke-current' />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Update profile</Button>
      </form>
    </Form>
  );
}
