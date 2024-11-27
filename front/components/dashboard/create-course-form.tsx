'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format, isAfter, isValid } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { courseSchema } from '@/lib/schemas/course';
import { Course } from '@/lib/definitions/course';
import { User } from '@/lib/definitions/user';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { CalendarIcon, Clock } from 'lucide-react';
import { cn, generateCourseCode } from '@/lib/utils';
import { createCourse, updateCourse } from '@/lib/actions/course';

import { DatetimePicker } from '@/components/ui/datetime-picker';
import { CloudUpload, Paperclip } from 'lucide-react';
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from '@/components/ui/file-upload';
import { toast } from 'sonner';
import { Icons } from '../ui/icons';
import { SheetClose } from '../ui/sheet';

type CourseFormData = z.infer<typeof courseSchema>;

export default function CourseCreationForm({
  course,
  teachers,
}: {
  course?: Course;
  teachers: User[];
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [date, setDate] = useState<Date>();
  const [files, setFiles] = useState<File[] | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  const form = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: course?.title ?? '',
      description: course?.description ?? '',
      url: course?.url ?? '',
      start_date: course?.start_date ?? new Date(),
      end_date: course?.end_date ?? new Date(),
      teacher_id: course?.teacher_id ?? '',
    },
  });

  const onSubmit = async (data: CourseFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      let res;
      if (course) {
        res = await updateCourse(course.id as string, data);
      } else {
        res = await createCourse(data);
      }
      if (res.success) {
        toast.success(
          course ? 'Cours mis à jour avec succès' : 'Cours créé avec succès'
        );
      } else if (res.error) {
        //@ts-ignore
        toast.error(res.error.message as string);
      }
    } catch (error) {
      toast.error(
        course
          ? 'Une erreur est survenue lors de la mise à jour du cours'
          : 'Une erreur est survenue lors de la création du cours'
      );
    }
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto max-w-3xl space-y-7 px-6'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder='titre du cours' type='text' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Description du cours'
                  className='resize-none'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lien vidéo</FormLabel>
              <FormControl>
                <Input
                  placeholder='https://meet.google.com/abc-mnop-xyz'
                  type=''
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-6'>
            <FormField
              control={form.control}
              name='start_date'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Date et heure de début</FormLabel>
                  <DatetimePicker
                    {...field}
                    format={[
                      ['months', 'days', 'years'],
                      ['hours', 'minutes', 'am/pm'],
                    ]}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='col-span-6'>
            <FormField
              control={form.control}
              name='end_date'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Date et heure de fin</FormLabel>
                  <DatetimePicker
                    {...field}
                    format={[
                      ['months', 'days', 'years'],
                      ['hours', 'minutes', 'am/pm'],
                    ]}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name='teacher_id'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructeur</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='choisir un instructeur' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {teachers.map((teach) => (
                    <SelectItem
                      key={teach.id}
                      className='capitalize'
                      id={teach.id}
                      value={teach.id}
                    >{`${teach.first_name} ${teach.last_name}`}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='program_id'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Programme</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='choisir un programme' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='m@example.com'>m@example.com</SelectItem>
                  <SelectItem value='m@google.com'>m@google.com</SelectItem>
                  <SelectItem value='m@support.com'>m@support.com</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='thumbnail_url'
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
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? (
            <Icons.loader className='animate-spin' />
          ) : (
            'Create Course'
          )}
        </Button>
        <SheetClose asChild>
          <button ref={closeRef} style={{ display: 'none' }} />
        </SheetClose>
      </form>
    </Form>
  );
}
