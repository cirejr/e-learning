'use client';

import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { UserForm } from './admin/user-form';
import { Icons } from '../ui/icons';
import { User } from '@/lib/definitions/user';
import { Course } from '@/lib/definitions/course';
import CourseCreationForm from './create-course-form';

type ModalFormProps = {
  user?: User;
  course?: Course;
  formType: 'user' | 'course';
  teachers?: User[]
};

export default function ModalForm({
  user,
  course,
  formType,
  teachers = []
}: ModalFormProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant={formType === 'user' && user ? 'ghost' : 'default'}
          className={`${user && 'w-full flex justify-start px-2 font-normal'}`}
        >
          {!user && !course && <Icons.plus className='mr-2' />}
          Ajouter un {formType == 'user' ? 'utilisateur' : 'cours'}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-h-[800px] overflow-scroll py-7'>
        <AlertDialogHeader>
          <div className='flex items-center justify-between'>
            <AlertDialogTitle>
            Ajouter un {formType == 'user' ? 'utilisateur' : 'cours'}</AlertDialogTitle>
            <Button
              variant='ghost'
              className='hover:bg-red-200 hover:text-red-500'
              onClick={() => setIsOpen(false)}
            >
              x
            </Button>
          </div>
          {formType === 'user' ? (
            <UserForm user={user} setIsOpen={setIsOpen} />
          ) : (
            <CourseCreationForm teachers={teachers} course={course} />
          )}
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
